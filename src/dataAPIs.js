import pixabay from "./images/pixabay.jpg";
import musixmatch from "./images/musixmatch.png";

export default [
  {
    sys: {
      id: "1",
    },
    fields: {
      name: "Musixmatch",
      slug: "/musixmatch",
      urlName: "Musixmatch.com",
      url: "https://developer.musixmatch.com/",
      img: musixmatch,
      description:
        "is an Italian music data company and platform for users to search and share song lyrics with translations.",
    },
  },
  {
    sys: {
      id: "2",
    },
    fields: {
      name: "Pixabay",
      slug: "/pixabay",
      urlName: "Pixabay.com",
      url: "https://pixabay.com/sk/service/about/api/",
      img: pixabay,
      description:
        "is an international, copyleft and free-to-use website for sharing photos, illustrations, vector graphics, film footage and music.",
    },
  },
];
