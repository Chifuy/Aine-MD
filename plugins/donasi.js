let handler = async m => m.reply(`
*────── 「 DONATE 」 ──────*
 ❏ *Dana : 0857-4754-3536*
 ❏ *Gopay : 0857-4754-3536*
 ❏ *Ovo : 0857-4754-3536*
 ❏ *Indosat : 0857-4754-3536*
 ❏ *Smartfren: 0882-3273-3050*
 ❏ *Tri: 0895-3846-53792*
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
