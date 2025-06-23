import { useRouter } from "next/router";
import { useEffect } from "react";

export default function asli() {
  const router = useRouter();

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (!token) {
      router.push("/login2");
    }
  }, []);
  return (
    <div>
      <h1>Coba</h1>
    </div>
  );
}
