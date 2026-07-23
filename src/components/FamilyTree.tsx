import PersonCard from "./PersonCard";
import { people } from "../data/family";

export default function FamilyTree() {
  return (
    <div className="relative h-[700px] w-full overflow-auto bg-slate-100 rounded-xl">
      {people.map((person) => (
        <div
          key={person.id}
          className="absolute"
          style={{
            left: person.x,
            top: person.y,
          }}
        >
          <PersonCard
            name={person.name}
            gender={person.gender}
          />
        </div>
      ))}
    </div>
  );
}