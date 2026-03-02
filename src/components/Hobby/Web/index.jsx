import React from 'react';
export default function Web(){
    return(
        <div classname="container mx-auto max-w-[1344px]">
            <h1 className="text-center font-bold text-[min(10vw)] text-shadow align-middle bg-[url(/bg.jpg)] bg-cover bg-center bg-no-repeat p-4">
                Fanboard
            </h1>
            
            <embed className="rounded-2xl shadow-lg w-19/20 h-[min(200vh)] m-10 place-items-center justify-center" src="https://fanboard.w3spaces.com/"></embed>
            
        </div>
    )
}