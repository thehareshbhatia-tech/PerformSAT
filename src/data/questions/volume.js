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
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~10s):** Volume fills three dimensions, so its units are raised to the third power: cubic units like $\\text{cm}^3$ and $\\text{m}^3$.\n\n**The Full Solution:**\nStep 1: Match dimension to unit power. Length is one-dimensional, so linear units ($\\text{cm}, \\text{m}$). Area is two-dimensional, so square units ($\\text{cm}^2$).\nStep 2: Volume is three-dimensional: length $\\times$ width $\\times$ height multiplies three lengths, giving units to the third power.\nStep 3: A box $2 \\text{ cm} \\times 3 \\text{ cm} \\times 4 \\text{ cm}$ has volume $24 \\text{ cm}^3$ — cubic units, confirming choice C.\n\n**Why the wrong answers are tempting:**\n* Choice A: linear units measure one-dimensional length or perimeter, not enclosed space.\n* Choice B: square units measure two-dimensional area — confusing area with volume drops one dimension.\n* Choice D: every real measurement of space carries a unit; a unitless volume is meaningless.\n\n**Test Day Takeaway:** Count the dimensions: 1D gives linear units, 2D gives square units, 3D gives cubic units. Volume is always cubic.",
      skills: ['volume-scaling', 'volume-prism']
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
      explanation: "**Choice D is correct.**\n\n**The Fast Way (~10s):** Scaling every length by $k$ scales volume by $k^3$. Here $k=2$, so the volume is multiplied by $2^3=8$.\n\n**The Full Solution:**\nStep 1: Volume depends on three lengths, so a linear scale factor $k$ enters three times: $V_{\\text{new}}=k^3 \\cdot V_{\\text{original}}$.\nStep 2: Substitute $k=2$: $V_{\\text{new}}=2^3 \\cdot V_{\\text{original}}=8 \\cdot V_{\\text{original}}$.\nStep 3: Check with a unit cube: a $1 \\times 1 \\times 1$ cube has $V=1$; doubled to $2 \\times 2 \\times 2$ it has $V=8$. The ratio is $8$, matching choice D.\n\n**Why the wrong answers are tempting:**\n* Choice A ($2$): the scale factor itself — treats volume as if it scaled linearly.\n* Choice B ($4$): this is $k^2=4$, the factor for area, not volume.\n* Choice C ($6$): no relationship to the cube law; likely $2 \\times 3$ from the three dimensions.\n\n**Test Day Takeaway:** When all linear dimensions scale by $k$, area scales by $k^2$ and volume by $k^3$. Match the power to the number of dimensions.",
      skills: ['volume-scaling', 'volume-prism']
    },
    {
      id: 3,
      difficulty: "medium",
      question: "Which formula represents the volume of any prism?",
      choices: [
        { id: "A", text: "V = lwh" },
        { id: "B", text: "V = πr²h" },
        { id: "C", text: "V = Bh (base area × height)" },
        { id: "D", text: "V = ", fraction: { numerator: "1", denominator: "3" }, textAfter: "Bh" }
      ],
      correctAnswer: "C",
      hint: "A prism can have any polygon as its base. Look for the most general formula that works regardless of the base shape.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~10s):** Every prism, no matter the base shape, has volume $V=Bh$ — base area times perpendicular height. That is choice C.\n\n**The Full Solution:**\nStep 1: A prism has two congruent parallel bases joined by straight sides. The base may be any polygon.\nStep 2: Whatever the base, the volume is the base area $B$ times the perpendicular height $h$: $V=B \\cdot h$.\nStep 3: For a rectangular prism $B=lw$, so $V=lwh$ — a special case of $V=Bh$. For a triangular prism $B=\\frac{1}{2}bh_{\\triangle}$, again $V=Bh$. The general formula is choice C.\n\n**Why the wrong answers are tempting:**\n* Choice A: $V=lwh$ works only when the base is a rectangle; it fails for triangular or hexagonal prisms.\n* Choice B: $V=\\pi r^2 h$ is the cylinder formula, not a general polygonal-base prism.\n* Choice D: $V=\\frac{1}{3}Bh$ is for pyramids and cones, which taper to a point; prisms have no $\\frac{1}{3}$.\n\n**Test Day Takeaway:** $V=Bh$ is the master formula for prisms and cylinders. Pyramids and cones get the $\\frac{1}{3}$; prisms never do.",
      skills: ['volume-scaling', 'volume-prism']
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
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~10s):** One liter is $1{,}000 \\text{ cm}^3$, so $2$ liters is $2{,}000 \\text{ cm}^3$ — choice C.\n\n**The Full Solution:**\nStep 1: Use the conversion $1 \\text{ liter} = 1{,}000 \\text{ cm}^3$.\nStep 2: Multiply by $2$: $2 \\times 1{,}000 = 2{,}000 \\text{ cm}^3$.\nStep 3: Confirm the conversion: $1 \\text{ L} = 1 \\text{ dm}^3 = (10 \\text{ cm})^3 = 1{,}000 \\text{ cm}^3$, so $2 \\text{ L} = 2{,}000 \\text{ cm}^3$, matching choice C.\n\n**Why the wrong answers are tempting:**\n* Choice A ($2$): just relabels the number, ignoring the factor of $1{,}000$.\n* Choice B ($200$): uses a factor of $100$ instead of $1{,}000$.\n* Choice D ($20{,}000$): uses a factor of $10{,}000$ — an extra zero on the conversion.\n\n**Test Day Takeaway:** $1 \\text{ L} = 1{,}000 \\text{ cm}^3$ (equivalently $1 \\text{ mL} = 1 \\text{ cm}^3$). Lock this in for any metric volume problem.",
      skills: ['volume-scaling', 'volume-prism']
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
      explanation: "**Choice D is correct.**\n\n**The Fast Way (~15s):** Equal volume locks in only the enclosed space, not the shape, surface area, or dimensions. One counterexample kills A, B, and C, so the answer is \"none necessarily\" — choice D.\n\n**The Full Solution:**\nStep 1: Build two solids with the same volume. A $1 \\times 1 \\times 36$ box and a $2 \\times 3 \\times 6$ box both have $V=36$.\nStep 2: Compare their other properties: the dimensions differ, the shapes differ, and the surface areas differ ($146$ vs. $72$).\nStep 3: So equal volume forces none of \"same shape,\" \"same surface area,\" or \"same dimensions.\" Choice D is the only statement that holds.\n\n**Why the wrong answers are tempting:**\n* Choice A: a tall thin box and a short wide box can share a volume yet look nothing alike.\n* Choice B: surface area is independent of volume; among all shapes of a fixed volume the sphere alone minimizes surface area, so others differ.\n* Choice C: infinitely many length-width-height triples give the same product, e.g. $2 \\times 3 \\times 4$ and $1 \\times 4 \\times 6$ both equal $24$.\n\n**Test Day Takeaway:** To break a \"must be true\" claim, you only need one counterexample. Equal volume never guarantees any other geometric equality.",
      skills: ['volume-scaling', 'volume-prism']
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
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~10s):** Multiply all three dimensions: $5 \\times 3 \\times 4 = 60$ — choice C.\n\n**The Full Solution:**\nStep 1: A rectangular prism has volume $V=l \\times w \\times h$.\nStep 2: Substitute: $V=5 \\times 3 \\times 4$.\nStep 3: Multiply in stages: $5 \\times 3 = 15$, then $15 \\times 4 = 60$, matching choice C.\n\n**Why the wrong answers are tempting:**\n* Choice A ($12$): only $3 \\times 4$ — forgot to multiply by the length of $5$.\n* Choice B ($35$): $5 \\times 7$ from adding $3+4$ instead of multiplying all three dimensions.\n* Choice D ($94$): the surface area $2(lw+lh+wh)=2(15+20+12)=94$, not the volume.\n\n**Test Day Takeaway:** For a rectangular prism use $V=lwh$ — multiply all three edges. Surface area adds the faces; volume multiplies the edges.",
      skills: ['volume-prism']
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
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~10s):** Divide the volume by the product of the known edges: $h=\\frac{120}{10 \\times 4}=\\frac{120}{40}=3$ cm — choice A.\n\n**The Full Solution:**\nStep 1: Start from $V=l \\times w \\times h$ and substitute: $120 = 10 \\times 4 \\times h$.\nStep 2: Simplify the known product: $120 = 40h$.\nStep 3: Divide: $h=\\frac{120}{40}=3$ cm. Check: $10 \\times 4 \\times 3 = 120$, matching choice A.\n\n**Why the wrong answers are tempting:**\n* Choice B ($6$): divides by $20$ instead of $40$, using only part of the base.\n* Choice C ($12$): $\\frac{120}{10}$ — divides by the length only, forgetting the width.\n* Choice D ($30$): $\\frac{120}{4}$ — divides by the width only, forgetting the length.\n\n**Test Day Takeaway:** To find a missing edge, isolate it: $h=\\frac{V}{l \\times w}$. Always divide by the product of the other two dimensions.",
      skills: ['volume-prism']
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
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~20s):** Convert gallons to cubic feet, then divide by the base area: $\\frac{1{,}000 \\times 0.134}{10 \\times 5}=\\frac{134}{50}=2.68$ ft — choice B.\n\n**The Full Solution:**\nStep 1: Convert the volume: $1{,}000 \\times 0.134 = 134 \\text{ ft}^3$.\nStep 2: Find the base area: $10 \\times 5 = 50 \\text{ ft}^2$.\nStep 3: Solve $V=B \\times h$ for depth: $h=\\frac{134}{50}=2.68$ ft. Check: $50 \\times 2.68 = 134 \\text{ ft}^3$, matching choice B.\n\n**Why the wrong answers are tempting:**\n* Choice A ($2$): rounds or skips the conversion, dividing by an incorrect product.\n* Choice C ($20$): $\\frac{1{,}000}{50}$ — divides gallons by area without converting to cubic feet first.\n* Choice D ($134$): the volume in cubic feet, but never divided by the base area to get depth.\n\n**Test Day Takeaway:** In multi-step volume problems, convert to consistent units first, then apply $V=Bh$. Finish the conversion before you divide.",
      skills: ['volume-prism']
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
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~10s):** In $V=lwh$ each dimension enters once. Scaling one edge by $3$ multiplies the volume by $3$ — it triples. That is choice A.\n\n**The Full Solution:**\nStep 1: Write the original volume: $V_{\\text{original}}=l \\cdot w \\cdot h$.\nStep 2: Triple the length only: $V_{\\text{new}}=3l \\cdot w \\cdot h = 3(lwh)=3 \\cdot V_{\\text{original}}$.\nStep 3: The ratio is $\\frac{V_{\\text{new}}}{V_{\\text{original}}}=3$. Check: a $2 \\times 3 \\times 4$ box ($V=24$) becomes $6 \\times 3 \\times 4 = 72 = 3 \\times 24$, matching choice A.\n\n**Why the wrong answers are tempting:**\n* Choice B (\"increases by $3$\"): describes adding $3$; volume scaling is multiplicative, not additive.\n* Choice C (factor $9$): $3^2$ would apply if two dimensions were tripled — only one changes here.\n* Choice D (factor $27$): $3^3$ applies when all three dimensions triple, not one.\n\n**Test Day Takeaway:** If $k$ of the dimensions each scale by $s$, the volume scales by $s^k$. One tripled edge means $3^1=3$.",
      skills: ['volume-prism']
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
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~15s):** Divide volumes: $\\frac{12 \\times 10 \\times 8}{2 \\times 2 \\times 2}=\\frac{960}{8}=120$ boxes — choice B.\n\n**The Full Solution:**\nStep 1: Storage unit volume: $12 \\times 10 \\times 8 = 960 \\text{ ft}^3$.\nStep 2: One box: $2 \\times 2 \\times 2 = 8 \\text{ ft}^3$.\nStep 3: Divide: $\\frac{960}{8}=120$. Confirm dimension-by-dimension: $\\frac{12}{2}=6$ long, $\\frac{10}{2}=5$ wide, $\\frac{8}{2}=4$ tall, so $6 \\times 5 \\times 4 = 120$, matching choice B.\n\n**Why the wrong answers are tempting:**\n* Choice A ($60$): divides by $16$ — cubing $2$ as $2 \\times 2 \\times 2 = 16$ by mistake, then $\\frac{960}{16}$.\n* Choice C ($240$): divides by $4=2^2$, using the box's face area instead of its volume.\n* Choice D ($960$): the unit's volume in cubic feet, skipping the division by box volume.\n\n**Test Day Takeaway:** For perfect-fit packing, count $=\\frac{V_{\\text{large}}}{V_{\\text{small}}}$, valid when each edge divides evenly. The $6 \\times 5 \\times 4$ check confirms no gaps.",
      skills: ['volume-prism']
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
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~10s):** A cube's volume is the edge cubed: $4^3=64$ — choice C.\n\n**The Full Solution:**\nStep 1: A cube has all edges equal, so $V=s^3$.\nStep 2: Substitute $s=4$: $V=4^3=4 \\times 4 \\times 4$.\nStep 3: Compute: $4 \\times 4 = 16$, then $16 \\times 4 = 64$, matching choice C.\n\n**Why the wrong answers are tempting:**\n* Choice A ($12$): $4 \\times 3$ — multiplies the edge by the number of dimensions instead of cubing.\n* Choice B ($16$): $4^2$ — squares the edge, giving the area of one face, not the volume.\n* Choice D ($96$): $6 \\times 4^2 = 6s^2$ — the surface area, not the volume.\n\n**Test Day Takeaway:** For a cube, $V=s^3$. Watch the power: $s^2$ is a face area and $6s^2$ is surface area, but volume is $s^3$.",
      skills: ['volume-prism', 'volume-scaling']
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
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~10s):** Edge length reverses $V=s^3$ with a cube root: $s=\\sqrt[3]{125}=5$ cm — choice A.\n\n**The Full Solution:**\nStep 1: Start from $V=s^3$, so $125=s^3$.\nStep 2: Take the cube root of both sides: $s=\\sqrt[3]{125}$.\nStep 3: Since $5^3=125$, the edge is $s=5$ cm, matching choice A.\n\n**Why the wrong answers are tempting:**\n* Choice B ($25$): $\\frac{125}{5}$ — divides by $5$ instead of taking the cube root.\n* Choice C ($41.67$): $\\frac{125}{3}$ — divides by the exponent $3$ rather than taking a cube root.\n* Choice D ($\\sqrt{125}$): the square root undoes $s^2$, but volume uses $s^3$, so you need the cube root.\n\n**Test Day Takeaway:** Undo $V=s^3$ with $s=\\sqrt[3]{V}$. Know the perfect cubes — $1, 8, 27, 64, 125, 216, \\ldots$ — to spot the answer fast.",
      skills: ['volume-prism', 'volume-scaling']
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
      explanation: "**Choice D is correct.**\n\n**The Fast Way (~10s):** Volume scales by the cube of the linear scale factor. Doubling the edge means the volume is multiplied by $2^3 = 8$.\n\n**The Full Solution:**\nStep 1: Let the edge be $s$, so $V = s^3$.\nStep 2: Double the edge: the new volume is $(2s)^3 = 2^3 s^3 = 8s^3$.\nStep 3: The ratio is $\\frac{8s^3}{s^3} = 8$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($2$): used the scale factor once, as if volume scaled linearly.\n* Choice B ($4$): used $2^2$, the factor for area, not volume.\n* Choice C ($6$): multiplied $2 \\times 3$ (scale factor times dimensions) instead of raising $2$ to the power of $3$.\n\n**Test Day Takeaway:** When every linear dimension scales by $k$, area scales by $k^2$ and volume by $k^3$.",
      skills: ['volume-prism', 'volume-scaling']
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
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~20s):** A cube's surface area is $6s^2$, so $6s^2 = 96 \\Rightarrow s^2 = 16 \\Rightarrow s = 4$. Then $V = 4^3 = 64$ cm$^3$.\n\n**The Full Solution:**\nStep 1: A cube has six identical square faces, so $SA = 6s^2 = 96$.\nStep 2: Divide by $6$: $s^2 = 16$, so $s = 4$ cm.\nStep 3: Volume is $V = s^3 = 4^3 = 64$ cm$^3$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($16$ cm$^3$): stopped at $s^2 = 16$, the area of one face, instead of cubing.\n* Choice C ($96$ cm$^3$): restated the given surface area without computing volume.\n* Choice D ($216$ cm$^3$): used $s = 6$ instead of $s = 4$, since $6^3 = 216$.\n\n**Test Day Takeaway:** Surface-area-to-volume problems chain two formulas: first $s = \\sqrt{\\frac{SA}{6}}$, then $V = s^3$.",
      skills: ['volume-prism', 'volume-scaling']
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
      explanation: "**Choice D is correct.**\n\n**The Fast Way (~10s):** Along each edge, $\\frac{8}{2} = 4$ small cubes fit, so the count is $4^3 = 64$.\n\n**The Full Solution:**\nStep 1: The large cube has volume $8^3 = 512$ cm$^3$; each small cube has volume $2^3 = 8$ cm$^3$.\nStep 2: Divide: $\\frac{512}{8} = 64$.\nStep 3: Check by dimension: $4 \\times 4 \\times 4 = 64$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($4$): counted small cubes along one edge only.\n* Choice B ($16$): used $4^2$, covering two dimensions instead of three.\n* Choice C ($32$): an arithmetic slip such as $4 \\times 8$ rather than the full volume ratio.\n\n**Test Day Takeaway:** The number of small cubes filling a larger cube is $\\left(\\frac{L}{s}\\right)^3$ — the linear ratio, cubed.",
      skills: ['volume-prism', 'volume-scaling']
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
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~10s):** $V = \\pi r^2 h = \\pi (3)^2 (7) = 63\\pi$.\n\n**The Full Solution:**\nStep 1: The cylinder volume formula is $V = \\pi r^2 h$.\nStep 2: Substitute $r = 3$, $h = 7$: $V = \\pi (9)(7) = 63\\pi$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($21\\pi$): used $\\pi r h$, forgetting to square the radius.\n* Choice B ($42\\pi$): computed $2\\pi r h$, the lateral surface area, not the volume.\n* Choice D ($147\\pi$): squared the height instead of the radius, giving $\\pi (3)(7^2)$.\n\n**Test Day Takeaway:** In $V = \\pi r^2 h$ only the radius is squared; the height is to the first power.",
      skills: ['volume-prism']
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
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~15s):** Cancel $\\pi$ first: $200 = 25h$, so $h = 8$ m.\n\n**The Full Solution:**\nStep 1: Start from $V = \\pi r^2 h$, so $200\\pi = \\pi (5)^2 h$.\nStep 2: Divide both sides by $\\pi$: $200 = 25h$.\nStep 3: Solve: $h = \\frac{200}{25} = 8$ m.\n\n**Why the wrong answers are tempting:**\n* Choice A ($4$ m): divided by $2r^2 = 50$ instead of $r^2 = 25$.\n* Choice C ($20$ m): divided by the diameter $2r = 10$ instead of $r^2$.\n* Choice D ($40$ m): divided by the radius $r = 5$ without squaring it.\n\n**Test Day Takeaway:** To isolate $h$, rearrange to $h = \\frac{V}{\\pi r^2}$ — cancel $\\pi$, then divide by $r^2$.",
      skills: ['volume-prism']
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
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~15s):** Halve the diameter first: $r = 5$. Then $V = \\pi (5)^2 (12) = 300\\pi$.\n\n**The Full Solution:**\nStep 1: Convert diameter to radius: $r = \\frac{d}{2} = \\frac{10}{2} = 5$.\nStep 2: Apply $V = \\pi r^2 h = \\pi (25)(12) = 300\\pi$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($120\\pi$): used the diameter as the radius and skipped squaring, giving $\\pi (10)(12)$.\n* Choice C ($600\\pi$): squared the diameter then halved, a confused fix-up.\n* Choice D ($1200\\pi$): used $r = 10$ (the diameter), so the answer is exactly $4\\times$ too large.\n\n**Test Day Takeaway:** When a problem gives the diameter, halve it before squaring; using $d$ for $r$ inflates a cylinder volume by $4\\times$.",
      skills: ['volume-prism']
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
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~15s):** Multiply the scale factors, respecting the exponent on $r$: $(2)^2 \\times \\frac{1}{2} = 4 \\times \\frac{1}{2} = 2$. The volume doubles.\n\n**The Full Solution:**\nStep 1: Start from $V = \\pi r^2 h$.\nStep 2: Apply $r \\to 2r$ and $h \\to \\frac{h}{2}$: $V_{\\text{new}} = \\pi (2r)^2 \\left(\\frac{h}{2}\\right) = \\pi (4r^2)\\left(\\frac{h}{2}\\right) = 2\\pi r^2 h$.\nStep 3: The ratio is $\\frac{2\\pi r^2 h}{\\pi r^2 h} = 2$.\n\n**Why the wrong answers are tempting:**\n* Choice A (Stays the same): assumed doubling and halving cancel, but the radius is squared, so $2^2 \\cdot \\frac{1}{2} = 2 \\neq 1$.\n* Choice C (Quadruples): counted the $r^2$ factor of $4$ but ignored the halved height.\n* Choice D (Is halved): would hold only if the radius were unchanged.\n\n**Test Day Takeaway:** Square each linear factor before combining: a squared dimension changes volume more strongly than a first-power one.",
      skills: ['volume-prism']
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
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~10s):** Model the glass as a cylinder: $V = \\pi (4)^2 (10) = 160\\pi$ cm$^3$.\n\n**The Full Solution:**\nStep 1: Use $V = \\pi r^2 h$ with $r = 4$ cm and $h = 10$ cm (the water height).\nStep 2: $V = \\pi (16)(10) = 160\\pi$ cm$^3$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($40\\pi$ cm$^3$): used $\\pi r h$, forgetting to square the radius.\n* Choice B ($80\\pi$ cm$^3$): computed $2\\pi r h$, the lateral surface area, not the volume.\n* Choice D ($400\\pi$ cm$^3$): used the diameter $d = 8$ in place of the radius, overshooting the result.\n\n**Test Day Takeaway:** Real-world cylinders (glasses, cans, tanks) use $V = \\pi r^2 h$; the fill height is $h$, not the full container height.",
      skills: ['volume-prism']
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
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~10s):** $V = \\frac{4}{3}\\pi r^3 = \\frac{4}{3}\\pi (3)^3 = \\frac{4}{3}\\pi (27) = 36\\pi$.\n\n**The Full Solution:**\nStep 1: The sphere volume formula is $V = \\frac{4}{3}\\pi r^3$.\nStep 2: Substitute $r = 3$: $V = \\frac{4}{3}\\pi (27) = \\frac{108\\pi}{3} = 36\\pi$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($12\\pi$): squared the radius instead of cubing, giving $\\frac{4}{3}\\pi (9) = 12\\pi$.\n* Choice C ($108\\pi$): used $4\\pi r^3$ and forgot to divide by $3$.\n* Choice D ($324\\pi$): raised the radius to the 4th power, $4\\pi (81)$.\n\n**Test Day Takeaway:** $V = \\frac{4}{3}\\pi r^3$ — cube the radius and keep the full $\\frac{4}{3}$ coefficient, the most commonly dropped piece.",
      skills: ['volume-sphere']
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
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~20s):** $\\frac{4}{3}\\pi r^3 = 288\\pi \\Rightarrow r^3 = 288 \\cdot \\frac{3}{4} = 216 \\Rightarrow r = \\sqrt[3]{216} = 6$ cm.\n\n**The Full Solution:**\nStep 1: Set $\\frac{4}{3}\\pi r^3 = 288\\pi$ and cancel $\\pi$: $\\frac{4}{3}r^3 = 288$.\nStep 2: Multiply by $\\frac{3}{4}$: $r^3 = 288 \\times \\frac{3}{4} = 216$.\nStep 3: Cube root: $r = \\sqrt[3]{216} = 6$ cm.\n\n**Why the wrong answers are tempting:**\n* Choice A ($4$ cm): $\\frac{4}{3}\\pi (4)^3 = \\frac{256\\pi}{3} \\neq 288\\pi$ — too small.\n* Choice C ($8$ cm): a cube-root slip; $8^3 = 512$, which is far too large.\n* Choice D ($12$ cm): skipped the $\\frac{4}{3}$ step, mishandling the coefficient.\n\n**Test Day Takeaway:** Solving a sphere for $r$ is $r = \\sqrt[3]{\\frac{3V}{4\\pi}}$ — multiply by $\\frac{3}{4}$ to clear $\\frac{4}{3}$, then take the cube root.",
      skills: ['volume-sphere']
    },
    {
      id: 3,
      difficulty: "medium",
      question: "A sphere has diameter 10. What is its volume?",
      choices: [
        { id: "A", fraction: { numerator: "500", denominator: "3" }, textAfter: "π" },
        { id: "B", fraction: { numerator: "250", denominator: "3" }, textAfter: "π" },
        { id: "C", text: "500π" },
        { id: "D", fraction: { numerator: "1000", denominator: "3" }, textAfter: "π" }
      ],
      correctAnswer: "A",
      hint: "The radius is half the diameter. Then use V = (4/3)πr³.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~15s):** Halve the diameter: $r = 5$. Then $V = \\frac{4}{3}\\pi (5)^3 = \\frac{4}{3}\\pi (125) = \\frac{500}{3}\\pi$.\n\n**The Full Solution:**\nStep 1: Convert diameter to radius: $r = \\frac{10}{2} = 5$.\nStep 2: Apply $V = \\frac{4}{3}\\pi r^3 = \\frac{4}{3}\\pi (125) = \\frac{500}{3}\\pi$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\frac{250}{3}\\pi$): used $\\frac{2}{3}$ (the hemisphere coefficient) instead of $\\frac{4}{3}$.\n* Choice C ($500\\pi$): used $4\\pi r^3$ and forgot to divide by $3$.\n* Choice D ($\\frac{1000}{3}\\pi$): used $r = 10$, the diameter, instead of $r = 5$.\n\n**Test Day Takeaway:** Two traps live here: convert diameter to radius first, and keep the full $\\frac{4}{3}$ coefficient.",
      skills: ['volume-sphere']
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
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~10s):** Sphere volume depends on $r^3$, so tripling the radius multiplies the volume by $3^3 = 27$.\n\n**The Full Solution:**\nStep 1: From $V = \\frac{4}{3}\\pi r^3$, replace $r$ with $3r$: $V_{\\text{new}} = \\frac{4}{3}\\pi (3r)^3 = \\frac{4}{3}\\pi (27r^3) = 27 \\cdot \\frac{4}{3}\\pi r^3$.\nStep 2: The ratio is $\\frac{V_{\\text{new}}}{V_{\\text{original}}} = 27$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($3$): used the linear scale factor only, ignoring the cubic relationship.\n* Choice B ($9$): used $3^2$, the factor for surface area, not volume.\n* Choice D ($81$): used $3^4$, one power too many.\n\n**Test Day Takeaway:** Scaling the radius by $k$ scales volume by $k^3$; the $\\frac{4}{3}\\pi$ coefficient cancels in the ratio.",
      skills: ['volume-sphere']
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
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~25s):** Use $V=\\frac{4}{3}\\pi r^3$. Cube $12$ to get $1{,}728$, take $\\frac{4}{3}$ of it to get $2{,}304$, then multiply by $3.14$: about $7{,}235$ cm$^3$.\n\n**The Full Solution:**\nStep 1: Cube the radius: $12^3 = 1{,}728$.\nStep 2: Multiply by $\\frac{4}{3}$: $\\frac{4}{3}\\times 1{,}728 = \\frac{6{,}912}{3} = 2{,}304$.\nStep 3: Multiply by $\\pi \\approx 3.14$: $2{,}304 \\times 3.14 = 7{,}234.56 \\approx 7{,}235$ cm$^3$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($1{,}809$): that is the surface area $4\\pi r^2 = 4(3.14)(144) \\approx 1{,}809$, not the volume.\n* Choice C ($21{,}704$): dropped the $\\frac{1}{3}$ and used $4\\pi r^3 = 4(3.14)(1{,}728) \\approx 21{,}704$ — exactly $3\\times$ the correct value.\n* Choice D ($28{,}939$): scaled the volume by an extra factor (about $4\\times$ the answer), a sign the radius/diameter or the $\\frac{4}{3}$ coefficient was misused.\n\n**Test Day Takeaway:** For a sphere, $V=\\frac{4}{3}\\pi r^3$. Compute $r^3$ first, then apply $\\frac{4}{3}$, then multiply by $\\pi$ — and round only at the very end.",
      skills: ['volume-sphere']
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
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~15s):** $V=\\frac{1}{3}\\pi r^2 h = \\frac{1}{3}\\pi(9)(4) = 12\\pi$.\n\n**The Full Solution:**\nStep 1: Write the cone formula: $V = \\frac{1}{3}\\pi r^2 h$.\nStep 2: Substitute $r=3$, $h=4$: $V = \\frac{1}{3}\\pi(3)^2(4) = \\frac{1}{3}\\pi(9)(4) = \\frac{36\\pi}{3} = 12\\pi$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($36\\pi$): computed $\\pi r^2 h$ (the cylinder volume) and forgot the $\\frac{1}{3}$ cone factor.\n* Choice C ($4\\pi$): used $r$ instead of $r^2$: $\\frac{1}{3}\\pi(3)(4) = 4\\pi$.\n* Choice D ($108\\pi$): cubed the radius instead of squaring it, $\\pi(27)(4)$ — borrowing the sphere's $r^3$ by mistake.\n\n**Test Day Takeaway:** A cone is exactly $\\frac{1}{3}$ of the cylinder with the same base and height: $V_{\\text{cone}}=\\frac{1}{3}\\pi r^2 h$. Compute the cylinder part first, then divide by $3$.",
      skills: ['volume-pyramid-cone']
    },
    {
      id: 2,
      difficulty: "easy",
      question: "A cone and cylinder have the same radius and height. The cone's volume is what fraction of the cylinder's?",
      choices: [
        { id: "A", fraction: { numerator: "1", denominator: "2" } },
        { id: "B", fraction: { numerator: "1", denominator: "3" } },
        { id: "C", fraction: { numerator: "2", denominator: "3" } },
        { id: "D", fraction: { numerator: "3", denominator: "4" } }
      ],
      correctAnswer: "B",
      hint: "Compare the cone formula (1/3)πr²h to the cylinder formula πr²h. What's the ratio?",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~10s):** The cone formula carries the $\\frac{1}{3}$ that the cylinder formula lacks, so the cone is $\\frac{1}{3}$ of the cylinder.\n\n**The Full Solution:**\nStep 1: Write both formulas: $V_{\\text{cone}}=\\frac{1}{3}\\pi r^2 h$ and $V_{\\text{cylinder}}=\\pi r^2 h$.\nStep 2: Take the ratio: $\\frac{V_{\\text{cone}}}{V_{\\text{cylinder}}} = \\frac{\\frac{1}{3}\\pi r^2 h}{\\pi r^2 h} = \\frac{1}{3}$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{1}{2}$): that is the triangle-to-rectangle area ratio (2D), not the cone-to-cylinder volume ratio (3D).\n* Choice C ($\\frac{2}{3}$): the empty part of the cylinder, $1-\\frac{1}{3}=\\frac{2}{3}$, not the cone's share.\n* Choice D ($\\frac{3}{4}$): no relation to this ratio; likely confused with the $\\frac{4}{3}$ in the sphere formula.\n\n**Test Day Takeaway:** Any shape that tapers to a point is $\\frac{1}{3}$ of its prism counterpart: cone $=\\frac{1}{3}$ cylinder, pyramid $=\\frac{1}{3}$ prism.",
      skills: ['volume-pyramid-cone']
    },
    {
      id: 3,
      difficulty: "medium",
      question: "An ice cream cone has radius 2 cm and height 10 cm. What is its volume?",
      choices: [
        { id: "A", fraction: { numerator: "40", denominator: "3" }, textAfter: "π cm³" },
        { id: "B", text: "40π cm³" },
        { id: "C", text: "20π cm³" },
        { id: "D", fraction: { numerator: "20", denominator: "3" }, textAfter: "π cm³" }
      ],
      correctAnswer: "A",
      hint: "Apply V = (1/3)πr²h. Square the radius first, then multiply by height and 1/3.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~15s):** $V=\\frac{1}{3}\\pi r^2 h = \\frac{1}{3}\\pi(4)(10) = \\frac{40}{3}\\pi$ cm$^3$.\n\n**The Full Solution:**\nStep 1: Write the cone formula: $V = \\frac{1}{3}\\pi r^2 h$.\nStep 2: Substitute $r=2$, $h=10$: $V = \\frac{1}{3}\\pi(2)^2(10) = \\frac{1}{3}\\pi(4)(10) = \\frac{40\\pi}{3}$ cm$^3$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($40\\pi$): computed $\\pi r^2 h$ and dropped the $\\frac{1}{3}$ — exactly $3\\times$ the correct value.\n* Choice C ($20\\pi$): used $\\pi r h$, forgetting both to square the radius and to apply the $\\frac{1}{3}$.\n* Choice D ($\\frac{20}{3}\\pi$): kept the $\\frac{1}{3}$ but used $r$ instead of $r^2$.\n\n**Test Day Takeaway:** $V_{\\text{cone}}=\\frac{1}{3}\\pi r^2 h$. When the result is a non-whole fraction like $\\frac{40}{3}\\pi$, leave it exact and match the answer choices' form.",
      skills: ['volume-pyramid-cone']
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
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~25s):** Plug into $\\frac{1}{3}\\pi r^2 h = 24\\pi$ with $h=6$: $2\\pi r^2 = 24\\pi$, so $r^2=12$ and $r=2\\sqrt{3}$.\n\n**The Full Solution:**\nStep 1: Set up the equation: $\\frac{1}{3}\\pi r^2 (6) = 24\\pi$.\nStep 2: Simplify the left side: $2\\pi r^2 = 24\\pi$.\nStep 3: Divide by $2\\pi$: $r^2 = 12$.\nStep 4: Take the square root and simplify: $r = \\sqrt{12} = \\sqrt{4\\cdot 3} = 2\\sqrt{3}$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($2$): gives $V=\\frac{1}{3}\\pi(4)(6)=8\\pi$, not $24\\pi$.\n* Choice C ($4$): treats $r^2=12$ as if $r=\\sqrt{16}=4$; checking gives $V=32\\pi$, not $24\\pi$.\n* Choice D ($6$): restates the height as the radius instead of solving.\n\n**Test Day Takeaway:** To solve for a radius, isolate $r^2$ first, then take the square root and simplify the radical fully: $\\sqrt{12}=2\\sqrt{3}$.",
      skills: ['volume-pyramid-cone']
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
      explanation: "**Choice D is correct.**\n\n**The Fast Way (~15s):** Volume scales by the cube of the linear factor. Doubling every dimension multiplies volume by $2^3 = 8$.\n\n**The Full Solution:**\nStep 1: Original volume: $V_{\\text{original}} = \\frac{1}{3}\\pi r^2 h$.\nStep 2: Double every dimension ($r\\to 2r$, $h\\to 2h$): $V_{\\text{new}} = \\frac{1}{3}\\pi(2r)^2(2h) = \\frac{1}{3}\\pi(4r^2)(2h) = \\frac{8}{3}\\pi r^2 h$.\nStep 3: Ratio: $\\frac{V_{\\text{new}}}{V_{\\text{original}}} = 8$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($2$): applied the scale factor once ($2^1$), as if volume were one-dimensional.\n* Choice B ($4$): caught the squared radius ($2^2$) but forgot the height also doubles.\n* Choice C ($6$): added the effects ($4+2$) instead of multiplying them ($4\\times 2 = 8$).\n\n**Test Day Takeaway:** Scaling every length by $k$ multiplies volume by $k^3$, for any solid. The $\\frac{1}{3}$ coefficient cancels in the ratio and does not affect scaling.",
      skills: ['volume-pyramid-cone']
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
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~15s):** Triangular base area $=\\frac{1}{2}(6)(4)=12$, times the length $10$ gives $V=120$.\n\n**The Full Solution:**\nStep 1: Area of the triangular base: $B = \\frac{1}{2}\\times 6 \\times 4 = 12$.\nStep 2: Multiply by the prism length: $V = B \\times l = 12 \\times 10 = 120$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($60$): half of the correct volume — the $\\frac{1}{2}$ triangle factor was applied a second time.\n* Choice C ($240$): multiplied all three numbers, $6\\times 4\\times 10$, treating the base as a rectangle and dropping the $\\frac{1}{2}$.\n* Choice D ($480$): the rectangular-box value doubled instead of halved.\n\n**Test Day Takeaway:** A prism's volume is (base area) $\\times$ length. For a triangular base, find $\\frac{1}{2}bh$ as its own step before multiplying by the length.",
      skills: ['volume-prism']
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
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~15s):** The legs $3$ and $4$ are the base and height of the right triangle: area $=\\frac{1}{2}(3)(4)=6$, times length $5$ gives $30$ m$^3$.\n\n**The Full Solution:**\nStep 1: Area of the right-triangle cross-section: $B = \\frac{1}{2}\\times 3 \\times 4 = 6$ m$^2$.\nStep 2: Multiply by the length: $V = B \\times l = 6 \\times 5 = 30$ m$^3$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($60$): multiplied $3\\times 4\\times 5$ without the $\\frac{1}{2}$, treating the tent as a rectangular box.\n* Choice C ($120$): the rectangular-box value doubled, compounding the dropped $\\frac{1}{2}$ with an extra $\\times 2$.\n* Choice D ($15$): used only one leg times the length, $3\\times 5$, leaving out the other leg.\n\n**Test Day Takeaway:** In a right triangle the two legs are the base and height, so the area is $\\frac{1}{2}(\\text{leg}_1)(\\text{leg}_2)$. Then $V = B \\times l$.",
      skills: ['volume-prism']
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
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~10s):** $V = B \\times l$, so $l = \\frac{V}{B} = \\frac{90}{15} = 6$ cm.\n\n**The Full Solution:**\nStep 1: Prism volume formula: $V = B \\times l$.\nStep 2: Solve for length: $l = \\frac{V}{B} = \\frac{90}{15} = 6$ cm. Check: $15 \\times 6 = 90$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($3$): divided by $30$, as if the base area were doubled to $30$ before dividing.\n* Choice C ($75$): subtracted, $90-15$, using an additive operation where division is needed.\n* Choice D ($1{,}350$): multiplied, $90\\times 15$, instead of dividing.\n\n**Test Day Takeaway:** $V = B \\times l$ for every prism. When the base area is given, just divide: $l = \\frac{V}{B}$, then verify $B\\times l = V$.",
      skills: ['volume-prism']
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
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~20s):** Equilateral base area $=\\frac{s^2\\sqrt{3}}{4}=\\frac{16\\sqrt{3}}{4}=4\\sqrt{3}$, times length $9$ gives $V=36\\sqrt{3}$.\n\n**The Full Solution:**\nStep 1: Base area from the given formula: $B = \\frac{s^2\\sqrt{3}}{4} = \\frac{(4)^2\\sqrt{3}}{4} = \\frac{16\\sqrt{3}}{4} = 4\\sqrt{3}$.\nStep 2: Multiply by the prism length: $V = B \\times l = 4\\sqrt{3}\\times 9 = 36\\sqrt{3}$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($18\\sqrt{3}$): half the correct value — an extra $\\frac{1}{2}$ slipped in on top of the complete equilateral-area formula.\n* Choice C ($9\\sqrt{3}$): the correct answer divided by $4$, a leftover-denominator error.\n* Choice D ($72\\sqrt{3}$): double the correct value, as from using $\\frac{s^2\\sqrt{3}}{2}$ (denominator $2$ instead of $4$).\n\n**Test Day Takeaway:** Use the supplied equilateral-area formula $B=\\frac{s^2\\sqrt{3}}{4}$ to get the base, then $V = B \\times l$. Carry the $\\sqrt{3}$ symbolically.",
      skills: ['volume-prism']
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
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~15s):** Triangular face area $=\\frac{1}{2}(8)(3)=12$, times the width $12$ gives $V=144$ ft$^3$.\n\n**The Full Solution:**\nStep 1: Area of the triangular face: $B = \\frac{1}{2}\\times 8 \\times 3 = 12$ ft$^2$.\nStep 2: Multiply by the width (the prism length): $V = B \\times w = 12 \\times 12 = 144$ ft$^3$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($72$): half the correct volume — the $\\frac{1}{2}$ was applied once for the triangle and then again to the final volume.\n* Choice C ($288$): multiplied $8\\times 3\\times 12$ without the $\\frac{1}{2}$, giving a rectangular box instead of a prism with a triangular face.\n* Choice D ($36$): multiplied the face area by the height $3$ again instead of by the width $12$.\n\n**Test Day Takeaway:** For a real-world triangular prism, find the triangular face area $\\frac{1}{2}bh$, then multiply by the depth/width it extends through: $V = \\frac{1}{2}bh \\times l$.",
      skills: ['volume-prism']
    }
  ]
};
