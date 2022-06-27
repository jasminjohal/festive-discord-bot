const roleColors = require("./roleColors");
require("dotenv").config();
const { Client, Intents } = require("discord.js");
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});
const GUILD_ID = process.env.DISCORD_GUILD;
const TOKEN = process.env.DISCORD_TOKEN;

// nicknames of the two members in the server
const jynxName = "Jynx";
const nootName = "Noobert";

/* each key is a command and the corresponding value is what the 
server picture and server name will be after using the command. some commands
will also output recommended role colors */
const holidays = {
  $default_bot: {
    serverPicture: "robot.jpg",
    serverName: "Bot Testing",
  },
  $default_jykes: {
    serverPicture: "cali.jpg",
    serverName: "Jykes",
  },
  $valentines_day: {
    serverPicture: "cali_valentine.jpg",
    serverName: "Happy Valenjykes Day ❤️",
    noot: `${nootName} 💞 | ${roleColors.roleColors.discordRed}`,
    jynx: `${jynxName} 💖 | ${roleColors.roleColors.lightPink}`,
  },
  $st_patricks: {
    serverPicture: "st_cali.jpg",
    serverName: "Happy St. Jykes Day ☘️",
    vc_name: "lookin' for gold",
    noot: `${nootName} 🌈 | ${roleColors.roleColors.discordGreen}`,
    jynx: `${jynxName} 🎩 | ${roleColors.roleColors.discordYellow}`,
  },
  $easter: {
    serverPicture: "cali_easter.jpg",
    serverName: "Happy Jykes Easter 🐰",
    noot: `${nootName} 🐇 | ${roleColors.roleColors.cyan}`,
    jynx: `${jynxName} 🌸 | ${roleColors.roleColors.lightPink}`,
  },
  $cinco_de_mayo: {
    serverPicture: "cinco_de_cali.jpg",
    serverName: "Feliz Cinco De Jykes 🌵",
    noot: `${nootName} 🌮 | ${roleColors.roleColors.discordYellow}`,
    jynx: `${jynxName} 🥑 | ${roleColors.roleColors.discordRed}`,
  },
  $birthday: {
    serverPicture: "cali_birthday.png",
    serverName: "Happy Jykesday 🎂",
    noot: `${nootName} 🎉 | ${roleColors.roleColors.discordGreen}`,
    jynx: `${jynxName} 🎈 | ${roleColors.roleColors.lightPink}`,
  },
  $halloween: {
    serverPicture: "cali_halloween.png",
    serverName: "Happy Jykesoween 🎃",
    noot: `${nootName} 🕸️ | ${roleColors.roleColors.discordOrange}`,
    jynx: `${jynxName} 🦇 | ${roleColors.roleColors.black}`,
  },
  $thanksgiving: {
    serverPicture: "cali_thanksgiving.png",
    serverName: "Happy Jykesgiving 🦃",
    noot: `${nootName} 🥔 | ${roleColors.roleColors.brown}`,
    jynx: `${jynxName} 🍁 | ${roleColors.roleColors.discordRed}`,
  },
  $christmas: {
    serverPicture: "santa_cali.png",
    serverName: "Merry Jykesmas 🎅",
    noot: `${nootName} 🎄 | ${roleColors.roleColors.discordGreen}`,
    jynx: `${jynxName} ☃️ | ${roleColors.roleColors.discordRed}`,
  },
  $new_year: {
    serverPicture: "cali_new_year.png",
    serverName: "Happy New Jykes 🎆",
    noot: `${nootName} 🎊 | ${roleColors.roleColors.discordBlue}`,
    jynx: `${jynxName} 🥂 | ${roleColors.roleColors.discordYellow}`,
  },
};

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
  const guild = client.guilds.cache.get(GUILD_ID);
});

client.on("messageCreate", async (message) => {
  // list all available commands to the user
  if (message.content === "$commands") {
    let commands = "Commands:\n";
    for (const holiday in holidays) {
      commands += holiday + "\n";
    }
    message.channel.send(commands);
  }

  if (message.content in holidays) {
    try {
      // change server picture and name
      const holiday = holidays[message.content];
      await message.guild.setIcon(`./img/${holiday.serverPicture}`);
      await message.guild.setName(holiday.serverName);
      message.channel.send("Successfully changed guild name and icon!");

      // send a message with role colors if the holiday object includes them
      if (holiday.noot && holiday.jynx) {
        message.channel.send(
          `Change the following nicknames and role colors for the full effect:\n${holiday.jynx}\n${holiday.noot}`
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
