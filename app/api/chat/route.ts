import { openai } from "@ai-sdk/openai";
import { streamText, tool } from "ai";
import { z } from "zod";
import { createContext7Client } from "@/lib/mcp-client";

export const maxDuration = 60;

export async function POST(req: Request) {
  const { messages } = await req.json();

  // Create the MCP client and get its tools
  const mcpClient = await createContext7Client();
  const mcpTool = await mcpClient.tools();

  try {
    const result = streamText({
      model: openai("gpt-4o"),
      messages,
      tools: {
        // Keep existing tools exactly the same
        weather: tool({
          description: "Get the weather in a location (fahrenheit)",
          parameters: z.object({
            location: z
              .string()
              .describe("The location to get the weather for"),
          }),
          execute: async ({ location }) => {
            const temperature = Math.round(Math.random() * (90 - 32) + 32);
            return {
              location,
              temperature,
            };
          },
        }),
        convertFahrenheitToCelsius: tool({
          description: "Convert a temperature in fahrenheit to celsius",
          parameters: z.object({
            temperature: z
              .number()
              .describe("The temperature in fahrenheit to convert"),
          }),
          execute: async ({ temperature }) => {
            const celsius = Math.round((temperature - 32) * (5 / 9));
            return {
              celsius,
            };
          },
        }),
        // Add MCP tools
        ...mcpTool,
      },
      // note to close the mcp client this way for streamText. For generatetext, it will be different.
      onFinish: async () => {
        await mcpClient.close();
      },
    });

    return result.toDataStreamResponse();
  } catch (error) {
    console.error(error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
