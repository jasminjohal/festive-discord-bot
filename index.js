require("dotenv").config();
const { Client, Intents } = require("discord.js");
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});
const GUILD_ID = process.env.DISCORD_GUILD;
const TOKEN = process.env.DISCORD_TOKEN;

const jynx_name = "Jynx";
const noot_name = "Noobert";

const colors = {
  discord_yellow: "#f1c40f",
  discord_green: "#2ecc71",
  discord_red: "#e74c3c",
  discord_orange: "#e67e22",
  discord_blue: "#3498db",
  yellow: "#efd466",
  cyan: "#7bdad1",
  light_pink: "#eca4e7",
  brown: "#b78c55",
  black: "#000000",
};

const holidays = {
  $default_bot: {
    server_picture: "robot.jpg",
    server_name: "Bot Testing",
  },
  $default_jykes: {
    server_picture: "cali.jpg",
    server_name: "Jykes",
  },
  $valentines_day: {
    server_picture: "cali_valentine.jpg",
    server_name: "Happy Valenjykes Day ❤️",
    noot: `${noot_name} 💞 | ${colors.discord_red}`,
    jynx: `${jynx_name} 💖 | ${colors.light_pink}`,
  },
  $st_patricks: {
    server_picture: "st_cali.jpg",
    server_name: "Happy St. Jykes Day ☘️",
    vc_name: "lookin' for gold",
    noot: `${noot_name} 🌈 | ${colors.discord_green}`,
    jynx: `${jynx_name} 🎩 | ${colors.discord_yellow}`,
  },
  $easter: {
    server_picture: "cali_easter.jpg",
    server_name: "Happy Jykes Easter 🐰",
    noot: `${noot_name} 🐇 | ${colors.cyan}`,
    jynx: `${jynx_name} 🌸 | ${colors.light_pink}`,
  },
  $cinco_de_mayo: {
    server_picture: "cinco_de_cali.jpg",
    server_name: "Feliz Cinco De Jykes 🌵",
    noot: `${noot_name} 🌮 | ${colors.discord_yellow}`,
    jynx: `${jynx_name} 🥑 | ${colors.discord_red}`,
  },
  $birthday: {
    server_picture: "cali_birthday.png",
    server_name: "Happy Jykesday 🎂",
    noot: `${noot_name} 🎉 | ${colors.discord_green}`,
    jynx: `${jynx_name} 🎈 | ${colors.light_pink}`,
  },
  $halloween: {
    server_picture: "cali_halloween.png",
    server_name: "Happy Jykesoween 🎃",
    noot: `${noot_name} 🕸️ | ${colors.discord_orange}`,
    jynx: `${jynx_name} 🦇 | ${colors.black}`,
  },
  $thanksgiving: {
    server_picture: "cali_thanksgiving.png",
    server_name: "Happy Jykesgiving 🦃",
    noot: `${noot_name} 🥔 | ${colors.brown}`,
    jynx: `${jynx_name} 🍁 | ${colors.discord_red}`,
  },
  $christmas: {
    server_picture: "santa_cali.png",
    server_name: "Merry Jykesmas 🎅",
    noot: `${noot_name} 🎄 | ${colors.discord_green}`,
    jynx: `${jynx_name} ☃️ | ${colors.discord_red}`,
  },
  $new_year: {
    server_picture: "cali_new_year.png",
    server_name: "Happy New Jykes 🎆",
    noot: `${noot_name} 🎊 | ${colors.discord_blue}`,
    jynx: `${jynx_name} 🥂 | ${colors.discord_yellow}`,
  },
};

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
  const guild = client.guilds.cache.get(GUILD_ID);
});

client.on("messageCreate", async (message) => {
  if (message.content === "$commands") {
    let commands = "Commands:\n";
    for (const holiday in holidays) {
      commands += holiday + "\n";
    }
    message.channel.send(commands);
  }

  if (message.content in holidays) {
    try {
      const holiday = holidays[message.content];
      await message.guild.setIcon(`./img/${holiday.server_picture}`);
      await message.guild.setName(holiday.server_name);
      message.channel.send("Successfully changed guild name and icon!");
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
