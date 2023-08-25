import Image from "next/image"

export default function User() {
    return(
        <main className="relative m-2 border-4 w-[140px] h-[180px] rounded-lg text-white overflow-hidden">
            <Image className="flex ml-auto mr-auto mt-2 border-0 rounded-full" width={128} height={128} src="/fire.jpg" alt="Avatar Logo"></Image>
            <h1 className="flex w-fit h-fit ml-auto mr-auto font-bold text-[23px]">Fire</h1>
        </main>
    )
}