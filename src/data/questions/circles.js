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
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~15s):** The radius is the distance from the center to the point. From $(-2,3)$ to $(1,7)$ the horizontal step is $3$ and the vertical step is $4$ — a $3$-$4$-$5$ triangle, so $r=5$.\n\n**The Full Solution:**\nStep 1: The radius equals the distance from center $(-2,3)$ to the point $(1,7)$ on the circle.\nStep 2: Distance formula: $r=\\sqrt{(1-(-2))^2+(7-3)^2}=\\sqrt{3^2+4^2}$.\nStep 3: $r=\\sqrt{9+16}=\\sqrt{25}=5$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($3$): used only the horizontal gap $|1-(-2)|=3$. The radius needs both legs.\n* Choice B ($4$): used only the vertical gap $|7-3|=4$. Same one-leg mistake.\n* Choice D ($7$): added the legs $3+4$ instead of $\\sqrt{3^2+4^2}$. Distance is not a straight sum.\n\n**Test Day Takeaway:** The radius is the distance from the center to any point on the circle. Spot the $3$-$4$-$5$ and $5$-$12$-$13$ triples — they let you skip the square root.",
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
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~15s):** A circle centered at the origin shifts its center to $(3,2)$ after moving $3$ right and $2$ up; the standard form subtracts the center, giving $(x-3)^2+(y-2)^2=16$.\n\n**The Full Solution:**\nStep 1: $x^2+y^2=16$ has center $(0,0)$ and $r^2=16$.\nStep 2: Moving $3$ right and $2$ up sends the center to $(3,2)$. The radius is unchanged.\nStep 3: Plug the center into $(x-h)^2+(y-k)^2=r^2$: $(x-3)^2+(y-2)^2=16$.\n\n**Why the wrong answers are tempting:**\n* Choice B: $(x+3)^2+(y+2)^2$ places the center at $(-3,-2)$ — the opposite direction.\n* Choice C: correct $x$ but $(y+2)$ puts the center at $y=-2$ (down, not up).\n* Choice D: $(x+3)$ moves the center left, not right; only the $y$-term is right.\n\n**Test Day Takeaway:** In $(x-h)^2+(y-k)^2=r^2$ the signs are opposite to the center coordinates: moving right by $a$ writes $(x-a)$, moving up by $b$ writes $(y-b)$.",
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
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~15s):** Translation keeps the radius, so $r^2$ stays $9$; just drop the new center $(5,3)$ into standard form: $(x-5)^2+(y-3)^2=9$.\n\n**The Full Solution:**\nStep 1: $(x-2)^2+(y+1)^2=9$ has $r^2=9$ (radius $3$).\nStep 2: The new center is $(5,3)$. Translation never changes the radius.\nStep 3: Write $(x-h)^2+(y-k)^2=r^2$ with $h=5$, $k=3$: $(x-5)^2+(y-3)^2=9$.\n\n**Why the wrong answers are tempting:**\n* Choice B: $(x+5)^2+(y+3)^2$ centers at $(-5,-3)$ — signs flipped.\n* Choice C: $(y+3)$ centers at $y=-3$ instead of $3$.\n* Choice D: uses $r=3$ on the right instead of $r^2=9$. Standard form always carries $r^2$.\n\n**Test Day Takeaway:** A translation moves only the center, never the radius. Plug the new center into $(x-h)^2+(y-k)^2=r^2$ and keep $r^2$ exactly as it was.",
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
      explanation: "**Choice D is correct.**\n\n**The Fast Way (~10s):** Dilation scales every length by the factor, so the radius becomes $2\\times 4=8$.\n\n**The Full Solution:**\nStep 1: Original radius $r=4$.\nStep 2: Dilation by scale factor $2$ multiplies all distances from the center by $2$: $r_{\\text{new}}=2\\times 4=8$.\nStep 3: The new circle is $x^2+y^2=64$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($2$): divided by $2$ — that is a dilation by $\\frac{1}{2}$ (a shrink), not by $2$.\n* Choice B ($4$): assumed dilation leaves the radius alone; it does not.\n* Choice C ($6$): added $2$ instead of multiplying. Dilation is multiplicative.\n\n**Test Day Takeaway:** Under a dilation with scale factor $k$, lengths multiply by $k$ ($r_{\\text{new}}=k\\cdot r$) and areas by $k^2$. Multiply, never add.",
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
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~15s):** The center is $(-4,1)$; reflecting across the $y$-axis flips the sign of $x$ only, so the new $x$-coordinate is $4$.\n\n**The Full Solution:**\nStep 1: From $(x+4)^2+(y-1)^2=25$, the center is $(-4,1)$ since $(x+4)=(x-(-4))$.\nStep 2: Reflection across the $y$-axis maps $(x,y)\\to(-x,y)$, so $(-4,1)\\to(4,1)$.\nStep 3: The new $x$-coordinate is $4$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($-4$): reported the original $x$ without applying the reflection.\n* Choice C ($-1$): pulled the $y$-coordinate and flipped it — wrong axis and wrong sign.\n* Choice D ($1$): reported the $y$-coordinate, which the reflection leaves unchanged. The question asks for $x$.\n\n**Test Day Takeaway:** Reflecting across the $y$-axis negates $x$: $(x,y)\\to(-x,y)$. Only the coordinate perpendicular to the mirror line changes sign.",
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
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~15s):** The current center is $(-2,3)$. To undo a $5$-left move, go $5$ right: $-2+5=3$, giving $(3,3)$.\n\n**The Full Solution:**\nStep 1: From $(x+2)^2+(y-3)^2=4$, the current center is $(-2,3)$.\nStep 2: The circle arrived here by moving $5$ left, so reverse it by moving $5$ right.\nStep 3: Original $x=-2+5=3$; original $y=3$ unchanged $\\Rightarrow$ center $(3,3)$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($(-7,3)$): subtracted $5$ instead of adding — that repeats the move rather than undoing it.\n* Choice C ($(-2,3)$): the current center; no reversal applied.\n* Choice D ($(7,3)$): misread the current center as $(2,3)$, then added $5$.\n\n**Test Day Takeaway:** To find the pre-image, apply the opposite transformation. A move left $5$ is undone by a move right $5$.",
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
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~15s):** The domain runs from $h-r$ to $h+r$. With center $x=1$ and $r=3$, that is $1-3=-2$ to $1+3=4$.\n\n**The Full Solution:**\nStep 1: $(x-1)^2+(y+2)^2=9$ has center $(1,-2)$ and $r=\\sqrt{9}=3$.\nStep 2: The $x$-values reach $r$ units left and right of the center: $1-3=-2$ and $1+3=4$.\nStep 3: Domain: $-2\\le x\\le 4$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($-1\\le x\\le 3$): used $r=2$ or a shifted center; the radius is $3$, not $2$.\n* Choice C ($-5\\le x\\le 1$): centered on $x=-2$ (the $y$-coordinate) instead of $x=1$.\n* Choice D (all reals): a circle is bounded; only lines and most parabolas span all $x$.\n\n**Test Day Takeaway:** A circle with center $(h,k)$ and radius $r$ has domain $[h-r,\\,h+r]$ and range $[k-r,\\,k+r]$ — it fits inside a $2r\\times 2r$ box.",
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
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~15s):** The range runs from $k-r$ to $k+r$. With center $y=5$ and $r=4$, that is $5-4=1$ to $5+4=9$.\n\n**The Full Solution:**\nStep 1: $x^2+(y-5)^2=16$ has center $(0,5)$ and $r=\\sqrt{16}=4$.\nStep 2: The $y$-values reach $r$ units below and above the center: $5-4=1$ and $5+4=9$.\nStep 3: Range: $1\\le y\\le 9$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($-4\\le y\\le 4$): centered on $y=0$, ignoring the $y-5$ shift.\n* Choice C ($1\\le y\\le 5$): correct lower bound but stopped at the center for the top instead of going up $r$ more.\n* Choice D ($-1\\le y\\le 9$): sign slip on the lower bound; $5-4=1$, not $-1$.\n\n**Test Day Takeaway:** For center $(h,k)$ and radius $r$, the range is $[k-r,\\,k+r]$ and the domain is $[h-r,\\,h+r]$. Add and subtract $r$ from the same center coordinate.",
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
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~15s):** The line $y=3$ sits inside the circle since $|3|<5$ (the radius), so a horizontal line through the interior cuts it in $2$ points.\n\n**The Full Solution:**\nStep 1: Substitute $y=3$ into $x^2+y^2=25$: $x^2+9=25$.\nStep 2: $x^2=16\\Rightarrow x=\\pm 4$.\nStep 3: Two solutions give two points: $(4,3)$ and $(-4,3)$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($0$): would hold only if the line missed the circle, i.e. $|3|>5$. It does not.\n* Choice B ($1$): kept only $x=4$ and forgot $x=-4$. $x^2=16$ has two roots.\n* Choice D (infinitely many): a line meets a circle in at most $2$ points; overlap only happens between identical curves.\n\n**Test Day Takeaway:** A horizontal line $y=c$ meets $x^2+y^2=r^2$ in $2$ points when $|c|<r$, $1$ when $|c|=r$ (tangent), and $0$ when $|c|>r$.",
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
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~15s):** On the $x$-axis $y=0$, so $x^2=25$ and $x=\\pm 5$ — two crossings at $(5,0)$ and $(-5,0)$.\n\n**The Full Solution:**\nStep 1: Set $y=0$ in $x^2+y^2=25$: $x^2+0=25$.\nStep 2: $x^2=25\\Rightarrow x=\\pm 5$.\nStep 3: Intersection points: $(5,0)$ and $(-5,0)$.\n\n**Why the wrong answers are tempting:**\n* Choice A: kept only the positive root $x=5$ and dropped $x=-5$.\n* Choice C: $(0,5)$ and $(0,-5)$ are the $y$-axis crossings (set $x=0$), not the $x$-axis.\n* Choice D: a radius-$5$ circle at the origin clearly reaches the $x$-axis.\n\n**Test Day Takeaway:** For $x$-axis intercepts set $y=0$; for $y$-axis intercepts set $x=0$. And $x^2=c$ always gives $x=\\pm\\sqrt{c}$ — keep both signs.",
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
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~20s):** Substituting the line into the circle gives a quadratic. Its discriminant is positive ($\\Delta=9$), so the line is a secant and crosses at $2$ points.\n\n**The Full Solution:**\nStep 1: Substitute $y=x+1$ into $x^2+y^2=5$: $x^2+(x+1)^2=5$.\nStep 2: Expand: $2x^2+2x+1=5\\Rightarrow 2x^2+2x-4=0\\Rightarrow x^2+x-2=0$.\nStep 3: Factor: $(x+2)(x-1)=0\\Rightarrow x=-2$ or $x=1$.\nStep 4: The points are $(-2,-1)$ and $(1,2)$ — two intersections.\n\n**Why the wrong answers are tempting:**\n* Choice A ($0$): would need $\\Delta<0$, but here $\\Delta=1+8=9>0$.\n* Choice B ($1$): would mean the line is tangent ($\\Delta=0$). It is not.\n* Choice D (cannot be determined): substitution fully resolves the count; nothing is missing.\n\n**Test Day Takeaway:** For line-circle intersections, substitute the line into the circle and read the discriminant: $\\Delta>0$ gives $2$ points, $\\Delta=0$ gives $1$ (tangent), $\\Delta<0$ gives $0$.",
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
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~25s):** Complete the square on each variable: half of $-6$ is $-3$ and half of $4$ is $2$, so the center is $(3,-2)$.\n\n**The Full Solution:**\nStep 1: Group: $(x^2-6x)+(y^2+4y)=12$.\nStep 2: For $x$: half of $-6$ is $-3$, square to $9$. For $y$: half of $4$ is $2$, square to $4$. Add both to each side.\nStep 3: $(x^2-6x+9)+(y^2+4y+4)=12+9+4\\Rightarrow(x-3)^2+(y+2)^2=25$.\nStep 4: Center $(3,-2)$, radius $5$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($(-3,2)$): flipped both signs. Since $(x^2-6x+9)=(x-3)^2$, the center is $h=3$, not $-3$.\n* Choice C ($(6,-4)$): read the linear coefficients $-6$ and $4$ as the center; you must complete the square first.\n* Choice D ($(-6,4)$): used the raw coefficients directly with the wrong signs.\n\n**Test Day Takeaway:** To find a circle's center from general form, complete the square: take $\\frac{b}{2}$, square it, add to both sides, then the center coordinate is the opposite of the term inside each squared factor.",
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
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~20s):** Group and complete the square: the $x$-half is $4$ ($\\Rightarrow +16$), the $y$-half is $-1$ ($\\Rightarrow +1$). The right side becomes $8+16+1=25$, so $r=\\sqrt{25}=5$.\n\n**The Full Solution:**\nStep 1: Move the constant over and group: $(x^2+8x)+(y^2-2y)=8$.\nStep 2: Complete the square for $x$: half of $8$ is $4$, and $4^2=16$. Add $16$ to both sides.\nStep 3: Complete the square for $y$: half of $-2$ is $-1$, and $(-1)^2=1$. Add $1$ to both sides.\nStep 4: $(x+4)^2+(y-1)^2=8+16+1=25$.\nStep 5: Standard form gives $r^2=25$, so $r=5$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($3$): used $r^2=9$, the result of dropping the $+16$ or $+1$ from the right side.\n* Choice C ($8$): grabbed the coefficient of $8x$ from the general form. Coefficients are never the radius.\n* Choice D ($25$): stopped at $r^2=25$ and forgot to take the square root.\n\n**Test Day Takeaway:** In $x^2+y^2+Dx+Ey+F=0$, complete the square to reach $(x-h)^2+(y-k)^2=r^2$, then take the square root for the radius — the right side is $r^2$, not $r$.",
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
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~15s):** There is no $x$-term, so $h=0$. Complete the square only on $y$: $y^2-10y=(y-5)^2-25$, giving center $(0,5)$.\n\n**The Full Solution:**\nStep 1: With no linear $x$-term, the $x$-coordinate of the center is $0$.\nStep 2: Complete the square for $y$: half of $-10$ is $-5$, and $(-5)^2=25$. Add $25$ to both sides.\nStep 3: $x^2+(y-5)^2=25$, so the center is $(0,5)$ with radius $5$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($(0,-5)$): read the sign of the center backward. $(y-5)^2$ means $k=+5$, not $-5$.\n* Choice C ($(5,0)$): put the $5$ on the $x$-axis. The $-10y$ term affects only the $y$-coordinate.\n* Choice D ($(-5,0)$): same axis swap as C plus a sign flip.\n\n**Test Day Takeaway:** $(y-k)^2$ has center coordinate $+k$, not $-k$. When a variable has no linear term, its center coordinate is $0$.",
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
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~20s):** Complete both squares: $x$ adds $1$, $y$ adds $9$. The right side is $-6+1+9=4$, so $r^2=4$.\n\n**The Full Solution:**\nStep 1: Move the constant and group: $(x^2+2x)+(y^2-6y)=-6$.\nStep 2: Complete the square for $x$: half of $2$ is $1$, and $1^2=1$. Add $1$ to both sides.\nStep 3: Complete the square for $y$: half of $-6$ is $-3$, and $(-3)^2=9$. Add $9$ to both sides.\nStep 4: $(x+1)^2+(y-3)^2=-6+1+9=4$, so $r^2=4$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($2$): an arithmetic slip on $-6+1+9$, which equals $4$, not $2$.\n* Choice C ($6$): grabbed the constant $6$ from the original equation as $r^2$ without completing the square.\n* Choice D ($10$): added only the completing-the-square terms ($1+9$) and forgot the $-6$ that moved to the right.\n\n**Test Day Takeaway:** The right side after completing the square equals (the moved constant) plus (every completing-the-square addition). Track the signs: $-6+1+9=4$.",
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
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~25s):** Expand both squares and collect: $(x-2)^2+(y+3)^2$ gives $x^2-4x+4+y^2+6y+9$. Set equal to $16$ and move everything left: $x^2+y^2-4x+6y-3=0$.\n\n**The Full Solution:**\nStep 1: Expand $(x-2)^2=x^2-4x+4$.\nStep 2: Expand $(y+3)^2=y^2+6y+9$.\nStep 3: Combine: $x^2+y^2-4x+6y+13=16$.\nStep 4: Subtract $16$: $x^2+y^2-4x+6y-3=0$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($-6y$): treated $(y+3)^2$ as $(y-3)^2$, flipping the middle term to $-6y$. $(y+3)^2$ gives $+6y$.\n* Choice C ($+4x$): expanded $(x-2)^2$ as if it were $(x+2)^2$, producing $+4x$ instead of $-4x$.\n* Choice D ($+3$): mishandled the constant. $13-16=-3$, not $+3$.\n\n**Test Day Takeaway:** When expanding, $(x-a)^2=x^2-2ax+a^2$ and $(y+b)^2=y^2+2by+b^2$ — the middle term carries the sign inside the binomial, so watch it on every term.",
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
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~10s):** A tangent meets the radius at the point of tangency at a right angle — perpendicular.\n\n**The Full Solution:**\nStep 1: A tangent line touches a circle at exactly one point.\nStep 2: The tangent-radius theorem says the radius drawn to that point is perpendicular ($90^\\circ$) to the tangent line. Picture a wheel on flat ground: the spoke points straight down, the road runs flat, and they meet at a right angle.\n\n**Why the wrong answers are tempting:**\n* Choice A (Parallel): a radius parallel to the tangent would have to lie along it through the center, describing a diameter, not a tangent relationship.\n* Choice C (Equal): \"equal\" compares lengths, not the angle between a line and a segment — wrong kind of relationship.\n* Choice D (Secant): a secant cuts the circle at two points; that names a different line, not the angle.\n\n**Test Day Takeaway:** Tangent $\\perp$ radius at the point of tangency. This $90^\\circ$ relationship is the engine behind tangent-slope and tangent-line problems.",
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
      explanation: "**Choice D is correct.**\n\n**The Fast Way (~20s):** The radius from $(3,4)$ to $(6,8)$ has slope $\\frac{8-4}{6-3}=\\frac{4}{3}$. The tangent is perpendicular, so its slope is the negative reciprocal: $-\\frac{3}{4}$.\n\n**The Full Solution:**\nStep 1: Slope of the radius: $m_{\\text{radius}}=\\frac{8-4}{6-3}=\\frac{4}{3}$.\nStep 2: The tangent is perpendicular to the radius, so $m_{\\text{tangent}}=-\\frac{1}{m_{\\text{radius}}}=-\\frac{3}{4}$.\nStep 3: Check: $\\frac{4}{3}\\cdot\\left(-\\frac{3}{4}\\right)=-1$, confirming perpendicularity.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{4}{3}$): reported the radius slope itself instead of the tangent slope.\n* Choice B ($-\\frac{4}{3}$): negated the radius slope but forgot to flip it. Negating alone is not the negative reciprocal.\n* Choice C ($\\frac{3}{4}$): flipped the slope but forgot the negative sign. Perpendicular needs both flip and negate.\n\n**Test Day Takeaway:** Perpendicular slopes multiply to $-1$. For a tangent, find the radius slope, then take its negative reciprocal — flip and negate.",
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
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~15s):** Two tangents drawn from the same outside point are always equal in length — the two-tangent theorem.\n\n**The Full Solution:**\nStep 1: Let the tangents from external point $P$ touch the circle at $A$ and $B$, with center $O$.\nStep 2: Triangles $\\triangle OAP$ and $\\triangle OBP$ are right triangles sharing hypotenuse $OP$, with legs $OA=OB=r$. They are congruent, so $PA=PB$.\nStep 3: Concretely, each tangent length is $\\sqrt{OP^2-r^2}$ — the same value for both.\n\n**Why the wrong answers are tempting:**\n* Choice A (Perpendicular): the segments are each perpendicular to their own radius, but the angle between the two tangents depends on where $P$ sits — not always $90^\\circ$.\n* Choice C (Parallel): the segments meet at $P$, so they cannot be parallel.\n* Choice D (Always different): the opposite of the theorem; the lengths are always equal.\n\n**Test Day Takeaway:** From one external point, the two tangent segments are equal, each of length $\\sqrt{OP^2-r^2}$. This symmetry resolves most \"two tangents\" problems instantly.",
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
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~10s):** A line is tangent exactly when its distance from the center equals the radius. Here that distance is the radius, $5$.\n\n**The Full Solution:**\nStep 1: The line $y=5$ is horizontal; the center is $(0,0)$.\nStep 2: The distance from $(0,0)$ to $y=5$ is $|5-0|=5$.\nStep 3: That equals the radius $5$, confirming $y=5$ touches the circle at the single point $(0,5)$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($0$): distance $0$ would put the line through the center, making it a diameter, not a tangent.\n* Choice C ($10$): used the diameter $2r=10$. The center-to-tangent distance is $r$, not $2r$.\n* Choice D ($25$): used $r^2=25$ instead of $r=5$.\n\n**Test Day Takeaway:** The distance from a circle's center to a tangent line equals the radius exactly. Less than $r$ means a secant; more than $r$ means no intersection.",
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
      explanation: "**Choice D is correct.**\n\n**The Fast Way (~20s):** A vertical tangent forces a horizontal radius (perpendicular), so A is true. The radius from $(0,0)$ to $(5,0)$ has length $5$, so C is true. Both hold $\\Rightarrow$ D.\n\n**The Full Solution:**\nStep 1: By the tangent-radius theorem, the radius is perpendicular to the tangent. A vertical tangent makes the radius horizontal, so statement A is true.\nStep 2: The radius runs from center $(0,0)$ to $(5,0)$: $r=\\sqrt{(5-0)^2+(0-0)^2}=5$, so statement C is true.\nStep 3: A and C are both true, so the complete answer is D.\n\n**Why the wrong answers are tempting:**\n* Choice A: true but incomplete — the radius is also $5$, which C adds.\n* Choice B: a vertical tangent makes the radius horizontal, not vertical. Perpendicular to vertical is horizontal.\n* Choice C: true but incomplete, same as A. Both A and C hold, so D is the full answer.\n\n**Test Day Takeaway:** Tangent direction and radius direction are always perpendicular: vertical tangent $\\Leftrightarrow$ horizontal radius. When two listed facts are both true, the \"both\" option is the answer.",
      skills: ["tangent-lines", "perpendicular-negative-reciprocal"]
    }
  ]
};
