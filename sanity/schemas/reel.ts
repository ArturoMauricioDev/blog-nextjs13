import { defineField, defineType } from "sanity";

export default defineType({
  name: "reel",
  title: "Reel",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "embed",
      title: "Embed",
      type: "text",
    }),
  ],
});
