import React from 'react';

function NoteSearch({ searchKeyword, onSearchChange }) {
  // TODO [Basic] kelola nilai input sebagai controlled component
  // TODO [Basic] panggil onSearchChange setiap kali input berubah

  const onChangeHandler = (event) => {
    onSearchChange(event.target.value);
  };

  return (
    <div className="note-search" data-testid="note-search">
      <input
        className="note-search__input"
        type="text"
        placeholder="Cari berdasarkan judul..."
        value={searchKeyword}
        onChange={onChangeHandler}
        data-testid="note-search-input"
      />
    </div>
  );
}

export default NoteSearch;