import React from "react";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { config } from "./config";

// Get a pre-configured url-builder from your sanity client
const builder = imageUrlBuilder(config);

// Then we like to make a simple function like this that gives the
// builder an image and returns the builder for you to specify additional
// parameters:
function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

export default urlFor;
