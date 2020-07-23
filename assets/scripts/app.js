const data = {
  starters: [
    {
      type: "food",
      name: "ANTIPASTO ITALIANO",
      descriptionPL: "wędliny i sery włoskie, pesto, oliwki, pieczywo",
      descriptionENG: "meats and Italian cheeses, pesto, olives, bread",
      price: "36.00",
      weight: "300",
    },
    {
      type: "food",
      name: "PANE Z PESTO",
      descriptionPL: "paluchy z pieca, pesto czerwone, zielone, czarne, rukola",
      descriptionENG:
        "oven-fresh bread sticks, red, green, black pesto, rucola",
      price: "18.00",
      weight: "300",
    },
    {
      type: "food",
      name: "CAPRESE",
      descriptionPL:
        "pomidory, mozzarella, bazylia, rukola, oliwa z oliwek, ocet balsamiczny",
      descriptionENG:
        "tomatoes, mozzarella, basil, rucola, olive oil, balsamic vinegar",
      price: "18.00",
      weight: "300",
    },
    {
      type: "food",
      name: "BRUSCHETTA RUSTICA",
      descriptionPL:
        "pieczywo, mozzarella, szynka parmeńska, pieczarki, czosnek",
      descriptionENG: "",
      price: "20.00",
      weight: "300",
    },
    {
      type: "food",
      name: "GAMBERI AL BRANDY",
      descriptionPL: "krewetki, czosnek, pietruszka, chilli, brandy",
      descriptionENG: "shrimp, garlic, parsley, chilli, brandy",
      price: "32.00",
      weight: "200",
    },
    {
      type: "food",
      name: "BRUSCHETTA",
      descriptionPL: "pieczywo, pomidor, czosnek, bazylia, oliwa z oliwek",
      descriptionENG: "bread, tomato, garlic, basil, olive oil",
      price: "18.00",
      weight: "300",
    },
  ],

  salads: [
    {
      type: "food",
      name: "CEZAR / CAESAR",
      descriptionPL: "sałata, kurczak, pomidor, grzanki, parmezan, sos cesarsk",
      descriptionENG:
        "lettuce, chicken, tomato, croutons, parmesan, Caesar dressing",
      price: "22.00",
      weight: "350",
    },
    {
      type: "food",
      name: "RUKOLA / RUCOLA",
      descriptionPL:
        "rukola, pomidor, kozi ser, orzechy włoskie, ocet balsamiczny, oliwa z oliwek, gruszki",
      descriptionENG:
        "rucola, tomato, goat cheese, walnuts, balsamic vinegar, olive oil",
      price: "28.00",
      weight: "350",
    },
  ],

  soup: [
    {
      type: "food",
      name: "Krem z pomidorów / Cream of tomato",
      descriptionPL: "",
      descriptionENG: "",
      price: "14.00",
      weight: "350",
    },
    {
      type: "food",
      name: "Rosół z kluskami / Broth with noodles",
      descriptionPL: "",
      descriptionENG: "",
      price: "14.00",
      weight: "350",
    },
  ],
  macaroni: [
    {
      type: "food",
      name: "Pasta dnia – zapytaj obsługę / Pasta of the day – ask the server",
      descriptionPL: "",
      descriptionENG: "",
      price: "20.00",
      weight: "",
    },
    {
      type: "food",
      name: "SPAGHETTI CARBONARA",
      descriptionPL:
        "makaron spaghetti, boczek wędzony, cebula, śmietana, jajko, pietruszka",
      descriptionENG: "spaghetti, smoked bacon, onion, cream, egg, parsley",
      price: "28.00",
      weight: "400",
    },
    {
      type: "food",
      name: "RAVIOLI AL BURRO E SALVIA",
      descriptionPL:
        "makaron ravioli, ricotta, szpinak, szałwia, czosnek, parmezan",
      descriptionENG: "ravioli, ricotta, spinach, sage, garlic, parmesan",
      price: "26.00",
      weight: "400",
    },
    {
      type: "food",
      name: "TAGLIATELLE NERE",
      descriptionPL:
        "makaron tagliatelle czarny, krewetki, pomidory, białe wino, chili, czosnek",
      descriptionENG: "",
      price: "32.00",
      weight: "400",
    },
    {
      type: "food",
      name: "SPAGHETTI BOLOGNESE",
      descriptionPL:
        "makaron papardelle, wieprzowina, pomidory, seler, marchew, cebula, czerwone wino",
      descriptionENG:
        "pappardelle pasta, pork, tomato, celery, carrot, onion, red wine",
      price: "32.00",
      weight: "400",
    },
    {
      type: "food",
      name: "STROZZAPRETI CON GORGONZOLA",
      descriptionPL: "makaron strozzapreti, gorgonzola, śmietana, beszamel",
      descriptionENG: "strozzapreti pasta, gorgonzola, cream, béchamel",
      price: "26.00",
      weight: "400",
    },
    {
      type: "food",
      name: "GNOCCHI ALLA SORRENTINA",
      descriptionPL:
        "gnocchi, pomidory, czosnek, cebula, mozzarella, parmezan, bazylia",
      descriptionENG:
        "gnocchi, tomato, garlic, onion, mozzarella, parmesan, basil",
      price: "26.00",
      weight: "400",
    },

    {
      type: "food",
      name: "LASAGNE BOLOGNESE",
      descriptionPL:
        "makaron lasagne, sos bolognese, sos beszamelowy, mozzarella",
      descriptionENG: "lasagne, Bolognese sauce, béchamel sauce, mozzarella",
      price: "28.00",
      weight: "400",
    },
  ],
  pizza: [
    {
      type: "food",
      name: "MARGHERITA",
      descriptionPL: "sos pomidorowy, mozzarella, bazylia",
      descriptionENG: "tomato sauce, mozzarella, basil",
      price: "16.00",
      weight: "30",
    },
    {
      type: "food",
      name: "PARMA",
      descriptionPL:
        "sos pomidorowy, mozzarella, szynka parmeńska, rukola, pomidorki cherry",
      descriptionENG:
        "tomato sauce, mozzarella, Parma ham, rucola, cherry tomatoes",
      price: "28.00",
      weight: "30",
    },
    {
      type: "food",
      name: "AL FROMAGGI",
      descriptionPL: "sos pomidorowy, mozzarella, gorgonzola, parmezan",
      descriptionENG: "tomato sauce, mozzarella, gorgonzola, parmesan",
      price: "25.00",
      weight: "30",
    },
    {
      type: "food",
      name: "REGINA",
      descriptionPL:
        "sos pomidorowy, mozzarella, salami, szynka gotowana, oliwki, cebula",
      descriptionENG:
        "tomato sauce, mozzarella, salami, cooked ham, olives, onion",
      price: "26.00",
      weight: "30",
    },
    {
      type: "food",
      name: "GRATIN",
      descriptionPL:
        "sos pomidorowy, mozzarella, krewetki, czosnek, pietruszka",
      descriptionENG: "tomato sauce, mozzarella, shrimp, garlic, parsley",
      price: "30.00",
      weight: "30",
    },
    {
      type: "food",
      name: "ETNA",
      descriptionPL:
        "sos pomidorowy, mozzarella, kiełbasa pikantna, papryka, chili",
      descriptionENG:
        "tomato sauce, mozzarella, spicy sausage, bell pepper, chili",
      price: "24.00",
      weight: "30",
    },
    {
      type: "food",
      name: "VAL DI SOLE",
      descriptionPL:
        "sos pomidorowy, mozzarella, kozi ser, bakłażan, papryka, cukinia",
      descriptionENG:
        "tomato sauce, mozzarella, goat cheese, aubergine, bell pepper, zucchini",
      price: "26.00",
      weight: "30",
    },

    {
      type: "food",
      name: "CAPRICCIOSA",
      descriptionPL: "sos pomidorowy, mozzarella, szynka, pieczarki",
      descriptionENG: "tomato sauce, mozzarella, ham, mushrooms",
      price: "28.00",
      weight: "30",
    },
    {
      type: "food",
      name: "SALAME",
      descriptionPL:
        "sos pomidorowy, mozzarella, salami, mascarpone, rukola, pomidorki cherry",
      descriptionENG:
        "tomato sauce, mozzarella, salami, mascarpone, rucola, cherry tomatoes",
      price: "26.00",
      weight: "30",
    },
    {
      type: "food",
      name: "TARTUFO",
      descriptionPL: "sos truflowy, mozzarella, grzyby, czosnek, parmezan",
      descriptionENG: "",
      price: "28.00",
      weight: "30",
    },
  ],
  bambini: [
    {
      type: "food",
      name: "Spaghetti pomodoro",
      descriptionPL: "makaron spaghetti, sos pomidorowy",
      descriptionENG: "spaghetti, tomato sauce",
      price: "12.00",
      weight: "200",
    },
    {
      type: "food",
      name: "MINI PIZZA",
      descriptionPL: "sos pomidorowy, mozzarella",
      descriptionENG: "tomato sauce, mozzarella",
      price: "10.00",
      weight: "20",
    },
  ],
  desserts: [
    {
      type: "food",
      name: "TIRAMISU",
      descriptionPL: "",
      descriptionENG: "",
      price: "16.00",
      weight: "200",
    },
    {
      type: "food",
      name: "PANNA COTTA Z OWOCAMI",
      descriptionPL: "sos pomidorowy, mozzarella",
      descriptionENG: "tomato sauce, mozzarella",
      price: "14.00",
      weight: "200",
    },
    {
      type: "food",
      name: "CREME BRULEE",
      descriptionPL: "sos pomidorowy, mozzarella",
      descriptionENG: "tomato sauce, mozzarella",
      price: "18.00",
      weight: "200",
    },
  ],
  wine: [
    {
      type: "food",
      name: "BIAŁE, CZERWONE / WHITE, RED",
      descriptionPL: "",
      descriptionENG: "",
      price: "8.00",
      weight: "150",
    },
    {
      type: "food",
      name: "BIAŁE, CZERWONE / WHITE, RED",
      descriptionPL: "",
      descriptionENG: "",
      price: "26.00",
      weight: "500",
    },
    {
      type: "food",
      name: "BIAŁE, CZERWONE / WHITE, RED",
      descriptionPL: "",
      descriptionENG: "",
      price: "34.00",
      weight: "750",
    },
  ],
  beer: [
    {
      type: "food",
      name: "Złote Lwy",
      descriptionPL: "",
      descriptionENG: "",
      price: "10.00",
      weight: "0.5",
    },
    {
      type: "food",
      name: "Johannes",
      descriptionPL: "",
      descriptionENG: "",
      price: "10.00",
      weight: "0.5",
    },
    {
      type: "food",
      name: "Amber Żywe",
      descriptionPL: "",
      descriptionENG: "",
      price: "10.00",
      weight: "0.5",
    },
    {
      type: "food",
      name: "Pszeniczniak",
      descriptionPL: "",
      descriptionENG: "",
      price: "10.00",
      weight: "0.5",
    },
  ],
  cold: [
    {
      type: "food",
      name: "Woda gaz/niegazowana",
      descriptionPL: "",
      descriptionENG: "Water still/sparkling",
      price: "6.00",
      weight: "0.5",
    },
    {
      type: "food",
      name: "Pepsi, Mirinda, 7UP, Lipton",
      descriptionPL: "",
      descriptionENG: "",
      price: "6.00",
      weight: "0.2",
    },
    {
      type: "food",
      name: "Sok pomarańczowy, jabłkowy",
      descriptionPL: "",
      descriptionENG: "Orange, apple juice",
      price: "6.00",
      weight: "0.2",
    },
    {
      type: "food",
      name: "Lemoniada",
      descriptionPL: "",
      descriptionENG: "Lemonade",
      price: "10.00",
      weight: "0.25",
    },
    {
      type: "food",
      name: "Sok ze świeżych pomarańczy, grejpfrutów",
      descriptionPL: "",
      descriptionENG: "Freshly-squeezed orange, grapefruit juice",
      price: "10.00",
      weight: "0.25",
    },
  ],
  hot: [
    {
      type: "food",
      name: "Espresso",
      descriptionPL: "",
      descriptionENG: "",
      price: "6.00",
      weight: "",
    },
    {
      type: "food",
      name: "Kawa / Coffee",
      descriptionPL: "",
      descriptionENG: "",
      price: "8.00",
      weight: "",
    },
    {
      type: "food",
      name: "Cappucino",
      descriptionPL: "",
      descriptionENG: "",
      price: "10.00",
      weight: "",
    },
    {
      type: "food",
      name: "Caffè latte",
      descriptionPL: "",
      descriptionENG: "Lemonade",
      price: "10.00",
      weight: "",
    },
    {
      type: "food",
      name: "Herbata / Tea",
      descriptionPL: "",
      descriptionENG: "",
      price: "10.00",
      weight: "",
    },
  ],
};

const dishes = document.querySelector(".dishes__content");
const dishBtn = document.querySelectorAll(".dishBtn");

fillContent = (array) => {
  addDish = () => {
    dishes.innerHTML = [...array]
      .map((item) => {
        return `
            <div class="dish">
            <div class="dish__description">
              <h2 class="dish__name">${item.name}</h2>
              <h3 class="dish__descPL">
              ${item.descriptionPL}</h3>
              <h3 class="dish__descENG">
              ${item.descriptionENG}</h3>
            </div>
            <div class="dish__info">
              <div class="dish__weight dish__padding">${item.weight}</div>
              <div class="dish__price dish__padding">${item.price} zł</div>
            </div>
          </div>
              `;
      })
      .join("");
  };
  return addDish;
};

[...dishBtn].map((item, index) => {
  const arrayName = document.getElementsByClassName("dishBtn")[index].id;
  item.addEventListener("click", fillContent(data[arrayName]));
});
window.onload = fillContent(data.pizza);
///////////////////////////////////////////
SmoothScroll({ stepSize: 70 });
const heroImage = document.querySelector(".header");

setTranslate = (xPos, yPos, el) => {
  el.style.transform = "translate3d(" + xPos + ", " + yPos + "px, 0)";
};

window.addEventListener("DOMContentLoaded", scrollLoop, false);

let xScrollPosition;
let yScrollPosition;

function scrollLoop() {
  xScrollPosition = window.scrollX;
  yScrollPosition = window.scrollY;

  setTranslate(0, yScrollPosition * -0.2, heroImage);

  requestAnimationFrame(scrollLoop);
}
