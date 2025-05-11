# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js application designed as a test playground for the Model Context Protocol (MCP) client and server features of the Vercel AI SDK. The project serves as an experimental platform for working with MCP tools, transports, and integrations.

## Commands

### Development

```bash
# Start the development server
bun dev

# Build the application
bun build

# Start the production server
bun start

# Run linting
bun lint
```

### Database Operations

```bash
# Generate database migrations
bun db:generate

# Run database migrations
bun db:migrate

# Seed the database with initial data
bun db:seed
```

## Architecture

### Frontend

- **Next.js 15 with App Router**: Main framework for the application
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: Component library built on Radix UI primitives

### Backend

- **PostgreSQL**: Database (likely using Supabase)
- **Drizzle ORM**: Type-safe database operations
- **Next.js Server Actions**: Data mutation operations

### AI Integration

- **Vercel AI SDK**: Core framework for AI features
- **MCP (Model Context Protocol)**: Experimental feature for tool discovery and usage
- **Transport Methods**: SSE (Server-Sent Events) and stdio implementations
- **LLM Support**: OpenAI, Anthropic Claude, and Google Gemini

## Database Schema

The database uses Drizzle ORM with a PostgreSQL backend:

- **prompts**: Stores reusable prompts with the following fields:
  - `id`: Serial primary key
  - `name`: Prompt name
  - `description`: Prompt description
  - `content`: Actual prompt content
  - `created_at`: Timestamp of creation
  - `updated_at`: Timestamp of last update

## Key Files and Directories

- `actions/`: Contains server actions for data operations (e.g., prompts-action.ts)
- `app/`: Next.js App Router pages and layouts
- `components/ui/`: UI components from shadcn/ui
- `db/`: Database connection, schema definitions, and seeding logic
- `lib/`: Utility functions and helpers
- `public/`: Static assets

## MCP Implementation Notes

The Model Context Protocol (MCP) is an experimental feature in the AI SDK that provides:

1. **Standardized Interface**: For discovering and using tools across various services
2. **Transport Methods**:
   - SSE (Server-Sent Events): For remote servers
   - stdio: For local tool servers
3. **Client Initialization**: Using `experimental_createMCPClient`
4. **Tool Discovery**: Schema discovery or explicit schema definition

When working with MCP features:
- Always clean up MCP clients with `client.close()` to release resources
- Be aware of the experimental nature of these features, which may change in future SDK versions

## Environment Variables

The application requires several environment variables:

- **Database**: `DATABASE_URL`, `NODE_ENV`
- **LLM API Keys**: 
  - `OPENAI_API_KEY`
  - `ANTHROPIC_API_KEY` 
  - `GOOGLE_GENERATIVE_AI_API_KEY`

Copy `.env.example` to `.env.local` and populate with appropriate values.

## Development Rules

## General Rules

- Use `@` to import anything from the app unless otherwise specified
- Use kebab-case for all files and folders unless otherwise specified
- Don't update shadcn components unless otherwise specified
- Always use `type` instead of `interface` to define types
- When creating a new file, add a comment in `<ai_context>` tags at the top describing the file
- When updating a file, update the `<ai_context>` comment with the changes made
- Use `bunx --bun shadcn@latest add [component]` to add shadcn components

### Code Documentation

- Write extensive inline comments to explain functionality
- All files should include context comments at the top:

```tsx
/*
<ai_context>
Brief description of what this file does and any recent changes.
</ai_context>
*/
```

### Environment Variables

- If updating environment variables, update the `.env.example` file
- All environment variables should go in `.env.local`
- Do not expose environment variables to the frontend
- Use `NEXT_PUBLIC_` prefix for environment variables that need to be accessed from the frontend
- Import environment variables in server actions and components using `process.env.VARIABLE_NAME`

### Project Structure

- `actions` - Server actions
  - `db` - Database related actions
  - Other actions
- `app` - Next.js app router
  - `api` - API routes
  - `route` - An example route
    - `_components` - One-off components for the route
    - `layout.tsx` - Layout for the route
    - `page.tsx` - Page for the route
- `components` - Shared components
  - `ui` - UI components
  - `utilities` - Utility components
- `db` - Database
  - `schema` - Database schemas
- `lib` - Library code
  - `hooks` - Custom hooks
- `prompts` - Prompt files
- `public` - Static assets
- `types` - Type definitions

### Terminal Commands

- Use `bun` as the default for running terminal commands instead of `npm` or `npx`

## Frontend Rules

It uses Next.js, Tailwind, Shadcn, and Framer Motion.

#### General Rules

- Use `lucide-react` for icons
- Use Shadcn UI components with proper composition and customization
- Always use `type` instead of `interface` to define the types
- Follow Tailwind CSS class naming conventions and utility patterns
- Implement mobile-first responsive design with Tailwind breakpoints
- Maintain consistent spacing and layout using Tailwind's spacing scale
- Ensure components are accessible following WCAG guidelines
- Keep component styles modular and reusable
- Optimize component bundle size through proper code splitting
- useSidebar must be used within a SidebarProvider

#### Color rules

- There are 12 steps in each scale. Each step was designed for at least one specific use case
- Reference the steps and colors from `./app/globals.css`

##### Steps 1–2: Backgrounds
Steps 1 and 2 are designed for app backgrounds and subtle component backgrounds. You can use them interchangeably, depending on the vibe you're going for.

Appropriate applications include:
- Main app background
- Striped table background
- Code block background
- Card background
- Sidebar background
- Canvas area background

##### Steps 3–5: Component backgrounds
Steps 3, 4, and 5 are designed for UI component backgrounds.

- Step 3 is for normal states.
- Step 4 is for hover states.
- Step 5 is for pressed or selected states.

If your component has a transparent background in its default state, you can use Step 3 for its hover state.

Steps 11 and 12—which are designed for text—are guaranteed to Lc 60 and Lc 90 APCA contrast ratio on top of a step 2 background from the same scale.

##### Steps 6–8: Borders
Steps 6, 7, and 8 are designed for borders.

- Step 6 is designed for subtle borders on components which are not interactive. For example sidebars, headers, cards, alerts, and separators.
- Step 7 is designed for subtle borders on interactive components.
- Step 8 is designed for stronger borders on interactive components and focus rings.

##### Steps 9–10: Solid backgrounds
Steps 9 and 10 are designed for solid backgrounds.

Step 9 has the highest chroma of all steps in the scale. In other words, it's the purest step, the step mixed with the least amount of white or black. Because 9 is the purest step, it has a wide range of applications:

- Website/App backgrounds
- Website section backgrounds
- Header backgrounds
- Component backgrounds
- Graphics/Logos
- Overlays
- Coloured shadows
- Accent borders
- Step 10 is designed for component hover states, where step 9 is the component's normal state background.

Most step 9 colors are designed for white foreground text. Sky, Mint, Lime, Yellow, and Amber are designed for dark foreground text and steps 9 and 10.

##### Steps 11–12: Text
Steps 11 and 12 are designed for text.

- Step 11 is designed for low-contrast text.
- Step 12 is designed for high-contrast text.

#### Components

- Use divs instead of other html tags unless otherwise specified
- Separate the main parts of a component's html with an extra blank line for visual spacing
- Always tag a component with either `use server` or `use client` at the top, including layouts and pages

##### Organization

- All components be named using kebab case like `example-component.tsx` unless otherwise specified
- Put components in `/_components` in the route if one-off components
- Put components in `/components` from the root if shared components

##### Data Fetching

- Fetch data in server components and pass the data down as props to client components.
- Use server actions from `/actions` to mutate data.

##### Server Components

- Use `"use server"` at the top of the file.
- Implement Suspense for asynchronous data fetching to show loading states while data is being fetched.
- If no asynchronous logic is required for a given server component, you do not need to wrap the component in `<Suspense>`. You can simply return the final UI directly since there is no async boundary needed.
- If asynchronous fetching is required, you can use a `<Suspense>` boundary and a fallback to indicate a loading state while data is loading.
- Server components cannot be imported into client components. If you want to use a server component in a client component, you must pass the as props using the "children" prop

Example of a server layout:

```tsx
"use server";

export default async function ExampleServerLayout({ children }: { children: React.ReactNode }) {
  return children;
}
```

Example of a server page (with async logic):

```tsx
"use server";

import { Suspense } from "react";
import { SomeAction } from "@/actions/some-actions";
import SomeComponent from "./_components/some-component";
import SomeSkeleton from "./_components/some-skeleton";

export default async function ExampleServerPage() {
  return (
    <Suspense fallback={<SomeSkeleton className="some-class" />}>
      <SomeComponentFetcher />
    </Suspense>
  );
}

async function SomeComponentFetcher() {
  const { data } = await SomeAction();
  return (
    <SomeComponent
      className="some-class"
      initialData={data || []}
    />
  );
}
```

Example of a server page (no async logic required):

```tsx
"use server";

import SomeClientComponent from "./_components/some-client-component";

// In this case, no asynchronous work is being done, so no Suspense or fallback is required.
export default async function ExampleServerPage() {
  return <SomeClientComponent initialData={[]} />;
}
```

Example of a server component:

```tsx
"use server";

type ExampleServerComponentProps = {
  // Your props here
}

export async function ExampleServerComponent({ props }: ExampleServerComponentProps) {
  // Your code here
}
```

##### Client Components

- Use `"use client"` at the top of the file
- Client components can safely rely on props passed down from server components, or handle UI interactions without needing <Suspense> if there’s no async logic.
- Never use server actions in client components. If you need to create a new server action, create it in `/actions`

Example of a client page:

```tsx
"use client";

export default function ExampleClientPage() {
  // Your code here
}
```

Example of a client component:

```tsx
"use client";

type ExampleClientComponentProps = {
  initialData: any[];
}

export default function ExampleClientComponent({ initialData }: ExampleClientComponentProps) {
  // Client-side logic here
  return <div>{initialData.length} items</div>;
}
```

## Backend Rules

It uses Postgres, Supabase, Drizzle ORM, and Server Actions.

#### General Rules

- Never generate migrations. You do not have to do anything in the `db/migrations` folder inluding migrations and metadata. Ignore it.
- Do not edit migrations files. We use Drizzle to manage migrations automatically and never touch those files.
- Always use `type` instead of `interface` to define the types

#### Organization

#### Schemas

- Name files like `example-schema.ts`
- All schemas should go in `db/schema`
- Write db schemas as drizzle schemas in `db/schema` (Ex: `db/schema/prompts-schema.ts`)
- Write db queries with drizzle as server actions in an actions folder at the root (Ex: `actions/prompts-actions.ts`)
- If using a userId, always use `userId: text("user_id").notNull()`
- Always include createdAt and updatedAt columns in all tables
- Make sure to cascade delete when necessary
- Use enums for columns that have a limited set of possible values such as:

```ts
import { pgEnum } from "drizzle-orm/pg-core";

export const membershipEnum = pgEnum("membership", ["free", "pro"]);

membership: membershipEnum("membership").notNull().default("free");
```

Example of a schema:

`db/schema/todos-schema.ts`

```ts
import { boolean, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const todosTable = pgTable("todos", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: text("user_id").notNull(),
  content: text("content").notNull(),
  completed: boolean("completed").default(false).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .notNull()
    .$onUpdate(() => new Date())
});

export type InsertTodo = typeof todosTable.$inferInsert;
export type SelectTodo = typeof todosTable.$inferSelect;
```

And a more complex schema:

```ts
import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const chatsTable = pgTable("chats", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: text("user_id").notNull(),
  name: text("name").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .notNull()
    .$onUpdate(() => new Date())
});

export type InsertChat = typeof chatsTable.$inferInsert;
export type SelectChat = typeof chatsTable.$inferSelect;
```

```ts
import { pgEnum, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { chatsTable } from "./chats-schema";

export const roleEnum = pgEnum("role", ["assistant", "user"]);

export const messagesTable = pgTable("messages", {
  id: uuid("id").defaultRandom().primaryKey(),
  chatId: uuid("chat_id")
    .references(() => chatsTable.id, { onDelete: "cascade" })
    .notNull(),
  content: text("content").notNull(),
  role: roleEnum("role").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .notNull()
    .$onUpdate(() => new Date())
});

export type InsertMessage = typeof messagesTable.$inferInsert;
export type SelectMessage = typeof messagesTable.$inferSelect;
```

#### Server Actions

- When importing actions, `use @/actions` or `@/actions/db` if db related
- DB related actions should go in the `actions/db` folder
- Other actions should go in the `actions` folder
- Name files like `example-actions.ts`
- All actions should go in the `actions` folder
- Only write the needed actions
- Throw typed errors for failures instead of returning status objects
- Include Action at the end of function names (Ex: exampleFunctionAction)
- Return plain data on success
- Sort in CRUD order: Create, Read, Update, Delete
- Include detailed error messages in thrown exceptions
- Use try/catch blocks with proper error logging

Example of an action:

`actions/db/todos-actions.ts`

```ts
"use server";

import { db } from "@/db/db";
import { InsertTodo, SelectTodo, todosTable } from "@/db/schema/todos-schema";
import { eq } from "drizzle-orm";

export async function createTodoAction(todo: InsertTodo): Promise<SelectTodo> {
  try {
    const [newTodo] = await db.insert(todosTable).values(todo).returning();
    return newTodo;
  } catch (error) {
    console.error("Error creating todo:", error);
    throw new Error("Failed to create todo: " + (error instanceof Error ? error.message : "Unknown error"));
  }
}

export async function getTodosAction(userId: string): Promise<SelectTodo[]> {
  try {
    return await db.query.todos.findMany({
      where: eq(todosTable.userId, userId)
    });
  } catch (error) {
    console.error("Error getting todos:", error);
    throw new Error("Failed to fetch todos: " + (error instanceof Error ? error.message : "Database error"));
  }
}

export async function updateTodoAction(id: string, data: Partial<InsertTodo>): Promise<SelectTodo> {
  try {
    const [updatedTodo] = await db.update(todosTable).set(data).where(eq(todosTable.id, id)).returning();
    
    if (!updatedTodo) {
      throw new Error("Todo not found");
    }
    
    return updatedTodo;
  } catch (error) {
    console.error("Error updating todo:", error);
    throw new Error(`Failed to update todo ${id}: ` + (error instanceof Error ? error.message : "Update failed"));
  }
}

export async function deleteTodoAction(id: string): Promise<void> {
  try {
    const [deletedTodo] = await db.delete(todosTable).where(eq(todosTable.id, id)).returning();
    
    if (!deletedTodo) {
      throw new Error("Todo not found for deletion");
    }
  } catch (error) {
    console.error("Error deleting todo:", error);
    throw new Error(`Failed to delete todo ${id}: ` + (error instanceof Error ? error.message : "Deletion error"));
  }
}

```
## Type Rules

### 1. Shared Types (Used in Multiple Files or Places)

- Location: Place in the `types` folder that is located in the root project.
- Filename: Use the format `example-types.ts`.
- Import Path: Always import shared types via `@/types`.
- Export: Export all shared types from `types/index.ts`.
- Type Alias Preference: Prefer `type` aliases over `interface` unless extending objects/classes.
- DB Types: For types generated from the database schema, import from `@/db/schema` (e.g., `SelectTodo` from `todos-schema.ts`).

**Example:**

`types/actions-types.ts`
```ts
export type ActionState =
  | { isSuccess: true; message: string; data: T }
  | { isSuccess: false; message: string; data?: never };
```

`types/index.ts`
```ts
export * from "./actions-types";
```

`components/MyComponent.tsx`
```ts
import { ActionState } from "@/types";

function MyComponent(props: { action: ActionState }) {
  // ...
}
```

---

### 2. Local Types (Used Only Within a Single File)

- Location: Define directly within the file where used.
- No Export: Do not export local types.
- No Shared Folder: Do not move to the `types` folder.
- Naming: Use clear, descriptive names, but avoid cluttering the global type space.

**Example:**

`components/StatusBadge.tsx`
```ts
// Local type, only used in this file
type Status = "idle" | "loading" | "success" | "error";

export function StatusBadge({ status }: { status: Status }) {
  let color = "gray";
  if (status === "loading") color = "blue";
  if (status === "success") color = "green";
  if (status === "error") color = "red";

  return {status};
}
```

---

### 3. General Type Guidelines

- Keep types as close as possible to where they’re used. Only promote to shared types when needed in multiple files.
- Review and refactor types regularly. If a local type is reused elsewhere, move it to the `types` folder and update imports.
- Consistent Naming: Use `PascalCase` for type names and `kebab-case` for filenames (e.g., `user-types.ts`).

---

**Quick Reference Table**

| Scenario                  | Location           | File Naming         | Export? | Import Path   |
|---------------------------|--------------------|---------------------|---------|--------------|
| Shared/model types        | `types/`           | `example-types.ts`  | Yes     | `@/types`    |
| Local (single-file) types | Same file as usage | N/A                 | No      | N/A          |
| DB types                  | `db/schema`        | `todos-schema.ts`   | Yes     | `@/db/schema`|

---

**Summary**

- Shared types: In `types/`, exported, imported via `@/types`.
- Local types: Keep in the file, not exported or shared.
- DB types: Import from `@/db/schema`.
- Prefer `type` over `interface` unless necessary.

## Auth Rules

It uses Clerk for authentication.

#### General Rules

- Use Clerk middleware to protect routes.
- Use Clerk components (`<UserButton>`, `<SignInButton>`, etc.) for UI elements.
- Import the auth helper with `import { auth } from "@clerk/nextjs/server"` in server components
- await the auth helper in server actions
- Use Clerk server-side helpers (`auth()`) in Server Actions to get user ID.

#### Securing Server Actions with User ID

When Server Actions interact with data tied to a specific user (e.g., fetching, creating, updating, or deleting user-specific records), they **must** enforce data ownership using the authenticated user's ID obtained via Clerk.

1.  **Enforce Authentication:** Begin every Server Action requiring user data by calling the `requireUserId` helper function (from `@/actions/auth-actions.ts`) inside a `try...catch` block. This function internally calls `await auth()` from `@clerk/nextjs/server` and throws an "Unauthorized" error if the user is not logged in, halting the action safely.

```typescript
// actions/prompts-actions.ts
"use server";

import { db } from "@/db";
import { prompts } from "@/db/schema/prompts-schema";
import { devDelay } from "@/lib/dev-delay";
// Import Drizzle operators 'and' and 'eq' (equals)
import { and, desc, eq } from "drizzle-orm";
// Import our auth helper
import { requireUserId } from "./auth-actions";

// --- GET Prompts ---
export async function getPrompts() {
  try {
    // Get user ID; throws error if not logged in
    const userId = await requireUserId();
    await devDelay();

    console.log(`Server Action: Fetching prompts for user ${userId}...`);
    // Add WHERE clause to filter by user_id
    const userPrompts = await db
      .select()
      .from(prompts)
      .where(eq(prompts.user_id, userId)) // Only select prompts matching the user ID
      .orderBy(desc(prompts.created_at));

    console.log(`Server Action: Fetched ${userPrompts.length} prompts.`);
    return userPrompts;
  } catch (error) {
    console.error("Server Action Error (getPrompts):", error);
    // Propagate the specific "Unauthorized" error or a generic one
    if (error instanceof Error && error.message.startsWith("Unauthorized")) {
      throw error;
    }
    throw new Error("Failed to fetch prompts.");
  }
}
```

2.  **Filter Database Queries:** Always incorporate the `userId` obtained from `requireUserId` into your Drizzle database queries:
    *   **Read (`query.findMany`, `select().where`):** Use `where(eq(table.userId, userId))`
    *   **Create (`db.insert`):** Include `{ userId: userId, ...otherData }` in the `values()` call.
    *   **Update (`db.update`):** Use `where(and(eq(table.id, recordId), eq(table.userId, userId)))`.
    *   **Delete (`db.delete`):** Use `where(and(eq(table.id, recordId), eq(table.userId, userId)))`.

3.  **Verify Update/Delete Operations:** After update or delete operations scoped by `userId`, check if a record was returned by `.returning()`. If `returning()` yields an empty array or `undefined`, it means the record ID either didn't exist or didn't belong to the current user. Throw a specific error (e.g., "Record not found or user unauthorized") in this case. Catch this specific error in your `catch` block alongside the "Unauthorized" error before the generic fallback.

    ```typescript
    // Example: Updating a record securely
    import { and, eq } from "drizzle-orm";
    // ... other imports and requireUserId call within try block

    const [updatedRecord] = await db.update(prompts)
      .set({ content: "new content", updated_at: new Date() })
      .where(and(eq(prompts.id, recordId), eq(prompts.userId, userId))) // Ensures ownership
      .returning();

    // Check if the update affected any row owned by the user
    if (!updatedRecord) {
      throw new Error("Prompt not found or user unauthorized to update.");
    }
    // ... rest of try block
    // ... catch block handles "Unauthorized" and "Prompt not found..." errors specifically
    ```

By strictly adhering to these steps, you ensure Server Actions robustly enforce data ownership, preventing users from accessing or modifying data that doesn't belong to them.
