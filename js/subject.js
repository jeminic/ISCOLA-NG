// Get rid of small loading animation
[...document.querySelectorAll(".input-location-dependant")].forEach(element =>
    element.classList.toggle("d-none")
);

// Function to set multiple attributes at once
const setAttributes = (el, attrs) => {
    for (var key in attrs) {
        el.setAttribute(key, attrs[key]);
    }
};

const selectSubject = target => {
    let classs = target.value, // Get value of classs
        selectLGAOption = ["Select LGA..."], // Define this once so as not to repeat it multiple times
        subjectList = {
            Nursery: [
                "All Subjects"
            ],
            Primary: [
                "English Language",
                "Verbal Reasoning",
                "Spelling",
                "Mathematics",
                "Quantitative Reasoning",
                "Elementary Science",
                "Social Studies",
                "Vocational Aptitude",
                "Health Education",
                "Bible Knowledge",
                "Languages",
                "Creative Arts",
                "Computer",
                "Agric Science",
                "Home Economics",
                "Civic",
                "Music",
                "Moral Instruction",
                "Handwriting"
            ],
            JSS: [
                "English Language",
                "Mathematics",
                "Basic Science",
                "Basic Technology",
                "Social Studies",
                "Computer Studies",
                "Fine Art/Creative Art",
                "Hausa Language",
                "French Language",
                "Yoruba Language",
                "Igbo language",
                "Home Economics",
                "Civic Education",
                "Music",
                "Agricultural Science",
                "Physical and Health Education",
                "Bussiness Studies",
                "C.R.S/ I.R.S"
            ],
            SSS: [
                "ARABIC",
                "AGRICULTURAL SCIENCE",
                "AUTO PARTS MERCHANDISING",
                "AUTO MECHANICS",
                "AUTO MECHANICAL WORK",
                "AUTO ELECTRICAL WORK",
                "AUTO BODY REPAIRS AND SPRAY PAINTING",
                "APPLIED ELECTRICITY OR BASIC ELECTRICITY ",
                "ANIMAL HUSBANDRY",
                "BUSINESS MANAGEMENT",
                "BUILDING CONSTRUCTION",
                "BOOK KEEPING",
                "BLOCKLAYING, BRICKLAYING AND CONCRETING",
                "BIOLOGY",
                "BASKETRY",
                "CROP HUSBANDRY AND HORTICULTURE",
                "COSMETOLOGY",
                "COMPUTER STUDIES",
                "COMMERCE",
                "CLOTHING AND TEXTILES",
                "CLERICAL OFFICE DUTIES ",
                "CIVIC EDUCATION",
                "CHRISTIAN RELIGIOUS STUDIES",
                "CHEMISTRY",
                "CERAMICS",
                "CATERING CRAFT PRACTICE",
                "CAPENTRY AND JOINERY",
                "DYEING & BLEACHING",
                "DATA PROCESSING",
                "ENGLISH LANGUAGE",
                "ELECTRONICS OR BASIC ELECTRONICS",
                "ELECTRICAL INSTALLATION AND MAINTENANCE",
                "EFIK",
                "EDO",
                "ECONOMICS",
                "FURTHER MATHEMATICS",
                "FURNITURE MAKING",
                "FRENCH",
                "FORESTRY",
                "FOODS AND NUTRITION",
                "FISHERIES",
                "FINANCIAL ACCOUNTING",
                "TYPEWRITING",
                "TOURISM",
                "TEXTILES",
                "TECHNICAL DRAWING",
                "STORE MANAGEMENT",
                "STORE KEEPING WAEC",
                "SOCIAL STUDIES",
                "SHORTHAND",
                "SCULPTURE",
                "SALESMANSHIP",
                "REFRIGERATION AND AIR CONDITIONING",
                "RADIO,TELEVISION AND ELECTRONICS WORKS",
                "PRINTING CRAFT PRACTICE",
                "PRINCIPLES OF COST ACCOUNTING",
                "PLUMBING AND PIPE FITTING",
                "PICTURE MAKING",
                "PHYSICS",
                "PHYSICAL EDUCATION",
                "PHOTOGRAPHY",
                "PAINTING AND DECORATING",
                "OFFICE PRACTICE",
                "MUSIC",
                "MINING",
                "METALWORK",
                "MARKETING",
                "MACHINE WOODWORKING",
                "LITERATURE IN ENGLISH",
                "LEATHERWORK",
                "LEATHER GOODS",
                "JEWELLERY",
                "ISLAMIC RELIGIOUS STUDIES",
                "INTEGRATED SCIENCE",
                "INSURANCE",
                "INFORMATION AND COMMUNICATION TECHNOLOGY",
                "IGBO",
                "IBIBIO",
                "HOME MANAGEMENT",
                "HISTORY",
                "HEALTH EDUCATION OR HEALTH SCIENCE",
                "HAUSA",
                "GSM PHONES MAINTENANCE AND REPAIRS",
                "GRAPHIC DESIGN",
                "GOVERNMENT",
                "GEOGRAPHY",
                "GENERAL MATHEMATICS OR MATHEMATICS",
                "GENERAL KNOWLEDGE IN ART",
                "GENERAL AGRICULTURE",
                "GARMENT MAKING",
                "VISUAL ART",
                "UPHOLSTERY",
                "WOODWORK",
                "WEST AFRICAN TRADITIONAL RELIGION",
                "WELDING AND FABRICATION ENGINEERING CRAFT PRACTICE",
                "YORUBA"
            ]
        }[classs], // Ternary switch operator to show list of LGAs based on chosen classs
        subjects = [...selectLGAOption, ...Object.values(subjectList)], // Join select LGA option with list of LGAs
        form = target.parentElement.parentElement.parentElement.parentElement, // Get parent up to the forth generation just in case LGA select element is deeply nested
        subjectSelect = form.querySelector(".select-subject"), // Get the LGA select element
        length = subjectSelect.options.length; // Get number of options already existing in LGA select element

    // Clear LGS select element
    for (i = length - 1; i >= 0; i--) {
        subjectSelect.options[i] = null;
    }

    // Populate LGA select element
    subjects.forEach(subject => {
        let opt = document.createElement("option"); // Create option element
        opt.appendChild(document.createTextNode(subject)); // Append LGA to it
        opt.value = subject; // Set the value to LGA

        // Make option asking you to select unclickable
        subject.includes("elect") ?
            setAttributes(opt, { disabled: "disabled", selected: "selected" }) :
            "";

        // Add this option element to LGA select element
        subjectSelect.appendChild(opt);
    });
};