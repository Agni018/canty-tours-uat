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
  /** Kerala is its own region; the "South India" filter also includes it. */
  region: Region;
  /** Main style: shown on the card and used to prefill the trip form. */
  style: TravelStyle;
  /** Extra styles the tour also matches in the style filter. */
  styles?: TravelStyle[];
  days: number;
  nights: number;
  /** File name in public/assets, without the .jpg extension. */
  image: string;
  alt: string;
  places: string[];
  route: string;
  description: string;
  pace: string;
  ideal: string;
  highlights: string;
  /** Extra caution shown in the detail dialog before the standard disclaimer. */
  planningNote?: string;
  /** One entry per day. */
  itinerary: string[];
};

export const tours: Tour[] = [
  {
    id: "kerala-hills-backwaters",
    name: "Tea hills & backwater days",
    destination: "Kerala",
    region: "Kerala",
    style: "Slow escapes",
    styles: ["Mountains"],
    days: 4,
    nights: 3,
    image: "munnar",
    alt: "Green tea plantations across the hills of Munnar",
    places: ["Kochi", "Munnar", "Alappuzha"],
    route: "Kochi → Munnar → Alappuzha → Kochi",
    description:
      "Two nights in the tea hills and one beside the backwaters. A small introduction to Kerala’s changing landscapes.",
    pace: "A compact route with two longer transfer days",
    ideal: "Couples & travellers on a short break",
    highlights: "Munnar tea landscapes, Alappuzha backwaters",
    itinerary: [
      "Arrive in Kochi early enough for the road transfer to Munnar. Settle in for the first of two nights in the hills; a late arrival needs an extra night in Kochi.",
      "Explore Munnar’s tea country, choosing a few local stops with your driver. Keep time for a quiet afternoon rather than trying to see everything.",
      "Leave Munnar for Alappuzha. Choose a waterside stay with an optional cruise, or discuss a houseboat night and its check-in time before booking.",
      "Return to Kochi for an afternoon or evening departure, allowing a generous buffer for the road transfer and airport check-in.",
    ],
  },
  {
    id: "kerala-classic",
    name: "Kerala, a little of everything",
    destination: "Kerala",
    region: "Kerala",
    style: "Culture & heritage",
    styles: ["Mountains", "Family"],
    days: 5,
    nights: 4,
    image: "kerala",
    alt: "A traditional boat on Kerala’s palm-lined backwaters",
    places: ["Kochi", "Munnar", "Thekkady", "Alappuzha"],
    route: "Kochi → Munnar → Thekkady → Alappuzha → Kochi",
    description:
      "Tea country, spice-growing hills and backwater life, brought together in a classic Kerala circuit.",
    pace: "Varied days with three road transfers between stays",
    ideal: "First-time visitors, couples & families",
    highlights: "Munnar tea country, Thekkady spices, Alappuzha waterways",
    itinerary: [
      "Meet in Kochi for an early arrival and transfer to Munnar. Check in for two nights; add a Kochi night if your arrival is late.",
      "Spend the day around Munnar’s tea landscapes, with local sightseeing shaped around your interests and opening days.",
      "Travel to Thekkady for an overnight stay. Discuss a spice-garden visit or a booked Periyar activity; tickets and availability need confirmation and wildlife sightings are not guaranteed.",
      "Continue to Alappuzha for one night. A backwater stay, day cruise or houseboat overnight can be arranged around arrival time and confirmed availability.",
      "Travel back to Kochi. Choose a later departure so the morning and road transfer do not feel rushed.",
    ],
  },
  {
    id: "kerala-family",
    name: "Kerala with room to pause",
    destination: "Kerala",
    region: "Kerala",
    style: "Family",
    styles: ["Slow escapes", "Culture & heritage"],
    days: 6,
    nights: 5,
    image: "kerala",
    alt: "A traditional boat on Kerala’s palm-lined backwaters",
    places: ["Kochi", "Munnar", "Kumarakom"],
    route: "Kochi → Munnar → Kumarakom → Kochi",
    description:
      "A gentle Kochi arrival, two hill-country nights and two nights by the water, with space for everyone’s pace.",
    pace: "Fewer hotel changes, with two longer road transfers",
    ideal: "Families & travellers who prefer a slower rhythm",
    highlights: "Fort Kochi, Munnar tea hills, Kumarakom waterside time",
    itinerary: [
      "Arrive in Kochi and stay overnight. If arrival time allows, take a short Fort Kochi walk; otherwise keep the day for settling in.",
      "Travel to Munnar with breaks along the way. Check in for two nights and leave the rest of the day open.",
      "Choose a small number of Munnar sights to suit your group. Balance tea-country exploring with time back at your stay.",
      "Transfer to Kumarakom for two nights at a waterside base. Keep the afternoon unplanned after the drive.",
      "Spend a flexible day by the backwaters. Discuss a short boat trip, local walk or simply time at your stay; activities depend on weather and availability.",
      "Return to Kochi for your onward journey, allowing for traffic and airport check-in.",
    ],
  },
  {
    id: "kerala-honeymoon",
    name: "Just the two of you, in Kerala",
    destination: "Kerala",
    region: "Kerala",
    style: "Honeymoon",
    styles: ["Slow escapes"],
    days: 5,
    nights: 4,
    image: "munnar",
    alt: "Tea gardens covering the green hills of Munnar",
    places: ["Kochi", "Munnar", "Kumarakom"],
    route: "Kochi → Munnar → Kumarakom → Kochi",
    description:
      "Two mornings in the tea hills, two evenings beside the water, and time together between the plans.",
    pace: "Two bases with time to relax between transfers",
    ideal: "Honeymooners & couples",
    highlights:
      "Munnar mornings, Kumarakom backwaters, unhurried time together",
    itinerary: [
      "Arrive in Kochi early enough to continue to Munnar for two nights. Add an arrival night in Kochi if flight timings make the hill drive too late.",
      "Enjoy a relaxed day in Munnar. Choose tea-country viewpoints and a local visit, leaving room for a leisurely lunch and time at your stay.",
      "Travel to Kumarakom and settle in for two nights. Discuss your preferred room and any special arrangements when requesting a quote.",
      "Keep a full day for the backwaters. A private cruise or other experience can be requested, subject to the operator, weather and availability.",
      "Return to Kochi for a later departure, with a comfortable transfer and airport buffer.",
    ],
  },
  {
    id: "kerala-hills-to-coast",
    name: "From tea country to the coast",
    destination: "Kerala",
    region: "Kerala",
    style: "Beaches",
    styles: ["Culture & heritage"],
    days: 7,
    nights: 6,
    image: "varkala",
    alt: "Varkala’s sandy shoreline below its coastal cliffs",
    places: ["Kochi", "Munnar", "Alappuzha", "Varkala", "Thiruvananthapuram"],
    route: "Kochi → Munnar → Alappuzha → Varkala → Thiruvananthapuram",
    description:
      "Old-town lanes, green hills and quiet waterways lead to two nights beside Varkala’s coast.",
    pace: "A varied route with transfer days and a full coastal day",
    ideal: "Couples, friends & travellers with a week to explore",
    highlights: "Fort Kochi, Munnar, Alappuzha backwaters, Varkala coast",
    itinerary: [
      "Arrive in Kochi and stay overnight. Explore a little of Fort Kochi if your arrival time allows.",
      "Travel to Munnar for two nights. Take the afternoon at an easy pace after the drive.",
      "Spend a full day in Munnar’s tea landscapes, choosing sightseeing around local conditions and your interests.",
      "Continue to Alappuzha for a backwater night. Confirm whether your plan uses a land-based stay or houseboat, including its boarding time.",
      "Travel south to Varkala and check in for two nights. Leave the evening open for coastal views.",
      "Enjoy a full day around Varkala. Beach access, swimming and boat activities depend on local conditions and safety advice.",
      "Transfer to Thiruvananthapuram for your departure with a generous airport buffer. A return to Kochi needs a longer transfer or an extra night.",
    ],
  },
  {
    id: "kerala-wayanad",
    name: "A green escape to Wayanad",
    destination: "Kerala",
    region: "Kerala",
    style: "Mountains",
    styles: ["Family", "Slow escapes"],
    days: 4,
    nights: 3,
    image: "wayanad",
    alt: "Forest-covered mountains in Wayanad, Kerala",
    places: ["Kozhikode", "Wayanad"],
    route: "Kozhikode → Wayanad → Kozhikode",
    description:
      "Three nights in one green hill-country base, with time for plantation scenery and your choice of local exploring.",
    pace: "One base, winding hill drives & optional walking",
    ideal: "Nature lovers, families & small groups",
    highlights: "Wayanad landscapes, plantation country, flexible local days",
    itinerary: [
      "Arrive in Kozhikode and transfer to your Wayanad base for three nights. Allow time for the winding hill roads and keep the evening quiet.",
      "Explore local landscapes and plantation country at your preferred pace. Agree a manageable set of stops based on where you are staying.",
      "Choose another local day or rest at your stay. Discuss any cave, forest or walking visits in advance: access, permits, opening days and suitable walking conditions must be confirmed.",
      "Return to Kozhikode for your onward journey, leaving a generous buffer for hill-road traffic and check-in.",
    ],
  },
  {
    id: "rajasthan",
    name: "Royal roads of Rajasthan",
    destination: "Rajasthan",
    region: "West",
    style: "Culture & heritage",
    days: 7,
    nights: 6,
    image: "rajasthan",
    alt: "Hawa Mahal’s ornate pink facade in Jaipur",
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
    places: ["Jaipur", "Jodhpur", "Udaipur"],
  },
  {
    id: "ladakh",
    name: "Under Ladakh’s big sky",
    destination: "Ladakh",
    region: "North",
    style: "Mountains",
    days: 7,
    nights: 6,
    image: "ladakh",
    alt: "Blue Pangong Lake surrounded by Ladakh mountains",
    route: "Leh → Nubra Valley → Pangong → Leh",
    description:
      "Wide-open landscapes, mountain monasteries and a whole new perspective.",
    pace: "High altitude; gradual acclimatisation",
    planningNote:
      "High-altitude travel needs individual planning; discuss suitability, acclimatisation, permits and road conditions before booking.",
    ideal: "Mountain lovers & experienced travellers",
    highlights: "Leh, Nubra landscapes, Pangong Lake",
    itinerary: [
      "Arrive in Leh. Keep the day restful for acclimatisation.",
      "Another gentle day in Leh, with light local exploration if you feel well.",
      "Subject to conditions and permits, travel towards Nubra Valley.",
      "Explore Nubra at a comfortable pace, with agreed local stops.",
      "Continue towards Pangong only if routes, permits and acclimatisation allow.",
      "Return to Leh with time to rest.",
      "Depart from Leh. Build in flexibility for weather-related changes.",
    ],
    places: ["Leh", "Nubra Valley", "Pangong"],
  },
  {
    id: "goa",
    name: "A little more Goa",
    destination: "Goa",
    region: "West",
    style: "Beaches",
    days: 4,
    nights: 3,
    image: "goa",
    alt: "Palm trees along a beach in Goa",
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
    places: ["Panaji", "Old Goa", "South Goa"],
  },
  {
    id: "sikkim",
    name: "Sikkim, softly explored",
    destination: "Sikkim",
    region: "Northeast",
    style: "Mountains",
    days: 6,
    nights: 5,
    image: "sikkim",
    alt: "Colourful hillside buildings in Gangtok, Sikkim",
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
    places: ["Gangtok", "Ravangla", "Pelling"],
  },
  {
    id: "triangle",
    name: "India’s golden beginning",
    destination: "Golden Triangle",
    region: "North",
    style: "Culture & heritage",
    days: 5,
    nights: 4,
    image: "taj",
    alt: "Taj Mahal and its reflecting pool in Agra",
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
    places: ["Delhi", "Agra", "Jaipur"],
  },
];
