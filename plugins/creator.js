const PhoneNumber = require('awesome-phonenumber')
async function handler(m) {
    let vcard = 'BEGIN:VCARD\n'
    + 'VERSION:3.0\n' 
    + 'N:;Aron;;;'
    + 'FN:Aron\n'
    + 'ORG:Aron-Kun;\n'
    + 'item1.TEL;type=CELL;type=VOICE;waid=6285747543536:+62 857-4754-3536\n' 
    + 'item1.X-ABLabel:Creator Origami-Bot\n'
    + 'item2.EMAIL;type=INTERNET:origamibot67@gmail.com\n'
    + 'item2.X-ABLabel:Email\n'
    + 'item3.URL:https://www.instagram.com/hy_bee\n'
    + 'item3.X-ABLabel:Instagram\n'
    + 'item4.ADR:;;Kab. Brebes, Jawa Tengah, Indonesia;;;;\n'
    + 'item4.X-ABLabel:Region\n'
    + 'END:VCARD'

conn.sendMessage(m.chat, { contacts: { displayName: 'Aron', contacts: [{ vcard }] } }, { quoted: m })
}

handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(owner|creator)$/i

module.exports = handler
