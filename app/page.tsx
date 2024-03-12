import Image from "next/image";
import SocialMediaButtons from "./components/SocialMediaButtons";

export default function Home() {
    return (
        <div className="grid grid-cols-1 mx-4 mt-10 gap-14 md:grid-cols-2 justify-items-center place-items-center md:mx-24">
            <div className="grid justify-items-center place-items-center">
                <h1 className="text-4xl font-bold text-blue-300 font-inter">{`Hi, I'm Aaron Torres, a Software Engineer.`}</h1>
                <br />
                <span className="text-white font-inter">{`I'm a passionate developer who has experience with front-end and back-end engineering. I'm a self-motivated, self-starter, and open minded about expanding my knowledge and learning new things.`}</span>
                <br />
                <span className="text-white font-inter">{`Currently based in Raleigh, NC. Looking for a hybrid or fully remote Front-end, Back-end, or Full-stack Software Engineering position.`}</span>
                <br />
                <SocialMediaButtons />
            </div>
            <div>
                <Image src="/computer.png" width={300} height={300} className="img-fluid" alt="computer" />
            </div>
        </div>
    );
}
