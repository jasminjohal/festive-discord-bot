const roleColors = require("./roleColors");

// nicknames of the two members in the server
const memberOneNickname = "Noobert";
const memberTwoNickname = "Jynx";

/* each key is a command and the corresponding value is what the 
server picture and server name will be after using the command. 
some commands will also output recommended nicknames & role colors */
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
    memberOne: `${memberOneNickname} 💞 | ${roleColors.roleColors.discordRed}`,
    memberTwo: `${memberTwoNickname} 💖 | ${roleColors.roleColors.lightPink}`,
  },
  $st_patricks: {
    serverPicture: "st_cali.jpg",
    serverName: "Happy St. Jykes Day ☘️",
    vc_name: "lookin' for gold",
    memberOne: `${memberOneNickname} 🌈 | ${roleColors.roleColors.discordGreen}`,
    memberTwo: `${memberTwoNickname} 🎩 | ${roleColors.roleColors.discordYellow}`,
  },
  $easter: {
    serverPicture: "cali_easter.jpg",
    serverName: "Happy Jykes Easter 🐰",
    memberOne: `${memberOneNickname} 🐇 | ${roleColors.roleColors.cyan}`,
    memberTwo: `${memberTwoNickname} 🌸 | ${roleColors.roleColors.lightPink}`,
  },
  $cinco_de_mayo: {
    serverPicture: "cinco_de_cali.jpg",
    serverName: "Feliz Cinco De Jykes 🌵",
    memberOne: `${memberOneNickname} 🌮 | ${roleColors.roleColors.discordYellow}`,
    memberTwo: `${memberTwoNickname} 🥑 | ${roleColors.roleColors.discordRed}`,
  },
  $birthday: {
    serverPicture: "cali_birthday.png",
    serverName: "Happy Jykesday 🎂",
    memberOne: `${memberOneNickname} 🎉 | ${roleColors.roleColors.discordGreen}`,
    memberTwo: `${memberTwoNickname} 🎈 | ${roleColors.roleColors.lightPink}`,
  },
  $halloween: {
    serverPicture: "cali_halloween.png",
    serverName: "Happy Jykesoween 🎃",
    memberOne: `${memberOneNickname} 🕸️ | ${roleColors.roleColors.discordOrange}`,
    memberTwo: `${memberTwoNickname} 🦇 | ${roleColors.roleColors.black}`,
  },
  $thanksgiving: {
    serverPicture: "cali_thanksgiving.png",
    serverName: "Happy Jykesgiving 🦃",
    memberOne: `${memberOneNickname} 🥔 | ${roleColors.roleColors.brown}`,
    memberTwo: `${memberTwoNickname} 🍁 | ${roleColors.roleColors.discordRed}`,
  },
  $christmas: {
    serverPicture: "santa_cali.png",
    serverName: "Merry Jykesmas 🎅",
    memberOne: `${memberOneNickname} 🎄 | ${roleColors.roleColors.discordGreen}`,
    memberTwo: `${memberTwoNickname} ☃️ | ${roleColors.roleColors.discordRed}`,
  },
  $new_year: {
    serverPicture: "cali_new_year.png",
    serverName: "Happy New Jykes 🎆",
    memberOne: `${memberOneNickname} 🎊 | ${roleColors.roleColors.discordBlue}`,
    memberTwo: `${memberTwoNickname} 🥂 | ${roleColors.roleColors.discordYellow}`,
  },
};

exports.holidays = holidays;
