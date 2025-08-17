const videos = document.querySelectorAll('.spotlight video, .banner video, .recommended video');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.play();
    } else {
      entry.target.pause();
    }
  });
}, { threshold: 0.5 });

videos.forEach((video) => {
  observer.observe(video);
  video.addEventListener('mouseenter', () => video.pause());
  video.addEventListener('mouseleave', () => video.play());
});
