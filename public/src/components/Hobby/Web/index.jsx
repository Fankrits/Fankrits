import React from "react";
import ShinyText from "/src/TextAnimations/ShinyText/ShinyText.jsx";

export default function Web() {
  const [showWeb, setShowWeb] = React.useState(true);
  return (
    <div classname=" w-full place-items-center justify-center ">
      <div className="flex flex-col gap-1 md:flex-nowrap md:flex-row  justify-center m-4 mt-15">
        <a
          href={
            showWeb
              ? "https://listcal.fankrits.com/"
              : "https://fanboard.fankrits.com/"
          }
          className=" btn rounded-full mx-1 hover:bg-white hover:text-black hover:-translate-y-0.5 ease-in-out duration-300"
        >
          {showWeb ? "Full Page of ListCal" : "Full Page of FanBoard"}
        </a>
        <a
          onClick={() => setShowWeb((prev) => !prev)}
          className=" btn rounded-full mx-1 hover:bg-white hover:text-black hover:-translate-y-0.5 ease-in-out duration-300"
        >
          {showWeb ? "FanBoard" : "ListCal"}
        </a>
      </div>
      {showWeb ? (
        <div className="flex flex-wrap justify-center items-center mt-5">
          <ShinyText
            text="Listcal"
            disabled={false}
            speed={5}
            className="flex select-none text-4xl md:text-6xl lg:text-9xl mb-8 text-center align-middle animate-shine @keyframes shine animate-shine"
          />
          <embed
            className="rounded-2xl  shadow-lg w-full h-[min(50vh)] md:h-[min(80vh)] lg:h-[min(100vh)]  place-items-center justify-center"
            src="https://listcal.fankrits.com/"
          ></embed>
        </div>
      ) : (
        <div className="flex flex-wrap justify-center items-center mt-5">
          <ShinyText
            text="FanBoard"
            disabled={false}
            speed={5}
            className="flex select-none text-4xl md:text-6xl lg:text-9xl mb-8 text-center align-middle animate-shine @keyframes shine animate-shine"
          />
          <embed
            className="rounded-2xl  shadow-lg w-full h-[min(50vh)] md:h-[min(80vh)] lg:h-[min(100vh)]  place-items-center justify-center"
            src="https://fanboard.fankrits.com/"
          ></embed>
        </div>
      )}
    </div>
  );
}
