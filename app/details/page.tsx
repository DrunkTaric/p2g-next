import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Details() {
    return(
        <div className="p-5 text-white">
            <section className="flex">
                <Card className="w-[350px] p-2">
                    <img 
                        src="https://blogs-images.forbes.com/erikkain/files/2019/03/avengers-endgame.jpg"
                    />
                </Card>
                <section className="font-bold text-lg p-5 max-w-6xl space-y-3">
                    <span className="text-3xl text-yellow-500">{ "5.0" }</span>
                    <h1 className="text-4xl">Marvel's Avengers End Game</h1>
                    <h1 className="text-xl">Chris Hemsworth, Jeremy Renner</h1>
                    <h1 className="text-xl">Chris Evans, Robert Downey Jr, Mark Ruffalo</h1>
                    <h1 className="text-gray-100 text-opacity-75">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h1>
                    <Button className="text-white hover:text-black bg-black hover:bg-white border-white hover:border-black border-2" size={"lg"}>Watch</Button>
                </section>
            </section>
            <section>

            </section>
        </div>
    )
}