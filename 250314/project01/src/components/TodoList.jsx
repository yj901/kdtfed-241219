import React, { useState } from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todo, onUpdate, onDelete }) => {
  const [search, setSearch] = useState("");
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };
  const getSearchResult = () => {
    return search === ""
      ? todo
      : todo.filter((it) =>
          it.content.toLowerCase().includes(search.toLowerCase())
        );
  };
  return (
    <div className="TodoList">
      <h4>Todo List</h4>
      <input
        type="text"
        className="searchbar"
        onChange={onChangeSearch}
        value={search}
        placeholder="검색어를 입력하세요"
      />
      <div className="list_wrapper">
        {getSearchResult().map((it) => {
          return (
            <TodoItem
              key={it.id}
              {...it}
              onUpdate={onUpdate}
              onDelete={onDelete}
            />
          );
        })}
        {/* {todo.map(() => {})} 그냥 객체형태인 todo는 안되고 뒤에 함수 추가해야하는이유가 갑자기 기억이 안남 이거 꼭 찾아서 기억할것. 왜 그래야하는지 설명을 들었는데 기억이 안나 */}
      </div>
    </div>
  );
};

export default TodoList;
