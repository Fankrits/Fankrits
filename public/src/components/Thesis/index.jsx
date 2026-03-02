
export default function Thesis() {
    return (
        <div className="container mx-auto max-w-[1344px]">
            <h1 className="text-center hover:scale-110 font-bold text-[min(10vw)] text-shadow align-middle bg-[url(/bg.jpg)] bg-cover bg-center bg-no-repeat p-4">
                Thesis
            </h1>

            <div className="flex w-full flex-col lg:flex-row">
            <div className="card  rounded-box grid  grow place-items-center -p-5">
                <div className="card bg-base-100 lg:w-xl shadow-sm ">
            <div className="card-body hover:scale-105">
                <h2 className="card-title lg:text-[min(3vw)] text-xl font-bold">Abstract</h2>
                <p className="lg:text-[min(2vw)] text-base indent-10 text-justify">The objective of this research is to investigate the lower and upper bounds of the spectral norm for various forms of circulant matrices. These forms include circulant matrices, r-circulant matrices, symmetric circulant matrices, and symmetric r-circulant matrices, in conjunction with Gaussian Padovan numbers. The study will also present illustrative numerical examples.</p>
                <div className="card-actions justify-end">
                
                </div>
            </div>
            </div>
            </div>
            <div className="divider lg:divider-horizontal"></div>
            <div className="card  rounded-box grid  grow place-items-center hover:scale-105">
                <div className="shadow-lg w-full m-5 rounded-2xl h-[min(100vh)]"> 
                <iframe className="w-full h-full rounded-2xl" src="https://drive.google.com/file/d/1-nIRXZ1Y7m9WykIIYx9mC6eCVXDflGxm/preview"  allow="autoplay"></iframe>
            </div>
            </div>
            </div>
            
            

            <div className="shadow-lg w-full m-5 rounded-2xl h-[min(100vh)] bg-neutral hover:scale-105" >
                
                <script src="https://static.elfsight.com/platform/platform.js" async></script>
                <div className="elfsight-app-a56c7159-074e-409e-ad97-82ca87547920" data-elfsight-app-lazy></div>
                
                {/* <embed className=" rounded-2xl w-full h-full bg-none cover object-cover bg-cover cover" src="https://a56c7159074e409ead9782ca87547920.elf.site"></embed> */}
            </div>


        </div>
    );
}