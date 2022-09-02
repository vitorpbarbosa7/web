// local reviews data
const reviews = [
  {
    id: 1,
    author: "susan smith",
    job: "web developer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    info:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    author: "anna johnson",
    job: "web designer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    info:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    author: "peter jones",
    job: "intern",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    info:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    author: "bill anderson",
    job: "the boss",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    info:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

/* First version, still newby*/

const image = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

prevBtn = document.querySelector('.prev-btn');
nextBtn = document.querySelector('.next-btn');

const imagesLength = reviews.length-1;
let cont = 0;
image.src = reviews[cont]['img'];
author.textContent = reviews[cont]['author'];
job.textContent = reviews[cont]['job'];
info.textContent = reviews[cont]['info'];
function changeElement(cont){
  image.src = reviews[cont]['img'];
  author.textContent = reviews[cont]['author'];
  job.textContent = reviews[cont]['job'];
  info.textContent = reviews[cont]['info'];
}

nextBtn.addEventListener('click', function() {
  if (cont < 3){
    cont++;
    changeElement(cont);
  }
  else {
    cont = 0;
    changeElement(cont);
  }
})

prevBtn.addEventListener('click', function() {
  if (cont > 0){
    cont--;
    changeElement(cont);
  }
  else {
    cont = imagesLength;
    changeElement(cont);
  }
})