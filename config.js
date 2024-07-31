//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "adetolaraji610@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/8b8fa3a594a578923fb1b.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "2348136876357";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID = "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUFVeGJKTnV6VG5kK3RqcS9iaUZIanBtVm94ZVkwam10TWtuVHRRUk1XOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNU03c1NkRW5rb1dkMjZENWhCa0NzT2pqS3pvWnpLc0RSWUZuWEV1K1h3WT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnQWxuNVBNQU1sMmM0MjdMRmx1MHV2U2xBS2ZqV3VBM3l4V2tHT1hSTms0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDVGExRFdmQzRiMm9hNkpUV1N5VHJvTW90Ymd4ZllHSmc0R1lCQm1IcUdRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtBaXlnUUdsVVpXWCtLYUxlNE1TdlN2RzEzZ05KdHdvME5lYU1jYjhDbk09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVUT0huUXJXUnQ0MHFFWUNXUndjc1gwalhISkFvNzZITklSOGxBY2pkMWM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUFtY0h2cGszSG9mcTlaTkwyRnNFVkpsN0ppSzBMS1NyZUlCSlZKZEpWST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ2lqajM5Q3BkeWR1V052b1JlTzN2VG1Dd0tZU3QyYlRiWDR0TTcxUEQwYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRJMmxseXJzblNaM05mY1B0QjBnTnF1VXR3TUVodDlvaFVHc0hyOVN0NGhORVhFV29iUXBORm1kRVUxTEhKck4vOTRSbzZhalhxY0d6WmZDQzVjNGdnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzUsImFkdlNlY3JldEtleSI6IlFKZWhjRkh3MXdMSExFcXlybTRaTU9mYjNPMVJzUHFWUkpnT2FLUUVzcWs9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjhIQm51c3FaUlVtTkVFUTFRazJLOHciLCJwaG9uZUlkIjoiYjg2NTAwYjAtMjJjMC00ODk2LWFmNDktMDkyNDkyODA5NzVkIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJVNGZWL21zR2w2WjducnBBOTIva1ovSzJUTT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzUHVnT1h0SmtXWE1RSk9JbjIrZHRLV3BrTGM9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiQkJMNUJQTEUiLCJtZSI6eyJpZCI6IjIzNDgxMzY4NzYzNTc6NTFAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ00rTm10UUNFTnVacUxVR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Im45Mittd3REeVlwMUZFUnNVSnRGRUx3bDM3L1FEZTRNODhlaUp5UkwzaWc9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlMyd0pPRmtTT2c0OWlYRjd1TzUxcU94S2JmYUM4clpobG9pR05qdDZFdXdJQ3dDZU0vaW1iZmV5bm1PSDRycnJkNTVNTTBLS3kvbGRheWZ3dkdiZ0NRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJjaWgxMnlHZDJuTitHUEpBN2pXYWtiOTNjTTNjUnZTRVk5TDN1eTlTR05zd2g1MUlXZFkvZWl6c3lkaGNmaEZaZDlQOVA0V24xV2FPRlFDMlpZNHRqQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDgxMzY4NzYzNTc6NTFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWi9kdnBzTFE4bUtkUlJFYkZDYlJSQzhKZCsvMEEzdURQUEhvaWNrUzk0byJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMjQyMDQ1Nn0="
  process.env.SESSION_ID ||
  ""
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "Cent",
  author: process.env.PACK_AUTHER || "Cent",
  packname: process.env.PACK_NAME || "❤️‍🩹✝️𝑴𝒚𝒍𝒆𝒔✝️❤️‍🩹",
  botname: process.env.BOT_NAME || "❤️‍🩹✝️𝑴𝒚𝒍𝒆𝒔✝️❤️‍🩹",
  ownername: process.env.OWNER_NAME || "Myles❤️",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
