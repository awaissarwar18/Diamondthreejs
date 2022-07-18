import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Circles } from "react-loader-spinner";
import Image from "next/image";

const Spinner = () => {
  return (
    <div className="loading-gif">
      <Image
        unoptimized={true}
        src="/loading.gif"
        alt=""
        width={400}
        height={400}
      />
    </div>
  );
};

export default Spinner;
