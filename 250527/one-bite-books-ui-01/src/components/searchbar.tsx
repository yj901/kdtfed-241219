"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React, { useState, useEffect } from "react";
import style from "./searchbar.module.css";

const Searchbar = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();

  const q = searchParams.get("q");

  useEffect(() => {
    setSearch(q || "");
  }, [q]);

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  const onSubmit = () => {
    if (!search || q === search) return;
    router.push(`/search?q=${search}`);
  };
  const KeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSubmit();
    }
  };
  return (
    <div className={style.container}>
      <input
        value={search}
        type="text"
        onChange={onChangeSearch}
        onKeyDown={KeyDown}
      />
      <input type="submit" value={"검색"} onClick={onSubmit} />
    </div>
  );
};

export default Searchbar;
