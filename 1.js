
import templateCard from "../templates/cardGallery.hbs";
import templateCardDark from "../templates/cardGalleryDark.hbs";
import no_image_found from "../images/no-image.jpg";
import '../css/card.css';
import { spinnerOff, spinnerOn } from "./spinner";
import { changeSearchPagination, searchPagination } from './pagination.js';


const TOKEN = "401d61f37c17d956a98039a1a0734109";
const input = document.querySelector(".search-input")
const ul = document.querySelector(".home-film-list")
const error = document.querySelector(".error")
const form = document.querySelector(".search-box")
const headerSvg = document.querySelector(".icon-modal") 
const filter = document.querySelector('.filter')
const switchToggle = document.querySelector("#theme-switch-toggle");

export const render = function (page = 1) {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${TOKEN}&query=${input.value}&page=${page}`)
        .then(data => data.json())
        .then(data => {
            if (data.results.length <= 0) {
                return error.insertAdjacentHTML("beforeend", "Search result not successful. Enter the correct movie name.");
            } ul.innerHTML = "";
            spinnerOn();

             changeSearchPagination(data);
            const arr = data.results.map(el => {
                el.release_date = new Date(el.release_date).getFullYear()
                return el
            })
            arr.sort((a, b) => {
                return a.popularity - b.popularity
            })
            arr.forEach(el => {
                !el.release_date ? el.release_date = "Unknown" : el.release_date;
                el.poster_path === null
                    ? (el.poster_path = no_image_found)
                    : (el.poster_path = `https://image.tmdb.org/t/p/w300${el.poster_path}`);
                
                
                if (localStorage.getItem("checkboxStatus") === 'false' && localStorage.getItem("light") === 'false') {
                    document
                        .querySelector('.home-film-list')
                        .insertAdjacentHTML('afterbegin', templateCard(el));
                    fetch(`https://api.themoviedb.org/3/movie/${el.id}?api_key=${TOKEN}`)
                        .then(data => data.json())
                        .then(data => {
                            spinnerOff();
                            document.querySelectorAll('.gallery-item-genre').forEach(el => {
                                if (el.dataset.id == data.id) {
                                    data.genres.forEach(i => {
                                        el.insertAdjacentHTML(
                                            'afterbegin',
                                            `<span class="gallery-item-genre-name">${i.name}<span class="no-need-symbol">,</span> </span>`,
                                        );
                                    });
                                }
                            });
                        });
                } else {
                    
                    document
                        .querySelector('.home-film-list')
                        .insertAdjacentHTML('afterbegin', templateCardDark(el));
                    fetch(`https://api.themoviedb.org/3/movie/${el.id}?api_key=${TOKEN}`)
                        .then(data => data.json())
                        .then(data => {
                            spinnerOff();
                            document.querySelectorAll('.gallery-item-genre').forEach(el => {
                                if (el.dataset.id == data.id) {
                                    data.genres.forEach(i => {
                                        el.insertAdjacentHTML(
                                            'afterbegin',
                                            `<span class="gallery-item-genre-name">${i.name}<span class="no-need-symbol">,</span> </span>`,
                                        );
                                    });
                                }
                            });
                        });

                }
            });       
        })
        .catch(err => error.insertAdjacentHTML("beforeend", "Search result not successful. Enter the correct movie name."));
     
    
    
  const li = document.querySelectorAll(".gallery-list-item");
  const h3 = document.querySelectorAll(".gallery-item-title");      
      
  const mainCardsDark = function () {   
        console.log(3);
          if (localStorage.getItem("checkboxStatus") === 'false' && localStorage.getItem("light") === 'false') {
              console.log(1);
             li.forEach(e => {
               e.classList.remove("gallery-list-item-dark")               
             })
            h3.forEach(e => {
               e.classList.remove("gallery-item-title-dark")               
           })
          }
          else if (localStorage.getItem("checkboxStatus") && localStorage.getItem("light")) {
              switchToggle.checked = true
                            console.log(2);

           li.forEach(e => {
             e.classList.add("gallery-list-item-dark")
           })
            h3.forEach(e => {
               e.classList.add("gallery-item-title-dark")               
           })
        }
       }    
         
          switchToggle.addEventListener('change', mainCardsDark)
    
    
}



const getData = function (e) {
    e.preventDefault();
    filter.remove();
    searchPagination.reset();

    let eventTarget;
    
    e.currentTarget.nodeName === "svg" ? eventTarget =e.target.parentNode.firstElementChild : eventTarget =e.target.firstElementChild;
      if (eventTarget.value.length >= 1) {
        error.innerHTML = "";
        render();
        spinnerOff();
    }
};


form.addEventListener("submit",getData)
headerSvg.addEventListener("click", getData)
 