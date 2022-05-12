import { Appwrite } from "appwrite";
const appwrite = new Appwrite();
appwrite
  .setEndpoint(627d1a0f1025cc52bb7e)
  .setProject(http://localhost/v1)
export const db = appwrite.database;
export const storage = appwrite.storage;
export const account = appwrite.account;
