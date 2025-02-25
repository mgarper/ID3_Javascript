// Data objects to be saved
let transactions = []
let currentTotalSpend = 0

let historicData = {}

let spend_by_category = {
  "Retail Stores": 0,
  "Grocery Stores & Supermarkets": 0,
  "Restaurants & Cafés": 0,
  "Entertainment & Leisure": 0,
  "Health & Wellness": 0,
  "Transportation": 0,
  "Education & Learning": 0,
  "Housing & Utilities": 0,
  "Travel & Tourism": 0,
  "Financial Services": 0,
  "Tech & Subscriptions": 0,
  "Hobbies & Recreation": 0,
  "Donations & Charity": 0,
  "Bizum": 0
}

let percentage_by_category = {
  "Retail Stores": 0,
  "Grocery Stores & Supermarkets": 0,
  "Restaurants & Cafés": 0,
  "Entertainment & Leisure": 0,
  "Health & Wellness": 0,
  "Transportation": 0,
  "Education & Learning": 0,
  "Housing & Utilities": 0,
  "Travel & Tourism": 0,
  "Financial Services": 0,
  "Tech & Subscriptions": 0,
  "Hobbies & Recreation": 0,
  "Donations & Charity": 0,
  "Bizum": 0
}

const bank_names = [
  "BBVA", "Santander", "CaixaBank", "Bankinter", "Banco Sabadell",
  "ING España", "EVO Banco", "Abanca", "Kutxabank", "Unicaja Banco",
  "Banco Mediolanum", "Openbank", "Ibercaja", "Laboral Kutxa", 
  "Cajasur", "Caixa Ontinyent", "Caixa Pollença"
];

const spend_category = [
    "Retail Stores",
    "Grocery Stores & Supermarkets",
    "Restaurants & Cafés",
    "Entertainment & Leisure",
    "Health & Wellness",
    "Transportation",
    "Education & Learning",
    "Housing & Utilities",
    "Travel & Tourism",
    "Financial Services",
    "Tech & Subscriptions",
    "Hobbies & Recreation",
    "Donations & Charity",
    "Bizum"
];

const sc_business_name = {
    "Retail Stores": [
    "El Corte Inglés", "Carrefour", "Alcampo", "Decathlon", "MediaMarkt", "Bershka", 
    "Pull & Bear", "Stradivarius", "Zara", "Mango", "Desigual", "Springfield", "Cortefiel", 
    "Massimo Dutti", "Lefties", "Primark España", "Fnac", "Tiger", "Parfois", "Misako"
  ],
  "Grocery Stores & Supermarkets": [
    "Mercadona", "Día", "Carrefour Market", "Alcampo", "Eroski", "Lidl", "Aldi", "Supercor", 
    "Consum", "Hipercor", "BM Supermercados", "Ahorramas", "Coviran", "Froiz", "Gadis", 
    "Bonpreu", "Spar España", "HiperDino", "La Sirena", "El Árbol"
  ],
  "Restaurants & Cafés": [
    "Vips", "100 Montaditos", "Telepizza", "Ginos", "Rodilla", "Pans & Company", "Foster’s Hollywood", 
    "El Brillante", "La Sureña", "Cañas y Tapas", "Goiko", "Hamburguesa Nostra", "Lateral", 
    "TGB - The Good Burger", "La Tagliatella", "UDON", "Casa Dani", "Casa Lucio", "Restaurante Botín", "Dunkin'"
  ],
  "Entertainment & Leisure": [
    "Cinesa", "Yelmo Cines", "Kinépolis", "Ocine", "Autocine Madrid RACE", "PortAventura", "Parque Warner", 
    "Siam Park", "Terra Mítica", "Zoo de Madrid", "Loro Parque", "Aquópolis", "Museo del Prado", 
    "Museo Reina Sofía", "Teatro Español", "Gran Teatro del Liceu", "Sala Apolo", "Razzmatazz", 
    "Shôko Madrid", "WiZink Center"
  ],
  "Health & Wellness": [
    "Farmacias 24h", "Farmacias Ecoceutics", "Farmacias Alphega", "Vitaldent", "Sanitas", "Quirónsalud", 
    "Dorsia Clínicas", "Clínicas Baviera", "Oftalvist", "McFIT", "Basic-Fit", "O2 Centro Wellness", 
    "Metropolitan", "Anytime Fitness", "EVOfit", "Vivagym", "Altafit", "Asssa Seguros", "Adeslas", "DKV"
  ],
  "Transportation": [
    "Cabify", "Uber", "BlaBlaCar", "Renfe", "Metro de Madrid", "TMB Barcelona", "Euskotren", 
    "Ouigo", "Iryo", "Avanza", "ALSA", "Socibus", "Repsol", "Cepsa", "Galp", "BP", "Petronor", 
    "Shell España", "Goldcar", "Europcar"
  ],
  "Education & Learning": [
    "Domestika", "Aprendum", "Tutellus", "UNED", "Google Activate", "CEAC", "EF Education First", 
    "Instituto Cervantes", "Universidad Complutense de Madrid", "Universidad de Barcelona", 
    "Universidad Autónoma de Madrid", "Universidad Politécnica de Valencia", "Udemy", "Coursera", 
    "LinkedIn Learning", "Formación Profesional CCC", "MasterD", "Campus Training", "EAE Business School", "Esade"
  ],
  "Housing & Utilities": [
    "IKEA", "Conforama", "Leroy Merlin", "Bauhaus", "Brico Depôt", "Zara Home", "H&M Home", "Maisons du Monde", 
    "Casa Viva", "Vitra", "Endesa", "Iberdrola", "Naturgy", "Repsol Luz", "Acciona Energía", "Movistar", 
    "Orange", "Vodafone", "Yoigo", "Pepephone"
  ],
  "Travel & Tourism": [
    "Iberia", "Air Europa", "Vueling", "Ryanair", "NH Hoteles", "Meliá", "Barceló", "Riu Hotels", 
    "Paradores", "Booking.com", "Trivago", "Edreams", "Viajes El Corte Inglés", "Atrápalo", 
    "Renfe Viajeros", "MSC Cruceros", "Pullmantur", "Binter Canarias", "Volotea", "Iryo"
  ],
  "Financial Services": [
    "BBVA", "Santander", "CaixaBank", "Banco Sabadell", "Bankinter", "EVO Banco", "ING España", "Abanca", 
    "Kutxabank", "Ibercaja", "Unicaja Banco", "Openbank", "Bizum", "PayPal", "Revolut", "N26", "Wise", 
    "Bnext", "Banco Mediolanum", "Cajasur"
  ],
  "Tech & Subscriptions": [
    "Netflix", "HBO Max", "Disney+", "Prime Video", "Filmin", "Movistar Plus+", "Spotify", "Apple Music", 
    "Tidal", "YouTube Premium", "Dropbox", "Google One", "Microsoft 365", "Adobe Creative Cloud", 
    "Canva Pro", "Notion", "GitHub", "Twitch", "Crunchyroll", "DAZN"
  ],
  "Hobbies & Recreation": [
    "Decathlon", "Forum Sport", "Base Deportes", "Adidas", "Nike", "Joma", "New Balance", "Salomon", 
    "The North Face", "El Ganso", "Hobby Consolas", "Juguettos", "LEGO Store", "Game", "Fnac", 
    "MediaMarkt", "Casa del Libro", "El Dragón Lector", "Atlántica Juegos", "Magic Madrid"
  ],
  "Donations & Charity": [
    "Cruz Roja Española", "Médicos Sin Fronteras", "Unicef España", "Save the Children", 
    "Caritas", "World Wildlife Fund", "Fundación Vicente Ferrer", "Banco de Alimentos", 
    "ACNUR", "Greenpeace España", "Aldeas Infantiles SOS", "Manos Unidas", "Fundación ONCE", 
    "Plan International España", "Amnistía Internacional", "Médicos del Mundo", 
    "Fundación Josep Carreras", "Asociación Española Contra el Cáncer", "Open Arms", "Educo"
  ],
  "Bizum": [
    "Alejandro", "Sofía", "Mateo", "Valentina", "Lucas", 
    "Isabella", "Diego", "Camila", "Javier", "Martina", 
    "Carlos", "Elena", "Fernando", "Lucía", "Gabriel", 
    "Mariana", "Ricardo", "Paula", "Sebastián", "Daniela"
  ]
};

const sc_spend_range = {
  "Retail Stores": [5, 70],
  "Grocery Stores & Supermarkets": [10, 70],
  "Restaurants & Cafés": [3, 60],
  "Entertainment & Leisure": [5, 100],
  "Health & Wellness": [10, 200],
  "Transportation": [1, 20],
  "Education & Learning": [15, 25],
  "Housing & Utilities": [50, 120],
  "Travel & Tourism": [20, 340],
  "Financial Services": [1, 200],
  "Tech & Subscriptions": [2, 20],
  "Hobbies & Recreation": [5, 70],
  "Donations & Charity": [1, 15],
  "Bizum": [0.50, 50]
}

const spend_distribution = {
  "Retail Stores": 3,
  "Grocery Stores & Supermarkets": 12,
  "Restaurants & Cafés": 6,
  "Entertainment & Leisure": 3,
  "Health & Wellness": 3,
  "Transportation": 4,
  "Education & Learning": 2,
  "Housing & Utilities": 9,
  "Travel & Tourism": 1,
  "Financial Services": 2,
  "Tech & Subscriptions": 2,
  "Hobbies & Recreation": 2,
  "Donations & Charity": 1,
  "Bizum": 1
};

const spend_color = {
  "Retail Stores": "#1E90FF", // Dodger Blue
  "Grocery Stores & Supermarkets": "#4169E1", // Royal Blue
  "Restaurants & Cafés": "#4682B4", // Steel Blue
  "Entertainment & Leisure": "#5A5ACD", // Medium Slate Blue
  "Health & Wellness": "#6A5ACD", // Slate Blue
  "Transportation": "#483D8B", // Dark Slate Blue
  "Education & Learning": "#4B0082", // Indigo
  "Housing & Utilities": "#8A2BE2", // Blue Violet
  "Travel & Tourism": "#9370DB", // Medium Purple
  "Financial Services": "#7B68EE", // Medium Slate Blue
  "Tech & Subscriptions": "#663399", // Rebecca Purple
  "Hobbies & Recreation": "#9400D3", // Dark Violet
  "Donations & Charity": "#9932CC", // Dark Orchid
  "Bizum": "#8B008B" // Dark Magenta
};


const sc_icon = {
    "Retail Stores": "fas fa-store",
    "Grocery Stores & Supermarkets": "fas fa-shopping-basket",
    "Restaurants & Cafés": "fas fa-utensils",
    "Entertainment & Leisure": "fas fa-film",
    "Health & Wellness": "fas fa-heartbeat",
    "Transportation": "fas fa-bus",
    "Education & Learning": "fas fa-graduation-cap",
    "Housing & Utilities": "fas fa-home",
    "Travel & Tourism": "fas fa-plane",
    "Financial Services": "fas fa-university",
    "Tech & Subscriptions": "fas fa-laptop",
    "Hobbies & Recreation": "fas fa-gamepad",
    "Donations & Charity": "fas fa-hands-helping",
    "Bizum": "fas fa-hand-holding-usd"
};

// OPERATING METHODS

function getRandomDate(month, year) {
  const daysInMonth = new Date(year, month, 0).getDate(); // Get last day of the month
  const randomDay = Math.floor(Math.random() * daysInMonth) + 1; // Random day between 1 and max
  return new Date(year, month - 1, randomDay); // Month is 0-based in JS
}

function parseDate(dateStr) {
  // Assuming the format is "DD/MM/YYYY" or similar
  const [day, month, year] = dateStr.split('/');  // Adjust according to your format
  return new Date(year, month - 1, day);  // Month is 0-indexed in JavaScript
}

function generateCard(month, year) {
  let s_cat = spend_category[Math.floor(Math.random() * spend_category.length)];
  let s_cat_array = sc_business_name[s_cat];
  let max = sc_spend_range[s_cat][1]
  let min = sc_spend_range[s_cat][0]
  let cardDate = getRandomDate(month, year)
  let card = {
    "id": transactions.length + 1,
    "category": s_cat,
    "amount": Math.floor(Math.random() * (max - min)) + min,
    "business": s_cat_array[Math.floor(Math.random() * s_cat_array.length)],
    "bank": bank_names[Math.floor(Math.random() * bank_names.length)],
    "date": cardDate.toLocaleDateString(),
    "icon": sc_icon[s_cat]
  };

  // Beginning of new section
  if (!historicData[year]) {
    historicData[year] = { yearAmount: 0 };
  }

  if (!historicData[year][month]) {
      historicData[year][month] = {
          monthAmount: 0,
          transactions: [],
      };
  }

  historicData[year][month].monthAmount += card.amount
  historicData[year].yearAmount += card.amount
  historicData[year][month].transactions.push(card);
  //End of new section

  transactions.push(card)
  spend_by_category[s_cat] += card.amount
  currentTotalSpend += card.amount
}

function renderCard(card) {
    document.querySelector(".gallery").innerHTML += `
      <div class="transaction" style="background-color: ${spend_color[card.category]}">
          <h1>${card.amount} €</h1>
          <h3>${card.business}</h3>
          <h3>${card.bank}</h3>
          <h3>${card.date}</h3>
          <h3><span class="${card.icon}"></span></h3>
      </div>
    `
}

// MAIN
let keys = Object.keys(spend_distribution)

for (let i = 0; i < 3; i++) {
  for (let j = 1; j <= 12; j++) {
    // Generate all cards for the current month and year in one go
    Array(10).fill().forEach(() => generateCard(j, 2022 + i));
    historicData[2022 + i][j]["spend_by_category"] = { ...spend_by_category }
    Object.keys(spend_by_category).forEach((element) => {
      percentage_by_category[element] = spend_by_category[element] * 100 / historicData[2022+i][j]["monthAmount"];
    });
    historicData[2022 + i][j]["percentage_by_category"] = { ...percentage_by_category }
    Object.keys(spend_by_category).forEach(key => {
      spend_by_category[key] = 0;
      percentage_by_category[key] = 0
    });
  }
}

transactions.sort((a, b) => parseDate(a.date) - parseDate(b.date));  // Sort by parsed date
transactions.reverse();  // Reverse to get the most recent first
transactions.forEach(card => renderCard(card));

Object.keys(spend_by_category).forEach((element) => {
  percentage_by_category[element] = spend_by_category[element] * 100 / currentTotalSpend;
});