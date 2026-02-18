// Practice questions for Circles module
// Questions are organized by SECTION (question type)

export const circlesQuestions = {
  // Section: Circle Fundamentals
  "Circle Fundamentals": [
    {
      id: 1,
      difficulty: "easy",
      question: "A circle has a radius of 7 cm. What is the diameter of the circle?",
      choices: [
        { id: "A", text: "3.5 cm" },
        { id: "B", text: "7 cm" },
        { id: "C", text: "14 cm" },
        { id: "D", text: "49 cm" }
      ],
      correctAnswer: "C",
      hint: "Think about the relationship between radius and diameter. How many radii fit across the full width of a circle?",
      explanation: "**Choice C is correct.** The diameter is always twice the radius.\n\n**Step 1:** Apply the diameter formula: $d = 2r$\n\n**Step 2:** Substitute the given radius: $d = 2 \\times 7 = 14$ cm\n\n**Verification:** If $d = 14$, then $r = 14 \\div 2 = 7$ cm, which matches the given radius.\n\n**Why other choices are incorrect:**\n• Choice A: [TRAP: reversed_operation] Divides by 2 instead of multiplying ($7 \\div 2 = 3.5$). This confuses the diameter-to-radius conversion with the radius-to-diameter conversion.\n• Choice B: [TRAP: partial_calculation] Uses the radius itself without applying any conversion. Students sometimes confuse radius and diameter as the same measurement.\n• Choice D: [TRAP: reversed_operation] Squares the radius ($7^2 = 49$) instead of doubling it. This confusion arises from mixing up the diameter formula with the area formula $A = \\pi r^2$.\n\n**Key concept:** The diameter of a circle is always exactly twice its radius: $d = 2r$. Conversely, $r = \\frac{d}{2}$.\n\n**Calculator tip:** On Desmos, type $(x-0)^2 + (y-0)^2 = 7^2$ to graph the circle and visually confirm the diameter spans 14 units.",
      skills: ["circle-parts"]
    },
    {
      id: 2,
      difficulty: "easy",
      question: "If the diameter of a circle is 20 inches, what is the radius?",
      choices: [
        { id: "A", text: "5 inches" },
        { id: "B", text: "10 inches" },
        { id: "C", text: "20 inches" },
        { id: "D", text: "40 inches" }
      ],
      correctAnswer: "B",
      hint: "The radius is a portion of the diameter. Consider what fraction of the diameter equals the radius.",
      explanation: "**Choice B is correct.** The radius is half the diameter.\n\n**Step 1:** Apply the radius formula: $r = \\frac{d}{2}$\n\n**Step 2:** Substitute the given diameter: $r = \\frac{20}{2} = 10$ inches\n\n**Verification:** If $r = 10$, then $d = 2 \\times 10 = 20$ inches, which matches the given diameter.\n\n**Why other choices are incorrect:**\n• Choice A: [TRAP: arithmetic_slip] Divides by 4 instead of by 2 ($20 \\div 4 = 5$). This might result from halving twice or confusing radius with a quarter of the diameter.\n• Choice C: [TRAP: partial_calculation] Uses the diameter value directly without converting. The radius and diameter are related but never equal.\n• Choice D: [TRAP: reversed_operation] Doubles the diameter instead of halving it ($20 \\times 2 = 40$). This applies the diameter-from-radius formula backwards.\n\n**Key concept:** The radius is always exactly half the diameter: $r = \\frac{d}{2}$. This relationship is fundamental to every circle calculation on the SAT.",
      skills: ["circle-parts"]
    },
    {
      id: 3,
      difficulty: "medium",
      question: "A circle has a center at point O. If point P is on the circle and OP = 5, what is the radius of the circle?",
      choices: [
        { id: "A", text: "2.5" },
        { id: "B", text: "5" },
        { id: "C", text: "10" },
        { id: "D", text: "25" }
      ],
      correctAnswer: "B",
      hint: "Remember what the radius represents: the distance from the center to any point on the circle.",
      explanation: "**Choice B is correct.** By definition, the radius is the distance from the center to any point on the circle.\n\n**Step 1:** Identify that $O$ is the center and $P$ lies on the circle.\n\n**Step 2:** The distance $OP = 5$ is by definition the radius, since it connects the center to a point on the circle: $r = OP = 5$.\n\n**Verification:** Every point on the circle is exactly $r = 5$ units from center $O$. Since $P$ is on the circle and $OP = 5$, this confirms $r = 5$.\n\n**Why other choices are incorrect:**\n• Choice A: [TRAP: reversed_operation] Halves the value ($5 \\div 2 = 2.5$), incorrectly treating $OP$ as a diameter rather than a radius.\n• Choice C: [TRAP: reversed_operation] Doubles the value ($5 \\times 2 = 10$), incorrectly treating the center-to-circle distance as a radius that needs to be converted to diameter.\n• Choice D: [TRAP: partial_calculation] Squares the value ($5^2 = 25$), confusing the radius with $r^2$ as it appears in the circle equation or area formula.\n\n**Key concept:** The radius $r$ is defined as the distance from the center of a circle to any point on the circle. If a segment connects the center to the circle, its length IS the radius.",
      skills: ["circle-parts"]
    },
    {
      id: 4,
      difficulty: "medium",
      question: "Which of the following is always true about a chord of a circle?",
      choices: [
        { id: "A", text: "It passes through the center" },
        { id: "B", text: "It is equal to the radius" },
        { id: "C", text: "Its endpoints are on the circle" },
        { id: "D", text: "It is perpendicular to the diameter" }
      ],
      correctAnswer: "C",
      hint: "Focus on the definition of a chord. What must be true about where a chord starts and ends?",
      explanation: "**Choice C is correct.** A chord is a line segment whose endpoints both lie on the circle.\n\n**Step 1:** Recall the definition: a chord is any line segment with both endpoints on the circle.\n\n**Step 2:** This is the only property that is ALWAYS true for every chord. Some chords pass through the center (diameters), but not all do.\n\n**Verification:** Consider any chord you can draw -- no matter the length or position, both endpoints must be on the circle. This holds universally.\n\n**Why other choices are incorrect:**\n• Choice A: [TRAP: reversed_operation] Confuses a chord with a diameter. A diameter is a special chord that passes through the center, but most chords do not. Students mix up the general concept (chord) with the specific case (diameter).\n• Choice B: [TRAP: partial_calculation] A chord can be any length from nearly $0$ up to the diameter $2r$. There is no requirement that a chord equals the radius.\n• Choice D: [TRAP: reversed_operation] There is no geometric rule requiring chords to be perpendicular to a diameter. A chord can make any angle with the diameter.\n\n**Key concept:** A chord is defined solely by having both endpoints on the circle. A diameter is the special case of a chord that passes through the center, and it is the longest possible chord.",
      skills: ["circle-parts"]
    },
    {
      id: 5,
      difficulty: "hard",
      question: "The longest chord in a circle is the:",
      choices: [
        { id: "A", text: "Radius" },
        { id: "B", text: "Diameter" },
        { id: "C", text: "Arc" },
        { id: "D", text: "Secant" }
      ],
      correctAnswer: "B",
      hint: "Think about which chord passes through the center of the circle and would therefore span the greatest distance.",
      explanation: "**Choice B is correct.** The diameter is the longest chord because it passes through the center.\n\n**Step 1:** A chord is a segment connecting two points on the circle. The maximum distance between two such points occurs when the segment passes through the center.\n\n**Step 2:** The diameter passes through the center and has length $d = 2r$. Any other chord has a shorter path because it \"cuts a corner\" instead of going through the center.\n\n**Verification:** For a circle with radius $r$, any chord at distance $d$ from the center has length $2\\sqrt{r^2 - d^2}$. When $d = 0$ (passing through center), the length is $2\\sqrt{r^2} = 2r$, which is the maximum.\n\n**Why other choices are incorrect:**\n• Choice A: [TRAP: reversed_operation] The radius is not a chord at all -- it connects the center to the circle, but a chord connects two points on the circle. A radius has only one endpoint on the circle.\n• Choice C: [TRAP: reversed_operation] An arc is a curved portion of the circle, not a line segment. Arcs are not chords.\n• Choice D: [TRAP: reversed_operation] A secant is a line that intersects the circle at two points, but it extends infinitely in both directions. A secant is not a segment and therefore not a chord.\n\n**Key concept:** The diameter is the longest chord of a circle. This fact appears frequently on the SAT, often embedded in geometry problems where you need to recognize the maximum distance across a circle is $2r$.",
      skills: ["circle-parts"]
    }
  ],

  // Section: Area Problems
  "Area Problems": [
    {
      id: 1,
      difficulty: "easy",
      question: "What is the area of a circle with radius 6? (Leave answer in terms of π)",
      choices: [
        { id: "A", text: "6π" },
        { id: "B", text: "12π" },
        { id: "C", text: "36π" },
        { id: "D", text: "72π" }
      ],
      correctAnswer: "C",
      hint: "Use the area formula A = πr². Make sure to square the radius, not just multiply it by π.",
      explanation: "**Choice C is correct.** The area of a circle is $\\pi r^2$.\n\n**Step 1:** Write the area formula: $A = \\pi r^2$\n\n**Step 2:** Substitute $r = 6$: $A = \\pi(6)^2 = \\pi \\cdot 36 = 36\\pi$\n\n**Verification:** $6^2 = 36$, so $A = 36\\pi$. Numerically, $36\\pi \\approx 113.1$ square units, which is reasonable for a circle of radius 6.\n\n**Why other choices are incorrect:**\n• Choice A: [TRAP: partial_calculation] Uses $\\pi r$ instead of $\\pi r^2$ -- forgets to square the radius. This is the most common mistake on circle area problems.\n• Choice B: [TRAP: reversed_operation] Uses the circumference formula $C = 2\\pi r = 2\\pi(6) = 12\\pi$ instead of the area formula. Students frequently confuse area ($\\pi r^2$) and circumference ($2\\pi r$).\n• Choice D: [TRAP: arithmetic_slip] Computes $2 \\times 36\\pi = 72\\pi$, perhaps from incorrectly combining the area and circumference formulas or doubling the result.\n\n**Key concept:** Area of a circle: $A = \\pi r^2$. Always square the radius first, then multiply by $\\pi$. Never confuse with circumference $C = 2\\pi r$.\n\n**Calculator tip:** On Desmos, you can verify by computing $\\pi \\cdot 6^2$ in the expression line.",
      skills: ["circle-area"]
    },
    {
      id: 2,
      difficulty: "easy",
      question: "A circular pizza has a diameter of 16 inches. What is its area in square inches?",
      choices: [
        { id: "A", text: "16π" },
        { id: "B", text: "32π" },
        { id: "C", text: "64π" },
        { id: "D", text: "256π" }
      ],
      correctAnswer: "C",
      hint: "The area formula uses radius, not diameter. First convert the diameter to radius, then apply the formula.",
      explanation: "**Choice C is correct.** Convert the diameter to radius first, then apply the area formula.\n\n**Step 1:** Find the radius: $r = \\frac{d}{2} = \\frac{16}{2} = 8$ inches\n\n**Step 2:** Apply the area formula: $A = \\pi r^2 = \\pi(8)^2 = 64\\pi$ square inches\n\n**Verification:** $8^2 = 64$, so $A = 64\\pi \\approx 201.1$ square inches. For a 16-inch pizza, this is a reasonable area.\n\n**Why other choices are incorrect:**\n• Choice A: [TRAP: partial_calculation] Uses $\\pi r$ instead of $\\pi r^2$, computing $\\pi \\cdot 16 = 16\\pi$ or $\\pi \\cdot 8 \\cdot 2$. Forgetting to square the radius is the #1 circle area trap.\n• Choice B: [TRAP: reversed_operation] Uses the circumference formula $C = 2\\pi r = 2\\pi(8) = 32\\pi$ instead of the area formula. Confusing area and circumference is extremely common on the SAT.\n• Choice D: [TRAP: partial_calculation] Uses the diameter instead of the radius in the area formula: $\\pi(16)^2 = 256\\pi$. Always convert diameter to radius before using $A = \\pi r^2$.\n\n**Key concept:** When given a diameter, always halve it to get the radius before computing area: $A = \\pi\\left(\\frac{d}{2}\\right)^2 = \\frac{\\pi d^2}{4}$.\n\n**Calculator tip:** On Desmos, enter $\\pi \\cdot (16/2)^2$ to compute this directly.",
      skills: ["circle-area"]
    },
    {
      id: 3,
      difficulty: "medium",
      question: "If the area of a circle is 100π square meters, what is the radius?",
      choices: [
        { id: "A", text: "5 meters" },
        { id: "B", text: "10 meters" },
        { id: "C", text: "25 meters" },
        { id: "D", text: "50 meters" }
      ],
      correctAnswer: "B",
      hint: "Work backwards from the area formula. If A = πr², then r² = A/π. What number squared gives you 100?",
      explanation: "**Choice B is correct.** Working backwards from the area formula gives $r = 10$ meters.\n\n**Step 1:** Set up the equation: $A = \\pi r^2$, so $100\\pi = \\pi r^2$\n\n**Step 2:** Divide both sides by $\\pi$: $100 = r^2$\n\n**Step 3:** Take the square root: $r = \\sqrt{100} = 10$ meters\n\n**Verification:** Check: $A = \\pi(10)^2 = 100\\pi$. This matches the given area.\n\n**Why other choices are incorrect:**\n• Choice A: [TRAP: arithmetic_slip] Takes $\\sqrt{100} = 10$ but then halves it to get 5, perhaps confusing radius and diameter. Or computes $\\sqrt{25} = 5$ after an arithmetic error.\n• Choice C: [TRAP: partial_calculation] Stops at $r^2 = 100$ and divides by 4 to get 25, or confuses $r^2$ with $r$. Forgetting to take the square root of $r^2$ is a common error.\n• Choice D: [TRAP: reversed_operation] Computes $\\frac{100}{2} = 50$, perhaps confusing the area formula with the circumference formula or applying an incorrect operation.\n\n**Key concept:** To find the radius from area, use $r = \\sqrt{\\frac{A}{\\pi}}$. When the area is given as a multiple of $\\pi$, the $\\pi$ cancels cleanly.\n\n**Calculator tip:** On Desmos, type $\\sqrt{100}$ to confirm $r = 10$.",
      skills: ["circle-area"]
    },
    {
      id: 4,
      difficulty: "medium",
      question: "A circular garden has an area of 154 square feet. Using the approximation below for π, what is the radius of the garden?",
      questionFormula: { text: "π ≈ ", fraction: { numerator: "22", denominator: "7" } },
      choices: [
        { id: "A", text: "7 feet" },
        { id: "B", text: "14 feet" },
        { id: "C", text: "49 feet" },
        { id: "D", text: "77 feet" }
      ],
      correctAnswer: "A",
      hint: "Set up the equation 154 = (22/7)r² and solve for r². Multiply both sides by 7/22 to isolate r².",
      explanation: "**Choice A is correct.** Using $\\pi \\approx \\frac{22}{7}$ and solving for $r$ gives 7 feet.\n\n**Step 1:** Set up the equation: $A = \\pi r^2 \\Rightarrow 154 = \\frac{22}{7} \\cdot r^2$\n\n**Step 2:** Multiply both sides by $\\frac{7}{22}$: $r^2 = 154 \\times \\frac{7}{22} = \\frac{1078}{22} = 49$\n\n**Step 3:** Take the square root: $r = \\sqrt{49} = 7$ feet\n\n**Verification:** Check: $A = \\frac{22}{7} \\times 7^2 = \\frac{22}{7} \\times 49 = 22 \\times 7 = 154$ square feet.\n\n**Why other choices are incorrect:**\n• Choice B: [TRAP: reversed_operation] Computes the diameter instead of the radius ($d = 2r = 2 \\times 7 = 14$), or confuses the steps by not dividing correctly.\n• Choice C: [TRAP: partial_calculation] Stops at $r^2 = 49$ and reports 49 as the answer without taking the square root. Always remember: solving for $r^2$ is not the same as solving for $r$.\n• Choice D: [TRAP: arithmetic_slip] Computes $154 \\div 2 = 77$, perhaps misapplying a formula or using an incorrect simplification.\n\n**Key concept:** When using $\\pi \\approx \\frac{22}{7}$, multiply by the reciprocal $\\frac{7}{22}$ to isolate $r^2$. The SAT occasionally provides $\\pi$ approximations, so practice working with fractions.\n\n**Calculator tip:** Compute $154 \\times 7 \\div 22$ on Desmos, then take the square root.",
      skills: ["circle-area"]
    },
    {
      id: 5,
      difficulty: "hard",
      question: "If the radius of a circle is doubled, by what factor does the area increase?",
      choices: [
        { id: "A", text: "2" },
        { id: "B", text: "4" },
        { id: "C", text: "π" },
        { id: "D", text: "2π" }
      ],
      correctAnswer: "B",
      hint: "Compare π(2r)² with πr². Since radius is squared in the area formula, doubling it has a multiplied effect.",
      explanation: "**Choice B is correct.** Doubling the radius quadruples the area because radius is squared in the area formula.\n\n**Step 1:** Original area: $A_1 = \\pi r^2$\n\n**Step 2:** New area with doubled radius: $A_2 = \\pi(2r)^2 = \\pi \\cdot 4r^2 = 4\\pi r^2$\n\n**Step 3:** Find the factor: $\\frac{A_2}{A_1} = \\frac{4\\pi r^2}{\\pi r^2} = 4$\n\n**Verification:** Test with $r = 3$: Original area $= 9\\pi$. Doubled radius $= 6$: New area $= 36\\pi$. Factor $= \\frac{36\\pi}{9\\pi} = 4$.\n\n**Why other choices are incorrect:**\n• Choice A: [TRAP: partial_calculation] Assumes doubling the radius doubles the area. This ignores that radius is squared in the formula. Since $A = \\pi r^2$, the effect of doubling is $(2)^2 = 4$, not just $2$.\n• Choice C: [TRAP: reversed_operation] The factor $\\pi$ has no role in scaling when comparing areas with the same $\\pi$. The $\\pi$ cancels in the ratio.\n• Choice D: [TRAP: reversed_operation] Incorrectly combines the factor of 2 with $\\pi$. The $\\pi$ is present in both areas and cancels in the ratio.\n\n**Key concept:** For circles, if the radius is multiplied by factor $k$, the area is multiplied by $k^2$. This is because $A = \\pi r^2$ and $\\pi(kr)^2 = k^2 \\pi r^2$. This scaling principle is a favorite SAT topic.\n\n**Calculator tip:** On Desmos, compare $\\pi \\cdot 3^2$ and $\\pi \\cdot 6^2$ to see the factor of 4 directly.",
      skills: ["circle-area"]
    }
  ],

  // Section: Circumference & Arc Length
  "Circumference & Arc Length": [
    {
      id: 1,
      difficulty: "easy",
      question: "What is the circumference of a circle with radius 5? (Leave answer in terms of π)",
      choices: [
        { id: "A", text: "5π" },
        { id: "B", text: "10π" },
        { id: "C", text: "25π" },
        { id: "D", text: "50π" }
      ],
      correctAnswer: "B",
      hint: "Use the circumference formula C = 2πr. The circumference involves the radius multiplied by 2π.",
      explanation: "**Choice B is correct.** The circumference formula gives $C = 2\\pi r = 10\\pi$.\n\n**Step 1:** Write the circumference formula: $C = 2\\pi r$\n\n**Step 2:** Substitute $r = 5$: $C = 2\\pi(5) = 10\\pi$\n\n**Verification:** Alternatively, $C = \\pi d = \\pi(10) = 10\\pi$. Both formulas agree.\n\n**Why other choices are incorrect:**\n• Choice A: [TRAP: partial_calculation] Uses $\\pi r = 5\\pi$ instead of $2\\pi r$. Forgetting the factor of 2 in the circumference formula is a common error.\n• Choice C: [TRAP: reversed_operation] Uses the area formula $\\pi r^2 = \\pi(5)^2 = 25\\pi$ instead of the circumference formula. Confusing $C = 2\\pi r$ with $A = \\pi r^2$ is one of the most frequent SAT mistakes.\n• Choice D: [TRAP: arithmetic_slip] Computes $2 \\times 25\\pi = 50\\pi$, perhaps from incorrectly applying $2\\pi r^2$ -- a formula that does not exist.\n\n**Key concept:** Circumference: $C = 2\\pi r = \\pi d$. Area: $A = \\pi r^2$. Memorize both and know which to use. Circumference is linear in $r$; area is quadratic in $r$.\n\n**Calculator tip:** On Desmos, type $2\\pi \\cdot 5$ to verify.",
      skills: ["circumference"]
    },
    {
      id: 2,
      difficulty: "easy",
      question: "A circle has a circumference of 24π cm. What is the diameter?",
      choices: [
        { id: "A", text: "6 cm" },
        { id: "B", text: "12 cm" },
        { id: "C", text: "24 cm" },
        { id: "D", text: "48 cm" }
      ],
      correctAnswer: "C",
      hint: "Use the formula C = πd. If the circumference is 24π, what value of d makes this equation true?",
      explanation: "**Choice C is correct.** Using $C = \\pi d$, we find $d = 24$ cm.\n\n**Step 1:** Write the circumference-diameter formula: $C = \\pi d$\n\n**Step 2:** Substitute: $24\\pi = \\pi d$\n\n**Step 3:** Divide both sides by $\\pi$: $d = 24$ cm\n\n**Verification:** Check: $C = \\pi(24) = 24\\pi$ cm. This matches the given circumference.\n\n**Why other choices are incorrect:**\n• Choice A: [TRAP: arithmetic_slip] Divides by 4 instead of correctly solving: $24 \\div 4 = 6$. This might come from confusing the calculation or finding the radius and then halving again.\n• Choice B: [TRAP: partial_calculation] Finds the radius instead of the diameter: $r = \\frac{C}{2\\pi} = \\frac{24\\pi}{2\\pi} = 12$. The question asks for diameter, not radius.\n• Choice D: [TRAP: reversed_operation] Doubles instead of recognizing the answer directly: $24 \\times 2 = 48$, perhaps applying $d = 2r$ to the circumference coefficient instead of solving the equation.\n\n**Key concept:** From $C = \\pi d$, the diameter is simply $d = \\frac{C}{\\pi}$. When $C$ is given as a multiple of $\\pi$, the $\\pi$ cancels and the coefficient is the diameter.",
      skills: ["circumference"]
    },
    {
      id: 3,
      difficulty: "medium",
      question: "What is the length of an arc with a central angle of 60° in a circle with radius 9?",
      choices: [
        { id: "A", text: "3π" },
        { id: "B", text: "6π" },
        { id: "C", text: "9π" },
        { id: "D", text: "18π" }
      ],
      correctAnswer: "A",
      hint: "Arc length is a fraction of the circumference. The fraction equals the central angle divided by 360°.",
      explanation: "**Choice A is correct.** The arc length is the fractional portion of the circumference corresponding to the central angle.\n\n**Step 1:** Write the arc length formula: $\\text{Arc length} = \\frac{\\theta}{360°} \\times 2\\pi r$\n\n**Step 2:** Substitute $\\theta = 60°$ and $r = 9$: $\\text{Arc length} = \\frac{60°}{360°} \\times 2\\pi(9) = \\frac{1}{6} \\times 18\\pi = 3\\pi$\n\n**Verification:** $60°$ is $\\frac{1}{6}$ of a full circle. The full circumference is $2\\pi(9) = 18\\pi$. One-sixth of $18\\pi = 3\\pi$.\n\n**Why other choices are incorrect:**\n• Choice B: [TRAP: arithmetic_slip] Computes $\\frac{1}{3} \\times 18\\pi = 6\\pi$, using $\\frac{60}{180}$ instead of $\\frac{60}{360}$. Students sometimes divide by $180°$ (half circle) instead of $360°$ (full circle).\n• Choice C: [TRAP: partial_calculation] Uses $\\pi r = 9\\pi$ without applying the angle fraction. This gives the semicircular arc length, not the 60-degree arc.\n• Choice D: [TRAP: partial_calculation] Computes the full circumference $2\\pi(9) = 18\\pi$ without taking the fraction. The arc is only part of the circle, not the entire circumference.\n\n**Key concept:** Arc length $= \\frac{\\theta}{360°} \\times 2\\pi r$, where $\\theta$ is the central angle in degrees. The fraction $\\frac{\\theta}{360°}$ represents what portion of the full circle the arc covers.\n\n**Calculator tip:** On Desmos, compute $(60/360) \\cdot 2\\pi \\cdot 9$ to verify.",
      skills: ["arc-length"]
    },
    {
      id: 4,
      difficulty: "medium",
      question: "In a circle with radius 12, what central angle creates an arc of length 4π?",
      choices: [
        { id: "A", text: "30°" },
        { id: "B", text: "60°" },
        { id: "C", text: "90°" },
        { id: "D", text: "120°" }
      ],
      correctAnswer: "B",
      hint: "Use the arc length formula and solve for θ. First find what fraction of the circumference the arc represents.",
      explanation: "**Choice B is correct.** Solving the arc length formula for $\\theta$ gives $60°$.\n\n**Step 1:** Write the arc length formula: $\\text{Arc length} = \\frac{\\theta}{360°} \\times 2\\pi r$\n\n**Step 2:** Substitute known values: $4\\pi = \\frac{\\theta}{360°} \\times 2\\pi(12) = \\frac{\\theta}{360°} \\times 24\\pi$\n\n**Step 3:** Divide both sides by $24\\pi$: $\\frac{\\theta}{360°} = \\frac{4\\pi}{24\\pi} = \\frac{1}{6}$\n\n**Step 4:** Solve for $\\theta$: $\\theta = \\frac{360°}{6} = 60°$\n\n**Verification:** Arc length $= \\frac{60°}{360°} \\times 24\\pi = \\frac{1}{6} \\times 24\\pi = 4\\pi$. Confirmed.\n\n**Why other choices are incorrect:**\n• Choice A: [TRAP: arithmetic_slip] Gets $\\frac{\\theta}{360°} = \\frac{1}{12}$, giving $\\theta = 30°$. This error comes from dividing $4\\pi$ by $48\\pi$ (using $4\\pi r$ or making an arithmetic mistake).\n• Choice C: [TRAP: reversed_operation] Assumes $\\frac{1}{4}$ of the circle without calculation, giving $\\theta = 90°$. This doesn't match the fraction $\\frac{4\\pi}{24\\pi} = \\frac{1}{6}$.\n• Choice D: [TRAP: arithmetic_slip] Computes $\\frac{\\theta}{360°} = \\frac{1}{3}$, giving $\\theta = 120°$. This comes from using $r = 6$ (halving the radius by mistake) or dividing $4\\pi$ by $12\\pi$ instead of $24\\pi$.\n\n**Key concept:** To find the central angle from arc length: $\\theta = \\frac{\\text{Arc length}}{2\\pi r} \\times 360°$. The fraction of the arc to the full circumference equals the fraction of the angle to $360°$.",
      skills: ["arc-length"]
    },
    {
      id: 5,
      difficulty: "hard",
      question: "A semicircular arc has length 8π. What is the radius of the circle?",
      choices: [
        { id: "A", text: "4" },
        { id: "B", text: "8" },
        { id: "C", text: "16" },
        { id: "D", text: "32" }
      ],
      correctAnswer: "B",
      hint: "A semicircle is half of a full circle. Its arc length is half the circumference, which equals πr.",
      explanation: "**Choice B is correct.** A semicircular arc is half the circumference, so $\\pi r = 8\\pi$ gives $r = 8$.\n\n**Step 1:** A semicircle spans $180°$, which is half the full circle. The semicircular arc length is: $\\text{Arc} = \\frac{1}{2} \\times 2\\pi r = \\pi r$\n\n**Step 2:** Set up the equation: $\\pi r = 8\\pi$\n\n**Step 3:** Divide both sides by $\\pi$: $r = 8$\n\n**Verification:** Full circumference $= 2\\pi(8) = 16\\pi$. Half of that $= 8\\pi$. Confirmed.\n\n**Why other choices are incorrect:**\n• Choice A: [TRAP: reversed_operation] Divides by $2\\pi$ instead of $\\pi$: $\\frac{8\\pi}{2\\pi} = 4$. This would be correct if $8\\pi$ were the full circumference, but it is only the semicircular arc.\n• Choice C: [TRAP: reversed_operation] Doubles instead of recognizing the answer: uses $2 \\times 8 = 16$, perhaps thinking the semicircle formula is $\\frac{\\pi r}{2}$ instead of $\\pi r$.\n• Choice D: [TRAP: arithmetic_slip] Computes $4 \\times 8 = 32$, perhaps applying multiple incorrect operations in sequence.\n\n**Key concept:** Semicircular arc length $= \\pi r$ (half of $2\\pi r$). This is a frequently tested shortcut on the SAT. More generally, the arc for a central angle $\\theta$ is $\\frac{\\theta}{360°} \\times 2\\pi r$.\n\n**Calculator tip:** On Desmos, solve $\\pi x = 8\\pi$ by graphing $y = \\pi x$ and $y = 8\\pi$ to find the intersection at $x = 8$.",
      skills: ["arc-length"]
    }
  ],

  // Section: Sector Area
  "Sector Area": [
    {
      id: 1,
      difficulty: "easy",
      question: "What is the area of a sector with central angle 90° in a circle with radius 8?",
      choices: [
        { id: "A", text: "8π" },
        { id: "B", text: "16π" },
        { id: "C", text: "32π" },
        { id: "D", text: "64π" }
      ],
      correctAnswer: "B",
      hint: "A sector's area is a fraction of the whole circle's area. 90° is what fraction of a full 360° circle?",
      explanation: "**Choice B is correct.** A 90-degree sector is one-quarter of the full circle area.\n\n**Step 1:** Write the sector area formula: $A_{\\text{sector}} = \\frac{\\theta}{360°} \\times \\pi r^2$\n\n**Step 2:** Substitute $\\theta = 90°$ and $r = 8$: $A_{\\text{sector}} = \\frac{90°}{360°} \\times \\pi(8)^2 = \\frac{1}{4} \\times 64\\pi = 16\\pi$\n\n**Verification:** Full circle area $= 64\\pi$. One-quarter $= 16\\pi$. This makes sense: a 90-degree sector is exactly one quarter of a circle.\n\n**Why other choices are incorrect:**\n• Choice A: [TRAP: partial_calculation] Computes $\\frac{1}{4} \\times 2\\pi r = \\frac{1}{4} \\times 16\\pi = 4\\pi$... actually gets $\\frac{1}{8} \\times 64\\pi = 8\\pi$ by using $\\frac{1}{8}$ instead of $\\frac{1}{4}$, or uses $\\pi r$ instead of $\\pi r^2$.\n• Choice C: [TRAP: arithmetic_slip] Computes $\\frac{1}{2} \\times 64\\pi = 32\\pi$, using $\\frac{90}{180} = \\frac{1}{2}$ instead of $\\frac{90}{360} = \\frac{1}{4}$. Always divide by 360, not 180.\n• Choice D: [TRAP: partial_calculation] Computes the full circle area $\\pi(8)^2 = 64\\pi$ without applying the sector fraction. A sector is only a part of the circle.\n\n**Key concept:** Sector area $= \\frac{\\theta}{360°} \\times \\pi r^2$. The fraction $\\frac{\\theta}{360°}$ is the same fraction used for arc length -- it represents the portion of the circle.\n\n**Calculator tip:** On Desmos, compute $(90/360) \\cdot \\pi \\cdot 8^2$ to verify.",
      skills: ["sector-area"]
    },
    {
      id: 2,
      difficulty: "easy",
      question: "A pizza slice represents a 45° sector of a circular pizza with radius 10 inches. What is the area of the slice?",
      choices: [
        { id: "A", text: "12.5π square inches" },
        { id: "B", text: "25π square inches" },
        { id: "C", text: "50π square inches" },
        { id: "D", text: "100π square inches" }
      ],
      correctAnswer: "A",
      hint: "Find what fraction of the whole pizza the slice represents (45°/360°), then multiply by the total area.",
      explanation: "**Choice A is correct.** A 45-degree sector is one-eighth of the circle.\n\n**Step 1:** Write the sector area formula: $A_{\\text{sector}} = \\frac{\\theta}{360°} \\times \\pi r^2$\n\n**Step 2:** Substitute $\\theta = 45°$ and $r = 10$: $A_{\\text{sector}} = \\frac{45°}{360°} \\times \\pi(10)^2 = \\frac{1}{8} \\times 100\\pi = 12.5\\pi$ square inches\n\n**Verification:** $45° \\times 8 = 360°$, confirming the fraction is $\\frac{1}{8}$. And $\\frac{100\\pi}{8} = 12.5\\pi$.\n\n**Why other choices are incorrect:**\n• Choice B: [TRAP: arithmetic_slip] Computes $\\frac{1}{4} \\times 100\\pi = 25\\pi$, using $\\frac{45}{180} = \\frac{1}{4}$ instead of $\\frac{45}{360} = \\frac{1}{8}$. Always divide by 360 for sector problems.\n• Choice C: [TRAP: partial_calculation] Computes $\\frac{1}{2} \\times 100\\pi = 50\\pi$, treating the slice as half the pizza instead of one-eighth.\n• Choice D: [TRAP: partial_calculation] Uses the full circle area $\\pi(10)^2 = 100\\pi$ without taking the sector fraction. The slice is only $\\frac{1}{8}$ of the pizza.\n\n**Key concept:** Sector area $= \\frac{\\theta}{360°} \\times \\pi r^2$. Quick mental math: $45° = \\frac{360°}{8}$, so a 45-degree slice is $\\frac{1}{8}$ of the circle.",
      skills: ["sector-area"]
    },
    {
      id: 3,
      difficulty: "medium",
      question: "If a sector has an area of 18π and a central angle of 60°, what is the radius of the circle?",
      choices: [
        { id: "A", text: "3√6" },
        { id: "B", text: "6" },
        { id: "C", text: "6√3" },
        { id: "D", text: "18" }
      ],
      correctAnswer: "C",
      hint: "Set up the sector area formula with known values and solve for r². Remember that 60° is 1/6 of a full circle.",
      explanation: "**Choice C is correct.** Solving the sector area formula for $r$ gives $r = 6\\sqrt{3}$.\n\n**Step 1:** Write the sector area formula: $A_{\\text{sector}} = \\frac{\\theta}{360°} \\times \\pi r^2$\n\n**Step 2:** Substitute known values: $18\\pi = \\frac{60°}{360°} \\times \\pi r^2 = \\frac{1}{6} \\pi r^2$\n\n**Step 3:** Multiply both sides by 6: $108\\pi = \\pi r^2$\n\n**Step 4:** Divide by $\\pi$: $r^2 = 108$\n\n**Step 5:** Simplify: $r = \\sqrt{108} = \\sqrt{36 \\times 3} = 6\\sqrt{3}$\n\n**Verification:** Sector area $= \\frac{1}{6} \\times \\pi(6\\sqrt{3})^2 = \\frac{1}{6} \\times \\pi(108) = 18\\pi$. Confirmed.\n\n**Why other choices are incorrect:**\n• Choice A: [TRAP: arithmetic_slip] Gets $r^2 = 54$ (by multiplying by 3 instead of 6), then $r = \\sqrt{54} = 3\\sqrt{6}$. The error is using $\\frac{60}{120}$ or another incorrect fraction.\n• Choice B: [TRAP: partial_calculation] Computes $r^2 = 36$ (perhaps from $18 \\times 2 = 36$), giving $r = 6$. This skips the correct multiplication by 6 from the $\\frac{1}{6}$ fraction.\n• Choice D: [TRAP: partial_calculation] Reports the coefficient from the given area ($18\\pi \\to 18$) without solving the equation. This is not the radius.\n\n**Key concept:** To find $r$ from sector area: $r = \\sqrt{\\frac{A_{\\text{sector}} \\times 360°}{\\theta \\times \\pi}}$. Always simplify square roots by factoring out perfect squares: $\\sqrt{108} = \\sqrt{36 \\cdot 3} = 6\\sqrt{3}$.",
      skills: ["sector-area"]
    },
    {
      id: 4,
      difficulty: "medium",
      question: "A sector of a circle with radius 6 has an area of 9π. What is the central angle of the sector?",
      choices: [
        { id: "A", text: "45°" },
        { id: "B", text: "60°" },
        { id: "C", text: "90°" },
        { id: "D", text: "120°" }
      ],
      correctAnswer: "C",
      hint: "First calculate the total area of the circle, then determine what fraction the sector area represents.",
      explanation: "**Choice C is correct.** The sector is $\\frac{1}{4}$ of the circle, so the central angle is $90°$.\n\n**Step 1:** Write the sector area formula: $A_{\\text{sector}} = \\frac{\\theta}{360°} \\times \\pi r^2$\n\n**Step 2:** Substitute known values: $9\\pi = \\frac{\\theta}{360°} \\times \\pi(6)^2 = \\frac{\\theta}{360°} \\times 36\\pi$\n\n**Step 3:** Divide both sides by $36\\pi$: $\\frac{\\theta}{360°} = \\frac{9}{36} = \\frac{1}{4}$\n\n**Step 4:** Solve for $\\theta$: $\\theta = \\frac{360°}{4} = 90°$\n\n**Verification:** Sector area $= \\frac{90°}{360°} \\times 36\\pi = \\frac{1}{4} \\times 36\\pi = 9\\pi$. Confirmed.\n\n**Why other choices are incorrect:**\n• Choice A: [TRAP: arithmetic_slip] Gets $\\frac{\\theta}{360°} = \\frac{1}{8}$, giving $\\theta = 45°$. This error comes from dividing $9\\pi$ by $72\\pi$ (using $2\\pi r^2$ instead of $\\pi r^2$).\n• Choice B: [TRAP: arithmetic_slip] Gets $\\frac{\\theta}{360°} = \\frac{1}{6}$, giving $\\theta = 60°$. This comes from dividing by $54\\pi$ or confusing $r = 6$ with a factor of $\\frac{1}{6}$.\n• Choice D: [TRAP: reversed_operation] Gets $\\frac{\\theta}{360°} = \\frac{1}{3}$, giving $\\theta = 120°$. This comes from dividing $9\\pi$ by $27\\pi$ (using $r = \\sqrt{27}$) or making an arithmetic error with $\\frac{9}{36}$.\n\n**Key concept:** The central angle can be found by: $\\theta = \\frac{A_{\\text{sector}}}{\\pi r^2} \\times 360°$. The ratio of sector area to total area always equals $\\frac{\\theta}{360°}$.",
      skills: ["sector-area"]
    },
    {
      id: 5,
      difficulty: "hard",
      question: "The area of a sector is what fraction of the circle's total area if the central angle is 120°?",
      choices: [
        { id: "A", fraction: { numerator: "1", denominator: "6" } },
        { id: "B", fraction: { numerator: "1", denominator: "4" } },
        { id: "C", fraction: { numerator: "1", denominator: "3" } },
        { id: "D", fraction: { numerator: "1", denominator: "2" } }
      ],
      correctAnswer: "C",
      hint: "The fraction of the area equals the fraction of the angle. What is 120° as a fraction of 360°?",
      explanation: "**Choice C is correct.** The fraction of the circle's area equals the fraction of the central angle to $360°$.\n\n**Step 1:** The fraction of the total area is: $\\frac{\\theta}{360°} = \\frac{120°}{360°}$\n\n**Step 2:** Simplify: $\\frac{120°}{360°} = \\frac{1}{3}$\n\n**Verification:** $120° \\times 3 = 360°$, confirming that $120°$ is exactly one-third of a full circle.\n\n**Why other choices are incorrect:**\n• Choice A: [TRAP: arithmetic_slip] Computes $\\frac{120}{720} = \\frac{1}{6}$, dividing by $720$ (perhaps doubling 360) instead of $360$.\n• Choice B: [TRAP: reversed_operation] Uses $\\frac{1}{4}$, which corresponds to $90°$, not $120°$. This confuses the quarter-circle ($90°$) with the given angle.\n• Choice D: [TRAP: reversed_operation] Uses $\\frac{1}{2}$, which corresponds to $180°$. A semicircle is $\\frac{1}{2}$ the area; $120°$ is less than a semicircle.\n\n**Key concept:** The fraction of a circle's area occupied by a sector is always $\\frac{\\theta}{360°}$, regardless of the radius. This applies equally to sector area and arc length calculations. Common SAT fractions: $30° = \\frac{1}{12}$, $45° = \\frac{1}{8}$, $60° = \\frac{1}{6}$, $90° = \\frac{1}{4}$, $120° = \\frac{1}{3}$, $180° = \\frac{1}{2}$.",
      skills: ["sector-area"]
    }
  ],

  // Section: Equation of a Circle
  "Equation of a Circle": [
    {
      id: 1,
      difficulty: "easy",
      question: "What is the center of the circle with equation (x - 3)² + (y + 2)² = 25?",
      choices: [
        { id: "A", text: "(3, 2)" },
        { id: "B", text: "(-3, 2)" },
        { id: "C", text: "(3, -2)" },
        { id: "D", text: "(-3, -2)" }
      ],
      correctAnswer: "C",
      hint: "In the standard form (x - h)² + (y - k)² = r², the center is (h, k). Watch the signs carefully!",
      explanation: "**Choice C is correct.** The center is $(3, -2)$ by reading the standard form carefully.\n\n**Step 1:** Recall standard form: $(x - h)^2 + (y - k)^2 = r^2$, where center $= (h, k)$\n\n**Step 2:** Match the given equation $(x - 3)^2 + (y + 2)^2 = 25$ to the template:\n- $(x - 3)^2 \\Rightarrow h = 3$\n- $(y + 2)^2 = (y - (-2))^2 \\Rightarrow k = -2$\n\n**Step 3:** Center $= (h, k) = (3, -2)$\n\n**Verification:** Substituting center $(3, -2)$: $(3-3)^2 + (-2+2)^2 = 0 + 0 = 0 \\neq 25$. The center is inside the circle (distance 0 from itself), not on it. The radius is $\\sqrt{25} = 5$.\n\n**Why other choices are incorrect:**\n• Choice A: [TRAP: sign_error] Reads $(y + 2)$ as $k = 2$ instead of $k = -2$. Remember: $(y + 2) = (y - (-2))$, so $k = -2$. This is the #1 trap on circle equation problems.\n• Choice B: [TRAP: sign_error] Gets both signs wrong: reads $(x - 3)$ as $h = -3$ and $(y + 2)$ as $k = 2$. The standard form uses subtraction, so $(x - 3)$ means $h = +3$.\n• Choice D: [TRAP: sign_error] Reads $(x - 3)$ as $h = -3$ (flipping the sign) but correctly gets $k = -2$. Only the $y$-sign trap is avoided.\n\n**Key concept:** In $(x - h)^2 + (y - k)^2 = r^2$, the center is $(h, k)$. The signs flip: a \"+\" inside the parentheses means the coordinate is negative, and a \"-\" means positive. Always rewrite as subtraction to read the center: $(y + 2) = (y - (-2))$.\n\n**Calculator tip:** On Desmos, graph $(x-3)^2 + (y+2)^2 = 25$ and verify the center visually at $(3, -2)$.",
      skills: ["circle-equation"]
    },
    {
      id: 2,
      difficulty: "easy",
      question: "What is the radius of the circle (x + 1)² + (y - 4)² = 49?",
      choices: [
        { id: "A", text: "7" },
        { id: "B", text: "14" },
        { id: "C", text: "24.5" },
        { id: "D", text: "49" }
      ],
      correctAnswer: "A",
      hint: "In standard form, the number on the right side equals r². Take the square root to find the radius.",
      explanation: "**Choice A is correct.** The right side of the equation is $r^2$, so $r = \\sqrt{49} = 7$.\n\n**Step 1:** In standard form $(x - h)^2 + (y - k)^2 = r^2$, the right side is $r^2$.\n\n**Step 2:** Here, $r^2 = 49$, so $r = \\sqrt{49} = 7$.\n\n**Verification:** The circle has center $(-1, 4)$ and radius 7. Any point on the circle is exactly 7 units from $(-1, 4)$.\n\n**Why other choices are incorrect:**\n• Choice B: [TRAP: reversed_operation] Computes the diameter $d = 2r = 2 \\times 7 = 14$ instead of the radius. The question asks for radius, not diameter.\n• Choice C: [TRAP: reversed_operation] Divides $r^2$ by 2 instead of taking the square root: $49 \\div 2 = 24.5$. The correct operation is $\\sqrt{49}$, not $\\frac{49}{2}$.\n• Choice D: [TRAP: partial_calculation] Reports $r^2 = 49$ as the radius. Forgetting to take the square root is a very common mistake. The right side of the equation is $r^2$, not $r$.\n\n**Key concept:** In $(x - h)^2 + (y - k)^2 = r^2$, the number on the right is $r^2$, NOT $r$. Always take the square root: $r = \\sqrt{\\text{right side}}$. This is one of the most tested SAT circle concepts.\n\n**Calculator tip:** On Desmos, graph $(x+1)^2 + (y-4)^2 = 49$ and use the ruler tool to measure from center $(-1, 4)$ to any point on the circle.",
      skills: ["circle-equation"]
    },
    {
      id: 3,
      difficulty: "medium",
      question: "Which equation represents a circle with center (0, 5) and radius 3?",
      choices: [
        { id: "A", text: "x² + (y - 5)² = 3" },
        { id: "B", text: "x² + (y - 5)² = 9" },
        { id: "C", text: "x² + (y + 5)² = 9" },
        { id: "D", text: "(x - 5)² + y² = 9" }
      ],
      correctAnswer: "B",
      hint: "Plug the center coordinates into (x - h)² + (y - k)² = r². Remember that r² appears on the right, not r.",
      explanation: "**Choice B is correct.** Substituting center $(0, 5)$ and radius $3$ into standard form gives $x^2 + (y - 5)^2 = 9$.\n\n**Step 1:** Write the standard form: $(x - h)^2 + (y - k)^2 = r^2$\n\n**Step 2:** Substitute $h = 0$, $k = 5$, $r = 3$: $(x - 0)^2 + (y - 5)^2 = 3^2$\n\n**Step 3:** Simplify: $x^2 + (y - 5)^2 = 9$\n\n**Verification:** Test the point $(0, 8)$, which should be on the circle (3 units above center): $0^2 + (8 - 5)^2 = 0 + 9 = 9$. Confirmed.\n\n**Why other choices are incorrect:**\n• Choice A: [TRAP: partial_calculation] Uses $r = 3$ on the right side instead of $r^2 = 9$. The standard form requires the square of the radius. This is one of the most common SAT traps.\n• Choice C: [TRAP: sign_error] Uses $(y + 5)$ instead of $(y - 5)$. Since $k = 5$, the standard form uses $(y - 5)$, not $(y + 5)$. The equation $(y + 5)^2$ would mean the center's $y$-coordinate is $-5$.\n• Choice D: [TRAP: sign_error] Places the 5 with $x$ instead of $y$: $(x - 5)^2$ means the center's $x$-coordinate is 5, but the center is at $(0, 5)$, so 5 belongs with $y$.\n\n**Key concept:** To write a circle equation: substitute $(h, k)$ into $(x - h)^2 + (y - k)^2 = r^2$. Two critical reminders: (1) use $r^2$ on the right side, not $r$, and (2) match each coordinate to the correct variable.\n\n**Calculator tip:** On Desmos, graph all four choices simultaneously to see which one has center $(0, 5)$ and radius 3.",
      skills: ["circle-equation"]
    },
    {
      id: 4,
      difficulty: "medium",
      question: "The circle x² + y² = 36 has its center at:",
      choices: [
        { id: "A", text: "(0, 0)" },
        { id: "B", text: "(6, 0)" },
        { id: "C", text: "(0, 6)" },
        { id: "D", text: "(6, 6)" }
      ],
      correctAnswer: "A",
      hint: "When there are no numbers being added or subtracted from x or y inside the parentheses, what does that tell you about the center?",
      explanation: "**Choice A is correct.** The equation $x^2 + y^2 = 36$ represents a circle centered at the origin.\n\n**Step 1:** Rewrite in standard form: $x^2 + y^2 = 36$ is the same as $(x - 0)^2 + (y - 0)^2 = 36$\n\n**Step 2:** Read the center: $h = 0$, $k = 0$, so center $= (0, 0)$\n\n**Step 3:** The radius is $r = \\sqrt{36} = 6$\n\n**Verification:** Test the point $(6, 0)$: $6^2 + 0^2 = 36$. This point is on the circle, 6 units from the origin. Confirmed.\n\n**Why other choices are incorrect:**\n• Choice B: [TRAP: sign_error] Confuses the radius with the center coordinate. The value 6 is the radius ($\\sqrt{36}$), not the $x$-coordinate of the center.\n• Choice C: [TRAP: sign_error] Same error as B but places 6 as the $y$-coordinate. The number 36 in the equation is $r^2$, not related to the center.\n• Choice D: [TRAP: sign_error] Combines both errors, placing 6 as both coordinates. No shifting of $x$ or $y$ means the center is at the origin.\n\n**Key concept:** When a circle equation has no constants subtracted from $x$ or $y$ (i.e., $x^2 + y^2 = r^2$), the center is at the origin $(0, 0)$. This is the simplest form of the circle equation.\n\n**Calculator tip:** On Desmos, graph $x^2 + y^2 = 36$ to see a circle centered at the origin with radius 6.",
      skills: ["circle-equation"]
    },
    {
      id: 5,
      difficulty: "hard",
      question: "A circle has center (-2, 3) and passes through the point (1, 7). What is the radius?",
      choices: [
        { id: "A", text: "3" },
        { id: "B", text: "4" },
        { id: "C", text: "5" },
        { id: "D", text: "7" }
      ],
      correctAnswer: "C",
      hint: "The radius is the distance from the center to any point on the circle. Use the distance formula between the two given points.",
      explanation: "**Choice C is correct.** The radius equals the distance from center $(-2, 3)$ to the point $(1, 7)$ on the circle.\n\n**Step 1:** Use the distance formula: $r = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$\n\n**Step 2:** Substitute: $r = \\sqrt{(1 - (-2))^2 + (7 - 3)^2} = \\sqrt{(3)^2 + (4)^2}$\n\n**Step 3:** Simplify: $r = \\sqrt{9 + 16} = \\sqrt{25} = 5$\n\n**Verification:** The equation is $(x + 2)^2 + (y - 3)^2 = 25$. Test $(1, 7)$: $(1+2)^2 + (7-3)^2 = 9 + 16 = 25$. Confirmed.\n\n**Why other choices are incorrect:**\n• Choice A: [TRAP: partial_calculation] Uses only the $x$-distance: $|1 - (-2)| = 3$. The distance formula requires both components, not just one.\n• Choice B: [TRAP: partial_calculation] Uses only the $y$-distance: $|7 - 3| = 4$. Both $\\Delta x$ and $\\Delta y$ must be combined using the Pythagorean theorem.\n• Choice D: [TRAP: arithmetic_slip] Adds the components instead of using the distance formula: $3 + 4 = 7$. The distance formula uses $\\sqrt{(\\Delta x)^2 + (\\Delta y)^2}$, not $|\\Delta x| + |\\Delta y|$.\n\n**Key concept:** The radius of a circle is the distance from the center to any point on the circle: $r = \\sqrt{(x - h)^2 + (y - k)^2}$. Recognize the 3-4-5 Pythagorean triple -- it appears constantly on the SAT.\n\n**Calculator tip:** On Desmos, compute $\\sqrt{(1-(-2))^2 + (7-3)^2}$ or graph the circle $(x+2)^2 + (y-3)^2 = 25$ to verify.",
      skills: ["circle-equation"]
    }
  ],

  // Section: Circle Transformations
  "Circle Transformations": [
    {
      id: 1,
      difficulty: "easy",
      question: "If the circle x² + y² = 16 is translated 3 units right and 2 units up, what is the new equation?",
      choices: [
        { id: "A", text: "(x - 3)² + (y - 2)² = 16" },
        { id: "B", text: "(x + 3)² + (y + 2)² = 16" },
        { id: "C", text: "(x - 3)² + (y + 2)² = 16" },
        { id: "D", text: "(x + 3)² + (y - 2)² = 16" }
      ],
      correctAnswer: "A",
      hint: "Moving right means subtracting from x in the equation; moving up means subtracting from y. The radius stays the same.",
      explanation: "**Choice A is correct.** Translating right 3 and up 2 moves the center from $(0,0)$ to $(3,2)$.\n\n**Step 1:** The original circle has center $(0, 0)$ and $r^2 = 16$.\n\n**Step 2:** Translating 3 right and 2 up moves the center to $(0 + 3, 0 + 2) = (3, 2)$.\n\n**Step 3:** The new equation is $(x - 3)^2 + (y - 2)^2 = 16$. The radius does not change during translation.\n\n**Verification:** The new center $(3, 2)$ should satisfy $h = 3$ and $k = 2$ in $(x - h)^2 + (y - k)^2$. Indeed, $(x - 3)^2 + (y - 2)^2$ gives center $(3, 2)$.\n\n**Why other choices are incorrect:**\n• Choice B: [TRAP: sign_error] Uses $(x + 3)$ and $(y + 2)$, which would place the center at $(-3, -2)$ -- the opposite direction. Remember: right $\\to$ subtract from $x$; up $\\to$ subtract from $y$.\n• Choice C: [TRAP: sign_error] Gets the $x$-translation correct ($(x - 3)$) but reverses the $y$-direction ($(y + 2)$ gives center $y = -2$, which is down, not up).\n• Choice D: [TRAP: sign_error] Reverses both: $(x + 3)$ moves center left (not right), and $(y - 2)$ is correct for up. This is a partial sign error.\n\n**Key concept:** Translation rules for circle equations: moving right by $a$ replaces $x$ with $(x - a)$; moving up by $b$ replaces $y$ with $(y - b)$. The signs in the equation are OPPOSITE to the direction of translation.\n\n**Calculator tip:** On Desmos, graph both $x^2 + y^2 = 16$ and $(x-3)^2 + (y-2)^2 = 16$ to see the translation visually.",
      skills: ["circle-equation", "function-transformations"]
    },
    {
      id: 2,
      difficulty: "easy",
      question: "The circle (x - 2)² + (y + 1)² = 9 is translated so its new center is at (5, 3). What is the new equation?",
      choices: [
        { id: "A", text: "(x - 5)² + (y - 3)² = 9" },
        { id: "B", text: "(x + 5)² + (y + 3)² = 9" },
        { id: "C", text: "(x - 5)² + (y + 3)² = 9" },
        { id: "D", text: "(x - 5)² + (y - 3)² = 3" }
      ],
      correctAnswer: "A",
      hint: "The new center is given directly. Just write the standard form equation with the new center; the radius remains unchanged.",
      explanation: "**Choice A is correct.** With the new center at $(5, 3)$ and the same radius, the equation is $(x - 5)^2 + (y - 3)^2 = 9$.\n\n**Step 1:** The original circle has center $(2, -1)$ and $r^2 = 9$ (radius $= 3$).\n\n**Step 2:** The new center is given as $(5, 3)$. Translation does not change the radius.\n\n**Step 3:** Write the standard form with new center: $(x - 5)^2 + (y - 3)^2 = 9$\n\n**Verification:** Center of $(x - 5)^2 + (y - 3)^2 = 9$ is $(5, 3)$ and $r = \\sqrt{9} = 3$. Both match.\n\n**Why other choices are incorrect:**\n• Choice B: [TRAP: sign_error] Uses $(x + 5)$ and $(y + 3)$, placing the center at $(-5, -3)$. The signs in standard form are opposite to the center coordinates.\n• Choice C: [TRAP: sign_error] Gets $x$ correct but uses $(y + 3)$, placing the $y$-coordinate at $-3$ instead of $3$. Since the center is at $y = 3$, we need $(y - 3)$.\n• Choice D: [TRAP: partial_calculation] Uses $r = 3$ instead of $r^2 = 9$ on the right side. The standard form always has $r^2$ on the right, not $r$.\n\n**Key concept:** Translation changes only the center, never the radius. Write the new equation by plugging the new center directly into $(x - h)^2 + (y - k)^2 = r^2$, keeping the same $r^2$.",
      skills: ["circle-equation", "function-transformations"]
    },
    {
      id: 3,
      difficulty: "medium",
      question: "If a circle centered at the origin with radius 4 is dilated by a factor of 2, what is the new radius?",
      choices: [
        { id: "A", text: "2" },
        { id: "B", text: "4" },
        { id: "C", text: "6" },
        { id: "D", text: "8" }
      ],
      correctAnswer: "D",
      hint: "Dilation multiplies all distances from the center by the scale factor. Apply this factor to the radius.",
      explanation: "**Choice D is correct.** Dilation by factor 2 multiplies the radius by 2, giving $r = 8$.\n\n**Step 1:** Original radius: $r = 4$\n\n**Step 2:** Dilation by a scale factor of 2 multiplies all distances by 2: $r_{\\text{new}} = 2 \\times 4 = 8$\n\n**Step 3:** New equation: $x^2 + y^2 = 64$\n\n**Verification:** The new circle has twice the radius, so its diameter is $16$. The area scales by $2^2 = 4$: original area $= 16\\pi$, new area $= 64\\pi$.\n\n**Why other choices are incorrect:**\n• Choice A: [TRAP: reversed_operation] Divides by the scale factor instead of multiplying: $4 \\div 2 = 2$. This would be a dilation by factor $\\frac{1}{2}$ (shrinking), not factor 2.\n• Choice B: [TRAP: partial_calculation] Assumes dilation doesn't change the radius. Dilation scales all distances from the center of dilation by the scale factor.\n• Choice C: [TRAP: arithmetic_slip] Adds 2 to the radius instead of multiplying by 2: $4 + 2 = 6$. Dilation is multiplicative, not additive.\n\n**Key concept:** Under dilation with scale factor $k$, the radius is multiplied by $k$: $r_{\\text{new}} = k \\cdot r$. The center stays at the origin if dilation is centered there. The area scales by $k^2$.",
      skills: ["circle-equation", "function-transformations"]
    },
    {
      id: 4,
      difficulty: "medium",
      question: "The circle (x + 4)² + (y - 1)² = 25 is reflected across the y-axis. What is the x-coordinate of the new center?",
      choices: [
        { id: "A", text: "−4" },
        { id: "B", text: "4" },
        { id: "C", text: "−1" },
        { id: "D", text: "1" }
      ],
      correctAnswer: "B",
      hint: "First identify the original center from the equation. Reflecting across the y-axis changes the sign of the x-coordinate only.",
      explanation: "**Choice B is correct.** The original center is $(-4, 1)$, and reflecting across the $y$-axis changes the $x$-coordinate's sign to $4$.\n\n**Step 1:** Read the original center from $(x + 4)^2 + (y - 1)^2 = 25$:\n- $(x + 4) = (x - (-4)) \\Rightarrow h = -4$\n- $(y - 1) \\Rightarrow k = 1$\n- Original center: $(-4, 1)$\n\n**Step 2:** Reflection across the $y$-axis negates the $x$-coordinate: $(-4, 1) \\to (4, 1)$\n\n**Step 3:** The new $x$-coordinate is $4$.\n\n**Verification:** The new equation is $(x - 4)^2 + (y - 1)^2 = 25$, centered at $(4, 1)$. The center is the mirror image of $(-4, 1)$ across the $y$-axis.\n\n**Why other choices are incorrect:**\n• Choice A: [TRAP: sign_error] Reports the original $x$-coordinate $-4$ without reflecting. The reflection has not been applied.\n• Choice C: [TRAP: reversed_operation] Reports the $y$-coordinate with the wrong sign: $-1$ instead of $1$. Also, the question asks for the $x$-coordinate, not $y$.\n• Choice D: [TRAP: reversed_operation] Reports the original $y$-coordinate $k = 1$. This is the $y$-coordinate, not the $x$-coordinate after reflection.\n\n**Key concept:** Reflection across the $y$-axis: $(x, y) \\to (-x, y)$. Reflection across the $x$-axis: $(x, y) \\to (x, -y)$. Only the coordinate perpendicular to the axis of reflection changes sign.\n\n**Calculator tip:** On Desmos, graph both the original and reflected circle to visually confirm the mirror symmetry about the $y$-axis.",
      skills: ["circle-equation", "function-transformations"]
    },
    {
      id: 5,
      difficulty: "hard",
      question: "After a circle is translated 5 units left, its equation is (x + 2)² + (y - 3)² = 4. What was the original center?",
      choices: [
        { id: "A", text: "(-7, 3)" },
        { id: "B", text: "(3, 3)" },
        { id: "C", text: "(-2, 3)" },
        { id: "D", text: "(7, 3)" }
      ],
      correctAnswer: "B",
      hint: "Work backwards: if moving left got us here, the original was to the right. Add 5 to the current x-coordinate.",
      explanation: "**Choice B is correct.** The current center is $(-2, 3)$. Reversing a 5-unit left translation means the original was 5 units to the right: $(3, 3)$.\n\n**Step 1:** Read the current center from $(x + 2)^2 + (y - 3)^2 = 4$:\n- $(x + 2) = (x - (-2)) \\Rightarrow h = -2$\n- $(y - 3) \\Rightarrow k = 3$\n- Current center: $(-2, 3)$\n\n**Step 2:** The circle was translated 5 units left to reach this position. To find the original center, reverse the translation (move 5 units right):\n- Original $x = -2 + 5 = 3$\n- Original $y = 3$ (unchanged)\n\n**Step 3:** Original center: $(3, 3)$\n\n**Verification:** Start at $(3, 3)$, translate 5 left: $(3 - 5, 3) = (-2, 3)$. The equation $(x + 2)^2 + (y - 3)^2 = 4$ has center $(-2, 3)$. Confirmed.\n\n**Why other choices are incorrect:**\n• Choice A: [TRAP: reversed_operation] Subtracts 5 instead of adding: $-2 - 5 = -7$. This applies the translation in the same direction again rather than reversing it.\n• Choice C: [TRAP: partial_calculation] Reports the current center $(-2, 3)$ without reversing the translation. This is where the circle is NOW, not where it started.\n• Choice D: [TRAP: arithmetic_slip] Adds 5 to the wrong value or misreads the current center as $(2, 3)$, getting $2 + 5 = 7$. The current center is $(-2, 3)$, not $(2, 3)$.\n\n**Key concept:** To reverse a translation, apply the opposite transformation. If the circle was moved left 5, the original was 5 to the right. This \"undo\" logic is commonly tested on the SAT.",
      skills: ["circle-equation", "function-transformations"]
    }
  ],

  // Section: Domain, Range & Intersections
  "Domain, Range & Intersections": [
    {
      id: 1,
      difficulty: "easy",
      question: "What is the domain of the circle (x - 1)² + (y + 2)² = 9?",
      choices: [
        { id: "A", text: "−2 ≤ x ≤ 4" },
        { id: "B", text: "−1 ≤ x ≤ 3" },
        { id: "C", text: "−5 ≤ x ≤ 1" },
        { id: "D", text: "All real numbers" }
      ],
      correctAnswer: "A",
      hint: "Find the center's x-coordinate and the radius. The domain extends one radius left and one radius right from the center.",
      explanation: "**Choice A is correct.** The domain extends from $h - r$ to $h + r$.\n\n**Step 1:** Read center and radius from $(x - 1)^2 + (y + 2)^2 = 9$:\n- Center: $(1, -2)$\n- Radius: $r = \\sqrt{9} = 3$\n\n**Step 2:** The domain (valid $x$-values) extends $r$ units left and right from the center's $x$-coordinate:\n- Left bound: $h - r = 1 - 3 = -2$\n- Right bound: $h + r = 1 + 3 = 4$\n\n**Step 3:** Domain: $-2 \\leq x \\leq 4$\n\n**Verification:** The leftmost point on the circle is $(-2, -2)$: $(-2-1)^2 + (-2+2)^2 = 9 + 0 = 9$. The rightmost point is $(4, -2)$: $(4-1)^2 + (-2+2)^2 = 9 + 0 = 9$. Both check out.\n\n**Why other choices are incorrect:**\n• Choice B: [TRAP: arithmetic_slip] Misreads the center or uses wrong values: center $(0, ?)$ with $r = 2$ or $(1, ?)$ with $r = 2$, giving $[-1, 3]$.\n• Choice C: [TRAP: sign_error] Misreads the center as $(-2, ?)$ instead of $(1, ?)$, giving $-2 - 3 = -5$ and $-2 + 3 = 1$.\n• Choice D: [TRAP: reversed_operation] A circle does NOT extend infinitely in any direction. Unlike parabolas or lines, a circle has a bounded domain and range.\n\n**Key concept:** For a circle with center $(h, k)$ and radius $r$: Domain is $[h - r,\\, h + r]$ and Range is $[k - r,\\, k + r]$. The circle is bounded in both $x$ and $y$.\n\n**Calculator tip:** On Desmos, graph the circle and read the leftmost and rightmost $x$-values visually.",
      skills: ["circle-equation"]
    },
    {
      id: 2,
      difficulty: "easy",
      question: "What is the range of the circle x² + (y - 5)² = 16?",
      choices: [
        { id: "A", text: "1 ≤ y ≤ 9" },
        { id: "B", text: "−4 ≤ y ≤ 4" },
        { id: "C", text: "1 ≤ y ≤ 5" },
        { id: "D", text: "−1 ≤ y ≤ 9" }
      ],
      correctAnswer: "A",
      hint: "Find the center's y-coordinate and the radius. The range extends one radius above and one radius below the center.",
      explanation: "**Choice A is correct.** The range extends from $k - r$ to $k + r$.\n\n**Step 1:** Read center and radius from $x^2 + (y - 5)^2 = 16$:\n- Center: $(0, 5)$\n- Radius: $r = \\sqrt{16} = 4$\n\n**Step 2:** The range (valid $y$-values) extends $r$ units above and below the center's $y$-coordinate:\n- Lower bound: $k - r = 5 - 4 = 1$\n- Upper bound: $k + r = 5 + 4 = 9$\n\n**Step 3:** Range: $1 \\leq y \\leq 9$\n\n**Verification:** Bottom point $(0, 1)$: $0 + (1-5)^2 = 16$. Top point $(0, 9)$: $0 + (9-5)^2 = 16$. Both are on the circle.\n\n**Why other choices are incorrect:**\n• Choice B: [TRAP: sign_error] Uses center $(0, 0)$ instead of $(0, 5)$: range $= [-4, 4]$. Ignores the $y - 5$ shift.\n• Choice C: [TRAP: partial_calculation] Uses $k - r = 1$ correctly but stops at the center for the upper bound: $[1, 5]$. The range extends $r$ units ABOVE the center, not to the center.\n• Choice D: [TRAP: arithmetic_slip] Computes the lower bound incorrectly: $5 - 4 = 1$ but reports $-1$. Sign errors in subtraction are common under time pressure.\n\n**Key concept:** For a circle with center $(h, k)$ and radius $r$: Range $= [k - r,\\, k + r]$. Domain $= [h - r,\\, h + r]$. The circle fits inside a bounding box defined by these intervals.\n\n**Calculator tip:** On Desmos, graph $x^2 + (y-5)^2 = 16$ and check the highest and lowest points.",
      skills: ["circle-equation"]
    },
    {
      id: 3,
      difficulty: "medium",
      question: "How many times does the line y = 3 intersect the circle x² + y² = 25?",
      choices: [
        { id: "A", text: "0" },
        { id: "B", text: "1" },
        { id: "C", text: "2" },
        { id: "D", text: "Infinitely many" }
      ],
      correctAnswer: "C",
      hint: "Substitute y = 3 into the circle equation and solve for x. The number of x-values equals the number of intersection points.",
      explanation: "**Choice C is correct.** Substituting $y = 3$ yields two solutions for $x$, so there are 2 intersection points.\n\n**Step 1:** Substitute $y = 3$ into $x^2 + y^2 = 25$: $x^2 + 9 = 25$\n\n**Step 2:** Solve for $x$: $x^2 = 16 \\Rightarrow x = \\pm 4$\n\n**Step 3:** The intersection points are $(4, 3)$ and $(-4, 3)$ -- two points.\n\n**Verification:** Check $(4, 3)$: $16 + 9 = 25$. Check $(-4, 3)$: $16 + 9 = 25$. Both satisfy the circle equation.\n\n**Why other choices are incorrect:**\n• Choice A: [TRAP: arithmetic_slip] Would be correct only if $y = 3$ placed the line outside the circle. Since $|3| < 5$ (the radius), the line does intersect.\n• Choice B: [TRAP: partial_calculation] Finds only the positive solution $x = 4$, forgetting $x = -4$. When $x^2 = 16$, there are always two square roots: $\\pm 4$.\n• Choice D: [TRAP: reversed_operation] A line can intersect a circle at most at 2 points. Infinitely many intersections only occur when two curves overlap entirely.\n\n**Key concept:** A horizontal line $y = c$ intersects the circle $x^2 + y^2 = r^2$ at 2 points if $|c| < r$, at 1 point (tangent) if $|c| = r$, and at 0 points if $|c| > r$. Here $|3| < 5$, so there are 2 intersections.\n\n**Calculator tip:** On Desmos, graph $x^2 + y^2 = 25$ and $y = 3$ to see the two intersection points.",
      skills: ["circle-equation"]
    },
    {
      id: 4,
      difficulty: "medium",
      question: "At what points does the circle x² + y² = 25 intersect the x-axis?",
      choices: [
        { id: "A", text: "(5, 0) only" },
        { id: "B", text: "(5, 0) and (-5, 0)" },
        { id: "C", text: "(0, 5) and (0, -5)" },
        { id: "D", text: "No intersection" }
      ],
      correctAnswer: "B",
      hint: "On the x-axis, y = 0. Substitute this into the equation and solve for x.",
      explanation: "**Choice B is correct.** Setting $y = 0$ gives $x = \\pm 5$, so the circle crosses the $x$-axis at $(5, 0)$ and $(-5, 0)$.\n\n**Step 1:** On the $x$-axis, $y = 0$. Substitute into $x^2 + y^2 = 25$: $x^2 + 0 = 25$\n\n**Step 2:** Solve: $x^2 = 25 \\Rightarrow x = \\pm 5$\n\n**Step 3:** Intersection points: $(5, 0)$ and $(-5, 0)$\n\n**Verification:** Check $(5, 0)$: $25 + 0 = 25$. Check $(-5, 0)$: $25 + 0 = 25$. Both satisfy the equation.\n\n**Why other choices are incorrect:**\n• Choice A: [TRAP: partial_calculation] Finds only the positive root $x = 5$, forgetting the negative root $x = -5$. When solving $x^2 = 25$, always consider $\\pm 5$.\n• Choice C: [TRAP: reversed_operation] Confuses $x$-axis intersections with $y$-axis intersections. The points $(0, 5)$ and $(0, -5)$ are where the circle crosses the $y$-axis (set $x = 0$), not the $x$-axis.\n• Choice D: [TRAP: reversed_operation] Incorrectly assumes no intersection. A circle centered at the origin with radius 5 clearly crosses both axes.\n\n**Key concept:** To find $x$-axis intersections, set $y = 0$ and solve. To find $y$-axis intersections, set $x = 0$ and solve. Always remember that $x^2 = c$ has two solutions: $x = \\pm\\sqrt{c}$.",
      skills: ["circle-equation"]
    },
    {
      id: 5,
      difficulty: "hard",
      question: "The line y = x + 1 and circle x² + y² = 5 intersect at how many points?",
      choices: [
        { id: "A", text: "0" },
        { id: "B", text: "1" },
        { id: "C", text: "2" },
        { id: "D", text: "Cannot be determined" }
      ],
      correctAnswer: "C",
      hint: "Substitute the line equation into the circle equation to get a quadratic in x. The discriminant tells you how many solutions exist.",
      explanation: "**Choice C is correct.** Substitution yields a quadratic with two solutions, so there are 2 intersection points.\n\n**Step 1:** Substitute $y = x + 1$ into $x^2 + y^2 = 5$:\n$$x^2 + (x + 1)^2 = 5$$\n\n**Step 2:** Expand and simplify:\n$$x^2 + x^2 + 2x + 1 = 5$$\n$$2x^2 + 2x + 1 = 5$$\n$$2x^2 + 2x - 4 = 0$$\n$$x^2 + x - 2 = 0$$\n\n**Step 3:** Factor: $(x + 2)(x - 1) = 0 \\Rightarrow x = -2$ or $x = 1$\n\n**Step 4:** Find the points: $x = -2 \\Rightarrow y = -1$, giving $(-2, -1)$. $x = 1 \\Rightarrow y = 2$, giving $(1, 2)$.\n\n**Verification:** Check $(-2, -1)$: $4 + 1 = 5$. Check $(1, 2)$: $1 + 4 = 5$. Both satisfy the circle equation.\n\n**Why other choices are incorrect:**\n• Choice A: [TRAP: arithmetic_slip] Would be true only if the discriminant were negative ($b^2 - 4ac < 0$). Here, $\\Delta = 1 + 8 = 9 > 0$, so there are real solutions.\n• Choice B: [TRAP: partial_calculation] Would be true if the line were tangent to the circle ($\\Delta = 0$). Since $\\Delta = 9 > 0$, the line is a secant, not a tangent.\n• Choice D: [TRAP: reversed_operation] This is fully determinable by substitution. No additional information is needed.\n\n**Key concept:** To find line-circle intersections, substitute the line equation into the circle equation. The discriminant $\\Delta = b^2 - 4ac$ determines the count: $\\Delta > 0 \\to 2$ points, $\\Delta = 0 \\to 1$ point (tangent), $\\Delta < 0 \\to 0$ points.\n\n**Calculator tip:** On Desmos, graph $x^2 + y^2 = 5$ and $y = x + 1$ simultaneously to see the two intersection points.",
      skills: ["circle-equation"]
    }
  ],

  // Section: Converting to Standard Form
  "Converting to Standard Form": [
    {
      id: 1,
      difficulty: "easy",
      question: "Convert x² + y² - 6x + 4y = 12 to standard form. What is the center?",
      choices: [
        { id: "A", text: "(3, -2)" },
        { id: "B", text: "(-3, 2)" },
        { id: "C", text: "(6, -4)" },
        { id: "D", text: "(-6, 4)" }
      ],
      correctAnswer: "A",
      hint: "Complete the square for both x and y terms. Remember to add the same values to both sides of the equation.",
      explanation: "**Choice A is correct.** Completing the square reveals the center is $(3, -2)$.\n\n**Step 1:** Group $x$ and $y$ terms: $(x^2 - 6x) + (y^2 + 4y) = 12$\n\n**Step 2:** Complete the square for $x$: half of $-6$ is $-3$, and $(-3)^2 = 9$. Add 9 to both sides.\n\n**Step 3:** Complete the square for $y$: half of $4$ is $2$, and $2^2 = 4$. Add 4 to both sides.\n\n**Step 4:** $(x^2 - 6x + 9) + (y^2 + 4y + 4) = 12 + 9 + 4$\n$$(x - 3)^2 + (y + 2)^2 = 25$$\n\n**Step 5:** Center: $(3, -2)$, Radius: $\\sqrt{25} = 5$\n\n**Verification:** Expand $(x-3)^2 + (y+2)^2 = 25$: $x^2 - 6x + 9 + y^2 + 4y + 4 = 25 \\Rightarrow x^2 + y^2 - 6x + 4y = 12$. Matches the original.\n\n**Why other choices are incorrect:**\n• Choice B: [TRAP: sign_error] Gets $h = -3$ instead of $h = 3$. When completing the square, $(x^2 - 6x + 9) = (x - 3)^2$, so $h = 3$ (positive). The sign in $(x - h)$ is opposite to what appears.\n• Choice C: [TRAP: partial_calculation] Uses the coefficients $-6$ and $4$ directly as coordinates without completing the square. The center is NOT found by reading coefficients -- you must complete the square first.\n• Choice D: [TRAP: sign_error] Takes the raw coefficients and flips their signs: $(-(-6), -(4)) = (6, -4)$... actually this gives $(-6, 4)$, using the coefficients directly with wrong signs. Always complete the square properly.\n\n**Key concept:** To complete the square: take $\\frac{b}{2}$ (half the linear coefficient), square it, and add to both sides. Then factor: $x^2 + bx + \\left(\\frac{b}{2}\\right)^2 = \\left(x + \\frac{b}{2}\\right)^2$.\n\n**Calculator tip:** On Desmos, graph both $x^2 + y^2 - 6x + 4y = 12$ and $(x-3)^2 + (y+2)^2 = 25$ to confirm they produce the same circle.",
      skills: ["completing-square-circles", "circle-equation"]
    },
    {
      id: 2,
      difficulty: "easy",
      question: "For the circle x² + y² + 8x - 2y - 8 = 0, what is the radius?",
      choices: [
        { id: "A", text: "3" },
        { id: "B", text: "5" },
        { id: "C", text: "8" },
        { id: "D", text: "25" }
      ],
      correctAnswer: "B",
      hint: "Complete the square for x and y, then find what r² equals. Take the square root to find r.",
      explanation: "**Choice B is correct.** Completing the square gives $r^2 = 25$, so $r = 5$.\n\n**Step 1:** Rearrange: $(x^2 + 8x) + (y^2 - 2y) = 8$\n\n**Step 2:** Complete the square for $x$: half of $8$ is $4$, and $4^2 = 16$. Add 16 to both sides.\n\n**Step 3:** Complete the square for $y$: half of $-2$ is $-1$, and $(-1)^2 = 1$. Add 1 to both sides.\n\n**Step 4:** $(x^2 + 8x + 16) + (y^2 - 2y + 1) = 8 + 16 + 1$\n$$(x + 4)^2 + (y - 1)^2 = 25$$\n\n**Step 5:** $r^2 = 25 \\Rightarrow r = 5$\n\n**Verification:** Center $(-4, 1)$, radius 5. Check point $(-4, 6)$: $(-4)^2 + 6^2 + 8(-4) - 2(6) - 8 = 16 + 36 - 32 - 12 - 8 = 0$. Confirmed.\n\n**Why other choices are incorrect:**\n• Choice A: [TRAP: arithmetic_slip] Gets $r^2 = 9$ by forgetting to add the completing-the-square values to the right side, or by adding incorrectly: $8 + 16 + 1 = 25$, not $9$.\n• Choice C: [TRAP: partial_calculation] Uses the coefficient 8 from the $8x$ term as the radius. Coefficients in general form are NOT the radius -- you must complete the square.\n• Choice D: [TRAP: partial_calculation] Reports $r^2 = 25$ instead of $r = 5$. Remember: the standard form gives $r^2$ on the right side; take the square root to get $r$.\n\n**Key concept:** When completing the square for $x^2 + bx$, add $\\left(\\frac{b}{2}\\right)^2$ to BOTH sides. The most common mistake is adding to one side only, which changes the equation.\n\n**Calculator tip:** On Desmos, graph $x^2 + y^2 + 8x - 2y - 8 = 0$ and measure the radius from center $(-4, 1)$ to any point on the circle.",
      skills: ["completing-square-circles", "circle-equation"]
    },
    {
      id: 3,
      difficulty: "medium",
      question: "The equation x² + y² - 10y = 0 represents a circle with center at:",
      choices: [
        { id: "A", text: "(0, 5)" },
        { id: "B", text: "(0, -5)" },
        { id: "C", text: "(5, 0)" },
        { id: "D", text: "(-5, 0)" }
      ],
      correctAnswer: "A",
      hint: "Since there's no x term to complete, focus on completing the square for the y terms only.",
      explanation: "**Choice A is correct.** Only the $y$-terms need completing the square, yielding center $(0, 5)$.\n\n**Step 1:** There is no linear $x$-term, so only complete the square for $y$: $x^2 + (y^2 - 10y) = 0$\n\n**Step 2:** Complete the square for $y$: half of $-10$ is $-5$, and $(-5)^2 = 25$. Add 25 to both sides.\n\n**Step 3:** $x^2 + (y^2 - 10y + 25) = 25$\n$$x^2 + (y - 5)^2 = 25$$\n\n**Step 4:** Center: $(0, 5)$, Radius: $\\sqrt{25} = 5$\n\n**Verification:** Test $(0, 0)$: $0 + 0 - 0 = 0$. This point is on the circle. Distance from $(0, 0)$ to center $(0, 5)$ is 5, which equals the radius. Confirmed.\n\n**Why other choices are incorrect:**\n• Choice B: [TRAP: sign_error] Gets the sign wrong from completing the square. Since $(y^2 - 10y + 25) = (y - 5)^2$, the center's $y$-coordinate is $+5$, not $-5$.\n• Choice C: [TRAP: reversed_operation] Places the 5 with the $x$-coordinate instead of $y$. There is no linear $x$-term in the equation, so $h = 0$. The $-10y$ term affects only the $y$-coordinate.\n• Choice D: [TRAP: sign_error] Same axis confusion as C, plus a sign error: $(-5, 0)$. The coefficient $-10$ with $y$ does not mean the center is at $x = -5$.\n\n**Key concept:** When there is no linear term for one variable (like no $bx$ term), that coordinate of the center is 0. Only complete the square for the variable that has a linear term.\n\n**Calculator tip:** On Desmos, graph $x^2 + y^2 - 10y = 0$ to verify the circle passes through the origin with center at $(0, 5)$.",
      skills: ["completing-square-circles", "circle-equation"]
    },
    {
      id: 4,
      difficulty: "medium",
      question: "Convert x² + y² + 2x - 6y + 6 = 0 to standard form. What is r²?",
      choices: [
        { id: "A", text: "2" },
        { id: "B", text: "4" },
        { id: "C", text: "6" },
        { id: "D", text: "10" }
      ],
      correctAnswer: "B",
      hint: "After completing the square, the constant on the right side is r². Be careful with signs when moving terms.",
      explanation: "**Choice B is correct.** Completing the square gives $r^2 = 4$.\n\n**Step 1:** Rearrange: $(x^2 + 2x) + (y^2 - 6y) = -6$\n\n**Step 2:** Complete the square for $x$: half of $2$ is $1$, and $1^2 = 1$. Add 1 to both sides.\n\n**Step 3:** Complete the square for $y$: half of $-6$ is $-3$, and $(-3)^2 = 9$. Add 9 to both sides.\n\n**Step 4:** $(x^2 + 2x + 1) + (y^2 - 6y + 9) = -6 + 1 + 9$\n$$(x + 1)^2 + (y - 3)^2 = 4$$\n\n**Step 5:** $r^2 = 4$\n\n**Verification:** Expand: $(x+1)^2 + (y-3)^2 = x^2 + 2x + 1 + y^2 - 6y + 9 = x^2 + y^2 + 2x - 6y + 10$. Setting equal to 4: $x^2 + y^2 + 2x - 6y + 10 = 4 \\Rightarrow x^2 + y^2 + 2x - 6y + 6 = 0$. Matches.\n\n**Why other choices are incorrect:**\n• Choice A: [TRAP: arithmetic_slip] Gets $r^2 = -6 + 1 + 9 = 4$ wrong as $2$, perhaps from $-6 + 1 + 9 = 4$ computed as $-6 + (1 + 9)/5 = 2$ or another arithmetic error.\n• Choice C: [TRAP: partial_calculation] Uses the constant term $6$ from the original equation as $r^2$. The constant in general form is NOT $r^2$ -- you must complete the square.\n• Choice D: [TRAP: arithmetic_slip] Adds the completing-the-square values ($1 + 9 = 10$) without including the original constant $-6$. The correct calculation is $-6 + 1 + 9 = 4$.\n\n**Key concept:** The right side after completing the square is $r^2 = $ (original constant moved to the right) + (all completing-the-square additions). Be meticulous with arithmetic: $-6 + 1 + 9 = 4$.\n\n**Calculator tip:** On Desmos, graph $x^2 + y^2 + 2x - 6y + 6 = 0$ and $(x+1)^2 + (y-3)^2 = 4$ to confirm they overlap perfectly.",
      skills: ["completing-square-circles", "circle-equation"]
    },
    {
      id: 5,
      difficulty: "hard",
      question: "Which equation in general form represents the circle (x - 2)² + (y + 3)² = 16?",
      choices: [
        { id: "A", text: "x² + y² - 4x + 6y - 3 = 0" },
        { id: "B", text: "x² + y² - 4x - 6y - 3 = 0" },
        { id: "C", text: "x² + y² + 4x - 6y - 3 = 0" },
        { id: "D", text: "x² + y² - 4x + 6y + 3 = 0" }
      ],
      correctAnswer: "A",
      hint: "Expand both squared terms, combine like terms, and move everything to one side. Check signs carefully.",
      explanation: "**Choice A is correct.** Expanding the standard form and simplifying gives $x^2 + y^2 - 4x + 6y - 3 = 0$.\n\n**Step 1:** Expand $(x - 2)^2$: $x^2 - 4x + 4$\n\n**Step 2:** Expand $(y + 3)^2$: $y^2 + 6y + 9$\n\n**Step 3:** Combine: $x^2 - 4x + 4 + y^2 + 6y + 9 = 16$\n\n**Step 4:** Simplify: $x^2 + y^2 - 4x + 6y + 13 = 16$\n\n**Step 5:** Move to general form: $x^2 + y^2 - 4x + 6y - 3 = 0$\n\n**Verification:** Complete the square on $x^2 + y^2 - 4x + 6y - 3 = 0$: $(x^2 - 4x + 4) + (y^2 + 6y + 9) = 3 + 4 + 9 = 16 \\Rightarrow (x-2)^2 + (y+3)^2 = 16$. Matches the original.\n\n**Why other choices are incorrect:**\n• Choice B: [TRAP: sign_error] Uses $-6y$ instead of $+6y$. When expanding $(y + 3)^2 = y^2 + 6y + 9$, the middle term is $+6y$, not $-6y$. This error comes from confusing $(y + 3)^2$ with $(y - 3)^2$.\n• Choice C: [TRAP: sign_error] Uses $+4x$ instead of $-4x$. Expanding $(x - 2)^2 = x^2 - 4x + 4$ gives $-4x$, not $+4x$. Also has the wrong sign on the $y$-term.\n• Choice D: [TRAP: arithmetic_slip] Gets the constant wrong: $+3$ instead of $-3$. The calculation is $13 - 16 = -3$, not $+3$. This sign error in the constant term is a subtle but important mistake.\n\n**Key concept:** To convert standard form to general form: expand both squares, combine constants, and set the equation equal to zero. Be meticulous with signs during expansion: $(x - a)^2 = x^2 - 2ax + a^2$ and $(y + b)^2 = y^2 + 2by + b^2$.",
      skills: ["completing-square-circles", "circle-equation"]
    }
  ],

  // Section: Tangent Lines
  "Tangent Lines": [
    {
      id: 1,
      difficulty: "easy",
      question: "A tangent line to a circle at a point is _____ to the radius at that point.",
      choices: [
        { id: "A", text: "Parallel" },
        { id: "B", text: "Perpendicular" },
        { id: "C", text: "Equal" },
        { id: "D", text: "Secant" }
      ],
      correctAnswer: "B",
      hint: "Think about a wheel touching a flat road. What angle does the spoke (radius) make with the ground (tangent)?",
      explanation: "**Choice B is correct.** A tangent line is always perpendicular to the radius at the point of tangency.\n\n**Step 1:** By definition, a tangent line touches the circle at exactly one point (the point of tangency).\n\n**Step 2:** A fundamental theorem of circle geometry states that the tangent line at any point is perpendicular ($90°$) to the radius drawn to that point.\n\n**Verification:** Visualize a wheel on a flat road: the spoke (radius) points straight down while the road (tangent) is horizontal. They form a $90°$ angle.\n\n**Why other choices are incorrect:**\n• Choice A: [TRAP: reversed_operation] \"Parallel\" would mean the tangent runs in the same direction as the radius, which would mean the tangent passes through the center -- that describes a secant or diameter, not a tangent.\n• Choice C: [TRAP: reversed_operation] \"Equal\" does not describe a geometric relationship between a line and a segment. A tangent line and a radius are different types of objects.\n• Choice D: [TRAP: reversed_operation] \"Secant\" is a line that cuts through the circle at two points. A tangent touches at exactly one point. These are different concepts.\n\n**Key concept:** The tangent-radius perpendicularity theorem: at any point of tangency, the tangent line and the radius are perpendicular ($90°$). This theorem is the foundation for many SAT circle problems, including finding tangent slopes and tangent line equations.",
      skills: ["tangent-lines"]
    },
    {
      id: 2,
      difficulty: "easy",
      question: "The center of a circle is at (3, 4) and a tangent line touches the circle at (6, 8). What is the slope of the tangent line?",
      choices: [
        { id: "A", fraction: { numerator: "4", denominator: "3" } },
        { id: "B", text: "−", fraction: { numerator: "4", denominator: "3" } },
        { id: "C", fraction: { numerator: "3", denominator: "4" } },
        { id: "D", text: "−", fraction: { numerator: "3", denominator: "4" } }
      ],
      correctAnswer: "D",
      hint: "First find the slope of the radius from center to the tangent point. The tangent slope is the negative reciprocal of the radius slope.",
      explanation: "**Choice D is correct.** The tangent is perpendicular to the radius, so its slope is the negative reciprocal of the radius slope.\n\n**Step 1:** Find the slope of the radius from center $(3, 4)$ to tangent point $(6, 8)$:\n$$m_{\\text{radius}} = \\frac{8 - 4}{6 - 3} = \\frac{4}{3}$$\n\n**Step 2:** The tangent is perpendicular to the radius, so the tangent slope is the negative reciprocal:\n$$m_{\\text{tangent}} = -\\frac{1}{m_{\\text{radius}}} = -\\frac{1}{4/3} = -\\frac{3}{4}$$\n\n**Verification:** Check perpendicularity: $\\frac{4}{3} \\times \\left(-\\frac{3}{4}\\right) = -1$. The product of perpendicular slopes is always $-1$.\n\n**Why other choices are incorrect:**\n• Choice A: [TRAP: partial_calculation] This is the slope of the radius itself ($\\frac{4}{3}$), not the tangent. The question asks for the tangent slope, which requires taking the negative reciprocal.\n• Choice B: [TRAP: sign_error] Negates the radius slope ($-\\frac{4}{3}$) instead of taking the negative reciprocal. Negating and taking the negative reciprocal are different operations.\n• Choice C: [TRAP: reversed_operation] Takes the reciprocal without negating ($\\frac{3}{4}$ instead of $-\\frac{3}{4}$). Perpendicular slopes require BOTH reciprocal AND negation.\n\n**Key concept:** If a line has slope $m$, the perpendicular line has slope $-\\frac{1}{m}$. For tangent lines: find the radius slope first, then take its negative reciprocal. Always verify: $m_1 \\times m_2 = -1$.\n\n**Calculator tip:** On Desmos, plot the radius line through $(3,4)$ and $(6,8)$, then plot $y - 8 = -\\frac{3}{4}(x - 6)$ to see the tangent visually.",
      skills: ["tangent-lines", "perpendicular-negative-reciprocal"]
    },
    {
      id: 3,
      difficulty: "medium",
      question: "From point P outside a circle, two tangent segments are drawn to the circle. These segments are:",
      choices: [
        { id: "A", text: "Perpendicular" },
        { id: "B", text: "Equal in length" },
        { id: "C", text: "Parallel" },
        { id: "D", text: "Always different lengths" }
      ],
      correctAnswer: "B",
      hint: "This is a special property of tangent segments from an external point. Think about symmetry.",
      explanation: "**Choice B is correct.** Two tangent segments from the same external point are always equal in length.\n\n**Step 1:** Let $P$ be an external point, and let the two tangent segments touch the circle at points $A$ and $B$.\n\n**Step 2:** By the tangent segment theorem, $PA = PB$. This follows from the fact that right triangles $\\triangle OAP$ and $\\triangle OBP$ are congruent (they share hypotenuse $OP$, and $OA = OB = r$).\n\n**Verification:** Consider a circle centered at the origin with radius 3, and external point $(5, 0)$. Both tangent lengths equal $\\sqrt{5^2 - 3^2} = \\sqrt{16} = 4$. They are equal.\n\n**Why other choices are incorrect:**\n• Choice A: [TRAP: reversed_operation] The two tangent segments are NOT necessarily perpendicular to each other. They are each perpendicular to the radius at their respective tangent points, but the angle between the two tangent segments depends on the position of $P$.\n• Choice C: [TRAP: reversed_operation] The tangent segments converge at point $P$, so they cannot be parallel. Parallel lines never meet.\n• Choice D: [TRAP: reversed_operation] This contradicts the tangent segment theorem. The segments are always equal, never different in length.\n\n**Key concept:** The tangent segment theorem: from any external point, the two tangent segments to a circle are equal in length. The length of each tangent from point $P$ to a circle with center $O$ and radius $r$ is $\\sqrt{OP^2 - r^2}$.\n\n**Calculator tip:** On Desmos, graph a circle and use the distance formula to verify that tangent segments from an external point have equal lengths.",
      skills: ["tangent-lines"]
    },
    {
      id: 4,
      difficulty: "medium",
      question: "A circle has center (0, 0) and radius 5. What is the distance from the center to the tangent line y = 5?",
      choices: [
        { id: "A", text: "0" },
        { id: "B", text: "5" },
        { id: "C", text: "10" },
        { id: "D", text: "25" }
      ],
      correctAnswer: "B",
      hint: "The distance from the center of a circle to any tangent line has a special relationship with the radius.",
      explanation: "**Choice B is correct.** The distance from the center to any tangent line equals the radius.\n\n**Step 1:** The tangent line $y = 5$ is a horizontal line. The center is at $(0, 0)$.\n\n**Step 2:** The distance from $(0, 0)$ to the line $y = 5$ is $|5 - 0| = 5$.\n\n**Step 3:** This equals the radius, which confirms that $y = 5$ is indeed tangent to the circle (touching at the single point $(0, 5)$).\n\n**Verification:** The point $(0, 5)$ lies on both $y = 5$ and the circle ($0^2 + 5^2 = 25$). No other point on $y = 5$ satisfies $x^2 + 25 = 25$ except $x = 0$. So $y = 5$ touches the circle at exactly one point.\n\n**Why other choices are incorrect:**\n• Choice A: [TRAP: reversed_operation] A distance of 0 would mean the tangent line passes through the center. A tangent line touches the circle, not the center.\n• Choice C: [TRAP: reversed_operation] Uses the diameter ($2r = 10$) instead of the radius. The distance from center to tangent is always $r$, not $2r$.\n• Choice D: [TRAP: partial_calculation] Uses $r^2 = 25$ instead of $r = 5$. The distance is the radius itself, not $r^2$.\n\n**Key concept:** The distance from the center of a circle to any tangent line is exactly equal to the radius $r$. This is a direct consequence of the tangent-radius perpendicularity theorem. If the distance is less than $r$, the line is a secant (2 intersections); if greater, no intersection.\n\n**Calculator tip:** On Desmos, graph $x^2 + y^2 = 25$ and $y = 5$ to see the tangent touching at the top of the circle.",
      skills: ["tangent-lines"]
    },
    {
      id: 5,
      difficulty: "hard",
      question: "If the tangent line at point (5, 0) on a circle centered at the origin is vertical, what can you conclude?",
      choices: [
        { id: "A", text: "The radius at that point is horizontal" },
        { id: "B", text: "The radius at that point is vertical" },
        { id: "C", text: "The circle has radius 5" },
        { id: "D", text: "Both A and C" }
      ],
      correctAnswer: "D",
      hint: "If the tangent is vertical, what direction must the perpendicular radius be? Also, calculate the distance from origin to (5, 0).",
      explanation: "**Choice D is correct.** Both A (the radius is horizontal) and C (the radius is 5) are true.\n\n**Step 1:** If the tangent line at $(5, 0)$ is vertical, then by the tangent-radius perpendicularity theorem, the radius at that point must be perpendicular to the tangent -- meaning the radius is horizontal. (Statement A is true.)\n\n**Step 2:** The radius connects the center $(0, 0)$ to the point $(5, 0)$. The distance is:\n$$r = \\sqrt{(5-0)^2 + (0-0)^2} = \\sqrt{25} = 5$$\nSo the radius is 5. (Statement C is true.)\n\n**Step 3:** Since both A and C are true, the answer is D.\n\n**Verification:** The circle equation is $x^2 + y^2 = 25$. The tangent at $(5, 0)$ is the vertical line $x = 5$. The radius from $(0,0)$ to $(5,0)$ lies along the $x$-axis (horizontal). Perpendicularity confirmed: vertical $\\perp$ horizontal.\n\n**Why other choices are incorrect:**\n• Choice A: [TRAP: partial_calculation] This is true but incomplete. The radius is horizontal AND the radius is 5. Choice D captures both facts.\n• Choice B: [TRAP: reversed_operation] If the tangent is vertical, the radius must be horizontal (perpendicular), not also vertical. Perpendicular to vertical is horizontal.\n• Choice C: [TRAP: partial_calculation] This is true but incomplete, same as A. Both A and C are correct, making D the complete answer.\n\n**Key concept:** The tangent-radius perpendicularity theorem works in both directions: if you know the tangent direction, you know the radius direction (and vice versa). Vertical tangent $\\Leftrightarrow$ horizontal radius. Also, the radius always equals the center-to-point distance.\n\n**Calculator tip:** On Desmos, graph $x^2 + y^2 = 25$ and the line $x = 5$ to see the vertical tangent at $(5, 0)$.",
      skills: ["tangent-lines", "perpendicular-negative-reciprocal"]
    }
  ]
};
