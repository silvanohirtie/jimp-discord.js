# How to use Jimp on discord.js bots: The Guide



## Jimp
JavaScript Image Manipulation Program

The "JavaScript Image Manipulation Program"

An image processing library for Node written entirely in JavaScript, with zero native dependencies.  
for any issue, join [this discord server](https://discord.gg/hQZyAmp)  
## Installation
Use [Node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com/) to install [JIMP](https://www.npmjs.com/package/jimp)
```bash
npm i jimp
```

## What will we learn
We are going to learn:  
-How to write on images  
-How to add an image over another one  
-How to make a bot that welcome new users with an image that contains their avatar and their username  
-How to use jimp functions


## Getting Started
Let's declare our JIMP variable:

```javascript
var jimp = require('jimp');
```

## Loading Fonts and reading images

Obviously for getting started with editing images, we need to declare the font, and the image we need to edit
```javascript
jimp.loadFont()
``` 
```javascript
jimp.read()
```
## Usage
```javascript
let nameyouwant = await jimp.loadFont(font)
let nameyouwant = await jimp.read('link')
```
## Example
```javascript
let font = await jimp.loadFont(jimp.FONT_SANS_32_BLACK) //We load the font sans, with size 32 and color black
let welcome = await jimp.read('https://i.imgur.com/x8CDupD.png') //We load that image 
```
## Fonts
```javascript
Jimp.FONT_SANS_8_BLACK; // Open Sans, 8px, black
Jimp.FONT_SANS_10_BLACK; // Open Sans, 10px, black
Jimp.FONT_SANS_12_BLACK; // Open Sans, 12px, black
Jimp.FONT_SANS_14_BLACK; // Open Sans, 14px, black
Jimp.FONT_SANS_16_BLACK; // Open Sans, 16px, black
Jimp.FONT_SANS_32_BLACK; // Open Sans, 32px, black
Jimp.FONT_SANS_64_BLACK; // Open Sans, 64px, black
Jimp.FONT_SANS_128_BLACK; // Open Sans, 128px, black
Jimp.FONT_SANS_8_WHITE; // Open Sans, 8px, white
Jimp.FONT_SANS_16_WHITE; // Open Sans, 16px, white
Jimp.FONT_SANS_32_WHITE; // Open Sans, 32px, white
Jimp.FONT_SANS_64_WHITE; // Open Sans, 64px, white
Jimp.FONT_SANS_128_WHITE; // Open Sans, 128px, white
```

## Writing on an image
Most of the time, jimp on discord.js is used to write on images
to do that, we need to use the print function
```javascript
jimp.print()
```
## Usage
```javascript
jimp.print(font, x, y, 'print message')
```
## Example
```javascript
let font = await jimp.loadFont(jimp.FONT_SANS_32_BLACK) 
let welcome = await jimp.read('https://i.imgur.com/x8CDupD.png') 
welcome.print(font, 508, 200, member.user.username) //We print the username on the image "welcome"
```
## Putting an image on the base image
Now let's see how to get an image over another. To do this we need to use the composite function
```javascript
jimp.composite()
``` 
## Usage
```javascript
jimp.composite(image we declared, x, y)
``` 

## Example
```javascript
let welcome = await jimp.read('https://i.imgur.com/x8CDupD.png')
jimp.read(member.user.displayAvatarURL).then(avatar => { //We take the user's avatar and declare it
    avatar.resize(318, 317) //We resize the avatar 
    welcome.composite(avatar, 43, 38) //We put the avatar on the image on the position 43, 38
  ``` 
  
## Creating a png file and send it
Finally we are at the end of the guide, now let's see how to create a png file with our final image. 
We need to use the write function
```javascript
jimp.write()
``` 
## Usage
```javascript
jimp.write('Name file.png')
member.guild.channels.get('CHANNELID').send(``, { files: ["Name file.png"] })
``` 

## Example
```javascript
let welcome = await jimp.read('https://i.imgur.com/x8CDupD.png') //We load the image from that link
welcome.print(font64, 508, 200, member.user.username) //We print the username on the image
welcome.write('Welcome2.png') //We create a png file called Welcome2
member.guild.channels.get('552975320131567638').send(``, { files: ["Welcome2.png"] }) //We sent the file to the channel
``` 

## The end
I hope this will help you, i worked 2 days on a bot trying to learn how jimp works and how can it be used in a discord.js bot.  
Below you can find a code example

## Code Example
This is the source from my private bot, here tou can see how to make a bot that welcome new users and send an image to the channel with their usernames and avatar
Let's start!

```javascript
const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "!"
var jimp = require('jimp');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('guildMemberAdd', async member => {
  let font = await jimp.loadFont(jimp.FONT_SANS_32_BLACK) //We declare a 32px font
  let font64 = await jimp.loadFont(jimp.FONT_SANS_64_BLACK) //We declare a 64px font
  let mask = await jimp.read('https://i.imgur.com/552kzaW.png') //We load a mask for the avatar, so we can make it a circle instead of a shape
  let welcome = await jimp.read('https://i.imgur.com/x8CDupD.png') //We load the base image

  jimp.read(member.user.displayAvatarURL).then(avatar => { //We take the user's avatar
    avatar.resize(318, 317) //Resize it
    mask.resize(318, 317) //Resize the mask
    avatar.mask(mask) //Make the avatar circle

  welcome.print(font64, 508, 200, member.user.username) //We print the new user's name with the 64px font
  welcome.composite(avatar, 43, 38).write('Welcome2.png') //Put the avatar on the image and create the Welcome2.png bot
  member.guild.channels.get('552975320131567638').send(``, { files: ["Welcome2.png"] }) //Send the image to the channel
  console.log('Image sent!')
  })
  .catch(err => {
  console.log('error sending the avatar')
  })
})
``` 

## Contacts
If you have any issue, join my [discord](https://discord.gg/9JcGWvS)







