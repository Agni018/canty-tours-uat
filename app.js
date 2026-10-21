'use strict';
const tours = [
  {
    "id": "kerala-waterfalls-hills",
    "name": "Waterfalls, Tea Country and Periyar",
    "destination": "Kerala",
    "region": "Kerala",
    "style": "Family",
    "styles": [
      "Mountains",
      "Culture & heritage",
      "Honeymoon"
    ],
    "days": 6,
    "nights": 5,
    "imageDestination": "athirapilly",
    "alt": "Athirappilly waterfalls cascading over the rocks amid forest",
    "places": [
      "Kochi",
      "Athirapilly",
      "Munnar",
      "Thekkady",
      "Alappuzha",
      "Houseboat"
    ],
    "route": "Kochi → Athirapilly → Kochi → Munnar → Thekkady → Alappuzha → Kochi",
    "description": "Link waterfalls and hill country with a final night afloat.",
    "pace": "Several transfer days between sightseeing stops",
    "ideal": "Families, couples & first-time visitors",
    "highlights": "Waterfalls, Tea country, Periyar, Houseboat",
    "itinerary": [
      "Visit Athirapilly and Vazhachal waterfalls, returning to Kochi overnight.",
      "Continue to Munnar via Cheeyappara, Valara, tea estates and spice gardens.",
      "Explore Eravikulam, the Tea Museum, Mattupetty, Echo Point, Kundala, Pothamedu and botanical gardens.",
      "Travel to Thekkady, with optional Periyar boating and separately paid evening experiences.",
      "Reach Alappuzha around noon for a houseboat cruise and anchored overnight stay.",
      "Finish the morning cruise, visit Alappuzha beach and return to Kochi, adding sightseeing if time permits."
    ],
    "notes": "Periyar boating and evening activities are optional and cost extra. Check seasonal park access and attraction opening days.",
    "source": {
      "title": "6 Days 5 Nights Athirapilly Munnar Thekkady Alleppey",
      "url": "https://www.paradise-kerala.com/tourpackage/Kerala-Tour-Packages/6days-5nights-Athirapilly-vazhachal-Cochin-Munnar-Thekkady-Allep/",
      "reviewed": "2026-10-19"
    }
  },
  {
    "id": "kerala-houseboat",
    "name": "An Overnight on Alleppey's Waterways",
    "destination": "Kerala",
    "region": "Kerala",
    "style": "Slow escapes",
    "styles": [
      "Honeymoon",
      "Family"
    ],
    "days": 2,
    "nights": 1,
    "imageDestination": "houseboat",
    "alt": "A traditional Kerala houseboat on the backwaters near Alleppey",
    "places": [
      "Kochi",
      "Alappuzha",
      "Houseboat"
    ],
    "route": "Kochi → Alappuzha → Kochi",
    "description": "A short escape built around a night on the water.",
    "pace": "One overnight stay with a morning return cruise",
    "ideal": "Couples & short-break travellers",
    "highlights": "Backwater cruising, Overnight houseboat, Alleppey Beach",
    "itinerary": [
      "Travel from Kochi to Alappuzha for noon boarding, an afternoon backwater cruise and a night aboard the anchored houseboat.",
      "Take a morning cruise before 9 am checkout, visit Alappuzha Beach, then return to Kochi, with heritage sightseeing or shopping if departure time allows."
    ],
    "notes": "The boat anchors overnight; this is not continuous cruising. Kochi sightseeing depends on departure time.",
    "source": {
      "title": "2 Days Cochin Alleppey Houseboat Tour",
      "url": "https://www.paradise-kerala.com/tourpackage/Kerala-Tour-Packages/2days-1night-weekend-in-houseboat/",
      "reviewed": "2026-10-19"
    }
  },
  {
    "id": "kerala-wayanad",
    "name": "Wayanad Caves, Lakes & Forest Trails",
    "destination": "Kerala",
    "region": "Kerala",
    "style": "Mountains",
    "styles": [
      "Family",
      "Slow escapes"
    ],
    "days": 4,
    "nights": 3,
    "imageDestination": "wayanad",
    "alt": "Lush green mountains in Wayanad",
    "places": [
      "Wayanad",
      "Kozhikode"
    ],
    "route": "Kozhikode → Wayanad → Kozhikode",
    "description": "Use one hill-country base for nature and local sightseeing.",
    "pace": "Three nights in one base with excursions",
    "ideal": "Nature lovers & small groups",
    "highlights": "Edakkal Caves, Soochipara Falls, Banasura Sagar Dam",
    "itinerary": [
      "Travel from Kozhikode through Thamarassery Ghat to Lakkidi, with the afternoon free around your stay.",
      "Spend the day among Edakkal Caves, Soochipara Falls and Pookode Lake before returning to base.",
      "Visit Banasura Sagar Dam and Lakkidi Viewpoint, then return for a forest and coffee-plantation walk if arranged.",
      "Allow time for early birdwatching before leaving Wayanad for Kozhikode."
    ],
    "notes": "Guided walks, birdwatching and plantation visits depend on arrangements at the selected stay.",
    "source": {
      "title": "4 Days 3 Nights Calicut–Wayanad–Calicut",
      "url": "https://www.paradise-kerala.com/tourpackage/Cgh-earth-exclusive-packages/4days-3nights-calicut-wayanad-calicut/",
      "reviewed": "2026-10-19"
    }
  },
  {
    "id": "kerala-kumarakom",
    "name": "Kochi Heritage and Kumarakom Islands",
    "destination": "Kerala",
    "region": "Kerala",
    "style": "Family",
    "styles": [
      "Slow escapes",
      "Culture & heritage"
    ],
    "days": 3,
    "nights": 2,
    "imageDestination": "kumarakom",
    "alt": "A broad view of the Kumarakom backwaters near the bird sanctuary",
    "places": [
      "Kochi",
      "Kumarakom"
    ],
    "route": "Kochi → Kumarakom → Kochi",
    "description": "Pair city heritage with a quieter day by the backwaters.",
    "pace": "City sightseeing followed by a backwater stay",
    "ideal": "Families & culture lovers",
    "highlights": "Fort Kochi, Pathiramanal Island, Backwater sunset",
    "itinerary": [
      "Explore Fort Kochi's churches, fishing nets and Navy Museum, continue to Mattancherry Palace and the synagogue, then enjoy Marine Drive and boating.",
      "Continue to Kumarakom for village exploration, a boat-accessed visit to Pathiramanal Island and a backwater sunset, adding the Bird Sanctuary if time allows.",
      "Return to Kochi for departure, with Kadamakkudy village or Hill Palace sightseeing when the schedule permits."
    ],
    "notes": "Bird Sanctuary and departure-day stops depend on time. Motorised boating and Ayurveda are extra-cost options.",
    "source": {
      "title": "3 Days 2 Nights Cochin–Kumarakom–Cochin",
      "url": "https://www.paradise-kerala.com/tourpackage/KTDC-exclusive-packages/3days-2nights-cochin-kumarakom-cochin/",
      "reviewed": "2026-10-19"
    }
  },
  {
    "id": "kerala-coastal",
    "name": "Cliffs, Beaches & Capital Heritage",
    "destination": "Kerala",
    "region": "Kerala",
    "style": "Beaches",
    "styles": [
      "Family",
      "Culture & heritage"
    ],
    "days": 4,
    "nights": 3,
    "imageDestination": "varkala",
    "alt": "Varkala Beach beneath the coastal cliffs",
    "places": [
      "Kovalam",
      "Varkala",
      "Trivandrum"
    ],
    "route": "Trivandrum → Kovalam (Varkala day trip) → Trivandrum",
    "description": "A beach base with day trips along the coast and into the city.",
    "pace": "Three nights in Kovalam with day excursions",
    "ideal": "Beach lovers & families",
    "highlights": "Varkala cliffs, Kovalam beaches, Trivandrum heritage",
    "itinerary": [
      "Settle into Kovalam, then explore Lighthouse Beach, Eve’s Beach and Azhimala Temple.",
      "Make a Varkala day trip for Janardhana Swamy Temple, Sivagiri Mutt and the cliffside beach, returning to Kovalam.",
      "Explore Trivandrum’s Padmanabhaswamy Temple, palace, museums, art gallery and other city attractions before returning to Kovalam.",
      "Return to Trivandrum for departure, allowing for shopping or sightseeing if time permits."
    ],
    "notes": "Beach activities and Ayurveda cost extra. Confirm attraction opening days and temple entry requirements.",
    "source": {
      "title": "4 Days 3 Nights Trivandrum–Kovalam–Varkala",
      "url": "https://www.paradise-kerala.com/tourpackage/Raviz-exclusive-packages/4days-3nights-trivandrum-kovalam-varkala/",
      "reviewed": "2026-10-19"
    }
  },
  {
    "id": "kerala-guruvayoor",
    "name": "Guruvayoor Temple and Kochi Heritage",
    "destination": "Kerala",
    "region": "Kerala",
    "style": "Culture & heritage",
    "styles": [
      "Family"
    ],
    "days": 3,
    "nights": 2,
    "imageDestination": "guruvayoor",
    "alt": "The traditional entrance to Guruvayoor Sri Krishna Temple",
    "places": [
      "Kochi",
      "Guruvayoor"
    ],
    "route": "Kochi → Guruvayoor → Kochi",
    "description": "A temple-focused start followed by time in the city.",
    "pace": "One night in Guruvayoor and one in Kochi",
    "ideal": "Temple visitors & families",
    "highlights": "Temple visit, Kochi heritage, Waterfront sightseeing",
    "itinerary": [
      "Travel from Kochi to Guruvayoor for Sree Krishna Temple, with an optional elephant care centre visit before staying overnight.",
      "Explore Kochi's heritage sights and waterfront as time permits, with optional shopping and an overnight stay in the city.",
      "Use available time for further Kochi sightseeing before departure from the airport, railway station or bus station."
    ],
    "notes": "Elephant viewing is from a distance. Kochi sightseeing depends on available time and opening days.",
    "source": {
      "title": "3 Days 2 Nights Guruvayoor",
      "url": "https://www.paradise-kerala.com/tourpackage/Kerala-Tour-Packages/3days-2nights-Guruvayoor/",
      "reviewed": "2026-10-19"
    }
  },
  {
    "id": "kerala-vagamon",
    "name": "Vagamon Meadows and Hill Shrines",
    "destination": "Kerala",
    "region": "Kerala",
    "style": "Mountains",
    "styles": [
      "Slow escapes",
      "Family"
    ],
    "days": 2,
    "nights": 1,
    "imageDestination": "vagamon",
    "alt": "The rolling green meadows and hills of Vagamon",
    "places": [
      "Vagamon",
      "Kochi"
    ],
    "route": "Vagamon → Kochi",
    "description": "A compact hill escape with time for local landscapes.",
    "pace": "One hill-country night before returning to Kochi",
    "ideal": "Hill lovers & short-break travellers",
    "highlights": "Pine woods, Meadows, Hill shrines",
    "itinerary": [
      "Explore Vagamon's pine woods, tea estates, meadows and orchid garden, along with Thangalpara, Murukan Mala and Kurisumala, before staying overnight.",
      "Return to Kochi, allowing for heritage sightseeing or shopping if time permits, then depart from the airport, railway station or bus station."
    ],
    "notes": "Adventure activities are suggested for a two-night stay, with tickets charged separately. Kochi visits depend on departure time.",
    "source": {
      "title": "2 Days 1 Night Vagamon",
      "url": "https://www.paradise-kerala.com/tourpackage/Kerala-Tour-Packages/2days-1night-lovely-vagamon/",
      "reviewed": "2026-10-19"
    }
  },
  {
    "id": "kerala-marari",
    "name": "Marari Shore and Village Life",
    "destination": "Kerala",
    "region": "Kerala",
    "style": "Beaches",
    "styles": [
      "Slow escapes",
      "Honeymoon"
    ],
    "days": 3,
    "nights": 2,
    "imageDestination": "marari",
    "alt": "Waves along the sandy shoreline of Marari Beach",
    "places": [
      "Kochi",
      "Marari"
    ],
    "route": "Kochi → Marari → Kochi",
    "description": "Room for the beach, village life and time at your stay.",
    "pace": "Two nights at a coastal base",
    "ideal": "Couples & travellers seeking a slower break",
    "highlights": "Marari Beach, Fishing harbour, Canal canoe ride",
    "itinerary": [
      "Head from Kochi to Marari, explore the organic farm and butterfly garden, and spend sunset on the beach before meditation or cultural activities.",
      "Combine yoga with a fishing-harbour walk or cycle, herbal and vegetable gardens, a canal canoe ride, beach time, Ayurveda and a Kerala cooking demonstration.",
      "Enjoy a final beach walk before returning to Kochi, allowing for Fort Kochi sightseeing or shopping if there is time before departure."
    ],
    "notes": "Garden, wellness and cooking experiences are resort-specific; request a stay that offers them. Kochi sightseeing depends on departure time.",
    "source": {
      "title": "3 Days 2 Nights Cochin–Marari–Cochin",
      "url": "https://www.paradise-kerala.com/tourpackage/Cgh-earth-exclusive-packages/3days-2nights-cochin-marari-cochin/",
      "reviewed": "2026-10-19"
    }
  },
  {
    "id": "kerala-kollam",
    "name": "Ashtamudi Waterways and Island Crafts",
    "destination": "Kerala",
    "region": "Kerala",
    "style": "Culture & heritage",
    "styles": [
      "Slow escapes",
      "Family"
    ],
    "days": 3,
    "nights": 2,
    "imageDestination": "kollam",
    "alt": "Ashtamudi Lake and the backwaters of Kollam",
    "places": [
      "Trivandrum",
      "Kollam",
      "Munroe Island"
    ],
    "route": "Trivandrum → Kollam → Trivandrum",
    "description": "Explore waterways and everyday life around a lakeside base.",
    "pace": "A village excursion between arrival and departure days",
    "ideal": "Small groups & culture lovers",
    "highlights": "Jatayu Earth's Centre, Ashtamudi Lake, Munroe Island",
    "itinerary": [
      "Travel from Trivandrum through Chadayamangalam for Jatayu Earth's Centre, then continue to Paravoor in Kollam for a relaxed evening.",
      "Cruise Ashtamudi by houseboat, then canoe through Munroe Island’s canals for village life, fishing, coir-making and farming, with lunch in a village home.",
      "Return to Trivandrum for departure, adding temple, palace, gallery, zoo or planetarium visits if time permits."
    ],
    "notes": "Trivandrum sightseeing depends on departure time. A Kollam rail departure with a possible lighthouse stop is an alternative.",
    "source": {
      "title": "3 Days 2 Nights Trivandrum–Kollam–Trivandrum",
      "url": "https://www.paradise-kerala.com/tourpackage/Experiential-tours/3days-2nights-trivandrum-kollam-trivandrum/",
      "reviewed": "2026-10-19"
    },
    "experiences": [
      "Houseboat"
    ]
  },
  {
    "id": "south-temple-trail",
    "name": "Hill Country & Tamil Temple Trail",
    "destination": "Kerala & Tamil Nadu",
    "region": "South",
    "regions": [
      "Kerala",
      "South"
    ],
    "regionLabel": "KERALA & TAMIL NADU",
    "style": "Culture & heritage",
    "styles": [
      "Mountains",
      "Beaches"
    ],
    "days": 8,
    "nights": 7,
    "imageDestination": "madurai",
    "alt": "Ornate gopuram of Meenakshi Temple in Madurai",
    "places": [
      "Munnar",
      "Thekkady",
      "Madurai",
      "Rameswaram",
      "Kovalam",
      "Kochi",
      "Trivandrum"
    ],
    "route": "Kochi → Munnar → Thekkady → Madurai → Rameswaram → Kovalam → Trivandrum / Kochi",
    "description": "A longer journey linking hill country, temple towns and the coast.",
    "pace": "Several long transfers with sightseeing between stays",
    "ideal": "Travellers comfortable with an active route",
    "highlights": "Meenakshi Temple, Pamban Bridge, Kovalam",
    "itinerary": [
      "Reach Munnar from Kochi via waterfalls and plantations.",
      "Explore Eravikulam, tea heritage, Mattupetty, Echo Point and Kundala.",
      "Continue to Thekkady, with optional Periyar boating and evening activities.",
      "Head to Madurai for Meenakshi Temple, Tirumalai Nayak Palace and Gandhi Museum, time permitting.",
      "Travel to Rameswaram for Pamban Bridge, Dhanushkodi and temple visits.",
      "Continue to Kovalam, choosing beach time or Trivandrum sightseeing as schedules allow.",
      "Use another Kovalam day for the beach or Trivandrum’s temples and museums.",
      "Depart through Trivandrum or take the longer return to Kochi."
    ],
    "notes": "Optional activities cost extra; visits depend on access and time. Trivandrum departure avoids the longer return to Kochi.",
    "source": {
      "title": "8 Days 7 Nights Madhurai Rameshwaram Tour",
      "url": "https://www.paradise-kerala.com/tourpackage/Kerala-Tour-Packages/8days-7nights-madhurai-rameshwaram-tour/",
      "reviewed": "2026-10-19"
    }
  },
  {
    "id": "south-shores-backwaters",
    "name": "Southern Shores to Alleppey Backwaters",
    "destination": "Kerala & Tamil Nadu",
    "region": "South",
    "regions": [
      "Kerala",
      "South"
    ],
    "regionLabel": "KERALA & TAMIL NADU",
    "style": "Beaches",
    "styles": [
      "Family",
      "Slow escapes"
    ],
    "days": 6,
    "nights": 5,
    "imageDestination": "kanyakumari",
    "alt": "Vivekananda Rock Memorial off the coast of Kanyakumari",
    "places": [
      "Kanyakumari",
      "Kovalam",
      "Alappuzha",
      "Houseboat"
    ],
    "route": "Trivandrum → Kanyakumari → Kovalam → Alappuzha → Kochi",
    "description": "Combine the southern coast with a final night on the backwaters.",
    "pace": "Several coastal stays followed by a houseboat night",
    "ideal": "Couples, families & coast lovers",
    "highlights": "Vivekananda Rock, Kovalam shore, Overnight houseboat",
    "itinerary": [
      "Travel to Kanyakumari for Vivekananda Rock, the beach and sunset.",
      "Enjoy Kanyakumari’s sunrise and temple before an afternoon transfer to Kovalam.",
      "Choose Kovalam beach time or Trivandrum’s temple, palace and museum sights.",
      "Move to Alappuzha for a beach visit, shopping and a relaxed resort evening.",
      "Board an Alappuzha houseboat at noon, cruise in the afternoon and anchor overnight.",
      "Finish the morning cruise, disembark at 9 am and leave through Kochi, sightseeing if time permits."
    ],
    "notes": "Sunrise and sunset depend on weather. The houseboat anchors overnight and resumes cruising in the morning.",
    "source": {
      "title": "6 Days 5 Nights Kanyakumari Alleppey Tour",
      "url": "https://www.paradise-kerala.com/tourpackage/Kerala-Tour-Packages/6days-5nights-kanyakumari-alleppey-tour/",
      "reviewed": "2026-10-19"
    }
  },
  {
    "id": "rajasthan",
    "name": "Royal roads of Rajasthan",
    "destination": "Rajasthan",
    "region": "West",
    "style": "Culture & heritage",
    "days": 7,
    "nights": 6,
    "image": "rajasthan",
    "alt": "Hawa Mahal’s ornate pink facade in Jaipur",
    "route": "Jaipur → Jodhpur → Udaipur",
    "description": "Pink-city lanes, blue-city stories and evenings beside the lake.",
    "pace": "Active sightseeing & longer road days",
    "ideal": "Culture lovers, couples & friends",
    "highlights": "Jaipur palaces, Jodhpur lanes, Udaipur lakes",
    "itinerary": [
      "Arrive in Jaipur and take an easy first walk through the Pink City.",
      "Spend the day exploring Jaipur’s forts, palaces and bazaars.",
      "Travel to Jodhpur, with stops to be agreed around your interests.",
      "Explore Mehrangarh and the older lanes of the Blue City.",
      "Journey to Udaipur and settle in for a lakeside evening.",
      "Discover Udaipur’s palaces and leave time for independent exploring.",
      "Depart from Udaipur or discuss an extension."
    ],
    "places": [
      "Jaipur",
      "Jodhpur",
      "Udaipur"
    ]
  },
  {
    "id": "ladakh",
    "name": "Under Ladakh’s big sky",
    "destination": "Ladakh",
    "region": "North",
    "style": "Mountains",
    "days": 7,
    "nights": 6,
    "image": "ladakh",
    "alt": "Blue Pangong Lake surrounded by Ladakh mountains",
    "route": "Leh → Nubra Valley → Pangong → Leh",
    "description": "Wide-open landscapes, mountain monasteries and a whole new perspective.",
    "pace": "High altitude; gradual acclimatisation",
    "ideal": "Mountain lovers & experienced travellers",
    "highlights": "Leh, Nubra landscapes, Pangong Lake",
    "itinerary": [
      "Arrive in Leh. Keep the day restful for acclimatisation.",
      "Another gentle day in Leh, with light local exploration if you feel well.",
      "Subject to conditions and permits, travel towards Nubra Valley.",
      "Explore Nubra at a comfortable pace, with agreed local stops.",
      "Continue towards Pangong only if routes, permits and acclimatisation allow.",
      "Return to Leh with time to rest.",
      "Depart from Leh. Build in flexibility for weather-related changes."
    ],
    "places": [
      "Leh",
      "Nubra Valley",
      "Pangong"
    ]
  },
  {
    "id": "goa",
    "name": "A little more Goa",
    "destination": "Goa",
    "region": "West",
    "style": "Beaches",
    "days": 4,
    "nights": 3,
    "image": "goa",
    "alt": "Palm trees along a beach in Goa",
    "route": "Panaji → Old Goa → South Goa",
    "description": "Colourful streets, coastal flavours and days that end by the sea.",
    "pace": "Relaxed, with optional sightseeing",
    "ideal": "Beach lovers, couples & small groups",
    "highlights": "Panaji lanes, Old Goa, quiet beach time",
    "itinerary": [
      "Arrive in Goa and settle into your preferred coastal base.",
      "Explore Panaji’s heritage streets and Old Goa, at your chosen pace.",
      "Leave a full day for South Goa’s beaches or an optional local experience.",
      "Enjoy a slow morning before your onward journey."
    ],
    "places": [
      "Panaji",
      "Old Goa",
      "South Goa"
    ]
  },
  {
    "id": "sikkim",
    "name": "Sikkim, softly explored",
    "destination": "Sikkim",
    "region": "Northeast",
    "style": "Mountains",
    "days": 6,
    "nights": 5,
    "image": "sikkim",
    "alt": "Colourful hillside buildings in Gangtok, Sikkim",
    "route": "Gangtok → Ravangla → Pelling",
    "description": "Monastery mornings, winding hill roads and mountain-town moments.",
    "pace": "Scenic hill drives & moderate walking",
    "ideal": "Nature lovers, couples & families",
    "highlights": "Gangtok, Ravangla, Pelling viewpoints",
    "itinerary": [
      "Arrive via your agreed gateway and transfer to Gangtok.",
      "Explore Gangtok’s town centre and nearby cultural sights.",
      "Enjoy a flexible day around Gangtok, with local visits agreed in advance.",
      "Travel towards Pelling via Ravangla, allowing time for scenic stops.",
      "Explore Pelling’s surroundings and viewpoints, weather permitting.",
      "Transfer to your departure point with generous time for hill-road travel."
    ],
    "places": [
      "Gangtok",
      "Ravangla",
      "Pelling"
    ]
  },
  {
    "id": "triangle",
    "name": "India’s golden beginning",
    "destination": "Golden Triangle",
    "region": "North",
    "style": "Culture & heritage",
    "days": 5,
    "nights": 4,
    "image": "taj",
    "alt": "Taj Mahal and its reflecting pool in Agra",
    "route": "Delhi → Agra → Jaipur",
    "description": "Three iconic cities. Centuries of stories. A memorable first chapter.",
    "pace": "Full days of sightseeing & road transfers",
    "ideal": "First-time visitors & heritage lovers",
    "highlights": "Delhi heritage, Taj Mahal, Jaipur",
    "itinerary": [
      "Arrive in Delhi and explore a few agreed city highlights.",
      "Travel to Agra with time for the city’s heritage sights.",
      "Visit the Taj Mahal on an operating day, then travel to Jaipur.",
      "Explore Jaipur’s forts, palaces and colourful bazaars.",
      "Depart from Jaipur, or discuss a return transfer to Delhi."
    ],
    "places": [
      "Delhi",
      "Agra",
      "Jaipur"
    ]
  }
];
const $ = (s) => document.querySelector(s);
const selected = new Set();
let destinationFilter = '';
let shownTours = [];
const moneyPhone = '918921611825';
const escapeHTML = (s) => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const destinationChoices = [
 {name:'Guruvayoor',slug:'guruvayoor',image:"https://upload.wikimedia.org/wikipedia/commons/1/17/Guruvayoor_Temple_1.jpg"},
 {name:'Athirapilly',slug:'athirapilly',image:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Athirappilly_Waterfalls_1.jpg/960px-Athirappilly_Waterfalls_1.jpg",original:"https://upload.wikimedia.org/wikipedia/commons/4/4a/Athirappilly_Waterfalls_1.jpg"},
 {name:'Munnar',slug:'munnar',image:"assets/destinations/munnar.jpg"},
 {name:'Thekkady',slug:'thekkady',image:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Thekkady_Lake.jpg/960px-Thekkady_Lake.jpg",original:"https://upload.wikimedia.org/wikipedia/commons/8/81/Thekkady_Lake.jpg"},
 {name:'Vagamon',slug:'vagamon',image:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Hills_Vagamon.jpg/960px-Hills_Vagamon.jpg",original:"https://upload.wikimedia.org/wikipedia/commons/f/ff/Hills_Vagamon.jpg"},
 {name:'Houseboat',slug:'houseboat',image:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/House_boat_1.JPG/960px-House_boat_1.JPG",original:"https://upload.wikimedia.org/wikipedia/commons/7/76/House_boat_1.JPG"},
 {name:'Alleppey',slug:'alleppey',image:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/VembanadAlleppey.jpg/960px-VembanadAlleppey.jpg",original:"https://upload.wikimedia.org/wikipedia/commons/4/4d/VembanadAlleppey.jpg",value:'Alappuzha'},
 {name:'Kumarakom',slug:'kumarakom',image:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Kumarakom_backwaters_panorama.jpg/960px-Kumarakom_backwaters_panorama.jpg",original:"https://upload.wikimedia.org/wikipedia/commons/f/f6/Kumarakom_backwaters_panorama.jpg"},
 {name:'Marari',slug:'marari',image:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Marari_Beach_Shoreline.JPG/960px-Marari_Beach_Shoreline.JPG",original:"https://upload.wikimedia.org/wikipedia/commons/f/f1/Marari_Beach_Shoreline.JPG"},
 {name:'Kollam',slug:'kollam',image:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Ashtamudi_lake.jpg/960px-Ashtamudi_lake.jpg",original:"https://upload.wikimedia.org/wikipedia/commons/3/3e/Ashtamudi_lake.jpg"},
 {name:'Varkala',slug:'varkala',image:"assets/destinations/varkala.jpg"},
 {name:'Kovalam',slug:'kovalam',image:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Kovalam_Lighthouse_Beach.JPG/960px-Kovalam_Lighthouse_Beach.JPG",original:"https://upload.wikimedia.org/wikipedia/commons/2/21/Kovalam_Lighthouse_Beach.JPG"},
 {name:'Kanyakumari',slug:'kanyakumari',image:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Vivekananda_rock%2C_Kanyakumari.jpg/960px-Vivekananda_rock%2C_Kanyakumari.jpg",original:"https://upload.wikimedia.org/wikipedia/commons/5/54/Vivekananda_rock%2C_Kanyakumari.jpg",region:'South'},
 {name:'Madurai',slug:'madurai',image:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Meenakshi_Temple%2C_Gopuram%2C_Madurai%2C_India.jpg/960px-Meenakshi_Temple%2C_Gopuram%2C_Madurai%2C_India.jpg",original:"https://upload.wikimedia.org/wikipedia/commons/a/a7/Meenakshi_Temple%2C_Gopuram%2C_Madurai%2C_India.jpg",region:'South'},
 {name:'Rameswaram',slug:'rameswaram',image:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/The_Pamban_Bridge%2C_Rameswaram.jpg/960px-The_Pamban_Bridge%2C_Rameswaram.jpg",original:"https://upload.wikimedia.org/wikipedia/commons/3/31/The_Pamban_Bridge%2C_Rameswaram.jpg",region:'South'},
 {name:'Wayanad',slug:'wayanad',image:"assets/destinations/wayanad.jpg"}
];
const destinationPlace = () => destinationChoices.find(place=>(place.value||place.name)===destinationFilter);
const destinationName = () => destinationPlace()?.name || destinationFilter;
function matchesDestination(t, destination){
 if(!destination)return true;
 if(destination==='Houseboat')return (t.experiences||[]).includes('Houseboat')||t.itinerary.some(day=>/houseboat/i.test(day));
 return t.destination===destination||t.places.includes(destination);
}
function matchesRegion(t, region){
 const regions=t.regions||[t.region];
 return region==='all'||regions.includes(region)||(region==='South'&&regions.includes('Kerala'));
}
function tourImage(t){
 const place=destinationChoices.find(choice=>choice.slug===t.imageDestination);
 return place?place.image:`assets/${t.image}.jpg`;
}
function syncDestinationPicker(){
 const place=destinationPlace(),thumb=$('#destination-thumb');
 thumb.hidden=!place;
 if(place&&thumb.dataset.slug!==place.slug){
  thumb.dataset.slug=place.slug;thumb.src=place.image;
  if(place.original)thumb.dataset.original=place.original;else delete thumb.dataset.original;
 }
 $('#destination-label').textContent=destinationName()||$('#region').selectedOptions[0].textContent;
 document.querySelectorAll('[data-place]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.place===destinationFilter)));
 document.querySelectorAll('[data-picker-region]').forEach(button=>button.setAttribute('aria-pressed',String(!destinationFilter&&button.dataset.pickerRegion===$('#region').value)));
}
function closeDestinationPicker(restoreFocus=false){
 $('#destination-panel').hidden=true;
 $('#destination-toggle').setAttribute('aria-expanded','false');
 if(restoreFocus)$('#destination-toggle').focus({preventScroll:true});
}
function sizeDestinationPicker(){
 if($('#destination-panel').hidden)return;
 const top=$('#destination-panel').getBoundingClientRect().top;
 $('#destination-panel').style.setProperty('--picker-height',`${Math.max(80,window.innerHeight-top-16)}px`);
}
function openDestinationPicker(focusChoice=false){
 $('#destination-panel').hidden=false;
 $('#destination-toggle').setAttribute('aria-expanded','true');
 if(window.innerHeight-$('#destination-panel').getBoundingClientRect().top<320){
  const reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  $('#finder').scrollIntoView({block:'start',behavior:reducedMotion?'instant':'smooth'});
 }
 sizeDestinationPicker();
 if(focusChoice)($('#destination-options [aria-pressed="true"]')||$('#destination-options button')).focus();
}
$('#destination-options').innerHTML=destinationChoices.map(place=>`<button class="destination-choice" type="button" data-place="${place.value||place.name}" aria-pressed="false"><span class="destination-choice-photo"><img src="${escapeHTML(place.image)}" ${place.original?`data-original="${escapeHTML(place.original)}"`:""} alt="" loading="lazy" decoding="async" width="640" height="400"><span class="destination-choice-check" aria-hidden="true">✓</span></span><span class="destination-choice-name">${place.name}</span></button>`).join('');
// Try the source image once if a hosted thumbnail is unavailable.
document.addEventListener('error',event=>{
 const image=event.target;
 if(image.tagName==='IMG'&&image.dataset.original){
  const original=image.dataset.original;delete image.dataset.original;image.src=original;
 }
},true);
// A click that moves a few pixels (common on touchpads) starts a photo drag, and the click never fires.
// Photos inside choices and journey cards must not drag, or the choice is silently missed.
document.addEventListener('dragstart',event=>{if(event.target.closest?.('button,.tour-card'))event.preventDefault()});
$('#destination-region-options').innerHTML=Array.from($('#region').options,option=>`<button type="button" data-picker-region="${option.value}" aria-pressed="false">${option.value==='Kerala'?'All Kerala':option.textContent}</button>`).join('');
$('#region').hidden=true;
$('#where-label').htmlFor='destination-toggle';
$('#destination-toggle').hidden=false;
$('#destination-toggle').addEventListener('click',()=>$('#destination-panel').hidden?openDestinationPicker():closeDestinationPicker());
$('#destination-toggle').addEventListener('keydown',event=>{if(event.key==='ArrowDown'){event.preventDefault();openDestinationPicker(true)}});
$('#destination-close').addEventListener('click',()=>closeDestinationPicker(true));
$('#destination-options').addEventListener('click',event=>{
 const button=event.target.closest('[data-place]');if(!button)return;
 const place=destinationChoices.find(item=>(item.value||item.name)===button.dataset.place);
 if(!place)return;
 destinationFilter=button.dataset.place;
 $('#region').value=place.region||'Kerala';
 syncDestinationPicker();closeDestinationPicker(true);
});
$('#destination-region-options').addEventListener('click',event=>{
 const button=event.target.closest('[data-picker-region]');if(!button)return;
 destinationFilter='';$('#region').value=button.dataset.pickerRegion;
 syncDestinationPicker();closeDestinationPicker(true);
});
$('#destination-options').addEventListener('keydown',event=>{
 const steps={ArrowRight:1,ArrowLeft:-1,ArrowDown:0,ArrowUp:0};
 if(!(event.key in steps)&&event.key!=='Home'&&event.key!=='End')return;
 const buttons=Array.from(event.currentTarget.querySelectorAll('button'));
 const current=buttons.indexOf(document.activeElement);if(current<0)return;
 event.preventDefault();
 const columns=getComputedStyle(event.currentTarget).gridTemplateColumns.split(' ').length;
 const step=event.key==='ArrowDown'?columns:event.key==='ArrowUp'?-columns:steps[event.key];
 const next=event.key==='Home'?0:event.key==='End'?buttons.length-1:Math.max(0,Math.min(buttons.length-1,current+step));
 buttons[next].focus();
});
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&!$('#destination-panel').hidden){event.preventDefault();closeDestinationPicker(true)}});
document.addEventListener('click',event=>{if(!event.target.closest('.finder-location'))closeDestinationPicker()});
// Focus can briefly be on the document while moving from the trigger to a choice.
// Only close when the next focus target is outside; outside clicks handle null targets.
$('.finder-location').addEventListener('focusout',event=>{
 if(event.relatedTarget&&!event.currentTarget.contains(event.relatedTarget))closeDestinationPicker();
});
window.addEventListener('resize',sizeDestinationPicker);
window.addEventListener('scroll',sizeDestinationPicker,{passive:true});
function notify(message){$('#toast').textContent=message;$('#toast').classList.add('visible');clearTimeout(notify.timer);notify.timer=setTimeout(()=>$('#toast').classList.remove('visible'),3500)}
function syncChips(){
 document.querySelectorAll('[data-style]').forEach(b=>{const active=b.dataset.style===$('#style').value;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active))});
 document.querySelectorAll('[data-destination]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.destination===destinationFilter)));
 document.querySelectorAll('.scope-button[data-region]').forEach(b=>{const active=b.dataset.region===$('#region').value;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active))});
 syncDestinationPicker();
}
function renderTours(){
 const region=$('#region').value,style=$('#style').value,duration=$('#duration').value;
 $('#journey-eyebrow').textContent=region==='Kerala'?'YOUR KERALA STORY STARTS HERE':region==='South'?'YOUR SOUTH INDIA STORY STARTS HERE':'YOUR NEXT INDIA STORY STARTS HERE';
 $('#journey-title').textContent=destinationFilter?`${destinationName()} journey ideas`:'A few days. A different rhythm.';
 const matches=tours.filter(t=>matchesRegion(t,region)&&(style==='all'||t.style===style||(t.styles||[]).includes(style))&&(duration==='all'||(duration==='short'?t.days<=5:t.days>=6))&&matchesDestination(t,destinationFilter));
 shownTours=matches;
 $('#tour-grid').innerHTML=matches.map(t=>`<article id="journey-${t.id}" class="tour-card" data-journey="${t.id}" tabindex="-1" aria-labelledby="journey-title-${t.id}"><div class="tour-photo"><img src="${escapeHTML(tourImage(t))}" data-original="${escapeHTML(destinationChoices.find(place=>place.slug===t.imageDestination)?.original||'')}" alt="${escapeHTML(t.alt)}" loading="lazy"><span class="tag">${escapeHTML(t.style)}</span></div><div class="tour-body"><p class="tour-meta">${t.nights} ${t.nights===1?'NIGHT':'NIGHTS'} / ${t.days} DAYS &nbsp; · &nbsp; ${escapeHTML(t.regionLabel||(t.region==='Kerala'?'KERALA':t.region.toUpperCase()+' INDIA'))}</p><h3 id="journey-title-${t.id}">${escapeHTML(t.name)}</h3><p class="tour-route">${escapeHTML(t.route)}</p><p class="tour-desc">${escapeHTML(t.description)}</p><div class="tour-bottom"><span class="quote-label">Made for you<small>Price on request</small></span><button class="itinerary-button" data-detail="${t.id}">View journey ↗</button></div><label class="compare-label"><input type="checkbox" data-compare="${t.id}" ${selected.has(t.id)?'checked':''}> Compare this journey</label></div></article>`).join('');
 const scope=region==='all'?'across India':region==='Kerala'?'in Kerala':`in ${region} India`;
 const filters=[scope+(destinationFilter?' · Including '+destinationName():'')];
 if(style!=='all')filters.push(style);
 if(duration!=='all')filters.push(duration==='short'?'Up to 5 days':'6 days or more');
 $('#results-count').textContent=`${matches.length} journey idea${matches.length===1?'':'s'} ${filters.join(' · ')} · Select up to 3 to compare`;
 $('#no-results').hidden=matches.length>0;
 $('#no-results h3').textContent=destinationFilter?`Let’s plan your ${destinationName()} escape.`:'Your next trip is still out there.';
 $('#no-results p').textContent=destinationFilter?'No sample journeys match these filters. Tell us your dates and we’ll help shape a route around your plans.':'Try a wider search, or ask us to create a route around your plans.';
 $('#plan-selected-destination').hidden=!destinationFilter;
 syncChips();
 return matches;
}
function resetFilters(){destinationFilter='';$('#region').value='Kerala';$('#style').value='all';$('#duration').value='all';closeDestinationPicker();renderTours()}
// For a chosen place, land on the result count with its journeys in view and briefly point them out.
function revealResults(matches){
 const found=matches.length>0&&Boolean(destinationFilter);
 const target=!matches.length?$('#no-results'):found?$('#results-count'):$('#journeys');
 const reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
 (found?$(`#journey-${matches[0].id}`):target).focus({preventScroll:true});
 target.scrollIntoView({block:'start',behavior:reducedMotion?'instant':'smooth'});
 if(found)document.querySelectorAll('#tour-grid .tour-card').forEach(card=>card.classList.add('is-found'));
}
$('#finder').addEventListener('submit',event=>{event.preventDefault();closeDestinationPicker();revealResults(renderTours())});
$('#region').addEventListener('change',()=>{destinationFilter='';syncDestinationPicker()});
$('#plan-selected-destination').addEventListener('click',()=>{if(!destinationFilter)return;$('#plan-destination').value=destinationName();$('#plan').scrollIntoView();$('#plan-destination').focus({preventScroll:true})});
document.querySelectorAll('[data-style]').forEach(b=>b.addEventListener('click',()=>{$('#style').value=b.dataset.style;renderTours()}));
document.querySelectorAll('[data-destination]').forEach(b=>b.addEventListener('click',()=>{
 destinationFilter=b.dataset.destination;
 const matchingTour=tours.find(t=>t.destination===destinationFilter||t.places.includes(destinationFilter));
 $('#region').value=matchingTour?matchingTour.region:'all';$('#style').value='all';$('#duration').value='all';
 revealResults(renderTours());
}));
document.querySelectorAll('[data-region]').forEach(b=>b.addEventListener('click',()=>{destinationFilter='';$('#region').value=b.dataset.region;$('#style').value='all';$('#duration').value='all';renderTours();$('#journeys').scrollIntoView()}));
$('#reset-filters').addEventListener('click',resetFilters);$('#clear-empty').addEventListener('click',resetFilters);
function updateCompare(){const n=selected.size;$('#compare-bar').hidden=!n;$('#compare-count').textContent=`${n} of 3 journeys selected`;$('#compare-open').disabled=n<2;document.querySelectorAll('[data-compare]').forEach(x=>x.checked=selected.has(x.dataset.compare))}
$('#tour-grid').addEventListener('change',e=>{const id=e.target.dataset.compare;if(!id)return;if(e.target.checked){if(selected.size>=3){e.target.checked=false;notify('You can compare up to 3 journeys. Remove one to add another.');return}selected.add(id)}else selected.delete(id);updateCompare()});
$('#compare-clear').addEventListener('click',()=>{selected.clear();updateCompare()});
const journeyLink=id=>`${location.href.split('#')[0]}#journey=${id}`;
// Messages carry the journey link only on the live site; a file:// link would expose the visitor's local folder.
const journeyLine=t=>/^https?:$/.test(location.protocol)?`\n${journeyLink(t.id)}`:'';
const whatsAppURL=text=>`https://wa.me/${moneyPhone}?text=${encodeURIComponent(text)}`;
// Opens a prepared WhatsApp message. The status keeps a link in case a pop-up blocker stopped it.
function openWhatsApp(text,status){
 const url=whatsAppURL(text);window.open(url,'_blank','noopener,noreferrer');
 status.replaceChildren(document.createTextNode('Your message is ready. If WhatsApp did not open, '));
 const link=document.createElement('a');link.href=url;link.target='_blank';link.rel='noopener noreferrer';link.textContent='open your prepared message here ↗';link.style.textDecoration='underline';status.append(link);
}
function journeyWhatsApp(t){
 return whatsAppURL(`Hi Canty Tours! I'm interested in the “${t.name}” sample journey (${t.days} days / ${t.nights} ${t.nights===1?'night':'nights'}).\nRoute: ${t.route}${journeyLine(t)}\n\nPlease share availability, pricing and inclusions.`);
}
const arrowIcon=path=>`<svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true"><path d="${path}" fill="none" stroke="currentColor" stroke-width="1.6"/></svg>`;
function showDetails(id){
 const t=tours.find(x=>x.id===id);if(!t)return;
 const index=shownTours.indexOf(t),dialog=$('#detail-dialog');
 const nav=index>-1&&shownTours.length>1?`<div class="detail-nav" role="group" aria-label="Browse journeys"><button type="button" data-step="-1" aria-label="Previous journey">${arrowIcon('m10 3-5 5 5 5')}</button><button type="button" data-step="1" aria-label="Next journey">${arrowIcon('m6 3 5 5-5 5')}</button><span>Journey ${index+1} of ${shownTours.length}</span></div>`:'';
 $('#detail-content').innerHTML=`${nav}<img class="detail-image" src="${escapeHTML(tourImage(t))}" data-original="${escapeHTML(destinationChoices.find(place=>place.slug===t.imageDestination)?.original||'')}" alt="${escapeHTML(t.alt)}"><p class="eyebrow">SAMPLE JOURNEY · ${t.nights} ${t.nights===1?'NIGHT':'NIGHTS'} / ${t.days} DAYS</p><h2 id="detail-title">${escapeHTML(t.name)}</h2><p class="detail-route">${escapeHTML(t.route)}</p><p>${escapeHTML(t.description)}</p><h3>Day-by-day itinerary</h3><ol class="detail-days">${t.itinerary.map((day,i)=>`<li><strong>DAY ${i+1}</strong><span>${escapeHTML(day)}</span></li>`).join('')}</ol>${t.notes?`<p class="detail-notes">${escapeHTML(t.notes)}</p>`:""}<div class="detail-footer"><h3>Make this route your own</h3><p>${escapeHTML(t.pace)}. ${t.id==='ladakh'?'High-altitude travel needs individual planning; discuss suitability, acclimatisation, permits and road conditions before booking. ':''}This is a suggested route. Stays, activities, permits, transport, operating days and current availability must be confirmed in your quote. Price on request.</p></div><div class="detail-actions"><button class="button" data-plan="${t.id}">Personalise this journey <span>↗</span></button><a class="button secondary" href="${escapeHTML(journeyWhatsApp(t))}" target="_blank" rel="noopener">Ask on WhatsApp <span>↗</span></a><button class="text-button share-button" type="button" data-share="${t.id}">Share this journey</button></div>`;
 dialog.dataset.journey=t.id;dialog.setAttribute('aria-labelledby','detail-title');
 if(!dialog.open)dialog.showModal();
 dialog.scrollTop=0;
}
function stepDetails(step){
 const index=shownTours.findIndex(t=>t.id===$('#detail-dialog').dataset.journey);
 if(index<0||shownTours.length<2)return;
 showDetails(shownTours[(index+step+shownTours.length)%shownTours.length].id);
 $(`#detail-content [data-step="${step}"]`).focus();
}
async function shareJourney(button){
 const t=tours.find(x=>x.id===button.dataset.share);if(!t)return;
 const url=journeyLink(t.id);
 try{
  if(navigator.share&&window.matchMedia('(pointer: coarse)').matches){await navigator.share({title:`${t.name} · Canty Tours`,url});return}
  await navigator.clipboard.writeText(url);
  button.textContent='Link copied ✓';setTimeout(()=>{button.textContent='Share this journey'},2500);
 }catch(error){if(error.name!=='AbortError')window.prompt('Copy this link to share the journey:',url)}
}
// The whole card opens its itinerary. The compare checkbox keeps its own job, and dragging to select
// card text does not open it (an older selection elsewhere on the page is ignored).
let selectionAtPress='';
$('#tour-grid').addEventListener('pointerdown',()=>{selectionAtPress=String(window.getSelection())});
$('#tour-grid').addEventListener('click',e=>{
 const card=e.target.closest('.tour-card');
 if(!card||e.target.closest('.compare-label'))return;
 const selection=String(window.getSelection());
 if(!e.target.closest('[data-detail]')&&selection.trim()&&selection!==selectionAtPress)return;
 showDetails(card.dataset.journey);
});
$('#detail-content').addEventListener('click',e=>{
 const step=e.target.closest('[data-step]'),share=e.target.closest('[data-share]');
 if(step)stepDetails(Number(step.dataset.step));
 if(share)shareJourney(share);
});
$('#detail-dialog').addEventListener('keydown',e=>{
 if((e.key==='ArrowLeft'||e.key==='ArrowRight')&&!e.altKey&&!e.ctrlKey&&!e.metaKey&&!e.shiftKey){e.preventDefault();stepDetails(e.key==='ArrowLeft'?-1:1)}
});
// Shared links (#journey=<id>) open that journey's itinerary. Closing it drops the link from the address bar.
function openSharedJourney(){
 const t=tours.find(x=>location.hash===`#journey=${x.id}`);if(!t)return;
 if(!shownTours.includes(t)){destinationFilter='';$('#region').value=matchesRegion(t,'Kerala')?'Kerala':'all';$('#style').value='all';$('#duration').value='all';renderTours()}
 $(`#journey-${t.id}`).scrollIntoView({block:'center',behavior:'instant'});
 showDetails(t.id);
}
window.addEventListener('hashchange',openSharedJourney);
$('#detail-dialog').addEventListener('close',()=>{if(location.hash.startsWith('#journey='))try{history.replaceState(null,'',location.pathname+location.search)}catch{}});
// "Personalise this journey" and "Plan this trip" open a contact popup over the current one.
// Only the phone number is required; Connect sends the details to Canty Tours on WhatsApp.
const countryCodes='Afghanistan:93|Åland Islands:358|Albania:355|Algeria:213|American Samoa:1|Andorra:376|Angola:244|Anguilla:1|Antigua and Barbuda:1|Argentina:54|Armenia:374|Aruba:297|Australia:61|Austria:43|Azerbaijan:994|Bahamas:1|Bahrain:973|Bangladesh:880|Barbados:1|Belarus:375|Belgium:32|Belize:501|Benin:229|Bermuda:1|Bhutan:975|Bolivia:591|Bosnia and Herzegovina:387|Botswana:267|Brazil:55|British Virgin Islands:1|Brunei:673|Bulgaria:359|Burkina Faso:226|Burundi:257|Cambodia:855|Cameroon:237|Canada:1|Cape Verde:238|Caribbean Netherlands:599|Cayman Islands:1|Central African Republic:236|Chad:235|Chile:56|China:86|Christmas Island:61|Cocos (Keeling) Islands:61|Colombia:57|Comoros:269|Congo (DRC):243|Congo (Republic):242|Cook Islands:682|Costa Rica:506|Côte d’Ivoire:225|Croatia:385|Cuba:53|Curaçao:599|Cyprus:357|Czechia:420|Denmark:45|Djibouti:253|Dominica:1|Dominican Republic:1|Ecuador:593|Egypt:20|El Salvador:503|Equatorial Guinea:240|Eritrea:291|Estonia:372|Eswatini:268|Ethiopia:251|Falkland Islands:500|Faroe Islands:298|Fiji:679|Finland:358|France:33|French Guiana:594|French Polynesia:689|Gabon:241|Gambia:220|Georgia:995|Germany:49|Ghana:233|Gibraltar:350|Greece:30|Greenland:299|Grenada:1|Guadeloupe:590|Guam:1|Guatemala:502|Guernsey:44|Guinea:224|Guinea-Bissau:245|Guyana:592|Haiti:509|Honduras:504|Hong Kong:852|Hungary:36|Iceland:354|India:91|Indonesia:62|Iran:98|Iraq:964|Ireland:353|Isle of Man:44|Israel:972|Italy:39|Jamaica:1|Japan:81|Jersey:44|Jordan:962|Kazakhstan:7|Kenya:254|Kiribati:686|Kosovo:383|Kuwait:965|Kyrgyzstan:996|Laos:856|Latvia:371|Lebanon:961|Lesotho:266|Liberia:231|Libya:218|Liechtenstein:423|Lithuania:370|Luxembourg:352|Macau:853|Madagascar:261|Malawi:265|Malaysia:60|Maldives:960|Mali:223|Malta:356|Marshall Islands:692|Martinique:596|Mauritania:222|Mauritius:230|Mayotte:262|Mexico:52|Micronesia:691|Moldova:373|Monaco:377|Mongolia:976|Montenegro:382|Montserrat:1|Morocco:212|Mozambique:258|Myanmar:95|Namibia:264|Nauru:674|Nepal:977|Netherlands:31|New Caledonia:687|New Zealand:64|Nicaragua:505|Niger:227|Nigeria:234|Niue:683|Norfolk Island:672|North Korea:850|North Macedonia:389|Northern Mariana Islands:1|Norway:47|Oman:968|Pakistan:92|Palau:680|Palestine:970|Panama:507|Papua New Guinea:675|Paraguay:595|Peru:51|Philippines:63|Poland:48|Portugal:351|Puerto Rico:1|Qatar:974|Réunion:262|Romania:40|Russia:7|Rwanda:250|Saint Barthélemy:590|Saint Helena:290|Saint Kitts and Nevis:1|Saint Lucia:1|Saint Martin:590|Saint Pierre and Miquelon:508|Saint Vincent and the Grenadines:1|Samoa:685|San Marino:378|São Tomé and Príncipe:239|Saudi Arabia:966|Senegal:221|Serbia:381|Seychelles:248|Sierra Leone:232|Singapore:65|Sint Maarten:1|Slovakia:421|Slovenia:386|Solomon Islands:677|Somalia:252|South Africa:27|South Korea:82|South Sudan:211|Spain:34|Sri Lanka:94|Sudan:249|Suriname:597|Svalbard and Jan Mayen:47|Sweden:46|Switzerland:41|Syria:963|Taiwan:886|Tajikistan:992|Tanzania:255|Thailand:66|Timor-Leste:670|Togo:228|Tokelau:690|Tonga:676|Trinidad and Tobago:1|Tunisia:216|Turkey:90|Turkmenistan:993|Turks and Caicos Islands:1|Tuvalu:688|Uganda:256|Ukraine:380|United Arab Emirates:971|United Kingdom:44|United States:1|Uruguay:598|US Virgin Islands:1|Uzbekistan:998|Vanuatu:678|Vatican City:39|Venezuela:58|Vietnam:84|Wallis and Futuna:681|Western Sahara:212|Yemen:967|Zambia:260|Zimbabwe:263'
 .split('|').map(entry=>entry.split(':')).sort((a,b)=>a[0].localeCompare(b[0]));
const popularCountries=['India','United Arab Emirates','Saudi Arabia','Qatar','Kuwait','Oman','Bahrain','United Kingdom','United States','Canada','Australia','Singapore'];
const countryOption=([name,code])=>`<option value="+${code}">${escapeHTML(name)} (+${code})</option>`;
$('#connect-country').innerHTML=`<optgroup label="Popular">${popularCountries.map(name=>countryOption(countryCodes.find(country=>country[0]===name))).join('')}</optgroup><optgroup label="All countries">${countryCodes.map(countryOption).join('')}</optgroup>`;
function openConnect(id){
 const t=tours.find(x=>x.id===id);if(!t)return;
 const dialog=$('#connect-dialog');dialog.dataset.journey=t.id;
 $('#connect-journey').textContent=`${t.name} · ${t.days} days / ${t.nights} ${t.nights===1?'night':'nights'}`;
 $('#connect-status').replaceChildren();
 dialog.showModal();
 if(window.matchMedia('(pointer: fine)').matches)$('#connect-name').focus();
}
// The number with its country code, or '' if it doesn't look like a phone number.
// A number typed with its own "+" code is used as typed.
function connectPhone(code,value){
 let digits=value.replace(/\D/g,'');
 if(value.trim().startsWith('+'))return digits.length>=8&&digits.length<=15?`+${digits}`:'';
 if(code==='+91'){
  if(digits.length===11&&digits.startsWith('0'))digits=digits.slice(1);
  if(digits.length===12&&digits.startsWith('91'))digits=digits.slice(2);
  return /^[1-9]\d{9}$/.test(digits)?`+91 ${digits.slice(0,5)} ${digits.slice(5)}`:'';
 }
 if(code==='+1'){
  if(digits.length===11&&digits.startsWith('1'))digits=digits.slice(1);
  return digits.length===10?`+1 ${digits}`:'';
 }
 return digits.length>=4&&code.length-1+digits.length<=15?`${code} ${digits}`:'';
}
$('#connect-country').addEventListener('change',e=>{
 $('#connect-code').textContent=e.target.value;
 $('#connect-phone').placeholder=e.target.value==='+91'?'98765 43210':'Phone number';
 $('#connect-phone').setCustomValidity('');
});
$('#connect-phone').addEventListener('input',e=>e.target.setCustomValidity(''));
$('#connect-form').addEventListener('submit',e=>{
 e.preventDefault();
 const t=tours.find(x=>x.id===$('#connect-dialog').dataset.journey);if(!t)return;
 const code=$('#connect-country').value,phone=$('#connect-phone'),number=connectPhone(code,phone.value);
 phone.setCustomValidity(!phone.value.trim()?'Please add your phone number so we can reach you.':number?'':code==='+91'?'Please enter your 10-digit mobile number.':code==='+1'?'Please enter your 10-digit phone number.':'Please check your phone number.');
 if(!e.currentTarget.reportValidity())return;
 const name=$('#connect-name').value.trim(),email=$('#connect-email').value.trim();
 openWhatsApp(`Hi Canty Tours! I'd like to personalise this journey.\n\nJourney: ${t.name} (${t.days} days / ${t.nights} ${t.nights===1?'night':'nights'})\nRoute: ${t.route}${journeyLine(t)}\n\n${name?`Name: ${name}\n`:''}Phone: ${number}\n${email?`Email: ${email}\n`:''}\nPlease get in touch to plan it with me.`,$('#connect-status'));
});
document.addEventListener('click',e=>{const b=e.target.closest('[data-plan]');if(b)openConnect(b.dataset.plan)});
$('#compare-open').addEventListener('click',()=>{const items=tours.filter(t=>selected.has(t.id));if(items.length<2)return;const rows=[['Duration',t=>`${t.days} days / ${t.nights} ${t.nights===1?'night':'nights'}`],['Route',t=>t.route],['Travel style',t=>t.style],['Pace',t=>t.pace],['A good fit for',t=>t.ideal],['Highlights',t=>t.highlights],['Price',()=> 'Personalised quote'],['Next step',t=>`<button class="button" data-plan="${t.id}">Plan this trip ↗</button>`]];$('#compare-content').innerHTML=`<div class="comparison-scroll" tabindex="0" aria-label="Journey comparison table; scroll horizontally on smaller screens"><table class="compare-table"><thead><tr><th scope="col">Your journey</th>${items.map(t=>`<th scope="col">${t.name}</th>`).join('')}</tr></thead><tbody>${rows.map(([name,value])=>`<tr><th scope="row">${name}</th>${items.map(t=>`<td>${value(t)}</td>`).join('')}</tr>`).join('')}</tbody></table></div><p class="fineprint">Sample routes, not confirmed packages. Your final itinerary and inclusions will be agreed in writing.</p>`;$('#compare-dialog').showModal()});
document.querySelectorAll('.close-dialog').forEach(b=>b.addEventListener('click',()=>b.closest('dialog').close()));
// Skip the second click of a double-click: it lands on the backdrop of the popup the first click opened.
document.querySelectorAll('dialog').forEach(d=>{d.addEventListener('click',e=>{if(e.target===d&&e.detail<2){const r=d.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)d.close()}})});
$('#privacy-button').addEventListener('click',()=>$('#privacy-dialog').showModal());
$('#menu-toggle').addEventListener('click',()=>{const isOpen=$('#navigation').classList.toggle('open');$('#menu-toggle').setAttribute('aria-expanded',String(isOpen))});
$('#navigation').addEventListener('click',e=>{if(e.target.closest('a')){$('#navigation').classList.remove('open');$('#menu-toggle').setAttribute('aria-expanded','false')}});
const now=new Date();const today=`${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}-${String(now.getDate()).padStart(2,'0')}`;$('#travel-date').min=today;$('#year').textContent=now.getFullYear();
$('#trip-form').addEventListener('submit',e=>{
 e.preventDefault();const f=e.currentTarget;if(!f.reportValidity())return;
 const data=new FormData(f),name=String(data.get('name')||'').trim(),destination=String(data.get('destination')||'').trim();
 if(!name||!destination){notify('Please add your name and a destination idea.');return}
 const notes=String(data.get('notes')||'').trim();
 openWhatsApp(`Hi Canty Tours! I'd like to plan a holiday with you.\n\nName: ${name}\nDestination: ${destination}\nTravel date: ${data.get('date')||'Flexible / to discuss'}\nPreferred trip length: ${data.get('tripLength')||'Flexible / to discuss'}\nOccasion: ${data.get('occasion')||'To discuss'}\nTravellers: ${data.get('travellers')}\nBudget per person: ${data.get('budget')}\nTravel style: ${data.get('pace')}\n${notes?'Other details: '+notes+'\n':''}\nPlease share itinerary options, availability, pricing and inclusions.`,$('#form-status'));
});
resetFilters();
openSharedJourney();
