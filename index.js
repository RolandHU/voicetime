const { Client, Events, GatewayIntentBits } = require('discord.js')

const dotenv = require('dotenv')
dotenv.config()

const client = new Client({ intents: [ GatewayIntentBits.Guilds ] })

client.once(Events.ClientReady, c => {
    console.log(`${c.user.tag} is ready!`)
})

client.login(process.env.BOT_TOKEN)