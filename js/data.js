/**
 * City Comparison Data File
 * Generated from research JSON files on 2026-03-29
 * 9 cities compared for family relocation evaluation
 */

const CITIES = {

  "lexington-ky": {
    name: "Lexington",
    state: "KY",
    isBaseline: true,

    costOfLiving: {
      overallIndex: 90.8,
      housingIndex: 76,
      groceryIndex: 100,
      utilitiesIndex: 86,
      transportationIndex: 96,
      medianHouseholdIncome: 75818,
      stateIncomeTaxRate: "3.5%",
      salesTaxRate: "6.0%",
      propertyTaxEffectiveRate: 0.0087,
      propertyTaxOn400K: 3480,
      unemploymentRate: 3.8,
      topIndustries: [
        "Higher Education & Healthcare",
        "Advanced Manufacturing",
        "Logistics & Warehousing",
        "Equine Industry",
        "Technology & Professional Services"
      ],
      remoteFriendly: "Medium"
    },

    housing: {
      medianHomePrice: 330000,
      pricePerAcreRanch: "$6K-$30K (surrounding counties)",
      landAvailability: "Excellent",
      horseFriendlyZoning: true,
      marketCondition: "Balanced",
      daysOnMarket: 64,
      neighborhoods: [
        { name: "Chevy Chase-Ashland Park", priceRange: "$500K-$800K+", familyRating: "Excellent", notes: "Historic charm, tree-lined streets, near UK campus" },
        { name: "Tates Creek", priceRange: "$250K-$450K", familyRating: "Good", notes: "Diverse, inclusive, family-friendly" },
        { name: "Hamburg", priceRange: "$300K-$500K", familyRating: "Good", notes: "Newer subdivisions, retail, family amenities" },
        { name: "Southern Fayette County", priceRange: "$400K-$1M+", familyRating: "Excellent", notes: "Equestrian estates, 10+ acre lots, rural character" },
        { name: "Gleneagles", priceRange: "$300K-$500K", familyRating: "Good", notes: "Modern developments, green spaces" }
      ]
    },

    education: {
      classicalChristianSchools: [
        { name: "Trinity Christian Academy", grades: "PreK-12", tuition: 14229, students: 438, accreditation: "KY Non-Public Schools Commission, SCL member", notes: "Premier classical Christian school since 1988, trivium-based" },
        { name: "Lexington Latin School", grades: "JrK-12", tuition: "$3,280-$6,705", students: "estimated 100-200", accreditation: "Memoria Press curriculum", notes: "3-day classical program using Memoria Press. Hybrid model. Very affordable tuition." },
        { name: "Veritas Christian Academy", grades: "JK-12", tuition: null, students: null, accreditation: "N/A", notes: "University Model hybrid homeschool, only one in KY" }
      ],
      otherPrivateSchools: [
        { name: "Lexington Christian Academy", grades: "PreK-12", tuition: 15000, notes: "Large evangelical Christian school, 1,354 students" },
        { name: "Sayre School", grades: "PreK-12", tuition: 29600, notes: "Independent college-prep, highly ranked" }
      ],
      publicSchoolRating: "A-",
      homeschoolCoOps: [
        { name: "Classical Conversations - Lexington", type: "Classical Christian", notes: "Multiple communities, Foundations/Essentials/Challenge" },
        { name: "CHEB", type: "Christian Support", notes: "Christian Home Educators of the Bluegrass" },
        { name: "Heritage Homeschool Fellowship", type: "Christian Support", notes: "PreK-12 supplemental classes and clubs" },
        { name: "CHC", type: "Christian Co-op", notes: "Christian Homeschool of the Commonwealth" }
      ],
      classicalConversations: true,
      graduationRate: 92.4
    },

    faith: {
      pcaChurches: [
        { name: "Tates Creek Presbyterian Church", size: "~700 members", notes: "Major PCA congregation, active in church planting" },
        { name: "Christ Covenant Presbyterian Church", size: "~150 members", notes: "Founded 1974, one of oldest PCA in Lexington" }
      ],
      opcChurches: [],
      epcChurches: [],
      crecChurches: [],
      otherReformed: [
        { name: "Maxwell Street Presbyterian", denomination: "PC(USA)", size: "Unknown", notes: "Mainline, not confessionally Reformed" }
      ],
      totalReformedCount: 3,
      reformedDensity: "Moderate",
      seminaries: [],
      christianOrgs: ["Lexington Leadership Foundation", "CHEB"]
    },

    lifestyle: {
      climate: {
        springHigh: 65, springLow: 43,
        summerHigh: 85, summerLow: 65,
        fallHigh: 67, fallLow: 45,
        winterHigh: 42, winterLow: 26,
        annualRainfall: "49.8 inches",
        annualSnowfall: "14.5 inches",
        sunnyDays: 188
      },
      outdoorRec: [
        { activity: "Hiking", quality: 3, notes: "Raven Run, Legacy Trail, Veterans Park; Red River Gorge 1hr away" },
        { activity: "Equestrian", quality: 5, notes: "Horse Capital of the World; Kentucky Horse Park, extensive trail systems" },
        { activity: "Fishing", quality: 3, notes: "Kentucky River, Jacobson Park reservoir" },
        { activity: "Cycling", quality: 3, notes: "Legacy Trail 12-mile paved trail" },
        { activity: "Climbing", quality: 4, notes: "Red River Gorge ~1hr east, world-class" }
      ],
      equestrianAccess: "Excellent",
      crimeViolentPer100K: 300,
      crimePropertyPer100K: 2400,
      walkScore: 34,
      avgCommute: "21 min",
      culturalAmenities: "University of Kentucky campus, Keeneland racing, bourbon distilleries, Rupp Arena events"
    },

    community: {
      population: 332841,
      metroPopulation: 533000,
      populationGrowthRate: "0.8%/year",
      medianAge: 34,
      familyFriendliness: "Good",
      homeschoolCommunity: "Strong",
      conservativePresence: "Moderate",
      smallTownFeel: "No",
      volunteerCulture: "Active civic orgs including CivicLex, Lexington Leadership Foundation, UK service-learning programs"
    }
  },

  "bend-or": {
    name: "Bend",
    state: "OR",
    isBaseline: false,

    costOfLiving: {
      overallIndex: 127,
      housingIndex: 199,
      groceryIndex: 106,
      utilitiesIndex: 93,
      transportationIndex: 112,
      medianHouseholdIncome: 96000,
      stateIncomeTaxRate: "4.75%-9.9%",
      salesTaxRate: "0%",
      propertyTaxEffectiveRate: 0.0072,
      propertyTaxOn400K: 2880,
      unemploymentRate: 5.0,
      topIndustries: [
        "Healthcare",
        "Leisure & Hospitality",
        "Manufacturing",
        "Professional Services",
        "Construction"
      ],
      remoteFriendly: "High"
    },

    housing: {
      medianHomePrice: 679000,
      pricePerAcreRanch: "$2K-$22K (Crook/Jefferson counties cheaper)",
      landAvailability: "Good",
      horseFriendlyZoning: true,
      marketCondition: "Balanced",
      daysOnMarket: 66,
      neighborhoods: [
        { name: "Northwest Crossing", priceRange: "$600K-$1M+", familyRating: "Excellent", notes: "Master-planned, walkable, parks, near top schools" },
        { name: "Summit West / Westside", priceRange: "$550K-$900K", familyRating: "Excellent", notes: "Near Cascades, outdoor-oriented families" },
        { name: "Southeast Bend", priceRange: "$400K-$600K", familyRating: "Good", notes: "More affordable, newer developments" },
        { name: "Tumalo / Rural Bend", priceRange: "$500K-$1.5M+", familyRating: "Good", notes: "Horse properties, larger lots, rural feel" }
      ]
    },

    education: {
      classicalChristianSchools: [
        { name: "Chesterton Academy of Mater Dei", grades: "9-12", tuition: "$2,400", students: "8 (opened Fall 2025)", accreditation: "Chesterton Schools Network", notes: "Catholic classical high school — Central Oregon's first classical school. Part of nationwide Chesterton network." },
        { name: "Immanuel Classical School", grades: "K-12", tuition: "Contact school", students: "Small", accreditation: "Classical Christian", notes: "Classical Christian school rooted in Reformed theology. Covenantal discipleship model." }
      ],
      otherPrivateSchools: [
        { name: "Trinity Lutheran School", grades: "PreK-12", tuition: 12500, notes: "670 students, strong academics, LCMS" },
        { name: "Morning Star Christian School", grades: "N-8", tuition: 7950, notes: "Christ-centered STEM/project-based curriculum. 192 students." },
        { name: "Seven Peaks School", grades: "Pre-8", tuition: 18735, notes: "Top-ranked, IB program, secular" }
      ],
      publicSchoolRating: "B+",
      homeschoolCoOps: [
        { name: "Cascade Christian Co-op", type: "Christian", notes: "Supplementary classes, social events, field trips" },
        { name: "Uplift Central Oregon", type: "General", notes: "Homeschool support and enrichment" }
      ],
      classicalConversations: "Active — CC communities confirmed in the Bend area",
      graduationRate: 85.3
    },

    faith: {
      pcaChurches: [],
      opcChurches: [
        { name: "Grace Reformed Presbyterian Church", size: "Small (<100)", notes: "Westminster Confession, psalm singing" }
      ],
      epcChurches: [],
      crecChurches: [],
      otherReformed: [
        { name: "Sovereign Grace Church", denomination: "Reformed Baptist (1689)", size: "Small", notes: "Plant-stage congregation" },
        { name: "Grace Bible Church of Bend", denomination: "Acts29", size: "Medium", notes: "Reformed-leaning evangelical" }
      ],
      totalReformedCount: 3,
      reformedDensity: "Weak",
      seminaries: [],
      christianOrgs: ["Bend Ministerial Association", "Shepherds House Ministries"]
    },

    lifestyle: {
      climate: {
        springHigh: 59, springLow: 32,
        summerHigh: 80, summerLow: 46,
        fallHigh: 63, fallLow: 34,
        winterHigh: 43, winterLow: 24,
        annualRainfall: "10.6 inches",
        annualSnowfall: "33 inches",
        sunnyDays: 263
      },
      outdoorRec: [
        { activity: "Hiking", quality: 5, notes: "223+ trails, Deschutes NF, Smith Rock, Three Sisters Wilderness" },
        { activity: "Skiing", quality: 5, notes: "Mt. Bachelor 22 miles, 3,365 ft vertical, 101 runs" },
        { activity: "Mountain Biking", quality: 5, notes: "300+ miles singletrack, Phil's Trail, world-class" },
        { activity: "Equestrian", quality: 4, notes: "Extensive national forest trails, OR Equestrian Trails chapter" },
        { activity: "Fishing", quality: 5, notes: "Deschutes River, Cascade Lakes, premier trout fishing" },
        { activity: "Climbing", quality: 5, notes: "Smith Rock State Park, world-class sport climbing" }
      ],
      equestrianAccess: "Good",
      crimeViolentPer100K: 169,
      crimePropertyPer100K: 1362,
      walkScore: 32,
      avgCommute: "15 min",
      culturalAmenities: "20+ craft breweries, vibrant food scene, outdoor festivals, art galleries"
    },

    community: {
      population: 110545,
      metroPopulation: 260919,
      populationGrowthRate: "1.7%/year",
      medianAge: 40.9,
      familyFriendliness: "Good",
      homeschoolCommunity: "Moderate",
      conservativePresence: "Low",
      smallTownFeel: "Moderate",
      volunteerCulture: "Active civic culture with Connect Central Oregon coordinating 250+ organizations"
    }
  },

  "sisters-or": {
    name: "Sisters",
    state: "OR",
    isBaseline: false,

    costOfLiving: {
      overallIndex: 131,
      housingIndex: 201,
      groceryIndex: 106,
      utilitiesIndex: 93,
      transportationIndex: 112,
      medianHouseholdIncome: 94524,
      stateIncomeTaxRate: "4.75%-9.9%",
      salesTaxRate: "0%",
      propertyTaxEffectiveRate: 0.0065,
      propertyTaxOn400K: 2600,
      unemploymentRate: 4.8,
      topIndustries: [
        "Healthcare",
        "Leisure & Hospitality",
        "Education",
        "Construction",
        "Government"
      ],
      remoteFriendly: "High"
    },

    housing: {
      medianHomePrice: 775000,
      pricePerAcreRanch: "$8K-$48K (Tumalo area best for ranch)",
      landAvailability: "Limited",
      horseFriendlyZoning: true,
      marketCondition: "Buyer's",
      daysOnMarket: 53,
      neighborhoods: [
        { name: "Tollgate", priceRange: "$500K-$800K", familyRating: "Good", notes: "Family-friendly, pool, tennis, 2mi from town" },
        { name: "Cascade Meadow Ranch", priceRange: "$800K-$1.5M+", familyRating: "Good", notes: "Premier equestrian community, small lots" },
        { name: "Tumalo Area", priceRange: "$500K-$1.5M+", familyRating: "Good", notes: "Best for 10+ acre horse/ranch property" },
        { name: "In-town Sisters", priceRange: "$500K-$900K", familyRating: "Moderate", notes: "Walkable to schools and shops" }
      ]
    },

    education: {
      classicalChristianSchools: [],
      otherPrivateSchools: [
        { name: "Morning Star Christian School (Bend)", grades: "PK-8", tuition: 7950, notes: "25 min from Sisters, Christ-centered STEM" },
        { name: "Three Sisters Adventist School (Bend)", grades: "PK-8", tuition: null, notes: "20 min from Sisters, since 1924" }
      ],
      publicSchoolRating: "A-",
      homeschoolCoOps: [
        { name: "Cascade Christian Co-op", type: "Christian", notes: "Central Oregon, supplementary classes" },
        { name: "Commonplace Sisters", type: "Enrichment", notes: "Art, music, drama classes in Sisters" }
      ],
      classicalConversations: false,
      graduationRate: 92
    },

    faith: {
      pcaChurches: [],
      opcChurches: [],
      epcChurches: [],
      crecChurches: [],
      otherReformed: [
        { name: "Grace Reformed Presbyterian (Bend)", denomination: "OPC", size: "Small", notes: "25-30 min drive from Sisters" },
        { name: "Sovereign Grace Church (Bend)", denomination: "Reformed Baptist", size: "Small", notes: "25-30 min drive" }
      ],
      totalReformedCount: 0,
      reformedDensity: "Very Weak",
      seminaries: [],
      christianOrgs: ["CORE Market food pantry", "OCEANetwork"]
    },

    lifestyle: {
      climate: {
        springHigh: 58, springLow: 29,
        summerHigh: 82, summerLow: 41,
        fallHigh: 61, fallLow: 30,
        winterHigh: 41, winterLow: 21,
        annualRainfall: "11 inches",
        annualSnowfall: "16 inches",
        sunnyDays: 162
      },
      outdoorRec: [
        { activity: "Hiking", quality: 5, notes: "Peterson Ridge trails, South Sister, Three Sisters Wilderness, PCT" },
        { activity: "Skiing", quality: 5, notes: "Hoodoo 22mi, Mt. Bachelor 50-60 min" },
        { activity: "Equestrian", quality: 5, notes: "Cascade Meadow Ranch, Deschutes NF trails, Sisters Rodeo" },
        { activity: "Fishing", quality: 5, notes: "Metolius River world-class fly fishing" },
        { activity: "Mountain Biking", quality: 4, notes: "Peterson Ridge, McKenzie Pass" }
      ],
      equestrianAccess: "Excellent",
      crimeViolentPer100K: 150,
      crimePropertyPer100K: 1532,
      walkScore: 40,
      avgCommute: "25 min (to Bend)",
      culturalAmenities: "Old West town charm, Sisters Rodeo, world's largest outdoor quilt show, galleries, Folk Festival"
    },

    community: {
      population: 2899,
      metroPopulation: 260919,
      populationGrowthRate: "-1.0%/year",
      medianAge: 49.6,
      familyFriendliness: "Moderate",
      homeschoolCommunity: "Moderate",
      conservativePresence: "Moderate",
      smallTownFeel: "Yes",
      volunteerCulture: "Active small-town volunteerism, accessible city government"
    }
  },

  "sarasota-fl": {
    name: "Sarasota",
    state: "FL",
    isBaseline: false,

    costOfLiving: {
      overallIndex: 105,
      housingIndex: 130,
      groceryIndex: 107,
      utilitiesIndex: 105,
      transportationIndex: 102,
      medianHouseholdIncome: 72105,
      stateIncomeTaxRate: "0%",
      salesTaxRate: "7.0%",
      propertyTaxEffectiveRate: 0.0105,
      propertyTaxOn400K: 3700,
      unemploymentRate: 4.3,
      topIndustries: [
        "Healthcare & Social Assistance",
        "Retail Trade",
        "Professional Services",
        "Hospitality & Tourism",
        "Construction & Real Estate"
      ],
      remoteFriendly: "High"
    },

    housing: {
      medianHomePrice: 485000,
      pricePerAcreRanch: "$35K-$54K (Myakka City area)",
      landAvailability: "Good",
      horseFriendlyZoning: true,
      marketCondition: "Balanced",
      daysOnMarket: 54,
      neighborhoods: [
        { name: "Lakewood Ranch", priceRange: "$400K-$1M+", familyRating: "Excellent", notes: "Award-winning master-planned, top schools" },
        { name: "Palmer Ranch", priceRange: "$350K-$800K", familyRating: "Good", notes: "Mature community, excellent schools" },
        { name: "Bee Ridge / Sarasota Springs", priceRange: "$300K-$500K", familyRating: "Good", notes: "More affordable, solid value" },
        { name: "Myakka City / East County", priceRange: "$350K-$600K", familyRating: "Good", notes: "Rural, best for acreage/horses, 30-45 min to downtown" }
      ]
    },

    education: {
      classicalChristianSchools: [
        { name: "The Classical Academy of Sarasota", grades: "PK-12", tuition: 12500, students: 916, accreditation: "Accredited", notes: "Rigorous classical liberal arts, virtuous character development" },
        { name: "Liberty Christian Academy", grades: "K-7 (growing to 12)", tuition: null, students: 87, accreditation: "In progress", notes: "Founded 2022, 10:1 ratio, EdChoice scholarships" },
        { name: "Chesterton Academy of St. Padre Pio", grades: "9-12", tuition: 11500, students: "small (opened Aug 2024)", accreditation: "Chesterton Academy Network", notes: "Catholic classical high school. Step Up scholarships accepted — most families pay ~$2,822 after scholarship." },
        { name: "Incarnation Catholic School", grades: "PreK-8", tuition: 8015, students: 197, accreditation: "Diocese of Venice", notes: "Catholic classical liberal arts. Rooted in tradition, centered on the Eucharist." },
        { name: "Riverstone Classical Academy", grades: "K-8", tuition: null, students: null, accreditation: "Classical Christian hybrid", notes: "Bradenton (15 mi north). Hybrid model — Tues/Thurs academic, Wed fine arts enrichment. Christ-centered, classically driven." }
      ],
      otherPrivateSchools: [
        { name: "Sarasota Christian School", grades: "PK-12", tuition: null, notes: "Variable tuition (40-90% of full cost)" },
        { name: "Pine View School", grades: "2-12", tuition: null, notes: "Public gifted magnet, #1 in FL, 95% grad rate" },
        { name: "Sarasota Classical Preparatory Academy", grades: "K-6 (opening Fall 2026)", tuition: "FREE (public charter)", notes: "Hillsdale-affiliated classical charter. Will grow to K-12. Great Works literature, Latin, moral character development." }
      ],
      publicSchoolRating: "A",
      homeschoolCoOps: [
        { name: "Classical Conversations - Sarasota", type: "Classical Christian", notes: "Multiple communities in Bradenton/Sarasota/Venice" },
        { name: "FPEA Groups", type: "Various", notes: "Florida Parent Educators Association support groups" }
      ],
      classicalConversations: true,
      graduationRate: 93
    },

    faith: {
      pcaChurches: [
        { name: "Covenant Life Church", size: "~150 members", notes: "Anchor PCA church for Reformed families" },
        { name: "New Creation Church", size: "Church plant", notes: "PCA church plant in the Skye Ranch area. Active and growing." }
      ],
      opcChurches: [
        { name: "Providence OPC (Bradenton)", size: "~75 members", notes: "15 min north of Sarasota, confessional Presbyterian" }
      ],
      epcChurches: [],
      crecChurches: [],
      otherReformed: [
        { name: "Bethel Community Church", denomination: "Reformed Baptist (1689)", size: "Unknown", notes: "5 Solas, confessional" },
        { name: "Cornerstone Baptist Church", denomination: "Reformed SBC", size: "Unknown", notes: "Doctrines of Grace, 9Marks listed" }
      ],
      totalReformedCount: 5,
      reformedDensity: "Weak",
      seminaries: [],
      christianOrgs: ["Classical Conversations co-ops", "FPEA homeschool groups"]
    },

    lifestyle: {
      climate: {
        springHigh: 82, springLow: 62,
        summerHigh: 89, summerLow: 79,
        fallHigh: 84, fallLow: 66,
        winterHigh: 72, winterLow: 52,
        annualRainfall: "56 inches",
        annualSnowfall: "0 inches",
        sunnyDays: 251
      },
      outdoorRec: [
        { activity: "Beach", quality: 5, notes: "Siesta Key #1 beach in US, Lido Key, Venice" },
        { activity: "Fishing", quality: 5, notes: "World-class Gulf fishing, inshore and offshore" },
        { activity: "Hiking", quality: 3, notes: "Myakka River State Park 37,000+ acres, Oscar Scherer" },
        { activity: "Equestrian", quality: 3, notes: "Little Manatee trails, Myakka State Forest, private communities" },
        { activity: "Cycling", quality: 4, notes: "Legacy Trail 18.5 miles" }
      ],
      equestrianAccess: "Good",
      crimeViolentPer100K: 592,
      crimePropertyPer100K: 2749,
      walkScore: 52,
      avgCommute: "20 min",
      culturalAmenities: "Ringling Museum, Sarasota Opera/Orchestra/Ballet, vibrant arts scene, Florida's Cultural Coast"
    },

    community: {
      population: 59047,
      metroPopulation: 934000,
      populationGrowthRate: "1.1%/year",
      medianAge: 48.2,
      familyFriendliness: "Moderate",
      homeschoolCommunity: "Moderate",
      conservativePresence: "Moderate",
      smallTownFeel: "Moderate",
      volunteerCulture: "Active retiree-driven volunteer community, strong arts/culture scene"
    }
  },

  "chattanooga-tn": {
    name: "Chattanooga",
    state: "TN",
    isBaseline: false,

    costOfLiving: {
      overallIndex: 88.6,
      housingIndex: 85,
      groceryIndex: 96.5,
      utilitiesIndex: 86.6,
      transportationIndex: 89,
      medianHouseholdIncome: 61028,
      stateIncomeTaxRate: "0%",
      salesTaxRate: "9.25%",
      propertyTaxEffectiveRate: 0.0056,
      propertyTaxOn400K: 2240,
      unemploymentRate: 3.2,
      topIndustries: [
        "Healthcare & Insurance",
        "Manufacturing (VW, Wacker)",
        "Technology (EPB smart grid)",
        "Logistics & Distribution",
        "Tourism & Hospitality"
      ],
      remoteFriendly: "High"
    },

    housing: {
      medianHomePrice: 335000,
      pricePerAcreRanch: "$12K-$20K (Sequatchie Valley/Soddy-Daisy)",
      landAvailability: "Good",
      horseFriendlyZoning: true,
      marketCondition: "Seller's",
      daysOnMarket: 45,
      neighborhoods: [
        { name: "Signal Mountain", priceRange: "$225K-$1M+", familyRating: "Excellent", notes: "#2 family suburb, stunning views, cooler temps, near EPC church" },
        { name: "Lookout Mountain", priceRange: "$400K-$3M+", familyRating: "Excellent", notes: "#1 family suburb, Covenant College, LMPC nearby" },
        { name: "East Brainerd", priceRange: "$250K-$600K", familyRating: "Good", notes: "Near Grace Academy, newer developments" },
        { name: "Soddy-Daisy", priceRange: "$200K-$600K", familyRating: "Good", notes: "Most affordable for acreage/horse property" },
        { name: "Sequatchie Valley", priceRange: "$150K-$500K", familyRating: "Good", notes: "Best value for 10+ acre ranch, 30-45 min west" }
      ]
    },

    education: {
      classicalChristianSchools: [
        { name: "Veritas Classical Schools", grades: "K-12", tuition: null, students: null, accreditation: "N/A", notes: "Hybrid 2 days/week, two campuses" },
        { name: "Candies Creek Academy", grades: "PK-12", tuition: "Contact school", students: "78", accreditation: "ACCS member", notes: "30 minutes away in Charleston, TN. Classical Christian school." },
        { name: "Point Christian Academy", grades: "PreK-4th (expanding)", tuition: null, students: 82, accreditation: "AACS", notes: "Classical trivium model, growing school. Income-based financial assistance available." },
        { name: "Regents Classical School", grades: "TBD", tuition: null, students: null, accreditation: "Classical Christian", notes: "Worshipful, liturgical, excellence-driven learning community. Newer school using classical trivium." },
        { name: "Classical Beginnings Tutorial", grades: "Elementary focus", tuition: null, students: null, accreditation: "N/A", notes: "Homeschool tutorial (not full school). Trivium-based: phonics, reading, writing, math, Bible, Latin." }
      ],
      otherNotableChristianSchools: [
        { name: "Grace Baptist Academy", grades: "K3-12", tuition: 4000, students: 536, accreditation: "Cognia, ACSI", notes: "Traditional Christian curriculum (not classical). SAT avg 1080-1300 range, $4K/yr tuition, 90-96% college acceptance, Latin grades 3-8" }
      ],
      otherPrivateSchools: [
        { name: "Silverdale Baptist Academy", grades: "PreK-12", tuition: 13010, notes: "1,307 students, well-established" },
        { name: "Chattanooga Christian School", grades: "PreK-12", tuition: 15800, notes: "1,550+ students, largest private school in Hamilton County. Interdenominational, SACS/Cognia accredited. $2.4M in financial aid." },
        { name: "Boyd-Buchanan School", grades: "PreK-12", tuition: 10000, notes: "1,000+ students, Church of Christ affiliation, founded 1952. College-prep, well-established." },
        { name: "Berean Academy", grades: "PreK-12", tuition: 5000, notes: "~400 students, very affordable. Hixson, TN. AACS member, Baptist. Accepts TN EFS Scholarship." }
      ],
      publicSchoolRating: "B",
      homeschoolCoOps: [
        { name: "Classical Conversations - Chattanooga", type: "Classical Christian", notes: "Signal Mountain, East Brainerd, Ooltewah locations" },
        { name: "Chattanooga Classical Beginnings", type: "Classical", notes: "1st-12th, Mon-Thu" },
        { name: "CSTHEA", type: "Support", notes: "Chattanooga SE Home Education Association" },
        { name: "Nickajack Homeschool Co-op", type: "Co-op", notes: "Wed mornings, ages 4-12" }
      ],
      classicalConversations: 3,
      graduationRate: 94
    },

    faith: {
      pcaChurches: [
        { name: "Lookout Mountain Presbyterian Church", size: "~1,000+ members", notes: "Historic (1892), major Reformed anchor, adjacent to Covenant College" },
        { name: "Covenant Presbyterian Church", size: "~450 members", notes: "Grace-centered, 15+ home groups, strong Westminster commitment" },
        { name: "Christ the King Presbyterian", size: "~200 members", notes: "Young families, classical ed supporters, homeschool families" },
        { name: "New City Fellowship", size: "Medium-Large", notes: "Cross-cultural PCA, two locations" },
        { name: "Red Bank Presbyterian", size: "Medium", notes: "Reformed theology, Christ-centered" },
        { name: "Woodlands Gathering (Soddy-Daisy)", size: "Small", notes: "PCA mission church" }
      ],
      opcChurches: [
        { name: "Cornerstone OPC", size: "Small", notes: "Only OPC in Chattanooga region" }
      ],
      epcChurches: [
        { name: "Signal Mountain Presbyterian Church", size: "~300 members", notes: "Established 1981, family-integrated worship" },
        { name: "Lookout Valley Presbyterian Church", size: "Unknown", notes: "EPC church" }
      ],
      crecChurches: [
        { name: "Trinity Reformed Church", size: "Small (mission)", notes: "CREC, family integration in worship" }
      ],
      otherReformed: [
        { name: "Christ Reformed Baptist Church", denomination: "Reformed Baptist (1689)", size: "Small", notes: "Church plant" },
        { name: "Grace Reformed Baptist Church", denomination: "Reformed Baptist", size: "Medium", notes: "Strong Reformed Baptist presence" }
      ],
      totalReformedCount: 20,
      reformedDensity: "Exceptional",
      colleges: ["Covenant College (PCA liberal arts college, Lookout Mountain, GA)"],
      christianOrgs: ["Covenant College", "Tennessee Valley Presbytery", "Grace Academy parent community"]
    },

    lifestyle: {
      climate: {
        springHigh: 72, springLow: 49,
        summerHigh: 89, summerLow: 69,
        fallHigh: 72, fallLow: 49,
        winterHigh: 50, winterLow: 31,
        annualRainfall: "51 inches",
        annualSnowfall: "2 inches",
        sunnyDays: 207
      },
      outdoorRec: [
        { activity: "Hiking", quality: 5, notes: "50+ trailheads, Cumberland Trail, Lookout Mountain, Prentice Cooper" },
        { activity: "Climbing", quality: 5, notes: "Stone Fort world-class bouldering, Tennessee Wall" },
        { activity: "Water Sports", quality: 5, notes: "TN River Blueway, Chickamauga Lake, Ocoee Olympic venue" },
        { activity: "Equestrian", quality: 4, notes: "Enterprise South 10mi trails, Prentice Cooper, Sequatchie Valley" },
        { activity: "Cycling", quality: 4, notes: "TN Riverwalk 13+ miles, Enterprise South MTB" }
      ],
      equestrianAccess: "Good",
      crimeViolentPer100K: 824,
      crimePropertyPer100K: 3955,
      walkScore: 29,
      avgCommute: "19 min",
      culturalAmenities: "Tennessee Aquarium, EPB gigabit fiber, Coolidge Park, Lookout Mountain attractions"
    },

    community: {
      population: 196108,
      metroPopulation: 437000,
      populationGrowthRate: "1.0%/year",
      medianAge: 36,
      familyFriendliness: "Excellent",
      homeschoolCommunity: "Very Strong",
      conservativePresence: "Very Strong",
      smallTownFeel: "Moderate",
      volunteerCulture: "Strong church-driven civic engagement, Outdoor Chattanooga family programs"
    }
  },

  "greenville-sc": {
    name: "Greenville",
    state: "SC",
    isBaseline: false,

    costOfLiving: {
      overallIndex: 91.3,
      housingIndex: 95,
      groceryIndex: 99.7,
      utilitiesIndex: 96.9,
      transportationIndex: 76.2,
      medianHouseholdIncome: 71472,
      stateIncomeTaxRate: "0%-6.0%",
      salesTaxRate: "6.0%",
      propertyTaxEffectiveRate: 0.0045,
      propertyTaxOn400K: 1800,
      unemploymentRate: 4.4,
      topIndustries: [
        "Healthcare (Prisma Health)",
        "Advanced Manufacturing (GE, Michelin)",
        "Automotive (BMW 30 min)",
        "Professional Services",
        "Higher Education"
      ],
      remoteFriendly: "Medium"
    },

    housing: {
      medianHomePrice: 350000,
      pricePerAcreRanch: "$9K-$25K (Laurens/Pickens counties)",
      landAvailability: "Good",
      horseFriendlyZoning: true,
      marketCondition: "Balanced",
      daysOnMarket: 67,
      neighborhoods: [
        { name: "Travelers Rest", priceRange: "$300K-$600K", familyRating: "Excellent", notes: "Mountain gateway, Swamp Rabbit Trail, small-town feel" },
        { name: "Simpsonville", priceRange: "$300K-$550K", familyRating: "Excellent", notes: "Top schools, GCA located here" },
        { name: "Greer", priceRange: "$250K-$450K", familyRating: "Good", notes: "Affordable, growing, Fellowship PCA" },
        { name: "Easley / Pickens County", priceRange: "$200K-$400K", familyRating: "Good", notes: "Best for acreage, horse-friendly, lower prices" },
        { name: "Fountain Inn / Laurens County", priceRange: "$150K-$350K", familyRating: "Good", notes: "Most affordable land, agricultural character" }
      ]
    },

    education: {
      classicalChristianSchools: [
        { name: "Greenville Classical Academy", grades: "K4-12", tuition: 10300, students: 335, accreditation: "Cognia accredited, ACCS member", notes: "Flagship classical Christian, founded 2004, strong academics" },
        { name: "Veritas Preparatory School", grades: "K-12", tuition: 6250, students: 312, accreditation: "N/A", notes: "Hybrid university-model, 2-3 days/week campus" },
        { name: "King's Classical School", grades: "K-2 (expanding)", tuition: null, students: null, accreditation: "N/A", notes: "Launched 2025 by St. Paul's Anglican members" }
      ],
      otherPrivateSchools: [
        { name: "Bob Jones Academy", grades: "PK-12", tuition: "$8,610-$10,640 (varies by grade)", notes: "1,283 students, affiliated with BJU" },
        { name: "Christ Church Episcopal School", grades: "K5-12", tuition: null, notes: "1,150 students, prestigious" },
        { name: "Southside Christian School", grades: "EarlyEd-12", tuition: 16795, notes: "~1,300 students, well-established Christian school. 10% alumni discount." },
        { name: "First Presbyterian Academy at Shannon Forest", grades: "K3-12", tuition: 10700, notes: "~580 students, 8:1 ratio. Merger of two historic schools (1953/1968). College-prep with IGNITE gifted program." },
        { name: "Ascent Classical Academy of Greenville", grades: "K-8 initially, expanding to K-12 (opening Fall 2026)", tuition: "FREE (public charter)", notes: "Tuition-free classical charter. American classical education, no technology in classroom. Opening delayed to Fall 2026." }
      ],
      publicSchoolRating: "B+",
      homeschoolCoOps: [
        { name: "Classical Conversations - Upstate SC", type: "Classical Christian", notes: "Multiple communities throughout upstate" },
        { name: "Artios Academy", type: "Hybrid", notes: "Integrated history/language arts/fine arts" },
        { name: "Milton Academy", type: "College Prep", notes: "Middle/high school courses" },
        { name: "Upcountry Homeschool Association", type: "Support", notes: "Co-ops, tutors, enrichment" }
      ],
      classicalConversations: true,
      graduationRate: 91
    },

    faith: {
      pcaChurches: [
        { name: "Second Presbyterian Church", size: "~500+ members", notes: "Historic (1892), hosts Greenville Conference on Reformed Theology" },
        { name: "Mitchell Road Presbyterian Church", size: "~1,000+ members", notes: "Well-established, active community" },
        { name: "Fellowship Presbyterian Church (Greer)", size: "Unknown", notes: "Serves northeast metro" },
        { name: "Woodruff Road Presbyterian (Simpsonville)", size: "Unknown", notes: "Growing Five Forks corridor" },
        { name: "Redeemer Presbyterian (Travelers Rest)", size: "Unknown", notes: "PCA in Travelers Rest" }
      ],
      opcChurches: [
        { name: "Covenant Community OPC (Taylors)", size: "Unknown", notes: "OPC in greater Greenville area" }
      ],
      epcChurches: [],
      crecChurches: [
        { name: "Christ the King Church", size: "Unknown", notes: "CREC congregation in Greenville" },
        { name: "Holy Trinity Reformed Evangelical Church", size: "Small", notes: "Second CREC congregation in the Greenville area." }
      ],
      otherReformed: [
        { name: "Greenville ARP Church", denomination: "ARP", size: "Unknown", notes: "ARP historically strong in SC upstate" },
        { name: "Faith Free Presbyterian", denomination: "Free Presbyterian", size: "Unknown", notes: "FPCNA tradition" },
        { name: "Grace Baptist Church (Taylors)", denomination: "Reformed Baptist (1689)", size: "Unknown", notes: "RBNet member" },
        { name: "St. Paul's Anglican", denomination: "ACNA", size: "Unknown", notes: "Founded King's Classical School" }
      ],
      totalReformedCount: 23,
      reformedDensity: "Exceptional",
      seminaries: ["Greenville Presbyterian Theological Seminary (GPTS)", "Geneva Reformed Seminary", "Bob Jones University Seminary"],
      christianOrgs: ["Greenville Conference on Reformed Theology (GCRT)", "BJU community programs"]
    },

    lifestyle: {
      climate: {
        springHigh: 73, springLow: 53,
        summerHigh: 87, summerLow: 72,
        fallHigh: 72, fallLow: 53,
        winterHigh: 54, winterLow: 37,
        annualRainfall: "51 inches",
        annualSnowfall: "3 inches",
        sunnyDays: 220
      },
      outdoorRec: [
        { activity: "Hiking", quality: 5, notes: "Blue Ridge foothills, Paris Mountain, Jones Gap, Foothills Trail 77mi" },
        { activity: "Cycling", quality: 5, notes: "Swamp Rabbit Trail 28 miles, defining amenity" },
        { activity: "Equestrian", quality: 4, notes: "Riverbend Park, Eden Farms, JMG Ranch; Tryon NC 45 min" },
        { activity: "Lakes", quality: 5, notes: "Jocassee, Keowee, Hartwell - outstanding water recreation" },
        { activity: "Waterfalls", quality: 5, notes: "Multiple within 30-60 min: Rainbow Falls, Raven Cliff, Laurel Fork" }
      ],
      equestrianAccess: "Good",
      crimeViolentPer100K: 644,
      crimePropertyPer100K: 3468,
      walkScore: 43,
      avgCommute: "17 min",
      culturalAmenities: "Award-winning downtown, Falls Park, Liberty Bridge, thriving restaurant/arts scene"
    },

    community: {
      population: 75282,
      metroPopulation: 1014101,
      populationGrowthRate: "1.7%/year",
      medianAge: 34,
      familyFriendliness: "Excellent",
      homeschoolCommunity: "Very Strong",
      conservativePresence: "Very Strong",
      smallTownFeel: "Moderate",
      volunteerCulture: "High church-driven engagement, Fall for Greenville festival, active neighborhood associations"
    }
  },

  "columbia-sc": {
    name: "Columbia",
    state: "SC",
    isBaseline: false,

    costOfLiving: {
      overallIndex: 99,
      housingIndex: 103,
      groceryIndex: 99,
      utilitiesIndex: 100,
      transportationIndex: 91,
      medianHouseholdIncome: 55653,
      stateIncomeTaxRate: "0%-6.0%",
      salesTaxRate: "8.0%",
      propertyTaxEffectiveRate: 0.0045,
      propertyTaxOn400K: 1800,
      unemploymentRate: 4.5,
      topIndustries: [
        "State Government",
        "Military (Fort Jackson)",
        "Healthcare (Prisma Health)",
        "Higher Education (USC)",
        "Manufacturing"
      ],
      remoteFriendly: "Medium"
    },

    housing: {
      medianHomePrice: 271000,
      pricePerAcreRanch: "$10K-$54K (Newberry/Lexington counties)",
      landAvailability: "Good",
      horseFriendlyZoning: true,
      marketCondition: "Balanced",
      daysOnMarket: 50,
      neighborhoods: [
        { name: "Lexington, SC", priceRange: "$175K-$400K", familyRating: "Excellent", notes: "Top school district, Lake Murray access, safest suburb" },
        { name: "Chapin", priceRange: "$300K-$600K", familyRating: "Excellent", notes: "Lakeside, outstanding schools (Lex-Rich 5), small-town charm" },
        { name: "Blythewood", priceRange: "$265K-$500K", familyRating: "Excellent", notes: "Newer developments, strong schools, safer than 94% of SC" },
        { name: "Forest Acres", priceRange: "$250K-$500K", familyRating: "Good", notes: "Close-in, tree-lined, top schools, 10 min to downtown" }
      ]
    },

    education: {
      classicalChristianSchools: [
        { name: "Covenant Classical Christian School", grades: "K-12", tuition: 7550, students: 115, accreditation: "ACCS, NCPSA, SCISA", notes: "SAT avg 1210-1240, 6:1 ratio, Latin grades 3-9, 100% grad rate" },
        { name: "Heritage Christian Academy", grades: "PK-8", tuition: "$7,100-$9,500 (varies by grade)", students: "120", accreditation: "ACCS member", notes: "Located in Lexington, SC suburb. Classical Christian elementary/middle school." }
      ],
      otherPrivateSchools: [
        { name: "Ben Lippen School", grades: "PK-12", tuition: 17300, notes: "CIU-affiliated, strong academics" },
        { name: "Hammond School", grades: "PK-12", tuition: 21160, notes: "110-acre campus, college-prep" },
        { name: "Heathwood Hall Episcopal", grades: "EC2-12", tuition: 22855, notes: "Prestigious, 122-acre campus" },
        { name: "Ascent Classical Academy of Columbia", grades: "K-8 (opening 2026-27)", tuition: "FREE (public charter)", notes: "First tuition-free classical charter in Columbia area. Will grow to K-12. Ascent Classical Academies network." }
      ],
      publicSchoolRating: "B",
      homeschoolCoOps: [
        { name: "Classical Conversations - Columbia", type: "Classical Christian", notes: "Multiple Midlands communities" },
        { name: "HERO (Irmo)", type: "Support", notes: "Home Educator's Resource Organization" },
        { name: "GROUNDED", type: "Christian Co-op", notes: "K-9th at Riverland Hills Baptist" },
        { name: "Grace Community Academy", type: "Academic", notes: "Part-time high school classes" }
      ],
      classicalConversations: true,
      graduationRate: 87
    },

    faith: {
      pcaChurches: [
        { name: "Northeast Presbyterian Church", size: "~400-900 members", notes: "Large, extensive programming" },
        { name: "St. Andrews Presbyterian Church (Irmo)", size: "Medium-Large", notes: "Planted Chapin Presbyterian" },
        { name: "Christ Covenant Church", size: "~150-300 members", notes: "8 elders, 5 deacons" },
        { name: "Rose Hill Presbyterian", size: "Small-Medium", notes: "Historic (1919), morning and evening worship" },
        { name: "Chapin Presbyterian Church", size: "Unknown", notes: "2002 plant, fast-growing Chapin community" },
        { name: "Lexington Presbyterian Church", size: "Unknown", notes: "PCA in Lexington suburb" }
      ],
      opcChurches: [],
      epcChurches: [],
      crecChurches: [],
      otherReformed: [
        { name: "Centennial ARP Church", denomination: "ARP", size: "Unknown", notes: "ARP has SC roots" }
      ],
      totalReformedCount: 18,
      reformedDensity: "Strong",
      seminaries: ["Erskine Theological Seminary (Columbia extension)", "Columbia Biblical Seminary (CIU)"],
      christianOrgs: ["Columbia International University", "Erskine Seminary extension"]
    },

    lifestyle: {
      climate: {
        springHigh: 75, springLow: 50,
        summerHigh: 92, summerLow: 71,
        fallHigh: 74, fallLow: 50,
        winterHigh: 55, winterLow: 34,
        annualRainfall: "45 inches",
        annualSnowfall: "1 inch",
        sunnyDays: 217
      },
      outdoorRec: [
        { activity: "Hiking", quality: 3, notes: "Congaree National Park, Harbison State Forest, Sesquicentennial" },
        { activity: "Lake Recreation", quality: 5, notes: "Lake Murray 50K acres, Dreher Island State Park" },
        { activity: "Equestrian", quality: 4, notes: "Manchester State Forest 20mi trails; Aiken equestrian district 1hr" },
        { activity: "Kayaking/Canoeing", quality: 4, notes: "Three Rivers Greenway, Congaree NP Cedar Creek" },
        { activity: "Zoo", quality: 4, notes: "Riverbanks Zoo & Garden, top-rated" }
      ],
      equestrianAccess: "Good",
      crimeViolentPer100K: 770,
      crimePropertyPer100K: 3233,
      walkScore: 35,
      avgCommute: "15 min",
      culturalAmenities: "USC campus, SEC athletics, Riverbanks Zoo, State Capitol, Columbia Museum of Art"
    },

    community: {
      population: 149087,
      metroPopulation: 777000,
      populationGrowthRate: "1.4%/year",
      medianAge: 29,
      familyFriendliness: "Good",
      homeschoolCommunity: "Strong",
      conservativePresence: "Strong",
      smallTownFeel: "No",
      volunteerCulture: "Active through church networks and CIU events, SEC gameday community"
    }
  },

  "coeur-d-alene-id": {
    name: "Coeur d'Alene",
    state: "ID",
    isBaseline: false,

    costOfLiving: {
      overallIndex: 115,
      housingIndex: 137,
      groceryIndex: 111,
      utilitiesIndex: 100,
      transportationIndex: 119,
      medianHouseholdIncome: 73526,
      stateIncomeTaxRate: "5.30%",
      salesTaxRate: "6.0%",
      propertyTaxEffectiveRate: 0.0063,
      propertyTaxOn400K: 2520,
      unemploymentRate: 3.6,
      topIndustries: [
        "Healthcare (Kootenai Health)",
        "Education",
        "Retail/Hospitality",
        "Manufacturing",
        "Professional/Technical Services"
      ],
      remoteFriendly: "High"
    },

    housing: {
      medianHomePrice: 601000,
      pricePerAcreRanch: "~$55K median (Kootenai Co; Bonner Co cheaper)",
      landAvailability: "Good",
      horseFriendlyZoning: true,
      marketCondition: "Balanced",
      daysOnMarket: 45,
      neighborhoods: [
        { name: "Hayden", priceRange: "$475K-$550K", familyRating: "Good", notes: "Growing suburb, good schools, NICS located here" },
        { name: "Post Falls", priceRange: "$425K-$500K", familyRating: "Good", notes: "More affordable, Immanuel PCA, Kootenai Classical" },
        { name: "Dalton Gardens", priceRange: "$500K-$800K+", familyRating: "Excellent", notes: "1-acre min lots, horses allowed, semi-rural enclave" },
        { name: "Rathdrum", priceRange: "$400K-$550K", familyRating: "Good", notes: "Small-town feel, highest growth, larger parcels" }
      ]
    },

    education: {
      classicalChristianSchools: [
        { name: "Classical Christian Academy", grades: "K-12", tuition: 7490, students: 164, accreditation: "N/A", notes: "Christ-centered classical, 8:1 ratio, founded 1995" },
        { name: "Kootenai Classical Academy (Post Falls)", grades: "K-10 (expanding to K-12 by 2027)", tuition: "Tuition-free (public charter)", students: null, accreditation: "Cognia", notes: "Hillsdale-affiliated, classical liberal arts with virtue emphasis" },
        { name: "Coeur du Christ Academy", grades: "9-12", tuition: "Sliding scale", students: 49, accreditation: "Catholic classical; NAPCIS candidate", notes: "Catholic classical high school, opened 2022. Growing quickly — purchased larger facility in 2025. Cardinal Newman Society recommended." }
      ],
      otherPrivateSchools: [
        { name: "North Idaho Christian School", grades: "K-12", tuition: 6638, notes: "206 students, 30+ years, needs-based tuition" }
      ],
      publicSchoolRating: "B",
      homeschoolCoOps: [
        { name: "INCH", type: "Christian", notes: "Inland Northwest Christian Homeschoolers" },
        { name: "Classical Conversations - CDA", type: "Classical Christian", notes: "Communities in Idaho" },
        { name: "CDA Homeschool Community", type: "Support", notes: "CDA, Hayden, Rathdrum, Post Falls" }
      ],
      classicalConversations: true,
      graduationRate: 89
    },

    faith: {
      pcaChurches: [
        { name: "Immanuel Presbyterian Church (Post Falls)", size: "Small (plant)", notes: "Founded 2023, growing PCA plant" }
      ],
      opcChurches: [
        { name: "Covenant OPC (Hayden)", size: "Small", notes: "Particularized 2021, several young families" }
      ],
      epcChurches: [],
      crecChurches: [
        { name: "Trinity Church CDA", size: "Small-Medium", notes: "CREC, connected to Moscow ecosystem" }
      ],
      otherReformed: [
        { name: "Moscow CREC Community (84 mi south)", denomination: "CREC", size: "Large", notes: "Christ Church (Doug Wilson), Logos School, New Saint Andrews College" }
      ],
      totalReformedCount: 4,
      reformedDensity: "Moderate",
      seminaries: [],
      christianOrgs: ["American Heritage Girls", "Trail Life", "Candlelight Christian Fellowship", "Real Life Ministries"]
    },

    lifestyle: {
      climate: {
        springHigh: 57, springLow: 35,
        summerHigh: 82, summerLow: 52,
        fallHigh: 55, fallLow: 34,
        winterHigh: 35, winterLow: 24,
        annualRainfall: "27 inches",
        annualSnowfall: "42 inches",
        sunnyDays: 174
      },
      outdoorRec: [
        { activity: "Lake Recreation", quality: 5, notes: "Lake CDA 25mi long, Priest Lake, Hayden Lake" },
        { activity: "Skiing", quality: 5, notes: "Silver Mountain 35mi, Schweitzer 58mi, Lookout Pass" },
        { activity: "Hiking", quality: 5, notes: "Trail of the Coeur d'Alenes 73mi, Tubbs Hill, Idaho Panhandle NF" },
        { activity: "Equestrian", quality: 4, notes: "National forest horse trails, multiple trailheads" },
        { activity: "Fishing/Hunting", quality: 5, notes: "Premier state for both, lake and river fishing, elk/deer/bear" }
      ],
      equestrianAccess: "Good",
      crimeViolentPer100K: 242,
      crimePropertyPer100K: 956,
      walkScore: 35,
      avgCommute: "20 min",
      culturalAmenities: "Coeur d'Alene Resort, Silverwood Theme Park, Spokane 35 min for big-city amenities"
    },

    community: {
      population: 58195,
      metroPopulation: 188323,
      populationGrowthRate: "1.0%/year",
      medianAge: 40.1,
      familyFriendliness: "Excellent",
      homeschoolCommunity: "Very Strong",
      conservativePresence: "Very Strong",
      smallTownFeel: "Yes",
      volunteerCulture: "High church-driven civic engagement, active school boards, American Redoubt migration has strengthened faith community"
    }
  },

  "flagstaff-az": {
    name: "Flagstaff",
    state: "AZ",
    isBaseline: false,

    costOfLiving: {
      overallIndex: 127,
      housingIndex: 181,
      groceryIndex: 102,
      utilitiesIndex: 90,
      transportationIndex: 104,
      medianHouseholdIncome: 65652,
      stateIncomeTaxRate: "2.5% flat",
      salesTaxRate: "9.386%",
      propertyTaxEffectiveRate: 0.0042,
      propertyTaxOn400K: 1680,
      unemploymentRate: 6.6,
      topIndustries: [
        "Tourism & Hospitality",
        "Higher Education (NAU)",
        "Healthcare",
        "Advanced Manufacturing & Bioscience (W.L. Gore)",
        "Government"
      ],
      remoteFriendly: "High"
    },

    housing: {
      medianHomePrice: 630000,
      pricePerAcreRanch: "$15K-$75K (Doney Park/Bellemont cheaper; Williams $10K-$50K)",
      landAvailability: "Limited",
      horseFriendlyZoning: true,
      marketCondition: "Balanced",
      daysOnMarket: 67,
      neighborhoods: [
        { name: "Ponderosa Trails", priceRange: "$450K-$1M", familyRating: "Excellent", notes: "Newer community, parks/trails, Mountain Charter School, very family-oriented" },
        { name: "University Heights", priceRange: "$400K-$700K", familyRating: "Excellent", notes: "1960s neighborhood, large backyards, forest trails, clubhouse with pool/spa/gym" },
        { name: "Continental Country Club", priceRange: "$350K-$800K+", familyRating: "Good", notes: "Golf community, condos to custom estates, pools/tennis/amenities" },
        { name: "Kachina Village", priceRange: "$300K-$550K", familyRating: "Good", notes: "10mi south, rustic mountain community in ponderosa pines, most affordable option" },
        { name: "Doney Park / North Peak", priceRange: "$400K-$900K+", familyRating: "Good", notes: "Rural 1-5+ acre lots, A-R zoning, no HOA, best for horse property" }
      ]
    },

    education: {
      classicalChristianSchools: [],
      otherPrivateSchools: [
        { name: "Flagstaff Christian School", grades: "K-9", tuition: 6300, notes: "244 students, largest private school. Students taught grade level ahead. 12 sports." },
        { name: "Northland Christian School", grades: "K-10", tuition: 6400, notes: "93 students, Abeka curriculum, AACS accredited, 12:1 student-teacher ratio" },
        { name: "BASIS Flagstaff (charter)", grades: "5-12", tuition: "Free", notes: "Top 5% in AZ, rigorous STEM-focused public charter, nationally ranked" }
      ],
      publicSchoolRating: "C+",
      homeschoolCoOps: [
        { name: "Northern AZ Homeschool Support Group", type: "General Support", notes: "Homeschool families in Flagstaff / Northern Arizona" },
        { name: "Trailblazers Learning Community", type: "Secular Enrichment", notes: "Hands-on, project-based learning for ages 6-14" },
        { name: "PATH Collective", type: "Enrichment", notes: "Enrichment education for homeschool PreK-7th grade" }
      ],
      classicalConversations: "Uncertain — CC operates in AZ (Coconino County listed) but no specific Flagstaff community confirmed",
      graduationRate: 89
    },

    faith: {
      pcaChurches: [
        { name: "Church of the Resurrection", size: "Small-Medium", notes: "PCA congregation, 'Faithful to the Scriptures, True to the Reformed Faith'" }
      ],
      opcChurches: [],
      epcChurches: [],
      crecChurches: [],
      otherReformed: [
        { name: "Flagstaff Christian Fellowship", denomination: "Reformed Baptist", size: "Small-Medium", notes: "123 S Beaver St, considering ACME Fellowship affiliation, gospel-centered near NAU" },
        { name: "Hope Community Church", denomination: "Christian Reformed (CRCNA)", size: "Small-Medium", notes: "Est. 1966, 3700 N Fanning Dr, Reformed tradition, Heidelberg Catechism" }
      ],
      totalReformedCount: 3,
      reformedDensity: "Weak",
      seminaries: [],
      christianOrgs: ["Crossroads Ministries (est. 1987)", "Faithworks", "Canterbury Campus Ministry at NAU", "60+ Christian nonprofits"]
    },

    lifestyle: {
      climate: {
        springHigh: 58, springLow: 28,
        summerHigh: 82, summerLow: 50,
        fallHigh: 63, fallLow: 31,
        winterHigh: 43, winterLow: 17,
        annualRainfall: "8 inches",
        annualSnowfall: "81 inches",
        sunnyDays: 266
      },
      outdoorRec: [
        { activity: "Hiking", quality: 5, notes: "Coconino NF, San Francisco Peaks (12,633 ft), 56-mi FUTS trail system, Grand Canyon 80mi, Sedona 30mi" },
        { activity: "Skiing", quality: 4, notes: "Arizona Snowbowl: 777 acres, 8 lifts, 2,300 ft vertical, snowmaking, Nov-Apr season" },
        { activity: "Equestrian", quality: 4, notes: "Millions of acres Coconino NF, AZ High Mountain Trail Rides at Mormon Lake, equestrian-zoned areas" },
        { activity: "Fishing", quality: 3, notes: "Mormon Lake, Upper/Lower Lake Mary nearby, decent but not destination-level" },
        { activity: "Cycling", quality: 5, notes: "Outstanding mountain biking in Coconino NF, gravel/fat biking, 56-mi FUTS, Bike Score 65" },
        { activity: "Climbing", quality: 4, notes: "Numerous crags with variety of rock types and styles, strong local climbing community" }
      ],
      equestrianAccess: "Good",
      crimeViolentPer100K: 292,
      crimePropertyPer100K: 2418,
      walkScore: 39,
      avgCommute: "16 min",
      culturalAmenities: "Museum of Northern Arizona, Lowell Observatory, Sunset Crater NM, Route 66 heritage, NAU arts, 8 craft breweries, Grand Canyon 80mi, Sedona 30mi"
    },

    community: {
      population: 77763,
      metroPopulation: 145101,
      populationGrowthRate: "0.14%/year",
      medianAge: 25.9,
      familyFriendliness: "Good",
      homeschoolCommunity: "Moderate",
      conservativePresence: "Moderate",
      smallTownFeel: "Yes",
      volunteerCulture: "Active — Volunteer Flagstaff city portal, NAU service-learning center, Big Brothers Big Sisters, 250+ opportunities"
    }
  }
};


/**
 * Default category weights for scoring (total = 100)
 */
const DEFAULT_WEIGHTS = {
  faith: 25,
  education: 25,
  lifestyle: 20,
  housing: 15,
  costOfLiving: 10,
  community: 5
};


/**
 * Numeric scores (1-10) per city per category.
 * Derived from research data. Higher = better fit.
 *
 * Scoring rationale:
 *
 * FAITH (Reformed church count, density, seminary presence):
 *   Greenville: 10 — 22+ Reformed churches, 3 seminaries, annual GCRT conference
 *   Chattanooga: 10 — 20+ Reformed churches, Covenant College, PCA heartland
 *   Columbia: 7 — 18+ PCA churches, 2 seminaries, but no OPC/CREC
 *   Lexington: 5 — 3 Reformed congregations, moderate presence
 *   Coeur d'Alene: 5 — 4 Reformed churches (OPC, PCA plant, CREC), Moscow CREC ecosystem 84mi away
 *   Sarasota: 3 — 4 Reformed churches total, thin presence
 *   Flagstaff: 2 — 1 PCA (Church of the Resurrection), 1 Reformed Baptist, 1 CRC. No OPC/CREC/EPC. No seminary.
 *   Bend: 2 — 1 OPC + 1 Reformed Baptist, no PCA/CREC
 *   Sisters: 1 — Zero Reformed churches in town, must drive 25-30 min to Bend's thin options
 *
 * EDUCATION (classical Christian schools, quality, homeschool community):
 *   Chattanooga: 9 — Grace Academy ($4K, strong outcomes), Veritas hybrid, 3+ CC communities, multiple classical options
 *   Greenville: 9 — GCA (ACCS), Veritas Prep, King's Classical, very strong homeschool
 *   Lexington: 8 — Trinity Christian Academy (PreK-12), Lexington Latin School (affordable hybrid), Veritas hybrid, strong homeschool
 *   Columbia: 7 — Covenant Classical (ACCS) + Heritage Christian Academy (ACCS, Lexington suburb), active homeschool
 *   Sarasota: 7 — Richer classical landscape than initially thought: Classical Academy (916 students), Liberty Christian, Chesterton Academy (Catholic), Incarnation Catholic, Riverstone hybrid, plus Sarasota Classical Prep charter opening Fall 2026
 *   Coeur d'Alene: 6 — Classical Christian Academy, Kootenai Classical, Coeur du Christ Academy (Catholic classical), very strong homeschool
 *   Bend: 5 — Chesterton Academy (Catholic classical, 8 students) + Immanuel Classical School (Reformed, K-12) — two classical schools plus CC active, moderate homeschool
 *   Flagstaff: 3 — No classical Christian school. Two Christian schools (FCS K-9, NCS K-10) use Abeka not classical. CC uncertain. Moderate homeschool. BASIS charter is excellent.
 *   Sisters: 3 — No classical Christian school in town, but Immanuel Classical School + Chesterton Academy in Bend (25 min away)
 *
 * LIFESTYLE (outdoor rec quality, climate, equestrian access, safety):
 *   Sisters: 9 — World-class outdoors, excellent equestrian, very safe, but harsh winter
 *   Bend: 9 — World-class everything (ski, bike, hike, fish, climb), very safe, dry climate
 *   Coeur d'Alene: 8 — Outstanding lake/mountain recreation, hunting/fishing, very safe, cold winters
 *   Chattanooga: 8 — Excellent hiking/climbing/water sports, good equestrian, mild climate
 *   Greenville: 8 — Blue Ridge foothills, lakes, waterfalls, Swamp Rabbit Trail, good climate
 *   Flagstaff: 8 — World-class hiking (Coconino NF, Grand Canyon 80mi), Snowbowl skiing, 266 sunny days, 81in snow, excellent cycling, good equestrian
 *   Lexington: 6 — Decent outdoors (Red River Gorge nearby), top equestrian, humid climate
 *   Sarasota: 6 — Beaches and fishing excellent, limited hiking, hurricane risk, hot summers
 *   Columbia: 5 — Lake Murray and Congaree NP decent, extreme summer heat, high city crime
 *
 * HOUSING (affordability relative to national avg, land availability):
 *   Columbia: 9 — Median $271K, excellent land prices, very affordable
 *   Lexington: 8 — Median $330K, abundant horse land at reasonable prices
 *   Chattanooga: 8 — Median $335K, Sequatchie Valley affordable ranch land
 *   Greenville: 7 — Median $350K, surrounding counties affordable for acreage
 *   Sarasota: 5 — Median $485K, decent Myakka land, but elevated housing cost
 *   Coeur d'Alene: 3 — Median $601K, expensive even with decent land availability
 *   Flagstaff: 2 — Median $630K, housing index 181, land very limited (surrounded by national forest), expensive
 *   Bend: 2 — Median $679K, housing index 199, extremely expensive
 *   Sisters: 2 — Median $775K, very limited inventory, tiny market
 *
 * COST OF LIVING (overall index — lower index = better score):
 *   Chattanooga: 10 — Index 88.6, no income tax, low property tax
 *   Lexington: 8 — Index 90.8, low across the board
 *   Greenville: 8 — Index 91.3, low property tax, low transportation
 *   Columbia: 7 — Index 99, essentially national average
 *   Sarasota: 6 — Index 105, no income tax helps but housing elevated
 *   Coeur d'Alene: 4 — Index 115, housing and transportation drive costs up
 *   Flagstaff: 3 — Index 127, high cost driven by housing, but low 2.5% income tax and 0.42% property tax help offset
 *   Bend: 3 — Index 127, very high cost driven by housing
 *   Sisters: 3 — Index 131, similar to Bend with even less amenity access
 *
 * COMMUNITY (family-friendliness, homeschool community, conservative presence):
 *   Chattanooga: 9 — Excellent family suburbs, very strong homeschool/conservative community
 *   Greenville: 9 — Excellent family suburbs, very strong homeschool, buckle of Bible Belt
 *   Coeur d'Alene: 9 — Very family-friendly, very strong homeschool, very strong conservative
 *   Lexington: 7 — Good family-friendly, strong homeschool, moderate conservative (university city)
 *   Columbia: 6 — Good suburbs but city core less family-oriented, strong PCA network
 *   Sarasota: 4 — Retiree-oriented (median age 48+), moderate homeschool, limited young families
 *   Flagstaff: 5 — Small-town feel, good family neighborhoods, moderate homeschool, moderate conservative, but university-town progressive lean
 *   Bend: 5 — Good family amenities but progressive city, moderate homeschool, weak conservative
 *   Sisters: 4 — Small town charm but aging (median 49.6), 39% over 65, limited amenities
 */
const SCORES = {
  "lexington-ky":     { faith: 5, education: 8, lifestyle: 6, housing: 8, costOfLiving: 8, community: 7 },
  "bend-or":          { faith: 2, education: 5, lifestyle: 9, housing: 2, costOfLiving: 3, community: 5 },
  "sisters-or":       { faith: 1, education: 3, lifestyle: 9, housing: 2, costOfLiving: 3, community: 4 },
  "sarasota-fl":      { faith: 3, education: 7, lifestyle: 6, housing: 5, costOfLiving: 6, community: 4 },
  "chattanooga-tn":   { faith: 10, education: 9, lifestyle: 8, housing: 8, costOfLiving: 10, community: 9 },
  "greenville-sc":    { faith: 10, education: 9, lifestyle: 8, housing: 7, costOfLiving: 8, community: 9 },
  "columbia-sc":      { faith: 7, education: 7, lifestyle: 5, housing: 9, costOfLiving: 7, community: 6 },
  "coeur-d-alene-id": { faith: 5, education: 6, lifestyle: 8, housing: 3, costOfLiving: 4, community: 9 },
  "flagstaff-az":     { faith: 2, education: 3, lifestyle: 8, housing: 2, costOfLiving: 3, community: 5 }
};


/**
 * Baseline city for comparison (Lexington, KY)
 */
const BASELINE_CITY = "lexington-ky";


/**
 * Category metadata — labels and keys
 */
const CATEGORIES = {
  faith:        { key: "faith",        label: "Faith" },
  education:    { key: "education",    label: "Education" },
  lifestyle:    { key: "lifestyle",    label: "Lifestyle" },
  housing:      { key: "housing",      label: "Housing" },
  costOfLiving: { key: "costOfLiving", label: "Cost of Living" },
  community:    { key: "community",    label: "Community" }
};
