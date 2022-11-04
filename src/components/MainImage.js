export default function MainImage() {
  return (
    <div className="relative hover:opacity-50 hover:cursor-pointer group">
      <img src="./assets/image-equilibrium.jpg" alt="equilibrium" className="block rounded-xl lg:mx-auto w-full " />
      <div className="absolute top-0 bottom-0 left-0 right-0 h-full w-full opacity-0 bg-cyan rounded-lg group-hover:opacity-50 group-hover:cursor-pointer group-hover:block"></div>
      <img src="./assets/icon-view.svg" alt="icon view" className="absolute inset-x-0 bottom-32 xl:bottom-80 m-auto hidden group-hover:block" />
    </div>
  );
}
