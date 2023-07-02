import { client } from "./sanity.client";
import ImageUrlBuilder from "@sanity/image-url";

// get a pre-configured url-builder from your sanity client
const builder = ImageUrlBuilder(client);

// Then we like call the builder to make a URL
function urlFor(source: any) {
  return builder.image(source);
}

export default urlFor;
