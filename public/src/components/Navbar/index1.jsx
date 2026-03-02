import PillNav from "/src/components/PillNav/PillNav.jsx";

//import logo from "/path/to/logo.svg";
import sself from "/src/components/Home/sself.jpg";

export default function Navbar() {
  // Function to open the modal
  const openModal = () => {
    document.getElementById("my_modal_6")?.showModal();
  };

  return (
    <div draggable="false" className="w-full top-0 z-50 mb-10 select-none">
      <PillNav
        draggable="false"
        logo={sself}
        logoAlt="Fankrits Logo"
        items={[
          {
            label: (
              <button className="w-full hover:cursor-pointer">Home</button>
            ),
            href: "/Home",
            className: "w-full",
          },
          {
            label: (
              <button className="w-full hover:cursor-pointer">Thesis</button>
            ),
            href: "/thesis",
            className: "w-full",
          },
          {
            label: (
              <button
                type="button"
                className="bg-transparent border-none p-0 m-0 text-inherit hover:cursor-pointer cursor-pointer w-full"
                onClick={openModal}
                tabIndex={0}
                style={{ background: "none", border: "none" }}
              >
                Hobby
              </button>
            ),
            href: "#",
          },
        ]}
        activeHref="/"
        className="custom-nav justify-center items-center opacity-90"
        ease="power2.easeOut"
        baseColor="#000000"
        pillColor="#ffffff"
        hoveredPillTextColor="#ffffff"
        pillTextColor="#000000"
      />
      <dialog id="my_modal_6" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-center">Hobby</h3>
          <p className="py-4">
            <a
              className="my-2 select-none btn z-20 flex bg-white/60 text-black hover:bg-white hover:text-black rounded-full duration-300 ease-in-out hover:-translate-y-1 hover:scale-102"
              href="/hobby/web"
            >
              Web Development
            </a>
            <a
              className="my-2 select-none btn z-20 flex bg-white/60 text-black hover:bg-white hover:text-black rounded-full duration-300 ease-in-out hover:-translate-y-1 hover:scale-102"
              href="/hobby/videoedit"
            >
              Video Editing
            </a>
            <a
              className="my-2 select-none btn z-20 flex bg-white/60 text-black hover:bg-white hover:text-black rounded-full duration-300 ease-in-out hover:-translate-y-1 hover:scale-102"
              href="/hobby/appsheet"
            >
              AppSheet
            </a>
            <a
              className="my-2 select-none btn z-20 flex bg-white/60 text-black hover:bg-white hover:text-black rounded-full duration-300 ease-in-out hover:-translate-y-1 hover:scale-102"
              href="/vrjtd"
            >
              VRJTD
            </a>
          </p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}
