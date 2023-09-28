"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const ClientPage = () => {
  // get data, rename it to session
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("api/auth/signin?callbackUrl=/clientPage");
    },
  });

  return <div>This is a client page.</div>;
};

export default ClientPage;
