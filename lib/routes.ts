interface Route {
  to: string;
  path: string;
  name: string;
}

export const routes: Route[] = [
  {
    to: "/",
    path: "home",
    name: "Home",
  },
  {
    to: "/post",
    path: "blog",
    name: "Blog",
  },
  {
    to: "/project",
    path: "project",
    name: "Projectos",
  },
  {
    to: "/reels",
    path: "reels",
    name: "Reels",
  },
  {
    to: "/about",
    path: "about",
    name: "Acerca",
  },
  {
    to: "/contact",
    path: "contact",
    name: "Contacto",
  },
];
