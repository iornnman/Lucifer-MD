exports.run = {
    async: async (m, {
        client,
        body,
        chats,
        setting
    }) => {
        const msg = encodeURIComponent(m.text);
       try {
         const json = await Api.neoxr('/gpt-pro', {
                q: msg
             })
            if (!m.fromMe && json.status && setting.chatbot) return client.reply(m.chat, json.data.message, m)
         } catch (e) {
            console.log(e)
         }
    },
    eerror: false,
    private: true,
    cache: true,
    
    location: __filename
 }