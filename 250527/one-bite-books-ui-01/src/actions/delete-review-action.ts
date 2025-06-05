"use server";

export const deleteReviewAction = async (_: any, formData: FormData) => {
  const reviewId = formData.get("reviewId")?.toString();
  const bookId = formData.get("bookId")?.toString();

  if (!reviewId) {
    return {
      status: false,
      error: "삭제할 리뷰가 없습니다",
    };
  }

  try {
    const response = await fetch(``);
  } catch (err) {
    return {
      status: false,
      error: `리뷰삭제에 실패했습니다 ${err}`,
    };
  }
};
