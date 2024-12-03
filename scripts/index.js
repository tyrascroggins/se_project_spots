// Initial Cards Data
const initialCards = [
  {
    imageName: "Val Thorens",
    imageLink:
      "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg",
  },
  {
    imageName: "Restaurant terrace",
    imageLink:
      "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg",
  },
  {
    imageName: "An outdoor cafe",
    imageLink:
      "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg",
  },
  {
    imageName: "A very long bridge, over the forest and through the trees",
    imageLink:
      "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg",
  },
  {
    imageName: "Tunnel with morning light",
    imageLink:
      "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg",
  },
  {
    imageName: "Mountain house",
    imageLink:
      "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg",
  },
];

// Card Template
const cardTemplate = document.querySelector("#card-template").content;

// Profile Edit Elements
const profileEditButton = document.querySelector(
  ".profile__edit-profile-button"
);
const profileEditModal = document.querySelector("#edit-profile-modal");
const profileEditModalClose = profileEditModal.querySelector(
  ".modal__close-add-btn"
);
const profileForm = document.forms["edit_profile"];
const profileNameElement = profileForm.elements["editProfileName"];
const profileJobElement = profileForm.elements["editProfileJob"];
const nameInput = document.querySelector(".profile__name");
const jobInput = document.querySelector(".profile__job");

// Add Card Elements
const addCardModel = document.querySelector("#add-card-modal");
const addCardModelButton = document.querySelector(".profile__new-post-button");
const addCardModalClose = addCardModel.querySelector(".modal__close-add-btn");
const addCardModelForm = document.forms["add-card"];
const addCardLinkElement = addCardModelForm.elements["addCardImageLink"];
const addCardCaptionElement = addCardModelForm.elements["addCardCaption"];

// Card preview Elements
const previewModal = document.querySelector("#preview-modal");
const previewImage = previewModal.querySelector(".modal__preview-image");
const previewTitle = previewModal.querySelector(".modal__preview-title");
const previewModalClose = previewModal.querySelector("#preview-modal-close");

// Card List Element
const cardsListElement = document.querySelector(".cards__list");

// Open a modal
function openModal(modal) {
  modal.classList.add("modal_open");
}

// Close a modal
function closeModal(modal) {
  modal.classList.remove("modal_open");
}

// Create a card element from data
function getCardElement(data) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);

  const cardNameElement = cardElement.querySelector(".card__image-title");
  const cardLinkElement = cardElement.querySelector(".card__image");
  const cardLikeButton = cardElement.querySelector(".card__button-like");
  const deleteButton = cardElement.querySelector(".card__button-delete");

  cardNameElement.textContent = data.imageName;
  cardLinkElement.src = data.imageLink;
  cardLinkElement.alt = data.imageName;

  cardLikeButton.addEventListener("click", () => {
    cardLikeButton.classList.toggle("liked");
  });

  // Removes the card from the DOM
  deleteButton.addEventListener("click", () => {
    cardElement.remove();
  });

  // Open preview modal on image click
  cardLinkElement.addEventListener("click", () => {
    openPreviewModal(data.imageLink, data.imageName);
  });

  return cardElement;
}

// Handle Profile Form Submission
function submitProfileForm(evt) {
  evt.preventDefault();
  nameInput.textContent = profileNameElement.value;
  jobInput.textContent = profileJobElement.value;
  closeModal(profileEditModal);
}

// Open Profile Edit Modal with Current Data
profileEditButton.addEventListener("click", () => {
  profileNameElement.value = nameInput.textContent;
  profileJobElement.value = jobInput.textContent;
  openModal(profileEditModal);
});

// Close Profile Edit Modal
profileEditModalClose.addEventListener("click", () => {
  closeModal(profileEditModal);
});

// Add Submit Event Listener for Profile Form
profileForm.addEventListener("submit", submitProfileForm);

// Handle Add Card Form Submission
addCardModelForm.addEventListener("submit", (evt) => {
  evt.preventDefault();

  const newCardData = {
    imageName: addCardCaptionElement.value,
    imageLink: addCardLinkElement.value,
  };

  // Validate URL
  try {
    new URL(newCardData.imageLink); // Throws an error if the URL is invalid
  } catch {
    alert(
      "Please provide a valid image URL. It needs to be the imae it's self."
    );
    return;
  }

  const newCardElement = getCardElement(newCardData);
  cardsListElement.prepend(newCardElement);

  addCardModelForm.reset();
  closeModal(addCardModel);
});

// Open Add Card Modal
addCardModelButton.addEventListener("click", () => {
  openModal(addCardModel);
});

// Close Add Card Modal
addCardModalClose.addEventListener("click", () => {
  closeModal(addCardModel);
});

// Open preview modal
function openPreviewModal(imageSrc, title) {
  previewImage.src = imageSrc;
  previewImage.alt = title;
  previewTitle.textContent = title;
  openModal(previewModal); // Reuse the existing openModal function
}

// Close preview modal
previewModalClose.addEventListener("click", () => {
  closeModal(previewModal); // Reuse the existing closeModal function
});

// Render Initial Cards
initialCards.forEach((card) => {
  const cardElement = getCardElement(card);
  cardsListElement.prepend(cardElement);
});
