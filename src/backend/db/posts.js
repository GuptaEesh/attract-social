import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content: "This is 1st post.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "eesh730",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "This is 2nd post.",
    likes: {
      likeCount: 0,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Eesh",
          lastName: "Gupta",
          username: "eesh730",
          avatarURL:
            "https://image.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "eesh730",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
