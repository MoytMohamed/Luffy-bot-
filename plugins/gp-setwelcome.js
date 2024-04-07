//import db from '../lib/database.js'

let handler = async (m, { conn, text, isROwner, isOwner }) => {
  if (text) {
    global.db.data.chats[m.chat].sWelcome = text
    m.reply('*تــــم وضــع رسـالــة الـترحــيـب !*')
  } else throw `*❒ أدخل رسالة الترحيب\n\n@user\n@group\n@desc*`
}
handler.help = ['setwelcome <text>']
handler.tags = ['group']
handler.command = ['الترحيب'] 
handler.admin = true
handler.owner = false

export default handler
