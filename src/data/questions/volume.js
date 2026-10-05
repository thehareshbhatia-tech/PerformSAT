// Practice questions for Volume module
// Questions are organized by SECTION (question type)

export const volumeQuestions = {
  // Section: Fundamentals
  "Fundamentals": [
    {
      id: 1,
      difficulty: "easy",
      question: "A right prism has a base with an area of $18$ square inches and a height of $7$ inches. What is the volume, in cubic inches, of the prism?",
      choices: [
        // distractor: adds the base area and the height instead of multiplying
        { id: "A", text: "$25$" },
        // distractor: uses the pyramid formula (1/3)Bh instead of Bh
        { id: "B", text: "$42$" },
        // distractor: takes half of base area times height, as in a triangle's area
        { id: "C", text: "$63$" },
        { id: "D", text: "$126$" }
      ],
      correctAnswer: "D",
      hint: "Multiply the area of the base by the height.",
      explanation: "**Choice D is correct.**\n\n**The Fast Way (~10s):** The volume of any prism is the base area times the height: $18(7) = 126$.\n\n**The Full Solution:**\nStep 1: For a right prism, $V = Bh$, where $B$ is the area of a base and $h$ is the height.\nStep 2: Substitute $B = 18$ and $h = 7$: $V = 18(7)$.\nStep 3: Multiply: $V = 126$ cubic inches. Check: $126 \\div 7 = 18$, the given base area ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($25$): adds the base area and the height, $18 + 7 = 25$, instead of multiplying them.\n* Choice B ($42$): uses the pyramid formula $\\frac{1}{3}Bh$, giving $\\frac{1}{3}(126) = 42$; a prism has no factor of $\\frac{1}{3}$.\n* Choice C ($63$): takes half of the product, $\\frac{1}{2}(18)(7) = 63$, as if finding the area of a triangle.\n\n**Test Day Takeaway:** Every prism, whatever the shape of its base, has volume $Bh$; when the base area is given, one multiplication finishes the problem.",
      skills: ["volume-scaling", "volume-prism"]
    },
    {
      id: 2,
      difficulty: "easy",
      question: "The length, width, and height of box $B$ are each $3$ times those of box $A$. The volume of box $B$ is how many times the volume of box $A$?",
      choices: [
        // distractor: scales the volume by 3, as if only one dimension tripled
        { id: "A", text: "$3$" },
        // distractor: uses 3^2, the scale factor for an area
        { id: "B", text: "$9$" },
        { id: "C", text: "$27$" },
        // distractor: uses 3^4, one factor of 3 too many
        { id: "D", text: "$81$" }
      ],
      correctAnswer: "C",
      hint: "Write the volume of each box as a product of three dimensions.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~10s):** All three dimensions are multiplied by $3$, so the volume is multiplied by $3 \\cdot 3 \\cdot 3 = 27$.\n\n**The Full Solution:**\nStep 1: Let box $A$ have length $\\ell$, width $w$, and height $h$, so its volume is $\\ell wh$.\nStep 2: Box $B$ has dimensions $3\\ell$, $3w$, and $3h$, so its volume is $(3\\ell)(3w)(3h) = 27\\ell wh$.\nStep 3: The volume of box $B$ is $27$ times the volume of box $A$. Check: a $1$ by $1$ by $1$ box has volume $1$, and a $3$ by $3$ by $3$ box has volume $27$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($3$): scales the volume by the same factor as each length, as if only one dimension had tripled.\n* Choice B ($9$): uses $3^2 = 9$, the factor for an area such as one face, not for a volume.\n* Choice D ($81$): uses $3^4 = 81$, counting one factor of $3$ too many; a box has three dimensions.\n\n**Test Day Takeaway:** When every length is multiplied by $k$, areas are multiplied by $k^2$ and volumes by $k^3$.",
      skills: ["volume-scaling", "volume-prism"]
    },
    {
      id: 3,
      difficulty: "medium",
      question: "$V = s^{2}h$\nThe formula gives the volume $V$ of a box that has a square base with side length $s$ and has height $h$. Which equation correctly expresses $s$ in terms of $V$ and $h$?",
      choices: [
        // distractor: treats s^2 as 2s and divides by 2 instead of taking a square root
        { id: "A", text: "$s = \\frac{V}{2h}$" },
        { id: "B", text: "$s = \\sqrt{\\frac{V}{h}}$" },
        // distractor: multiplies V by h instead of dividing
        { id: "C", text: "$s = \\sqrt{Vh}$" },
        // distractor: takes the square root of V only, leaving h outside the root
        { id: "D", text: "$s = \\frac{\\sqrt{V}}{h}$" }
      ],
      correctAnswer: "B",
      hint: "Undo the multiplication by h first, then undo the square.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~20s):** Divide by $h$ to get $s^2 = \\frac{V}{h}$, then take the square root: $s = \\sqrt{\\frac{V}{h}}$.\n\n**The Full Solution:**\nStep 1: Isolate $s^2$ by dividing both sides of $V = s^2h$ by $h$: $s^2 = \\frac{V}{h}$.\nStep 2: A side length is positive, so take the positive square root of both sides: $s = \\sqrt{\\frac{V}{h}}$.\nStep 3: This is choice B. Check: with $s = 3$ and $h = 5$, $V = 45$, and $\\sqrt{\\frac{45}{5}} = \\sqrt{9} = 3$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($s = \\frac{V}{2h}$): treats $s^2$ as $2s$, dividing by $2$ where a square root is needed.\n* Choice C ($s = \\sqrt{Vh}$): multiplies by $h$ instead of dividing by it before taking the square root.\n* Choice D ($s = \\frac{\\sqrt{V}}{h}$): takes the square root of $V$ but not of $h$, so the $h$ is undone incorrectly.\n\n**Test Day Takeaway:** To solve a formula for a squared variable, isolate the square first, then take the square root of the whole other side.",
      skills: ["volume-scaling", "volume-prism"]
    },
    {
      id: 4,
      difficulty: "medium",
      question: "A cube has an edge length of $2$ feet. What is the volume, in cubic inches, of the cube? ($1$ foot $= 12$ inches)",
      choices: [
        // distractor: multiplies 8 cubic feet by 12 once instead of by 12^3
        { id: "A", text: "$96$" },
        // distractor: squares the 24-inch edge instead of cubing it
        { id: "B", text: "$576$" },
        // distractor: multiplies 8 cubic feet by 144, the square-unit factor
        { id: "C", text: "$1{,}152$" },
        { id: "D", text: "$13{,}824$" }
      ],
      correctAnswer: "D",
      hint: "Change the edge length to inches before finding the volume.",
      explanation: "**Choice D is correct.**\n\n**The Fast Way (~20s):** The edge is $2(12) = 24$ inches, so the volume is $24^3 = 13{,}824$ cubic inches.\n\n**The Full Solution:**\nStep 1: Convert the edge length to inches: $2$ feet is $2(12) = 24$ inches.\nStep 2: The volume of a cube with edge $s$ is $s^3$, so $V = 24^3$.\nStep 3: $24^3 = 13{,}824$ cubic inches. Check: the cube is $2^3 = 8$ cubic feet, and each cubic foot is $12^3 = 1{,}728$ cubic inches; $8(1{,}728) = 13{,}824$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($96$): finds the volume in cubic feet, $2^3 = 8$, and then multiplies by $12$ only once.\n* Choice B ($576$): converts the edge to $24$ inches but squares it, $24^2 = 576$, which is the area of one face.\n* Choice C ($1{,}152$): multiplies $8$ cubic feet by $12^2 = 144$, the conversion factor for square units.\n\n**Test Day Takeaway:** Convert the length before cubing; if you convert after, a cubic foot is $12^3$ cubic inches, not $12$.",
      skills: ["volume-scaling", "volume-prism"]
    },
    {
      id: 5,
      difficulty: "hard",
      question: "The table shows the volumes of two cubes, $P$ and $Q$. The surface area of cube $Q$ is $k$ times the surface area of cube $P$. What is the value of $k$?",
      questionTable: { headers: ["Cube", "Volume (cubic inches)"], rows: [["P", "27"], ["Q", "216"]] },
      choices: [
        // distractor: gives the ratio of the edge lengths rather than of the surface areas
        { id: "A", text: "$2$" },
        { id: "B", text: "$4$" },
        // distractor: gives the ratio of the volumes
        { id: "C", text: "$8$" },
        // distractor: squares the volume ratio instead of the edge ratio
        { id: "D", text: "$64$" }
      ],
      correctAnswer: "B",
      hint: "Get back to an edge length from each volume before comparing anything.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~40s):** The edges are $\\sqrt[3]{27} = 3$ and $\\sqrt[3]{216} = 6$, so the surface areas are in the ratio $\\left(\\frac{6}{3}\\right)^2 = 4$.\n\n**The Full Solution:**\nStep 1: A cube with volume $V$ has edge length $\\sqrt[3]{V}$, so cube $P$ has edge $3$ inches and cube $Q$ has edge $6$ inches.\nStep 2: The ratio of the edge lengths is $\\frac{6}{3} = 2$.\nStep 3: Surface area is multiplied by the square of the edge ratio, so $k = 2^2 = 4$. Check: the surface areas are $6(3^2) = 54$ and $6(6^2) = 216$, and $\\frac{216}{54} = 4$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($2$): gives the ratio of the edge lengths, $\\frac{6}{3}$, rather than of the surface areas.\n* Choice C ($8$): gives the ratio of the volumes, $\\frac{216}{27}$.\n* Choice D ($64$): squares the volume ratio, $8^2$, instead of squaring the edge ratio.\n\n**Test Day Takeaway:** Go from volume back to edge length with a cube root, then square that ratio to compare surface areas.",
      skills: ["volume-scaling", "volume-prism"]
    }
  ],

  // Section: Rectangular Prism
  "Rectangular Prism": [
    {
      id: 1,
      difficulty: "easy",
      question: "What is the volume, in cubic inches, of a box that is $20$ inches long, $15$ inches wide, and $12$ inches tall?",
      choices: [
        // distractor: adds the three dimensions instead of multiplying
        { id: "A", text: "$47$" },
        // distractor: finds the area of the base only
        { id: "B", text: "$300$" },
        // distractor: takes half of the product, as for a triangular prism
        { id: "C", text: "$1{,}800$" },
        { id: "D", text: "$3{,}600$" }
      ],
      correctAnswer: "D",
      hint: "Multiply the length, the width, and the height.",
      explanation: "**Choice D is correct.**\n\n**The Fast Way (~10s):** Multiply the three dimensions: $20(15)(12) = 3{,}600$.\n\n**The Full Solution:**\nStep 1: The volume of a rectangular prism is $V = \\ell wh$.\nStep 2: Substitute the dimensions: $V = 20(15)(12)$.\nStep 3: $20(15) = 300$ and $300(12) = 3{,}600$ cubic inches. Check: $3{,}600 \\div 12 = 300$, the area of the bottom, $20(15)$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($47$): adds the three dimensions, $20 + 15 + 12 = 47$, instead of multiplying them.\n* Choice B ($300$): multiplies only the length and width, $20(15) = 300$, which is the area of the bottom.\n* Choice C ($1{,}800$): takes half of the product, as if the box were a triangular prism.\n\n**Test Day Takeaway:** The volume of a rectangular box is length times width times height; adding the dimensions or stopping after two of them are the usual slips.",
      skills: ["volume-prism"]
    },
    {
      id: 2,
      difficulty: "easy",
      question: "A right rectangular prism has a volume of $270$ cubic centimeters, and its base measures $9$ centimeters by $5$ centimeters. What is the height, in centimeters, of the prism?",
      choices: [
        { id: "A", text: "$6$" },
        // distractor: divides the volume by one base dimension only (270/9)
        { id: "B", text: "$30$" },
        // distractor: divides the volume by the other base dimension only (270/5)
        { id: "C", text: "$54$" },
        // distractor: subtracts the base dimensions from the volume
        { id: "D", text: "$256$" }
      ],
      correctAnswer: "A",
      hint: "Find the area of the base first.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~15s):** The base area is $9(5) = 45$, so the height is $\\frac{270}{45} = 6$.\n\n**The Full Solution:**\nStep 1: The volume of a rectangular prism is the base area times the height: $V = (9)(5)h$.\nStep 2: Substitute the volume: $270 = 45h$.\nStep 3: Divide: $h = \\frac{270}{45} = 6$ centimeters. Check: $9(5)(6) = 270$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($30$): divides the volume by the length only, $\\frac{270}{9} = 30$.\n* Choice C ($54$): divides the volume by the width only, $\\frac{270}{5} = 54$.\n* Choice D ($256$): subtracts the two base dimensions from the volume, $270 - 9 - 5 = 256$.\n\n**Test Day Takeaway:** To find a missing dimension, divide the volume by the product of the dimensions you know, not by just one of them.",
      skills: ["volume-prism"]
    },
    {
      id: 3,
      difficulty: "medium",
      question: "A rectangular tank with a base that measures $12$ feet by $8$ feet contains $480$ cubic feet of water. If $288$ cubic feet of water is added, by how many feet will the water level rise?",
      choices: [
        { id: "A", text: "$3$" },
        // distractor: gives the original depth of the water rather than the rise
        { id: "B", text: "$5$" },
        // distractor: gives the new depth rather than the increase
        { id: "C", text: "$8$" },
        // distractor: divides the added volume by the length only
        { id: "D", text: "$24$" }
      ],
      correctAnswer: "A",
      hint: "Only the added water affects the rise.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~25s):** The base area is $12(8) = 96$ square feet, so the rise is $\\frac{288}{96} = 3$ feet.\n\n**The Full Solution:**\nStep 1: The water fills a rectangular prism whose base area is $12(8) = 96$ square feet.\nStep 2: The added volume equals the base area times the rise $r$: $288 = 96r$.\nStep 3: So $r = \\frac{288}{96} = 3$ feet. Check: the depth goes from $\\frac{480}{96} = 5$ feet to $\\frac{768}{96} = 8$ feet, a rise of $3$ feet ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($5$): gives the original depth of the water, $\\frac{480}{96} = 5$ feet, rather than the rise.\n* Choice C ($8$): gives the new depth, $\\frac{768}{96} = 8$ feet, rather than the increase.\n* Choice D ($24$): divides the added volume by the length only, $\\frac{288}{12} = 24$.\n\n**Test Day Takeaway:** When the base stays the same, a change in volume is only a change in height: divide the added volume by the base area.",
      skills: ["volume-prism"]
    },
    {
      id: 4,
      difficulty: "medium",
      question: "The table shows the dimensions of two right rectangular prisms, $P$ and $Q$. The volume of prism $Q$ is $k$ times the volume of prism $P$. What is the value of $k$?",
      questionTable: { headers: ["Prism", "Length (cm)", "Width (cm)", "Height (cm)"], rows: [["P", "8", "5", "3"], ["Q", "16", "2.5", "3"]] },
      choices: [
        // distractor: uses only the halved width
        { id: "A", text: "$\\frac{1}{2}$" },
        { id: "B", text: "$1$" },
        // distractor: uses only the doubled length
        { id: "C", text: "$2$" },
        // distractor: adds the two scale changes instead of multiplying them
        { id: "D", text: "$\\frac{5}{2}$" }
      ],
      correctAnswer: "B",
      hint: "Work out each volume on its own before comparing them.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~25s):** Both prisms have volume $120$ cubic centimeters, so $k = 1$.\n\n**The Full Solution:**\nStep 1: Prism $P$: $V = 8(5)(3) = 120$ cubic centimeters.\nStep 2: Prism $Q$: $V = 16(2.5)(3) = 120$ cubic centimeters.\nStep 3: So $k = \\frac{120}{120} = 1$. Check: the length doubled and the width was halved, and $2 \\cdot \\frac{1}{2} = 1$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{1}{2}$): uses only the halved width and ignores the doubled length.\n* Choice C ($2$): uses only the doubled length and ignores the halved width.\n* Choice D ($\\frac{5}{2}$): adds the two changes, $2 + \\frac{1}{2}$, instead of multiplying them.\n\n**Test Day Takeaway:** Scale factors on different dimensions multiply, so a doubling and a halving cancel exactly.",
      skills: ["volume-prism"]
    },
    {
      id: 5,
      difficulty: "hard",
      question: "A box has interior dimensions of $18$ inches by $12$ inches by $10$ inches. Cubes with edge length $3$ inches are stacked in the box in straight rows. What is the greatest number of these cubes that can fit?",
      choices: [
        { id: "A", text: "$72$" },
        // distractor: divides the box volume by the cube volume, ignoring that 10 is not a multiple of 3
        { id: "B", text: "$80$" },
        // distractor: divides the box volume by 3^2 instead of 3^3
        { id: "C", text: "$240$" },
        // distractor: divides the box volume by 3 instead of 3^3
        { id: "D", text: "$720$" }
      ],
      correctAnswer: "A",
      hint: "Check each dimension on its own; one of them does not divide evenly.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~40s):** $18 \\div 3 = 6$ and $12 \\div 3 = 4$, but only $3$ layers fit in $10$ inches, so $6 \\cdot 4 \\cdot 3 = 72$.\n\n**The Full Solution:**\nStep 1: The cubes line up in whole rows, so count how many fit along each dimension separately.\nStep 2: Along $18$ inches, $6$ cubes fit; along $12$ inches, $4$ fit; along $10$ inches, only $3$ fit, since a fourth layer would need $12$ inches.\nStep 3: The total is $6 \\cdot 4 \\cdot 3 = 72$ cubes. Check: they fill $72(27) = 1{,}944$ cubic inches of the box's $2{,}160$ cubic inches, leaving a $1$-inch gap at the top ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($80$): divides the volume of the box, $2{,}160$, by the volume of a cube, $27$, ignoring that $10$ is not a multiple of $3$.\n* Choice C ($240$): divides the volume of the box by $3^2 = 9$ instead of $3^3 = 27$.\n* Choice D ($720$): divides the volume of the box by $3$ instead of by $3^3$.\n\n**Test Day Takeaway:** Packing questions count cubes along each edge and round each count down; dividing the volumes overcounts whenever a dimension does not divide evenly.",
      skills: ["volume-prism"]
    }
  ],

  // Section: Cube
  "Cube": [
    {
      id: 1,
      difficulty: "easy",
      question: "The table shows the edge lengths of three cube-shaped boxes. What is the volume, in cubic inches, of the Large box?",
      questionTable: { headers: ["Box size", "Edge length (inches)"], rows: [["Small", "$6$"], ["Medium", "$9$"], ["Large", "$12$"]] },
      choices: [
        // distractor: multiplies the edge by 3 instead of cubing it
        { id: "A", text: "$36$" },
        // distractor: squares the edge, giving the area of one face
        { id: "B", text: "$144$" },
        // distractor: computes the surface area instead of the volume
        { id: "C", text: "$864$" },
        { id: "D", text: "$1{,}728$" }
      ],
      correctAnswer: "D",
      hint: "Every edge of a cube is the same length.",
      explanation: "**Choice D is correct.**\n\n**The Fast Way (~10s):** The Large box has edge $12$ inches, so $V = 12^3 = 1{,}728$ cubic inches.\n\n**The Full Solution:**\nStep 1: The table shows that the Large box has an edge length of $12$ inches.\nStep 2: The volume of a cube with edge $s$ is $V = s^3$, so $V = 12^3$.\nStep 3: $12^3 = 12 \\cdot 12 \\cdot 12 = 1{,}728$ cubic inches. Check: $1{,}728 \\div 12 = 144$ and $144 \\div 12 = 12$, the edge length ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($36$): multiplies the edge by $3$ instead of raising it to the third power: $3(12) = 36$.\n* Choice B ($144$): stops at $12^2 = 144$, the area of one face rather than the volume.\n* Choice C ($864$): computes the surface area, $6(12^2) = 864$ square inches, instead of the volume.\n\n**Test Day Takeaway:** Cubing and squaring differ by one factor of the edge; the units in the question (cubic inches) tell you which power to use.",
      skills: ["volume-prism", "volume-scaling"]
    },
    {
      id: 2,
      difficulty: "easy",
      question: "The volume of a cube is $216$ cubic inches. What is the length, in inches, of one edge of the cube?",
      choices: [
        { id: "A", text: "$6$" },
        // distractor: squares the edge, giving the area of one face
        { id: "B", text: "$36$" },
        // distractor: divides the volume by 3 instead of taking the cube root
        { id: "C", text: "$72$" },
        // distractor: divides the volume by 2
        { id: "D", text: "$108$" }
      ],
      correctAnswer: "A",
      hint: "Which number times itself three times gives the volume?",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~10s):** $\\sqrt[3]{216} = 6$, because $6 \\cdot 6 \\cdot 6 = 216$.\n\n**The Full Solution:**\nStep 1: The volume of a cube with edge $s$ is $s^3$, so $s^3 = 216$.\nStep 2: Take the cube root of both sides: $s = \\sqrt[3]{216}$.\nStep 3: Since $6^3 = 216$, $s = 6$ inches. Check: $6 \\cdot 6 = 36$ and $36 \\cdot 6 = 216$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($36$): finds the edge, $6$, and then squares it, giving the area of one face.\n* Choice C ($72$): divides the volume by $3$ instead of taking the cube root.\n* Choice D ($108$): divides the volume by $2$, as if undoing a square root.\n\n**Test Day Takeaway:** Undo a cube with a cube root, not with division by $3$.",
      skills: ["volume-prism", "volume-scaling"]
    },
    {
      id: 3,
      difficulty: "medium",
      question: "A cube has a volume of $64$ cubic feet. A second cube has edges that are $3$ times as long as the edges of the first cube. What is the volume, in cubic feet, of the second cube?",
      choices: [
        // distractor: multiplies the volume by the edge factor 3
        { id: "A", text: "$192$" },
        // distractor: multiplies the volume by 3^2, the factor for areas
        { id: "B", text: "$576$" },
        { id: "C", text: "$1{,}728$" },
        // distractor: cubes the volume instead of the new edge
        { id: "D", text: "$262{,}144$" }
      ],
      correctAnswer: "C",
      hint: "Find the edge length of the first cube.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~20s):** The first edge is $4$ feet, so the second edge is $12$ feet and the volume is $12^3 = 1{,}728$.\n\n**The Full Solution:**\nStep 1: The first cube has edge $\\sqrt[3]{64} = 4$ feet.\nStep 2: The second cube has edge $3(4) = 12$ feet.\nStep 3: Its volume is $12^3 = 1{,}728$ cubic feet. Check: tripling every edge multiplies the volume by $3^3 = 27$, and $27(64) = 1{,}728$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($192$): multiplies the volume by $3$, as if volume grew at the same rate as the edges.\n* Choice B ($576$): multiplies the volume by $3^2 = 9$, the factor for areas.\n* Choice D ($262{,}144$): cubes the volume, $64^3$, instead of cubing the new edge length.\n\n**Test Day Takeaway:** Multiplying every edge by $k$ multiplies the volume by $k^3$.",
      skills: ["volume-prism", "volume-scaling"]
    },
    {
      id: 4,
      difficulty: "medium",
      question: "The table shows the edge lengths, in meters, of two cube-shaped water tanks. What is the volume, in liters, of tank B? ($1$ cubic meter $= 1{,}000$ liters)",
      questionTable: { headers: ["Tank", "Edge length (meters)"], rows: [["A", "$0.9$"], ["B", "$1.5$"]] },
      choices: [
        // distractor: reports the volume in cubic meters without converting to liters
        { id: "A", text: "$3.375$" },
        // distractor: squares the edge instead of cubing it
        { id: "B", text: "$2{,}250$" },
        { id: "C", text: "$3{,}375$" },
        // distractor: uses the surface area in place of the volume
        { id: "D", text: "$13{,}500$" }
      ],
      correctAnswer: "C",
      hint: "Find the volume in cubic meters first; convert to liters last.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~25s):** Tank B holds $1.5^3 = 3.375$ cubic meters, and $3.375(1{,}000) = 3{,}375$ liters.\n\n**The Full Solution:**\nStep 1: The table shows that tank B has an edge length of $1.5$ meters.\nStep 2: Its volume is $1.5^3 = 1.5 \\cdot 1.5 \\cdot 1.5 = 3.375$ cubic meters.\nStep 3: Each cubic meter is $1{,}000$ liters, so $3.375(1{,}000) = 3{,}375$ liters. Check: tank A, with edge $0.9$ meter, holds $0.9^3 = 0.729$ cubic meter, or $729$ liters, which is less, as its shorter edge requires ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($3.375$): is the volume in cubic meters, reported before the conversion to liters.\n* Choice B ($2{,}250$): squares the edge instead of cubing it, $1.5^2 = 2.25$, and then converts to $2{,}250$.\n* Choice D ($13{,}500$): uses the surface area, $6(1.5^2) = 13.5$, in place of the volume and then converts to $13{,}500$.\n\n**Test Day Takeaway:** Find the volume in the given units first, then convert once at the end.",
      skills: ["volume-prism", "volume-scaling"]
    },
    {
      id: 5,
      difficulty: "hard",
      question: "Cube $A$ has a volume of $1{,}000$ cubic centimeters. The surface area of cube $B$ is $9$ times the surface area of cube $A$. What is the volume, in cubic centimeters, of cube $B$?",
      choices: [
        // distractor: multiplies the volume by the edge ratio 3
        { id: "A", text: "$3{,}000$" },
        // distractor: multiplies the volume by the surface-area ratio 9
        { id: "B", text: "$9{,}000$" },
        { id: "C", text: "$27{,}000$" },
        // distractor: cubes the surface-area ratio instead of the edge ratio
        { id: "D", text: "$729{,}000$" }
      ],
      correctAnswer: "C",
      hint: "Areas compare by the square of the edge ratio and volumes by its cube.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~40s):** Surface areas in the ratio $9$ mean edges in the ratio $3$, so the volumes are in the ratio $27$: $27(1{,}000) = 27{,}000$.\n\n**The Full Solution:**\nStep 1: Cube $A$ has edge $\\sqrt[3]{1{,}000} = 10$ centimeters and surface area $6(10^2) = 600$ square centimeters.\nStep 2: Cube $B$ has surface area $9(600) = 5{,}400$, so $6s^2 = 5{,}400$, $s^2 = 900$, and $s = 30$ centimeters.\nStep 3: The volume of cube $B$ is $30^3 = 27{,}000$ cubic centimeters. Check: the edge ratio is $\\frac{30}{10} = 3$, and $3^3(1{,}000) = 27{,}000$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($3{,}000$): multiplies the volume by the edge ratio, $3$.\n* Choice B ($9{,}000$): multiplies the volume by the surface-area ratio, $9$.\n* Choice D ($729{,}000$): cubes the surface-area ratio, $9^3 = 729$, instead of cubing the edge ratio.\n\n**Test Day Takeaway:** An area ratio is the square of the length ratio and a volume ratio is its cube; go through the length ratio to connect them.",
      skills: ["volume-prism", "volume-scaling"]
    }
  ],

  // Section: Cylinder
  "Cylinder": [
    {
      id: 1,
      difficulty: "easy",
      question: "A cylindrical can has a radius of $4$ centimeters and a height of $15$ centimeters. Which expression represents the volume, in cubic centimeters, of the can?",
      choices: [
        // distractor: does not square the radius
        { id: "A", text: "$\\pi(4)(15)$" },
        { id: "B", text: "$\\pi(4)^{2}(15)$" },
        // distractor: squares the height instead of the radius
        { id: "C", text: "$\\pi(4)(15)^{2}$" },
        // distractor: uses the cone formula
        { id: "D", text: "$\\frac{1}{3}\\pi(4)^{2}(15)$" }
      ],
      correctAnswer: "B",
      hint: "The base of a cylinder is a circle.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~10s):** A cylinder's volume is $\\pi r^2h$, so the volume is $\\pi(4)^2(15)$.\n\n**The Full Solution:**\nStep 1: The volume of a cylinder is the area of its circular base times its height: $V = \\pi r^2h$.\nStep 2: Substitute $r = 4$ and $h = 15$: $V = \\pi(4)^2(15)$.\nStep 3: This is choice B, which equals $240\\pi$ cubic centimeters. Check: the base area is $\\pi(4)^2 = 16\\pi$ square centimeters, and $16\\pi(15) = 240\\pi$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\pi(4)(15)$): leaves the radius unsquared, so the base area is not $\\pi r^2$.\n* Choice C ($\\pi(4)(15)^{2}$): squares the height instead of the radius.\n* Choice D ($\\frac{1}{3}\\pi(4)^{2}(15)$): is the volume of a cone with the same radius and height, not of a cylinder.\n\n**Test Day Takeaway:** In $\\pi r^2h$ only the radius is squared; a $\\frac{1}{3}$ belongs to cones, not cylinders.",
      skills: ["volume-prism"]
    },
    {
      id: 2,
      difficulty: "easy",
      question: "The volume $V$, in cubic centimeters, of a cylindrical vase whose base has a radius of $r$ centimeters is given by $V = 18\\pi r^{2}$. Which of the following is the best interpretation of $18$ in this context?",
      choices: [
        { id: "A", text: "The height, in centimeters, of the vase" },
        // distractor: confuses the constant with the radius, which is the variable r
        { id: "B", text: "The radius, in centimeters, of the base of the vase" },
        // distractor: confuses the constant with the base area, pi r^2
        { id: "C", text: "The area, in square centimeters, of the base of the vase" },
        // distractor: confuses the constant with the volume V
        { id: "D", text: "The volume, in cubic centimeters, of the vase" }
      ],
      correctAnswer: "A",
      hint: "Compare the equation with the volume formula for a cylinder.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~15s):** A cylinder's volume is $\\pi r^2h$; matching $V = 18\\pi r^2$ to it shows that $h = 18$.\n\n**The Full Solution:**\nStep 1: The volume of a cylinder with radius $r$ and height $h$ is $V = \\pi r^2h$.\nStep 2: Rewrite the given equation as $V = \\pi r^2(18)$; it has the same form with $h = 18$.\nStep 3: So $18$ is the height of the vase, in centimeters. Check: a vase with radius $2$ centimeters would hold $18\\pi(4) = 72\\pi$ cubic centimeters, which is $\\pi(2)^2(18)$, base area times a height of $18$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B (The radius, in centimeters, of the base of the vase): the radius is the variable $r$, not the constant $18$.\n* Choice C (The area, in square centimeters, of the base of the vase): the base area is $\\pi r^2$, the factor that $18$ multiplies.\n* Choice D (The volume, in cubic centimeters, of the vase): the volume is $V$, the whole product, not one of its factors.\n\n**Test Day Takeaway:** To interpret a number in a formula, line the formula up with the standard one and see which variable the number replaced.",
      skills: ["volume-prism"]
    },
    {
      id: 3,
      difficulty: "medium",
      question: "A right circular cylinder has a diameter of $9$ centimeters and a height of $16$ centimeters. What is the volume, in cubic centimeters, of the cylinder?",
      choices: [
        // distractor: uses the cone formula
        { id: "A", text: "$108\\pi$" },
        // distractor: doubles the radius instead of squaring it
        { id: "B", text: "$144\\pi$" },
        { id: "C", text: "$324\\pi$" },
        // distractor: uses the diameter as the radius
        { id: "D", text: "$1{,}296\\pi$" }
      ],
      correctAnswer: "C",
      hint: "The formula needs the radius, and the question gives a diameter.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~25s):** The radius is $4.5$, so $V = \\pi(4.5)^2(16) = 324\\pi$.\n\n**The Full Solution:**\nStep 1: The radius is half the diameter: $r = \\frac{9}{2} = 4.5$ centimeters.\nStep 2: The volume is $V = \\pi r^2h = \\pi(4.5)^2(16) = \\pi(20.25)(16)$.\nStep 3: $20.25(16) = 324$, so $V = 324\\pi$ cubic centimeters. Check: $\\frac{324\\pi}{16} = 20.25\\pi$, the base area $\\pi(4.5)^2$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($108\\pi$): applies the cone formula, dividing the correct volume by $3$.\n* Choice B ($144\\pi$): doubles the radius instead of squaring it, $\\pi(2)(4.5)(16) = 144\\pi$.\n* Choice D ($1{,}296\\pi$): uses the diameter as the radius, $\\pi(9)^2(16) = 1{,}296\\pi$.\n\n**Test Day Takeaway:** Halve a given diameter before it goes into $\\pi r^2h$.",
      skills: ["volume-prism"]
    },
    {
      id: 4,
      difficulty: "medium",
      question: "Right circular cylinder $A$ has $3$ times the radius and $\\frac{1}{3}$ the height of right circular cylinder $B$. The volume of cylinder $A$ is $k$ times the volume of cylinder $B$. What is the value of $k$?",
      choices: [
        // distractor: uses the radius factor 3 once instead of squaring it, so 3(1/3) = 1
        { id: "A", text: "$1$" },
        { id: "B", text: "$3$" },
        // distractor: squares the radius factor but ignores the height factor of 1/3
        { id: "C", text: "$9$" },
        // distractor: cubes the radius factor and ignores the height, as if every dimension had been tripled
        { id: "D", text: "$27$" }
      ],
      correctAnswer: "B",
      hint: "The radius is squared in the volume formula; the height is not.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~25s):** The radius enters the volume squared and the height enters once, so $k = 3^{2} \\cdot \\frac{1}{3} = 3$.\n\n**The Full Solution:**\nStep 1: Let cylinder $B$ have radius $r$ and height $h$, so its volume is $\\pi r^{2}h$.\nStep 2: Cylinder $A$ has radius $3r$ and height $\\frac{h}{3}$, so its volume is $\\pi(3r)^{2}\\left(\\frac{h}{3}\\right) = \\pi(9r^{2})\\left(\\frac{h}{3}\\right) = 3\\pi r^{2}h$.\nStep 3: Divide: $\\frac{3\\pi r^{2}h}{\\pi r^{2}h} = 3$, so $k = 3$. Check: with $r = 1$ and $h = 3$, cylinder $B$ has volume $3\\pi$ and cylinder $A$ (radius $3$, height $1$) has volume $9\\pi$, and $\\frac{9\\pi}{3\\pi} = 3$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($1$): uses the radius factor once, $3 \\cdot \\frac{1}{3} = 1$. The radius is squared in $\\pi r^{2}h$, so its factor must be squared too.\n* Choice C ($9$): squares the radius factor correctly but leaves out the height, which was cut to $\\frac{1}{3}$ of its value.\n* Choice D ($27$): cubes the radius factor, as if all three dimensions had been multiplied by $3$; only the radius was, and the height shrank.\n\n**Test Day Takeaway:** When a solid's dimensions change by different factors, apply each factor with the power its dimension has in the formula: squared for the radius of a cylinder, once for its height.",
      skills: ["volume-prism"]
    },
    {
      id: 5,
      difficulty: "hard",
      question: "Water is $5$ feet deep in a right circular cylinder of radius $6$ feet. All of it is poured into an empty right circular cylinder of radius $3$ feet. How deep, in feet, is the water in the second cylinder?",
      choices: [
        // distractor: multiplies the depth by (3/6)^2 = 1/4 instead of dividing by it, so the water gets shallower in the narrower cylinder
        { id: "A", text: "$1.25$" },
        // distractor: uses the radius ratio 6/3 = 2 once instead of squaring it, giving 5(2) = 10
        { id: "B", text: "$10$" },
        { id: "C", text: "$20$" },
        // distractor: cubes the radius ratio, giving 5(2^3) = 40, as if depth scaled like a volume
        { id: "D", text: "$40$" }
      ],
      correctAnswer: "C",
      hint: "The volume of water stays the same; only the base it sits on changes.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~30s):** The second base has $\\left(\\frac{3}{6}\\right)^{2} = \\frac{1}{4}$ the area of the first, so the same water stands $4$ times as deep: $4(5) = 20$ feet.\n\n**The Full Solution:**\nStep 1: The volume of the water in the first cylinder is $\\pi(6)^{2}(5) = 180\\pi$ cubic feet.\nStep 2: In the second cylinder the same volume has a base of radius $3$, so $\\pi(3)^{2}d = 180\\pi$, or $9d = 180$.\nStep 3: Divide: $d = 20$ feet. Check: $\\pi(3)^{2}(20) = 180\\pi$, the same volume of water ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($1.25$): multiplies the depth by $\\frac{1}{4}$ instead of dividing by it. A narrower cylinder makes the water deeper, not shallower.\n* Choice B ($10$): uses the radius ratio $\\frac{6}{3} = 2$ once, but the base area depends on the radius squared, so the ratio of base areas is $4$.\n* Choice D ($40$): cubes the ratio $2$, treating depth as if it scaled like a volume. Only the base area changes between the two cylinders.\n\n**Test Day Takeaway:** When liquid moves between containers, set the two volumes equal; for cylinders, the depth changes by the inverse of the ratio of the base areas, which is the square of the ratio of the radii.",
      skills: ["volume-prism"]
    }
  ],

  // Section: Sphere
  "Sphere": [
    {
      id: 1,
      difficulty: "easy",
      question: "What is the volume, in cubic inches, of a sphere with a radius of $3$ inches?",
      choices: [
        // distractor: squares the radius instead of cubing it, computing (4/3)(pi)(3^2) = 12pi
        { id: "A", text: "$12\\pi$" },
        // distractor: cubes the radius but leaves out the factor 4/3, giving pi(3^3) = 27pi
        { id: "B", text: "$27\\pi$" },
        { id: "C", text: "$36\\pi$" },
        // distractor: multiplies by 4 but forgets to divide by 3, computing 4(pi)(27) = 108pi
        { id: "D", text: "$108\\pi$" }
      ],
      correctAnswer: "C",
      hint: "The radius is cubed in the volume formula for a sphere.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~15s):** $V = \\frac{4}{3}\\pi r^{3} = \\frac{4}{3}\\pi(27) = 36\\pi$ cubic inches.\n\n**The Full Solution:**\nStep 1: The volume of a sphere with radius $r$ is $V = \\frac{4}{3}\\pi r^{3}$.\nStep 2: Cube the radius: $3^{3} = 27$.\nStep 3: Multiply: $V = \\frac{4}{3}\\pi(27) = 36\\pi$ cubic inches. Check: $\\frac{4 \\cdot 27}{3} = \\frac{108}{3} = 36$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($12\\pi$): squares the radius instead of cubing it: $\\frac{4}{3}\\pi(9) = 12\\pi$. A volume needs three lengths multiplied together.\n* Choice B ($27\\pi$): cubes the radius but drops the factor $\\frac{4}{3}$, giving $\\pi(27)$.\n* Choice D ($108\\pi$): multiplies $27$ by $4$ and stops, forgetting to divide by $3$.\n\n**Test Day Takeaway:** For a sphere, cube the radius first, then multiply by $\\frac{4}{3}\\pi$; a quick units check (cubic inches) reminds you the radius must appear three times.",
      skills: ["volume-sphere"]
    },
    {
      id: 2,
      difficulty: "easy",
      question: "A sphere has a diameter of $8$ centimeters. What is the volume, in cubic centimeters, of the sphere?",
      choices: [
        // distractor: uses the radius 4 but squares it instead of cubing it, computing (4/3)(pi)(16)
        { id: "A", text: "$\\frac{64}{3}\\pi$" },
        { id: "B", text: "$\\frac{256}{3}\\pi$" },
        // distractor: uses the radius 4 and cubes it but drops the 3 in the denominator, computing 4(pi)(64)
        { id: "C", text: "$256\\pi$" },
        // distractor: uses the diameter 8 as the radius, computing (4/3)(pi)(512)
        { id: "D", text: "$\\frac{2{,}048}{3}\\pi$" }
      ],
      correctAnswer: "B",
      hint: "The formula uses the radius, not the diameter.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~20s):** The radius is $\\frac{8}{2} = 4$, so $V = \\frac{4}{3}\\pi(4)^{3} = \\frac{4}{3}\\pi(64) = \\frac{256}{3}\\pi$.\n\n**The Full Solution:**\nStep 1: The radius is half the diameter: $r = \\frac{8}{2} = 4$ centimeters.\nStep 2: Cube the radius: $4^{3} = 64$.\nStep 3: Substitute into $V = \\frac{4}{3}\\pi r^{3}$: $V = \\frac{4}{3}\\pi(64) = \\frac{256}{3}\\pi$ cubic centimeters. Check: $\\frac{256}{3} \\approx 85.3$, and a sphere fits inside a cube of side $8$, whose volume is $512$, so the answer is reasonably smaller ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{64}{3}\\pi$): halves the diameter correctly but squares the radius instead of cubing it: $\\frac{4}{3}\\pi(16)$.\n* Choice C ($256\\pi$): multiplies $64$ by $4$ and forgets to divide by $3$.\n* Choice D ($\\frac{2{,}048}{3}\\pi$): uses the diameter $8$ in place of the radius, so the result is $2^{3} = 8$ times too large.\n\n**Test Day Takeaway:** When a problem gives a diameter, halve it before you do anything else; the volume formula for a sphere is written in terms of the radius.",
      skills: ["volume-sphere"]
    },
    {
      id: 3,
      difficulty: "medium",
      question: "All $288\\pi$ cubic centimeters of wax in a block are used to make $8$ identical spherical candles. What is the radius, in centimeters, of each candle?",
      choices: [
        { id: "A", text: "$3$" },
        // distractor: sets the volume of a single candle equal to all 288pi of wax, so (4/3)r^3 = 288 and r = 6
        { id: "B", text: "$6$" },
        // distractor: reaches r^3 = 27 and divides by 3 instead of taking the cube root
        { id: "C", text: "$9$" },
        // distractor: reaches r^3 = 27 and stops, reporting r^3 instead of r
        { id: "D", text: "$27$" }
      ],
      correctAnswer: "A",
      hint: "Find the volume of one candle before using the sphere formula.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~30s):** Each candle holds $\\frac{288\\pi}{8} = 36\\pi$, so $\\frac{4}{3}r^{3} = 36$, $r^{3} = 27$, and $r = 3$.\n\n**The Full Solution:**\nStep 1: Divide the wax equally: each candle has volume $\\frac{288\\pi}{8} = 36\\pi$ cubic centimeters.\nStep 2: Set this equal to the volume of a sphere: $\\frac{4}{3}\\pi r^{3} = 36\\pi$, so $r^{3} = 36 \\cdot \\frac{3}{4} = 27$.\nStep 3: Take the cube root: $r = 3$ centimeters. Check: $8 \\cdot \\frac{4}{3}\\pi(3)^{3} = 8 \\cdot 36\\pi = 288\\pi$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($6$): uses all $288\\pi$ cubic centimeters for one candle, so $r^{3} = 216$ and $r = 6$. The wax is shared among $8$ candles.\n* Choice C ($9$): reaches $r^{3} = 27$ and divides by $3$; undoing a cube requires a cube root, not division.\n* Choice D ($27$): stops at $r^{3} = 27$ and reports that value as the radius.\n\n**Test Day Takeaway:** When a total amount is split into identical solids, divide first to get one solid's volume, then solve the volume formula for the missing length.",
      skills: ["volume-sphere"]
    },
    {
      id: 4,
      difficulty: "medium",
      question: "The volume of sphere $A$ is $27$ times the volume of sphere $B$. The radius of sphere $B$ is $2$ centimeters. What is the radius, in centimeters, of sphere $A$?",
      choices: [
        // distractor: finds the scale factor 3 = cube root of 27 but reports it as the radius instead of multiplying by 2
        { id: "A", text: "$3$" },
        { id: "B", text: "$6$" },
        // distractor: uses 9 as the scale factor, as if volume scaled with the square of the radius, giving 2(9) = 18
        { id: "C", text: "$18$" },
        // distractor: multiplies the radius by the volume factor 27, as if volume scaled with the radius itself
        { id: "D", text: "$54$" }
      ],
      correctAnswer: "B",
      hint: "Volume grows with the cube of the radius.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~20s):** Volume scales with the cube of the radius, so the radius scales by $\\sqrt[3]{27} = 3$, and sphere $A$ has radius $3(2) = 6$.\n\n**The Full Solution:**\nStep 1: Write each volume with the sphere formula: $\\frac{4}{3}\\pi r_{A}^{3} = 27 \\cdot \\frac{4}{3}\\pi(2)^{3}$.\nStep 2: Cancel $\\frac{4}{3}\\pi$: $r_{A}^{3} = 27 \\cdot 8 = 216$.\nStep 3: Take the cube root: $r_{A} = 6$ centimeters. Check: $\\frac{6^{3}}{2^{3}} = \\frac{216}{8} = 27$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($3$): finds the scale factor $\\sqrt[3]{27} = 3$ but reports it as the radius; the factor still has to multiply sphere $B$'s radius of $2$.\n* Choice C ($18$): multiplies the radius by $9$, which is how a radius would change if volume grew with the square of the radius.\n* Choice D ($54$): multiplies the radius by $27$, treating volume as if it were proportional to the radius.\n\n**Test Day Takeaway:** If a volume is multiplied by $k$, every length of a similar solid is multiplied by $\\sqrt[3]{k}$; take the cube root of the volume factor before you touch the given length.",
      skills: ["volume-sphere"]
    },
    {
      id: 5,
      difficulty: "hard",
      question: "A solid metal sphere with a radius of $9$ centimeters is melted and recast as a solid right circular cylinder with a base diameter of $12$ centimeters. What is the height, in centimeters, of the cylinder?",
      choices: [
        // distractor: squares the sphere's radius instead of cubing it, so the sphere's volume becomes (4/3)(81)pi = 108pi and h = 108/36 = 3
        { id: "A", text: "$3$" },
        // distractor: uses the diameter 12 as the cylinder's radius, so 144h = 972 and h = 6.75
        { id: "B", text: "$6.75$" },
        // distractor: leaves out the 4/3 in the sphere formula, so 36h = 729 and h = 20.25
        { id: "C", text: "$20.25$" },
        { id: "D", text: "$27$" }
      ],
      correctAnswer: "D",
      hint: "No metal is lost, so the two solids have the same volume.",
      explanation: "**Choice D is correct.**\n\n**The Fast Way (~45s):** Set the volumes equal: $\\frac{4}{3}\\pi(9)^{3} = \\pi(6)^{2}h$, so $972 = 36h$ and $h = 27$.\n\n**The Full Solution:**\nStep 1: The sphere's volume is $\\frac{4}{3}\\pi(9)^{3} = \\frac{4}{3}\\pi(729) = 972\\pi$ cubic centimeters.\nStep 2: The cylinder's base diameter is $12$, so its radius is $6$ and its volume is $\\pi(6)^{2}h = 36\\pi h$.\nStep 3: Set the volumes equal: $36\\pi h = 972\\pi$, so $h = 27$ centimeters. Check: $\\pi(6)^{2}(27) = 972\\pi$, the sphere's volume ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($3$): squares the radius $9$ instead of cubing it, so the sphere's volume comes out as $108\\pi$ instead of $972\\pi$.\n* Choice B ($6.75$): uses the diameter $12$ as the cylinder's radius, making its base area $144\\pi$ instead of $36\\pi$.\n* Choice C ($20.25$): drops the $\\frac{4}{3}$ from the sphere's volume, using $729\\pi$ instead of $972\\pi$.\n\n**Test Day Takeaway:** When a solid is melted and recast, write the two volume formulas, set them equal, and convert every diameter to a radius before substituting.",
      skills: ["volume-sphere"]
    }
  ],

  // Section: Cone
  "Cone": [
    {
      id: 1,
      difficulty: "easy",
      question: "What is the volume, in cubic inches, of a right circular cone with radius $6$ inches and height $5$ inches?",
      choices: [
        // distractor: uses the radius without squaring it, computing (1/3)(pi)(6)(5) = 10pi
        { id: "A", text: "$10\\pi$" },
        // distractor: squares the height instead of the radius, computing (1/3)(pi)(6)(5^2) = 50pi
        { id: "B", text: "$50\\pi$" },
        { id: "C", text: "$60\\pi$" },
        // distractor: leaves out the 1/3, giving the volume of a cylinder with the same radius and height
        { id: "D", text: "$180\\pi$" }
      ],
      correctAnswer: "C",
      hint: "A cone holds one third of the matching cylinder.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~15s):** $V = \\frac{1}{3}\\pi r^{2}h = \\frac{1}{3}\\pi(36)(5) = 60\\pi$ cubic inches.\n\n**The Full Solution:**\nStep 1: The volume of a cone with radius $r$ and height $h$ is $V = \\frac{1}{3}\\pi r^{2}h$.\nStep 2: Square the radius: $6^{2} = 36$, and multiply by the height: $36(5) = 180$.\nStep 3: Take one third: $V = \\frac{1}{3}\\pi(180) = 60\\pi$ cubic inches. Check: a cylinder with the same radius and height holds $180\\pi$, and $\\frac{180\\pi}{3} = 60\\pi$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($10\\pi$): uses $r$ instead of $r^{2}$: $\\frac{1}{3}\\pi(6)(5) = 10\\pi$.\n* Choice B ($50\\pi$): squares the height instead of the radius: $\\frac{1}{3}\\pi(6)(25) = 50\\pi$.\n* Choice D ($180\\pi$): forgets the $\\frac{1}{3}$, which gives the volume of a cylinder, not a cone.\n\n**Test Day Takeaway:** For a cone, square the radius, multiply by the height, and then divide by $3$; leaving out the $\\frac{1}{3}$ gives the cylinder's volume, a common wrong choice.",
      skills: ["volume-pyramid-cone"]
    },
    {
      id: 2,
      difficulty: "easy",
      question: "A right circular cone and a right circular cylinder have the same radius and height. The volume of the cone is $42$ cubic inches. What is the volume, in cubic inches, of the cylinder?",
      choices: [
        // distractor: divides the cone's volume by 3 instead of multiplying, reversing which solid is larger
        { id: "A", text: "$14$" },
        // distractor: assumes that solids with the same radius and height have the same volume
        { id: "B", text: "$42$" },
        // distractor: treats the cone as half of the cylinder, multiplying by 2 instead of 3
        { id: "C", text: "$84$" },
        { id: "D", text: "$126$" }
      ],
      correctAnswer: "D",
      hint: "Compare the two volume formulas term by term.",
      explanation: "**Choice D is correct.**\n\n**The Fast Way (~15s):** A cone has $\\frac{1}{3}$ the volume of a cylinder with the same radius and height, so the cylinder holds $3(42) = 126$ cubic inches.\n\n**The Full Solution:**\nStep 1: The cone's volume is $\\frac{1}{3}\\pi r^{2}h$ and the cylinder's volume is $\\pi r^{2}h$.\nStep 2: Since $r$ and $h$ are the same for both, $\\frac{1}{3}\\pi r^{2}h = 42$, so $\\pi r^{2}h = 3(42)$.\nStep 3: The cylinder's volume is $126$ cubic inches. Check: $\\frac{1}{3}(126) = 42$, the cone's volume ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($14$): divides by $3$ instead of multiplying. The cylinder is the larger solid, so its volume must be greater than $42$.\n* Choice B ($42$): assumes equal dimensions mean equal volumes; the cone's formula has a factor of $\\frac{1}{3}$ that the cylinder's does not.\n* Choice C ($84$): treats the cone as half of the cylinder; the factor is $\\frac{1}{3}$, not $\\frac{1}{2}$.\n\n**Test Day Takeaway:** A cone and a cylinder with the same base and height are always in the ratio $1 : 3$; decide which solid is larger before you multiply or divide.",
      skills: ["volume-pyramid-cone"]
    },
    {
      id: 3,
      difficulty: "medium",
      question: "A right circular cone has a volume of $96\\pi$ cubic centimeters, and the diameter of its base is $12$ centimeters. What is the height, in centimeters, of the cone?",
      choices: [
        // distractor: uses the diameter 12 as the radius, so 48h = 96 and h = 2
        { id: "A", text: "$2$" },
        // distractor: halves the diameter correctly but leaves out the 1/3, so 36h = 96 and h = 8/3
        { id: "B", text: "$\\frac{8}{3}$" },
        { id: "C", text: "$8$" },
        // distractor: uses the radius 6 without squaring it, so 2h = 96 and h = 48
        { id: "D", text: "$48$" }
      ],
      correctAnswer: "C",
      hint: "The formula needs the radius, which is half of the diameter.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~25s):** The radius is $6$, so $\\frac{1}{3}\\pi(36)h = 96\\pi$, which gives $12h = 96$ and $h = 8$.\n\n**The Full Solution:**\nStep 1: The radius is half the diameter: $r = \\frac{12}{2} = 6$ centimeters.\nStep 2: Substitute into $V = \\frac{1}{3}\\pi r^{2}h$: $\\frac{1}{3}\\pi(6)^{2}h = 96\\pi$, which simplifies to $12h = 96$.\nStep 3: Divide: $h = 8$ centimeters. Check: $\\frac{1}{3}\\pi(36)(8) = \\frac{288}{3}\\pi = 96\\pi$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($2$): uses the diameter $12$ as the radius, so $\\frac{1}{3}(144)h = 48h = 96$ and $h = 2$.\n* Choice B ($\\frac{8}{3}$): uses the radius correctly but drops the $\\frac{1}{3}$, solving $36h = 96$.\n* Choice D ($48$): uses $r$ instead of $r^{2}$, solving $\\frac{1}{3}(6)h = 96$.\n\n**Test Day Takeaway:** Convert a diameter to a radius first, then simplify the coefficient of $h$ completely before dividing; that keeps every factor of the formula in play.",
      skills: ["volume-pyramid-cone"]
    },
    {
      id: 4,
      difficulty: "medium",
      question: "$V = \\frac{1}{3}\\pi r^{2}h$\nThe given formula gives the volume $V$ of a right circular cone with radius $r$ and height $h$. Which equation correctly expresses $h$ in terms of $V$ and $r$?",
      choices: [
        // distractor: divides V by 3 instead of multiplying by 3 when undoing the factor 1/3
        { id: "A", text: "$h = \\frac{V}{3\\pi r^{2}}$" },
        { id: "B", text: "$h = \\frac{3V}{\\pi r^{2}}$" },
        // distractor: inverts the correct expression, putting V in the denominator
        { id: "C", text: "$h = \\frac{\\pi r^{2}}{3V}$" },
        // distractor: multiplies V by every factor instead of dividing by pi r^2
        { id: "D", text: "$h = 3V\\pi r^{2}$" }
      ],
      correctAnswer: "B",
      hint: "Undo the factor of one third first, then undo the multiplication by pi r squared.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~20s):** Multiply both sides by $3$ to get $3V = \\pi r^{2}h$, then divide by $\\pi r^{2}$: $h = \\frac{3V}{\\pi r^{2}}$.\n\n**The Full Solution:**\nStep 1: Start with $V = \\frac{1}{3}\\pi r^{2}h$.\nStep 2: Multiply both sides by $3$: $3V = \\pi r^{2}h$.\nStep 3: Divide both sides by $\\pi r^{2}$: $h = \\frac{3V}{\\pi r^{2}}$. Check: a cone with $r = 3$ and $h = 4$ has $V = \\frac{1}{3}\\pi(9)(4) = 12\\pi$, and $\\frac{3(12\\pi)}{\\pi(9)} = \\frac{36}{9} = 4$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($h = \\frac{V}{3\\pi r^{2}}$): divides by $3$ instead of multiplying. The $\\frac{1}{3}$ is undone by multiplying both sides by $3$.\n* Choice C ($h = \\frac{\\pi r^{2}}{3V}$): is the reciprocal of the correct expression; $h$ grows as $V$ grows, so $V$ belongs in the numerator.\n* Choice D ($h = 3V\\pi r^{2}$): multiplies by $\\pi r^{2}$ instead of dividing by it, so the factors are not undone.\n\n**Test Day Takeaway:** To isolate a variable in a formula, undo operations in reverse order, and test your result with simple numbers to confirm it returns the original input.",
      skills: ["volume-pyramid-cone"]
    },
    {
      id: 5,
      difficulty: "hard",
      question: "A right circular cone of radius $6$ centimeters and height $12$ centimeters is held vertex down and filled with water to a depth of $4$ centimeters. What is the volume, in cubic centimeters, of the water?",
      choices: [
        { id: "A", text: "$\\frac{16}{3}\\pi$" },
        // distractor: scales the full volume 144pi by (1/3)^2 instead of (1/3)^3
        { id: "B", text: "$16\\pi$" },
        // distractor: uses the depth 4 but keeps the full radius 6, computing (1/3)(pi)(36)(4) = 48pi
        { id: "C", text: "$48\\pi$" },
        // distractor: gives the volume of the entire cone
        { id: "D", text: "$144\\pi$" }
      ],
      correctAnswer: "A",
      hint: "The surface of the water is a smaller circle than the top of the cone.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~40s):** The water forms a cone similar to the container with scale factor $\\frac{4}{12} = \\frac{1}{3}$, so its volume is $\\left(\\frac{1}{3}\\right)^{3}(144\\pi) = \\frac{16}{3}\\pi$.\n\n**The Full Solution:**\nStep 1: The full cone has volume $\\frac{1}{3}\\pi(6)^{2}(12) = 144\\pi$ cubic centimeters.\nStep 2: The water forms a smaller cone similar to the container. Its height is $\\frac{4}{12} = \\frac{1}{3}$ of the full height, so its radius is $\\frac{1}{3}(6) = 2$ centimeters.\nStep 3: The water's volume is $\\frac{1}{3}\\pi(2)^{2}(4) = \\frac{16}{3}\\pi$ cubic centimeters. Check: $\\left(\\frac{1}{3}\\right)^{3}(144\\pi) = \\frac{144}{27}\\pi = \\frac{16}{3}\\pi$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($16\\pi$): scales the full volume by $\\left(\\frac{1}{3}\\right)^{2}$, the area factor, instead of the volume factor $\\left(\\frac{1}{3}\\right)^{3}$.\n* Choice C ($48\\pi$): uses the water's depth of $4$ but keeps the container's radius of $6$; the water's surface is a circle of radius $2$.\n* Choice D ($144\\pi$): gives the volume of the whole cone, not the water.\n\n**Test Day Takeaway:** Liquid in a cone held vertex down forms a similar cone, so every length shrinks by the same factor and the volume shrinks by the cube of that factor.",
      skills: ["volume-pyramid-cone"]
    }
  ],

  // Section: Triangular Prism
  "Triangular Prism": [
    {
      id: 1,
      difficulty: "easy",
      question: "The right triangle shown is a base of a right triangular prism. The height of the prism is $11$ centimeters. What is the volume, in cubic centimeters, of the prism?",
      diagram: { type: "rightTriangle", params: { vertices: [[0, 0], [12, 0], [12, 5]], sideLabels: ["12 cm", "5 cm", "13 cm"], rightAngleVertex: 1 } },
      choices: [
        // distractor: finds the area of the triangular base, (1/2)(12)(5) = 30, and stops
        { id: "A", text: "$30$" },
        { id: "B", text: "$330$" },
        // distractor: multiplies the legs without the 1/2, using 60 as the base area
        { id: "C", text: "$660$" },
        // distractor: uses the hypotenuse 13 as a leg, computing (1/2)(12)(13)(11)
        { id: "D", text: "$858$" }
      ],
      correctAnswer: "B",
      hint: "A prism's volume is the area of its base times its height.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~20s):** The base area is $\\frac{1}{2}(12)(5) = 30$, so the volume is $30(11) = 330$ cubic centimeters.\n\n**The Full Solution:**\nStep 1: The legs of the right triangle are $12$ and $5$ centimeters, so they serve as its base and height.\nStep 2: The area of the triangular base is $\\frac{1}{2}(12)(5) = 30$ square centimeters.\nStep 3: Multiply by the height of the prism: $30(11) = 330$ cubic centimeters. Check: $\\frac{1}{2}(12)(5)(11) = 6(55) = 330$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($30$): is the area of the triangular base; it still has to be multiplied by the prism's height of $11$.\n* Choice C ($660$): leaves out the $\\frac{1}{2}$, using the area of a rectangle with sides $12$ and $5$.\n* Choice D ($858$): uses the hypotenuse $13$ as one of the perpendicular sides; only the two legs meet at the right angle.\n\n**Test Day Takeaway:** For any prism, find the area of the base first, then multiply by the prism's height; in a right triangle, the two legs are the base and height.",
      skills: ["volume-prism"]
    },
    {
      id: 2,
      difficulty: "easy",
      question: "Each base of a right prism is a right triangle with legs of length $4$ inches and $9$ inches, as shown. The height of the prism is $7$ inches. What is the volume, in cubic inches, of the prism?",
      diagram: { type: "rightTriangle", params: { sideLabels: ["9 in", "4 in", ""], rightAngleVertex: 1, figureNote: true } },
      choices: [
        // distractor: finds the area of the triangular base and stops
        { id: "A", text: "$18$" },
        // distractor: adds the three given lengths, 4 + 9 + 7, instead of multiplying
        { id: "B", text: "$20$" },
        { id: "C", text: "$126$" },
        // distractor: multiplies all three lengths without the 1/2 for the triangular base
        { id: "D", text: "$252$" }
      ],
      correctAnswer: "C",
      hint: "Find the area of the triangle before using the height of the prism.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~15s):** The base area is $\\frac{1}{2}(4)(9) = 18$, and the volume is $18(7) = 126$ cubic inches.\n\n**The Full Solution:**\nStep 1: The legs of a right triangle are perpendicular, so they serve as the triangle's base and height.\nStep 2: The area of each triangular base is $\\frac{1}{2}(4)(9) = 18$ square inches.\nStep 3: Multiply by the prism's height: $18(7) = 126$ cubic inches. Check: $\\frac{4 \\cdot 9 \\cdot 7}{2} = \\frac{252}{2} = 126$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($18$): is the area of one triangular base, in square inches; it still has to be multiplied by the height $7$.\n* Choice B ($20$): adds the lengths $4 + 9 + 7$; a volume comes from multiplying, not adding.\n* Choice D ($252$): multiplies $4 \\cdot 9 \\cdot 7$ but leaves out the $\\frac{1}{2}$ in the area of a triangle, which is the volume of a rectangular box.\n\n**Test Day Takeaway:** A triangular prism holds half as much as the rectangular box built on its two legs, so multiply the three lengths and then halve.",
      skills: ["volume-prism"]
    },
    {
      id: 3,
      difficulty: "medium",
      question: "A right triangular prism has a volume of $420$ cubic centimeters and a height of $14$ centimeters. Each base of the prism is the right triangle shown. What is the length, in centimeters, of the unlabeled leg of the triangle?",
      diagram: { type: "rightTriangle", params: { sideLabels: ["12 cm", "", ""], rightAngleVertex: 1, figureNote: true } },
      choices: [
        // distractor: finds the base area 30 but leaves out the 1/2, solving 12x = 30
        { id: "A", text: "$2.5$" },
        { id: "B", text: "$5$" },
        // distractor: stops at the area of the triangular base, 420/14 = 30
        { id: "C", text: "$30$" },
        // distractor: divides the volume by the labeled leg, 420/12, ignoring the height of the prism and the 1/2
        { id: "D", text: "$35$" }
      ],
      correctAnswer: "B",
      hint: "Work back from the volume to the area of one triangular base.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~25s):** The base area is $\\frac{420}{14} = 30$, so $\\frac{1}{2}(12)x = 30$ and $x = 5$.\n\n**The Full Solution:**\nStep 1: Volume equals base area times height, so the area of a triangular base is $\\frac{420}{14} = 30$ square centimeters.\nStep 2: Let $x$ be the unlabeled leg. The legs are the triangle's base and height, so $\\frac{1}{2}(12)x = 30$, or $6x = 30$.\nStep 3: Divide: $x = 5$ centimeters. Check: $\\frac{1}{2}(12)(5)(14) = 30(14) = 420$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($2.5$): finds the base area correctly but solves $12x = 30$, leaving out the $\\frac{1}{2}$ for a triangle.\n* Choice C ($30$): stops at the area of the triangular base, which is in square centimeters, not a length.\n* Choice D ($35$): divides the volume by $12$ alone, skipping both the height of the prism and the $\\frac{1}{2}$.\n\n**Test Day Takeaway:** To find a missing length in a prism, divide the volume by the height to get the base area, then solve the area formula for the length you need.",
      skills: ["volume-prism"]
    },
    {
      id: 4,
      difficulty: "medium",
      question: "A right prism has a height of $9$ inches. Each base of the prism is an equilateral triangle with side length $4$ inches, as shown. What is the volume, in cubic inches, of the prism?",
      diagram: { type: "triangleWithAngles", params: { angleLabels: ["60°", "60°", "60°"], sideLabels: ["4 in", "", ""], figureNote: true } },
      choices: [
        { id: "A", text: "$36\\sqrt{3}$" },
        // distractor: uses the side length 4 as the triangle's height, computing (1/2)(4)(4)(9) = 72
        { id: "B", text: "$72$" },
        // distractor: finds the triangle's height 2sqrt3 but leaves out the 1/2, using 8sqrt3 as the base area
        { id: "C", text: "$72\\sqrt{3}$" },
        // distractor: uses s^2 sqrt3 as the area, leaving out the division by 4
        { id: "D", text: "$144\\sqrt{3}$" }
      ],
      correctAnswer: "A",
      hint: "The height of an equilateral triangle is not the same as its side length.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~35s):** The triangle's height is $2\\sqrt{3}$, so its area is $\\frac{1}{2}(4)(2\\sqrt{3}) = 4\\sqrt{3}$, and the volume is $9(4\\sqrt{3}) = 36\\sqrt{3}$.\n\n**The Full Solution:**\nStep 1: An altitude of the equilateral triangle splits it into two $30^{\\circ}$-$60^{\\circ}$-$90^{\\circ}$ triangles with hypotenuse $4$ and short leg $2$, so the altitude is $2\\sqrt{3}$ inches.\nStep 2: The area of each triangular base is $\\frac{1}{2}(4)(2\\sqrt{3}) = 4\\sqrt{3}$ square inches.\nStep 3: Multiply by the prism's height: $9(4\\sqrt{3}) = 36\\sqrt{3}$ cubic inches. Check: $2^{2} + (2\\sqrt{3})^{2} = 4 + 12 = 16 = 4^{2}$, so the altitude is correct ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($72$): treats a side of length $4$ as the triangle's height. The altitude of an equilateral triangle is shorter than its side.\n* Choice C ($72\\sqrt{3}$): finds the altitude $2\\sqrt{3}$ but multiplies it by the base $4$ without the $\\frac{1}{2}$.\n* Choice D ($144\\sqrt{3}$): uses $s^{2}\\sqrt{3}$ for the area of the triangle, leaving out the division by $4$.\n\n**Test Day Takeaway:** For an equilateral triangle with side $s$, the altitude is $\\frac{s\\sqrt{3}}{2}$ and the area is $\\frac{s^{2}\\sqrt{3}}{4}$; find the base area, then multiply by the prism's height.",
      skills: ["volume-prism"]
    },
    {
      id: 5,
      difficulty: "hard",
      question: "A solid block in the shape of a right rectangular prism measures $12$ inches by $6$ inches by $5$ inches. A groove is cut through the full $12$-inch length of the block, and each cross section of the groove is the right triangle shown. What is the volume, in cubic inches, of the remaining block?",
      diagram: { type: "rightTriangle", params: { sideLabels: ["4 in", "2 in", ""], rightAngleVertex: 1, figureNote: true } },
      choices: [
        // distractor: finds the volume of the groove, 48, and reports it instead of subtracting it from the block
        { id: "A", text: "$48$" },
        // distractor: leaves out the 1/2 for the triangle, so the groove is 96 and 360 - 96 = 264
        { id: "B", text: "$264$" },
        { id: "C", text: "$312$" },
        // distractor: subtracts only the triangle's area, (1/2)(4)(2) = 4, without multiplying by the 12-inch length
        { id: "D", text: "$356$" }
      ],
      correctAnswer: "C",
      hint: "Find the whole block and the groove as two separate volumes.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~40s):** The block is $12 \\cdot 6 \\cdot 5 = 360$ and the groove is $\\frac{1}{2}(4)(2)(12) = 48$, so $360 - 48 = 312$ cubic inches remain.\n\n**The Full Solution:**\nStep 1: The volume of the uncut block is $12 \\cdot 6 \\cdot 5 = 360$ cubic inches.\nStep 2: The groove is a triangular prism. Its cross section has area $\\frac{1}{2}(4)(2) = 4$ square inches, and it runs the full $12$ inches, so its volume is $4(12) = 48$ cubic inches.\nStep 3: Subtract: $360 - 48 = 312$ cubic inches. Check: $312 + 48 = 360$, the volume of the uncut block ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($48$): is the volume of the groove that was removed, not of the block that remains.\n* Choice B ($264$): leaves out the $\\frac{1}{2}$ in the triangle's area, so it removes $96$ cubic inches instead of $48$.\n* Choice D ($356$): subtracts the area of the triangle, $4$, as if it were a volume; the groove extends through all $12$ inches of the block.\n\n**Test Day Takeaway:** For a solid with a piece cut out, find the volume of the whole solid and of the removed piece separately, then subtract; a cut that runs the full length is a prism of its own.",
      skills: ["volume-prism"]
    }
  ]
};
