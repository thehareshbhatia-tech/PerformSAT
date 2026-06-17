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
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~10s):** The diameter is twice the radius, so $d = 2 \\times 7 = 14$ cm.\n\n**The Full Solution:**\nStep 1: Use $d = 2r$, the rule that connects diameter to radius.\nStep 2: Substitute $r = 7$: $d = 2 \\times 7 = 14$ cm.\n\n**Why the wrong answers are tempting:**\n* Choice A ($3.5$ cm): halved instead of doubled, using $r = \\frac{d}{2}$ in the wrong direction.\n* Choice B ($7$ cm): reported the radius itself without converting.\n* Choice D ($49$ cm): squared the radius ($7^2 = 49$), confusing this with the area formula $A = \\pi r^2$.\n\n**Test Day Takeaway:** Diameter is always twice the radius: $d = 2r$, and $r = \\frac{d}{2}$.",
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
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~10s):** The radius is half the diameter, so $r = \\frac{20}{2} = 10$ inches.\n\n**The Full Solution:**\nStep 1: Use $r = \\frac{d}{2}$.\nStep 2: Substitute $d = 20$: $r = \\frac{20}{2} = 10$ inches.\n\n**Why the wrong answers are tempting:**\n* Choice A ($5$ inches): divided by $4$ instead of $2$, perhaps halving twice.\n* Choice C ($20$ inches): used the diameter directly without converting.\n* Choice D ($40$ inches): doubled the diameter ($20 \\times 2$), applying $d = 2r$ backwards.\n\n**Test Day Takeaway:** Radius is always half the diameter: $r = \\frac{d}{2}$.",
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
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~10s):** $OP$ runs from the center $O$ to a point $P$ on the circle, which is exactly the definition of a radius, so $r = 5$.\n\n**The Full Solution:**\nStep 1: The radius is the distance from the center to any point on the circle.\nStep 2: $P$ is on the circle and $O$ is the center, so $OP = 5$ is the radius: $r = 5$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($2.5$): halved $OP$, treating it as a diameter rather than a radius.\n* Choice C ($10$): doubled $OP$, treating the center-to-circle distance as a radius needing conversion to diameter.\n* Choice D ($25$): squared $OP$ ($5^2$), confusing $r$ with $r^2$ from the area or circle equation.\n\n**Test Day Takeaway:** A segment from the center to a point on the circle is a radius — its length is $r$, no conversion needed.",
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
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~10s):** A chord is any segment whose two endpoints lie on the circle — that is the one property true for every chord.\n\n**The Full Solution:**\nStep 1: Recall the definition: a chord is a segment with both endpoints on the circle.\nStep 2: This holds for every chord, regardless of length or position, so it is the only \"always true\" choice.\n\n**Why the wrong answers are tempting:**\n* Choice A (passes through the center): true only for a diameter, the special longest chord — not for chords in general.\n* Choice B (equal to the radius): a chord can be nearly any length up to $2r$; equaling the radius is not required.\n* Choice D (perpendicular to the diameter): no rule forces a chord to meet a diameter at a right angle; the angle can be anything.\n\n**Test Day Takeaway:** A chord is defined only by having both endpoints on the circle. A diameter is the special chord through the center and the longest one possible.",
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
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~10s):** The longest chord is the one through the center — the diameter, of length $2r$.\n\n**The Full Solution:**\nStep 1: A chord connects two points on the circle; the maximum separation happens when the segment passes through the center.\nStep 2: That chord is the diameter, $d = 2r$. A chord at distance $h$ from the center has length $2\\sqrt{r^2 - h^2}$, which is largest when $h = 0$, giving $2r$.\n\n**Why the wrong answers are tempting:**\n* Choice A (Radius): not a chord at all — it has only one endpoint on the circle.\n* Choice C (Arc): a curved piece of the circle, not a straight segment, so it is not a chord.\n* Choice D (Secant): a line through two points on the circle that extends infinitely, not a segment.\n\n**Test Day Takeaway:** The diameter is the longest chord of a circle, with length $2r$ — recognize it as the maximum distance across the circle.",
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
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~10s):** Area is $\\pi r^2$, so $\\pi (6)^2 = 36\\pi$.\n\n**The Full Solution:**\nStep 1: Write $A = \\pi r^2$.\nStep 2: Substitute $r = 6$: $A = \\pi (6)^2 = 36\\pi$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($6\\pi$): used $\\pi r$ and forgot to square the radius.\n* Choice B ($12\\pi$): used the circumference formula $C = 2\\pi r = 2\\pi(6) = 12\\pi$.\n* Choice D ($72\\pi$): doubled the area, perhaps from blending area and circumference.\n\n**Test Day Takeaway:** Area is $A = \\pi r^2$ — square the radius first, then multiply by $\\pi$. Don't confuse it with circumference $2\\pi r$.",
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
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~15s):** Halve the diameter to get $r = 8$, then $A = \\pi (8)^2 = 64\\pi$ square inches.\n\n**The Full Solution:**\nStep 1: Convert: $r = \\frac{d}{2} = \\frac{16}{2} = 8$ inches.\nStep 2: Apply $A = \\pi r^2 = \\pi (8)^2 = 64\\pi$ square inches.\n\n**Why the wrong answers are tempting:**\n* Choice A ($16\\pi$): used $\\pi r$ on $r$ without squaring, or used the diameter as a linear factor.\n* Choice B ($32\\pi$): used circumference $C = 2\\pi r = 2\\pi(8) = 32\\pi$ instead of area.\n* Choice D ($256\\pi$): plugged the diameter straight into $\\pi r^2$ as $\\pi(16)^2$, skipping the halving step.\n\n**Test Day Takeaway:** Given a diameter, halve it to the radius before using $A = \\pi r^2$.",
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
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~10s):** $100\\pi = \\pi r^2 \\Rightarrow r^2 = 100 \\Rightarrow r = 10$ meters.\n\n**The Full Solution:**\nStep 1: Set $A = \\pi r^2$, so $100\\pi = \\pi r^2$.\nStep 2: Divide by $\\pi$: $r^2 = 100$.\nStep 3: Take the square root: $r = \\sqrt{100} = 10$ meters.\n\n**Why the wrong answers are tempting:**\n* Choice A ($5$ meters): found $r = 10$ then halved it, confusing radius with diameter.\n* Choice C ($25$ meters): stopped at $r^2 = 100$ and mishandled it, or divided by $4$.\n* Choice D ($50$ meters): computed $\\frac{100}{2}$, mixing in the circumference structure instead of taking a square root.\n\n**Test Day Takeaway:** To get the radius from area, use $r = \\sqrt{\\frac{A}{\\pi}}$. When the area is a multiple of $\\pi$, the $\\pi$ cancels cleanly.",
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
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~20s):** With $\\pi \\approx \\frac{22}{7}$, $154 = \\frac{22}{7} r^2$ gives $r^2 = 154 \\cdot \\frac{7}{22} = 49$, so $r = 7$ feet.\n\n**The Full Solution:**\nStep 1: Set up $A = \\pi r^2 \\Rightarrow 154 = \\frac{22}{7} \\cdot r^2$.\nStep 2: Multiply both sides by $\\frac{7}{22}$: $r^2 = 154 \\times \\frac{7}{22} = \\frac{1078}{22} = 49$.\nStep 3: Take the square root: $r = \\sqrt{49} = 7$ feet.\n\n**Why the wrong answers are tempting:**\n* Choice B ($14$ feet): doubled the radius to the diameter ($2 \\times 7$).\n* Choice C ($49$ feet): stopped at $r^2 = 49$ without taking the square root.\n* Choice D ($77$ feet): computed $\\frac{154}{2}$, misapplying the formula.\n\n**Test Day Takeaway:** When $\\pi \\approx \\frac{22}{7}$, multiply by the reciprocal $\\frac{7}{22}$ to isolate $r^2$, then take the square root.",
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
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~10s):** Radius is squared in $A = \\pi r^2$, so doubling it scales the area by $2^2 = 4$.\n\n**The Full Solution:**\nStep 1: Original area $A_1 = \\pi r^2$.\nStep 2: With radius $2r$: $A_2 = \\pi (2r)^2 = 4\\pi r^2$.\nStep 3: The factor is $\\frac{A_2}{A_1} = \\frac{4\\pi r^2}{\\pi r^2} = 4$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($2$): assumed the area doubles, ignoring that the radius is squared.\n* Choice C ($\\pi$): $\\pi$ appears in both areas and cancels in the ratio — it never scales the result.\n* Choice D ($2\\pi$): combined the factor $2$ with a leftover $\\pi$, but the $\\pi$ cancels.\n\n**Test Day Takeaway:** Scaling the radius by a factor $k$ scales the area by $k^2$, since $\\pi(kr)^2 = k^2 \\pi r^2$.",
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
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~10s):** Circumference is $2\\pi r$, so $2\\pi (5) = 10\\pi$.\n\n**The Full Solution:**\nStep 1: Write $C = 2\\pi r$.\nStep 2: Substitute $r = 5$: $C = 2\\pi (5) = 10\\pi$. Equivalently, $C = \\pi d = \\pi(10) = 10\\pi$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($5\\pi$): used $\\pi r$ and dropped the factor of $2$.\n* Choice C ($25\\pi$): used the area formula $\\pi r^2 = \\pi(5)^2 = 25\\pi$.\n* Choice D ($50\\pi$): applied a nonexistent $2\\pi r^2$, doubling the area.\n\n**Test Day Takeaway:** Circumference is $C = 2\\pi r = \\pi d$ (linear in $r$); area is $A = \\pi r^2$ (quadratic). Keep them straight.",
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
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~10s):** $C = \\pi d$, so $24\\pi = \\pi d$ gives $d = 24$ cm directly.\n\n**The Full Solution:**\nStep 1: Use $C = \\pi d$.\nStep 2: Substitute: $24\\pi = \\pi d$.\nStep 3: Divide both sides by $\\pi$: $d = 24$ cm.\n\n**Why the wrong answers are tempting:**\n* Choice A ($6$ cm): divided by $4$ instead of solving cleanly.\n* Choice B ($12$ cm): found the radius, $r = \\frac{C}{2\\pi} = 12$, but the question asks for the diameter.\n* Choice D ($48$ cm): doubled the answer ($24 \\times 2$), applying $d = 2r$ to the wrong quantity.\n\n**Test Day Takeaway:** From $C = \\pi d$, the diameter is $d = \\frac{C}{\\pi}$. When $C$ is a multiple of $\\pi$, the coefficient is the diameter.",
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
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~15s):** $60^\\circ$ is $\\frac{1}{6}$ of a full circle, so the arc is $\\frac{1}{6}$ of the circumference $2\\pi(9)=18\\pi$, giving $3\\pi$.\n\n**The Full Solution:**\nStep 1: Arc length is the central-angle fraction of the circumference: $\\text{arc}=\\frac{\\theta}{360^\\circ}\\times 2\\pi r$.\nStep 2: Substitute $\\theta=60^\\circ$ and $r=9$: $\\frac{60^\\circ}{360^\\circ}\\times 2\\pi(9)=\\frac{1}{6}\\times 18\\pi$.\nStep 3: $\\frac{1}{6}\\times 18\\pi=3\\pi$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($6\\pi$): used $\\frac{60}{180}=\\frac{1}{3}$, dividing by a half-circle ($180^\\circ$) instead of a full circle ($360^\\circ$).\n* Choice C ($9\\pi$): used $\\pi r=9\\pi$, the semicircle arc, ignoring the $60^\\circ$ fraction.\n* Choice D ($18\\pi$): reported the full circumference $2\\pi(9)$ without taking the fraction.\n\n**Test Day Takeaway:** Arc length is always $\\frac{\\theta}{360^\\circ}\\times 2\\pi r$ — divide the angle by $360^\\circ$, never $180^\\circ$.",
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
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~15s):** The arc $4\\pi$ over the circumference $2\\pi(12)=24\\pi$ is the fraction $\\frac{4\\pi}{24\\pi}=\\frac{1}{6}$, and $\\frac{1}{6}$ of $360^\\circ$ is $60^\\circ$.\n\n**The Full Solution:**\nStep 1: Use $\\text{arc}=\\frac{\\theta}{360^\\circ}\\times 2\\pi r$ with $\\text{arc}=4\\pi$ and $r=12$.\nStep 2: $4\\pi=\\frac{\\theta}{360^\\circ}\\times 24\\pi$, so $\\frac{\\theta}{360^\\circ}=\\frac{4\\pi}{24\\pi}=\\frac{1}{6}$.\nStep 3: $\\theta=\\frac{360^\\circ}{6}=60^\\circ$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($30^\\circ$): used $\\frac{\\theta}{360^\\circ}=\\frac{1}{12}$, dividing $4\\pi$ by $48\\pi$ instead of $24\\pi$.\n* Choice C ($90^\\circ$): assumed a quarter-circle without checking that the fraction is $\\frac{1}{6}$, not $\\frac{1}{4}$.\n* Choice D ($120^\\circ$): used $\\frac{1}{3}$, as if $r=6$ (circumference $12\\pi$) instead of $r=12$.\n\n**Test Day Takeaway:** To find a central angle from an arc, take $\\frac{\\text{arc}}{2\\pi r}$ to get the fraction of the circle, then multiply by $360^\\circ$.",
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
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~15s):** A semicircle is half the circumference, so $\\pi r=8\\pi$, giving $r=8$.\n\n**The Full Solution:**\nStep 1: A semicircle spans $180^\\circ$, half the full circle, so its arc is $\\frac{1}{2}\\times 2\\pi r=\\pi r$.\nStep 2: Set $\\pi r=8\\pi$.\nStep 3: Divide both sides by $\\pi$: $r=8$. Check: full circumference $2\\pi(8)=16\\pi$, and half of that is $8\\pi$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($4$): divided $8\\pi$ by $2\\pi$, treating $8\\pi$ as the full circumference instead of the semicircle arc.\n* Choice C ($16$): doubled $8$, as if the semicircle formula were $\\frac{\\pi r}{2}$ rather than $\\pi r$.\n* Choice D ($32$): stacked extra factors of $2$ onto the wrong setup; off by a factor of $4$.\n\n**Test Day Takeaway:** A semicircular arc equals $\\pi r$ (half of $2\\pi r$) — divide the arc by $\\pi$, not $2\\pi$, to recover the radius.",
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
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~15s):** $90^\\circ$ is $\\frac{1}{4}$ of the circle, so the sector is $\\frac{1}{4}$ of the area $\\pi(8)^2=64\\pi$, giving $16\\pi$.\n\n**The Full Solution:**\nStep 1: Sector area is the central-angle fraction of the full area: $A=\\frac{\\theta}{360^\\circ}\\times \\pi r^2$.\nStep 2: Substitute $\\theta=90^\\circ$ and $r=8$: $\\frac{90^\\circ}{360^\\circ}\\times \\pi(8)^2=\\frac{1}{4}\\times 64\\pi$.\nStep 3: $\\frac{1}{4}\\times 64\\pi=16\\pi$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($8\\pi$): took $\\frac{1}{8}$ of $64\\pi$, or used $\\pi r$ instead of $\\pi r^2$.\n* Choice C ($32\\pi$): used $\\frac{90}{180}=\\frac{1}{2}$, dividing by a half-circle instead of $360^\\circ$.\n* Choice D ($64\\pi$): reported the full circle area $\\pi(8)^2$ without applying the sector fraction.\n\n**Test Day Takeaway:** Sector area is $\\frac{\\theta}{360^\\circ}\\times \\pi r^2$ — use $r^2$, and always divide the angle by $360^\\circ$.",
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
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~15s):** $45^\\circ$ is $\\frac{1}{8}$ of the circle, so the slice is $\\frac{1}{8}$ of the area $\\pi(10)^2=100\\pi$, giving $12.5\\pi$ square inches.\n\n**The Full Solution:**\nStep 1: Sector area is $A=\\frac{\\theta}{360^\\circ}\\times \\pi r^2$.\nStep 2: Substitute $\\theta=45^\\circ$ and $r=10$: $\\frac{45^\\circ}{360^\\circ}\\times \\pi(10)^2=\\frac{1}{8}\\times 100\\pi$.\nStep 3: $\\frac{100\\pi}{8}=12.5\\pi$ square inches.\n\n**Why the wrong answers are tempting:**\n* Choice B ($25\\pi$): used $\\frac{45}{180}=\\frac{1}{4}$, dividing by a half-circle instead of $360^\\circ$.\n* Choice C ($50\\pi$): took $\\frac{1}{2}$ of the pizza instead of $\\frac{1}{8}$.\n* Choice D ($100\\pi$): reported the full circle area $\\pi(10)^2$ without applying the slice fraction.\n\n**Test Day Takeaway:** A $45^\\circ$ slice is $\\frac{360^\\circ}{45^\\circ}=8$ equal pieces, so it is $\\frac{1}{8}$ of the circle's area.",
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
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~20s):** $60^\\circ$ is $\\frac{1}{6}$ of the circle, so $\\frac{1}{6}\\pi r^2=18\\pi$ gives $r^2=108$ and $r=\\sqrt{108}=6\\sqrt{3}$.\n\n**The Full Solution:**\nStep 1: Use $A=\\frac{\\theta}{360^\\circ}\\times \\pi r^2$ with $A=18\\pi$ and $\\theta=60^\\circ$.\nStep 2: $18\\pi=\\frac{60^\\circ}{360^\\circ}\\times \\pi r^2=\\frac{1}{6}\\pi r^2$.\nStep 3: Multiply by $6$: $108\\pi=\\pi r^2$, so $r^2=108$.\nStep 4: Simplify: $r=\\sqrt{108}=\\sqrt{36\\times 3}=6\\sqrt{3}$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($3\\sqrt{6}$): got $r^2=54$ by multiplying by $3$ instead of $6$, then $\\sqrt{54}=3\\sqrt{6}$.\n* Choice B ($6$): used $r^2=36$, skipping the multiplication that undoes the $\\frac{1}{6}$ fraction.\n* Choice D ($18$): reported the area's coefficient $18$ without solving for $r$.\n\n**Test Day Takeaway:** Clear the angle fraction first to isolate $r^2$, then simplify the root by factoring out perfect squares: $\\sqrt{108}=6\\sqrt{3}$.",
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
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~15s):** The sector area $9\\pi$ over the full area $\\pi(6)^2=36\\pi$ is $\\frac{9}{36}=\\frac{1}{4}$ of the circle, so $\\theta=\\frac{1}{4}\\times 360^\\circ=90^\\circ$.\n\n**The Full Solution:**\nStep 1: Use $A=\\frac{\\theta}{360^\\circ}\\times \\pi r^2$ with $A=9\\pi$ and $r=6$.\nStep 2: $9\\pi=\\frac{\\theta}{360^\\circ}\\times 36\\pi$, so $\\frac{\\theta}{360^\\circ}=\\frac{9}{36}=\\frac{1}{4}$.\nStep 3: $\\theta=\\frac{360^\\circ}{4}=90^\\circ$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($45^\\circ$): used $\\frac{1}{8}$, dividing $9\\pi$ by $72\\pi$ ($2\\pi r^2$) instead of $36\\pi$.\n* Choice B ($60^\\circ$): used $\\frac{1}{6}$, confusing the radius value $6$ with the fraction.\n* Choice D ($120^\\circ$): used $\\frac{1}{3}$, mishandling $\\frac{9}{36}$.\n\n**Test Day Takeaway:** The ratio of sector area to full area equals $\\frac{\\theta}{360^\\circ}$ — compute that ratio, then multiply by $360^\\circ$.",
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
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~10s):** A sector's area fraction equals its angle fraction: $\\frac{120^\\circ}{360^\\circ}=\\frac{1}{3}$.\n\n**The Full Solution:**\nStep 1: The fraction of the total area is $\\frac{\\theta}{360^\\circ}=\\frac{120^\\circ}{360^\\circ}$.\nStep 2: Simplify: $\\frac{120^\\circ}{360^\\circ}=\\frac{1}{3}$. Check: $120^\\circ\\times 3=360^\\circ$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{1}{6}$): divided by $720$ (double $360$) instead of $360$.\n* Choice B ($\\frac{1}{4}$): the fraction for $90^\\circ$, not $120^\\circ$.\n* Choice D ($\\frac{1}{2}$): the fraction for a semicircle ($180^\\circ$); $120^\\circ$ is less than half.\n\n**Test Day Takeaway:** The fraction of a circle a sector covers is $\\frac{\\theta}{360^\\circ}$, independent of radius — memorize the common ones: $90^\\circ=\\frac{1}{4}$, $120^\\circ=\\frac{1}{3}$, $180^\\circ=\\frac{1}{2}$.",
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
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~10s):** In $(x-h)^2+(y-k)^2=r^2$ the center is $(h,k)$, and the signs flip: $(x-3)$ gives $h=3$, $(y+2)$ gives $k=-2$, so the center is $(3,-2)$.\n\n**The Full Solution:**\nStep 1: Standard form is $(x-h)^2+(y-k)^2=r^2$ with center $(h,k)$.\nStep 2: Match $(x-3)^2\\Rightarrow h=3$.\nStep 3: Rewrite $(y+2)^2=(y-(-2))^2\\Rightarrow k=-2$. Center $=(3,-2)$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($(3,2)$): read $(y+2)$ as $k=2$ instead of $k=-2$.\n* Choice B ($(-3,2)$): flipped both signs the wrong way.\n* Choice D ($(-3,-2)$): read $(x-3)$ as $h=-3$ while correctly getting $k=-2$.\n\n**Test Day Takeaway:** The standard form subtracts the center, so a \"$+$\" inside the parentheses means a negative coordinate — rewrite $(y+2)$ as $(y-(-2))$ to read it cleanly.",
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
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~10s):** The right side is $r^2$, so $r=\\sqrt{49}=7$.\n\n**The Full Solution:**\nStep 1: In standard form $(x-h)^2+(y-k)^2=r^2$, the right side is $r^2$.\nStep 2: Here $r^2=49$, so $r=\\sqrt{49}=7$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($14$): reported the diameter $2r$ instead of the radius.\n* Choice C ($24.5$): divided $49$ by $2$ instead of taking the square root.\n* Choice D ($49$): reported $r^2$ without taking the square root.\n\n**Test Day Takeaway:** The number on the right of a circle equation is $r^2$, not $r$ — always take the square root.",
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
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~10s):** Plug $(h,k)=(0,5)$ and $r=3$ into $(x-h)^2+(y-k)^2=r^2$: $x^2+(y-5)^2=9$.\n\n**The Full Solution:**\nStep 1: Standard form is $(x-h)^2+(y-k)^2=r^2$.\nStep 2: Substitute $h=0$, $k=5$, $r=3$: $(x-0)^2+(y-5)^2=3^2$.\nStep 3: Simplify: $x^2+(y-5)^2=9$. Check $(0,8)$: $0^2+(8-5)^2=9$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($x^2+(y-5)^2=3$): used $r=3$ on the right instead of $r^2=9$.\n* Choice C ($x^2+(y+5)^2=9$): used $(y+5)$, which places the center at $y=-5$.\n* Choice D ($(x-5)^2+y^2=9$): put the $5$ with $x$, giving center $(5,0)$ instead of $(0,5)$.\n\n**Test Day Takeaway:** When writing a circle equation, square the radius for the right side and match each coordinate to its own variable.",
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
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~10s):** $x^2+y^2=36$ has nothing subtracted from $x$ or $y$, so the center is the origin $(0,0)$.\n\n**The Full Solution:**\nStep 1: Rewrite as $(x-0)^2+(y-0)^2=36$.\nStep 2: Read $h=0$, $k=0$, so the center is $(0,0)$. (The radius is $\\sqrt{36}=6$.)\n\n**Why the wrong answers are tempting:**\n* Choice B ($(6,0)$): mistook the radius $6$ for the $x$-coordinate of the center.\n* Choice C ($(0,6)$): mistook the radius $6$ for the $y$-coordinate.\n* Choice D ($(6,6)$): placed the radius in both coordinates; the $36$ is $r^2$, not a center value.\n\n**Test Day Takeaway:** When a circle equation is $x^2+y^2=r^2$ with no shifts on $x$ or $y$, its center is the origin and the right side is $r^2$.",
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
