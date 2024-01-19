exports.run = {
   usage: ['apkdl'],
   use: 'app id <𝘱𝘳𝘦𝘮𝘪𝘶𝘮>',
   category: 'downloader',
   async: async (m, {
      client,
      args,
      isPrefix,
      command,
      Func
   }) => {
      try {
         if (!args || !args[0]) return client.reply(m.chat, Func.example(isPrefix, command, 'your app id(com.whatsapp)'), m)
        client.sendReact(m.chat, '🕒', m.key)
         let json = await Func.fetchJson(`https://vihangayt.me/download/apk?id=${args[0]}`)
         if (!json.status) return client.reply(m.chat, global.status.fail, m)
         let teks = `乂  *A P K  D O W N L O A D E R *\n\n`
         teks += '	◦  *Name* : ' + json.data.name + '\n'
         teks += '	◦  *Last update* : ' + json.data.lastup + '\n'
         teks += '	◦  *Size* : ' + json.data.size + '\n'
         teks += global.footer
         client.sendFile(m.chat, json.data.icon, '', teks, m).then(() => {
            client.sendFile(m.chat, json.data.dllink, '', json.data.name, m)
         })

      } catch (e) {
         return client.reply(m.chat, global.status.error, m)
      }

   },
   error: false,
   limit: true,
   premium: true,
}
