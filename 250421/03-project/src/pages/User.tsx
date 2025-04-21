import { useParams, Outlet, Link, useOutletContext } from "react-router-dom";
import { users } from "../db";

interface DarkMode {
  darkMode: boolean;
}

const User = () => {
  const { userId } = useParams();
  const { darkMode } = useOutletContext<DarkMode>();
  console.log(darkMode);

  return (
    <>
      <h1>
        User width ID {userId} is name: {users[Number(userId) - 1].name}
      </h1>
      <hr />
      <Link to={"followers"}>see followers</Link>
      <Outlet
        context={{
          nameOfMyUsers: users[Number(userId) - 1].name,
        }}
      />
    </>
  );
};

export default User;
