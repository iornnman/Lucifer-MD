exports.run = {
    usage: ['imagine'],
    use: 'text',
    category: 'generativeai',
    async: async (m, {
       client,
       args,
       text,
       isPrefix,
       command,
       Func
    }) => {
       try {
          if (!text) return client.reply(m.chat, Func.example(isPrefix, command, 'a cat'), m)
          client.sendReact(m.chat, '🕒', m.key)
          const apiUrl = 'https://api.itsrose.life/image/stable/diffusion';
           aii = await Func.fetchBuffer(apiUrl, {
       method: 'POST',
       headers: {
         'Accept': 'application/json',
         'Authorization': 'Rk-ibrahim098',
         'Content-Type': 'application/json',
       },
       body: JSON.stringify({
         prompt: `${text}`,
         style: 'realistic',
       }),
     });
          client.sendFile(m.chat,aii , '', m)
       } catch (e) {
          console.log(e)
          client.reply(m.chat, Func.jsonFormat(e), m)
       }
    },
    error: false,
    limit: true,
    restrict: true,
    cache : true,
    location: __filename
}