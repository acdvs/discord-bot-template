import { APIEmbed, InteractionReplyOptions } from 'discord.js';
import { EmbedBuilder } from '@discordjs/builders';

class BasicEmbed extends EmbedBuilder {
  color = 0xfbab0e;

  constructor(options?: APIEmbed) {
    super(options);
    this.setColor(this.color);
  }
}

// Create a description-only embed prewrapped in a reply object
export function createBasicEmbed(
  message: string,
  ephemeral?: boolean
): InteractionReplyOptions {
  return {
    embeds: [
      new BasicEmbed({
        description: message,
      }),
    ],
    ephemeral,
  };
}
