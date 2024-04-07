export async function all(m) {
	
  // when someone sends a group link to the bot's dm
  if ((m.mtype === 'groupInviteMessage' || m.text.startsWith('https://chat') || m.text.startsWith('open this link')) && !m.isBaileys && !m.isGroup) {
   this.sendMessage(m.chat,{text:`*『👑┇𝙻𝚄𝙵𝙵𝚈┇🤖┇𝙱𝙾𝚃┇👑』*
*『تقدر تكلم المطور اذا اردت البوت الدخول الى مجموعتك👨🏻‍💻』*
*↻╍╍━┛👑┗━╍╍↺*
*『اكتب .المطور👨🏻‍💻 للتواصل مع المطور🪀』*
*『👑┇𝙻𝚄𝙵𝙵𝚈┇🤖┇𝙱𝙾𝚃┇👑』*`.trim()}, {quoted:m});
   /*this.sendButton(m.chat, `*Invite bot to a group*      
    Hallo @${m.sender.split('@')[0]} 
    you can rent the bot to join a group or contact owner 
    more info click on the button
  `.trim(), igfg, null, [['Rent', '/buyprem']] , m, { mentions: [m.sender] })*/
} 

 return !0
}
