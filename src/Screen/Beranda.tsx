import { adminContext } from "@/component/LoginContex";
import Pendapatan from "@/pages/Pendapatan";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";

export default function Beranda() {
  const { login } = useContext(adminContext);
  const router = useRouter();

  useEffect(() => {
    if (!login) {
      router.push("/login");
    }
  }, [login]);

  if (!login) return null;

  return (
    <div className="vh-100">
      <Pendapatan />
    </div>
  );
}
