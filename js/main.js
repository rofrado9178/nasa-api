const apiKey = "HJ4zD2EehPtMpl8jcMoWBCE3TpJbtdFMhcDgmDml";

const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${apiKey}`;

//create function to fetch API data from NASA url
//API with asyc function to show data when its ready.

async function fetchAPI(url) {
  const response = await fetch(url);
  const data = await response.json();

  // console.log(data.photos[1]);

  nasaAPI(data);
}

//create nasaAPI function, to show html content from data
function nasaAPI(datas) {
  //create section variable to target section
  const section = document.querySelector("section");

  //use for loop to loop through all data
  for (let i = 0; i < 20; i++) {
    //variable as a shortcut for each datas.photos
    const data = datas.photos[i];

    const article = document.createElement("article");

    //create h2 for Rover name
    const rover = document.createElement("h2");
    rover.innerHTML = `Rover Name: ${data.rover.name}`;

    //create new image DOM and attach the source
    const img = document.createElement("img");
    img.src = data.img_src;

    //create p element for camera name
    const camera = document.createElement("p");
    camera.innerHTML = `Camera : ${data.camera.full_name}`;

    //create another p tag for date
    const date = document.createElement("p");
    date.innerHTML = `Date: ${data.earth_date}`;

    //adding the element rover,date,camera and img as a child of article
    article.appendChild(rover);
    article.appendChild(date);
    article.appendChild(camera);
    article.appendChild(img);

    //adding article as a section child
    section.appendChild(article);
  }
}

//call the function fetchAPI
fetchAPI(url);

//creating toggle button to show and hide all the main content
const showContent = document.querySelector("main");
const clickMe = document.getElementById("click-me");

//add click event listener to button
clickMe.addEventListener("click", (e) => {
  //prevent event reload that reseting the page
  e.preventDefault();
  //attaching toggle to add and remove show class
  showContent.classList.toggle("show");
  //use case scenario,
  // when class show exsist in main element, change the text accordingly
  if (showContent.classList.contains("show")) {
    clickMe.textContent = "Hide Pictures";
  } else {
    clickMe.textContent = "Show All Pictures";
  }
});
