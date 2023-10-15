
let handler = async (m, { conn, args, usedPrefix, command }) => {
	
	let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
   m.reply(`
╭───•✧✧•───╮
*≡ 🎌KINFLUX 𝘽𝙊𝙏 🎌 *
╰───•✧✧•───╯
≻───── ⋆✩⋆ ─────≺
bot group link https://chat.whatsapp.com/BLjStbNJvG2H7Z3hlDmv28

⏳ *Kinflux bot active duration*  \n\n${muptime}`) 
}
handler.help = ['runtime']
handler.tags = ['main']
handler.command = ['runtime', 'uptime']
export default handler

function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [d, 'd ', h, 'h ', m, 'm ', s, 's '].map(v => v.toString().padStart(2, 0)).join('')
}
