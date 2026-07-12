export const radiansDegreesLessonTabs = {
  "1": {
    "moduleId": "radians-degrees",
    "title": "Radians & Degrees",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "A radian measures an angle by arc length; a full turn is $2\\pi$ radians, which reduces to the one identity every conversion needs, $180^\\circ = \\pi$ radians.",
        "blocks": [
          {
            "type": "heading",
            "content": "Radians & Degrees"
          },
          {
            "type": "text",
            "content": "A **radian** measures an angle by arc length. Lay the radius along the circle's edge; the angle that arc subtends at the center is exactly $1$ radian. Because the full circumference is $2\\pi r$, wrapping the radius around the circle takes $2\\pi$ of those arcs, so a full turn is $2\\pi$ radians. That fact, $360^\\circ = 2\\pi$ radians, reduces to the only identity you truly need: $180^\\circ = \\pi$ radians. It is not an arbitrary constant — it is the circumference over the radius, $\\frac{2\\pi r}{r}=2\\pi$, for a whole circle."
          },
          {
            "type": "text",
            "content": "Every conversion is one multiplication by a fraction equal to $1$. Degrees to radians: multiply by $\\dfrac{\\pi}{180^\\circ}$. Radians to degrees: multiply by $\\dfrac{180^\\circ}{\\pi}$. For example $150^\\circ \\times \\dfrac{\\pi}{180^\\circ}=\\dfrac{150\\pi}{180}=\\dfrac{5\\pi}{6}$, and in reverse $\\dfrac{\\pi}{3}\\times\\dfrac{180^\\circ}{\\pi}=60^\\circ$. Reduce the fraction to lowest terms, and reread the question — some ask for the reduced fraction, others for a quantity built from it."
          },
          {
            "type": "callout",
            "variant": "success",
            "title": "Adding angles, then converting",
            "content": "If angle $r = \\frac{2\\pi}{3}$ radians and angle $t$ is $\\frac{5\\pi}{12}$ radians larger, work in one unit throughout: $t = \\frac{2\\pi}{3} + \\frac{5\\pi}{12} = \\frac{8\\pi}{12} + \\frac{5\\pi}{12} = \\frac{13\\pi}{12}$. Convert only at the end: $\\frac{13\\pi}{12}\\times\\frac{180^\\circ}{\\pi} = 195^\\circ$. Converting each piece separately invites arithmetic slips — combine first, convert once."
          },
          {
            "type": "formulaGrid",
            "items": [
              { "label": "Master identity", "formula": "$180^\\circ=\\pi\\ \\text{rad}$" },
              { "label": "Degrees to radians", "formula": "$\\theta_{\\text{rad}}=\\theta_{\\text{deg}}\\cdot\\dfrac{\\pi}{180}$" },
              { "label": "Radians to degrees", "formula": "$\\theta_{\\text{deg}}=\\theta_{\\text{rad}}\\cdot\\dfrac{180}{\\pi}$" },
              { "label": "One radian", "formula": "$1\\ \\text{rad}\\approx 57.3^\\circ$" }
            ]
          },
          {
            "type": "heading",
            "content": "The Common Angles and the Unit Circle"
          },
          {
            "type": "text",
            "content": "A handful of landmark angles cover most questions; read each denominator as the fraction of $180^\\circ$ it represents: $30^\\circ=\\frac{\\pi}{6}$, $45^\\circ=\\frac{\\pi}{4}$, $60^\\circ=\\frac{\\pi}{3}$, $90^\\circ=\\frac{\\pi}{2}$, and $180^\\circ=\\pi$. The denominator names the slice: a bigger denominator means a smaller angle, so $\\frac{\\pi}{6}$ is the smallest of the four and $\\frac{\\pi}{2}$ the largest. On the unit circle a point at angle $\\theta$ has coordinates $(\\cos\\theta,\\ \\sin\\theta)$, so the $x$-coordinate is the cosine and the $y$-coordinate is the sine, and every such point sits at distance $1$ from the origin. The quadrant fixes the signs: in Quadrant I both are positive, in Quadrant II ($\\frac{\\pi}{2}$ to $\\pi$) cosine is negative, in Quadrant III ($\\pi$ to $\\frac{3\\pi}{2}$) both are negative, and in Quadrant IV sine is negative. Because sine and cosine are coordinates on a unit-radius circle, neither can exceed $1$ in size — any value beyond that is automatically wrong. Worth knowing cold: $\\sin\\frac{\\pi}{6}=\\frac{1}{2}$, $\\cos\\frac{\\pi}{3}=\\frac{1}{2}$, and $\\sin\\frac{\\pi}{2}=1$."
          },
          {
            "type": "table",
            "title": "Landmark angles",
            "headers": ["Degrees", "Radians", "$\\sin$", "$\\cos$"],
            "rows": [
              ["$0^\\circ$", "$0$", "$0$", "$1$"],
              ["$30^\\circ$", "$\\frac{\\pi}{6}$", "$\\frac{1}{2}$", "$\\frac{\\sqrt{3}}{2}$"],
              ["$45^\\circ$", "$\\frac{\\pi}{4}$", "$\\frac{\\sqrt{2}}{2}$", "$\\frac{\\sqrt{2}}{2}$"],
              ["$60^\\circ$", "$\\frac{\\pi}{3}$", "$\\frac{\\sqrt{3}}{2}$", "$\\frac{1}{2}$"],
              ["$90^\\circ$", "$\\frac{\\pi}{2}$", "$1$", "$0$"]
            ]
          },
          {
            "type": "heading",
            "content": "Arc Length and Sector Area"
          },
          {
            "type": "text",
            "content": "Radians make circle measurements clean. When the central angle $\\theta$ is in **radians**, arc length is $s=r\\theta$ and sector area is $A=\\frac{1}{2}r^2\\theta$. When the angle is in **degrees**, use the fraction-of-the-circle forms instead: arc length $=\\dfrac{\\theta}{360^\\circ}\\cdot 2\\pi r$ and sector area $=\\dfrac{\\theta}{360^\\circ}\\cdot\\pi r^2$, where $\\dfrac{\\theta}{360^\\circ}$ is simply the slice of the whole circle the angle covers. The two systems agree — a $\\frac{\\pi}{4}$-radian ($45^\\circ$) arc on radius $2$ is $s=2\\cdot\\frac{\\pi}{4}=\\frac{\\pi}{2}$, the same as $\\frac{45}{360}\\cdot 2\\pi(2)=\\frac{\\pi}{2}$. A $72^\\circ$ arc on radius $10$ is $\\frac{72}{360}=\\frac{1}{5}$ of the circumference $20\\pi$, so $s=4\\pi$. Check the angle's units before choosing a formula: the fastest way to a wrong answer is dropping a degree measure straight into $s=r\\theta$ or $A=\\frac{1}{2}r^2\\theta$."
          },
          {
            "type": "trapCard",
            "title": "Feeding degrees into a radian formula",
            "wrong": "For a $60^\\circ$ sector on radius $6$, the arc length is $s=r\\theta=6\\cdot 60=360$.",
            "correction": "The formula $s=r\\theta$ requires $\\theta$ in radians. Convert first: $60^\\circ=\\frac{\\pi}{3}$, so $s=6\\cdot\\frac{\\pi}{3}=2\\pi$. Equivalently $\\frac{60}{360}\\cdot 2\\pi(6)=2\\pi$."
          },
          {
            "type": "heading",
            "content": "The Desmos Mode Trap"
          },
          {
            "type": "text",
            "content": "The built-in Desmos calculator defaults to **radian mode**, so $\\sin(90)$ returns the sine of $90$ radians ($\\approx 0.894$), not the $1$ you expect from $90^\\circ$. Set the mode to match the units before evaluating — click the wrench, or convert the angle to radians yourself so the answer never depends on a setting. Radian mode is convenient for large angles: since $\\tan$ repeats every $\\pi$, $\\tan\\!\\left(\\frac{92\\pi}{3}\\right)=\\tan\\!\\left(\\frac{92\\pi}{3}-30\\pi\\right)=\\tan\\!\\left(\\frac{2\\pi}{3}\\right)=-\\sqrt{3}$. Lock the unit first and convert once; a radian answer larger than about $7$ where you expected a fraction of a turn signals a conversion in the wrong direction."
          },
          {
            "type": "keyInsight",
            "content": "Anchor everything on $180^\\circ = \\pi$ radians. From that one bridge you can convert either direction, place any landmark angle on the unit circle, and pick the right circle formula — $s=r\\theta$ and $A=\\frac{1}{2}r^2\\theta$ when the angle is in radians, or the $\\frac{\\theta}{360^\\circ}$ fraction of $2\\pi r$ and $\\pi r^2$ when it is in degrees. Confirm the angle's units and the calculator's mode before you compute, and the two systems stop competing and start agreeing."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Two worked examples and three checkpoint questions spanning conversion, arc length, sector area, quadrants, and the Desmos-mode trap.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "Convert $150^\\circ$ to radians, then find the length of the arc it subtends on a circle of radius $6$.",
            "steps": [
              {
                "label": "Convert the angle",
                "content": "$150^\\circ\\times\\dfrac{\\pi}{180^\\circ}=\\dfrac{150\\pi}{180}=\\dfrac{5\\pi}{6}$."
              },
              {
                "label": "Use the radian arc formula",
                "content": "$s=r\\theta=6\\cdot\\dfrac{5\\pi}{6}=5\\pi$."
              },
              {
                "label": "Check with the degree form",
                "content": "$\\dfrac{150}{360}\\cdot 2\\pi(6)=\\dfrac{5}{12}\\cdot 12\\pi=5\\pi$. $\\checkmark$"
              }
            ]
          },
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "A sprinkler waters a circular sector of radius $15$ feet through a central angle of $120^\\circ$. What area does it cover?",
            "steps": [
              {
                "label": "Find the fraction of the circle",
                "content": "$120^\\circ$ is $\\dfrac{120}{360}=\\dfrac{1}{3}$ of a full turn."
              },
              {
                "label": "Take that share of the area",
                "content": "The full area is $\\pi(15)^2=225\\pi$, so the sector is $\\dfrac{1}{3}(225\\pi)=75\\pi$ square feet."
              },
              {
                "label": "Radian check",
                "content": "$120^\\circ=\\frac{2\\pi}{3}$, and $A=\\frac{1}{2}r^2\\theta=\\frac{1}{2}(225)\\cdot\\frac{2\\pi}{3}=75\\pi$. $\\checkmark$"
              }
            ]
          },
          {
            "type": "example",
            "difficulty": "Hard",
            "problem": "An arc on a circle of radius $9$ has length $6\\pi$. What is the measure of its central angle, in both radians and degrees?",
            "steps": [
              {
                "label": "Solve the radian arc formula for the angle",
                "content": "From $s=r\\theta$, $\\theta=\\dfrac{s}{r}=\\dfrac{6\\pi}{9}=\\dfrac{2\\pi}{3}$ radians."
              },
              {
                "label": "Convert to degrees",
                "content": "$\\dfrac{2\\pi}{3}\\times\\dfrac{180^\\circ}{\\pi}=\\dfrac{2\\cdot 180}{3}=120^\\circ$."
              },
              {
                "label": "Check",
                "content": "A $120^\\circ$ arc is $\\frac{1}{3}$ of the circle; the circumference is $2\\pi(9)=18\\pi$, and $\\frac{1}{3}(18\\pi)=6\\pi$. $\\checkmark$"
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "Convert $\\dfrac{7\\pi}{6}$ radians to degrees and name the quadrant.",
            "answer": "$\\dfrac{7\\pi}{6}\\times\\dfrac{180^\\circ}{\\pi}=\\dfrac{7\\cdot 180}{6}=210^\\circ$. Since $180^\\circ<210^\\circ<270^\\circ$, the angle is in Quadrant III."
          },
          {
            "type": "checkpointQuestion",
            "question": "The Desmos calculator is in radian mode. You type $\\sin(30)$ expecting $\\sin(30^\\circ)$. Why is the result wrong, and what is $\\sin(30^\\circ)$?",
            "answer": "In radian mode $\\sin(30)$ is the sine of $30$ radians ($\\approx -0.988$), not of $30^\\circ$. Either switch to degree mode or enter $\\sin(\\pi/6)$. The exact value is $\\sin(30^\\circ)=\\dfrac{1}{2}$."
          },
          {
            "type": "checkpointQuestion",
            "question": "A pendulum of length $2$ meters swings through $\\dfrac{\\pi}{4}$ radians. How far does its tip travel?",
            "answer": "The angle is already in radians, so $s=r\\theta=2\\cdot\\dfrac{\\pi}{4}=\\dfrac{\\pi}{2}$ meters. Degree check: $\\frac{\\pi}{4}=45^\\circ$, and $\\frac{45}{360}\\cdot 2\\pi(2)=\\frac{\\pi}{2}$. $\\checkmark$"
          }
        ]
      }
    }
  },
  "2": {
    "moduleId": "radians-degrees",
    "title": "Simple Converting Radians to Degrees Example",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "Converting a radian value to degrees requires one multiplication by 180/π. When the radian expression contains π in the numerator, π cancels and the problem reduces to a simple fraction times 180.",
        "blocks": [
          {
            "type": "heading",
            "content": "Simple Converting Radians to Degrees Example"
          },
          {
            "type": "text",
            "content": "Degrees and radians are two ways to measure angles. $180° = \\pi$ radians. This one conversion factor is all you need."
          },
          {
            "type": "text",
            "content": "As above, add the radian measures first, then convert once: $t = \\frac{2\\pi}{3} + \\frac{5\\pi}{12} = \\frac{13\\pi}{12}$ radians, and $\\frac{13\\pi}{12} \\times \\frac{180}{\\pi} = 195°$."
          },
          {
            "type": "formula",
            "label": "Simple Converting Radians to Degrees Example — Core Rule",
            "content": "$$\\pi\\ \\text{rad} = 180^\\circ,\\quad s = r\\theta\\ (\\theta\\ \\text{in radians})$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "callout",
            "variant": "success",
            "title": "Quick Example",
            "content": "Convert $120°$ to radians: $120 \\times \\frac{\\pi}{180} = \\frac{2\\pi}{3}$."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "Students multiply by $\\frac{180}{\\pi}$ when they should multiply by $\\frac{\\pi}{180}$ (converting degrees to radians), or vice versa. Check your answer: degrees should be a \"normal\" number (30, 45, 60, 90, etc.). Radians should involve $\\pi$ and be a fraction of $\\pi$. If your radian answer is $> 7$, you probably converted the wrong direction."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Lock unit first (degrees or radians), then convert once. Use the correction rule above as your final verification step before selecting an answer."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Simple Converting Radians to Degrees Example\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Easy",
            "problem": "Convert $\\frac{\\pi}{6}$ radians to degrees.",
            "steps": [
              {
                "label": "Multiply",
                "content": "$\\frac{\\pi}{6} \\times \\frac{180}{\\pi}$"
              },
              {
                "label": "Cancel $\\pi$",
                "content": "$\\frac{180}{6}$"
              },
              {
                "label": "Answer",
                "content": "$30°$"
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "Convert $\\frac{\\pi}{6}$ radians to degrees.",
            "answer": "$30°$"
          }
        ]
      }
    }
  },
  "3": {
    "moduleId": "radians-degrees",
    "title": "Using DESMOS Calculator in Radian Mode Example",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "The DESMOS graphing calculator on the Digital SAT defaults to radian mode, where trig functions interpret inputs as radian values — entering sin(π/6) returns 0.5 because π/6 radians equals 30°.",
        "blocks": [
          {
            "type": "heading",
            "content": "Using DESMOS Calculator in Radian Mode Example"
          },
          {
            "type": "text",
            "content": "Using DESMOS Calculator in Radian Mode Example (Converting Angles) is a foundational skill on the SAT Math section. Understanding the underlying concept — not just memorizing formulas — allows you to recognize the pattern in seconds, regardless of how the question is worded."
          },
          {
            "type": "text",
            "content": "On the SAT, Using DESMOS Calculator in Radian Mode Example (Converting Angles) questions test your ability to translate wording into math. The key is a two-step decision process: first, identify exactly what the question is asking (value, relationship, count, or behavior). Second, choose the representation — algebraic, graphical, or numerical — that exposes the answer most directly. Lock the unit first (degrees or radians), then convert once. For example, to find $\\tan\\left(\\frac{92\\pi}{3}\\right)$, note the angle is in radians. Since $\\tan$ has period $\\pi$, subtract multiples of $\\pi$: $\\frac{92\\pi}{3} - 30\\pi = \\frac{2\\pi}{3}$, so $\\tan\\left(\\frac{92\\pi}{3}\\right) = \\tan\\left(\\frac{2\\pi}{3}\\right) = -\\sqrt{3}$."
          },
          {
            "type": "formula",
            "label": "Using DESMOS Calculator in Radian Mode Example — Core Rule",
            "content": "$$\\pi\\ \\text{rad} = 180^\\circ,\\quad s = r\\theta\\ (\\theta\\ \\text{in radians})$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "On the SAT, the most common mistake in Using DESMOS Calculator in Radian Mode Example (Converting Angles) problems is degree/radian conversion inverted. This happens because students rush through the setup phase, reading the question quickly and making assumptions about what is being asked. Before computing, re-read the question and underline the exact quantity it asks for. After solving, verify that your answer matches the requested form (value, equation, expression, or description). This two-second check eliminates the most common trap."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Lock unit first (degrees or radians), then convert once. On test day, spend the first 5 seconds on recognition (what type of problem is this?) and the last 5 seconds on verification (does my answer match what was asked?)."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Using DESMOS Calculator in Radian Mode Example\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Easy",
            "problem": "Evaluate $\\sin\\!\\left(\\frac{\\pi}{6}\\right)$ using DESMOS.",
            "steps": [
              {
                "label": "Set mode",
                "content": "Click the wrench icon → confirm **Radians** is selected."
              },
              {
                "label": "Enter",
                "content": "Type $\\sin(\\pi/6)$."
              },
              {
                "label": "Read output",
                "content": "DESMOS displays $0.5$."
              },
              {
                "label": "Exact value",
                "content": "$\\sin\\!\\left(\\frac{\\pi}{6}\\right) = \\frac{1}{2}$"
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "Evaluate $\\sin\\!\\left(\\frac{\\pi}{6}\\right)$ using DESMOS.",
            "answer": "$\\sin\\!\\left(\\frac{\\pi}{6}\\right) = \\frac{1}{2}$"
          }
        ]
      }
    }
  },
  "4": {
    "moduleId": "radians-degrees",
    "title": "Using DESMOS Calculator in Degree Mode Example",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "Switching DESMOS to degree mode causes trig functions to interpret inputs as degrees — typing sin(30) returns 0.5 without requiring a prior conversion to radians.",
        "blocks": [
          {
            "type": "heading",
            "content": "Using DESMOS Calculator in Degree Mode Example"
          },
          {
            "type": "text",
            "content": "Using DESMOS Calculator in Degree Mode Example (Converting Angles) is a foundational skill on the SAT Math section. Understanding the underlying concept — not just memorizing formulas — allows you to recognize the pattern in seconds, regardless of how the question is worded."
          },
          {
            "type": "text",
            "content": "The same evaluation with a calculator set to radian mode: $\\tan\\left(\\frac{92\\pi}{3}\\right)$. Because $\\tan$ repeats every $\\pi$, reduce $\\frac{92\\pi}{3}$ by $30\\pi$ to $\\frac{2\\pi}{3}$, giving $\\tan\\left(\\frac{2\\pi}{3}\\right) = -\\sqrt{3}$. Always set the calculator's angle mode to match the units before evaluating."
          },
          {
            "type": "formula",
            "label": "Using DESMOS Calculator in Degree Mode Example — Core Rule",
            "content": "$$\\pi\\ \\text{rad} = 180^\\circ,\\quad s = r\\theta\\ (\\theta\\ \\text{in radians})$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "On the SAT, the most common mistake in Using DESMOS Calculator in Degree Mode Example (Converting Angles) problems is arc length formula mismatch. This happens because students rush through the setup phase, reading the question quickly and making assumptions about what is being asked. Before computing, re-read the question and underline the exact quantity it asks for. After solving, verify that your answer matches the requested form (value, equation, expression, or description). This two-second check eliminates the most common trap."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Lock unit first (degrees or radians), then convert once. On test day, spend the first 5 seconds on recognition (what type of problem is this?) and the last 5 seconds on verification (does my answer match what was asked?)."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Using DESMOS Calculator in Degree Mode Example\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Easy",
            "problem": "Evaluate $\\sin(30°)$ using DESMOS.",
            "steps": [
              {
                "label": "Set mode",
                "content": "Click the wrench icon → select **Degrees**."
              },
              {
                "label": "Enter",
                "content": "Type $\\sin(30)$."
              },
              {
                "label": "Read output",
                "content": "DESMOS displays $0.5$."
              },
              {
                "label": "Exact value",
                "content": "$\\sin(30°) = \\frac{1}{2}$"
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "Evaluate $\\sin(30°)$ using DESMOS.",
            "answer": "$\\sin(30°) = \\frac{1}{2}$"
          }
        ]
      }
    }
  },
  "5": {
    "moduleId": "radians-degrees",
    "title": "Evaluating on the Unit Circle",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "On a circle of radius $1$, a point at angle $\\theta$ has coordinates $(\\cos\\theta,\\ \\sin\\theta)$, so the $x$-coordinate is the cosine and the $y$-coordinate is the sine — magnitude comes from the reference angle, sign comes from the quadrant.",
        "blocks": [
          {
            "type": "heading",
            "content": "Evaluating on the Unit Circle"
          },
          {
            "type": "text",
            "content": "Right-triangle trig only defines $\\sin$, $\\cos$, and $\\tan$ for angles strictly between $0^\\circ$ and $90^\\circ$. The **unit circle** — a circle of radius $1$ centered at the origin — completes the definition. Put the angle $\\theta$ in standard position: vertex at the origin, initial side along the positive $x$-axis. Where the terminal side crosses the circle, the point is $(\\cos\\theta,\\ \\sin\\theta)$. So the $x$-coordinate **is** the cosine, the $y$-coordinate **is** the sine, and $\\tan\\theta=\\dfrac{\\sin\\theta}{\\cos\\theta}=\\dfrac{y}{x}$. For an acute angle this reproduces the triangle ratios exactly; for every other angle, it becomes the definition."
          },
          {
            "type": "formula",
            "label": "Coordinates on the circle",
            "content": "$$\\cos\\theta = x,\\qquad \\sin\\theta = y,\\qquad \\tan\\theta=\\frac{y}{x}$$",
            "note": "On the unit circle $r=1$. For a point at any radius, $\\sin\\theta=\\frac{y}{r}$, $\\cos\\theta=\\frac{x}{r}$, where $r=\\sqrt{x^2+y^2}$ is always positive."
          },
          {
            "type": "text",
            "content": "**Magnitude and sign are two separate computations.** The *size* of a value comes from the **reference angle** — the acute angle between the terminal side and the $x$-axis (always the $x$-axis, never the $y$-axis) — evaluated with the special-triangle ratios. The *sign* comes from the **quadrant**, read straight off the coordinates: $\\cos$ takes the sign of $x$, $\\sin$ takes the sign of $y$, $\\tan$ takes the sign of their quotient. No mnemonic required — the coordinates are the rule. And because $|x|\\le 1$ and $|y|\\le 1$ on a unit-radius circle, neither $\\sin$ nor $\\cos$ can ever exceed $1$ in size — any value beyond that is automatically wrong."
          },
          {
            "type": "callout",
            "variant": "success",
            "title": "The five-step evaluation loop",
            "content": "1) **Reduce** by full turns ($2\\pi$ in radians, $360^\\circ$ in degrees) until $\\theta$ lands within one revolution. 2) **Locate the quadrant**. 3) **Form the reference angle** to the $x$-axis. 4) **Get the magnitude** from the special triangle. 5) **Attach the sign last**, as a separate pass: which coordinate is negative here? Doing signs last, in writing, is the entire fix for the classic $\\pm$ sign-flip trap."
          },
          {
            "type": "table",
            "title": "Common angles on the unit circle",
            "headers": ["Radians", "Degrees", "Point $(\\cos\\theta,\\ \\sin\\theta)$", "$\\tan\\theta$"],
            "rows": [
              ["$0$", "$0^\\circ$", "$(1,\\ 0)$", "$0$"],
              ["$\\frac{\\pi}{6}$", "$30^\\circ$", "$\\left(\\frac{\\sqrt{3}}{2},\\ \\frac{1}{2}\\right)$", "$\\frac{\\sqrt{3}}{3}$"],
              ["$\\frac{\\pi}{4}$", "$45^\\circ$", "$\\left(\\frac{\\sqrt{2}}{2},\\ \\frac{\\sqrt{2}}{2}\\right)$", "$1$"],
              ["$\\frac{\\pi}{3}$", "$60^\\circ$", "$\\left(\\frac{1}{2},\\ \\frac{\\sqrt{3}}{2}\\right)$", "$\\sqrt{3}$"],
              ["$\\frac{\\pi}{2}$", "$90^\\circ$", "$(0,\\ 1)$", "undefined"]
            ]
          },
          {
            "type": "text",
            "content": "Every other landmark is one of these four first-quadrant shapes with a sign attached. For instance $\\frac{2\\pi}{3}=120^\\circ$ sits in Quadrant II with reference angle $\\frac{\\pi}{3}$, so its point is $\\left(-\\frac{1}{2},\\ \\frac{\\sqrt{3}}{2}\\right)$ — the $\\frac{\\pi}{3}$ coordinates with the $x$ made negative. Likewise $\\frac{7\\pi}{6}=210^\\circ$ is in Quadrant III with reference angle $\\frac{\\pi}{6}$, giving $\\left(-\\frac{\\sqrt{3}}{2},\\ -\\frac{1}{2}\\right)$. The axis points are exact: $\\pi\\to(-1,\\ 0)$ and $\\frac{3\\pi}{2}\\to(0,\\ -1)$."
          },
          {
            "type": "trapCard",
            "title": "Reducing by a half turn instead of a full turn",
            "wrong": "To evaluate $\\sin\\!\\left(\\frac{9\\pi}{4}\\right)$, subtract $\\pi$: $\\frac{9\\pi}{4}-\\pi=\\frac{5\\pi}{4}$, so $\\sin\\!\\left(\\frac{9\\pi}{4}\\right)=\\sin\\!\\left(\\frac{5\\pi}{4}\\right)=-\\frac{\\sqrt{2}}{2}$.",
            "correction": "Coterminal angles differ by full turns of $2\\pi$, not half turns of $\\pi$. A half-turn reduction lands in the opposite quadrant and flips the sign. Correctly, $\\frac{9\\pi}{4}-2\\pi=\\frac{\\pi}{4}$, so $\\sin\\!\\left(\\frac{9\\pi}{4}\\right)=\\sin\\!\\left(\\frac{\\pi}{4}\\right)=\\frac{\\sqrt{2}}{2}$."
          },
          {
            "type": "text",
            "content": "One more sign trap: when a terminal point is given off the unit circle, $r=\\sqrt{x^2+y^2}$ is a distance, so it is **always positive**. Writing $r$ negative for a point in a \"negative\" quadrant corrupts both $\\sin$ and $\\cos$ — the signs belong to $x$ and $y$ alone."
          },
          {
            "type": "keyInsight",
            "content": "A point at angle $\\theta$ is $(\\cos\\theta,\\ \\sin\\theta)$ on the unit circle. Reduce by full turns, read the quadrant, take the magnitude from the reference triangle, and attach the sign last from the coordinates. When a terminal point is handed to you, $r=\\sqrt{x^2+y^2}$ is always positive and the signs come for free inside $x$ and $y$."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Worked examples covering evaluation in a non-first quadrant and reading trig values off a terminal point, plus checkpoint questions on sign, reference angles, and multi-turn reduction.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "Evaluate $\\cos\\!\\left(\\dfrac{2\\pi}{3}\\right)$ and $\\sin\\!\\left(\\dfrac{2\\pi}{3}\\right)$ exactly.",
            "steps": [
              {
                "label": "Locate the quadrant",
                "content": "$\\frac{2\\pi}{3}=120^\\circ$ is between $\\frac{\\pi}{2}$ and $\\pi$, so it is in Quadrant II, where $x<0$ and $y>0$."
              },
              {
                "label": "Reference angle and magnitude",
                "content": "Reference angle $=\\pi-\\frac{2\\pi}{3}=\\frac{\\pi}{3}$. From the $\\frac{\\pi}{3}$ point $\\left(\\frac{1}{2},\\frac{\\sqrt{3}}{2}\\right)$ the magnitudes are $\\frac{1}{2}$ and $\\frac{\\sqrt{3}}{2}$."
              },
              {
                "label": "Attach the signs",
                "content": "In Quadrant II cosine is negative and sine is positive: $\\cos\\!\\left(\\frac{2\\pi}{3}\\right)=-\\frac{1}{2}$ and $\\sin\\!\\left(\\frac{2\\pi}{3}\\right)=\\frac{\\sqrt{3}}{2}$."
              }
            ]
          },
          {
            "type": "example",
            "difficulty": "Hard",
            "problem": "The terminal side of $\\theta$ passes through the point $(-3,\\ 4)$. Find $\\sin\\theta$, $\\cos\\theta$, and $\\tan\\theta$.",
            "steps": [
              {
                "label": "Compute $r$ (always positive)",
                "content": "$r=\\sqrt{(-3)^2+4^2}=\\sqrt{9+16}=\\sqrt{25}=5$."
              },
              {
                "label": "Read the ratios",
                "content": "$\\sin\\theta=\\dfrac{y}{r}=\\dfrac{4}{5}$, $\\cos\\theta=\\dfrac{x}{r}=\\dfrac{-3}{5}$."
              },
              {
                "label": "Tangent from the coordinates",
                "content": "$\\tan\\theta=\\dfrac{y}{x}=\\dfrac{4}{-3}=-\\dfrac{4}{3}$. The point is in Quadrant II, matching $\\sin>0$, $\\cos<0$."
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "Without computing an exact value, state the sign of $\\cos\\!\\left(\\dfrac{5\\pi}{4}\\right)$ and explain why.",
            "answer": "$\\frac{5\\pi}{4}=225^\\circ$ is in Quadrant III, where $x<0$. Since $\\cos\\theta$ is the $x$-coordinate, $\\cos\\!\\left(\\frac{5\\pi}{4}\\right)$ is negative. (Its exact value is $-\\frac{\\sqrt{2}}{2}$.)"
          },
          {
            "type": "checkpointQuestion",
            "question": "Evaluate $\\sin\\!\\left(\\dfrac{13\\pi}{6}\\right)$ by first reducing to one revolution.",
            "answer": "$\\frac{13\\pi}{6}-2\\pi=\\frac{\\pi}{6}$, which is coterminal. Since $\\frac{\\pi}{6}=30^\\circ$ is in Quadrant I (sine positive), $\\sin\\!\\left(\\frac{13\\pi}{6}\\right)=\\sin\\!\\left(\\frac{\\pi}{6}\\right)=\\frac{1}{2}$."
          }
        ]
      }
    }
  }
};
