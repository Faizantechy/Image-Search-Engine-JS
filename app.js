const AccessKey = "aRGB16XQRgW1vsD9UGONM2hQuNxbTOx0F0EfjD2us6M";
const showMoreBtn = document.querySelector(".show-more");
const images = document.querySelector(".images");
const searchInput = document.querySelector(".input-box");
const searchBtn = document.querySelector(".btn");

let keyword = "";
let page = 1;

async function searchImage() {
  keyword = searchInput.value;

  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${AccessKey}&per_page=12`;

  const response = await fetch(url);
  const data = await response.json();

  
  

  const results=data.results;
  
  if (page === 1) {
    images.innerHTML = ''; // Clear the image container
  }


  results.forEach(result => {
    
    const image=document.createElement('img')
    image.src= result.urls.small;
    images.appendChild(image)
    
  });
}

searchBtn.addEventListener("click", (event) => {
  event.preventDefault();
  page = 1;
  searchImage();

  setTimeout(() => {

    showMoreBtn.style.display='block';

    
  }, 1000);
});

showMoreBtn.addEventListener('click',()=>{



  page++
  searchImage();


})
