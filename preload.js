const imageUrls = [
    './images/mountains.jpg',
    './images/half-moon.jpg',
    './images/purple-flowers.jpg',
    './images/starry-night.jpg',
    './images/dahlia-flower.jpg',
];

// preload all the images
imageUrls.forEach(url => {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'image';
  link.href = url;
  document.head.appendChild(link);
});
