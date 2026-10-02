#!/usr/bin/env node
import { createChannelMcp } from './_shared/create-channel-mcp.mjs';

const mcp = createChannelMcp({
  slug: "hired3",
  boardId: "hired3-official",
  domain: "hired3.com",
  npmName: "zc-hired3-scout-mcp",
});

mcp.start().catch((e) => {
  console.error(e);
  process.exit(1);
});
