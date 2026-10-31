import PersonCard from "./PersonCard";
import type { Person } from "../data/family";

type Props = {
  people: Person[];
};

export default function FamilyTree({ people }: Props) {
  if (people.length === 0) {
    return (
      <div className="flex h-64 items-center justify-center rounded-xl border border-dashed border-slate-300 bg-slate-50 text-sm text-slate-500">
        No family members match that search.
      </div>
    );
  }

  return (
    <div className="relative h-[620px] w-full overflow-auto rounded-xl border border-slate-200 bg-slate-50">
      {people.map((person) => (
        <div
          key={person.id}
          className="absolute"
          style={{ left: person.x, top: person.y }}
        >
          <PersonCard name={person.name} gender={person.gender} />
        </div>
      ))}
    </div>
  );
}
