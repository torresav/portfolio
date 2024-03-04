import Image from "next/image";

export default function Home() {
    return (
        <div className="grid grid-cols-1 gap-14 md:grid-cols-2 justify-items-center">
            <div>
                <h1 className="p-8 text-4xl font-bold text-blue-300 font-inter">{`Hi, I'm Aaron Torres, a Software Engineer.`}</h1>
            </div>
            <div>
                <Image src="/computer.png" width={300} height={300} className="img-fluid" alt="computer" />
            </div>
        </div>
    );
}
