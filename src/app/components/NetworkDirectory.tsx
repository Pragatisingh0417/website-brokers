"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Subcategory {
  name: string;
  domains: string[];
}

interface Category {
  name: string;
  subcategories: Subcategory[];
}

const categories: Category[] = [
  {
    name: "Accommodation & Events",
    subcategories: [
      {
  name: "BandBs",
  domains: [
    "aintreebandbs.co.uk",
    "ascotbandbs.co.uk",
    "ayrbandbs.co.uk",
    "bathbandbs.co.uk",
    "beverleybandbs.co.uk",
    "brightonbandbs.co.uk",
    "carlislebandbs.co.uk",
    "cartmelbandbs.co.uk",
    "catterickbandbs.co.uk",
    "cheltenhambandbs.co.uk",
    "chepstowbandbs.co.uk",
    "chesterbandbs.co.uk",
    "doncasterbandbs.co.uk",
    "epsombandbs.co.uk",
    "exeterbandbs.co.uk",
    "fakenhambandbs.co.uk",
    "folkestonebandbs.co.uk",
    "fontwellbandbs.co.uk",
    "goodwoodbandbs.co.uk",
    "greatyarmouthbandbs.co.uk",
    "hamiltonbandbs.co.uk",
    "hamiltonparkbandbs.co.uk",
    "haydockbandbs.co.uk",
    "haydockparkbandbs.co.uk",
    "herefordbandbs.co.uk",
    "hexhambandbs.co.uk",
    "huntingdonbandbs.co.uk",
    "kelsobandbs.co.uk",
    "kemptonbandbs.co.uk",
    "kemptonparkbandbs.co.uk",
    "leicesterbandbs.co.uk",
    "lingfieldbandbs.co.uk",
    "lingfieldparkbandbs.co.uk",
    "liverpoolbandbs.co.uk",
    "ludlowbandbs.co.uk",
    "marketrasenbandbs.co.uk",
    "musselburghbandbs.co.uk",
    "newburybandbs.co.uk",
    "newcastlebandbs.co.uk",
    "newmarketbandbs.co.uk",
    "newtonabbotbandbs.co.uk",
    "nottinghambandbs.co.uk",
    "perthbandbs.co.uk",
    "perthbandbs.com",
    "plumptonbandbs.co.uk",
    "pontefractbandbs.co.uk",
    "redcarbandbs.co.uk",
    "riponbandbs.co.uk",
    "salisburybandbs.co.uk",
    "sandownbandbs.co.uk",
    "sandownparkbandbs.co.uk",
    "sedgefieldbandbs.co.uk",
    "southwellbandbs.co.uk",
    "stratfordbandbs.co.uk",
    "tauntonbandbs.co.uk",
    "thirskbandbs.co.uk",
    "towcesterbandbs.co.uk",
    "uttoxeterbandbs.co.uk",
    "warwickbandbs.co.uk",
    "wetherbybandbs.co.uk",
    "wincantonbandbs.co.uk",
    "windsorbandbs.co.uk",
    "wolverhamptonbandbs.co.uk",
    "worcesterbandbs.co.uk",
    "yarmouthbandbs.co.uk",
    "yorkbandbs.co.uk"
  ]
},

      {
  name: "Guest Houses",
  domains: [
    "aintreeguesthouses.co.uk",
    "amblesideguesthouses.co.uk",
    "ascotguesthouses.co.uk",
    "ashbourneguesthouses.co.uk",
    "ayrguesthouses.co.uk",
    "ayrguesthouses.com",
    "bakewellguesthouses.co.uk",
    "bathguesthouses.co.uk",
    "bathguesthouses.com",
    "beverleyguesthouses.co.uk",
    "birminghamguesthouses.co.uk",
    "broadwayguesthouses.co.uk",
    "buxtonguesthouses.co.uk",
    "canterburyguesthouses.co.uk",
    "carlisleguesthouses.co.uk",
    "cartmelguesthouses.co.uk",
    "catterickguesthouses.co.uk",
    "cheltenhamguesthouses.co.uk",
    "chepstowguesthouses.co.uk",
    "chesterguesthouses.co.uk",
    "doncasterguesthouses.co.uk",
    "eastbourneguesthouses.co.uk",
    "epsomguesthouses.co.uk",
    "exeterguesthouses.co.uk",
    "fakenhamguesthouses.co.uk",
    "falmouthguesthouses.co.uk",
    "folkestoneguesthouses.co.uk",
    "fontwellguesthouses.co.uk",
    "goodwoodguesthouses.co.uk",
    "greatyarmouthguesthouses.co.uk",
    "hamiltonguesthouses.co.uk",
    "hamiltonparkguesthouses.co.uk",
    "harrogateguesthouses.co.uk",
    "haydockguesthouses.co.uk",
    "haydockparkguesthouses.co.uk",
    "herefordguesthouses.co.uk",
    "hexhamguesthouses.co.uk",
    "huntingdonguesthouses.co.uk",
    "ilfracombeguesthouses.co.uk",
    "kelsoguesthouses.co.uk",
    "kemptonguesthouses.co.uk",
    "kemptonparkguesthouses.co.uk",
    "kendalguesthouses.co.uk",
    "keswickguesthouses.co.uk",
    "leicesterguesthouses.co.uk",
    "lincolnguesthouses.co.uk",
    "lingfieldguesthouses.co.uk",
    "lingfieldparkguesthouses.co.uk",
    "liverpoolguesthouses.co.uk",
    "llandudnoguesthouses.co.uk",
    "ludlowguesthouses.co.uk",
    "maidstoneguesthouses.co.uk",
    "malvernguesthouses.co.uk",
    "manchesterguesthouses.co.uk",
    "marketrasenguesthouses.co.uk",
    "matlockguesthouses.co.uk",
    "musselburghguesthouses.co.uk",
    "newburyguesthouses.co.uk",
    "newcastleguesthouses.co.uk",
    "newmarketguesthouses.co.uk",
    "newquayguesthouses.co.uk",
    "newtonabbotguesthouses.co.uk",
    "nottinghamguesthouses.co.uk",
    "oxfordguesthouses.co.uk",
    "paigntonguesthouses.co.uk",
    "penzanceguesthouses.co.uk",
    "perthguesthouses.co.uk",
    "perthguesthouses.com",
    "plumptonguesthouses.co.uk",
    "plymouthguesthouses.co.uk",
    "pontefractguesthouses.co.uk",
    "pooleguesthouses.co.uk",
    "portsmouthguesthouses.co.uk",
    "redcarguesthouses.co.uk",
    "riponguesthouses.co.uk",
    "ryeguesthouses.co.uk",
    "salisburyguesthouses.co.uk",
    "sandownparkguesthouses.co.uk",
    "scarboroughguesthouses.co.uk",
    "sedgefieldguesthouses.co.uk",
    "southwellguesthouses.co.uk",
    "standrewsguesthouses.co.uk",
    "stivesguesthouses.co.uk",
    "stratfordguesthouses.co.uk",
    "stratforduponavonguesthouses.co.uk",
    "swanseaguesthouses.co.uk",
    "swanseaguesthouses.com",
    "tauntonguesthouses.co.uk",
    "tenbyguesthouses.co.uk",
    "thirskguesthouses.co.uk",
    "torquayguesthouses.co.uk",
    "towcesterguesthouses.co.uk",
    "uttoxeterguesthouses.co.uk",
    "warwickguesthouses.co.uk",
    "wellsguesthouses.co.uk",
    "westonsupermareguesthouses.co.uk",
    "wetherbyguesthouses.co.uk",
    "weymouthguesthouses.co.uk",
    "wincantonguesthouses.co.uk",
    "windermereguesthouses.co.uk",
    "windsorguesthouses.co.uk",
    "wolverhamptonguesthouses.co.uk",
    "worcesterguesthouses.co.uk",
    "yarmouthguesthouses.co.uk"
  ]
},

      { name: "Hotels", domains: ["abbotssalfordhotels.com", "aberfoylehotels.co.uk"] },

      { name: "Conferences & Events", domains: ["abbotssalfordhotels.com", "aberfoylehotels.co.uk"] },
            { name: "Hospitality and Venues", domains: ["abbotssalfordhotels.com", "aberfoylehotels.co.uk"] },

            
    ],
  },
  {
    name: "Gambling & Speculation",
    subcategories: [
      { name: "Bandits", domains: ["banditsdomain1.co.uk", "banditsdomain2.co.uk"] },
      { name: "Betting", domains: ["bettingdomain1.co.uk", "bettingdomain2.co.uk"] },
      { name: "Bingo", domains: ["bingodomain1.co.uk", "bingodomain2.co.uk"] },
            { name: "Lottery and Speculation", domains: ["bingodomain1.co.uk", "bingodomain2.co.uk"] },

    ],
  },
  {
    name: "Alternative Medicine",
    subcategories: [
      { name: "Alternative Medicine", domains: ["chinesemedicine.co.uk", "complimentarymedicine.co.uk", "homeopaths.co.uk", "naturalremedies.co.uk"] },
    ],
  },
  {
    name: "Towns & Places",
    subcategories: [
      { name: "Towns & Places", domains: ["abingdon.co.uk", "addlestone.co.uk"] },
    ],
  },
  {
    name: "Where to Go",
    subcategories: [
      { name: "Bars", domains: ["banditsdomain1.co.uk", "banditsdomain2.co.uk"] },
      { name: "Pubs", domains: ["bettingdomain1.co.uk", "bettingdomain2.co.uk"] },
      { name: "Restaurants", domains: ["bingodomain1.co.uk", "bingodomain2.co.uk"] },

    ],
  },
  {
    name: "Generic	Property",
    subcategories: [
      { name: "Generic", domains: ["banditsdomain1.co.uk", "banditsdomain2.co.uk"] },
      { name: "Property", domains: ["bettingdomain1.co.uk", "bettingdomain2.co.uk"] },
    

    ],
  },
  {
    name: "Sports and Sporting Events",
    subcategories: [
      { 
  name: "Sport", 
  domains: [
    "carrallies.co.uk",
    "iceskating.co.uk",
    "seaangling.co.uk",
    "wwwbowls.co.uk",
    "wwwbowls.com",
    "wwwboxing.co.uk",
    "wwwcricket.co.uk",
    "wwwcricket.com",
    "wwwf1.co.uk",
    "wwwf1.com",
    "wwwfootball.co.uk",
    "wwwformula1.co.uk",
    "wwwformula1.com",
    "wwwgolf.co.uk",
    "wwwhorseracing.co.uk",
    "wwwhorseracing.com",
    "wwwrugby.co.uk",
    "wwwskiing.co.uk",
    "wwwsurfing.co.uk",
    "wwwsurfing.com",
    "wwwtennis.co.uk",
    "wwwwimbledon.co.uk",
    "wwwwimbledon.com",
    "wwwyachting.co.uk",
    "wwwyachting.com",
    "icehockey.co.uk",
    "marshallarts.co.uk",
    "ninjitsu.co.uk",
    "seaangling.com"
  ] 
},
{ 
  name: "Gymnasium", 
  domains: [
    "fitnesscentres.co.uk",
    "fitnessclubs.co.uk",
    "gymnasiums.co.uk",
    "personaltrainers.co.uk",
    "sportcentres.co.uk",
    "sportscenters.co.uk",
    "sportscentres.co.uk",
    "sportscentres.com"
  ] 
},

     
    ],
  },
   {
    name: "Others",
    subcategories: [
     { 
  name: "Currency", 
  domains: [
    "belgiumfrancs.com",
    "changemoney.co.uk",
    "changemoney.com",
    "cypruspounds.com",
    "drachmas.com",
    "dublineire.com",
    "dutchguilders.com",
    "exchangemoney.co.uk",
    "exchangemoney.com",
    "irishpunts.com",
    "pesatas.com",
    "punts.com",
    "thecurrencymarket.co.uk"
  ] 
},
{ 
  name: "Hobbies", 
  domains: [
    "birdwatchers.co.uk",
    "ornithology.co.uk",
    "twitchers.co.uk",
    "twitchers.com"
  ] 
},

     
    ],
  },
];

export default function DomainCategoryFilter() {
  // Set ALL as default active category
  const [activeCategory, setActiveCategory] = useState<Category | "ALL">("ALL");
  const [activeSubcategory, setActiveSubcategory] = useState<Subcategory | null>(null);
  const [search, setSearch] = useState("");

  // Show all subcategories when ALL is selected
  const allSubcategories =
    activeCategory === "ALL"
      ? categories.flatMap((cat) => cat.subcategories)
      : activeCategory?.subcategories || [];

  // Domains to display when a subcategory is selected
  const filteredDomains = activeSubcategory
    ? activeSubcategory.domains.filter((domain) =>
      domain.toLowerCase().includes(search.toLowerCase())
    )
    : [];

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 py-12 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
        Our <span className="text-[#8aa921]">Domains</span>
      </h2>

      {/* Categories */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-8">
        {/* ALL Button */}
        <motion.button
          onClick={() => {
            setActiveCategory("ALL");
            setActiveSubcategory(null);
            setSearch("");
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`p-4 rounded-xl shadow-md font-semibold transition-colors duration-200 ${activeCategory === "ALL"
              ? "bg-[#8aa921] text-white"
              : "bg-gray-100 text-gray-800 hover:bg-gray-200"
            }`}
        >
          ALL
        </motion.button>

        {/* Other categories */}
        {categories.map((category) => (
          <motion.button
            key={category.name}
            onClick={() => {
              setActiveCategory(category);
              setActiveSubcategory(null);
              setSearch("");
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`p-4 rounded-xl shadow-md font-semibold transition-colors duration-200 ${activeCategory === category
                ? "bg-[#8aa921] text-white"
                : "bg-gray-100 text-gray-800 hover:bg-gray-200"
              }`}
          >
            {category.name}
          </motion.button>
        ))}
      </div>

      {/* Subcategories */}
      <AnimatePresence>
        {activeCategory && allSubcategories.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex flex-wrap justify-center gap-3 mb-6"
          >
            {allSubcategories.map((sub) => (
              <button
                key={sub.name}
                onClick={() => {
                  setActiveSubcategory(sub);
                  setSearch("");
                }}
                className={`px-4 py-2 rounded-full font-medium text-sm md:text-base transition-all duration-200 ${activeSubcategory === sub
                    ? "bg-[#8aa921] text-white shadow-md"
                    : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                  }`}
              >
                {sub.name}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Domains */}
      {activeSubcategory && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-6 text-left max-w-3xl mx-auto"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Domains in {activeSubcategory.name}:
          </h3>

          <input
            type="text"
            placeholder="Search domains..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full p-2 mb-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8aa921]"
          />

          <ul className="list-disc list-inside text-gray-700 max-h-96 overflow-y-auto border p-4 rounded-md bg-gray-50">
            {filteredDomains.length > 0 ? (
              filteredDomains.map((domain, idx) => <li key={idx}>{domain}</li>)
            ) : (
              <li className="text-gray-400">No domains found</li>
            )}
          </ul>
        </motion.div>
      )}
    </section>
  );
}
