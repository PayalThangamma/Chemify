document.addEventListener("DOMContentLoaded", () => {
  // --- DATA ---
  elementsData = [
    {
      symbol: "H",
      name: "Hydrogen",
      characterName: "Energetic Hydrogen",
      emoji: "💨",
      family: "Nonmetal",
      sound: "/assets/sounds/row1/hydrogen.mp3",
      funFact: {
        text: "I am the most common element in the universe! I power the sun.",
        meme: "./assets/memes/1.png",
      },
      realWorldUses: [],
    },
    {
      symbol: "He",
      name: "Helium",
      characterName: "Happy Helium",
      emoji: "🎈",
      family: "Noble Gas",
      sound: "./assets/sounds/row1/helium.mp3",
      funFact: {
        text: "I am so light, I make balloons float and your voice squeaky!",
        meme: "",
      },
      realWorldUses: [],
    },

    {
      symbol: "Li",
      name: "Lithium",
      characterName: "Charged-up Lithium",
      emoji: "🔋",
      family: "Alkali Metal",
      sound: "./assets/sounds/row2/lithium.mp3",
      funFact: {
        text: "I am a light metal that stores a lot of energy, perfect for batteries.",
        meme: "",
      },
      realWorldUses: [],
    },
    {
      symbol: "Be",
      name: "Beryllium",
      characterName: "Bright Beryllium",
      emoji: "🔹",
      family: "Alkaline Earth Metal",
      sound: "./assets/sounds/row2/beryllium.mp3",
      funFact: {
        text: "I am a lightweight metal used in aerospace materials.",
        meme: "",
      },
      realWorldUses: [],
    },
    {
      symbol: "B",
      name: "Boron",
      characterName: "Brilliant Boron",
      emoji: "🧪",
      family: "Metalloid",
      sound: "./assets/sounds/row2/boron.mp3",
      funFact: {
        text: "I am used to make strong borosilicate glass.",
        meme: "./assets",
      },
      realWorldUses: [],
    },
    {
      symbol: "C",
      name: "Carbon",
      characterName: "Creative Carbon",
      emoji: "💎",
      family: "Nonmetal",
      sound: "./assets/sounds/row2/carbon.mp3",
      funFact: { text: "I form the basis of all life on Earth.", meme: "" },
      realWorldUses: [],
    },
    {
      symbol: "N",
      name: "Nitrogen",
      characterName: "Noble Nitrogen",
      emoji: "🌬️",
      family: "Nonmetal",
      sound: "./assets/sounds/row2/nitrogen.mp3",
      funFact: { text: "I make up 78% of the Earth’s atmosphere.", meme: "" },
      realWorldUses: [],
    },
    {
      symbol: "O",
      name: "Oxygen",
      characterName: "Awesome Oxygen",
      emoji: "🌬️",
      family: "Nonmetal",
      sound: "./assets/sounds/row2/oxygen.mp3",
      funFact: { text: "You need me to breathe!", meme: "" },
      realWorldUses: [],
    },
    {
      symbol: "F",
      name: "Fluorine",
      characterName: "Fierce Fluorine",
      emoji: "🦷",
      family: "Halogen",
      sound: "./assets/sounds/row2/fluorine.mp3",
      funFact: { text: "Used in toothpaste to prevent cavities.", meme: "" },
      realWorldUses: [],
    },
    {
      symbol: "Ne",
      name: "Neon",
      characterName: "Neon Light",
      emoji: "💡",
      family: "Noble Gas",
      sound: "./assets/sounds/row2/neon.mp3",
      funFact: { text: "Glows bright in neon signs.", meme: "" },
      realWorldUses: [],
    },

    {
      symbol: "Na",
      name: "Sodium",
      characterName: "Salty Sodium",
      emoji: "🧂",
      family: "Alkali Metal",
      sound: "./assets/sounds/row3/sodium.mp3",
      funFact: { text: "I react explosively with water!", meme: "" },
      realWorldUses: [],
    },
    {
      symbol: "Mg",
      name: "Magnesium",
      characterName: "Mighty Magnesium",
      emoji: "🔥",
      family: "Alkaline Earth Metal",
      sound: "./assets/sounds/row3/magnesium.mp3",
      funFact: { text: "I am used in fireworks and flares.", meme: "" },
      realWorldUses: [],
    },
    {
      symbol: "Al",
      name: "Aluminium",
      characterName: "Agile Aluminium",
      emoji: "📦",
      family: "Post-Transition Metal",
      sound: "./assets/sounds/row3/aluminum.mp3",
      funFact: {
        text: "I am lightweight and used for cans and foil.",
        meme: "",
      },
      realWorldUses: [],
    },
    {
      symbol: "Si",
      name: "Silicon",
      characterName: "Smart Silicon",
      emoji: "💻",
      family: "Metalloid",
      sound: "./assets/sounds/row3/silicon.mp3",
      funFact: { text: "I am the basis of computer chips.", meme: "" },
      realWorldUses: [],
    },
    {
      symbol: "P",
      name: "Phosphorus",
      characterName: "Powerful Phosphorus",
      emoji: "🕯️",
      family: "Nonmetal",
      sound: "./assets/sounds/row3/phosphorus.mp3",
      funFact: { text: "Used in fertilizers and matches.", meme: "" },
      realWorldUses: [],
    },
    {
      symbol: "S",
      name: "Sulfur",
      characterName: "Sulfurous Sulfur",
      emoji: "🟡",
      family: "Nonmetal",
      sound: "./assets/sounds/row3/sulfur.mp3",
      funFact: { text: "I smell like rotten eggs.", meme: "" },
      realWorldUses: [],
    },
    {
      symbol: "Cl",
      name: "Chlorine",
      characterName: "Clean Chlorine",
      emoji: "🧼",
      family: "Halogen",
      sound: "./assets/sounds/row3/chlorine.mp3",
      funFact: { text: "Used to disinfect swimming pools.", meme: "" },
      realWorldUses: [],
    },
    {
      symbol: "Ar",
      name: "Argon",
      characterName: "Awesome Argon",
      emoji: "🎈",
      family: "Noble Gas",
      sound: "./assets/sounds/row3/argon.mp3",
      funFact: {
        text: "I keep things from reacting by being inert.",
        meme: "",
      },
      realWorldUses: [],
    },

    {
      symbol: "K",
      name: "Potassium",
      characterName: "Keen Potassium",
      emoji: "🍌",
      family: "Alkali Metal",
      sound: "./assets/sounds/row4/potassium.mp3",
      funFact: { text: "Important for nerve function in your body.", meme: "" },
      realWorldUses: [],
    },
    {
      symbol: "Ca",
      name: "Calcium",
      characterName: "Calcium Strong",
      emoji: "🦴",
      family: "Alkaline Earth Metal",
      sound: "./assets/sounds/row4/calcium.mp3",
      funFact: { text: "I build strong bones and teeth.", meme: "" },
      realWorldUses: [],
    },
    {
      symbol: "Sc",
      name: "Scandium",
      characterName: "Shiny Scandium",
      emoji: "🔩",
      family: "Transition Metal",
      sound: "./assets/sounds/row4/scandium.mp3",
      funFact: { text: "Used in aerospace components.", meme: "" },
      realWorldUses: [],
    },
    {
      symbol: "Ti",
      name: "Titanium",
      characterName: "Tough Titanium",
      emoji: "⚙️",
      family: "Transition Metal",
      sound: "./assets/sounds/row4/titanium.mp3",
      funFact: { text: "Strong and lightweight metal.", meme: "" },
      realWorldUses: [],
    },
    {
      symbol: "V",
      name: "Vanadium",
      characterName: "Valiant Vanadium",
      emoji: "🔧",
      family: "Transition Metal",
      sound: "./assets/sounds/row4/vanadium.mp3",
      funFact: { text: "Used in strong steel alloys.", meme: "" },
      realWorldUses: [],
    },
    {
      symbol: "Cr",
      name: "Chromium",
      characterName: "Colorful Chromium",
      emoji: "🛠️",
      family: "Transition Metal",
      sound: "./assets/sounds/row4/chromium.mp3",
      funFact: { text: "Gives metal a shiny finish (chrome).", meme: "" },
      realWorldUses: [],
    },
    {
      symbol: "Mn",
      name: "Manganese",
      characterName: "Mighty Manganese",
      emoji: "⚙️",
      family: "Transition Metal",
      sound: "./assets/sounds/row4/manganese.mp3",
      funFact: { text: "Important for steel production.", meme: "" },
      realWorldUses: [],
    },
    {
      symbol: "Fe",
      name: "Iron",
      characterName: "Fierce Iron",
      emoji: "⛓️",
      family: "Transition Metal",
      sound: "./assets/sounds/row4/iron.mp3",
      funFact: { text: "Essential for blood oxygen transport.", meme: "" },
      realWorldUses: [],
    },
    {
      symbol: "Co",
      name: "Cobalt",
      characterName: "Cool Cobalt",
      emoji: "🔵",
      family: "Transition Metal",
      sound: "./assets/sounds/row4/cobalt.mp3",
      funFact: { text: "Used to color glass and ceramics.", meme: "" },
      realWorldUses: [],
    },
    {
      symbol: "Ni",
      name: "Nickel",
      characterName: "Nifty Nickel",
      emoji: "🪙",
      family: "Transition Metal",
      sound: "./assets/sounds/row4/nickel.mp3",
      funFact: { text: "Used in coins and stainless steel.", meme: "" },
      realWorldUses: [],
    },
    {
      symbol: "Cu",
      name: "Copper",
      characterName: "Crafty Copper",
      emoji: "🟠",
      family: "Transition Metal",
      sound: "./assets/sounds/row4/copper.mp3",
      funFact: { text: "Great conductor of electricity.", meme: "" },
      realWorldUses: [],
    },
    {
      symbol: "Zn",
      name: "Zinc",
      characterName: "Zesty Zinc",
      emoji: "🛡️",
      family: "Transition Metal",
      sound: "./assets/sounds/row4/zinc.mp3",
      funFact: { text: "Used to prevent rust on iron.", meme: "" },
      realWorldUses: [],
    },

    {
      symbol: "Ga",
      name: "Gallium",
      characterName: "Glowing Gallium",
      emoji: "✨",
      family: "Post-Transition Metal",
      sound: "./assets/sounds/row4/gallium.mp3",
      funFact: { text: "Melts in your hand.", meme: "" },
      realWorldUses: [],
    },
    {
      symbol: "Ge",
      name: "Germanium",
      characterName: "Gleaming Germanium",
      emoji: "💎",
      family: "Metalloid",
      sound: "./assets/sounds/row4/germanium.mp3",
      funFact: { text: "Used in fiber optics.", meme: "" },
      realWorldUses: [],
    },
    {
      symbol: "As",
      name: "Arsenic",
      characterName: "Alarming Arsenic",
      emoji: "☠️",
      family: "Metalloid",
      sound: "./assets/sounds/row4/arsenic.mp3",
      funFact: { text: "Poisonous element.", meme: "" },
      realWorldUses: [],
    },
    {
      symbol: "Se",
      name: "Selenium",
      characterName: "Shining Selenium",
      emoji: "🧬",
      family: "Nonmetal",
      sound: "./assets/sounds/row4/selenium.mp3",
      funFact: { text: "Used in photocopiers and glass.", meme: "" },
      realWorldUses: [],
    },
    {
      symbol: "Br",
      name: "Bromine",
      characterName: "Bold Bromine",
      emoji: "🧪",
      family: "Halogen",
      sound: "./assets/sounds/row4/bromine.mp3",
      funFact: { text: "Only nonmetal liquid at room temp.", meme: "" },
      realWorldUses: [],
    },
    {
      symbol: "Kr",
      name: "Krypton",
      characterName: "Kool Krypton",
      emoji: "🧊",
      family: "Noble Gas",
      sound: "./assets/sounds/row4/krypton.mp3",
      funFact: { text: "Used in some types of lights.", meme: "" },
      realWorldUses: [],
    },

    {
      symbol: "Rb",
      name: "Rubidium",
      characterName: "Reactive Rubidium",
      emoji: "🔥",
      family: "Alkali Metal",
      sound: "./assets/sounds/row5/rubidium.mp3",
      funFact: { text: "Used in atomic clocks.", meme: "" },
      realWorldUses: [],
    },
    {
      symbol: "Sr",
      name: "Strontium",
      characterName: "Striking Strontium",
      emoji: "🎆",
      family: "Alkaline Earth Metal",
      sound: "./assets/sounds/row5/strontium.mp3",
      funFact: { text: "Used in fireworks.", meme: "" },
      realWorldUses: [],
    },
    {
      symbol: "Y",
      name: "Yttrium",
      characterName: "Youthful Yttrium",
      emoji: "🔮",
      family: "Transition Metal",
      sound: "./assets/sounds/row5/yttrium.mp3",
      funFact: { text: "Used in LEDs and phosphors.", meme: "" },
      realWorldUses: [],
    },
    {
      symbol: "Zr",
      name: "Zirconium",
      characterName: "Zesty Zirconium",
      emoji: "💎",
      family: "Transition Metal",
      sound: "./assets/sounds/row5/zirconium.mp3",
      funFact: { text: "Used in nuclear reactors.", meme: "" },
      realWorldUses: [],
    },
    {
      symbol: "Nb",
      name: "Niobium",
      characterName: "Noble Niobium",
      emoji: "🔧",
      family: "Transition Metal",
      sound: "./assets/sounds/row5/niobium.mp3",
      funFact: { text: "Used in superconducting materials.", meme: "" },
      realWorldUses: [],
    },
    {
      symbol: "Mo",
      name: "Molybdenum",
      characterName: "Mighty Molybdenum",
      emoji: "⚙️",
      family: "Transition Metal",
      sound: "./assets/sounds/row5/molybdenum.mp3",
      funFact: { text: "Used to strengthen steel.", meme: "" },
      realWorldUses: [],
    },
    {
      symbol: "Tc",
      name: "Technetium",
      characterName: "Techy Technetium",
      emoji: "⚛️",
      family: "Transition Metal",
      sound: "./assets/sounds/row5/technetium.mp3",
      funFact: { text: "First artificially produced element.", meme: "" },
      realWorldUses: [],
    },
    {
      symbol: "Ru",
      name: "Ruthenium",
      characterName: "Radiant Ruthenium",
      emoji: "💍",
      family: "Transition Metal",
      sound: "./assets/sounds/row5/ruthenium.mp3",
      funFact: { text: "Used in electrical contacts.", meme: "" },
      realWorldUses: [],
    },
    {
      symbol: "Rh",
      name: "Rhodium",
      characterName: "Rare Rhodium",
      emoji: "💎",
      family: "Transition Metal",
      sound: "./assets/sounds/row5/rhodium.mp3",
      funFact: { text: "Used in catalytic converters.", meme: "" },
      realWorldUses: [],
    },
    {
      symbol: "Pd",
      name: "Palladium",
      characterName: "Precious Palladium",
      emoji: "💍",
      family: "Transition Metal",
      sound: "./assets/sounds/row5/palladium.mp3",
      funFact: { text: "Used in jewelry and electronics.", meme: "" },
      realWorldUses: [],
    },
    {
      symbol: "Ag",
      name: "Silver",
      characterName: "Shiny Silver",
      emoji: "🥈",
      family: "Transition Metal",
      sound: "./assets/sounds/row5/silver.mp3",
      funFact: { text: "Excellent conductor and used in jewelry.", meme: "" },
      realWorldUses: [],
    },
    {
      symbol: "Cd",
      name: "Cadmium",
      characterName: "Cautious Cadmium",
      emoji: "☢️",
      family: "Transition Metal",
      sound: "./assets/sounds/row5/cadmium.mp3",
      funFact: { text: "Toxic and used in batteries.", meme: "" },
      realWorldUses: [],
    },

    {
      symbol: "In",
      name: "Indium",
      characterName: "Innovative Indium",
      emoji: "🔧",
      family: "Post-Transition Metal",
      sound: "./assets/sounds/row5/indium.mp3",
      funFact: { text: "Used in touchscreens.", meme: "" },
      realWorldUses: [],
    },
    {
      symbol: "Sn",
      name: "Tin",
      characterName: "Sturdy Tin",
      emoji: "🥫",
      family: "Post-Transition Metal",
      sound: "./assets/sounds/row5/tin.mp3",
      funFact: { text: "Used in solder and cans.", meme: "" },
      realWorldUses: [],
    },
    {
      symbol: "Sb",
      name: "Antimony",
      characterName: "Sharp Antimony",
      emoji: "🛡️",
      family: "Metalloid",
      sound: "./assets/sounds/row5/antimony.mp3",
      funFact: { text: "Used in flame retardants.", meme: "" },
      realWorldUses: [],
    },
    {
      symbol: "Te",
      name: "Tellurium",
      characterName: "Terrific Tellurium",
      emoji: "⚡",
      family: "Metalloid",
      sound: "./assets/sounds/row5/tellurium.mp3",
      funFact: { text: "Used in solar panels.", meme: "" },
      realWorldUses: [],
    },
    {
      symbol: "I",
      name: "Iodine",
      characterName: "Important Iodine",
      emoji: "⚕️",
      family: "Halogen",
      sound: "./assets/sounds/row5/iodine.mp3",
      funFact: { text: "Essential nutrient and disinfectant.", meme: "" },
      realWorldUses: [],
    },
    {
      symbol: "Xe",
      name: "Xenon",
      characterName: "Xenon Flash",
      emoji: "💡",
      family: "Noble Gas",
      sound: "./assets/sounds/row5/xenon.mp3",
      funFact: { text: "Used in flash lamps and ion propulsion.", meme: "" },
      realWorldUses: [],
    },

    // Lanthanides
    {
      symbol: "La",
      name: "Lanthanum",
      characterName: "Luminous Lanthanum",
      emoji: "🔆",
      family: "Lanthanide",
      sound: "./assets/sounds/row8/lanthanum.mp3",
      funFact: { text: "Used in camera lenses.", meme: "" },
      realWorldUses: [],
    },
    {
      symbol: "Ce",
      name: "Cerium",
      characterName: "Creative Cerium",
      emoji: "🔮",
      family: "Lanthanide",
      sound: "./assets/sounds/row8/cerium.mp3",
      funFact: { text: "Used in catalytic converters.", meme: "" },
      realWorldUses: [],
    },
    {
      symbol: "Pr",
      name: "Praseodymium",
      characterName: "Precious Praseodymium",
      emoji: "💎",
      family: "Lanthanide",
      sound: "./assets/sounds/row8/praseodymium.mp3",
      funFact: { text: "Used in magnets.", meme: "" },
      realWorldUses: [],
    },
    {
      symbol: "Nd",
      name: "Neodymium",
      characterName: "Nifty Neodymium",
      emoji: "🧲",
      family: "Lanthanide",
      sound: "./assets/sounds/row8/neodymium.mp3",
      funFact: { text: "Used in powerful magnets.", meme: "" },
      realWorldUses: [],
    },
    {
      symbol: "Pm",
      name: "Promethium",
      characterName: "Powerful Promethium",
      emoji: "☢️",
      family: "Lanthanide",
      sound: "./assets/sounds/row8/promethium.mp3",
      funFact: { text: "Radioactive and rare.", meme: "" },
      realWorldUses: [],
    },
    {
      symbol: "Sm",
      name: "Samarium",
      characterName: "Strong Samarium",
      emoji: "🧲",
      family: "Lanthanide",
      sound: "./assets/sounds/row8/samarium.mp3",
      funFact: { text: "Used in magnets and cancer treatment.", meme: "" },
      realWorldUses: [],
    },
    {
      symbol: "Eu",
      name: "Europium",
      characterName: "Energetic Europium",
      emoji: "✨",
      family: "Lanthanide",
      sound: "./assets/sounds/row8/europium.mp3",
      funFact: { text: "Used in TV screens.", meme: "" },
      realWorldUses: [],
    },
    {
      symbol: "Gd",
      name: "Gadolinium",
      characterName: "Glowing Gadolinium",
      emoji: "🧲",
      family: "Lanthanide",
      sound: "./assets/sounds/row8/gadolinium.mp3",
      funFact: { text: "Used in MRI contrast agents.", meme: "" },
      realWorldUses: [],
    },
    {
      symbol: "Tb",
      name: "Terbium",
      characterName: "Terrific Terbium",
      emoji: "🔆",
      family: "Lanthanide",
      sound: "./assets/sounds/row8/terbium.mp3",
      funFact: { text: "Used in green phosphors.", meme: "" },
      realWorldUses: [],
    },
    {
      symbol: "Dy",
      name: "Dysprosium",
      characterName: "Dynamic Dysprosium",
      emoji: "🧲",
      family: "Lanthanide",
      sound: "./assets/sounds/row8/dysprosium.mp3",
      funFact: { text: "Used in lasers.", meme: "" },
      realWorldUses: [],
    },
    {
      symbol: "Ho",
      name: "Holmium",
      characterName: "Honest Holmium",
      emoji: "✨",
      family: "Lanthanide",
      sound: "./assets/sounds/row8/holmium.mp3",
      funFact: { text: "Used in nuclear reactors.", meme: "" },
      realWorldUses: [],
    },
    {
      symbol: "Er",
      name: "Erbium",
      characterName: "Elegant Erbium",
      emoji: "💎",
      family: "Lanthanide",
      sound: "./assets/sounds/row8/erbium.mp3",
      funFact: { text: "Used in fiber optics.", meme: "" },
      realWorldUses: [],
    },
    {
      symbol: "Tm",
      name: "Thulium",
      characterName: "Tidy Thulium",
      emoji: "✨",
      family: "Lanthanide",
      sound: "./assets/sounds/row8/thulium.mp3",
      funFact: { text: "Used in portable X-ray machines.", meme: "" },
      realWorldUses: [],
    },
    {
      symbol: "Yb",
      name: "Ytterbium",
      characterName: "Youthful Ytterbium",
      emoji: "💡",
      family: "Lanthanide",
      sound: "./assets/sounds/row8/ytterbium.mp3",
      funFact: { text: "Used in lasers.", meme: "" },
      realWorldUses: [],
    },
    {
      symbol: "Lu",
      name: "Lutetium",
      characterName: "Luminous Lutetium",
      emoji: "🔆",
      family: "Lanthanide",
      sound: "./assets/sounds/row8/lutetium.mp3",
      funFact: { text: "Used in PET scan detectors.", meme: "" },
      realWorldUses: [],
    },

    // Actinides
    {
      symbol: "Ac",
      name: "Actinium",
      characterName: "Active Actinium",
      emoji: "☢️",
      family: "Actinide",
      sound: "./assets/sounds/row9/actinium.mp3",
      funFact: { text: "Radioactive, used in radiation therapy.", meme: "" },
      realWorldUses: [],
    },
    {
      symbol: "Th",
      name: "Thorium",
      characterName: "Thundering Thorium",
      emoji: "☢️",
      family: "Actinide",
      sound: "./assets/sounds/row9/thorium.mp3",
      funFact: { text: "Potential nuclear fuel.", meme: "" },
      realWorldUses: [],
    },
    {
      symbol: "Pa",
      name: "Protactinium",
      characterName: "Powerful Protactinium",
      emoji: "☢️",
      family: "Actinide",
      sound: "./assets/sounds/row9/protactinium.mp3",
      funFact: { text: "Highly radioactive.", meme: "" },
      realWorldUses: [],
    },
    {
      symbol: "U",
      name: "Uranium",
      characterName: "Unstoppable Uranium",
      emoji: "☢️",
      family: "Actinide",
      sound: "./assets/sounds/row9/uranium.mp3",
      funFact: { text: "Used in nuclear reactors and weapons.", meme: "" },
      realWorldUses: [],
    },
    {
      symbol: "Np",
      name: "Neptunium",
      characterName: "Nuclear Neptunium",
      emoji: "☢️",
      family: "Actinide",
      sound: "./assets/sounds/row9/neptunium.mp3",
      funFact: { text: "Radioactive and synthetic.", meme: "" },
      realWorldUses: [],
    },
    {
      symbol: "Pu",
      name: "Plutonium",
      characterName: "Powerful Plutonium",
      emoji: "☢️",
      family: "Actinide",
      sound: "./assets/sounds/row9/plutonium.mp3",
      funFact: { text: "Used in nuclear weapons and reactors.", meme: "" },
      realWorldUses: [],
    },
    {
      symbol: "Am",
      name: "Americium",
      characterName: "Active Americium",
      emoji: "☢️",
      family: "Actinide",
      sound: "./assets/sounds/row9/americium.mp3",
      funFact: { text: "Used in smoke detectors.", meme: "" },
      realWorldUses: [],
    },
    {
      symbol: "Cm",
      name: "Curium",
      characterName: "Curious Curium",
      emoji: "☢️",
      family: "Actinide",
      sound: "./assets/sounds/row9/curium.mp3",
      funFact: { text: "Highly radioactive.", meme: "" },
      realWorldUses: [],
    },
    {
      symbol: "Bk",
      name: "Berkelium",
      characterName: "Bold Berkelium",
      emoji: "☢️",
      family: "Actinide",
      sound: "./assets/sounds/row9/berkelium.mp3",
      funFact: { text: "Synthetic and radioactive.", meme: "" },
      realWorldUses: [],
    },
    {
      symbol: "Cf",
      name: "Californium",
      characterName: "Calm Californium",
      emoji: "☢️",
      family: "Actinide",
      sound: "./assets/sounds/row9/californium.mp3",
      funFact: { text: "Used in neutron sources.", meme: "" },
      realWorldUses: [],
    },
    {
      symbol: "Es",
      name: "Einsteinium",
      characterName: "Energetic Einsteinium",
      emoji: "☢️",
      family: "Actinide",
      sound: "./assets/sounds/row9/einsteinium.mp3",
      funFact: { text: "Synthetic element.", meme: "" },
      realWorldUses: [],
    },
    {
      symbol: "Fm",
      name: "Fermium",
      characterName: "Fabulous Fermium",
      emoji: "☢️",
      family: "Actinide",
      sound: "./assets/sounds/row9/fermium.mp3",
      funFact: { text: "Synthetic element.", meme: "" },
      realWorldUses: [],
    },
    {
      symbol: "Md",
      name: "Mendelevium",
      characterName: "Mighty Mendelevium",
      emoji: "☢️",
      family: "Actinide",
      sound: "./assets/sounds/row9/mendelevium.mp3",
      funFact: { text: "Named after Mendeleev.", meme: "" },
      realWorldUses: [],
    },
    {
      symbol: "No",
      name: "Nobelium",
      characterName: "Noble Nobelium",
      emoji: "☢️",
      family: "Actinide",
      sound: "./assets/sounds/row9/nobelium.mp3",
      funFact: { text: "Named after Alfred Nobel.", meme: "" },
      realWorldUses: [],
    },
    {
      symbol: "Lr",
      name: "Lawrencium",
      characterName: "Luminous Lawrencium",
      emoji: "☢️",
      family: "Actinide",
      sound: "./assets/sounds/row9/lawrencium.mp3",
      funFact: { text: "Named after Ernest Lawrence.", meme: "" },
      realWorldUses: [],
    },

    {
      symbol: "Tl",
      name: "Thallium",
      characterName: "Toxic Thallium",
      emoji: "☠️",
      family: "Post-Transition Metal",
      sound: "./assets/sounds/row6/thallium.mp3",
      funFact: { text: "Highly toxic, used in electronics.", meme: "" },
      realWorldUses: [],
    },
    {
      symbol: "Pb",
      name: "Lead",
      characterName: "Heavy Lead",
      emoji: "⚖️",
      family: "Post-Transition Metal",
      sound: "./assets/sounds/row6/lead.mp3",
      funFact: { text: "Used historically in pipes and paints.", meme: "" },
      realWorldUses: [],
    },
    {
      symbol: "Bi",
      name: "Bismuth",
      characterName: "Bright Bismuth",
      emoji: "🟪",
      family: "Post-Transition Metal",
      sound: "./assets/sounds/row9/bismuth.mp3",
      funFact: { text: "Used in cosmetics and pharmaceuticals.", meme: "" },
      realWorldUses: [],
    },

    {
      symbol: "At",
      name: "Astatine",
      characterName: "Astounding Astatine",
      emoji: "⚛️",
      family: "Halogen",
      sound: "./assets/sounds/row6/astatine.mp3",
      funFact: { text: "Rare and radioactive halogen.", meme: "" },
      realWorldUses: [],
    },

    {
      symbol: "Rn",
      name: "Radon",
      characterName: "Risky Radon",
      emoji: "☢️",
      family: "Noble Gas",
      sound: "./assets/sounds/row6/radon.mp3",
      funFact: { text: "Radioactive gas from uranium decay.", meme: "" },
      realWorldUses: [],
    },
    {
      symbol: "Og",
      name: "Oganesson",
      characterName: "Outstanding Oganesson",
      emoji: "☢️",
      family: "Noble Gas",
      sound: "./assets/sounds/row7/oganesson.mp3",
      funFact: { text: "Heaviest noble gas, synthetic.", meme: "" },
      realWorldUses: [],
    },
  ];
  // --- DOM Elements ---

  const allScreens = document.querySelectorAll(".screen");
  const navButtons = document.querySelectorAll(".main-nav button");
  const backButtons = document.querySelectorAll(".back-button");

  // --- State Variables ---
  let currentTestQuestion = {};
  let selectedTestAnswer = null;
  let slot1Element = null;
  let slot2Element = null;

  // --- Navigation ---
  function showScreen(screenId) {
    allScreens.forEach((screen) => screen.classList.add("hidden"));
    document.getElementById(screenId)?.classList.remove("hidden");

    // Initialize screen-specific logic
    if (screenId === "train-screen") initTrainMode();
    if (screenId === "test-screen") initTestMode();
    if (screenId === "grid-screen") initCharacterGrid();
    if (screenId === "lab-screen") initReactionLab();
  }
  navButtons.forEach((btn) =>
    btn.addEventListener("click", () => showScreen(btn.dataset.screen))
  );
  backButtons.forEach((btn) =>
    btn.addEventListener("click", () => showScreen("home-screen"))
  );

  // --- Train Mode ---
  function initTrainMode() {
    const miniPeriodicTable = document.getElementById("mini-periodic-table");
    const buttons = miniPeriodicTable.querySelectorAll(".element-button");
    const detailsPanel = document.getElementById("element-details-panel");

    buttons.forEach((btn) => {
      const symbol = btn.dataset.symbol;

      btn.addEventListener("mouseenter", () => {
        const el = elementsData.find((e) => e.symbol === symbol);
        if (!el) return;

        // Show the details panel (make sure it's visible)
        detailsPanel.classList.remove("hidden");

        // Highlight the hovered element button
        buttons.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");

        // Update the fun fact
        let funFactText = document.getElementById("fun-fact-text");
        funFactText.textContent = el.funFact.text;

        let funFactmeme = document.getElementById("fun-fact-meme");
        if (!funFactmeme) {
          funFactmeme = document.createElement("img");
          funFactmeme.id = "fun-fact-meme";
          funFactmeme.className = "fun-fact-meme";
          funFactText.insertAdjacentElement("afterend", funFactmeme);
        }

        // If a meme is defined, show it; otherwise, hide the image
        if (el.funFact.meme && el.funFact.meme.trim() !== "") {
          funFactmeme.src = el.funFact.meme;
          funFactmeme.alt = el.characterName + " fun fact meme";
          funFactmeme.style.display = "block";
        } else {
          funFactmeme.style.display = "none"; // hide the image if no meme
        }

        // Update the real world uses grid
        const usesGrid = document.getElementById("uses-grid");
        usesGrid.innerHTML = el.realWorldUses
          .map(
            (use) =>
              `<div class="use-card"><img src="${use.image}" alt="${use.caption}"><p>${use.caption}</p></div>`
          )
          .join("");

        // Update character display panel (assuming you want it inside #element-details-panel)
        // Create or select elements for emoji and character name inside the details panel
        let emojiDisplay = detailsPanel.querySelector(".emoji-display");
        let characterNameDisplay =
          detailsPanel.querySelector(".character-name");

        if (!emojiDisplay) {
          emojiDisplay = document.createElement("div");
          emojiDisplay.className = "emoji-display";
          detailsPanel.prepend(emojiDisplay); // Add at top
        }
        if (!characterNameDisplay) {
          characterNameDisplay = document.createElement("div");
          characterNameDisplay.className = "character-name";
          detailsPanel.prepend(characterNameDisplay); // Just below emojiDisplay
        }

        emojiDisplay.textContent = el.emoji;
        characterNameDisplay.textContent = el.characterName;
      });
      btn.addEventListener("click", () => {
        const s = elementsData.find((e) => e.symbol === symbol);
        if (!s || !s.sound) return;
        const audio = new Audio(s.sound);
        audio.play().catch((err) => console.error("Audio play failed:", err));
      });
      btn.addEventListener("mouseleave", () => {
        // Remove highlight and hide details panel
        btn.classList.remove("active");
        detailsPanel.classList.add("hidden");

        // Optionally clear content
        const detailsPanel = document.getElementById("element-details-panel");
        detailsPanel.querySelector(".emoji-display")?.remove();
        detailsPanel.querySelector(".character-name")?.remove();
        document.getElementById("fun-fact-meme").src = "";
        document.getElementById("fun-fact-text").textContent = "";
        document.getElementById("uses-grid").innerHTML = "";
      });
    });
  }

  // --- Test Mode ---
  function initTestMode() {
    loadNewTestQuestion();
  }

  function loadNewTestQuestion() {
    const feedbackEl = document.getElementById("test-feedback");
    feedbackEl.textContent = "";
    feedbackEl.className = "feedback-message";
    selectedTestAnswer = null;

    const correctAnswer =
      elementsData[Math.floor(Math.random() * elementsData.length)];
    currentTestQuestion = { correctAnswer };

    const choices = [correctAnswer];
    while (choices.length < 4) {
      const randomChoice =
        elementsData[Math.floor(Math.random() * elementsData.length)];
      if (!choices.some((c) => c.symbol === randomChoice.symbol)) {
        choices.push(randomChoice);
      }
    }
    choices.sort(() => Math.random() - 0.5); // Shuffle choices

    const choicesContainer = document.getElementById("test-choices");
    choicesContainer.innerHTML = "";
    choices.forEach((choice) => {
      const btn = document.createElement("button");
      btn.className = "choice-button";
      btn.textContent = choice.symbol;
      btn.onclick = () => {
        selectedTestAnswer = choice.symbol;
        document
          .querySelectorAll(".choice-button")
          .forEach((b) => b.classList.remove("selected"));
        btn.classList.add("selected");
      };
      choicesContainer.appendChild(btn);
    });
  }
  document.getElementById("test-sound-button").addEventListener("click", () => {
    if (currentTestQuestion.correctAnswer) {
      const audio = new Audio(currentTestQuestion.correctAnswer.sound);
      audio.play().catch((err) => console.error("Audio play failed:", err));
    } else {
      // First time click or reload
      loadNewTestQuestion();
    }
  });

  document
    .getElementById("submit-answer-button")
    .addEventListener("click", () => {
      const feedbackEl = document.getElementById("test-feedback");
      if (!selectedTestAnswer) {
        feedbackEl.textContent = "Please select an answer!";
        feedbackEl.className = "feedback-message info";
        return;
      }

      if (selectedTestAnswer === currentTestQuestion.correctAnswer.symbol) {
        feedbackEl.textContent = "Correct! Well done! 🎉";
        feedbackEl.className = "feedback-message success";
      } else {
        feedbackEl.textContent = `Not quite. The correct answer was ${currentTestQuestion.correctAnswer.symbol}. Try the next one!`;
        feedbackEl.className = "feedback-message error";
      }

      // Delay before loading next question
      setTimeout(loadNewTestQuestion, 1500);
    });

  // --- Character Grid ---
  function initCharacterGrid() {
    const filtersContainer = document.getElementById("family-filters");
    filtersContainer.innerHTML = "";
    const families = ["All", ...new Set(elementsData.map((el) => el.family))];
    families.forEach((family) => {
      const btn = document.createElement("button");
      btn.className = "filter-button";
      btn.textContent = family;
      btn.onclick = (e) => {
        document
          .querySelectorAll(".filter-button")
          .forEach((b) => b.classList.remove("active"));
        e.target.classList.add("active");
        populateCharacterGrid(family);
      };
      filtersContainer.appendChild(btn);
    });
    filtersContainer.querySelector(".filter-button").classList.add("active");
    populateCharacterGrid("All");
  }

  function populateCharacterGrid(filterFamily) {
    const grid = document.getElementById("full-character-grid");
    grid.innerHTML = "";
    const filtered =
      filterFamily === "All"
        ? elementsData
        : elementsData.filter((el) => el.family === filterFamily);
    filtered.forEach((el) => {
      grid.innerHTML += `<div class="grid-char-card"><div class="emoji-display">${el.emoji}</div><h5>${el.name}</h5><p>${el.family}</p></div>`;
    });
  }

  // --- Reaction Lab ---
  function initReactionLab() {
    const palette = document.getElementById("lab-element-palette");
    palette.innerHTML = "";
    elementsData.forEach((el) => {
      const btn = document.createElement("button");
      btn.className = "palette-element";
      btn.textContent = el.symbol;
      btn.onclick = () => addElementToLabSlot(el);
      palette.appendChild(btn);
    });
    resetLab();
  }

  function addElementToLabSlot(element) {
    if (!slot1Element) {
      slot1Element = element;
      document.getElementById(
        "slot-1"
      ).innerHTML = `<div class="emoji-display">${element.emoji}</div>`;
    } else if (!slot2Element) {
      slot2Element = element;
      document.getElementById(
        "slot-2"
      ).innerHTML = `<div class="emoji-display">${element.emoji}</div>`;
    }
  }

  function resetLab() {
    slot1Element = null;
    slot2Element = null;
    document.getElementById("slot-1").innerHTML = "<p>?</p>";
    document.getElementById("slot-2").innerHTML = "<p>?</p>";
    const resultEl = document.getElementById("reaction-result");
    resultEl.textContent = "";
    resultEl.className = "feedback-message";
  }
  document
    .getElementById("reset-lab-button")
    .addEventListener("click", resetLab);

  document.getElementById("combine-button").addEventListener("click", () => {
    const resultEl = document.getElementById("reaction-result");
    if (!slot1Element || !slot2Element) {
      resultEl.textContent = "Please select two elements!";
      resultEl.className = "feedback-message info";
      return;
    }
    const s1 = slot1Element.symbol;
    const s2 = slot2Element.symbol;
    if ((s1 === "Na" && s2 === "Cl") || (s1 === "Cl" && s2 === "Na")) {
      resultEl.textContent = "Success! You made table salt (NaCl)! 🧂";
      resultEl.className = "feedback-message success";
    } else if (
      slot1Element.family === "Noble Gas" ||
      slot2Element.family === "Noble Gas"
    ) {
      resultEl.textContent =
        "No reaction. Noble Gases are too cool to react! 😎";
      resultEl.className = "feedback-message info";
    } else {
      resultEl.textContent = "No reaction between these two. Try another pair!";
      resultEl.className = "feedback-message error";
    }
  });

  // Initialize App
  showScreen("home-screen");
});
