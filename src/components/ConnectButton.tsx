import { Button, Drawer } from "@mui/material";
import { useState } from "react";
import { useAccount } from "wagmi";
import TransactionWrapper from "./TransactionWrapper";
import WalletWrapper from "./WalletWrapper";

export default function ConnectButton() {
  const { address } = useAccount();

  const [open, setOpen] = useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setOpen(open);
  };

  return (
    <div className="w-full flex justify-center">
      <Button disableRipple onClick={toggleDrawer(true)} className="!bg-black hover:bg-black !text-white font-bold py-2 px-4 rounded">
        Get Started
      </Button>

      <Drawer anchor="bottom" open={open} onClose={toggleDrawer(false)}>
        {/* Content of the bottom sheet */}
        <div className="p-10 flex w-full justify-center">{address ? <TransactionWrapper address={address} /> : <WalletWrapper />}</div>
      </Drawer>
    </div>
  );
}
