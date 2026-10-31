import type { Person } from "../data/family";

type Props = {
  person: Person;
  parents: string[];
};

export default function PersonCard({ person, parents }: Props) {
  return (
    <li className="person-card">
      <h3>{person.name}</h3>
      <p>{parents.length ? `Parents: ${parents.join(" and ")}` : "No parents recorded"}</p>
    </li>
  );
}
