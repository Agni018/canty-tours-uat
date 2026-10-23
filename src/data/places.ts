import type { Region } from "./tours";

/** A choice in the "Where to?" photo picker. Photos are stored in public/assets. */
export type Place = {
  name: string;
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
];

/** The filter value a place selects. */
export const placeValue = (p: Place) => p.value ?? p.name;
