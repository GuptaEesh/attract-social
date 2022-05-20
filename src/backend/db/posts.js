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
    comments: [
      {
        _id: uuid(),
        firstName: "Moba",
        lastName: "Farhan",
        username: "moba200",
        avatar:
          "https://image.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg",
        comment: "Vaah!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("Mar 12 2022 10:31:25"),
      },
    ],
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
    comments: [],
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
    comments: [],
    username: "moba200",
    createdAt: new Date("Jan 10 2022 21:45:50"),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Get me the wizard",
    firstName: "Ronak",
    lastName: "Mutha",
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
    comments: [],
    username: "ronak420",
    createdAt: new Date("Feb 12 2022 05:30:22"),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "CORS error resolver",
    firstName: "Shivam",
    lastName: "Pandey",
    avatar:
      "https://image.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Ronak",
          lastName: "Mutha",
          username: "ronak420",
          avatar:
            "https://image.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg",
        },
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
    comments: [],
    username: "pandey120",
    createdAt: new Date("Apr 24 2022 15:30:22"),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Meetup?",
    firstName: "Zuber",
    lastName: "Dunge",
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
    comments: [],
    username: "zuber840",
    createdAt: new Date("May 01 2022 22:30:00"),
    updatedAt: formatDate(),
  },
];
