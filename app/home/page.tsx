"use client"

import Link from "next/link"

export default function Home() {
    return (
        <main className="flex bg-black h-screen w-screen overflow-hidden">
            <div id="Welcome" className="mt-auto mb-auto p-10 text-white font-bold space-x-1">
                <h1 className="text-[70px] select-none">Welcome</h1>
                <Link className="w-[10px] border-[2px] text-center p-7 pt-4 pb-4 border-gray-400 border-opacity-40 rounded-md hover:border-red-700" href={{
                    pathname: "/search",
                    query: {
                        route: "/selector",
                        header: "What are you thinking about ?",
                        placeholder: "Movie name"
                    }
                }}>Watch</Link>
                <Link className="w-[10px] border-[2px] text-center p-9 pt-4 pb-4 border-gray-400 border-opacity-40 rounded-md hover:border-red-700" href={{
                    pathname: "/search",
                    query: {
                        length: 8,
                        route: "/party",
                        placeholder: "Party ID",
                        header: "Can't wait to join them huh ?"
                    }
                }}>Join</Link>
            </div>
        </main>
    )
}