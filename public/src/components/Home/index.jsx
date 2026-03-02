//import styles from "./styles.css";
import sself from "./sself.jpg";
import React from "react";
//import latex from "./latex.svg"
import { animate, createScope, createSpring, createDraggable } from "animejs";
import { useEffect, useRef, useState } from "react";

export default function Homes() {
  const root = useRef(null);
  const scope = useRef(null);
  const [setRotations] = useState(0);

  useEffect(() => {
    scope.current = createScope({ root }).add((self) => {
      // Every anime.js instances declared here are now scopped to <div ref={root}>

      // Created a bounce animation loop
      animate(".logo", {
        scale: [
          { to: 1.25, ease: "inOut(3)", duration: 200 },
          { to: 1, ease: createSpring({ stiffness: 300 }) },
        ],
        loop: true,
        loopDelay: 250,
      });

      // Make the logo draggable around its center
      createDraggable(".logo", {
        container: [0, 0, 0, 0],
        releaseEase: createSpring({ stiffness: 200 }),
      });

      // Register function methods to be used outside the useEffect
      self.add("rotateLogo", (i) => {
        animate(".logo", {
          rotate: i * 360,
          ease: "out(4)",
          duration: 1500,
        });
      });
    });

    // Properly cleanup all anime.js instances declared inside the scope
    return () => scope.current.revert();
  }, []);

  const handleClick = () => {
    setRotations((prev) => {
      const newRotations = prev + 1;
      // Animate logo rotation on click using the method declared inside the scope
      scope.current.methods.rotateLogo(newRotations);
      return newRotations;
    });
  };

  const Latex = (props) => (
    <svg
      className="size-10 fill-current"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M18.525 31.482h-.482c-.192 1.966-.462 4.357-3.855 4.357h-1.562c-.905 0-.944-.136-.944-.772V24.831c0-.655 0-.925 1.812-.925h.636v-.578c-.694.058-2.429.058-3.22.058-.751 0-2.255 0-2.91-.058v.578h.443c1.485 0 1.523.212 1.523.906v10.12c0 .694-.038.907-1.523.907H8v.597h10.005l.52-4.954z"
        fill="#000000"
      />
      <path
        d="M18.198 23.308c-.078-.23-.116-.308-.367-.308-.25 0-.308.077-.385.308l-3.104 7.866c-.135.327-.366.925-1.561.925v.482h2.988v-.482c-.598 0-.964-.27-.964-.656 0-.096.02-.135.058-.27l.655-1.657h3.817l.771 1.966a.65.65 0 0 1 .077.231c0 .386-.732.386-1.099.386v.482h3.798v-.482h-.27c-.906 0-1.002-.135-1.137-.52l-3.277-8.27zm-.771 1.37 1.715 4.356h-3.431l1.716-4.357z"
        fill="#000000"
      />
      <path
        d="M33.639 23.443h-11.74l-.347 4.318h.463c.27-3.103.558-3.74 3.47-3.74.346 0 .848 0 1.04.04.405.076.405.288.405.732v10.12c0 .656 0 .926-2.024.926h-.771v.597c.79-.058 2.737-.058 3.624-.058s2.872 0 3.663.058v-.597h-.771c-2.024 0-2.024-.27-2.024-.926v-10.12c0-.386 0-.656.347-.733.212-.038.732-.038 1.098-.038 2.892 0 3.181.636 3.45 3.74h.483l-.366-4.319z"
        fill="#000000"
      />
      <path
        d="M43.971 35.82h-.482c-.482 2.949-.925 4.356-4.221 4.356h-2.545c-.906 0-.945-.135-.945-.771v-5.128h1.716c1.87 0 2.082.617 2.082 2.255h.482v-5.089h-.482c0 1.639-.212 2.236-2.082 2.236h-1.716v-4.607c0-.636.039-.77.945-.77h2.467c2.95 0 3.451 1.06 3.76 3.739h.481l-.54-4.318H32.097v.578h.444c1.484 0 1.523.212 1.523.906V39.27c0 .694-.039.906-1.523.906h-.444v.597h11.065l.81-4.954z"
        fill="#000000"
      />
      <path
        d="m49.773 29.014 2.641-3.855c.405-.617 1.06-1.234 2.776-1.253v-.578h-4.588v.578c.772.02 1.196.443 1.196.887 0 .192-.039.231-.174.443l-2.198 3.239-2.467-3.702c-.039-.057-.135-.212-.135-.289 0-.231.424-.559 1.234-.578v-.578c-.656.058-2.063.058-2.795.058-.598 0-1.793-.02-2.506-.058v.578h.366c1.06 0 1.426.135 1.793.675l3.527 5.34-3.142 4.645c-.27.386-.848 1.273-2.776 1.273v.597h4.588v-.597c-.886-.02-1.214-.54-1.214-.887 0-.174.058-.25.193-.463l2.718-4.029 3.045 4.588c.039.077.097.154.097.212 0 .232-.424.56-1.253.579v.597c.675-.058 2.082-.058 2.795-.058.81 0 1.696.02 2.506.058v-.597h-.366c-1.003 0-1.407-.097-1.812-.694l-4.049-6.13z"
        fill="#000000"
      />
    </svg>
  );

  return (
    <div
      ref={root}
      className="container mx-auto max-w-[1344px] p-5 fade-in-scale "
    >
      <h1 className=" text-center hover:scale-110 font-bold text-[min(10vw)] text-shadow align-middle bg-[url(/bg.jpg)] bg-cover bg-center bg-no-repeat p-4  ">
        Fankrits
      </h1>

      <div className="flex w-full flex-col lg:flex-row ">
        <div className="card rounded-box grid grow place-items-center logo">
          <img
            onClick={handleClick}
            src={sself}
            alt="sself"
            className=" hover:scale-105 w-[min(15vw)] h-[min(15vw)] flex aspect-square rounded-full shadow-lg  "
          />
        </div>
        <div className="divider lg:divider-horizontal"></div>
        <div className="card rounded-box grid grow place-items-center max-w-4xl">
          <div className="collapse bg-base-100 border border-base-300 hover:scale-101">
            <input type="radio" name="my-accordion-1" defaultChecked />
            <div className="collapse-title font-semibold">About Me</div>
            <div className="collapse-content text-sm text-justify">
              Hi! I'm Fankrits, a student at Thammasat University, majoring in
              Mathematics. I have a passion for web development and enjoy
              creating applications that solve real-world problems. In my free
              time, I love to explore new technologies and work on personal
              projects.
            </div>
          </div>
          <div className="collapse bg-base-100 border border-base-300 hover:scale-101">
            <input type="radio" name="my-accordion-1" />
            <div className="collapse-title font-semibold">Education</div>
            <div className="collapse-content text-sm text-justify ">
              <ul className="list-disc ml-5">
                <li>Junior High school : Bang Pa-in "Rachanukroh 1" School </li>
                <li>
                  Senior High School : Thammasat Khlongluang Wittayakom School
                </li>
                <li>University : Thammasat University</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full flex-col lg:flex-row mt-10">
        <div className="card rounded-box grid grow place-items-center">
          <ul className="list bg-base-100 rounded-box shadow-md w-full max-w-11/12 ">
            <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">
              Program
            </li>

            <li className="list-row hover:scale-101">
              <div>
                <img
                  className="size-10 rounded-box"
                  src="https://www.dsaict.eu/web/image/product.template/1883/image_1024?unique=dc3ef97"
                />
              </div>

              <div>Office365</div>
            </li>

            <li className="list-row hover:scale-101 ">
              <div>
                <img
                  className="size-10 rounded-box"
                  src="https://hiviewsolutions.com/wp-content/uploads/2024/08/HiView-Solutions-Google-Workspace-Reseller.-Super-G-Icon.png"
                />
              </div>
              <div>
                <div>Google Workspace</div>
              </div>
              {/*<div className="text-xs uppercase font-semibold opacity-60">Intermediate</div>
                            
                             <button className="btn btn-square btn-ghost">
                            <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg>
                            </button>
                            <button className="btn btn-square btn-ghost">
                            <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></g></svg>
                            </button> */}
            </li>

            <li className="list-row hover:scale-101">
              <div>
                <img
                  className="size-10 rounded-box"
                  src="https://cdn.worldvectorlogo.com/logos/canva-wordmark-2.svg"
                />
              </div>
              <div>
                <div>Canva</div>
              </div>
              {/*<div className="text-xs uppercase font-semibold opacity-60">Intermediate</div>
                            
                             <button className="btn btn-square btn-ghost">
                            <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg>
                            </button>
                            <button className="btn btn-square btn-ghost">
                            <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></g></svg>
                            </button> */}
            </li>
            <li className="list-row hover:scale-101">
              <div>
                <img
                  className="size-10 rounded-box"
                  src="https://embed.zenn.studio/api/optimize-og-image/123638a984dd0d45fd9b/https%3A%2F%2Fwww.appsheet.com%2FContent%2Fimg%2FFavicon-Material-Rebrand.png"
                />
              </div>

              <div>Appsheet</div>
            </li>
            <li className="list-row hover:scale-101">
              <div>
                <img
                  className="size-10 rounded-box"
                  src="https://cdn.worldvectorlogo.com/logos/visual-studio-code-1.svg"
                />
              </div>

              <div>Visual Studio</div>
            </li>
            <li className="list-row hover:scale-101">
              <div>
                <img
                  className="size-10 rounded-box"
                  src="https://cdn.worldvectorlogo.com/logos/davinci-resolve-12.svg"
                />
              </div>

              <div>Davinci Resolve</div>
            </li>
            <li className="list-row hover:scale-101">
              <div>
                <img
                  className="size-10 rounded-box"
                  src="https://cdn.worldvectorlogo.com/logos/matlab.svg"
                />
              </div>
              <div>
                <div>Matlab</div>
                <div className="text-xs uppercase font-semibold opacity-60">
                  Beginner
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="divider lg:divider-horizontal"></div>
        <div className="card rounded-box grid grow place-items-center">
          <ul className="list bg-base-100 rounded-box shadow-md w-full max-w-11/12">
            <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">
              Language & Framework
            </li>

            <li className="list-row hover:scale-101">
              <div>
                <img
                  className="size-10 rounded-box"
                  src="https://cdn.worldvectorlogo.com/logos/html-1.svg"
                />
              </div>
              <div>
                <div>HTML</div>
                <div className="text-xs uppercase font-semibold opacity-60">
                  Beginner
                </div>
              </div>
            </li>
            <li className="list-row hover:scale-101">
              <div>
                <img
                  className="size-10 rounded-box"
                  src="https://cdn.worldvectorlogo.com/logos/css-3.svg"
                />
              </div>
              <div>
                <div>CSS</div>
                <div className="text-xs uppercase font-semibold opacity-60">
                  Beginner
                </div>
              </div>
            </li>
            <li className="list-row hover:scale-101">
              <div>
                <img
                  className="size-10 rounded-box"
                  src="https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg"
                />
              </div>
              <div>
                <div>Tailwind css</div>
                <div className="text-xs uppercase font-semibold opacity-60">
                  Beginner
                </div>
              </div>
            </li>
            <li className="list-row hover:scale-101">
              <div>
                <img
                  className="size-10 rounded-box"
                  src="https://img.daisyui.com/images/daisyui/daisyui-logo-2000.png"
                />
              </div>
              <div>
                <div>DaisyUI</div>
                <div className="text-xs uppercase font-semibold opacity-60">
                  Beginner
                </div>
              </div>
            </li>
            {/* <li className="list-row hover:scale-101">
                            <div><img className="size-10 rounded-box" src="https://cdn.worldvectorlogo.com/logos/react-2.svg"/></div>
                            <div>
                            <div>React</div>
                            <div className="text-xs uppercase font-semibold opacity-60">Beginner</div>
                            </div>
                        </li>
                        <li className="list-row hover:scale-101">
                            <div><img className="size-10 rounded-box" src="https://cdn.worldvectorlogo.com/logos/vitejs.svg"/></div>
                            <div>
                            <div>Vite</div>
                            <div className="text-xs uppercase font-semibold opacity-60">Beginner</div>
                            </div>
                        </li> */}

            <li className="list-row hover:scale-101">
              <div>
                <svg
                  xmlns:dc="http://purl.org/dc/elements/1.1/"
                  xmlns:cc="http://creativecommons.org/ns#"
                  xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
                  xmlns:svg="http://www.w3.org/2000/svg"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  className="fill-current size-10"
                  viewBox="0 0 120 120"
                >
                  <title>LaTeX Icon</title>
                  <desc>
                    This is shape (source) for Clarity vector icon theme for gtk
                  </desc>
                  <metadata>
                    <rdf:RDF>
                      <cc:Work rdf:about="">
                        <dc:title>LaTeX Icon</dc:title>
                        <dc:description>
                          This is shape (source) for Clarity vector icon theme
                          for gtk
                        </dc:description>
                        <dc:creator>
                          <cc:Agent>
                            <dc:title>Jakub Jankiewicz</dc:title>
                          </cc:Agent>
                        </dc:creator>
                        <dc:rights>
                          <cc:Agent>
                            <dc:title>Jakub Jankiewicz</dc:title>
                          </cc:Agent>
                        </dc:rights>
                        <dc:date>2010</dc:date>
                        <dc:format>image/svg+xml</dc:format>
                        <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
                        <cc:license rdf:resource="http://creativecommons.org/licenses/by-sa/3.0/" />
                      </cc:Work>
                    </rdf:RDF>
                  </metadata>
                  <path d="m 24.827171,12.268815 0,3.124898 5.505773,0 0,37.052362 -5.505773,0 0,3.050496 34.671488,0 0,-10.788339 -3.571312,0 0,7.291429 -19.716619,0 0,-36.605948 5.505773,0 0,-3.124898 -16.88933,0 z m 56.917786,3.273702 -15.475686,40.177261 -3.794519,0 0,3.124898 12.201983,0 0,-3.124898 -4.761749,0 3.645714,-9.449097 18.15417,0 3.645714,9.449097 -4.836152,0 0,3.124898 15.773298,0 0,-3.124898 -4.24094,0 -15.475681,-40.177261 -4.836152,0 z m 0.96723,6.99382 7.886648,20.609446 -15.847698,0 7.96105,-20.609446 z m -70.235804,36.605948 0,10.19312 3.571312,0 0,-6.69621 12.7228,0 0,36.754753 -5.505773,0 0,3.050492 16.88933,0 0,-3.050492 -5.505773,0 0,-36.754753 12.722799,0 0,6.69621 3.49691,0 0,-10.19312 -38.391605,0 z m 61.605133,3.050496 0,3.050496 4.612945,0 12.648397,18.972595 -12.42519,18.154168 -4.984956,0 0,3.0505 14.285248,0 0,-3.0505 -5.580175,0 10.565131,-15.475684 10.341924,15.475684 -5.13376,0 0,3.0505 17.11254,0 0,-3.0505 -4.61295,0 L 97.220642,81.9094 108.6786,65.243277 l 4.91056,0 0,-3.050496 -14.21085,0 0,3.050496 5.58018,0 -9.523504,13.987639 -9.300291,-13.987639 5.133761,0 0,-3.050496 -17.18694,0 z m -31.993004,11.606764 0,3.050496 5.505773,0 0,37.126769 -5.505773,0 0,3.05049 35.341109,0 0,-9.5979 -3.571312,0 0,6.02659 -20.311837,0 0,-18.079768 14.136444,0 0,5.431368 3.571312,0 0,-14.43405 -3.571312,0 0,5.43137 -14.136444,0 0,-14.508455 19.865423,0 0,6.100991 3.571312,0 0,-9.597901 -34.894695,0 z" />
                </svg>
                {/* <img className="size-10 rounded-box fill-current" src="https://images.seeklogo.com/logo-png/8/2/latex-logo-png_seeklogo-82426.png"/> */}
              </div>
              <div>
                <div>LATEX</div>
                <div className="text-xs uppercase font-semibold opacity-60">
                  Intermediate
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="divider lg:divider-horizontal"></div>
        <div className="card rounded-box grid grow place-items-center">
          <ul className="list bg-base-100 rounded-box shadow-md w-full max-w-11/12">
            <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">
              Personality & Interest
            </li>

            <li className="list-row hover:scale-101">
              <div>
                <img
                  className="size-10 rounded-box"
                  src="https://www.svgrepo.com/show/276605/badge-new.svg"
                />
              </div>
              <div>Learn new things and challenge </div>
            </li>
            <li className="list-row hover:scale-101">
              <div>
                <img
                  className="size-10 rounded-box"
                  src="https://www.svgrepo.com/show/428715/profit-bar-chart-finance.svg"
                />
              </div>
              <div>Economy, Business and Invest </div>
            </li>
            <li className="list-row hover:scale-101">
              <div>
                <img
                  className="size-10 rounded-box"
                  src="https://www.svgrepo.com/show/261817/think.svg"
                />
              </div>
              <div>Critical thinking </div>
            </li>
            <li className="list-row hover:scale-101">
              <div>
                <img
                  className="size-10 rounded-box"
                  src="https://www.svgrepo.com/show/278802/puzzle-toy.svg"
                />
              </div>
              <div>Rational and logical </div>
            </li>
            <li className="list-row hover:scale-101">
              <div>
                <img
                  className="size-10 rounded-box"
                  src="https://www.svgrepo.com/show/218249/deal.svg"
                />
              </div>
              <div>Peaceful and Cooperative </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
