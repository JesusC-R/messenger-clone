import prisma from "@/app/libs/prismadb";

import getSession from "./get-session";
import { use } from "react";

const getUsers = async () => {
  const session = await getSession();

  if (!session?.user?.email) {
    return [];
  }

  try {
    const users = prisma.user.findMany({
      where: {
        NOT: {
          email: session.user.email,
        },
      },
    });

    return users;

  } catch (err: any) {
    return [];
  }
};

export default getUsers;
