import { WAMessageStubType } from '@adiwajshing/baileys'

export async function before(m, { conn }) {
	if (!m.messageStubType || !m.isGroup) return
	let usuario = `@${m.sender.split`@`[0]}`
	let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
	//let pp = gataMenu.getRandom()
 //   let apii = await this.getFile(pp)
	if (m.messageStubType == 21) {
		await this.sendMessage(m.chat, { text: `*${usuario} حـط اســم جـديــد للـجـروب:* *${m.messageStubParameters[0]}*`, mentions: [m.sender] }, { quoted: fkontak }) 
	} else if (m.messageStubType == 22) {
		await this.sendMessage(m.chat, { text: `*${usuario} حــط صــورة جـديـده لـلــجـروب*`, mentions: [m.sender] }, { quoted: fkontak }) 
	} else if (m.messageStubType == 24) {
		await this.sendMessage(m.chat, { text: `*${usuario} حــط وصــف جـديـد لـلـجــروب:*\n\n${m.messageStubParameters[0]}`, mentions: [m.sender] }, { quoted: fkontak })
	} else if (m.messageStubType == 25) {
		await this.sendMessage(m.chat, { text: `*الــان* *${m.messageStubParameters[0] == 'on' ? 'الادمن بس' : 'الجميع'}* *يـســتطـيـع الـتـعديـل عـلى الـجروب !*`, mentions: [m.sender] }, { quoted: fkontak })
	} else if (m.messageStubType == 26) {
		await this.sendMessage(m.chat, { text: `*الــجروب ${m.messageStubParameters[0] == 'on' ? 'مــقـفول' : 'مــفتـوح'}*\n${m.messageStubParameters[0] == 'on' ? 'الادمن بس' : 'يلا'}`, mentions: [m.sender] }, { quoted: fkontak })
  /* } else if (m.messageStubType == 28) {
   conn.sendMessage(m.chat, { text: `${usuario} ELIMINO A @${m.messageStubParameters[0].split`@`[0]} 🫵`, mentions: [m.sender]}, { quoted: fkontak })  */
	} else if (m.messageStubType == 29) {
		await this.sendMessage(m.chat, { text: `*『👑┇𝙻𝚄𝙵𝙵𝚈┇🤖┇𝙱𝙾𝚃┇👑』*
*⌝ إعــلان تـرقــيــه╎⚡⌞*
*↻╍╍━┛👑┗━╍╍↺*
*❖↫┋المنشن الخاص به📧╎@${m.messageStubParameters[0].split`@`[0]}」*

*❖↫┋الـرتـبـه الـسابـقـه👤╎عضو」*

*❖↫┋الـتـرقـيـه📈╎مشرف」*

*↻╍╍━┛👑┗━╍╍↺*
*⟐╎نـتـمـنى مـنـه الـعـون والـسـداد لـلـنقـابـة 💞.*
*↻╍╍━┛👑┗━╍╍↺*
*⨀⇠ تــوقــيــع ⇣*  
*『👑┇𝙻𝚄𝙵𝙵𝚈┇🤖┇𝙱𝙾𝚃┇👑』*`, mentions: [`${m.sender}`,`${m.messageStubParameters[0]}`] }, { quoted: fkontak })
	} else if (m.messageStubType == 30) {
		await this.sendMessage(m.chat, { text: `
  *『👑┇𝙻𝚄𝙵𝙵𝚈┇🤖┇𝙱𝙾𝚃┇👑』*
*⌝إعلان إعفاء مشرف╎💔⌞* 
*↻╍╍━┛👑┗━╍╍↺*

*❖↫┋الـمنشن الخاص به📧╎ @${m.messageStubParameters[0].split`@`[0]}」*

*❖↫┋مـن مـنصب⚡╎مشرف」*

*❖↫┋إلـى مـنصب⛓️╎عضوو」*

*↻╍╍━┛👑┗━╍╍↺*
*⟐╎ نشكرك على كل ما قدمته من اجل النقابة ونتمنى لك التوفيق💞.* 
*↻╍╍━┛👑┗━╍╍↺*
*⨀⇠ تــوقــيــع ⇣*  
*『👑┇𝙻𝚄𝙵𝙵𝚈┇🤖┇𝙱𝙾𝚃┇👑』*`, mentions: [`${m.sender}`,`${m.messageStubParameters[0]}`] }, { quoted: fkontak })
	} else if (m.messageStubType == 72) {
		await this.sendMessage(m.chat, { text: `*${usuario} وضــع تــوقـيـت اخــر لـحذف الــرسـائـل الــى : @${m.messageStubParameters[0]}*`, mentions: [m.sender] }, { quoted: fkontak })
	} else if (m.messageStubType == 123) {
		await this.sendMessage(m.chat, { text: `*${usuario} أوقــف الـرسـائـل الـمؤقــته !*`, mentions: [m.sender] }, { quoted: fkontak })
	} else {
		console.log({
			messageStubType: m.messageStubType,
	    messageStubParameters: m.messageStubParameters,
	    type: WAMessageStubType[m.messageStubType], 
		});
	}
}