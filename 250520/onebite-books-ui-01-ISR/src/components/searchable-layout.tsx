import React, { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/router";
import style from "./seachable-layout.module.css";

const SearchableLayout = ({ children }: { children: ReactNode }) => {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const q = router.query.q as string;
  useEffect(() => {
    setSearch(q || "");
  }, [q]);

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!search) return;
    router.push(`/search?q=${search}`);
  };

  const onkeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSubmit(e);
    }
  };

  return (
    <div>
      <form className={style.searchbar_container} onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="검색어를 입력하세요"
          onKeyDown={onkeyDown}
          onChange={onChangeSearch}
          value={search}
        />
        <input type="submit" value="검색" />
      </form>
      {children}
    </div>
  );
};

export default SearchableLayout;
