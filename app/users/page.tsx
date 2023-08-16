"use client";

import { signOut } from "next-auth/react";

const Users = () => {
  return (
    <button onClick={() => signOut()}>
      Log Out
    </button>
  );
}

export default Users;
