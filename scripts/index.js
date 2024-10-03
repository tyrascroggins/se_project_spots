const initialCards = [
    { Name: "Val Thorens", Link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg" },
    { Name: "Restaurant terrace", Link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg" },
    { Name: "An outdoor cafe", Link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg" },
    { Name: "A very long bridge, over the forest and through the trees", Link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg" },
    { Name: "Tunnel with morning light", Link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg" },
    { Name: "Mountain house", Link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg" }
  ];
  
  //opening the edit profile form
const profileEditButton = document.querySelector('.profile__edit-profile-button');
const profileEditModal = document.querySelector('#edit-profile-modal');
//use the classes when posible so not to have multiple id's.
const profileEditModalClose = profileEditModal.querySelector('.modal__close-btn');

// use the same functions to add and remove to keep it simple
function modalOpened() {
profileEditModal.classList.add('modal__opened');
}

function modalClosed() {
profileEditModal.classList.remove('modal__opened');
}

// here you need to activate the functions
profileEditButton.addEventListener("click", modalOpened);
profileEditModalClose.addEventListener("click", modalClosed);

 