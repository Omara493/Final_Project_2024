let MyPopUpText = [
 
"Cristiano Ronaldo's return to Madrid sparks excitement as the football legend visits the first team, providing motivation for their crucial game against Liverpool. His presence energizes the players, instilling confidence and determination. Ronaldo's visit symbolizes the strong bond with the club, and fans anticipate its positive impact on Real Madrid's preparation for the upcoming matchup.",
  "Transport yourself to the magical year of 2018, where Luka Modric, our football maestro, claimed the coveted Ballon d'Or. A defining moment that resonates with Modric fans, highlighting his exceptional skills and leadership. Here's to reliving the glory of 2018 and anticipating more brilliance from our football virtuoso.",
  "Celebrations are in order as Jude Bellingham, our rising star, marks a significant milestone—turning 20! It's incredible to witness the growth of this talented player who continues to grace the field with passion and skill. Here's to Bellingham's journey, filled with promise and dedication, as he embarks on another year of making history with the mighty Real Madrid. Happy 20th, Belli! 🎉",
  "In his inaugural year with Real Madrid, Joselu radiates joy and enthusiasm on and off the pitch. The infectious positivity he brings to the team is truly uplifting. From scoring crucial goals to embracing the camaraderie of the squad, Joselu's happiness resonates with Real Madrid fans worldwide. Here's to more memorable moments and continued success for Joselu in the white jersey! 🌟⚽️",
  "Welcome to the Real Madrid family, Endrick! We are thrilled to announce the arrival of our newest future star player, Endrick, to the iconic white jersey. With boundless talent, dedication, and a passion for the game, Endrick embodies the spirit of Real Madrid. As he embarks on this exciting journey with us, we invite all fans to join us in supporting and cheering for Endrick. 🌟⚽️",
  "Congratulations to Jude Bellingham, our dynamic midfielder, for clinching the prestigious Golden Boy Award! His exceptional talent, relentless work ethic, and outstanding performances have rightfully earned him this accolade. Bellingham's journey with Real Madrid continues to captivate, and we look forward to witnessing more remarkable achievements from this young football sensation. Hala Madrid! 🏆⚽️",
  "A hearty congratulations to Thibaut Courtois for securing the title of the Best Goalkeeper in the World! His remarkable saves, commanding presence, and unwavering commitment to excellence have rightfully earned him this prestigious award. Courtois continues to stand as a beacon of excellence between the posts for Real Madrid, and we celebrate his well-deserved recognition. Hala Madrid! 🧤🏆",
  "Embark on an unparalleled matchday experience as Real Madrid unveils its groundbreaking 360 Vision at the stadium. This cutting-edge technology promises fans an immersive journey, capturing every electrifying moment from every angle. Feel the pulsating energy of the crowd, witness jaw-dropping goals, and dive into the heart of the action like never before.  ⚽🌟 ",
];

let myImgSrcArray = [
  "media/cristiano-ronaldo.jpg",
  "media/Luka.webp",
  "media/Belli.jpg",
  "media/joselu.webp",
  "media/Endrickrealmadrid.webp",
  "media/Gold.webp",
  "media/TheBest.jpg",
  "media/maxresdefault_live.jpg",
];

let additionalContentArray = [
  "Our legend is back in madrid",
  "Back to 2018",
  "Bellingham turns 20",
  "joselu is happy here",
  "Real Madrid's Future Star",
  "Golden Boy Triumph!",
  "Best Goalkeeper Worldwide!",
  " Real Madrid's New 360 Vision",
];

// this createImageCards function resposible of the news slider in the main page

function createImageCards(container, sources, additionalContent) {
  sources.forEach((src, index) => {
    let imageCard = document.createElement("div");
    imageCard.className = "imageCard";
    let imageSeconedSlider = document.createElement("div");
    imageSeconedSlider.className = "imageSeconedSlider";
    let imageThumb = document.createElement("img");
    imageThumb.className = "image-thumb";
    imageThumb.src = src;
    imageThumb.alt = "Player Image";
    let cardBtn = document.createElement("button");
    cardBtn.className = "card-btn";
    cardBtn.textContent = "Read More";
    let paragraph = document.createElement("p");
    paragraph.textContent = additionalContent[index] || ""; 
    paragraph.className = "caption clickable"; 
    imageSeconedSlider.appendChild(imageThumb);
    imageSeconedSlider.appendChild(cardBtn);
    imageSeconedSlider.appendChild(paragraph);
    imageCard.appendChild(imageSeconedSlider);
    container.appendChild(imageCard);
  });
}
let sliderContainer = document.getElementById("sliderContainer");

// Call the function to create and append image cards
createImageCards(sliderContainer, myImgSrcArray, additionalContentArray);

// this part is responsible fot the pop up container in the main page

let popupContainer = document.getElementById("popup-container");
let popupImage = document.getElementById("popup-image");
let popupContent = document.getElementById("popup-content");
let popupCloseButton = document.getElementById("popup-close");

function openPopup(index, content) {
  popupImage.src = myImgSrcArray[index];
  popupContent.textContent = content;
  popupContainer.style.display = "block";
}

function openPopupWithParagraph(index) {
  openPopup(index, MyPopUpText[index]);
}

// Function to close the popup
function closePopup() {
  popupContainer.style.display = "none";
}
let cardButtons = document.querySelectorAll(".card-btn");
cardButtons.forEach((button, index) => {
  button.addEventListener("click", () => openPopup(index, MyPopUpText[index]));
});

// Attach click event listener to each clickable paragraph
let clickableParagraphs = document.querySelectorAll(".clickable");
clickableParagraphs.forEach((paragraph, index) => {
  paragraph.addEventListener("click", () => openPopupWithParagraph(index));
});

// Attach click event listener to the close button
popupCloseButton.addEventListener("click", closePopup);

// /-----------------------------------------------------------------------------------------------/
// this part of code responsible for the sliders buttons
let SeconedSliderContainerArray = [
  ...document.querySelectorAll(".SeconedSliderContainer"),
];
let nxtBtn = [...document.querySelectorAll(".nxt-btn")];
let preBtn = [...document.querySelectorAll(".pre-btn")];
SeconedSliderContainerArray.forEach((item, i) => {
  let images = item.querySelectorAll(".image-thumb");
  let imageWidth = images.length > 0 ? images[0].clientWidth : 0; 
  nxtBtn[i].addEventListener("click", () => {
    item.scrollLeft += imageWidth;
  });
  preBtn[i].addEventListener("click", () => {
    item.scrollLeft -= imageWidth;
  });
});
//-------------------------------------------------------------------------------------------------------------------------------------

// this code responses of the flash notable players cards

document.addEventListener("DOMContentLoaded", function () {
  // Data for dynamic cards
  const cardData = [
    {
      imageUrl: "media/cristiano-ronaldo.jpg",
      title: "Cristiano Ronaldo",
      description:
        " Cristiano Ronaldo, a football legend, made an enduring impact at Real Madrid with his prolific goal-scoring, unmatched work ethic, and extraordinary leadership. His time with the club is synonymous with numerous victories, solidifying his status as one of its greatest players.",
    },
    {
      imageUrl: "media/lukitaaa2.jpg",
      title: "Luka Modric",
      description:
        "Renowned Croatian footballer Luka Modric stands as a testament to skill and longevity. An exceptional midfielder, Modric's vision, precise passing, and tireless work ethic have propelled him to success with Real Madrid and the Croatian national team, earning him accolades, including the 2018 FIFA World Player of the Year.",
    },
    {
      imageUrl: "media/Di_stefano_argentina.jpg",
      title: "Stéfano",
      description:
        " a football legend, stands among Real Madrid's greatest players. His versatility and leadership were instrumental in the club's success during the 1950s and 1960s, marking an era of dominance in both domestic and international competitions.",
    },
    {
      imageUrl: "media/sergio5.jpg ",
      title: "Sergio Ramos",
      description:
        "Sergio Ramos, an icon at Real Madrid, epitomized leadership and defensive excellence. His commitment and pivotal goals were key to the club's multiple triumphs, including four UEFA Champions League titles. Ramos is a symbol of resilience and success for Madridistas.",
    },
    {
      imageUrl: "media/puskas11.webp",
      title: "Ferenc Puskas",
      description:
        "Ferenc Puskás, a football legend, was instrumental in Real Madrid's late 1950s dominance. His remarkable goal-scoring ability and skill make him one of the club's all-time greats.",
    },
    {
      imageUrl: "media/karim2.jpg",
      title: " Karim Benzema",
      description:
      "Karim Benzema, a prolific striker for Real Madrid, has consistently showcased his goal-scoring prowess and playmaking abilities. Instrumental in the team's success, Benzema's skill, vision, and football intelligence have made him a vital figure in the club's achievements.",
         
     },
  ];

  // Function to create a card element
  function createCard(data) {
    const cardContainer = document.getElementById("cardContainer");

    const card = document.createElement("div");
    card.classList.add("card");

    const image = document.createElement("img");
    image.src = data.imageUrl;
    image.alt = "";

    const cardContent = document.createElement("div");
    cardContent.classList.add("card__content");

    const title = document.createElement("p");
    title.classList.add("card__title");
    title.textContent = data.title;

    const description = document.createElement("p");
    description.classList.add("card__description");
    description.textContent = data.description;

    cardContent.appendChild(title);
    cardContent.appendChild(description);

    card.appendChild(image);
    card.appendChild(cardContent);

    cardContainer.appendChild(card);
  }

  // Loop through the cardData array and create cards dynamically
  cardData.forEach(createCard);
});

// ---------------------------------------------------------------------- for the filtering
// filtering part in the shop page

document.addEventListener("DOMContentLoaded", function () {
  // Add event listeners to filter buttons
  let btns = document.querySelectorAll(".btn");
  btns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      let category = this.getAttribute("data-filter");
      filterSelection(category);
    });
  });
});

// Filter elements based on category
function filterSelection(category) {
  let elements = document.querySelectorAll(".musthave__card");

  elements.forEach(function (element) {
    let elementCategories = element.classList;
    if (category === "all" || elementCategories.contains(category)) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });

  // Highlight the active button
  let btns = document.querySelectorAll(".btn");
  btns.forEach(function (btn) {
    btn.classList.remove("active");
    if (category === btn.getAttribute("data-filter") || category === "all") {
      btn.classList.add("active");
    }
  });
}