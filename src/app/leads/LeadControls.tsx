"use client";

import { setStatus, saveNotes } from "./actions";

const STATUSES = ["new", "contacted", "booked", "not a fit"];

export function StatusSelect({ id, status }: { id: number; status: string }) {
  return (
    <form action={setStatus}>
      <input type="hidden" name="id" value={id} />
      <select
        name="status"
        defaultValue={status}
        aria-label="Lead status"
        onChange={(e) => e.currentTarget.form?.requestSubmit()}
        className="ui rounded-lg border border-line bg-white px-2 py-1.5 text-[0.9rem]"
      >
        {STATUSES.map((s) => (
          <option key={s} value={s}>
            {s.charAt(0).toUpperCase() + s.slice(1)}
          </option>
        ))}
      </select>
    </form>
  );
}

export function NotesField({ id, notes }: { id: number; notes: string | null }) {
  return (
    <form action={saveNotes} className="flex flex-col gap-1.5">
      <input type="hidden" name="id" value={id} />
      <textarea name="notes" defaultValue={notes ?? ""} rows={2} maxLength={2000} aria-label="Notes" placeholder="Notes for the team" className="w-full min-w-[12rem] rounded-lg border border-line bg-white px-2 py-1.5 text-[0.9rem]" />
      <button type="submit" className="ui self-start text-[0.85rem] font-[650] text-oxblood underline underline-offset-4">
        Save note
      </button>
    </form>
  );
}
