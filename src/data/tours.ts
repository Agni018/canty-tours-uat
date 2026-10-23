export type Region = "Kerala" | "North" | "South" | "West" | "Northeast";

export type TravelStyle =
  | "Family"
  | "Honeymoon"
  | "Slow escapes"
  | "Culture & heritage"
  | "Mountains"
  | "Beaches";

/** A sample itinerary shown in the journey grid, detail dialog and comparison. */
export type Tour = {
  id: string;
  name: string;
  destination: string;
  /** Main region. The "South India" filter also includes Kerala tours. */
  region: Region;
  /** All regions the route covers, when it crosses more than one (e.g. Kerala & Tamil Nadu). */
  regions?: Region[];
  /** Overrides the region text on the card, e.g. "KERALA & TAMIL NADU". */
  regionLabel?: string;
  /** Main style: shown on the card tag. */
  style: TravelStyle;
  /** Extra styles the tour also matches in the style filter. */
  styles?: TravelStyle[];
  days: number;
  nights: number;
  /** Photo path inside public/assets, e.g. "destinations/kollam.jpg". */
  image: string;
  alt: string;
  /** Places visited; a picked destination matches a tour through these. */
  places: string[];
  /** Experiences a destination choice can match, e.g. "Houseboat". */
  experiences?: string[];
  route: string;
  description: string;
  pace: string;
  ideal: string;
  highlights: string;
  /** Extra caution shown in the detail dialog before the standard disclaimer. */
  planningNote?: string;
  /** One entry per day. */
  itinerary: string[];
  /** Practical notes shown under the itinerary. */
  notes?: string;
  /** Published itinerary this summary was checked against (listed in the privacy dialog). */
  source?: { title: string; url: string; reviewed: string };
};

export const tours: Tour[] = [
  {
    id: "kerala-waterfalls-hills",
    name: "Waterfalls, Tea Country and Periyar",
    destination: "Kerala",
    region: "Kerala",
    style: "Family",
    styles: ["Mountains", "Culture & heritage", "Honeymoon"],
    days: 6,
    nights: 5,
    image: "destinations/athirapilly.jpg",
    alt: "Athirappilly waterfalls cascading over the rocks amid forest",
    places: [
      "Kochi",
      "Athirapilly",
      "Munnar",
      "Thekkady",
      "Alappuzha",
      "Houseboat",
    ],
    route:
      "Kochi → Athirapilly → Kochi → Munnar → Thekkady → Alappuzha → Kochi",
    description: "Link waterfalls and hill country with a final night afloat.",
    pace: "Several transfer days between sightseeing stops",
    ideal: "Families, couples & first-time visitors",
    highlights: "Waterfalls, Tea country, Periyar, Houseboat",
    itinerary: [
      "Visit Athirapilly and Vazhachal waterfalls, returning to Kochi overnight.",
      "Continue to Munnar via Cheeyappara, Valara, tea estates and spice gardens.",
      "Explore Eravikulam, the Tea Museum, Mattupetty, Echo Point, Kundala, Pothamedu and botanical gardens.",
      "Travel to Thekkady, with optional Periyar boating and separately paid evening experiences.",
      "Reach Alappuzha around noon for a houseboat cruise and anchored overnight stay.",
      "Finish the morning cruise, visit Alappuzha beach and return to Kochi, adding sightseeing if time permits.",
    ],
    notes:
      "Periyar boating and evening activities are optional and cost extra. Check seasonal park access and attraction opening days.",
    source: {
      title: "6 Days 5 Nights Athirapilly Munnar Thekkady Alleppey",
      url: "https://www.paradise-kerala.com/tourpackage/Kerala-Tour-Packages/6days-5nights-Athirapilly-vazhachal-Cochin-Munnar-Thekkady-Allep/",
      reviewed: "2026-10-19",
    },
  },
  {
    id: "kerala-houseboat",
    name: "An Overnight on Alleppey's Waterways",
    destination: "Kerala",
    region: "Kerala",
    style: "Slow escapes",
    styles: ["Honeymoon", "Family"],
    days: 2,
    nights: 1,
    image: "destinations/houseboat.jpg",
    alt: "A traditional Kerala houseboat on the backwaters near Alleppey",
    places: ["Kochi", "Alappuzha", "Houseboat"],
    route: "Kochi → Alappuzha → Kochi",
    description: "A short escape built around a night on the water.",
    pace: "One overnight stay with a morning return cruise",
    ideal: "Couples & short-break travellers",
    highlights: "Backwater cruising, Overnight houseboat, Alleppey Beach",
    itinerary: [
      "Travel from Kochi to Alappuzha for noon boarding, an afternoon backwater cruise and a night aboard the anchored houseboat.",
      "Take a morning cruise before 9 am checkout, visit Alappuzha Beach, then return to Kochi, with heritage sightseeing or shopping if departure time allows.",
    ],
    notes:
      "The boat anchors overnight; this is not continuous cruising. Kochi sightseeing depends on departure time.",
    source: {
      title: "2 Days Cochin Alleppey Houseboat Tour",
      url: "https://www.paradise-kerala.com/tourpackage/Kerala-Tour-Packages/2days-1night-weekend-in-houseboat/",
      reviewed: "2026-10-19",
    },
  },
  {
    id: "kerala-wayanad",
    name: "Wayanad Caves, Lakes & Forest Trails",
    destination: "Kerala",
    region: "Kerala",
    style: "Mountains",
    styles: ["Family", "Slow escapes"],
    days: 4,
    nights: 3,
    image: "wayanad.jpg",
    alt: "Lush green mountains in Wayanad",
    places: ["Wayanad", "Kozhikode"],
    route: "Kozhikode → Wayanad → Kozhikode",
    description: "Use one hill-country base for nature and local sightseeing.",
    pace: "Three nights in one base with excursions",
    ideal: "Nature lovers & small groups",
    highlights: "Edakkal Caves, Soochipara Falls, Banasura Sagar Dam",
    itinerary: [
      "Travel from Kozhikode through Thamarassery Ghat to Lakkidi, with the afternoon free around your stay.",
      "Spend the day among Edakkal Caves, Soochipara Falls and Pookode Lake before returning to base.",
      "Visit Banasura Sagar Dam and Lakkidi Viewpoint, then return for a forest and coffee-plantation walk if arranged.",
      "Allow time for early birdwatching before leaving Wayanad for Kozhikode.",
    ],
    notes:
      "Guided walks, birdwatching and plantation visits depend on arrangements at the selected stay.",
    source: {
      title: "4 Days 3 Nights Calicut–Wayanad–Calicut",
      url: "https://www.paradise-kerala.com/tourpackage/Cgh-earth-exclusive-packages/4days-3nights-calicut-wayanad-calicut/",
      reviewed: "2026-10-19",
    },
  },
  {
    id: "kerala-kumarakom",
    name: "Kochi Heritage and Kumarakom Islands",
    destination: "Kerala",
    region: "Kerala",
    style: "Family",
    styles: ["Slow escapes", "Culture & heritage"],
    days: 3,
    nights: 2,
    image: "destinations/kumarakom.jpg",
    alt: "A broad view of the Kumarakom backwaters near the bird sanctuary",
    places: ["Kochi", "Kumarakom"],
    route: "Kochi → Kumarakom → Kochi",
    description: "Pair city heritage with a quieter day by the backwaters.",
    pace: "City sightseeing followed by a backwater stay",
    ideal: "Families & culture lovers",
    highlights: "Fort Kochi, Pathiramanal Island, Backwater sunset",
    itinerary: [
      "Explore Fort Kochi's churches, fishing nets and Navy Museum, continue to Mattancherry Palace and the synagogue, then enjoy Marine Drive and boating.",
      "Continue to Kumarakom for village exploration, a boat-accessed visit to Pathiramanal Island and a backwater sunset, adding the Bird Sanctuary if time allows.",
      "Return to Kochi for departure, with Kadamakkudy village or Hill Palace sightseeing when the schedule permits.",
    ],
    notes:
      "Bird Sanctuary and departure-day stops depend on time. Motorised boating and Ayurveda are extra-cost options.",
    source: {
      title: "3 Days 2 Nights Cochin–Kumarakom–Cochin",
      url: "https://www.paradise-kerala.com/tourpackage/KTDC-exclusive-packages/3days-2nights-cochin-kumarakom-cochin/",
      reviewed: "2026-10-19",
    },
  },
  {
    id: "kerala-coastal",
    name: "Cliffs, Beaches & Capital Heritage",
    destination: "Kerala",
    region: "Kerala",
    style: "Beaches",
    styles: ["Family", "Culture & heritage"],
    days: 4,
    nights: 3,
    image: "varkala.jpg",
    alt: "Varkala Beach beneath the coastal cliffs",
    places: ["Kovalam", "Varkala", "Trivandrum"],
    route: "Trivandrum → Kovalam (Varkala day trip) → Trivandrum",
    description:
      "A beach base with day trips along the coast and into the city.",
    pace: "Three nights in Kovalam with day excursions",
    ideal: "Beach lovers & families",
    highlights: "Varkala cliffs, Kovalam beaches, Trivandrum heritage",
    itinerary: [
      "Settle into Kovalam, then explore Lighthouse Beach, Eve’s Beach and Azhimala Temple.",
      "Make a Varkala day trip for Janardhana Swamy Temple, Sivagiri Mutt and the cliffside beach, returning to Kovalam.",
      "Explore Trivandrum’s Padmanabhaswamy Temple, palace, museums, art gallery and other city attractions before returning to Kovalam.",
      "Return to Trivandrum for departure, allowing for shopping or sightseeing if time permits.",
    ],
    notes:
      "Beach activities and Ayurveda cost extra. Confirm attraction opening days and temple entry requirements.",
    source: {
      title: "4 Days 3 Nights Trivandrum–Kovalam–Varkala",
      url: "https://www.paradise-kerala.com/tourpackage/Raviz-exclusive-packages/4days-3nights-trivandrum-kovalam-varkala/",
      reviewed: "2026-10-19",
    },
  },
  {
    id: "kerala-guruvayoor",
    name: "Guruvayoor Temple and Kochi Heritage",
    destination: "Kerala",
    region: "Kerala",
    style: "Culture & heritage",
    styles: ["Family"],
    days: 3,
    nights: 2,
    image: "destinations/guruvayoor.jpg",
    alt: "The traditional entrance to Guruvayoor Sri Krishna Temple",
    places: ["Kochi", "Guruvayoor"],
    route: "Kochi → Guruvayoor → Kochi",
    description: "A temple-focused start followed by time in the city.",
    pace: "One night in Guruvayoor and one in Kochi",
    ideal: "Temple visitors & families",
    highlights: "Temple visit, Kochi heritage, Waterfront sightseeing",
    itinerary: [
      "Travel from Kochi to Guruvayoor for Sree Krishna Temple, with an optional elephant care centre visit before staying overnight.",
      "Explore Kochi's heritage sights and waterfront as time permits, with optional shopping and an overnight stay in the city.",
      "Use available time for further Kochi sightseeing before departure from the airport, railway station or bus station.",
    ],
    notes:
      "Elephant viewing is from a distance. Kochi sightseeing depends on available time and opening days.",
    source: {
      title: "3 Days 2 Nights Guruvayoor",
      url: "https://www.paradise-kerala.com/tourpackage/Kerala-Tour-Packages/3days-2nights-Guruvayoor/",
      reviewed: "2026-10-19",
    },
  },
  {
    id: "kerala-vagamon",
    name: "Vagamon Meadows and Hill Shrines",
    destination: "Kerala",
    region: "Kerala",
    style: "Mountains",
    styles: ["Slow escapes", "Family"],
    days: 2,
    nights: 1,
    image: "destinations/vagamon.jpg",
    alt: "The rolling green meadows and hills of Vagamon",
    places: ["Vagamon", "Kochi"],
    route: "Vagamon → Kochi",
    description: "A compact hill escape with time for local landscapes.",
    pace: "One hill-country night before returning to Kochi",
    ideal: "Hill lovers & short-break travellers",
    highlights: "Pine woods, Meadows, Hill shrines",
    itinerary: [
      "Explore Vagamon's pine woods, tea estates, meadows and orchid garden, along with Thangalpara, Murukan Mala and Kurisumala, before staying overnight.",
      "Return to Kochi, allowing for heritage sightseeing or shopping if time permits, then depart from the airport, railway station or bus station.",
    ],
    notes:
      "Adventure activities are suggested for a two-night stay, with tickets charged separately. Kochi visits depend on departure time.",
    source: {
      title: "2 Days 1 Night Vagamon",
      url: "https://www.paradise-kerala.com/tourpackage/Kerala-Tour-Packages/2days-1night-lovely-vagamon/",
      reviewed: "2026-10-19",
    },
  },
  {
    id: "kerala-marari",
    name: "Marari Shore and Village Life",
    destination: "Kerala",
    region: "Kerala",
    style: "Beaches",
    styles: ["Slow escapes", "Honeymoon"],
    days: 3,
    nights: 2,
    image: "destinations/marari.jpg",
    alt: "Waves along the sandy shoreline of Marari Beach",
    places: ["Kochi", "Marari"],
    route: "Kochi → Marari → Kochi",
    description: "Room for the beach, village life and time at your stay.",
    pace: "Two nights at a coastal base",
    ideal: "Couples & travellers seeking a slower break",
    highlights: "Marari Beach, Fishing harbour, Canal canoe ride",
    itinerary: [
      "Head from Kochi to Marari, explore the organic farm and butterfly garden, and spend sunset on the beach before meditation or cultural activities.",
      "Combine yoga with a fishing-harbour walk or cycle, herbal and vegetable gardens, a canal canoe ride, beach time, Ayurveda and a Kerala cooking demonstration.",
      "Enjoy a final beach walk before returning to Kochi, allowing for Fort Kochi sightseeing or shopping if there is time before departure.",
    ],
    notes:
      "Garden, wellness and cooking experiences are resort-specific; request a stay that offers them. Kochi sightseeing depends on departure time.",
    source: {
      title: "3 Days 2 Nights Cochin–Marari–Cochin",
      url: "https://www.paradise-kerala.com/tourpackage/Cgh-earth-exclusive-packages/3days-2nights-cochin-marari-cochin/",
      reviewed: "2026-10-19",
    },
  },
  {
    id: "kerala-kollam",
    name: "Ashtamudi Waterways and Island Crafts",
    destination: "Kerala",
    region: "Kerala",
    style: "Culture & heritage",
    styles: ["Slow escapes", "Family"],
    days: 3,
    nights: 2,
    image: "destinations/kollam.jpg",
    alt: "Ashtamudi Lake and the backwaters of Kollam",
    places: ["Trivandrum", "Kollam", "Munroe Island"],
    experiences: ["Houseboat"],
    route: "Trivandrum → Kollam → Trivandrum",
    description: "Explore waterways and everyday life around a lakeside base.",
    pace: "A village excursion between arrival and departure days",
    ideal: "Small groups & culture lovers",
    highlights: "Jatayu Earth's Centre, Ashtamudi Lake, Munroe Island",
    itinerary: [
      "Travel from Trivandrum through Chadayamangalam for Jatayu Earth's Centre, then continue to Paravoor in Kollam for a relaxed evening.",
      "Cruise Ashtamudi by houseboat, then canoe through Munroe Island’s canals for village life, fishing, coir-making and farming, with lunch in a village home.",
      "Return to Trivandrum for departure, adding temple, palace, gallery, zoo or planetarium visits if time permits.",
    ],
    notes:
      "Trivandrum sightseeing depends on departure time. A Kollam rail departure with a possible lighthouse stop is an alternative.",
    source: {
      title: "3 Days 2 Nights Trivandrum–Kollam–Trivandrum",
      url: "https://www.paradise-kerala.com/tourpackage/Experiential-tours/3days-2nights-trivandrum-kollam-trivandrum/",
      reviewed: "2026-10-19",
    },
  },
  {
    id: "south-temple-trail",
    name: "Hill Country & Tamil Temple Trail",
    destination: "Kerala & Tamil Nadu",
    region: "South",
    regions: ["Kerala", "South"],
    regionLabel: "KERALA & TAMIL NADU",
    style: "Culture & heritage",
    styles: ["Mountains", "Beaches"],
    days: 8,
    nights: 7,
    image: "destinations/madurai.jpg",
    alt: "Ornate gopuram of Meenakshi Temple in Madurai",
    places: [
      "Munnar",
      "Thekkady",
      "Madurai",
      "Rameswaram",
      "Kovalam",
      "Kochi",
      "Trivandrum",
    ],
    route:
      "Kochi → Munnar → Thekkady → Madurai → Rameswaram → Kovalam → Trivandrum / Kochi",
    description:
      "A longer journey linking hill country, temple towns and the coast.",
    pace: "Several long transfers with sightseeing between stays",
    ideal: "Travellers comfortable with an active route",
    highlights: "Meenakshi Temple, Pamban Bridge, Kovalam",
    itinerary: [
      "Reach Munnar from Kochi via waterfalls and plantations.",
      "Explore Eravikulam, tea heritage, Mattupetty, Echo Point and Kundala.",
      "Continue to Thekkady, with optional Periyar boating and evening activities.",
      "Head to Madurai for Meenakshi Temple, Tirumalai Nayak Palace and Gandhi Museum, time permitting.",
      "Travel to Rameswaram for Pamban Bridge, Dhanushkodi and temple visits.",
      "Continue to Kovalam, choosing beach time or Trivandrum sightseeing as schedules allow.",
      "Use another Kovalam day for the beach or Trivandrum’s temples and museums.",
      "Depart through Trivandrum or take the longer return to Kochi.",
    ],
    notes:
      "Optional activities cost extra; visits depend on access and time. Trivandrum departure avoids the longer return to Kochi.",
    source: {
      title: "8 Days 7 Nights Madhurai Rameshwaram Tour",
      url: "https://www.paradise-kerala.com/tourpackage/Kerala-Tour-Packages/8days-7nights-madhurai-rameshwaram-tour/",
      reviewed: "2026-10-19",
    },
  },
  {
    id: "south-shores-backwaters",
    name: "Southern Shores to Alleppey Backwaters",
    destination: "Kerala & Tamil Nadu",
    region: "South",
    regions: ["Kerala", "South"],
    regionLabel: "KERALA & TAMIL NADU",
    style: "Beaches",
    styles: ["Family", "Slow escapes"],
    days: 6,
    nights: 5,
    image: "destinations/kanyakumari.jpg",
    alt: "Vivekananda Rock Memorial off the coast of Kanyakumari",
    places: ["Kanyakumari", "Kovalam", "Alappuzha", "Houseboat"],
    route: "Trivandrum → Kanyakumari → Kovalam → Alappuzha → Kochi",
    description:
      "Combine the southern coast with a final night on the backwaters.",
    pace: "Several coastal stays followed by a houseboat night",
    ideal: "Couples, families & coast lovers",
    highlights: "Vivekananda Rock, Kovalam shore, Overnight houseboat",
    itinerary: [
      "Travel to Kanyakumari for Vivekananda Rock, the beach and sunset.",
      "Enjoy Kanyakumari’s sunrise and temple before an afternoon transfer to Kovalam.",
      "Choose Kovalam beach time or Trivandrum’s temple, palace and museum sights.",
      "Move to Alappuzha for a beach visit, shopping and a relaxed resort evening.",
      "Board an Alappuzha houseboat at noon, cruise in the afternoon and anchor overnight.",
      "Finish the morning cruise, disembark at 9 am and leave through Kochi, sightseeing if time permits.",
    ],
    notes:
      "Sunrise and sunset depend on weather. The houseboat anchors overnight and resumes cruising in the morning.",
    source: {
      title: "6 Days 5 Nights Kanyakumari Alleppey Tour",
      url: "https://www.paradise-kerala.com/tourpackage/Kerala-Tour-Packages/6days-5nights-kanyakumari-alleppey-tour/",
      reviewed: "2026-10-19",
    },
  },
  {
    id: "rajasthan",
    name: "Royal roads of Rajasthan",
    destination: "Rajasthan",
    region: "West",
    style: "Culture & heritage",
    days: 7,
    nights: 6,
    image: "rajasthan.jpg",
    alt: "Hawa Mahal’s ornate pink facade in Jaipur",
    places: ["Jaipur", "Jodhpur", "Udaipur"],
    route: "Jaipur → Jodhpur → Udaipur",
    description:
      "Pink-city lanes, blue-city stories and evenings beside the lake.",
    pace: "Active sightseeing & longer road days",
    ideal: "Culture lovers, couples & friends",
    highlights: "Jaipur palaces, Jodhpur lanes, Udaipur lakes",
    itinerary: [
      "Arrive in Jaipur and take an easy first walk through the Pink City.",
      "Spend the day exploring Jaipur’s forts, palaces and bazaars.",
      "Travel to Jodhpur, with stops to be agreed around your interests.",
      "Explore Mehrangarh and the older lanes of the Blue City.",
      "Journey to Udaipur and settle in for a lakeside evening.",
      "Discover Udaipur’s palaces and leave time for independent exploring.",
      "Depart from Udaipur or discuss an extension.",
    ],
  },
  {
    id: "ladakh",
    name: "Under Ladakh’s big sky",
    destination: "Ladakh",
    region: "North",
    style: "Mountains",
    days: 7,
    nights: 6,
    image: "ladakh.jpg",
    alt: "Blue Pangong Lake surrounded by Ladakh mountains",
    places: ["Leh", "Nubra Valley", "Pangong"],
    route: "Leh → Nubra Valley → Pangong → Leh",
    description:
      "Wide-open landscapes, mountain monasteries and a whole new perspective.",
    pace: "High altitude; gradual acclimatisation",
    ideal: "Mountain lovers & experienced travellers",
    highlights: "Leh, Nubra landscapes, Pangong Lake",
    planningNote:
      "High-altitude travel needs individual planning; discuss suitability, acclimatisation, permits and road conditions before booking.",
    itinerary: [
      "Arrive in Leh. Keep the day restful for acclimatisation.",
      "Another gentle day in Leh, with light local exploration if you feel well.",
      "Subject to conditions and permits, travel towards Nubra Valley.",
      "Explore Nubra at a comfortable pace, with agreed local stops.",
      "Continue towards Pangong only if routes, permits and acclimatisation allow.",
      "Return to Leh with time to rest.",
      "Depart from Leh. Build in flexibility for weather-related changes.",
    ],
  },
  {
    id: "goa",
    name: "A little more Goa",
    destination: "Goa",
    region: "West",
    style: "Beaches",
    days: 4,
    nights: 3,
    image: "goa.jpg",
    alt: "Palm trees along a beach in Goa",
    places: ["Panaji", "Old Goa", "South Goa"],
    route: "Panaji → Old Goa → South Goa",
    description:
      "Colourful streets, coastal flavours and days that end by the sea.",
    pace: "Relaxed, with optional sightseeing",
    ideal: "Beach lovers, couples & small groups",
    highlights: "Panaji lanes, Old Goa, quiet beach time",
    itinerary: [
      "Arrive in Goa and settle into your preferred coastal base.",
      "Explore Panaji’s heritage streets and Old Goa, at your chosen pace.",
      "Leave a full day for South Goa’s beaches or an optional local experience.",
      "Enjoy a slow morning before your onward journey.",
    ],
  },
  {
    id: "sikkim",
    name: "Sikkim, softly explored",
    destination: "Sikkim",
    region: "Northeast",
    style: "Mountains",
    days: 6,
    nights: 5,
    image: "sikkim.jpg",
    alt: "Colourful hillside buildings in Gangtok, Sikkim",
    places: ["Gangtok", "Ravangla", "Pelling"],
    route: "Gangtok → Ravangla → Pelling",
    description:
      "Monastery mornings, winding hill roads and mountain-town moments.",
    pace: "Scenic hill drives & moderate walking",
    ideal: "Nature lovers, couples & families",
    highlights: "Gangtok, Ravangla, Pelling viewpoints",
    itinerary: [
      "Arrive via your agreed gateway and transfer to Gangtok.",
      "Explore Gangtok’s town centre and nearby cultural sights.",
      "Enjoy a flexible day around Gangtok, with local visits agreed in advance.",
      "Travel towards Pelling via Ravangla, allowing time for scenic stops.",
      "Explore Pelling’s surroundings and viewpoints, weather permitting.",
      "Transfer to your departure point with generous time for hill-road travel.",
    ],
  },
  {
    id: "triangle",
    name: "India’s golden beginning",
    destination: "Golden Triangle",
    region: "North",
    style: "Culture & heritage",
    days: 5,
    nights: 4,
    image: "taj.jpg",
    alt: "Taj Mahal and its reflecting pool in Agra",
    places: ["Delhi", "Agra", "Jaipur"],
    route: "Delhi → Agra → Jaipur",
    description:
      "Three iconic cities. Centuries of stories. A memorable first chapter.",
    pace: "Full days of sightseeing & road transfers",
    ideal: "First-time visitors & heritage lovers",
    highlights: "Delhi heritage, Taj Mahal, Jaipur",
    itinerary: [
      "Arrive in Delhi and explore a few agreed city highlights.",
      "Travel to Agra with time for the city’s heritage sights.",
      "Visit the Taj Mahal on an operating day, then travel to Jaipur.",
      "Explore Jaipur’s forts, palaces and colourful bazaars.",
      "Depart from Jaipur, or discuss a return transfer to Delhi.",
    ],
  },
];
