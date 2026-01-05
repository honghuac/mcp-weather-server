import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { z } from "zod";

const server = new McpServer({
  name: "Weather Server",
  version: "1.0.0"
});

server.tool(
  'get-weather',
  'Tool to get the weather of a city',
  {
    city: z.string().describe("The name of the city to get the weather for")
  },
  async({ city }) => {
    // For now, return a simple static response
    return {
      content: [
        {
          type: "text",
          text: `The weather in ${city} is sunny`
        }
      ]
    };
  }
);

const transport = new StdioServerTransport();
server.connect(transport);