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
    email: "eesh@eesh.com",
    password: "6GPaa!23",
    bio: "Social redux : Can someone provide me store too!",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    avatar:
      "https://image.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg",
    following: [
      {
        firstName: "Moba",
        lastName: "Farhan",
        username: "moba200",
        avatar:
          "https://image.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg",
      },
      {
        firstName: "Ronak",
        lastName: "Mutha",
        username: "ronak420",
        avatar:
          "https://image.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg",
      },
    ],
    followers: [],
    bookmarks: [],
    portfolio: "https://github.com/GuptaEesh",
  },
  {
    _id: uuid(),
    firstName: "Moba",
    lastName: "Farhan",
    username: "moba200",
    email: "moba@moba.com",
    password: "12!Qqqwq",
    bio: "I am obsessed with knowledge!",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    avatar:
      "https://image.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg",
    following: [],
    followers: [
      {
        firstName: "Eesh",
        lastName: "Gupta",
        username: "eesh730",
        avatar:
          "https://image.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg",
      },
    ],
    bookmarks: [],
    portfolio: "https://www.google.com",
  },
  {
    _id: uuid(),
    firstName: "Ronak",
    lastName: "Mutha",
    username: "ronak420",
    email: "ronak@ronak.com",
    password: "45!Qqqaaq",
    bio: "I need to do a lot!",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    avatar:
      "https://image.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg",
    following: [],
    followers: [
      {
        firstName: "Eesh",
        lastName: "Gupta",
        username: "eesh730",
        avatar:
          "https://image.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg",
      },
    ],
    bookmarks: [],
    portfolio: "https://www.google.com",
  },
  {
    _id: uuid(),
    firstName: "Shivam",
    lastName: "Pandey",
    username: "pandey120",
    email: "shivam@shivam.com",
    password: "89!Qqqyui",
    bio: "I observe all that transpires here, but i won't interfere",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    avatar:
      "https://image.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg",
    following: [],
    followers: [],
    bookmarks: [],
    portfolio: "https://www.google.com",
  },
];
