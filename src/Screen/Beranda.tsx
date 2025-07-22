import Pendapatan from "@/pages/Pendapatan";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Beranda() {
  const router = useRouter();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (!token) {
      router.replace("/login");
      return;
    } else {
      setIsReady(true);
    }
  }, []);

  if (!isReady) return null;

  return (
    <div className="vh-100">
      <Pendapatan />
    </div>
  );
}
