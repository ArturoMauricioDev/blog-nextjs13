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
    to: "/projects",
    path: "projects",
    name: "Projectos",
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
