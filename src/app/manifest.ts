export default function manifest() {
  return {
    name: "BiblioTherapy",
    short_name: "BiblioTherapy",
    start_url: "/",
    id: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#0a0a0a",
    description: "Your digital book assistant",
    theme_color: "#0a0a0a",
    category: "productivity",
    icons: [
      {
        src: "favicon.ico",
        type: "image/x-icon",
        sizes: "32x32",
      },
      {
        src: "icon.png",
        type: "image/png",
        sizes: "any",
        purpose: "any",
      },
    ],
    shortcuts: [
      {
        name: "Home",
        url: "/",
        description: "Your digital book assistant",
        icons: [
          {
            src: "icon.png",
            type: "image/png",
            sizes: "1024x1024",
          },
          {
            src: "icon2.png",
            type: "image/png",
            sizes: "128x128",
          },
        ],
      },
    ],
  };
}
