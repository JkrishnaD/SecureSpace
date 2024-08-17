"use client";

import { useState } from "react";
import { MdCancel } from "react-icons/md";

export const Banner = () => {
  const [open, setisOpen] = useState(true);

  const onClick = () => {
    setisOpen(false);
  };
  if (!open) return null;
  return (
    <div className="text-sm p-2 text-center w-full bg-gradient-to-l from-blue-600 to-black">
      This was a Personal Web Wallet for
      <span className="font-bold"> Cohort-3 </span> Assignment.
      <button onClick={onClick} className="absolute right-0.5 top-0.2 px-2">
        <MdCancel size={25} color="white"/>
      </button>
    </div>
  );
};
