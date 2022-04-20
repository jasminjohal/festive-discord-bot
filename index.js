require("dotenv").config();
const { Client, Intents } = require("discord.js");
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});
const GUILD_ID = process.env.DISCORD_GUILD;
const TOKEN = process.env.DISCORD_TOKEN;

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
  const guild = client.guilds.cache.get(GUILD_ID);
  if (guild) {
    commands = guild.commands;
  } else {
    commands = client.application?.commands;
  }

  commands?.create({
    name: "ping",
    description: "Replies with pong.",
  });
});

client.on("message", async (message) => {
  if (message.content == "easter") {
    try {
      await message.guild.setIcon("./img/cali_easter.jpg");
      await message.guild.setName("Happy Jykes Easter");
      message.channel.send("Successfully changed guild name and icon.");
    } catch {
      message.channel.send(
        "There was an error setting the guild name and icon!"
      );
    }
  }
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) return;

  if (interaction.commandName === "ping") {
    await interaction.reply("Pong!");
  }
});

client.login(TOKEN);
