import React from "react";
import ShinyText from "/src/TextAnimations/ShinyText/ShinyText.jsx";

export default function Appsheet() {
  const [showApp, setShowApp] = React.useState(true);

  return (
    <div className="w-full overflow-hidden overflow-x-hidden">
      <dialog id="my_modal_7" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            {showApp
              ? "Description of Professor Preview"
              : " Description of PDf Invoice"}
          </h3>
          <p className="py-4 ">
            {showApp
              ? "Professor Preview empowers you to take control of your academic journey. By providing a platform to understand and anticipate teaching styles, this Appsheet application helps you strategically select courses that align with your learning preferences. Say goodbye to the frustration of incompatible instruction and hello to a more personalized, effective, and ultimately more successful educational experience. With Professor Preview, you're not just enrolling in classes; you're investing in your optimal learning environment."
              : "PDF Invoice is the ultimate solution for any family grocery store looking to modernize its pricing and invoicing. Born from the common frustration of forgetting item prices, this AppSheet application empowers you to effortlessly manage inventory, instantly calculate totals with barcode scanning, and generate professional, print-ready invoices. By streamlining these essential daily tasks, PDF Invoice helps you save time, reduce errors, and ensure a smooth, efficient operation, ultimately making your business more organized and customer-friendly."}
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>

      <div className=" flex flex-col gap-1 md:flex-nowrap md:flex-row  justify-center m-4">
        <button
          className="btn  rounded-full mx-1 hover:bg-white hover:text-black hover:-translate-y-0.5 ease-in-out duration-300"
          onClick={() => document.getElementById("my_modal_7").showModal()}
        >
          {showApp
            ? "Description of Professor Preview"
            : " Description of PDf Invoice"}
        </button>

        {/* <a
          className="btn rounded-full mx-1 hover:bg-white hover:text-black hover:-translate-y-0.5 ease-in-out duration-300"
          href={
            showApp
              ? "https://drive.usercontent.google.com/download?id=1-nIRXZ1Y7m9WykIIYx9mC6eCVXDflGxm&export=download"
              : "https://files.elfsightcdn.com/eafe4a4d-3436-495d-b748-5bdce62d911d/02d85785-ac9e-4e14-b831-ab4086663b4b/MA491_MA11_Report.pdf"
          }
        >
          {showApp ? "Download Poster" : "Download Document"}
        </a> */}

        <button
          className="btn rounded-full mx-1 hover:bg-white hover:text-black hover:-translate-y-0.5 ease-in-out duration-300"
          onClick={() => setShowApp((prev) => !prev)}
        >
          {showApp ? "PDF Invoice" : "Professor Preview"}
        </button>
      </div>
      <div className="flex justify-center">
        <ShinyText
          text={showApp ? "Professor Preview" : "PDF Invoice"}
          disabled={false}
          speed={5}
          className="flex select-none text-4xl md:text-6xl lg:text-9xl mb-8 text-center align-middle animate-shine @keyframes shine animate-shine"
        />
      </div>

      {showApp ? (
        <div>
          <iframe
            src="https://www.appsheet.com/start/a45b5648-cdd5-4fd4-9c99-8f1c376f0d40#appName=%E0%B8%AA%E0%B9%80%E0%B8%9B%E0%B8%A3%E0%B8%94%E0%B8%8A%E0%B8%B5%E0%B8%95%E0%B9%84%E0%B8%A1%E0%B9%88%E0%B8%A1%E0%B8%B5%E0%B8%8A%E0%B8%B7%E0%B9%88%E0%B8%AD-6572923&group=%5B%5D&sort=%5B%5D&table=Branch&view=Main"
            className="rounded-2xl  shadow-lg w-full h-[min(50vh)] md:h-[min(80vh)] lg:h-[min(100vh)]  place-items-center justify-center"
            title="Professor Preview"
          />
        </div>
      ) : (
        <div>
          <iframe
            src="https://www.appsheet.com/start/6fce6140-8285-4a07-9ccc-e8b2eb8532f8?platform=desktop#appName=PDFINVOICE-6572923&vss=H4sIAAAAAAAAA6XOsQ7CIBgE4He5mSdgbTo0xjpouogDlp-E2EJTqNoQ3l2qNc6NI0e--y_ibuhxDLK9gZ_j77WjGRxR4DQPJMAFCmfD6DoBJlDL_hNWdXOoilIgIV3Ylwfy4HGT5n_dZjCKbDDa0LhULTBXrCx_LygHK0Fi6Kcgrx2912aSUs60aydPqslDtg_wlS2fg7Rq71Ru1LLzlF6E3E2WYAEAAA==&view=INVOICE"
            className="rounded-2xl  shadow-lg w-full h-[min(50vh)] md:h-[min(80vh)] lg:h-[min(100vh)]  place-items-center justify-center"
            title="PDF Invoice"
          />
        </div>
      )}
    </div>
  );
}
