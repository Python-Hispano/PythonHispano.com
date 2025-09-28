export interface SocialLink {
  icon: "github" | "linkedin" | "twitter" | "website";
  url: string;
}

export interface Collaborator {
  id: string;
  name: string;
  role: string;
  description: string;
  location?: string;
  avatarUrl: string;
  socialLinks: SocialLink[];
}
