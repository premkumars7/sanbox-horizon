Debugging shortcuts

Run the server from VS Code and Chrome from the script to debug server-side in VS Code and client-side in Chrome DevTools.

1. In VS Code Run & Debug, start one of the following:

- "Next.js: debug server only (launch)" — starts the Next.js dev server with the Node inspector enabled (recommended when you want to debug server/API code in VS Code).
- "Next.js: debug full stack (launch)" — starts the server and launches Chrome (use this for full-stack debugging in one action).

2. In a terminal, run the Chrome helper (client-side debugging):
```bash
./scripts/launch-chrome-debug.sh "http://local.pearson.com:3000/"
```

This launches Chrome with remote debugging enabled and an isolated profile.
# VS Code Debugging Setup for Next.js with Environment Variables

## Quick Start

### 1. Generate `.env.local` File

Run this command to create/update `.env.local` with resolved variables from Terraform/AWS (default behavior):

```bash
./pmc-react-shared/scripts/init_env.sh --stg4 --skip-secrets
```

If you explicitly want the variables exported into your current interactive shell instead of writing to a file, source the wrapper with the `--export` flag (strict — must be sourced):

```bash
source ./pmc-react-shared/scripts/source_init_env.sh --stg4 --export
```

**Available environments**: `--dev2`, `--stg2`, `--stg4`, `--aqa`, `--ppe`, `--prd`

### 2. Add Debugger Statements

Place `debugger;` statements in your server-side code where you want to pause execution:

```typescript
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const userToken = req.headers['x-authorization'] as string;
  debugger; // Execution will pause here
  // ... rest of your code
}
```

### 3. Start Debugging

1. Press `F5` or go to **Run and Debug** panel (Ctrl+Shift+D / Cmd+Shift+D)
2. Select **"Next.js: debug full stack (launch)"** from the dropdown (or use the compound to start server+client)
3. Click the green play button or press `F5`
4. Navigate in your browser to trigger the code path
5. Debugger will pause at your `debugger;` statements

### 4. Debug Controls

- **F5** - Continue
- **F10** - Step Over
- **F11** - Step Into
- **Shift+F11** - Step Out
- **Ctrl+Shift+F5** / **Cmd+Shift+F5** - Restart
- **Shift+F5** - Stop

Hover over variables to inspect values, or use the **Debug Console** to evaluate expressions.

## Debug Configurations

This workspace has three debug configurations in `launch.json`:

### Next.js: debug server-side
- **Type**: Attach
- **Port**: 9229
- **Use case**: Attach to an already running Next.js dev server with `--inspect` flag

### Next.js: debug client-side
- **Type**: Chrome
- **URL**: http://local.pearson.com:3000/
- **Use case**: Debug React components and client-side code in Chrome DevTools

### Next.js: debug full stack ⭐
- **Type**: Launch
- **Environment**: Loads from `.env.local`
- **Use case**: Debug server-side API routes and Next.js server code (RECOMMENDED)

## Important Notes

### Server-Side vs Client-Side Debugging

- **Server-side code** (API routes, `getServerSideProps`, etc.):
  - Use **"Next.js: debug full stack"** configuration
  - Debugger statements work in VS Code
  - Environment variables loaded from `.env.local`

- **Client-side code** (React components, hooks, browser code):
  - Use Chrome DevTools (`F12` in browser)
  - VS Code client-side configuration launches Chrome with DevTools
  - Or use `chrome://inspect` in Chrome

### Environment Variables

- `.env.local` is in `.gitignore` - **NEVER commit it!**
- Contains secrets and API keys
- Regenerate it when switching environments
- The `envFile` property in `launch.json` loads variables into debug sessions

### Troubleshooting

**Breakpoints are gray/hollow?**
- Source maps may not be configured properly
- Check that `next.config.js` has `devtool: 'eval-source-map'` for dev server builds

**Port conflicts?**
- Next.js may use ports 9229, 9230, or 9231 for debugging
- Kill existing Node processes: `pkill -f "node.*next"`
- Restart the debugger

**Environment variables not loading?**
- Verify `.env.local` exists in workspace root
- Check `launch.json` has `"envFile": "${workspaceFolder}/.env.local"`
- Regenerate `.env.local` if recently pulled code changes

**Can't trigger breakpoint?**
- Ensure you're debugging server-side code (not client-side)
- Verify the code path is actually executing (check Network tab in browser)
- Try adding `console.log()` to confirm code is reached
