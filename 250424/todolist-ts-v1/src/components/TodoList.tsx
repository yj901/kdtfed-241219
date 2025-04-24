import { useForm } from "react-hook-form";

const TodoList = () => {
  const { register, watch } = useForm();
  console.log(watch("todo"));
  return (
    <div>
      <form>
        <input {...register("todo")} type="text" placeholder="write a todo" />
        <input type="submit" value={"Add"} />
      </form>
    </div>
  );
};

export default TodoList;
