
import FavouriteIcon from "@/assets/svg/favourite-icon.svg";
import Cart from "@/components/ui/Cart";
import Logo from "@/components/shared/Logo";


const Header = () => {
  return (
    <div className="flex justify-between px-2 py-4">
        <Logo />

        <div className="flex items-center justify-center gap-4">
                {/* Search Bar */}
                <img src={FavouriteIcon} width={25} height={25} alt="favourite" />
                {/*vertical divider*/}
                <div className="w-0.5 h-[80%] bg-gray-200 "></div>

                {/* Cart Component */}
                <Cart />
                
        </div>
    </div>
  )
}

export default Header