
//import styles from "./styles.css";
import sself from "./sself.jpg";
import React from 'react';


export default function Home(){
    return (
        <div className="container mx-auto max-w-[1344px]">
            <h1 className="text-center font-bold text-[min(10vw)] text-shadow align-middle bg-[url(/bg.jpg)] bg-cover bg-center bg-no-repeat p-4  ">
                Fankrits
            </h1>

            <div className="flex w-full flex-col lg:flex-row ">
                <div className="card rounded-box grid grow place-items-center">
                    <img src={sself} alt="sself" className="w-[min(15vw)] h-[min(15vw)] flex aspect-square rounded-full shadow-lg  " />
                </div>
                <div className="divider lg:divider-horizontal"></div>
                <div className="card rounded-box grid grow place-items-center max-w-4xl">
                    <div className="collapse bg-base-100 border border-base-300">
                        <input type="radio" name="my-accordion-1" defaultChecked />
                        <div className="collapse-title font-semibold">About Me</div>
                        <div className="collapse-content text-sm text-justify">Hi! I'm Fankrits, a student at Thammasat University, majoring in Mathematics. I have a passion for web development and enjoy creating applications that solve real-world problems. In my free time, I love to explore new technologies and work on personal projects.</div>

                    </div>
                    <div className="collapse bg-base-100 border border-base-300">
                        <input type="radio" name="my-accordion-1" />
                        <div className="collapse-title font-semibold">Education</div>
                        <div className="collapse-content text-sm text-justify ">
                            <ul className="list-disc ml-5">
                                <li>Junior High school : Bang Pa-in "Rachanukroh 1" School </li>
                                <li>Senior High School : Thammasat Khlongluang Wittayakom School</li>
                                <li>University : Thammasat University</li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
            </div>

            <div className="flex w-full flex-col lg:flex-row mt-10">
                <div className="card rounded-box grid grow place-items-center">
                    <ul className="list bg-base-100 rounded-box shadow-md w-full max-w-11/12 ">
  
                        <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">Program</li>
                        
                        <li className="list-row hover:scale-101">
                            <div><img className="size-10 rounded-box" src="https://www.dsaict.eu/web/image/product.template/1883/image_1024?unique=dc3ef97"/></div>
                            
                            <div>Office365</div>
                            
                        </li>
                        
                        <li className="list-row hover:scale-101">
                            <div><img className="size-10 rounded-box" src="https://hiviewsolutions.com/wp-content/uploads/2024/08/HiView-Solutions-Google-Workspace-Reseller.-Super-G-Icon.png"/></div>
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
                            <div><img className="size-10 rounded-box" src="https://cdn.worldvectorlogo.com/logos/canva-wordmark-2.svg"/></div>
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
                            <div><img className="size-10 rounded-box" src="https://embed.zenn.studio/api/optimize-og-image/123638a984dd0d45fd9b/https%3A%2F%2Fwww.appsheet.com%2FContent%2Fimg%2FFavicon-Material-Rebrand.png"/></div>
                            
                            <div>Appsheet</div>
                            
                        </li>
                        <li className="list-row hover:scale-101">
                            <div><img className="size-10 rounded-box" src="https://cdn.worldvectorlogo.com/logos/visual-studio-code-1.svg"/></div>
                            
                            <div>Visual Studio</div>
                            
                        </li>
                        <li className="list-row hover:scale-101">
                            <div><img className="size-10 rounded-box" src="https://cdn.worldvectorlogo.com/logos/davinci-resolve-12.svg"/></div>
                            
                            <div>Davinci Resolve</div>
                            
                        </li>
                        <li className="list-row hover:scale-101">
                            <div><img className="size-10 rounded-box" src="https://cdn.worldvectorlogo.com/logos/matlab.svg"/></div>
                            <div>
                            <div>Matlab</div>
                            <div className="text-xs uppercase font-semibold opacity-60">Beginner</div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="divider lg:divider-horizontal"></div>
                <div className="card rounded-box grid grow place-items-center">
                    <ul className="list bg-base-100 rounded-box shadow-md w-full max-w-11/12">
  
                        <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">Language</li>
                        
                        <li className="list-row hover:scale-101">
                            <div><img className="size-10 rounded-box" src="https://cdn.worldvectorlogo.com/logos/html-1.svg"/></div>
                            <div>
                            <div>HTML</div>
                            <div className="text-xs uppercase font-semibold opacity-60">Beginner</div>
                            </div>
                        </li>
                        <li className="list-row hover:scale-101">
                            <div><img className="size-10 rounded-box" src="https://cdn.worldvectorlogo.com/logos/css-3.svg"/></div>
                            <div>
                            <div>CSS</div>
                            <div className="text-xs uppercase font-semibold opacity-60">Beginner</div>
                            </div>
                        </li>
                        <li className="list-row hover:scale-101">
                            <div><img className="size-10 rounded-box" src="https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg"/></div>
                            <div>
                            <div>Tailwind css</div>
                            <div className="text-xs uppercase font-semibold opacity-60">Beginner</div>
                            </div>
                        </li>
                        <li className="list-row hover:scale-101">
                            <div><img className="size-10 rounded-box" src="https://img.daisyui.com/images/daisyui/daisyui-logo-2000.png"/></div>
                            <div>
                            <div>DaisyUI</div>
                            <div className="text-xs uppercase font-semibold opacity-60">Beginner</div>
                            </div>
                        </li>
                        <li className="list-row hover:scale-101">
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
                        </li>
                        
                        <li className="list-row hover:scale-101">
                            <div><img className="size-10 rounded-box" src="https://images.seeklogo.com/logo-png/8/2/latex-logo-png_seeklogo-82426.png"/></div>
                            <div>
                            <div>LATEX</div>
                            <div className="text-xs uppercase font-semibold opacity-60">Intermediate</div>
                            </div>
                        </li>            
                    </ul>
                </div>
                <div className="divider lg:divider-horizontal"></div>
                <div className="card rounded-box grid grow place-items-center">
                    <ul className="list bg-base-100 rounded-box shadow-md w-full max-w-11/12">
  
                        <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">Personality & Interest</li>
                        
                        <li className="list-row hover:scale-101">
                            <div><img className="size-10 rounded-box" src="https://www.svgrepo.com/show/276605/badge-new.svg"/></div>   
                            <div>Learn new things and challenge </div>
                        </li>
                        <li className="list-row hover:scale-101">
                            <div><img className="size-10 rounded-box" src="https://www.svgrepo.com/show/428715/profit-bar-chart-finance.svg"/></div>   
                            <div>Economy, Business and Invest </div>
                        </li>
                        <li className="list-row hover:scale-101">
                            <div><img className="size-10 rounded-box" src="https://www.svgrepo.com/show/261817/think.svg"/></div>   
                            <div>Critical thinking </div>
                        </li>    
                        <li className="list-row hover:scale-101">
                            <div><img className="size-10 rounded-box" src="https://www.svgrepo.com/show/278802/puzzle-toy.svg"/></div>   
                            <div>Rational and logical </div>
                        </li>
                        <li className="list-row hover:scale-101">
                            <div><img className="size-10 rounded-box" src="https://www.svgrepo.com/show/218249/deal.svg"/></div>   
                            <div>Peaceful and Cooperative </div>
                        </li>         
                    </ul>
                </div>
            </div>    
        </div>
    )
}