import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    firstName: "Eesh",
    lastName: "Gupta",
    content: "This is 1st post.",
    avatar:
      "https://image.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "eesh730",
    createdAt: new Date("Mar 11 2022 10:20:18"),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "This is 2nd post.",
    firstName: "Eesh",
    lastName: "Gupta",
    avatar:
      "https://image.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg",
    likes: {
      likeCount: 1,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Eesh",
          lastName: "Gupta",
          username: "eesh730",
          avatar:
            "https://image.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "eesh730",
    createdAt: new Date("May 12 2022 11:30:21"),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "This is 3rd post.",
    firstName: "Moba",
    lastName: "Farhan",
    avatar:
      "https://image.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg",
    likes: {
      likeCount: 1,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Eesh",
          lastName: "Gupta",
          username: "eesh730",
          avatar:
            "https://image.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "moba200",
    createdAt: new Date("Jan 10 2022 21:45:50"),
    updatedAt: formatDate(),
  },
];
