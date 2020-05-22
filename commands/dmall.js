const Discord = require("discord.js");
module.exports.run = async(bot, message, args) => {
    message.guild.members.map(async user => {
        if(message.author.id !== "299157627584118787" && message.author.id !== "414111663076147201"){ message.channel.send("**You can't use this command!**");
    }else {
        const msg = args.join(" ");
        if(user.bot) return undefined;
        if (msg.length < 1){
            let noMessageEmbed = new Discord.RichEmbed()
            .setTitle("**ERROR** - Please specify a message!")
            .setThumbnail(message.guild.iconURL)
            .addField("**Usage:**", "`p@dmall <message>`", true); 
            return await message.channel.send(noMessageEmbed);
        }else {
            let embed = new Discord.RichEmbed()
            .setTitle("Polaris Tournaments Announcement")
            .setThumbnail(message.guild.iconURL)
            .setColor("00ffc3")
            .setDescription(msg)
            .setTimestamp();
            await user.send(embed);
        }
    }
            });
    };

module.exports.help = {
    name: "dmall"
}