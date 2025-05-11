# AI SDK MCP Test Playground

A Next.js project for testing the Model Context Protocol (MCP) client and server features of the Vercel AI SDK. This playground allows experimenting with MCP tools, transports, and integrations.

## About MCP

Model Context Protocol (MCP) is an experimental feature in the AI SDK that provides a standardized interface for discovering and using tools across various services. It enables:

- Connection to MCP servers using different transport methods (SSE, stdio)
- Tool discovery from remote or local servers
- Standardized tool calling for AI models

## Tech Stack

### Frontend
- **Framework:** [Next.js 15](https://nextjs.org)
- **Styling:** [Tailwind CSS](https://tailwindcss.com)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com)

### AI Integration
- **AI SDK:** [Vercel AI SDK](https://ai-sdk.dev)
- **MCP Client:** Using `experimental_createMCPClient`
- **Transport Methods:** SSE and stdio implementations

## Project Structure

- `actions` - Server actions for AI interactions
- `app` - Next.js app router pages and layouts
- `components` - Reusable UI components
- `db` - Database for storing prompts and results
- `lib` - Utility functions and MCP client setup
- `public` - Static assets

## Getting Started

1. Create your environment file:
```bash
cp .env.example .env.local
```

2. Install dependencies:
```bash
bun install
```

3. Run the development server:
```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## MCP Implementation Examples

- Creating MCP clients with different transport methods
- Discovering and using tools from MCP servers
- Integrating tool responses with AI models

## Learn More

- [AI SDK Documentation](https://ai-sdk.dev/docs)
- [MCP Tools Documentation](https://ai-sdk.dev/docs/ai-sdk-core/tools-and-tool-calling#mcp-tools)
- [MCP Node.js Cookbook](https://ai-sdk.dev/cookbook/node/mcp-tools)
- [Next.js Documentation](https://nextjs.org/docs)

## References

This project is for testing and development purposes for MCP client/server features.
