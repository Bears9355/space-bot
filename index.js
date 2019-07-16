const Discord = require ("discord.js");
const client = new Discord.Client();
var prefix = "!";

client.on("guildMemberAdd", user =>{
    user.guild.channels.get("600358014431657994").send("Bienvenue " + user + " sur " + user.guild.name + " ! Nous te souhaitons un agréable moment :tada:")
});

client.on("guildMemberRemove", user =>{
    user.guild.channels.get("600358014431657994").send("**" + user + "** viens juste de quitter le serveur.. :slight_frown:")
})

client.on("message", message =>{
    if(!message.guild) return
    if(message.content === prefix + "bonjour"){
        message.channel.send("Bonjour à toi " + message.author.username + " ! Et merci à Bears de m'avoir créé..")
    }
});



client.on("message", message =>{
    if(!message.guild) return
    if(message.content === prefix + "help"){
        message.channel.send("Je suis désolé, mais la commande `&help` n'a toujours pas été définie. Veuillez réessayer ultérieurement.")
    }
});

client.on('ready', function () {
    console.log("Je suis connecté !")

})

client.login('NjAwMzYyODE0ODcxMzA2MjQx.XSyqNg.SCrsQnxSgJguZVeUwuN9_p469eo')

client.on("message", message =>{
    if(!message.guild) return
    if(message.content === prefix + "test"){
        message.channel.send("__Le test a été éffectué avec succès !__")
    }
})


client.on("message", message =>{
    if(!message.guild) return
    if(message.channel.id !== "600365279733612567") return 
    if(message.content === prefix + "ticket"){
        message.guild.createChannel("support-" + message.author.username).then(channel =>{
            channel.setTopic("Le support d'aide pour aider " + message.author.username)
            let embed = new Discord.RichEmbed()
            embed.setAuthor(message.author.username, message.author.displayAvatarURL)
            embed.setDescription("Voici le support d'aide.")
            embed.addField(":warning: Pour supprimer le channel :", "Demandez à un membre du staff !")
            embed.setFooter("Space Cloud | Support")
            embed.setTimestamp(Date.now())
            channel.send(embed)
        })
        message.delete()
    }
})

client.on("message", message =>{
    if(!message.guild) return
    if(message.channel.id !== "600370761496002592") 
    if(message.content === prefix + 'statut'){
        message.delete()
        message.channel.send("**Le statut arrive bientôt !**")
    }
})

client.on("message", message =>{
    if(!message.guild) return
    if(message.content === prefix + "close"){
        if(message.member.hasPermission("MANAGE_MESSAGES")){
                message.channel.delete()
            }

        }
    }
)