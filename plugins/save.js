let handler = async (m, { conn, text }) => {
  if (!text) return
  let who
  if (m.isGroup) who = m.mentionedJid[0]
  else who = m.chat
  if (!who) throw 'β° βοΈ β± *Etiqueta a una persona*\n\n*Uso correcto de comando:*\n*#save @tag π πππ©π πΏππ€π¨ π*'
  txt = text.replace('@' + who.split`@`[0], '').trimStart()
  return conn.sendContact(m.chat, who, txt || conn.getName(who), m)
}
handler.help = ['save'].map(v => v + ' @mention <ContactName>')
handler.tags = ['']

handler.command = /^save|agendar|guardar$/

module.exports = handler
