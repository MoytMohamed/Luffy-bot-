let toM = a => '@' + a.split('@')[0]
function handler(m, { groupMetadata }) {
    let ps = groupMetadata.participants.map(v => v.id)
    let a = m.sender
    let b
    do b = ps.getRandom()
    while (b === a)
    m.reply(`
    *『👑┇𝙻𝚄𝙵𝙵𝚈┇🤖┇𝙱𝙾𝚃┇👑』*
*↻╍╍━┛👑┗━╍╍↺*
*-الـزوج⇠『 ${toM(a)} ╎ 🤵🏻‍♂⌞』*

*-الـزوجة⇠『 ${toM(b)} ╎ 💃🏻⌞』*
*↻╍╍━┛👑┗━╍╍↺*
*أتمـنـى لككـم حياة زوجيـة سعيـدة مـ؏ شـههر عسـلل فـي تـركيا 🇹🇷*
*↻╍╍━┛👑┗━╍╍↺*
*『👑┇𝙻𝚄𝙵𝙵𝚈┇🤖┇𝙱𝙾𝚃┇👑』*`, null, {
        mentions: [a, b]
    })
}
handler.help = ['ship']
handler.tags = ['fun']
handler.command = ['زواج']

handler.group = true

export default handler  