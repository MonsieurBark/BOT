module.exports = {
  name: 'pp',
  description: 'Display avatar URL.',
  execute(message) {
    if (!message.mentions.users.size) {
      return message.channel.send(`Votre pp est : ${message.author.displayAvatarURL({ format: 'png' })}`);
    }

    const avatarList = message.mentions.users.map(user => {
      return `La pp de ${user.username} est : ${user.displayAvatarURL({ format: 'png' })}`;
    });

    message.channel.send(avatarList);
  }
};