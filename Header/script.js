// Theme Toggle
const toggle = document.getElementById('theme-toggle');
const body = document.body;

// Load saved theme on page load
window.onload = () => {
  const savedTheme = localStorage.getItem('theme') || 'light';
  body.classList.add(`${savedTheme}-theme`);
  toggle.checked = savedTheme === 'dark';
};

toggle.addEventListener('change', () => {
  if (toggle.checked) {
    body.classList.replace('light-theme', 'dark-theme');
    localStorage.setItem('theme', 'dark');
  } else {
    body.classList.replace('dark-theme', 'light-theme');
    localStorage.setItem('theme', 'light');
  }
});



const titles = ["Website developer", "Full Stack Developer", "Game Developer"];
let index = 0;
const titleElement = document.getElementById("animated-title");

setInterval(() => {
  index = (index + 1) % titles.length;
  titleElement.textContent = titles[index];
}, 2000);

//  about  // 

const about = ["Website developer", "Full Stack Developer", "Game Developer"];
let index1 = 0;
const aboutElement = document.getElementById("animated-title1");

setInterval(() => {
  index = (index + 1) % titles.length;
  titleElement.textContent = titles[index];
}, 2000);

//  latest-heading-design 










// MY PROJECT  //


