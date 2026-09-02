// Base de datos local por defecto (Bilingüe)
let localDatabase = {
  "es": { "attractions": [], "accommodations": [], "restaurants": [], "products": [] },
  "en": { "attractions": [], "accommodations": [], "restaurants": [], "products": [] }
};

// Idioma activo por defecto
let currentLanguage = localStorage.getItem('coina_lang') || 'es';

// Traducciones de textos estáticos de la interfaz (i18n)
const translations = {
  "es": {
    "app_title": "COINA: SABOREA Y VIVE",
    "passport_title": "Pasaporte de Cosecha",
    "passport_subtitle": "Colecciona Sellos Offline",
    "passport_desc": "Escanea los códigos QR físicos en los huertos de limas, hospedajes y recreos de Coina para coleccionar sellos. ¡Completa tu pasaporte y reclama tu premio en la tienda!",
    "toast_stamp_earned": "¡Felicidades! Has ganado un nuevo sello de cosecha: ",
    "toast_passport_complete": "¡Espectacular! Has completado tu pasaporte. Reclama tu mermelada de lima dulce gratis en el centro del pueblo.",

    "app_subtitle": "Paraíso del Alto Chicama",
    "hero_badge": "Clima de Sanatorio Natural",
    "hero_title": "¡Respira de nuevo en Coina!",
    "hero_desc": "Bautizado como el 'Paraíso del Alto Chicama', un refugio de aire puro, clima seco y sol andino, ideal para la salud y el ecoturismo familiar a 1,942 msnm.",
    "temp_label": "Temperatura Promedio",
    "temp_desc": "Humedad muy baja - Clima Seco Terapéutico",
    "benefit_title": "Beneficio",
    "benefit_desc": "Salud Respiratoria",
    "manual_title": "Manual del Viajero \"Sin Estrés\"",
    "transport_card_title": "¿Cómo Llegar?",
    "transport_card_desc": "Desde Trujillo (145 km, 4h) vía Latino o Huaca Express. O desde Otuzco (61 km, 2.5h) con la combi del Sr. Ponce los Lun/Mié/Vie a las 11:00 AM.",
    "luggage_card_title": "Clima y Equipaje",
    "luggage_card_desc": "¡Viste en capas! Durante el día hace sol y calor andino, pero de noche refresca mucho. No olvides bloqueador solar y casaca cortavientos.",
    "legacy_title": "El Legado de Salud del Dr. Kauffman",
    "legacy_desc": "En la década de 1950, el médico alemán Dr. Oswaldo Kauffman Reinars impulsó el Hospital Andino de Coina, maravillado por el microclima curativo del valle.",
    "explora_title": "Rutas y Rincones de Coina",
    "explora_subtitle": "Descubre los atractivos naturales y deportivos de la campiña",
    "map_label": "Mapa Interactivo de Rutas (Offline)",
    "pin_machu": "Machu Picchu",
    "pin_mirador": "Mirador",
    "pin_rio": "Río Chicama",
    "pin_estadio": "Estadio Techado",
    "services_title": "Servicios Locales y Reservas",
    "services_subtitle": "Conecta directamente con hospedajes, restaurantes y choferes de confianza",
    "sub_hosp": "🛌 Alojamientos",
    "sub_rest": "🍲 Restaurantes",
    "store_badge": "Capital de la Lima Dulce",
    "store_title": "El Mercado de Coina",
    "store_desc": "Compra de forma directa limas de aroma único, ricas en vitamina C y producidas de forma 100% natural y libre de pesticidas.",
    "cart_title": "Mi Carrito de Compras",
    "btn_checkout": "Comprar",
    "culture_title": "Tradiciones y Leyendas",
    "culture_subtitle": "Adéntrate en la mística y la historia oral del valle de Coina",
    "myth1_title": "Las Aves de La Fundición",
    "myth1_desc": "En el sector de La Fundición, los pobladores cuentan la leyenda de tres grandes aves negras que sobrevolaban las ruinas mineras. Al posarse en tierra por las noches, estas criaturas mágicas se transformaban en hermosas mujeres vestidas con joyas y sedas, que custodiaban celosamente tesoros minerales antes de desaparecer con el primer destello del amanecer.",
    "myth2_title": "La Laguna Encantadora de Inea",
    "myth2_desc": "Ubicada en las alturas de Cerripampa, se dice que es una laguna brava de aguas oscuras. Según los abuelos, en las noches de luna llena, la laguna atrae a pastores con cantos celestiales y visiones de animales de oro brillante. Quienes se acercan demasiado son adormecidos por la bruma y transportados misteriosamente al fondo de la laguna.",
    "myth3_title": "El Niño Fantasma del Río Chugual",
    "myth3_desc": "Una pobladora llamada Evangelina recogió a un aparente niño huérfano en un paraje aislado del río Chugual. Al llevarlo en brazos, el niño pesaba cada vez más y se quejó cuatro veces pidiendo: 'Ma bájame'. Al bajarlo con angustia, se aterrorizó al ver que se había transformado en una criatura con cabeza de chivo y cuerpo humano, quien le dijo: 'Ma mira mis cuernitos', dejándola muda de la impresión durante tres días.",
    "myth4_title": "Origen del Nombre \"Coina\"",
    "theory1_label": "Teoría 1 (Origen Portugués - 1830):",
    "theory1_desc": "Mineros de origen portugués llegaron a extraer metales preciosos a orillas del río Alto Chicama. Al ver el hermoso valle y la geografía, encontraron gran parecido con un pueblo de su patria natal llamado 'Coina' y decidieron llamarlo igual.",
    "theory2_label": "Teoría 2 (La Coima):",
    "theory2_desc": "Hace muchos años, la dueña de la pampa de la Yuma, Tomasa de los Ríos, comenzó a pagar famosas 'coimas' al terrateniente de Cuyuchugo para poder pastar sus animales libremente en el potrero. La palabra se fue tergiversando hasta convertirse en Coina.",
    "myth5_title": "San Miguel y el Diablo de Trapo",
    "myth5_desc": "El lugareño Don Miguel Sánchez decidió tallar un madero con suela para darle forma a la imagen de 'San Miguel Arcángel' pisando al diablo. Al terminar el tallado, sintió que le faltaba algo al diablo que representara mayor dinamismo. Tomó aguja e hilo de coser y le cosió una cola de trapo. Desde entonces quedó como el patrón tutelar venerado por todo el pueblo.",
    "illustrious_desc": "Virtuoso y afamado guitarrista peruano nacido en el sector de La Fundición de Coina.",
    "limi_title": "Guía Virtual",
    "limi_status": "Listo en todo momento",
    "limi_placeholder": "Escribe tu consulta sobre Coina aquí...",
    "limi_welcome": "¡Hola, soy <strong>Limi</strong>! 🍋 Tu asistente turística del 'Paraíso del Alto Chicama'. Estoy aquí para guiarte en tu viaje, darte horarios de transporte, contarte leyendas mágicas y guiarte de forma 100% offline. Haz clic en las sugerencias o escríbeme lo que desees saber.",
    "toast_online": "¡Estás en línea de nuevo! Sincronizando datos...",
    "toast_offline": "Sin señal de internet. Usando base de datos local offline.",
    "toast_added": "¡Agregado al carrito de compras!",
    "toast_checkout": "¡Compra registrada de forma segura! Procesando pago...",
    "toast_checkout_offline": "Compra encolada sin conexión. Se procesará al recuperar señal.",
    "btn_listen": "🔊 Escuchar",
    "btn_reserve": "Reservar Ahora",
    "btn_route": "Ver Mapa y Ruta",
    "btn_add_cart": "Añadir al Carrito",
    "btn_buy": "Comprar Directo",
    "lbl_difficulty": "Dificultad",
    "lbl_accessibility": "Cómo llegar",
    "lbl_amenities": "Servicios",
    "lbl_price": "Precio",
    "lbl_contact": "Contacto",
    "lbl_specialty": "Especialidad",
    "lbl_dish": "Plato destacado",
    "lbl_producer": "Productor",
    "lbl_benefit": "Beneficios de Salud",
    
    // ARIA labels de accesibilidad
    "tab_home_aria": "Pestaña de Inicio",
    "tab_explore_aria": "Pestaña Explora Atractivos",
    "tab_services_aria": "Pestaña de Servicios Locales",
    "tab_shop_aria": "Pestaña de Tienda de Lima Dulce",
    "tab_limi_aria": "Pestaña Asistente Limi",
    "float_culture_aria": "Abrir sección de mitos y leyendas locales",
    "limi_send_aria": "Enviar mensaje",
    
    "tab_home": "Inicio",
    "tab_explore": "Explora",
    "tab_services": "Servicios",
    "tab_shop": "Tienda",
    "tab_limi": "Limi Chat"
  },
  "en": {
    "app_title": "COINA: TASTE AND LIVE",
    "passport_title": "Harvest Passport",
    "passport_subtitle": "Collect Offline Stamps",
    "passport_desc": "Scan physical QR codes at lime orchards, guesthouses, and eateries in Coina to collect digital stamps. Complete your passport and claim your prize!",
    "toast_stamp_earned": "Congratulations! You earned a new harvest stamp: ",
    "toast_passport_complete": "Spectacular! You have completed your passport. Claim your free sweet lime jam in the town center.",

    "app_subtitle": "Alto Chicama Paradise",
    "hero_badge": "Natural Sanatorium Climate",
    "hero_title": "Breathe again in Coina!",
    "hero_desc": "Baptized as the 'Alto Chicama Paradise', a refuge of pure air, dry climate, and Andean sun, ideal for health and family ecotourism at 1,942 meters above sea level.",
    "temp_label": "Average Temperature",
    "temp_desc": "Very low humidity - Dry Therapeutic Climate",
    "benefit_title": "Benefit",
    "benefit_desc": "Respiratory Health",
    "manual_title": "\"Stress-Free\" Traveler's Manual",
    "transport_card_title": "How to Get There?",
    "transport_card_desc": "From Trujillo (145 km, 4h) via Latino or Huaca Express. Or from Otuzco (61 km, 2.5h) with Mr. Ponce's combi on Mon/Wed/Fri at 11:00 AM.",
    "luggage_card_title": "Climate & Luggage",
    "luggage_card_desc": "Dress in layers! During the day it's sunny and warm, but at night it cools down significantly. Bring sunblock and a windbreaker jacket.",
    "legacy_title": "Dr. Kauffman's Health Legacy",
    "legacy_desc": "In the 1950s, German physician Dr. Oswaldo Kauffman Reinars promoted the Andean Hospital of Coina, amazed by the valley's healing microclimate.",
    "explora_title": "Coina's Routes & Corners",
    "explora_subtitle": "Discover the natural and sporting attractions of the countryside",
    "map_label": "Interactive Routes Map (Offline)",
    "pin_machu": "Machu Picchu",
    "pin_mirador": "Viewpoint",
    "pin_rio": "Chicama River",
    "pin_estadio": "Metal Roof Stadium",
    "services_title": "Local Services & Bookings",
    "services_subtitle": "Connect directly with trustworthy lodging, restaurants, and drivers",
    "sub_hosp": "🛌 Lodgings",
    "sub_rest": "🍲 Restaurants",
    "store_badge": "Sweet Lime Capital",
    "store_title": "Coina Market",
    "store_desc": "Buy directly sweet limes of unique aroma, rich in vitamin C, and produced 100% naturally, free of synthetic pesticides.",
    "cart_title": "My Shopping Cart",
    "btn_checkout": "Checkout",
    "culture_title": "Traditions & Legends",
    "culture_subtitle": "Delve into the mysticism and oral history of the Coina valley",
    "myth1_title": "The Birds of La Fundicion",
    "myth1_desc": "In La Fundición sector, locals tell the legend of three large black birds that flew over the mining ruins. Upon landing on the ground at night, these magical creatures transformed into beautiful women dressed in jewelry and silks, who zealously guarded mineral treasures before disappearing with the first light of dawn.",
    "myth2_title": "The Enchanting Inea Lagoon",
    "myth2_desc": "Located in the heights of Cerripampa, it is said to be a wild lagoon with dark waters. According to the elders, on full moon nights, the lagoon attracts shepherds with celestial songs and visions of shiny gold animals. Those who get too close are put to sleep by the mist and mysteriously transported to the bottom of the lagoon.",
    "myth3_title": "The Chugual River Ghost Child",
    "myth3_desc": "A local woman named Evangelina picked up what appeared to be an orphaned child in an isolated area of the Chugual River. As she carried him, the child grew heavier and complained four times asking: 'Ma, put me down'. When she put him down in anguish, she was terrified to see that he had transformed into a creature with a goat's head and a human body, who told her: 'Ma, look at my little horns', leaving her speechless with shock for three days.",
    "myth4_title": "Origin of the Name \"Coina\"",
    "theory1_label": "Theory 1 (Portuguese Origin - 1830):",
    "theory1_desc": "Miners of Portuguese origin arrived to extract precious metals on the banks of the Alto Chicama River. Seeing the beautiful valley and its geography, they found a great similarity to a town in their native homeland named 'Coina' and decided to call it the same.",
    "theory2_label": "Theory 2 (The Bribery/Coima):",
    "theory2_desc": "Many years ago, the owner of the Yuma pampa, Tomasa de los Ríos, began paying famous bribes ('coimas') to the landowner of Cuyuchugo to be able to graze her animals freely in the pasture. The word was distorted until it became Coina.",
    "myth5_title": "San Miguel and the Rag Tail Devil",
    "myth5_desc": "The resident Don Miguel Sánchez decided to carve a piece of wood to give shape to the image of 'San Miguel Arcángel' stepping on the devil. Upon finishing the carving, he felt that the devil lacked something representing greater dynamism. He took needle and sewing thread and sewed a rag tail onto him. Since then, he became the patron saint revered by the entire town.",
    "illustrious_desc": "Virtuoso and famous Peruvian guitarist born in the La Fundición sector of Coina.",
    "limi_title": "Virtual Guide",
    "limi_status": "Ready at all times",
    "limi_placeholder": "Write your query about Coina here...",
    "limi_welcome": "Hello, I am <strong>Limi</strong>! 🍋 Your virtual tourist assistant from the 'Alto Chicama Paradise'. I am here to guide you on your trip, give you transportation schedules, tell you magical legends, and guide you 100% offline. Click on the suggestions or write what you wish to know.",
    "toast_online": "You are online again! Synchronizing data...",
    "toast_offline": "No internet signal. Using offline local database.",
    "toast_added": "Added to shopping cart!",
    "toast_checkout": "Purchase registered securely! Processing payment...",
    "toast_checkout_offline": "Purchase queued offline. It will process when signal returns.",
    "btn_listen": "🔊 Listen",
    "btn_reserve": "Book Now",
    "btn_route": "View Map & Route",
    "btn_add_cart": "Add to Cart",
    "btn_buy": "Buy Direct",
    "lbl_difficulty": "Difficulty",
    "lbl_accessibility": "How to get there",
    "lbl_amenities": "Amenities",
    "lbl_price": "Price",
    "lbl_contact": "Contact",
    "lbl_specialty": "Specialty",
    "lbl_dish": "Featured dish",
    "lbl_producer": "Producer",
    "lbl_benefit": "Health Benefits",
    
    // Accessibility ARIA labels
    "tab_home_aria": "Home Tab",
    "tab_explore_aria": "Explore Attractions Tab",
    "tab_services_aria": "Local Services Tab",
    "tab_shop_aria": "Sweet Lime Shop Tab",
    "tab_limi_aria": "Limi Chat Assistant Tab",
    "float_culture_aria": "Open local myths and legends section",
    "limi_send_aria": "Send message",
    
    "tab_home": "Home",
    "tab_explore": "Explore",
    "tab_services": "Services",
    "tab_shop": "Shop",
    "tab_limi": "Limi Chat"
  }
};

// Limi - Banco de Preguntas y Respuestas Locales Bilingüe
const limiBrain = {
  "es": {
    "clima": "Coina goza de un clima seco y soleado durante el día, ideal para aliviar afecciones reumáticas y respiratorias. La altitud es de 1942 m.s.n.m. Te recomiendo vestir 'en capas': ropa ligera para el día y abrigadora para la noche.",
    "salud": "Coina fue bautizada como el 'Paraíso del Alto Chicama' por el médico alemán Dr. Oswaldo Kauffman en la década de 1950, quien fundó el Hospital Andino atraído por el aire puro y curativo que alivia dolencias.",
    "llegar": "Desde Trujillo son 145 km (unas 4-5 horas) con agencias como Latino Express o Huaca Express. Desde Otuzco son 61 km (2.5 a 3 horas); puedes tomar la combi del Sr. José Ponce los lunes, miércoles y viernes a las 11:00 AM.",
    "lima": "Coina es oficialmente la Capital de la Lima Dulce. Produce unas 7,500 toneladas anuales en sus 46 hectáreas de cultivos. ¡Tiene un aroma único y muchísima vitamina C!",
    "fiesta": "La gran Fiesta Patronal de San Miguel Arcángel es del 27 al 30 de julio. Incluye desfiles, la noche de antorchas hechas por escolares, danzas típicas como Negritos, Canasteros y Diablos, y la tarde taurina.",
    "leyendas": "En Coina hay mitos increíbles como las Aves de La Fundición, la Laguna de Inea en Cerripampa, y el niño fantasma del Río Chugual. ¡También está la historia de Don Miguel Sánchez, quien le cosió una cola de trapo al diablo del patrón!",
    "comer": "Te recomiendo comer un riquísimo cuy frito, cuy guisado o chancho crujiente en el Recreo Doña Mili, o deleitarte con pizzas artesanales con hierbas de la campiña en la Pizzería Delicia.",
    "dormir": "Puedes hospedarte con ambiente familiar y agua caliente en el Hospedaje La Huaca (S/ 45 la noche) o en el cómodo Hotel Rossy. También puedes conocer la Hostería El Sol.",
    "machu": "El 'Machu Picchu Coinino' se ubica en el sector Mollepata. Son imponentes formaciones de piedra gigantes que simulan la arquitectura inca, con miradores fabulosos al río Alto Chicama."
  },
  "en": {
    "clima": "Coina enjoys a dry and sunny climate during the day, ideal for relieving rheumatic and respiratory ailments. The altitude is 1942 meters above sea level. I recommend dressing 'in layers': light clothing for the day and warm clothes for the night.",
    "salud": "Coina was named the 'Alto Chicama Paradise' by the German doctor Dr. Oswaldo Kauffman in the 1950s, who founded the Andean Hospital attracted by the pure and healing air that relieves illnesses.",
    "llegar": "From Trujillo it is 145 km (about 4-5 hours) with agencies such as Latino Express or Huaca Express. From Otuzco it is 61 km (2.5 to 3 hours); you can take Mr. José Ponce's combi on Mondays, Wednesdays, and Fridays at 11:00 AM.",
    "lima": "Coina is officially the Capital of the Sweet Lime. It produces about 7,500 tons annually on its 46 hectares of crops. It has a unique aroma and lots of vitamin C!",
    "fiesta": "The great Patronal Feast of San Miguel Arcángel is from July 27th to 30th. It includes parades, the night of torches made by schoolchildren, typical dances like Negritos, Canasteros, and Diablos, and the traditional bullfight afternoon.",
    "leyendas": "In Coina there are incredible myths like the Birds of La Fundición, the Inea Lagoon in Cerripampa, and the ghost child of the Chugual River. Also the story of Don Miguel Sánchez, who sewed a rag tail to the patron saint's devil!",
    "comer": "I recommend eating a delicious fried guinea pig, stewed guinea pig, or crispy pork at Dona Mili Country Restaurant, or enjoying artisanal pizzas with countryside herbs at Delicia Pizzeria.",
    "dormir": "You can stay with a family atmosphere and hot water at La Huaca Guesthouse (S/ 45 per night) or at the comfortable Rossy Hotel. You can also visit The Sun Country Guesthouse.",
    "machu": "The 'Machu Picchu of Coina' is located in the Mollepata sector. They are imposing giant stone formations that simulate Inca architecture, with fabulous viewpoints overlooking the Alto Chicama river."
  }
};

// Estado activo de los servicios locales
let activeServiceSubTab = 'hosp';

// Estado del carrito de compras
let cart = JSON.parse(localStorage.getItem('coina_cart')) || [];
let syncQueue = JSON.parse(localStorage.getItem('coina_sync_queue')) || [];

// Registro del Service Worker para PWA
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .then(reg => console.log('Service Worker registrado con éxito', reg.scope))
      .catch(err => console.error('Error al registrar Service Worker', err));
  });
}


// ==========================================
// SECCIÓN DEL PASAPORTE DIGITAL DE COSECHA (GAMIFICACIÓN OFFLINE)
// ==========================================
let collectedStamps = JSON.parse(localStorage.getItem('coina_stamps')) || [];

// Lista de sellos válidos
const validStamps = {
  "limas": { es: "Huerto de Limas Dulces", en: "Sweet Lime Orchards", icon: "🍋" },
  "huaca": { es: "Hospedaje La Huaca", en: "La Huaca Guesthouse", icon: "🏠" },
  "mili": { es: "Recreo Doña Mili", en: "Dona Mili Restaurant", icon: "🍲" },
  "machu": { es: "Machu Picchu Coinino", en: "Machu Picchu of Coina", icon: "⛰️" },
  "taller": { es: "Taller de Vinos Artesanales", en: "Artisanal Wine Workshop", icon: "🍷" }
};

function initPassport() {
  checkUrlForStamps();
  renderStamps();
}

function checkUrlForStamps() {
  const urlParams = new URLSearchParams(window.location.search);
  const stampParam = urlParams.get('sello') || urlParams.get('stamp');
  
  if (stampParam && validStamps[stampParam]) {
    if (!collectedStamps.includes(stampParam)) {
      collectedStamps.push(stampParam);
      localStorage.setItem('coina_stamps', JSON.stringify(collectedStamps));
      
      const stampName = validStamps[stampParam][currentLanguage];
      const stampIcon = validStamps[stampParam].icon;
      
      // Mostrar notificación de logro
      showToast(`${translations[currentLanguage]["toast_stamp_earned"]} ${stampIcon} ${stampName}!`);
      
      // Limi felicita de viva voz (Accesibilidad)
      setTimeout(() => {
        const congratsMsg = currentLanguage === 'es'
          ? `¡Excelente viajero! Has desbloqueado el sello del ${stampName}. ¡Sigue explorando el Paraíso del Alto Chicama!`
          : `Excellent traveler! You have unlocked the ${stampName} stamp. Keep exploring the Alto Chicama Paradise!`;
        speakLimi(congratsMsg);
      }, 1500);
      
      // Verificar si completó todos
      if (collectedStamps.length === Object.keys(validStamps).length) {
        setTimeout(() => {
          showToast(translations[currentLanguage]["toast_passport_complete"]);
          speakLimi(translations[currentLanguage]["toast_passport_complete"]);
        }, 5000);
      }
    }
    
    // Limpiar los parámetros de la URL de forma elegante sin recargar la página (Offline-safe)
    const newUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;
    window.history.replaceState({ path: newUrl }, '', newUrl);
  }
}

function renderStamps() {
  // Resetear estados visuales
  Object.keys(validStamps).forEach(key => {
    const stampEl = document.getElementById(`stamp-${key}`);
    if (stampEl) {
      if (collectedStamps.includes(key)) {
        stampEl.classList.remove('opacity-30', 'grayscale');
        stampEl.classList.add('opacity-100', 'scale-110');
      } else {
        stampEl.classList.add('opacity-30', 'grayscale');
        stampEl.classList.remove('opacity-100', 'scale-110');
      }
    }
  });

  // Actualizar el Badge contador
  const badge = document.getElementById('passport-badge');
  if (badge) {
    const total = Object.keys(validStamps).length;
    badge.textContent = `${collectedStamps.length} / ${total} ${currentLanguage === 'es' ? 'Sellos' : 'Stamps'}`;
    if (collectedStamps.length === total) {
      badge.className = "bg-yellow-100 text-yellow-800 text-[10px] font-black px-2.5 py-1 rounded-full border border-yellow-300 uppercase tracking-wide animate-pulse";
      badge.textContent = currentLanguage === 'es' ? "🏆 ¡Completado!" : "🏆 Completed!";
    } else {
      badge.className = "bg-emerald-50 text-emerald-800 text-[10px] font-black px-2.5 py-1 rounded-full border border-emerald-100 uppercase tracking-wide";
    }
  }
}

// Inicialización de la aplicación
document.addEventListener('DOMContentLoaded', () => {
  setupNavigation();
  checkConnectionStatus();
  applyLanguage();
  loadData();
  renderCart();
  setupLimi();

  // Escuchar cambios de conectividad
  window.addEventListener('online', handleOnline);
  window.addEventListener('offline', handleOffline);
});

// Cambiar de idioma
window.setLanguage = function(lang) {
  currentLanguage = lang;
  localStorage.setItem('coina_lang', lang);
  applyLanguage();
  renderAttractions();
  renderServices();
  renderProducts();
  setupLimiWelcome();
  renderLimiQuickQueries();
  renderStamps();
}

// Aplicar traducciones a los elementos DOM con atributo data-i18n
function applyLanguage() {
  // Botones de toggle activos
  const btnEs = document.getElementById('btn-lang-es');
  const btnEn = document.getElementById('btn-lang-en');
  if (currentLanguage === 'es') {
    btnEs.className = "text-[10px] font-bold px-2 py-1 rounded transition bg-emerald-700 text-white";
    btnEn.className = "text-[10px] font-bold px-2 py-1 rounded transition text-gray-600";
    document.documentElement.lang = "es";
  } else {
    btnEn.className = "text-[10px] font-bold px-2 py-1 rounded transition bg-emerald-700 text-white";
    btnEs.className = "text-[10px] font-bold px-2 py-1 rounded transition text-gray-600";
    document.documentElement.lang = "en";
  }

  // Traducción de textos HTML estáticos
  document.querySelectorAll('[data-i18n]').forEach(elem => {
    const key = elem.getAttribute('data-i18n');
    if (translations[currentLanguage][key]) {
      elem.innerHTML = translations[currentLanguage][key];
    }
  });

  // Traducción de placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(elem => {
    const key = elem.getAttribute('data-i18n-placeholder');
    if (translations[currentLanguage][key]) {
      elem.placeholder = translations[currentLanguage][key];
    }
  });

  // Traducción de aria-labels para accesibilidad
  document.querySelectorAll('[data-i18n-aria]').forEach(elem => {
    const key = elem.getAttribute('data-i18n-aria');
    if (translations[currentLanguage][key]) {
      elem.setAttribute('aria-label', translations[currentLanguage][key]);
    }
  });
}

// Monitoreo de Conectividad
function checkConnectionStatus() {
  const statusIndicator = document.getElementById('conn-status');
  if (navigator.onLine) {
    statusIndicator.innerHTML = '<span class="flex h-3 w-3 relative"><span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span><span class="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span></span><span class="text-[10px] text-emerald-700 font-bold ml-1.5 uppercase tracking-wide">' + (currentLanguage === 'es' ? 'En Línea' : 'Online') + '</span>';
    processSyncQueue();
  } else {
    statusIndicator.innerHTML = '<span class="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span><span class="text-[10px] text-amber-700 font-bold ml-1.5 uppercase tracking-wide">' + (currentLanguage === 'es' ? 'Offline' : 'Offline') + '</span>';
  }
  updateLimiBadge();
  updateMapVisibility(); // Sincronizar visibilidad de Google Maps automáticamente
}

function handleOnline() {
  checkConnectionStatus();
  showToast(translations[currentLanguage]["toast_online"]);
}

function handleOffline() {
  checkConnectionStatus();
  showToast(translations[currentLanguage]["toast_offline"]);
}

// Navegación de Pestañas (SPA)
function setupNavigation() {
  const tabs = document.querySelectorAll('[data-tab]');
  tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = tab.getAttribute('data-tab');
      
      // Ocultar todas las pantallas
      document.querySelectorAll('.app-screen').forEach(screen => {
        screen.classList.add('hidden');
      });
      
      // Mostrar pantalla seleccionada
      document.getElementById(targetId).classList.remove('hidden');
      
      // Cambiar estilos activos de la barra de navegación
      tabs.forEach(t => {
        t.classList.remove('text-emerald-600', 'border-emerald-600', 'font-semibold');
        t.classList.add('text-gray-500');
      });
      tab.classList.add('text-emerald-600', 'border-emerald-600', 'font-semibold');
      tab.classList.remove('text-gray-500');
    });
  });
}

// Cargar Base de Datos
async function loadData() {
  try {
    const response = await fetch('./data.json');
    if (response.ok) {
      const data = await response.json();
      localDatabase = data;
      localStorage.setItem('coina_offline_db_bilingual', JSON.stringify(data));
    } else {
      throw new Error("No se pudo descargar data.json");
    }
  } catch (err) {
    console.log("Cargando base de datos bilingüe desde caché offline...");
    const cachedDb = localStorage.getItem('coina_offline_db_bilingual');
    if (cachedDb) {
      localDatabase = JSON.parse(cachedDb);
    }
  }
  
  renderAttractions();
  renderServices();
  renderProducts();
  updateMapVisibility(); // Sincronizar mapa de Google al inicio
}

// Renderizar Atractivos
function renderAttractions() {
  const container = document.getElementById('attractions-container');
  if (!container) return;
  
  const items = localDatabase[currentLanguage]?.attractions || [];
  if (items.length === 0) {
    container.innerHTML = `<p class="text-gray-500 text-sm">${currentLanguage === 'es' ? 'Cargando...' : 'Loading...'}</p>`;
    return;
  }
  
  container.innerHTML = items.map(att => `
    <div class="bg-white border border-gray-100 rounded-3xl shadow-sm overflow-hidden p-5 transition hover:shadow-md">
      <div class="flex items-center justify-between mb-2">
        <span class="text-[10px] font-bold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 uppercase tracking-wide">${att.category}</span>
        <span class="text-xs text-gray-500 flex items-center">⛰️ ${att.altitude_meters} msnm</span>
      </div>
      <h3 class="font-display font-bold text-gray-800 text-lg mb-1">${att.name}</h3>
      <p class="text-[11px] text-gray-500 mb-3 font-semibold uppercase tracking-wider">${translations[currentLanguage]["lbl_difficulty"]}: ${att.difficulty} | Sector: ${att.sector}</p>
      <p class="text-xs text-gray-600 mb-4 leading-relaxed">${att.description}</p>
      <div class="bg-gray-50 p-3 rounded-2xl border border-gray-100/50 mb-4 text-xs text-gray-700">
        <p><strong>🚶 ${translations[currentLanguage]["lbl_accessibility"]}:</strong> ${att.accessibility}</p>
      </div>
      <button onclick="showRouteDetails('${att.id}')" class="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-3 px-4 rounded-2xl text-xs transition shadow-md focus:ring-2 focus:ring-emerald-500 focus:outline-none" aria-label="${translations[currentLanguage]["btn_route"]} ${att.name}">
        ${translations[currentLanguage]["btn_route"]}
      </button>
    </div>
  `).join('');
}

// Conmutar visibilidad y cargar Google Maps Iframe dinámico sin API keys costosas
window.updateMapVisibility = function() {
  const onlineMap = document.getElementById('online-map-container');
  const offlineMap = document.getElementById('offline-map-container');
  const iframe = document.getElementById('google-maps-iframe');
  
  if (!onlineMap || !offlineMap) return;
  
  if (navigator.onLine) {
    onlineMap.classList.remove('hidden');
    offlineMap.classList.add('hidden');
    
    // Si el iframe está vacío, cargar mapa base por defecto de Coina
    if (!iframe.src || iframe.src === window.location.href) {
      iframe.src = "https://maps.google.com/maps?q=Coina,%20Otuzco,%20Peru&t=&z=14&ie=UTF8&iwloc=&output=embed";
    }
  } else {
    onlineMap.classList.add('hidden');
    offlineMap.classList.remove('hidden');
  }
}

// Cargar la atracción específica en el iframe si está en línea, o dar el fallback descriptivo offline
window.showRouteDetails = function(id) {
  const items = localDatabase[currentLanguage]?.attractions || [];
  const att = items.find(a => a.id === id);
  if (att) {
    if (navigator.onLine) {
      const iframe = document.getElementById('google-maps-iframe');
      if (iframe) {
        // Generar URL de búsqueda de Google Maps Embed
        const searchQuery = encodeURIComponent(`${att.name}, Coina, Otuzco, Peru`);
        iframe.src = `https://maps.google.com/maps?q=${searchQuery}&t=&z=16&ie=UTF8&iwloc=&output=embed`;
        showToast(currentLanguage === 'es' ? `Cargando mapa en vivo de ${att.name}...` : `Loading live map of ${att.name}...`);
      }
    } else {
      showToast(`${att.name}: ${att.accessibility}`);
    }
  }
}

// Switch entre Alojamientos y Restaurantes
window.switchSubService = function(type) {
  activeServiceSubTab = type;
  const btnHosp = document.getElementById('btn-sub-hosp');
  const btnRest = document.getElementById('btn-sub-rest');
  
  if (type === 'hosp') {
    btnHosp.className = "bg-emerald-700 text-white text-xs font-bold px-4 py-2 rounded-xl transition";
    btnRest.className = "bg-white border border-gray-100 text-gray-600 text-xs font-bold px-4 py-2 rounded-xl transition";
  } else {
    btnRest.className = "bg-emerald-700 text-white text-xs font-bold px-4 py-2 rounded-xl transition";
    btnHosp.className = "bg-white border border-gray-100 text-gray-600 text-xs font-bold px-4 py-2 rounded-xl transition";
  }
  
  renderServices();
}

// Renderizar Servicios
function renderServices() {
  const container = document.getElementById('services-container');
  if (!container) return;
  
  if (activeServiceSubTab === 'hosp') {
    const items = localDatabase[currentLanguage]?.accommodations || [];
    container.innerHTML = items.map(hosp => `
      <div class="bg-white border border-gray-100 rounded-3xl shadow-sm p-5 transition hover:shadow-md">
        <div class="flex items-center justify-between mb-2">
          <span class="text-[10px] font-bold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 uppercase tracking-wide">${hosp.type}</span>
          <span class="text-xs text-amber-500 font-bold flex items-center gap-1">⭐ ${hosp.rating_avg}</span>
        </div>
        <h3 class="font-display font-bold text-gray-800 text-base mb-1">${hosp.name}</h3>
        <p class="text-xs text-emerald-700 font-bold mb-3">${translations[currentLanguage]["lbl_price"]}: S/ ${hosp.price_per_night_pen.toFixed(2)}</p>
        
        <p class="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1.5">${translations[currentLanguage]["lbl_amenities"]}</p>
        <div class="flex flex-wrap gap-1 mb-4">
          ${hosp.amenities.map(a => `<span class="bg-gray-50 border border-gray-100/50 rounded-lg px-2 py-1 text-[9px] text-gray-600 font-medium">${a}</span>`).join('')}
        </div>
        
        <a href="https://wa.me/${hosp.contact.replace(/\s/g, '')}?text=Hola,%20deseo%20reservar" target="_blank" class="w-full text-center block bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-3 px-4 rounded-2xl text-xs transition shadow-md focus:ring-2 focus:ring-emerald-500 focus:outline-none">
          ${translations[currentLanguage]["btn_reserve"]}
        </a>
      </div>
    `).join('');
  } else {
    const items = localDatabase[currentLanguage]?.restaurants || [];
    container.innerHTML = items.map(rest => `
      <div class="bg-white border border-gray-100 rounded-3xl shadow-sm p-5 transition hover:shadow-md">
        <div class="flex items-center justify-between mb-2">
          <span class="text-[10px] font-bold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 uppercase tracking-wide">${rest.specialty}</span>
          <span class="text-xs text-amber-500 font-bold flex items-center gap-1">⭐ ${rest.rating}</span>
        </div>
        <h3 class="font-display font-bold text-gray-800 text-base mb-1">${rest.name}</h3>
        <p class="text-xs text-gray-500 mb-3">📍 ${rest.address}</p>
        <div class="bg-emerald-50/50 p-3 rounded-2xl border border-emerald-100/30 text-xs text-emerald-800 mb-3">
          <p><strong>🍳 ${translations[currentLanguage]["lbl_dish"]}:</strong> ${rest.featured_dish}</p>
        </div>
      </div>
    `).join('');
  }
}

// Renderizar Productos
function renderProducts() {
  const container = document.getElementById('products-container');
  if (!container) return;
  
  const items = localDatabase[currentLanguage]?.products || [];
  container.innerHTML = items.map(prod => `
    <div class="bg-white border border-gray-100 rounded-3xl shadow-sm overflow-hidden p-5 flex flex-col justify-between transition hover:shadow-md">
      <div>
        <div class="flex items-center justify-between mb-2">
          <span class="text-[10px] font-bold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 uppercase tracking-wide">${prod.unit}</span>
          <span class="text-sm font-black text-gray-800">S/ ${prod.price_pen.toFixed(2)}</span>
        </div>
        <h3 class="font-display font-bold text-gray-800 text-sm mb-1.5">${prod.name}</h3>
        <p class="text-xs text-gray-600 leading-relaxed mb-4">${prod.description}</p>
      </div>
      
      <button onclick="addToCart('${prod.id}')" class="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-2.5 px-4 rounded-xl text-xs transition shadow-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none">
        ${translations[currentLanguage]["btn_add_cart"]}
      </button>
    </div>
  `).join('');
}

// Lógica de Carrito de Compras
window.addToCart = function(id) {
  const items = localDatabase[currentLanguage]?.products || [];
  const prod = items.find(p => p.id === id);
  if (prod) {
    const existing = cart.find(item => item.id === id);
    if (existing) {
      existing.qty++;
    } else {
      cart.push({ id: prod.id, name: prod.name, price: prod.price_pen, qty: 1 });
    }
    localStorage.setItem('coina_cart', JSON.stringify(cart));
    renderCart();
    showToast(translations[currentLanguage]["toast_added"]);
  }
}

function renderCart() {
  const preview = document.getElementById('cart-preview');
  const details = document.getElementById('cart-details');
  if (!preview) return;
  
  if (cart.length === 0) {
    preview.classList.add('hidden');
    return;
  }
  
  preview.classList.remove('hidden');
  const totalQty = cart.reduce((acc, item) => acc + item.qty, 0);
  const totalVal = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);
  
  details.innerText = `${totalQty} Items - S/ ${totalVal.toFixed(2)}`;
}

window.checkout = function() {
  if (navigator.onLine) {
    showToast(translations[currentLanguage]["toast_checkout"]);
    cart = [];
    localStorage.removeItem('coina_cart');
    renderCart();
  } else {
    syncQueue.push({ order: cart, timestamp: Date.now() });
    localStorage.setItem('coina_sync_queue', JSON.stringify(syncQueue));
    showToast(translations[currentLanguage]["toast_checkout_offline"]);
    cart = [];
    localStorage.removeItem('coina_cart');
    renderCart();
  }
}

function processSyncQueue() {
  if (syncQueue.length === 0) return;
  console.log("Sincronizando transacciones offline encoladas...");
  syncQueue = [];
  localStorage.removeItem('coina_sync_queue');
}

// ==========================================
// SECCIÓN DEL ASISTENTE VIRTUAL "LIMI" (ACCESIBLE / BILINGÜE)
// ==========================================
function setupLimi() {
  setupLimiWelcome();
  renderLimiQuickQueries();
  
  const sendBtn = document.getElementById('limi-send-btn');
  const inputEl = document.getElementById('limi-input');
  
  if (sendBtn && inputEl) {
    sendBtn.onclick = () => handleLimiSend();
    inputEl.onkeypress = (e) => {
      if (e.key === 'Enter') handleLimiSend();
    };
  }
  
  // Agregar botón de configuración (engranaje) dinámicamente al h2 de Limi para mantener accesibilidad y no alterar HTML
  const limiHeader = document.querySelector('#limi h2');
  if (limiHeader && !document.getElementById('btn-config-ia')) {
    const gearBtn = document.createElement('button');
    gearBtn.id = 'btn-config-ia';
    gearBtn.className = 'ml-1.5 text-gray-400 hover:text-emerald-700 transition focus:outline-none focus:ring-1 focus:ring-emerald-500 rounded p-0.5';
    gearBtn.innerHTML = '⚙️';
    gearBtn.title = currentLanguage === 'es' ? "Configurar IA Online" : "Configure Online AI";
    gearBtn.onclick = () => configureApiKey();
    limiHeader.appendChild(gearBtn);
  }
  
  updateLimiBadge();
}

// Configurar API Key de Gemini de manera segura y local (sin exponerla en GitHub)
window.configureApiKey = function() {
  const currentKey = localStorage.getItem('coina_gemini_key') || '';
  const promptMessage = currentLanguage === 'es'
    ? "Ingresa tu API Key de Google Gemini para activar respuestas dinámicas inteligentes (Modo Online):\n\n(Deja vacío para desactivar y usar solo el Modo Offline)"
    : "Enter your Google Gemini API Key to enable dynamic smart answers (Online Mode):\n\n(Leave blank to disable and use Offline Mode only)";
    
  const newKey = prompt(promptMessage, currentKey);
  if (newKey !== null) {
    const trimmedKey = newKey.trim();
    if (trimmedKey) {
      localStorage.setItem('coina_gemini_key', trimmedKey);
      showToast(currentLanguage === 'es' ? "¡IA Online activada con éxito! 🚀" : "Online AI successfully enabled! 🚀");
    } else {
      localStorage.removeItem('coina_gemini_key');
      showToast(currentLanguage === 'es' ? "Modo Offline restablecido" : "Offline Mode restored");
    }
    updateLimiBadge();
  }
}

// Actualizar visualmente el estado del asistente (Offline AI / Online AI)
window.updateLimiBadge = function() {
  const badge = document.querySelector('#limi h2 span');
  const hasKey = !!localStorage.getItem('coina_gemini_key');
  if (badge) {
    if (navigator.onLine && hasKey) {
      badge.className = "bg-blue-100 text-blue-800 text-[8px] font-black px-1.5 py-0.5 rounded uppercase tracking-wide";
      badge.textContent = "Online AI";
    } else {
      badge.className = "bg-emerald-100 text-emerald-800 text-[8px] font-black px-1.5 py-0.5 rounded uppercase tracking-wide";
      badge.textContent = "Offline AI";
    }
  }
}

function setupLimiWelcome() {
  const chatBox = document.getElementById('limi-chat-box');
  if (chatBox) {
    chatBox.innerHTML = `
      <div class="flex flex-col mb-3 max-w-[85%] mr-auto items-start">
        <div class="p-3.5 rounded-2xl text-sm leading-relaxed bg-gray-100 text-gray-800 rounded-tl-none">
          ${translations[currentLanguage]["limi_welcome"]}
        </div>
      </div>
    `;
  }
}

function renderLimiQuickQueries() {
  const container = document.getElementById('quick-queries');
  if (!container) return;
  
  const queries = {
    "es": [
      { key: "lima", label: "🍋 Lima de Coina" },
      { key: "llegar", label: "🚌 Cómo llegar" },
      { key: "clima", label: "☀️ Clima y Ropa" },
      { key: "machu", label: "⛰️ Machu Picchu" },
      { key: "fiesta", label: "🎉 Fiesta Patronal" },
      { key: "leyendas", label: "📖 Leyendas" }
    ],
    "en": [
      { key: "lima", label: "🍋 Sweet Lime" },
      { key: "llegar", label: "🚌 How to get there" },
      { key: "clima", label: "☀️ Climate & Clothes" },
      { key: "machu", label: "⛰️ Machu Picchu" },
      { key: "fiesta", label: "🎉 Patronal Feast" },
      { key: "leyendas", label: "📖 Legends" }
    ]
  };
  
  container.innerHTML = queries[currentLanguage].map(q => `
    <button onclick="sendQuickQuery('${q.key}', '${q.label}')" class="text-[10px] bg-white border border-gray-100 hover:border-emerald-200 rounded-full px-3 py-1.5 font-semibold text-gray-700 shadow-sm transition">
      ${q.label}
    </button>
  `).join('');
}

window.sendQuickQuery = function(key, label) {
  addChatMessage(label, true);
  showTypingIndicator();
  
  setTimeout(() => {
    removeTypingIndicator();
    const answer = limiBrain[currentLanguage][key] || (currentLanguage === 'es' ? "No poseo esa información offline." : "I don't have that information offline.");
    addChatMessage(answer, false);
  }, 700);
}

async function handleLimiSend() {
  const inputEl = document.getElementById('limi-input');
  const text = inputEl.value.trim();
  if (!text) return;
  
  addChatMessage(text, true);
  inputEl.value = '';
  showTypingIndicator();
  
  const cleanQuery = text.toLowerCase();
  
  // 1. INTENTO DE MODO ONLINE (Si hay internet y se configuró una API Key de Gemini de Google)
  const apiKey = localStorage.getItem('coina_gemini_key');
  if (navigator.onLine && apiKey) {
    try {
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: `Eres "Limi", el carismático asistente virtual de turismo del pueblo de Coina (Otuzco, La Libertad, Perú). 
              Estás respondiendo de manera ONLINE en tiempo real utilizando Inteligencia Artificial.
              Idioma seleccionado del usuario: ${currentLanguage}.
              Usa los siguientes datos verdaderos de Coina para responder con precisión y sin inventar datos falsos:
              - Altitud: 1942 msnm. Clima seco, soleado y medicinal (sanatorio natural promovido históricamente por el Dr. Oswaldo Kauffman).
              - Coina es la Capital de la Lima Dulce (Ordenanza Regional). Produce 7,500 toneladas anuales en sus 46 hectáreas de cultivos.
              - Atractivos: El "Machu Picchu Coinino" (en Mollepata), El Mirador de Coina, Río Alto Chicama (Río Grande), Recreo Luna Park, La Casa Blanca, La Hostería (junto al puesto de salud), Estadio Municipal techado.
              - Servicios: Hospedaje La Huaca (S/ 45/noche), Hotel Rossy (con TV), Recreo Doña Mili (cuy frito, chancho crujiente), Pizzería Delicia (pizzas artesanales).
              - Transporte: Latino Express y Huaca Express desde Trujillo (4-5 horas). Combi del Sr. José Ponce desde Otuzco (lunes, miércoles y viernes a las 11:00 AM).
              - Cultura/Leyendas: Las Aves de La Fundición (tres mujeres mágicas), la Laguna Encantadora de Inea (en Cerripampa), el niño fantasma del río Chugual, San Miguel Arcángel (Don Miguel Sánchez le cosió una cola de trapo al diablo del patrón).
              
              Pregunta del usuario: "${text}".
              Responde de forma breve, amigable, usando emojis de lima 🍋 o montaña ⛰️ y manteniéndote siempre en el rol de Limi.`
            }]
          }]
        })
      });
      
      if (response.ok) {
        const data = await response.json();
        const reply = data.candidates[0].content.parts[0].text;
        removeTypingIndicator();
        addChatMessage(reply, false);
        return; // Salto exitoso, no requerimos fallback offline
      } else {
        console.warn("Fallo en la llamada a la API de Gemini, utilizando fallback offline...");
      }
    } catch (err) {
      console.error("Error al conectar con Gemini:", err);
    }
  }

  // 2. MODO OFFLINE (Respaldo local por expresiones regulares)
  setTimeout(() => {
    removeTypingIndicator();
    let reply = "";
    
    if (cleanQuery.includes('lima') || cleanQuery.includes('lime')) {
      reply = limiBrain[currentLanguage]["lima"];
    } else if (cleanQuery.includes('llegar') || cleanQuery.includes('how') || cleanQuery.includes('arrive') || cleanQuery.includes('como')) {
      reply = limiBrain[currentLanguage]["llegar"];
    } else if (cleanQuery.includes('clima') || cleanQuery.includes('ropa') || cleanQuery.includes('weather') || cleanQuery.includes('clothes')) {
      reply = limiBrain[currentLanguage]["clima"];
    } else if (cleanQuery.includes('machu') || cleanQuery.includes('piedra') || cleanQuery.includes('stone')) {
      reply = limiBrain[currentLanguage]["machu"];
    } else if (cleanQuery.includes('fiesta') || cleanQuery.includes('san miguel') || cleanQuery.includes('july') || cleanQuery.includes('julio')) {
      reply = limiBrain[currentLanguage]["fiesta"];
    } else if (cleanQuery.includes('leyenda') || cleanQuery.includes('mito') || cleanQuery.includes('legend') || cleanQuery.includes('myth')) {
      reply = limiBrain[currentLanguage]["leyendas"];
    } else if (cleanQuery.includes('comer') || cleanQuery.includes('cuy') || cleanQuery.includes('restaurante') || cleanQuery.includes('food') || cleanQuery.includes('eat')) {
      reply = limiBrain[currentLanguage]["comer"];
    } else if (cleanQuery.includes('dormir') || cleanQuery.includes('hospedaje') || cleanQuery.includes('hotel') || cleanQuery.includes('stay') || cleanQuery.includes('sleep')) {
      reply = limiBrain[currentLanguage]["dormir"];
    } else {
      reply = currentLanguage === 'es' 
        ? "Interesante pregunta sobre Coina. En modo sin conexión, puedo guiarte con las opciones preestablecidas de transporte, alojamiento, comida típica, clima y leyendas. ¡Por favor selecciona alguna de ellas o configura mi IA con conexión pulsando el engranaje ⚙️!"
        : "Interesting question about Coina. In offline mode, I can help you with preset options for transport, lodging, typical food, weather, and legends. Please select one of them or configure my Online AI using the gear ⚙️ icon!";
    }
    
    addChatMessage(reply, false);
  }, 800);
}

function addChatMessage(text, isUser) {
  const chatBox = document.getElementById('limi-chat-box');
  if (!chatBox) return;
  
  const msg = document.createElement('div');
  if (isUser) {
    msg.className = "flex flex-col mb-3 max-w-[85%] ml-auto items-end";
    msg.innerHTML = `
      <div class="p-3.5 rounded-2xl text-xs bg-emerald-700 text-white rounded-tr-none font-medium leading-relaxed">
        ${text}
      </div>
    `;
  } else {
    msg.className = "flex flex-col mb-3 max-w-[85%] mr-auto items-start";
    msg.innerHTML = `
      <div class="p-3.5 rounded-2xl text-xs bg-gray-100 text-gray-800 rounded-tl-none leading-relaxed">
        ${text}
        <button onclick="speakLimi(\`${text.replace(/"/g, '&quot;')}\`)" class="mt-2 block bg-white text-gray-700 font-bold px-2.5 py-1.5 rounded-lg border border-gray-200 text-[10px] hover:bg-gray-50 focus:ring-2 focus:ring-emerald-500 focus:outline-none flex items-center gap-1">
          ${translations[currentLanguage]["btn_listen"]} 🔊
        </button>
      </div>
    `;
  }
  
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function showTypingIndicator() {
  const chatBox = document.getElementById('limi-chat-box');
  if (!chatBox) return;
  
  const ind = document.createElement('div');
  ind.id = 'limi-typing';
  ind.className = "flex items-center gap-1.5 bg-gray-100 p-3 rounded-2xl mr-auto max-w-[50px] mb-3";
  ind.innerHTML = `
    <span class="h-1.5 w-1.5 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0s"></span>
    <span class="h-1.5 w-1.5 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0.2s"></span>
    <span class="h-1.5 w-1.5 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0.4s"></span>
  `;
  chatBox.appendChild(ind);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function removeTypingIndicator() {
  const ind = document.getElementById('limi-typing');
  if (ind) ind.remove();
}

// SÍNTESIS DE VOZ BILINGÜE (ACCESIBLE / OFFLINE)
window.speakLimi = function(textToSpeak) {
  if (!('speechSynthesis' in window)) {
    alert(currentLanguage === 'es' ? "Tu dispositivo no soporta síntesis de voz." : "Your device does not support text-to-speech.");
    return;
  }
  
  window.speechSynthesis.cancel();
  
  const div = document.createElement('div');
  div.innerHTML = textToSpeak;
  let cleanText = div.textContent || div.innerText || "";
  cleanText = cleanText.replace(/🔊/g, '').replace(/🔊 Escuchar/g, '').replace(/🔊 Listen/g, '').trim();

  const utterance = new SpeechSynthesisUtterance(cleanText);
  utterance.lang = currentLanguage === 'es' ? 'es-PE' : 'en-US';
  utterance.rate = 1.0;
  window.speechSynthesis.speak(utterance);
}

// Mensaje flotante tipo Toast
function showToast(message) {
  const toast = document.createElement('div');
  toast.className = "fixed bottom-20 left-1/2 -translate-x-1/2 bg-gray-900/95 text-white text-xs font-semibold py-2.5 px-4 rounded-full shadow-lg z-50 text-center animate-in fade-in slide-in-from-bottom duration-300";
  toast.innerText = message;
  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.remove();
  }, 3500);
}
