import Image from "next/image";

export default function Home() {
    return (
        <main className="flex min-h-screen items-center justify-between p-24">
            <div className="intro flex-grow mr-16 px-20">
                <h1 className="font-inter text-5xl text-blue-300 font-bold">Hi, I'm Aaron Torres, a Software Engineer.</h1>
            </div>
            <div>
                <Image src="/computer.png" width={500} height={500} className="img-fluid" alt="computer" />
            </div>
        </main>
    );
}
