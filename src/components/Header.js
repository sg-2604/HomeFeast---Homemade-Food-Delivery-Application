import Logo from "./Logo";
import NavItems from "./NavItems";

const Header = () =>{
    return (
    <div className="flex justify-between bg-[#6B3E26] bg-[url('https://png.pngtree.com/background/20230611/original/pngtree-many-different-kinds-of-food-are-arranged-on-a-table-picture-image_3145533.jpg')] bg-cover bg-center border border-black rounded-[20px]">
        <Logo />
        <NavItems />
      </div>);
};

export default Header;