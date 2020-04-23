const { MessageEmbed } = require('discord.js');
const db = require('quick.db');
const PREFIX = "."

module.exports = {
    config: {
        name: "sell",
        noalias: [""],
        category: "economy",
        description: "Sell to somebody",
        usage: "[mention | ID] <amount>",
        accessableby: "everyone"
    },
    run: async (bot, message, args) => {
        if (!message.content.startsWith('.')) return;

        let user = message.author;

        if (args[0] == 'nikes') {
            let embed1 = new MessageEmbed()
                .setColor("GREEN")
                .setDescription(`❌ You don't have Nikes to sell`);

            let nikeses = await db.fetch(`nikes_${message.guild.id}_${user.id}`)

            if (nikeses < 1) return message.channel.send(embed1)

            db.fetch(`nikes_${message.guild.id}_${user.id}`)
            db.subtract(`nikes_${message.guild.id}_${user.id}`, 1)

            let embed2 = new MessageEmbed()
                .setColor("GREEN")
                .setDescription(`✅ Sold Fresh Nikes For 600 Coins`);

            db.add(`money_${message.guild.id}_${user.id}`, 600)
            message.channel.send(embed2)
        } else if (args[0] == 'car') {
            let embed3 = new MessageEmbed()
                .setColor("GREEN")
                .setDescription(`❌ You don't have a Car to sell`);

            let cars = await db.fetch(`car_${message.guild.id}_${user.id}`)

            if (cars < 1) return message.channel.send(embed3)

            db.fetch(`car_${message.guild.id}_${user.id}`)
            db.subtract(`car_${message.guild.id}_${user.id}`, 1)

            let embed4= new MessageEmbed()
                .setColor("GREEN")
                .setDescription(`✅ Sold a Car For 800 Coins`);

            db.add(`money_${message.guild.id}_${user.id}`, 800)
            message.channel.send(embed4)
        } else if (args[0] == 'mansion') {
            let sembed2 = new MessageEmbed()
                .setColor("GREEN")
                .setDescription(`❌ You don't have a Mansion to sell`);

            let houses = await db.fetch(`house_${message.guild.id}_${user.id}`)

            if (houses < 1) return message.channel.send(sembed2)

            db.fetch(`house_${message.guild.id}_${user.id}`)
            db.subtract(`house_${message.guild.id}_${user.id}`, 1)

            let sembed3 = new MessageEmbed()
                .setColor("GREEN")
                .setDescription(`✅ Sold a Mansion For 1200 Coins`);

            db.add(`money_${message.guild.id}_${user.id}`, 1200)
            message.channel.send(sembed3)
        } else {
            if (message.content.toLowerCase() === `${PREFIX}sell`) {
                let embed9 = new MessageEmbed()
                    .setColor("GREEN")
                    .setDescription(`❌ Enter an item to sell. Type ${PREFIX}store to see list of items`)
                return message.channel.send(embed9)
            }
        }
    }
}