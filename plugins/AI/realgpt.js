exports.run = {
    usage: ['realtime'],
    use: 'query <𝘱𝘳𝘦𝘮𝘪𝘶𝘮>',
    category: 'ai',
    async: async (m, {
        client,
        text,
        args,
        isPrefix,
        command,
        Func
    }) => {
        try {
            if (!text) return client.reply(m.chat, Func.example(isPrefix, command, 'what is java script'), m)
            client.sendReact(m.chat, '🕒', m.key)
            const json = await Func.fetchJson(`https://api.yanzbotz.my.id/api/ai/you?query=${text}&apiKey=punyakuaja`)
            let textt = `${json.result.response}\n\n`
            textt += "───────────────────\n    *乂* *R E F E R E N C E*\n\n───────────────────\n";
            json.result.url.map(async (v, i) => {
                textt += `URL : ${v.url}\n\n──────────────\n\n`;
            })
            m.reply(`${textt}`)
        } catch (e) {
            return client.reply(m.chat, global.status.error, m)
        }
    },
    error: false,
    limit: true,
    premium: false,
}
