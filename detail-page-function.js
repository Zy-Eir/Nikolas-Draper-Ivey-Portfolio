// start of detail-page javascript
document.querySelectorAll(".carousel-container").forEach(carousel => {
    const items = carousel.querySelectorAll(".carousel-item");


    const carouselBtns = Array.from(items, () => {
      return `<span class="carousel-btn"></span>`
    }); // Makes an array 


    carousel.insertAdjacentHTML("beforeend", 
        `
        <div class="carousel-btn-container">
            
            ${carouselBtns.join("")}
        </div>
        `);


        const btns = carousel.querySelectorAll(".carousel-btn");

        btns.forEach((btn, i) => {
            btn.addEventListener("click", () => {
                // unselect all thhe items
                items.forEach(item => item.classList.remove("active-carousel-item"));
                btns.forEach(btn => btn.classList.remove("active-carousel-btn"));

                items[i].classList.add("active-carousel-item");
                btn.classList.add("active-carousel-btn");
            });
        });

        //selects the first item on page load
        items[0].classList.add("active-carousel-item");
        btns[0].classList.add("active-carousel-btn");
    // console.log(carouselBtns);
});





// end of detail-page javascript