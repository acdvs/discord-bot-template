import {
  ChatInputCommandInteraction,
  Client,
  GuildMember,
  Interaction,
} from 'discord.js';

import CommandManager from './CommandManager';
import log from '../util/logger';

export default class Bot extends Client {
  private _commands = new CommandManager(this);

  async start(token: string): Promise<void> {
    try {
      log.msg('Logging in...');
      this.login(token);
    } catch (err) {
      log.error('Unable to login!');
    }

    this.on('ready', this._onReady);
    this.on('interactionCreate', this._onInteractionCreate);
    this.on('guildCreate', this._onGuildCreate);

    process.on('exit', () => {
      this.destroy();
    });
  }

  private async _onReady(): Promise<void> {
    if (!this.user) {
      log.error('Client user does not exist');
      process.exit(1);
    }

    log.msg(`Starting ${this.user.username}...`);

    if (!this.application?.owner) {
      await this.application?.fetch();
    }

    await this._commands.load();

    log.msg(`${this.user.username} successfully started.`);
  }

  private _onGuildCreate() {
    this._commands.pushCommands();
  }

  private _onInteractionCreate(ix: Interaction): void {
    const member = ix.member as GuildMember;

    if (!ix.inGuild() || !member || !('id' in member)) {
      return;
    }

    if (ix.isCommand() && ix instanceof ChatInputCommandInteraction) {
      this._commands.runCommand(ix);
    }
  }
}
