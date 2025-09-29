import Image from "next/image";
import { FaGithub, FaLinkedinIn, FaLocationDot, FaTwitter } from "react-icons/fa6";
import { IoEarth } from "react-icons/io5";

import { Collaborator } from "@/types/collaborator";

interface CollaboratorCardProps {
  collaborator: Collaborator;
}

const SocialIcon = ({ icon, url }: { icon: string; url: string }) => {
  let IconComponent;
  switch (icon) {
    case "github":
      IconComponent = FaGithub;
      break;
    case "linkedin":
      IconComponent = FaLinkedinIn;
      break;
    case "twitter":
      IconComponent = FaTwitter;
      break;
    case "website":
      IconComponent = IoEarth;
      break;
    default:
      return null;
  }
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="text-foreground/70 hover:text-foreground transition-colors"
      aria-label={`${icon} de ${url}`}
    >
      <IconComponent className="h-5 w-5" />
    </a>
  );
};

export function CollaboratorCard({ collaborator }: CollaboratorCardProps) {
  return (
    <div className="bg-card border-border relative flex max-w-sm min-w-xs flex-col items-center rounded-xl border p-6 text-center shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
      <div className="ring-primary-python-blue border-primary-python-yellow relative mb-4 h-24 w-24 rounded-full border-2 ring-4">
        {" "}
        <Image
          src={collaborator.avatarUrl}
          alt={`Foto de perfil de ${collaborator.name}`}
          layout="fill"
          objectFit="cover"
          className="rounded-full"
        />
      </div>
      <h3 className="text-foreground text-xl font-bold">{collaborator.name}</h3>
      <p className="text-primary-python-blue text-sm font-semibold">
        {collaborator.role}
      </p>

      <p className="text-foreground/80 mt-4 line-clamp-3 flex-grow text-sm">
        {" "}
        {collaborator.description}
      </p>

      <div className="mt-auto flex w-full flex-col items-center pt-4">
        {" "}
        {collaborator.location && (
          <p className="bg-primary-python-yellow/10 text-primary-python-yellow mb-4 flex items-center gap-2 rounded-full px-3 py-1 text-sm">
            {" "}
            <FaLocationDot className="h-4 w-4" />
            {collaborator.location}
          </p>
        )}
        <div className="flex flex-wrap justify-center gap-4">
          {" "}
          {collaborator.socialLinks.map((link, index) => (
            <SocialIcon key={index} icon={link.icon} url={link.url} />
          ))}
        </div>
      </div>
    </div>
  );
}
