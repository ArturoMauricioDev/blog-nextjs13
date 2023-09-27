type Base = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
};

interface Post extends Base {
  author: Author;
  body: Block[];
  categories: Category[];
  mainImage: Image;
  slug: Slug;
  title: string;
  description: string;
  publishedAt: string;
}
interface Project extends Base {
  author: Author;
  body: Block[];
  tecnologies: Tecnology[];
  mainImage: Image;
  slug: Slug;
  title: string;
  description: string;
  publishedAt: string;
  github: string;
  liveDemo: string;
}

interface Author extends Base {
  bio: Block[];
  image: Image;
  name: string;
  slug: Slug;
}

interface Reference {
  _ref: string;
  _type: string;
}

interface Slug {
  _type: "slug";
  current: string;
}

interface Block {
  _key: string;
  _type: "block";
  children: Span[];
  markDefs: any[];
  style: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
}

interface Span {
  _key: string;
  _type: "span";
  marks: string[];
  text: string;
}

interface Category extends Base {
  description: string;
  title: string;
}
interface Tecnology extends Base {
  description: string;
  title: string;
  mainImage: Image;
}

interface MainImage {
  _type: "image";
  asset: Reference;
}

interface Title {
  _type: "string";
  current: string;
}

interface Reel extends Base {
  title: string;
  embed: string;
}
