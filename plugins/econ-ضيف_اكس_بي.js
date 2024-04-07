//import db from '../lib/database.js'

let handler = async (m, { conn, text }) => {
  let who
  if (m.isGroup) who = m.mentionedJid[0]
  else who = m.chat
  if (!who) throw '✨ منشن الشخص'
  let txt = text.replace('@' + who.split`@`[0], '').trim()
  if (!txt) throw '✨ أدخل مقدار *الاكس بي* تريد أن تضيف'
  if (isNaN(txt)) throw ' 🔢 ارقام فقط 🔢'
  let xp = parseInt(txt)
  let exp = xp
  
  if (exp < 1) throw '✨ الحد الادني  *1*'
  let users = global.db.data.users
  users[who].exp += xp

  await m.reply(`
*╮─━━⊱𝙻𝚄𝙵𝙵𝚈┇🤖┇𝙱𝙾𝚃⊰━*

*✨ لــقـد أســتلـمـت ${xp} مــن الــأكـس بـي ( نــقاط الــخـبره ) :* 

*╯─━━⊱𝙻𝚄𝙵𝙵𝚈┇🤖┇𝙱𝙾𝚃⊰━*`)
 conn.fakeReply(m.chat, `*╮─━━⊱𝙻𝚄𝙵𝙵𝚈┇🤖┇𝙱𝙾𝚃⊰━*

*✨ لــقـد أســتلـمـت ${xp} مــن الــأكـس بـي ( نــقاط الــخـبره ) :* 

*╯─━━⊱𝙻𝚄𝙵𝙵𝚈┇🤖┇𝙱𝙾𝚃⊰━*`, who, m.text)
}

handler.help = ['addxp <@user>']
handler.tags = ['econ']
handler.command = ['ضيف_اكس_بي'] 
handler.rowner = true

export default handler
