import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart } from "./cartSlice";
import { getUser } from "../user/userSlice";
import Button from "../../ui/Button";
import LinkButton from "../../ui/LinkButton";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";

function Cart() {
  const { username } = useSelector(getUser);
  const cart = useSelector(getCart);
  const dispatch = useDispatch();

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="px-4 py-4">
      <LinkButton to={"/menu"}>&larr; Back to menu</LinkButton>

      <h2 className="mt-7 text-xl font-semibold">Your cart, {username}</h2>

      <ul className="mb-3  divide-y divide-stone-400 border-b">
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>

      <div className="mt-6 space-x-2">
        <Button type="primary" to="/order/new">
          Order pizzas
        </Button>
        <Button onClick={() => dispatch(clearCart())} type="secondary">
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
