import { type SchemaTypeDefinition } from "sanity";

import blockContent from "./schemas/blockContent";
import category from "./schemas/category";
import post from "./schemas/post";
import author from "./schemas/author";
import project from "./schemas/project";
import tecnology from "./schemas/tecnology";
import reel from "./schemas/reel";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, author, category, blockContent, project, tecnology, reel],
};
