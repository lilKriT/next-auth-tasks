# Next Auth Tasks

This is a project created to learn Next Auth.
Created by lilKriT

# Technology:

- Next
- TypeScript
- Tailwind
- Prisma
- Next Auth.

# Additional Technology:

- Hook Form
- Zod
- PostgreSQL

# Brief Reminder:

- add `api/auth/[...nextauth]/route.ts` and the few lines of code
- add `options.ts for it`
- add necessary secrets
- add image remote pattern if you want to use image

That's it. Then to protect routes, you can use:

- middleware with matcher
- on server `const session = await getServerSession(options);` and `{session ? <p>You're logged in.</p> : <p>Not logged in.</p>}`
- on client - create authprovider and add it to layout. Inside component - `use client` `import {useSession}` and use the session
