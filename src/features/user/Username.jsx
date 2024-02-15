import { useSelector } from "react-redux";
import { getUser } from "./userSlice";

function Username() {
  const { username } = useSelector(getUser);
  return (
    <div className="hidden text-sm font-semibold md:block">{username}</div>
  );
}

export default Username;
