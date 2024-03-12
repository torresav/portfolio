import Image from "next/image";
import SocialMediaButtons from "./components/SocialMediaButtons";

export default function Home() {
    return (
        <div className="grid grid-cols-1 mx-4 mt-10 gap-14 md:grid-cols-2 justify-items-center place-items-center md:mx-24">
            <div className="grid justify-items-center place-items-center">
                <h1 className="text-4xl font-bold text-blue-300 font-inter">{`Hi, I'm Aaron Torres, a Software Engineer.`}</h1>
                <br />
                <p>{`I'm a passionate Full Stack web developer with experience developing Full Stack web applications with Python, Django, React.js, and Cloud Technologies. I am strongly interested in learning new technologies and implementing them in my projects. I'm a self-motivated and hardworking individual who is always ready to learn new things and work in a team.`}</p>
                <br />
                <span className="text-lg text-white font-inter">{`Currently based in Raleigh, NC. Looking for a hybrid or fully remote Front-end, Back-end, or Full-stack Software Engineering position.`}</span>
                <br />
                <SocialMediaButtons />
            </div>
            <div>
                <Image src="/computer.png" width={300} height={300} className="img-fluid" alt="computer" />
            </div>
        </div>
    );
}
