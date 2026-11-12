/* Aledeho progression regions and their exclusive deposits. */
window.ALEDEHO_REGION_DEFS = [
  {
    "id": "temperate",
    "name": "Temperate Basin",
    "biome": "Starter basin",
    "desc": "Balanced deposits and gentle terrain.",
    "unlock": {
      "machines": 0,
      "moved": 0
    },
    "bonus": "Balanced starter deposits",
    "multiplier": 1,
    "resources": [
      [
        "basalt_fiber",
        "Basalt Fiber",
        "Solid",
        "Industrial Mineral",
        1.2
      ],
      [
        "springwater",
        "Springwater",
        "Liquid",
        "Fresh Water",
        1.1
      ],
      [
        "marsh_gas",
        "Marsh Gas",
        "Gas",
        "Natural Gas",
        1.3
      ]
    ]
  },
  {
    "id": "highlands",
    "name": "Iron Highlands",
    "biome": "Iron-rich mountains",
    "desc": "Dense metallic seams and deep ore veins.",
    "unlock": {
      "machines": 5,
      "moved": 20
    },
    "bonus": "Metal extraction +25%",
    "multiplier": 1.5,
    "resources": [
      [
        "cobalt_shard",
        "Cobalt Shard",
        "Solid",
        "Rare Metal",
        2.1
      ],
      [
        "ferrous_brine",
        "Ferrous Brine",
        "Liquid",
        "Metallic Fluid",
        1.8
      ],
      [
        "radon_trace",
        "Radon Trace",
        "Gas",
        "Rare Gas",
        1.7
      ]
    ]
  },
  {
    "id": "wetlands",
    "name": "Bluewater Wetlands",
    "biome": "Flooded lowlands",
    "desc": "Rare dissolved minerals and rich chemical waters.",
    "unlock": {
      "machines": 7,
      "moved": 45
    },
    "bonus": "Fluid extraction +30%",
    "multiplier": 1.7,
    "resources": [
      [
        "azurite_silt",
        "Azurite Silt",
        "Solid",
        "Rare Mineral",
        2.3
      ],
      [
        "lumen_sap",
        "Lumen Sap",
        "Liquid",
        "Biofluid",
        2.6
      ],
      [
        "marsh_vapor",
        "Marsh Vapor",
        "Gas",
        "Reactive Gas",
        2
      ]
    ]
  },
  {
    "id": "badlands",
    "name": "Ashen Badlands",
    "biome": "Volcanic desert",
    "desc": "High-energy carbon deposits and volatile compounds.",
    "unlock": {
      "machines": 9,
      "moved": 80
    },
    "bonus": "Fuel yield +35%",
    "multiplier": 2,
    "resources": [
      [
        "emberglass",
        "Emberglass",
        "Solid",
        "Volcanic Mineral",
        3
      ],
      [
        "pyroclast_oil",
        "Pyroclast Oil",
        "Liquid",
        "High-energy Fuel",
        3.4
      ],
      [
        "sulfur_cloud",
        "Sulfur Cloud",
        "Gas",
        "Reactive Gas",
        2.8
      ]
    ]
  },
  {
    "id": "crystal",
    "name": "Glassroot Expanse",
    "biome": "Crystal caverns",
    "desc": "Prismatic structures and valuable crystalline compounds.",
    "unlock": {
      "machines": 11,
      "moved": 130
    },
    "bonus": "Crystal extraction +40%",
    "multiplier": 2.5,
    "resources": [
      [
        "prism_quartz",
        "Prism Quartz",
        "Solid",
        "Exotic Crystal",
        4.2
      ],
      [
        "silica_gel",
        "Silica Gel",
        "Liquid",
        "Advanced Material",
        3.7
      ],
      [
        "helium_x",
        "Helium-X",
        "Gas",
        "Rare Gas",
        4.5
      ]
    ]
  },
  {
    "id": "frostline",
    "name": "Frostline Shelf",
    "biome": "Glacial shelf",
    "desc": "Cryogenic brines, compressed ice minerals, and inert gases.",
    "unlock": {
      "machines": 14,
      "moved": 200
    },
    "bonus": "Cryogenic processing +35%",
    "multiplier": 3,
    "resources": [
      [
        "glacier_titanium",
        "Glacier Titanium",
        "Solid",
        "Rare Metal",
        5
      ],
      [
        "cryobrine",
        "Cryobrine",
        "Liquid",
        "Cryogenic Fluid",
        5.4
      ],
      [
        "xenon_mist",
        "Xenon Mist",
        "Gas",
        "Noble Gas",
        5.8
      ]
    ]
  },
  {
    "id": "verdant",
    "name": "Verdant Canopy",
    "biome": "Overgrown biosphere",
    "desc": "Organic polymers and bio-reactive fluids.",
    "unlock": {
      "machines": 17,
      "moved": 290
    },
    "bonus": "Bio-processing +40%",
    "multiplier": 3.5,
    "resources": [
      [
        "living_resin",
        "Living Resin",
        "Solid",
        "Bio-Polymer",
        6.2
      ],
      [
        "chlorophyll_oil",
        "Chlorophyll Oil",
        "Liquid",
        "Biofuel",
        6
      ],
      [
        "spore_aether",
        "Spore Aether",
        "Gas",
        "Bioactive Gas",
        6.5
      ]
    ]
  },
  {
    "id": "caldera",
    "name": "Emberfall Caldera",
    "biome": "Magma basin",
    "desc": "Extreme heat unlocks dense alloys and superheated fluids.",
    "unlock": {
      "machines": 21,
      "moved": 410
    },
    "bonus": "Thermal refining +45%",
    "multiplier": 4,
    "resources": [
      [
        "magma_steel",
        "Magma Steel",
        "Solid",
        "Superalloy",
        7.5
      ],
      [
        "molten_salt",
        "Molten Salt",
        "Liquid",
        "Thermal Fluid",
        7.1
      ],
      [
        "plasma_vapor",
        "Plasma Vapor",
        "Gas",
        "Ionized Gas",
        8
      ]
    ]
  },
  {
    "id": "sunken",
    "name": "Sunken Meridian",
    "biome": "Abyssal trench",
    "desc": "Pressure-formed minerals and deep-sea chemical deposits.",
    "unlock": {
      "machines": 25,
      "moved": 560
    },
    "bonus": "Pressure extraction +45%",
    "multiplier": 4.7,
    "resources": [
      [
        "abyssal_pearl",
        "Abyssal Pearl",
        "Solid",
        "Abyssal Mineral",
        9
      ],
      [
        "black_vent_ichor",
        "Black Vent Ichor",
        "Liquid",
        "Exotic Fluid",
        9.5
      ],
      [
        "hadal_methane",
        "Hadal Methane",
        "Gas",
        "Deep Gas",
        8.8
      ]
    ]
  },
  {
    "id": "stormglass",
    "name": "Stormglass Plateau",
    "biome": "Electromagnetic highlands",
    "desc": "Conductive crystals and charged atmospheric gases.",
    "unlock": {
      "machines": 30,
      "moved": 740
    },
    "bonus": "Electrical systems +50%",
    "multiplier": 5.5,
    "resources": [
      [
        "fulgurite_core",
        "Fulgurite Core",
        "Solid",
        "Conductive Crystal",
        11
      ],
      [
        "ionized_mercury",
        "Ionized Mercury",
        "Liquid",
        "Conductive Fluid",
        10.5
      ],
      [
        "storm_helium",
        "Storm Helium",
        "Gas",
        "Charged Noble Gas",
        12
      ]
    ]
  },
  {
    "id": "umbral",
    "name": "Umbral Deep",
    "biome": "Subsurface dark zone",
    "desc": "Dense exotic matter and unstable compounds.",
    "unlock": {
      "machines": 36,
      "moved": 980
    },
    "bonus": "Exotic extraction +55%",
    "multiplier": 6.5,
    "resources": [
      [
        "voidstone",
        "Voidstone",
        "Solid",
        "Exotic Matter",
        14
      ],
      [
        "dark_quicksilver",
        "Dark Quicksilver",
        "Liquid",
        "Exotic Fluid",
        13
      ],
      [
        "shadow_plasma",
        "Shadow Plasma",
        "Gas",
        "Plasma",
        15
      ]
    ]
  },
  {
    "id": "rift",
    "name": "Celestial Rift",
    "biome": "Anomalous frontier",
    "desc": "Endgame deposits with the highest material values.",
    "unlock": {
      "machines": 44,
      "moved": 1300
    },
    "bonus": "All advanced production +60%",
    "multiplier": 8,
    "resources": [
      [
        "rift_crystal",
        "Rift Crystal",
        "Solid",
        "Anomalous Crystal",
        20
      ],
      [
        "starfall_essence",
        "Starfall Essence",
        "Liquid",
        "Exotic Essence",
        22
      ],
      [
        "quantum_vapor",
        "Quantum Vapor",
        "Gas",
        "Quantum Gas",
        24
      ]
    ]
  }
];
window.ALEDEHO_REGIONAL_RESOURCES = window.ALEDEHO_REGION_DEFS.flatMap(region => region.resources.map(([id,name,state,category,value]) => ({id,name,state:state.toLowerCase(),category,implemented:true,region:region.id,value,source:{type:'deposit',region:region.id},tier:1})));
window.ALEDEHO_RESOURCE_CATALOG = [...(window.ALEDEHO_RESOURCE_CATALOG||[]), ...window.ALEDEHO_REGIONAL_RESOURCES];
