//import db from '../lib/database.js'

let handler = async (m, { conn, text }) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw '*مــنشـن الـمـسـتخـدم !*'
    let txt = text.replace('@' + who.split`@`[0], '').trim()
    if (!txt) throw '*أدخــل عـدد الـجـواهـر الـذي تـريـد اضـافـته !*'
    if (isNaN(txt)) throw '*🔢 ارقام فقط 🔢*'
    let dmt = parseInt(txt)
    let diamond = dmt


    
    if (diamond < 1) throw 'الحد الادنى  *1*'
    let users = global.db.data.users
   users[who].diamond += dmt

    await m.reply(`
*╮─━━⊱𝙻𝚄𝙵𝙵𝚈┇🤖┇𝙱𝙾𝚃⊰━*

*💎:تمت اضافة ${dmt} جوهرة الى حسابك🔥*

*╯─━━⊱𝙻𝚄𝙵𝙵𝚈┇🤖┇𝙱𝙾𝚃⊰━*`)
   conn.fakeReply(m.chat, `*╮─━━⊱𝙻𝚄𝙵𝙵𝚈┇🤖┇𝙱𝙾𝚃⊰━*

*💎:لقد استلمت +${dmt} جــوهـره*

*╯─━━⊱𝙻𝚄𝙵𝙵𝚈┇🤖┇𝙱𝙾𝚃⊰━*`, who, m.text)
}

handler.help = ['adddi <@user>']
handler.tags = ['econ']
handler.command = ['ضيف_جواهر'] 
handler.rowner = true

export default handler