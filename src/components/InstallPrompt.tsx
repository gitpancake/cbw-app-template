import { Button, Drawer } from "@mui/material";
import { useState } from "react";
import AddToHome from "./icons/AddToHome";
import ShareIcon from "./icons/Share";

function BottomSheet() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setOpen(open);
  };

  return (
    <div className="w-full flex justify-center">
      <Button disableRipple onClick={toggleDrawer(true)} className="!bg-black hover:bg-black !text-white font-bold py-2 px-4 rounded">
        Download App
      </Button>

      <Drawer anchor="bottom" open={open} onClose={toggleDrawer(false)}>
        {/* Content of the bottom sheet */}
        <div className="p-10">
          <ul className="flex flex-col gap-2">
            <li>
              1. Tap the <ShareIcon /> share icon
            </li>
            <li>
              2. Tap Add to Home Screen <AddToHome />
            </li>
          </ul>
        </div>
      </Drawer>
    </div>
  );
}

export default BottomSheet;
