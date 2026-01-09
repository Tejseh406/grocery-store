import LogoIcon from "@/assets/svg/logo-icon.svg";

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <img src={LogoIcon} alt="logo" />
      <span className="text-xl font-medium">BigBazar</span>
    </div>
  );
};

export default Logo;
