/*
DON'T MODIFY THIS CODE
This code is responsible for handling donation related commands..
*/
let handler = async(m, { conn, usedPrefix, command }) => {
    console.log(`Command received: ${command}`);

    let message = `
*We appreciate your support! 🙏*
    
To help us keep improving, consider following us on threads. Every new follower brings us joy and motivation! 

Our threads for Instagram: https://threads.net/@kinfluxdigital

Remember, even the smallest support can make a huge difference!

Additionally, if you'd like to contribute directly, you can join our whatsApp group. Your support means the world to us!
https://chat.whatsapp.com/KggVmnH7ki6HoyD0025gDD`;

    let img = 'https://chat.whatsapp.com/KggVmnH7ki6HoyD0025gDD'; 

    console.log("Sending message and image...");
    await conn.sendFile(m.chat, img, 'donation.jpg', message, m, false, rpyp);
    console.log("Message and image sent.");
};

handler.help = ['Donate'];
handler.tags = ['Main'];
handler.command = ['donate', 'support', 'contribute'];

export default handler;
