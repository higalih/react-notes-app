import React from 'react';

function NoteActionButton({ variant, onClick, children, ...rest }) {
  const getButtonClass = () => {
    if (variant === "delete") return "note-item__delete-button";
    if (variant === "archive") return "note-item__archive-button";
    if (variant === "unarchive") return "note-item__unarchive-button";
    return "note-item__action-button";
  };

  const getLabel = () => {
    if (children) return children;
    if (variant === "delete") return "Hapus";
    if (variant === "archive") return "Arsipkan";
    if (variant === "unarchive") return "Pindahkan";
    return "Aksi";
  };

  return (
    <button
      className={getButtonClass()}
      type="button"
      onClick={onClick}
      {...rest}
    >
      {getLabel()}
    </button>
  );
}

export default NoteActionButton;