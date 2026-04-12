/**
 * City Comparison Data File
 * Generated from research JSON files on 2026-03-29
 * 16 cities compared for family relocation evaluation
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
        annualSnowfall: "22 inches",
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
      crimeViolentPer100K: 184,
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
        annualSnowfall: "20 inches",
        sunnyDays: 260
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
      medianHouseholdIncome: 70065,
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
      crimeViolentPer100K: 549,
      crimePropertyPer100K: 1616,
      walkScore: 52,
      avgCommute: "20 min",
      culturalAmenities: "Ringling Museum, Sarasota Opera/Orchestra/Ballet, vibrant arts scene, Florida's Cultural Coast"
    },

    community: {
      population: 56218,
      metroPopulation: 934000,
      populationGrowthRate: "1.28%/year",
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
      medianHouseholdIncome: 64523,
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
      metroPopulation: 581000,
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
        summerHigh: 90, summerLow: 72,
        fallHigh: 72, fallLow: 53,
        winterHigh: 54, winterLow: 32,
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
      metroPopulation: 766000,
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
      medianHouseholdIncome: 69000,
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
        annualRainfall: "22 inches",
        annualSnowfall: "98 inches",
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
  },

  "birmingham-al": {
    name: "Birmingham",
    state: "AL",
    isBaseline: false,

    costOfLiving: {
      overallIndex: 90,
      housingIndex: 76,
      groceryIndex: 100,
      utilitiesIndex: 104,
      transportationIndex: 89,
      medianHouseholdIncome: 46051,
      stateIncomeTaxRate: "2%-5% graduated",
      salesTaxRate: "8-10% (varies by municipality)",
      propertyTaxEffectiveRate: 0.0045,
      propertyTaxOn400K: 1800,
      unemploymentRate: 2.2,
      topIndustries: [
        "Healthcare (UAB is largest employer)",
        "Finance & Insurance (Regions, Protective Life)",
        "Education (UAB, Samford)",
        "Advanced Manufacturing & Materials",
        "Technology & Professional Services"
      ],
      remoteFriendly: "Medium"
    },

    housing: {
      medianHomePrice: 280000,
      pricePerAcreRanch: "$15K-$30K (Shelby County for rural/equestrian land)",
      landAvailability: "Good",
      horseFriendlyZoning: true,
      marketCondition: "Balanced",
      daysOnMarket: 62,
      neighborhoods: [
        { name: "Hoover", priceRange: "$350K-$600K", familyRating: "Excellent", notes: "Largest suburb, top-5 school district in AL, excellent retail" },
        { name: "Vestavia Hills", priceRange: "$400K-$700K", familyRating: "Excellent", notes: "#2 school district in Alabama, lowest crime rate in AL, median HHI $129K" },
        { name: "Homewood", priceRange: "$400K-$650K", familyRating: "Excellent", notes: "Most walkable city in Alabama, charming downtown, strong community" },
        { name: "Mountain Brook", priceRange: "$700K-$1.5M+", familyRating: "Excellent", notes: "Most affluent suburb, top schools, very low crime" },
        { name: "Chelsea / Helena / Calera (South Shelby Co.)", priceRange: "$250K-$500K", familyRating: "Good", notes: "Fast-growing, larger lots, best for horse property, 20-30 min to Birmingham" }
      ]
    },

    education: {
      classicalChristianSchools: [
        { name: "Westminster School at Oak Mountain", grades: "K-12", tuition: 10871, students: 563, accreditation: "ACCS", notes: "Ministry of Oak Mountain PCA. 100% grad rate, avg ACT 30, 97% attend 4-year college. 10:1 ratio." },
        { name: "Evangel Classical Christian School", grades: "PK-12", tuition: 8900, students: 245, accreditation: "ACCS", notes: "Founded 2004 in Alabaster. Presbyterian-affiliated. 8:1 ratio. 95% attend 4-year college." }
      ],
      otherPrivateSchools: [
        { name: "Briarwood Christian School", grades: "PK-12", tuition: "$8,550-$11,500", notes: "PCA-affiliated, 1,850 students, 99% grad rate, avg ACT 28" },
        { name: "The Altamont School", grades: "5-12", tuition: 22000, notes: "Niche A+, independent college prep, 6:1 ratio" },
        { name: "Indian Springs School", grades: "8-12", tuition: 28000, notes: "Niche A+, 350-acre campus, boarding/day, 8:1 ratio" }
      ],
      publicSchoolRating: "A-",
      homeschoolCoOps: [
        { name: "Brook Hills Co-op", type: "Tutorial", notes: "K-6 and 7-12 tracks at The Church at Brook Hills" },
        { name: "SMIC Academy", type: "Academic co-op", notes: "South Mountain area structured classes" },
        { name: "Created For a Purpose Cooperative", type: "History/Fine Arts", notes: "At Church at Shelby Crossings, Calera" }
      ],
      classicalConversations: "Multiple communities (4-6 in metro Birmingham)",
      graduationRate: 95
    },

    faith: {
      pcaChurches: [
        { name: "Briarwood Presbyterian Church", size: "~4,000 members", notes: "Birthplace of the PCA (first General Assembly 1973). Operates Briarwood Christian School." },
        { name: "Covenant Presbyterian Church", size: "~400-600", notes: "Homewood area. Founded 1978. Planted Cahaba Park Church." },
        { name: "Cahaba Park Church", size: "~200-400", notes: "Church plant of Covenant PCA (2007)" },
        { name: "Faith Presbyterian Church", size: "~300-500", notes: "Valleydale Road. Part of Evangel Presbytery." },
        { name: "Community PCA", size: "~100-200", notes: "Part of Evangel Presbytery" },
        { name: "Evangel Church PCA", size: "~100-200", notes: "Alabaster. Part of Evangel Presbytery." },
        { name: "Church of the Way PCA", size: "~50-100", notes: "Moody. Part of Evangel Presbytery." }
      ],
      opcChurches: [
        { name: "Redeemer OPC", size: "~50-100", notes: "Committed to Westminster Standards" },
        { name: "Ascension OPC", size: "~30-75", notes: "Birmingham area OPC" }
      ],
      epcChurches: [
        { name: "Edgewood Presbyterian Church", size: "~200-400", notes: "EPC congregation" }
      ],
      crecChurches: [
        { name: "Trinity Presbyterian Church", size: "~200-400", notes: "CREC (Athanasius Presbytery). Pastor Rich Lusk." },
        { name: "Immanuel Reformed Church", size: "~30-75", notes: "Mission church of Trinity Presbyterian" }
      ],
      otherReformed: [
        { name: "Birmingham Reformed Presbyterian Church", denomination: "RPCNA", size: "Small", notes: "Exclusive psalmody tradition" }
      ],
      totalReformedCount: 14,
      reformedDensity: "Strong",
      seminaries: ["Birmingham Theological Seminary (Reformed, $100/credit hour)", "Beeson Divinity School at Samford University"],
      christianOrgs: ["Campus Outreach (HQ in Birmingham)", "Radical (David Platt)", "Iron City Church Planting Network"]
    },

    lifestyle: {
      climate: {
        springHigh: 75, springLow: 53,
        summerHigh: 90, summerLow: 71,
        fallHigh: 76, fallLow: 54,
        winterHigh: 57, winterLow: 35,
        annualRainfall: "56.7 inches",
        annualSnowfall: "1-2 inches",
        sunnyDays: 213
      },
      outdoorRec: [
        { activity: "Hiking", quality: 5, notes: "Oak Mountain State Park (9,940 acres, 100+ mi trails), Red Mountain Park, Ruffner Mountain, Moss Rock Preserve" },
        { activity: "Mountain Biking", quality: 5, notes: "Oak Mountain Red Trail 22mi, nationally recognized. Emerging MTB destination." },
        { activity: "Equestrian", quality: 4, notes: "Oak Mountain 25+ mi equestrian trails, multiple Shelby County stables" },
        { activity: "Fishing/Kayaking", quality: 4, notes: "Cahaba River (most biodiverse river per mile in N. America), Lake Purdy" },
        { activity: "Golf", quality: 4, notes: "Robert Trent Jones Golf Trail nearby, Ross Bridge, year-round weather" }
      ],
      equestrianAccess: "Very Good",
      crimeViolentPer100K: 1517,
      crimePropertyPer100K: 4539,
      walkScore: 35,
      avgCommute: "22 min",
      culturalAmenities: "Birmingham Museum of Art, Civil Rights Institute, Vulcan Park, Railroad Park, Alabama Theatre, James Beard Award-winning food scene"
    },

    community: {
      population: 196000,
      metroPopulation: 1155000,
      populationGrowthRate: "-0.5%/year",
      medianAge: 35.9,
      familyFriendliness: "Excellent",
      homeschoolCommunity: "Strong",
      conservativePresence: "Very Strong",
      smallTownFeel: "Moderate",
      volunteerCulture: "Very active — Hands On Birmingham connects 200+ nonprofits, strong church-based volunteerism"
    }
  },

  "moscow-id": {
    name: "Moscow",
    state: "ID",
    isBaseline: false,

    costOfLiving: {
      overallIndex: 103,
      housingIndex: 115,
      groceryIndex: 110,
      utilitiesIndex: 100,
      transportationIndex: 119,
      medianHouseholdIncome: 62006,
      stateIncomeTaxRate: "5.3% flat",
      salesTaxRate: "6.0%",
      propertyTaxEffectiveRate: 0.0075,
      propertyTaxOn400K: 3000,
      unemploymentRate: 3.6,
      topIndustries: [
        "Higher Education (University of Idaho)",
        "Engineering/Technology (Schweitzer Engineering)",
        "Healthcare (Gritman Medical Center)",
        "Agriculture & Food Science",
        "Retail & Services"
      ],
      remoteFriendly: "Medium"
    },

    housing: {
      medianHomePrice: 456000,
      pricePerAcreRanch: "$10K-$17K (Latah County agricultural/ranch land)",
      landAvailability: "Good",
      horseFriendlyZoning: true,
      marketCondition: "Buyer's",
      daysOnMarket: 54,
      neighborhoods: [
        { name: "Indian Hills", priceRange: "$340K-$725K", familyRating: "Good", notes: "Established, near University of Idaho, mix of homes" },
        { name: "Edington", priceRange: "$400K-$550K", familyRating: "Excellent", notes: "Newest neighborhood, trail access, near ball fields, family-oriented" },
        { name: "South Moscow / Arboretum Area", priceRange: "$375K-$600K", familyRating: "Excellent", notes: "Large lots near UI Arboretum, Palouse hill views" },
        { name: "Meadow Brook", priceRange: "$350K-$500K", familyRating: "Good", notes: "Newer development, underground utilities" },
        { name: "Rural Latah County", priceRange: "$350K-$800K+", familyRating: "Excellent", notes: "5-20 acre properties, horse-friendly, hobby farms, 5-15 min from town" }
      ]
    },

    education: {
      classicalChristianSchools: [
        { name: "Logos School", grades: "PK-12", tuition: 6887, students: 686, accreditation: "ACCS (charter member, accredited since 2000)", notes: "Founded 1981 by Douglas Wilson. The original classical Christian school in America. 14:1 ratio. Multi-child discounts. Also runs Logos Online School." },
        { name: "The Jubilee School", grades: "PK-12", tuition: null, students: "~40-60", accreditation: "Classical Christian", notes: "Non-denominational. Montessori model for PK-K, classical Christian. Personalized learning." }
      ],
      otherPrivateSchools: [
        { name: "St. Mary's Catholic School", grades: "NS-8", tuition: 5665, notes: "Catholic parish school, 107 students" },
        { name: "Palouse Hills Christian School", grades: "1-8", tuition: null, notes: "Seventh Day Adventist affiliated, 21 students" }
      ],
      publicSchoolRating: "B+",
      homeschoolCoOps: [
        { name: "Cornerstone Educational Cooperative", type: "Christian", notes: "Supports Christian homeschool families in the Palouse" },
        { name: "Classical Conversations of Moscow", type: "Classical Christian", notes: "Weekly Community Day, K through college credit" }
      ],
      classicalConversations: true,
      graduationRate: 80
    },

    faith: {
      pcaChurches: [],
      opcChurches: [],
      epcChurches: [],
      crecChurches: [
        { name: "Christ Church", size: "~2,000-3,000 congregants", notes: "Founded late 1970s. Pastored by Douglas Wilson. CREC founding church. New 1,200-seat hall. ~10% of town attends." },
        { name: "Trinity Reformed Church", size: "~200-400", notes: "Church plant of Christ Church (2003). Two Sunday services." },
        { name: "King's Cross Church", size: "Small-Medium", notes: "Planted by Christ Church (2022). Shares campus ministry." },
        { name: "Emmanuel Reformed Church", size: "Small", notes: "Mission church of Trinity Reformed" }
      ],
      otherReformed: [
        { name: "Palouse Fellowship", denomination: "CREC (mission)", size: "Small", notes: "In Palouse, WA ~10mi from Moscow" }
      ],
      totalReformedCount: 5,
      reformedDensity: "Very High (CREC epicenter)",
      seminaries: ["New Saint Andrews College (classical Christian liberal arts)", "Greyfriars Hall (tuition-free pastoral training / MDiv)"],
      christianOrgs: ["Canon Press (publishing)", "ACCS (headquartered nearby)", "Collegiate Reformed Fellowship (UI campus ministry)", "Bakwe Mission"]
    },

    lifestyle: {
      climate: {
        springHigh: 58, springLow: 32,
        summerHigh: 86, summerLow: 45,
        fallHigh: 60, fallLow: 33,
        winterHigh: 37, winterLow: 22,
        annualRainfall: "27.8 inches",
        annualSnowfall: "52 inches",
        sunnyDays: 169
      },
      outdoorRec: [
        { activity: "Hiking", quality: 4, notes: "Moscow Mountain trails, Kamiak Butte, Cedar Grove old-growth, Idler's Rest" },
        { activity: "Mountain Biking", quality: 4, notes: "Moscow Mountain trail system, Latah Trail 13mi paved" },
        { activity: "Hunting", quality: 4, notes: "Excellent deer, elk, upland bird in surrounding national forests. Idaho is a premier hunting state." },
        { activity: "Fishing", quality: 3, notes: "Spring Valley Reservoir (stocked trout), Clearwater River 45 min" },
        { activity: "Skiing", quality: 3, notes: "XC on Latah Trail/Moscow Mtn. Schweitzer 3.5hr, Silver Mountain 2.5hr." }
      ],
      equestrianAccess: "Good",
      crimeViolentPer100K: 91,
      crimePropertyPer100K: 1016,
      walkScore: 48,
      avgCommute: "15 min",
      culturalAmenities: "Moscow Farmers Market (since 1976), Prichard Art Gallery, Kenworthy Performing Arts Centre, Lionel Hampton Jazz Festival, UI Arboretum"
    },

    community: {
      population: 27580,
      metroPopulation: 40300,
      populationGrowthRate: "1.26%/year",
      medianAge: 25.7,
      familyFriendliness: "Good",
      homeschoolCommunity: "Strong",
      conservativePresence: "Strong",
      smallTownFeel: "Yes",
      volunteerCulture: "Strong church-based volunteering, Saturday Farmers Market community, small-town civic participation"
    }
  },

  "raleigh-nc": {
    name: "Raleigh",
    state: "NC",
    isBaseline: false,

    costOfLiving: {
      overallIndex: 96,
      housingIndex: 90,
      groceryIndex: 100,
      utilitiesIndex: 88,
      transportationIndex: 89,
      medianHouseholdIncome: 85395,
      stateIncomeTaxRate: "3.99% flat (2026)",
      salesTaxRate: "7.0%",
      propertyTaxEffectiveRate: 0.0080,
      propertyTaxOn400K: 3200,
      unemploymentRate: 3.5,
      topIndustries: [
        "Technology/IT Services",
        "Life Sciences & Biotech",
        "Healthcare",
        "Higher Education & Research",
        "Professional & Financial Services"
      ],
      remoteFriendly: "High"
    },

    housing: {
      medianHomePrice: 435000,
      pricePerAcreRanch: "$15K-$70K (Johnston/Chatham counties cheaper; Wake County $150K+/acre)",
      landAvailability: "Good",
      horseFriendlyZoning: true,
      marketCondition: "Balanced",
      daysOnMarket: 50,
      neighborhoods: [
        { name: "Cary", priceRange: "$500K-$700K", familyRating: "Excellent", notes: "#1 safest city in NC, top-rated schools, 10 min to RTP" },
        { name: "Apex", priceRange: "$450K-$600K", familyRating: "Excellent", notes: "'Peak of Good Living,' strong schools, small-town downtown" },
        { name: "Holly Springs", priceRange: "$380K-$520K", familyRating: "Excellent", notes: "More affordable, new construction, good parks, 25 min to Raleigh" },
        { name: "Wake Forest", priceRange: "$350K-$480K", familyRating: "Excellent", notes: "Small-town feel, SEBTS nearby, affordable relative to Cary" },
        { name: "Fuquay-Varina", priceRange: "$380K-$550K", familyRating: "Good", notes: "Southern suburb, horse-friendly properties (Saddle Run), rural character" }
      ]
    },

    education: {
      classicalChristianSchools: [
        { name: "Cary Christian School", grades: "K-12", tuition: 9981, students: 785, accreditation: "ACCS (accredited since 2002)", notes: "Founded 1996. One of the strongest ACCS schools in the Southeast. Classical curriculum with Latin, logic, rhetoric." },
        { name: "Trinity Academy", grades: "PK-12", tuition: 16947, students: 627, accreditation: "SACS/CASI", notes: "Christian classical approach. Niche A+. 7:1 ratio." },
        { name: "Trinity School of Durham and Chapel Hill", grades: "K-12", tuition: "$6,560-$29,890", students: 630, accreditation: "Independent classical Christian", notes: "22-acre campus. 8:1 ratio. Classical + Charlotte Mason hybrid. 96% attend 4-year college." }
      ],
      otherPrivateSchools: [
        { name: "Thales Academy", grades: "K-12", tuition: "$6,000-$8,000", notes: "Affordable classical model, multiple campuses (Apex, Rolesville, Wake Forest)" },
        { name: "Ravenscroft School", grades: "PK-12", tuition: 28000, notes: "Elite college prep, 135-acre campus" },
        { name: "Cardinal Gibbons High School", grades: "9-12", tuition: 14000, notes: "Catholic college prep, strong athletics" }
      ],
      publicSchoolRating: "A",
      homeschoolCoOps: [
        { name: "Triangle Leadership Commonwealth", type: "Tutorial/Co-op", notes: "10+ year history, Thomas Jefferson Education model, ages 3-17" },
        { name: "Raleigh Charlotte Mason Homeschoolers", type: "Charlotte Mason", notes: "Christian Charlotte Mason approach" },
        { name: "NCHE Region 5 groups", type: "Regional network", notes: "NC Home Education association, multiple local co-ops" }
      ],
      classicalConversations: "15+ communities in greater Triangle area",
      graduationRate: 91
    },

    faith: {
      pcaChurches: [
        { name: "Peace Presbyterian Church", size: "Medium-Large", notes: "Cary, NC. Est. 1980. Strong children's/youth ministries." },
        { name: "Redeemer Presbyterian Church", size: "Medium", notes: "Raleigh. Est. 1996. Two Sunday services." },
        { name: "Christ the King Presbyterian", size: "Medium", notes: "Downtown Raleigh. Est. 2002." },
        { name: "Calvary Presbyterian Church", size: "Medium", notes: "Raleigh. Est. 1976. Long-established." },
        { name: "Christ Community Church", size: "Medium", notes: "Chapel Hill. Historic Christianity." },
        { name: "Church of the Good Shepherd", size: "Medium", notes: "Durham. Est. 1987." },
        { name: "Midtown Community Church", size: "Small-Medium", notes: "Raleigh. Est. 2015. Church plant." },
        { name: "Christ Central Durham", size: "Medium", notes: "Active gospel-centered ministry." },
        { name: "Christ Our Hope Church", size: "Small-Medium", notes: "Wake Forest." },
        { name: "Trinity Park Church", size: "Small-Medium", notes: "Morrisville." }
      ],
      opcChurches: [
        { name: "Shiloh Presbyterian Church", size: "Small-Medium", notes: "Raleigh. Active congregation." },
        { name: "Pilgrim Presbyterian Church", size: "Small", notes: "Raleigh. Particularized 1972. Morning and evening worship." }
      ],
      epcChurches: [
        { name: "Hope Church", size: "Medium", notes: "Raleigh. Two Sunday services." },
        { name: "Peace Church", size: "Medium", notes: "Durham." }
      ],
      crecChurches: [
        { name: "Christ Church", size: "Small-Medium", notes: "Raleigh/Morrisville area. Founded 2004. Part of Moscow/Wilson tradition." }
      ],
      otherReformed: [
        { name: "First Reformed Presbyterian Church of Durham", denomination: "RPCNA", size: "Small", notes: "Exclusive psalmody, covenanting tradition" },
        { name: "Grace Reformed Presbyterian Church", denomination: "RPCNA", size: "Small", notes: "Clayton, NC, just SE of Raleigh" }
      ],
      totalReformedCount: 20,
      reformedDensity: "Strong",
      seminaries: ["Southeastern Baptist Theological Seminary (Wake Forest, NC)"],
      christianOrgs: ["The Gospel Coalition (local TGC leaders)", "Cru/InterVarsity (active at NC State, UNC, Duke)", "NCHE (homeschool advocacy)"]
    },

    lifestyle: {
      climate: {
        springHigh: 72, springLow: 49,
        summerHigh: 89, summerLow: 68,
        fallHigh: 73, fallLow: 51,
        winterHigh: 54, winterLow: 33,
        annualRainfall: "46 inches",
        annualSnowfall: "4 inches",
        sunnyDays: 213
      },
      outdoorRec: [
        { activity: "Hiking", quality: 4, notes: "Umstead State Park (5,442 acres), Eno River, Falls Lake, 100+ mi greenway trails" },
        { activity: "Equestrian", quality: 4, notes: "Umstead bridle trails 34+ mi, horse communities in Johnston Co, Saddle Run/Black Horse Run" },
        { activity: "Water Sports", quality: 4, notes: "Falls Lake, Jordan Lake, Shearon Harris Reservoir — kayaking, paddleboarding, fishing" },
        { activity: "Mountain Biking", quality: 4, notes: "Umstead multi-use trails, Beaver Dam, Harris Lake County Park" },
        { activity: "Running/Cycling", quality: 5, notes: "100+ miles greenway trails, mild climate, active community" }
      ],
      equestrianAccess: "Good",
      crimeViolentPer100K: 500,
      crimePropertyPer100K: 2335,
      walkScore: 31,
      avgCommute: "24 min",
      culturalAmenities: "'Smithsonian of the South' — free NC Museum of Art, Museum of Natural Sciences, Museum of History. Carolina Hurricanes (NHL), NC State/Duke/UNC sports, 3hr to mountains, 3.5hr to beaches"
    },

    community: {
      population: 482295,
      metroPopulation: 1562000,
      populationGrowthRate: "1.8%/year",
      medianAge: 34.9,
      familyFriendliness: "Very Good",
      homeschoolCommunity: "Strong",
      conservativePresence: "Moderate",
      smallTownFeel: "Moderate",
      volunteerCulture: "Strong — high church participation, Mission Triangle network, active parent volunteer culture in schools"
    }
  },

  "sheridan-wy": {
    name: "Sheridan",
    state: "WY",
    isBaseline: false,

    costOfLiving: {
      overallIndex: 104,
      housingIndex: 116,
      groceryIndex: 103,
      utilitiesIndex: 82,
      transportationIndex: 105,
      medianHouseholdIncome: 62867,
      stateIncomeTaxRate: "0%",
      salesTaxRate: "6.0%",
      propertyTaxEffectiveRate: 0.0064,
      propertyTaxOn400K: 2560,
      unemploymentRate: 3.3,
      topIndustries: [
        "Health Care & Social Assistance",
        "Educational Services",
        "Construction",
        "Mining/Oil & Gas Extraction",
        "Agriculture/Forestry"
      ],
      remoteFriendly: "High"
    },

    housing: {
      medianHomePrice: 347000,
      pricePerAcreRanch: "$8K-$12K (county ranch land); equestrian properties avg ~$25K/acre",
      landAvailability: "Good",
      horseFriendlyZoning: true,
      marketCondition: "Balanced",
      daysOnMarket: 50,
      neighborhoods: [
        { name: "Downtown Sheridan / Historic District", priceRange: "$250K-$450K", familyRating: "Good", notes: "Walkable Main Street, WYO Theater, charming historic homes" },
        { name: "Big Horn", priceRange: "$400K-$1.5M+", familyRating: "Excellent", notes: "Prestigious community, polo clubs, Brinton Museum, equestrian culture" },
        { name: "Story", priceRange: "$350K-$900K", familyRating: "Excellent", notes: "Mountain community at base of Bighorns, gateway to forest trails" },
        { name: "Ranchester", priceRange: "$250K-$400K", familyRating: "Excellent", notes: "9mi south of MT border, highly-rated schools, conservative community" },
        { name: "Dayton", priceRange: "$275K-$500K", familyRating: "Good", notes: "Charming small town, Tongue River access, Hwy 14 to Bighorns" }
      ]
    },

    education: {
      classicalChristianSchools: [
        { name: "Martin Luther Grammar School / Immanuel Academy", grades: "K-8", tuition: 3200, students: 17, accreditation: "CCLE, NLSA, ACCS member", notes: "Lutheran (LCMS) classical Christian. Very small but accredited. 9:1 ratio. Classical trivium and quadrivium." }
      ],
      otherPrivateSchools: [
        { name: "Sheridan Valor Academy", grades: "6-12", tuition: null, notes: "Christ-centered, 4-day week, non-denominational, WY state tuition funds available" },
        { name: "Holy Name Catholic School", grades: "PK-5", tuition: null, notes: "69 students, NCEA member, 8:1 ratio" }
      ],
      publicSchoolRating: "A-",
      homeschoolCoOps: [
        { name: "Homeschool Wyoming", type: "Statewide Support", notes: "Wyoming is very homeschool-friendly — notification only, no testing required" }
      ],
      classicalConversations: "Uncertain — CC operates in WY but no confirmed Sheridan community",
      graduationRate: 86
    },

    faith: {
      pcaChurches: [
        { name: "Sheridan Reformed Presbyterian Church", size: "Small (mission)", notes: "PCA, Rocky Mountain Presbytery. Small congregation." }
      ],
      opcChurches: [],
      epcChurches: [],
      crecChurches: [],
      otherReformed: [
        { name: "Sheridan Bible Church", denomination: "Evangelical/Reformed-leaning", size: "Medium", notes: "Non-denominational but Reformed-leaning" }
      ],
      totalReformedCount: 1,
      reformedDensity: "Very Weak",
      seminaries: [],
      christianOrgs: ["The Hub on Smith (community ministry)", "Sheridan YMCA"]
    },

    lifestyle: {
      climate: {
        springHigh: 58, springLow: 30,
        summerHigh: 87, summerLow: 56,
        fallHigh: 63, fallLow: 32,
        winterHigh: 33, winterLow: 12,
        annualRainfall: "16 inches",
        annualSnowfall: "58 inches",
        sunnyDays: 208
      },
      outdoorRec: [
        { activity: "Hiking", quality: 5, notes: "Bighorn Mountains, hundreds of miles of trails, Bighorn National Forest" },
        { activity: "Fishing", quality: 5, notes: "World-class fly fishing; hundreds of streams with rainbow, brown, brook, cutthroat trout" },
        { activity: "Hunting", quality: 5, notes: "Mule deer, elk, moose, pronghorn, mountain lion, black bear, wild turkey" },
        { activity: "Equestrian", quality: 5, notes: "Eatons' Ranch (oldest dude ranch), Big Horn Equestrian Center, Bighorn NF trails, polo clubs" },
        { activity: "Mountain Biking", quality: 4, notes: "Red Grade Trail System 20+ miles, Bighorn trails" },
        { activity: "Skiing", quality: 3, notes: "XC skiing; nearest downhill Antelope Buttes (small) or Big Sky/Red Lodge MT" }
      ],
      equestrianAccess: "Exceptional",
      crimeViolentPer100K: 136,
      crimePropertyPer100K: 989,
      walkScore: 30,
      avgCommute: "13 min",
      culturalAmenities: "WYO Theater (1923), Brinton Museum, Museum at the Bighorns, Sheridan WYO Rodeo, Big Horn Polo Club (since 1890s), historic Main Street"
    },

    community: {
      population: 20046,
      metroPopulation: 33375,
      populationGrowthRate: "1.3%/year",
      medianAge: 39.7,
      familyFriendliness: "Excellent",
      homeschoolCommunity: "Moderate",
      conservativePresence: "Very Strong",
      smallTownFeel: "Yes",
      volunteerCulture: "Strong — Sheridan Community Land Trust, YMCA, multiple active nonprofits, cowboy culture, volunteer-driven events"
    }
  },

  "san-antonio-tx": {
    name: "Boerne",
    state: "TX",
    isBaseline: false,

    costOfLiving: {
      overallIndex: 114,
      housingIndex: 158,
      groceryIndex: 94,
      utilitiesIndex: 95,
      transportationIndex: 97,
      medianHouseholdIncome: 84541,
      stateIncomeTaxRate: "0%",
      salesTaxRate: "8.25%",
      propertyTaxEffectiveRate: 0.0128,
      propertyTaxOn400K: 5120,
      unemploymentRate: 2.8,
      topIndustries: [
        "Trade/Transportation/Utilities",
        "Healthcare",
        "Tourism & Hospitality",
        "Technology & Cybersecurity",
        "Military/Government (JBSA)"
      ],
      remoteFriendly: "High"
    },

    housing: {
      medianHomePrice: 565000,
      pricePerAcreRanch: "$15K-$35K (Kendall County ranch land)",
      landAvailability: "Good",
      horseFriendlyZoning: true,
      marketCondition: "Buyer's",
      daysOnMarket: 109,
      neighborhoods: [
        { name: "Balcones Creek / Ranches at Creekside", priceRange: "$400K-$650K", familyRating: "Excellent", notes: "Family-oriented, Hill Country views, trails, Boerne ISD, best value" },
        { name: "Fair Oaks Ranch", priceRange: "$500K-$900K", familyRating: "Excellent", notes: "11,000-resident gated community, golf, equestrian facilities" },
        { name: "Cordillera Ranch", priceRange: "$1M-$3M+", familyRating: "Excellent", notes: "Premier master-planned, equestrian center, Nicklaus golf, 15mi trails" },
        { name: "Bulverde", priceRange: "$400K-$600K", familyRating: "Excellent", notes: "Growing community between Boerne and SA, newer builds, Comal ISD" },
        { name: "Bandera Corridor", priceRange: "$300K-$550K", familyRating: "Good", notes: "'Cowboy Capital of the World,' most affordable, working ranches, rural" }
      ]
    },

    education: {
      classicalChristianSchools: [
        { name: "Geneva School of Boerne", grades: "KP-12", tuition: "$10,795-$15,319", students: 684, accreditation: "Cognia (SACS CASI), ACCS member, SCL member", notes: "Founded 1998. SAT avg 1240, ACT avg 26, 10 AP courses. 100% graduation rate. 15% receive tuition aid." }
      ],
      otherPrivateSchools: [
        { name: "Ambleside Boerne", grades: "PK-8", tuition: null, notes: "Charlotte Mason, Christian" },
        { name: "Crestmont Christian Preparatory", grades: "K-12", tuition: null, notes: "Non-denominational Christian" },
        { name: "St. John Lutheran School", grades: "PK-5", tuition: null, notes: "Lutheran" }
      ],
      publicSchoolRating: "A",
      homeschoolCoOps: [
        { name: "BACH (Boerne Area Christian Homeschooling)", type: "Christian Support", notes: "Active local group" },
        { name: "One Day Academy", type: "Friday Enrichment", notes: "At Currey Creek Church" },
        { name: "THE Well", type: "Christ-centered Enrichment", notes: "Supplemental classes" }
      ],
      classicalConversations: true,
      graduationRate: 99
    },

    faith: {
      pcaChurches: [
        { name: "Trinity Presbyterian Church", size: "Small-Medium", notes: "In Boerne itself. 31 Ammann Rd." },
        { name: "Church of the Hills", size: "Medium", notes: "Bulverde" },
        { name: "Christ Church SA", size: "Medium", notes: "San Antonio" },
        { name: "Faith Presbyterian SA", size: "Medium", notes: "San Antonio" },
        { name: "Redeemer Presbyterian SA", size: "Medium", notes: "San Antonio" }
      ],
      opcChurches: [
        { name: "San Antonio Reformed Church", size: "Small", notes: "OPC in San Antonio" },
        { name: "Grace OPC", size: "Small", notes: "San Antonio area" }
      ],
      epcChurches: [],
      crecChurches: [
        { name: "Christ Church Boerne", size: "Small-Medium", notes: "CREC, in Boerne itself" },
        { name: "Christ Covenant Church SA", size: "Small", notes: "San Antonio area" }
      ],
      otherReformed: [
        { name: "Reformed Presbyterian Church SA", denomination: "RPCNA", size: "Small", notes: "Exclusive psalmody" }
      ],
      totalReformedCount: 13,
      reformedDensity: "Moderate-Good",
      seminaries: ["Zbinden Center for Biblical Leadership (First Pres SA)", "Southern Reformed College & Seminary (SA)"],
      christianOrgs: ["Boerne Community Coalition", "Multiple church-based ministries"]
    },

    lifestyle: {
      climate: {
        springHigh: 78, springLow: 55,
        summerHigh: 94, summerLow: 72,
        fallHigh: 80, fallLow: 56,
        winterHigh: 60, winterLow: 36,
        annualRainfall: "34 inches",
        annualSnowfall: "0.1 inches",
        sunnyDays: 228
      },
      outdoorRec: [
        { activity: "Hiking", quality: 4, notes: "Cibolo Nature Center, Guadalupe River State Park, Government Canyon" },
        { activity: "Equestrian", quality: 5, notes: "Cordillera Equestrian Club, Diamond C Stables, Hill Country Trail Rides, Guadalupe River SP trails" },
        { activity: "Kayaking/Tubing", quality: 4, notes: "Guadalupe River tubing and kayaking" },
        { activity: "Hunting", quality: 4, notes: "Abundant Hill Country deer and turkey" },
        { activity: "Cycling", quality: 3, notes: "Road cycling popular, Tour de Boerne" }
      ],
      equestrianAccess: "Excellent",
      crimeViolentPer100K: 107,
      crimePropertyPer100K: 1518,
      walkScore: 25,
      avgCommute: "30 min",
      culturalAmenities: "Historic Hauptstrasse (German Main Street), Cibolo Nature Center, Berges Fest, Dickens on Main, Hill Country wineries/breweries, San Antonio 30 min away"
    },

    community: {
      population: 25000,
      metroPopulation: 2525000,
      populationGrowthRate: "4.8%/year",
      medianAge: 38.7,
      familyFriendliness: "Excellent",
      homeschoolCommunity: "Strong",
      conservativePresence: "Strong",
      smallTownFeel: "Yes",
      volunteerCulture: "Active — Boerne Community Coalition, faith-based service orgs, strong community festival culture"
    }
  },

  "bozeman-mt": {
    name: "Bozeman",
    state: "MT",
    isBaseline: false,

    costOfLiving: {
      overallIndex: 140,
      housingIndex: 192,
      groceryIndex: 103,
      utilitiesIndex: 84,
      transportationIndex: 113,
      medianHouseholdIncome: 85747,
      stateIncomeTaxRate: "4.7%-5.9% (flat 5.4% by 2027)",
      salesTaxRate: "0%",
      propertyTaxEffectiveRate: 0.0051,
      propertyTaxOn400K: 2040,
      unemploymentRate: 2.8,
      topIndustries: [
        "Higher Education (Montana State University)",
        "Technology ($2.9B hub)",
        "Healthcare",
        "Tourism & Hospitality",
        "Agriculture & Ranching"
      ],
      remoteFriendly: "High"
    },

    housing: {
      medianHomePrice: 745000,
      pricePerAcreRanch: "$10K-$111K (varies widely; ranch land avg ~$10K statewide; equestrian near Bozeman $100K+/acre)",
      landAvailability: "Moderate",
      horseFriendlyZoning: true,
      marketCondition: "Cooling",
      daysOnMarket: 26,
      neighborhoods: [
        { name: "West Bozeman (Harvest Creek, Northstar)", priceRange: "$600K-$1.1M", familyRating: "Excellent", notes: "Near elementary schools, Gallatin Regional Park, Petra Academy" },
        { name: "South Bozeman", priceRange: "$650K-$1.2M", familyRating: "Excellent", notes: "Most coveted historic area, walkable, top schools" },
        { name: "Gran Cielo", priceRange: "$700K-$1.3M", familyRating: "Excellent", notes: "Master-planned, modern, community park, strong neighborhood identity" },
        { name: "Four Corners / Gallatin Gateway", priceRange: "$500K-$1.5M+", familyRating: "Good", notes: "Rural/acreage, horse-friendly, Gallatin River, 15-20 min to downtown" },
        { name: "Gallatin River Ranch", priceRange: "$800K-$2M+", familyRating: "Good", notes: "20-acre homesites, private equestrian center, gated, river access" }
      ]
    },

    education: {
      classicalChristianSchools: [
        { name: "Petra Academy", grades: "PK-12", tuition: 12500, students: 250, accreditation: "ACCS", notes: "Montana's oldest classical Christian school (27 years). 20-acre campus. Latin from 3rd grade, logic/rhetoric upper school. Cross-denominational." }
      ],
      otherPrivateSchools: [
        { name: "Heritage Christian School", grades: "K-12", tuition: null, notes: "~180 students, ACSI-accredited, non-denominational evangelical" },
        { name: "Mount Ellis Academy", grades: "9-12", tuition: null, notes: "Seventh-day Adventist, est. 1902" },
        { name: "Divine Mercy Academy", grades: null, tuition: null, notes: "Catholic" }
      ],
      publicSchoolRating: "B+",
      homeschoolCoOps: [
        { name: "Gallatin Christian Homeschool Co-op (GCHC)", type: "Christian", notes: "24-40 families, weekly K-12 meetings" },
        { name: "Bozeman Area Homeschoolers", type: "Support", notes: "Facebook community, activities" }
      ],
      classicalConversations: true,
      graduationRate: 88
    },

    faith: {
      pcaChurches: [
        { name: "Trinity Church Bozeman", size: "Small-Medium", notes: "PCA congregation" }
      ],
      opcChurches: [],
      epcChurches: [
        { name: "Springhill Presbyterian Church", size: "Medium", notes: "EPC, with Bozeman campus" }
      ],
      crecChurches: [],
      otherReformed: [
        { name: "Bozeman Christian Reformed Church", denomination: "CRC", size: "Small-Medium", notes: "Downtown, Dutch Reformed tradition" },
        { name: "Bozeman Reformed Baptist Church", denomination: "Reformed Baptist (1689)", size: "Small", notes: "Confessional" }
      ],
      totalReformedCount: 4,
      reformedDensity: "Low",
      seminaries: [],
      christianOrgs: ["Reformed University Fellowship (RUF) at MSU", "Chi Alpha/Cru campus ministries"]
    },

    lifestyle: {
      climate: {
        springHigh: 55, springLow: 30,
        summerHigh: 84, summerLow: 50,
        fallHigh: 58, fallLow: 30,
        winterHigh: 33, winterLow: 12,
        annualRainfall: "20 inches",
        annualSnowfall: "91 inches",
        sunnyDays: 188
      },
      outdoorRec: [
        { activity: "Skiing", quality: 5, notes: "Bridger Bowl 18mi (affordable, uncrowded), Big Sky Resort 50mi (biggest in US)" },
        { activity: "Hiking", quality: 5, notes: "80+ miles city trails, Hyalite Canyon, Bridger/Gallatin/Madison ranges, Yellowstone 90min" },
        { activity: "Fishing", quality: 5, notes: "World-class fly fishing — Gallatin, Madison, Yellowstone Rivers all within 30 min" },
        { activity: "Hunting", quality: 5, notes: "Elk, mule deer, whitetail, upland birds. Easy public land access." },
        { activity: "Equestrian", quality: 4, notes: "Gallatin River Ranch equestrian center, multiple stables, BLM/Forest Service trails" }
      ],
      equestrianAccess: "Excellent",
      crimeViolentPer100K: 434,
      crimePropertyPer100K: 1755,
      walkScore: 47,
      avgCommute: "15 min",
      culturalAmenities: "Museum of the Rockies (Smithsonian affiliate), Emerson Arts Center, Bozeman Symphony, vibrant downtown Main Street, MSU campus events"
    },

    community: {
      population: 59900,
      metroPopulation: 115000,
      populationGrowthRate: "2.1%/year",
      medianAge: 28.6,
      familyFriendliness: "Good",
      homeschoolCommunity: "Moderate",
      conservativePresence: "Moderate",
      smallTownFeel: "Moderate",
      volunteerCulture: "Strong — numerous volunteer orgs, community-oriented culture"
    }
  },

  "boise-id": {
    name: "Boise",
    state: "ID",
    isBaseline: false,

    costOfLiving: {
      overallIndex: 102,
      housingIndex: 115,
      groceryIndex: 100,
      utilitiesIndex: 94,
      transportationIndex: 105,
      medianHouseholdIncome: 81308,
      stateIncomeTaxRate: "5.3% flat",
      salesTaxRate: "6.0%",
      propertyTaxEffectiveRate: 0.0066,
      propertyTaxOn400K: 2640,
      unemploymentRate: 3.1,
      topIndustries: [
        "Technology (Micron HQ, HP, Clearwater Analytics)",
        "Healthcare (St. Luke's, Saint Alphonsus)",
        "Government/Education (State of Idaho, Boise State)",
        "Retail/Food (Albertsons HQ, WinCo)",
        "Agriculture (J.R. Simplot HQ)"
      ],
      remoteFriendly: "High"
    },

    housing: {
      medianHomePrice: 500000,
      pricePerAcreRanch: "$25K-$100K+ (closer to Boise higher; Canyon County more affordable)",
      landAvailability: "Moderate",
      horseFriendlyZoning: true,
      marketCondition: "Balanced",
      daysOnMarket: 30,
      neighborhoods: [
        { name: "Eagle", priceRange: "$700K-$1M+", familyRating: "Excellent", notes: "Premier family suburb, top schools, equestrian properties, Dry Creek Ranch agrihood" },
        { name: "Meridian", priceRange: "$480K-$600K", familyRating: "Excellent", notes: "Fastest-growing city in ID, home to The Ambrose School, excellent parks" },
        { name: "Star", priceRange: "$400K-$550K", familyRating: "Excellent", notes: "Small-town feel, larger lots, horse-friendly, more affordable" },
        { name: "Nampa", priceRange: "$380K-$465K", familyRating: "Good", notes: "Best value in Treasure Valley, CREC church presence, more space" },
        { name: "SE Boise / Boise Bench", priceRange: "$425K-$575K", familyRating: "Excellent", notes: "Established neighborhoods, close to foothills trails, good schools" }
      ]
    },

    education: {
      classicalChristianSchools: [
        { name: "The Ambrose School", grades: "K-12", tuition: "$3,120-$9,310", students: 900, accreditation: "ACCS", notes: "Premier classical Christian school. 3 campuses (Meridian + NW Boise). 14:1 ratio. Latin 3-10, Greek 9-10. Great Books. 95% attend 4-year college. Founded 1995." },
        { name: "Petra Christian Academy", grades: "K-9", tuition: null, students: null, accreditation: "Classical Christian", notes: "Small school, 8:1 ratio, Christ-centered classical curriculum" }
      ],
      otherPrivateSchools: [
        { name: "Cole Valley Christian Schools", grades: "PK-12", tuition: null, notes: "Christ-centered" },
        { name: "Boise Classical Academy", grades: null, tuition: null, notes: "Classical option" },
        { name: "Capital Christian Academy", grades: null, tuition: null, notes: "Christian" }
      ],
      publicSchoolRating: "B+",
      homeschoolCoOps: [
        { name: "Venture Christian Co-op", type: "Christian", notes: "Fridays, PreK-graduation" },
        { name: "Treasure Valley Academy Co-op", type: "Christian", notes: "Thursdays, West Boise" },
        { name: "Still Waters Homeschool Group", type: "Christian", notes: "Christian support" },
        { name: "SELAH of Idaho", type: "Multiple Co-ops", notes: "Several locations across Treasure Valley" }
      ],
      classicalConversations: "Strong — multiple CC communities across Treasure Valley (Meridian, Boise, Nampa, Caldwell)",
      graduationRate: 90
    },

    faith: {
      pcaChurches: [
        { name: "All Saints Presbyterian Church", size: "Small-Medium", notes: "Meridian — meets at The Ambrose School" },
        { name: "Boise Presbyterian Church", size: "Small", notes: "Downtown Boise, church plant" },
        { name: "Covenant Presbyterian Church", size: "Small-Medium", notes: "NW Boise" }
      ],
      opcChurches: [],
      epcChurches: [],
      crecChurches: [
        { name: "The King's Congregation", size: "Small-Medium", notes: "Meridian. Est. 2003." },
        { name: "King's Covenant Church", size: "Small", notes: "Nampa. Mission church of King's Congregation." }
      ],
      otherReformed: [
        { name: "Treasure Valley Reformed Presbyterian", denomination: "RPCNA", size: "Small", notes: "Westminster Confession, exclusive psalmody" },
        { name: "Dayspring Reformed Church", denomination: "Independent Reformed", size: "Small", notes: "Confessional" },
        { name: "The Well Reformed Church", denomination: "Independent Reformed", size: "Small", notes: "Westminster Confession" },
        { name: "Sovereign Grace Fellowship", denomination: "Reformed Evangelical", size: "Small", notes: "Reformed" }
      ],
      totalReformedCount: 10,
      reformedDensity: "Moderate",
      seminaries: [],
      christianOrgs: ["RUF at Boise State", "Idaho Family Policy Center", "Canon Press influence (Moscow-based)"]
    },

    lifestyle: {
      climate: {
        springHigh: 62, springLow: 38,
        summerHigh: 91, summerLow: 58,
        fallHigh: 63, fallLow: 38,
        winterHigh: 38, winterLow: 24,
        annualRainfall: "11 inches",
        annualSnowfall: "18 inches",
        sunnyDays: 210
      },
      outdoorRec: [
        { activity: "Hiking", quality: 5, notes: "Ridge to Rivers 190+ miles foothills trails, Boise National Forest, Table Rock" },
        { activity: "Skiing", quality: 4, notes: "Bogus Basin 16mi from downtown, 2,000 acres, 45 runs, night skiing. Sun Valley 2.5hr." },
        { activity: "Mountain Biking", quality: 5, notes: "World-class desert singletrack year-round, foothills trail system" },
        { activity: "Fishing", quality: 5, notes: "9,600 miles of rivers/streams, world-class trout, Boise/Payette/Salmon Rivers" },
        { activity: "Equestrian", quality: 4, notes: "Boise NF horse trails, Eagle/Star horse properties, Dry Creek Ranch equestrian facility" }
      ],
      equestrianAccess: "Good",
      crimeViolentPer100K: 235,
      crimePropertyPer100K: 1270,
      walkScore: 38,
      avgCommute: "18 min",
      culturalAmenities: "Boise Art Museum, Basque Museum, Museum of Idaho, Treefort Music Fest, Capital City Public Market, Morrison Center, NatGeo Top 25 Destination 2025"
    },

    community: {
      population: 239503,
      metroPopulation: 770000,
      populationGrowthRate: "1.26%/year",
      medianAge: 38.6,
      familyFriendliness: "Excellent",
      homeschoolCommunity: "Very Strong",
      conservativePresence: "Strong",
      smallTownFeel: "Moderate",
      volunteerCulture: "Strong — active neighborhood associations, church-based service orgs, community events"
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
 *   Sarasota: 4 — 5 Reformed churches (2 PCA, 1 OPC, 2 Reformed Baptist), small but established
 *   Flagstaff: 2 — 1 PCA (Church of the Resurrection), 1 Reformed Baptist, 1 CRC. No OPC/CREC/EPC. No seminary.
 *   Bend: 2 — 1 OPC + 1 Reformed Baptist, no PCA/CREC
 *   Sisters: 1 — Zero Reformed churches in town, must drive 25-30 min to Bend's thin options
 *   Birmingham: 9 — 14 Reformed churches, Briarwood PCA (~4,000 members), BTS seminary, deep Bible Belt infrastructure
 *   Moscow: 9 — 5 CREC churches (Christ Church ~3,000 members, Doug Wilson), NSA college, Greyfriars Hall seminary. No PCA/OPC/EPC.
 *   Raleigh: 8 — 10 PCA churches across Triangle, SEBTS (30 min), 20 total Reformed congregations
 *   Boerne: 8 — 5 PCA, 2 OPC, 2 CREC, 1 RPCNA in Hill Country; Zbinden Center + Southern Reformed Seminary
 *   Boise: 7 — 3 PCA, 2 CREC, 1 RPCNA, several independent. Strong for a western city but no OPC or seminary.
 *   Bozeman: 5 — 1 PCA, 1 EPC, 1 CRC, 1 Reformed Baptist. Limited but present.
 *   Sheridan: 3 — 1 small PCA mission church only. Very weak.
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
 *   Birmingham: 8 — Westminster Oak Mountain (ACCS, 563 students), Evangel Classical (ACCS, 245 students), strong homeschool
 *   Moscow: 9 — Logos School (ACCS, 686 students, founded 1981 by Doug Wilson), Jubilee School, NSA college
 *   Raleigh: 9 — Cary Christian (ACCS, 785 students), Trinity Academy (627 students), Trinity School Durham (630 students)
 *   Boerne: 9 — Geneva School (ACCS, 684 students, SAT avg 1240, ACT 26), very strong
 *   Boise: 9 — Ambrose School (ACCS, 900 students, 3 campuses, very affordable $3K-$9K), Petra Christian
 *   Bozeman: 8 — Petra Academy (ACCS, 250 students)
 *   Sheridan: 5 — No classical Christian school; moderate homeschool
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
 *   Birmingham: 5 — Excellent outdoor rec (Oak Mountain State Park), mild winters, but city-proper violent crime ~1,500/100K (highest in set)
 *   Moscow: 7 — Good Palouse recreation, very safe (91 violent/100K), cold winters, limited variety
 *   Raleigh: 8 — Blue Ridge nearby, Eno River, greenways, good climate, moderate crime (500 violent/100K)
 *   Boerne: 8 — Hill Country recreation, excellent equestrian, extremely safe (36 violent/100K), hot summers
 *   Boise: 9 — Ridge to Rivers trails, Bogus Basin skiing, Boise River, safe (235 violent/100K), four seasons
 *   Bozeman: 9 — World-class skiing, hiking, fishing. Gallatin/Yellowstone access. Cold winters but stunning landscape.
 *   Sheridan: 9 — Bighorn Mountains, excellent equestrian/polo culture, very safe (136 violent/100K), cold winters
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
 *   Birmingham: 9 — Median $280K city proper, good land availability in Shelby County, $15K-$30K/acre. Over the Mountain suburbs $400K-$700K+.
 *   Moscow: 5 — Median $456K, good Palouse farmland $10K-$17K/acre
 *   Raleigh: 6 — Median $435K, good availability but wide price range $15K-$70K/acre
 *   Boerne: 7 — Median $565K, good Hill Country land $15K-$35K/acre
 *   Boise: 6 — Median $500K, land available but premium $25K-$100K+/acre
 *   Bozeman: 4 — Median $745K, very expensive for Montana
 *   Sheridan: 7 — Median $347K, excellent horse land $8K-$12K/acre
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
 *   Birmingham: 8 — Index 90, no income tax (Alabama has low rates), very affordable
 *   Moscow: 7 — Index 103, near national avg, 5.3% income tax, moderate housing
 *   Raleigh: 7 — Index 96, below national avg, 3.99% flat income tax
 *   Boerne: 6 — Index 114, 0% income tax helps but high property tax (1.28%) and elevated housing
 *   Boise: 7 — Index 102, near national avg, 5.3% flat income tax
 *   Bozeman: 4 — Index 140, very high cost driven by housing index 192
 *   Sheridan: 8 — Index 104, near national avg but 0% income tax and moderate property tax
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
 *   Birmingham: 8 — Excellent family suburbs (Over the Mountain), strong homeschool, very strong conservative, metro 1.15M
 *   Moscow: 8 — Strong CREC community, Logos School ecosystem, very strong conservative, but small college town (27K)
 *   Raleigh: 8 — Excellent family suburbs, strong homeschool, strong conservative presence balanced by universities, fast growth (2%/yr)
 *   Boerne: 9 — Explosive growth (4.8%/yr), excellent family community, very strong conservative, Hill Country lifestyle
 *   Boise: 9 — Very family-friendly, strong homeschool (CHOIS), very strong conservative, growing metro (770K)
 *   Bozeman: 7 — Good family amenities, moderate homeschool, moderate conservative (university town), fast growth (1.7%/yr)
 *   Sheridan: 8 — Very family-friendly, small-town culture, strong conservative, limited population (20K)
 */
const SCORES = {
  "lexington-ky":     { faith: 5, education: 8, lifestyle: 6, housing: 8, costOfLiving: 8, community: 7 },
  "bend-or":          { faith: 2, education: 5, lifestyle: 9, housing: 2, costOfLiving: 3, community: 5 },
  "sisters-or":       { faith: 1, education: 3, lifestyle: 9, housing: 2, costOfLiving: 3, community: 4 },
  "sarasota-fl":      { faith: 4, education: 7, lifestyle: 6, housing: 5, costOfLiving: 6, community: 4 },
  "chattanooga-tn":   { faith: 10, education: 9, lifestyle: 8, housing: 8, costOfLiving: 10, community: 9 },
  "greenville-sc":    { faith: 10, education: 9, lifestyle: 8, housing: 7, costOfLiving: 8, community: 9 },
  "columbia-sc":      { faith: 7, education: 7, lifestyle: 5, housing: 9, costOfLiving: 7, community: 6 },
  "coeur-d-alene-id": { faith: 5, education: 6, lifestyle: 8, housing: 3, costOfLiving: 5, community: 9 },
  "flagstaff-az":     { faith: 2, education: 3, lifestyle: 8, housing: 2, costOfLiving: 3, community: 5 },
  "birmingham-al":    { faith: 9, education: 8, lifestyle: 5, housing: 9, costOfLiving: 8, community: 8 },
  "moscow-id":        { faith: 9, education: 9, lifestyle: 7, housing: 5, costOfLiving: 7, community: 8 },
  "raleigh-nc":       { faith: 8, education: 9, lifestyle: 8, housing: 6, costOfLiving: 7, community: 8 },
  "sheridan-wy":      { faith: 3, education: 5, lifestyle: 9, housing: 7, costOfLiving: 8, community: 8 },
  "san-antonio-tx":   { faith: 8, education: 9, lifestyle: 8, housing: 7, costOfLiving: 6, community: 9 },
  "bozeman-mt":       { faith: 5, education: 8, lifestyle: 9, housing: 4, costOfLiving: 4, community: 7 },
  "boise-id":         { faith: 7, education: 9, lifestyle: 9, housing: 6, costOfLiving: 7, community: 9 }
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
