import sself from "/src/components/Home/sself.jpg";
import React from "react";

export default function Footer() {
  const copy = () => {
    navigator.clipboard.writeText("contact@fankrits.com");
    alert("Email copied to clipboard!");
  };

  return (
    <footer className="footer sm:footer-horizontal bg-black/20 text-white p-10 mt-10 bottom-0 rounded-2xl ">
      <aside>
        <img
          src={sself}
          alt="sself"
          className="w-10 md:w-15 flex aspect-square rounded-full shadow-lg"
        />
        <p className="text-white">
          Kritsada Nhanjeing
          <br />
          Major in Mathematics
        </p>
      </aside>
      <nav>
        <h6 className="footer-title text-white">Contact</h6>
        <a
          className="btn btn-white hover:scale-105 ease-in-out duration-500  btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl rounded-full bg-white text-black"
          href="mailto:contact@fankrits.com"
          value="contact@fankrits.com"
          onClick={copy}
        >
          contact@fankrits.com
        </a>
      </nav>
    </footer>
  );
}
