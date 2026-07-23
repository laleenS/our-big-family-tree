import FamilyTree from "../components/FamilyTree";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      <header className="flex flex-col gap-4 border-b border-slate-200 bg-white px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">
            Our Big Family Tree
          </h1>

          <p className="text-sm text-slate-500">
            Explore, connect, and grow our family history.
          </p>
        </div>

        <button className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-700">
          + Add Person
        </button>
      </header>

      <section className="px-4 py-4 sm:px-8">
        <input
          type="text"
          placeholder="Search for a family member..."
          className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none focus:border-slate-500 sm:max-w-md"
        />
      </section>

      <section className="mx-4 mb-4 sm:mx-8">
        <FamilyTree />
      </section>
    </main>
  );
}