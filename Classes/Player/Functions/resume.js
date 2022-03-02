module.exports = async function(thise){
    const Discord = require("discord.js");
    const pretty = require("pretty-ms");
    await thise.data.audioPlayer.unpause();
  
    thise.data.queue.songs[0].pauseTime += Date.now() - thise.data.queue.songs[0].startPause
    thise.data.queue.songs[0].startPause = 0;
    const embed = new Discord.MessageEmbed()
      .setColor(thise.client.config.embed_colour)
      .setThumbnail(thise.data.queue.songs[0].info.bestThumbnail.url)
      .setAuthor({name: "Song resumed", url: thise.data.queue.songs[0].url, iconURL: thise.data.queue.songs[0].info.author.bestAvatar.url})
      .setTitle("Resumed song.")
    .addField("Name:", `[${thise.data.queue.songs[0].info.title}](${thise.data.queue.songs[0].url})`, true)
    .addField("Progress:", `${pretty(Date.now() - (thise.data.queue.songs[0].startTime + thise.data.queue.songs[0].pauseTime), {colonNotation: true})}/${thise.data.queue.songs[0].info.duration}`, true)
    thise.data.textChannel.send({embeds: [embed]})
  }