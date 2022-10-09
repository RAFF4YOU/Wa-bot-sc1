let handler = function (m) {
  // this.sendContact(m.chat, '6283823397743', 'RAFF4YOU', m)
  conn.sendContact(m.chat, '6283823397743', 'RAFF4YOU', m)
  
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
