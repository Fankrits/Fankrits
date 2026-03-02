import { Outlet, Link } from "react-router-dom";
import React from 'react';


export default function Navbars(){
    return (
      <div className="navbar bg-base-100 shadow-lg rounded-2xl">
    <div className="flex-1">
    <div className="btn btn-ghost hover:scale-105 text-xl"><Link to="/">Fankrits</Link></div>
    </div>
    <div className="flex-none">
    <ul className="menu menu-horizontal px-1 ">
      
       <li className="hover:scale-110"><Link to="/">Home</Link></li>
      <li className="hover:scale-110"><Link to="/Thesis">Thesis</Link></li>
      
      <li >
      <details >
        <summary className="hover:scale-110">Hobby</summary>
        <ul className="bg-base-100 rounded-t-none p-2">
        <li className="hover:scale-105"><Link to="/Hobby/Web">Web Develop</Link></li>
        <li className="hover:scale-105"><Link to="/Hobby/Appsheet">Appsheet</Link></li>
        <li className="hover:scale-105"><Link to="/Hobby/Videoedit">Video Edit</Link></li>
        <li className="hover:scale-105"><Link to="/VRJTD">VRJTD</Link></li>
        </ul>
      </details>
      </li>
      {/* <li> <Link to="/About">About</Link></li> */}
      <li className="hover:scale-110"><Link to="https://github.com/fankritsada">Github</Link></li>
      
       <li className="hover:scale-110"><Link to="/">Home</Link></li>
      <li className="hover:scale-110"><Link to="/Thesis">Thesis</Link></li>
      
      <li >
      <details >
        <summary className="hover:scale-110">Hobby</summary>
        <ul className="bg-base-100 rounded-t-none p-2">
        <li className="hover:scale-105"><Link to="/Hobby/Web">Web Develop</Link></li>
        <li className="hover:scale-105"><Link to="/Hobby/Appsheet">Appsheet</Link></li>
        <li className="hover:scale-105"><Link to="/Hobby/Videoedit">Video Edit</Link></li>
        <li className="hover:scale-105"><Link to="/VRJTD">VRJTD</Link></li>
        </ul>
      </details>
      </li>
    </ul>
    </div>
  </div>
    );
}