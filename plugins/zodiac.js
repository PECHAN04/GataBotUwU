let handler = (m, { usedPrefix, command, text }) => {
    if (!text) throw `Ejemplo:\n${usedPrefix + command} 2003 02 25`

    const date = new Date(text)
    if (date == '*Fecha invalida, prueba con el siguiente formato AAAA MM DD Ejemplo: 2003 02 07*') throw date
    const d = new Date()
    const [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
    const birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]
    
    const zodiac = getZodiac(birth[1], birth[2])
    const ageD = new Date(d - date)
    const age = ageD.getFullYear() - new Date(1970, 0, 1).getFullYear()

    const birthday = [tahun + (birth[1] < bulan), ...birth.slice(1)]
    const cekusia = bulan === birth[1] && tanggal === birth[2] ? `${age} - *Â¡Feliz cumpleaÃ±os!* ð¥³` : age

    const teks = `
â¨ *Fecha de nacimiento:* ${birth.join('-')}
â¨ *Proximo cumpleaÃ±os:* ${birthday.join('-')}
â¨ *Edad:* ${cekusia}
â¨ *Signo zodical:* ${zodiac}
ð ððð©ð ð¿ðð¤ð¨ ð
`.trim()
    m.reply(teks)
}
handler.help = ['zodiac *2002 02 25*']
handler.tags = ['General']

handler.command = /^zodiac|zodiaco|zodiacal$/i

module.exports = handler

const zodiak = [
    ["Capricornio âï¸", new Date(1970, 0, 1)],
    ["Acuario âï¸", new Date(1970, 0, 20)],
    ["Piscis âï¸", new Date(1970, 1, 19)],
    ["Aries âï¸", new Date(1970, 2, 21)],
    ["Tauro âï¸", new Date(1970, 3, 21)],
    ["Geminis âï¸", new Date(1970, 4, 21)],
    ["Cancer âï¸", new Date(1970, 5, 22)],
    ["Leo âï¸", new Date(1970, 6, 23)],
    ["Virgo âï¸", new Date(1970, 7, 23)],
    ["Libra âï¸", new Date(1970, 8, 23)],
    ["Scorpion âï¸", new Date(1970, 9, 23)],
    ["Sagitario âï¸", new Date(1970, 10, 22)],
    ["Capricornio âï¸", new Date(1970, 11, 22)]
].reverse()

function getZodiac(month, day) {
    let d = new Date(1970, month - 1, day)
    return zodiak.find(([_,_d]) => d >= _d)[0]
}
