import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faYoutube,
  faXTwitter,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";

const Socials = () => {
  return (
    <div className="grid grid-cols-4 justify-center bg-white">
      <div className="flex justify-center items-center">
        <FontAwesomeIcon
          className="w-[50px] h-[50px] p-4 text-sky-800"
          icon={faInstagram}
        />
      </div>
      <div className="flex justify-center items-center">
        <FontAwesomeIcon
          className="w-50px] h-[50px] p-4 text-sky-800"
          icon={faYoutube}
        />
      </div>
      <div className="flex justify-center items-center">
        <FontAwesomeIcon
          className="w-[50px] h-[50px] p-4 text-sky-800"
          icon={faXTwitter}
        />
      </div>
      <div className="flex justify-center items-center">
        <FontAwesomeIcon
          className="w-[50px] h-[50px] p-4 text-sky-800"
          icon={faTelegram}
        />
      </div>
    </div>
  );
};

export default Socials;
