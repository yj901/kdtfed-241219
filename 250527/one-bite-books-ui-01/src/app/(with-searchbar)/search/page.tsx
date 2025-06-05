import BookItem from "@/components/book-item";
import { BookData } from "@/types";
import delay from "@/util/delay";
import { Metadata } from "next";
import { Suspense } from "react";

// export const dynamic = "force-static";
// export const dynamic = "error";
//이거 쓰면 검색결과 안나옴 정적으로 강제 고정해버려서

const SearchResult = async ({ q }: { q: string }) => {
  // const { q } = await searchParams;
  await delay(1500);
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/search?q=${q}`,
    { cache: "force-cache" }
  );
  if (!response.ok) {
    return <div>오류가 발생했습니다...</div>;
  }
  const books: BookData[] = await response.json();
  return (
    <div>
      {books.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
};

export const generateMetadata = async ({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}): Promise<Metadata> => {
  const { q } = await searchParams;
  return {
    title: `${q} : 한입북스 검색`,
    description: `${q}의 검색결과입니다`,
    openGraph: {
      title: `${q} : 한입북스 검색`,
      description: `${q}의 검색결과입니다`,
      images: ["/thumbnail.png"],
    },
  };
};

const Page = async ({
  searchParams,
}: {
  searchParams: Promise<{ q: string }>;
}) => {
  return (
    <Suspense>
      <SearchResult q={(await searchParams).q || ""} />
    </Suspense>
  );
};
export default Page;
