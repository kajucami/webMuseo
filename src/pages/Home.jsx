import Footer from "../components/Footer";
import Header from "../components/Header";
import Slider from "../components/Slider";
import pendo from "../assets/img/pendo.jpg";
import { Divider } from "@nextui-org/react";
import Socials from "../components/Socials";

const Home = () => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <Divider />
        <div className="relative">
          <div className="flex justify-center items-center font-black text-4xl p-4 z-10 absolute top-10 left-0 right-0">
            StreetArt 06/01/2024
          </div>
          <div className="flex justify-center items-center p-12 py-10 z-20">
            <Slider />
          </div>
        </div>
        <Divider />
        <Socials />
        <Divider />
        <div className="bg-white grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 mb-10 items-center">
          <img className="w-full" src={pendo} alt="cueva del pendo" />
          <div className="p-4">
            <h1 className="text-zinc-200 text-xl hover:text-2xl hover:font-extrabold hover:text-zinc-900 text-center">
              El Pendo como nunca lo habías visto
            </h1>
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
