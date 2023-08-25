"use client"

import User from "./components/user"

export default function Party() {

    return(
        <main className="flex bg-black w-screen h-screen select-none">
            <div id="Left-Side" className="w-[70%] h-full">
                <div id="VideoPlayer" className="h-[70%] border-2 border-red-700 rounded-lg">
                </div>
                <div id="Watchers" className="flex h-[27%] w-full mt-3 border-2 border-red-700 rounded-lg overflow-y-hidden">
                    <User></User><User></User><User></User>
                    <User></User><User></User><User></User>
                    <User></User>
                </div>
            </div>
            <div id="Right-Side" className="w-full h-full">
                <div id="Info" className="flex w-[97%] h-[7%] ml-3 text-white">
                    <h1 className="h-fit w-[85%] mt-auto mb-auto text-[27px]">Code: <a className="text-[30px] font-bold select-text">X1N2X3X4</a></h1>
                    <button className="h-[40px] w-[15%] mt-auto mb-auto text-[15px] font-bold ">back</button>
                </div>
                <div id="Chat" className="w-[97%] h-[85%] ml-3 border-2 border-red-700 rounded-lg">
                </div>
                <div id="Control-Panel" className="flex w-[97%] h-[5.5%] mt-2 ml-3 border-2 border-red-700 rounded-lg">
                    <h1 className="text-white m-auto">SOON</h1>
                </div>
            </div>
        </main>
    )
}