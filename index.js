require("dotenv").config();
const holidays = require("./holidays");
const { Client, Intents } = require("discord.js");
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});
const GUILD_ID = process.env.DISCORD_GUILD;
const TOKEN = process.env.DISCORD_TOKEN;

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
  const guild = client.guilds.cache.get(GUILD_ID);
});

client.on("messageCreate", async (message) => {
  // list all available commands to the user
  if (message.content === "$commands") {
    let commands = "Commands:\n";
    for (const holiday in holidays.holidays) {
      commands += holiday + "\n";
    }
    message.channel.send(commands);
  }

  if (message.content in holidays.holidays) {
    try {
      // change server picture and name
      const holiday = holidays.holidays[message.content];
      await message.guild.setIcon(`./img/${holiday.serverPicture}`);
      await message.guild.setName(holiday.serverName);
      message.channel.send("Successfully changed guild name and icon!");

      // send a message with role colors if the holiday object includes them
      if (holiday.memberOne && holiday.memberTwo) {
        message.channel.send(
          `Change the following nicknames and role colors for the full effect:\n${holiday.memberOne}\n${holiday.memberTwo}`
        );
      }
    } catch {
      message.channel.send(
        "There was an error setting the guild name and icon!"
      );
    }
  }
});

client.login(TOKEN);
