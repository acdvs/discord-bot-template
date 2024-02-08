import 'dotenv/config';
import { ClientOptions } from 'discord.js';
import { ActivityType } from 'discord-api-types/v10';

import Bot from './structures/Bot';

const Palbot = new Bot(<ClientOptions>{
  presence: {
    activities: [
      {
        type: ActivityType.Watching,
        name: `Palworld servers`,
      },
    ],
  },
  intents: [],
});

Palbot.start(process.env.BOT_TOKEN!);
