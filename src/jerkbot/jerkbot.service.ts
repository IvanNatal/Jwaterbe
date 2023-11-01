import { Injectable, OnModuleInit } from '@nestjs/common';
import { Client, Message, TextChannel } from 'discord.js';
import { JcoinsRepository } from 'src/jcoins/repositories/jcoins.repository';

@Injectable()
export class JerkbotService implements OnModuleInit {
  private readonly client: Client;
  private readonly jcoinsrepository: JcoinsRepository;

  constructor(jcoinsrepository: JcoinsRepository) {
    this.jcoinsrepository = jcoinsrepository;
    this.client = new Client({ intents: 131071 });
    this.client.on('ready', () => {
      console.log(`Logged in as ${this.client.user?.tag}`);
      this.client.user.setPresence({
        status: 'dnd',
        activities: [{ name: 'GitHub copilot' }],
      });
      // this.startSendingMessages();
    });
  }

  async onModuleInit() {
    await this.client.login(process.env.DISCORD_TOKEN);
    this.client.on('messageCreate', this.handleMessage);
  }

  async handleMessage(message: Message) {
    if (message.content.toLowerCase() === 'ping') {
      message.reply('pong!');
    }
  }

  async sendMessage() {
    const tokens = await this.jcoinsrepository.createAndSaveToken();
    const channel = this.client.channels.cache.get(
      process.env.DISCORD_CHANNEL_ID,
    ) as TextChannel;
    channel.send(tokens.token);
  }

  startSendingMessages() {
    setInterval(() => {
      this.sendMessage();
    }, 30000);
  }
}
