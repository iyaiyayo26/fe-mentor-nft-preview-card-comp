export default function Description() {
  return (
    <div className="lg:px-5">
      <h2 className="text-white font-outfit my-3 sm:my-6 md:text-xl lg:text-5xl  font-semibold hover:text-cyan xl:my-10 cursor-pointer ">Equilibrium #3429</h2>
      <p className="text-soft-blue font-normal font-outfit text-xs sm:text-sm md:text-lg lg:text-2xl xl:text-4xl xl:mb-10">Our Equilibrium collection promotes balance and calm</p>
      <div className="flex text-xs sm:text-sm mt-3 sm:mt-5 mb-1  justify-between border-b border-soft-blue pb-2 sm:pb-4 lg:my-7 lg:pb-8">
        <div className="flex">
          <img src="./assets/icon-ethereum.svg" alt="icon-ethereum" className="w-3 h-4 sm:w-5 lg:w-7 sm:h-6 lg:h-8 xl:w-9 xl:h-9" />
          <p className="text-cyan font-semibold font-outfit ml-1 md:text-base lg:text-xl lg:ml-2 xl:text-3xl">0.041ETH</p>
        </div>
        <div className="flex">
          <img src="./assets/icon-clock.svg" alt="icon-clock" className="w-4 sm:w-6 h-4 sm:h-6 lg:w-8 lg:h-8 xl:w-10 xl:h-10" />
          <p className="text-soft-blue font-semibold font-outfit ml-1 md:text-base lg:text-xl lg:ml-2 xl:text-3xl">3 days left</p>
        </div>
      </div>
    </div>
  );
}
