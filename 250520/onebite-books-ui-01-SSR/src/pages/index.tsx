import style from "./index.module.css";
import SearchableLayout from "@/components/searchable-layout";
import { ReactNode } from "react";
import books from "../mock/book.json";
import BookItem from "@/components/book-item";
import { InferGetServerSidePropsType } from "next";
import fetchRandomBooks from "@/lib/fetch-random-books";
import fetchBooks from "@/lib/fetch-books";

export const getServerSideProps = async () => {
  //아래 Home이라는 컴포넌트보다 무조건 먼저 실행되어서, 컴포넌트에 필요한 데이터를 불러오는 기능을 할 수 있는 함수

  const [recoBooks, allBooks] = await Promise.all([
    fetchRandomBooks(),
    fetchBooks(),
  ]);

  // const recoBooks = await fetchRandomBooks();
  // const allBooks = await fetchBooks();

  return {
    props: { recoBooks, allBooks },
  };
};

export default function Home({
  recoBooks,
  allBooks,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  console.log(allBooks);
  return (
    <div className={style.container}>
      <section>
        <h3>지금 추천하는 도서</h3>
        {recoBooks.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </section>
      <section>
        <h3>등록된 모든 도서</h3>
        {allBooks.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </section>
    </div>
  );
}

Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
