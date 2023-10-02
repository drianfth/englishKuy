"use server";

import { signIn } from "next-auth/react";
import { prisma } from "../prisma";
import { hash } from "bcrypt";

interface IUser {
  email: string;
  password: string;
  name?: string;
}

export const addUser = async ({ email, name, password }: IUser) => {
  try {
    const checkUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (checkUser) {
      return null;
    }

    const newPassword = await hash(password, 12);
    const user = await prisma.user.upsert({
      where: {
        email: email,
      },
      update: {},
      create: {
        email,
        name,
        password: newPassword,
        
      },
    });
    return user;
  } catch (error) {
    console.log(error);
  }
};
