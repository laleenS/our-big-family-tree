type Props = {
  name: string;
  gender: string;
};

export default function PersonCard({ name, gender }: Props) {
  const border =
    gender === "male"
      ? "border-blue-400"
      : "border-pink-400";

  return (
    <div
      className={`rounded-xl border-2 ${border} bg-white px-4 py-3 shadow-md w-40 text-center`}
    >
      <div className="text-lg font-semibold">
        {name}
      </div>
    </div>
  );
}