# Our Big Family Tree

A small family-tree project using Next.js, React, and TypeScript. The idea is to
practice working with related data: each person has an ID, and parent relationships
refer to those IDs.

You can search by name and add a person with up to two parents. The cards are grouped
by generation. All the sample people are fictional. New entries disappear when the
page reloads, so please use made-up names.

## Run locally

Use Node.js 22 or 24. From the project folder:

```sh
npm ci
npm run dev
```

Open `http://localhost:3000`. To check the project:

```sh
npm run lint
npm run build
```

The main component is `src/components/FamilyTree.tsx`, and the sample data is in
`src/data/family.ts`. This project focuses on React state, form validation, and
keeping relationships separate from display names.

There is no database or sign-in. Editing people, saving changes, and drawing
relationship lines are not included yet. Saving the tree would be a useful next step.
