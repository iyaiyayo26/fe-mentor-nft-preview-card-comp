import Description from "./components/Description";
import Foot from "./components/Foot";
import MainImage from "./components/MainImage";

function App() {
  return (
    <>
      <div className="container min-[100px]:w-2/3  mt-10 mx-auto p-4 sm:p-6 lg:p-8  xl:p-12 rounded-xl bg-very-dark-blue">
        {/* gambar */}
        <MainImage />
        {/* desc */}
        <Description />
        {/* footer */}
        <Foot />
      </div>
    </>
  );
}

export default App;
