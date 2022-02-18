import { useLayoutEffect, useEffect } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  useLayoutEffect(() => {
    router.push("/");
  }, []);

  return (
    <div className="grid h-screen place-content-center  bg-slate-800 px-5 text-center text-8xl font-black text-custom-white-extra-light">
      <h1>....</h1>
    </div>
  );
}
