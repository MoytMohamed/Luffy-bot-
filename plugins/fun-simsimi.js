import fetch from 'node-fetch';

let handler = async (m, { conn, text, usedPrefix, command }) => {
  const name = conn.getName(m.sender);
  if (!text) {
    throw `هــلا *${name}*, *هــكذا* *${usedPrefix + command}* رســالـتك`;
  }

  const api = await fetch('https://api.simsimi.net/v2/?text=' + text + '&lc=ar');
    const resSimi = await api.json();
    m.reply(resSimi.success);
};

handler.help = ['bot'];
handler.tags = ['fun'];
handler.command = ['bot', 'لوفي'];

export default handler;