import CartIcon from "@/assets/svg/cart.svg";

const Cart = () => {
  return (
    <div className="flex items-center gap-4">
      <img src={CartIcon} alt="cart icon" className="cursor-pointer" />
      <div className="hidden flex-col sm:flex">
        <p className="text-[11px]">Shopping cart :</p>
        <p className="font-medium">₹ 100</p>
      </div>
    </div>
  );
};

export default Cart;
