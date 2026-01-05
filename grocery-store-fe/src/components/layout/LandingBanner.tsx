import BannerImg from "@/assets/images/banner1.png";
import Button from "@/components/shared/Button";

const LandingBanner = () => {
  const onExploreClick = () => {
    console.log("Explore Products clicked");
  };

  return (
    <div className="flex flex-col xs:flex-row items-center  xs:justify-between gap-6  md:gap-10 p-2 max-h-100 md:p-4">
      <div className="flex-1 flex landing-mobile flex-col justify-center gap-4 max-w-full xs:max-w-[70%]">
        <h1 className="text-2xl sm:text-4xl font-bold leading-tight">
          Fresh groceries,{" "}
          <span className="block">Delivered to Your Doorstep</span>
        </h1>
        <p className="text-xs">
          Enjoy hassle-free online grocery shopping with fast delivery and the
          best quality product
        </p>
        <Button
          label="Shop now"
          handleClick={onExploreClick}
          customStyles="max-w-[150px]"
        />
      </div>
      <div className="flex-1 justify-center hidden xs:flex">
        <img
          src={BannerImg}
          alt="landing banner"
          loading="lazy"
          className="w-full max-w-md xs:max-w-lg lg:max-w-2xl object-contain"
        />
      </div>
    </div>
  );
};

export default LandingBanner;

// import BannerImg from '../../assets/images/banner1.png';
// import Button from '../shared/Button';

// const LandingBanner = () => {

//   const onExploreClick = () => {
//     console.log('Explore Products clicked');
//   }
//   return (
//     <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between gap-6 md:gap-10 py-10">

//       {/* Left Section */}
//       <div className="flex-1 flex flex-col justify-center text-center md:text-left px-4">
//         <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
//           Fresh groceries, <span className="block">Delivered to Your Doorstep</span>
//         </h1>

//         <p className="text-gray-600 max-w-md mx-auto md:mx-0">
//           Enjoy hassle-free online grocery shopping with fast delivery and the best quality products.
//         </p>

//          <Button label='Shop now' handleClick={onExploreClick} customStyles='max-w-[150px]' />
//       </div>

//       {/* Right Section */}
//       <div className="flex-1 flex justify-center">
//         <img
//           src={BannerImg}
//           alt="landing banner"
//           className="w-full max-w-md md:max-w-lg object-contain"
//         />
//       </div>

//     </div>
//   );
// };

// export default LandingBanner;
