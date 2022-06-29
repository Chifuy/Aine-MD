let fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix }) => conn.sendButton(m.chat, `
Hay, ${conn.getName(m.sender)}👋🏻
Welcome to Anonymous Chat!

Ketik /start untuk memulai
Ketik /next untuk skip/lanjut
Ketik /leave untuk keluar/stop
Ketik /sendkontak untuk mengirim kontak
`.trim(), 'Anonymous Chat\n© Origami-Bot', null, [['/start', '!start'], ['/next',  '!next'], ['/leave', '!leave']], m)

handler.help = ['anonymous']
handler.tags = ['main']
handler.command = /^anony(mous|chat)$/i
handler.private = true

module.exports = handler
