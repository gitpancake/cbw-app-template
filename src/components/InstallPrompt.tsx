import { useState } from "react";

export default function InstallPrompt() {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full flex justify-center">
      <button onClick={() => setIsOpen(true)} className="rounded-md bg-black text-white py-4 px-8">
        Begin
      </button>
    </div>
  );
}
