"use client";

import { useSession } from "next-auth/react";
import { useEffect } from "react";

export default function ProfilePage() {
  const { data: session } = useSession();

  useEffect(() => {
    console.log("client side");
  }, []);

  return (
    <div>
      <h1>ProfilePage</h1>
      <hr />
      <div className="flex flex-col">
        <span>{session?.user?.name ?? "No Name"}</span>
        <span>{session?.user?.email ?? "No Email"}</span>
        <span>{session?.user?.image ?? "No Image"}</span>
        <span>{session?.user?.id ?? "No Uuid"}</span>
        <span>{session?.user?.roles?.join(",") ?? ["No Roles"]}</span>
      </div>
    </div>
  );
}
