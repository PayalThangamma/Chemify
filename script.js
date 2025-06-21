document.addEventListener("DOMContentLoaded", () => {
  // --- DATA ---
  elementsData = [
    {
      symbol: "H",
      name: "Hydrogen",
      characterName: "Energetic Hydrogen",
      emoji: "💨",
      family: "Nonmetal",
      sound: "/assets/sounds/row1/hydrogen.wav",
      funFact: "I am the most common element in the universe! I power the sun.",
      realWorldUses: [],
    },
    {
      symbol: "He",
      name: "Helium",
      characterName: "Happy Helium",
      emoji: "🎈",
      family: "Noble Gas",
      sound: "./assets/sounds/row1/helium.wav",
      funFact: "I am so light, I make balloons float and your voice squeaky!",
      realWorldUses: [],
    },
    {
      symbol: "Li",
      name: "Lithium",
      characterName: "Charged-up Lithium",
      emoji: "🔋",
      family: "Alkali Metal",
      sound: "./assets/sounds/row2/lithium.wav",
      funFact: "I am a light metal that stores a lot of energy, perfect for batteries.",
      realWorldUses: [],
    },
    {
      symbol: "Be",
      name: "Beryllium",
      characterName: "Bright Beryllium",
      emoji: "🔹",
      family: "Alkaline Earth Metal",
      sound: "./assets/sounds/row2/beryllium.mp3",
      funFact: "I am a lightweight metal used in aerospace materials.",
      realWorldUses: [],
    },
    {
      symbol: "B",
      name: "Boron",
      characterName: "Brilliant Boron",
      emoji: "🧪",
      family: "Metalloid",
      sound: "./assets/sounds/row2/boron.mp3",
      funFact: "I am used to make strong borosilicate glass.",
      realWorldUses: [],
    },
    {
      symbol: "C",
      name: "Carbon",
      characterName: "Creative Carbon",
      emoji: "💎",
      family: "Nonmetal",
      sound: "./assets/sounds/row2/carbon.mp3",
      funFact: "I form the basis of all life on Earth.",
      realWorldUses: [],
    },
    {
      symbol: "N",
      name: "Nitrogen",
      characterName: "Noble Nitrogen",
      emoji: "🌬️",
      family: "Nonmetal",
      sound: "./assets/sounds/row2/nitrogen.mp3",
      funFact: "I make up 78% of the Earth’s atmosphere.",
      realWorldUses: [],
    },
    {
      symbol: "O",
      name: "Oxygen",
      characterName: "Awesome Oxygen",
      emoji: "🌬️",
      family: "Nonmetal",
      sound: "./assets/sounds/row2/oxygen.mp3",
      funFact: "You need me to breathe!",
      realWorldUses: [],
    },
    {
      symbol: "F",
      name: "Fluorine",
      characterName: "Fierce Fluorine",
      emoji: "🦷",
      family: "Halogen",
      sound: "./assets/sounds/row2/fluorine.mp3",
      funFact:"Used in toothpaste to prevent cavities.",
      realWorldUses: [],
    },
    {
      symbol: "Ne",
      name: "Neon",
      characterName: "Neon Light",
      emoji: "💡",
      family: "Noble Gas",
      sound: "./assets/sounds/row2/neon.mp3",
      funFact:"Glows bright in neon signs.",
      realWorldUses: [],
    },
    {
      symbol: "Na",
      name: "Sodium",
      characterName: "Salty Sodium",
      emoji: "🧂",
      family: "Alkali Metal",
      sound: "./assets/sounds/row3/sodium.mp3",
      funFact: "Drop me in water and BOOM – I don't do chill.",
      realWorldUses: [],
    },
    {
      symbol: "Mg",
      name: "Magnesium",
      characterName: "Mighty Magnesium",
      emoji: "🔥",
      family: "Alkaline Earth Metal",
      sound: "./assets/sounds/row3/magnesium.mp3",
      funFact: "I’m the firework guy. I make things go ✨BOOM✨ in the sky.",
      realWorldUses: [],
    },
    {
      symbol: "Al",
      name: "Aluminium",
      characterName: "Agile Aluminium",
      emoji: "📦",
      family: "Post-Transition Metal",
      sound: "./assets/sounds/row3/aluminum.mp3",
      funFact: "I am lightweight and used for cans and foil.",
      realWorldUses: [],
    },
    {
      symbol: "Si",
      name: "Silicon",
      characterName: "Smart Silicon",
      emoji: "💻",
      family: "Metalloid",
      sound: "./assets/sounds/row3/silicon.mp3",
      funFact: "I am the basis of computer chips.", 
      realWorldUses: [],
    },
    {
      symbol: "P",
      name: "Phosphorus",
      characterName: "Powerful Phosphorus",
      emoji: "🕯️",
      family: "Nonmetal",
      sound: "./assets/sounds/row3/phosphorus.mp3",
      funFact:   "Used in fertilizers and matches.",
      realWorldUses: [],
    },
    {
      symbol: "S",
      name: "Sulfur",
      characterName: "Sulfurous Sulfur",
      emoji: "🟡",
      family: "Nonmetal",
      sound: "./assets/sounds/row3/sulfur.mp3",
      funFact:   "I smell like rotten eggs.",
      realWorldUses: [],
    },
    {
      symbol: "Cl",
      name: "Chlorine",
      characterName: "Clean Chlorine",
      emoji: "🧼",
      family: "Halogen",
      sound: "./assets/sounds/row3/chlorine.mp3",
      funFact:  "Used to disinfect swimming pools.",    
      realWorldUses: [],
    },
    {
      symbol: "Ar",
      name: "Argon",
      characterName: "Awesome Argon",
      emoji: "🎈",
      family: "Noble Gas",
      sound: "./assets/sounds/row3/argon.mp3",
      funFact: "I keep things from reacting by being inert.",
      realWorldUses: [],
    },
    {
      symbol: "K",
      name: "Potassium",
      characterName: "Keen Potassium",
      emoji: "🍌",
      family: "Alkali Metal",
      sound: "./assets/sounds/row4/potassium.mp3",
      funFact:  "Important for nerve function in your body.",
      realWorldUses: [],
    },
    {
      symbol: "Ca",
      name: "Calcium",
      characterName: "Calcium Strong",
      emoji: "🦴",
      family: "Alkaline Earth Metal",
      sound: "./assets/sounds/row4/calcium.mp3",
      funFact:   "I build strong bones and teeth.",    
      realWorldUses: [],
    },
    {
      symbol: "Sc",
      name: "Scandium",
      characterName: "Shiny Scandium",
      emoji: "🔩",
      family: "Transition Metal",
      sound: "./assets/sounds/row4/scandium.mp3",
      funFact:   "Used in aerospace components.",    
      realWorldUses: [],
    },
    {
      symbol: "Ti",
      name: "Titanium",
      characterName: "Tough Titanium",
      emoji: "⚙️",
      family: "Transition Metal",
      sound: "./assets/sounds/row4/titanium.mp3",
      funFact:   "Strong and lightweight metal.",    
      realWorldUses: [],
    },
    {
      symbol: "V",
      name: "Vanadium",
      characterName: "Valiant Vanadium",
      emoji: "🔧",
      family: "Transition Metal",
      sound: "./assets/sounds/row4/vanadium.mp3",
      funFact:   "Used in strong steel alloys.",    
      realWorldUses: [],
    },
    {
      symbol: "Cr",
      name: "Chromium",
      characterName: "Colorful Chromium",
      emoji: "🛠️",
      family: "Transition Metal",
      sound: "./assets/sounds/row4/chromium.mp3",
      funFact:   "Gives metal a shiny finish (chrome).",    
      realWorldUses: [],
    },
    {
      symbol: "Mn",
      name: "Manganese",
      characterName: "Mighty Manganese",
      emoji: "⚙️",
      family: "Transition Metal",
      sound: "./assets/sounds/row4/manganese.mp3",
      funFact:   "Important for steel production.",    
      realWorldUses: [],
    },
    {
      symbol: "Fe",
      name: "Iron",
      characterName: "Fierce Iron",
      emoji: "⛓️",
      family: "Transition Metal",
      sound: "./assets/sounds/row4/iron.mp3",
      funFact:   "Essential for blood oxygen transport.",    
      realWorldUses: [],
    },
    {
      symbol: "Co",
      name: "Cobalt",
      characterName: "Cool Cobalt",
      emoji: "🔵",
      family: "Transition Metal",
      sound: "./assets/sounds/row4/cobalt.mp3",
      funFact:   "Used to color glass and ceramics.",    
      realWorldUses: [],
    },
    {
      symbol: "Ni",
      name: "Nickel",
      characterName: "Nifty Nickel",
      emoji: "🪙",
      family: "Transition Metal",
      sound: "./assets/sounds/row4/nickel.mp3",
      funFact:   "Used in coins and stainless steel.",    
      realWorldUses: [],
    },
    {
      symbol: "Cu",
      name: "Copper",
      characterName: "Crafty Copper",
      emoji: "🟠",
      family: "Transition Metal",
      sound: "./assets/sounds/row4/copper.mp3",
      funFact:   "Great conductor of electricity.",    
      realWorldUses: [],
    },
    {
      symbol: "Zn",
      name: "Zinc",
      characterName: "Zesty Zinc",
      emoji: "🛡️",
      family: "Transition Metal",
      sound: "./assets/sounds/row4/zinc.mp3",
      funFact:   "Used to prevent rust on iron.",    
      realWorldUses: [],
    },
    {
      symbol: "Ga",
      name: "Gallium",
      characterName: "Glowing Gallium",
      emoji: "✨",
      family: "Post-Transition Metal",
      sound: "./assets/sounds/row4/gallium.mp3",
      funFact:   "Melts in your hand.",    
      realWorldUses: [],
    },
    {
      symbol: "Ge",
      name: "Germanium",
      characterName: "Gleaming Germanium",
      emoji: "💎",
      family: "Metalloid",
      sound: "./assets/sounds/row4/germanium.mp3",
      funFact:   "Used in fiber optics.",    
      realWorldUses: [],
    },
    {
      symbol: "As",
      name: "Arsenic",
      characterName: "Alarming Arsenic",
      emoji: "☠️",
      family: "Metalloid",
      sound: "./assets/sounds/row4/arsenic.mp3",
      funFact:   "Poisonous element.",    
      realWorldUses: [],
    },
    {
      symbol: "Se",
      name: "Selenium",
      characterName: "Shining Selenium",
      emoji: "🧬",
      family: "Nonmetal",
      sound: "./assets/sounds/row4/selenium.mp3",
      funFact:   "Used in photocopiers and glass.",    
      realWorldUses: [],
    },
    {
      symbol: "Br",
      name: "Bromine",
      characterName: "Bold Bromine",
      emoji: "🧪",
      family: "Halogen",
      sound: "./assets/sounds/row4/bromine.mp3",
      funFact:   "Only nonmetal liquid at room temp.",    
      realWorldUses: [],
    },
    {
      symbol: "Kr",
      name: "Krypton",
      characterName: "Kool Krypton",
      emoji: "🧊",
      family: "Noble Gas",
      sound: "./assets/sounds/row4/krypton.mp3",
      funFact:   "Used in some types of lights.",    
      realWorldUses: [],
    },
    {
      symbol: "Rb",
      name: "Rubidium",
      characterName: "Reactive Rubidium",
      emoji: "🔥",
      family: "Alkali Metal",
      sound: "./assets/sounds/row5/rubidium.mp3",
      funFact:   "Used in atomic clocks.",    
      realWorldUses: [],
    },
    {
      symbol: "Sr",
      name: "Strontium",
      characterName: "Striking Strontium",
      emoji: "🎆",
      family: "Alkaline Earth Metal",
      sound: "./assets/sounds/row5/strontium.mp3",
      funFact:   "Used in fireworks."  ,
      realWorldUses: [],
    },
    {
      symbol: "Y",
      name: "Yttrium",
      characterName: "Youthful Yttrium",
      emoji: "🔮",
      family: "Transition Metal",
      sound: "./assets/sounds/row5/yttrium.mp3",
      funFact:   "Used in LEDs and phosphors."  ,
      realWorldUses: [],
    },
    {
      symbol: "Zr",
      name: "Zirconium",
      characterName: "Zesty Zirconium",
      emoji: "💎",
      family: "Transition Metal",
      sound: "./assets/sounds/row5/zirconium.mp3",
      funFact:   "Used in nuclear reactors."  ,
      realWorldUses: [],
    },
    {
      symbol: "Nb",
      name: "Niobium",
      characterName: "Noble Niobium",
      emoji: "🔧",
      family: "Transition Metal",
      sound: "./assets/sounds/row5/niobium.mp3",
      funFact:   "Used in superconducting materials."  ,
      realWorldUses: [],
    },
    {
      symbol: "Mo",
      name: "Molybdenum",
      characterName: "Mighty Molybdenum",
      emoji: "⚙️",
      family: "Transition Metal",
      sound: "./assets/sounds/row5/molybdenum.mp3",
      funFact:   "Used to strengthen steel."  ,
      realWorldUses: [],
    },
    {
      symbol: "Tc",
      name: "Technetium",
      characterName: "Techy Technetium",
      emoji: "⚛️",
      family: "Transition Metal",
      sound: "./assets/sounds/row5/technetium.mp3",
      funFact:   "First artificially produced element."  ,
      realWorldUses: [],
    },
    {
      symbol: "Ru",
      name: "Ruthenium",
      characterName: "Radiant Ruthenium",
      emoji: "💍",
      family: "Transition Metal",
      sound: "./assets/sounds/row5/ruthenium.mp3",
      funFact:   "Used in electrical contacts."  ,
      realWorldUses: [],
    },
    {
      symbol: "Rh",
      name: "Rhodium",
      characterName: "Rare Rhodium",
      emoji: "💎",
      family: "Transition Metal",
      sound: "./assets/sounds/row5/rhodium.mp3",
      funFact:   "Used in catalytic converters."  ,
      realWorldUses: [],
    },
    {
      symbol: "Pd",
      name: "Palladium",
      characterName: "Precious Palladium",
      emoji: "💍",
      family: "Transition Metal",
      sound: "./assets/sounds/row5/palladium.mp3",
      funFact:   "Used in jewelry and electronics."  ,
      realWorldUses: [],
    },
    {
      symbol: "Ag",
      name: "Silver",
      characterName: "Shiny Silver",
      emoji: "🥈",
      family: "Transition Metal",
      sound: "./assets/sounds/row5/silver.mp3",
      funFact:   "Excellent conductor and used in jewelry."  ,
      realWorldUses: [],
    },
    {
      symbol: "Cd",
      name: "Cadmium",
      characterName: "Cautious Cadmium",
      emoji: "☢️",
      family: "Transition Metal",
      sound: "./assets/sounds/row5/cadmium.mp3",
      funFact:   "Toxic and used in batteries."  ,
      realWorldUses: [],
    },
    {
      symbol: "In",
      name: "Indium",
      characterName: "Innovative Indium",
      emoji: "🔧",
      family: "Post-Transition Metal",
      sound: "./assets/sounds/row5/indium.mp3",
      funFact:   "Used in touchscreens."  ,
      realWorldUses: [],
    },
    {
      symbol: "Sn",
      name: "Tin",
      characterName: "Sturdy Tin",
      emoji: "🥫",
      family: "Post-Transition Metal",
      sound: "./assets/sounds/row5/tin.mp3",
      funFact:   "Used in solder and cans."  ,
      realWorldUses: [],
    },
    {
      symbol: "Sb",
      name: "Antimony",
      characterName: "Sharp Antimony",
      emoji: "🛡️",
      family: "Metalloid",
      sound: "./assets/sounds/row5/antimony.mp3",
      funFact:   "Used in flame retardants."  ,
      realWorldUses: [],
    },
    {
      symbol: "Te",
      name: "Tellurium",
      characterName: "Terrific Tellurium",
      emoji: "⚡",
      family: "Metalloid",
      sound: "./assets/sounds/row5/tellurium.mp3",
      funFact:   "Used in solar panels."  ,
      realWorldUses: [],
    },
    {
      symbol: "I",
      name: "Iodine",
      characterName: "Important Iodine",
      emoji: "⚕️",
      family: "Halogen",
      sound: "./assets/sounds/row5/iodine.mp3",
      funFact:   "Essential nutrient and disinfectant."  ,
      realWorldUses: [],
    },
    {
      symbol: "Xe",
      name: "Xenon",
      characterName: "Xenon Flash",
      emoji: "💡",
      family: "Noble Gas",
      sound: "./assets/sounds/row5/xenon.mp3",
      funFact:   "Used in flash lamps and ion propulsion."  ,
      realWorldUses: [],
    },
    {
      symbol: "La",
      name: "Lanthanum",
      characterName: "Luminous Lanthanum",
      emoji: "🔆",
      family: "Lanthanide",
      sound: "./assets/sounds/row8/lanthanum.mp3",
      funFact:   "Used in camera lenses."  ,
      realWorldUses: [],
    },
    {
      symbol: "Ce",
      name: "Cerium",
      characterName: "Creative Cerium",
      emoji: "🔮",
      family: "Lanthanide",
      sound: "./assets/sounds/row8/cerium.mp3",
      funFact:   "Used in catalytic converters."  ,
      realWorldUses: [],
    },
    {
      symbol: "Pr",
      name: "Praseodymium",
      characterName: "Precious Praseodymium",
      emoji: "💎",
      family: "Lanthanide",
      sound: "./assets/sounds/row8/praseodymium.mp3",
      funFact:   "Used in magnets."  ,
      realWorldUses: [],
    },
    {
      symbol: "Nd",
      name: "Neodymium",
      characterName: "Nifty Neodymium",
      emoji: "🧲",
      family: "Lanthanide",
      sound: "./assets/sounds/row8/neodymium.mp3",
      funFact:   "Used in powerful magnets."  ,
      realWorldUses: [],
    },
    {
      symbol: "Pm",
      name: "Promethium",
      characterName: "Powerful Promethium",
      emoji: "☢️",
      family: "Lanthanide",
      sound: "./assets/sounds/row8/promethium.mp3",
      funFact:   "Radioactive and rare."  ,
      realWorldUses: [],
    },
    {
      symbol: "Sm",
      name: "Samarium",
      characterName: "Strong Samarium",
      emoji: "🧲",
      family: "Lanthanide",
      sound: "./assets/sounds/row8/samarium.mp3",
      funFact:   "Used in magnets and cancer treatment."  ,
      realWorldUses: [],
    },
    {
      symbol: "Eu",
      name: "Europium",
      characterName: "Energetic Europium",
      emoji: "✨",
      family: "Lanthanide",
      sound: "./assets/sounds/row8/europium.mp3",
      funFact:   "Used in TV screens."  ,
      realWorldUses: [],
    },
    {
      symbol: "Gd",
      name: "Gadolinium",
      characterName: "Glowing Gadolinium",
      emoji: "🧲",
      family: "Lanthanide",
      sound: "./assets/sounds/row8/gadolinium.mp3",
      funFact:   "Used in MRI contrast agents."  ,
      realWorldUses: [],
    },
    {
      symbol: "Tb",
      name: "Terbium",
      characterName: "Terrific Terbium",
      emoji: "🔆",
      family: "Lanthanide",
      sound: "./assets/sounds/row8/terbium.mp3",
      funFact:   "Used in green phosphors."  ,
      realWorldUses: [],
    },
    {
      symbol: "Dy",
      name: "Dysprosium",
      characterName: "Dynamic Dysprosium",
      emoji: "🧲",
      family: "Lanthanide",
      sound: "./assets/sounds/row8/dysprosium.mp3",
      funFact:   "Used in lasers."  ,
      realWorldUses: [],
    },
    {
      symbol: "Ho",
      name: "Holmium",
      characterName: "Honest Holmium",
      emoji: "✨",
      family: "Lanthanide",
      sound: "./assets/sounds/row8/holmium.mp3",
      funFact:   "Used in nuclear reactors."  ,
      realWorldUses: [],
    },
    {
      symbol: "Er",
      name: "Erbium",
      characterName: "Elegant Erbium",
      emoji: "💎",
      family: "Lanthanide",
      sound: "./assets/sounds/row8/erbium.mp3",
      funFact:   "Used in fiber optics."  ,
      realWorldUses: [],
    },
    {
      symbol: "Tm",
      name: "Thulium",
      characterName: "Tidy Thulium",
      emoji: "✨",
      family: "Lanthanide",
      sound: "./assets/sounds/row8/thulium.mp3",
      funFact:   "Used in portable X-ray machines."  ,
      realWorldUses: [],
    },
    {
      symbol: "Yb",
      name: "Ytterbium",
      characterName: "Youthful Ytterbium",
      emoji: "💡",
      family: "Lanthanide",
      sound: "./assets/sounds/row8/ytterbium.mp3",
      funFact:   "Used in lasers."  ,
      realWorldUses: [],
    },
    {
      symbol: "Lu",
      name: "Lutetium",
      characterName: "Luminous Lutetium",
      emoji: "🔆",
      family: "Lanthanide",
      sound: "./assets/sounds/row8/lutetium.mp3",
      funFact:   "Used in PET scan detectors."  ,
      realWorldUses: [],
    },
    {
      symbol: "Ac",
      name: "Actinium",
      characterName: "Active Actinium",
      emoji: "☢️",
      family: "Actinide",
      sound: "./assets/sounds/row9/actinium.mp3",
      funFact:   "Radioactive, used in radiation therapy."  ,
      realWorldUses: [],
    },
    {
      symbol: "Th",
      name: "Thorium",
      characterName: "Thundering Thorium",
      emoji: "☢️",
      family: "Actinide",
      sound: "./assets/sounds/row9/thorium.mp3",
      funFact:   "Potential nuclear fuel."  ,
      realWorldUses: [],
    },
    {
      symbol: "Pa",
      name: "Protactinium",
      characterName: "Powerful Protactinium",
      emoji: "☢️",
      family: "Actinide",
      sound: "./assets/sounds/row9/protactinium.mp3",
      funFact:   "Highly radioactive."  ,
      realWorldUses: [],
    },
    {
      symbol: "U",
      name: "Uranium",
      characterName: "Unstoppable Uranium",
      emoji: "☢️",
      family: "Actinide",
      sound: "./assets/sounds/row9/uranium.mp3",
      funFact:   "Used in nuclear reactors and weapons."  ,
      realWorldUses: [],
    },
    {
      symbol: "Np",
      name: "Neptunium",
      characterName: "Nuclear Neptunium",
      emoji: "☢️",
      family: "Actinide",
      sound: "./assets/sounds/row9/neptunium.mp3",
      funFact:   "Radioactive and synthetic."  ,
      realWorldUses: [],
    },
    {
      symbol: "Pu",
      name: "Plutonium",
      characterName: "Powerful Plutonium",
      emoji: "☢️",
      family: "Actinide",
      sound: "./assets/sounds/row9/plutonium.mp3",
      funFact:   "Used in nuclear weapons and reactors."  ,
      realWorldUses: [],
    },
    {
      symbol: "Am",
      name: "Americium",
      characterName: "Active Americium",
      emoji: "☢️",
      family: "Actinide",
      sound: "./assets/sounds/row9/americium.mp3",
      funFact:   "Used in smoke detectors."  ,
      realWorldUses: [],
    },
    {
      symbol: "Cm",
      name: "Curium",
      characterName: "Curious Curium",
      emoji: "☢️",
      family: "Actinide",
      sound: "./assets/sounds/row9/curium.mp3",
      funFact:   "Highly radioactive."  ,
      realWorldUses: [],
    },
    {
      symbol: "Bk",
      name: "Berkelium",
      characterName: "Bold Berkelium",
      emoji: "☢️",
      family: "Actinide",
      sound: "./assets/sounds/row9/berkelium.mp3",
      funFact:   "Synthetic and radioactive."  ,
      realWorldUses: [],
    },
    {
      symbol: "Cf",
      name: "Californium",
      characterName: "Calm Californium",
      emoji: "☢️",
      family: "Actinide",
      sound: "./assets/sounds/row9/californium.mp3",
      funFact:   "Used in neutron sources."  ,
      realWorldUses: [],
    },
    {
      symbol: "Es",
      name: "Einsteinium",
      characterName: "Energetic Einsteinium",
      emoji: "☢️",
      family: "Actinide",
      sound: "./assets/sounds/row9/einsteinium.mp3",
      funFact:   "Synthetic element."  ,
      realWorldUses: [],
    },
    {
      symbol: "Fm",
      name: "Fermium",
      characterName: "Fabulous Fermium",
      emoji: "☢️",
      family: "Actinide",
      sound: "./assets/sounds/row9/fermium.mp3",
      funFact:   "Synthetic element."  ,
      realWorldUses: [],
    },
    {
      symbol: "Md",
      name: "Mendelevium",
      characterName: "Mighty Mendelevium",
      emoji: "☢️",
      family: "Actinide",
      sound: "./assets/sounds/row9/mendelevium.mp3",
      funFact:   "Named after Mendeleev."  ,
      realWorldUses: [],
    },
    {
      symbol: "No",
      name: "Nobelium",
      characterName: "Noble Nobelium",
      emoji: "☢️",
      family: "Actinide",
      sound: "./assets/sounds/row9/nobelium.mp3",
      funFact:   "Named after Alfred Nobel."  ,
      realWorldUses: [],
    },
    {
      symbol: "Lr",
      name: "Lawrencium",
      characterName: "Luminous Lawrencium",
      emoji: "☢️",
      family: "Actinide",
      sound: "./assets/sounds/row9/lawrencium.mp3",
      funFact:   "Named after Ernest Lawrence."  ,
      realWorldUses: [],
    },
    {
      symbol: "Tl",
      name: "Thallium",
      characterName: "Toxic Thallium",
      emoji: "☠️",
      family: "Post-Transition Metal",
      sound: "./assets/sounds/row6/thallium.mp3",
      funFact:   "Highly toxic, used in electronics."  ,
      realWorldUses: [],
    },
    {
      symbol: "Pb",
      name: "Lead",
      characterName: "Heavy Lead",
      emoji: "⚖️",
      family: "Post-Transition Metal",
      sound: "./assets/sounds/row6/lead.mp3",
      funFact:   "Used historically in pipes and paints."  ,
      realWorldUses: [],
    },
    {
      symbol: "Bi",
      name: "Bismuth",
      characterName: "Bright Bismuth",
      emoji: "🟪",
      family: "Post-Transition Metal",
      sound: "./assets/sounds/row9/bismuth.mp3",
      funFact:   "Used in cosmetics and pharmaceuticals."  ,
      realWorldUses: [],
    },
    {
      symbol: "At",
      name: "Astatine",
      characterName: "Astounding Astatine",
      emoji: "⚛️",
      family: "Halogen",
      sound: "./assets/sounds/row6/astatine.mp3",
      funFact:   "Rare and radioactive halogen."  ,
      realWorldUses: [],
    },
    {
      symbol: "Rn",
      name: "Radon",
      characterName: "Risky Radon",
      emoji: "☢️",
      family: "Noble Gas",
      sound: "./assets/sounds/row6/radon.mp3",
      funFact:   "Radioactive gas from uranium decay."  ,
      realWorldUses: [],
    },
    {
      symbol: "Og",
      name: "Oganesson",
      characterName: "Outstanding Oganesson",
      emoji: "☢️",
      family: "Noble Gas",
      sound: "./assets/sounds/row7/oganesson.mp3",
      funFact:   "Heaviest noble gas, synthetic."  ,
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
        funFactText.textContent = el.funFact;

        // If a meme is defined, show it; otherwise, hide the image
        if (el.funFact) {
          funFactText = el.funFact;
        } else {
          funFactText.style.display = "none"; // hide the image if no meme
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

  let wrongAnswerCount = 0;

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

        wrongAnswerCount = 0;

        feedbackEl.innerHTML +=
          '<img src="./assets/memes/walter-thumbs-up.png" class="meme-inline">';
      } else {
        wrongAnswerCount++;

        feedbackEl.textContent = `Not quite. The correct answer was ${currentTestQuestion.correctAnswer.symbol}. Try the next one!`;
        feedbackEl.className = "feedback-message error";

        feedbackEl.innerHTML +=
          '<img src="./assets/memes/gustave-angry.png" class="meme-inline">';

        if (wrongAnswerCount >= 3) {
          feedbackEl.innerHTML = `
          <img src="./assets/memes/jesse-did-you-even-go-to-a-class.png" class="meme-inline">
          <p class="roast-quote">“You clearly have zero understanding of chemistry.” – Walter</p>
        `;
          wrongAnswerCount = 0; // Optional: reset after roasting
        }
      }

      // Delay before loading next question
      setTimeout(loadNewTestQuestion, 30000);
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

  const reactionRules = [
    {
      elements: ["Na", "Cl"],
      result: "Success! You made table salt (NaCl)! 🧂",
      type: "success",
    },
    {
      families: ["Alkali Metal", "Halogen"],
      result: "You made a salt compound! 🧂",
      type: "success",
    },
    {
      families: ["Alkaline Earth Metal", "Halogen"],
      result: "You made a halide salt! 🧂",
      type: "success",
    },
    {
      families: ["Alkali Metal", "Water"],
      result: "Boom! Alkali metals explode in water! 💥",
      type: "success",
    },
    {
      families: ["Alkali Metal", "Water"],
      result: "Boom! Alkali metals explode in water! 💥",
      type: "success",
    },
    {
      elements: ["H", "O"],
      result: "You made water! H₂O 💧",
      type: "success",
    },
    {
      families: ["Nonmetal", "Water"],
      result: "You made an acidic solution! ☠️",
      type: "success",
    },
    {
      families: ["Metal", "Water"],
      result: "Some metals form hydroxides in water. 🧪",
      type: "info",
    },
    {
      elements: ["C", "O"],
      result: "You made carbon dioxide! CO₂ 🌫️",
      type: "success",
    },
    {
      elements: ["Fe", "O"],
      result: "Rust formed! Fe₂O₃ 🧲",
      type: "success",
    },
    {
      families: ["Metal", "Oxygen"],
      result: "You made a metal oxide! ⚙️",
      type: "success",
    },

    // Hydrogen reactions
    {
      families: ["Halogen", "Hydrogen"],
      result: "You made a hydrogen halide (acid)! 🧪",
      type: "success",
    },
    {
      families: ["Metal", "Hydrogen"],
      result: "You formed a metal hydride. ⚛️",
      type: "success",
    },

    // Noble gases
    {
      families: ["Noble Gas", "*"],
      result: "No reaction. Noble Gases are too cool to react! 😎",
      type: "info",
    },
    {
      families: ["*", "Noble Gas"],
      result: "No reaction. Noble Gases are too cool to react! 😎",
      type: "info",
    },

    // Transition metals
    {
      families: ["Transition Metal", "Halogen"],
      result: "You made a colorful metal halide! 🎨",
      type: "success",
    },
    {
      families: ["Transition Metal", "Oxygen"],
      result: "You made a transition metal oxide. 🧪",
      type: "success",
    },
    {
      families: ["*", "*"],
      result: "No reaction between these two. Try another pair!",
      type: "error",
    },
  ];

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
    const f1 = slot1Element.family;
    const f2 = slot2Element.family;

    let matchedRule = null;
    for (const rule of reactionRules) {
      if (
        rule.elements &&
        rule.elements.includes(s1) &&
        rule.elements.includes(s2)
      ) {
        matchedRule = rule;
        break;
      }

      if (rule.families) {
        const [rf1, rf2] = rule.families;
        if (
          (rf1 === f1 || rf1 === "*" || rf1 === f2) &&
          (rf2 === f2 || rf2 === "*" || rf2 === f1)
        ) {
          matchedRule = rule;
          break;
        }
      }
    }

    if (matchedRule) {
      resultEl.textContent = matchedRule.result;
      resultEl.className = "feedback-message " + matchedRule.type;
    } else {
      resultEl.textContent = "No reaction between these two. Try another pair!";
      resultEl.className = "feedback-message error";
    }
  });

  // Initialize App
  showScreen("home-screen");
});
