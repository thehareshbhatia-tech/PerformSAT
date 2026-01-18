// Practice questions for Volume module
// Questions are organized by SECTION (question type)

export const volumeQuestions = {
  // Section: Fundamentals
  "Fundamentals": [
    {
      id: 1,
      difficulty: "easy",
      question: "Volume is measured in:",
      choices: [
        { id: "A", text: "Linear units (cm, m)" },
        { id: "B", text: "Square units (cm², m²)" },
        { id: "C", text: "Cubic units (cm³, m³)" },
        { id: "D", text: "No units" }
      ],
      correctAnswer: "C",
      hint: "Think about how many dimensions volume measures. Length uses one dimension, area uses two.",
      explanation: "Volume measures three-dimensional space and is expressed in cubic units."
    },
    {
      id: 2,
      difficulty: "easy",
      question: "If all dimensions of a 3D shape are doubled, the volume is multiplied by:",
      choices: [
        { id: "A", text: "2" },
        { id: "B", text: "4" },
        { id: "C", text: "6" },
        { id: "D", text: "8" }
      ],
      correctAnswer: "D",
      hint: "Volume involves three dimensions. Think about what happens when you multiply the scale factor for each dimension together.",
      explanation: "Volume scales with the cube of the linear scale factor. If doubled: 2³ = 8."
    },
    {
      id: 3,
      difficulty: "medium",
      question: "Which formula represents the volume of any prism?",
      choices: [
        { id: "A", text: "V = lwh" },
        { id: "B", text: "V = πr²h" },
        { id: "C", text: "V = Bh (base area × height)" },
        { id: "D", text: "V = (1/3)Bh" }
      ],
      correctAnswer: "C",
      hint: "A prism can have any polygon as its base. Look for the most general formula that works regardless of the base shape.",
      explanation: "For any prism (rectangular, triangular, etc.), V = Base area × height."
    },
    {
      id: 4,
      difficulty: "medium",
      question: "A container holds 2 liters. How many cubic centimeters is this?",
      choices: [
        { id: "A", text: "2 cm³" },
        { id: "B", text: "200 cm³" },
        { id: "C", text: "2,000 cm³" },
        { id: "D", text: "20,000 cm³" }
      ],
      correctAnswer: "C",
      hint: "Remember the key conversion: 1 liter equals 1,000 cubic centimeters.",
      explanation: "1 liter = 1,000 cm³. So 2 liters = 2,000 cm³."
    },
    {
      id: 5,
      difficulty: "hard",
      question: "If two solids have the same volume, they must have:",
      choices: [
        { id: "A", text: "The same shape" },
        { id: "B", text: "The same surface area" },
        { id: "C", text: "The same dimensions" },
        { id: "D", text: "None of the above necessarily" }
      ],
      correctAnswer: "D",
      hint: "Think of a tall, thin cylinder and a short, wide one. Can they have the same volume but different shapes?",
      explanation: "Different shapes can have the same volume with different dimensions and surface areas."
    }
  ],

  // Section: Rectangular Prism
  "Rectangular Prism": [
    {
      id: 1,
      difficulty: "easy",
      question: "What is the volume of a rectangular prism with length 5, width 3, and height 4?",
      choices: [
        { id: "A", text: "12" },
        { id: "B", text: "35" },
        { id: "C", text: "60" },
        { id: "D", text: "94" }
      ],
      correctAnswer: "C",
      hint: "For a rectangular prism (box), multiply all three dimensions together: length times width times height.",
      explanation: "V = l × w × h = 5 × 3 × 4 = 60."
    },
    {
      id: 2,
      difficulty: "easy",
      question: "A box has volume 120 cm³. If its length is 10 cm and width is 4 cm, what is its height?",
      choices: [
        { id: "A", text: "3 cm" },
        { id: "B", text: "6 cm" },
        { id: "C", text: "12 cm" },
        { id: "D", text: "30 cm" }
      ],
      correctAnswer: "A",
      hint: "Use V = lwh and solve for the missing dimension. Divide the volume by the product of the known dimensions.",
      explanation: "V = lwh → 120 = 10 × 4 × h → h = 120/40 = 3 cm."
    },
    {
      id: 3,
      difficulty: "medium",
      question: "A rectangular tank holds 1,000 gallons. If its base is 10 ft × 5 ft, how deep is the water? (1 gallon ≈ 0.134 cubic feet)",
      choices: [
        { id: "A", text: "2 ft" },
        { id: "B", text: "2.68 ft" },
        { id: "C", text: "20 ft" },
        { id: "D", text: "134 ft" }
      ],
      correctAnswer: "B",
      hint: "First convert gallons to cubic feet, then divide by the base area to find the height.",
      explanation: "Volume = 1000 × 0.134 = 134 ft³. Height = 134/(10 × 5) = 134/50 = 2.68 ft."
    },
    {
      id: 4,
      difficulty: "medium",
      question: "If a rectangular prism's length is tripled while width and height stay the same, the volume:",
      choices: [
        { id: "A", text: "Triples" },
        { id: "B", text: "Increases by 3" },
        { id: "C", text: "Increases by a factor of 9" },
        { id: "D", text: "Increases by a factor of 27" }
      ],
      correctAnswer: "A",
      hint: "Since V = lwh, think about what happens when only one factor in the multiplication is changed.",
      explanation: "V = lwh. If only l becomes 3l, new volume = 3lwh = 3 × original volume."
    },
    {
      id: 5,
      difficulty: "hard",
      question: "A storage unit is 12 ft × 10 ft × 8 ft. How many boxes that are 2 ft × 2 ft × 2 ft can fit inside?",
      choices: [
        { id: "A", text: "60" },
        { id: "B", text: "120" },
        { id: "C", text: "240" },
        { id: "D", text: "960" }
      ],
      correctAnswer: "B",
      hint: "Calculate the volume of both the storage unit and one box, then divide to find how many boxes fit.",
      explanation: "Unit volume = 960 ft³. Box volume = 8 ft³. Number of boxes = 960/8 = 120."
    }
  ],

  // Section: Cube
  "Cube": [
    {
      id: 1,
      difficulty: "easy",
      question: "What is the volume of a cube with edge length 4?",
      choices: [
        { id: "A", text: "12" },
        { id: "B", text: "16" },
        { id: "C", text: "64" },
        { id: "D", text: "96" }
      ],
      correctAnswer: "C",
      hint: "A cube has equal edges, so its volume is the edge length multiplied by itself three times.",
      explanation: "V = s³ = 4³ = 64."
    },
    {
      id: 2,
      difficulty: "easy",
      question: "A cube has volume 125 cm³. What is its edge length?",
      choices: [
        { id: "A", text: "5 cm" },
        { id: "B", text: "25 cm" },
        { id: "C", text: "41.67 cm" },
        { id: "D", text: "√125 cm" }
      ],
      correctAnswer: "A",
      hint: "To reverse V = s³, take the cube root of the volume. What number cubed equals 125?",
      explanation: "V = s³ = 125, so s = ∛125 = 5 cm."
    },
    {
      id: 3,
      difficulty: "medium",
      question: "If a cube's edge is doubled, its volume is multiplied by:",
      choices: [
        { id: "A", text: "2" },
        { id: "B", text: "4" },
        { id: "C", text: "6" },
        { id: "D", text: "8" }
      ],
      correctAnswer: "D",
      hint: "If the edge becomes 2s, the new volume is (2s)³. Expand this expression.",
      explanation: "If edge becomes 2s, volume = (2s)³ = 8s³ = 8 × original volume."
    },
    {
      id: 4,
      difficulty: "medium",
      question: "A cube has surface area 96 cm². What is its volume?",
      choices: [
        { id: "A", text: "16 cm³" },
        { id: "B", text: "64 cm³" },
        { id: "C", text: "96 cm³" },
        { id: "D", text: "216 cm³" }
      ],
      correctAnswer: "B",
      hint: "A cube has 6 faces. Find the area of one face first, then determine the edge length.",
      explanation: "Surface area = 6s² = 96, so s² = 16, s = 4. Volume = 4³ = 64 cm³."
    },
    {
      id: 5,
      difficulty: "hard",
      question: "How many small cubes of edge 2 cm fit inside a large cube of edge 8 cm?",
      choices: [
        { id: "A", text: "4" },
        { id: "B", text: "16" },
        { id: "C", text: "32" },
        { id: "D", text: "64" }
      ],
      correctAnswer: "D",
      hint: "Calculate the volume of each cube, then divide the large volume by the small volume.",
      explanation: "Large volume = 512 cm³. Small volume = 8 cm³. Count = 512/8 = 64."
    }
  ],

  // Section: Cylinder
  "Cylinder": [
    {
      id: 1,
      difficulty: "easy",
      question: "What is the volume of a cylinder with radius 3 and height 7? (Leave in terms of π)",
      choices: [
        { id: "A", text: "21π" },
        { id: "B", text: "42π" },
        { id: "C", text: "63π" },
        { id: "D", text: "147π" }
      ],
      correctAnswer: "C",
      hint: "Use V = πr²h. First square the radius, then multiply by the height.",
      explanation: "V = πr²h = π(3)²(7) = π(9)(7) = 63π."
    },
    {
      id: 2,
      difficulty: "easy",
      question: "A cylindrical tank has volume 200π m³ and radius 5 m. What is its height?",
      choices: [
        { id: "A", text: "4 m" },
        { id: "B", text: "8 m" },
        { id: "C", text: "20 m" },
        { id: "D", text: "40 m" }
      ],
      correctAnswer: "B",
      hint: "Rearrange V = πr²h to solve for h. Divide the volume by πr².",
      explanation: "V = πr²h → 200π = π(25)h → h = 200/25 = 8 m."
    },
    {
      id: 3,
      difficulty: "medium",
      question: "A cylinder has diameter 10 and height 12. What is its volume?",
      choices: [
        { id: "A", text: "120π" },
        { id: "B", text: "300π" },
        { id: "C", text: "600π" },
        { id: "D", text: "1200π" }
      ],
      correctAnswer: "B",
      hint: "Be careful! You're given the diameter, not the radius. The radius is half the diameter.",
      explanation: "Radius = 5. V = πr²h = π(25)(12) = 300π."
    },
    {
      id: 4,
      difficulty: "medium",
      question: "If a cylinder's radius is doubled and height is halved, the volume:",
      choices: [
        { id: "A", text: "Stays the same" },
        { id: "B", text: "Doubles" },
        { id: "C", text: "Quadruples" },
        { id: "D", text: "Is halved" }
      ],
      correctAnswer: "B",
      hint: "Radius is squared in the formula, so doubling it has a bigger effect. Work out π(2r)²(h/2).",
      explanation: "New V = π(2r)²(h/2) = π(4r²)(h/2) = 2πr²h = 2 × original."
    },
    {
      id: 5,
      difficulty: "hard",
      question: "A glass has radius 4 cm and is filled to height 10 cm. How much water does it hold?",
      choices: [
        { id: "A", text: "40π cm³" },
        { id: "B", text: "80π cm³" },
        { id: "C", text: "160π cm³" },
        { id: "D", text: "400π cm³" }
      ],
      correctAnswer: "C",
      hint: "The glass is cylindrical. Apply V = πr²h with the given radius and water height.",
      explanation: "V = πr²h = π(16)(10) = 160π cm³."
    }
  ],

  // Section: Sphere
  "Sphere": [
    {
      id: 1,
      difficulty: "easy",
      question: "What is the volume of a sphere with radius 3? (Leave in terms of π)",
      choices: [
        { id: "A", text: "12π" },
        { id: "B", text: "36π" },
        { id: "C", text: "108π" },
        { id: "D", text: "324π" }
      ],
      correctAnswer: "B",
      hint: "Use V = (4/3)πr³. Cube the radius first, then multiply by 4/3.",
      explanation: "V = (4/3)πr³ = (4/3)π(27) = 36π."
    },
    {
      id: 2,
      difficulty: "easy",
      question: "A sphere has volume 288π cm³. What is its radius?",
      choices: [
        { id: "A", text: "4 cm" },
        { id: "B", text: "6 cm" },
        { id: "C", text: "8 cm" },
        { id: "D", text: "12 cm" }
      ],
      correctAnswer: "B",
      hint: "Set up the equation (4/3)πr³ = 288π. Solve for r³ first, then take the cube root.",
      explanation: "(4/3)πr³ = 288π → r³ = 288 × (3/4) = 216 → r = 6 cm."
    },
    {
      id: 3,
      difficulty: "medium",
      question: "A sphere has diameter 10. What is its volume?",
      choices: [
        { id: "A", text: "(500/3)π" },
        { id: "B", text: "(250/3)π" },
        { id: "C", text: "500π" },
        { id: "D", text: "(1000/3)π" }
      ],
      correctAnswer: "A",
      hint: "The radius is half the diameter. Then use V = (4/3)πr³.",
      explanation: "Radius = 5. V = (4/3)π(125) = 500π/3."
    },
    {
      id: 4,
      difficulty: "medium",
      question: "If a sphere's radius is tripled, its volume is multiplied by:",
      choices: [
        { id: "A", text: "3" },
        { id: "B", text: "9" },
        { id: "C", text: "27" },
        { id: "D", text: "81" }
      ],
      correctAnswer: "C",
      hint: "Since V involves r³, think about what (3r)³ equals compared to r³.",
      explanation: "V ∝ r³. If r → 3r, then V → 27V."
    },
    {
      id: 5,
      difficulty: "hard",
      question: "A basketball has radius 12 cm. What is its volume rounded to the nearest cm³? (Use π ≈ 3.14)",
      choices: [
        { id: "A", text: "1,809 cm³" },
        { id: "B", text: "7,235 cm³" },
        { id: "C", text: "21,704 cm³" },
        { id: "D", text: "28,939 cm³" }
      ],
      correctAnswer: "B",
      hint: "Calculate (4/3) × 3.14 × 12³. Remember that 12³ = 1,728.",
      explanation: "V = (4/3)(3.14)(12³) = (4/3)(3.14)(1728) ≈ 7,235 cm³."
    }
  ],

  // Section: Cone
  "Cone": [
    {
      id: 1,
      difficulty: "easy",
      question: "What is the volume of a cone with radius 3 and height 4?",
      choices: [
        { id: "A", text: "12π" },
        { id: "B", text: "36π" },
        { id: "C", text: "4π" },
        { id: "D", text: "108π" }
      ],
      correctAnswer: "A",
      hint: "A cone's volume is one-third of a cylinder with the same base and height. Use V = (1/3)πr²h.",
      explanation: "V = (1/3)πr²h = (1/3)π(9)(4) = 12π."
    },
    {
      id: 2,
      difficulty: "easy",
      question: "A cone and cylinder have the same radius and height. The cone's volume is what fraction of the cylinder's?",
      choices: [
        { id: "A", text: "1/2" },
        { id: "B", text: "1/3" },
        { id: "C", text: "2/3" },
        { id: "D", text: "3/4" }
      ],
      correctAnswer: "B",
      hint: "Compare the cone formula (1/3)πr²h to the cylinder formula πr²h. What's the ratio?",
      explanation: "Cone V = (1/3)πr²h, Cylinder V = πr²h. Ratio = 1/3."
    },
    {
      id: 3,
      difficulty: "medium",
      question: "An ice cream cone has radius 2 cm and height 10 cm. What is its volume?",
      choices: [
        { id: "A", text: "(40/3)π cm³" },
        { id: "B", text: "40π cm³" },
        { id: "C", text: "20π cm³" },
        { id: "D", text: "(20/3)π cm³" }
      ],
      correctAnswer: "A",
      hint: "Apply V = (1/3)πr²h. Square the radius first, then multiply by height and 1/3.",
      explanation: "V = (1/3)πr²h = (1/3)π(4)(10) = 40π/3 cm³."
    },
    {
      id: 4,
      difficulty: "medium",
      question: "A cone has volume 24π and height 6. What is its radius?",
      choices: [
        { id: "A", text: "2" },
        { id: "B", text: "2√3" },
        { id: "C", text: "4" },
        { id: "D", text: "6" }
      ],
      correctAnswer: "B",
      hint: "Use V = (1/3)πr²h to solve for r². Then take the square root to find r.",
      explanation: "24π = (1/3)πr²(6) = 2πr² → r² = 12 → r = √12 = 2√3."
    },
    {
      id: 5,
      difficulty: "hard",
      question: "If a cone's dimensions are all doubled, its volume is multiplied by:",
      choices: [
        { id: "A", text: "2" },
        { id: "B", text: "4" },
        { id: "C", text: "6" },
        { id: "D", text: "8" }
      ],
      correctAnswer: "D",
      hint: "In V = (1/3)πr²h, the radius is squared and appears once, height appears once. Count the total power of the scale factor.",
      explanation: "V = (1/3)πr²h. With (2r) and (2h): V = (1/3)π(4r²)(2h) = 8 × original."
    }
  ],

  // Section: Triangular Prism
  "Triangular Prism": [
    {
      id: 1,
      difficulty: "easy",
      question: "A triangular prism has a triangular base with base 6 and height 4, and the prism's length is 10. What is the volume?",
      choices: [
        { id: "A", text: "60" },
        { id: "B", text: "120" },
        { id: "C", text: "240" },
        { id: "D", text: "480" }
      ],
      correctAnswer: "B",
      hint: "First find the triangular base area using (1/2) × base × height, then multiply by the prism's length.",
      explanation: "Triangle area = (1/2)(6)(4) = 12. Volume = Base area × length = 12 × 10 = 120."
    },
    {
      id: 2,
      difficulty: "easy",
      question: "A tent (triangular prism) has a triangular cross-section with legs 3 m and 4 m, and is 5 m long. What is its volume?",
      choices: [
        { id: "A", text: "30 m³" },
        { id: "B", text: "60 m³" },
        { id: "C", text: "120 m³" },
        { id: "D", text: "15 m³" }
      ],
      correctAnswer: "A",
      hint: "The cross-section is a right triangle. Find its area with (1/2) × leg × leg, then multiply by the tent's length.",
      explanation: "Right triangle area = (1/2)(3)(4) = 6 m². Volume = 6 × 5 = 30 m³."
    },
    {
      id: 3,
      difficulty: "medium",
      question: "A triangular prism has volume 90 cm³. If the triangular base has area 15 cm², what is the prism's length?",
      choices: [
        { id: "A", text: "3 cm" },
        { id: "B", text: "6 cm" },
        { id: "C", text: "75 cm" },
        { id: "D", text: "1,350 cm" }
      ],
      correctAnswer: "B",
      hint: "Since V = Base area × length, divide the volume by the base area to find the length.",
      explanation: "V = B × h → 90 = 15 × h → h = 6 cm."
    },
    {
      id: 4,
      difficulty: "medium",
      question: "An equilateral triangular prism has side 4 and length 9. What is its volume? (Equilateral triangle area = (s²√3)/4)",
      choices: [
        { id: "A", text: "36√3" },
        { id: "B", text: "18√3" },
        { id: "C", text: "9√3" },
        { id: "D", text: "72√3" }
      ],
      correctAnswer: "A",
      hint: "Use the given formula to find the equilateral triangle's area first. Then multiply by the prism's length.",
      explanation: "Triangle area = (16√3)/4 = 4√3. Volume = 4√3 × 9 = 36√3."
    },
    {
      id: 5,
      difficulty: "hard",
      question: "A ramp is a triangular prism. Its triangular face has base 8 ft and height 3 ft, and the ramp is 12 ft wide. What is its volume?",
      choices: [
        { id: "A", text: "72 ft³" },
        { id: "B", text: "144 ft³" },
        { id: "C", text: "288 ft³" },
        { id: "D", text: "36 ft³" }
      ],
      correctAnswer: "B",
      hint: "Calculate the triangular face area using (1/2) × base × height, then multiply by the ramp's width (which is the prism's length).",
      explanation: "Triangle area = (1/2)(8)(3) = 12 ft². Volume = 12 × 12 = 144 ft³."
    }
  ]
};
