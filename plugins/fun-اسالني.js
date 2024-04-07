let handler  = async (m, { conn }) => {
conn.reply(m.chat,`*╮─━━⊱𝙻𝚄𝙵𝙵𝚈┇🤖┇𝙱𝙾𝚃⊰━*

${pickRandom(global.t7dy)}

*╯─━━⊱𝙻𝚄𝙵𝙵𝚈┇🤖┇𝙱𝙾𝚃⊰━*`, m)
}
handler.help = ['bzmzjdks']
handler.tags = ['fun']
handler.command = /اسئلني/i
export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

 global.t7dy = [ 
'*『هـل تحبني🌚💔』*',
'*『هل انت مرتبط🏌🏻‍♂️』*',
'*『هل انت ذككي؟ 』*',
'*『هل حب الدراسة』*',
'*『هل تحب الحب🙂💔』*',
'*『هل تريد مراسلة مطوري لتشكرة🍫』*',
'*『هل تحب عائلتك؟؟! 』*',
'*『هل انت غبي🤓💔』*',
'*『هل تريد ان تتزوج🙆🏻‍♂️💔』*',
'*『هل لديك أصدقاء مصاالح؟؟ 』*',
'*『هل تريد الارتباط ببنت🦦』*',
'*『هل انت عامل شي ومش عايز اهلك يعرفون😑』*',
'*『هل انت كثير كلام🫥』*',
'*『هل انت عايز شي ومش قاادر تاخذة☹️؟ 』*',
 ] 