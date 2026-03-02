import Poster from "./Poster.jpg";
import Document1 from "./ilovepdf_pages-to-jpg/MA491_MA11_Report_page-0001.jpg";
import Document2 from "./ilovepdf_pages-to-jpg/MA491_MA11_Report_page-0002.jpg";
import Document3 from "./ilovepdf_pages-to-jpg/MA491_MA11_Report_page-0003.jpg";
import Document4 from "./ilovepdf_pages-to-jpg/MA491_MA11_Report_page-0004.jpg";
import Document5 from "./ilovepdf_pages-to-jpg/MA491_MA11_Report_page-0005.jpg";
import Document6 from "./ilovepdf_pages-to-jpg/MA491_MA11_Report_page-0006.jpg";
import Document7 from "./ilovepdf_pages-to-jpg/MA491_MA11_Report_page-0007.jpg";
import Document8 from "./ilovepdf_pages-to-jpg/MA491_MA11_Report_page-0008.jpg";
import Document9 from "./ilovepdf_pages-to-jpg/MA491_MA11_Report_page-0009.jpg";
import Document10 from "./ilovepdf_pages-to-jpg/MA491_MA11_Report_page-0010.jpg";
import Document11 from "./ilovepdf_pages-to-jpg/MA491_MA11_Report_page-0011.jpg";
import Document12 from "./ilovepdf_pages-to-jpg/MA491_MA11_Report_page-0012.jpg";
import Document13 from "./ilovepdf_pages-to-jpg/MA491_MA11_Report_page-0013.jpg";
import Document14 from "./ilovepdf_pages-to-jpg/MA491_MA11_Report_page-0014.jpg";
import Document15 from "./ilovepdf_pages-to-jpg/MA491_MA11_Report_page-0015.jpg";
import Document16 from "./ilovepdf_pages-to-jpg/MA491_MA11_Report_page-0016.jpg";
import Document17 from "./ilovepdf_pages-to-jpg/MA491_MA11_Report_page-0017.jpg";
import Document18 from "./ilovepdf_pages-to-jpg/MA491_MA11_Report_page-0018.jpg";
import Document19 from "./ilovepdf_pages-to-jpg/MA491_MA11_Report_page-0019.jpg";
import Document20 from "./ilovepdf_pages-to-jpg/MA491_MA11_Report_page-0020.jpg";
import Document21 from "./ilovepdf_pages-to-jpg/MA491_MA11_Report_page-0021.jpg";
import Document22 from "./ilovepdf_pages-to-jpg/MA491_MA11_Report_page-0022.jpg";
import Document23 from "./ilovepdf_pages-to-jpg/MA491_MA11_Report_page-0023.jpg";
import Document24 from "./ilovepdf_pages-to-jpg/MA491_MA11_Report_page-0024.jpg";
import Document25 from "./ilovepdf_pages-to-jpg/MA491_MA11_Report_page-0025.jpg";
import Document26 from "./ilovepdf_pages-to-jpg/MA491_MA11_Report_page-0026.jpg";
import Document27 from "./ilovepdf_pages-to-jpg/MA491_MA11_Report_page-0027.jpg";
import Document28 from "./ilovepdf_pages-to-jpg/MA491_MA11_Report_page-0028.jpg";
import Document29 from "./ilovepdf_pages-to-jpg/MA491_MA11_Report_page-0029.jpg";
import Document30 from "./ilovepdf_pages-to-jpg/MA491_MA11_Report_page-0030.jpg";
import Document31 from "./ilovepdf_pages-to-jpg/MA491_MA11_Report_page-0031.jpg";
import Document32 from "./ilovepdf_pages-to-jpg/MA491_MA11_Report_page-0032.jpg";
import Document33 from "./ilovepdf_pages-to-jpg/MA491_MA11_Report_page-0033.jpg";
import Document34 from "./ilovepdf_pages-to-jpg/MA491_MA11_Report_page-0034.jpg";
import Document35 from "./ilovepdf_pages-to-jpg/MA491_MA11_Report_page-0035.jpg";
import Document36 from "./ilovepdf_pages-to-jpg/MA491_MA11_Report_page-0036.jpg";
import Document37 from "./ilovepdf_pages-to-jpg/MA491_MA11_Report_page-0037.jpg";
import Document38 from "./ilovepdf_pages-to-jpg/MA491_MA11_Report_page-0038.jpg";
import Document39 from "./ilovepdf_pages-to-jpg/MA491_MA11_Report_page-0039.jpg";
import Document40 from "./ilovepdf_pages-to-jpg/MA491_MA11_Report_page-0040.jpg";
import React from "react";
const Documents = [
  Document1,
  Document2,
  Document3,
  Document4,
  Document5,
  Document6,
  Document7,
  Document8,
  Document9,
  Document10,
  Document11,
  Document12,
  Document13,
  Document14,
  Document15,
  Document16,
  Document17,
  Document18,
  Document19,
  Document20,
  Document21,
  Document22,
  Document23,
  Document24,
  Document25,
  Document26,
  Document27,
  Document28,
  Document29,
  Document30,
  Document31,
  Document32,
  Document33,
  Document34,
  Document35,
  Document36,
  Document37,
  Document38,
  Document39,
  Document40,
];

const Posters = <img src={Poster} />;
const Documentsfull = (
  <div className="flex flex-col items-center mt-20 gap-8 select-none">
    {Documents.map((doc, idx) => (
      <img
        key={idx}
        draggable="false"
        className="w-full max-w-3xl rounded-2xl shadow-lg  select-none"
        src={doc}
        alt={`Document page ${idx + 1}`}
      />
    ))}
  </div>
);

export default function Thesis() {
  const [showPoster, setShowPoster] = React.useState(true);

  return (
    <div className="w-full overflow-hidden overflow-x-hidden">
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Abstract</h3>
          <p className="py-4 ">
            The objective of this research is to investigate the lower and upper
            bounds of the spectral norm for various forms of circulant matrices.
            These forms include circulant matrices, r-circulant matrices,
            symmetric circulant matrices, and symmetric r-circulant matrices, in
            conjunction with Gaussian Padovan numbers. The study will also
            present illustrative numerical examples.
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>

      <div className="flex flex-col gap-1 md:flex-nowrap md:flex-row  justify-center m-4">
        <button
          className="btn  rounded-full mx-1 hover:bg-white hover:text-black hover:-translate-y-0.5 ease-in-out duration-300"
          onClick={() => document.getElementById("my_modal_5").showModal()}
        >
          Abstract
        </button>
        {/* <a
          className="btn mx-2  rounded-full"
          href="https://drive.usercontent.google.com/download?id=1-nIRXZ1Y7m9WykIIYx9mC6eCVXDflGxm&export=download"
        >
          Download
        </a> */}
        <a
          className="btn rounded-full mx-1 hover:bg-white hover:text-black hover:-translate-y-0.5 ease-in-out duration-300"
          href={
            showPoster
              ? "https://drive.usercontent.google.com/download?id=1-nIRXZ1Y7m9WykIIYx9mC6eCVXDflGxm&export=download"
              : "https://files.elfsightcdn.com/eafe4a4d-3436-495d-b748-5bdce62d911d/02d85785-ac9e-4e14-b831-ab4086663b4b/MA491_MA11_Report.pdf"
          }
        >
          {showPoster ? "Download Poster" : "Download Document"}
        </a>

        <button
          className="btn rounded-full mx-1 hover:bg-white hover:text-black hover:-translate-y-0.5 ease-in-out duration-300"
          onClick={() => setShowPoster((prev) => !prev)}
        >
          {showPoster ? "Show Document" : "Show Poster"}
        </button>
      </div>

      {showPoster ? (
        <div id="poster">
          <img
            draggable="false"
            className="w-full max-w-3xl rounded-2xl shadow-lg select-none justify-center mx-auto"
            src={Poster}
            alt="Thesis Poster"
          />
        </div>
      ) : (
        <div
          id="document"
          className="flex flex-col items-center mt-5 gap-5 select-none "
        >
          {Documents.map((doc, idx) => (
            <img
              key={idx}
              draggable="false"
              className="w-full max-w-3xl rounded-2xl shadow-lg  select-none"
              src={doc}
              alt={`Document page ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
