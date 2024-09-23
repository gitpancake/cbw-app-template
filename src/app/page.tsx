"use client";
import ConnectButton from "src/components/ConnectButton";
import Footer from "src/components/Footer";
import InstallPrompt from "src/components/InstallPrompt";
import { useIsStandalone } from "src/hooks/useIsStandalone";

export default function Page() {
  const { isStandalone } = useIsStandalone();

  return (
    <div className="flex h-full w-96 max-w-full flex-col px-1 md:w-[1008px]">
      <section className="mt-6 mb-6 flex w-full flex-col md:flex-row"></section>
      {/* <section className="templateSection flex w-full flex-col items-center justify-center gap-4 rounded-xl bg-gray-100 px-2 py-4 md:grow">
        {address ? <TransactionWrapper address={address} /> : <WalletWrapper className="w-[450px] max-w-full" text="Sign in to transact" />}
      </section> */}
      {isStandalone ? <ConnectButton /> : <InstallPrompt />}
      <Footer />
    </div>
  );
}
