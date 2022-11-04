export default function Foot() {
  return (
    <div className="flex mt-3 sm:mt-5 sm:justify-start lg:mx-5">
      <img src="./assets/image-avatar.png" alt="avatar" className="w-5 sm:w-7 md:w-9 h-5 sm:h-7 md:h-9 lg:w-11 lg:h-11 xl:w-20 xl:h-20" />
      <p className="text-soft-blue font-outfit text-xs sm:text-lg md:text-xl lg:text-3xl xl:text-4xl ml-3 text-justify my-auto">
        Creation of <span className="text-white hover:text-cyan cursor-pointer">Jules Wyvern</span>
      </p>
    </div>
  );
}
