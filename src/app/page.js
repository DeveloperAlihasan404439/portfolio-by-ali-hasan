"use client";
import Home from "@/components/Home/Home";
// import Loading from "@/components/Loading/Loading";
import SetTimeOut from "@/components/SetTimeOut/SetTimeOut";
import Loading2 from "@/components/Shared/Loading2/Loading2";

export default function HomePage() {
  const { timeOut } = SetTimeOut();
  return (
    <main className="bg-[#061B28] text-[#EEE]">
      {timeOut ? (
        <Loading2 />
      ) : (
          <Home />
      )}
    </main>
  );
}
