import BookItemSkeletion from "./book-item-skeletion";

const BookListSkeletion = ({ count }: { count: number }) => {
  return new Array(count)
    .fill(0)
    .map((_, idx) => <BookItemSkeletion key={`book-item-skeleton-${idx}`} />);
};

export default BookListSkeletion;
