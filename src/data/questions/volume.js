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
      explanation: "**Choice C is correct.** Volume measures three-dimensional space, so it is always expressed in cubic units.\n\n**Step 1:** Recall that dimensions determine the type of unit:\n- Length (1D) $\\rightarrow$ linear units: $\\text{cm, m, ft}$\n- Area (2D) $\\rightarrow$ square units: $\\text{cm}^2, \\text{m}^2$\n- Volume (3D) $\\rightarrow$ cubic units: $\\text{cm}^3, \\text{m}^3$\n\n**Step 2:** Volume measures how much space an object occupies in all three dimensions (length $\\times$ width $\\times$ height), which produces units raised to the third power.\n\n**Verification:** A box that is $2 \\text{ cm} \\times 3 \\text{ cm} \\times 4 \\text{ cm}$ has volume $24 \\text{ cm}^3$, confirming cubic units.\n\n**Why other choices are incorrect:**\n- Choice A: [TRAP: reversed_operation] Linear units measure one-dimensional quantities like distance or perimeter, not the three-dimensional space that volume quantifies.\n- Choice B: [TRAP: partial_calculation] Square units measure two-dimensional quantities like area. Students who confuse area with volume often select this, but volume requires one additional dimension.\n- Choice D: [TRAP: arithmetic_slip] All physical measurements of space have units. A \"unitless\" volume would be meaningless in any real-world or SAT context.\n\n**Key concept:** Volume always carries cubic units because $V = \\text{length} \\times \\text{width} \\times \\text{height}$, and multiplying three length dimensions gives $\\text{unit}^3$.\n\n**Calculator tip:** On the SAT, always check that your final answer includes the correct unit exponent. If the problem gives dimensions in cm, your volume must be in $\\text{cm}^3$.",
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
      explanation: "**Choice D is correct.** When every linear dimension of a 3D shape is multiplied by a scale factor $k$, the volume is multiplied by $k^3$.\n\n**Step 1:** Let the scale factor be $k = 2$. Volume scales as the cube of the linear scale factor:\n$$V_{\\text{new}} = k^3 \\cdot V_{\\text{original}}$$\n\n**Step 2:** Substitute $k = 2$:\n$$V_{\\text{new}} = 2^3 \\cdot V_{\\text{original}} = 8 \\cdot V_{\\text{original}}$$\n\n**Verification:** Consider a $1 \\times 1 \\times 1$ cube with $V = 1$. Doubling gives a $2 \\times 2 \\times 2$ cube with $V = 8$. The ratio is $8/1 = 8$. Confirmed.\n\n**Why other choices are incorrect:**\n- Choice A: [TRAP: partial_calculation] This is just the scale factor itself ($k = 2$). Students who think \"doubled means times 2\" are applying a linear scaling rule to a three-dimensional quantity.\n- Choice B: [TRAP: partial_calculation] This is $k^2 = 4$, which is the area scaling factor. Students who confuse surface area scaling with volume scaling pick this.\n- Choice C: [TRAP: arithmetic_slip] The number 6 has no relationship to the scaling formula. Some students mistakenly multiply the scale factor by the number of faces on a cube ($2 \\times 3 = 6$).\n\n**Key concept:** The volume scaling law states $V_{\\text{new}} = k^3 \\cdot V_{\\text{original}}$ for any scale factor $k$. This works for ALL 3D shapes, not just boxes.\n\n**Calculator tip:** On Desmos, test with any shape: enter the volume formula, then replace each dimension $d$ with $2d$ and simplify to confirm the factor of 8.",
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
      explanation: "**Choice C is correct.** The universal prism volume formula is $V = Bh$, where $B$ is the area of the base and $h$ is the perpendicular height.\n\n**Step 1:** A prism is defined as a solid with two parallel, congruent polygonal bases connected by rectangular lateral faces. The base can be any polygon: triangle, rectangle, pentagon, hexagon, etc.\n\n**Step 2:** Regardless of the base shape, volume is always:\n$$V = B \\cdot h$$\nwhere $B = \\text{area of the base}$ and $h = \\text{perpendicular distance between the bases}$.\n\n**Verification:** For a rectangular prism, $B = lw$, so $V = lwh$. For a triangular prism, $B = \\frac{1}{2}bh_{\\triangle}$, so $V = \\frac{1}{2}bh_{\\triangle} \\cdot h$. Both are special cases of $V = Bh$. Confirmed.\n\n**Why other choices are incorrect:**\n- Choice A: [TRAP: partial_calculation] $V = lwh$ only works for rectangular prisms. It fails for triangular prisms, hexagonal prisms, or any non-rectangular base.\n- Choice B: [TRAP: reversed_operation] $V = \\pi r^2 h$ is the formula for a cylinder, which is technically a \"circular prism\" but not a general prism with a polygonal base.\n- Choice D: [TRAP: partial_calculation] $V = \\frac{1}{3}Bh$ is the volume formula for pyramids and cones, not prisms. The $\\frac{1}{3}$ factor reduces volume because these shapes taper to a point.\n\n**Key concept:** $V = Bh$ is the master formula for all prisms and cylinders. The SAT reference sheet provides this, so memorize that pyramids/cones get the $\\frac{1}{3}$ factor while prisms do not.\n\n**Calculator tip:** When computing $B$ on the SAT, write out the base area calculation separately before multiplying by $h$ to avoid errors.",
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
      explanation: "**Choice C is correct.** Using the standard conversion $1 \\text{ liter} = 1{,}000 \\text{ cm}^3$, we get $2 \\text{ liters} = 2{,}000 \\text{ cm}^3$.\n\n**Step 1:** Recall the key unit conversion:\n$$1 \\text{ liter} = 1{,}000 \\text{ cm}^3$$\n\n**Step 2:** Multiply both sides by 2:\n$$2 \\text{ liters} = 2 \\times 1{,}000 \\text{ cm}^3 = 2{,}000 \\text{ cm}^3$$\n\n**Verification:** A liter is defined as $1 \\text{ dm}^3 = (10 \\text{ cm})^3 = 1{,}000 \\text{ cm}^3$. So $2 \\text{ L} = 2{,}000 \\text{ cm}^3$. Confirmed.\n\n**Why other choices are incorrect:**\n- Choice A: [TRAP: arithmetic_slip] This simply replaces the unit label without performing any conversion. Students who assume \"2 liters = 2 cm cubed\" ignore the factor of 1,000.\n- Choice B: [TRAP: partial_calculation] This uses a factor of 100 instead of 1,000. Students may confuse $1 \\text{ L} = 100 \\text{ cm}^3$ (wrong) with the correct $1 \\text{ L} = 1{,}000 \\text{ cm}^3$.\n- Choice D: [TRAP: arithmetic_slip] This uses a factor of 10,000 instead of 1,000. Students may incorrectly square or add an extra zero to the conversion factor.\n\n**Key concept:** The conversion $1 \\text{ L} = 1{,}000 \\text{ cm}^3$ (equivalently, $1 \\text{ mL} = 1 \\text{ cm}^3$) is essential for SAT problems that mix metric volume units.\n\n**Calculator tip:** On unit conversion problems, set up a proportion: $\\frac{1 \\text{ L}}{1{,}000 \\text{ cm}^3} = \\frac{2 \\text{ L}}{x}$, then solve for $x$.",
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
      explanation: "**Choice D is correct.** Equal volume does not guarantee equal shape, equal surface area, or equal dimensions. Completely different solids can occupy the same amount of space.\n\n**Step 1:** Consider two counterexamples:\n- A cube with side $s = \\sqrt[3]{100} \\approx 4.64$ has $V = 100$ and surface area $= 6s^2 \\approx 129.3$.\n- A sphere with $V = 100$ has $r = \\sqrt[3]{\\frac{300}{4\\pi}} \\approx 2.88$ and surface area $= 4\\pi r^2 \\approx 104.2$.\n\n**Step 2:** Both solids have $V = 100$, but they have different shapes, different dimensions, and different surface areas ($\\approx 129.3$ vs. $\\approx 104.2$).\n\n**Verification:** Even simpler: a $1 \\times 1 \\times 36$ box and a $2 \\times 3 \\times 6$ box both have $V = 36$, but completely different dimensions and surface areas ($74$ vs. $72$). Confirmed.\n\n**Why other choices are incorrect:**\n- Choice A: [TRAP: reversed_operation] A tall thin cylinder and a short wide cylinder can have the same volume but are clearly different shapes with different proportions.\n- Choice B: [TRAP: sign_error] Surface area and volume are independent properties. A sphere has the minimum surface area for a given volume (isoperimetric inequality), so any other shape with the same volume will have greater surface area.\n- Choice C: [TRAP: reversed_operation] Infinitely many combinations of length, width, and height can produce the same volume (e.g., $V = 24$: could be $2 \\times 3 \\times 4$ or $1 \\times 4 \\times 6$).\n\n**Key concept:** Volume measures only the amount of enclosed space. Shape, surface area, and dimensions are independent geometric properties. On the SAT, never assume that equal volume implies any other equality.\n\n**Calculator tip:** To disprove a \"must be true\" statement, you only need one counterexample. Try plugging simple numbers into different volume formulas on Desmos to find solids with the same volume but different properties.",
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
      explanation: "**Choice C is correct.** The volume of a rectangular prism is found by multiplying all three dimensions.\n\n**Step 1:** Apply the rectangular prism volume formula:\n$$V = l \\times w \\times h$$\n\n**Step 2:** Substitute the given values:\n$$V = 5 \\times 3 \\times 4 = 60$$\n\n**Verification:** We can compute in stages: $5 \\times 3 = 15$, then $15 \\times 4 = 60$. Confirmed.\n\n**Why other choices are incorrect:**\n- Choice A: [TRAP: partial_calculation] $12 = 3 \\times 4$. This only multiplies two of the three dimensions, forgetting to include the length of 5.\n- Choice B: [TRAP: arithmetic_slip] $35 = 5 \\times 7$. This appears to be a miscalculation, perhaps from adding $3 + 4 = 7$ and then multiplying by 5 instead of multiplying all three.\n- Choice D: [TRAP: sign_error] $94 = 2(5 \\times 3 + 5 \\times 4 + 3 \\times 4) = 2(15 + 20 + 12) = 2(47) = 94$. This is the surface area formula, not the volume formula.\n\n**Key concept:** For a rectangular prism: $V = lwh$. This is the simplest 3D volume formula and the foundation for all prism calculations.\n\n**Calculator tip:** On the SAT, multiply dimensions in pairs to reduce arithmetic errors: compute $5 \\times 3 = 15$ first, then $15 \\times 4 = 60$.",
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
      explanation: "**Choice A is correct.** Solving $V = lwh$ for the unknown height gives $h = 3$ cm.\n\n**Step 1:** Write the volume formula and substitute known values:\n$$V = l \\times w \\times h$$\n$$120 = 10 \\times 4 \\times h$$\n\n**Step 2:** Simplify and solve for $h$:\n$$120 = 40h$$\n$$h = \\frac{120}{40} = 3 \\text{ cm}$$\n\n**Verification:** Check: $10 \\times 4 \\times 3 = 120$ cm$^3$. Matches the given volume. Confirmed.\n\n**Why other choices are incorrect:**\n- Choice B: [TRAP: partial_calculation] $6 = \\frac{120}{20}$. This divides by $l + w = 10 + 4 = 14$... no, actually $120/20 = 6$ could come from dividing by only $2 \\times 10 = 20$, using an incorrect subset of dimensions.\n- Choice C: [TRAP: reversed_operation] $12 = \\frac{120}{10}$. This divides the volume by only the length, forgetting to also divide by the width.\n- Choice D: [TRAP: reversed_operation] $30 = \\frac{120}{4}$. This divides the volume by only the width, forgetting to also divide by the length.\n\n**Key concept:** To find any missing dimension of a rectangular prism, isolate it: $h = \\frac{V}{l \\times w}$. Always divide the volume by the product of the other two dimensions.\n\n**Calculator tip:** Compute the denominator first ($10 \\times 4 = 40$), then divide: $120 \\div 40 = 3$. This two-step approach prevents order-of-operations errors.",
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
      explanation: "**Choice B is correct.** Converting gallons to cubic feet and dividing by the base area yields a depth of $2.68$ ft.\n\n**Step 1:** Convert the volume from gallons to cubic feet:\n$$V = 1{,}000 \\times 0.134 = 134 \\text{ ft}^3$$\n\n**Step 2:** Find the base area:\n$$B = 10 \\times 5 = 50 \\text{ ft}^2$$\n\n**Step 3:** Solve for depth using $V = B \\times h$:\n$$h = \\frac{V}{B} = \\frac{134}{50} = 2.68 \\text{ ft}$$\n\n**Verification:** Check: $10 \\times 5 \\times 2.68 = 134$ ft$^3$, and $134 / 0.134 = 1{,}000$ gallons. Confirmed.\n\n**Why other choices are incorrect:**\n- Choice A: [TRAP: arithmetic_slip] $2 = \\frac{1{,}000}{50 \\times 10}$. This may come from a rounding error or skipping the unit conversion step entirely and dividing 1,000 by some incorrect product.\n- Choice C: [TRAP: reversed_operation] $20 = \\frac{1{,}000}{50}$. This divides the gallon amount directly by the base area without first converting gallons to cubic feet.\n- Choice D: [TRAP: partial_calculation] $134 = 1{,}000 \\times 0.134$. This is the volume in cubic feet but forgets the second step of dividing by the base area.\n\n**Key concept:** Multi-step unit conversion problems require: (1) convert to consistent units, (2) apply the volume formula. Always complete the conversion before dividing by area.\n\n**Calculator tip:** On Desmos, store intermediate results: type $134/50$ to get $2.68$ directly. Label your steps to avoid losing track of units.",
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
      explanation: "**Choice A is correct.** Since volume is directly proportional to each dimension, tripling one dimension triples the volume.\n\n**Step 1:** Write the original and new volumes:\n$$V_{\\text{original}} = l \\cdot w \\cdot h$$\n$$V_{\\text{new}} = 3l \\cdot w \\cdot h = 3(lwh) = 3 \\cdot V_{\\text{original}}$$\n\n**Step 2:** The ratio is:\n$$\\frac{V_{\\text{new}}}{V_{\\text{original}}} = 3$$\n\n**Verification:** Example: a $2 \\times 3 \\times 4$ box has $V = 24$. Tripling the length gives $6 \\times 3 \\times 4 = 72 = 3 \\times 24$. Confirmed.\n\n**Why other choices are incorrect:**\n- Choice B: [TRAP: arithmetic_slip] \"Increases by 3\" means $V_{\\text{new}} = V_{\\text{original}} + 3$, which is an additive change. Volume scaling is always multiplicative, not additive.\n- Choice C: [TRAP: partial_calculation] A factor of $9 = 3^2$ would apply if two dimensions were each tripled. Only one dimension changes here, so the factor is $3^1$, not $3^2$.\n- Choice D: [TRAP: partial_calculation] A factor of $27 = 3^3$ applies only when all three dimensions are tripled simultaneously. Here, only the length changes.\n\n**Key concept:** In $V = lwh$, each dimension contributes linearly. If $k$ dimensions are each scaled by factor $s$, the volume scales by $s^k$. Here $k = 1$, so the volume scales by $3^1 = 3$.\n\n**Calculator tip:** When in doubt on proportionality questions, plug in simple values (like $1 \\times 1 \\times 1$) and compute both the original and new volumes to see the ratio directly.",
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
      explanation: "**Choice B is correct.** Dividing the storage unit volume by the box volume gives exactly 120 boxes.\n\n**Step 1:** Compute the storage unit volume:\n$$V_{\\text{unit}} = 12 \\times 10 \\times 8 = 960 \\text{ ft}^3$$\n\n**Step 2:** Compute one box's volume:\n$$V_{\\text{box}} = 2 \\times 2 \\times 2 = 8 \\text{ ft}^3$$\n\n**Step 3:** Divide to find the number of boxes:\n$$\\text{Number of boxes} = \\frac{960}{8} = 120$$\n\n**Verification:** We can also count by dimensions: $12/2 = 6$ boxes along the length, $10/2 = 5$ along the width, $8/2 = 4$ along the height. Total: $6 \\times 5 \\times 4 = 120$. Confirmed.\n\n**Why other choices are incorrect:**\n- Choice A: [TRAP: partial_calculation] $60 = 120/2$. This might result from dividing by $V_{\\text{box}} = 16$ (incorrectly computing $2 \\times 2 \\times 2 = 16$ by squaring instead of cubing).\n- Choice C: [TRAP: reversed_operation] $240 = 960/4$. This divides by $4 = 2^2$ instead of $8 = 2^3$, using the box's face area instead of its full volume.\n- Choice D: [TRAP: sign_error] $960$ is the storage unit's volume in ft$^3$, not the number of boxes. This answer ignores the division step entirely.\n\n**Key concept:** For perfect-fit packing problems, $\\text{count} = \\frac{V_{\\text{large}}}{V_{\\text{small}}}$. This works when each dimension of the large box is evenly divisible by the corresponding small box dimension.\n\n**Calculator tip:** The dimension-by-dimension method ($6 \\times 5 \\times 4$) is more reliable because it confirms the boxes physically fit without gaps. Always verify divisibility first.",
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
      explanation: "**Choice C is correct.** A cube with edge length $s = 4$ has volume $s^3 = 64$.\n\n**Step 1:** Apply the cube volume formula:\n$$V = s^3$$\n\n**Step 2:** Substitute $s = 4$:\n$$V = 4^3 = 4 \\times 4 \\times 4 = 64$$\n\n**Verification:** Since a cube is a special rectangular prism: $V = 4 \\times 4 \\times 4 = 64$. Confirmed.\n\n**Why other choices are incorrect:**\n- Choice A: [TRAP: partial_calculation] $12 = 4 \\times 3$. This multiplies the edge length by 3 (the number of dimensions) instead of raising it to the third power.\n- Choice B: [TRAP: partial_calculation] $16 = 4^2$. This squares the edge instead of cubing it, computing area of one face rather than volume.\n- Choice D: [TRAP: sign_error] $96 = 6 \\times 4^2 = 6 \\times 16$. This is the surface area of the cube ($SA = 6s^2$), not the volume.\n\n**Key concept:** $V_{\\text{cube}} = s^3$. The most common SAT trap is confusing $s^2$ (area) with $s^3$ (volume) or confusing surface area $6s^2$ with volume $s^3$.\n\n**Calculator tip:** On your calculator, use the exponent key: $4 \\wedge 3 = 64$. Double-check by confirming $4 \\times 4 = 16$ and $16 \\times 4 = 64$.",
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
      explanation: "**Choice A is correct.** Taking the cube root of the volume gives $s = \\sqrt[3]{125} = 5$ cm.\n\n**Step 1:** Start with the volume formula and solve for $s$:\n$$V = s^3$$\n$$125 = s^3$$\n\n**Step 2:** Take the cube root of both sides:\n$$s = \\sqrt[3]{125} = 5 \\text{ cm}$$\n\n**Verification:** Check: $5^3 = 5 \\times 5 \\times 5 = 125$ cm$^3$. Confirmed.\n\n**Why other choices are incorrect:**\n- Choice B: [TRAP: partial_calculation] $25 = 125/5$. This divides the volume by 5 instead of taking the cube root, or equivalently computes $5^2$ rather than recognizing the answer is just 5.\n- Choice C: [TRAP: reversed_operation] $41.67 = 125/3$. This divides the volume by 3 (the exponent), confusing the operation of taking a cube root with dividing by 3.\n- Choice D: [TRAP: reversed_operation] $\\sqrt{125}$ is the square root, not the cube root. The volume formula uses $s^3$, so the inverse operation must be $\\sqrt[3]{\\phantom{x}}$, not $\\sqrt{\\phantom{x}}$.\n\n**Key concept:** $s = \\sqrt[3]{V}$ reverses $V = s^3$. Memorize the perfect cubes: $1, 8, 27, 64, 125, 216, 343, 512, 729, 1000$.\n\n**Calculator tip:** On Desmos or a scientific calculator, compute cube roots using the exponent $1/3$: type $125^{(1/3)}$ to get $5$.",
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
      explanation: "**Choice D is correct.** Doubling the edge of a cube multiplies the volume by $2^3 = 8$.\n\n**Step 1:** Write the original and new volumes:\n$$V_{\\text{original}} = s^3$$\n$$V_{\\text{new}} = (2s)^3 = 2^3 \\cdot s^3 = 8s^3$$\n\n**Step 2:** Find the ratio:\n$$\\frac{V_{\\text{new}}}{V_{\\text{original}}} = \\frac{8s^3}{s^3} = 8$$\n\n**Verification:** A cube with $s = 1$ has $V = 1$. Doubled: $s = 2$, $V = 8$. Ratio: $8/1 = 8$. Confirmed.\n\n**Why other choices are incorrect:**\n- Choice A: [TRAP: partial_calculation] $2 = 2^1$. This applies the scale factor once (linear scaling) instead of cubing it. Students who think \"double the edge, double the volume\" miss the cubic relationship.\n- Choice B: [TRAP: partial_calculation] $4 = 2^2$. This is the area scaling factor. It would be correct if asking how the surface area of one face changes, but volume requires the cube of the scale factor.\n- Choice C: [TRAP: arithmetic_slip] $6$ has no connection to the scaling formula. It may arise from confusing $2 \\times 3 = 6$ (scale factor times number of dimensions) with $2^3 = 8$ (scale factor raised to the number of dimensions).\n\n**Key concept:** For any solid, when all linear dimensions scale by factor $k$: area scales by $k^2$, volume scales by $k^3$. This is the dimensional scaling principle.\n\n**Calculator tip:** Quick mental check: $(2s)^3 = 2^3 \\cdot s^3$. The exponent distributes over multiplication, so always raise the scale factor to the power of the dimension.",
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
      explanation: "**Choice B is correct.** Working backward from surface area to edge length, then computing volume, gives $V = 64$ cm$^3$.\n\n**Step 1:** Find the edge length from the surface area. A cube has 6 identical square faces:\n$$SA = 6s^2 = 96$$\n$$s^2 = \\frac{96}{6} = 16$$\n$$s = 4 \\text{ cm}$$\n\n**Step 2:** Compute the volume:\n$$V = s^3 = 4^3 = 64 \\text{ cm}^3$$\n\n**Verification:** Check surface area: $6 \\times 4^2 = 6 \\times 16 = 96$ cm$^2$. Check volume: $4^3 = 64$ cm$^3$. Both confirmed.\n\n**Why other choices are incorrect:**\n- Choice A: [TRAP: partial_calculation] $16 = s^2 = 4^2$. This finds the area of one face but stops there, never computing the full three-dimensional volume.\n- Choice C: [TRAP: sign_error] $96$ is the surface area given in the problem, not the volume. Students who fail to perform any calculation and simply restate the given value fall into this trap.\n- Choice D: [TRAP: arithmetic_slip] $216 = 6^3$. This likely results from an error like solving $s^2 = 96/6 = 16$ correctly but then mistakenly taking $s = \\sqrt{16}$ and confusing it with $s = 6$, or computing $\\sqrt[3]{216}$ backward.\n\n**Key concept:** Surface-area-to-volume problems require two steps: (1) $s = \\sqrt{SA/6}$, then (2) $V = s^3$. The SAT loves testing whether you can chain these formulas correctly.\n\n**Calculator tip:** Solve sequentially on Desmos: $96/6 = 16$, then $\\sqrt{16} = 4$, then $4^3 = 64$. Keep each step separate to catch errors.",
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
      explanation: "**Choice D is correct.** The large cube holds exactly 64 small cubes.\n\n**Step 1:** Compute both volumes:\n$$V_{\\text{large}} = 8^3 = 512 \\text{ cm}^3$$\n$$V_{\\text{small}} = 2^3 = 8 \\text{ cm}^3$$\n\n**Step 2:** Divide:\n$$\\text{Count} = \\frac{512}{8} = 64$$\n\n**Verification:** By dimension: $8/2 = 4$ small cubes fit along each edge. Total: $4 \\times 4 \\times 4 = 64$. Alternatively, the scale factor is $8/2 = 4$, and $4^3 = 64$. Confirmed.\n\n**Why other choices are incorrect:**\n- Choice A: [TRAP: partial_calculation] $4 = 8/2$. This is the number of small cubes along one edge, not the total count. Students who think in one dimension rather than three make this error.\n- Choice B: [TRAP: partial_calculation] $16 = 4^2$. This counts the cubes along two dimensions ($4 \\times 4$) but forgets the third dimension, computing an area ratio instead of a volume ratio.\n- Choice C: [TRAP: arithmetic_slip] $32 = 4 \\times 8$ or $512/16$. This may result from an arithmetic error when cubing, or from accidentally dividing the large volume by $V_{\\text{small}} = 16$ (using $2^2 \\times 4$ or some other incorrect calculation).\n\n**Key concept:** The number of small cubes fitting inside a large cube equals $(L/s)^3$, where $L$ is the large edge and $s$ is the small edge. Think of it as the scale factor cubed.\n\n**Calculator tip:** Always verify with the dimensional approach: $\\frac{L}{s}$ along each axis, then multiply three times. This guarantees the cubes actually fit without leftover space.",
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
      explanation: "**Choice C is correct.** Applying the cylinder volume formula gives $V = 63\\pi$.\n\n**Step 1:** Write the cylinder volume formula:\n$$V = \\pi r^2 h$$\n\n**Step 2:** Substitute $r = 3$ and $h = 7$:\n$$V = \\pi (3)^2 (7) = \\pi (9)(7) = 63\\pi$$\n\n**Verification:** $3^2 = 9$, and $9 \\times 7 = 63$. So $V = 63\\pi$. Confirmed.\n\n**Why other choices are incorrect:**\n- Choice A: [TRAP: partial_calculation] $21\\pi = \\pi(3)(7)$. This multiplies $r \\times h$ instead of $r^2 \\times h$, forgetting to square the radius.\n- Choice B: [TRAP: partial_calculation] $42\\pi = \\pi(2)(3)(7)$. This computes $2\\pi rh$, which is the lateral surface area formula, not the volume formula.\n- Choice D: [TRAP: arithmetic_slip] $147\\pi = \\pi(3)^2(7) \\times ?$... actually $147 = 3 \\times 49 = 3 \\times 7^2$. This suggests squaring the height instead of the radius: $\\pi(3)(7^2) = \\pi(3)(49) = 147\\pi$.\n\n**Key concept:** $V_{\\text{cylinder}} = \\pi r^2 h$. The radius gets squared, the height does not. A common SAT trap switches which dimension is squared.\n\n**Calculator tip:** Compute in order: square the radius first ($3^2 = 9$), multiply by height ($9 \\times 7 = 63$), then attach $\\pi$. This prevents confusing which term to square.",
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
      explanation: "**Choice B is correct.** Solving $V = \\pi r^2 h$ for $h$ gives $h = 8$ m.\n\n**Step 1:** Write the formula and substitute known values:\n$$V = \\pi r^2 h$$\n$$200\\pi = \\pi (5)^2 h$$\n\n**Step 2:** Simplify by dividing both sides by $\\pi$:\n$$200 = 25h$$\n\n**Step 3:** Solve for $h$:\n$$h = \\frac{200}{25} = 8 \\text{ m}$$\n\n**Verification:** Check: $\\pi(5)^2(8) = \\pi(25)(8) = 200\\pi$ m$^3$. Confirmed.\n\n**Why other choices are incorrect:**\n- Choice A: [TRAP: arithmetic_slip] $4 = 200/50$. This divides by $2r^2 = 2(25) = 50$ instead of $r^2 = 25$, perhaps confusing the formula with a surface area component.\n- Choice C: [TRAP: reversed_operation] $20 = 200/10$. This divides by $2r = 10$ (the diameter) instead of $r^2 = 25$, mixing up linear and squared terms.\n- Choice D: [TRAP: reversed_operation] $40 = 200/5$. This divides the volume by the radius $r = 5$ instead of $r^2 = 25$, forgetting that the radius must be squared.\n\n**Key concept:** To isolate $h$ in $V = \\pi r^2 h$: first cancel $\\pi$ from both sides, then divide by $r^2$. The formula rearranges to $h = \\frac{V}{\\pi r^2}$.\n\n**Calculator tip:** When the volume is given in terms of $\\pi$, cancel $\\pi$ immediately. This simplifies $200\\pi / (\\pi \\cdot 25) = 200/25 = 8$.",
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
      explanation: "**Choice B is correct.** Converting diameter to radius first, then applying the formula, gives $V = 300\\pi$.\n\n**Step 1:** Convert diameter to radius:\n$$r = \\frac{d}{2} = \\frac{10}{2} = 5$$\n\n**Step 2:** Apply the volume formula:\n$$V = \\pi r^2 h = \\pi (5)^2 (12) = \\pi (25)(12) = 300\\pi$$\n\n**Verification:** $5^2 = 25$ and $25 \\times 12 = 300$. So $V = 300\\pi$. Confirmed.\n\n**Why other choices are incorrect:**\n- Choice A: [TRAP: partial_calculation] $120\\pi = \\pi(10)(12)$. This uses the diameter ($d = 10$) directly as the radius without halving, and also forgets to square it, computing $\\pi \\cdot d \\cdot h$.\n- Choice C: [TRAP: reversed_operation] $600\\pi = \\pi(10)^2(12)/2$. This squares the diameter to get 100, multiplies by 12, then halves, arriving at the wrong answer through a confused attempt to \"fix\" using the diameter.\n- Choice D: [TRAP: reversed_operation] $1200\\pi = \\pi(10)^2(12)$. This plugs the diameter ($d = 10$) directly into $r^2$ without halving. Since $(10)^2 = 100$ instead of $(5)^2 = 25$, the result is exactly 4 times too large.\n\n**Key concept:** The #1 diameter/radius trap on the SAT: always check whether you are given $r$ or $d$. If given the diameter, divide by 2 before squaring. Using $d$ instead of $r$ makes the answer $4\\times$ too large.\n\n**Calculator tip:** Write $r = d/2$ as your very first step. Circle or highlight \"diameter\" in the problem to remind yourself to convert.",
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
      explanation: "**Choice B is correct.** Doubling the radius quadruples the base area, and halving the height cuts it in half: net effect is $\\times 2$.\n\n**Step 1:** Write the original volume:\n$$V_{\\text{original}} = \\pi r^2 h$$\n\n**Step 2:** Apply the changes ($r \\to 2r$, $h \\to h/2$):\n$$V_{\\text{new}} = \\pi (2r)^2 \\left(\\frac{h}{2}\\right) = \\pi (4r^2)\\left(\\frac{h}{2}\\right) = \\frac{4}{2} \\pi r^2 h = 2\\pi r^2 h$$\n\n**Step 3:** Find the ratio:\n$$\\frac{V_{\\text{new}}}{V_{\\text{original}}} = \\frac{2\\pi r^2 h}{\\pi r^2 h} = 2$$\n\n**Verification:** Let $r = 3$, $h = 10$: $V_1 = \\pi(9)(10) = 90\\pi$. New: $r = 6$, $h = 5$: $V_2 = \\pi(36)(5) = 180\\pi$. Ratio: $180/90 = 2$. Confirmed.\n\n**Why other choices are incorrect:**\n- Choice A: [TRAP: arithmetic_slip] The doubling and halving do NOT cancel because the radius is squared. $2^2 \\times \\frac{1}{2} = 2$, not 1. Students who think \"double one, halve the other\" cancels are ignoring the exponent.\n- Choice C: [TRAP: partial_calculation] $4 = (2)^2$. This accounts for the doubled radius ($r^2$ becomes $4r^2$) but forgets that the height is simultaneously halved, which divides by 2.\n- Choice D: [TRAP: reversed_operation] Halving would occur only if the radius stayed the same and only the height were halved. Doubling the radius more than compensates for the halved height.\n\n**Key concept:** In $V = \\pi r^2 h$, the radius is squared, so it has a stronger effect on volume than the height. When both change: multiply the individual scaling factors, respecting exponents: $2^2 \\times \\frac{1}{2} = 2$.\n\n**Calculator tip:** Always expand $(kr)^2 = k^2 r^2$ before combining with the height factor. The exponent on $r$ is the key detail.",
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
      explanation: "**Choice C is correct.** The cylindrical glass holds $160\\pi$ cm$^3$ of water.\n\n**Step 1:** Model the glass as a cylinder and apply the volume formula:\n$$V = \\pi r^2 h$$\n\n**Step 2:** Substitute $r = 4$ cm and $h = 10$ cm:\n$$V = \\pi (4)^2 (10) = \\pi (16)(10) = 160\\pi \\text{ cm}^3$$\n\n**Verification:** $4^2 = 16$, and $16 \\times 10 = 160$. So $V = 160\\pi \\approx 502.7$ cm$^3 \\approx 0.5$ liters, which is a reasonable glass size. Confirmed.\n\n**Why other choices are incorrect:**\n- Choice A: [TRAP: partial_calculation] $40\\pi = \\pi(4)(10)$. This multiplies $r \\times h$ without squaring the radius. The formula requires $r^2$, not $r$.\n- Choice B: [TRAP: partial_calculation] $80\\pi = \\pi(2)(4)(10) = 2\\pi rh$. This is the lateral surface area of the cylinder, not the volume. Students confuse the two formulas.\n- Choice D: [TRAP: reversed_operation] $400\\pi = \\pi(4)^2(10) \\times ?$... or possibly $\\pi \\cdot 40 \\cdot 10$ from miscomputing $r^2$. Actually $400 = 16 \\times 25$, suggesting $r = 4, h = 25$ or another error. Most likely this results from using the diameter ($d = 8$) as the radius: $\\pi(8)^2(10)/4 = 400\\pi$... or simply an arithmetic slip with larger numbers.\n\n**Key concept:** Real-world cylinder problems (glasses, cans, tanks) always use $V = \\pi r^2 h$. The water height is the $h$ value, not the total glass height if the glass is only partially filled.\n\n**Calculator tip:** On Desmos, compute $\\pi \\cdot 4^2 \\cdot 10$ to get $\\approx 502.65$ cm$^3$. As a reasonableness check, this is about half a liter, which makes sense for a drinking glass.",
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
      explanation: "**Choice B is correct.** Applying the sphere volume formula with $r = 3$ gives $V = 36\\pi$.\n\n**Step 1:** Write the sphere volume formula:\n$$V = \\frac{4}{3}\\pi r^3$$\n\n**Step 2:** Substitute $r = 3$:\n$$V = \\frac{4}{3}\\pi (3)^3 = \\frac{4}{3}\\pi (27) = \\frac{108\\pi}{3} = 36\\pi$$\n\n**Verification:** $\\frac{4}{3} \\times 27 = \\frac{108}{3} = 36$. So $V = 36\\pi$. Confirmed.\n\n**Why other choices are incorrect:**\n- Choice A: [TRAP: partial_calculation] $12\\pi = \\frac{4}{3}\\pi(3)^2(1)$... or $4\\pi(3) = 12\\pi$. This is $4\\pi r$, which is not a standard formula, or it may come from forgetting to cube the radius and only squaring it: $\\frac{4}{3}\\pi(9) = 12\\pi$.\n- Choice C: [TRAP: partial_calculation] $108\\pi = \\pi(3)^3 \\times 4 = 4\\pi(27)$. Wait, $4 \\times 27 = 108$. This forgets to divide by 3 in the $\\frac{4}{3}$ coefficient. This is the most common sphere trap on the SAT.\n- Choice D: [TRAP: arithmetic_slip] $324\\pi = 4\\pi(3)^4 = 4\\pi(81)$. This raises the radius to the 4th power instead of the 3rd, or computes $\\pi(18)^2$ from some other error path.\n\n**Key concept:** $V_{\\text{sphere}} = \\frac{4}{3}\\pi r^3$. The fraction $\\frac{4}{3}$ is critical and is the most frequently forgotten part of this formula. Always multiply by 4, then divide by 3.\n\n**Calculator tip:** Compute step by step: $3^3 = 27$, then $27 \\times 4 = 108$, then $108 \\div 3 = 36$. Attach $\\pi$ at the end.",
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
      explanation: "**Choice B is correct.** Solving the sphere formula for $r$ gives $r = 6$ cm.\n\n**Step 1:** Set up the equation:\n$$\\frac{4}{3}\\pi r^3 = 288\\pi$$\n\n**Step 2:** Divide both sides by $\\pi$:\n$$\\frac{4}{3}r^3 = 288$$\n\n**Step 3:** Multiply both sides by $\\frac{3}{4}$:\n$$r^3 = 288 \\times \\frac{3}{4} = \\frac{864}{4} = 216$$\n\n**Step 4:** Take the cube root:\n$$r = \\sqrt[3]{216} = 6 \\text{ cm}$$\n\n**Verification:** Check: $\\frac{4}{3}\\pi(6)^3 = \\frac{4}{3}\\pi(216) = \\frac{864\\pi}{3} = 288\\pi$. Confirmed.\n\n**Why other choices are incorrect:**\n- Choice A: [TRAP: arithmetic_slip] $4^3 = 64$ and $\\frac{4}{3}\\pi(64) = \\frac{256\\pi}{3} \\approx 85.3\\pi \\neq 288\\pi$. This likely comes from an error in the cube root calculation or from confusing $\\sqrt[3]{216}$ with a smaller value.\n- Choice C: [TRAP: reversed_operation] $8$ may result from computing $r^3 = 288 \\times \\frac{3}{4} = 216$ correctly but then taking $\\sqrt[3]{216}$ incorrectly, or from a different error path like $r = \\sqrt[3]{512} = 8$.\n- Choice D: [TRAP: partial_calculation] $12$ may come from skipping the $\\frac{4}{3}$ step: if you solve $\\pi r^3 = 288\\pi$ directly (forgetting the $\\frac{4}{3}$), you get $r^3 = 288$, and $\\sqrt[3]{288} \\approx 6.6$, which rounds incorrectly, or from other simplification errors.\n\n**Key concept:** To solve for the radius from volume: $r = \\sqrt[3]{\\frac{3V}{4\\pi}}$. The critical step is multiplying by $\\frac{3}{4}$ (the reciprocal of $\\frac{4}{3}$) to isolate $r^3$.\n\n**Calculator tip:** On Desmos: type $(288 \\times 3/4)^{(1/3)}$ to get $6$ directly. Memorize that $6^3 = 216$ for quick verification.",
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
      explanation: "**Choice A is correct.** Converting diameter to radius and applying the sphere formula gives $V = \\frac{500}{3}\\pi$.\n\n**Step 1:** Convert diameter to radius:\n$$r = \\frac{d}{2} = \\frac{10}{2} = 5$$\n\n**Step 2:** Apply the sphere volume formula:\n$$V = \\frac{4}{3}\\pi r^3 = \\frac{4}{3}\\pi(5)^3 = \\frac{4}{3}\\pi(125) = \\frac{500}{3}\\pi$$\n\n**Verification:** $\\frac{500}{3} \\approx 166.67$, and $166.67\\pi \\approx 523.6$. For a sphere of diameter 10, this is reasonable. Also: $4 \\times 125 = 500$, $500/3 = \\frac{500}{3}$. Confirmed.\n\n**Why other choices are incorrect:**\n- Choice B: [TRAP: partial_calculation] $\\frac{250}{3}\\pi = \\frac{2}{3}\\pi(125)$. This uses $\\frac{2}{3}$ instead of $\\frac{4}{3}$, perhaps from halving the coefficient or confusing the hemisphere formula ($V_{\\text{hemi}} = \\frac{2}{3}\\pi r^3$) with the full sphere.\n- Choice C: [TRAP: partial_calculation] $500\\pi = 4\\pi(125)/1$. This computes $4\\pi r^3$ but forgets to divide by 3. The missing $\\frac{1}{3}$ is the most common sphere volume error.\n- Choice D: [TRAP: reversed_operation] $\\frac{1000}{3}\\pi = \\frac{4}{3}\\pi(10)^3/4 = \\frac{4}{3}\\pi(250)$... actually $\\frac{4}{3}(250) = \\frac{1000}{3}$. This uses $r = 10$ (the diameter) instead of $r = 5$, or equivalently computes with $r^3 = 250$ from some error.\n\n**Key concept:** Two traps in one problem: (1) diameter vs. radius, and (2) remembering the $\\frac{4}{3}$ coefficient. Always convert to radius first, and always include the full $\\frac{4}{3}$ fraction.\n\n**Calculator tip:** On Desmos, type $4/3 \\cdot \\pi \\cdot 5^3$ and verify you get $\\approx 523.6$. Then confirm $\\frac{500}{3} \\cdot \\pi \\approx 523.6$.",
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
      explanation: "**Choice C is correct.** Since volume depends on $r^3$, tripling the radius multiplies the volume by $3^3 = 27$.\n\n**Step 1:** Write the original and scaled volumes:\n$$V_{\\text{original}} = \\frac{4}{3}\\pi r^3$$\n$$V_{\\text{new}} = \\frac{4}{3}\\pi (3r)^3 = \\frac{4}{3}\\pi (27r^3) = 27 \\cdot \\frac{4}{3}\\pi r^3$$\n\n**Step 2:** Find the ratio:\n$$\\frac{V_{\\text{new}}}{V_{\\text{original}}} = 27$$\n\n**Verification:** Let $r = 1$: $V_1 = \\frac{4}{3}\\pi$. With $r = 3$: $V_2 = \\frac{4}{3}\\pi(27) = 36\\pi$. Ratio: $36\\pi / \\frac{4}{3}\\pi = 36 \\times \\frac{3}{4} = 27$. Confirmed.\n\n**Why other choices are incorrect:**\n- Choice A: [TRAP: partial_calculation] $3 = 3^1$. This applies the linear scale factor without accounting for the cubic relationship. Tripling the radius triples each of the three \"length directions\" in the volume.\n- Choice B: [TRAP: partial_calculation] $9 = 3^2$. This is the surface area scaling factor (since $SA \\propto r^2$). Students who confuse area scaling with volume scaling select this.\n- Choice D: [TRAP: arithmetic_slip] $81 = 3^4$. This raises the scale factor to the 4th power, which has no geometric meaning. The correct exponent for volume is 3, not 4.\n\n**Key concept:** The volume scaling law for spheres: $V \\propto r^3$, so scaling the radius by factor $k$ scales the volume by $k^3$. This is a universal principle: linear scale $\\to k$, area scale $\\to k^2$, volume scale $\\to k^3$.\n\n**Calculator tip:** For scaling problems, just compute $k^3$: here $3^3 = 27$. The $\\frac{4}{3}\\pi$ coefficient cancels in the ratio and is irrelevant.",
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
      explanation: "**Choice B is correct.** Computing $\\frac{4}{3}(3.14)(12^3)$ gives approximately $7{,}235$ cm$^3$.\n\n**Step 1:** Cube the radius:\n$$12^3 = 12 \\times 12 \\times 12 = 144 \\times 12 = 1{,}728$$\n\n**Step 2:** Multiply by $\\frac{4}{3}$:\n$$\\frac{4}{3} \\times 1{,}728 = \\frac{6{,}912}{3} = 2{,}304$$\n\n**Step 3:** Multiply by $\\pi \\approx 3.14$:\n$$V = 2{,}304 \\times 3.14 = 7{,}234.56 \\approx 7{,}235 \\text{ cm}^3$$\n\n**Verification:** $2{,}304 \\times 3 = 6{,}912$, $2{,}304 \\times 0.14 = 322.56$. Total: $6{,}912 + 322.56 = 7{,}234.56 \\approx 7{,}235$. Confirmed.\n\n**Why other choices are incorrect:**\n- Choice A: [TRAP: partial_calculation] $1{,}809 \\approx \\frac{4}{3}(3.14)(12^2)(1)$... actually $\\frac{4}{3}(3.14)(144) = 4 \\times 3.14 \\times 48 = 602.9$... this doesn't match. More likely, $1{,}809 \\approx \\pi(12)^2(4) \\times$ something, or $1{,}809 \\approx 4\\pi r^2 = 4(3.14)(144) = 1{,}809$. This is the surface area ($4\\pi r^2$), not the volume.\n- Choice C: [TRAP: partial_calculation] $21{,}704 \\approx 3 \\times 7{,}235$. This could result from multiplying by $4\\pi r^3$ (forgetting the $\\frac{1}{3}$): $4(3.14)(1{,}728) = 21{,}703.7 \\approx 21{,}704$.\n- Choice D: [TRAP: arithmetic_slip] $28{,}939 \\approx 4 \\times 7{,}235$. This might come from computing $\\frac{16}{3}\\pi r^3$ or another multiplicative error, such as using the diameter instead of the radius in part of the calculation.\n\n**Key concept:** The numerical sphere calculation on the SAT: $V = \\frac{4}{3}\\pi r^3$. Compute $r^3$ first, then $\\frac{4}{3} \\times r^3$, then multiply by $\\pi$. Keep track of large numbers carefully.\n\n**Calculator tip:** On the SAT calculator section, enter $4/3 \\times 3.14159 \\times 12^3$ directly. Use parentheses to ensure correct order of operations. Always round only at the final step.",
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
      explanation: "**Choice A is correct.** Applying the cone volume formula gives $V = 12\\pi$.\n\n**Step 1:** Write the cone volume formula:\n$$V = \\frac{1}{3}\\pi r^2 h$$\n\n**Step 2:** Substitute $r = 3$ and $h = 4$:\n$$V = \\frac{1}{3}\\pi(3)^2(4) = \\frac{1}{3}\\pi(9)(4) = \\frac{36\\pi}{3} = 12\\pi$$\n\n**Verification:** $9 \\times 4 = 36$, and $36/3 = 12$. So $V = 12\\pi$. Confirmed.\n\n**Why other choices are incorrect:**\n- Choice B: [TRAP: partial_calculation] $36\\pi = \\pi(3)^2(4) = \\pi(9)(4)$. This computes $\\pi r^2 h$ (the cylinder volume) but forgets the crucial $\\frac{1}{3}$ factor that distinguishes a cone from a cylinder.\n- Choice C: [TRAP: arithmetic_slip] $4\\pi = \\frac{1}{3}\\pi(3)(4) = \\frac{12\\pi}{3}$. This uses $r$ instead of $r^2$, forgetting to square the radius before multiplying.\n- Choice D: [TRAP: partial_calculation] $108\\pi = \\pi(3)^3(4) = \\pi(27)(4)$. This cubes the radius instead of squaring it, confusing the cone formula with the sphere formula structure.\n\n**Key concept:** $V_{\\text{cone}} = \\frac{1}{3}\\pi r^2 h$. A cone is exactly $\\frac{1}{3}$ the volume of a cylinder with the same base and height. The SAT reference sheet provides this formula.\n\n**Calculator tip:** Compute the \"cylinder part\" first ($\\pi r^2 h = 36\\pi$), then divide by 3. This two-step approach makes it harder to forget the $\\frac{1}{3}$.",
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
      explanation: "**Choice B is correct.** A cone's volume is exactly $\\frac{1}{3}$ of a cylinder with the same base and height.\n\n**Step 1:** Write both formulas:\n$$V_{\\text{cone}} = \\frac{1}{3}\\pi r^2 h \\qquad V_{\\text{cylinder}} = \\pi r^2 h$$\n\n**Step 2:** Compute the ratio:\n$$\\frac{V_{\\text{cone}}}{V_{\\text{cylinder}}} = \\frac{\\frac{1}{3}\\pi r^2 h}{\\pi r^2 h} = \\frac{1}{3}$$\n\n**Verification:** For $r = 3$, $h = 6$: $V_{\\text{cyl}} = 54\\pi$, $V_{\\text{cone}} = 18\\pi$. Ratio: $18/54 = 1/3$. Confirmed.\n\n**Why other choices are incorrect:**\n- Choice A: [TRAP: reversed_operation] $\\frac{1}{2}$ is the relationship between a triangle and a rectangle (area), not between a cone and a cylinder (volume). Students who mix up 2D and 3D relationships pick this.\n- Choice C: [TRAP: partial_calculation] $\\frac{2}{3}$ is the fraction of the cylinder that the cone does NOT occupy ($1 - \\frac{1}{3} = \\frac{2}{3}$). Students who compute the \"leftover\" instead of the cone's share select this.\n- Choice D: [TRAP: arithmetic_slip] $\\frac{3}{4}$ has no relationship to the cone-cylinder volume ratio. It may come from confusing the $\\frac{4}{3}$ in the sphere formula with the cone relationship.\n\n**Key concept:** Three shapes share the cone-to-cylinder $\\frac{1}{3}$ relationship: cone = $\\frac{1}{3}$ cylinder, pyramid = $\\frac{1}{3}$ prism. Any shape that tapers to a point has $\\frac{1}{3}$ the volume of its un-tapered counterpart.\n\n**Calculator tip:** This is a conceptual question that requires no calculator. Memorize: pointed shapes (cones, pyramids) = $\\frac{1}{3}$ of their prismatic counterparts.",
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
      explanation: "**Choice A is correct.** The ice cream cone has volume $\\frac{40}{3}\\pi$ cm$^3$.\n\n**Step 1:** Apply the cone volume formula:\n$$V = \\frac{1}{3}\\pi r^2 h$$\n\n**Step 2:** Substitute $r = 2$ and $h = 10$:\n$$V = \\frac{1}{3}\\pi(2)^2(10) = \\frac{1}{3}\\pi(4)(10) = \\frac{40\\pi}{3} \\text{ cm}^3$$\n\n**Verification:** $4 \\times 10 = 40$, and $40/3 \\approx 13.33$. So $V \\approx 13.33\\pi \\approx 41.9$ cm$^3$. For a small ice cream cone, this is reasonable. Confirmed.\n\n**Why other choices are incorrect:**\n- Choice B: [TRAP: partial_calculation] $40\\pi = \\pi(4)(10)$. This computes $\\pi r^2 h$ (the cylinder volume) but forgets the $\\frac{1}{3}$ cone factor. This is exactly 3 times the correct answer.\n- Choice C: [TRAP: partial_calculation] $20\\pi = \\pi(2)(10)$. This computes $\\pi r h$ without squaring the radius and without the $\\frac{1}{3}$ factor, making two simultaneous errors.\n- Choice D: [TRAP: reversed_operation] $\\frac{20}{3}\\pi = \\frac{1}{3}\\pi(2)(10)$. This correctly includes the $\\frac{1}{3}$ but forgets to square the radius ($r$ instead of $r^2$).\n\n**Key concept:** $V_{\\text{cone}} = \\frac{1}{3}\\pi r^2 h$. When the answer involves a fraction that doesn't simplify to a whole number, leave it as a fraction (e.g., $\\frac{40}{3}\\pi$). The SAT often presents answers this way.\n\n**Calculator tip:** Compute $r^2 \\times h = 4 \\times 10 = 40$ first, then divide by 3 to get $\\frac{40}{3}$. Attach $\\pi$ at the end. Match the answer format to the choices.",
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
      explanation: "**Choice B is correct.** Solving for $r$ gives $r = 2\\sqrt{3}$.\n\n**Step 1:** Set up the equation:\n$$\\frac{1}{3}\\pi r^2 h = 24\\pi$$\n$$\\frac{1}{3}\\pi r^2 (6) = 24\\pi$$\n\n**Step 2:** Simplify the left side:\n$$2\\pi r^2 = 24\\pi$$\n\n**Step 3:** Divide both sides by $2\\pi$:\n$$r^2 = 12$$\n\n**Step 4:** Take the square root:\n$$r = \\sqrt{12} = \\sqrt{4 \\cdot 3} = 2\\sqrt{3}$$\n\n**Verification:** Check: $\\frac{1}{3}\\pi(2\\sqrt{3})^2(6) = \\frac{1}{3}\\pi(12)(6) = \\frac{72\\pi}{3} = 24\\pi$. Confirmed.\n\n**Why other choices are incorrect:**\n- Choice A: [TRAP: arithmetic_slip] If $r = 2$, then $V = \\frac{1}{3}\\pi(4)(6) = 8\\pi \\neq 24\\pi$. This likely results from a simplification error or premature rounding.\n- Choice C: [TRAP: reversed_operation] If $r = 4$, then $V = \\frac{1}{3}\\pi(16)(6) = 32\\pi \\neq 24\\pi$. This may come from solving $r^2 = 12$ incorrectly as $r = \\sqrt{16} = 4$.\n- Choice D: [TRAP: partial_calculation] $r = 6$ is the height, not the radius. Students who confuse the two dimensions or don't solve the algebra correctly may restate the height as their answer.\n\n**Key concept:** When solving for $r$: isolate $r^2$ first, then take $\\sqrt{\\phantom{x}}$. Simplify radicals fully: $\\sqrt{12} = \\sqrt{4 \\cdot 3} = 2\\sqrt{3}$, not $\\sqrt{12} \\approx 3.46$.\n\n**Calculator tip:** On the SAT, when answer choices contain radicals, you must simplify. Factor the number under the radical into a perfect square times a remainder: $12 = 4 \\times 3$, so $\\sqrt{12} = 2\\sqrt{3}$.",
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
      explanation: "**Choice D is correct.** Doubling all dimensions of a cone multiplies its volume by $2^3 = 8$.\n\n**Step 1:** Write the original volume:\n$$V_{\\text{original}} = \\frac{1}{3}\\pi r^2 h$$\n\n**Step 2:** Double all dimensions ($r \\to 2r$, $h \\to 2h$):\n$$V_{\\text{new}} = \\frac{1}{3}\\pi(2r)^2(2h) = \\frac{1}{3}\\pi(4r^2)(2h) = \\frac{8}{3}\\pi r^2 h$$\n\n**Step 3:** Find the ratio:\n$$\\frac{V_{\\text{new}}}{V_{\\text{original}}} = \\frac{\\frac{8}{3}\\pi r^2 h}{\\frac{1}{3}\\pi r^2 h} = 8$$\n\n**Verification:** Let $r = 1, h = 3$: $V_1 = \\frac{1}{3}\\pi(1)(3) = \\pi$. Doubled: $r = 2, h = 6$: $V_2 = \\frac{1}{3}\\pi(4)(6) = 8\\pi$. Ratio: $8\\pi / \\pi = 8$. Confirmed.\n\n**Why other choices are incorrect:**\n- Choice A: [TRAP: partial_calculation] $2 = 2^1$. This applies the scale factor linearly, as if volume were one-dimensional. Doubling ALL dimensions means three length factors each contribute a factor of 2.\n- Choice B: [TRAP: partial_calculation] $4 = 2^2$. This accounts for the squared radius ($r^2 \\to 4r^2$) but forgets that the height also doubles, contributing another factor of 2.\n- Choice C: [TRAP: arithmetic_slip] $6 = 2 + 4$. This incorrectly adds the individual scaling effects instead of multiplying them. The radius contributes a factor of $2^2 = 4$ and the height contributes $2^1 = 2$; the correct combination is $4 \\times 2 = 8$, not $4 + 2 = 6$.\n\n**Key concept:** The volume scaling law $k^3$ applies universally to ALL 3D shapes, including cones. The $\\frac{1}{3}$ coefficient cancels in the ratio and does not affect scaling. Whether it's a cube, sphere, cone, or any solid, doubling all dimensions always multiplies volume by $8$.\n\n**Calculator tip:** For any scaling problem: count the total exponent of the scale factor in the formula. For cones: $r^2 h$ has total power $2 + 1 = 3$, so the factor is $k^3$.",
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
      explanation: "**Choice B is correct.** Computing the triangular base area and multiplying by the prism length gives $V = 120$.\n\n**Step 1:** Find the area of the triangular base:\n$$B = \\frac{1}{2} \\times \\text{base} \\times \\text{height} = \\frac{1}{2}(6)(4) = 12$$\n\n**Step 2:** Multiply by the prism's length:\n$$V = B \\times l = 12 \\times 10 = 120$$\n\n**Verification:** $\\frac{1}{2} \\times 6 \\times 4 = 12$, and $12 \\times 10 = 120$. Confirmed.\n\n**Why other choices are incorrect:**\n- Choice A: [TRAP: partial_calculation] $60 = \\frac{1}{2}(6)(4)(10) \\div 2$... actually $60 = 6 \\times 10 = 60$ or $\\frac{1}{2}(120) = 60$. This may result from applying the $\\frac{1}{2}$ factor twice, or only multiplying base by length without the height.\n- Choice C: [TRAP: partial_calculation] $240 = 6 \\times 4 \\times 10$. This multiplies all three numbers without the $\\frac{1}{2}$ factor for the triangle. This is the volume of a rectangular prism, not a triangular prism.\n- Choice D: [TRAP: arithmetic_slip] $480 = 2 \\times 240$. This doubles the rectangular prism volume, perhaps from an error where the student multiplied by 2 instead of dividing by 2.\n\n**Key concept:** $V_{\\text{triangular prism}} = \\frac{1}{2} \\times b \\times h_{\\triangle} \\times l$, where $b$ and $h_{\\triangle}$ define the triangular base and $l$ is the prism length. The $\\frac{1}{2}$ comes from the triangle area formula.\n\n**Calculator tip:** Compute the base area as a separate step: write $B = 12$ first, then multiply by the length. This prevents forgetting the $\\frac{1}{2}$ factor.",
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
      explanation: "**Choice A is correct.** The tent has a right-triangular cross-section, giving a volume of $30$ m$^3$.\n\n**Step 1:** Find the area of the right-triangle cross-section:\n$$B = \\frac{1}{2} \\times \\text{leg}_1 \\times \\text{leg}_2 = \\frac{1}{2}(3)(4) = 6 \\text{ m}^2$$\n\n**Step 2:** Multiply by the prism length:\n$$V = B \\times l = 6 \\times 5 = 30 \\text{ m}^3$$\n\n**Verification:** $\\frac{1}{2} \\times 3 \\times 4 = 6$, and $6 \\times 5 = 30$. Confirmed.\n\n**Why other choices are incorrect:**\n- Choice B: [TRAP: partial_calculation] $60 = 3 \\times 4 \\times 5$. This multiplies all three dimensions without the $\\frac{1}{2}$ for the triangular base, treating the tent as a rectangular prism.\n- Choice C: [TRAP: arithmetic_slip] $120 = 2 \\times 60$. This doubles the incorrect rectangular volume, compounding the error of forgetting the $\\frac{1}{2}$ with an additional multiplication by 2.\n- Choice D: [TRAP: partial_calculation] $15 = \\frac{1}{2}(3)(4) + \\frac{1}{2}(10)$... or $15 = 3 \\times 5 = 15$. This multiplies only one leg by the length, omitting the other leg entirely from the calculation.\n\n**Key concept:** For a right-triangular prism, the two legs of the right triangle serve as base and height: $B = \\frac{1}{2} \\times \\text{leg}_1 \\times \\text{leg}_2$. Then $V = B \\times l$.\n\n**Calculator tip:** Identify the triangle type first. For a right triangle, the two legs are the base and height. For other triangles, you may need additional information (like the altitude).",
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
      explanation: "**Choice B is correct.** Dividing the volume by the base area gives a prism length of $6$ cm.\n\n**Step 1:** Use the prism volume formula:\n$$V = B \\times l$$\n\n**Step 2:** Solve for the length:\n$$l = \\frac{V}{B} = \\frac{90}{15} = 6 \\text{ cm}$$\n\n**Verification:** Check: $15 \\times 6 = 90$ cm$^3$. Confirmed.\n\n**Why other choices are incorrect:**\n- Choice A: [TRAP: arithmetic_slip] $3 = 90/30$. This may result from incorrectly doubling the base area to 30 (perhaps multiplying by 2 instead of using the given area directly) before dividing.\n- Choice C: [TRAP: reversed_operation] $75 = 90 - 15$. This subtracts the base area from the volume, applying an additive operation where a multiplicative one is required.\n- Choice D: [TRAP: reversed_operation] $1{,}350 = 90 \\times 15$. This multiplies volume by the base area instead of dividing. Students who set up the equation incorrectly ($l = V \\times B$) make this error.\n\n**Key concept:** $V = Bh$ works for all prisms. When the base area is given directly, you skip computing it and simply divide: $l = V/B$. Always check: does $B \\times l = V$?\n\n**Calculator tip:** This is a one-step division: $90 \\div 15 = 6$. Always verify by multiplying your answer back: $15 \\times 6 = 90$.",
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
      explanation: "**Choice A is correct.** Using the equilateral triangle area formula and multiplying by the length gives $V = 36\\sqrt{3}$.\n\n**Step 1:** Find the equilateral triangle base area using the given formula:\n$$B = \\frac{s^2\\sqrt{3}}{4} = \\frac{(4)^2\\sqrt{3}}{4} = \\frac{16\\sqrt{3}}{4} = 4\\sqrt{3}$$\n\n**Step 2:** Multiply by the prism length:\n$$V = B \\times l = 4\\sqrt{3} \\times 9 = 36\\sqrt{3}$$\n\n**Verification:** $4^2 = 16$, $16/4 = 4$, and $4 \\times 9 = 36$. So $V = 36\\sqrt{3}$. Confirmed.\n\n**Why other choices are incorrect:**\n- Choice B: [TRAP: partial_calculation] $18\\sqrt{3} = \\frac{36\\sqrt{3}}{2}$. This may come from an extra $\\frac{1}{2}$ factor, perhaps applying the triangle's $\\frac{1}{2}bh$ formula on top of the already-complete equilateral formula.\n- Choice C: [TRAP: partial_calculation] $9\\sqrt{3} = \\frac{(4)^2\\sqrt{3}}{4} \\times \\frac{9}{4}$... actually $9\\sqrt{3}$ could come from computing $B = \\sqrt{3}$ (using $s = 2$ by mistake) and $\\sqrt{3} \\times 9 = 9\\sqrt{3}$, or from dividing $36\\sqrt{3}$ by 4.\n- Choice D: [TRAP: arithmetic_slip] $72\\sqrt{3} = 2 \\times 36\\sqrt{3}$. This doubles the correct answer, possibly from using $B = \\frac{s^2\\sqrt{3}}{2}$ (with 2 instead of 4 in the denominator) or from a multiplication error.\n\n**Key concept:** The equilateral triangle area formula $B = \\frac{s^2\\sqrt{3}}{4}$ is given on the SAT reference sheet. Plug in the side length, simplify, then multiply by the prism length for $V = Bl$.\n\n**Calculator tip:** Compute step by step: $s^2 = 16$, divide by $4$ to get $4$, then multiply by $9$ to get $36$. Carry the $\\sqrt{3}$ through symbolically.",
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
      explanation: "**Choice B is correct.** The ramp's volume is the triangular face area times the width, giving $144$ ft$^3$.\n\n**Step 1:** Find the area of the triangular face:\n$$B = \\frac{1}{2} \\times \\text{base} \\times \\text{height} = \\frac{1}{2}(8)(3) = 12 \\text{ ft}^2$$\n\n**Step 2:** Multiply by the ramp width (prism length):\n$$V = B \\times w = 12 \\times 12 = 144 \\text{ ft}^3$$\n\n**Verification:** $\\frac{1}{2} \\times 8 \\times 3 = 12$, and $12 \\times 12 = 144$. Also, this is half of a $8 \\times 3 \\times 12 = 288$ rectangular box, and $288/2 = 144$. Confirmed.\n\n**Why other choices are incorrect:**\n- Choice A: [TRAP: partial_calculation] $72 = \\frac{1}{2}(144)$. This applies the $\\frac{1}{2}$ factor twice: once correctly for the triangle area, and then erroneously again to the final volume.\n- Choice C: [TRAP: partial_calculation] $288 = 8 \\times 3 \\times 12$. This multiplies all three dimensions without the $\\frac{1}{2}$ for the triangular base, computing the volume of a rectangular prism instead of a triangular one.\n- Choice D: [TRAP: partial_calculation] $36 = \\frac{1}{2}(8)(3) \\times 3$... or $36 = 12 \\times 3$. This computes the triangular area correctly ($12$ ft$^2$) but then multiplies by the height ($3$) again instead of by the width ($12$), confusing the dimensions.\n\n**Key concept:** Real-world triangular prisms (ramps, wedges, roofs) require identifying: (1) the triangular face, (2) the depth/width/length that the triangle extends through. $V = \\frac{1}{2}bh \\times l$.\n\n**Calculator tip:** Label each dimension clearly: \"triangle base = 8, triangle height = 3, prism depth = 12.\" This prevents mixing up which numbers go into the triangle area vs. the prism length.",
      skills: ['volume-prism']
    }
  ]
};
