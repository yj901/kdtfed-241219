interface Post {
  title: string;
  tags: string[];
  contents: string;
  thumbnail?: string;
}

//readonly 타입
const withThumbnailPost: Readonly<Post> = {
  title: "밥은 먹고 다니냐?",
  tags: ["해장국"],
  contents: "달래해장국",
  thumbnail: "https://naver.com",
};

// withThumbnailPost.contents = "맘스터치";

type Readonly<T> = {
  readonly [key in keyof T]: T[key];
};

// required타입
// const withThumbnailPost: Required<Post> = {
//   title: "밥은 먹고 다니냐?",
//   tags: ["해장국"],
//   contents: "달래해장국",
//   //thumbnail: "https://naver.com",
// };

// type Required<T> = {
//   [key in keyof T]-?: T[key];
// };

//유틸리티 타입 - Partial
// const draft: Partial<Post> = {
//   title: "밥먹자",
//   content: "제육볶음",
// };

// type Partial<T> = {
//   [key in keyof T]?: T[key];
// };
