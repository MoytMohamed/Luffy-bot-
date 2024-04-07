
let war = global.maxwarn
let handler = async (m, { conn, text, args, groupMetadata, usedPrefix, command }) => {      
        let who
        if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
        else who = m.chat
        if (!who) throw `❒ منشن شخص ما\n\n❍ مثال : ${usedPrefix + command} @الشخص`
        if (!(who in global.db.data.users)) throw `❒ المستخدم غير موجود في قاعدة البيانات الخاصة بي`
        let name = conn.getName(m.sender)
        let warn = global.db.data.users[who].warn
        if (warn < war) {
            global.db.data.users[who].warn += 1
            m.reply(
              `*『👑┇𝙻𝚄𝙵𝙵𝚈┇🤖┇𝙱𝙾𝚃┇👑』*
*↻╍╍━┛👑┗━╍╍↺*
*『تحــذير المستخــدم╎ ⚠️⌞』*
*⌝المشـرف ╎👨🏻‍💻⌞ ${name} 』*
*⌝المستخــدم ╎👤⌞ @${who.split`@`[0]} 』*
*⌝الانـذارات ╎🚨⌞ ${warn + 1}/${war} 』*
*⌝السبـب ╎🏷️⌞ 『 ${text} 』*
*↻╍╍━┛👑┗━╍╍↺*
*『👑┇𝙻𝚄𝙵𝙵𝚈┇🤖┇𝙱𝙾𝚃┇👑』*`, null, { mentions: [who] }) 
            m.reply(
              `*『👑┇𝙻𝚄𝙵𝙵𝚈┇🤖┇𝙱𝙾𝚃┇👑』*
*↻╍╍━┛👑┗━╍╍↺*
*『تحـذيـر╎ ⚠️⌞ 』*
*『لقد تلقيت تحذيرًا من المشرف』*
*↻╍╍━┛👑┗━╍╍↺*
*┇『الإنـذارات╎ 🏷️⌞ ${warn + 1}/${war}』*
*『اذا تلقيت 𓆩${war}𓆪 تحذيرات سيتم إزالتك تلقائيًا من المجموعة』*
*↻╍╍━┛👑┗━╍╍↺*
*『👑┇𝙻𝚄𝙵𝙵𝚈┇🤖┇𝙱𝙾𝚃┇👑』*`, who)
        } else if (warn == war) {
            global.db.data.users[who].warn = 0
            m.reply(`❍ تجاوز المستخدم ال *${war}* من التحذيرات لذلك سيتم إزالة الشخص`)
            await time(3000)
            await conn.groupParticipantsUpdate(m.chat, [who], 'remove')
            m.reply(`❍ لقد تم ازالتك من الجروب *${groupMetadata.subject}* لان تم تحذيرك *${war}* مره`, who)
        }
}
handler.help = ['warn @user']
handler.tags = ['group']
handler.command = ['انذار'] 
handler.group = true
handler.admin = true
handler.botAdmin = true

export default handler

const time = async (ms) => {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
