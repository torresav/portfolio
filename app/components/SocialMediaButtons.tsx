import GithubButton from "./GithubButton";
import LinkedinButton from "./LinkedinButton";
import EmailButton from "./EmailButton";

const SocialMediaButtons = () => {
    return (
        <div className="inline-grid grid-cols-3 gap-10 mt-10">
            <EmailButton />
            <GithubButton />
            <LinkedinButton />
        </div>
    );
};

export default SocialMediaButtons;
