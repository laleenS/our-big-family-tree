"use client";

import { useRef, useState, type FormEvent } from "react";
import PersonCard from "./PersonCard";
import { people as samplePeople, type Person } from "../data/family";

export default function FamilyTree() {
  const [people, setPeople] = useState<Person[]>(samplePeople);
  const [search, setSearch] = useState("");
  const [adding, setAdding] = useState(false);
  const [message, setMessage] = useState("");
  const searchInput = useRef<HTMLInputElement>(null);

  function generation(person: Person): number {
    const parents = people.filter((parent) => person.parentIds.includes(parent.id));
    return parents.length ? 1 + Math.max(...parents.map(generation)) : 1;
  }

  const matches = people.filter((person) =>
    person.name.toLowerCase().includes(search.trim().toLowerCase()),
  );
  const generations = [...new Set(matches.map(generation))].sort((a, b) => a - b);

  function addPerson(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const parentIds = [String(data.get("parent1") ?? ""), String(data.get("parent2") ?? "")]
      .filter(Boolean);

    if (!name) {
      setMessage("Enter a name with at least one non-space character.");
      return;
    }
    if (new Set(parentIds).size !== parentIds.length) {
      setMessage("Choose two different parents, or leave one blank.");
      return;
    }
    // Only existing people can be parents, so adding a person cannot create a cycle.
    setPeople([...people, { id: crypto.randomUUID(), name, parentIds }]);
    setSearch("");
    setMessage(`Added ${name}. Changes last until you reload this page.`);
    form.reset();
    setAdding(false);
    searchInput.current?.focus();
  }

  return (
    <main className="page">
      <header className="page-header">
        <div>
          <p className="eyebrow">A small family history demo</p>
          <h1>Our Big Family Tree</h1>
          <p>Explore the generations and add a new connection.</p>
        </div>
        <button type="button" aria-expanded={adding} aria-controls="add-person"
          onClick={() => setAdding(!adding)}>
          {adding ? "Close form" : "+ Add Person"}
        </button>
      </header>

      <p className="demo-note">All sample people are fictional. Use made-up names here.
        New entries stay in this tab only and disappear on reload.</p>

      {adding && (
        <form id="add-person" className="add-form" onSubmit={addPerson}>
          <h2>Add a person</h2>
          <label>Name
            <input name="name" required maxLength={80} autoFocus autoComplete="off" />
          </label>
          <div className="parent-fields">
            {[1, 2].map((number) => (
              <label key={number}>Parent {number} (optional)
                <select name={`parent${number}`} defaultValue="">
                  <option value="">Not recorded</option>
                  {people.map((person) => <option key={person.id} value={person.id}>{person.name}</option>)}
                </select>
              </label>
            ))}
          </div>
          <p>People without recorded parents appear in generation 1. Otherwise they
            appear one generation after their latest parent.</p>
          <button type="submit">Add to tree</button>
          <button type="button" className="secondary" onClick={() => {
            setAdding(false);
            setMessage("");
          }}>Cancel</button>
        </form>
      )}

      <div className="search-bar">
        <label htmlFor="search">Search by name</label>
        <div className="search-controls">
          <input id="search" ref={searchInput} type="search" value={search}
            onChange={(event) => setSearch(event.target.value)} placeholder="Try Jamie" />
          {search && <button type="button" className="secondary" onClick={() => setSearch("")}>Clear</button>}
        </div>
      </div>
      <p role="status">{message}</p>
      <p className="result-count" aria-live="polite">Showing {matches.length} of {people.length} people</p>

      <div className="tree">
        {matches.length === 0 && <p>No names match your search. Try another name or clear the search.</p>}
        {generations.map((level) => (
          <section key={level} aria-labelledby={`generation-${level}`} className="generation">
            <h2 id={`generation-${level}`}>Generation {level}</h2>
            <ul className="people-grid">
              {matches.filter((person) => generation(person) === level).map((person) => (
                <PersonCard key={person.id} person={person}
                  parents={person.parentIds.map((id) => people.find((parent) => parent.id === id)!.name)} />
              ))}
            </ul>
          </section>
        ))}
      </div>
      <footer>Relationships are shown on each card. This demo records parents, not spouses or a full genealogy.</footer>
    </main>
  );
}
