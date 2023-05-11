export const API_URL_PART_1 = "https://youtube.googleapis.com/youtube/v3/";
export const API_KEY = "&key=" + process.env.REACT_APP_API;
export const API_DEFAULT_PART_2_URL =
  "videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=16&chart=mostPopular&regionCode=IN";
export const API_URL_SEARCH_PART_2 =
  "search?part=snippet&maxResults=16&type=video&q=";
export const API_SERACH_TEXT = "";

const API_URL =
  API_URL_PART_1 + API_DEFAULT_PART_2_URL + API_SERACH_TEXT + API_KEY;

export const SEARCH_API_URL =
  API_URL_PART_1 + API_URL_SEARCH_PART_2 + API_SERACH_TEXT + API_KEY;

export const nestedComments = [
  {
    id: 1,
    text: "I think this topic is very interesting.",
    author: "Karen Smith",
    replies: [
      {
        id: 2,
        text: "I agree with you, Karen!",
        author: "Bob Johnson",
        replies: [
          {
            id: 3,
            text: "I also find it fascinating.",
            author: "Emily Davis",
            replies: [
              {
                id: 4,
                text: "Yes, this is a great discussion.",
                author: "Bob Johnson",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 5,
    text: "I have a different perspective on this topic.",
    author: "Michael Lee",
    replies: [
      {
        id: 6,
        text: "Interesting, can you share more about your viewpoint?",
        author: "Karen Smith",
        replies: [
          {
            id: 7,
            text: "I'm also curious to hear more.",
            author: "Emily Davis",
            replies: [
              {
                id: 8,
                text: "Me too!",
                author: "Bob Johnson",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 9,
    text: "I think we should all try to keep an open mind.",
    author: "Sarah Brown",
    replies: [
      {
        id: 10,
        text: "I completely agree, Sarah.",
        author: "Michael Lee",
        replies: [],
      },
    ],
  },
];

export const SUGGESTIONS_VIDEOS_URL_PART_1 = "https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId="
export const VIDEO_ID = "";
export const SUGGESTIONS_VIDEOS_URL_PART_3 = "&type=video&maxResults=16"



export const API_KEY_CODE = process.env.REACT_APP_API

//
export default API_URL;
