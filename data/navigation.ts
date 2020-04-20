export type NavigationItem = {
  href: string;
  text: string;
};

const navigation: Array<NavigationItem> = [
  { href: "/blog", text: "Blog" },
  { href: "/news", text: "News" },
  { href: "/contact", text: "Contact" },
];

export default navigation;
