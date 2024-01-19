exports.run = {
   usage: ['owner'],
   category: 'miscs',
   async: async (m, {
      client,
      env,
      Func
   }) => {
      client.sendContact(m.chat, [{
         name: env.owner_name,
         number: env.owner,
         about: 'Owner & Creator'
      }], m, {
         org: 'Ibrahim',
         website: 'https://lucifercloud.me',
         email: 'contact@lucifercloud.me'
      })
   },
   error: false,
   cache: true,
   location: __filename
}
