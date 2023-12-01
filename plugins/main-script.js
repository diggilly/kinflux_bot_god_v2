import { promises } from 'fs'
import { join } from 'path'

let handler = async function (m, { conn, __dirname }) {
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
  
m.reply(`

*kinflux bot God v2.0 WHATSAPP USER BOT 💃🏻♥️*

_kinflux bot God Is a Multi device Whatsapp User Bot created By kinflux digital, , _
ᴘʟᴇᴀꜱᴇ ꜱᴛᴀʀ ᴛʜᴇ ʀᴇᴘᴏ ᴀɴᴅ ꜰᴏʟʟᴏᴡ ᴍᴇ ᴏɴ ɢɪᴛʜᴜʙ:

  ▢ Git : ${_package.homepage}


⭐ Total Stars: *26*
🍽️ Forks: *156*
💭 language : *JavaScript* 
⚖️ license : *MIT License* 
⚙️ Branch : *main*
🧰 Last Updated :2023-08-29T05:10:54Z 
🚁 owner number : https://wa.me/254110377776
                : https://wa.me/254110077535
 🎌 bot group https://chat.whatsapp.com/BLjStbNJvG2H7Z3hlDmv28
              
      
*👸Thanks for using kinflux bot God*

*® kinflux digital*
*© 2023 kinflux digital*

`.trim())
    
}

handler.help = ['script']
handler.tags = ['main']
handler.command = ['sc', 'git', 'script'] 

export default handler
