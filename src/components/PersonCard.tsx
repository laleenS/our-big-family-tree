import type { Person } from "../data/family";

type Props = Pick<Person, "name" | "gender">;

export default function PersonCard({ name, gender }: Props) {
  let border = "border-slate-400";

  if (gender === "male") border = "border-blue-400";
  if (gender === "female") border = "border-pink-400";

  return (
    <div className={`w-40 rounded-xl border-2 ${border} bg-white px-4 py-3 text-center shadow-sm`}>
      <div className="font-semibold text-slate-900">{name}</div>
    </div>
  );
}
