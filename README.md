### A template for basic Discord bots that respond to slash commands.

## Setup

1. Create a `.env` file at the root with the following contents:

   ```bash
   BOT_TOKEN=abc
   DEV_GUILD_ID=123
   ```

   where `BOT_TOKEN` is your bot's Discord token and `DEV_GUILD_ID` is the ID of the Discord guild you'll test in locally.

2. Fill out/replace placeholder values in `src/index.ts` and the sample command in `src/commands/ping.ts`.

## Features

- On startup, the bot will automatically push all commands to the servers it's in.
- The `createBasicEmbed` function from `src/util/helpers.ts` will generate a simple colored embed for replies. Just pass in the embed body text.
- Use the `msg`, `warn`, and `error` functions from `src/util/logger.ts` for nicer console logging.
