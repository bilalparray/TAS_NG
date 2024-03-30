export interface LoaderInfo {
  message: string;
  showLoader: boolean;
}

export interface ConfirmModalInfo {
  title: string;
  subTitle: string;
  message: string;
  showModal: boolean;
}

export interface LayoutViewModel {
  leftMenuClass: string;
  rightMenuClass: string;
  showRightMenu: boolean;
  showLeftMenu: boolean;
  showNav: boolean;
  userLoggedIn: boolean;
  showRouterOutlet: boolean;
}

export class LayoutVM {
  showHideClass: string = "";
  scrollSubmenu: number = 0;
  showHideBackButton: boolean = true;
  updateAvailable: boolean = false;
}
export interface MenuItem {
  routePath: string;
  routeName: string;
  isActive: boolean;
  iconName: boolean;
}

export class AllConverters {
  commonConverters: {
    router: string;
    imgSrc: string;
    title: string;
    isFavorite: boolean;
    searchArrayFromConverters: string[];
  }[] = [
    {
      router: "/time",
      imgSrc: "assets/images/time.png",
      title: "Time",
      isFavorite: false,

      searchArrayFromConverters: [
        "Time ",
        "Seconds",
        "Minutes",
        "Hours",
        "Days",
        "Weeks",
        "Months",
        "Years",
        "Decades",
      ],
    },
    {
      router: "/weight",
      imgSrc: "assets/images/weighing-machine.png",
      title: "Weight",
      isFavorite: false,
      searchArrayFromConverters: [
        "Weight ",
        "Pounds",
        "Kilograms",
        "Grams",
        "Milligrams",
        "Micrograms",
        "Ounces",
        "Stones",
        "Ton",
        "Quintal",

        // Add more unit names as needed
      ],
    },
    {
      router: "/area",
      imgSrc: "assets/images/area-graph.png",
      title: "Area",
      isFavorite: false,
      searchArrayFromConverters: [
        "Area ",
        "Square meters",
        "Square kilometers",
        "Square feet",
        "Acres",
        "Hectares",
        "Square Mile",
        "Square Yard",
      ],
    },
    {
      router: "/speed",
      imgSrc: "assets/images/speedometer.png",
      title: "Speed",
      isFavorite: false,
      searchArrayFromConverters: [
        "Speed ",
        "Meters per second",
        "Kilometers per hour",
        "Miles per hour",
        "Feet per second",
        "Knots",
        "Kilometer per second",
      ],
    },
    {
      router: "/length",
      imgSrc: "assets/images/measuring-tape.png",
      title: "Length",
      isFavorite: false,
      searchArrayFromConverters: [
        "Length ",
        "Meters",
        "Kilometers",

        "Nanometers",
        "Inches",
        "Feet",
        "Yards",
        "Miles",
      ],
    },
    {
      router: "/temperature",
      imgSrc: "assets/images/temprature.png",
      title: "Temperature",
      isFavorite: false,
      searchArrayFromConverters: [
        "Temperature ",
        "temp",
        "Temprature",
        "Celcius",
        "Farenheit",
        "Kelvin",
      ],
    },
    // {
    //   router: "/currency",
    //   imgSrc: "assets/images/currency.png",
    //   title: "Currency",
    //   isFavorite: false,
    //   searchArrayFromConverters: ["currency "],
    // },
    {
      router: "/volume",
      imgSrc: "assets/images/volume.png",
      title: "Volume",
      isFavorite: false,
      searchArrayFromConverters: [
        "Volume ",
        "Cubic meters",
        "Cubic kilometers",
        // "Cubic centimeters",
        "Cubic millimeters",
        "Cubic feet",
        "Cubic inches",
        "Liters",
        "Milliliters",
        "Gallons",
        "Gallons",
      ],
    },
  ];
  engineeringConverters: {
    router: string;
    imgSrc: string;
    title: string;
    searchArrayFromConverters: string[];
    isFavorite: boolean;
  }[] = [
    {
      router: "/power",
      imgSrc: "assets/images/power.png",
      title: "Power",
      searchArrayFromConverters: [
        "Power ",
        "Watt",
        "Kilowatt",
        "Horsepower",
        "Calorie per second",
        "BTU per hour",
        "Erg per second",
      ],
      isFavorite: false,
    },
    {
      router: "/frequency",
      imgSrc: "assets/images/frequency.png",
      title: "Frequency",
      isFavorite: false,
      searchArrayFromConverters: [
        "Frequency ",
        "Hertz",
        "Kilohertz",
        "Megahertz",
        "Gigahertz",
      ],
    },
    {
      router: "/force",
      imgSrc: "assets/images/force.png",
      title: "Force",
      searchArrayFromConverters: [
        "Force ",
        "Newton",
        "Kilogram-force",
        "Dyne",
        "Pound-force",
      ],
      isFavorite: false,
    },
    {
      router: "/work",
      imgSrc: "assets/images/work.png",
      title: "Work/Energy",
      searchArrayFromConverters: [
        "Energy ",
        "Work/energy ",
        "Work energy ",
        "Workenergy ",
        "Work/ energy ",
        "Joule",
        "Kilojoule",
        "Calorie",
        "Kilocalorie",
        "Erg",
        "Watt-hour",
      ],
      isFavorite: false,
    },
    {
      router: "/pressure",
      imgSrc: "assets/images/pressure.png",
      title: "Pressure",
      searchArrayFromConverters: [
        "Pressure ",
        "Pascal",
        "Kilopascal",
        "Bar",
        "Atmosphere",
        "Pound per Square Inch",
        "Torr",
      ],
      isFavorite: false,
    },
    {
      router: "/current",
      imgSrc: "assets/images/current.png",
      title: "Current",
      searchArrayFromConverters: [
        "Current ",
        "Ampere",
        "Milliampere",
        "Microampere",
        "Kiloampere",
        "Megaampere",
      ],
      isFavorite: false,
    },

    {
      router: "/planeangle",
      imgSrc: "assets/images/planeangle.png",
      title: "Plane Angle",
      searchArrayFromConverters: [
        "Plane Angle ",
        "Degree",
        "Radian",
        "Gradian",
        "Minute of Arc",
        "Second of Arc",
      ],
      isFavorite: false,
    },
  ];

  // banking converters
  bankingConverters: {
    router: string;
    imgSrc: string;
    title: string;
    isFavorite: boolean;
    searchArrayFromConverters: string[];
  }[] = [
    {
      router: "/simple-interest",
      imgSrc: "assets/images/simpleinterest.png",
      title: "Simple Interest",
      isFavorite: false,

      searchArrayFromConverters: ["simple interest "],
    },
    {
      router: "/compound-interest",
      imgSrc: "assets/images/compoundinterest.png",
      title: "Compound Interest",
      isFavorite: false,

      searchArrayFromConverters: ["compound interest "],
    },
    {
      router: "/discount",
      imgSrc: "assets/images/discounts.png",
      title: "Discount",
      isFavorite: false,

      searchArrayFromConverters: ["Discount calculator "],
    },
  ];
  // banking converters
  healthConverters: {
    router: string;
    imgSrc: string;
    title: string;
    isFavorite: boolean;
    searchArrayFromConverters: string[];
  }[] = [
    {
      router: "/bmi",
      imgSrc: "assets/images/bmi.png",
      title: "BMI Calculator",
      isFavorite: false,

      searchArrayFromConverters: ["BMI calculator "],
    },
    {
      router: "/bmr",
      imgSrc: "assets/images/bmr.png",
      title: "BMR Calculator",
      isFavorite: false,

      searchArrayFromConverters: ["BMR calculator "],
    },
    {
      router: "/waterintake",
      imgSrc: "assets/images/waterintake.png",
      title: "Water Intake",
      isFavorite: false,

      searchArrayFromConverters: ["water intake ", "water", "fluid intake"],
    },
  ];

  // banking converters
  geometryConverters: {
    router: string;
    imgSrc: string;
    title: string;
    isFavorite: boolean;
    searchArrayFromConverters: string[];
  }[] = [
    {
      router: "/third-angle",
      imgSrc: "assets/images/right-angle.png",
      title: "Third Angle",
      isFavorite: false,

      searchArrayFromConverters: ["third angle  "],
    },
    {
      router: "/hypotenuse",
      imgSrc: "assets/images/hypotenuse.png",
      title: "Hypotenuse",
      isFavorite: false,

      searchArrayFromConverters: ["hypotenuse "],
    },
  ];
  /////////////////////////// ohter convertsers start from here
  otherConverters: {
    router: string;
    imgSrc: string;
    title: string;
    isFavorite: boolean;
    searchArrayFromConverters: string[];
  }[] = [
    {
      router: "/cooking",
      imgSrc: "assets/images/cooking.png",
      title: "Cooking",
      searchArrayFromConverters: [
        "cooking ",
        "Cup",
        "Teaspoon",
        "Tablespoon",
        "Fluid Ounce",
        "Pint",
        "Quart",
      ],
      isFavorite: false,
    },
    {
      router: "/timezone",
      imgSrc: "assets/images/timezone.png",
      title: "World Clock",
      searchArrayFromConverters: ["worldclock ", "world clock "],
      isFavorite: false,
    },
    {
      router: "/fuelefficiency",
      imgSrc: "assets/images/fuelefficiency.png",
      title: "Fuel Efficiency",
      searchArrayFromConverters: [
        "fuel",
        "fuelefficiency",
        "fuel efficiency ",
        "Miles per Gallon",
        "Kilometers per Liter",
        "Liters per 100 Kilometers",
        "Miles per Liter",
        "Gallons per 100 Miles",
      ],
      isFavorite: false,
    },
    {
      router: "/dob",
      imgSrc: "assets/images/dob.png",
      title: "Age Calculator",
      searchArrayFromConverters: [
        "dob",
        "dob calculator ",
        "birth",
        "birthday",
        "born",
        "age",
        "age calculator",
        "ages",
      ],
      isFavorite: false,
    },

    {
      router: "/storage",
      imgSrc: "assets/images/storage.png",
      title: "Computer Data",
      searchArrayFromConverters: [
        "Computer Data ",
        "storage",
        "Bit",
        "Byte",
        "Kilobit (Kb)",
        "Kilobyte (KB)",
        "Megabit (Mb)",
        "Megabyte (MB)",
        "Gigabit (Gb)",
        "Gigabyte (GB)",
        "Terabit (Tb)",
        "Terabyte (TB)",
        "Petabit (Pb)",
        "Petabyte (PB)",
        "Exabit (Eb)",
        "Exabyte (EB)",
      ],
      isFavorite: false,
    },
  ];
}
