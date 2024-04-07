//import db from '../lib/database.js'

let handler = async (m, { conn, text, isROwner, isOwner }) => {
  if (text) {
    global.db.data.chats[m.chat].sBye = text
     m.reply('*تـــم وضـع رســـالـة الــوداع !*')
  } else throw `*أدخــل الـرســالـه @user*`
}
handler.help = ['setbye <text>']
handler.tags = ['group']
handler.command = ['الوداع'] 
handler.admin = true
handler.owner = false

export default handler
