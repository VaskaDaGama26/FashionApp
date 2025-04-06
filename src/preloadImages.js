function preloadImages(imagePaths) {
  imagePaths.forEach((path) => {
    const img = new Image();
    img.src = path;
  });
}

const imagePaths = [
  "/cards/garden/GardenBlack1.jpg",
  "/cards/garden/GardenRed1.jpg",
  "/cards/garden/GardenWhite1.jpg",

  "/cards/colors/ColorsBlue1.jpg",
  "/cards/colors/ColorsOrange1.jpg",
  "/cards/colors/ColorsRed1.jpg",

  "/cards/nomad/NomadM1.jpg",
  "/cards/nomad/NomadW1.jpg",

  "/BG.jpg",
];

preloadImages(imagePaths);

console.log("Images preloaded successfully!");
