import React, { useContext, useMemo, useState } from "react";
import TodoItem from "./TodoItem";
import { TodoStateContext } from "../App";

const TodoList = () => {
  const todo = useContext(TodoStateContext);
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

  const analyzeTodo = useMemo(() => {
    const totalCount = todo.length;
    const doneCount = todo.filter((it) => it.isDone).length;
    const notDoneCount = totalCount - doneCount;
    return {
      totalCount,
      doneCount,
      notDoneCount,
    };
  }, [todo]);

  const { totalCount, doneCount, notDoneCount } = analyzeTodo;

  return (
    <div className="TodoList">
      <h4>Todo List</h4>
      <div>
        <div>총개수 : {totalCount}</div>
        <div>완료된 할 일 : {doneCount}</div>
        <div>아직 완료하지 못한 할 일 : {notDoneCount} </div>
      </div>
      <input
        className="searchbar"
        type="text"
        value={search}
        onChange={onChangeSearch}
        placeholder="검색어를 입력하세요"
      />
      <div className="list_wrapper">
        {getSearchResult().map((it) => (
          <TodoItem key={it.id} {...it} />
        ))}
        {/* {todo.map(() => {})} 그냥 객체형태인 todo는 안되고 뒤에 함수 추가해야하는이유가 갑자기 기억이 안남 이거 꼭 찾아서 기억할것. 왜 그래야하는지 설명을 들었는데 기억이 안나 */}
      </div>
    </div>
  );
};

// TodoList.defaultProps = {
//   todo: [],
// };

export default TodoList;
