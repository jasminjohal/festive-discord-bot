require("dotenv").config();
const { Client, Intents } = require("discord.js");
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});
const GUILD_ID = process.env.DISCORD_GUILD;
const TOKEN = process.env.DISCORD_TOKEN;

const jynxName = "Jynx";
const nootName = "Noobert";

const colors = {
  discordYellow: "#f1c40f",
  discordGreen: "#2ecc71",
  discordRed: "#e74c3c",
  discordOrange: "#e67e22",
  discordBlue: "#3498db",
  yellow: "#efd466",
  cyan: "#7bdad1",
  lightPink: "#eca4e7",
  brown: "#b78c55",
  black: "#000000",
};

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
    noot: `${nootName} 💞 | ${colors.discordRed}`,
    jynx: `${jynxName} 💖 | ${colors.lightPink}`,
  },
  $st_patricks: {
    serverPicture: "st_cali.jpg",
    serverName: "Happy St. Jykes Day ☘️",
    vc_name: "lookin' for gold",
    noot: `${nootName} 🌈 | ${colors.discordGreen}`,
    jynx: `${jynxName} 🎩 | ${colors.discordYellow}`,
  },
  $easter: {
    serverPicture: "cali_easter.jpg",
    serverName: "Happy Jykes Easter 🐰",
    noot: `${nootName} 🐇 | ${colors.cyan}`,
    jynx: `${jynxName} 🌸 | ${colors.lightPink}`,
  },
  $cinco_de_mayo: {
    serverPicture: "cinco_de_cali.jpg",
    serverName: "Feliz Cinco De Jykes 🌵",
    noot: `${nootName} 🌮 | ${colors.discordYellow}`,
    jynx: `${jynxName} 🥑 | ${colors.discordRed}`,
  },
  $birthday: {
    serverPicture: "cali_birthday.png",
    serverName: "Happy Jykesday 🎂",
    noot: `${nootName} 🎉 | ${colors.discordGreen}`,
    jynx: `${jynxName} 🎈 | ${colors.lightPink}`,
  },
  $halloween: {
    serverPicture: "cali_halloween.png",
    serverName: "Happy Jykesoween 🎃",
    noot: `${nootName} 🕸️ | ${colors.discordOrange}`,
    jynx: `${jynxName} 🦇 | ${colors.black}`,
  },
  $thanksgiving: {
    serverPicture: "cali_thanksgiving.png",
    serverName: "Happy Jykesgiving 🦃",
    noot: `${nootName} 🥔 | ${colors.brown}`,
    jynx: `${jynxName} 🍁 | ${colors.discordRed}`,
  },
  $christmas: {
    serverPicture: "santa_cali.png",
    serverName: "Merry Jykesmas 🎅",
    noot: `${nootName} 🎄 | ${colors.discordGreen}`,
    jynx: `${jynxName} ☃️ | ${colors.discordRed}`,
  },
  $new_year: {
    serverPicture: "cali_new_year.png",
    serverName: "Happy New Jykes 🎆",
    noot: `${nootName} 🎊 | ${colors.discordBlue}`,
    jynx: `${jynxName} 🥂 | ${colors.discordYellow}`,
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

      // send a message with role colors if applicable
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
