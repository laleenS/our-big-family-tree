export type Person = {
  id: string;
  name: string;
  gender: "male" | "female" | "other";
  x: number;
  y: number;
};

export const people: Person[] = [
  {
    id: "1",
    name: "Grandfather",
    gender: "male",
    x: 300,
    y: 50,
  },
  {
    id: "2",
    name: "Grandmother",
    gender: "female",
    x: 500,
    y: 50,
  },
  {
    id: "3",
    name: "Father",
    gender: "male",
    x: 250,
    y: 220,
  },
  {
    id: "4",
    name: "Mother",
    gender: "female",
    x: 450,
    y: 220,
  },
  {
    id: "5",
    name: "You",
    gender: "other",
    x: 350,
    y: 400,
  },
];
