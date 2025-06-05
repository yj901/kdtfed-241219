import BookItem from "@/components/book-item";
import style from "./page.module.css";
import { BookData } from "@/types";
import { Suspense } from "react";
import delay from "@/util/delay";
import BookListSkeletion from "@/components/skeleton/book-list-skeletion";
import { Metadata } from "next";

// export const dynamic = "force-dynamic";
/*
auto : 그냥 컴포넌트 페이지가 기본적으로 가지고있는속성을 자동으로 진행
force-dynamic : 해당 컴포넌트 페이지를 동적 페이지로 강제
force-static : 해당 컴포넌트 페이지를 정적 페이지로 강제
error : 만약 특정 컴포넌트 페이지의 옵션을 강제했을 때, 에러가 발생한다면, 해당 에러를 출력

**하지만 Route-Segment option은 가급적 사용 지양!** (css의 !important와 유사한 느낌)
*/

const AllBooks = async () => {
  // try {
  await delay(1000);
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book`,
    {
      cache: "force-cache",
    }
  );
  if (!response.ok) {
    return <div>오류가 발생했습니다...</div>;
  }
  const allBooks: BookData[] = await response.json();
  return (
    <>
      {allBooks.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </>
  );
  // } catch (err) {
  //   console.error(err);
  //   return <div>ERROR!</div>;
  // }
};

const RecoBooks = async () => {
  // try {
  await delay(1000);
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/random`,
    {
      // cache: "force-cache",
      next: {
        revalidate: 3,
      },
    }
  );
  if (!response.ok) {
    return <div>오류가 발생했습니다...</div>;
  }
  const recoBooks: BookData[] = await response.json();
  return (
    <>
      {recoBooks.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </>
  );
  // } catch (err) {
  //   console.error(err);
  //   return <div>ERROR!</div>;
  // }
};

export const metadata: Metadata = {
  title: "한입 북스",
  description: "한입북스에 등록된 도서를 만나보세요",
  openGraph: {
    title: "한입북스",
    description: "한입북스에 등록된 도서를 만나보세요",
    images: ["/thumbnail.png"],
  },
};

const Home = () => {
  return (
    <div className={style.container}>
      <section>
        <h3>지금 추천하는 도서</h3>
        <Suspense fallback={<BookListSkeletion count={3} />}>
          <RecoBooks />
        </Suspense>
      </section>
      <section>
        <h3>등록된 모든 도서</h3>
        <Suspense fallback={<BookListSkeletion count={12} />}>
          <AllBooks />
        </Suspense>
      </section>
    </div>
  );
};

export default Home;

/*

Dynamic page로 설정되는 기준

1. 캐시되지 않은 Data Fetching을 사용할 경우
const Comp = async () => {
  const response = await fetch("...", {cache : "no-store"})
  return <div>...</div>
}


2. 동적함수(쿠키, 헤더, 쿼리스트링) 를 사용한느 컴포넌트가 존재할 때
import {cookies} from "next/headers"'

const Comp = async () => {
  const cookieStore = cookues();
  const theme = cookieStore.get("theme");

  return <div>...</div>
}


동적함수 : O, 데이터 캐시 : X =>  Dynamic Page
동적함수 : O, 데이터 캐시 : O =>  Dynamic Page
동적함수 : X, 데이터 캐시 : X =>  Dynamic Page
동적함수 : X, 데이터 캐시 : O =>  Static Page (+ Full Route Cache 사용적합)



*/
