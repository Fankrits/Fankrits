import { useRef } from "react";

export default function VRJTD() 

{

    const codeRef = useRef(null);

    const copy = () => {
        if (codeRef.current) {
            const text = codeRef.current.textContent.trim();
            navigator.clipboard.writeText(text);
            alert('Copied to clipboard!');
        }
    };

    const copynav = () => {
        
            var textnav = `import { Link } from "react-router-dom";
        import About from "../About";


        export default function Navbar(){
            return (
            <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50">
            <div className="flex-1">
            <a className="btn btn-ghost  text-xl">Fankrits</a>
            </div>
            <div className="flex-none">
            <ul className="menu menu-horizontal px-1 ">
            
            <li><Link to="/">Home</Link></li>
            <li> <Link to="/About">About</Link></li>
            
            
            <label className="swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            
                <input type="checkbox" id="theme-controller" className="theme-controller" value="night" />
            
            {/* sun icon */}
            <svg
                className="swap-off h-8 w-8 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24">
                <path
                d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* moon icon */}
            <svg
                className="swap-on h-8 w-8 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24">
                <path
                d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
            </label>
            </ul>
            </div>
        </div>
            );
        }`
            navigator.clipboard.writeText(textnav);
            alert('Copied to clipboard!');
        
    };

    const copyfoot = () => {
        navigator.clipboard.writeText(`
export default function Footer(){
    return(
        <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
  <aside>
    <svg
      width="50"
      height="50"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      clipRule="evenodd"
      className="fill-current">
      <path
        d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
    </svg>
    <p>
      Fankrits
      <br />
      Vite + React + Javascript + Tailwind css + Daisy UI + navbar + pagenavigation + footer
    </p>
  </aside>
  <nav>
    <h6 className="footer-title">Social</h6>
    <div className="grid grid-flow-col gap-4">
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-current">
          <path
            d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
        </svg>
      </a>
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-current">
          <path
            d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
        </svg>
      </a>
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-current">
          <path
            d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
        </svg>
      </a>
    </div>
  </nav>
</footer>
    )
}`);

        alert('Copied to clipboard!');
    };

    const copyhome = () => {
        navigator.clipboard.writeText(`export default function Home(){
    return(
        <h1 className="text-9xl text-primary text-center">HOME PAGE</h1>
    )
}`);
        alert('Copied to clipboard!');
    };

    const copyabout = () => {
        navigator.clipboard.writeText(`export default function About(){
    return(
        <h1 className="text-9xl text-primary text-center">ABOUT PAGE</h1>
    )
}`);
        alert('Copied to clipboard!');
    };

    const copymain =() => {
        navigator.clipboard.writeText(`import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter} from 'react-router-dom';
import './index.css'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);`);
        alert('Copied to clipboard!');
    };

    const copyapp = () => {
        navigator.clipboard.writeText(`import './App.css'
import {  Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Footer from './components/Footer'

function App() {
  

  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
      </Routes>
    <Footer/>
    </>
  )  
    
}


export default App`);
    };

    return (
        <div className="container mx-auto max-w-[1344px] ">
            <h1 className="text-[min(5vw)] text-center font-bold hover:scale-105 m-20">VRJTD Simple Website Template</h1>


             <div className="collapse bg-base-100 border-base-300 border p-4 hover:scale-102">
                <input type="checkbox" />
                <div className="collapse-title font-semibold">Install by Github Clone</div>

                <div className=" p-5 text-sm flex w-full flex-col lg:flex-row">
                    <div className="card  rounded-box grid h-32 grow place-items-center">
                        <div className="mockup-code hover:scale-101 w-full m-5">
                            <pre data-prefix="$"><code>{`git clone https://github.com/fankritsada/VRJTD
      cd VRJTD
      npm install
      npm run dev`}

                                {/* <a className="btn btn-primary hover:scale-105 ml-5 text-right" onClick={copy}>Copy</a>*/}</code></pre> 
                        </div>
                    </div>
                    <div className="divider lg:divider-horizontal"></div>
                    <div className="card  rounded-box grid h-32 grow place-items-center flex-wrap">
                        <svg  className="fill-current h-20 w-20 octicon octicon-mark-github v-align-middle" aria-hidden="true" viewBox="0 0 24 24" version="1.1"  data-view-component="true" >
    <path d="M12 1C5.923 1 1 5.923 1 12c0 4.867 3.149 8.979 7.521 10.436.55.096.756-.233.756-.522 0-.262-.013-1.128-.013-2.049-2.764.509-3.479-.674-3.699-1.292-.124-.317-.66-1.293-1.127-1.554-.385-.207-.936-.715-.014-.729.866-.014 1.485.797 1.691 1.128.99 1.663 2.571 1.196 3.204.907.096-.715.385-1.196.701-1.471-2.448-.275-5.005-1.224-5.005-5.432 0-1.196.426-2.186 1.128-2.956-.111-.275-.496-1.402.11-2.915 0 0 .921-.288 3.024 1.128a10.193 10.193 0 0 1 2.75-.371c.936 0 1.871.123 2.75.371 2.104-1.43 3.025-1.128 3.025-1.128.605 1.513.221 2.64.111 2.915.701.77 1.127 1.747 1.127 2.956 0 4.222-2.571 5.157-5.019 5.432.399.344.743 1.004.743 2.035 0 1.471-.014 2.654-.014 3.025 0 .289.206.632.756.522C19.851 20.979 23 16.854 23 12c0-6.077-4.922-11-11-11Z"></path>
</svg>
                        <p className="text-xl text-justify text-wrap">fankritsada</p>
                        <a className="btn  btn-secondary   hover:scale-110" href="https://github.com/fankritsada/VRJTD" target="_blank" >Github</a>
                    </div>
                </div>
            </div>    

            

            <div className="collapse bg-base-100 border-base-300 border p-4 mt-5 w-full ">  
                <div className="collapse-title font-semibold">Follow the guide</div>
                <div className="p-5 w-full">
                    <p className="mt-5 mb-2">First step : You have to choose the folder and install vite by using command below</p>
                    <div className="mockup-code hover:scale-101   w-fit ">
                        <pre data-prefix="$"><code>npm create vite@latest</code></pre>
                    </div>

                    <p className="mt-5 mb-2 ">named a project, select a framework and select a variant</p>
                    <div className="mockup-code hover:scale-101  w-fit">
                        <pre data-prefix="$"><code>
                            {`Project name:
    │  -your project name-
    │
    ◇  Select a framework:
    │  React
    │
    ◆  Select a variant:
    │  JavaScript`}
                            
                            </code></pre>
                    </div>

                    <p className="mt-5 mb-2">then , open the folder that  created</p>
                    <div className="mockup-code hover:scale-101 w-fit">
                        <pre data-prefix="$"><code>cd -your project name- </code></pre>
                    </div>
                    
                    <p className="mt-5 mb-2">and use this command to get react router</p>
                    <div className="mockup-code hover:scale-101 w-fit">
                    <pre data-prefix="$"><code >npm i -D react-router-dom@latest </code></pre>
                    </div>


                    <p className="mt-5 mb-2">and install Tailwind css and Daisy UI by using command below</p>
                    <div className="mockup-code hover:scale-101 w-fit">
                        <pre data-prefix="$"><code >npm install tailwindcss@latest @tailwindcss/vite@latest daisyui@latest</code></pre>
                    </div>

                    <p className="mt-5 mb-2">Add Tailwind CSS to vite.config.js </p>
                    <div className="mockup-code hover:scale-101 w-fit">
                        <pre data-prefix="$"><code >
                        {`import { defineConfig } from 'vite';
      import tailwindcss from '@tailwindcss/vite';

      export default defineConfig({
      plugins: [ tailwindcss() ],
                                    
      });`} 
        </code></pre>
                    </div>
                
                    <p className="mt-5 mb-2">Put Tailwind CSS and daisyUI to all index.css and app.css file (and remove old styles)</p>
                    <div className="mockup-code hover:scale-101 w-fit">
                        <pre data-prefix="$"><code >{`@import "tailwindcss";
      @plugin "daisyui" {
        themes: all;
      }`}</code></pre>
                    </div>        
                    
                    <div className="shadow-lg rounded-lg p-5 mt-5 mb-5 bg-base-300 ">
                        <p className="mt-5 mb-2 rounded-xl text-xl font-bold">Edit main.jsx file</p>

                        <p className="mt-5 mb-2">main.jsx should be like this 
                            <button className="btn btn-primary hover:scale-105 ml-5 " onClick={copymain}>Copy</button>
                        </p>
                        <div className="mockup-code hover:scale-101 w-fit">
                            <pre data-prefix="$">
<code >{`import React from 'react';
      import ReactDOM from 'react-dom/client';
      import { BrowserRouter} from 'react-router-dom';
      import './index.css'
      import App from './App.jsx'

      ReactDOM.createRoot(document.getElementById('root')).render(
        <React.StrictMode>
          <BrowserRouter>
           <App />
          </BrowserRouter>
        </React.StrictMode>,
      );`}</code></pre>
                        </div>        

                        {/* <p className="mt-5 mb-2">Add this code at the top</p>
                        <div className="mockup-code hover:scale-101 w-fit">
                            <pre data-prefix="$">
<code >{`import React from 'react';
      import ReactDOM from 'react-dom/client';
      import { BrowserRouter} from 'react-router-dom';`}</code></pre>
                        </div> 

                        <p className="mt-5 mb-2">Remove </p>
                        <div className="mockup-code hover:scale-101 w-fit">
                            <pre data-prefix="$">
<code >{`createRoot(document.getElementById('root')).render(
        <StrictMode>
            <App />
        </StrictMode>,
      );`}</code></pre>
                        </div>

                        <p className="mt-5 mb-2">And replace with </p>
                        <div className="mockup-code hover:scale-101 w-fit">
                            <pre data-prefix="$"><code >{`ReactDOM.createRoot(document.getElementById('root')).render(
        <React.StrictMode>
            <BrowserRouter>
            <App />
            </BrowserRouter>
        </React.StrictMode>,
      );`}</code></pre>
                        </div> */}
                            
                    </div>

                    <p className="mt-5 mb-2">Create folder in src named components </p>
                    <p className="mt-5 mb-2">Inside components create folder name Navbar, Home, About, Footer </p>
                    <p className="mt-5 mb-2">In those folder create file name index.jsx </p>

                    <div className="shadow-lg rounded-lg p-5 mt-5 mb-5 bg-base-300 ">
                        <p className="mt-5 mb-2 rounded-xl text-xl font-bold">Edit Navbar/index.jsx file</p>
                        <p className="mt-5 mb-2">Inside Navbar/index.jsx should be
                            <button className="btn btn-primary hover:scale-105 ml-5 " onClick={copynav}>Copy</button>
                        </p>
                        <div className="mockup-code hover:scale-101 w-fit">
                            <pre data-prefix="$">
<code >{`import { Link } from "react-router-dom";
        import About from "../About";


        export default function Navbar(){
            return (
            <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50">
            <div className="flex-1">
            <a className="btn btn-ghost  text-xl">Fankrits</a>
            </div>
            <div className="flex-none">
            <ul className="menu menu-horizontal px-1 ">
            
            <li><Link to="/">Home</Link></li>
            <li> <Link to="/About">About</Link></li>
            
            
            <label className="swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            
                <input type="checkbox" id="theme-controller" className="theme-controller" value="night" />
            
            {/* sun icon */}
            <svg
                className="swap-off h-8 w-8 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24">
                <path
                d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-
                1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a
                1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,
                .7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,
                0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17
                ,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,
                6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* moon icon */}
            <svg
                className="swap-on h-8 w-8 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24">
                <path
                d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,
                .25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,
                5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
            </label>
            </ul>
            </div>
        </div>
            );
        }`}</code></pre>
                        </div> 

                        
                            
                    </div>            

                    <div className="shadow-lg rounded-lg p-5 mt-5 mb-5 bg-base-300 ">
                        <p className="mt-5 mb-2 rounded-xl text-xl font-bold">Edit Footer/index.jsx file</p>
                        <p className="mt-5 mb-2">Inside Footer/index.jsx should be
                            <button className="btn btn-primary hover:scale-105 ml-5" onClick={copyfoot}>Copy</button>
                        </p>
                        <div className="mockup-code hover:scale-101 w-fit">
                            <pre data-prefix="$">
<code >{`
        export default function Footer(){
            return(
                <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
        <aside>
            <svg
            width="50"
            height="50"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            className="fill-current">
            <path
                d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.
                321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.
                601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211
                -2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817
                .509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.
                209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1
                .585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-
                1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583
                -1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
            </svg>
            <p>
            Fankrits
            <br />
            Vite + React + Javascript + Tailwind css + Daisy UI + navbar + pagenavigation + footer
            </p>
        </aside>
        <nav>
            <h6 className="footer-title">Social</h6>
            <div className="grid grid-flow-col gap-4">
            <a>
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current">
                <path
                    d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.
                    564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 
                    6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.
                    566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1
                    .956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212
                     7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
            </a>
            <a>
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current">
                <path
                    d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029
                     6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 
                     4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                </svg>
            </a>
            <a>
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current">
                <path
                    d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3
                    .808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
            </a>
            </div>
        </nav>
        </footer>
            )
        }`}</code></pre>
                        </div> 

                        
                            
                    </div>  

                    <div className="shadow-lg rounded-lg p-5 mt-5 mb-5 bg-base-300 ">
                        <p className="mt-5 mb-2 rounded-xl text-xl font-bold">Edit Home/index.jsx file</p>
                        <p className="mt-5 mb-2">Inside Home/index.jsx should be
                            <button className="btn btn-primary hover:scale-105 ml-5" onClick={copyhome}>Copy</button>
                        </p>
                        <div className="mockup-code hover:scale-101 w-fit">
                            <pre data-prefix="$">
<code >{`export default function Home(){
        return(
            <h1 className="text-9xl text-primary text-center">HOME PAGE</h1>
        )
    }`}</code></pre>
                        </div> 

                        
                            
                    </div>

                    <div className="shadow-lg rounded-lg p-5 mt-5 mb-5 bg-base-300 ">
                        <p className="mt-5 mb-2 rounded-xl text-xl font-bold">Edit About/index.jsx file</p>
                        <p className="mt-5 mb-2">Inside About/index.jsx should be
                            <button className="btn btn-primary hover:scale-105 ml-5" onClick={copyabout}>Copy</button>
                        </p>
                        <div className="mockup-code hover:scale-101 w-fit">
                            <pre data-prefix="$">
    <code >{`export default function About(){
        return(
            <h1 className="text-9xl text-primary text-center">ABOUT PAGE</h1>
        )
    }`}</code></pre>
                        </div> 

                        
                            
                    </div>



                    <div className="shadow-lg rounded-lg p-5 mt-5 mb-5 bg-base-300 ">
                        <p className="mt-5 mb-2 rounded-xl text-xl font-bold">Edit App.jsx file</p>

                        <p className="mt-5 mb-2">App.jsx should be like this
                            <button className="btn btn-primary hover:scale-105 ml-5" onClick={copyapp}>Copy</button>
                        </p>
                        <div className="mockup-code hover:scale-101 w-fit">
                            <pre data-prefix="$">
<code >{`import './App.css'
      import {  Routes, Route } from "react-router-dom";
      import Navbar from './components/Navbar'
      import Home from './components/Home'
      import About from './components/About'
      import Footer from './components/Footer'

      function App() {
    

      return (
          <>
          <Navbar/>
           <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/About" element={<About />} />
           </Routes>
          <Footer/>
          </>
      )  
        
      }


      export default App`}</code></pre>
                        </div>


                        {/* <p className="mt-5 mb-2">Add this code at the top</p>
                        <div className="mockup-code hover:scale-101 w-fit">
                            <pre data-prefix="$">
<code >{`import { BrowserRouter, Routes, Route } from "react-router-dom";
        import Navbar from './components/Navbar'
        import Home from './components/Home'
        import About from './components/About'
        import sself from './components/Home/sself.jpg'
        import Footer from './components/Footer'`}</code></pre>
                        </div> 

                        <p className="mt-5 mb-2">Replace return {`(...)`} with  </p>
                        <div className="mockup-code hover:scale-101 w-fit">
                            <pre data-prefix="$">
<code >{`return (
        <>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/About" element={<About />} />
            </Routes>
            <Footer/>
        </>
    ) `}</code></pre>
                        </div>

                        <p className="mt-5 mb-2">And replace with </p>
                        <div className="mockup-code hover:scale-101 w-fit">
                            <pre data-prefix="$"><code >{`ReactDOM.createRoot(document.getElementById('root')).render(
        <React.StrictMode>
            <BrowserRouter>
            <App />
            </BrowserRouter>
        </React.StrictMode>,
      );`}</code></pre>
                        </div> */}
                            
                    </div>            

                <div className="shadow-lg rounded-lg p-5 mt-5 mb-5 bg-base-300 ">
                        <p className="mt-5 mb-2 rounded-xl text-xl font-bold">Edit index.html add data-theme:nord</p>
                        
                        <div className="mockup-code hover:scale-101 w-fit">
                            <pre data-prefix="$">
<code >{`<html lang="en" data-theme="nord" >`}</code></pre>
                        </div> 

                        
                            
                    </div>                    





                </div>
            </div>    

        </div>

    )
}