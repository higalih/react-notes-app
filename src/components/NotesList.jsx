import React from 'react';
import NoteItem from './NoteItem';

function NotesList({ notes, onDelete, onArchive, dataTestId = 'notes-list', searchKeyword = '' }) {
  // TODO [Basic] validasi notes agar tidak kosong.
  const hasNotes = notes && notes.length > 0; // update dengan nilai yang sesuai

  if (!hasNotes) {
    return (
      <div className="notes-list" data-testid={dataTestId}>
        {/* TODO [Basic] tampilkan pesan kosong yang informatif ketika tidak ada catatan. */}
        <p
          className="notes-list__empty-message"
          data-testid={`${dataTestId}-empty`}
        >
          Tidak ada catatan
        </p>
      </div>
    );
  }

  // TODO [Advanced] kelompokkan catatan per bulan-tahun dan render tiap grup dalam <section className="notes-group">.
  const groupedNotes = notes.reduce((groups, note) => {
    const date = new Date(note.createdAt);
    const monthYear = date.toLocaleDateString('id-ID', { month: 'long', year: 'numeric' });

    if (!groups[monthYear]) {
      groups[monthYear] = [];
    }
    groups[monthYear].push(note);
    return groups;
  }, {});

  return (
    <div className="notes-list" data-testid={dataTestId}>
      {/* TODO [Basic] gunakan array.map untuk merender NoteItem untuk setiap catatan. */}
      {/* TODO [Skilled] ekstrak tombol aksi menjadi komponen reusable agar dipakai NoteItem. */}
      {/* TODO [Advanced] kelompokkan catatan per bulan-tahun dan render tiap grup dalam <section className="notes-group">. */}
      {Object.keys(groupedNotes).map((monthYear) => (
        <section className="notes-group" key={monthYear} data-testid={`${monthYear}-group`}>
          <div className="notes-group__header">
            <h3 className="notes-group__title">{monthYear}</h3>
            <span className="notes-group__count" data-testid={`${monthYear}-group-count`}>
              {groupedNotes[monthYear].length} catatan
            </span>
          </div>
          <div className="notes-group__grid">
            {groupedNotes[monthYear].map((note) => (
              <NoteItem
                key={note.id}
                note={note}
                onDelete={onDelete}
                onArchive={onArchive}
                searchKeyword={searchKeyword}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default NotesList;