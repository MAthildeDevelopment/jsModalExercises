const modal = document.querySelector('.lightbox-container');
const close = document.querySelector('.lightbox-close');
let modalImg = document.querySelector('.lightbox-item');
const cardImgs = document.querySelectorAll('.store-img');
const btnLeft = document.querySelector('.btnLeft');
const btnRight = document.querySelector('.btnRight');
let i;


/* ====================< OPEN MODAL ON CLICK >==================== */
cardImgs.forEach(
    (cardImg, i) => {
        cardImg.addEventListener("click", () => {
            modal.style.display = "block";
            let imgSrc = cardImg.src;
            modalImg.style.backgroundImage = `url(${imgSrc})`;


            /* ====================< IMAGES CYCLE THROUGH MODAL >==================== */
            btnRight.addEventListener("click", () => {
                if(i < cardImgs.length - 1) {
                    i++;
                    modalImg.style.backgroundImage = `url(${cardImgs[i].src})`;
                } else {
                    i = 0;
                    modalImg.style.backgroundImage = `url(${cardImgs[i].src})`;
                }
            });

            btnLeft.addEventListener("click", () => {
                if((i < cardImgs.length) && (i > 0)) {
                    i--;
                    modalImg.style.backgroundImage = `url(${cardImgs[i].src})`;
                } else {
                    i = cardImgs.length - 1;
                    modalImg.style.backgroundImage = `url(${cardImgs[i].src})`;
                }
            });
        });
    }
);



/* ====================< CLOSE MODAL >==================== */
let closeModal = () => {
    modal.style.display = "none";
}


close.addEventListener("click", closeModal);






