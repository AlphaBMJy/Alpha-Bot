require('dotenv').config();
const { Client, IntentsBitField, EmbedBuilder, ActivityType } = require('discord.js');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});

client.on('ready', (c) => {
    console.log(`|| 🧩 ${c.user.tag} is online`);

    client.user.setActivity({
        name: '/info',
        type: ActivityType.Listening,
    })
});

client.on('interactionCreate', (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === 'info') {
        const embed = new EmbedBuilder()
        .setAuthor({
          name: "AlphaBMJy#7640",
          iconURL: "https://cdn.discordapp.com/attachments/1108094597462241301/1108812378264580136/Profilbild_Loves_M.png",
        })
        .setTitle("Informations")
        .setDescription("This bot was created by **<@734761369890455582>** (AlphaBMJy#7640)\n <:invite:1108767384275271760> If you have questions about the bot, you can join the [Support server](https://discord.com/invite/7JDDk22cDc)\n\n**Commands:**")
        .addFields(
          {
            name: "**/info** | -info",
            value: "Shows this embed",
          },
          {
            name: "**/ping**",
            value: "Shows the current ping of the bot",
          },
          {
            name: "<:nodejs:1108767369398059170> Node.js Version:",
            value: "v18.16.0",
            inline: true
          },
          {
            name: "<:bughunter:1108767380529754184> Bugs",
            value: "You found a Bug? Please report it on my [server](https://discord.com/invite/7JDDk22cDc)",
            inline: true
          },
        )
        .setColor("#00b0f4")
        .setFooter({
          text: `Version: ${process.env.version}`,
        })
        .setTimestamp();
      
        interaction.reply({ embeds: [embed], ephemeral: true });
    }

      
    
    if (interaction.commandName == 'add') {
        const num1 = interaction.options.get('first-number').value;
        const num2 = interaction.options.get('second-number').value;

        interaction.reply(`The sumary is ${num1 + num2}`)
    }
})


client.on('messageCreate', (message) => {
    if (message.content == '-info') {
        message.reply("Please use **/info**");
    }
})

client.login(process.env.TOKEN);