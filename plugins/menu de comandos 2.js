let fs = require('fs')
let fetch = require('node-fetch')
let moment = require('moment-timezone')
let fakeImage = 'https://i.imgur.com/dpdlz9s.jpg'
let safusimage = 'https://i.imgur.com/dpdlz9s.jpg'
let fakeMessage = 'Bruno Sobrino'
const { MessageType } = require('@adiwajshing/baileys')
let path = require('path')
let levelling = require('../lib/levelling')
let handler = async (m, { conn, usedPrefix }) => {
let prep = await conn.prepareMessage(m.chat, fs.readFileSync('./Menu2.jpg'), MessageType.image, {})
let idd = prep.message
let pp = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  try {
    pp = await conn.getProfilePicture(who)
  } catch (e) {

  } finally {
await conn.reply(m.chat, '*[ ⚠️ ] Cargando menú...*\n\n*[❗] Si no puede visualizar el menú, use el comando /menu1.2*')
  let username = conn.getName(who)
let menu =`
╭══〘 🐈⚡️🐈⚡️🐈⚡️🐈 〙══╮
║═ 𝙂𝙖𝙩𝙖 𝘿𝙞𝙤𝙨 | 𝘽𝙊𝙏
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
║❇️ *¡𝗛ola! ${username}* ❇️
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
║🔰 *Creadora/Editora: Gata Dios* 
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
╰══〘 🐈⚡️🐈⚡️🐈⚡️🐈 〙══╯
┏━━━━━━━━━━━━━━━━━━┓
┃ *INFORMACIÓN|MENUS*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ↠⚜️ _${usedPrefix}donar_
┣ ↠⚜️ _${usedPrefix}creditos_
┣ ↠⚜️ _${usedPrefix}infobot_
┣ ↠⚜️ _${usedPrefix}grupos_
┣ ↠⚜️ _${usedPrefix}instalarbot_
┣ ↠⚜️ _${usedPrefix}reglas_
┣ ↠⚜️ _${usedPrefix}menusimple_
┣ ↠⚜️ _${usedPrefix}menuaudios_
┣ ↠⚜️ _${usedPrefix}menu1.2_
┣ ↠⚜️ _${usedPrefix}menu2_
┣ ↠⚜️ _${usedPrefix}estado_
┣ ↠⚜️ _¿Qué es un Bot?_
┣ ↠⚜️ _Codigos para audios_
┣ ↠⚜️ _Términos y condiciones_
┗━━━━━━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━━━━━━┓
┃ *REPORTA FALLOS DE COMANDOS*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┃  Reporta cualquier comando que falle ┃ para poder solucionarlo
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ↠📮 _${usedPrefix}bug *tal comando con fallas*_
┣ ↠📮 _${usedPrefix}report *tal comando con fallas*_
┣ ↠📮 _${usedPrefix}reporte *tal comando con fallas*_
┗━━━━━━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━━━━━━┓
┃ *NÚMERO DEl PROPIETARIO/A*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ↠🐈 _${usedPrefix}owner_
┣ ↠🐈 _${usedPrefix}contacto_
┗━━━━━━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━━━━━━┓
┃ *UNE UN BOT A TU GRUPO*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ↠🤖 _${usedPrefix}join *enlace del grupo*_
┣ ↠🤖 _${usedPrefix}unete *enlace del grupo*_ 
┣ ↠🤖 _${usedPrefix}bots *ver bots*_
┗━━━━━━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━━━━━━┓
┃ *TOPS*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ↠🎖️ _${usedPrefix}top10gays | topgay_
┣ ↠🎖️ _${usedPrefix}toplind@s | toplind@_
┣ ↠🎖️ _${usedPrefix}topput@s | toppt_
┣ ↠🎖️ _${usedPrefix}toppajer@s | toppajeros_
┣ ↠🎖️ _${usedPrefix}topotakus | toptakus_
┗━━━━━━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━━━━━━┓
┃ *JUEGOS*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ↠🧩 _${usedPrefix}math | mates | matemáticas *modo*_
┣ ↠👾 _${usedPrefix}ttt | tictactoe *nombre del la sala*_
┣ ↠🧩 _${usedPrefix}delttt *nombre del la sala*_
┣ ↠👾 _${usedPrefix}gay2 *@tag*_
┣ ↠👾 _${usedPrefix}gay2 *yo*_
┣ ↠🧩 _${usedPrefix}gay *@tag / nombre*_
┣ ↠👾 _${usedPrefix}lesbi *@tag / nombre*_
┣ ↠🧩 _${usedPrefix}pajero *@tag / nombre*_
┣ ↠👾 _${usedPrefix}pajera *@tag / nombre*_
┣ ↠🧩 _${usedPrefix}puta *@tag / nombre*_
┣ ↠👾 _${usedPrefix}puto *@tag / nombre*_
┣ ↠🧩 _${usedPrefix}rata *@tag / nombre*_
┣ ↠👾 _${usedPrefix}manco *@tag / nombre*_
┣ ↠🧩 _${usedPrefix}manca *@tag / nombre*_
┣ ↠👾 _${usedPrefix}formarpareja | pareja5_
┣ ↠🧩 _${usedPrefix}dado_
┣ ↠👾 _${usedPrefix}simsimi | simi | bot *texto*_
┣ ↠🧩 _${usedPrefix}formartrio_
┣ ↠👾 _${usedPrefix}love *@tag / nombre*_
┣ ↠🧩 _${usedPrefix}amigorandom | amigo | amistad_
┣ ↠👾 _${usedPrefix}slot *cantidad*_
┣ ↠🧩 _${usedPrefix}ppt *piedra / papel / tijera*_
┣ ↠👾 _${usedPrefix}prostituta *@tag / nombre*_
┣ ↠🧩 _${usedPrefix}prostituto *@tag / nombre*_
┗━━━━━━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━━━━━━┓
┃ *DESCARGAS*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ↠☀️ _${usedPrefix}imagen | image | gimage *texto*_
┣ ↠❄️ _${usedPrefix}ytsearch *texto*_
┣ ↠☀️ _${usedPrefix}dlaudio *link yt*_
┣ ↠❄️ _${usedPrefix}dlvid *link yt*_
┣ ↠☀️ _${usedPrefix}ytmp3 *link yt*_
┣ ↠❄️ _${usedPrefix}ytmp4 *link yt*_
┣ ↠☀️ _${usedPrefix}play *titulo del audio*_
┣ ↠❄️ _${usedPrefix}play2 *titulo del video*_
┣ ↠☀️ _${usedPrefix}play3 *titulo del audio/video*_
┣ ↠❄️ _${usedPrefix}letra *nombredelacanción*_
┣ ↠☀️ _${usedPrefix}google *texto*_
┣ ↠❄️ _${usedPrefix}googlef *texto*_
┣ ↠☀️ _${usedPrefix}pinterestvideo | pintvid *link pinterest*_
┣ ↠❄️ _${usedPrefix}tiktokaudio *link del tiktok*_
┣ ↠☀️ _${usedPrefix}tiktok *link*_
┣ ↠❄️ _${usedPrefix}tiktok2 | Tiktok2 *link del tiktok*_
┣ ↠☀️ _${usedPrefix}acortar *link*_
┣ ↠❄️ _${usedPrefix}pinterest2 *texto*_
┣ ↠☀️ _${usedPrefix}ssweb *link*_
┣ ↠❄️ _${usedPrefix}animeinfo *nombre del anime*_
┣ ↠☀️ _${usedPrefix}wpanime | fondoanime_
┣ ↠❄️ _${usedPrefix}verinstagram | verig |igver *usuario*_
┣ ↠☀️ _${usedPrefix}wikipedia | wiki | internet *texto*_
┣ ↠❄️ _${usedPrefix}spotify *autor, cancion*_
┗━━━━━━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━━━━━━┓
┃ *GESTION DE GRUPOS* 
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ↠🔐 _${usedPrefix}admins *texto*_ 
┣ ↠🔒 _${usedPrefix}añadir *numero*_ (desactivado)
┣ ↠🔐 _${usedPrefix}sacar @tag_ (desactivado)
┣ ↠🔒 _${usedPrefix}save *@tag + nombre de contacto*_
┣ ↠🔐 _${usedPrefix}daradmin *@tag*_
┣ ↠🔒 _${usedPrefix}quitaradmin *@tag*_
┣ ↠🔐 _${usedPrefix}grupo *abierto / cerrado*_
┣ ↠🔒 _${usedPrefix}enable welcome_
┣ ↠🔐 _${usedPrefix}disable welcome_
┣ ↠🔒 _${usedPrefix}enable antilink_ *(WhatsApp)*
┣ ↠🔐 _${usedPrefix}disable antilink_ 
┣ ↠🔒 _${usedPrefix}enable antilink2_ *(https:)*
┣ ↠🔐 _${usedPrefix}disable antilink2_
┣ ↠🔒 _${usedPrefix}enable delete_
┣ ↠🔐 _${usedPrefix}disable  delete_ 
┣ ↠🔒 _${usedPrefix}link_
┣ ↠🔐 _${usedPrefix}notificar *texto*_
┣ ↠🔒 _${usedPrefix}setname *Nuevo nombre del grupo*_
┣ ↠🔐 _${usedPrefix}setdesc *Nueva descripción grupo*_
┣ ↠🔒 _${usedPrefix}infogrupo_
┣ ↠🔐 _${usedPrefix}invocar *texto*_
┣ ↠🔒 _${usedPrefix}del *responder a un mensaje del bot*_
┣ ↠🔐 _${usedPrefix}fantasmas_
┣ ↠🔒 _${usedPrefix}banchat_
┣ ↠🔐 _${usedPrefix}unbanchat_
┗━━━━━━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━━━━━━┓
┃ *CREADORES*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ↠🎨 _${usedPrefix}s_
┣ ↠🎨 _${usedPrefix}sticker_
┣ ↠🎨 _${usedPrefix}semoji_
┣ ↠🎨 _${usedPrefix}wasted_
┣ ↠🎨 _${usedPrefix}stonks_
┣ ↠🎨 _${usedPrefix}trash_
┣ ↠🎨 _${usedPrefix}rainbow_
┣ ↠🎨 _${usedPrefix}circle_
┣ ↠🎨 _${usedPrefix}stickermaker_
┣ ↠🎨 _${usedPrefix}attp *texto*_
┣ ↠🎨 _${usedPrefix}style *texto*_
┣ ↠🎨 _${usedPrefix}attp2 *texto*_
┣ ↠🎨 _${usedPrefix}stickerfilter_
┣ ↠🎨 _${usedPrefix}mp3 *responde a un video*_
┣ ↠🎨 _${usedPrefix}img *responde a un sticker*_
┣ ↠🎨 _${usedPrefix}blur *responde a una imagen*_
┣ ↠🎨 _${usedPrefix}swm *link de imagen de google*_
┣ ↠🎨 _${usedPrefix}gif *responde a un sticker/video*_
┣ ↠🎨 _${usedPrefix}tovideo *responde a una nota de voz*_
┗━━━━━━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━━━━━━┓
┃ *RANDOM|EXTRAS*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ↠🎳 _${usedPrefix}futbol_
┣ ↠🎯 _${usedPrefix}Messi_
┣ ↠🎲 _${usedPrefix}animal_
┣ ↠🎳 _${usedPrefix}meme_
┣ ↠🎯 _${usedPrefix}meme2_
┣ ↠🎲 _${usedPrefix}meme3_
┣ ↠🎳 _${usedPrefix}cat_
┣ ↠🎯 _${usedPrefix}dog_
┣ ↠🎲 _${usedPrefix}pikachu_
┣ ↠🎳 _${usedPrefix}waifu_
┣ ↠🎯 _${usedPrefix}blackpink_
┣ ↠🎲 _${usedPrefix}reto_
┣ ↠🎳 _${usedPrefix}verdad_
┣ ↠🎯 _${usedPrefix}imagenrandom | random | epico_
┣ ↠🎲 _${usedPrefix}neko_
┣ ↠🎳 _${usedPrefix}lolivid_
┣ ↠🎯 _${usedPrefix}iqtest_
┣ ↠🎲 _${usedPrefix}kpopitzy_
┣ ↠🎳 _${usedPrefix}navidad_
┣ ↠🎯 _${usedPrefix}loli_
┣ ↠🎲 _${usedPrefix}gawrgura_
┣ ↠🎳 _${usedPrefix}miku_
┣ ↠🎯 _${usedPrefix}nyan_
┣ ↠🎲 _${usedPrefix}pat_
┣ ↠🎳 _${usedPrefix}itachi_
┣ ↠🎯 _${usedPrefix}slap_
┣ ↠🎲 _${usedPrefix}pat_
┣ ↠🎳 _${usedPrefix}perfil_
┣ ↠🎯 _${usedPrefix}scan_
┣ ↠🎲 _${usedPrefix}kpop_
┣ ↠🎳 _${usedPrefix}qr *texto*_
┣ ↠🎯 _${usedPrefix}afk *motivo*_
┣ ↠🎲 _${usedPrefix}CristianoRonaldo_
┣ ↠🎳 _${usedPrefix}pregunta *pregunta*_
┣ ↠🎯 _${usedPrefix}mention *texto*_
┣ ↠🎲 _${usedPrefix}spamchat *texto*_
┣ ↠🎳 _${usedPrefix}traducir es *texto*_
┣ ↠🎯 _${usedPrefix}zodiac *AAAA MM DD*_
┣ ↠🎲 _${usedPrefix}readmore *texto1| texto2*_
┣ ↠🎳 _${usedPrefix}calc *expresión matemática*_ 
┣ ↠🎯 _${usedPrefix}spamwa *numero|texto|cantidad*_
┣ ↠🎲 _${usedPrefix}readqr *responde a un código QR*_
┣ ↠🎳 _${usedPrefix}anime *random / waifu / husbu /neko*_
┣ ↠🎯 _${usedPrefix}subirestado *texto / responder video|imagen|gif*_
┗━━━━━━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━━━━━━┓
┃ *COMANDOS +18*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┃ Usalo si el grupo te lo permite
┃ NO nos hacemos responsables
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ↠🔞 _${usedPrefix}labiblia_
┗━━━━━━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━━━━━━┓
┃ *EFECTOS PARA AUDIOS*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┃ Responde a un audio o nota de voz
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ↠🎤 _${usedPrefix}bass_
┣ ↠🎤 _${usedPrefix}deep_
┣ ↠🎤 _${usedPrefix}earrape_
┣ ↠🎤 _${usedPrefix}fast_
┣ ↠🎤 _${usedPrefix}fat_
┣ ↠🎤 _${usedPrefix}nightcore_
┣ ↠🎤 _${usedPrefix}reverse_
┣ ↠🎤 _${usedPrefix}robot_
┣ ↠🎤 _${usedPrefix}slow_
┣ ↠🎤 _${usedPrefix}smooth_
┣ ↠🎤 _${usedPrefix}vibracion *cantidad*_
┗━━━━━━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━━━━━━┓
┃ *AUDIOS|MENU* 
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ↠🔊 _${usedPrefix}menu2_
┣ ↠🔊 _${usedPrefix}menuaudios_
┣ ↠🔊 _${usedPrefix}audios_
┗━━━━━━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━━━━━━┓
┃ *CAJA DE ALMACENAMIENTO* 
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ↠📦 _${usedPrefix}caja_
┣ ↠📦 _${usedPrefix}almacen_
┣ ↠📦 _${usedPrefix}cjalmacen_
┗━━━━━━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━━━━━━┓
┃ *CHAT ANONIMO*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┃ ¡Escribe con alguien de forma anónima! 
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ↠👤 _${usedPrefix}chatanonimo | anonimochat_
┣ ↠👤 _${usedPrefix}anonimoch_
┣ ↠👤 _${usedPrefix}start_
┣ ↠👤 _${usedPrefix}next_
┣ ↠👤 _${usedPrefix}leave_
┗━━━━━━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━━━━━━┓
┃ *CONVIERTETE EN BOT*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ↠❇️ _${usedPrefix}stop_
┣ ↠❇️ _${usedPrefix}jadibot_
┣ ↠❇️ _${usedPrefix}getcode_
┗━━━━━━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━━━━━━┓
┃ *LOGOS PERSONALIZADOS*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ↠🪅 _${usedPrefix}lolice_
┣ ↠🎀 _${usedPrefix}simpcard_
┣ ↠🪅 _${usedPrefix}hornycard_ 
┣ ↠🎀 _${usedPrefix}lblackpink_
┣ ↠🪅 _${usedPrefix}logocorazon_
┣ ↠🎀 _${usedPrefix}tahta *texto*_
┣ ↠🪅 _${usedPrefix}nulis *texto*_
┣ ↠🎀 _${usedPrefix}nulis2 *texto*_
┣ ↠🪅 _${usedPrefix}lolice *@tag*_
┣ ↠🪅 _${usedPrefix}simpcard *@tag*_
┗━━━━━━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━━━━━━┓
┃ *LISTA DE LOGOS PERSONALIZADOS*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ↠🔮 _${usedPrefix}logos_ (lista)
┗━━━━━━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━━━━━━┓
┃ *PROPIETARIO/A DEL BOT*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ↠👑 _${usedPrefix}boost_
┣ ↠💎 _${usedPrefix}restart_
┣ ↠👑 _${usedPrefix}banlist_
┣ ↠💎 _${usedPrefix}virtext1_
┣ ↠👑 _${usedPrefix}actualizar_
┣ ↠👑 _${usedPrefix}bc *texto*_
┣ ↠💎 _${usedPrefix}bcgc *texto*_
┣ ↠👑 _${usedPrefix}bcbot *texto*_
┣ ↠💎 _${usedPrefix}setbye *@tag*_
┣ ↠👑 _${usedPrefix}banuser *@tag*_
┣ ↠💎 _${usedPrefix}enable *public*_
┣ ↠👑 _${usedPrefix}disable *public*_
┣ ↠💎 _${usedPrefix}unbanuser *@tag*_
┣ ↠👑 _${usedPrefix}listgroup *@tag*_
┣ ↠💎 _${usedPrefix}enable *restrict*_
┣ ↠👑 _${usedPrefix}enable *autoread*_
┣ ↠💎 _${usedPrefix}setwelcome *@tag*_
┣ ↠👑 _${usedPrefix}enable *autoread*_
┣ ↠💎 _${usedPrefix}disable *autoread*_
┗━━━━━━━━━━━━━━━━━━┛`.trim()
 const buttons = [{buttonId: 'id1', buttonText: {displayText: 'Hola 🤗'}, type: 1}, {buttonId: '#audios', buttonText: {displayText: 'Menu de Audios 🔊'}, type: 1}]
  let id = Object.keys(idd)[0]
  const buttonMessage = {[id]: prep.message[id], contentText: menu, footerText: 'Gata Dios', buttons: buttons, headerType: 'IMAGE'}
  conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage, { quoted: {key: { participant: '0@s.whatsapp.net', remoteJid: 'status@broadcast' }, message: { orderMessage: { itemCount: 46456757, status: 999, thumbnail: await (await fetch(safusimage)).buffer(), surface: 999, message: '🐈 𝙂𝙖𝙩𝙖 𝘿𝙞𝙤𝙨 🐈', orderTitle: 'iOfficial', sellerJid: '0@s.whatsapp.net'}}}}, { contextInfo: { mentionedJid: [m.sender]}})
}}
handler.command = /^(menu|menú|memu|memú|help|info|comandos|allmenu|2help)$/i
handler.fail = null
module.exports = handler
