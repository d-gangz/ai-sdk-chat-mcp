/*
<ai_context>
A simple implementation of an MCP client that connects to the @upstash/context7-mcp server.
</ai_context>
*/

import { experimental_createMCPClient } from "ai";
import { Experimental_StdioMCPTransport } from "ai/mcp-stdio";

/**
 * Creates an MCP client that connects to the Context7 server via stdio transport
 * @returns A promise that resolves to the MCP client
 */
export async function createContext7Client() {
  // Create stdio transport configuration for the Context7 server
  const transport = new Experimental_StdioMCPTransport({
    command: "bunx",
    args: ["-y", "@upstash/context7-mcp"],

    // const transport = new Experimental_StdioMCPTransport({
    //   command: "node",
    //   args: ["/Users/gang/git-projects/mcp-template/build/index.js"],
    //   env: {
    //     EXA_API_KEY: "94868f3a-1974-4bc7-a60f-1ba098d3e687",
    //   },
  });

  // Create and return the MCP client
  return experimental_createMCPClient({ transport });
}

// "mcp-template": {
//       "command": "node",
//       "args": ["/Users/gang/git-projects/mcp-template/build/index.js"],
//       "env": {
//         "EXA_API_KEY": "94868f3a-1974-4bc7-a60f-1ba098d3e687"
//       }
//     },
