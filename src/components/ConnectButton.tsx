import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from "@headlessui/react";
import { useState } from "react";
import { useAccount } from "wagmi";
import LoginButton from "./LoginButton";
import SignupButton from "./SignupButton";

export default function ConnectButton() {
  const { address } = useAccount();

  let [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full flex justify-center">
      <button onClick={() => setIsOpen(true)} className="rounded-md bg-black text-white py-4 px-8">
        Begin
      </button>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <DialogBackdrop className="fixed inset-0 bg-black/30" />
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="max-w-lg space-y-8 border bg-white pt-8 px-8 pb-6 rounded-md">
            <DialogTitle className="font-bold">Add to home screen</DialogTitle>
            <div className="flex items-center gap-3">
              <SignupButton />
              {!address && <LoginButton />}
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </div>
  );
}
