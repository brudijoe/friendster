type DialogProps = {
  width: string;
  dialogRef: React.RefObject<HTMLDialogElement>;
  children?: React.ReactNode;
};

export function Dialog({ width, dialogRef, children }: DialogProps) {
  return (
    <dialog
      className={`${width} p-4 backdrop:bg-gray-900 backdrop:bg-opacity-80 bg-gray-800 border-2 border-white rounded`}
      ref={dialogRef}
    >
      {children}
    </dialog>
  );
}
