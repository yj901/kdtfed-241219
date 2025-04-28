import React from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { minutesState, hourSelector } from "../atoms";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const TodoList = () => {
  const [minutes, setMinutes] = useRecoilState(minutesState);
  // const hours = useRecoilValue(hourSelector);
  const [hours, setHours] = useRecoilState(hourSelector);

  const onMinutes = (e: React.FormEvent<HTMLInputElement>) => {
    setMinutes(+e.currentTarget.value);
  };
  const onHoursChange = (e: React.FormEvent<HTMLInputElement>) => {
    setHours(+e.currentTarget.value);
  };
  return (
    <Container>
      <input
        value={minutes}
        onChange={onMinutes}
        type="number"
        placeholder="Minutes"
      />
      <input
        value={hours}
        onChange={onHoursChange}
        type="number"
        placeholder="Hours"
      />
    </Container>
  );
};

export default TodoList;
