"use server";
import { ID, Query } from "node-appwrite";
import { users } from "../appwrite.config";
import { parseStringify } from "../utils";

export const createUser = (params: CreateUserParams) => {
  users
    .create(
      ID.unique(),
      params["email"],
      params["phone"],
      undefined,
      params["name"],
    )
    .then((newUser) => {
      console.log(parseStringify(newUser));
    })
    .catch(() => {
      users
        .list([Query.equal("email", [params.email])])
        .then((existingUser) => console.log(existingUser.users[0]));
    });
};
