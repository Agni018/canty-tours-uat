import type { Region } from "./tours";

/** A choice in the "Where to?" photo picker. Photos are stored in public/assets. */
export type Place = {
  name: string;
  /** The name with a soft hyphen (\u00AD) where it may break, when it is too long for a photo tile. */
  tileName?: string;
  /** Filter value when it differs from the name (Alleppey matches Alappuzha routes). */
  value?: string;
  /** Region to select with the place; Kerala when omitted. */
  region?: Region;
  image: string;
  alt: string;
  /** Photo credit, shown in the privacy dialog as the licences require. */
  credit: {
    creator: string;
    license: string;
    licenseUrl: string;
    sourcePage: string;
  };
};

export const places: Place[] = [
  {
    name: "Guruvayoor",
    image: "destinations/guruvayoor.jpg",
    alt: "The traditional entrance to Guruvayoor Sri Krishna Temple",
    credit: {
      creator: "Susmitanair",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Guruvayoor_Temple_1.jpg",
    },
  },
  {
    name: "Thrissur",
    image: "destinations/thrissur.jpg",
    alt: "The tiered, tiled southern gateway tower of Vadakkunnathan Temple in Thrissur",
    credit: {
      creator: "Challiyan at Malayalam Wikipedia",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:വടക്കുംനാഥക്ഷേത്രം-തെക്കേഗോപുരം.jpg",
    },
  },
  {
    name: "Athirapilly",
    image: "destinations/athirapilly.jpg",
    alt: "Athirappilly waterfalls cascading over the rocks amid forest",
    credit: {
      creator: "Dil Shad Roshan",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Athirappilly_Waterfalls_1.jpg",
    },
  },
  {
    name: "Munnar",
    image: "destinations/munnar.jpg",
    alt: "Misty green tea gardens on the rolling hills of Munnar",
    credit: {
      creator: "Vivek Kumar",
      license: "Unsplash License",
      licenseUrl: "https://unsplash.com/license",
      sourcePage:
        "https://unsplash.com/photos/tea-gardens-on-munnar-hills-JS_ohjocm00",
    },
  },
  {
    name: "Chinnar",
    image: "destinations/chinnar.jpg",
    alt: "Rugged peaks above the forested slopes of Chinnar Wildlife Sanctuary",
    credit: {
      creator: "Dipu TR",
      license: "CC BY 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by/3.0/",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Chinnar_-_panoramio.jpg",
    },
  },
  {
    name: "Thekkady",
    image: "destinations/thekkady.jpg",
    alt: "Thekkady Lake surrounded by the green Periyar Wildlife Sanctuary",
    credit: {
      creator: "Kir360",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Thekkady_Lake.jpg",
    },
  },
  {
    name: "Vagamon",
    image: "destinations/vagamon.jpg",
    alt: "The rolling green meadows and hills of Vagamon",
    credit: {
      creator: "Bibin C. Alex (Bibinca)",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Hills_Vagamon.jpg",
    },
  },
  {
    name: "Houseboat",
    image: "destinations/houseboat.jpg",
    alt: "A traditional Kerala houseboat on the backwaters near Alleppey",
    credit: {
      creator: "Wouter Hagens",
      license: "Public domain (released by photographer)",
      licenseUrl:
        "https://commons.wikimedia.org/wiki/File:House_boat_1.JPG#Licensing",
      sourcePage: "https://commons.wikimedia.org/wiki/File:House_boat_1.JPG",
    },
  },
  {
    name: "Alleppey",
    value: "Alappuzha",
    image: "destinations/alleppey.jpg",
    alt: "Houseboats and palm-lined shores on the Alleppey backwaters",
    credit: {
      creator: "Ashish Sharma (Camouflaged)",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:VembanadAlleppey.jpg",
    },
  },
  {
    name: "Kumarakom",
    image: "destinations/kumarakom.jpg",
    alt: "A broad view of the Kumarakom backwaters near the bird sanctuary",
    credit: {
      creator: "Vis M",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Kumarakom_backwaters_panorama.jpg",
    },
  },
  {
    name: "Marari",
    image: "destinations/marari.jpg",
    alt: "Waves along the sandy shoreline of Marari Beach",
    credit: {
      creator: "Mahendra M",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Marari_Beach_Shoreline.JPG",
    },
  },
  {
    name: "Fort Kochi & Mattancherry",
    value: "Fort Kochi",
    image: "destinations/fort-kochi.jpg",
    alt: "Chinese fishing nets silhouetted against the evening sky at Fort Kochi",
    credit: {
      creator: "Challiyil Eswaramangalath Vipin",
      license: "CC BY-SA 2.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0/",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Chinese_fishingnet_kochi.jpg",
    },
  },
  {
    name: "Cherai",
    image: "destinations/cherai.jpg",
    alt: "Palm-lined golden sand along Cherai Beach on Vypin Island",
    credit: {
      creator: "Vis M",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Cherai_Beach_04.jpg",
    },
  },
  {
    name: "Kollam",
    image: "destinations/kollam.jpg",
    alt: "Ashtamudi Lake and the backwaters of Kollam",
    credit: {
      creator: "Rahul Pariharacodu",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Ashtamudi_lake.jpg",
    },
  },
  {
    name: "Palaruvi Falls",
    image: "destinations/palaruvi.jpg",
    alt: "Palaruvi Falls streaming down a steep rock face into a boulder-strewn pool",
    credit: {
      creator: "Noon Plastic",
      license: "CC BY 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by/4.0/",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Palaruvi_Waterfalls,_June_2022_02.jpg",
    },
  },
  {
    name: "Varkala",
    image: "varkala.jpg",
    alt: "Varkala Beach beneath the coastal cliffs",
    credit: {
      creator: "Nandu Vasudevan",
      license: "Unsplash License",
      licenseUrl: "https://unsplash.com/license",
      sourcePage: "https://unsplash.com/photos/BU0lMokk7tA",
    },
  },
  {
    name: "Kovalam",
    image: "destinations/kovalam.jpg",
    alt: "Kovalam Lighthouse Beach and its curved coastline",
    credit: {
      creator: "P.K.Niyogi",
      license: "Public domain",
      licenseUrl:
        "https://commons.wikimedia.org/wiki/File:Kovalam_Lighthouse_Beach.JPG#Licensing",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Kovalam_Lighthouse_Beach.JPG",
    },
  },
  {
    name: "Thiruvananthapuram",
    tileName: "Thiruvanantha\u00ADpuram",
    value: "Trivandrum",
    image: "destinations/thiruvananthapuram.jpg",
    alt: "The red-and-white gabled Napier Museum in Thiruvananthapuram",
    credit: {
      creator: "Shagil Kannur",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:The_Napier_Museum_of_Thiruvananthapuram,_Kerala_05.jpg",
    },
  },
  {
    name: "Ponmudi",
    image: "destinations/ponmudi.jpg",
    alt: "Layered green ridges of the Western Ghats seen from the top of Ponmudi",
    credit: {
      creator: "Akhilan",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Ponmudi_Climate_Observatory.jpg",
    },
  },
  {
    name: "Meenmutty Falls",
    image: "destinations/meenmutty.jpg",
    alt: "Meenmutty Falls tumbling between dark rocks into a forest pool at Kallar, near Ponmudi",
    credit: {
      creator: "Shubhammaurya94",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Meenmutty_Waterfalls.jpg",
    },
  },
  {
    name: "Kanyakumari",
    region: "South",
    image: "destinations/kanyakumari.jpg",
    alt: "Vivekananda Rock Memorial off the coast of Kanyakumari",
    credit: {
      creator: "Ankit Darsi",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Vivekananda_rock,_Kanyakumari.jpg",
    },
  },
  {
    name: "Madurai",
    region: "South",
    image: "destinations/madurai.jpg",
    alt: "Ornate gopuram of Meenakshi Temple in Madurai",
    credit: {
      creator: "Vyacheslav Argenberg",
      license: "CC BY 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by/4.0/",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Meenakshi_Temple,_Gopuram,_Madurai,_India.jpg",
    },
  },
  {
    name: "Rameswaram",
    region: "South",
    image: "destinations/rameswaram.jpg",
    alt: "Pamban Bridge crossing the sea near Rameswaram",
    credit: {
      creator: "Msudhakardce",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:The_Pamban_Bridge,_Rameswaram.jpg",
    },
  },
  {
    name: "Wayanad",
    image: "wayanad.jpg",
    alt: "Lush green mountains in Wayanad",
    credit: {
      creator: "Niranjan V S",
      license: "Unsplash License",
      licenseUrl: "https://unsplash.com/license",
      sourcePage:
        "https://unsplash.com/photos/mountains-covered-in-lush-green-vegetation-stand-tall-rTiBFR2c99c",
    },
  },
  {
    name: "Nelliyampathy",
    image: "destinations/nelliyampathy.jpg",
    alt: "A lone tree on the cliff edge at Seetharkundu viewpoint in Nelliyampathy, above the plains",
    credit: {
      creator: "Kjrajesh",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Sithar_Kundu_View_Point_01.jpg",
    },
  },
  {
    name: "Silent Valley",
    image: "destinations/silent-valley.jpg",
    alt: "Grassy hills and dark shola forest in Silent Valley National Park",
    credit: {
      creator: "Davidvraju",
      license: "CC0 1.0",
      licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Shola_Forest_Silent_valley_NP_(3).jpg",
    },
  },
  {
    name: "Muzhappilangad",
    image: "destinations/muzhappilangad.jpg",
    alt: "Cars parked on the firm sand of Muzhappilangad drive-in beach",
    credit: {
      creator: "Shagil Kannur",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Muzhappilangad_Beach_by_Shahil_Kannur.jpg",
    },
  },
  {
    name: "Kavvayi",
    image: "destinations/kavvayi.jpg",
    alt: "Coconut palms reflected in the still Kavvayi backwaters near Payyannur",
    credit: {
      creator: "Manojk",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Kavvayi_Backwaters,_Payyannur_32.jpg",
    },
  },
  {
    name: "Bekal Fort",
    value: "Bekal",
    image: "destinations/bekal.jpg",
    alt: "A laterite walkway leading out to a round bastion of Bekal Fort above the Arabian Sea",
    credit: {
      creator: "Karippal.me",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Extension_of_Bekal_Fort_into_the_Arabian_Sea.jpg",
    },
  },
];

/** The filter value a place selects. */
export const placeValue = (p: Place) => p.value ?? p.name;
