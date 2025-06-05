"use client";

import createReviewAction from "@/actions/create-acton-review";
import style from "./review-editor.module.css";
import { useActionState, useEffect } from "react";

const ReviewEditor = ({ bookId }: { bookId: string }) => {
  const [state, formAction, isPending] = useActionState(
    createReviewAction,
    null
  );
  return (
    <section>
      <form action={formAction} className={style.form_container}>
        <input type="text" name="bookId" value={bookId} hidden readOnly />
        <textarea
          disabled={isPending}
          name="content"
          placeholder="리뷰 내용"
          required
        />
        <div className={style.submit_container}>
          <input
            disabled={isPending}
            type="text"
            name="author"
            placeholder="작성자"
            required
          />
          <input
            disabled={isPending}
            type="submit"
            value={isPending ? "..." : "작성하기"}
          />
        </div>
      </form>
    </section>
  );
};

export default ReviewEditor;
