import { Injectable, OnModuleInit } from '@nestjs/common';
import { Client, IntentsBitField, Message } from 'discord.js';

@Injectable()
export class JerkbotService implements OnModuleInit {
  private readonly client: Client;

  constructor() {
    this.client = new Client({ intents: 131071 });
    this.client.on('ready', () => {
      console.log(`Logged in as ${this.client.user?.tag}`);
      this.client.user.setPresence({
        status: 'dnd',
        activities: [{ name: 'GitHub copilot' }],
      });
    });
  }

  async onModuleInit() {
    await this.client.login(process.env.DISCORD_TOKEN);
    this.client.on('messageCreate', this.handleMessage);
  }

  async handleMessage(message: Message) {
    if (message.content.toLowerCase() === 'ping') {
      message.reply('pong');
    }
  }
}
