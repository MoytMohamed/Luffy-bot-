let handler = async (m, { conn, text, participants, isAdmin, isOwner, groupMetadata }) => {
  const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'  
  let users = participants.map(u => u.id).filter(v => v !== conn.user.jid)
    m.reply(`*『👑┇𝙻𝚄𝙵𝙵𝚈┇🤖┇𝙱𝙾𝚃┇👑』*\n*↻╍╍━┛👑┗━╍╍↺*\n*⌝إجتمـا؏ القـروب ╎🪀⌞*\n*『إسـم القروب╎ 📜⌞』 :* ${groupMetadata.subject}*\n*『عـدد الأعضـاء╎ 👥⌞』: 𓆩 ${participants.length} 𓆪*${text ? `\n❑ الرساله : ${text}\n` : ''}\n*〄━━┋🌀 الـمنــشنـات 🌀┋━━〄*\n*صــاحب الـقروب 👑 :『@${owner.split('@')[0]}╎ 👑⌞』* \n*↻╍╍━┛👑┗━╍╍↺*\n*⨀⇠الـأعضـاء 👥  ⇣*\n*↻╍╍━┛👑┗━╍╍↺*\n` + users.map(v => '*⨀⇠* @' + v.replace(/@.+/, '')).join`\n` + '\n*↻╍╍━┛👑┗━╍╍↺*\n*⨀⇠ تــوقــيــع ⇣*\n*『👑┇𝙻𝚄𝙵𝙵𝚈┇🤖┇𝙱𝙾𝚃┇👑』*', null, {
        mentions: users
    })
}

handler.help = ['tagall']
handler.tags = ['group']
handler.command = ['منشن']
handler.admin = true
handler.group = true

export default handler

/*
*『👑┇𝙻𝚄𝙵𝙵𝚈┇🤖┇𝙱𝙾𝚃┇👑』*\n*↻╍╍━┛👑┗━╍╍↺*
*⌝إجتمـا؏ القـروب ╎🪀⌞*
*『إسـم القروب╎ 📜⌞』 :『𝐊.𝐃.𝐍⊰⚡️⊱𝐋𝐈𝐆𝐇𝐓』*
*『عـدد الأعضـاء╎ 👥⌞』: 𓆩𓆪*
*〄━━┋🌀 الـمنــشنـات 🌀┋━━〄*
*صــاحب الـقروب 👑 :『@╎ 👑⌞』*
*↻╍╍━┛👑┗━╍╍↺*
*⨀⇠الـأعضـاء 👥  ⇣*  
*↻╍╍━┛👑┗━╍╍↺*
*⨀⇠『@╎ 👑⌞』*
*⨀⇠『@╎ 👑⌞』*
*⨀⇠『@╎ 👑⌞』*
*⨀⇠『@╎ 👑⌞』*
*↻╍╍━┛👑┗━╍╍↺*
*⨀⇠ تــوقــيــع ⇣*  
*『👑┇𝙻𝚄𝙵𝙵𝚈┇🤖┇𝙱𝙾𝚃┇👑』*
*/