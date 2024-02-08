import { ChatInputCommandInteraction } from 'discord.js';
import { SlashCommandBuilder } from '@discordjs/builders';

import { createBasicEmbed } from '../util/helpers';
import { Command } from '../util/types';

export default <Command>{
  options: new SlashCommandBuilder().setName('ping').setDescription('pong'),
  run,
};

async function run(ix: ChatInputCommandInteraction): Promise<void> {
  ix.reply(createBasicEmbed('Pong!'));
}
