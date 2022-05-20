import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Eesh",
    lastName: "Gupta",
    username: "eesh730",
    password: "6GPaa!23",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
