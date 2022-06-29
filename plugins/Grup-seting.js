let handler = async (m, { conn, args, usedPrefix, command }) => {
    let isClose = { // Switch Case Like :v
        'open': 'not_announcement',
        'close': 'announcement',
    }[(args[0] || '')]
    if (isClose === undefined) {
        await conn.sendButton(m.chat, `Owkh.. group berhasil di ${args[0]}`, wm, null,
        [['Group Open', '!group Open'], ['Group Close', '!group Close']], m)
     throw false }
    await conn.groupSettingUpdate(m.chat, isClose)
}
handler.help = ['group *open / close*']
handler.tags = ['group']
handler.command = /^(group)$/i

handler.admin = true
handler.botAdmin = true

module.exports = handler
