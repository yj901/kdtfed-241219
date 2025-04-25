import { useForm } from "react-hook-form";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  input {
    padding: 5px;
  }
`;

interface IFormContents {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  repassword: string;
  userName: string;
  extraError?: string;
}

const TodoList = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    setValue,
  } = useForm<IFormContents>({ defaultValues: { email: "@google.com" } });

  const onValid = (data: IFormContents) => {
    console.log(data);
    if (data.password !== data.repassword) {
      setError("password", { message: "패스워드가 같지 않음" });
      setError(
        "repassword",
        { message: "패스워드가 같지 않음" },
        { shouldFocus: true }
      );
    }
    // setError("extraError", { message: "서버 오프라인 에러" });
    setValue("userName", "");
  };

  // console.log(formState);

  console.log(errors.email?.message);

  return (
    <Form onSubmit={handleSubmit(onValid)}>
      <input
        {...register("email", {
          required: "이메일을 입력해주세요",
          pattern: {
            value: /^[A-Za-z0-9]+@google.com/gm,
            message: "구글이메일만 허락",
          },
        })}
        type="email"
        placeholder="email 입력"
      />
      <span>{errors.email?.message as string}</span>
      <input
        {...register("firstName", {
          required: "firstname을 입력해주세요",
        })}
        type="text"
        placeholder="first name"
      />
      <span>{errors.firstName?.message as string}</span>
      <input
        {...register("lastName", {
          required: "lastname을 입력해주세요",
          validate: (value) =>
            value.includes("test") ? "no test allowed" : true,
        })}
        type="text"
        placeholder="last name"
      />
      <span>{errors.lastName?.message as string}</span>
      <input
        {...register("userName", {
          required: "닉네임을 입력해주세요",
          minLength: {
            value: 2,
            message: "2자 이상 입력해주세요",
          },
        })}
        type="text"
        placeholder="userName 입력"
      />
      <span>{errors.userName?.message as string}</span>
      <input
        {...register("password", {
          required: "비밀번호를 입력해주세요",
          minLength: {
            value: 8,
            message: "8자 이상",
          },
        })}
        type="password"
        placeholder="password 입력"
      />
      <span>{errors.password?.message as string}</span>
      <input
        {...register("repassword", {
          required: "비밀번호를 재입력해주세요",
          minLength: {
            value: 8,
            message: "8자 이상",
          },
        })}
        type="password"
        placeholder="re-password 입력"
      />
      <span>{errors.repassword?.message as string}</span>
      <button>Add</button>
      <span>{errors.extraError?.message as string}</span>
    </Form>
  );
};

export default TodoList;
