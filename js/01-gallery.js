import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector(".gallery")
function createGallery (items){
    return items
    .map((item)=>`<li class="gallery__item">
    <a class="gallery__link" href="${item.original}">
      <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="Image description"
      />
    </a>
  </li>`)
 .join("");
}

const addGallery = createGallery(galleryItems);

galleryContainer.innerHTML = addGallery


const galleryhandler = (event) => {
    event.preventDefault()
    
    if(event.target.nodeName !== 'IMG'){
        return
    }

    const instance = basicLightbox.create(`<img src="${event.target.dataset.source}" width= "800" height= "600">`)
    instance.show()
    
    window.addEventListener('keydown', (event)=>{
        if (event.code == 'Escape'){
            instance.close()
        };
    });
}



galleryContainer.addEventListener('click', galleryhandler)




