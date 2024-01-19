exports.run = {
    usage: ['bingimg'],
    use: 'prompt <𝘱𝘳𝘦𝘮𝘪𝘶𝘮>',
    category: 'generativeai',
    async: async (m, { client, text, isPrefix, command, Func, args }) => {
        try {
            if (!text) {
                return client.reply(m.chat, Func.example(isPrefix, command, 'black cat'), m);
            }
            client.sendReact(m.chat, '🕒', m.key);

            const json = await Func.fetchJson(`https://api.yanzbotz.my.id/api/text2img/bing-image?prompt=${text}&apiKey=punyakuaja`);
          let aaaa = `*乂* *B I N G  I M A G E *\n\n`
          
          aaaa += 'Use /buffer <img url> to get your genreated image \n\n───────────────────\n'
        aaaa += "───────────────────\n    *乂* G E N R E A T E D  I M A G E*\n\n"
        aaaa += `${json.result}`
            m.reply(`${aaaa}`)
        } catch (e) {
            client.reply(m.chat, Func.jsonFormat(e), m);
        }
    },
    error: false,
    limit: true,
    premium: true,
    cache: true,
    location: __filename
};

