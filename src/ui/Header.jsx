import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <header className="flex items-center  justify-between  border-b border-blue-500 bg-blue-500 p-4 text-xs font-semibold uppercase italic text-stone-200 shadow-md shadow-blue-500 sm:p-6 sm:text-sm">
      <Link to="/" className="tracking-widest">
        Fast React Pizza Co.
      </Link>

      <SearchOrder />

      <Username />
    </header>
  );
}

export default Header;
