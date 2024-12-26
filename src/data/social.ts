export const socialLinks = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/ivanabeauty.nz',
    icon: 'facebook'
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/ivana_houseofbeauty/',
    icon: 'instagram'
  }
] as const;

export type SocialPlatform = typeof socialLinks[number]['icon'];