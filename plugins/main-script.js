import { promises } from 'fs'
import { join } from 'path'

let handler = async function (m, { conn, __dirname }) {
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
  
m.reply(`
╭───•✧✧•───╮
*≡ 🎌KINFLUX 𝘽𝙊𝙏 🎌 SCRIPT*
╰───•✧✧•───╯
       ≻───── ⋆✩⋆ ─────≺
        *owner number*
    
     httsp://wa.me/254110077535
     httsp://wa.me/254110377776
╭───•✧✧•───╮ ≻───── ⋆✩⋆ ─────≺
bot support group https://chat.whatsapp.com/KggVmnH7ki6HoyD0025gDD

▢ Git : ${_package.homepage}
╰───•✧✧•───╯
`.trim())
    
}

handler.help = ['script']
handler.tags = ['main']
handler.command = ['sc', 'git', 'script'] 

export default handler
