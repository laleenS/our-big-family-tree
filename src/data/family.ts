export type Person = {
  id: string;
  name: string;
  parentIds: string[];
};

// Fictional people for the demo; IDs keep relationships separate from names.
export const people: Person[] = [
  { id: "1", name: "Alex Morgan", parentIds: [] },
  { id: "2", name: "Sam Morgan", parentIds: [] },
  { id: "3", name: "Jamie Morgan", parentIds: ["1", "2"] },
  { id: "4", name: "Taylor Reed", parentIds: [] },
  { id: "5", name: "Casey Morgan", parentIds: ["3", "4"] },
];
