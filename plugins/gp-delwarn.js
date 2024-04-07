
let handler = async (m, { conn, args, groupMetadata}) => {
        let who
        if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
        else who = m.chat
        if (!who) throw `✳️ Tag or mention someone`
        if (!(who in global.db.data.users)) throw `✳️ المستخدم غير موجود في قاعدة البيانات الخاصة بي`
       let warn = global.db.data.users[who].warn
       if (warn > 0) {
         global.db.data.users[who].warn -= 1
         m.reply(`『👑┇𝙻𝚄𝙵𝙵𝚈┇🤖┇𝙱𝙾𝚃┇👑』
↻╍╍━┛👑┗━╍╍↺
『حذف الانذار╎ ⚠️⌞』
         
❆┇『الانـذار╎ ⌞』
❆┇${warn - 1} عـدد الانذارات الحالـي ⇠𓆩𓆪
↻╍╍━┛👑┗━╍╍↺
『👑┇𝙻𝚄𝙵𝙵𝚈┇🤖┇𝙱𝙾𝚃┇👑』`)
         m.reply(`*『👑┇𝙻𝚄𝙵𝙵𝚈┇🤖┇𝙱𝙾𝚃┇👑』*
*❆┇『${warn - 1} قام أحد المسؤولين بتخفيض تحذيره لك والآن لديك 𓆩𓆪 انـذار╎ 💢⌞』*
*『👑┇𝙻𝚄𝙵𝙵𝚈┇🤖┇𝙱𝙾𝚃┇👑』* **`, who)
         } else if (warn == 0) {
            m.reply('*الــمـســتخــدم لــيس لــديـه انــذارات !*')
        }

}
handler.help = ['delwarn @user']
handler.tags = ['group']
handler.command = ['حذف_انذار', 'حذف_تحذير'] 
handler.group = true
handler.admin = true
handler.botAdmin = true

export default handler
