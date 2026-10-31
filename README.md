# Our Big Family Tree

A small family-tree web app I started as a way to practice building a project with Next.js, TypeScript, React components, and Tailwind CSS.

The idea is simple: keep family-member data separate from the UI, then render each person as a card in a visual tree. I also wanted to experiment with search and adding people without turning the project into something overly complicated.

## What it does

- Displays family members as cards in a tree layout
- Lets you search by name
- Lets you add a person during the current browser session
- Keeps the sample family data in one file so it is easy to edit
- Uses reusable React components for the tree and person cards

## Built with

- Next.js
- React
- TypeScript
- Tailwind CSS

## Run it locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## What I learned

This project helped me get more comfortable with passing data through components, using TypeScript types, managing simple React state, and organizing a small Next.js project without putting everything in one file.

## Still on my list

- Draw relationship lines between family members
- Save added people instead of resetting on refresh
- Add better relationship labels
- Make the layout work better for much larger families
