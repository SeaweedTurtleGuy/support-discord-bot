const Discord = require("discord.js");

const TOKEN = "NDI2Nzk3MDA5MTAyNzAwNTU0.Ddr4uA.DaAwZuBb5cso9R-vkzOm9dpVAfg";
const PREFIX = "~";

var bot = new Discord.Client();

bot.on("ready", function() {
    console.log("Support BOT Activated | Version 1.2.3");

    bot.user.setGame('~help');
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0].toLowerCase()) {
        case "support":
            message.reply("If You Would Still Like Support Please Say **~confirmsupport** Or Cancel By Saying **~cancelsupport**...");
            break;
        case "developer":
            message.reply("My developer is YTSeaweed_Turtle / SadPeanut123#4639 he is an awesome BOT developer...");
            break;
        case "server":
            message.reply("https://discord.gg/hgmMMRj");
            break;
        case "help":
        var embed = new Discord.RichEmbed()
            .setColor(0x0db0ff)
            .setTitle("Commands")
            .setDescription("~help   ~support   ~invite   ~server   ~website   ~setup   ~developer")
        message.channel.sendEmbed(embed);
            break;
        case "setup":
        var embed = new Discord.RichEmbed()
            .setColor(0x0db0ff)
            .setTitle("Setup")
            .setDescription("1: Invite Support BOT. 2: Create a role called **Support-Team**. 3: Give the role you created called **Support-Team** to whoever is on your support team. 4: After thse steps your done!")
        message.channel.sendEmbed(embed);
            break;
        case "invite":
            message.reply("https://discordapp.com/oauth2/authorize?client_id=426797009102700554&permissions=36875328&scope=bot");
            break;
        case "website":
            message.reply("https://supportbotdiscord.weebly.com/");
            break;
        case "cancelsupport":
            message.reply("Support Has Been Canceled...");
            break;
        case "confirmsupport":
        const role = message.guild.roles.find("name", "Support-Team")
        message.reply(`We Are Currently Calling Support! | ${role}`);
            break;
        default:
        var embed = new Discord.RichEmbed()
            .setColor(0xff0606)
            .setTitle("Invalid Syntax")
            .setDescription("Do **~help** For A List Of Commands...")
        message.channel.sendEmbed(embed);
        break;
    }
});

bot.login(TOKEN);
