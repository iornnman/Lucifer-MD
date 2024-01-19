exports.run = {
    usage: ['totalchat', 'resettc'],
   category: 'group',
    async: async (m, {
        client,
        args,
        prefix,
        users,
        isOwner,
        command,
        Func
    }) => {
        try {
            Object.entries(groupSet.member).map(([jid, _]) => {
                if (!participants.map(v => v.id).includes(jid)) delete groupSet.member[jid]
             })
             if (command == 'totalchat') {
                Object.entries(groupSet.member).filter(([jid, v]) => !v.chat).map(([jid, v]) => v.chat = 0)
                const member = Object.entries(groupSet.member).filter(([jid, v]) => v.chat).sort((a, b) => b[1].chat - a[1].chat)
                let caption = `乂  *T O T A L - C H A T*\n\n`
                member.map(([jid, v]) => {
                   caption += `- @${jid.split`@`[0]} : ${v.chat}\n`
                })
                caption += `\n${global.footer}`
                m.reply(caption)
             } else if (command == 'resettc') {
                Object.entries(groupSet.member).map(([_, v]) => v.chat = 0)
                m.reply(Func.texted('bold', `✅ Chat in this group has been successfully reset.`))
             }
          } catch (e) {
             client.reply(m.chat, Func.jsonFormat(e), m)
          }
        
    },
    group: true,
    botAdmin: true,
    owner: false,
    error: false,
    cache: true,
    location: __filename
}