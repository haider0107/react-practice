import { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user) {
    return <div>Please Login</div>;
  }
  return (
    <div>
      <div>
        Profile : {user.username}
        Password : {user.password}
      </div>
    </div>
  );
}

export default Profile;
