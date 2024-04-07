let handler = m => m; 
  
 handler.all = async function (m) { 
   
   let chat = global.db.data.chats[m.chat]; 
   let responses; 
   if (/^هلا$/i.test(m.text)) { 
     responses = [ 
 '*نورت القروب 😩❤‍🔥*'  
     ]; 
} else if (/^السلام عليكم|سلام عليكم ورحمه الله وبركاته|سلام عليكم|السلام عليكم ورحمه الله وبركاته$/i.test(m.text)) { 
     responses = [ 
       'وعليكم السلام',  
     ]; 
   }else if (/^بوت$/i.test(m.text)) { 
     responses = [ 
       '*اسمـي لووفي وليس بوت 🌚💔*',  

     ]; 
   }else if (/^لوفي$/i.test(m.text)) { 
     responses = [ 
'*تحت خدمتك 🫡💔*'
     ]; 
 }else if (/^لوفي من عمك$/i.test(m.text)) { 
     responses = [ 
'*-ناغي اككيد😩❤‍🔥*'
     ]; 
   }else if (/^لوفي هل انت مرتبط$/i.test(m.text)) { 
     responses = [ 
'*لا ولا أريد الارتباط🏌🏻‍♂️💔*'
   ]; 
   }else if (/^لوفي تحبني؟$/i.test(m.text)) { 
     responses = [ 
'*اموت فيك 🌚💔*',
'*لا قمم اذللف 🙂💔*',
'*احبك نص حب 🙃💔*',
]; 
   }else if (/^لوفي تكرهني؟$/i.test(m.text)) { 
     responses = [ 
'*ماعاش من يكرهكك حبي 🙁*',
'*لا بس لا تتعب نفسك لحبك🫥*',
'*ااي اكرهك🙄*',
'*ماادري😑*',
  ]; 
   }else if (/^لوفي من وين انت؟$/i.test(m.text)) { 
     responses = [ 
'*من اليمـن 🫡🇾🇪*'
     ]; 
   } else if (/^احبك$/i.test(m.text)) { 
     responses = [ 
'*مـي تو 🙂🫀*'
     ]; 
   } else if (/^اكرهك$/i.test(m.text)) { 
                responses = [ 
             '*كل زق😒💔*'
                ]; 
              }
   if (responses) { 
     let randomIndex = Math.floor(Math.random() * responses.length); 
     conn.reply(m.chat, responses[randomIndex], m); 
   } 
   return !0 
 }; 
  
 export default handler;
