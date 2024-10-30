const smallImage = document.querySelectorAll('.cerificate-img');
const modal_image = document.querySelector('.modal-image');
const modal = document.querySelector('.modal')

smallImage.forEach(img=>{
    img.addEventListener('click',()=>{
        const fullsize = img.getAttribute('alt');
        const path =  `./images/${fullsize}.jpg`;
        modal_image.src=path;
        modal.classList.add('show')
    })
})

modal.addEventListener('click',()=>{
    if(modal.classList.contains("show")){
        modal.classList.remove("show")
    }else{
        modal.classList.add("show")
    }
})