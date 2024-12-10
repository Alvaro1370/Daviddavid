//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Queen_Nikka";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/bh2fpj.jpg";
global.devs = "2348109243618";
global.sudo = process.env.SUDO || "2348109243618";
global.owner = process.env.OWNER_NUMBER || "2348109243618";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0NZWFJZa1lGVHIwVUk0VUtyZ1AwYWFOWnpXbkRSdlRqVTRNRjRVVmtXYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiczlKTGdJTHE2RU1nYVdENG1zTDFCL3JXb1RzbVowcWVaeVVpeDJVZnlEOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3RERrVU52Q3VhOW5sQXdIRXZSeDU0eGsybE9UdGlYc2dsSTUvRE4vL1d3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ6cHFUNUJzMmlsUktmdURLTGR6UnUvMzdDSkZtVTJTU2syNkxDT1dqaFJNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJOTnU1QmJNb0xOSVhzYk5wdkxFc0RqcTBwKzJHNFAwbnE5ZnNucjlPa2c9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjNkZnpPbHpnajE3ZUQ4aWd0RnZnb0ZhNWxaQ0ZFNWdUbmxpbGY0bHE5RUk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0xHNlNDWkhNSEd5NEw1YlkzUmlnaXpuajJXMzJzT1FGeTZvckgwSkltdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaWRWN3VzR2ZPRnd5K0RrRE9TRWNsZXRoRkVrbUMxVlhqMWdndHEyNnQwUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkRGempUN056R25tYkl3QkpTMVFuSDNqZ01URm1NelZmcWdUU0RyNjEzeFlVRXl2WWdsYlpnMGFoYlVnb1MxOWlOaDVTTlFwOTQzQTNnMjVvak9tRUNRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTM2LCJhZHZTZWNyZXRLZXkiOiJ2SlVnR01GcVRmK0wzVTdzVlhYWGR2MmZlOFo2aVNXOFIzOTJBTXpRblNJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDcwMzg3Mzg5MDlAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMDg2MzgyMzlENDcwMjYzNjRGRTgxQzg1NjkxMjg2NkYifSwibWVzc2FnZVRpbWVzdGFtcCI6MTczMzc3MzAxMn0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0NzAzODczODkwOUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI4ODQxNEJCQjY1MzE0N0IxQ0MwQjk0NUI0MUI2OTczMCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzMzNzczMDEyfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ1Tmc0cVRsRlRsbVllbmp6ckhjemx3IiwicGhvbmVJZCI6IjJhYjUxMzQ0LTliYmEtNDcxYi1iNzEyLWY5MGY2OGRlMTU0NCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJaREpTY1ZLQmVsMDRoNGZrc1BUdGhmdDg2WFE9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidVdJZk1QRjNPUHBCTkU5cEg1b09tSHYvNktRPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkxEUkY4U1paIiwibWUiOnsiaWQiOiIyMzQ3MDM4NzM4OTA5OjJAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiRMSB4oiafETwn6W38J+PvyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTEtLbzVjR0VNT04zYm9HR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiNFJQVmVCL3FsVHlKV0M2cWFjYzFmbWgzbUM4UmtBelpnMFV4QmVRNGhqdz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiOFZ5ME5LQzdpMDB3U2pVWXZCWEhNUDQ4RHhINWhlSm85dmFwN2ZiQjlRWmVLbmczWTUyNkZDRmtoUWFqYngyWFN1SWhqcTNqZWQvVEdwa3FMckw5RHc9PSIsImRldmljZVNpZ25hdHVyZSI6IkNhNXhvcUxoK1FKK1JpNTFJRC8vYWo5RldtbDltZi93NW5Ydld3ZGhBdExkUWNHOFVQM01rRUhkVGtTb0laWktmTXorWWtwWHZTZ0hJczRDbkhKdUFnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0NzAzODczODkwOToyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmVFVDFYZ2Y2cFU4aVZndXFtbkhOWDVvZDVndkVaQU0yWU5GTVFYa09JWTgifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzM3NzMwMDgsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBS2EvIn0=" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_NIKKA™`",
  author: process.env.PACK_AUTHER || "𝕯𝖆𝖛𝖎𝖉",
  packname: process.env.PACK_NAME || "𝕵𝖊 𝖛𝖔𝖎𝖘 𝖘𝖙𝖎𝖈𝖐𝖊𝖗 𝖕𝖆𝖈𝖐",
  botname: process.env.BOT_NAME || "QUEEN_NIKKA",
  ownername: process.env.OWNER_NAME || "DAVID",
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
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
