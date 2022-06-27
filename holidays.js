const roleColors = require("./roleColors");

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

exports.holidays = holidays;
