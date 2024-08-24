import Image from "next/image";
import GithubIcon from "./socials/GithubIcon";
import TwitterIcon from "./socials/TwitterIcon";
import LinkedinIcon from "./socials/LinkedinIcon";
import WebsiteIcon from "./socials/WebsiteIcon";
import MessageIcon from "./socials/MessageIcon";

// profile image
// user name
// user title
// user bio
// user social icons - github, email, twitter, linkedin, website

interface UserProps {
  name: string;
  avatar: string;
  title: string;
  bio: string;
  socials: {
    github: string;
    twitter: string;
    linkedin: string;
    website: string;
    email: string;
  };
}

const ProfileCard = ({ user }: { user: UserProps }) => {
  return (
    <div className="flex flex-col items-center space-x-2 bg-black py-4 px-4">
      <Image
        src={user?.avatar || "/images/default-avatar.png"}
        alt={user?.name}
        width={100}
        height={100}
        className="rounded-full my-2"
      />
      <span className="text-white text-sm font-semibold py-2">
        {user?.name}
      </span>
      <span className="text-gray-400 text-xs">{user?.title}</span>
      <p className="text-gray-400 text-sm p-2">{user?.bio}</p>
      <div className="flex items-center space-x-2 py-4">
        <GithubIcon username={user?.socials.github} />
        <TwitterIcon username={user?.socials.twitter} />
        <LinkedinIcon username={user?.socials.linkedin} />
        <WebsiteIcon url={user?.socials.website} />
        <MessageIcon email={user?.socials.email} />
      </div>
    </div>
  );
};

export default ProfileCard;
