# Our Big Family Tree

I built this to practice showing related data in React rather than just a list of
unconnected cards. It uses Next.js, React, TypeScript, and CSS with Tailwind's reset.

You can search fictional people by name and add a person with up to two recorded
parents. Cards are grouped by generation and show the parents' names. Search ignores
capitalization and extra spaces. Adding people does not save them anywhere: reloading
restores the sample tree. Please use made-up names, not private family information.

## Run it

Use Node.js 22 or 24 and npm:

```sh
npm ci
npm run dev
npm run lint
npm run build
```

The development server uses port 3000. `npm start` serves a completed production build.
No account, API key, database, or network font download is needed.

The main code is in `src/components/FamilyTree.tsx`. `src/data/family.ts` contains
the `Person` type and sample data; relationships use IDs instead of matching names.
I practiced controlled inputs, form validation, React state, and deriving generations
from parent relationships. Choosing only existing parents prevents cycles when adding.

This is a small demo, not a genealogy service. It does not edit/delete people, save
changes, record spouses, or draw relationship lines. A future version could add local
export/import and a diagram once those basics have useful tests.
