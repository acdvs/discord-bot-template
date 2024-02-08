import { ChatInputCommandInteraction } from 'discord.js';
import { SlashCommandBuilder } from '@discordjs/builders';

import Bot from '../structures/Bot';

export interface Command {
  options: SlashCommandBuilder;
  run: (interaction: ChatInputCommandInteraction, bot?: Bot) => Promise<void>;
}
