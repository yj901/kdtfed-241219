import { atom, selector } from "recoil";

export enum Categories {
  "TODO" = "TODO",
  "DOING" = "DOING",
  "DONE" = "DONE",
}

// type categories = "TODO" | "DOING" | "DONE";

export interface ITodo {
  id: number;
  text: string;
  category: Categories;
}

export const categoryState = atom<Categories>({
  key: "category",
  default: Categories["TODO"],
});

export const todoState = atom<ITodo[]>({
  key: "todo",
  default: [],
});

export const todoSelector = selector({
  key: "todoSelector",
  get: ({ get }) => {
    const todos = get(todoState);
    const category = get(categoryState);
    // if (category === "TODO") {
    //   return todos.filter((todo) => todo.category === "TODO");
    // }
    // if (category === "DOING") {
    //   return todos.filter((todo) => todo.category === "DOING");
    // }
    // if (category === "DONE") {
    //   return todos.filter((todo) => todo.category === "DONE");
    // }
    // return [
    //   todos.filter((todo) => todo.category === "TODO"),
    //   todos.filter((todo) => todo.category === "DOING"),
    //   todos.filter((todo) => todo.category === "DONE"),
    // ];
    return todos.filter((todo) => todo.category === category);
  },
});
