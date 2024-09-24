import { useState } from "react";
import { useAccount } from "wagmi";

export default function ConnectButton() {
  const { address } = useAccount();

  let [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full flex justify-center">
      <button onClick={() => setIsOpen(true)} className="rounded-md bg-black text-white py-4 px-8">
        Begin
      </button>
    </div>
  );
}
