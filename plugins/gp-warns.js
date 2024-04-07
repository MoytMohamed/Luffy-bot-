
let handler = async (m, { conn, args, groupMetadata}) => {
       let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
       if (!(who in global.db.data.users)) throw `❒ المستخدم غير موجود في قاعدة البيانات الخاصة بي`
       let warn = global.db.data.users[who].warn
       let name = conn.getName(who)
      m.reply(`*『👑┇𝙻𝚄𝙵𝙵𝚈┇🤖┇𝙱𝙾𝚃┇👑』*
*↻╍╍━┛👑┗━╍╍↺*
*⌝الانــذارات ╎🚨⌞*
*⌝الإسـم ╎🪪⌞ 『 ${name} 』*
*⌝الانـذارات ╎📄⌞ ${warn} 』*
*↻╍╍━┛👑┗━╍╍↺*
*『👑┇𝙻𝚄𝙵𝙵𝚈┇🤖┇𝙱𝙾𝚃┇👑』*`)
        /*`*╮─━━⊱𝙻𝚄𝙵𝙵𝚈┇🤖┇𝙱𝙾𝚃⊰━*

 *الانذارات*

❒ *الاسم :* ${name} 
❒ *الانذارات :* ${warn}

*╯─━━⊱𝙻𝚄𝙵𝙵𝚈┇🤖┇𝙱𝙾𝚃⊰━*`*/
      
}

handler.help = ['warns']
handler.tags = ['group']
handler.command = ['الانذارات'] 
handler.group = true

export default handler
