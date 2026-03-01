import rawProducts from "../products.json";

const images = import.meta.glob("../assets/*", {
  eager: true,
  import: "default",
});

function resolveImage(fileName) {
  return images[`../assets/${fileName}`];
}

export const products = rawProducts.map(product => ({
  ...product,
  img: resolveImage(product.img),
  imgDisplay: product.imgDisplay
    ? resolveImage(product.imgDisplay)
    : undefined,
}));