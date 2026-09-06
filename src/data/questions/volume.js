// Practice questions for Volume module
// Questions are organized by SECTION (question type)

export const volumeQuestions = {
  // Section: Fundamentals
  "Fundamentals": [
    {
      id: 1,
      difficulty: "easy",
      question: "The length, the width, and the height of a rectangular box are each measured in centimeters. In which of the following units is the volume of the box expressed?",
      choices: [
        // distractor: the unit of a single length, not of a volume
        { id: "A", text: "Centimeters" },
        // distractor: the unit of an area, such as the area of one face of the box
        { id: "B", text: "Square centimeters" },
        { id: "C", text: "Cubic centimeters" },
        // distractor: a rate, which measures speed rather than how much the box holds
        { id: "D", text: "Centimeters per second" }
      ],
      correctAnswer: "C",
      hint: "Count how many measurements are multiplied together to get the answer.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~10s):** Volume multiplies three lengths, so the unit is centimeters cubed.\n\n**The Full Solution:**\nStep 1: The volume of a rectangular box is the product of its length, its width, and its height.\nStep 2: Each of those three factors is measured in centimeters, so the product carries the unit $\\text{cm} \\cdot \\text{cm} \\cdot \\text{cm}$.\nStep 3: That product is $\\text{cm}^3$, read as cubic centimeters.\n\nVerification: A box measuring $2$ by $3$ by $4$ centimeters holds $24$ unit cubes, each $1$ cubic centimeter. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A (Centimeters): the unit of a single length, not of a volume.\n* Choice B (Square centimeters): the unit of an area, such as the area of one face of the box.\n* Choice D (Centimeters per second): a rate, which measures speed rather than how much the box holds.\n\n**Test Day Takeaway:** Count how many length factors are multiplied: one gives length units, two gives square units, three gives cubic units.",
      skills: ["volume-scaling", "volume-prism"]
    },
    {
      id: 2,
      difficulty: "easy",
      question: "Each dimension of a right rectangular prism is multiplied by $4$. The volume of the resulting prism is $k$ times the volume of the original prism. What is the value of $k$?",
      choices: [
        // distractor: uses the scale factor once rather than once for each dimension
        { id: "A", text: "$4$" },
        // distractor: multiplies the scale factor by $3$ instead of raising it to the third power
        { id: "B", text: "$12$" },
        // distractor: squares the scale factor, which is the rule for area
        { id: "C", text: "$16$" },
        { id: "D", text: "$64$" }
      ],
      correctAnswer: "D",
      hint: "Each of the three dimensions picks up the same factor.",
      explanation: "**Choice D is correct.**\n\n**The Fast Way (~20s):** Three dimensions each scale by $4$, so the volume scales by $4^3 = 64$.\n\n**The Full Solution:**\nStep 1: Write the original volume as $V = \\ell wh$.\nStep 2: The new volume is $(4\\ell)(4w)(4h) = 64\\ell wh$.\nStep 3: So the new volume is $64V$, and $k = 64$.\n\nVerification: A $1$ by $1$ by $1$ cube has volume $1$, and a $4$ by $4$ by $4$ cube has volume $64$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($4$): uses the scale factor once rather than once for each dimension.\n* Choice B ($12$): multiplies the scale factor by $3$ instead of raising it to the third power.\n* Choice C ($16$): squares the scale factor, which is the rule for area.\n\n**Test Day Takeaway:** Scaling every dimension by $r$ multiplies volume by $r^3$ and surface area by $r^2$.",
      skills: ["volume-scaling", "volume-prism"]
    },
    {
      id: 3,
      difficulty: "medium",
      question: "The volume of a right prism is $V = Bh$, where $B$ is the area of a base and $h$ is the height. If the base area of a right prism is tripled and its height is unchanged, how does the volume of the prism change?",
      choices: [
        // distractor: divides by $3$ instead of multiplying by it
        { id: "A", text: "It is multiplied by $\\frac{1}{3}$." },
        { id: "B", text: "It is multiplied by $3$." },
        // distractor: squares the factor, as if two dimensions had changed
        { id: "C", text: "It is multiplied by $9$." },
        // distractor: cubes the factor, as if all three dimensions had changed
        { id: "D", text: "It is multiplied by $27$." }
      ],
      correctAnswer: "B",
      hint: "Only one of the two quantities in the formula changed.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~20s):** $V = Bh$ is a single product, so tripling $B$ triples $V$.\n\n**The Full Solution:**\nStep 1: The original volume is $V = Bh$.\nStep 2: Replacing $B$ with $3B$ while keeping $h$ gives $V^{\\prime} = (3B)h = 3(Bh)$.\nStep 3: So $V^{\\prime} = 3V$, three times the original volume.\n\nVerification: A prism with $B = 10$ and $h = 4$ has $V = 40$; with $B = 30$ and $h = 4$ it has $V = 120 = 3(40)$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A (It is multiplied by $\\frac{1}{3}$.): divides by $3$ instead of multiplying by it.\n* Choice C (It is multiplied by $9$.): squares the factor, as if two dimensions had changed.\n* Choice D (It is multiplied by $27$.): cubes the factor, as if all three dimensions had changed.\n\n**Test Day Takeaway:** Only the quantities that actually change contribute a factor — a tripled base area is one factor of $3$, not three of them.",
      skills: ["volume-scaling", "volume-prism"]
    },
    {
      id: 4,
      difficulty: "medium",
      question: "A cube has edges of length $2$ feet. Given that $1$ foot is equal to $12$ inches, what is the volume, in cubic inches, of the cube?",
      choices: [
        // distractor: multiplies the volume in cubic feet by $12$ once
        { id: "A", text: "$96$" },
        // distractor: squares the edge length in inches instead of cubing it
        { id: "B", text: "$576$" },
        // distractor: multiplies the volume in cubic feet by $12^2$
        { id: "C", text: "$1{,}152$" },
        { id: "D", text: "$13{,}824$" }
      ],
      correctAnswer: "D",
      hint: "Change the edge into inches before you raise anything to the third power.",
      explanation: "**Choice D is correct.**\n\n**The Fast Way (~35s):** The edge is $24$ inches, so the volume is $24^3 = 13{,}824$ cubic inches.\n\n**The Full Solution:**\nStep 1: Convert the edge length first: $2$ feet is $2(12) = 24$ inches.\nStep 2: The volume of a cube is $s^3$, so $V = 24^3$.\nStep 3: $24^3 = 13{,}824$ cubic inches.\n\nVerification: The cube holds $8$ cubic feet, and $8(12^3) = 8(1{,}728) = 13{,}824$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($96$): multiplies the volume in cubic feet by $12$ once.\n* Choice B ($576$): squares the edge length in inches instead of cubing it.\n* Choice C ($1{,}152$): multiplies the volume in cubic feet by $12^2$.\n\n**Test Day Takeaway:** Convert the length before cubing, or convert the volume using the cube of the conversion factor — never the factor by itself.",
      skills: ["volume-scaling", "volume-prism"]
    },
    {
      id: 5,
      difficulty: "hard",
      question: "The table gives the volume of each of two cubes. The surface area of cube $Q$ is $k$ times the surface area of cube $P$. What is the value of $k$?",
      questionTable: { headers: ["Cube", "Volume (cubic inches)"], rows: [["P", "27"], ["Q", "216"]] },
      choices: [
        // distractor: gives the ratio of the edge lengths rather than of the surface areas
        { id: "A", text: "$2$" },
        { id: "B", text: "$4$" },
        // distractor: gives the ratio of the volumes, $\frac{216}{27}$
        { id: "C", text: "$8$" },
        // distractor: squares the volume ratio instead of squaring the edge ratio
        { id: "D", text: "$64$" }
      ],
      correctAnswer: "B",
      hint: "Get back to an edge length from each volume before comparing anything.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~60s):** The edges are $3$ and $6$, so the surface areas are in the ratio $\\left(\\frac{6}{3}\\right)^2 = 4$.\n\n**The Full Solution:**\nStep 1: A cube of volume $V$ has edge $\\sqrt[3]{V}$, so cube $P$ has edge $3$ inches and cube $Q$ has edge $6$ inches.\nStep 2: The ratio of the edges is $\\frac{6}{3} = 2$.\nStep 3: Surface area scales by the square of the edge ratio, so $k = 2^2 = 4$.\n\nVerification: The surface areas are $6(3^2) = 54$ and $6(6^2) = 216$, and $\\frac{216}{54} = 4$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($2$): gives the ratio of the edge lengths rather than of the surface areas.\n* Choice C ($8$): gives the ratio of the volumes, $\\frac{216}{27}$.\n* Choice D ($64$): squares the volume ratio instead of squaring the edge ratio.\n\n**Test Day Takeaway:** Move from volume to edge with a cube root, then square that ratio to compare surface areas.",
      skills: ["volume-scaling", "volume-prism"]
    }
  ],

  // Section: Rectangular Prism
  "Rectangular Prism": [
    {
      id: 1,
      difficulty: "easy",
      question: "A right rectangular prism has a length of $9$ centimeters, a width of $4$ centimeters, and a height of $6$ centimeters. What is the volume, in cubic centimeters, of the prism?",
      choices: [
        // distractor: adds the three dimensions instead of multiplying them
        { id: "A", text: "$19$" },
        // distractor: halves the product, as though the base were a triangle
        { id: "B", text: "$108$" },
        { id: "C", text: "$216$" },
        // distractor: computes the surface area, $2(36 + 54 + 24)$
        { id: "D", text: "$228$" }
      ],
      correctAnswer: "C",
      hint: "The volume of a box is a single product of three numbers.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~15s):** $V = 9 \\cdot 4 \\cdot 6 = 216$.\n\n**The Full Solution:**\nStep 1: For a right rectangular prism, $V = \\ell wh$.\nStep 2: Multiply the base dimensions first: $9 \\cdot 4 = 36$.\nStep 3: Then $36 \\cdot 6 = 216$ cubic centimeters.\n\nVerification: $\\frac{216}{6} = 36 = 9 \\cdot 4$, the area of the base. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($19$): adds the three dimensions instead of multiplying them.\n* Choice B ($108$): halves the product, as though the base were a triangle.\n* Choice D ($228$): computes the surface area, $2(36 + 54 + 24)$.\n\n**Test Day Takeaway:** Multiply all three dimensions; nothing gets halved unless the base is a triangle.",
      skills: ["volume-prism"]
    },
    {
      id: 2,
      difficulty: "easy",
      question: "A storage bin in the shape of a right rectangular prism has a volume of $270$ cubic inches. Its base is a rectangle measuring $9$ inches by $5$ inches. What is the height, in inches, of the bin?",
      choices: [
        { id: "A", text: "$6$" },
        // distractor: divides by the length only, ignoring the width
        { id: "B", text: "$30$" },
        // distractor: divides by the width only, ignoring the length
        { id: "C", text: "$54$" },
        // distractor: subtracts the two base dimensions from the volume
        { id: "D", text: "$256$" }
      ],
      correctAnswer: "A",
      hint: "Combine the two base measurements into a single number first.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~20s):** The base area is $45$, so $h = \\frac{270}{45} = 6$.\n\n**The Full Solution:**\nStep 1: $V = \\ell wh$, so $270 = 9 \\cdot 5 \\cdot h$.\nStep 2: The base area is $9 \\cdot 5 = 45$ square inches, giving $270 = 45h$.\nStep 3: Divide: $h = \\frac{270}{45} = 6$ inches.\n\nVerification: $9 \\cdot 5 \\cdot 6 = 270$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($30$): divides by the length only, ignoring the width.\n* Choice C ($54$): divides by the width only, ignoring the length.\n* Choice D ($256$): subtracts the two base dimensions from the volume.\n\n**Test Day Takeaway:** Collapse the two base dimensions into one base area before dividing.",
      skills: ["volume-prism"]
    },
    {
      id: 3,
      difficulty: "medium",
      question: "A reservoir with a rectangular base measuring $12$ feet by $8$ feet holds $2{,}400$ cubic feet of water. By how many feet does the water level rise when an additional $960$ cubic feet of water is added?",
      choices: [
        { id: "A", text: "$10$" },
        // distractor: gives the original depth of the water rather than the rise
        { id: "B", text: "$25$" },
        // distractor: gives the new depth rather than the increase
        { id: "C", text: "$35$" },
        // distractor: divides the added volume by the length only
        { id: "D", text: "$80$" }
      ],
      correctAnswer: "A",
      hint: "The base does not change, so only the depth responds to the extra water.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~35s):** The base area is $96$ square feet, so the rise is $\\frac{960}{96} = 10$ feet.\n\n**The Full Solution:**\nStep 1: The water forms a rectangular prism whose base area is $12 \\cdot 8 = 96$ square feet.\nStep 2: The added volume equals the base area times the rise: $960 = 96r$.\nStep 3: So $r = \\frac{960}{96} = 10$ feet.\n\nVerification: The depth goes from $\\frac{2400}{96} = 25$ feet to $\\frac{3360}{96} = 35$ feet, a rise of $10$ feet. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($25$): gives the original depth of the water rather than the rise.\n* Choice C ($35$): gives the new depth rather than the increase.\n* Choice D ($80$): divides the added volume by the length only.\n\n**Test Day Takeaway:** When the base is fixed, a change in volume is just a change in height: divide the added volume by the base area.",
      skills: ["volume-prism"]
    },
    {
      id: 4,
      difficulty: "medium",
      question: "The table gives the dimensions of two right rectangular prisms, $P$ and $Q$. The volume of prism $Q$ is $k$ times the volume of prism $P$. What is the value of $k$?",
      questionTable: { headers: ["Prism", "Length (cm)", "Width (cm)", "Height (cm)"], rows: [["P", "8", "5", "3"], ["Q", "16", "2.5", "3"]] },
      choices: [
        // distractor: uses only the halved width
        { id: "A", text: "$\\frac{1}{2}$" },
        { id: "B", text: "$1$" },
        // distractor: uses only the doubled length
        { id: "C", text: "$2$" },
        // distractor: adds the two changes, $2 + \frac{1}{2}$, instead of multiplying them
        { id: "D", text: "$\\frac{5}{2}$" }
      ],
      correctAnswer: "B",
      hint: "Work out each volume on its own before comparing them.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~30s):** Both prisms have volume $120$ cubic centimeters, so $k = 1$.\n\n**The Full Solution:**\nStep 1: Prism $P$: $V = 8 \\cdot 5 \\cdot 3 = 120$ cubic centimeters.\nStep 2: Prism $Q$: $V = 16 \\cdot 2.5 \\cdot 3 = 120$ cubic centimeters.\nStep 3: So $k = \\frac{120}{120} = 1$.\n\nVerification: The length doubled while the width was halved, and $2 \\cdot \\frac{1}{2} = 1$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{1}{2}$): uses only the halved width.\n* Choice C ($2$): uses only the doubled length.\n* Choice D ($\\frac{5}{2}$): adds the two changes, $2 + \\frac{1}{2}$, instead of multiplying them.\n\n**Test Day Takeaway:** Scale factors on different dimensions multiply, so a doubling and a halving cancel exactly.",
      skills: ["volume-prism"]
    },
    {
      id: 5,
      difficulty: "hard",
      question: "A carton in the shape of a right rectangular prism has interior dimensions $18$ inches by $12$ inches by $10$ inches. Cubic blocks with edge length $3$ inches are packed inside the carton with their faces parallel to the faces of the carton. What is the greatest number of whole blocks that fit inside?",
      choices: [
        { id: "A", text: "$72$" },
        // distractor: divides the volume of the carton by the volume of a block, ignoring that $10$ is not a multiple of $3$
        { id: "B", text: "$80$" },
        // distractor: divides the volume of the carton by $3^2$ instead of $3^3$
        { id: "C", text: "$240$" },
        // distractor: divides the volume of the carton by $3$ instead of by $3^3$
        { id: "D", text: "$720$" }
      ],
      correctAnswer: "A",
      hint: "Check each dimension on its own — one of them does not divide evenly.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~60s):** $18 \\div 3 = 6$ and $12 \\div 3 = 4$, but only $3$ layers fit along $10$ inches, so $6 \\cdot 4 \\cdot 3 = 72$.\n\n**The Full Solution:**\nStep 1: Blocks stack in whole rows along each edge, so count how many fit along each dimension separately.\nStep 2: Along $18$ inches, $6$ blocks fit; along $12$ inches, $4$ fit; along $10$ inches only $3$ fit, since a fourth layer would need $12$ inches.\nStep 3: The total is $6 \\cdot 4 \\cdot 3 = 72$ blocks.\n\nVerification: Those blocks fill $72(27) = 1{,}944$ cubic inches inside a carton of $2{,}160$ cubic inches, leaving a $1$-inch gap on top. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($80$): divides the volume of the carton by the volume of a block, ignoring that $10$ is not a multiple of $3$.\n* Choice C ($240$): divides the volume of the carton by $3^2$ instead of $3^3$.\n* Choice D ($720$): divides the volume of the carton by $3$ instead of by $3^3$.\n\n**Test Day Takeaway:** Packing questions count blocks along each edge and round each count down; the volume quotient overcounts whenever a dimension does not divide evenly.",
      skills: ["volume-prism"]
    }
  ],

  // Section: Cube
  "Cube": [
    {
      id: 1,
      difficulty: "easy",
      question: "A cube has edges of length $7$ millimeters. What is the volume, in cubic millimeters, of the cube?",
      choices: [
        // distractor: multiplies the edge by $3$ instead of cubing it
        { id: "A", text: "$21$" },
        // distractor: squares the edge, which gives the area of one face
        { id: "B", text: "$49$" },
        // distractor: computes the surface area, $6(7^2)$
        { id: "C", text: "$294$" },
        { id: "D", text: "$343$" }
      ],
      correctAnswer: "D",
      hint: "All three dimensions of a cube are the same length.",
      explanation: "**Choice D is correct.**\n\n**The Fast Way (~10s):** $V = 7^3 = 343$.\n\n**The Full Solution:**\nStep 1: The volume of a cube is $s^3$, where $s$ is the edge length.\nStep 2: $7^2 = 49$.\nStep 3: $49 \\cdot 7 = 343$ cubic millimeters.\n\nVerification: $343 = 7 \\cdot 7 \\cdot 7$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($21$): multiplies the edge by $3$ instead of cubing it.\n* Choice B ($49$): squares the edge, which gives the area of one face.\n* Choice C ($294$): computes the surface area, $6(7^2)$.\n\n**Test Day Takeaway:** Cubing means three factors of the edge, not three times the edge.",
      skills: ["volume-prism", "volume-scaling"]
    },
    {
      id: 2,
      difficulty: "easy",
      question: "The volume of a cube is $216$ cubic centimeters. What is the length, in centimeters, of one edge of the cube?",
      choices: [
        { id: "A", text: "$6$" },
        // distractor: divides the volume by $3$ instead of taking a cube root
        { id: "B", text: "$72$" },
        // distractor: halves the volume
        { id: "C", text: "$108$" },
        // distractor: repeats the volume, leaving the cube undone
        { id: "D", text: "$216$" }
      ],
      correctAnswer: "A",
      hint: "Ask which number multiplied by itself three times gives the volume.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~15s):** $6^3 = 216$, so the edge is $6$ centimeters.\n\n**The Full Solution:**\nStep 1: For a cube, $V = s^3$, so $s^3 = 216$.\nStep 2: Undo the cube by taking a cube root: $s = \\sqrt[3]{216}$.\nStep 3: Since $6 \\cdot 6 \\cdot 6 = 216$, the edge is $6$ centimeters.\n\nVerification: $6^3 = 216$, the given volume. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($72$): divides the volume by $3$ instead of taking a cube root.\n* Choice C ($108$): halves the volume.\n* Choice D ($216$): repeats the volume, leaving the cube undone.\n\n**Test Day Takeaway:** Undo a cube with a cube root; dividing by $3$ undoes multiplication, not an exponent.",
      skills: ["volume-prism", "volume-scaling"]
    },
    {
      id: 3,
      difficulty: "medium",
      question: "A cube has a volume of $64$ cubic feet. A second cube has an edge length that is $3$ times the edge length of the first cube. What is the volume, in cubic feet, of the second cube?",
      choices: [
        // distractor: gives the edge length of the second cube rather than its volume
        { id: "A", text: "$12$" },
        // distractor: multiplies the volume by $3$ instead of by $3^3$
        { id: "B", text: "$192$" },
        // distractor: multiplies the volume by $3^2$
        { id: "C", text: "$576$" },
        { id: "D", text: "$1{,}728$" }
      ],
      correctAnswer: "D",
      hint: "Find the first edge length before scaling anything.",
      explanation: "**Choice D is correct.**\n\n**The Fast Way (~35s):** The first edge is $4$ feet, the second is $12$ feet, and $12^3 = 1{,}728$.\n\n**The Full Solution:**\nStep 1: $s^3 = 64$ gives $s = 4$ feet for the first cube.\nStep 2: The second cube has edge $3(4) = 12$ feet.\nStep 3: $12^3 = 1{,}728$ cubic feet.\n\nVerification: $64 \\cdot 3^3 = 64(27) = 1{,}728$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($12$): gives the edge length of the second cube rather than its volume.\n* Choice B ($192$): multiplies the volume by $3$ instead of by $3^3$.\n* Choice C ($576$): multiplies the volume by $3^2$.\n\n**Test Day Takeaway:** Tripling an edge multiplies volume by $27$, because the factor applies once for each of the three dimensions.",
      skills: ["volume-prism", "volume-scaling"]
    },
    {
      id: 4,
      difficulty: "medium",
      question: "The surface area of a cube is $150$ square inches. What is the volume, in cubic inches, of the cube?",
      choices: [
        // distractor: stops at the area of one face
        { id: "A", text: "$25$" },
        { id: "B", text: "$125$" },
        // distractor: multiplies the surface area by $6$ instead of dividing by it
        { id: "C", text: "$900$" },
        // distractor: uses an edge of $15$, obtained by dividing the surface area by $10$
        { id: "D", text: "$3{,}375$" }
      ],
      correctAnswer: "B",
      hint: "Divide by the number of faces before doing anything else.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~30s):** One face has area $25$, so $s = 5$ and $V = 125$.\n\n**The Full Solution:**\nStep 1: A cube has $6$ congruent square faces, so $6s^2 = 150$ and $s^2 = 25$.\nStep 2: Take the square root: $s = 5$ inches.\nStep 3: $V = 5^3 = 125$ cubic inches.\n\nVerification: $6(5^2) = 150$ square inches, the given surface area. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($25$): stops at the area of one face.\n* Choice C ($900$): multiplies the surface area by $6$ instead of dividing by it.\n* Choice D ($3{,}375$): uses an edge of $15$, obtained by dividing the surface area by $10$.\n\n**Test Day Takeaway:** Divide a cube surface area by $6$ to get one face, square-root for the edge, then cube.",
      skills: ["volume-prism", "volume-scaling"]
    },
    {
      id: 5,
      difficulty: "hard",
      question: "Cube $A$ has a volume of $1{,}000$ cubic centimeters. Cube $B$ has a surface area that is $9$ times the surface area of cube $A$. What is the volume, in cubic centimeters, of cube $B$?",
      choices: [
        // distractor: multiplies the volume by the edge ratio $3$
        { id: "A", text: "$3{,}000$" },
        // distractor: multiplies the volume by the surface-area ratio
        { id: "B", text: "$9{,}000$" },
        { id: "C", text: "$27{,}000$" },
        // distractor: cubes the surface-area ratio instead of the edge ratio
        { id: "D", text: "$729{,}000$" }
      ],
      correctAnswer: "C",
      hint: "Areas compare by the square of the edge ratio and volumes by its cube.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~60s):** Surface areas in the ratio $9$ mean edges in the ratio $3$, so volumes are in the ratio $27$: $27{,}000$.\n\n**The Full Solution:**\nStep 1: Cube $A$ has edge $\\sqrt[3]{1000} = 10$ centimeters and surface area $6(10^2) = 600$ square centimeters.\nStep 2: Cube $B$ has surface area $9(600) = 5{,}400$, so $6s^2 = 5400$, $s^2 = 900$, and $s = 30$ centimeters.\nStep 3: $V = 30^3 = 27{,}000$ cubic centimeters.\n\nVerification: $\\frac{30}{10} = 3$ and $3^3 = 27$, so $27(1{,}000) = 27{,}000$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($3{,}000$): multiplies the volume by the edge ratio $3$.\n* Choice B ($9{,}000$): multiplies the volume by the surface-area ratio.\n* Choice D ($729{,}000$): cubes the surface-area ratio instead of the edge ratio.\n\n**Test Day Takeaway:** An area ratio squares the length ratio and a volume ratio cubes it — travel through the length ratio to connect them.",
      skills: ["volume-prism", "volume-scaling"]
    }
  ],

  // Section: Cylinder
  "Cylinder": [
    {
      id: 1,
      difficulty: "easy",
      question: "A right circular cylinder has a radius of $6$ centimeters and a height of $5$ centimeters. What is the volume, in cubic centimeters, of the cylinder?",
      choices: [
        // distractor: uses the cone formula $\frac{1}{3}\pi r^2 h$
        { id: "A", text: "$60\\pi$" },
        // distractor: squares the height instead of the radius
        { id: "B", text: "$150\\pi$" },
        { id: "C", text: "$180\\pi$" },
        // distractor: uses the diameter $12$ in place of the radius
        { id: "D", text: "$720\\pi$" }
      ],
      correctAnswer: "C",
      hint: "The base of a cylinder is a circle, so find its area first.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~15s):** $V = \\pi(6^2)(5) = 180\\pi$.\n\n**The Full Solution:**\nStep 1: The volume of a right circular cylinder is $V = \\pi r^2 h$.\nStep 2: With $r = 6$, the base area is $\\pi(36)$ square centimeters.\nStep 3: $V = \\pi(36)(5) = 180\\pi$ cubic centimeters.\n\nVerification: $36 \\cdot 5 = 180$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($60\\pi$): uses the cone formula $\\frac{1}{3}\\pi r^2 h$.\n* Choice B ($150\\pi$): squares the height instead of the radius.\n* Choice D ($720\\pi$): uses the diameter $12$ in place of the radius.\n\n**Test Day Takeaway:** Square the radius first and then multiply by the height; only the radius is squared.",
      skills: ["volume-prism"]
    },
    {
      id: 2,
      difficulty: "easy",
      question: "A right circular cylinder has a volume of $245\\pi$ cubic inches and a radius of $7$ inches. What is the height, in inches, of the cylinder?",
      choices: [
        { id: "A", text: "$5$" },
        // distractor: divides by the radius instead of by the radius squared
        { id: "B", text: "$35$" },
        // distractor: subtracts the radius from the numerical part of the volume
        { id: "C", text: "$238$" },
        // distractor: multiplies by the radius instead of dividing by it
        { id: "D", text: "$1{,}715$" }
      ],
      correctAnswer: "A",
      hint: "Divide out $\\pi$ before working with the numbers.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~20s):** $\\pi(49)h = 245\\pi$ gives $h = 5$.\n\n**The Full Solution:**\nStep 1: $V = \\pi r^2 h$, so $245\\pi = \\pi(7^2)h$.\nStep 2: Divide both sides by $\\pi$: $245 = 49h$.\nStep 3: $h = \\frac{245}{49} = 5$ inches.\n\nVerification: $\\pi(49)(5) = 245\\pi$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($35$): divides by the radius instead of by the radius squared.\n* Choice C ($238$): subtracts the radius from the numerical part of the volume.\n* Choice D ($1{,}715$): multiplies by the radius instead of dividing by it.\n\n**Test Day Takeaway:** Cancel $\\pi$ from both sides immediately — it never changes the arithmetic.",
      skills: ["volume-prism"]
    },
    {
      id: 3,
      difficulty: "medium",
      question: "A cylindrical can has a diameter of $9$ centimeters and a height of $16$ centimeters. What is the volume, in cubic centimeters, of the can?",
      choices: [
        // distractor: applies the cone formula, dividing the correct volume by $3$
        { id: "A", text: "$108\\pi$" },
        // distractor: doubles the radius instead of squaring it
        { id: "B", text: "$144\\pi$" },
        { id: "C", text: "$324\\pi$" },
        // distractor: uses the diameter as the radius
        { id: "D", text: "$1{,}296\\pi$" }
      ],
      correctAnswer: "C",
      hint: "The formula wants a radius, and the problem hands you a diameter.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~30s):** The radius is $4.5$, so $V = \\pi(4.5)^2(16) = 324\\pi$.\n\n**The Full Solution:**\nStep 1: The radius is half the diameter: $r = \\frac{9}{2} = 4.5$ centimeters.\nStep 2: $r^2 = 20.25$ square centimeters.\nStep 3: $V = \\pi(20.25)(16) = 324\\pi$ cubic centimeters.\n\nVerification: $20.25 \\cdot 16 = 324$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($108\\pi$): applies the cone formula, dividing the correct volume by $3$.\n* Choice B ($144\\pi$): doubles the radius instead of squaring it.\n* Choice D ($1{,}296\\pi$): uses the diameter as the radius.\n\n**Test Day Takeaway:** A stated diameter has to be halved before it enters $\\pi r^2 h$.",
      skills: ["volume-prism"]
    },
    {
      id: 4,
      difficulty: "medium",
      question: "The radius of a right circular cylinder is multiplied by $3$, and its height is divided by $9$. The volume of the resulting cylinder is $k$ times the volume of the original cylinder. What is the value of $k$?",
      choices: [
        // distractor: uses the radius factor once instead of squaring it
        { id: "A", text: "$\\frac{1}{3}$" },
        { id: "B", text: "$1$" },
        // distractor: cubes the radius factor, as if all three dimensions had scaled
        { id: "C", text: "$3$" },
        // distractor: squares the radius factor but ignores the change in height
        { id: "D", text: "$9$" }
      ],
      correctAnswer: "B",
      hint: "The radius is squared in the formula, so its factor cannot be used just once.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~35s):** The volume scales by $\\frac{3^2}{9} = 1$, so it is unchanged.\n\n**The Full Solution:**\nStep 1: $V = \\pi r^2 h$, so the new volume is $\\pi(3r)^2\\left(\\frac{h}{9}\\right)$.\nStep 2: $(3r)^2 = 9r^2$, so the new volume is $\\pi(9r^2)\\left(\\frac{h}{9}\\right) = \\pi r^2 h$.\nStep 3: The new volume equals the original, so $k = 1$.\n\nVerification: With $r = 2$ and $h = 9$ the volume is $36\\pi$; with $r = 6$ and $h = 1$ it is again $36\\pi$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{1}{3}$): uses the radius factor once instead of squaring it.\n* Choice C ($3$): cubes the radius factor, as if all three dimensions had scaled.\n* Choice D ($9$): squares the radius factor but ignores the change in height.\n\n**Test Day Takeaway:** The radius enters squared, so its scale factor is squared, while the height factor is used once.",
      skills: ["volume-prism"]
    },
    {
      id: 5,
      difficulty: "hard",
      question: "A cylindrical tank with a radius of $10$ feet holds water to a depth of $9$ feet. All of the water is poured into an empty cylindrical tank with a radius of $5$ feet. To what depth, in feet, does the water rise in the second tank?",
      choices: [
        // distractor: scales the depth by $\left(\frac{5}{10}\right)^2$, shrinking it instead of growing it
        { id: "A", text: "$2.25$" },
        // distractor: scales the depth by $\frac{5}{10}$
        { id: "B", text: "$4.5$" },
        // distractor: uses the radius ratio $\frac{10}{5}$ once instead of squaring it
        { id: "C", text: "$18$" },
        { id: "D", text: "$36$" }
      ],
      correctAnswer: "D",
      hint: "The water keeps its volume; only the base area underneath it changes.",
      explanation: "**Choice D is correct.**\n\n**The Fast Way (~60s):** The water measures $900\\pi$ cubic feet, so $25\\pi h = 900\\pi$ and $h = 36$.\n\n**The Full Solution:**\nStep 1: The water in the first tank has volume $\\pi(10^2)(9) = 900\\pi$ cubic feet.\nStep 2: Pouring changes the shape but not the amount, so $\\pi(5^2)h = 900\\pi$.\nStep 3: Divide by $\\pi$: $25h = 900$, so $h = 36$ feet.\n\nVerification: $\\pi(25)(36) = 900\\pi$, the same volume as before. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($2.25$): scales the depth by $\\left(\\frac{5}{10}\\right)^2$, shrinking it instead of growing it.\n* Choice B ($4.5$): scales the depth by $\\frac{5}{10}$.\n* Choice C ($18$): uses the radius ratio $\\frac{10}{5}$ once instead of squaring it.\n\n**Test Day Takeaway:** Pouring conserves volume: set the two $\\pi r^2 h$ expressions equal and solve for the unknown depth.",
      skills: ["volume-prism"]
    }
  ],

  // Section: Sphere
  "Sphere": [
    {
      id: 1,
      difficulty: "easy",
      question: "A sphere has a radius of $6$ inches. What is the volume, in cubic inches, of the sphere?",
      choices: [
        // distractor: uses $\frac{1}{3}\pi r^3$, borrowing the coefficient from a cone
        { id: "A", text: "$72\\pi$" },
        // distractor: computes the surface area $4\pi r^2$ instead of the volume
        { id: "B", text: "$144\\pi$" },
        { id: "C", text: "$288\\pi$" },
        // distractor: omits the division by $3$, using $4\pi r^3$
        { id: "D", text: "$864\\pi$" }
      ],
      correctAnswer: "C",
      hint: "Cube the radius first, then deal with the fraction.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~20s):** $V = \\frac{4}{3}\\pi(6^3) = \\frac{4}{3}\\pi(216) = 288\\pi$.\n\n**The Full Solution:**\nStep 1: The volume of a sphere is $V = \\frac{4}{3}\\pi r^3$.\nStep 2: $6^3 = 216$.\nStep 3: $\\frac{4}{3}(216) = 288$, so $V = 288\\pi$ cubic inches.\n\nVerification: $288(3) = 864 = 4(216)$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($72\\pi$): uses $\\frac{1}{3}\\pi r^3$, borrowing the coefficient from a cone.\n* Choice B ($144\\pi$): computes the surface area $4\\pi r^2$ instead of the volume.\n* Choice D ($864\\pi$): omits the division by $3$, using $4\\pi r^3$.\n\n**Test Day Takeaway:** Cube the radius before applying $\\frac{4}{3}$; the radius is never squared in a sphere volume.",
      skills: ["volume-sphere"]
    },
    {
      id: 2,
      difficulty: "easy",
      question: "A sphere has a volume of $36\\pi$ cubic centimeters. What is the radius, in centimeters, of the sphere?",
      choices: [
        { id: "A", text: "$3$" },
        // distractor: gives the diameter instead of the radius
        { id: "B", text: "$6$" },
        // distractor: divides the coefficient $36$ by $4$ and stops
        { id: "C", text: "$9$" },
        // distractor: reports $r^3$ rather than $r$
        { id: "D", text: "$27$" }
      ],
      correctAnswer: "A",
      hint: "Clear the fraction $\\frac{4}{3}$ before undoing the cube.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~25s):** $\\frac{4}{3}r^3 = 36$ gives $r^3 = 27$ and $r = 3$.\n\n**The Full Solution:**\nStep 1: $\\frac{4}{3}\\pi r^3 = 36\\pi$; divide both sides by $\\pi$ to get $\\frac{4}{3}r^3 = 36$.\nStep 2: Multiply both sides by $\\frac{3}{4}$: $r^3 = 27$.\nStep 3: $r = \\sqrt[3]{27} = 3$ centimeters.\n\nVerification: $\\frac{4}{3}\\pi(3^3) = \\frac{4}{3}\\pi(27) = 36\\pi$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($6$): gives the diameter instead of the radius.\n* Choice C ($9$): divides the coefficient $36$ by $4$ and stops.\n* Choice D ($27$): reports $r^3$ rather than $r$.\n\n**Test Day Takeaway:** Back-solving a sphere means clearing $\\frac{4}{3}$ and then taking a cube root, in that order.",
      skills: ["volume-sphere"]
    },
    {
      id: 3,
      difficulty: "medium",
      question: "A spherical ball bearing has a diameter of $18$ millimeters. What is the volume, in cubic millimeters, of the ball bearing?",
      choices: [
        // distractor: uses $\frac{1}{3}\pi r^3$ instead of $\frac{4}{3}\pi r^3$
        { id: "A", text: "$243\\pi$" },
        { id: "B", text: "$972\\pi$" },
        // distractor: omits the division by $3$
        { id: "C", text: "$2{,}916\\pi$" },
        // distractor: uses the diameter $18$ in place of the radius
        { id: "D", text: "$7{,}776\\pi$" }
      ],
      correctAnswer: "B",
      hint: "The formula uses a radius, and a diameter is what you were given.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~30s):** The radius is $9$, so $V = \\frac{4}{3}\\pi(729) = 972\\pi$.\n\n**The Full Solution:**\nStep 1: The radius is half the diameter: $r = 9$ millimeters.\nStep 2: $9^3 = 729$.\nStep 3: $V = \\frac{4}{3}\\pi(729) = 972\\pi$ cubic millimeters.\n\nVerification: $\\frac{972(3)}{4} = 729 = 9^3$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($243\\pi$): uses $\\frac{1}{3}\\pi r^3$ instead of $\\frac{4}{3}\\pi r^3$.\n* Choice C ($2{,}916\\pi$): omits the division by $3$.\n* Choice D ($7{,}776\\pi$): uses the diameter $18$ in place of the radius.\n\n**Test Day Takeaway:** Halve a diameter before cubing — cubing first multiplies the error by $8$.",
      skills: ["volume-sphere"]
    },
    {
      id: 4,
      difficulty: "medium",
      question: "Sphere $B$ has a radius that is half the radius of sphere $A$. The volume of sphere $B$ is what fraction of the volume of sphere $A$?",
      choices: [
        { id: "A", text: "$\\frac{1}{8}$" },
        // distractor: multiplies the denominator by $3$ instead of raising $2$ to the third power
        { id: "B", text: "$\\frac{1}{6}$" },
        // distractor: squares the length factor, which is the rule for area
        { id: "C", text: "$\\frac{1}{4}$" },
        // distractor: uses the length factor once
        { id: "D", text: "$\\frac{1}{2}$" }
      ],
      correctAnswer: "A",
      hint: "The radius appears three times over in the volume formula.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~30s):** Volume scales by the cube of the radius factor: $\\left(\\frac{1}{2}\\right)^3 = \\frac{1}{8}$.\n\n**The Full Solution:**\nStep 1: Let sphere $A$ have radius $r$, so sphere $B$ has radius $\\frac{r}{2}$.\nStep 2: $V_B = \\frac{4}{3}\\pi\\left(\\frac{r}{2}\\right)^3 = \\frac{4}{3}\\pi \\cdot \\frac{r^3}{8}$.\nStep 3: That is $\\frac{1}{8}$ of $V_A = \\frac{4}{3}\\pi r^3$.\n\nVerification: With $r = 2$: $V_A = \\frac{32\\pi}{3}$ and $V_B = \\frac{4\\pi}{3}$, a ratio of $\\frac{1}{8}$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\frac{1}{6}$): multiplies the denominator by $3$ instead of raising $2$ to the third power.\n* Choice C ($\\frac{1}{4}$): squares the length factor, which is the rule for area.\n* Choice D ($\\frac{1}{2}$): uses the length factor once.\n\n**Test Day Takeaway:** Halving every length divides volume by $8$, not by $2$.",
      skills: ["volume-sphere"]
    },
    {
      id: 5,
      difficulty: "hard",
      question: "A solid sphere with a radius of $6$ centimeters is melted and recast as a right circular cylinder with a radius of $4$ centimeters. What is the height, in centimeters, of the cylinder?",
      choices: [
        // distractor: uses $\frac{1}{3}\pi r^3$ for the volume of the sphere
        { id: "A", text: "$4.5$" },
        { id: "B", text: "$18$" },
        // distractor: omits the division by $3$ in the volume of the sphere
        { id: "C", text: "$54$" },
        // distractor: uses the diameter $12$ of the sphere as its radius
        { id: "D", text: "$144$" }
      ],
      correctAnswer: "B",
      hint: "Nothing is lost in the recasting, so one quantity is the same for both solids.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~60s):** The sphere holds $288\\pi$, so $16\\pi h = 288\\pi$ and $h = 18$.\n\n**The Full Solution:**\nStep 1: The sphere has volume $\\frac{4}{3}\\pi(6^3) = 288\\pi$ cubic centimeters.\nStep 2: Recasting preserves the amount of material, so $\\pi(4^2)h = 288\\pi$.\nStep 3: Divide by $\\pi$: $16h = 288$, so $h = 18$ centimeters.\n\nVerification: $\\pi(16)(18) = 288\\pi$, the volume of the original sphere. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($4.5$): uses $\\frac{1}{3}\\pi r^3$ for the volume of the sphere.\n* Choice C ($54$): omits the division by $3$ in the volume of the sphere.\n* Choice D ($144$): uses the diameter $12$ of the sphere as its radius.\n\n**Test Day Takeaway:** Melting and recasting holds volume constant — equate the two formulas and solve.",
      skills: ["volume-sphere"]
    }
  ],

  // Section: Cone
  "Cone": [
    {
      id: 1,
      difficulty: "easy",
      question: "A right circular cone has a radius of $5$ centimeters and a height of $9$ centimeters. What is the volume, in cubic centimeters, of the cone?",
      choices: [
        // distractor: multiplies radius by height without squaring the radius
        { id: "A", text: "$15\\pi$" },
        { id: "B", text: "$75\\pi$" },
        // distractor: swaps the radius and the height, squaring the height instead
        { id: "C", text: "$135\\pi$" },
        // distractor: uses the cylinder formula, omitting the factor $\frac{1}{3}$
        { id: "D", text: "$225\\pi$" }
      ],
      correctAnswer: "B",
      hint: "Work out the matching cylinder first, then take a third of it.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~20s):** $V = \\frac{1}{3}\\pi(25)(9) = 75\\pi$.\n\n**The Full Solution:**\nStep 1: The volume of a cone is $V = \\frac{1}{3}\\pi r^2 h$.\nStep 2: $r^2 = 25$, so $\\pi r^2 h = \\pi(25)(9) = 225\\pi$.\nStep 3: One third of that is $75\\pi$ cubic centimeters.\n\nVerification: $3(75) = 225 = 25 \\cdot 9$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($15\\pi$): multiplies radius by height without squaring the radius.\n* Choice C ($135\\pi$): swaps the radius and the height, squaring the height instead.\n* Choice D ($225\\pi$): uses the cylinder formula, omitting the factor $\\frac{1}{3}$.\n\n**Test Day Takeaway:** A cone holds one third of the cylinder that shares its base and height.",
      skills: ["volume-pyramid-cone"]
    },
    {
      id: 2,
      difficulty: "easy",
      question: "A right circular cone and a right circular cylinder have the same radius and the same height. The volume of the cylinder is $96$ cubic inches. What is the volume, in cubic inches, of the cone?",
      choices: [
        { id: "A", text: "$32$" },
        // distractor: halves the volume of the cylinder instead of taking a third
        { id: "B", text: "$48$" },
        // distractor: reports the volume of the cylinder unchanged
        { id: "C", text: "$96$" },
        // distractor: multiplies by $3$ instead of dividing by it
        { id: "D", text: "$288$" }
      ],
      correctAnswer: "A",
      hint: "Three identical cones fill the matching cylinder.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~20s):** A cone is $\\frac{1}{3}$ of the matching cylinder: $\\frac{96}{3} = 32$.\n\n**The Full Solution:**\nStep 1: With a shared radius and height, $V_{\\text{cylinder}} = \\pi r^2 h$ and $V_{\\text{cone}} = \\frac{1}{3}\\pi r^2 h$.\nStep 2: So the volume of the cone is $\\frac{1}{3}$ of the volume of the cylinder.\nStep 3: $\\frac{1}{3}(96) = 32$ cubic inches.\n\nVerification: $3(32) = 96$, the volume of the cylinder. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($48$): halves the volume of the cylinder instead of taking a third.\n* Choice C ($96$): reports the volume of the cylinder unchanged.\n* Choice D ($288$): multiplies by $3$ instead of dividing by it.\n\n**Test Day Takeaway:** Same base and same height means the cone holds exactly one third as much.",
      skills: ["volume-pyramid-cone"]
    },
    {
      id: 3,
      difficulty: "medium",
      question: "A right circular cone has a volume of $147\\pi$ cubic centimeters and a radius of $7$ centimeters. What is the height, in centimeters, of the cone?",
      choices: [
        // distractor: forgets the factor $\frac{1}{3}$ and divides only by $r^2$
        { id: "A", text: "$3$" },
        { id: "B", text: "$9$" },
        // distractor: divides $147$ by the radius instead of by $\frac{1}{3}r^2$, computing $\frac{147}{7}$
        { id: "C", text: "$21$" },
        // distractor: divides by the radius and then multiplies by $3$
        { id: "D", text: "$63$" }
      ],
      correctAnswer: "B",
      hint: "Multiply through by $3$ before dividing by anything.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~30s):** $\\frac{1}{3}(49)h = 147$ gives $h = 9$.\n\n**The Full Solution:**\nStep 1: $\\frac{1}{3}\\pi r^2 h = 147\\pi$; divide by $\\pi$ to get $\\frac{1}{3}(49)h = 147$.\nStep 2: Multiply both sides by $3$: $49h = 441$.\nStep 3: $h = \\frac{441}{49} = 9$ centimeters.\n\nVerification: $\\frac{1}{3}\\pi(49)(9) = 147\\pi$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($3$): forgets the factor $\\frac{1}{3}$ and divides only by $r^2$.\n* Choice C ($21$): divides $147$ by the radius instead of by $\\frac{1}{3}r^2$, computing $\\frac{147}{7}$.\n* Choice D ($63$): divides by the radius and then multiplies by $3$.\n\n**Test Day Takeaway:** Clear $\\pi$ and the $\\frac{1}{3}$ first, and what is left is one division.",
      skills: ["volume-pyramid-cone"]
    },
    {
      id: 4,
      difficulty: "medium",
      question: "A right circular cone has a volume of $300\\pi$ cubic inches and a height of $4$ inches. What is the radius, in inches, of the cone?",
      choices: [
        { id: "A", text: "$15$" },
        // distractor: gives the diameter instead of the radius
        { id: "B", text: "$30$" },
        // distractor: divides by the height and stops, using neither the $\frac{1}{3}$ nor the square root
        { id: "C", text: "$75$" },
        // distractor: reports $r^2$ rather than $r$
        { id: "D", text: "$225$" }
      ],
      correctAnswer: "A",
      hint: "Work down to $r^2$ first; the last step is a square root.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~35s):** $\\frac{1}{3}r^2(4) = 300$ gives $r^2 = 225$ and $r = 15$.\n\n**The Full Solution:**\nStep 1: $\\frac{1}{3}\\pi r^2 h = 300\\pi$; divide by $\\pi$ to get $\\frac{1}{3}r^2(4) = 300$.\nStep 2: Multiply both sides by $3$: $4r^2 = 900$, so $r^2 = 225$.\nStep 3: $r = \\sqrt{225} = 15$ inches.\n\nVerification: $\\frac{1}{3}\\pi(225)(4) = 300\\pi$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($30$): gives the diameter instead of the radius.\n* Choice C ($75$): divides by the height and stops, using neither the $\\frac{1}{3}$ nor the square root.\n* Choice D ($225$): reports $r^2$ rather than $r$.\n\n**Test Day Takeaway:** Solve all the way down to $r^2$, then take the square root and check which one the question wants.",
      skills: ["volume-pyramid-cone"]
    },
    {
      id: 5,
      difficulty: "hard",
      question: "A cone-shaped cup has a radius of $3$ centimeters and a height of $10$ centimeters. Water is poured into the cup until the surface of the water is exactly halfway up the height of the cup. What is the volume, in cubic centimeters, of the water?",
      choices: [
        { id: "A", text: "$3.75\\pi$" },
        // distractor: scales the full volume by $\left(\frac{1}{2}\right)^2$ instead of $\left(\frac{1}{2}\right)^3$
        { id: "B", text: "$7.5\\pi$" },
        // distractor: halves the height but keeps the full radius, which is also half the full volume
        { id: "C", text: "$15\\pi$" },
        // distractor: gives the volume of the entire cup
        { id: "D", text: "$30\\pi$" }
      ],
      correctAnswer: "A",
      hint: "The surface of the water is a smaller circle than the rim of the cup.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~75s):** The water is a cone similar to the cup with factor $\\frac{1}{2}$, so it holds $\\frac{1}{8}(30\\pi) = 3.75\\pi$.\n\n**The Full Solution:**\nStep 1: The full cup holds $\\frac{1}{3}\\pi(3^2)(10) = 30\\pi$ cubic centimeters.\nStep 2: The water forms a smaller cone similar to the cup, so at half the height its radius is also halved, to $1.5$ centimeters.\nStep 3: $V = \\frac{1}{3}\\pi(1.5)^2(5) = \\frac{1}{3}\\pi(2.25)(5) = 3.75\\pi$ cubic centimeters.\n\nVerification: $\\left(\\frac{1}{2}\\right)^3(30\\pi) = \\frac{30\\pi}{8} = 3.75\\pi$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($7.5\\pi$): scales the full volume by $\\left(\\frac{1}{2}\\right)^2$ instead of $\\left(\\frac{1}{2}\\right)^3$.\n* Choice C ($15\\pi$): halves the height but keeps the full radius, which is also half the full volume.\n* Choice D ($30\\pi$): gives the volume of the entire cup.\n\n**Test Day Takeaway:** Filling a cone partway shrinks every dimension: half the height means half the radius and one eighth the volume.",
      skills: ["volume-pyramid-cone"]
    }
  ],

  // Section: Triangular Prism
  "Triangular Prism": [
    {
      id: 1,
      difficulty: "easy",
      question: "The base of a right prism is a right triangle with legs of length $12$ centimeters and $5$ centimeters. The height of the prism is $7$ centimeters. What is the volume, in cubic centimeters, of the prism?",
      diagram: { type: "rightTriangle", params: { sideLabels: ["12", "5", ""], rightAngleVertex: 1, figureNote: true } },
      choices: [
        // distractor: adds the three given lengths
        { id: "A", text: "$24$" },
        // distractor: halves the base area a second time
        { id: "B", text: "$105$" },
        { id: "C", text: "$210$" },
        // distractor: multiplies all three lengths without halving the triangular base
        { id: "D", text: "$420$" }
      ],
      correctAnswer: "C",
      hint: "Handle the triangle completely before the height of the prism enters.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~20s):** The base area is $\\frac{1}{2}(12)(5) = 30$, so $V = 30(7) = 210$.\n\n**The Full Solution:**\nStep 1: For any prism, $V = Bh$, where $B$ is the area of the base.\nStep 2: The base is a right triangle, so $B = \\frac{1}{2}(12)(5) = 30$ square centimeters.\nStep 3: $V = 30(7) = 210$ cubic centimeters.\n\nVerification: $\\frac{210}{7} = 30$, the area of the base. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($24$): adds the three given lengths.\n* Choice B ($105$): halves the base area a second time.\n* Choice D ($420$): multiplies all three lengths without halving the triangular base.\n\n**Test Day Takeaway:** Finish the base area as its own number, then multiply by the height of the prism.",
      skills: ["volume-prism"]
    },
    {
      id: 2,
      difficulty: "easy",
      question: "A right triangular prism is $9$ inches long. Each triangular face is a right triangle with legs of length $6$ inches and $8$ inches. What is the volume, in cubic inches, of the prism?",
      diagram: { type: "rightTriangle", params: { sideLabels: ["6", "8", ""], rightAngleVertex: 1, figureNote: true } },
      choices: [
        // distractor: gives the area of a triangular face and stops
        { id: "A", text: "$24$" },
        // distractor: divides by $2$ a second time
        { id: "B", text: "$108$" },
        { id: "C", text: "$216$" },
        // distractor: omits the $\frac{1}{2}$ that the triangular face requires
        { id: "D", text: "$432$" }
      ],
      correctAnswer: "C",
      hint: "The two legs of a right triangle serve as its base and its height.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~20s):** Each triangular face has area $\\frac{1}{2}(6)(8) = 24$, so $V = 24(9) = 216$.\n\n**The Full Solution:**\nStep 1: The face is a right triangle, so its legs act as base and height: $B = \\frac{1}{2}(6)(8) = 24$ square inches.\nStep 2: The length of the prism, $9$ inches, is the distance between the two triangular faces.\nStep 3: $V = 24(9) = 216$ cubic inches.\n\nVerification: $\\frac{216}{24} = 9$, the length of the prism. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($24$): gives the area of a triangular face and stops.\n* Choice B ($108$): divides by $2$ a second time.\n* Choice D ($432$): omits the $\\frac{1}{2}$ that the triangular face requires.\n\n**Test Day Takeaway:** For a prism resting on a side, the height in $V = Bh$ is the distance between the two identical faces.",
      skills: ["volume-prism"]
    },
    {
      id: 3,
      difficulty: "medium",
      question: "A right triangular prism has a volume of $360$ cubic centimeters and a length of $15$ centimeters. Its triangular base is a right triangle with one leg measuring $8$ centimeters. What is the length, in centimeters, of the other leg?",
      diagram: { type: "rightTriangle", params: { sideLabels: ["8", "", ""], rightAngleVertex: 1, figureNote: true } },
      choices: [
        // distractor: divides the base area by $8$ but never doubles it first
        { id: "A", text: "$3$" },
        { id: "B", text: "$6$" },
        // distractor: gives the area of the triangular base rather than a leg
        { id: "C", text: "$24$" },
        // distractor: doubles the base area but never divides by $8$
        { id: "D", text: "$48$" }
      ],
      correctAnswer: "B",
      hint: "Recover the area of the triangular face before touching the legs.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~45s):** The base area is $\\frac{360}{15} = 24$, so $\\frac{1}{2}(8)L = 24$ and $L = 6$.\n\n**The Full Solution:**\nStep 1: $V = Bh$ gives $360 = B(15)$, so the base area is $B = 24$ square centimeters.\nStep 2: The base is a right triangle with legs $8$ and $L$: $\\frac{1}{2}(8)L = 24$.\nStep 3: That is $4L = 24$, so $L = 6$ centimeters.\n\nVerification: $\\frac{1}{2}(8)(6)(15) = 24(15) = 360$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($3$): divides the base area by $8$ but never doubles it first.\n* Choice C ($24$): gives the area of the triangular base rather than a leg.\n* Choice D ($48$): doubles the base area but never divides by $8$.\n\n**Test Day Takeaway:** Take the prism apart in the order it was built: volume to base area, then base area to the missing length.",
      skills: ["volume-prism"]
    },
    {
      id: 4,
      difficulty: "medium",
      question: "A right prism has a height of $10$ centimeters, and its base is an equilateral triangle with side length $6$ centimeters. The area of an equilateral triangle with side length $s$ is $\\frac{s^2\\sqrt{3}}{4}$. What is the volume, in cubic centimeters, of the prism?",
      diagram: { type: "triangleWithAngles", params: { angleLabels: ["60°", "60°", "60°"], figureNote: true } },
      choices: [
        // distractor: multiplies by $\frac{1}{3}$, as if the solid were a pyramid
        { id: "A", text: "$30\\sqrt{3}$" },
        { id: "B", text: "$90\\sqrt{3}$" },
        // distractor: divides $s^2\sqrt{3}$ by $2$ instead of by $4$
        { id: "C", text: "$180\\sqrt{3}$" },
        // distractor: omits the division by $4$ in the base-area formula
        { id: "D", text: "$360\\sqrt{3}$" }
      ],
      correctAnswer: "B",
      hint: "Evaluate the given base-area formula at $s = 6$ before anything else.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~45s):** $B = \\frac{36\\sqrt{3}}{4} = 9\\sqrt{3}$, so $V = 9\\sqrt{3}(10) = 90\\sqrt{3}$.\n\n**The Full Solution:**\nStep 1: Evaluate the base area at $s = 6$: $B = \\frac{6^2\\sqrt{3}}{4} = \\frac{36\\sqrt{3}}{4} = 9\\sqrt{3}$ square centimeters.\nStep 2: For a prism, $V = Bh$, and here $h = 10$ centimeters.\nStep 3: $V = 9\\sqrt{3}(10) = 90\\sqrt{3}$ cubic centimeters.\n\nVerification: $9\\sqrt{3} \\approx 15.6$, and $15.6(10) \\approx 156$, which matches $90\\sqrt{3} \\approx 155.9$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($30\\sqrt{3}$): multiplies by $\\frac{1}{3}$, as if the solid were a pyramid.\n* Choice C ($180\\sqrt{3}$): divides $s^2\\sqrt{3}$ by $2$ instead of by $4$.\n* Choice D ($360\\sqrt{3}$): omits the division by $4$ in the base-area formula.\n\n**Test Day Takeaway:** The prism formula never changes: get the base area exactly, then multiply by the height once.",
      skills: ["volume-prism"]
    },
    {
      id: 5,
      difficulty: "hard",
      question: "A concrete block is a right rectangular prism measuring $10$ inches by $6$ inches by $4$ inches. A groove is cut straight through the block along the $10$-inch dimension, and the cross section of the groove is a right triangle with legs of length $6$ inches and $2$ inches. What is the volume, in cubic inches, of the block that remains?",
      diagram: { type: "rightTriangle", params: { sideLabels: ["6", "2", ""], rightAngleVertex: 1, figureNote: true } },
      choices: [
        // distractor: gives the volume of the groove instead of what is left of the block
        { id: "A", text: "$60$" },
        // distractor: treats the groove as a rectangular prism, subtracting $6 \cdot 2 \cdot 10$
        { id: "B", text: "$120$" },
        { id: "C", text: "$180$" },
        // distractor: subtracts the cross-sectional area, $6$, rather than the volume of the groove
        { id: "D", text: "$234$" }
      ],
      correctAnswer: "C",
      hint: "Find the whole block and the groove as two separate volumes.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~75s):** $240 - \\frac{1}{2}(6)(2)(10) = 240 - 60 = 180$.\n\n**The Full Solution:**\nStep 1: The uncut block has volume $10(6)(4) = 240$ cubic inches.\nStep 2: The groove is itself a prism: its triangular cross section has area $\\frac{1}{2}(6)(2) = 6$ square inches and it runs $10$ inches, so its volume is $6(10) = 60$ cubic inches.\nStep 3: The remaining volume is $240 - 60 = 180$ cubic inches.\n\nVerification: $180 + 60 = 240$, the volume of the uncut block. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($60$): gives the volume of the groove instead of what is left of the block.\n* Choice B ($120$): treats the groove as a rectangular prism, subtracting $6 \\cdot 2 \\cdot 10$.\n* Choice D ($234$): subtracts the cross-sectional area, $6$, rather than the volume of the groove.\n\n**Test Day Takeaway:** In a composite solid, finish each piece as a complete volume before adding or subtracting — never mix an area with a volume.",
      skills: ["volume-prism"]
    }
  ]
};
