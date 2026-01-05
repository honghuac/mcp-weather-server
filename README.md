## MCP Server Demo (based on a Weather Reporting service)

Let's use the **MCP Inspector** to test this MCP server with a simple **Weather Server** use case.

A future version of this demo involves real weather data, meanwhile we validate the server using a web-based debugging tool for MCP servers, called the MCP Inspector.

---

## Run the MCP Inspector

Execute the following command in your OS terminal window:

```bash
npx -y @modelcontextprotocol/inspector npx -y tsx main.ts
```

The resulting output:
- A local Inspector URL (e.g. `http://127.0.0.1:6274`)
- A session token
- A direct link with the token pre-filled

> **Tip:** to avoid entering the token manually, use the pre-filled link

---

## Test the Weather Tool

1. Click **Connect** in the Inspector  
2. Go to **Tools**
3. Select **`get-weather`**
4. Enter a city name (e.g. `Singapore`)
5. Click **Run Tool**

**Generated Response:**
```
The weather in Singapre is cloudy
```

---

## Troubleshooting

- **Connection errors:** Make sure you opened the Inspector using the link with the pre-filled session token.
