const movies = [
  {
    id: "1",
    title: "Oceans 8",
    category: "Comedy",
    likes: 4,
    dislikes: 1,
    image:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT_GDkjgNP5SnNDuDqiLe2pncGKVuhpP-Xzm3R6ARWqjOUmZH2z",
  },
  {
    id: "2",
    title: "Midnight Sun",
    category: "Comedy",
    likes: 2,
    dislikes: 0,
    image: "https://fr.web.img3.acsta.net/pictures/18/05/04/13/15/4943524.jpg",
  },
  {
    id: "3",
    title: "Les indestructibles 2",
    category: "Animation",
    likes: 3,
    dislikes: 1,
    image: "https://fr.web.img6.acsta.net/pictures/18/04/13/15/09/0323902.jpg",
  },
  {
    id: "4",
    title: "Sans un bruit",
    category: "Thriller",
    likes: 6,
    dislikes: 6,
    image:
      "https://fr.web.img6.acsta.net/c_310_420/pictures/18/03/22/16/48/2454348.jpg",
  },
  {
    id: "5",
    title: "Creed II",
    category: "Drame",
    likes: 16,
    dislikes: 2,
    image: "https://fr.web.img5.acsta.net/pictures/18/11/27/14/25/1451897.jpg",
  },
  {
    id: "6",
    title: "Pulp Fiction",
    category: "Thriller",
    likes: 11,
    dislikes: 3,
    image:"https://static.posters.cz/image/1300/affiches-et-posters/pulp-fiction-cover-i1288.jpg"
  },
  {
    id: "7",
    title: "Pulp Fiction",
    category: "Thriller",
    likes: 12333,
    dislikes: 32,
    image: "https://static.posters.cz/image/1300/affiches-et-posters/pulp-fiction-cover-i1288.jpg"
  },
  {
    id: "8",
    title: "Seven",
    category: "Thriller",
    likes: 2,
    dislikes: 1,
    image:'https://m.media-amazon.com/images/M/MV5BOTUwODM5MTctZjczMi00OTk4LTg3NWUtNmVhMTAzNTNjYjcyXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg'
  },
  {
    id: "9",
    title: "Inception",
    category: "Thriller",
    likes: 2,
    dislikes: 1,
    image:"https://fr.web.img2.acsta.net/medias/nmedia/18/72/34/14/19476654.jpg"
  },
  {
    id: "10",
    title: "Gone Girl",
    category: "Thriller",
    likes: 22,
    dislikes: 12,
    image:"https://fr.web.img3.acsta.net/c_310_420/pictures/14/09/11/17/05/508784.jpg"
  },
];

export const movies$ = new Promise((resolve, reject) =>
  setTimeout(resolve, 100, movies)
);
