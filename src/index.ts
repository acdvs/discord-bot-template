import 'dotenv/config';
import { ClientOptions } from 'discord.js';
import { ActivityType } from 'discord-api-types/v10';

import Bot from './structures/Bot';

const DiscordBot = new Bot(<ClientOptions>{
  presence: {
    activities: [
      {
        type: ActivityType.Watching,
        name: 'something',
      },
    ],
  },
  intents: [],
});

DiscordBot.start(process.env.BOT_TOKEN as string);
