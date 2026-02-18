const menuToggle = document.getElementById("menu-toggle");
  const navbar = document.getElementById("navbar");

  menuToggle.onclick = () => {
    navbar.classList.toggle("active");
  };
  window.addEventListener("load", () => {
  document.querySelector(".home").classList.add("show");
});
 const projects = [
    {
      title: "Portfolio Website",
      desc: "Responsive personal portfolio built using HTML, CSS and JavaScript.",
      img: "pf-img/ind.jpeg",
      link: "https://github.com/Jananivarshini"
    },
    {
      title:"Restaurant Website",
      desc:"Responsive Restaurant website built using html and css",
      img:"pf-img/rest.png",
      link: "https://github.com/Jananivarshini"
    
    },
    {
      title: "To-Do App",
      desc: "Task management app with add, delete and local storage features.",
      img: "pf-img/todolist.png",
      link: "https://github.com/Jananivarshini"
    },
    {
      title: "Dictionary",
      desc: "Simple Dictionary built using JavaScript with clean UI.",
      img: "pf-img/dict.png",
      link: "https://github.com/Jananivarshini"
    }
  ];

  let index = 0;

  function changeProject() {
    const image = document.getElementById("projectImage");
    const title = document.getElementById("projectTitle");
    const desc = document.getElementById("projectDesc");
    const link = document.getElementById("projectLink");

    image.src = projects[index].img;
    title.innerText = projects[index].title;
    desc.innerText = projects[index].desc;
    link.href = projects[index].link;

    index = (index + 1) % projects.length;
  }

  setInterval(changeProject, 2000);
  const homeSection = document.querySelector(".home");
const homeLink = document.getElementById("homeLink");
