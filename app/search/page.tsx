"use client"

import { useRouter, useSearchParams  } from 'next/navigation'
import { ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, useEffect, useState } from "react"

export default function Search() {
    const router = useRouter()
    const params: any = useSearchParams()
    const [Show, setShow] = useState<string>("")
    const [Input, setInput] = useState<string>("")

    useEffect(() => {
        let timeout = setTimeout(() => {
            if (Show.length != params.get("header").length) {setShow(Show + params.get("header")[Show.length])}
            else { return () => clearTimeout(timeout) }
        }, 20)
    })

    return(
        <main className="flex w-screen h-screen bg-black">
            <div className="m-auto text-white select-none">
                <h1 className="text-[37px]">{Show}</h1>
                <input className="w-[590px] h-[65px] p-5 bg-transparent border-2 rounded-lg outline-none" placeholder={params.get("placeholder")} onChange={(event: ChangeEvent<HTMLInputElement>) => {
                    setInput((event.target as HTMLInputElement).value)
                }} onKeyUp={(event: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) => {
                    if (event.key === "Enter" && (params.get("length")? Input.length >= params.get("length"): Input.length > 0)) {
                        router.push(params.get("route"))
                    }
                }}></input>
            </div>
        </main>
    )
}