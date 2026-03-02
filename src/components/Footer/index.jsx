import sself from '/src/components/Home/sself.jpg';
import React from 'react';

export default function Footer() {

    const copy = () => {
        navigator.clipboard.writeText('fankritsadajra@gmail.com');
        alert('Email copied to clipboard!');
    };

    return (
        <footer className="footer sm:footer-horizontal bg-primary text-neutral-content p-10 mt-10 bottom-0">
            <aside>
                <img src={sself} alt="sself" className="w-[min(5vw)] h-[min(5vw)] flex aspect-square rounded-full shadow-lg" />
                <p className="text-primary-content">
                    Kritsada Nhanjeing
                    <br />
                    Major in Mathematics 
                </p>
            </aside>
            <nav>
                <h6 className="footer-title text-primary-content">Contact</h6>
                <a className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl" href="mailto:fankritsadajra@gmail.com" value="fankritsadajra@gmail.com" onClick={copy}   >fankritsadajra@gmail.com</a>
            </nav>
        </footer>
    );
}