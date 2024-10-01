const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ZFhlnSrI#iWYlBx33KICAKPSzZ41nwUvnzdp7nrzxqP4kq3g33hE ",
ALIVE_IMG: process.env.ALIVE_IMG || "https://imgtr.ee/images/2024/09/17/37f9be869d1404ef1a5d188178450537.jpeg",
ALIVE_MSG: process.env.ALIVE_MSG || "අනේ අනේ පැංචො;",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public",
SUDO_NB: process.env.SUDO_NB || "94720325902",
OWNER_NAME: process.env.OWNER_NAME || "MADUWA_BOT<_>",
BOT_NAME: process.env.BOT_NAME || "MADUWA-MD",
AUTO_VOICE: process.env.AUTO_VOICE || "true"

};

