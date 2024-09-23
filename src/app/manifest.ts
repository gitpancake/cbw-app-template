import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "TRASH",
    short_name: "TRASH",
    description: "A Tokenized Circular Economy for Sustainable Fashion.",
    background_color: "#FFFFFF",
    start_url: "/",
    display: "standalone",
    orientation: "portrait",
    icons: [
      {
        src: "/pwa/icon.png",
        sizes: "74x74",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/pwa/icon.png",
        sizes: "74x74",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
