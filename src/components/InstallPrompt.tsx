import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from "@headlessui/react";
import { useState } from "react";
import AddToHome from "./icons/AddToHome";
import ShareIcon from "./icons/Share";

export default function InstallPrompt() {
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
            <div className="relative -mx-6  overflow-hidden px-6">
              <ul className="flex flex-col gap-2">
                <li>
                  1. Tap the <ShareIcon /> share icon
                </li>
                <li>
                  2. Tap Add to Home Screen <AddToHome />
                </li>
              </ul>
            </div>
            <div className="flex w-full justify-end">
              <button className="rounded-md bg-black text-white py-2 px-4" onClick={() => setIsOpen(false)}>
                Cancel
              </button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </div>
  );
}
