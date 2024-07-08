import React from 'react';

type Props = {
  setOpenPopup: React.Dispatch<React.SetStateAction<boolean>>;
  editForm: React.ReactNode;
};

const EditPopup = ({ setOpenPopup, editForm }: Props) => {
  return (
    <div className="w-[400px] px-8 py-8 relative bg-white rounded-lg shadow-md">
      <button
        className="absolute right-2 top-2 px-4 py-3 align-middle leading-none rounded-full bg-black text-white"
        onClick={() => setOpenPopup(false)}
      >
        X
      </button>
      <div className="flex flex-col items-start gap-y-4">{editForm}</div>
    </div>
  );
};

export default EditPopup;
