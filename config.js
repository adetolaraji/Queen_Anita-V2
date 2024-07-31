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

global.SESSION_ID = "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkg3TnFLVTQ4Wmllb0tCUWtpRGpEZkpnVS9YZXM4aHdhQ2drT0tsamVGRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidVdRaEdvdlZRUWo5aVc4ODNzMXc1cjd2MkhLc2lMOFVNV3dDdHJ3eDkydz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDS3VlK0l4eVZVWFYxSFhqTTZNbllyQ0xJdGEzcVB1L2VadEh0aTN4T2trPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIvRE5KUFJvNnhpZC9NT1dTOUtIWlFHZ2JyNENsTWFOSWV0UUFHcVhkTVgwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFCaFFJQjhMRkJUR3c0Q1RMcUlvVllqeU9ROUs3NFBXOEs2UTR4Yi9YbWM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNjNGRYbFZUbExVakttZW8wUGNLTldzRkYxcHB6VlRNeDN4cTBlVldZekU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicURyb2c4Z05WYnZQaElkczRUalhhTEFVM1hFTG9kTnpTSjVUYXQxa1lsRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkRTNTBZTHFWU2dwSFRheWgzcVdkMFRna25XMkRud1J3eHh4UVhIV0MwQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii8xVkZlWGNVd2xIQWU1eHBtcUxidUJSUlIxRlgrTWdhQnIyVkhzOThOa0RoczNOY29aWXE2U1c0SGJjTXZ1TGw1S3dReGVSemEyZEQyaEU0UEdZZmhRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTY5LCJhZHZTZWNyZXRLZXkiOiJHVnB3UlNTeU1PT3poN3hRdTYvcmxxbUpvOEw1akhYZTl4N2JOVStNYVFNPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDgxMzY4NzYzNTdAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMDQ2NEE5RDEzNzk2REZBOEIxN0ZDMzFEMTA3NTRBQkQifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMjQ1OTIyN31dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiOEdYWHFBTTZTZXVJSWhUdnJ4WGo2QSIsInBob25lSWQiOiIyMWYxMmJjMi00NmQzLTQwNjQtOTUwYy1mYTUxYmUwYWViMTgiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTnhPOHdpMzdxNkZOS1FvSjU2eXBQUkZPOVNrPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhqczNDK2JISTc0QXlXdTV2c1RtbEU4TVdEST0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJISFJFTVoxUyIsIm1lIjp7ImlkIjoiMjM0ODEzNjg3NjM1Nzo1N0BzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTkdObXRRQ0VNdklxclVHR0FVZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoibjkyK213dER5WXAxRkVSc1VKdEZFTHdsMzcvUURlNE04OGVpSnlSTDNpZz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiRFRnUUxoZGMrRmcyZFkyb0tkT3V3S0k3NC9haTl4ekNvdnVJTVN1Q1RCdmpCMjd0Qm8wSUxncmUzdmFDTENLNkF5a1JaeXZkeml4eHNlRm9EV0U2RHc9PSIsImRldmljZVNpZ25hdHVyZSI6Imx3VGxCYW11aUkrT3RSRUl0WnBoV1g4c0wxdnZpMTAybUJkeGk0K2k4cmlFMGhxLzU4a2RVSW90cktGTDRLdmZtdERmMUQrVStLU3l3QU1aZ00vVGd3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0ODEzNjg3NjM1Nzo1N0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJaL2R2cHNMUThtS2RSUkViRkNiUlJDOEpkKy8wQTN1RFBQSG9pY2tTOTRvIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIyNDU5MjIzLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUVpbyJ9"
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
