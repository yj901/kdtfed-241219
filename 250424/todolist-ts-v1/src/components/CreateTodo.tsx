import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { categoryState, todoState } from "../atoms";

interface Iform {
  todo: string;
}

const CreateTodo = () => {
  const category = useRecoilValue(categoryState);
  const setTodos = useSetRecoilState(todoState);
  const { register, handleSubmit, setValue } = useForm<Iform>();
  const handleValid = ({ todo }: Iform) => {
    setTodos((oldTodos) => [
      { id: Date.now(), text: todo, category },
      ...oldTodos,
    ]);
    setValue("todo", "");
  };
  return (
    <form onSubmit={handleSubmit(handleValid)}>
      <input
        {...register("todo", { required: "todo 입력..." })}
        type="text"
        placeholder="여기다가 todo 입력"
      />
      <button>입력</button>
    </form>
  );
};

export default CreateTodo;
