import fg from 'api-dylux' 
import { tiktokdl, tiktokdlv2, tiktokdlv3 } from '@bochilteam/scraper'

let handler = async (m, { conn, text, args, usedPrefix, command}) => {
if (!args[0]) throw `*✳️ أدخـل رابــط تـيكتـوك*\n\n📌 مــثال: ${usedPrefix + command} https://vm.tiktok.com/ZMYG92bUh/`;
  if (!args[0].match(/tiktok/gi)) throw `*❎ رابط تيكتوك !!*`

try {
    let p = await fg.tiktok(args[0]) 
    let te = `
*❖━━━┋ تــيك تــوك ┋━━━❖*
❒ *الأســم:* ${nickname} ${description ? `\n❒ *الــوصف:* ${description}` : ''}`
   conn.sendFile(m.chat, p.play, 'tiktok.mp4', te, m)
    } catch {  	
	const { author: { nickname }, video, description } = await tiktokdl(args[0])
         .catch(async _ => await tiktokdlv2(args[0]))
         .catch(async _ => await tiktokdlv3(args[0]))
    const url = video.no_watermark2 || video.no_watermark || 'https://tikcdn.net' + video.no_watermark_raw || video.no_watermark_hd
    if (!url) throw '❎ خطأ في تحميل الفيديو '
     conn.sendFile(m.chat, url, 'fb.mp4', `*❖━━━┋ تــيك تــوك ┋━━━❖*
❒ *الأســم:* ${nickname} ${description ? `\n❒ *الــوصف:* ${description}` : ''}`, m)
} 
    
}  
handler.help = ['tiktok']
handler.tags = ['dl']
handler.command = /^(tiktok|تيكتوك|تيك|tiktoknowm)$/i
handler.diamond = false

export default handler