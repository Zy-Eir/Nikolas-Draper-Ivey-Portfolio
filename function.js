const menuButton = document.getElementById("menu-button");
const navMenuMobile = document.getElementById("nav-menu-mobile");




menuButton.addEventListener('click', () => {
   const visibility = navMenuMobile.getAttribute('data-visible');

 

   if (visibility === "false"){
    navMenuMobile.setAttribute('data-visible', true);
   } else if (visibility === "true") {
    navMenuMobile.setAttribute('data-visible', false);
   }
});




 /* 
  start of option view  
 */

const accordionButton = document.getElementById("accordion-button");
const accordionView = document.getElementById("accordion-view");

const gridButton = document.getElementById("grid-button");
const gridView = document.getElementById("grid-view");
const gridIcon = document.getElementById("grid-icon");

/* 
 Function below removes grid-view and opens accordion-view;
 Also removes selected class from grid-button and adds it to accordion-button;
*/

 const openAccordion = function () {
  accordionView.classList.remove("accordion-gallery-hidden");

  gridView.classList.add("grid-gallery-hidden");

  accordionButton.classList.add("selected-option");

  gridButton.classList.remove("selected-option");

  gridIcon.classList.remove("view-icons-active");
};

accordionButton.addEventListener("click", openAccordion);

/* 
 Function below removes accordion-view and opens grid-view;
 Also removes selected class from accordion-button and adds it to grid-button;
*/

const openGrid = function () {
  gridView.classList.remove("grid-gallery-hidden");

  accordionView.classList.add("accordion-gallery-hidden");

  gridButton.classList.add("selected-option");

  accordionButton.classList.remove("selected-option");

  gridIcon.classList.add("view-icons-active");
};

gridButton.addEventListener("click", openGrid);

/*
  end of option view
*/


