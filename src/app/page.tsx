"use client";

import { FormEvent, useMemo, useState } from "react";
import FamilyTree from "../components/FamilyTree";
import { people as starterPeople, type Person } from "../data/family";

export default function Home() {
  const [people, setPeople] = useState<Person[]>(starterPeople);
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [gender, setGender] = useState<Person["gender"]>("other");

  const filteredPeople = useMemo(() => {
    const term = search.trim().toLowerCase();
    if (!term) return people;

    return people.filter((person) =>
      person.name.toLowerCase().includes(term)
    );
  }, [people, search]);

  function addPerson(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const cleanName = name.trim();
    if (!cleanName) return;

    const index = people.length;
    const newPerson: Person = {
      id: crypto.randomUUID(),
      name: cleanName,
      gender,
      x: 120 + (index % 4) * 190,
      y: 500 + Math.floor(index / 4) * 120,
    };

    setPeople((current) => [...current, newPerson]);
    setName("");
    setGender("other");
    setShowForm(false);
  }

  return (
    <main className="min-h-screen bg-slate-100 text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <div>
            <h1 className="text-2xl font-bold">Our Big Family Tree</h1>
            <p className="mt-1 text-sm text-slate-500">
              A small project for mapping out family members visually.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setShowForm((current) => !current)}
            className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-700"
          >
            {showForm ? "Cancel" : "+ Add Person"}
          </button>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-8">
        <div className="mb-5 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <label className="block w-full md:max-w-md">
            <span className="mb-2 block text-sm font-medium">Search family</span>
            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Try Mother or Grandfather"
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 outline-none focus:border-slate-500"
            />
          </label>

          <p className="text-sm text-slate-500">
            Showing {filteredPeople.length} of {people.length} people
          </p>
        </div>

        {showForm && (
          <form
            onSubmit={addPerson}
            className="mb-6 grid gap-4 rounded-xl border border-slate-200 bg-white p-4 sm:grid-cols-[1fr_180px_auto] sm:items-end"
          >
            <label>
              <span className="mb-2 block text-sm font-medium">Name</span>
              <input
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Family member name"
                className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-slate-500"
              />
            </label>

            <label>
              <span className="mb-2 block text-sm font-medium">Card color</span>
              <select
                value={gender}
                onChange={(event) =>
                  setGender(event.target.value as Person["gender"])
                }
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2"
              >
                <option value="other">Neutral</option>
                <option value="female">Pink</option>
                <option value="male">Blue</option>
              </select>
            </label>

            <button
              type="submit"
              className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-700"
            >
              Add
            </button>
          </form>
        )}

        <FamilyTree people={filteredPeople} />

        <p className="mt-3 text-xs text-slate-500">
          New people are temporary for now and reset when the page refreshes.
        </p>
      </div>
    </main>
  );
}
