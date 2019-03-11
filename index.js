//A welcome bot
const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "!"
var jimp = require('jimp');

client.on('guildMemberAdd', async member => {
  let font = await jimp.loadFont(jimp.FONT_SANS_32_BLACK)
  let font64 = await jimp.loadFont(jimp.FONT_SANS_64_BLACK)
  let mask = await jimp.read('https://i.imgur.com/552kzaW.png')
  let welcome = await jimp.read('https://i.imgur.com/x8CDupD.png')

  jimp.read(member.user.displayAvatarURL).then(avatar => {
    avatar.resize(318, 317)
    mask.resize(318, 317)
    avatar.mask(mask)

  welcome.print(font64, 508, 200, member.user.username)
  welcome.composite(avatar, 43, 38).write('Welcome2.png')
  member.guild.channels.get('552975320131567638').send(``, { files: ["Welcome2.png"] })
  
  console.log('Image sent!')
  })
  .catch(err => {
  console.log('error sending the avatar')
  })
})
client.login(TOKEN);
