import { useOutletContext } from "react-router-dom";

interface IFollowersContext {
  nameOfMyUsers: string;
}

const Follwers = () => {
  const { nameOfMyUsers } = useOutletContext<IFollowersContext>();

  return <h1>Here is {nameOfMyUsers}의 List of Followers</h1>;
};

export default Follwers;
