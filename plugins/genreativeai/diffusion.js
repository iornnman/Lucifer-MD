exports.run = {
    usage: ['diffusion'],
    use: 'query <𝘱𝘳𝘦𝘮𝘪𝘶𝘮>',
    category: 'generativeai',
    async: async (m, {
      client,
      text,
      args,
      isPrefix,
      command,
      Func
    }) => {
       try {
        if (!text) return client.reply(m.chat, Func.example(isPrefix, command, 'cat,fish'), m)
        client.sendReact(m.chat, '🕒', m.key)
        const aii = await Func.fetchBuffer(`https://api.yanzbotz.my.id/api/text2img/yanzbotz?prompt=${text}&apiKey=punyakuaja`)
       client.sendFile(m.chat, aii, 'img.png', `◦  *Prompt* : ${text}`, m)
        } catch (e) {
      return client.reply(m.chat, global.status.error, m)
  }
},
error: false,
limit: true,
premium: true,
}
