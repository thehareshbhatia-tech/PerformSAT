import React, { useState } from 'react';

const PerformSAT = () => {
  const [activeModule, setActiveModule] = useState(null);
  const [activeLesson, setActiveLesson] = useState(null);
  const [view, setView] = useState('modules'); // 'modules', 'list', 'lesson', or 'login'
  const [user, setUser] = useState(null); // null when logged out, { name, email } when logged in
  const [loginForm, setLoginForm] = useState({ email: '', password: '', name: '' });
  const [isSignUp, setIsSignUp] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [completedLessons, setCompletedLessons] = useState({}); // { lessonId: true }

  const markLessonComplete = (moduleId, lessonId) => {
    setCompletedLessons(prev => ({
      ...prev,
      [`${moduleId}-${lessonId}`]: true
    }));
  };

  const getModuleProgress = (moduleId, lessons) => {
    if (!lessons || lessons.length === 0) return 0;
    const completed = lessons.filter(l => completedLessons[`${moduleId}-${l.id}`]).length;
    return Math.round((completed / lessons.length) * 100);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!loginForm.email || !loginForm.password) {
      setLoginError('Please fill in all fields');
      return;
    }
    // Simulate login - in real app this would call an API
    const firstName = loginForm.email.split('@')[0].split('.')[0];
    const capitalizedName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
    setUser({ name: capitalizedName, email: loginForm.email });
    setView('modules');
    setLoginError('');
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    if (!loginForm.name || !loginForm.email || !loginForm.password) {
      setLoginError('Please fill in all fields');
      return;
    }
    setUser({ name: loginForm.name, email: loginForm.email });
    setView('modules');
    setLoginError('');
  };

  const handleLogout = () => {
    setUser(null);
    setLoginForm({ email: '', password: '', name: '' });
  };

  const modules = [
    {
      id: 'linear-equations',
      title: 'Linear Equations',
      description: 'Slope, intercepts, and graphing lines',
      lessonCount: 24
    },
    {
      id: 'functions',
      title: 'Functions',
      description: 'Function notation and graph interpretation',
      lessonCount: 10
    },
    {
      id: 'systems',
      title: 'System of Equations',
      description: 'Solving for multiple unknowns',
      lessonCount: 14
    },
    {
      id: 'transformations',
      title: 'Transformations',
      description: 'Shifting, stretching, and reflecting functions',
      lessonCount: 15
    },
    {
      id: 'exponents',
      title: 'Exponents & Exponential Functions',
      description: 'Exponent rules and growth/decay models',
      lessonCount: 12
    },
    {
      id: 'percents',
      title: 'Percents',
      description: 'Percent change and word problems',
      lessonCount: 17
    },
    {
      id: 'equivalent-expressions',
      title: 'Equivalent Expressions',
      description: 'Verifying equivalence with DESMOS',
      lessonCount: 3
    },
    {
      id: 'quadratics',
      title: 'Quadratics',
      description: 'Parabolas, factoring, and the quadratic formula',
      lessonCount: 27
    },
    {
      id: 'dimensional-analysis',
      title: 'Dimensional Analysis',
      description: 'Unit conversions and word problem setup',
      lessonCount: 5
    },
    {
      id: 'statistics',
      title: 'Statistics',
      description: 'Mean, median, standard deviation, and data analysis',
      lessonCount: 25
    },
    {
      id: 'radians-degrees',
      title: 'Radians & Degrees',
      description: 'Angle measure conversions',
      lessonCount: 4
    },
    {
      id: 'circles',
      title: 'Circles',
      description: 'Circle equations, arcs, and sectors',
      lessonCount: 33
    },
    {
      id: 'volume',
      title: 'Volume',
      description: '3D shapes and composite figures',
      lessonCount: 16
    },
    {
      id: 'triangles',
      title: 'Triangles',
      description: 'Pythagorean theorem and trigonometry',
      lessonCount: 35
    }
  ];

  const allLessons = {
    'linear-equations': [
      // Section: Fundamentals
      {
        id: 1,
        title: "Linear Equations",
        type: "lesson",
        duration: "5 min",
        section: "Fundamentals",
        hero: {
          tagline: "THE FOUNDATION",
          subtitle: "Everything starts with a straight line",
          gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
        },
        content: {
          blocks: [
            { type: "text", content: "A **linear equation** is an equation **whose graph is a straight line**." },
            { type: "text", content: "The word *linear* comes from *line* — meaning when you plot the **x values** of the equation and their corresponding **y values** on a coordinate plane, they **form a straight line**." },
            { type: "text", content: "The highest **degree** of a linear function is **1** ( x¹ )" },
            { type: "formula", label: "Slope-Intercept Form", content: "y = mx + b" },
            { type: "text", content: "The **two components** of **Slope-Intercept Form** are **m (slope)** and **b (y-intercept)**" }
          ]
        }
      },
      {
        id: 2,
        title: "What Is the Slope?",
        type: "lesson",
        duration: "6 min",
        section: "Fundamentals",
        hero: {
          tagline: "RISE OVER RUN",
          subtitle: "How steep is your line?",
          gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
        },
        content: {
          blocks: [
            { type: "text", content: "The **slope** of a linear equation tells you **how steep the line is** and **how the y-value changes** as the x-value increases." },
            { type: "text", content: "In other words, slope is ( the change in y ) over ( the change in x )" },
            { type: "list", items: ["It represents the **rate of change**"] },
            { type: "example", title: "Example", content: "In the equation **y = 3x + 2**, the slope is **3** (or ³⁄₁)\n\nAnd because slope is ( the change in y ) over ( the change in x )\n\n**For every 1 unit you increase x, y increases by 3**" }
          ]
        }
      },
      {
        id: 3,
        title: "Determining Slope from Two Coordinates",
        type: "lesson",
        duration: "5 min",
        section: "Fundamentals",
        hero: {
          tagline: "THE SLOPE FORMULA",
          subtitle: "Two points tell you everything",
          gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
        },
        content: {
          blocks: [
            { type: "text", content: "If you know two points on a line, **(x₁, y₁)** and **(x₂, y₂)**, you can find the **slope** of that line!" },
            { type: "formula", label: "Slope Formula", prefix: "slope =", fraction: { numerator: "y₂ - y₁", denominator: "x₂ - x₁" }, numeratorColor: "#ea580c", denominatorColor: "#3b82f6" }
          ]
        }
      },
      {
        id: 4,
        title: "Determining Slope from Table",
        type: "lesson",
        duration: "5 min",
        section: "Fundamentals",
        hero: {
          tagline: "READ THE PATTERN",
          subtitle: "Find slope from any data table",
          gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
        },
        content: {
          blocks: [
            { type: "text", content: "When given a table of values, find the change in Y (ΔY) and change in X (ΔX), then divide." },
            { type: "table", headers: ["X", "2", "4", "6", "8"], row: ["Y", "0", "3", "6", "9"], xChange: "+2", yChange: "+3" },
            { type: "formula", label: "Result", prefix: "", fraction: { numerator: "ΔY", denominator: "ΔX" }, suffix: "=", secondFraction: { numerator: "+3", denominator: "+2" }, secondSuffix: "= ³⁄₂", numeratorColor: "#ea580c", denominatorColor: "#3b82f6" }
          ]
        }
      },
      {
        id: 5,
        title: "Determining Slope from Graph",
        type: "lesson",
        duration: "5 min",
        section: "Fundamentals",
        hero: {
          tagline: "COUNT THE STEPS",
          subtitle: "Rise and run on any graph",
          gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
        },
        content: {
          blocks: [
            { type: "text", content: "To find slope from a graph, pick two points and count the **rise** (vertical change) and **run** (horizontal change)." },
            { type: "slopeFromGraphDiagram" },
            { type: "text", content: "The line has a slope of **-³⁄₅**" }
          ]
        }
      },
      {
        id: 6,
        title: "What is the Y-Intercept?",
        type: "lesson",
        duration: "5 min",
        section: "Fundamentals",
        hero: {
          tagline: "WHERE IT ALL BEGINS",
          subtitle: "The starting point of every line",
          gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)"
        },
        content: {
          blocks: [
            { type: "text", content: "The **Y-intercept** is the point where the line **crosses the y-axis**." },
            { type: "yInterceptDiagram" },
            { type: "list", items: ["It's the value of **y when x = 0**", "In coordinate form, it's **( 0, b )**", "In a real world scenario, the y-intercept is the starting point because no negative numbers exist in the real world, and the lowest that x can be is 0"] },
            { type: "example", title: "Example", content: "In the equation **y = 3x + 2**, the y-intercept is **2**\n\n→ the line crosses the y-axis at the point **( 0, 2 )**" }
          ]
        }
      },
      // Section: Deriving Equations
      { id: 7, title: "Deriving Linear Equations From Context", type: "video", duration: "10 min", section: "Deriving Equations", videoId: "p9m2tKpTKzM" },
      { id: 8, title: "Deriving Linear Equations From Graph (Example 1)", type: "video", duration: "8 min", section: "Deriving Equations", videoId: "nwqjqznGy1w" },
      { id: 9, title: "Deriving Linear Equations From Graph (Example 2)", type: "video", duration: "8 min", section: "Deriving Equations", videoId: "s0OT5hRgkv8" },
      { id: 10, title: "Deriving Linear Equations From Table", type: "video", duration: "8 min", section: "Deriving Equations", videoId: "sUwnF6j8ES4" },
      { id: 11, title: "Deriving Linear Equations From Function Notation", type: "video", duration: "8 min", section: "Deriving Equations", videoId: "4HC-rL8KPAc" },
      // Section: Parallel Lines
      {
        id: 12,
        title: "Parallel Lines",
        type: "lesson",
        duration: "5 min",
        section: "Parallel Lines",
        hero: {
          tagline: "NEVER CROSS",
          subtitle: "Same slope, different paths",
          gradient: "linear-gradient(135deg, #5ee7df 0%, #b490ca 100%)"
        },
        content: {
          blocks: [
            { type: "text", content: "Parallel lines are **two or more lines in the same plane that never intersect**, no matter how far you extend them." },
            { type: "parallelLinesDiagram" },
            { type: "text", content: "Parallel Lines have the **Same Slope**." },
            { type: "list", items: ["Because their slopes are equal, the lines rise and run at the *same rate*, which is why they never cross."] },
            { type: "text", content: "Parallel Lines have **Different Y-Intercepts**" },
            { type: "list", items: ["If the **y-intercepts are the *same*** *and* the slopes are the same, then they are **not just parallel** — they are actually the **same exact line**"] }
          ]
        }
      },
      { id: 13, title: "Simple Parallel Lines Question #1", type: "video", duration: "6 min", section: "Parallel Lines", videoId: "bY6HSCB0hHE" },
      { id: 14, title: "Simple Parallel Lines Question #2", type: "video", duration: "6 min", section: "Parallel Lines", videoId: "5McgHKQg0M4" },
      { id: 15, title: "Simple Parallel Lines in a System Question", type: "video", duration: "8 min", section: "Parallel Lines", videoId: "a6Wph54Ks6c" },
      { id: 16, title: "Complex Parallel Lines in a System Question #1", type: "video", duration: "10 min", section: "Parallel Lines", videoId: "kWAW26BUVak" },
      { id: 17, title: "Complex Parallel Lines #1 (DESMOS Method)", type: "video", duration: "8 min", section: "Parallel Lines", videoId: "F9GUje7wxVo" },
      { id: 18, title: "Complex Parallel Lines in a System Question #2", type: "video", duration: "10 min", section: "Parallel Lines", videoId: "ajbuDVZK_w0" },
      { id: 19, title: "Complex Parallel Lines #2 (DESMOS Method)", type: "video", duration: "8 min", section: "Parallel Lines", videoId: "kpc7cVNdPLc" },
      { id: 20, title: "Complex Parallel Lines in a System Question #3", type: "video", duration: "10 min", section: "Parallel Lines", videoId: "4qZLRcR2nDc" },
      { id: 21, title: "Complex Parallel Lines #3 (Answer Choices Method)", type: "video", duration: "8 min", section: "Parallel Lines", videoId: "AypfTD5JHuk" },
      // Section: Perpendicular Lines
      {
        id: 22,
        title: "Perpendicular Lines",
        type: "lesson",
        duration: "5 min",
        section: "Perpendicular Lines",
        hero: {
          tagline: "90° ANGLES",
          subtitle: "When lines meet at right angles",
          gradient: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)"
        },
        content: {
          blocks: [
            { type: "text", content: "Perpendicular lines are **two lines that intersect to form 90° angles**" },
            { type: "perpendicularLinesDiagram" },
            { type: "text", content: "The Slopes of Perpendicular Lines are **negative reciprocals** of each other" },
            { type: "text", content: "The Y-Intercepts of Perpendicular Lines **do not matter**" },
            { type: "text", content: "**(Y-Intercepts can be the same or different)**" },
            { type: "list", items: ["As long as the **slopes are negative reciprocals**, the lines will be **perpendicular**, regardless of their y-intercepts."] }
          ]
        }
      },
      { id: 23, title: "Simple Perpendicular Lines Question", type: "video", duration: "6 min", section: "Perpendicular Lines", videoId: "62BK8zl8FjA" },
      { id: 24, title: "Complex Perpendicular Lines Question", type: "video", duration: "10 min", section: "Perpendicular Lines", videoId: "Xw5bLjiPKOU" }
    ],
    'functions': [
      // Section: Fundamentals
      {
        id: 1,
        title: "What is a Function?",
        type: "lesson",
        duration: "5 min",
        section: "Fundamentals",
        hero: {
          tagline: "INPUT → OUTPUT",
          subtitle: "The machine that transforms numbers",
          gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
        },
        content: {
          blocks: [
            { type: "text", content: "A function can be viewed as an **input–output system** — a rule that converts an input value into an output value according to a specific process." },
            { type: "text", content: "We often describe this concept using the \"function machine\" analogy — not as a childlike idea, but as a precise model:" },
            { type: "diagram", content: "x → function rule → f(x)" },
            { type: "list", items: [
              "The **input** is the independent variable, often called **x**",
              "The **rule** is the function's defining operation or expression",
              "The **output** is the dependent variable, denoted **f(x)**"
            ]}
          ]
        }
      },
      {
        id: 2,
        title: "Function Notation",
        type: "lesson",
        duration: "5 min",
        section: "Fundamentals",
        hero: {
          tagline: "f(x) DECODED",
          subtitle: "Understanding the language of functions",
          gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
        },
        content: {
          blocks: [
            { type: "text", content: "**Function notation** is a way to name a function and show what input it takes." },
            { type: "formula", label: "Function Notation", content: "f(x)" },
            { type: "text", content: "This is read as \"**f of x**\" — it means the output of function **f** when the input is **x**." },
            { type: "list", items: [
              "**f** is the name of the function (could be g, h, or any letter)",
              "**x** is the input value",
              "**f(x)** is the output value"
            ]},
            { type: "example", title: "Example", content: "If **f(x) = 2x + 3**, then:\n\n**f(4)** = 2(4) + 3 = **11**\n\nWe substituted **4** for **x** and calculated the output." }
          ]
        }
      },
      {
        id: 3,
        title: "Evaluating Functions",
        type: "lesson",
        duration: "6 min",
        section: "Fundamentals",
        hero: {
          tagline: "PLUG AND SOLVE",
          subtitle: "Find the output for any input",
          gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
        },
        content: {
          blocks: [
            { type: "text", content: "**Evaluating a function** means finding the output value when you're given a specific input." },
            { type: "text", content: "To evaluate a function:" },
            { type: "list", items: [
              "**Step 1:** Take the input value given to you",
              "**Step 2:** Substitute it for the variable in the function",
              "**Step 3:** Simplify to find the output"
            ]},
            { type: "example", title: "Example 1: Find f(x)", content: "Given **f(x) = x² + 9**, find **f(4)**\n\nf(4) = (4)² + 9\nf(4) = 16 + 9\nf(4) = **25**" },
            { type: "example", title: "Example 2: Find x when f(x) = value", content: "Given **g(x) = x² + 9**, for which value of x is **g(x) = 25**?\n\nSet up: x² + 9 = 25\nSolve: x² = 16\nx = **4** (or -4)" }
          ]
        }
      },
      // Section: Simple Function Problems
      { id: 4, title: "Simple Function Example #1", type: "video", duration: "8 min", section: "Simple Function Problems", videoId: "4E54Yd1aSPo" },
      { id: 5, title: "Simple Function Example #2", type: "video", duration: "8 min", section: "Simple Function Problems", videoId: "cMmuvbxZUco" },
      { id: 6, title: "Simple Function Example #3", type: "video", duration: "8 min", section: "Simple Function Problems", videoId: "fV_idRMO6k8" },
      { id: 7, title: "Simple Function Example #4 (Word Problem)", type: "video", duration: "10 min", section: "Simple Function Problems", videoId: "VU1ydOSDfTI" },
      // Section: Complex Function Problems
      { id: 8, title: "Complex Functions Example #1", type: "video", duration: "10 min", section: "Complex Function Problems", videoId: "p7Z2beYwpaI" },
      { id: 9, title: "Complex Functions Example #2", type: "video", duration: "10 min", section: "Complex Function Problems", videoId: "dUWjb0racis" },
      { id: 10, title: "Complex Functions Example #3 (Polynomial)", type: "video", duration: "12 min", section: "Complex Function Problems", videoId: "WIKiYCOZnSw" }
    ],
    'transformations': [
      // Section: Fundamentals
      {
        id: 1,
        title: "What is a Transformation?",
        type: "lesson",
        duration: "4 min",
        section: "Fundamentals",
        hero: {
          tagline: "MOVE & RESHAPE",
          subtitle: "How equations change graphs",
          gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
        },
        content: {
          blocks: [
            { type: "text", content: "A **transformation** is a change made to a function that moves or reshapes its graph on the coordinate plane." },
            { type: "text", content: "There are several types of transformations:" },
            { type: "list", items: [
              "**Translations** — sliding the graph up, down, left, or right",
              "**Reflections** — flipping the graph over an axis",
              "**Stretches/Compressions** — making the graph wider or narrower"
            ]},
            { type: "text", content: "On the SAT, **translations** are by far the most commonly tested. This module focuses primarily on translations — learning to shift graphs **vertically** (up/down) and **horizontally** (left/right)." },
            { type: "example", title: "The Big Idea", content: "If you know what **f(x)** looks like, you can figure out what **f(x) + 5** or **f(x − 3)** looks like without graphing from scratch.\n\nTransformations let you take a known function and **predict how changes to the equation affect the graph**." }
          ]
        }
      },
      {
        id: 2,
        title: "Vertical Translations (Up & Down)",
        type: "lesson",
        duration: "5 min",
        section: "Fundamentals",
        hero: {
          tagline: "UP & DOWN",
          subtitle: "Shifting along the y-axis",
          gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
        },
        content: {
          blocks: [
            { type: "text", content: "**Vertical translations** shift a graph **up or down** along the y-axis." },
            { type: "text", content: "The key insight: the number being added or subtracted is **outside** the function — it affects the **output** (y-value)." },
            { type: "formula", label: "Moving UP", content: "f(x) + d" },
            { type: "text", content: "Adding **d** to the function shifts the graph **up** by **d** units. Every y-value increases by d." },
            { type: "formula", label: "Moving DOWN", content: "f(x) − d" },
            { type: "text", content: "Subtracting **d** from the function shifts the graph **down** by **d** units. Every y-value decreases by d." },
            { type: "example", title: "Example", content: "If **f(x) = x²** (a parabola with vertex at origin)\n\n• **f(x) + 3 = x² + 3** → parabola shifts **UP 3**\n• **f(x) − 5 = x² − 5** → parabola shifts **DOWN 5**" },
            { type: "text", content: "**Golden Rule for Vertical Translations:**" },
            { type: "text", content: "When moving a function **up or down**, **ALWAYS** use the **y-intercept** as your reference point, **NEVER** the x-intercept." }
          ]
        }
      },
      {
        id: 3,
        title: "Horizontal Translations (Left & Right)",
        type: "lesson",
        duration: "6 min",
        section: "Fundamentals",
        hero: {
          tagline: "LEFT & RIGHT",
          subtitle: "The counterintuitive shift",
          gradient: "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)"
        },
        content: {
          blocks: [
            { type: "text", content: "**Horizontal translations** shift a graph **left or right** along the x-axis." },
            { type: "text", content: "The key insight: the number being added or subtracted is **inside** the function (with x) — it affects the **input** (x-value)." },
            { type: "text", content: "⚠️ **This is counterintuitive!** The direction is **opposite** to what you might expect:" },
            { type: "formula", label: "Moving LEFT", content: "f(x + c)" },
            { type: "text", content: "Adding **c** inside the function shifts the graph **LEFT** by **c** units." },
            { type: "formula", label: "Moving RIGHT", content: "f(x − c)" },
            { type: "text", content: "Subtracting **c** inside the function shifts the graph **RIGHT** by **c** units." },
            { type: "example", title: "Why is it backwards?", content: "Think about it this way: **f(x + 3)** means the function \"activates\" **3 units sooner**.\n\nTo get the same y-value that used to occur at x = 5, you now only need x = 2.\n\nThe whole graph shifts **LEFT** because everything happens earlier." },
            { type: "example", title: "Example", content: "If **f(x) = x²** (a parabola with vertex at origin)\n\n• **f(x + 4) = (x + 4)²** → parabola shifts **LEFT 4**\n• **f(x − 2) = (x − 2)²** → parabola shifts **RIGHT 2**" },
            { type: "text", content: "**Golden Rule for Horizontal Translations:**" },
            { type: "text", content: "When moving a function **left or right**, **ALWAYS** use the **x-intercept** as your reference point, **NEVER** the y-intercept." }
          ]
        }
      },
      {
        id: 4,
        title: "Transformation Rules Summary",
        type: "lesson",
        duration: "4 min",
        section: "Fundamentals",
        hero: {
          tagline: "CHEAT SHEET",
          subtitle: "All the rules in one place",
          gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
        },
        content: {
          blocks: [
            { type: "text", content: "Here's your complete reference for transformation rules:" },
            { type: "transformTable" },
            { type: "text", content: "**Quick Memory Tips:**" },
            { type: "list", items: [
              "**Outside the function** (f(x) ± d) → **Vertical** shift → affects **y-values**",
              "**Inside the function** (f(x ± c)) → **Horizontal** shift → affects **x-values**",
              "Horizontal shifts are **opposite** to the sign (+ goes left, − goes right)",
              "Vertical shifts **match** the sign (+ goes up, − goes down)"
            ]},
            { type: "example", title: "Putting It Together", content: "What does **f(x − 3) + 7** do to the graph of f(x)?\n\n• **(x − 3)** → shifts **RIGHT 3** (inside, minus = right)\n• **+ 7** → shifts **UP 7** (outside, plus = up)\n\nThe graph moves **right 3 and up 7**." }
          ]
        }
      },
      // Section: Transformations from Graph
      { id: 5, title: "Simple Transformation From Graph Example", type: "video", duration: "8 min", section: "Transformations from Graph", videoId: "Qdjm9OwykZY" },
      { id: 6, title: "Complex Transformation From Graph Example", type: "video", duration: "10 min", section: "Transformations from Graph", videoId: "OPDUQ7xR3DY" },
      // Section: Transformations from Table
      { id: 7, title: "Simple Transformation From Table Example #1", type: "video", duration: "8 min", section: "Transformations from Table", videoId: "FykKYINTDbE" },
      { id: 8, title: "Simple Transformation From Table #1 (DESMOS Method)", type: "video", duration: "6 min", section: "Transformations from Table", videoId: "Zw2WJEwEowU" },
      { id: 9, title: "Complex Transformation From Table Example", type: "video", duration: "10 min", section: "Transformations from Table", videoId: "MuB5Q2nMEZ4" },
      { id: 10, title: "Complex Transformation From Table (DESMOS Method)", type: "video", duration: "8 min", section: "Transformations from Table", videoId: "G34X0J7M7qM" },
      // Section: Transformations from Expression
      { id: 11, title: "Simple Transformation From Expression Example", type: "video", duration: "8 min", section: "Transformations from Expression", videoId: "butfjZEcHcg" },
      { id: 12, title: "Complex Transformation From Expression Example #1", type: "video", duration: "10 min", section: "Transformations from Expression", videoId: "Xw5tnurT1Ss" },
      { id: 13, title: "Complex Transformation From Expression Example #2", type: "video", duration: "10 min", section: "Transformations from Expression", videoId: "lt3QfNmDDPI" },
      // Section: Difficult Transformations
      { id: 14, title: "Difficult Transformations (System of Equations Method)", type: "video", duration: "12 min", section: "Difficult Transformations", videoId: "CygUy93GH6o" },
      { id: 15, title: "Difficult Transformations (Answer Choice Method)", type: "video", duration: "10 min", section: "Difficult Transformations", videoId: "6e9Gx_EC8uw" }
    ],
    'triangles': [
      // Section 1: Triangle Fundamentals
      {
        id: 1,
        title: "What is a Triangle?",
        type: "lesson",
        duration: "5 min",
        section: "Triangle Fundamentals",
        hero: {
          tagline: "3 SIDES, 180°",
          subtitle: "The building block of geometry",
          gradient: "linear-gradient(135deg, #f5576c 0%, #f093fb 100%)"
        },
        content: {
          blocks: [
            { type: "text", content: "A **triangle** is a 3-sided polygon. It is one of the most fundamental shapes in geometry and appears frequently on the SAT." },
            { type: "formula", label: "Key Property", content: "Interior angles always sum to 180°" },
            { type: "text", content: "Triangles are classified by their **sides**:" },
            { type: "triangleTypes" },
            { type: "list", items: [
              "**Scalene Triangle** — All three sides are different lengths (no equal sides)",
              "**Isosceles Triangle** — Two sides are equal → the angles opposite those sides (base angles) are also equal",
              "**Equilateral Triangle** — All three sides are equal → all three angles are equal (each is 60°)"
            ]},
            { type: "example", title: "Important Connection", content: "In an **isosceles triangle**, equal sides mean equal angles.\n\nIf you know two sides are equal, the angles across from them must be equal too. This is tested frequently on the SAT!" }
          ]
        }
      },
      {
        id: 2,
        title: "Types of Triangles by Angles",
        type: "lesson",
        duration: "4 min",
        section: "Triangle Fundamentals",
        hero: {
          tagline: "ACUTE • RIGHT • OBTUSE",
          subtitle: "Classifying by angle size",
          gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
        },
        content: {
          blocks: [
            { type: "text", content: "Triangles can also be classified by their **angles**:" },
            { type: "triangleAngles" },
            { type: "list", items: [
              "**Acute Triangle** — All angles are less than 90°",
              "**Right Triangle** — One angle is exactly 90° (marked with a small square)",
              "**Obtuse Triangle** — One angle is greater than 90°"
            ]},
            { type: "text", content: "A triangle can only have **at most one** right angle or obtuse angle. Why? Because the angles must sum to 180°." },
            { type: "example", title: "Think About It", content: "If one angle is 90°, the other two must sum to 90°.\nIf one angle is 100° (obtuse), the other two must sum to only 80°.\n\nThere's no room for a second large angle!" }
          ]
        }
      },
      {
        id: 3,
        title: "Triangle Inequality Theorem",
        type: "lesson",
        duration: "4 min",
        section: "Triangle Fundamentals",
        hero: {
          tagline: "CAN IT EXIST?",
          subtitle: "Testing if three sides form a triangle",
          gradient: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)"
        },
        content: {
          blocks: [
            { type: "text", content: "The **Triangle Inequality Theorem** states:" },
            { type: "formula", label: "Triangle Inequality", content: "The sum of any two sides must be greater than the third side" },
            { type: "text", content: "This rule determines whether three lengths can actually form a triangle." },
            { type: "example", title: "Example 1: Can 7, 6, and 10 form a triangle?", content: "Check all combinations:\n• 7 + 6 = 13 > 10 ✓\n• 7 + 10 = 17 > 6 ✓\n• 6 + 10 = 16 > 7 ✓\n\n**Yes**, these can form a triangle." },
            { type: "example", title: "Example 2: Can 2, 3, and 7 form a triangle?", content: "Check: 2 + 3 = 5\nIs 5 > 7? **No!**\n\n**Impossible** — these cannot form a triangle." },
            { type: "text", content: "**SAT Tip:** You only need to find ONE combination that fails. Check the two smallest sides first — if their sum isn't greater than the largest side, it's impossible." }
          ]
        }
      },
      // Section 2: Angles of a Triangle
      { id: 4, title: "Simple Angles of a Triangle Example", type: "video", duration: "8 min", section: "Angles of a Triangle", videoId: "VYNQZLCTnx8" },
      { id: 5, title: "Complex Angles of a Triangle Example", type: "video", duration: "10 min", section: "Angles of a Triangle", videoId: "ZkBP4vwYxQ0" },
      // Section 3: Area of a Triangle
      {
        id: 6,
        title: "Area of a Triangle",
        type: "lesson",
        duration: "5 min",
        section: "Area of a Triangle",
        hero: {
          tagline: "½ × BASE × HEIGHT",
          subtitle: "Finding the space inside",
          gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
        },
        content: {
          blocks: [
            { type: "text", content: "The **area of a triangle** measures how much space is inside the triangle." },
            { type: "areaTriangle" },
            { type: "text", content: "**Key concepts:**" },
            { type: "list", items: [
              "The **base** can be any side of the triangle",
              "The **height** must be perpendicular (at 90°) to the base",
              "The height may be inside or outside the triangle depending on its shape"
            ]},
            { type: "example", title: "For Right Triangles", content: "Right triangles are the easiest! The two **legs** (the sides that form the right angle) serve as the base and height.\n\nJust multiply the two legs and divide by 2." },
            { type: "text", content: "**Perimeter** is simpler — just add up all three sides." }
          ]
        }
      },
      { id: 7, title: "Simple Area of a Right Triangle Example", type: "video", duration: "8 min", section: "Area of a Triangle", videoId: "yv6gAJqTezs" },
      { id: 8, title: "Complex Area of a Right Triangle Example", type: "video", duration: "10 min", section: "Area of a Triangle", videoId: "XqQj-8GeyEM" },
      // Section 4: Similar Triangles
      {
        id: 9,
        title: "What Are Similar Triangles?",
        type: "lesson",
        duration: "5 min",
        section: "Similar Triangles",
        hero: {
          tagline: "SAME SHAPE, DIFFERENT SIZE",
          subtitle: "Proportional sides, equal angles",
          gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
        },
        content: {
          blocks: [
            { type: "text", content: "**Similar triangles** have the same shape but may be different sizes. Think of them as scaled versions of each other." },
            { type: "similarTriangles" },
            { type: "text", content: "When two triangles are similar:" },
            { type: "list", items: [
              "**Corresponding angles are equal** — same angles, same positions",
              "**Corresponding sides are proportional** — related by a constant scale factor"
            ]},
            { type: "example", title: "Scale Factor", content: "If triangle ABC is similar to triangle DEF with a scale factor of 2:\n\n• If AB = 3, then DE = 6\n• If BC = 4, then EF = 8\n• If AC = 5, then DF = 10\n\nEvery side of the larger triangle is exactly **2×** the corresponding side of the smaller triangle." },
            { type: "text", content: "**SAT Strategy:** Set up a proportion between corresponding sides to find missing lengths." }
          ]
        }
      },
      {
        id: 10,
        title: "How to Identify Similar Triangles",
        type: "lesson",
        duration: "5 min",
        section: "Similar Triangles",
        hero: {
          tagline: "AA SIMILARITY",
          subtitle: "Two angles are all you need",
          gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
        },
        content: {
          blocks: [
            { type: "text", content: "There are two main ways to prove triangles are similar on the SAT:" },
            { type: "text", content: "**1. AA (Angle-Angle) Criterion**" },
            { type: "text", content: "If two angles of one triangle equal two angles of another triangle, the triangles are similar. (The third angle must also be equal since angles sum to 180°.)" },
            { type: "text", content: "**2. Parallel Lines**" },
            { type: "text", content: "When a line is drawn parallel to one side of a triangle, it creates a smaller triangle that is similar to the original." },
            { type: "example", title: "Parallel Line Pattern", content: "If a line parallel to the base cuts through a triangle, the smaller triangle formed at the top is similar to the whole triangle.\n\nThis pattern appears frequently on the SAT — look for parallel lines inside triangles!" },
            { type: "text", content: "**Once you confirm triangles are similar**, set up proportions between corresponding sides to solve for unknowns." }
          ]
        }
      },
      { id: 11, title: "Simple Similar Triangles Example #1", type: "video", duration: "8 min", section: "Similar Triangles", videoId: "SllN4xzTNm0" },
      { id: 12, title: "Simple Similar Triangles Example #2", type: "video", duration: "8 min", section: "Similar Triangles", videoId: "cQ8KEHofTyA" },
      { id: 13, title: "Simple Similar Triangles Example #3", type: "video", duration: "8 min", section: "Similar Triangles", videoId: "fCleu3BSqEw" },
      { id: 14, title: "Simple Similar Triangles Example #4", type: "video", duration: "8 min", section: "Similar Triangles", videoId: "PEW__E6DNOU" },
      { id: 15, title: "Complex Similar Triangles Example", type: "video", duration: "12 min", section: "Similar Triangles", videoId: "9Y71mE9It_4" },
      // Section 5: Right Triangles & Pythagorean Theorem
      {
        id: 16,
        title: "Right Triangles",
        type: "lesson",
        duration: "4 min",
        section: "Right Triangles & Pythagorean Theorem",
        content: {
          blocks: [
            { type: "text", content: "A **right triangle** is a triangle with one **90° angle** (a right angle)." },
            { type: "rightTriangleParts" },
            { type: "text", content: "The parts of a right triangle have special names:" },
            { type: "list", items: [
              "**Hypotenuse** — The side across from the right angle. It is always the **longest side**.",
              "**Legs** — The two sides that form the right angle."
            ]},
            { type: "example", title: "Identifying the Hypotenuse", content: "The hypotenuse is always:\n• Opposite the 90° angle\n• The longest side\n• Never touches the right angle corner\n\nThe two legs always meet at the right angle." },
            { type: "text", content: "Right triangles are special because they follow the **Pythagorean Theorem**, which lets us find missing sides." }
          ]
        }
      },
      {
        id: 17,
        title: "The Pythagorean Theorem",
        type: "lesson",
        duration: "6 min",
        section: "Right Triangles & Pythagorean Theorem",
        content: {
          blocks: [
            { type: "text", content: "The **Pythagorean Theorem** is one of the most important formulas in geometry. It applies **only to right triangles**." },
            { type: "pythagorean" },
            { type: "text", content: "Where **a** and **b** are the legs, and **c** is the hypotenuse." },
            { type: "text", content: "In words: **The sum of the squares of the two legs equals the square of the hypotenuse.**" },
            { type: "example", title: "Finding the Hypotenuse", content: "If the legs are 3 and 4, find the hypotenuse:\n\n3² + 4² = c²\n9 + 16 = c²\n25 = c²\nc = **5**" },
            { type: "example", title: "Finding a Leg", content: "If one leg is 5 and the hypotenuse is 13, find the other leg:\n\n5² + b² = 13²\n25 + b² = 169\nb² = 144\nb = **12**" },
            { type: "text", content: "**Common Pythagorean Triples** (memorize these!):" },
            { type: "list", items: [
              "**3, 4, 5** (and multiples: 6-8-10, 9-12-15, etc.)",
              "**5, 12, 13**",
              "**8, 15, 17**",
              "**7, 24, 25**"
            ]}
          ]
        }
      },
      { id: 18, title: "Simple Pythagorean Theorem Example #1", type: "video", duration: "8 min", section: "Right Triangles & Pythagorean Theorem", videoId: "DmKXof2wtJM" },
      { id: 19, title: "Simple Pythagorean Theorem Example #2", type: "video", duration: "8 min", section: "Right Triangles & Pythagorean Theorem", videoId: "xKBeYQAxV4g" },
      { id: 20, title: "Simple Pythagorean Theorem Example #3", type: "video", duration: "8 min", section: "Right Triangles & Pythagorean Theorem", videoId: "caGJrq00byY" },
      { id: 21, title: "Complex Pythagorean Theorem Example", type: "video", duration: "12 min", section: "Right Triangles & Pythagorean Theorem", videoId: "k4eFz5IlTOo" },
      // Section 6: Trigonometric Ratios
      {
        id: 22,
        title: "Introduction to Trigonometry (SOH CAH TOA)",
        type: "lesson",
        duration: "7 min",
        section: "Trigonometric Ratios",
        content: {
          blocks: [
            { type: "text", content: "**Trigonometric ratios** compare the sides of a right triangle relative to a chosen acute angle. They only apply to **right triangles**." },
            { type: "text", content: "First, you must identify the sides relative to your chosen angle θ:" },
            { type: "sohcahtoa" },
            { type: "list", items: [
              "**Opposite** — The side across from the angle (doesn't touch it)",
              "**Adjacent** — The side next to the angle (not the hypotenuse)",
              "**Hypotenuse** — Always the longest side, across from the 90°"
            ]},
            { type: "text", content: "**The Three Ratios (SOH CAH TOA):**" },
            { type: "formula", label: "Sine", prefix: "sin(θ) =", fraction: { numerator: "Opposite", denominator: "Hypotenuse" }, numeratorColor: "#ea580c", denominatorColor: "#3b82f6" },
            { type: "formula", label: "Cosine", prefix: "cos(θ) =", fraction: { numerator: "Adjacent", denominator: "Hypotenuse" }, numeratorColor: "#16a34a", denominatorColor: "#3b82f6" },
            { type: "formula", label: "Tangent", prefix: "tan(θ) =", fraction: { numerator: "Opposite", denominator: "Adjacent" }, numeratorColor: "#ea580c", denominatorColor: "#16a34a" },
            { type: "text", content: "**Memory trick: SOH CAH TOA**" },
            { type: "list", items: [
              "**S**ine = **O**pposite / **H**ypotenuse",
              "**C**osine = **A**djacent / **H**ypotenuse",
              "**T**angent = **O**pposite / **A**djacent"
            ]}
          ]
        }
      },
      { id: 23, title: "Simple Trigonometric Ratios Example #1", type: "video", duration: "8 min", section: "Trigonometric Ratios", videoId: "V4hSoSCACUA" },
      { id: 24, title: "Simple Trigonometric Ratios Example #2", type: "video", duration: "8 min", section: "Trigonometric Ratios", videoId: "XO4V-6Nv2VA" },
      { id: 25, title: "Simple Trigonometric Ratios Example #3", type: "video", duration: "8 min", section: "Trigonometric Ratios", videoId: "1pN3OcxOVk4" },
      { id: 26, title: "Simple Trigonometric Ratios Example #4", type: "video", duration: "8 min", section: "Trigonometric Ratios", videoId: "HaJettXIUlU" },
      { id: 27, title: "Simple Trigonometric Ratios Example #5", type: "video", duration: "8 min", section: "Trigonometric Ratios", videoId: "byD4ls13d64" },
      { id: 28, title: "Complex Trigonometric Ratios Example", type: "video", duration: "12 min", section: "Trigonometric Ratios", videoId: "lTF4dy953gw" },
      // Section 7: Special Right Triangles
      {
        id: 29,
        title: "The 45-45-90 Triangle",
        type: "lesson",
        duration: "5 min",
        section: "Special Right Triangles",
        content: {
          blocks: [
            { type: "text", content: "A **45-45-90 triangle** is a special right triangle that is also **isosceles** (two equal sides)." },
            { type: "text", content: "The angles are always **45°, 45°, and 90°**." },
            { type: "text", content: "Because the angles are fixed, the **side ratios are always the same**:" },
            { type: "triangle4545" },
            { type: "list", items: [
              "The two **legs** are equal (both are **x**)",
              "The **hypotenuse** is **x√2** (leg times √2)"
            ]},
            { type: "example", title: "Example", content: "If each leg is **5**:\n• Leg 1 = 5\n• Leg 2 = 5\n• Hypotenuse = 5√2 ≈ 7.07\n\nIf the hypotenuse is **10**:\n• Hypotenuse = 10 = x√2\n• x = ¹⁰⁄√₂ = ¹⁰√²⁄₂ = 5√2\n• Each leg = 5√2 ≈ 7.07" },
            { type: "text", content: "**Quick tip:** A 45-45-90 triangle is half of a square cut diagonally!" }
          ]
        }
      },
      { id: 30, title: "Simple 45-45-90 Triangle Example", type: "video", duration: "8 min", section: "Special Right Triangles", videoId: "hEcp1GCByyk" },
      { id: 31, title: "Complex 45-45-90 Triangle Example", type: "video", duration: "10 min", section: "Special Right Triangles", videoId: "Nqke1YTLr3k" },
      {
        id: 32,
        title: "The 30-60-90 Triangle",
        type: "lesson",
        duration: "6 min",
        section: "Special Right Triangles",
        content: {
          blocks: [
            { type: "text", content: "A **30-60-90 triangle** is a special right triangle where the angles are always **30°, 60°, and 90°**." },
            { type: "text", content: "Because the angles are fixed, the **side ratios are always the same**:" },
            { type: "triangle3060" },
            { type: "list", items: [
              "**Shortest side** (opposite 30°) = **x**",
              "**Medium side** (opposite 60°) = **x√3**",
              "**Hypotenuse** (opposite 90°) = **2x**"
            ]},
            { type: "text", content: "**Key relationship:** The hypotenuse is always **twice** the shortest side." },
            { type: "example", title: "Example", content: "If the shortest side is **4**:\n• Short side (opposite 30°) = 4\n• Medium side (opposite 60°) = 4√3 ≈ 6.93\n• Hypotenuse = 8\n\nIf the hypotenuse is **12**:\n• Hypotenuse = 12 = 2x → x = 6\n• Short side = 6\n• Medium side = 6√3 ≈ 10.39" },
            { type: "text", content: "**Quick tip:** A 30-60-90 triangle is half of an equilateral triangle cut down the middle!" }
          ]
        }
      },
      { id: 33, title: "Simple 30-60-90 Triangle Example", type: "video", duration: "8 min", section: "Special Right Triangles", videoId: "_6bZxuQym8g" },
      { id: 34, title: "Complex 30-60-90 Triangle Example #1", type: "video", duration: "10 min", section: "Special Right Triangles", videoId: "HvJnE1eP6Xs" },
      { id: 35, title: "Complex 30-60-90 Triangle Example #2", type: "video", duration: "10 min", section: "Special Right Triangles", videoId: "q19izkGElyI" }
    ],
    'circles': [
      // Section 1: Circle Fundamentals
      {
        id: 1,
        title: "Parts of a Circle",
        type: "lesson",
        duration: "5 min",
        section: "Circle Fundamentals",
        hero: {
          tagline: "THE PERFECT SHAPE",
          subtitle: "Radius, diameter, and everything round",
          gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
        },
        content: {
          blocks: [
            { type: "text", content: "A **Circle** is the set of all points that are the **same distance** from a fixed point called the **Center**." },
            { type: "circleParts" },
            { type: "text", content: "**Key Parts of a Circle:**" },
            { type: "list", items: [
              "**Center** — The fixed point in the middle of the circle",
              "**Radius (r)** — The distance from the center to any point on the circle",
              "**Diameter (d)** — The distance across the circle through the center",
              "**Circumference** — The distance around the circle (the perimeter)",
              "**Area** — The space enclosed inside the circle"
            ]},
            { type: "formula", label: "Key Relationship", content: "Diameter = 2 × Radius   →   d = 2r" },
            { type: "text", content: "The **Diameter** is always **twice** the **Radius**. If given one, you can always find the other." }
          ]
        }
      },
      {
        id: 2,
        title: "Area of a Circle",
        type: "lesson",
        duration: "5 min",
        section: "Circle Fundamentals",
        hero: {
          tagline: "πr² — MEMORIZE IT",
          subtitle: "The space inside the circle",
          gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
        },
        content: {
          blocks: [
            { type: "text", content: "The **Area** of a circle measures the space enclosed inside the circle." },
            { type: "circleArea" },
            { type: "text", content: "The most important step is identifying the **Radius**. If the problem gives the **Diameter**, divide by 2 first!" },
            { type: "example", title: "Example 1: Given Radius", content: "A circle has a **radius of 5**.\n\nArea = π(5)² = **25π**" },
            { type: "example", title: "Example 2: Given Diameter", content: "A circle has a **diameter of 10**.\n\nRadius = 10 ÷ 2 = 5\nArea = π(5)² = **25π**" },
            { type: "text", content: "**Critical Insight:** Area grows with the **square** of the radius." },
            { type: "example", title: "What This Means", content: "If the radius **doubles**, the area becomes **4× larger** (not 2×).\nIf the radius **triples**, the area becomes **9× larger**." }
          ]
        }
      },
      {
        id: 3,
        title: "Circumference of a Circle",
        type: "lesson",
        duration: "4 min",
        section: "Circle Fundamentals",
        hero: {
          tagline: "2πr OR πd",
          subtitle: "The distance around",
          gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
        },
        content: {
          blocks: [
            { type: "text", content: "The **Circumference** is the distance around a circle — the circle's perimeter." },
            { type: "formula", label: "Using Radius", content: "C = 2πr" },
            { type: "formula", label: "Using Diameter", content: "C = πd" },
            { type: "text", content: "Both formulas give the same result since **d = 2r**. Use whichever matches what you're given." },
            { type: "example", title: "Example", content: "A circle has a **radius of 7**.\n\nUsing radius: C = 2π(7) = **14π**\n\nUsing diameter (d = 14): C = π(14) = **14π** ✓" }
          ]
        }
      },
      // Section 2: Area Problems
      { id: 4, title: "Simple Circle Area Example", type: "video", duration: "8 min", section: "Area Problems", videoId: "iD5FSvzmEqY" },
      { id: 5, title: "Complex Circle Area Example", type: "video", duration: "10 min", section: "Area Problems", videoId: "qEtS0mW7dH8" },
      // Section 3: Circumference & Arc Length
      {
        id: 6,
        title: "Arc Length",
        type: "lesson",
        duration: "5 min",
        section: "Circumference & Arc Length",
        content: {
          blocks: [
            { type: "text", content: "**Arc Length** is the distance along the curved part of a circle — a \"portion of the circumference.\"" },
            { type: "arcLength" },
            { type: "text", content: "The Arc Length is a **fraction** of the full Circumference. The fraction equals the central angle divided by 360°." },
            { type: "fractionEquation", 
              label: "Arc Length Formula",
              leftNumerator: "Arc Length", 
              leftDenominator: "Circumference",
              leftColor: "#2563eb",
              rightNumerator: "Central Angle", 
              rightDenominator: "360°",
              rightColor: "#7c3aed"
            },
            { type: "arcLengthExample" }
          ]
        }
      },
      { id: 7, title: "Simple Circumference Example", type: "video", duration: "8 min", section: "Circumference & Arc Length", videoId: "rylb6ba8CXY" },
      { id: 8, title: "Conceptual Arc Length Example", type: "video", duration: "8 min", section: "Circumference & Arc Length", videoId: "FogWIBHFRVM" },
      { id: 9, title: "Calculating Arc Length Example", type: "video", duration: "10 min", section: "Circumference & Arc Length", videoId: "dINd03hAQc0" },
      // Section 4: Sector Area
      {
        id: 10,
        title: "Sector Area",
        type: "lesson",
        duration: "5 min",
        section: "Sector Area",
        content: {
          blocks: [
            { type: "text", content: "A **Sector** is a \"pie-slice\" region of a circle, bounded by two radii and an arc." },
            { type: "sectorArea" },
            { type: "text", content: "Just like Arc Length, Sector Area is a **fraction** of the circle's total area. The fraction uses the same ratio: Central Angle ÷ 360°." },
            { type: "fractionEquation", 
              label: "Sector Area Formula",
              leftNumerator: "Sector Area", 
              leftDenominator: "Circle Area",
              leftColor: "#2563eb",
              rightNumerator: "Central Angle", 
              rightDenominator: "360°",
              rightColor: "#7c3aed"
            },
            { type: "sectorAreaExample" }
          ]
        }
      },
      { id: 11, title: "Simple Sector Area Example", type: "video", duration: "8 min", section: "Sector Area", videoId: "BCj2GzLu84I" },
      { id: 12, title: "Complex Sector Area Example", type: "video", duration: "10 min", section: "Sector Area", videoId: "kInBtmMmsn8" },
      // Section 5: Equation of a Circle
      {
        id: 13,
        title: "Standard Form of a Circle Equation",
        type: "lesson",
        duration: "6 min",
        section: "Equation of a Circle",
        content: {
          blocks: [
            { type: "text", content: "The **Standard Form** of a circle equation lets you immediately identify the **Center** and **Radius**." },
            { type: "circleEquation" },
            { type: "list", items: [
              "**(h, k)** is the **Center** of the circle",
              "**r** is the **Radius** (note: the equation shows **r²**, so take the square root!)"
            ]},
            { type: "text", content: "⚠️ **Watch the Signs!** Inside the parentheses, the signs are **OPPOSITE** of the center coordinates." },
            { type: "circleStandardFormExample" },
            { type: "text", content: "This sign flip is a **common SAT trap** — always double-check your signs!" }
          ]
        }
      },
      { id: 14, title: "Simple Extracting Center & Radius from Standard Form", type: "video", duration: "8 min", section: "Equation of a Circle", videoId: "FyCLcqWY2H0" },
      { id: 15, title: "Simple Extracting Diameter from Standard Form", type: "video", duration: "8 min", section: "Equation of a Circle", videoId: "75d4HDTqVqg" },
      { id: 16, title: "Complex Extracting Diameter (Conceptual Method)", type: "video", duration: "10 min", section: "Equation of a Circle", videoId: "h2q3pRkWHc4" },
      { id: 17, title: "Complex Extracting Diameter (Plug-In Method)", type: "video", duration: "10 min", section: "Equation of a Circle", videoId: "qpYkCKjZzrA" },
      // Section 6: Circle Transformations
      {
        id: 18,
        title: "Transformations of Circles",
        type: "lesson",
        duration: "5 min",
        section: "Circle Transformations",
        content: {
          blocks: [
            { type: "text", content: "A **Translation** moves the entire circle without changing its size. Only the **Center** changes — the **Radius** stays the same." },
            { type: "circleTransformRules" },
            { type: "circleTransformExample" },
            { type: "text", content: "**Remember:** The sign inside the equation is always **OPPOSITE** the center's coordinate value." }
          ]
        }
      },
      { id: 19, title: "Simple Circle Transformations Example", type: "video", duration: "8 min", section: "Circle Transformations", videoId: "bO3UP6O7U4M" },
      { id: 20, title: "Complex Circle Transformations Example", type: "video", duration: "10 min", section: "Circle Transformations", videoId: "Ggb2uBweoDg" },
      // Section 7: Domain, Range & Intersections
      {
        id: 21,
        title: "Domain & Range of a Circle",
        type: "lesson",
        duration: "5 min",
        section: "Domain, Range & Intersections",
        content: {
          blocks: [
            { type: "text", content: "For a circle with **Center (h, k)** and **Radius r**, the Domain and Range tell you how far the circle extends." },
            { type: "domainRangeFormulas" },
            { type: "text", content: "**Intersecting the Axes:**" },
            { type: "axisIntersectionRules" },
            { type: "domainRangeExample" }
          ]
        }
      },
      { id: 22, title: "Determining Domain & Range Example", type: "video", duration: "10 min", section: "Domain, Range & Intersections", videoId: "U7bhoyuhCwA" },
      { id: 23, title: "Intersecting Y-Axis at Exactly One Point Example", type: "video", duration: "8 min", section: "Domain, Range & Intersections", videoId: "RV6vzQq3fro" },
      { id: 24, title: "Intersecting Y-Axis at One Point (DESMOS Method)", type: "video", duration: "8 min", section: "Domain, Range & Intersections", videoId: "0dGx4haTSfk" },
      // Section 8: Converting to Standard Form
      {
        id: 25,
        title: "Completing the Square for Circles",
        type: "lesson",
        duration: "7 min",
        section: "Converting to Standard Form",
        content: {
          blocks: [
            { type: "text", content: "Sometimes a circle equation is given in **Expanded Form**. You must convert it to **Standard Form** to find the Center and Radius." },
            { type: "completingSquareSteps" },
            { type: "completingSquareExample" }
          ]
        }
      },
      { id: 26, title: "Deriving Standard Form to Determine Radius #1", type: "video", duration: "10 min", section: "Converting to Standard Form", videoId: "Ivt8GlJNN54" },
      { id: 27, title: "Deriving Standard Form — Radius #1 (DESMOS)", type: "video", duration: "8 min", section: "Converting to Standard Form", videoId: "2QLT2GBx4J8" },
      { id: 28, title: "Deriving Standard Form — Center #1 (DESMOS)", type: "video", duration: "8 min", section: "Converting to Standard Form", videoId: "adDR0DIhsiU" },
      { id: 29, title: "Deriving Standard Form to Determine Radius #2", type: "video", duration: "10 min", section: "Converting to Standard Form", videoId: "SZ49_TM1cRk" },
      { id: 30, title: "Deriving Standard Form — Radius #2 (DESMOS)", type: "video", duration: "8 min", section: "Converting to Standard Form", videoId: "MuVouk8s0R4" },
      { id: 31, title: "Deriving Standard Form — Center #2 (DESMOS)", type: "video", duration: "8 min", section: "Converting to Standard Form", videoId: "maCBR4AUK8g" },
      // Section 9: Tangent Lines
      {
        id: 32,
        title: "Tangent Lines to a Circle",
        type: "lesson",
        duration: "5 min",
        section: "Tangent Lines",
        content: {
          blocks: [
            { type: "text", content: "A **Tangent Line** is a line that touches a circle at exactly **ONE point**, called the **Point of Tangency**." },
            { type: "tangentLine" },
            { type: "formula", label: "Key Rule", content: "The Tangent Line is PERPENDICULAR to the Radius at the Point of Tangency" },
            { type: "text", content: "This means the tangent and radius form a **90° angle** where they meet." },
            { type: "text", content: "**Why This Matters on the SAT:**" },
            { type: "list", items: [
              "If you know the radius to a point, the tangent at that point is **perpendicular** to it",
              "Perpendicular lines have **negative reciprocal slopes** (if one slope is m, the other is −1/m)",
              "This often creates **right triangles** you can solve with the Pythagorean Theorem"
            ]}
          ]
        }
      },
      { id: 33, title: "Tangent Line to a Circle Example", type: "video", duration: "10 min", section: "Tangent Lines", videoId: "CYnV3su1S5A" }
    ],
    
    'dimensional-analysis': [
      // Section 1: Unit Conversion Basics
      {
        id: 1,
        title: "Dimensional Analysis (Unit Conversion)",
        type: "lesson",
        duration: "6 min",
        section: "Unit Conversion Basics",
        content: {
          blocks: [
            { type: "text", content: "**Dimensional Analysis** is a way to check that a formula or calculation makes sense by looking at the **units**." },
            { type: "dimensionalAnalysisRules" },
            { type: "dimensionalAnalysisExample" }
          ]
        }
      },
      { id: 2, title: "Simple Dimensional Analysis Question", type: "video", duration: "8 min", section: "Unit Conversion Basics", videoId: "8Pt_Ie0ibQw" },
      // Section 2: Squared & Cubic Units
      {
        id: 3,
        title: "Dimensional Analysis with Squared/Cubic Units",
        type: "lesson",
        duration: "7 min",
        section: "Squared & Cubic Units",
        content: {
          blocks: [
            { type: "text", content: "When a unit is **squared** or **cubed**, the **entire conversion factor** must also be squared or cubed. You are converting the unit **twice** (or three times), not once." },
            { type: "squaredUnitsWarning" },
            { type: "squaredUnitsExample1" },
            { type: "squaredUnitsExample2" },
            { type: "whySquareConversion" }
          ]
        }
      },
      { id: 4, title: "Simple Dimensional Analysis with Squared Units", type: "video", duration: "8 min", section: "Squared & Cubic Units", videoId: "46FIIVQweZA" },
      { id: 5, title: "Multi-Step Dimensional Analysis with Squared Units", type: "video", duration: "10 min", section: "Squared & Cubic Units", videoId: "SdOgadn-vRk" }
    ],
    
    'percents': [
      // Section 1: Percent Fundamentals
      {
        id: 1,
        title: "Introduction to Percents",
        type: "lesson",
        duration: "5 min",
        section: "Percent Fundamentals",
        content: {
          blocks: [
            { type: "percentIntro" },
            { type: "percentTypesIntro" }
          ]
        }
      },
      // Section 2: Percent Of Questions
      {
        id: 2,
        title: "Percent Of Questions",
        type: "lesson",
        duration: "6 min",
        section: "Percent Of Questions",
        content: {
          blocks: [
            { type: "percentOfIntro" },
            { type: "percentOfTranslationTable" },
            { type: "percentOfWorkedExample" }
          ]
        }
      },
      { id: 3, title: "Simple Percent Of Question", type: "video", duration: "8 min", section: "Percent Of Questions", videoId: "4u5Z8BzlibM" },
      { id: 4, title: "Simple Percent Of Question #2", type: "video", duration: "8 min", section: "Percent Of Questions", videoId: "ogabppfe6XQ" },
      { id: 5, title: "Simple Percent Of Question #3", type: "video", duration: "8 min", section: "Percent Of Questions", videoId: "-JUF3R5ZHmU" },
      { id: 6, title: "Complex Percent Of Question", type: "video", duration: "10 min", section: "Percent Of Questions", videoId: "jAR4wJ_Btuw" },
      { id: 7, title: "Conceptual Percent Of Question", type: "video", duration: "10 min", section: "Percent Of Questions", videoId: "3cPc_xtceig" },
      // Section 3: Percent Change Questions
      {
        id: 8,
        title: "Percent Change Questions",
        type: "lesson",
        duration: "6 min",
        section: "Percent Change Questions",
        content: {
          blocks: [
            { type: "percentChangeIntro" },
            { type: "percentIncreaseFormula" },
            { type: "percentDecreaseFormula" },
            { type: "percentChangeKeyInsight" }
          ]
        }
      },
      { id: 9, title: "Simple Percent Change Example", type: "video", duration: "8 min", section: "Percent Change Questions", videoId: "_wCBskbQnxM" },
      { id: 10, title: "Complex Percent Change Example #1", type: "video", duration: "10 min", section: "Percent Change Questions", videoId: "3TF-HvTO3yY" },
      { id: 11, title: "Complex Percent Change Example #2", type: "video", duration: "10 min", section: "Percent Change Questions", videoId: "QgZQtaqOH0Q" },
      { id: 12, title: "Complex Percent Change Example #3", type: "video", duration: "10 min", section: "Percent Change Questions", videoId: "1B0scCTKYcc" },
      // Section 4: Percent Model Questions
      {
        id: 13,
        title: "Percent Model Questions",
        type: "lesson",
        duration: "5 min",
        section: "Percent Model Questions",
        content: {
          blocks: [
            { type: "percentModelIntro" },
            { type: "percentModelFormulaPremium" }
          ]
        }
      },
      { id: 14, title: "Simple Percent Model Example", type: "video", duration: "8 min", section: "Percent Model Questions", videoId: "gCuT1uatMx0" },
      { id: 15, title: "Complex Percent Model Example", type: "video", duration: "10 min", section: "Percent Model Questions", videoId: "1yAG9QEoLDs" },
      { id: 16, title: "Simple Conceptual Percent Model Example", type: "video", duration: "8 min", section: "Percent Model Questions", videoId: "ou7EbU-Gj0w" },
      { id: 17, title: "Complex Conceptual Percent Model Example", type: "video", duration: "10 min", section: "Percent Model Questions", videoId: "F7YlV88yC1M" }
    ],
    
    'exponents': [
      // Section 1: Laws of Exponents
      {
        id: 1,
        title: "Laws of Exponents",
        type: "lesson",
        duration: "8 min",
        section: "Laws of Exponents",
        content: {
          blocks: [
            { type: "exponentLawsIntro" },
            { type: "exponentRulesGrid" }
          ]
        }
      },
      { id: 2, title: "Simple Laws of Exponents (Product Rule) Example", type: "video", duration: "8 min", section: "Laws of Exponents", videoId: "wtzpclGJjwA" },
      { id: 3, title: "Simple Laws of Exponents (Quotient Rule) Example", type: "video", duration: "8 min", section: "Laws of Exponents", videoId: "rGbR2Sje0yg" },
      { id: 4, title: "Fractional Exponents Simple Example", type: "video", duration: "8 min", section: "Laws of Exponents", videoId: "wt4jURbliN8" },
      { id: 5, title: "Fractional Exponents Complex Example", type: "video", duration: "10 min", section: "Laws of Exponents", videoId: "MsEOg94CW2A" },
      // Section 2: Comparing Exponential Expressions
      {
        id: 6,
        title: "Comparing Exponential Expressions",
        type: "lesson",
        duration: "6 min",
        section: "Comparing Exponential Expressions",
        content: {
          blocks: [
            { type: "comparingExpIntro" },
            { type: "goldenRuleExponents" }
          ]
        }
      },
      { id: 7, title: "Simple Exponential Expression Comparison Example", type: "video", duration: "8 min", section: "Comparing Exponential Expressions", videoId: "7Jvib5zG3DY" },
      { id: 8, title: "Complex Exponential Expression Comparison Example", type: "video", duration: "10 min", section: "Comparing Exponential Expressions", videoId: "pj7ULfiKJGw" },
      // Section 3: Exponential Functions
      {
        id: 9,
        title: "Exponential Functions",
        type: "lesson",
        duration: "7 min",
        section: "Exponential Functions",
        content: {
          blocks: [
            { type: "exponentialFunctionIntro" },
            { type: "exponentialFunctionFormula" },
            { type: "growthVsDecay" }
          ]
        }
      },
      { id: 10, title: "Simple Exponential Function Example", type: "video", duration: "8 min", section: "Exponential Functions", videoId: "l7O1iak-Zh8" },
      { id: 11, title: "Interpreting Exponential Functions Example", type: "video", duration: "10 min", section: "Exponential Functions", videoId: "aySy8jrjpRU" },
      { id: 12, title: "Complex Exponential Function Example", type: "video", duration: "10 min", section: "Exponential Functions", videoId: "dTcLpzbW3Rg" }
    ],
    
    'quadratics': [
      // Section 1: Overview
      {
        id: 1,
        title: "Introduction to Quadratics",
        type: "lesson",
        duration: "6 min",
        section: "Overview",
        content: {
          blocks: [
            { type: "quadraticIntro" },
            { type: "quadraticStandardForm" },
            { type: "parabolaDirection" }
          ]
        }
      },
      // Section 2: Roots
      {
        id: 2,
        title: "Roots of a Quadratic",
        type: "lesson",
        duration: "6 min",
        section: "Roots",
        content: {
          blocks: [
            { type: "rootsIntro" },
            { type: "rootsSynonyms" },
            { type: "rootsOnGraph" }
          ]
        }
      },
      { id: 3, title: "Finding Roots Via Graph", type: "video", duration: "8 min", section: "Roots", videoId: "HjtgJosvHus" },
      { id: 4, title: "Finding Roots Via Factoring", type: "video", duration: "10 min", section: "Roots", videoId: "Ilf751ezqtM" },
      { id: 5, title: "Finding Roots Via Completing the Square", type: "video", duration: "10 min", section: "Roots", videoId: "WVhrFVpiqik" },
      { id: 6, title: "Finding Roots Via DESMOS", type: "video", duration: "8 min", section: "Roots", videoId: "vOfds1-LBx4" },
      { id: 7, title: "Complex Finding the Roots via DESMOS", type: "video", duration: "10 min", section: "Roots", videoId: "06R53pBYjs0" },
      // Section 3: Vertex
      {
        id: 8,
        title: "The Vertex",
        type: "lesson",
        duration: "6 min",
        section: "Vertex",
        content: {
          blocks: [
            { type: "vertexIntro" },
            { type: "vertexFormula" },
            { type: "vertexWhereVsWhat" }
          ]
        }
      },
      {
        id: 9,
        title: "Vertex Form",
        type: "lesson",
        duration: "5 min",
        section: "Vertex",
        content: {
          blocks: [
            { type: "vertexFormIntro" },
            { type: "vertexFormFormula" }
          ]
        }
      },
      { id: 10, title: "Finding the Vertex from a Graph", type: "video", duration: "8 min", section: "Vertex", videoId: "KSvSDNTvwOQ" },
      { id: 11, title: "Finding the Vertex from an Equation", type: "video", duration: "10 min", section: "Vertex", videoId: "XQ2Tw8hzjPk" },
      { id: 12, title: "Transformation of Vertex", type: "video", duration: "10 min", section: "Vertex", videoId: "R-f4HyaOsZY" },
      { id: 13, title: "Transformation of Vertex (DESMOS Method)", type: "video", duration: "8 min", section: "Vertex", videoId: "iKRlQJg463E" },
      // Section 4: Discriminant
      {
        id: 14,
        title: "The Discriminant",
        type: "lesson",
        duration: "7 min",
        section: "Discriminant",
        content: {
          blocks: [
            { type: "discriminantIntro" },
            { type: "discriminantFormula" },
            { type: "discriminantCases" },
            { type: "discriminantWhenToUse" }
          ]
        }
      },
      { id: 15, title: "Simple Discriminant Question #1", type: "video", duration: "8 min", section: "Discriminant", videoId: "HvmcHvs4aJw" },
      { id: 16, title: "Simple Discriminant Question #1 (DESMOS Method)", type: "video", duration: "8 min", section: "Discriminant", videoId: "qC4zH3TPEPs" },
      { id: 17, title: "Simple Discriminant Question #2", type: "video", duration: "8 min", section: "Discriminant", videoId: "3T7p7HIovK0" },
      { id: 18, title: "Simple Discriminant Question #2 (DESMOS Method)", type: "video", duration: "8 min", section: "Discriminant", videoId: "QH6bXCWlYaU" },
      { id: 19, title: "Complex Discriminant Question", type: "video", duration: "10 min", section: "Discriminant", videoId: "z8eu9oFwk2I" },
      { id: 20, title: "Simple Discriminant System Question", type: "video", duration: "10 min", section: "Discriminant", videoId: "uGGb383xfu4" },
      { id: 21, title: "Simple Discriminant System Question (DESMOS Method)", type: "video", duration: "8 min", section: "Discriminant", videoId: "skD4XM2RIgw" },
      { id: 22, title: "Complex Discriminant System Question", type: "video", duration: "12 min", section: "Discriminant", videoId: "l6yMmy60gFA" },
      // Section 5: Deriving Standard Form
      {
        id: 23,
        title: "Deriving Standard Form from a Graph",
        type: "lesson",
        duration: "6 min",
        section: "Deriving Standard Form",
        content: {
          blocks: [
            { type: "derivingStandardFormIntro" },
            { type: "derivingStandardFormMethods" },
            { type: "derivingStandardFormTips" }
          ]
        }
      },
      { id: 24, title: "Deriving Standard Form From Graph", type: "video", duration: "10 min", section: "Deriving Standard Form", videoId: "K66XHuhQy-U" },
      { id: 25, title: "Deriving Standard Form From Graph (DESMOS Method)", type: "video", duration: "8 min", section: "Deriving Standard Form", videoId: "QpUMRFoMUMo" },
      { id: 26, title: "Complex Deriving Standard Form (Vertex Form Method)", type: "video", duration: "12 min", section: "Deriving Standard Form", videoId: "0ijCFEhltcg" },
      { id: 27, title: "Complex Deriving Standard Form (System of Equations Method)", type: "video", duration: "12 min", section: "Deriving Standard Form", videoId: "G6dJDa4sFCU" }
    ],
    
    'radians-degrees': [
      {
        id: 1,
        title: "Radians & Degrees",
        type: "lesson",
        duration: "5 min",
        section: "Converting Angles",
        content: {
          blocks: [
            { type: "radiansDegreesIntro" },
            { type: "conversionFormulas" },
            { type: "commonAnglesTable" },
            { type: "desmosTip" }
          ]
        }
      },
      { id: 2, title: "Simple Converting Radians to Degrees Example", type: "video", duration: "6 min", section: "Converting Angles", videoId: "Ymvs5c9ZGoU" },
      { id: 3, title: "Using DESMOS Calculator in Radian Mode Example", type: "video", duration: "5 min", section: "Converting Angles", videoId: "fMeL-KVlrgA" },
      { id: 4, title: "Using DESMOS Calculator in Degree Mode Example", type: "video", duration: "5 min", section: "Converting Angles", videoId: "fMeL-KVlrgA" }
    ],
    
    'equivalent-expressions': [
      {
        id: 1,
        title: "Equivalent Expressions",
        type: "lesson",
        duration: "4 min",
        section: "Equivalent Expressions",
        content: {
          blocks: [
            { type: "equivalentExpressionsIntro" },
            { type: "equivalentExpressionsMethod" },
            { type: "equivalentExpressionsExample" }
          ]
        }
      },
      { id: 2, title: "Equivalent Expressions Example #1 (DESMOS Method)", type: "video", duration: "6 min", section: "Equivalent Expressions", videoId: "2if86_b5ljE" },
      { id: 3, title: "Equivalent Expressions Example #2 (DESMOS Method)", type: "video", duration: "6 min", section: "Equivalent Expressions", videoId: "rJvyuTF9_Uw" }
    ],
    'statistics': [
      // Section: Mean
      {
        id: 1,
        title: "What is the Mean?",
        type: "lesson",
        duration: "5 min",
        section: "Mean",
        hero: {
          tagline: "THE AVERAGE",
          subtitle: "Add them up, divide by count",
          gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
        },
        content: {
          blocks: [
            { type: "meanIntro" },
            { type: "meanFormula" },
            { type: "text", content: "The mean is often called the **average** — it's the value you get when you **add up all the values** and **divide by how many** there are." },
            { type: "text", content: "On the SAT, mean questions often involve finding a missing value when given the mean, or understanding how adding/removing values affects the mean." }
          ]
        }
      },
      { id: 2, title: "Simple Calculating Mean Example", type: "video", duration: "6 min", section: "Mean", videoId: "CLPwCiT26Yw" },
      { id: 3, title: "Simple Calculating Mean Example (DESMOS Method)", type: "video", duration: "6 min", section: "Mean", videoId: "PaGkN42IbFk" },
      {
        id: 4,
        title: "How Outliers Affect the Mean",
        type: "lesson",
        duration: "6 min",
        section: "Mean",
        hero: {
          tagline: "OUTLIER ALERT",
          subtitle: "One extreme value changes everything",
          gradient: "linear-gradient(135deg, #f5576c 0%, #f093fb 100%)"
        },
        content: {
          blocks: [
            { type: "outlierMeanIntro" },
            { type: "outlierMeanExample" },
            { type: "text", content: "**Golden Rule:** An outlier pulls the mean in its direction." },
            { type: "list", items: [
              "A **high outlier** increases the mean",
              "A **low outlier** decreases the mean"
            ]},
            { type: "text", content: "This is why the mean is considered **sensitive to outliers** — even one extreme value can significantly shift the average." }
          ]
        }
      },
      { id: 5, title: "Outlier Affecting Mean Example #1", type: "video", duration: "8 min", section: "Mean", videoId: "VrM1qUVevf8" },
      { id: 6, title: "Outlier Affecting Mean Example #2", type: "video", duration: "8 min", section: "Mean", videoId: "NVHHjqpKrxA" },
      { id: 7, title: "Finding Mean of a Combined Data Set", type: "video", duration: "10 min", section: "Mean", videoId: "fuxm-h0xAOQ" },
      // Section: Median
      {
        id: 8,
        title: "What is the Median?",
        type: "lesson",
        duration: "5 min",
        section: "Median",
        hero: {
          tagline: "THE MIDDLE VALUE",
          subtitle: "Resistant to outliers",
          gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
        },
        content: {
          blocks: [
            { type: "medianIntro" },
            { type: "medianSteps" },
            { type: "text", content: "Unlike the mean, the median is **resistant to outliers** because it only depends on the middle position, not the total sum of all values." }
          ]
        }
      },
      {
        id: 9,
        title: "Finding Median from a Frequency Table",
        type: "lesson",
        duration: "6 min",
        section: "Median",
        hero: {
          tagline: "COUNT TO THE MIDDLE",
          subtitle: "Working with frequency tables",
          gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
        },
        content: {
          blocks: [
            { type: "medianFrequencyIntro" },
            { type: "medianFrequencySteps" },
            { type: "text", content: "**Pro Tip:** When N is even, the median is the average of the values at positions N/2 and (N/2 + 1)." }
          ]
        }
      },
      { id: 10, title: "Simple Calculating Median Example #1", type: "video", duration: "6 min", section: "Median", videoId: "vQ2i2EqGtT4" },
      { id: 11, title: "Simple Calculating Median Example #1 (DESMOS Method)", type: "video", duration: "6 min", section: "Median", videoId: "QyDRT97bYg0" },
      { id: 12, title: "Simple Calculating Median Example #2", type: "video", duration: "6 min", section: "Median", videoId: "jit5NLKJdGY" },
      { id: 13, title: "Simple Calculating Median Example #2 (DESMOS Method)", type: "video", duration: "6 min", section: "Median", videoId: "olTnIv_PANA" },
      { id: 14, title: "Finding Median from Frequency Table", type: "video", duration: "8 min", section: "Median", videoId: "pcdZAZ8lQiI" },
      { id: 15, title: "Comparing Mean & Median of Two Data Sets", type: "video", duration: "10 min", section: "Median", videoId: "Hf8geKrPg00" },
      // Section: Mode
      {
        id: 16,
        title: "What is the Mode?",
        type: "lesson",
        duration: "4 min",
        section: "Mode",
        content: {
          blocks: [
            { type: "modeIntro" },
            { type: "modeExamples" },
            { type: "text", content: "The mode is especially useful for **categorical data** where calculating a mean or median doesn't make sense." }
          ]
        }
      },
      // Section: Range
      {
        id: 17,
        title: "What is the Range?",
        type: "lesson",
        duration: "4 min",
        section: "Range",
        content: {
          blocks: [
            { type: "rangeIntro" },
            { type: "rangeFormula" },
            { type: "text", content: "The range tells you **how spread out** the data is. A larger range means more variability in the data." },
            { type: "example", title: "Example", content: "Data set: 3, 7, 12, 15, 22\n\nRange = 22 − 3 = **19**" }
          ]
        }
      },
      { id: 18, title: "Simple Calculating Range Example", type: "video", duration: "6 min", section: "Range", videoId: "Ja8KCtWP6JY" },
      { id: 19, title: "Comparing Median & Range of Two Data Sets", type: "video", duration: "8 min", section: "Range", videoId: "zo3W571N1ag" },
      // Section: Standard Deviation
      {
        id: 20,
        title: "What is Standard Deviation?",
        type: "lesson",
        duration: "6 min",
        section: "Standard Deviation",
        content: {
          blocks: [
            { type: "stdDevIntro" },
            { type: "stdDevVisual" },
            { type: "text", content: "**Good news:** You will **not** need to calculate standard deviation on the SAT — you just need to understand what it **means** and how to **compare** standard deviations." },
            { type: "list", items: [
              "A data set with values **closer together** has a **smaller** standard deviation",
              "A data set with values **spread far apart** has a **larger** standard deviation"
            ]}
          ]
        }
      },
      { id: 21, title: "Simple Standard Deviation Example", type: "video", duration: "8 min", section: "Standard Deviation", videoId: "m3GVIhKeeZY" },
      { id: 22, title: "Complex Standard Deviation Example", type: "video", duration: "10 min", section: "Standard Deviation", videoId: "rz74TuYvxKs" },
      // Section: Margin of Error
      {
        id: 23,
        title: "What is Margin of Error?",
        type: "lesson",
        duration: "7 min",
        section: "Margin of Error",
        content: {
          blocks: [
            { type: "marginOfErrorIntro" },
            { type: "marginOfErrorVisual" },
            { type: "marginOfErrorSampleSize" },
            { type: "text", content: "**Key takeaway:** The margin of error connects the **sample statistic** to the **true population value** by showing a **reasonable range** where the true value is expected to be." }
          ]
        }
      },
      { id: 24, title: "Simple Margin of Error Example #1", type: "video", duration: "8 min", section: "Margin of Error", videoId: "ToUn8E5a7Ho" },
      { id: 25, title: "Simple Margin of Error Example #2", type: "video", duration: "8 min", section: "Margin of Error", videoId: "By4TzkHujmc" }
    ],
    'volume': [
      // Section: Fundamentals
      {
        id: 1,
        title: "What is Volume?",
        type: "lesson",
        duration: "5 min",
        section: "Fundamentals",
        hero: {
          tagline: "3D SPACE",
          subtitle: "Measuring what's inside",
          gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
        },
        content: {
          blocks: [
            { type: "volumeIntro" },
            { type: "volumeUnits" }
          ]
        }
      },
      // Section: Rectangular Prism
      {
        id: 2,
        title: "Volume of a Rectangular Prism",
        type: "lesson",
        duration: "5 min",
        section: "Rectangular Prism",
        hero: {
          tagline: "LENGTH × WIDTH × HEIGHT",
          subtitle: "The classic box formula",
          gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
        },
        content: {
          blocks: [
            { type: "rectangularPrismIntro" },
            { type: "rectangularPrismFormula" },
            { type: "rectangularPrismExample" }
          ]
        }
      },
      { id: 3, title: "Simple Volume of Rectangular Prism", type: "video", duration: "6 min", section: "Rectangular Prism", videoId: "Pr0sgY6eHaA" },
      { id: 4, title: "Complex Volume of Rectangular Prism", type: "video", duration: "8 min", section: "Rectangular Prism", videoId: "YK1O3QN_puE" },
      // Section: Cube
      {
        id: 5,
        title: "Volume of a Cube",
        type: "lesson",
        duration: "5 min",
        section: "Cube",
        hero: {
          tagline: "s³",
          subtitle: "All sides equal",
          gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
        },
        content: {
          blocks: [
            { type: "cubeIntro" },
            { type: "cubeFormula" },
            { type: "cubeExample" }
          ]
        }
      },
      { id: 6, title: "Simple Volume of Cube Example", type: "video", duration: "6 min", section: "Cube", videoId: "3NGFvYlxWsE" },
      // Section: Cylinder
      {
        id: 7,
        title: "Volume of a Cylinder",
        type: "lesson",
        duration: "5 min",
        section: "Cylinder",
        hero: {
          tagline: "πr²h",
          subtitle: "Circles stacked up",
          gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
        },
        content: {
          blocks: [
            { type: "cylinderIntro" },
            { type: "cylinderFormula" },
            { type: "cylinderExample" }
          ]
        }
      },
      { id: 8, title: "Simple Volume of Cylinder Example", type: "video", duration: "6 min", section: "Cylinder", videoId: "K_wAeM8oKSo" },
      { id: 9, title: "Complex Volume of Cylinder Example", type: "video", duration: "8 min", section: "Cylinder", videoId: "bVOOj1uhCLM" },
      // Section: Sphere
      {
        id: 10,
        title: "Volume of a Sphere",
        type: "lesson",
        duration: "5 min",
        section: "Sphere",
        hero: {
          tagline: "⁴⁄₃πr³",
          subtitle: "The perfect 3D shape",
          gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
        },
        content: {
          blocks: [
            { type: "sphereIntro" },
            { type: "sphereFormula" },
            { type: "sphereExample" }
          ]
        }
      },
      { id: 11, title: "Simple Volume of Sphere Example", type: "video", duration: "6 min", section: "Sphere", videoId: "vgp4iFY6vdU" },
      { id: 12, title: "Complex Volume of Sphere Example", type: "video", duration: "8 min", section: "Sphere", videoId: "8ix6fP1eQlU" },
      // Section: Cone
      {
        id: 13,
        title: "Volume of a Cone",
        type: "lesson",
        duration: "5 min",
        section: "Cone",
        hero: {
          tagline: "⅓πr²h",
          subtitle: "One-third of a cylinder",
          gradient: "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)"
        },
        content: {
          blocks: [
            { type: "coneIntro" },
            { type: "coneFormula" },
            { type: "coneExample" }
          ]
        }
      },
      { id: 14, title: "Simple Volume of Cone Example", type: "video", duration: "6 min", section: "Cone", videoId: "e3E58fCpu4E" },
      // Section: Triangular Prism
      {
        id: 15,
        title: "Volume of a Triangular Prism",
        type: "lesson",
        duration: "5 min",
        section: "Triangular Prism",
        content: {
          blocks: [
            { type: "triangularPrismIntro" },
            { type: "triangularPrismFormula" },
            { type: "triangularPrismExample" }
          ]
        }
      },
      { id: 16, title: "Simple Volume of Triangular Prism Example", type: "video", duration: "6 min", section: "Triangular Prism", videoId: "Hu_1bndFGFY" }
    ],
    'systems': [
      // Section: Introduction
      {
        id: 1,
        title: "What is a System of Equations?",
        type: "lesson",
        duration: "6 min",
        section: "Introduction",
        hero: {
          tagline: "TWO EQUATIONS, TWO UNKNOWNS",
          subtitle: "Finding where the lines meet",
          gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
        },
        content: {
          blocks: [
            { type: "systemsIntro" },
            { type: "systemsWhyWeNeedThem" },
            { type: "systemsWhatIsIt" },
            { type: "systemsSolutionMeaning" }
          ]
        }
      },
      {
        id: 2,
        title: "Types of Solutions",
        type: "lesson",
        duration: "6 min",
        section: "Introduction",
        hero: {
          tagline: "ONE, NONE, OR INFINITE",
          subtitle: "How lines can intersect",
          gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
        },
        content: {
          blocks: [
            { type: "systemsSolutionTypes" },
            { type: "systemsGraphicalMeaning" }
          ]
        }
      },
      // Section: Setting Up Systems
      {
        id: 3,
        title: "Writing Systems from Word Problems",
        type: "lesson",
        duration: "6 min",
        section: "Setting Up Systems",
        hero: {
          tagline: "TRANSLATE THE WORDS",
          subtitle: "From story to equations",
          gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
        },
        content: {
          blocks: [
            { type: "systemsSetupStrategy" },
            { type: "systemsFromContext" },
            { type: "systemsContextExample" }
          ]
        }
      },
      { id: 4, title: "Deriving System of Equation from Context Example #1", type: "video", duration: "8 min", section: "Setting Up Systems", videoId: "U-XS0YLJDBU" },
      { id: 5, title: "Deriving System of Equation from Context Example #2", type: "video", duration: "8 min", section: "Setting Up Systems", videoId: "H_VAwlhG17w" },
      // Section: Substitution Method
      {
        id: 6,
        title: "Solving by Substitution",
        type: "lesson",
        duration: "7 min",
        section: "Substitution Method",
        hero: {
          tagline: "PLUG IT IN",
          subtitle: "Replace one variable with an expression",
          gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
        },
        content: {
          blocks: [
            { type: "substitutionIntro" },
            { type: "substitutionWhenToUse" },
            { type: "substitutionSteps" },
            { type: "substitutionExample" }
          ]
        }
      },
      { id: 7, title: "Solving System of Equation using Substitution", type: "video", duration: "8 min", section: "Substitution Method", videoId: "50Hjbc3rZ0U" },
      // Section: Elimination Method
      {
        id: 8,
        title: "Solving by Elimination",
        type: "lesson",
        duration: "7 min",
        section: "Elimination Method",
        hero: {
          tagline: "ADD TO CANCEL",
          subtitle: "Make one variable disappear",
          gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
        },
        content: {
          blocks: [
            { type: "eliminationIntro" },
            { type: "eliminationWhenToUse" },
            { type: "eliminationSteps" },
            { type: "eliminationExample" }
          ]
        }
      },
      { id: 9, title: "Solving System of Equations using Elimination", type: "video", duration: "8 min", section: "Elimination Method", videoId: "pvOrqZvCn-4" },
      // Section: DESMOS Method
      {
        id: 10,
        title: "Solving with DESMOS",
        type: "lesson",
        duration: "5 min",
        section: "DESMOS Method",
        hero: {
          tagline: "⚡ THE FAST METHOD",
          subtitle: "Graph it, click the intersection, done",
          gradient: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)"
        },
        content: {
          blocks: [
            { type: "desmosIntro" },
            { type: "desmosSATReality" },
            { type: "desmosSteps" },
            { type: "desmosWhenToUse" }
          ]
        }
      },
      { id: 11, title: "Solving System of Equations using DESMOS Example #1", type: "video", duration: "6 min", section: "DESMOS Method", videoId: "rmV0RBBmFPk" },
      { id: 12, title: "Solving System of Equations using DESMOS Example #2", type: "video", duration: "6 min", section: "DESMOS Method", videoId: "8qCUhJYM3Tg" },
      // Section: Infinite Solutions
      {
        id: 13,
        title: "Infinite Solutions & Parametric Form",
        type: "lesson",
        duration: "7 min",
        section: "Infinite Solutions",
        hero: {
          tagline: "SAME LINE = ∞ SOLUTIONS",
          subtitle: "When equations are equivalent",
          gradient: "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)"
        },
        content: {
          blocks: [
            { type: "infiniteSolutionsIntro" },
            { type: "infiniteSolutionsRecognize" },
            { type: "infiniteSolutionsParametric" },
            { type: "infiniteSolutionsExample" }
          ]
        }
      },
      { id: 14, title: "Infinite Solutions SAT Example", type: "video", duration: "10 min", section: "Infinite Solutions", videoId: "e37RY2cRYMI" }
    ]
  };

  const currentModuleLessons = activeModule ? allLessons[activeModule] : [];
  const currentLesson = activeLesson !== null ? currentModuleLessons.find(l => l.id === activeLesson) : null;
  const currentModuleInfo = modules.find(m => m.id === activeModule);

  // Group lessons by section
  const sections = currentModuleLessons.reduce((acc, lesson) => {
    if (!acc[lesson.section]) {
      acc[lesson.section] = [];
    }
    acc[lesson.section].push(lesson);
    return acc;
  }, {});

  const renderText = (text) => {
    return text.split(/(\*\*.*?\*\*|\*.*?\*)/).map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i} style={{ fontWeight: '600', color: '#1d1d1f' }}>{part.slice(2, -2)}</strong>;
      } else if (part.startsWith('*') && part.endsWith('*')) {
        return <em key={i} style={{ color: '#ea580c' }}>{part.slice(1, -1)}</em>;
      }
      return part;
    });
  };

  const renderLessonContent = () => {
    if (!currentLesson) return null;

    if (currentLesson.type === 'video') {
      return (
        <div>
          <div style={{
            position: 'relative',
            paddingBottom: '56.25%',
            height: 0,
            borderRadius: '12px',
            overflow: 'hidden',
            background: '#000'
          }}>
            <iframe
              src={`https://www.youtube.com/embed/${currentLesson.videoId}`}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                border: 'none'
              }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={currentLesson.title}
            />
          </div>
        </div>
      );
    }

    return (
      <div>
        {/* Hero Banner */}
        {currentLesson.hero && (
          <div style={{
            background: currentLesson.hero.gradient,
            borderRadius: '20px',
            padding: '48px 40px',
            marginBottom: '40px',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {/* Decorative circles */}
            <div style={{
              position: 'absolute',
              top: '-50px',
              right: '-50px',
              width: '200px',
              height: '200px',
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.1)'
            }} />
            <div style={{
              position: 'absolute',
              bottom: '-30px',
              left: '20%',
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.08)'
            }} />
            
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{
                fontSize: '12px',
                fontWeight: '700',
                color: 'rgba(255,255,255,0.85)',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                marginBottom: '16px'
              }}>
                {currentLesson.hero.tagline}
              </div>
              <h2 style={{
                fontSize: '32px',
                fontWeight: '700',
                color: '#fff',
                marginBottom: '12px',
                letterSpacing: '-0.5px'
              }}>
                {currentLesson.title}
              </h2>
              <p style={{
                fontSize: '18px',
                color: 'rgba(255,255,255,0.9)',
                fontWeight: '400'
              }}>
                {currentLesson.hero.subtitle}
              </p>
            </div>
          </div>
        )}
        
        {currentLesson.content.blocks.map((block, idx) => {
          switch (block.type) {
            case 'text':
              // Check if this is the first text block (make it larger as a lead)
              const isFirstText = currentLesson.content.blocks.findIndex(b => b.type === 'text') === idx;
              return (
                <p key={idx} style={{
                  fontSize: isFirstText ? '19px' : '17px',
                  lineHeight: '1.8',
                  color: isFirstText ? '#1d1d1f' : '#424245',
                  marginBottom: '24px',
                  fontWeight: isFirstText ? '400' : '400'
                }}>
                  {renderText(block.content)}
                </p>
              );
            
            case 'formula':
              return (
                <div key={idx} style={{
                  background: 'linear-gradient(135deg, #f8f9fa 0%, #f1f3f4 100%)',
                  borderRadius: '16px',
                  padding: '36px',
                  margin: '36px 0',
                  textAlign: 'center',
                  border: '1px solid rgba(0,0,0,0.04)'
                }}>
                  {block.label && (
                    <div style={{
                      fontSize: '11px',
                      fontWeight: '700',
                      color: '#6b7280',
                      textTransform: 'uppercase',
                      letterSpacing: '1.5px',
                      marginBottom: '16px'
                    }}>
                      {block.label}
                    </div>
                  )}
                  {block.fraction ? (
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '16px',
                      fontSize: '28px',
                      fontWeight: '500',
                      color: '#1d1d1f',
                      fontFamily: 'Georgia, serif',
                      fontStyle: 'italic'
                    }}>
                      {block.prefix && <span>{block.prefix}</span>}
                      <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                      }}>
                        <span style={{ color: block.numeratorColor || '#1d1d1f' }}>{block.fraction.numerator}</span>
                        <div style={{
                          width: '100%',
                          height: '2px',
                          background: '#1d1d1f',
                          margin: '4px 0'
                        }} />
                        <span style={{ color: block.denominatorColor || '#1d1d1f' }}>{block.fraction.denominator}</span>
                      </div>
                      {block.suffix && <span>{block.suffix}</span>}
                      {block.secondFraction && (
                        <>
                          <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center'
                          }}>
                            <span style={{ color: block.numeratorColor || '#1d1d1f' }}>{block.secondFraction.numerator}</span>
                            <div style={{
                              width: '100%',
                              height: '2px',
                              background: '#1d1d1f',
                              margin: '4px 0'
                            }} />
                            <span style={{ color: block.denominatorColor || '#1d1d1f' }}>{block.secondFraction.denominator}</span>
                          </div>
                          {block.secondSuffix && <span>{block.secondSuffix}</span>}
                        </>
                      )}
                    </div>
                  ) : (
                    <div style={{
                      fontSize: '32px',
                      fontWeight: '500',
                      color: '#1d1d1f',
                      fontFamily: 'Georgia, serif',
                      fontStyle: 'italic'
                    }}>
                      {block.content}
                    </div>
                  )}
                </div>
              );
            
            case 'fractionEquation':
              return (
                <div key={idx} style={{
                  background: '#f5f5f7',
                  borderRadius: '12px',
                  padding: '32px',
                  margin: '24px 0',
                  textAlign: 'center'
                }}>
                  {block.label && (
                    <div style={{
                      fontSize: '12px',
                      fontWeight: '600',
                      color: '#86868b',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      marginBottom: '20px'
                    }}>
                      {block.label}
                    </div>
                  )}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '28px',
                    fontSize: '26px',
                    fontWeight: '500',
                    color: '#1d1d1f',
                    fontFamily: 'Georgia, serif',
                    fontStyle: 'italic',
                    flexWrap: 'wrap'
                  }}>
                    {/* Left fraction */}
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center'
                    }}>
                      <span style={{ color: block.leftColor || '#2563eb' }}>{block.leftNumerator}</span>
                      <div style={{
                        width: '100%',
                        minWidth: '140px',
                        height: '3px',
                        background: '#1d1d1f',
                        margin: '8px 0'
                      }} />
                      <span style={{ color: '#6b7280' }}>{block.leftDenominator}</span>
                    </div>
                    {/* Equals sign */}
                    <span style={{ 
                      fontSize: '36px', 
                      fontWeight: '400',
                      fontStyle: 'normal',
                      color: '#1d1d1f'
                    }}>=</span>
                    {/* Right fraction */}
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center'
                    }}>
                      <span style={{ color: block.rightColor || '#7c3aed' }}>{block.rightNumerator}</span>
                      <div style={{
                        width: '100%',
                        minWidth: '100px',
                        height: '3px',
                        background: '#1d1d1f',
                        margin: '8px 0'
                      }} />
                      <span style={{ color: '#6b7280' }}>{block.rightDenominator}</span>
                    </div>
                  </div>
                </div>
              );
            
            case 'arcLengthExample':
              return (
                <div key={idx} style={{
                  background: '#f5f5f7',
                  borderRadius: '12px',
                  padding: '28px',
                  margin: '24px 0'
                }}>
                  <div style={{
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#ea580c',
                    marginBottom: '16px'
                  }}>
                    Example
                  </div>
                  <div style={{
                    fontSize: '17px',
                    color: '#424245',
                    marginBottom: '24px'
                  }}>
                    Find the arc length for a <strong>90° angle</strong> in a circle with <strong>radius 8</strong>.
                  </div>
                  
                  {/* Step 1: Find Circumference */}
                  <div style={{
                    background: '#fff',
                    borderRadius: '8px',
                    padding: '16px 20px',
                    marginBottom: '16px',
                    border: '1px solid #e5e5e5'
                  }}>
                    <div style={{ fontSize: '13px', color: '#86868b', marginBottom: '8px', fontWeight: '600' }}>STEP 1: FIND CIRCUMFERENCE</div>
                    <div style={{ fontSize: '18px', fontFamily: 'Georgia, serif', color: '#1d1d1f' }}>
                      C = 2πr = 2π(8) = <strong>16π</strong>
                    </div>
                  </div>
                  
                  {/* Step 2: Apply Formula */}
                  <div style={{
                    background: '#fff',
                    borderRadius: '8px',
                    padding: '20px',
                    marginBottom: '16px',
                    border: '1px solid #e5e5e5'
                  }}>
                    <div style={{ fontSize: '13px', color: '#86868b', marginBottom: '12px', fontWeight: '600' }}>STEP 2: APPLY THE FORMULA</div>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '20px',
                      fontSize: '22px',
                      fontFamily: 'Georgia, serif',
                      fontStyle: 'italic',
                      flexWrap: 'wrap'
                    }}>
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <span style={{ color: '#2563eb' }}>Arc Length</span>
                        <div style={{ width: '100%', height: '2px', background: '#1d1d1f', margin: '6px 0' }} />
                        <span style={{ color: '#6b7280' }}>16π</span>
                      </div>
                      <span style={{ fontStyle: 'normal' }}>=</span>
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <span style={{ color: '#7c3aed' }}>90°</span>
                        <div style={{ width: '100%', height: '2px', background: '#1d1d1f', margin: '6px 0' }} />
                        <span style={{ color: '#6b7280' }}>360°</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Step 3: Solve */}
                  <div style={{
                    background: '#fff',
                    borderRadius: '8px',
                    padding: '20px',
                    marginBottom: '16px',
                    border: '1px solid #e5e5e5'
                  }}>
                    <div style={{ fontSize: '13px', color: '#86868b', marginBottom: '12px', fontWeight: '600' }}>STEP 3: SIMPLIFY & SOLVE</div>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '20px',
                      fontSize: '22px',
                      fontFamily: 'Georgia, serif',
                      fontStyle: 'italic',
                      flexWrap: 'wrap'
                    }}>
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <span style={{ color: '#2563eb' }}>Arc Length</span>
                        <div style={{ width: '100%', height: '2px', background: '#1d1d1f', margin: '6px 0' }} />
                        <span style={{ color: '#6b7280' }}>16π</span>
                      </div>
                      <span style={{ fontStyle: 'normal' }}>=</span>
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <span style={{ color: '#7c3aed' }}>1</span>
                        <div style={{ width: '40px', height: '2px', background: '#1d1d1f', margin: '6px 0' }} />
                        <span style={{ color: '#6b7280' }}>4</span>
                      </div>
                    </div>
                    <div style={{ textAlign: 'center', marginTop: '16px', fontSize: '18px', fontFamily: 'Georgia, serif', color: '#1d1d1f' }}>
                      Arc Length = <span style={{ fontStyle: 'italic' }}>¼</span> × 16π = <strong style={{ color: '#16a34a' }}>4π</strong>
                    </div>
                  </div>
                </div>
              );
            
            case 'sectorAreaExample':
              return (
                <div key={idx} style={{
                  background: '#f5f5f7',
                  borderRadius: '12px',
                  padding: '28px',
                  margin: '24px 0'
                }}>
                  <div style={{
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#ea580c',
                    marginBottom: '16px'
                  }}>
                    Example
                  </div>
                  <div style={{
                    fontSize: '17px',
                    color: '#424245',
                    marginBottom: '24px'
                  }}>
                    Find the sector area for a <strong>60° angle</strong> in a circle with <strong>radius 6</strong>.
                  </div>
                  
                  {/* Step 1: Find Circle Area */}
                  <div style={{
                    background: '#fff',
                    borderRadius: '8px',
                    padding: '16px 20px',
                    marginBottom: '16px',
                    border: '1px solid #e5e5e5'
                  }}>
                    <div style={{ fontSize: '13px', color: '#86868b', marginBottom: '8px', fontWeight: '600' }}>STEP 1: FIND CIRCLE AREA</div>
                    <div style={{ fontSize: '18px', fontFamily: 'Georgia, serif', color: '#1d1d1f' }}>
                      A = πr² = π(6)² = <strong>36π</strong>
                    </div>
                  </div>
                  
                  {/* Step 2: Apply Formula */}
                  <div style={{
                    background: '#fff',
                    borderRadius: '8px',
                    padding: '20px',
                    marginBottom: '16px',
                    border: '1px solid #e5e5e5'
                  }}>
                    <div style={{ fontSize: '13px', color: '#86868b', marginBottom: '12px', fontWeight: '600' }}>STEP 2: APPLY THE FORMULA</div>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '20px',
                      fontSize: '22px',
                      fontFamily: 'Georgia, serif',
                      fontStyle: 'italic',
                      flexWrap: 'wrap'
                    }}>
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <span style={{ color: '#2563eb' }}>Sector Area</span>
                        <div style={{ width: '100%', height: '2px', background: '#1d1d1f', margin: '6px 0' }} />
                        <span style={{ color: '#6b7280' }}>36π</span>
                      </div>
                      <span style={{ fontStyle: 'normal' }}>=</span>
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <span style={{ color: '#7c3aed' }}>60°</span>
                        <div style={{ width: '100%', height: '2px', background: '#1d1d1f', margin: '6px 0' }} />
                        <span style={{ color: '#6b7280' }}>360°</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Step 3: Solve */}
                  <div style={{
                    background: '#fff',
                    borderRadius: '8px',
                    padding: '20px',
                    marginBottom: '16px',
                    border: '1px solid #e5e5e5'
                  }}>
                    <div style={{ fontSize: '13px', color: '#86868b', marginBottom: '12px', fontWeight: '600' }}>STEP 3: SIMPLIFY & SOLVE</div>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '20px',
                      fontSize: '22px',
                      fontFamily: 'Georgia, serif',
                      fontStyle: 'italic',
                      flexWrap: 'wrap'
                    }}>
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <span style={{ color: '#2563eb' }}>Sector Area</span>
                        <div style={{ width: '100%', height: '2px', background: '#1d1d1f', margin: '6px 0' }} />
                        <span style={{ color: '#6b7280' }}>36π</span>
                      </div>
                      <span style={{ fontStyle: 'normal' }}>=</span>
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <span style={{ color: '#7c3aed' }}>1</span>
                        <div style={{ width: '40px', height: '2px', background: '#1d1d1f', margin: '6px 0' }} />
                        <span style={{ color: '#6b7280' }}>6</span>
                      </div>
                    </div>
                    <div style={{ textAlign: 'center', marginTop: '16px', fontSize: '18px', fontFamily: 'Georgia, serif', color: '#1d1d1f' }}>
                      Sector Area = <span style={{ fontStyle: 'italic' }}>⅙</span> × 36π = <strong style={{ color: '#16a34a' }}>6π</strong>
                    </div>
                  </div>
                </div>
              );
            
            case 'circleStandardFormExample':
              return (
                <div key={idx} style={{
                  background: '#f5f5f7',
                  borderRadius: '12px',
                  padding: '28px',
                  margin: '24px 0'
                }}>
                  <div style={{
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#ea580c',
                    marginBottom: '20px'
                  }}>
                    Example
                  </div>
                  
                  {/* Given Equation */}
                  <div style={{
                    background: '#fff',
                    borderRadius: '8px',
                    padding: '20px',
                    marginBottom: '20px',
                    border: '1px solid #e5e5e5',
                    textAlign: 'center'
                  }}>
                    <div style={{ fontSize: '13px', color: '#86868b', marginBottom: '12px', fontWeight: '600' }}>GIVEN EQUATION</div>
                    <div style={{ 
                      fontSize: '24px', 
                      fontFamily: 'Georgia, serif', 
                      color: '#1d1d1f',
                      fontWeight: '500'
                    }}>
                      (<span style={{ color: '#2563eb' }}>x</span> + 2)² + (<span style={{ color: '#2563eb' }}>y</span> − 5)² = 64
                    </div>
                  </div>
                  
                  {/* Finding the Center */}
                  <div style={{
                    background: '#fff',
                    borderRadius: '8px',
                    padding: '20px',
                    marginBottom: '16px',
                    border: '1px solid #e5e5e5'
                  }}>
                    <div style={{ fontSize: '13px', color: '#86868b', marginBottom: '16px', fontWeight: '600' }}>FINDING THE CENTER</div>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      {/* h value */}
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        padding: '12px 16px',
                        background: '#f0f9ff',
                        borderRadius: '6px',
                        flexWrap: 'wrap'
                      }}>
                        <span style={{ fontSize: '16px', color: '#6b7280' }}>Equation has</span>
                        <span style={{ 
                          fontSize: '18px', 
                          fontFamily: 'Georgia, serif',
                          fontWeight: '600',
                          color: '#2563eb',
                          padding: '4px 12px',
                          background: '#dbeafe',
                          borderRadius: '4px'
                        }}>(x + 2)</span>
                        <span style={{ fontSize: '20px', color: '#9ca3af' }}>→</span>
                        <span style={{ fontSize: '16px', color: '#6b7280' }}>h =</span>
                        <span style={{ 
                          fontSize: '20px', 
                          fontWeight: '700',
                          color: '#dc2626'
                        }}>−2</span>
                        <span style={{ 
                          fontSize: '13px', 
                          color: '#dc2626',
                          fontWeight: '500',
                          padding: '4px 8px',
                          background: '#fee2e2',
                          borderRadius: '4px'
                        }}>flip the sign!</span>
                      </div>
                      
                      {/* k value */}
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        padding: '12px 16px',
                        background: '#f0fdf4',
                        borderRadius: '6px',
                        flexWrap: 'wrap'
                      }}>
                        <span style={{ fontSize: '16px', color: '#6b7280' }}>Equation has</span>
                        <span style={{ 
                          fontSize: '18px', 
                          fontFamily: 'Georgia, serif',
                          fontWeight: '600',
                          color: '#16a34a',
                          padding: '4px 12px',
                          background: '#dcfce7',
                          borderRadius: '4px'
                        }}>(y − 5)</span>
                        <span style={{ fontSize: '20px', color: '#9ca3af' }}>→</span>
                        <span style={{ fontSize: '16px', color: '#6b7280' }}>k =</span>
                        <span style={{ 
                          fontSize: '20px', 
                          fontWeight: '700',
                          color: '#16a34a'
                        }}>+5</span>
                        <span style={{ 
                          fontSize: '13px', 
                          color: '#16a34a',
                          fontWeight: '500',
                          padding: '4px 8px',
                          background: '#dcfce7',
                          borderRadius: '4px'
                        }}>flip the sign!</span>
                      </div>
                    </div>
                    
                    {/* Center Result */}
                    <div style={{
                      marginTop: '16px',
                      padding: '12px 20px',
                      background: '#1d1d1f',
                      borderRadius: '6px',
                      textAlign: 'center'
                    }}>
                      <span style={{ color: '#9ca3af', fontSize: '14px' }}>Center = </span>
                      <span style={{ 
                        color: '#fff', 
                        fontSize: '20px', 
                        fontWeight: '600',
                        fontFamily: 'Georgia, serif'
                      }}>(−2, 5)</span>
                    </div>
                  </div>
                  
                  {/* Finding the Radius */}
                  <div style={{
                    background: '#fff',
                    borderRadius: '8px',
                    padding: '20px',
                    border: '1px solid #e5e5e5'
                  }}>
                    <div style={{ fontSize: '13px', color: '#86868b', marginBottom: '16px', fontWeight: '600' }}>FINDING THE RADIUS</div>
                    
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '16px',
                      padding: '16px',
                      background: '#faf5ff',
                      borderRadius: '6px',
                      flexWrap: 'wrap'
                    }}>
                      <span style={{ 
                        fontSize: '18px', 
                        fontFamily: 'Georgia, serif',
                        color: '#7c3aed'
                      }}>r² = 64</span>
                      <span style={{ fontSize: '20px', color: '#9ca3af' }}>→</span>
                      <span style={{ 
                        fontSize: '18px', 
                        fontFamily: 'Georgia, serif',
                        color: '#7c3aed'
                      }}>r = √64</span>
                      <span style={{ fontSize: '20px', color: '#9ca3af' }}>→</span>
                      <span style={{ 
                        fontSize: '24px', 
                        fontWeight: '700',
                        color: '#7c3aed'
                      }}>r = 8</span>
                    </div>
                    
                    {/* Radius Result */}
                    <div style={{
                      marginTop: '16px',
                      padding: '12px 20px',
                      background: '#1d1d1f',
                      borderRadius: '6px',
                      textAlign: 'center'
                    }}>
                      <span style={{ color: '#9ca3af', fontSize: '14px' }}>Radius = </span>
                      <span style={{ 
                        color: '#fff', 
                        fontSize: '20px', 
                        fontWeight: '600',
                        fontFamily: 'Georgia, serif'
                      }}>8</span>
                    </div>
                  </div>
                </div>
              );
            
            case 'circleTransformRules':
              return (
                <div key={idx} style={{
                  background: '#f5f5f7',
                  borderRadius: '12px',
                  padding: '28px',
                  margin: '24px 0'
                }}>
                  <div style={{ fontSize: '13px', color: '#86868b', marginBottom: '16px', fontWeight: '600', textAlign: 'center' }}>TRANSLATION RULES</div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
                    <div style={{ background: '#fff', borderRadius: '8px', padding: '16px', border: '1px solid #e5e5e5', textAlign: 'center' }}>
                      <div style={{ fontSize: '14px', color: '#6b7280', marginBottom: '8px' }}>Move <strong style={{ color: '#2563eb' }}>RIGHT</strong> a units</div>
                      <div style={{ fontSize: '16px', fontFamily: 'Georgia, serif', color: '#1d1d1f' }}>h → <strong>h + a</strong></div>
                    </div>
                    <div style={{ background: '#fff', borderRadius: '8px', padding: '16px', border: '1px solid #e5e5e5', textAlign: 'center' }}>
                      <div style={{ fontSize: '14px', color: '#6b7280', marginBottom: '8px' }}>Move <strong style={{ color: '#2563eb' }}>LEFT</strong> a units</div>
                      <div style={{ fontSize: '16px', fontFamily: 'Georgia, serif', color: '#1d1d1f' }}>h → <strong>h − a</strong></div>
                    </div>
                    <div style={{ background: '#fff', borderRadius: '8px', padding: '16px', border: '1px solid #e5e5e5', textAlign: 'center' }}>
                      <div style={{ fontSize: '14px', color: '#6b7280', marginBottom: '8px' }}>Move <strong style={{ color: '#16a34a' }}>UP</strong> b units</div>
                      <div style={{ fontSize: '16px', fontFamily: 'Georgia, serif', color: '#1d1d1f' }}>k → <strong>k + b</strong></div>
                    </div>
                    <div style={{ background: '#fff', borderRadius: '8px', padding: '16px', border: '1px solid #e5e5e5', textAlign: 'center' }}>
                      <div style={{ fontSize: '14px', color: '#6b7280', marginBottom: '8px' }}>Move <strong style={{ color: '#16a34a' }}>DOWN</strong> b units</div>
                      <div style={{ fontSize: '16px', fontFamily: 'Georgia, serif', color: '#1d1d1f' }}>k → <strong>k − b</strong></div>
                    </div>
                  </div>
                </div>
              );
            
            case 'circleTransformExample':
              return (
                <div key={idx} style={{
                  background: '#f5f5f7',
                  borderRadius: '12px',
                  padding: '28px',
                  margin: '24px 0'
                }}>
                  <div style={{ fontSize: '14px', fontWeight: '600', color: '#ea580c', marginBottom: '20px' }}>Example</div>
                  
                  {/* Original */}
                  <div style={{ background: '#fff', borderRadius: '8px', padding: '20px', marginBottom: '16px', border: '1px solid #e5e5e5' }}>
                    <div style={{ fontSize: '13px', color: '#86868b', marginBottom: '12px', fontWeight: '600' }}>ORIGINAL EQUATION</div>
                    <div style={{ textAlign: 'center', marginBottom: '12px' }}>
                      <span style={{ fontSize: '22px', fontFamily: 'Georgia, serif', color: '#1d1d1f' }}>(x + 2)² + (y − 1)² = 9</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap' }}>
                      <span style={{ fontSize: '15px', color: '#6b7280' }}>Center = <strong style={{ color: '#1d1d1f' }}>(−2, 1)</strong></span>
                      <span style={{ fontSize: '15px', color: '#6b7280' }}>Radius = <strong style={{ color: '#1d1d1f' }}>3</strong></span>
                    </div>
                  </div>
                  
                  {/* Transformation */}
                  <div style={{ background: '#fef3c7', borderRadius: '8px', padding: '16px', marginBottom: '16px', textAlign: 'center' }}>
                    <span style={{ fontSize: '16px', color: '#92400e', fontWeight: '600' }}>↓ Shift DOWN 4 units ↓</span>
                  </div>
                  
                  {/* Process */}
                  <div style={{ background: '#fff', borderRadius: '8px', padding: '20px', marginBottom: '16px', border: '1px solid #e5e5e5' }}>
                    <div style={{ fontSize: '13px', color: '#86868b', marginBottom: '12px', fontWeight: '600' }}>CALCULATE NEW CENTER</div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', flexWrap: 'wrap', padding: '12px', background: '#f0fdf4', borderRadius: '6px' }}>
                      <span style={{ fontSize: '16px', color: '#6b7280' }}>New k =</span>
                      <span style={{ fontSize: '18px', fontFamily: 'Georgia, serif', color: '#16a34a' }}>1 − 4</span>
                      <span style={{ fontSize: '18px', color: '#9ca3af' }}>=</span>
                      <span style={{ fontSize: '20px', fontWeight: '700', color: '#16a34a' }}>−3</span>
                    </div>
                    <div style={{ marginTop: '12px', textAlign: 'center' }}>
                      <span style={{ fontSize: '15px', color: '#6b7280' }}>New Center = </span>
                      <span style={{ fontSize: '18px', fontWeight: '600', color: '#1d1d1f' }}>(−2, −3)</span>
                    </div>
                  </div>
                  
                  {/* New Equation */}
                  <div style={{ background: '#1d1d1f', borderRadius: '8px', padding: '20px', textAlign: 'center' }}>
                    <div style={{ fontSize: '12px', color: '#9ca3af', marginBottom: '8px', fontWeight: '600' }}>NEW EQUATION</div>
                    <span style={{ fontSize: '22px', fontFamily: 'Georgia, serif', color: '#fff' }}>(x + 2)² + (y + 3)² = 9</span>
                  </div>
                </div>
              );
            
            case 'domainRangeFormulas':
              return (
                <div key={idx} style={{
                  background: '#f5f5f7',
                  borderRadius: '12px',
                  padding: '28px',
                  margin: '24px 0'
                }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px' }}>
                    <div style={{ background: '#dbeafe', borderRadius: '8px', padding: '20px', textAlign: 'center' }}>
                      <div style={{ fontSize: '13px', color: '#1e40af', marginBottom: '8px', fontWeight: '600' }}>DOMAIN (X-VALUES)</div>
                      <div style={{ fontSize: '20px', fontFamily: 'Georgia, serif', color: '#1d4ed8', fontWeight: '600' }}>[h − r, h + r]</div>
                      <div style={{ fontSize: '14px', color: '#3b82f6', marginTop: '8px' }}>How far left & right</div>
                    </div>
                    <div style={{ background: '#dcfce7', borderRadius: '8px', padding: '20px', textAlign: 'center' }}>
                      <div style={{ fontSize: '13px', color: '#166534', marginBottom: '8px', fontWeight: '600' }}>RANGE (Y-VALUES)</div>
                      <div style={{ fontSize: '20px', fontFamily: 'Georgia, serif', color: '#16a34a', fontWeight: '600' }}>[k − r, k + r]</div>
                      <div style={{ fontSize: '14px', color: '#22c55e', marginTop: '8px' }}>How far up & down</div>
                    </div>
                  </div>
                </div>
              );
            
            case 'axisIntersectionRules':
              return (
                <div key={idx} style={{
                  background: '#f5f5f7',
                  borderRadius: '12px',
                  padding: '24px',
                  margin: '24px 0'
                }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
                    <div style={{ background: '#fff', borderRadius: '8px', padding: '16px', border: '1px solid #e5e5e5' }}>
                      <div style={{ fontSize: '14px', fontWeight: '600', color: '#dc2626', marginBottom: '8px' }}>To Intersect the X-Axis</div>
                      <div style={{ fontSize: '15px', color: '#6b7280' }}>The y-value must be 0</div>
                      <div style={{ fontSize: '15px', color: '#1d1d1f', marginTop: '8px' }}>→ Check if <strong>0 is in the Range</strong></div>
                    </div>
                    <div style={{ background: '#fff', borderRadius: '8px', padding: '16px', border: '1px solid #e5e5e5' }}>
                      <div style={{ fontSize: '14px', fontWeight: '600', color: '#2563eb', marginBottom: '8px' }}>To Intersect the Y-Axis</div>
                      <div style={{ fontSize: '15px', color: '#6b7280' }}>The x-value must be 0</div>
                      <div style={{ fontSize: '15px', color: '#1d1d1f', marginTop: '8px' }}>→ Check if <strong>0 is in the Domain</strong></div>
                    </div>
                  </div>
                </div>
              );
            
            case 'domainRangeExample':
              return (
                <div key={idx} style={{
                  background: '#f5f5f7',
                  borderRadius: '12px',
                  padding: '28px',
                  margin: '24px 0'
                }}>
                  <div style={{ fontSize: '14px', fontWeight: '600', color: '#ea580c', marginBottom: '20px' }}>Example</div>
                  
                  {/* Given */}
                  <div style={{ background: '#fff', borderRadius: '8px', padding: '20px', marginBottom: '16px', border: '1px solid #e5e5e5', textAlign: 'center' }}>
                    <div style={{ fontSize: '13px', color: '#86868b', marginBottom: '12px', fontWeight: '600' }}>GIVEN</div>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '32px', flexWrap: 'wrap' }}>
                      <span style={{ fontSize: '18px', color: '#1d1d1f' }}>Center = <strong>(3, 4)</strong></span>
                      <span style={{ fontSize: '18px', color: '#1d1d1f' }}>Radius = <strong>5</strong></span>
                    </div>
                  </div>
                  
                  {/* Calculate Domain & Range */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px', marginBottom: '16px' }}>
                    <div style={{ background: '#fff', borderRadius: '8px', padding: '20px', border: '1px solid #e5e5e5' }}>
                      <div style={{ fontSize: '13px', color: '#1e40af', marginBottom: '12px', fontWeight: '600' }}>DOMAIN</div>
                      <div style={{ fontSize: '16px', fontFamily: 'Georgia, serif', color: '#6b7280', marginBottom: '8px' }}>
                        [h − r, h + r]
                      </div>
                      <div style={{ fontSize: '16px', fontFamily: 'Georgia, serif', color: '#2563eb' }}>
                        [3 − 5, 3 + 5]
                      </div>
                      <div style={{ fontSize: '20px', fontWeight: '700', color: '#1d4ed8', marginTop: '8px' }}>
                        [−2, 8]
                      </div>
                    </div>
                    <div style={{ background: '#fff', borderRadius: '8px', padding: '20px', border: '1px solid #e5e5e5' }}>
                      <div style={{ fontSize: '13px', color: '#166534', marginBottom: '12px', fontWeight: '600' }}>RANGE</div>
                      <div style={{ fontSize: '16px', fontFamily: 'Georgia, serif', color: '#6b7280', marginBottom: '8px' }}>
                        [k − r, k + r]
                      </div>
                      <div style={{ fontSize: '16px', fontFamily: 'Georgia, serif', color: '#16a34a' }}>
                        [4 − 5, 4 + 5]
                      </div>
                      <div style={{ fontSize: '20px', fontWeight: '700', color: '#16a34a', marginTop: '8px' }}>
                        [−1, 9]
                      </div>
                    </div>
                  </div>
                  
                  {/* Check Intersections */}
                  <div style={{ background: '#fff', borderRadius: '8px', padding: '20px', border: '1px solid #e5e5e5' }}>
                    <div style={{ fontSize: '13px', color: '#86868b', marginBottom: '16px', fontWeight: '600' }}>CHECK AXIS INTERSECTIONS</div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap', padding: '12px', background: '#f0f9ff', borderRadius: '6px' }}>
                        <span style={{ fontSize: '15px', color: '#6b7280' }}>Intersects <strong style={{ color: '#2563eb' }}>Y-Axis</strong>?</span>
                        <span style={{ fontSize: '15px', color: '#6b7280' }}>Is 0 in [−2, 8]?</span>
                        <span style={{ fontSize: '18px', fontWeight: '700', color: '#16a34a', padding: '4px 12px', background: '#dcfce7', borderRadius: '4px' }}>YES ✓</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap', padding: '12px', background: '#fef2f2', borderRadius: '6px' }}>
                        <span style={{ fontSize: '15px', color: '#6b7280' }}>Intersects <strong style={{ color: '#dc2626' }}>X-Axis</strong>?</span>
                        <span style={{ fontSize: '15px', color: '#6b7280' }}>Is 0 in [−1, 9]?</span>
                        <span style={{ fontSize: '18px', fontWeight: '700', color: '#16a34a', padding: '4px 12px', background: '#dcfce7', borderRadius: '4px' }}>YES ✓</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            
            case 'completingSquareSteps':
              return (
                <div key={idx} style={{
                  background: '#f5f5f7',
                  borderRadius: '12px',
                  padding: '28px',
                  margin: '24px 0'
                }}>
                  <div style={{ fontSize: '13px', color: '#86868b', marginBottom: '16px', fontWeight: '600', textAlign: 'center' }}>THE PROCESS</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {[
                      { num: '1', text: 'Move all constants to one side' },
                      { num: '2', text: 'Group x-terms and y-terms together' },
                      { num: '3', text: 'Complete the square for each group' },
                      { num: '4', text: 'Add the same values to BOTH sides' },
                      { num: '5', text: 'Factor into squared binomials' }
                    ].map((step, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '16px', background: '#fff', borderRadius: '8px', padding: '14px 18px', border: '1px solid #e5e5e5' }}>
                        <span style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#ea580c', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '14px', flexShrink: 0 }}>{step.num}</span>
                        <span style={{ fontSize: '16px', color: '#1d1d1f' }}>{step.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            
            case 'completingSquareExample':
              return (
                <div key={idx} style={{
                  background: '#f5f5f7',
                  borderRadius: '12px',
                  padding: '28px',
                  margin: '24px 0'
                }}>
                  <div style={{ fontSize: '14px', fontWeight: '600', color: '#ea580c', marginBottom: '20px' }}>Full Example</div>
                  
                  {/* Given */}
                  <div style={{ background: '#fff', borderRadius: '8px', padding: '20px', marginBottom: '16px', border: '1px solid #e5e5e5', textAlign: 'center' }}>
                    <div style={{ fontSize: '13px', color: '#86868b', marginBottom: '8px', fontWeight: '600' }}>CONVERT TO STANDARD FORM</div>
                    <div style={{ fontSize: '20px', fontFamily: 'Georgia, serif', color: '#1d1d1f' }}>x² + y² + 6x − 4y − 12 = 0</div>
                  </div>
                  
                  {/* Step 1 */}
                  <div style={{ background: '#fff', borderRadius: '8px', padding: '16px 20px', marginBottom: '12px', border: '1px solid #e5e5e5' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                      <span style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#ea580c', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '12px' }}>1</span>
                      <span style={{ fontSize: '13px', color: '#86868b', fontWeight: '600' }}>MOVE CONSTANTS</span>
                    </div>
                    <div style={{ fontSize: '18px', fontFamily: 'Georgia, serif', color: '#1d1d1f', textAlign: 'center' }}>x² + y² + 6x − 4y = 12</div>
                  </div>
                  
                  {/* Step 2 */}
                  <div style={{ background: '#fff', borderRadius: '8px', padding: '16px 20px', marginBottom: '12px', border: '1px solid #e5e5e5' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                      <span style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#ea580c', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '12px' }}>2</span>
                      <span style={{ fontSize: '13px', color: '#86868b', fontWeight: '600' }}>GROUP TERMS</span>
                    </div>
                    <div style={{ fontSize: '18px', fontFamily: 'Georgia, serif', color: '#1d1d1f', textAlign: 'center' }}>
                      (<span style={{ color: '#2563eb' }}>x² + 6x</span>) + (<span style={{ color: '#16a34a' }}>y² − 4y</span>) = 12
                    </div>
                  </div>
                  
                  {/* Step 3 */}
                  <div style={{ background: '#fff', borderRadius: '8px', padding: '16px 20px', marginBottom: '12px', border: '1px solid #e5e5e5' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                      <span style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#ea580c', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '12px' }}>3</span>
                      <span style={{ fontSize: '13px', color: '#86868b', fontWeight: '600' }}>COMPLETE THE SQUARE</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap' }}>
                      <div style={{ padding: '10px 16px', background: '#dbeafe', borderRadius: '6px', textAlign: 'center' }}>
                        <div style={{ fontSize: '14px', color: '#1e40af' }}>(6 ÷ 2)² =</div>
                        <div style={{ fontSize: '20px', fontWeight: '700', color: '#2563eb' }}>9</div>
                      </div>
                      <div style={{ padding: '10px 16px', background: '#dcfce7', borderRadius: '6px', textAlign: 'center' }}>
                        <div style={{ fontSize: '14px', color: '#166534' }}>(−4 ÷ 2)² =</div>
                        <div style={{ fontSize: '20px', fontWeight: '700', color: '#16a34a' }}>4</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Step 4 */}
                  <div style={{ background: '#fff', borderRadius: '8px', padding: '16px 20px', marginBottom: '12px', border: '1px solid #e5e5e5' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                      <span style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#ea580c', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '12px' }}>4</span>
                      <span style={{ fontSize: '13px', color: '#86868b', fontWeight: '600' }}>ADD TO BOTH SIDES</span>
                    </div>
                    <div style={{ fontSize: '17px', fontFamily: 'Georgia, serif', color: '#1d1d1f', textAlign: 'center' }}>
                      (x² + 6x + <span style={{ color: '#2563eb' }}>9</span>) + (y² − 4y + <span style={{ color: '#16a34a' }}>4</span>) = 12 + <span style={{ color: '#2563eb' }}>9</span> + <span style={{ color: '#16a34a' }}>4</span>
                    </div>
                  </div>
                  
                  {/* Step 5 */}
                  <div style={{ background: '#fff', borderRadius: '8px', padding: '16px 20px', marginBottom: '16px', border: '1px solid #e5e5e5' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                      <span style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#ea580c', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '12px' }}>5</span>
                      <span style={{ fontSize: '13px', color: '#86868b', fontWeight: '600' }}>FACTOR</span>
                    </div>
                    <div style={{ fontSize: '20px', fontFamily: 'Georgia, serif', color: '#1d1d1f', textAlign: 'center', fontWeight: '600' }}>
                      (x + 3)² + (y − 2)² = 25
                    </div>
                  </div>
                  
                  {/* Answer */}
                  <div style={{ background: '#1d1d1f', borderRadius: '8px', padding: '20px' }}>
                    <div style={{ fontSize: '12px', color: '#9ca3af', marginBottom: '12px', fontWeight: '600', textAlign: 'center' }}>ANSWER</div>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '32px', flexWrap: 'wrap' }}>
                      <div style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: '14px', color: '#9ca3af' }}>Center</div>
                        <div style={{ fontSize: '22px', fontWeight: '600', color: '#fff', fontFamily: 'Georgia, serif' }}>(−3, 2)</div>
                      </div>
                      <div style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: '14px', color: '#9ca3af' }}>Radius</div>
                        <div style={{ fontSize: '22px', fontWeight: '600', color: '#fff', fontFamily: 'Georgia, serif' }}>5</div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            
            // Dimensional Analysis Components
            case 'dimensionalAnalysisRules':
              return (
                <div key={idx} style={{
                  background: '#f5f5f7',
                  borderRadius: '12px',
                  padding: '28px',
                  margin: '24px 0'
                }}>
                  <div style={{ fontSize: '13px', color: '#86868b', marginBottom: '16px', fontWeight: '600', textAlign: 'center' }}>KEY RULES</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <div style={{ background: '#fff', borderRadius: '8px', padding: '16px 20px', border: '1px solid #e5e5e5', display: 'flex', alignItems: 'center', gap: '16px' }}>
                      <span style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#2563eb', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '14px', flexShrink: 0 }}>1</span>
                      <span style={{ fontSize: '16px', color: '#1d1d1f' }}>You can only <strong>add or compare</strong> quantities with the <strong>same units</strong></span>
                    </div>
                    <div style={{ background: '#fff', borderRadius: '8px', padding: '16px 20px', border: '1px solid #e5e5e5', display: 'flex', alignItems: 'center', gap: '16px' }}>
                      <span style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#2563eb', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '14px', flexShrink: 0 }}>2</span>
                      <span style={{ fontSize: '16px', color: '#1d1d1f' }}>Units <strong>cancel</strong> when one is on the <strong>top</strong> (numerator) and the same unit is on the <strong>bottom</strong> (denominator)</span>
                    </div>
                    <div style={{ background: '#fff', borderRadius: '8px', padding: '16px 20px', border: '1px solid #e5e5e5', display: 'flex', alignItems: 'center', gap: '16px' }}>
                      <span style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#2563eb', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '14px', flexShrink: 0 }}>3</span>
                      <span style={{ fontSize: '16px', color: '#1d1d1f' }}>The final answer must have the <strong>correct unit</strong> for what's being measured</span>
                    </div>
                  </div>
                </div>
              );
            
            case 'dimensionalAnalysisExample':
              return (
                <div key={idx} style={{
                  background: '#f5f5f7',
                  borderRadius: '12px',
                  padding: '28px',
                  margin: '24px 0'
                }}>
                  <div style={{ fontSize: '14px', fontWeight: '600', color: '#ea580c', marginBottom: '20px' }}>Example: Unit Cancellation</div>
                  
                  <div style={{ background: '#fff', borderRadius: '8px', padding: '20px', marginBottom: '16px', border: '1px solid #e5e5e5' }}>
                    <div style={{ fontSize: '15px', color: '#6b7280', marginBottom: '12px' }}>Convert <strong style={{ color: '#1d1d1f' }}>5 hours</strong> to <strong style={{ color: '#1d1d1f' }}>minutes</strong></div>
                    
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', flexWrap: 'wrap', padding: '16px', background: '#f0f9ff', borderRadius: '8px' }}>
                      <span style={{ fontSize: '20px', fontFamily: 'Georgia, serif', color: '#1d1d1f' }}>5 <span style={{ color: '#dc2626', textDecoration: 'line-through' }}>hours</span></span>
                      <span style={{ fontSize: '20px', color: '#9ca3af' }}>×</span>
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <span style={{ fontSize: '18px', fontFamily: 'Georgia, serif', color: '#2563eb' }}>60 minutes</span>
                        <div style={{ width: '100%', height: '2px', background: '#1d1d1f', margin: '4px 0' }} />
                        <span style={{ fontSize: '18px', fontFamily: 'Georgia, serif', color: '#dc2626', textDecoration: 'line-through' }}>1 hour</span>
                      </div>
                      <span style={{ fontSize: '20px', color: '#9ca3af' }}>=</span>
                      <span style={{ fontSize: '24px', fontWeight: '700', color: '#16a34a' }}>300 minutes</span>
                    </div>
                  </div>
                  
                  <div style={{ background: '#dcfce7', borderRadius: '8px', padding: '14px 20px', textAlign: 'center' }}>
                    <span style={{ fontSize: '15px', color: '#166534' }}>The <strong>"hours"</strong> cancel out, leaving only <strong>"minutes"</strong> ✓</span>
                  </div>
                </div>
              );
            
            case 'squaredUnitsWarning':
              return (
                <div key={idx} style={{
                  background: '#fef3c7',
                  borderRadius: '12px',
                  padding: '20px 24px',
                  margin: '24px 0',
                  border: '2px solid #f59e0b'
                }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <span style={{ fontSize: '24px' }}>⚠️</span>
                    <div>
                      <div style={{ fontSize: '16px', fontWeight: '600', color: '#92400e', marginBottom: '4px' }}>Big Idea</div>
                      <div style={{ fontSize: '15px', color: '#78350f' }}>When a unit is <strong>squared</strong>, the <strong>entire conversion factor must be squared</strong>. You are converting the unit <strong>twice</strong>, not once.</div>
                    </div>
                  </div>
                </div>
              );
            
            case 'squaredUnitsExample1':
              return (
                <div key={idx} style={{
                  background: '#f5f5f7',
                  borderRadius: '12px',
                  padding: '28px',
                  margin: '24px 0'
                }}>
                  <div style={{ fontSize: '14px', fontWeight: '600', color: '#ea580c', marginBottom: '20px' }}>Example 1: ft² → in²</div>
                  
                  {/* Linear Conversion */}
                  <div style={{ background: '#fff', borderRadius: '8px', padding: '16px 20px', marginBottom: '12px', border: '1px solid #e5e5e5' }}>
                    <div style={{ fontSize: '13px', color: '#86868b', marginBottom: '8px', fontWeight: '600' }}>LINEAR CONVERSION</div>
                    <div style={{ fontSize: '20px', fontFamily: 'Georgia, serif', color: '#1d1d1f', textAlign: 'center' }}>
                      1 ft = 12 in
                    </div>
                  </div>
                  
                  {/* Square It */}
                  <div style={{ background: '#fff', borderRadius: '8px', padding: '16px 20px', marginBottom: '12px', border: '1px solid #e5e5e5' }}>
                    <div style={{ fontSize: '13px', color: '#86868b', marginBottom: '8px', fontWeight: '600' }}>SQUARE IT</div>
                    <div style={{ fontSize: '20px', fontFamily: 'Georgia, serif', color: '#7c3aed', textAlign: 'center' }}>
                      1 ft² = (12)² in² = <strong>144 in²</strong>
                    </div>
                  </div>
                  
                  {/* Convert */}
                  <div style={{ background: '#fff', borderRadius: '8px', padding: '20px', border: '1px solid #e5e5e5' }}>
                    <div style={{ fontSize: '13px', color: '#86868b', marginBottom: '12px', fontWeight: '600' }}>CONVERT: 5 ft² → in²</div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', flexWrap: 'wrap', padding: '16px', background: '#faf5ff', borderRadius: '8px' }}>
                      <span style={{ fontSize: '18px', fontFamily: 'Georgia, serif', color: '#1d1d1f' }}>5 ft²</span>
                      <span style={{ fontSize: '18px', color: '#9ca3af' }}>×</span>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <span style={{ fontSize: '18px', fontFamily: 'Georgia, serif', color: '#1d1d1f' }}>(</span>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                          <span style={{ fontSize: '16px', fontFamily: 'Georgia, serif', color: '#7c3aed' }}>12 in</span>
                          <div style={{ width: '100%', height: '2px', background: '#1d1d1f', margin: '3px 0' }} />
                          <span style={{ fontSize: '16px', fontFamily: 'Georgia, serif', color: '#7c3aed' }}>1 ft</span>
                        </div>
                        <span style={{ fontSize: '18px', fontFamily: 'Georgia, serif', color: '#1d1d1f' }}>)²</span>
                      </div>
                      <span style={{ fontSize: '18px', color: '#9ca3af' }}>=</span>
                      <span style={{ fontSize: '18px', fontFamily: 'Georgia, serif', color: '#1d1d1f' }}>5 × 144</span>
                      <span style={{ fontSize: '18px', color: '#9ca3af' }}>=</span>
                      <span style={{ fontSize: '22px', fontWeight: '700', color: '#16a34a' }}>720 in²</span>
                    </div>
                  </div>
                </div>
              );
            
            case 'squaredUnitsExample2':
              return (
                <div key={idx} style={{
                  background: '#f5f5f7',
                  borderRadius: '12px',
                  padding: '28px',
                  margin: '24px 0'
                }}>
                  <div style={{ fontSize: '14px', fontWeight: '600', color: '#ea580c', marginBottom: '20px' }}>Example 2: yd² → ft²</div>
                  
                  {/* Linear Conversion */}
                  <div style={{ background: '#fff', borderRadius: '8px', padding: '16px 20px', marginBottom: '12px', border: '1px solid #e5e5e5' }}>
                    <div style={{ fontSize: '13px', color: '#86868b', marginBottom: '8px', fontWeight: '600' }}>LINEAR CONVERSION</div>
                    <div style={{ fontSize: '20px', fontFamily: 'Georgia, serif', color: '#1d1d1f', textAlign: 'center' }}>
                      1 yd = 3 ft
                    </div>
                  </div>
                  
                  {/* Square It */}
                  <div style={{ background: '#fff', borderRadius: '8px', padding: '16px 20px', marginBottom: '12px', border: '1px solid #e5e5e5' }}>
                    <div style={{ fontSize: '13px', color: '#86868b', marginBottom: '8px', fontWeight: '600' }}>SQUARE IT</div>
                    <div style={{ fontSize: '20px', fontFamily: 'Georgia, serif', color: '#7c3aed', textAlign: 'center' }}>
                      1 yd² = (3)² ft² = <strong>9 ft²</strong>
                    </div>
                  </div>
                  
                  {/* Convert */}
                  <div style={{ background: '#fff', borderRadius: '8px', padding: '20px', border: '1px solid #e5e5e5' }}>
                    <div style={{ fontSize: '13px', color: '#86868b', marginBottom: '12px', fontWeight: '600' }}>CONVERT: 8 yd² → ft²</div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', flexWrap: 'wrap', padding: '16px', background: '#f0fdf4', borderRadius: '8px' }}>
                      <span style={{ fontSize: '18px', fontFamily: 'Georgia, serif', color: '#1d1d1f' }}>8 yd²</span>
                      <span style={{ fontSize: '18px', color: '#9ca3af' }}>×</span>
                      <span style={{ fontSize: '18px', fontFamily: 'Georgia, serif', color: '#16a34a' }}>9</span>
                      <span style={{ fontSize: '18px', color: '#9ca3af' }}>=</span>
                      <span style={{ fontSize: '22px', fontWeight: '700', color: '#16a34a' }}>72 ft²</span>
                    </div>
                  </div>
                </div>
              );
            
            case 'whySquareConversion':
              return (
                <div key={idx} style={{
                  background: '#f5f5f7',
                  borderRadius: '12px',
                  padding: '24px',
                  margin: '24px 0'
                }}>
                  <div style={{ fontSize: '14px', fontWeight: '600', color: '#1d1d1f', marginBottom: '16px' }}>Why You Square the Conversion</div>
                  
                  <div style={{ background: '#fff', borderRadius: '8px', padding: '20px', border: '1px solid #e5e5e5' }}>
                    <div style={{ fontSize: '16px', color: '#6b7280', marginBottom: '16px' }}>
                      You are not converting <strong style={{ color: '#1d1d1f' }}>one</strong> unit.<br/>
                      You are converting the unit <strong style={{ color: '#dc2626' }}>twice</strong>.
                    </div>
                    
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', padding: '16px', background: '#fef2f2', borderRadius: '8px' }}>
                      <span style={{ fontSize: '15px', color: '#6b7280' }}>That's why:</span>
                      <span style={{ fontSize: '22px', fontFamily: 'Georgia, serif', color: '#dc2626', fontWeight: '600' }}>(12)² ≠ 12</span>
                    </div>
                  </div>
                </div>
              );
            
            // Percents Components - Premium Design
            case 'percentIntro':
              return (
                <div key={idx} style={{ margin: '24px 0' }}>
                  {/* Definition Card */}
                  <div style={{
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    borderRadius: '16px',
                    padding: '32px',
                    marginBottom: '20px',
                    color: '#fff'
                  }}>
                    <div style={{ fontSize: '14px', opacity: 0.8, marginBottom: '8px', fontWeight: '500', letterSpacing: '1px' }}>DEFINITION</div>
                    <div style={{ fontSize: '24px', fontWeight: '600', marginBottom: '16px' }}>A Percent is a way of expressing part of a whole.</div>
                    <div style={{ fontSize: '18px', opacity: 0.9 }}>It means "<strong>per one hundred</strong>"</div>
                  </div>
                  
                  {/* Visual Example */}
                  <div style={{
                    background: '#f5f5f7',
                    borderRadius: '16px',
                    padding: '32px',
                    textAlign: 'center'
                  }}>
                    <div style={{ fontSize: '16px', color: '#86868b', marginBottom: '20px' }}>So when we say something is</div>
                    <div style={{ 
                      fontSize: '72px', 
                      fontWeight: '700', 
                      background: 'linear-gradient(135deg, #ea580c 0%, #dc2626 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      marginBottom: '20px'
                    }}>30%</div>
                    <div style={{ fontSize: '16px', color: '#86868b', marginBottom: '12px' }}>we mean</div>
                    <div style={{ 
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '12px',
                      background: '#fff',
                      padding: '16px 32px',
                      borderRadius: '12px',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
                    }}>
                      <span style={{ fontSize: '36px', fontWeight: '700', color: '#ea580c' }}>30</span>
                      <span style={{ fontSize: '24px', color: '#86868b' }}>out of</span>
                      <span style={{ fontSize: '36px', fontWeight: '700', color: '#1d1d1f' }}>100</span>
                    </div>
                  </div>
                </div>
              );
            
            case 'percentTypesIntro':
              return (
                <div key={idx} style={{
                  background: '#1d1d1f',
                  borderRadius: '16px',
                  padding: '32px',
                  margin: '24px 0'
                }}>
                  <div style={{ textAlign: 'center', marginBottom: '24px' }}>
                    <div style={{ fontSize: '13px', color: '#86868b', marginBottom: '8px', fontWeight: '600', letterSpacing: '1px' }}>ON THE SAT</div>
                    <div style={{ fontSize: '24px', color: '#fff', fontWeight: '600' }}>Two Types of Percent Questions</div>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                    <div style={{ 
                      background: 'linear-gradient(135deg, #ea580c 0%, #dc2626 100%)',
                      borderRadius: '12px',
                      padding: '24px',
                      textAlign: 'center'
                    }}>
                      <div style={{ fontSize: '28px', fontWeight: '700', color: '#fff', marginBottom: '8px' }}>Percent Of</div>
                      <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.8)' }}>Finding a part of a whole</div>
                    </div>
                    <div style={{ 
                      background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
                      borderRadius: '12px',
                      padding: '24px',
                      textAlign: 'center'
                    }}>
                      <div style={{ fontSize: '28px', fontWeight: '700', color: '#fff', marginBottom: '8px' }}>Percent Change</div>
                      <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.8)' }}>Comparing original to new</div>
                    </div>
                  </div>
                </div>
              );
            
            case 'percentOfIntro':
              return (
                <div key={idx} style={{
                  background: 'linear-gradient(135deg, #ea580c 0%, #dc2626 100%)',
                  borderRadius: '16px',
                  padding: '32px',
                  margin: '24px 0',
                  color: '#fff'
                }}>
                  <div style={{ fontSize: '14px', opacity: 0.8, marginBottom: '8px', fontWeight: '500', letterSpacing: '1px' }}>HOW TO IDENTIFY</div>
                  <div style={{ fontSize: '22px', fontWeight: '600', marginBottom: '16px' }}>Percent Of questions clearly mention "Percent Of" in the problem.</div>
                  <div style={{ fontSize: '16px', opacity: 0.9, lineHeight: 1.6 }}>The method to solve them is to <strong>turn the text into an equation</strong>.</div>
                </div>
              );
            
            case 'percentOfTranslationTable':
              return (
                <div key={idx} style={{
                  background: '#f5f5f7',
                  borderRadius: '16px',
                  padding: '32px',
                  margin: '24px 0'
                }}>
                  <div style={{ fontSize: '13px', color: '#86868b', marginBottom: '20px', fontWeight: '600', letterSpacing: '1px', textAlign: 'center' }}>TEXT → EQUATION TRANSLATION</div>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {/* Header */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                      <div style={{ fontSize: '14px', fontWeight: '600', color: '#86868b', padding: '0 20px' }}>TEXT</div>
                      <div style={{ fontSize: '14px', fontWeight: '600', color: '#86868b', padding: '0 20px' }}>EQUATION</div>
                    </div>
                    
                    {/* Rows */}
                    {[
                      { text: 'What / How much / How many', eq: 'Variable (x)', color: '#7c3aed' },
                      { text: 'Percent', eq: 'Percent ÷ 100', color: '#ea580c' },
                      { text: 'Of', eq: '× (multiply)', color: '#2563eb' },
                      { text: 'Is', eq: '= (equals)', color: '#16a34a' }
                    ].map((row, i) => (
                      <div key={i} style={{ 
                        display: 'grid', 
                        gridTemplateColumns: '1fr 1fr', 
                        gap: '16px',
                        background: '#fff',
                        borderRadius: '12px',
                        overflow: 'hidden',
                        boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
                      }}>
                        <div style={{ padding: '18px 20px', fontSize: '17px', color: '#1d1d1f', borderRight: '1px solid #f0f0f0' }}>{row.text}</div>
                        <div style={{ padding: '18px 20px', fontSize: '18px', fontWeight: '600', color: row.color, fontFamily: 'Georgia, serif' }}>{row.eq}</div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            
            case 'percentOfWorkedExample':
              return (
                <div key={idx} style={{
                  background: '#f5f5f7',
                  borderRadius: '16px',
                  padding: '32px',
                  margin: '24px 0'
                }}>
                  <div style={{ fontSize: '14px', fontWeight: '600', color: '#ea580c', marginBottom: '24px', letterSpacing: '0.5px' }}>WORKED EXAMPLE</div>
                  
                  {/* Question */}
                  <div style={{
                    background: '#fff',
                    borderRadius: '12px',
                    padding: '24px',
                    marginBottom: '20px',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
                  }}>
                    <div style={{ fontSize: '20px', color: '#1d1d1f', lineHeight: 1.5 }}>
                      <span style={{ color: '#7c3aed', fontWeight: '600' }}>What</span> <span style={{ color: '#16a34a', fontWeight: '600' }}>is</span> <span style={{ color: '#ea580c', fontWeight: '600' }}>25%</span> <span style={{ color: '#2563eb', fontWeight: '600' }}>of</span> <span style={{ fontWeight: '600' }}>80</span>?
                    </div>
                  </div>
                  
                  {/* Step 1: Translate */}
                  <div style={{
                    background: '#fff',
                    borderRadius: '12px',
                    padding: '24px',
                    marginBottom: '16px',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                      <span style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#ea580c', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '14px' }}>1</span>
                      <span style={{ fontSize: '14px', color: '#86868b', fontWeight: '600' }}>TRANSLATE TO EQUATION</span>
                    </div>
                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      gap: '16px', 
                      flexWrap: 'wrap',
                      padding: '20px',
                      background: '#f9fafb',
                      borderRadius: '8px'
                    }}>
                      <span style={{ fontSize: '28px', fontWeight: '600', color: '#7c3aed', fontFamily: 'Georgia, serif' }}>x</span>
                      <span style={{ fontSize: '28px', fontWeight: '600', color: '#16a34a' }}>=</span>
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <span style={{ fontSize: '22px', color: '#ea580c', fontWeight: '600' }}>25</span>
                        <div style={{ width: '50px', height: '3px', background: '#1d1d1f', margin: '6px 0' }} />
                        <span style={{ fontSize: '22px', color: '#1d1d1f' }}>100</span>
                      </div>
                      <span style={{ fontSize: '28px', fontWeight: '600', color: '#2563eb' }}>×</span>
                      <span style={{ fontSize: '28px', fontWeight: '600', color: '#1d1d1f', fontFamily: 'Georgia, serif' }}>80</span>
                    </div>
                  </div>
                  
                  {/* Step 2: Solve */}
                  <div style={{
                    background: '#fff',
                    borderRadius: '12px',
                    padding: '24px',
                    marginBottom: '16px',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                      <span style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#ea580c', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '14px' }}>2</span>
                      <span style={{ fontSize: '14px', color: '#86868b', fontWeight: '600' }}>SOLVE</span>
                    </div>
                    <div style={{ textAlign: 'center', fontSize: '22px', fontFamily: 'Georgia, serif', color: '#1d1d1f' }}>
                      x = 0.25 × 80 = <strong>20</strong>
                    </div>
                  </div>
                  
                  {/* Answer */}
                  <div style={{
                    background: 'linear-gradient(135deg, #16a34a 0%, #15803d 100%)',
                    borderRadius: '12px',
                    padding: '20px',
                    textAlign: 'center'
                  }}>
                    <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.8)' }}>ANSWER: </span>
                    <span style={{ fontSize: '28px', fontWeight: '700', color: '#fff', fontFamily: 'Georgia, serif' }}>20</span>
                  </div>
                </div>
              );
            
            case 'percentChangeIntro':
              return (
                <div key={idx} style={{
                  background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
                  borderRadius: '16px',
                  padding: '32px',
                  margin: '24px 0',
                  color: '#fff'
                }}>
                  <div style={{ fontSize: '14px', opacity: 0.8, marginBottom: '8px', fontWeight: '500', letterSpacing: '1px' }}>HOW TO IDENTIFY</div>
                  <div style={{ fontSize: '22px', fontWeight: '600', marginBottom: '16px' }}>Percent Change questions compare two values — an original value and a new value.</div>
                  <div style={{ 
                    fontSize: '18px', 
                    opacity: 0.95, 
                    lineHeight: 1.6,
                    padding: '16px 20px',
                    background: 'rgba(255,255,255,0.15)',
                    borderRadius: '8px',
                    marginTop: '16px'
                  }}>
                    Percent Change measures how much a quantity increases or decreases <strong>relative to its original value</strong>.
                  </div>
                </div>
              );
            
            case 'percentIncreaseFormula':
              return (
                <div key={idx} style={{
                  background: '#f0fdf4',
                  borderRadius: '16px',
                  padding: '32px',
                  margin: '24px 0',
                  border: '2px solid #16a34a'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                    <span style={{ fontSize: '24px' }}>📈</span>
                    <span style={{ fontSize: '18px', fontWeight: '700', color: '#16a34a' }}>PERCENT INCREASE</span>
                  </div>
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    gap: '12px', 
                    flexWrap: 'wrap',
                    padding: '24px',
                    background: '#fff',
                    borderRadius: '12px'
                  }}>
                    <span style={{ fontSize: '24px', fontFamily: 'Georgia, serif', color: '#1d1d1f' }}>Initial</span>
                    <span style={{ fontSize: '24px', color: '#6b7280' }}>×</span>
                    <span style={{ fontSize: '24px', color: '#6b7280' }}>(</span>
                    <span style={{ fontSize: '24px', fontFamily: 'Georgia, serif', color: '#1d1d1f' }}>1</span>
                    <span style={{ fontSize: '28px', fontWeight: '700', color: '#16a34a' }}>+</span>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      <span style={{ fontSize: '18px', color: '#16a34a', fontWeight: '600' }}>% increase</span>
                      <div style={{ width: '100px', height: '3px', background: '#1d1d1f', margin: '6px 0' }} />
                      <span style={{ fontSize: '18px', color: '#1d1d1f' }}>100</span>
                    </div>
                    <span style={{ fontSize: '24px', color: '#6b7280' }}>)</span>
                    <span style={{ fontSize: '24px', color: '#6b7280' }}>=</span>
                    <span style={{ fontSize: '24px', fontFamily: 'Georgia, serif', fontWeight: '700', color: '#1d1d1f' }}>Final</span>
                  </div>
                </div>
              );
            
            case 'percentDecreaseFormula':
              return (
                <div key={idx} style={{
                  background: '#fef2f2',
                  borderRadius: '16px',
                  padding: '32px',
                  margin: '24px 0',
                  border: '2px solid #dc2626'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                    <span style={{ fontSize: '24px' }}>📉</span>
                    <span style={{ fontSize: '18px', fontWeight: '700', color: '#dc2626' }}>PERCENT DECREASE</span>
                  </div>
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    gap: '12px', 
                    flexWrap: 'wrap',
                    padding: '24px',
                    background: '#fff',
                    borderRadius: '12px'
                  }}>
                    <span style={{ fontSize: '24px', fontFamily: 'Georgia, serif', color: '#1d1d1f' }}>Initial</span>
                    <span style={{ fontSize: '24px', color: '#6b7280' }}>×</span>
                    <span style={{ fontSize: '24px', color: '#6b7280' }}>(</span>
                    <span style={{ fontSize: '24px', fontFamily: 'Georgia, serif', color: '#1d1d1f' }}>1</span>
                    <span style={{ fontSize: '28px', fontWeight: '700', color: '#dc2626' }}>−</span>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      <span style={{ fontSize: '18px', color: '#dc2626', fontWeight: '600' }}>% decrease</span>
                      <div style={{ width: '100px', height: '3px', background: '#1d1d1f', margin: '6px 0' }} />
                      <span style={{ fontSize: '18px', color: '#1d1d1f' }}>100</span>
                    </div>
                    <span style={{ fontSize: '24px', color: '#6b7280' }}>)</span>
                    <span style={{ fontSize: '24px', color: '#6b7280' }}>=</span>
                    <span style={{ fontSize: '24px', fontFamily: 'Georgia, serif', fontWeight: '700', color: '#1d1d1f' }}>Final</span>
                  </div>
                </div>
              );
            
            case 'percentChangeKeyInsight':
              return (
                <div key={idx} style={{
                  background: '#1d1d1f',
                  borderRadius: '16px',
                  padding: '24px 32px',
                  margin: '24px 0',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px'
                }}>
                  <span style={{ fontSize: '28px' }}>💡</span>
                  <div>
                    <div style={{ fontSize: '14px', color: '#9ca3af', marginBottom: '4px', fontWeight: '600' }}>KEY INSIGHT</div>
                    <div style={{ fontSize: '17px', color: '#fff', lineHeight: 1.5 }}>
                      The change is always calculated <strong>relative to the original value</strong>, not the new value.
                    </div>
                  </div>
                </div>
              );
            
            case 'percentModelIntro':
              return (
                <div key={idx} style={{
                  background: 'linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)',
                  borderRadius: '16px',
                  padding: '32px',
                  margin: '24px 0',
                  color: '#fff'
                }}>
                  <div style={{ fontSize: '14px', opacity: 0.8, marginBottom: '8px', fontWeight: '500', letterSpacing: '1px' }}>DEFINITION</div>
                  <div style={{ fontSize: '22px', fontWeight: '600', marginBottom: '16px' }}>A Percent Model describes how a quantity changes by the same percentage over equal time intervals.</div>
                  <div style={{ fontSize: '16px', opacity: 0.9, lineHeight: 1.6 }}>
                    Percent Models are depicted as <strong>functions</strong> that involve percent change.
                  </div>
                </div>
              );
            
            case 'percentModelFormulaPremium':
              return (
                <div key={idx} style={{
                  background: '#f5f5f7',
                  borderRadius: '16px',
                  padding: '32px',
                  margin: '24px 0'
                }}>
                  <div style={{ fontSize: '13px', color: '#86868b', marginBottom: '20px', fontWeight: '600', letterSpacing: '1px', textAlign: 'center' }}>PERCENT MODEL FORMULA</div>
                  
                  {/* Main Formula */}
                  <div style={{
                    background: '#fff',
                    borderRadius: '12px',
                    padding: '32px',
                    marginBottom: '24px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                    textAlign: 'center'
                  }}>
                    <div style={{ 
                      display: 'inline-flex', 
                      alignItems: 'center', 
                      gap: '8px', 
                      fontSize: '32px', 
                      fontFamily: 'Georgia, serif',
                      flexWrap: 'wrap',
                      justifyContent: 'center'
                    }}>
                      <span style={{ color: '#7c3aed', fontWeight: '600' }}>f(t)</span>
                      <span style={{ color: '#6b7280' }}>=</span>
                      <span style={{ color: '#ea580c', fontWeight: '600' }}>Initial</span>
                      <span style={{ color: '#6b7280' }}>×</span>
                      <span style={{ color: '#6b7280' }}>(</span>
                      <span style={{ color: '#2563eb', fontWeight: '600' }}>rate</span>
                      <span style={{ color: '#6b7280' }}>)</span>
                      <sup style={{ fontSize: '20px', color: '#16a34a', fontWeight: '700' }}>t</sup>
                    </div>
                  </div>
                  
                  {/* Variable Explanations */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '12px' }}>
                    {[
                      { var: 'f(t)', label: 'Final amount', desc: 'Value at time t', color: '#7c3aed', bg: '#faf5ff' },
                      { var: 'Initial', label: 'Starting value', desc: 'Value at t = 0', color: '#ea580c', bg: '#fff7ed' },
                      { var: 'rate', label: 'Growth factor', desc: '1 ± (% ÷ 100)', color: '#2563eb', bg: '#eff6ff' },
                      { var: 't', label: 'Time periods', desc: 'Number of intervals', color: '#16a34a', bg: '#f0fdf4' }
                    ].map((item, i) => (
                      <div key={i} style={{ background: item.bg, borderRadius: '12px', padding: '16px', textAlign: 'center' }}>
                        <div style={{ fontSize: '24px', fontWeight: '700', color: item.color, fontFamily: 'Georgia, serif', marginBottom: '8px' }}>{item.var}</div>
                        <div style={{ fontSize: '14px', fontWeight: '600', color: '#1d1d1f', marginBottom: '4px' }}>{item.label}</div>
                        <div style={{ fontSize: '12px', color: '#6b7280' }}>{item.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            
            // Exponents Components - Premium Design
            case 'exponentLawsIntro':
              return (
                <div key={idx} style={{
                  background: 'linear-gradient(135deg, #0ea5e9 0%, #2563eb 100%)',
                  borderRadius: '16px',
                  padding: '32px',
                  margin: '24px 0',
                  color: '#fff'
                }}>
                  <div style={{ fontSize: '14px', opacity: 0.8, marginBottom: '8px', fontWeight: '500', letterSpacing: '1px' }}>MASTER THESE RULES</div>
                  <div style={{ fontSize: '28px', fontWeight: '700', marginBottom: '12px' }}>Laws of Exponents</div>
                  <div style={{ fontSize: '17px', opacity: 0.9, lineHeight: 1.6 }}>
                    These 8 rules form the foundation for simplifying and manipulating exponential expressions on the SAT.
                  </div>
                </div>
              );
            
            case 'exponentRulesGrid':
              return (
                <div key={idx} style={{
                  background: '#f5f5f7',
                  borderRadius: '16px',
                  padding: '32px',
                  margin: '24px 0'
                }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {/* Product Rule */}
                    <div style={{ background: '#fff', borderRadius: '12px', padding: '20px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
                        <div>
                          <div style={{ fontSize: '18px', fontWeight: '700', color: '#1d1d1f', marginBottom: '4px' }}>Product Rule</div>
                          <div style={{ fontSize: '14px', color: '#6b7280' }}>Multiply powers with same base → <strong>add</strong> exponents</div>
                        </div>
                        <div style={{ 
                          fontSize: '24px', 
                          fontFamily: 'Georgia, serif', 
                          color: '#2563eb',
                          padding: '12px 20px',
                          background: '#eff6ff',
                          borderRadius: '8px'
                        }}>
                          a<sup>m</sup> × a<sup>n</sup> = a<sup>m+n</sup>
                        </div>
                      </div>
                    </div>
                    
                    {/* Quotient Rule */}
                    <div style={{ background: '#fff', borderRadius: '12px', padding: '20px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
                        <div>
                          <div style={{ fontSize: '18px', fontWeight: '700', color: '#1d1d1f', marginBottom: '4px' }}>Quotient Rule</div>
                          <div style={{ fontSize: '14px', color: '#6b7280' }}>Divide powers with same base → <strong>subtract</strong> exponents</div>
                        </div>
                        <div style={{ 
                          fontSize: '24px', 
                          fontFamily: 'Georgia, serif', 
                          color: '#7c3aed',
                          padding: '12px 20px',
                          background: '#faf5ff',
                          borderRadius: '8px'
                        }}>
                          a<sup>m</sup> ÷ a<sup>n</sup> = a<sup>m−n</sup>
                        </div>
                      </div>
                    </div>
                    
                    {/* Power of a Power */}
                    <div style={{ background: '#fff', borderRadius: '12px', padding: '20px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
                        <div>
                          <div style={{ fontSize: '18px', fontWeight: '700', color: '#1d1d1f', marginBottom: '4px' }}>Power of a Power Rule</div>
                          <div style={{ fontSize: '14px', color: '#6b7280' }}>Power raised to another power → <strong>multiply</strong> exponents</div>
                        </div>
                        <div style={{ 
                          fontSize: '24px', 
                          fontFamily: 'Georgia, serif', 
                          color: '#ea580c',
                          padding: '12px 20px',
                          background: '#fff7ed',
                          borderRadius: '8px'
                        }}>
                          (a<sup>m</sup>)<sup>n</sup> = a<sup>mn</sup>
                        </div>
                      </div>
                    </div>
                    
                    {/* Power of a Product */}
                    <div style={{ background: '#fff', borderRadius: '12px', padding: '20px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
                        <div>
                          <div style={{ fontSize: '18px', fontWeight: '700', color: '#1d1d1f', marginBottom: '4px' }}>Power of a Product Rule</div>
                          <div style={{ fontSize: '14px', color: '#6b7280' }}>Product raised to power → <strong>distribute</strong> to each factor</div>
                        </div>
                        <div style={{ 
                          fontSize: '24px', 
                          fontFamily: 'Georgia, serif', 
                          color: '#16a34a',
                          padding: '12px 20px',
                          background: '#f0fdf4',
                          borderRadius: '8px'
                        }}>
                          (ab)<sup>m</sup> = a<sup>m</sup>b<sup>m</sup>
                        </div>
                      </div>
                    </div>
                    
                    {/* Power of a Quotient */}
                    <div style={{ background: '#fff', borderRadius: '12px', padding: '20px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
                        <div>
                          <div style={{ fontSize: '18px', fontWeight: '700', color: '#1d1d1f', marginBottom: '4px' }}>Power of a Quotient Rule</div>
                          <div style={{ fontSize: '14px', color: '#6b7280' }}>Fraction raised to power → <strong>distribute</strong> to top and bottom</div>
                        </div>
                        <div style={{ 
                          fontSize: '24px', 
                          fontFamily: 'Georgia, serif', 
                          color: '#ec4899',
                          padding: '12px 20px',
                          background: '#fdf2f8',
                          borderRadius: '8px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px'
                        }}>
                          <span>(</span>
                          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <span>a</span>
                            <div style={{ width: '20px', height: '2px', background: '#ec4899' }} />
                            <span>b</span>
                          </div>
                          <span>)<sup>m</sup></span>
                          <span>=</span>
                          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <span>a<sup>m</sup></span>
                            <div style={{ width: '30px', height: '2px', background: '#ec4899' }} />
                            <span>b<sup>m</sup></span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Zero Exponent */}
                    <div style={{ background: '#fff', borderRadius: '12px', padding: '20px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
                        <div>
                          <div style={{ fontSize: '18px', fontWeight: '700', color: '#1d1d1f', marginBottom: '4px' }}>Zero Exponent Rule</div>
                          <div style={{ fontSize: '14px', color: '#6b7280' }}>Any nonzero base to power of 0 → <strong>equals 1</strong></div>
                        </div>
                        <div style={{ 
                          fontSize: '24px', 
                          fontFamily: 'Georgia, serif', 
                          color: '#1d1d1f',
                          padding: '12px 20px',
                          background: '#f5f5f7',
                          borderRadius: '8px'
                        }}>
                          a<sup>0</sup> = 1
                        </div>
                      </div>
                    </div>
                    
                    {/* Negative Exponent */}
                    <div style={{ background: '#fff', borderRadius: '12px', padding: '20px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
                        <div>
                          <div style={{ fontSize: '18px', fontWeight: '700', color: '#1d1d1f', marginBottom: '4px' }}>Negative Exponent Rule</div>
                          <div style={{ fontSize: '14px', color: '#6b7280' }}>Negative exponent → <strong>reciprocal</strong> with positive exponent</div>
                        </div>
                        <div style={{ 
                          fontSize: '24px', 
                          fontFamily: 'Georgia, serif', 
                          color: '#dc2626',
                          padding: '12px 20px',
                          background: '#fef2f2',
                          borderRadius: '8px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px'
                        }}>
                          <span>a<sup>−m</sup></span>
                          <span>=</span>
                          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <span>1</span>
                            <div style={{ width: '30px', height: '2px', background: '#dc2626' }} />
                            <span>a<sup>m</sup></span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Fractional Exponent */}
                    <div style={{ background: '#fff', borderRadius: '12px', padding: '20px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
                        <div>
                          <div style={{ fontSize: '18px', fontWeight: '700', color: '#1d1d1f', marginBottom: '4px' }}>Fractional Exponent Rule</div>
                          <div style={{ fontSize: '14px', color: '#6b7280' }}>Fractional exponent → denominator is <strong>root</strong>, numerator is <strong>power</strong></div>
                        </div>
                        <div style={{ 
                          fontFamily: 'Georgia, serif', 
                          color: '#0891b2',
                          padding: '16px 24px',
                          background: '#ecfeff',
                          borderRadius: '8px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '12px'
                        }}>
                          <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                            <span style={{ fontSize: '28px' }}>a</span>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginLeft: '2px', marginTop: '-4px' }}>
                              <span style={{ fontSize: '13px', lineHeight: '1.1' }}>m</span>
                              <div style={{ width: '14px', height: '1.5px', background: '#0891b2' }}></div>
                              <span style={{ fontSize: '13px', lineHeight: '1.1' }}>n</span>
                            </div>
                          </div>
                          <span style={{ fontSize: '24px' }}>=</span>
                          <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                            <span style={{ fontSize: '14px', marginTop: '4px' }}>n</span>
                            <span style={{ fontSize: '28px' }}>√</span>
                            <span style={{ fontSize: '28px' }}>a</span>
                            <span style={{ fontSize: '14px', marginTop: '-2px' }}>m</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            
            case 'comparingExpIntro':
              return (
                <div key={idx} style={{
                  background: 'linear-gradient(135deg, #f59e0b 0%, #ea580c 100%)',
                  borderRadius: '16px',
                  padding: '32px',
                  margin: '24px 0',
                  color: '#fff'
                }}>
                  <div style={{ fontSize: '14px', opacity: 0.8, marginBottom: '8px', fontWeight: '500', letterSpacing: '1px' }}>QUESTION TYPE</div>
                  <div style={{ fontSize: '24px', fontWeight: '700', marginBottom: '16px' }}>Comparing Exponential Expressions</div>
                  <div style={{ fontSize: '17px', opacity: 0.95, lineHeight: 1.6 }}>
                    These questions test your ability to make exponential equations equal by <strong>aligning bases and exponents correctly</strong>.
                  </div>
                </div>
              );
            
            case 'goldenRuleExponents':
              return (
                <div key={idx} style={{
                  background: '#1d1d1f',
                  borderRadius: '16px',
                  padding: '32px',
                  margin: '24px 0'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                    <span style={{ fontSize: '28px' }}>🏆</span>
                    <span style={{ fontSize: '22px', fontWeight: '700', color: '#fbbf24' }}>The Golden Rule</span>
                  </div>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <div style={{ 
                      background: 'linear-gradient(135deg, rgba(251,191,36,0.2) 0%, rgba(245,158,11,0.1) 100%)',
                      borderRadius: '12px',
                      padding: '20px',
                      borderLeft: '4px solid #fbbf24'
                    }}>
                      <div style={{ fontSize: '16px', color: '#fbbf24', marginBottom: '8px', fontWeight: '600' }}>Solving for something in the EXPONENT?</div>
                      <div style={{ fontSize: '18px', color: '#fff' }}>The <strong>bases</strong> MUST be the same</div>
                    </div>
                    
                    <div style={{ 
                      background: 'linear-gradient(135deg, rgba(251,191,36,0.2) 0%, rgba(245,158,11,0.1) 100%)',
                      borderRadius: '12px',
                      padding: '20px',
                      borderLeft: '4px solid #fbbf24'
                    }}>
                      <div style={{ fontSize: '16px', color: '#fbbf24', marginBottom: '8px', fontWeight: '600' }}>Solving for something in the BASE?</div>
                      <div style={{ fontSize: '18px', color: '#fff' }}>The <strong>exponents</strong> MUST be the same</div>
                    </div>
                  </div>
                  
                  <div style={{ 
                    marginTop: '24px',
                    padding: '16px 20px',
                    background: 'rgba(255,255,255,0.05)',
                    borderRadius: '8px',
                    textAlign: 'center'
                  }}>
                    <span style={{ fontSize: '15px', color: '#9ca3af' }}>This maintains equality on both sides of the equal sign</span>
                  </div>
                </div>
              );
            
            case 'exponentialFunctionIntro':
              return (
                <div key={idx} style={{
                  background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
                  borderRadius: '16px',
                  padding: '32px',
                  margin: '24px 0',
                  color: '#fff'
                }}>
                  <div style={{ fontSize: '14px', opacity: 0.8, marginBottom: '8px', fontWeight: '500', letterSpacing: '1px' }}>DEFINITION</div>
                  <div style={{ fontSize: '24px', fontWeight: '700', marginBottom: '16px' }}>What is an Exponential Function?</div>
                  <div style={{ 
                    fontSize: '18px', 
                    opacity: 0.95, 
                    lineHeight: 1.6,
                    padding: '16px 20px',
                    background: 'rgba(255,255,255,0.15)',
                    borderRadius: '8px'
                  }}>
                    An exponential function is a function where the <strong>variable is in the exponent</strong>.
                  </div>
                </div>
              );
            
            case 'exponentialFunctionFormula':
              return (
                <div key={idx} style={{
                  background: '#f5f5f7',
                  borderRadius: '16px',
                  padding: '32px',
                  margin: '24px 0'
                }}>
                  <div style={{ fontSize: '13px', color: '#86868b', marginBottom: '20px', fontWeight: '600', letterSpacing: '1px', textAlign: 'center' }}>GENERAL FORM</div>
                  
                  {/* Main Formula */}
                  <div style={{
                    background: '#fff',
                    borderRadius: '12px',
                    padding: '32px',
                    marginBottom: '24px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                    textAlign: 'center'
                  }}>
                    <div style={{ 
                      display: 'inline-flex', 
                      alignItems: 'center', 
                      gap: '8px', 
                      fontSize: '36px', 
                      fontFamily: 'Georgia, serif'
                    }}>
                      <span style={{ color: '#7c3aed', fontWeight: '600' }}>f(x)</span>
                      <span style={{ color: '#6b7280' }}>=</span>
                      <span style={{ color: '#ea580c', fontWeight: '600' }}>a</span>
                      <span style={{ color: '#6b7280' }}>·</span>
                      <span style={{ color: '#2563eb', fontWeight: '600' }}>b</span>
                      <sup style={{ fontSize: '22px', color: '#16a34a', fontWeight: '700' }}>x</sup>
                    </div>
                  </div>
                  
                  {/* Variable Explanations */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px' }}>
                    <div style={{ background: '#fff7ed', borderRadius: '12px', padding: '20px', textAlign: 'center' }}>
                      <div style={{ fontSize: '32px', fontWeight: '700', color: '#ea580c', fontFamily: 'Georgia, serif', marginBottom: '8px' }}>a</div>
                      <div style={{ fontSize: '15px', fontWeight: '600', color: '#1d1d1f', marginBottom: '4px' }}>Initial Value</div>
                      <div style={{ fontSize: '13px', color: '#6b7280' }}>Starting amount when x = 0</div>
                    </div>
                    <div style={{ background: '#eff6ff', borderRadius: '12px', padding: '20px', textAlign: 'center' }}>
                      <div style={{ fontSize: '32px', fontWeight: '700', color: '#2563eb', fontFamily: 'Georgia, serif', marginBottom: '8px' }}>b</div>
                      <div style={{ fontSize: '15px', fontWeight: '600', color: '#1d1d1f', marginBottom: '4px' }}>Growth/Decay Factor</div>
                      <div style={{ fontSize: '13px', color: '#6b7280' }}>The base (rate of change)</div>
                    </div>
                    <div style={{ background: '#f0fdf4', borderRadius: '12px', padding: '20px', textAlign: 'center' }}>
                      <div style={{ fontSize: '32px', fontWeight: '700', color: '#16a34a', fontFamily: 'Georgia, serif', marginBottom: '8px' }}>x</div>
                      <div style={{ fontSize: '15px', fontWeight: '600', color: '#1d1d1f', marginBottom: '4px' }}>Exponent</div>
                      <div style={{ fontSize: '13px', color: '#6b7280' }}>Time or number of periods</div>
                    </div>
                  </div>
                </div>
              );
            
            case 'growthVsDecay':
              return (
                <div key={idx} style={{
                  background: '#f5f5f7',
                  borderRadius: '16px',
                  padding: '32px',
                  margin: '24px 0'
                }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                    {/* Growth */}
                    <div style={{
                      background: '#f0fdf4',
                      borderRadius: '12px',
                      padding: '24px',
                      border: '2px solid #16a34a'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                        <span style={{ fontSize: '24px' }}>📈</span>
                        <span style={{ fontSize: '20px', fontWeight: '700', color: '#16a34a' }}>Exponential Growth</span>
                      </div>
                      <div style={{ 
                        background: '#fff', 
                        borderRadius: '8px', 
                        padding: '16px', 
                        marginBottom: '16px',
                        textAlign: 'center'
                      }}>
                        <span style={{ fontSize: '20px', fontFamily: 'Georgia, serif', color: '#1d1d1f' }}>
                          f(x) = a · b<sup>x</sup>, where <strong style={{ color: '#16a34a' }}>b &gt; 1</strong>
                        </span>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '15px', color: '#1d1d1f' }}>
                        <div>• Values <strong>increase</strong> as x increases</div>
                        <div>• Multiplies by a factor <strong>greater than 1</strong></div>
                      </div>
                      <div style={{ 
                        marginTop: '16px', 
                        padding: '12px', 
                        background: '#dcfce7', 
                        borderRadius: '8px',
                        textAlign: 'center'
                      }}>
                        <div style={{ fontSize: '14px', color: '#166534', marginBottom: '4px' }}>Example:</div>
                        <div style={{ fontSize: '18px', fontFamily: 'Georgia, serif', color: '#16a34a' }}>f(x) = 200(1.08)<sup>x</sup></div>
                        <div style={{ fontSize: '13px', color: '#166534', marginTop: '4px' }}>→ grows by <strong>8%</strong> each step</div>
                      </div>
                    </div>
                    
                    {/* Decay */}
                    <div style={{
                      background: '#fef2f2',
                      borderRadius: '12px',
                      padding: '24px',
                      border: '2px solid #dc2626'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                        <span style={{ fontSize: '24px' }}>📉</span>
                        <span style={{ fontSize: '20px', fontWeight: '700', color: '#dc2626' }}>Exponential Decay</span>
                      </div>
                      <div style={{ 
                        background: '#fff', 
                        borderRadius: '8px', 
                        padding: '16px', 
                        marginBottom: '16px',
                        textAlign: 'center'
                      }}>
                        <span style={{ fontSize: '20px', fontFamily: 'Georgia, serif', color: '#1d1d1f' }}>
                          f(x) = a · b<sup>x</sup>, where <strong style={{ color: '#dc2626' }}>0 &lt; b &lt; 1</strong>
                        </span>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '15px', color: '#1d1d1f' }}>
                        <div>• Values <strong>decrease</strong> as x increases</div>
                        <div>• Multiplies by a factor <strong>less than 1</strong></div>
                      </div>
                      <div style={{ 
                        marginTop: '16px', 
                        padding: '12px', 
                        background: '#fee2e2', 
                        borderRadius: '8px',
                        textAlign: 'center'
                      }}>
                        <div style={{ fontSize: '14px', color: '#991b1b', marginBottom: '4px' }}>Example:</div>
                        <div style={{ fontSize: '18px', fontFamily: 'Georgia, serif', color: '#dc2626' }}>f(x) = 500(0.9)<sup>x</sup></div>
                        <div style={{ fontSize: '13px', color: '#991b1b', marginTop: '4px' }}>→ loses <strong>10%</strong> each step</div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            
            // Quadratics Components - Premium Design
            case 'quadraticIntro':
              return (
                <div key={idx} style={{
                  background: 'linear-gradient(135deg, #ec4899 0%, #be185d 100%)',
                  borderRadius: '16px',
                  padding: '32px',
                  margin: '24px 0',
                  color: '#fff'
                }}>
                  <div style={{ fontSize: '14px', opacity: 0.8, marginBottom: '8px', fontWeight: '500', letterSpacing: '1px' }}>DEFINITION</div>
                  <div style={{ fontSize: '28px', fontWeight: '700', marginBottom: '16px' }}>What is a Quadratic?</div>
                  <div style={{ fontSize: '18px', opacity: 0.95, lineHeight: 1.6 }}>
                    A <strong>Quadratic</strong> is any equation with a highest degree of <strong>2</strong> (x²)
                  </div>
                  <div style={{ 
                    marginTop: '20px',
                    padding: '16px 24px',
                    background: 'rgba(255,255,255,0.15)',
                    borderRadius: '8px',
                    textAlign: 'center'
                  }}>
                    <span style={{ fontSize: '16px', opacity: 0.9 }}>The graph of a quadratic is called a </span>
                    <span style={{ fontSize: '20px', fontWeight: '700' }}>Parabola</span>
                  </div>
                </div>
              );
            
            case 'quadraticStandardForm':
              return (
                <div key={idx} style={{
                  background: '#f5f5f7',
                  borderRadius: '16px',
                  padding: '32px',
                  margin: '24px 0'
                }}>
                  <div style={{ fontSize: '13px', color: '#86868b', marginBottom: '20px', fontWeight: '600', letterSpacing: '1px', textAlign: 'center' }}>STANDARD FORM</div>
                  <div style={{
                    background: '#fff',
                    borderRadius: '12px',
                    padding: '32px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                    textAlign: 'center'
                  }}>
                    <div style={{ 
                      fontSize: '36px', 
                      fontFamily: 'Georgia, serif',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      flexWrap: 'wrap'
                    }}>
                      <span style={{ color: '#1d1d1f' }}>y</span>
                      <span style={{ color: '#6b7280' }}>=</span>
                      <span style={{ color: '#ec4899', fontWeight: '600' }}>a</span>
                      <span style={{ color: '#1d1d1f' }}>x²</span>
                      <span style={{ color: '#6b7280' }}>+</span>
                      <span style={{ color: '#8b5cf6', fontWeight: '600' }}>b</span>
                      <span style={{ color: '#1d1d1f' }}>x</span>
                      <span style={{ color: '#6b7280' }}>+</span>
                      <span style={{ color: '#0891b2', fontWeight: '600' }}>c</span>
                    </div>
                  </div>
                </div>
              );
            
            case 'parabolaDirection':
              return (
                <div key={idx} style={{
                  background: '#f5f5f7',
                  borderRadius: '16px',
                  padding: '32px',
                  margin: '24px 0'
                }}>
                  <div style={{ fontSize: '14px', color: '#1d1d1f', marginBottom: '20px', fontWeight: '600' }}>The <span style={{ color: '#ec4899' }}>a</span> value determines the parabola's direction and width:</div>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
                    {/* Opens Up */}
                    <div style={{ background: '#f0fdf4', borderRadius: '12px', padding: '20px', border: '2px solid #16a34a' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                        <span style={{ fontSize: '24px' }}>😊</span>
                        <div style={{ fontSize: '20px', fontFamily: 'Georgia, serif', color: '#16a34a', fontWeight: '600' }}>a &gt; 0</div>
                      </div>
                      <svg viewBox="0 0 200 120" style={{ width: '100%', height: '100px', marginBottom: '12px' }}>
                        <line x1="20" y1="20" x2="180" y2="20" stroke="#d1d5db" strokeWidth="1" />
                        <line x1="100" y1="10" x2="100" y2="110" stroke="#d1d5db" strokeWidth="1" />
                        <path d="M 30 20 C 30 85, 100 85, 100 85 C 100 85, 170 85, 170 20" fill="none" stroke="#16a34a" strokeWidth="3" />
                        <circle cx="100" cy="85" r="5" fill="#16a34a" />
                        <text x="100" y="105" fontSize="12" fill="#16a34a" fontWeight="600" textAnchor="middle">min</text>
                      </svg>
                      <div style={{ fontSize: '16px', color: '#166534' }}>Parabola opens <strong>UP</strong></div>
                      <div style={{ fontSize: '14px', color: '#6b7280', marginTop: '4px' }}>Graph has a <strong>Minimum</strong></div>
                    </div>
                    
                    {/* Opens Down */}
                    <div style={{ background: '#fef2f2', borderRadius: '12px', padding: '20px', border: '2px solid #dc2626' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                        <span style={{ fontSize: '24px' }}>🙁</span>
                        <div style={{ fontSize: '20px', fontFamily: 'Georgia, serif', color: '#dc2626', fontWeight: '600' }}>a &lt; 0</div>
                      </div>
                      <svg viewBox="0 0 200 120" style={{ width: '100%', height: '100px', marginBottom: '12px' }}>
                        <line x1="20" y1="100" x2="180" y2="100" stroke="#d1d5db" strokeWidth="1" />
                        <line x1="100" y1="10" x2="100" y2="110" stroke="#d1d5db" strokeWidth="1" />
                        <path d="M 30 100 C 30 35, 100 35, 100 35 C 100 35, 170 35, 170 100" fill="none" stroke="#dc2626" strokeWidth="3" />
                        <circle cx="100" cy="35" r="5" fill="#dc2626" />
                        <text x="100" y="22" fontSize="12" fill="#dc2626" fontWeight="600" textAnchor="middle">max</text>
                      </svg>
                      <div style={{ fontSize: '16px', color: '#991b1b' }}>Parabola opens <strong>DOWN</strong></div>
                      <div style={{ fontSize: '14px', color: '#6b7280', marginTop: '4px' }}>Graph has a <strong>Maximum</strong></div>
                    </div>
                  </div>
                  
                  {/* Width comparison */}
                  <div style={{ background: '#fff', borderRadius: '12px', padding: '20px', border: '1px solid #e5e5e5', marginTop: '16px' }}>
                    <div style={{ fontSize: '16px', fontWeight: '600', color: '#1d1d1f', marginBottom: '16px' }}>Width of Parabola</div>
                    <svg viewBox="0 0 300 100" style={{ width: '100%', height: '80px', marginBottom: '12px' }}>
                      <line x1="20" y1="90" x2="280" y2="90" stroke="#d1d5db" strokeWidth="1" />
                      <path d="M 60 85 Q 90 20 120 85" fill="none" stroke="#ec4899" strokeWidth="2.5" />
                      <path d="M 130 85 Q 180 20 230 85" fill="none" stroke="#8b5cf6" strokeWidth="2.5" strokeDasharray="6,3" />
                      <text x="90" y="70" fontSize="11" fill="#ec4899" fontWeight="600">|a| = 3</text>
                      <text x="165" y="50" fontSize="11" fill="#8b5cf6" fontWeight="600">|a| = 0.5</text>
                    </svg>
                    <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <div style={{ width: '20px', height: '3px', background: '#ec4899', borderRadius: '2px' }}></div>
                        <span style={{ fontSize: '14px', color: '#1d1d1f' }}>Larger |a| → <strong>Narrower</strong></span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <div style={{ width: '20px', height: '3px', background: '#8b5cf6', borderRadius: '2px', backgroundImage: 'repeating-linear-gradient(90deg, #8b5cf6 0, #8b5cf6 6px, transparent 6px, transparent 9px)' }}></div>
                        <span style={{ fontSize: '14px', color: '#1d1d1f' }}>Smaller |a| → <strong>Wider</strong></span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            
            case 'rootsIntro':
              return (
                <div key={idx} style={{
                  background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                  borderRadius: '16px',
                  padding: '32px',
                  margin: '24px 0',
                  color: '#fff'
                }}>
                  <div style={{ fontSize: '14px', opacity: 0.8, marginBottom: '8px', fontWeight: '500', letterSpacing: '1px' }}>DEFINITION</div>
                  <div style={{ fontSize: '28px', fontWeight: '700', marginBottom: '16px' }}>What are Roots?</div>
                  <div style={{ fontSize: '18px', opacity: 0.95, lineHeight: 1.6 }}>
                    <strong>Roots</strong> are the values of x that make a quadratic equation equal to <strong>zero</strong>.
                  </div>
                </div>
              );
            
            case 'rootsSynonyms':
              return (
                <div key={idx} style={{
                  background: '#1d1d1f',
                  borderRadius: '16px',
                  padding: '28px 32px',
                  margin: '24px 0'
                }}>
                  <div style={{ fontSize: '14px', color: '#9ca3af', marginBottom: '16px', fontWeight: '600' }}>THESE ALL MEAN THE SAME THING</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                    {['Roots', 'Solutions', 'Zeros', 'X-Intercepts'].map((term, i) => (
                      <span key={i} style={{
                        padding: '10px 20px',
                        background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                        borderRadius: '8px',
                        fontSize: '16px',
                        fontWeight: '600',
                        color: '#fff'
                      }}>{term}</span>
                    ))}
                  </div>
                  <div style={{ marginTop: '16px', fontSize: '15px', color: '#9ca3af' }}>
                    All refer to the x-values where the parabola touches or crosses the x-axis
                  </div>
                </div>
              );
            
            case 'rootsOnGraph':
              return (
                <div key={idx} style={{
                  background: '#f5f5f7',
                  borderRadius: '16px',
                  padding: '32px',
                  margin: '24px 0'
                }}>
                  <div style={{ fontSize: '16px', fontWeight: '600', color: '#1d1d1f', marginBottom: '20px' }}>How Roots Look on a Graph</div>
                  <div style={{ background: '#fff', borderRadius: '12px', padding: '24px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
                    <div style={{ fontSize: '16px', color: '#1d1d1f', marginBottom: '20px' }}>
                      On the graph of <span style={{ fontFamily: 'Georgia, serif' }}>y = ax² + bx + c</span>, the <strong>roots are the x-intercepts</strong>.
                    </div>
                    
                    {/* SVG Graph showing roots */}
                    <svg viewBox="0 0 300 180" style={{ width: '100%', maxWidth: '400px', height: 'auto', display: 'block', margin: '0 auto 20px' }}>
                      {/* Grid */}
                      <defs>
                        <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#f0f0f0" strokeWidth="0.5"/>
                        </pattern>
                      </defs>
                      <rect width="300" height="180" fill="url(#grid)"/>
                      
                      {/* Axes */}
                      <line x1="30" y1="120" x2="270" y2="120" stroke="#1d1d1f" strokeWidth="1.5" />
                      <line x1="150" y1="20" x2="150" y2="160" stroke="#1d1d1f" strokeWidth="1.5" />
                      <text x="275" y="125" fontSize="12" fill="#1d1d1f">x</text>
                      <text x="155" y="18" fontSize="12" fill="#1d1d1f">y</text>
                      
                      {/* Parabola - passes through (70,120) and (230,120) */}
                      <path d="M 70 120 C 70 40, 150 40, 150 40 C 150 40, 230 40, 230 120" fill="none" stroke="#f59e0b" strokeWidth="3" />
                      
                      {/* Root points - on the x-axis where parabola crosses */}
                      <circle cx="70" cy="120" r="8" fill="#f59e0b" />
                      <circle cx="230" cy="120" r="8" fill="#f59e0b" />
                      
                      {/* Labels */}
                      <text x="70" y="145" fontSize="12" fill="#d97706" fontWeight="600" textAnchor="middle">(x₁, 0)</text>
                      <text x="230" y="145" fontSize="12" fill="#d97706" fontWeight="600" textAnchor="middle">(x₂, 0)</text>
                      <text x="200" y="35" fontSize="11" fill="#92400e">y = ax² + bx + c</text>
                    </svg>
                    
                    <div style={{ 
                      padding: '16px 24px', 
                      background: '#fff7ed', 
                      borderRadius: '8px',
                      textAlign: 'center'
                    }}>
                      <span style={{ fontSize: '15px', color: '#92400e' }}>Each root corresponds to a point </span>
                      <span style={{ fontSize: '18px', fontFamily: 'Georgia, serif', fontWeight: '600', color: '#d97706' }}>(x, 0)</span>
                      <span style={{ fontSize: '15px', color: '#92400e' }}> on the graph</span>
                    </div>
                  </div>
                </div>
              );
            
            case 'vertexIntro':
              return (
                <div key={idx} style={{
                  background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
                  borderRadius: '16px',
                  padding: '32px',
                  margin: '24px 0',
                  color: '#fff'
                }}>
                  <div style={{ fontSize: '14px', opacity: 0.8, marginBottom: '8px', fontWeight: '500', letterSpacing: '1px' }}>DEFINITION</div>
                  <div style={{ fontSize: '28px', fontWeight: '700', marginBottom: '16px' }}>What is the Vertex?</div>
                  <div style={{ fontSize: '18px', opacity: 0.95, lineHeight: 1.6, marginBottom: '24px' }}>
                    The <strong>Vertex</strong> is the <strong>maximum</strong> or <strong>minimum</strong> point of a quadratic.
                  </div>
                  
                  {/* Two separate diagrams side by side */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '20px', marginBottom: '20px' }}>
                    {/* Min vertex */}
                    <div style={{ textAlign: 'center' }}>
                      <svg viewBox="0 0 100 70" style={{ width: '100%', maxWidth: '120px', height: 'auto' }}>
                        <path d="M 10 15 C 10 60, 50 60, 50 60 C 50 60, 90 60, 90 15" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="3" />
                        <circle cx="50" cy="60" r="5" fill="#fbbf24" />
                      </svg>
                      <div style={{ fontSize: '13px', color: '#fbbf24', fontWeight: '600', marginTop: '8px' }}>Minimum</div>
                    </div>
                    
                    {/* Max vertex */}
                    <div style={{ textAlign: 'center' }}>
                      <svg viewBox="0 0 100 70" style={{ width: '100%', maxWidth: '120px', height: 'auto' }}>
                        <path d="M 10 55 C 10 10, 50 10, 50 10 C 50 10, 90 10, 90 55" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="3" />
                        <circle cx="50" cy="10" r="5" fill="#fbbf24" />
                      </svg>
                      <div style={{ fontSize: '13px', color: '#fbbf24', fontWeight: '600', marginTop: '8px' }}>Maximum</div>
                    </div>
                  </div>
                  
                  <div style={{ 
                    padding: '14px 20px',
                    background: 'rgba(255,255,255,0.15)',
                    borderRadius: '8px',
                    textAlign: 'center'
                  }}>
                    On the graph, the vertex is where the parabola <strong>changes direction</strong>.
                  </div>
                </div>
              );
            
            case 'vertexFormula':
              return (
                <div key={idx} style={{
                  background: '#f5f5f7',
                  borderRadius: '16px',
                  padding: '32px',
                  margin: '24px 0'
                }}>
                  <div style={{ fontSize: '13px', color: '#86868b', marginBottom: '20px', fontWeight: '600', letterSpacing: '1px', textAlign: 'center' }}>X-COORDINATE OF THE VERTEX</div>
                  <div style={{
                    background: '#fff',
                    borderRadius: '12px',
                    padding: '32px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                    textAlign: 'center'
                  }}>
                    <div style={{ 
                      fontSize: '36px', 
                      fontFamily: 'Georgia, serif',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '12px'
                    }}>
                      <span style={{ color: '#8b5cf6', fontWeight: '600' }}>x</span>
                      <span style={{ color: '#6b7280' }}>=</span>
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <span style={{ color: '#1d1d1f' }}>−b</span>
                        <div style={{ width: '50px', height: '3px', background: '#1d1d1f', margin: '6px 0' }}></div>
                        <span style={{ color: '#1d1d1f' }}>2a</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            
            case 'vertexWhereVsWhat':
              return (
                <div key={idx} style={{
                  background: '#fef3c7',
                  borderRadius: '16px',
                  padding: '28px 32px',
                  margin: '24px 0',
                  border: '2px solid #f59e0b'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                    <span style={{ fontSize: '24px' }}>⚠️</span>
                    <span style={{ fontSize: '18px', fontWeight: '700', color: '#92400e' }}>SAT Trap: WHERE vs WHAT</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <div style={{ background: '#fff', borderRadius: '8px', padding: '16px', display: 'flex', alignItems: 'center', gap: '16px' }}>
                      <span style={{ fontSize: '20px', fontWeight: '700', color: '#7c3aed', fontFamily: 'Georgia, serif' }}>WHERE</span>
                      <span style={{ color: '#6b7280' }}>is the max/min?</span>
                      <span style={{ color: '#1d1d1f' }}>→ Answer with <strong>x-coordinate</strong></span>
                    </div>
                    <div style={{ background: '#fff', borderRadius: '8px', padding: '16px', display: 'flex', alignItems: 'center', gap: '16px' }}>
                      <span style={{ fontSize: '20px', fontWeight: '700', color: '#ec4899', fontFamily: 'Georgia, serif' }}>WHAT</span>
                      <span style={{ color: '#6b7280' }}>is the max/min?</span>
                      <span style={{ color: '#1d1d1f' }}>→ Answer with <strong>y-coordinate</strong></span>
                    </div>
                  </div>
                </div>
              );
            
            case 'vertexFormIntro':
              return (
                <div key={idx} style={{
                  background: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)',
                  borderRadius: '16px',
                  padding: '32px',
                  margin: '24px 0',
                  color: '#fff'
                }}>
                  <div style={{ fontSize: '14px', opacity: 0.8, marginBottom: '8px', fontWeight: '500', letterSpacing: '1px' }}>ALTERNATE FORM</div>
                  <div style={{ fontSize: '28px', fontWeight: '700', marginBottom: '16px' }}>Vertex Form</div>
                  <div style={{ fontSize: '17px', opacity: 0.95, lineHeight: 1.6 }}>
                    Vertex Form allows you to see the vertex <strong>immediately</strong> without any calculation.
                  </div>
                </div>
              );
            
            case 'vertexFormFormula':
              return (
                <div key={idx} style={{
                  background: '#f5f5f7',
                  borderRadius: '16px',
                  padding: '32px',
                  margin: '24px 0'
                }}>
                  <div style={{ fontSize: '13px', color: '#86868b', marginBottom: '20px', fontWeight: '600', letterSpacing: '1px', textAlign: 'center' }}>VERTEX FORM</div>
                  <div style={{
                    background: '#fff',
                    borderRadius: '12px',
                    padding: '32px',
                    marginBottom: '20px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                    textAlign: 'center'
                  }}>
                    <div style={{ 
                      fontSize: '32px', 
                      fontFamily: 'Georgia, serif',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      flexWrap: 'wrap'
                    }}>
                      <span style={{ color: '#1d1d1f' }}>y</span>
                      <span style={{ color: '#6b7280' }}>=</span>
                      <span style={{ color: '#ec4899', fontWeight: '600' }}>a</span>
                      <span style={{ color: '#1d1d1f' }}>(x −</span>
                      <span style={{ color: '#8b5cf6', fontWeight: '600' }}>h</span>
                      <span style={{ color: '#1d1d1f' }}>)²</span>
                      <span style={{ color: '#6b7280' }}>+</span>
                      <span style={{ color: '#0891b2', fontWeight: '600' }}>k</span>
                    </div>
                  </div>
                  
                  {/* Visual diagram showing vertex */}
                  <div style={{ background: '#fff', borderRadius: '12px', padding: '24px', marginBottom: '20px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
                    <svg viewBox="0 0 280 140" style={{ width: '100%', maxWidth: '350px', height: 'auto', display: 'block', margin: '0 auto' }}>
                      {/* Grid */}
                      <defs>
                        <pattern id="vertexGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#f0f0f0" strokeWidth="0.5"/>
                        </pattern>
                      </defs>
                      <rect width="280" height="140" fill="url(#vertexGrid)"/>
                      
                      {/* Axes */}
                      <line x1="30" y1="110" x2="250" y2="110" stroke="#1d1d1f" strokeWidth="1.5" />
                      <line x1="60" y1="20" x2="60" y2="130" stroke="#1d1d1f" strokeWidth="1.5" />
                      
                      {/* Parabola - opens down, vertex at (150, 40) */}
                      <path d="M 70 110 C 70 40, 150 40, 150 40 C 150 40, 230 40, 230 110" fill="none" stroke="#0891b2" strokeWidth="3" />
                      
                      {/* Vertex point */}
                      <circle cx="150" cy="40" r="7" fill="#8b5cf6" />
                      
                      {/* Dashed lines to show h and k */}
                      <line x1="150" y1="40" x2="150" y2="110" stroke="#8b5cf6" strokeWidth="1.5" strokeDasharray="5,3" />
                      <line x1="60" y1="40" x2="150" y2="40" stroke="#0891b2" strokeWidth="1.5" strokeDasharray="5,3" />
                      
                      {/* Labels */}
                      <text x="150" y="125" fontSize="14" fill="#8b5cf6" fontWeight="600" textAnchor="middle">h</text>
                      <text x="45" y="45" fontSize="14" fill="#0891b2" fontWeight="600">k</text>
                      <text x="165" y="35" fontSize="13" fill="#1d1d1f" fontWeight="600">(h, k)</text>
                    </svg>
                  </div>
                  
                  <div style={{ 
                    background: '#ecfeff', 
                    borderRadius: '12px', 
                    padding: '20px',
                    textAlign: 'center'
                  }}>
                    <span style={{ fontSize: '16px', color: '#0e7490' }}>The vertex is at </span>
                    <span style={{ fontSize: '22px', fontFamily: 'Georgia, serif', fontWeight: '600', color: '#0891b2' }}>(h, k)</span>
                  </div>
                </div>
              );
            
            case 'discriminantIntro':
              return (
                <div key={idx} style={{
                  background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                  borderRadius: '16px',
                  padding: '32px',
                  margin: '24px 0',
                  color: '#fff'
                }}>
                  <div style={{ fontSize: '14px', opacity: 0.8, marginBottom: '8px', fontWeight: '500', letterSpacing: '1px' }}>POWERFUL TOOL</div>
                  <div style={{ fontSize: '28px', fontWeight: '700', marginBottom: '16px' }}>The Discriminant</div>
                  <div style={{ fontSize: '17px', opacity: 0.95, lineHeight: 1.6 }}>
                    The <strong>Discriminant</strong> tells you <strong>how many solutions</strong> a quadratic has — <em>without actually solving it</em>.
                  </div>
                </div>
              );
            
            case 'discriminantFormula':
              return (
                <div key={idx} style={{
                  background: '#f5f5f7',
                  borderRadius: '16px',
                  padding: '32px',
                  margin: '24px 0'
                }}>
                  {/* Step 1: Quadratic Formula */}
                  <div style={{ marginBottom: '24px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                      <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#10b981', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '16px' }}>1</div>
                      <div style={{ fontSize: '16px', fontWeight: '600', color: '#1d1d1f' }}>Start with the Quadratic Formula</div>
                    </div>
                    <div style={{
                      background: '#fff',
                      borderRadius: '12px',
                      padding: '24px',
                      boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
                      textAlign: 'center'
                    }}>
                      <div style={{ 
                        fontSize: '26px', 
                        fontFamily: 'Georgia, serif',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px'
                      }}>
                        <span>x</span>
                        <span style={{ color: '#6b7280' }}>=</span>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                            <span>−b ±</span>
                            <span>√(</span>
                            <span style={{ background: '#dcfce7', padding: '4px 10px', borderRadius: '6px', color: '#16a34a', fontWeight: '600' }}>b² − 4ac</span>
                            <span>)</span>
                          </div>
                          <div style={{ width: '180px', height: '2px', background: '#1d1d1f', margin: '8px 0' }}></div>
                          <span>2a</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Step 2: The Discriminant */}
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                      <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#10b981', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '16px' }}>2</div>
                      <div style={{ fontSize: '16px', fontWeight: '600', color: '#1d1d1f' }}>The part under the square root is the Discriminant</div>
                    </div>
                    <div style={{
                      background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                      borderRadius: '12px',
                      padding: '28px',
                      textAlign: 'center'
                    }}>
                      <div style={{ fontSize: '18px', color: 'rgba(255,255,255,0.8)', marginBottom: '12px', fontWeight: '500' }}>THE DISCRIMINANT</div>
                      <div style={{ fontSize: '42px', fontFamily: 'Georgia, serif', color: '#fff', fontWeight: '600' }}>
                        D = b² − 4ac
                      </div>
                    </div>
                  </div>
                </div>
              );
            
            case 'discriminantCases':
              return (
                <div key={idx} style={{
                  background: '#f5f5f7',
                  borderRadius: '16px',
                  padding: '32px',
                  margin: '24px 0'
                }}>
                  <div style={{ fontSize: '18px', fontWeight: '700', color: '#1d1d1f', marginBottom: '8px' }}>Three Possible Cases</div>
                  <div style={{ fontSize: '14px', color: '#6b7280', marginBottom: '24px' }}>The value of D determines how many times the parabola crosses the x-axis</div>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {/* D > 0 */}
                    <div style={{ background: '#f0fdf4', borderRadius: '12px', padding: '24px', border: '2px solid #16a34a' }}>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', flexWrap: 'wrap' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '100px' }}>
                          <div style={{ fontSize: '32px', fontFamily: 'Georgia, serif', color: '#16a34a', fontWeight: '700' }}>D &gt; 0</div>
                          <svg viewBox="0 0 80 50" style={{ width: '80px', height: '50px', marginTop: '8px' }}>
                            <line x1="5" y1="40" x2="75" y2="40" stroke="#d1d5db" strokeWidth="1" />
                            <path d="M 10 40 C 10 10, 40 10, 40 10 C 40 10, 70 10, 70 40" fill="none" stroke="#16a34a" strokeWidth="2.5" />
                            <circle cx="10" cy="40" r="4" fill="#16a34a" />
                            <circle cx="70" cy="40" r="4" fill="#16a34a" />
                          </svg>
                        </div>
                        <div style={{ flex: 1, minWidth: '200px' }}>
                          <div style={{ fontSize: '20px', fontWeight: '700', color: '#166534', marginBottom: '8px' }}>Two Real Solutions</div>
                          <div style={{ fontSize: '15px', color: '#1d1d1f', lineHeight: 1.6 }}>
                            The parabola crosses the x-axis at <strong>two different points</strong>.
                          </div>
                          <div style={{ marginTop: '12px', padding: '10px 14px', background: '#dcfce7', borderRadius: '8px', fontSize: '14px', color: '#166534' }}>
                            <strong>Example:</strong> x² − 5x + 6 = 0 → D = 25 − 24 = 1 → Two solutions: x = 2, x = 3
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* D = 0 */}
                    <div style={{ background: '#fffbeb', borderRadius: '12px', padding: '24px', border: '2px solid #f59e0b' }}>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', flexWrap: 'wrap' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '100px' }}>
                          <div style={{ fontSize: '32px', fontFamily: 'Georgia, serif', color: '#d97706', fontWeight: '700' }}>D = 0</div>
                          <svg viewBox="0 0 80 50" style={{ width: '80px', height: '50px', marginTop: '8px' }}>
                            <line x1="5" y1="40" x2="75" y2="40" stroke="#d1d5db" strokeWidth="1" />
                            <path d="M 10 10 C 10 40, 40 40, 40 40 C 40 40, 70 40, 70 10" fill="none" stroke="#f59e0b" strokeWidth="2.5" />
                            <circle cx="40" cy="40" r="5" fill="#f59e0b" />
                          </svg>
                        </div>
                        <div style={{ flex: 1, minWidth: '200px' }}>
                          <div style={{ fontSize: '20px', fontWeight: '700', color: '#92400e', marginBottom: '8px' }}>One Real Solution</div>
                          <div style={{ fontSize: '15px', color: '#1d1d1f', lineHeight: 1.6 }}>
                            The parabola <strong>touches</strong> the x-axis at exactly <strong>one point</strong> (the vertex). Also called a "double root."
                          </div>
                          <div style={{ marginTop: '12px', padding: '10px 14px', background: '#fef3c7', borderRadius: '8px', fontSize: '14px', color: '#92400e' }}>
                            <strong>Example:</strong> x² − 6x + 9 = 0 → D = 36 − 36 = 0 → One solution: x = 3
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* D < 0 */}
                    <div style={{ background: '#fef2f2', borderRadius: '12px', padding: '24px', border: '2px solid #dc2626' }}>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', flexWrap: 'wrap' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '100px' }}>
                          <div style={{ fontSize: '32px', fontFamily: 'Georgia, serif', color: '#dc2626', fontWeight: '700' }}>D &lt; 0</div>
                          <svg viewBox="0 0 80 50" style={{ width: '80px', height: '50px', marginTop: '8px' }}>
                            <line x1="5" y1="45" x2="75" y2="45" stroke="#d1d5db" strokeWidth="1" />
                            <path d="M 10 5 C 10 30, 40 30, 40 30 C 40 30, 70 30, 70 5" fill="none" stroke="#dc2626" strokeWidth="2.5" />
                          </svg>
                        </div>
                        <div style={{ flex: 1, minWidth: '200px' }}>
                          <div style={{ fontSize: '20px', fontWeight: '700', color: '#991b1b', marginBottom: '8px' }}>No Real Solutions</div>
                          <div style={{ fontSize: '15px', color: '#1d1d1f', lineHeight: 1.6 }}>
                            The parabola <strong>never touches</strong> the x-axis. Solutions are complex/imaginary numbers.
                          </div>
                          <div style={{ marginTop: '12px', padding: '10px 14px', background: '#fee2e2', borderRadius: '8px', fontSize: '14px', color: '#991b1b' }}>
                            <strong>Example:</strong> x² + x + 1 = 0 → D = 1 − 4 = −3 → No real solutions
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            
            case 'discriminantWhenToUse':
              return (
                <div key={idx} style={{
                  background: '#1d1d1f',
                  borderRadius: '16px',
                  padding: '32px',
                  margin: '24px 0'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                    <span style={{ fontSize: '28px' }}>🎯</span>
                    <span style={{ fontSize: '20px', fontWeight: '700', color: '#fff' }}>When to Use the Discriminant</span>
                  </div>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px' }}>
                    <div style={{ background: 'rgba(16, 185, 129, 0.2)', borderRadius: '12px', padding: '20px', borderLeft: '4px solid #10b981' }}>
                      <div style={{ fontSize: '14px', color: '#10b981', marginBottom: '8px', fontWeight: '600' }}>SCENARIO 1</div>
                      <div style={{ fontSize: '16px', color: '#fff', lineHeight: 1.5 }}>
                        You're <strong>told</strong> how many solutions the equation has and need to find a missing value.
                      </div>
                      <div style={{ marginTop: '12px', fontSize: '13px', color: '#9ca3af', fontStyle: 'italic' }}>
                        "If the equation has exactly one solution, what is the value of k?"
                      </div>
                    </div>
                    
                    <div style={{ background: 'rgba(16, 185, 129, 0.2)', borderRadius: '12px', padding: '20px', borderLeft: '4px solid #10b981' }}>
                      <div style={{ fontSize: '14px', color: '#10b981', marginBottom: '8px', fontWeight: '600' }}>SCENARIO 2</div>
                      <div style={{ fontSize: '16px', color: '#fff', lineHeight: 1.5 }}>
                        You need to <strong>determine</strong> how many solutions an equation has.
                      </div>
                      <div style={{ marginTop: '12px', fontSize: '13px', color: '#9ca3af', fontStyle: 'italic' }}>
                        "How many x-intercepts does the graph of y = 2x² − 3x + 5 have?"
                      </div>
                    </div>
                  </div>
                  
                  <div style={{ marginTop: '20px', padding: '16px', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', textAlign: 'center' }}>
                    <span style={{ fontSize: '15px', color: '#9ca3af' }}>💡 </span>
                    <span style={{ fontSize: '15px', color: '#fff' }}>Keywords to look for: <strong>"how many solutions"</strong>, <strong>"number of x-intercepts"</strong>, <strong>"exactly one solution"</strong></span>
                  </div>
                </div>
              );
            
            // Deriving Standard Form Components
            case 'derivingStandardFormIntro':
              return (
                <div key={idx} style={{
                  background: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)',
                  borderRadius: '16px',
                  padding: '32px',
                  margin: '24px 0',
                  color: '#fff'
                }}>
                  <div style={{ fontSize: '14px', opacity: 0.8, marginBottom: '8px', fontWeight: '500', letterSpacing: '1px' }}>SKILL</div>
                  <div style={{ fontSize: '28px', fontWeight: '700', marginBottom: '16px' }}>Deriving Standard Form from a Graph</div>
                  <div style={{ fontSize: '17px', opacity: 0.95, lineHeight: 1.6 }}>
                    Sometimes the SAT gives you a <strong>graph of a parabola</strong> and asks you to find the equation. You'll need to extract key information from the graph to build the equation.
                  </div>
                </div>
              );
            
            case 'derivingStandardFormMethods':
              return (
                <div key={idx} style={{
                  background: '#f5f5f7',
                  borderRadius: '16px',
                  padding: '32px',
                  margin: '24px 0'
                }}>
                  <div style={{ fontSize: '18px', fontWeight: '700', color: '#1d1d1f', marginBottom: '8px' }}>Three Methods to Derive the Equation</div>
                  <div style={{ fontSize: '14px', color: '#6b7280', marginBottom: '24px' }}>Choose the method based on what information you can identify from the graph</div>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {/* Method 1: Vertex Form */}
                    <div style={{ background: '#fff', borderRadius: '12px', padding: '24px', border: '2px solid #8b5cf6' }}>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', flexWrap: 'wrap' }}>
                        <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#8b5cf6', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '18px', flexShrink: 0 }}>1</div>
                        <div style={{ flex: 1, minWidth: '250px' }}>
                          <div style={{ fontSize: '18px', fontWeight: '700', color: '#8b5cf6', marginBottom: '8px' }}>Vertex Form Method</div>
                          <div style={{ fontSize: '15px', color: '#1d1d1f', marginBottom: '12px', lineHeight: 1.6 }}>
                            Use when you can identify the <strong>vertex (h, k)</strong> and <strong>one other point</strong> on the parabola.
                          </div>
                          <div style={{ background: '#faf5ff', borderRadius: '8px', padding: '16px' }}>
                            <div style={{ fontSize: '13px', color: '#6b7280', marginBottom: '8px' }}>STEPS:</div>
                            <div style={{ fontSize: '14px', color: '#1d1d1f', lineHeight: 1.8 }}>
                              1. Start with vertex form: <strong style={{ fontFamily: 'Georgia, serif' }}>y = a(x − h)² + k</strong><br/>
                              2. Plug in the vertex (h, k)<br/>
                              3. Use another point to solve for <strong>a</strong><br/>
                              4. Expand to get standard form if needed
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Method 2: Factored Form */}
                    <div style={{ background: '#fff', borderRadius: '12px', padding: '24px', border: '2px solid #f59e0b' }}>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', flexWrap: 'wrap' }}>
                        <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#f59e0b', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '18px', flexShrink: 0 }}>2</div>
                        <div style={{ flex: 1, minWidth: '250px' }}>
                          <div style={{ fontSize: '18px', fontWeight: '700', color: '#d97706', marginBottom: '8px' }}>Factored Form Method</div>
                          <div style={{ fontSize: '15px', color: '#1d1d1f', marginBottom: '12px', lineHeight: 1.6 }}>
                            Use when you can identify the <strong>two x-intercepts (roots)</strong> and <strong>one other point</strong>.
                          </div>
                          <div style={{ background: '#fffbeb', borderRadius: '8px', padding: '16px' }}>
                            <div style={{ fontSize: '13px', color: '#6b7280', marginBottom: '8px' }}>STEPS:</div>
                            <div style={{ fontSize: '14px', color: '#1d1d1f', lineHeight: 1.8 }}>
                              1. Start with factored form: <strong style={{ fontFamily: 'Georgia, serif' }}>y = a(x − r₁)(x − r₂)</strong><br/>
                              2. Plug in the roots r₁ and r₂<br/>
                              3. Use another point to solve for <strong>a</strong><br/>
                              4. Expand to get standard form
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Method 3: System of Equations */}
                    <div style={{ background: '#fff', borderRadius: '12px', padding: '24px', border: '2px solid #10b981' }}>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', flexWrap: 'wrap' }}>
                        <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#10b981', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '18px', flexShrink: 0 }}>3</div>
                        <div style={{ flex: 1, minWidth: '250px' }}>
                          <div style={{ fontSize: '18px', fontWeight: '700', color: '#059669', marginBottom: '8px' }}>System of Equations Method</div>
                          <div style={{ fontSize: '15px', color: '#1d1d1f', marginBottom: '12px', lineHeight: 1.6 }}>
                            Use when you can identify <strong>three points</strong> on the parabola but not the vertex or roots directly.
                          </div>
                          <div style={{ background: '#ecfdf5', borderRadius: '8px', padding: '16px' }}>
                            <div style={{ fontSize: '13px', color: '#6b7280', marginBottom: '8px' }}>STEPS:</div>
                            <div style={{ fontSize: '14px', color: '#1d1d1f', lineHeight: 1.8 }}>
                              1. Use standard form: <strong style={{ fontFamily: 'Georgia, serif' }}>y = ax² + bx + c</strong><br/>
                              2. Plug in each of the 3 points to create 3 equations<br/>
                              3. Solve the system for <strong>a</strong>, <strong>b</strong>, and <strong>c</strong>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            
            case 'derivingStandardFormTips':
              return (
                <div key={idx} style={{
                  background: '#1d1d1f',
                  borderRadius: '16px',
                  padding: '32px',
                  margin: '24px 0'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                    <span style={{ fontSize: '28px' }}>⚡</span>
                    <span style={{ fontSize: '20px', fontWeight: '700', color: '#fff' }}>Pro Tips: DESMOS Shortcut</span>
                  </div>
                  
                  <div style={{ background: 'rgba(99, 102, 241, 0.2)', borderRadius: '12px', padding: '24px', borderLeft: '4px solid #6366f1' }}>
                    <div style={{ fontSize: '16px', color: '#fff', lineHeight: 1.7, marginBottom: '16px' }}>
                      On the SAT, you have access to <strong>DESMOS</strong>! You can often find the equation faster by:
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <span style={{ color: '#a5b4fc', fontSize: '18px' }}>①</span>
                        <span style={{ color: '#e0e7ff', fontSize: '15px' }}>Typing <strong style={{ color: '#fff', fontFamily: 'monospace', background: 'rgba(255,255,255,0.1)', padding: '2px 6px', borderRadius: '4px' }}>y = a(x − h)² + k</strong> and adjusting sliders</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <span style={{ color: '#a5b4fc', fontSize: '18px' }}>②</span>
                        <span style={{ color: '#e0e7ff', fontSize: '15px' }}>Using <strong style={{ color: '#fff' }}>regression</strong> if you have multiple points</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <span style={{ color: '#a5b4fc', fontSize: '18px' }}>③</span>
                        <span style={{ color: '#e0e7ff', fontSize: '15px' }}>Visually matching your equation to the given graph</span>
                      </div>
                    </div>
                  </div>
                  
                  <div style={{ marginTop: '20px', padding: '16px', background: 'rgba(255,255,255,0.05)', borderRadius: '8px' }}>
                    <div style={{ fontSize: '14px', color: '#9ca3af', marginBottom: '8px' }}>🔍 WHAT TO LOOK FOR ON THE GRAPH:</div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {['Vertex point', 'X-intercepts (roots)', 'Y-intercept', 'Direction (up/down)', 'Other labeled points'].map((item, i) => (
                        <span key={i} style={{ padding: '6px 12px', background: 'rgba(255,255,255,0.1)', borderRadius: '6px', fontSize: '13px', color: '#fff' }}>{item}</span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            
            // Radians & Degrees Components
            case 'radiansDegreesIntro':
              return (
                <div key={idx} style={{
                  background: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)',
                  borderRadius: '16px',
                  padding: '32px',
                  margin: '24px 0',
                  color: '#fff'
                }}>
                  <div style={{ fontSize: '14px', opacity: 0.8, marginBottom: '8px', fontWeight: '500', letterSpacing: '1px' }}>ANGLE MEASUREMENT</div>
                  <div style={{ fontSize: '28px', fontWeight: '700', marginBottom: '16px' }}>Radians & Degrees</div>
                  <div style={{ fontSize: '17px', opacity: 0.95, lineHeight: 1.6, marginBottom: '20px' }}>
                    <strong>Degrees</strong> and <strong>Radians</strong> are two different ways to measure angles, just like Fahrenheit and Celsius both measure temperature.
                  </div>
                  <div style={{ 
                    padding: '16px 20px',
                    background: 'rgba(255,255,255,0.15)',
                    borderRadius: '8px',
                    textAlign: 'center'
                  }}>
                    <span style={{ fontSize: '16px' }}>For the SAT, you <strong>MUST</strong> know how to convert between both!</span>
                  </div>
                </div>
              );
            
            case 'conversionFormulas':
              return (
                <div key={idx} style={{
                  background: '#f5f5f7',
                  borderRadius: '16px',
                  padding: '32px',
                  margin: '24px 0'
                }}>
                  <div style={{ fontSize: '18px', fontWeight: '700', color: '#1d1d1f', marginBottom: '24px', textAlign: 'center' }}>Conversion Formulas</div>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
                    {/* Degrees to Radians */}
                    <div style={{ background: '#fff', borderRadius: '12px', padding: '24px', border: '2px solid #0ea5e9', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                        <span style={{ fontSize: '20px' }}>📐</span>
                        <span style={{ fontSize: '16px', fontWeight: '600', color: '#0284c7' }}>Degrees → Radians</span>
                      </div>
                      <div style={{ 
                        background: '#f0f9ff', 
                        borderRadius: '8px', 
                        padding: '20px',
                        textAlign: 'center'
                      }}>
                        <div style={{ fontSize: '22px', fontFamily: 'Georgia, serif', color: '#1d1d1f' }}>
                          <span>radians = degrees × </span>
                          <span style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', verticalAlign: 'middle' }}>
                            <span style={{ color: '#0ea5e9', fontWeight: '600' }}>π</span>
                            <span style={{ width: '30px', height: '2px', background: '#1d1d1f' }}></span>
                            <span>180</span>
                          </span>
                        </div>
                      </div>
                      <div style={{ marginTop: '16px', fontSize: '14px', color: '#6b7280', textAlign: 'center' }}>
                        Multiply by <strong style={{ color: '#0ea5e9' }}>π/180</strong> to convert to radians
                      </div>
                    </div>
                    
                    {/* Radians to Degrees */}
                    <div style={{ background: '#fff', borderRadius: '12px', padding: '24px', border: '2px solid #f59e0b', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                        <span style={{ fontSize: '20px' }}>🔄</span>
                        <span style={{ fontSize: '16px', fontWeight: '600', color: '#d97706' }}>Radians → Degrees</span>
                      </div>
                      <div style={{ 
                        background: '#fffbeb', 
                        borderRadius: '8px', 
                        padding: '20px',
                        textAlign: 'center'
                      }}>
                        <div style={{ fontSize: '22px', fontFamily: 'Georgia, serif', color: '#1d1d1f' }}>
                          <span>degrees = radians × </span>
                          <span style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', verticalAlign: 'middle' }}>
                            <span>180</span>
                            <span style={{ width: '30px', height: '2px', background: '#1d1d1f' }}></span>
                            <span style={{ color: '#f59e0b', fontWeight: '600' }}>π</span>
                          </span>
                        </div>
                      </div>
                      <div style={{ marginTop: '16px', fontSize: '14px', color: '#6b7280', textAlign: 'center' }}>
                        Multiply by <strong style={{ color: '#d97706' }}>180/π</strong> to convert to degrees
                      </div>
                    </div>
                  </div>
                  
                  {/* Memory trick */}
                  <div style={{ marginTop: '20px', background: '#faf5ff', borderRadius: '12px', padding: '16px 20px', border: '1px solid #e9d5ff' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span style={{ fontSize: '20px' }}>💡</span>
                      <span style={{ fontSize: '15px', color: '#7c3aed' }}>
                        <strong>Memory trick:</strong> π radians = 180° — this is the key relationship!
                      </span>
                    </div>
                  </div>
                </div>
              );
            
            case 'commonAnglesTable':
              return (
                <div key={idx} style={{
                  background: '#f5f5f7',
                  borderRadius: '16px',
                  padding: '32px',
                  margin: '24px 0'
                }}>
                  <div style={{ fontSize: '18px', fontWeight: '700', color: '#1d1d1f', marginBottom: '8px' }}>Common Angle Conversions</div>
                  <div style={{ fontSize: '14px', color: '#6b7280', marginBottom: '20px' }}>Memorize these — they appear frequently on the SAT!</div>
                  
                  <div style={{ background: '#fff', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
                    {/* Header */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', background: '#1d1d1f' }}>
                      <div style={{ padding: '14px 20px', color: '#fff', fontWeight: '600', fontSize: '15px' }}>Degrees</div>
                      <div style={{ padding: '14px 20px', color: '#fff', fontWeight: '600', fontSize: '15px' }}>Radians</div>
                    </div>
                    {/* Rows */}
                    {[
                      { deg: '0°', rad: '0' },
                      { deg: '30°', rad: 'π/6' },
                      { deg: '45°', rad: 'π/4' },
                      { deg: '60°', rad: 'π/3' },
                      { deg: '90°', rad: 'π/2' },
                      { deg: '180°', rad: 'π' },
                      { deg: '270°', rad: '3π/2' },
                      { deg: '360°', rad: '2π' }
                    ].map((row, i) => (
                      <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', background: i % 2 === 0 ? '#fff' : '#f9fafb', borderTop: '1px solid #e5e7eb' }}>
                        <div style={{ padding: '12px 20px', fontSize: '16px', fontFamily: 'Georgia, serif', color: '#0284c7', fontWeight: '500' }}>{row.deg}</div>
                        <div style={{ padding: '12px 20px', fontSize: '16px', fontFamily: 'Georgia, serif', color: '#d97706', fontWeight: '500' }}>{row.rad}</div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            
            case 'desmosTip':
              return (
                <div key={idx} style={{
                  background: '#1d1d1f',
                  borderRadius: '16px',
                  padding: '32px',
                  margin: '24px 0'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                    <span style={{ fontSize: '28px' }}>🖩</span>
                    <span style={{ fontSize: '20px', fontWeight: '700', color: '#fff' }}>DESMOS Calculator Tip</span>
                  </div>
                  
                  <div style={{ background: 'rgba(14, 165, 233, 0.2)', borderRadius: '12px', padding: '24px', borderLeft: '4px solid #0ea5e9' }}>
                    <div style={{ fontSize: '16px', color: '#fff', lineHeight: 1.7 }}>
                      The <strong>DESMOS calculator</strong> can handle both <strong style={{ color: '#7dd3fc' }}>radians</strong> and <strong style={{ color: '#fcd34d' }}>degrees</strong> for angles, and you can convert between them using built-in functions!
                    </div>
                  </div>
                  
                  <div style={{ marginTop: '20px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
                    <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '8px', padding: '16px' }}>
                      <div style={{ fontSize: '13px', color: '#9ca3af', marginBottom: '8px' }}>To convert to radians:</div>
                      <div style={{ fontSize: '16px', color: '#7dd3fc', fontFamily: 'monospace', background: 'rgba(255,255,255,0.1)', padding: '8px 12px', borderRadius: '6px' }}>sin(45deg)</div>
                    </div>
                    <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '8px', padding: '16px' }}>
                      <div style={{ fontSize: '13px', color: '#9ca3af', marginBottom: '8px' }}>Check your mode:</div>
                      <div style={{ fontSize: '14px', color: '#fff' }}>Look for "Radians" or "Degrees" in settings ⚙️</div>
                    </div>
                  </div>
                </div>
              );
            
            // Equivalent Expressions Components
            case 'equivalentExpressionsIntro':
              return (
                <div key={idx} style={{
                  background: 'linear-gradient(135deg, #a855f7 0%, #9333ea 100%)',
                  borderRadius: '16px',
                  padding: '32px',
                  margin: '24px 0',
                  color: '#fff'
                }}>
                  <div style={{ fontSize: '14px', opacity: 0.8, marginBottom: '8px', fontWeight: '500', letterSpacing: '1px' }}>QUESTION TYPE</div>
                  <div style={{ fontSize: '28px', fontWeight: '700', marginBottom: '16px' }}>Equivalent Expressions</div>
                  <div style={{ fontSize: '17px', opacity: 0.95, lineHeight: 1.6 }}>
                    On the SAT, you are often asked to find the <strong>equivalent expression</strong> of a given expression.
                  </div>
                </div>
              );
            
            case 'equivalentExpressionsMethod':
              return (
                <div key={idx} style={{
                  background: '#f5f5f7',
                  borderRadius: '16px',
                  padding: '32px',
                  margin: '24px 0'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                    <span style={{ fontSize: '28px' }}>⚡</span>
                    <span style={{ fontSize: '20px', fontWeight: '700', color: '#1d1d1f' }}>The DESMOS Shortcut</span>
                  </div>
                  
                  <div style={{ background: '#faf5ff', borderRadius: '12px', padding: '24px', border: '2px solid #a855f7', marginBottom: '20px' }}>
                    <div style={{ fontSize: '17px', color: '#1d1d1f', lineHeight: 1.7, textAlign: 'center' }}>
                      If two expressions are <strong style={{ color: '#9333ea' }}>equivalent</strong>, their graphs will be the <strong style={{ color: '#9333ea' }}>exact same</strong>!
                    </div>
                  </div>
                  
                  <div style={{ fontSize: '16px', fontWeight: '600', color: '#1d1d1f', marginBottom: '16px' }}>How to solve using DESMOS:</div>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <div style={{ background: '#fff', borderRadius: '10px', padding: '16px 20px', display: 'flex', alignItems: 'center', gap: '16px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
                      <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#a855f7', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '16px', flexShrink: 0 }}>1</div>
                      <div style={{ fontSize: '15px', color: '#1d1d1f' }}>Graph the <strong>original expression</strong> in DESMOS</div>
                    </div>
                    <div style={{ background: '#fff', borderRadius: '10px', padding: '16px 20px', display: 'flex', alignItems: 'center', gap: '16px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
                      <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#a855f7', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '16px', flexShrink: 0 }}>2</div>
                      <div style={{ fontSize: '15px', color: '#1d1d1f' }}>Graph each <strong>answer choice</strong> one at a time</div>
                    </div>
                    <div style={{ background: '#fff', borderRadius: '10px', padding: '16px 20px', display: 'flex', alignItems: 'center', gap: '16px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
                      <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#a855f7', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '16px', flexShrink: 0 }}>3</div>
                      <div style={{ fontSize: '15px', color: '#1d1d1f' }}>The correct answer will <strong>perfectly overlap</strong> with the original graph</div>
                    </div>
                  </div>
                </div>
              );
            
            case 'equivalentExpressionsExample':
              return (
                <div key={idx} style={{
                  background: '#1d1d1f',
                  borderRadius: '16px',
                  padding: '32px',
                  margin: '24px 0'
                }}>
                  <div style={{ fontSize: '14px', color: '#9ca3af', marginBottom: '12px', fontWeight: '600' }}>VISUAL EXAMPLE</div>
                  <div style={{ fontSize: '18px', fontWeight: '700', color: '#fff', marginBottom: '20px' }}>What does "same graph" look like?</div>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                    {/* Equivalent */}
                    <div style={{ background: 'rgba(16, 185, 129, 0.15)', borderRadius: '12px', padding: '20px', border: '2px solid #10b981' }}>
                      <div style={{ fontSize: '14px', color: '#10b981', fontWeight: '600', marginBottom: '12px' }}>✓ EQUIVALENT</div>
                      <svg viewBox="0 0 120 80" style={{ width: '100%', height: '70px' }}>
                        <line x1="10" y1="60" x2="110" y2="60" stroke="#4b5563" strokeWidth="1" />
                        <line x1="60" y1="10" x2="60" y2="70" stroke="#4b5563" strokeWidth="1" />
                        {/* Two overlapping lines */}
                        <path d="M 20 50 L 100 20" stroke="#10b981" strokeWidth="3" />
                        <path d="M 20 50 L 100 20" stroke="#a855f7" strokeWidth="3" strokeDasharray="6,3" />
                      </svg>
                      <div style={{ fontSize: '13px', color: '#9ca3af', marginTop: '8px', textAlign: 'center' }}>Graphs perfectly overlap</div>
                    </div>
                    
                    {/* Not Equivalent */}
                    <div style={{ background: 'rgba(239, 68, 68, 0.15)', borderRadius: '12px', padding: '20px', border: '2px solid #ef4444' }}>
                      <div style={{ fontSize: '14px', color: '#ef4444', fontWeight: '600', marginBottom: '12px' }}>✗ NOT EQUIVALENT</div>
                      <svg viewBox="0 0 120 80" style={{ width: '100%', height: '70px' }}>
                        <line x1="10" y1="60" x2="110" y2="60" stroke="#4b5563" strokeWidth="1" />
                        <line x1="60" y1="10" x2="60" y2="70" stroke="#4b5563" strokeWidth="1" />
                        {/* Two different lines */}
                        <path d="M 20 50 L 100 20" stroke="#a855f7" strokeWidth="3" />
                        <path d="M 20 30 L 100 40" stroke="#ef4444" strokeWidth="3" />
                      </svg>
                      <div style={{ fontSize: '13px', color: '#9ca3af', marginTop: '8px', textAlign: 'center' }}>Graphs are different</div>
                    </div>
                  </div>
                  
                  <div style={{ marginTop: '20px', padding: '16px', background: 'rgba(168, 85, 247, 0.15)', borderRadius: '8px', borderLeft: '4px solid #a855f7' }}>
                    <div style={{ fontSize: '15px', color: '#e9d5ff' }}>
                      💡 <strong style={{ color: '#fff' }}>Tip:</strong> If two graphs overlap completely, you'll only see one line — that's how you know they're equivalent!
                    </div>
                  </div>
                </div>
              );
            
            case 'diagram':
              return (
                <div key={idx} style={{
                  background: '#f5f5f7',
                  borderRadius: '12px',
                  padding: '32px',
                  margin: '32px 0',
                  textAlign: 'center'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '16px',
                    fontSize: '20px',
                    fontWeight: '500',
                    color: '#1d1d1f',
                    fontFamily: 'Georgia, serif',
                    fontStyle: 'italic'
                  }}>
                    <span style={{ 
                      padding: '12px 24px',
                      background: '#ea580c',
                      color: '#fff',
                      borderRadius: '8px',
                      fontStyle: 'normal'
                    }}>x</span>
                    <span style={{ color: '#86868b' }}>→</span>
                    <span style={{
                      padding: '12px 24px',
                      background: '#1d1d1f',
                      color: '#fff',
                      borderRadius: '8px',
                      fontStyle: 'normal',
                      fontSize: '14px'
                    }}>function rule</span>
                    <span style={{ color: '#86868b' }}>→</span>
                    <span style={{
                      padding: '12px 24px',
                      background: '#3b82f6',
                      color: '#fff',
                      borderRadius: '8px',
                      fontStyle: 'normal'
                    }}>f(x)</span>
                  </div>
                </div>
              );
            
            case 'parallelLinesDiagram':
              return (
                <div key={idx} style={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  borderRadius: '24px',
                  padding: '48px',
                  margin: '40px 0',
                  textAlign: 'center',
                  boxShadow: '0 20px 60px rgba(102, 126, 234, 0.3)'
                }}>
                  <svg viewBox="0 0 600 440" style={{ maxWidth: '650px', width: '100%', filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.1))' }}>
                    <defs>
                      <linearGradient id="bgGradParallel" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{stopColor: '#ffffff', stopOpacity: 1}} />
                        <stop offset="100%" style={{stopColor: '#f8fafc', stopOpacity: 1}} />
                      </linearGradient>
                      <filter id="glowParallel">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                        <feMerge>
                          <feMergeNode in="coloredBlur"/>
                          <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                      </filter>
                      <linearGradient id="orangeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{stopColor: '#f97316', stopOpacity: 1}} />
                        <stop offset="100%" style={{stopColor: '#ea580c', stopOpacity: 1}} />
                      </linearGradient>
                      <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{stopColor: '#60a5fa', stopOpacity: 1}} />
                        <stop offset="100%" style={{stopColor: '#3b82f6', stopOpacity: 1}} />
                      </linearGradient>
                    </defs>

                    <rect x="0" y="0" width="600" height="440" fill="url(#bgGradParallel)" rx="16"/>

                    {/* Grid lines */}
                    {[-3,-2,-1,0,1,2,3,4,5,6].map(i => (
                      <line key={`vgridp${i}`} x1={270 + i*40} y1="40" x2={270 + i*40} y2="340" stroke="#e2e8f0" strokeWidth="1" opacity="0.6"/>
                    ))}
                    {[-4,-3,-2,-1,0,1,2,3,4].map(i => (
                      <line key={`hgridp${i}`} x1="110" y1={190 - i*40} x2="510" y2={190 - i*40} stroke="#e2e8f0" strokeWidth="1" opacity="0.6"/>
                    ))}

                    {/* Axes */}
                    <line x1="110" y1="190" x2="510" y2="190" stroke="#1e293b" strokeWidth="3" strokeLinecap="round"/>
                    <line x1="270" y1="40" x2="270" y2="340" stroke="#1e293b" strokeWidth="3" strokeLinecap="round"/>

                    {/* Axis arrows */}
                    <polygon points="510,190 495,183 495,197" fill="#1e293b"/>
                    <polygon points="270,40 263,55 277,55" fill="#1e293b"/>

                    {/* Axis labels */}
                    <text x="525" y="197" fontSize="24" fill="#1e293b" fontWeight="700" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui">x</text>
                    <text x="280" y="30" fontSize="24" fill="#1e293b" fontWeight="700" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui">y</text>

                    {/* Line shadows */}
                    <line x1="150" y1="310" x2="390" y2="70" stroke="#ea580c" strokeWidth="6" strokeLinecap="round" opacity="0.2"/>
                    <line x1="150" y1="150" x2="390" y2="-90" stroke="#3b82f6" strokeWidth="6" strokeLinecap="round" opacity="0.2"/>

                    {/* Parallel line 1: y = 2x + 1 (orange) */}
                    <line x1="150" y1="310" x2="390" y2="70" stroke="url(#orangeGrad)" strokeWidth="5" strokeLinecap="round" filter="url(#glowParallel)"/>

                    {/* Parallel line 2: y = 2x + 5 (blue) */}
                    <line x1="150" y1="150" x2="390" y2="-90" stroke="url(#blueGrad)" strokeWidth="5" strokeLinecap="round" filter="url(#glowParallel)"/>

                    {/* Label cards */}
                    <g filter="url(#glowParallel)">
                      <rect x="390" y="155" width="100" height="45" rx="22" fill="#f97316" stroke="#ea580c" strokeWidth="2"/>
                      <text x="440" y="185" fontSize="20" fill="#ffffff" fontWeight="700" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui" textAnchor="middle">y = 2x + 1</text>
                    </g>

                    <g filter="url(#glowParallel)">
                      <rect x="390" y="45" width="100" height="45" rx="22" fill="#3b82f6" stroke="#2563eb" strokeWidth="2"/>
                      <text x="440" y="75" fontSize="20" fill="#ffffff" fontWeight="700" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui" textAnchor="middle">y = 2x + 5</text>
                    </g>

                    {/* Info card */}
                    <g filter="url(#glowParallel)">
                      <rect x="120" y="370" width="360" height="55" rx="16" fill="#ffffff" stroke="#e2e8f0" strokeWidth="2"/>
                      <circle cx="145" cy="397.5" r="6" fill="#8b5cf6"/>
                      <text x="300" y="403" fontSize="17" fill="#1e293b" fontWeight="600" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui" textAnchor="middle">Same slope (slope = 2), different y-intercepts</text>
                    </g>
                  </svg>
                </div>
              );
            
            case 'perpendicularLinesDiagram':
              return (
                <div key={idx} style={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  borderRadius: '24px',
                  padding: '48px',
                  margin: '40px 0',
                  textAlign: 'center',
                  boxShadow: '0 20px 60px rgba(102, 126, 234, 0.3)'
                }}>
                  <svg viewBox="0 0 600 480" style={{ maxWidth: '650px', width: '100%', filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.1))' }}>
                    <defs>
                      <linearGradient id="bgGradPerp" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{stopColor: '#ffffff', stopOpacity: 1}} />
                        <stop offset="100%" style={{stopColor: '#f8fafc', stopOpacity: 1}} />
                      </linearGradient>
                      <filter id="glowPerp">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                        <feMerge>
                          <feMergeNode in="coloredBlur"/>
                          <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                      </filter>
                      <linearGradient id="orangeGradPerp" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{stopColor: '#f97316', stopOpacity: 1}} />
                        <stop offset="100%" style={{stopColor: '#ea580c', stopOpacity: 1}} />
                      </linearGradient>
                      <linearGradient id="blueGradPerp" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{stopColor: '#60a5fa', stopOpacity: 1}} />
                        <stop offset="100%" style={{stopColor: '#3b82f6', stopOpacity: 1}} />
                      </linearGradient>
                    </defs>

                    <rect x="0" y="0" width="600" height="480" fill="url(#bgGradPerp)" rx="16"/>

                    {/* Grid lines */}
                    {[-3,-2,-1,0,1,2,3,4,5,6].map(i => (
                      <line key={`vgridperp${i}`} x1={270 + i*40} y1="40" x2={270 + i*40} y2="380" stroke="#e2e8f0" strokeWidth="1" opacity="0.6"/>
                    ))}
                    {[-4,-3,-2,-1,0,1,2,3,4,5].map(i => (
                      <line key={`hgridperp${i}`} x1="110" y1={220 - i*40} x2="510" y2={220 - i*40} stroke="#e2e8f0" strokeWidth="1" opacity="0.6"/>
                    ))}

                    {/* Axes */}
                    <line x1="110" y1="220" x2="510" y2="220" stroke="#1e293b" strokeWidth="3" strokeLinecap="round"/>
                    <line x1="270" y1="40" x2="270" y2="380" stroke="#1e293b" strokeWidth="3" strokeLinecap="round"/>

                    {/* Axis arrows */}
                    <polygon points="510,220 495,213 495,227" fill="#1e293b"/>
                    <polygon points="270,40 263,55 277,55" fill="#1e293b"/>

                    {/* Axis labels */}
                    <text x="525" y="227" fontSize="24" fill="#1e293b" fontWeight="700" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui">x</text>
                    <text x="280" y="30" fontSize="24" fill="#1e293b" fontWeight="700" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui">y</text>

                    {/* Line shadows */}
                    <line x1="190" y1="380" x2="350" y2="60" stroke="#ea580c" strokeWidth="6" strokeLinecap="round" opacity="0.2"/>
                    <line x1="110" y1="140" x2="470" y2="320" stroke="#3b82f6" strokeWidth="6" strokeLinecap="round" opacity="0.2"/>

                    {/* Line 1: slope = 2 (orange) - passes through origin */}
                    <line x1="190" y1="380" x2="350" y2="60" stroke="url(#orangeGradPerp)" strokeWidth="5" strokeLinecap="round" filter="url(#glowPerp)"/>

                    {/* Line 2: slope = -1/2 (blue) - passes through origin */}
                    <line x1="110" y1="140" x2="470" y2="320" stroke="url(#blueGradPerp)" strokeWidth="5" strokeLinecap="round" filter="url(#glowPerp)"/>

                    {/* 90° angle indicator at intersection (origin) - larger and more visible */}
                    <rect x="252" y="202" width="36" height="36" fill="rgba(16, 185, 129, 0.1)" stroke="#10b981" strokeWidth="3.5" filter="url(#glowPerp)"/>

                    {/* Small corner indicators to emphasize 4 right angles */}
                    <path d="M 252 214 L 252 202 L 264 202" stroke="#10b981" strokeWidth="2.5" fill="none"/>
                    <path d="M 276 202 L 288 202 L 288 214" stroke="#10b981" strokeWidth="2.5" fill="none"/>
                    <path d="M 288 226 L 288 238 L 276 238" stroke="#10b981" strokeWidth="2.5" fill="none"/>
                    <path d="M 264 238 L 252 238 L 252 226" stroke="#10b981" strokeWidth="2.5" fill="none"/>

                    {/* Label cards */}
                    <g filter="url(#glowPerp)">
                      <rect x="355" y="50" width="125" height="45" rx="22" fill="#f97316" stroke="#ea580c" strokeWidth="2"/>
                      <text x="417.5" y="80" fontSize="20" fill="#ffffff" fontWeight="700" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui" textAnchor="middle">slope = 2</text>
                    </g>

                    <g filter="url(#glowPerp)">
                      <rect x="460" y="325" width="125" height="45" rx="22" fill="#3b82f6" stroke="#2563eb" strokeWidth="2"/>
                      <text x="522.5" y="355" fontSize="20" fill="#ffffff" fontWeight="700" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui" textAnchor="middle">slope = -½</text>
                    </g>

                    {/* Info card */}
                    <g filter="url(#glowPerp)">
                      <rect x="120" y="410" width="360" height="55" rx="16" fill="#ffffff" stroke="#e2e8f0" strokeWidth="2"/>
                      <circle cx="145" cy="437.5" r="6" fill="#8b5cf6"/>
                      <text x="300" y="443" fontSize="17" fill="#1e293b" fontWeight="600" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui" textAnchor="middle">Slopes are negative reciprocals: 2 × (-½) = -1</text>
                    </g>
                  </svg>
                </div>
              );
            
            case 'slopeFromGraphDiagram':
              return (
                <div key={idx} style={{
                  background: 'linear-gradient(135deg, #f8f9fa 0%, #f1f3f4 100%)',
                  borderRadius: '16px',
                  padding: '40px',
                  margin: '32px 0',
                  textAlign: 'center'
                }}>
                  <svg viewBox="0 0 500 420" style={{ maxWidth: '550px', width: '100%' }}>
                    {/* Background */}
                    <rect x="0" y="0" width="500" height="420" fill="#fff"/>
                    
                    {/* Grid lines */}
                    {[-2,-1,0,1,2,3,4,5,6,7,8].map(i => (
                      <line key={`vgrid${i}`} x1={130 + i*35} y1="30" x2={130 + i*35} y2="330" stroke="#d1d5db" strokeWidth="1"/>
                    ))}
                    {[-4,-3,-2,-1,0,1,2,3,4,5].map(i => (
                      <line key={`hgrid${i}`} x1="60" y1={190 - i*35} x2="420" y2={190 - i*35} stroke="#d1d5db" strokeWidth="1"/>
                    ))}
                    
                    {/* Axes - bold black */}
                    <line x1="60" y1="190" x2="420" y2="190" stroke="#000" strokeWidth="2"/>
                    <line x1="130" y1="30" x2="130" y2="330" stroke="#000" strokeWidth="2"/>
                    
                    {/* Axis arrows */}
                    <polygon points="420,190 408,184 408,196" fill="#000"/>
                    <polygon points="130,30 124,42 136,42" fill="#000"/>
                    
                    {/* Axis labels */}
                    <text x="430" y="195" fontSize="20" fill="#000" fontWeight="700" fontFamily="system-ui">x</text>
                    <text x="135" y="25" fontSize="20" fill="#000" fontWeight="700" fontFamily="system-ui">y</text>
                    
                    {/* X-axis numbers */}
                    {[-2,-1,1,2,3,4,5,6,7,8].map(i => (
                      <text key={`xnum${i}`} x={130 + i*35} y="208" fontSize="13" fill="#000" textAnchor="middle" fontFamily="system-ui">{i}</text>
                    ))}
                    
                    {/* Y-axis numbers */}
                    {[-4,-3,-2,-1,1,2,3,4].map(i => (
                      <text key={`ynum${i}`} x={i >= 0 ? "118" : "115"} y={190 - i*35 + 5} fontSize="13" fill="#000" textAnchor="end" fontFamily="system-ui">{i}</text>
                    ))}
                    
                    {/* 
                      Line with slope -3/5, passing through (0, 4) and (5, 1)
                      At x=0 (pixel 130): y=4 → pixel = 190 - 4*35 = 50
                      At x=5 (pixel 130+5*35=305): y=1 → pixel = 190 - 1*35 = 155
                      Extend line beyond both points
                    */}
                    <line x1="60" y1="8" x2="410" y2="218" stroke="#ef4444" strokeWidth="4" strokeLinecap="round"/>
                    
                    {/* Point 1 at (0, 4) - x=130, y=50 */}
                    <circle cx="130" cy="50" r="10" fill="#fbbf24" stroke="#000" strokeWidth="2"/>
                    
                    {/* Point 2 at (5, 1) - x=305, y=155 */}
                    <circle cx="305" cy="155" r="10" fill="#fbbf24" stroke="#000" strokeWidth="2"/>
                    
                    {/* Run line (horizontal green) - from (0,4) at y=50 going right to x=305 */}
                    <line x1="140" y1="50" x2="295" y2="50" stroke="#22c55e" strokeWidth="5"/>
                    {/* Run arrow head */}
                    <polygon points="305,50 290,42 290,58" fill="#22c55e"/>
                    
                    {/* Rise line (vertical pink) - from y=50 going DOWN to y=155 */}
                    <line x1="305" y1="60" x2="305" y2="145" stroke="#ec4899" strokeWidth="5"/>
                    {/* Rise arrow head - pointing down */}
                    <polygon points="305,155 295,140 315,140" fill="#ec4899"/>
                    
                    {/* Run label */}
                    <text x="215" y="38" fontSize="24" fill="#22c55e" fontWeight="800" fontFamily="system-ui">5</text>
                    
                    {/* Rise label */}
                    <text x="320" y="110" fontSize="24" fill="#ec4899" fontWeight="800" fontFamily="system-ui">-3</text>
                    
                    {/* Formula section below graph */}
                    <rect x="100" y="350" width="300" height="60" rx="10" fill="#fff" stroke="#e5e7eb" strokeWidth="2"/>
                    
                    {/* Rise over Run fraction */}
                    <text x="150" y="372" fontSize="18" fill="#ec4899" fontWeight="700" fontFamily="system-ui">Rise</text>
                    <line x1="140" y1="378" x2="190" y2="378" stroke="#000" strokeWidth="2"/>
                    <text x="150" y="398" fontSize="18" fill="#22c55e" fontWeight="700" fontFamily="system-ui">Run</text>
                    
                    <text x="210" y="388" fontSize="24" fill="#000" fontWeight="700" fontFamily="system-ui">=</text>
                    
                    {/* -3/5 fraction */}
                    <text x="255" y="372" fontSize="20" fill="#000" fontWeight="700" fontFamily="system-ui">-3</text>
                    <line x1="250" y1="378" x2="285" y2="378" stroke="#000" strokeWidth="2"/>
                    <text x="262" y="400" fontSize="20" fill="#000" fontWeight="700" fontFamily="system-ui">5</text>
                    
                    <text x="310" y="388" fontSize="24" fill="#000" fontWeight="700" fontFamily="system-ui">=</text>
                    
                    <text x="355" y="390" fontSize="22" fill="#000" fontWeight="800" fontFamily="system-ui">-³⁄₅</text>
                  </svg>
                </div>
              );

            case 'yInterceptDiagram':
              return (
                <div key={idx} style={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  borderRadius: '24px',
                  padding: '48px',
                  margin: '40px 0',
                  textAlign: 'center',
                  boxShadow: '0 20px 60px rgba(102, 126, 234, 0.3)'
                }}>
                  <svg viewBox="0 0 600 480" style={{ maxWidth: '650px', width: '100%', filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.1))' }}>
                    {/* Background with gradient */}
                    <defs>
                      <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{stopColor: '#ffffff', stopOpacity: 1}} />
                        <stop offset="100%" style={{stopColor: '#f8fafc', stopOpacity: 1}} />
                      </linearGradient>
                      <filter id="glow">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                        <feMerge>
                          <feMergeNode in="coloredBlur"/>
                          <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                      </filter>
                      <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{stopColor: '#3b82f6', stopOpacity: 1}} />
                        <stop offset="100%" style={{stopColor: '#2563eb', stopOpacity: 1}} />
                      </linearGradient>
                    </defs>

                    <rect x="0" y="0" width="600" height="480" fill="url(#bgGrad)" rx="16"/>

                    {/* Subtle grid lines */}
                    {[-3,-2,-1,0,1,2,3,4,5,6].map(i => (
                      <line key={`vgrid${i}`} x1={270 + i*40} y1="40" x2={270 + i*40} y2="380" stroke="#e2e8f0" strokeWidth="1" opacity="0.6"/>
                    ))}
                    {[-4,-3,-2,-1,0,1,2,3,4,5].map(i => (
                      <line key={`hgrid${i}`} x1="110" y1={220 - i*40} x2="510" y2={220 - i*40} stroke="#e2e8f0" strokeWidth="1" opacity="0.6"/>
                    ))}

                    {/* Axes with gradient */}
                    <line x1="110" y1="220" x2="510" y2="220" stroke="#1e293b" strokeWidth="3" strokeLinecap="round"/>
                    <line x1="270" y1="40" x2="270" y2="380" stroke="#1e293b" strokeWidth="3" strokeLinecap="round"/>

                    {/* Axis arrows */}
                    <polygon points="510,220 495,213 495,227" fill="#1e293b"/>
                    <polygon points="270,40 263,55 277,55" fill="#1e293b"/>

                    {/* Axis labels - larger and cleaner */}
                    <text x="525" y="227" fontSize="24" fill="#1e293b" fontWeight="700" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui">x</text>
                    <text x="280" y="30" fontSize="24" fill="#1e293b" fontWeight="700" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui">y</text>

                    {/* Axis numbers - cleaner styling */}
                    {[-3,-2,-1,1,2,3,4,5,6].map(i => (
                      <text key={`xnum${i}`} x={270 + i*40} y="240" fontSize="14" fill="#64748b" fontWeight="600" textAnchor="middle" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui">{i}</text>
                    ))}
                    {[-4,-3,-2,-1,1,2,3,4,5].map(i => (
                      <text key={`ynum${i}`} x="255" y={220 - i*40 + 5} fontSize="14" fill="#64748b" fontWeight="600" textAnchor="end" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui">{i}</text>
                    ))}

                    {/* Line shadow for depth */}
                    <line x1="150" y1="340" x2="330" y2="-20" stroke="#1e40af" strokeWidth="6" strokeLinecap="round" opacity="0.2"/>

                    {/* Main line with gradient - y = 2x + 3
                        Passes through (0,3): pixel (270, 100)
                        At x=-3: y=-3, pixel (150, 340)
                        At x=1.5: y=6, pixel (330, -20)
                    */}
                    <line x1="150" y1="340" x2="330" y2="-20" stroke="url(#lineGrad)" strokeWidth="5" strokeLinecap="round" filter="url(#glow)"/>

                    {/* Y-intercept highlight on axis - subtle glow */}
                    <line x1="270" y1="40" x2="270" y2="160" stroke="#f59e0b" strokeWidth="8" opacity="0.25" strokeLinecap="round"/>

                    {/* Y-intercept point with rings */}
                    <circle cx="270" cy="100" r="20" fill="#fbbf24" opacity="0.2"/>
                    <circle cx="270" cy="100" r="14" fill="#f59e0b" opacity="0.3"/>
                    <circle cx="270" cy="100" r="10" fill="#fbbf24" stroke="#1e293b" strokeWidth="3" filter="url(#glow)"/>

                    {/* Elegant callout line */}
                    <path d="M 320 70 Q 300 75, 283 92" stroke="#dc2626" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
                    <circle cx="320" cy="70" r="3" fill="#dc2626"/>

                    {/* Label with modern card design */}
                    <g filter="url(#glow)">
                      <rect x="325" y="45" width="160" height="65" rx="12" fill="#ffffff" stroke="#e2e8f0" strokeWidth="2"/>
                      <text x="405" y="70" fontSize="15" fill="#64748b" fontWeight="600" textAnchor="middle" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui">Y-intercept</text>
                      <text x="405" y="95" fontSize="22" fill="#dc2626" fontWeight="700" textAnchor="middle" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui">(0, 3)</text>
                    </g>

                    {/* Equation badge - modern design */}
                    <g filter="url(#glow)">
                      <rect x="365" y="290" width="130" height="50" rx="25" fill="#3b82f6" stroke="#2563eb" strokeWidth="2"/>
                      <text x="430" y="322" fontSize="22" fill="#ffffff" fontWeight="700" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui" textAnchor="middle">y = 2x + 3</text>
                    </g>

                    {/* Bottom info card - premium design */}
                    <g filter="url(#glow)">
                      <rect x="120" y="410" width="360" height="55" rx="16" fill="#ffffff" stroke="#e2e8f0" strokeWidth="2"/>
                      <circle cx="145" cy="437.5" r="6" fill="#10b981"/>
                      <text x="300" y="443" fontSize="17" fill="#1e293b" fontWeight="600" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui" textAnchor="middle">The line crosses the y-axis at (0, 3)</text>
                    </g>
                  </svg>
                </div>
              );

            case 'list':
              return (
                <ul key={idx} style={{
                  margin: '24px 0',
                  paddingLeft: '0',
                  listStyle: 'none'
                }}>
                  {block.items.map((item, i) => (
                    <li key={i} style={{
                      fontSize: '17px',
                      lineHeight: '1.8',
                      color: '#424245',
                      marginBottom: '16px',
                      paddingLeft: '28px',
                      position: 'relative'
                    }}>
                      <span style={{
                        position: 'absolute',
                        left: '0',
                        top: '10px',
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        background: '#ea580c'
                      }} />
                      {renderText(item)}
                    </li>
                  ))}
                </ul>
              );
            
            case 'example':
              return (
                <div key={idx} style={{
                  background: 'linear-gradient(135deg, #fef3f2 0%, #fff 100%)',
                  borderRadius: '12px',
                  padding: '28px',
                  margin: '28px 0',
                  borderLeft: '4px solid #ea580c'
                }}>
                  <div style={{
                    fontSize: '12px',
                    fontWeight: '700',
                    color: '#ea580c',
                    marginBottom: '16px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}>
                    {block.title}
                  </div>
                  <div style={{
                    fontSize: '17px',
                    lineHeight: '1.8',
                    color: '#1d1d1f',
                    whiteSpace: 'pre-line'
                  }}>
                    {renderText(block.content)}
                  </div>
                </div>
              );
            
            case 'table':
              return (
                <div key={idx} style={{
                  background: '#f5f5f7',
                  borderRadius: '12px',
                  padding: '24px',
                  margin: '24px 0',
                  overflowX: 'auto'
                }}>
                  <table style={{
                    borderCollapse: 'collapse',
                    margin: '0 auto'
                  }}>
                    <thead>
                      <tr>
                        {block.headers.map((h, i) => (
                          <th key={i} style={{
                            padding: '12px 24px',
                            background: i === 0 ? '#ea580c' : '#3b82f6',
                            color: '#fff',
                            fontWeight: '600',
                            fontSize: '15px'
                          }}>
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        {block.row.map((cell, i) => (
                          <td key={i} style={{
                            padding: '12px 24px',
                            background: i === 0 ? '#ea580c' : '#dbeafe',
                            color: i === 0 ? '#fff' : '#1e40af',
                            fontWeight: '600',
                            fontSize: '15px',
                            textAlign: 'center'
                          }}>
                            {cell}
                          </td>
                        ))}
                      </tr>
                    </tbody>
                  </table>
                  <div style={{
                    textAlign: 'center',
                    marginTop: '16px',
                    fontSize: '14px',
                    color: '#86868b'
                  }}>
                    X changes by <strong style={{ color: '#3b82f6' }}>{block.xChange}</strong>, 
                    Y changes by <strong style={{ color: '#ea580c' }}>{block.yChange}</strong>
                  </div>
                </div>
              );
            
            case 'transformTable':
              return (
                <div key={idx} style={{
                  background: '#f5f5f7',
                  borderRadius: '12px',
                  padding: '24px',
                  margin: '24px 0',
                  overflowX: 'auto'
                }}>
                  <div style={{
                    fontSize: '16px',
                    fontWeight: '600',
                    color: '#1d1d1f',
                    textAlign: 'center',
                    marginBottom: '16px'
                  }}>
                    Transformation Rules for Functions
                  </div>
                  <table style={{
                    borderCollapse: 'collapse',
                    width: '100%'
                  }}>
                    <thead>
                      <tr>
                        <th style={{ padding: '12px 16px', background: '#ea580c', color: '#fff', fontWeight: '600', fontSize: '14px', textAlign: 'left' }}>Function Notation</th>
                        <th style={{ padding: '12px 16px', background: '#ea580c', color: '#fff', fontWeight: '600', fontSize: '14px', textAlign: 'left' }}>Type of Transformation</th>
                        <th style={{ padding: '12px 16px', background: '#ea580c', color: '#fff', fontWeight: '600', fontSize: '14px', textAlign: 'left' }}>Change to Coordinate Point</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ background: '#fff' }}>
                        <td style={{ padding: '12px 16px', fontFamily: 'Georgia, serif', fontStyle: 'italic', fontWeight: '600' }}>f(x) + d</td>
                        <td style={{ padding: '12px 16px' }}>Vertical translation <strong style={{ color: '#16a34a' }}>up</strong> d units</td>
                        <td style={{ padding: '12px 16px', fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>(x, y) → (x, y + d)</td>
                      </tr>
                      <tr style={{ background: '#fafafa' }}>
                        <td style={{ padding: '12px 16px', fontFamily: 'Georgia, serif', fontStyle: 'italic', fontWeight: '600' }}>f(x) − d</td>
                        <td style={{ padding: '12px 16px' }}>Vertical translation <strong style={{ color: '#dc2626' }}>down</strong> d units</td>
                        <td style={{ padding: '12px 16px', fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>(x, y) → (x, y − d)</td>
                      </tr>
                      <tr style={{ background: '#fff' }}>
                        <td style={{ padding: '12px 16px', fontFamily: 'Georgia, serif', fontStyle: 'italic', fontWeight: '600' }}>f(x + c)</td>
                        <td style={{ padding: '12px 16px' }}>Horizontal translation <strong style={{ color: '#dc2626' }}>left</strong> c units</td>
                        <td style={{ padding: '12px 16px', fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>(x, y) → (x − c, y)</td>
                      </tr>
                      <tr style={{ background: '#fafafa' }}>
                        <td style={{ padding: '12px 16px', fontFamily: 'Georgia, serif', fontStyle: 'italic', fontWeight: '600' }}>f(x − c)</td>
                        <td style={{ padding: '12px 16px' }}>Horizontal translation <strong style={{ color: '#16a34a' }}>right</strong> c units</td>
                        <td style={{ padding: '12px 16px', fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>(x, y) → (x + c, y)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              );
            
            case 'triangle4545':
              return (
                <div key={idx} style={{
                  background: '#f5f5f7',
                  borderRadius: '12px',
                  padding: '32px',
                  margin: '24px 0',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '20px'
                }}>
                  <svg width="220" height="180" viewBox="0 0 220 180">
                    {/* Triangle */}
                    <polygon points="30,160 190,160 30,40" fill="#fef3c7" stroke="#ea580c" strokeWidth="2.5"/>
                    
                    {/* Right angle square */}
                    <rect x="30" y="140" width="20" height="20" fill="none" stroke="#1d1d1f" strokeWidth="2"/>
                    
                    {/* Side labels */}
                    {/* Left side - x */}
                    <text x="15" y="105" textAnchor="middle" fontFamily="Georgia, serif" fontSize="20" fontWeight="600" fontStyle="italic" fill="#dc2626">x</text>
                    
                    {/* Bottom side - x */}
                    <text x="110" y="178" textAnchor="middle" fontFamily="Georgia, serif" fontSize="20" fontWeight="600" fontStyle="italic" fill="#dc2626">x</text>
                    
                    {/* Hypotenuse - x√2 */}
                    <text x="130" y="90" textAnchor="middle" fontFamily="Georgia, serif" fontSize="18" fontWeight="600" fontStyle="italic" fill="#1d4ed8">x√2</text>
                    
                    {/* Angle labels */}
                    <text x="50" y="55" textAnchor="middle" fontFamily="system-ui" fontSize="14" fontWeight="500" fill="#6b7280">45°</text>
                    <text x="155" y="152" textAnchor="middle" fontFamily="system-ui" fontSize="14" fontWeight="500" fill="#6b7280">45°</text>
                  </svg>
                  <div style={{
                    background: '#fff',
                    padding: '10px 20px',
                    borderRadius: '8px',
                    fontSize: '15px',
                    fontWeight: '500',
                    color: '#4b5563',
                    border: '1px solid #e5e5e5'
                  }}>
                    Ratio: <span style={{ color: '#dc2626', fontWeight: 600 }}>x</span> : <span style={{ color: '#dc2626', fontWeight: 600 }}>x</span> : <span style={{ color: '#1d4ed8', fontWeight: 600 }}>x√2</span>
                  </div>
                </div>
              );
            
            case 'triangle3060':
              return (
                <div key={idx} style={{
                  background: '#f5f5f7',
                  borderRadius: '12px',
                  padding: '32px',
                  margin: '24px 0',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '20px'
                }}>
                  <svg width="260" height="180" viewBox="0 0 260 180">
                    {/* Triangle - taller than 45-45-90 */}
                    <polygon points="30,160 230,160 30,35" fill="#ede9fe" stroke="#7c3aed" strokeWidth="2.5"/>
                    
                    {/* Right angle square */}
                    <rect x="30" y="140" width="20" height="20" fill="none" stroke="#1d1d1f" strokeWidth="2"/>
                    
                    {/* Side labels */}
                    {/* Left side - x (shortest) */}
                    <text x="15" y="100" textAnchor="middle" fontFamily="Georgia, serif" fontSize="20" fontWeight="600" fontStyle="italic" fill="#dc2626">x</text>
                    
                    {/* Bottom side - x√3 */}
                    <text x="130" y="178" textAnchor="middle" fontFamily="Georgia, serif" fontSize="18" fontWeight="600" fontStyle="italic" fill="#16a34a">x√3</text>
                    
                    {/* Hypotenuse - 2x */}
                    <text x="155" y="85" textAnchor="middle" fontFamily="Georgia, serif" fontSize="20" fontWeight="600" fontStyle="italic" fill="#1d4ed8">2x</text>
                    
                    {/* Angle labels */}
                    <text x="50" y="52" textAnchor="middle" fontFamily="system-ui" fontSize="14" fontWeight="500" fill="#6b7280">60°</text>
                    <text x="190" y="152" textAnchor="middle" fontFamily="system-ui" fontSize="14" fontWeight="500" fill="#6b7280">30°</text>
                  </svg>
                  <div style={{
                    background: '#fff',
                    padding: '10px 20px',
                    borderRadius: '8px',
                    fontSize: '15px',
                    fontWeight: '500',
                    color: '#4b5563',
                    border: '1px solid #e5e5e5'
                  }}>
                    Ratio: <span style={{ color: '#dc2626', fontWeight: 600 }}>x</span> : <span style={{ color: '#16a34a', fontWeight: 600 }}>x√3</span> : <span style={{ color: '#1d4ed8', fontWeight: 600 }}>2x</span>
                  </div>
                </div>
              );
            
            case 'pythagorean':
              return (
                <div key={idx} style={{
                  background: 'linear-gradient(135deg, #f8f9fa 0%, #f1f3f4 100%)',
                  borderRadius: '16px',
                  padding: '32px',
                  margin: '24px 0',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '24px'
                }}>
                  <svg width="280" height="200" viewBox="0 0 280 200">
                    {/* Triangle - better proportions */}
                    <polygon points="40,170 220,170 40,50" fill="#fef3c7" stroke="#ea580c" strokeWidth="3"/>
                    
                    {/* Right angle square - L-shaped */}
                    <path d="M 40,150 L 60,150 L 60,170" fill="none" stroke="#1d1d1f" strokeWidth="2.5"/>
                    
                    {/* Label a - vertical side (left) */}
                    <text x="22" y="115" textAnchor="middle" fontFamily="Georgia, serif" fontSize="24" fontWeight="600" fontStyle="italic" fill="#dc2626">a</text>
                    
                    {/* Label b - horizontal side (bottom) */}
                    <text x="130" y="192" textAnchor="middle" fontFamily="Georgia, serif" fontSize="24" fontWeight="600" fontStyle="italic" fill="#16a34a">b</text>
                    
                    {/* Label c - hypotenuse (diagonal) - rotated to follow the line */}
                    <text x="155" y="95" textAnchor="middle" fontFamily="Georgia, serif" fontSize="24" fontWeight="600" fontStyle="italic" fill="#2563eb" transform="rotate(-34, 155, 95)">c</text>
                  </svg>
                  <div style={{
                    background: '#fff',
                    padding: '16px 32px',
                    borderRadius: '12px',
                    fontSize: '24px',
                    fontWeight: '600',
                    fontFamily: 'Georgia, serif',
                    color: '#1d1d1f',
                    border: '1px solid #e5e5e5',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
                  }}>
                    <span style={{ color: '#dc2626' }}>a²</span> + <span style={{ color: '#16a34a' }}>b²</span> = <span style={{ color: '#2563eb' }}>c²</span>
                  </div>
                </div>
              );
            
            case 'sohcahtoa':
              return (
                <div key={idx} style={{
                  background: 'linear-gradient(135deg, #f8f9fa 0%, #f1f3f4 100%)',
                  borderRadius: '16px',
                  padding: '32px',
                  margin: '24px 0',
                  display: 'flex',
                  justifyContent: 'center'
                }}>
                  <svg width="320" height="220" viewBox="0 0 320 220">
                    {/* Triangle - better proportions */}
                    <polygon points="50,180 270,180 50,50" fill="#ecfdf5" stroke="#1d1d1f" strokeWidth="3"/>
                    
                    {/* Right angle square - L-shaped */}
                    <path d="M 50,160 L 70,160 L 70,180" fill="none" stroke="#1d1d1f" strokeWidth="2.5"/>
                    
                    {/* Angle arc at bottom right */}
                    <path d="M 235,180 A 35,35 0 0,0 258,158" fill="none" stroke="#7c3aed" strokeWidth="3"/>
                    <text x="228" y="165" fontFamily="Georgia, serif" fontSize="20" fontWeight="600" fontStyle="italic" fill="#7c3aed">θ</text>
                    
                    {/* Opposite - left side */}
                    <text x="28" y="120" textAnchor="middle" fontFamily="system-ui" fontSize="15" fontWeight="700" fill="#dc2626">OPP</text>
                    
                    {/* Adjacent - bottom side */}
                    <text x="160" y="202" textAnchor="middle" fontFamily="system-ui" fontSize="15" fontWeight="700" fill="#16a34a">ADJ</text>
                    
                    {/* Hypotenuse - diagonal */}
                    <text x="185" y="100" textAnchor="middle" fontFamily="system-ui" fontSize="15" fontWeight="700" fill="#2563eb" transform="rotate(-30, 185, 100)">HYP</text>
                  </svg>
                </div>
              );
            
            case 'triangleTypes':
              return (
                <div key={idx} style={{
                  background: '#f5f5f7',
                  borderRadius: '12px',
                  padding: '32px',
                  margin: '24px 0'
                }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '32px',
                    flexWrap: 'wrap'
                  }}>
                    {/* Scalene */}
                    <div style={{ textAlign: 'center' }}>
                      <svg width="140" height="110" viewBox="0 0 140 110">
                        {/* Triangle with clearly different sides */}
                        <polygon points="15,95 125,95 85,20" fill="#fee2e2" stroke="#dc2626" strokeWidth="2.5"/>
                        {/* Side length labels - positioned outside */}
                        <text x="70" y="108" textAnchor="middle" fontFamily="system-ui" fontSize="13" fontWeight="600" fill="#991b1b">5</text>
                        <text x="40" y="52" textAnchor="middle" fontFamily="system-ui" fontSize="13" fontWeight="600" fill="#991b1b">4</text>
                        <text x="115" y="52" textAnchor="middle" fontFamily="system-ui" fontSize="13" fontWeight="600" fill="#991b1b">6</text>
                      </svg>
                      <div style={{ fontSize: '15px', fontWeight: '600', color: '#dc2626', marginTop: '4px' }}>Scalene</div>
                      <div style={{ fontSize: '12px', color: '#6b7280', marginTop: '2px' }}>All sides different</div>
                    </div>
                    
                    {/* Isosceles */}
                    <div style={{ textAlign: 'center' }}>
                      <svg width="140" height="110" viewBox="0 0 140 110">
                        {/* Symmetric triangle */}
                        <polygon points="25,95 115,95 70,20" fill="#dbeafe" stroke="#2563eb" strokeWidth="2.5"/>
                        {/* Tick marks on equal sides */}
                        <line x1="44" y1="54" x2="50" y2="60" stroke="#1d4ed8" strokeWidth="2.5"/>
                        <line x1="90" y1="54" x2="96" y2="60" stroke="#1d4ed8" strokeWidth="2.5"/>
                      </svg>
                      <div style={{ fontSize: '15px', fontWeight: '600', color: '#2563eb', marginTop: '4px' }}>Isosceles</div>
                      <div style={{ fontSize: '12px', color: '#6b7280', marginTop: '2px' }}>Two sides equal</div>
                    </div>
                    
                    {/* Equilateral */}
                    <div style={{ textAlign: 'center' }}>
                      <svg width="140" height="110" viewBox="0 0 140 110">
                        {/* Equilateral triangle */}
                        <polygon points="25,95 115,95 70,20" fill="#dcfce7" stroke="#16a34a" strokeWidth="2.5"/>
                        {/* Tick marks on all three sides */}
                        <line x1="44" y1="54" x2="50" y2="60" stroke="#15803d" strokeWidth="2.5"/>
                        <line x1="90" y1="54" x2="96" y2="60" stroke="#15803d" strokeWidth="2.5"/>
                        <line x1="67" y1="95" x2="73" y2="95" stroke="#15803d" strokeWidth="2.5"/>
                      </svg>
                      <div style={{ fontSize: '15px', fontWeight: '600', color: '#16a34a', marginTop: '4px' }}>Equilateral</div>
                      <div style={{ fontSize: '12px', color: '#6b7280', marginTop: '2px' }}>All sides equal (60° each)</div>
                    </div>
                  </div>
                </div>
              );
            
            case 'triangleAngles':
              return (
                <div key={idx} style={{
                  background: '#f5f5f7',
                  borderRadius: '12px',
                  padding: '32px',
                  margin: '24px 0'
                }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '32px',
                    flexWrap: 'wrap'
                  }}>
                    {/* Acute */}
                    <div style={{ textAlign: 'center' }}>
                      <svg width="140" height="110" viewBox="0 0 140 110">
                        <polygon points="20,95 120,95 70,20" fill="#fef3c7" stroke="#d97706" strokeWidth="2.5"/>
                        {/* Angle labels at each corner */}
                        <text x="32" y="88" textAnchor="middle" fontFamily="system-ui" fontSize="11" fontWeight="600" fill="#b45309">70°</text>
                        <text x="70" y="38" textAnchor="middle" fontFamily="system-ui" fontSize="11" fontWeight="600" fill="#b45309">40°</text>
                        <text x="108" y="88" textAnchor="middle" fontFamily="system-ui" fontSize="11" fontWeight="600" fill="#b45309">70°</text>
                      </svg>
                      <div style={{ fontSize: '15px', fontWeight: '600', color: '#d97706', marginTop: '4px' }}>Acute</div>
                      <div style={{ fontSize: '12px', color: '#6b7280', marginTop: '2px' }}>All angles &lt; 90°</div>
                    </div>
                    
                    {/* Right */}
                    <div style={{ textAlign: 'center' }}>
                      <svg width="140" height="110" viewBox="0 0 140 110">
                        <polygon points="25,95 115,95 25,20" fill="#dbeafe" stroke="#2563eb" strokeWidth="2.5"/>
                        {/* Right angle square */}
                        <rect x="25" y="77" width="18" height="18" fill="none" stroke="#1d4ed8" strokeWidth="2"/>
                      </svg>
                      <div style={{ fontSize: '15px', fontWeight: '600', color: '#2563eb', marginTop: '4px' }}>Right</div>
                      <div style={{ fontSize: '12px', color: '#6b7280', marginTop: '2px' }}>One angle = 90°</div>
                    </div>
                    
                    {/* Obtuse */}
                    <div style={{ textAlign: 'center' }}>
                      <svg width="140" height="110" viewBox="0 0 140 110">
                        <polygon points="10,95 130,95 105,25" fill="#ede9fe" stroke="#7c3aed" strokeWidth="2.5"/>
                        {/* Obtuse angle label */}
                        <text x="45" y="85" textAnchor="middle" fontFamily="system-ui" fontSize="11" fontWeight="600" fill="#6d28d9">120°</text>
                      </svg>
                      <div style={{ fontSize: '15px', fontWeight: '600', color: '#7c3aed', marginTop: '4px' }}>Obtuse</div>
                      <div style={{ fontSize: '12px', color: '#6b7280', marginTop: '2px' }}>One angle &gt; 90°</div>
                    </div>
                  </div>
                </div>
              );
            
            case 'circleParts':
              return (
                <div key={idx} style={{
                  background: '#f5f5f7',
                  borderRadius: '12px',
                  padding: '32px',
                  margin: '24px 0',
                  display: 'flex',
                  justifyContent: 'center'
                }}>
                  <svg width="260" height="220" viewBox="0 0 260 220">
                    {/* Circle */}
                    <circle cx="130" cy="110" r="75" fill="#dbeafe" stroke="#2563eb" strokeWidth="2.5"/>
                    {/* Center dot */}
                    <circle cx="130" cy="110" r="5" fill="#1d4ed8"/>
                    {/* Radius line */}
                    <line x1="130" y1="110" x2="205" y2="110" stroke="#dc2626" strokeWidth="3"/>
                    {/* Diameter line (dashed, behind) */}
                    <line x1="55" y1="110" x2="205" y2="110" stroke="#16a34a" strokeWidth="2" strokeDasharray="8,4"/>
                    {/* Labels */}
                    <text x="130" y="98" textAnchor="middle" fontFamily="system-ui" fontSize="13" fontWeight="600" fill="#1d4ed8">Center</text>
                    <text x="168" y="128" textAnchor="middle" fontFamily="Georgia, serif" fontSize="16" fontWeight="600" fontStyle="italic" fill="#dc2626">r</text>
                    <text x="130" y="145" textAnchor="middle" fontFamily="system-ui" fontSize="12" fontWeight="600" fill="#16a34a">d = 2r</text>
                    {/* Circumference label with arrow */}
                    <text x="130" y="205" textAnchor="middle" fontFamily="system-ui" fontSize="12" fontWeight="500" fill="#6b7280">Circumference (distance around)</text>
                  </svg>
                </div>
              );
            
            case 'circleArea':
              return (
                <div key={idx} style={{
                  background: '#f5f5f7',
                  borderRadius: '12px',
                  padding: '32px',
                  margin: '24px 0',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '24px'
                }}>
                  <svg width="180" height="140" viewBox="0 0 180 140">
                    {/* Filled circle */}
                    <circle cx="90" cy="70" r="55" fill="#dbeafe" stroke="#2563eb" strokeWidth="2.5"/>
                    {/* Center dot */}
                    <circle cx="90" cy="70" r="4" fill="#1d4ed8"/>
                    {/* Radius line */}
                    <line x1="90" y1="70" x2="145" y2="70" stroke="#dc2626" strokeWidth="3"/>
                    {/* Radius label */}
                    <text x="118" y="62" textAnchor="middle" fontFamily="Georgia, serif" fontSize="18" fontWeight="600" fontStyle="italic" fill="#dc2626">r</text>
                  </svg>
                  <div style={{
                    background: '#fff',
                    padding: '16px 32px',
                    borderRadius: '8px',
                    fontSize: '26px',
                    fontWeight: '600',
                    color: '#1d1d1f',
                    border: '1px solid #e5e5e5',
                    fontFamily: 'Georgia, serif'
                  }}>
                    A = π<span style={{ color: '#dc2626' }}>r</span>²
                  </div>
                </div>
              );
            
            case 'arcLength':
              return (
                <div key={idx} style={{
                  background: '#f5f5f7',
                  borderRadius: '12px',
                  padding: '32px',
                  margin: '24px 0',
                  display: 'flex',
                  justifyContent: 'center'
                }}>
                  <svg width="220" height="180" viewBox="0 0 220 180">
                    {/* Full circle (faded) */}
                    <circle cx="110" cy="95" r="65" fill="none" stroke="#e5e7eb" strokeWidth="2"/>
                    {/* Arc (highlighted) */}
                    <path d="M 110,30 A 65,65 0 0,1 175,95" fill="none" stroke="#2563eb" strokeWidth="5"/>
                    {/* Radii */}
                    <line x1="110" y1="95" x2="110" y2="30" stroke="#9ca3af" strokeWidth="2"/>
                    <line x1="110" y1="95" x2="175" y2="95" stroke="#9ca3af" strokeWidth="2"/>
                    {/* Center dot */}
                    <circle cx="110" cy="95" r="4" fill="#1d4ed8"/>
                    {/* Angle arc */}
                    <path d="M 110,70 A 25,25 0 0,1 135,95" fill="none" stroke="#7c3aed" strokeWidth="2.5"/>
                    {/* Labels */}
                    <text x="125" y="80" fontFamily="Georgia, serif" fontSize="16" fontWeight="600" fontStyle="italic" fill="#7c3aed">θ</text>
                    <text x="155" y="52" fontFamily="system-ui" fontSize="14" fontWeight="600" fill="#2563eb">Arc</text>
                    <text x="110" y="175" textAnchor="middle" fontFamily="system-ui" fontSize="12" fill="#6b7280">Central Angle determines Arc Length</text>
                  </svg>
                </div>
              );
            
            case 'sectorArea':
              return (
                <div key={idx} style={{
                  background: '#f5f5f7',
                  borderRadius: '12px',
                  padding: '32px',
                  margin: '24px 0',
                  display: 'flex',
                  justifyContent: 'center'
                }}>
                  <svg width="220" height="180" viewBox="0 0 220 180">
                    {/* Full circle (faded) */}
                    <circle cx="110" cy="95" r="65" fill="#f9fafb" stroke="#e5e7eb" strokeWidth="2"/>
                    {/* Sector (pie slice) - filled */}
                    <path d="M 110,95 L 110,30 A 65,65 0 0,1 175,95 Z" fill="#dbeafe" stroke="#2563eb" strokeWidth="2.5"/>
                    {/* Center dot */}
                    <circle cx="110" cy="95" r="4" fill="#1d4ed8"/>
                    {/* Angle arc */}
                    <path d="M 110,70 A 25,25 0 0,1 135,95" fill="none" stroke="#7c3aed" strokeWidth="2.5"/>
                    {/* Labels */}
                    <text x="125" y="80" fontFamily="Georgia, serif" fontSize="16" fontWeight="600" fontStyle="italic" fill="#7c3aed">θ</text>
                    <text x="140" y="58" fontFamily="system-ui" fontSize="13" fontWeight="600" fill="#2563eb">Sector</text>
                    <text x="110" y="175" textAnchor="middle" fontFamily="system-ui" fontSize="12" fill="#6b7280">"Pie Slice" — bounded by 2 radii and an arc</text>
                  </svg>
                </div>
              );
            
            case 'tangentLine':
              return (
                <div key={idx} style={{
                  background: '#f5f5f7',
                  borderRadius: '12px',
                  padding: '32px',
                  margin: '24px 0',
                  display: 'flex',
                  justifyContent: 'center'
                }}>
                  <svg width="260" height="200" viewBox="0 0 260 200">
                    {/* Circle */}
                    <circle cx="105" cy="100" r="60" fill="#fce7f3" stroke="#db2777" strokeWidth="2.5"/>
                    {/* Center dot */}
                    <circle cx="105" cy="100" r="4" fill="#9d174d"/>
                    <text x="105" y="90" textAnchor="middle" fontFamily="system-ui" fontSize="11" fontWeight="500" fill="#9d174d">center</text>
                    {/* Radius to tangent point */}
                    <line x1="105" y1="100" x2="165" y2="100" stroke="#dc2626" strokeWidth="2.5"/>
                    {/* Tangent line */}
                    <line x1="165" y1="35" x2="165" y2="165" stroke="#2563eb" strokeWidth="3"/>
                    {/* Point of tangency */}
                    <circle cx="165" cy="100" r="5" fill="#1d4ed8"/>
                    {/* Right angle marker */}
                    <rect x="152" y="100" width="13" height="13" fill="none" stroke="#1d1d1f" strokeWidth="2"/>
                    {/* Labels */}
                    <text x="133" y="92" fontFamily="system-ui" fontSize="12" fontWeight="600" fill="#dc2626">Radius</text>
                    <text x="195" y="140" fontFamily="system-ui" fontSize="12" fontWeight="600" fill="#2563eb">Tangent</text>
                    <text x="195" y="155" fontFamily="system-ui" fontSize="12" fontWeight="600" fill="#2563eb">Line</text>
                    <text x="180" y="108" fontFamily="system-ui" fontSize="12" fontWeight="600" fill="#1d1d1f">90°</text>
                    {/* Point of tangency label */}
                    <text x="165" y="188" textAnchor="middle" fontFamily="system-ui" fontSize="11" fill="#6b7280">Point of Tangency</text>
                  </svg>
                </div>
              );
            
            case 'circleEquation':
              return (
                <div key={idx} style={{
                  background: '#f5f5f7',
                  borderRadius: '12px',
                  padding: '32px',
                  margin: '24px 0',
                  display: 'flex',
                  justifyContent: 'center'
                }}>
                  <div style={{
                    background: '#fff',
                    padding: '20px 36px',
                    borderRadius: '8px',
                    border: '1px solid #e5e5e5',
                    fontSize: '24px',
                    fontFamily: 'Georgia, serif',
                    fontWeight: '600',
                    color: '#1d1d1f'
                  }}>
                    (<span style={{ color: '#2563eb' }}>x</span> − <span style={{ color: '#dc2626' }}>h</span>)² + (<span style={{ color: '#2563eb' }}>y</span> − <span style={{ color: '#16a34a' }}>k</span>)² = <span style={{ color: '#7c3aed' }}>r</span>²
                  </div>
                </div>
              );
            
            case 'areaTriangle':
              return (
                <div key={idx} style={{
                  background: '#f5f5f7',
                  borderRadius: '12px',
                  padding: '32px',
                  margin: '24px 0',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '24px'
                }}>
                  <svg width="240" height="150" viewBox="0 0 240 150">
                    {/* Triangle */}
                    <polygon points="20,130 220,130 120,30" fill="#dbeafe" stroke="#2563eb" strokeWidth="2.5"/>
                    
                    {/* Height line (dashed) */}
                    <line x1="120" y1="30" x2="120" y2="130" stroke="#dc2626" strokeWidth="2" strokeDasharray="6,4"/>
                    
                    {/* Right angle marker */}
                    <rect x="120" y="110" width="12" height="12" fill="none" stroke="#dc2626" strokeWidth="1.5"/>
                    
                    {/* Height label */}
                    <text x="135" y="85" fontFamily="system-ui" fontSize="15" fontWeight="600" fill="#dc2626">h</text>
                    
                    {/* Base label */}
                    <text x="120" y="148" textAnchor="middle" fontFamily="system-ui" fontSize="15" fontWeight="600" fill="#2563eb">b</text>
                  </svg>
                  <div style={{
                    background: '#fff',
                    padding: '14px 28px',
                    borderRadius: '8px',
                    fontSize: '20px',
                    fontWeight: '600',
                    color: '#1d1d1f',
                    border: '1px solid #e5e5e5'
                  }}>
                    A = ½ × <span style={{ color: '#2563eb' }}>b</span> × <span style={{ color: '#dc2626' }}>h</span>
                  </div>
                </div>
              );
            
            case 'similarTriangles':
              return (
                <div key={idx} style={{
                  background: '#f5f5f7',
                  borderRadius: '12px',
                  padding: '32px',
                  margin: '24px 0',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '20px'
                }}>
                  <svg width="380" height="140" viewBox="0 0 380 140">
                    {/* Small triangle */}
                    <polygon points="50,120 110,120 80,60" fill="#dbeafe" stroke="#2563eb" strokeWidth="2.5"/>
                    {/* Labels outside the triangle */}
                    <text x="80" y="135" textAnchor="middle" fontFamily="system-ui" fontSize="14" fontWeight="600" fill="#1d4ed8">3</text>
                    <text x="58" y="85" textAnchor="middle" fontFamily="system-ui" fontSize="14" fontWeight="600" fill="#1d4ed8">3</text>
                    <text x="102" y="85" textAnchor="middle" fontFamily="system-ui" fontSize="14" fontWeight="600" fill="#1d4ed8">3</text>
                    
                    {/* Arrow and multiplier */}
                    <text x="170" y="95" textAnchor="middle" fontFamily="system-ui" fontSize="24" fill="#9ca3af">→</text>
                    <text x="170" y="75" textAnchor="middle" fontFamily="system-ui" fontSize="13" fontWeight="600" fill="#6b7280">× 2</text>
                    
                    {/* Large triangle (scaled by 2) */}
                    <polygon points="230,120 350,120 290,40" fill="#dcfce7" stroke="#16a34a" strokeWidth="2.5"/>
                    {/* Labels outside the triangle */}
                    <text x="290" y="135" textAnchor="middle" fontFamily="system-ui" fontSize="14" fontWeight="600" fill="#15803d">6</text>
                    <text x="252" y="75" textAnchor="middle" fontFamily="system-ui" fontSize="14" fontWeight="600" fill="#15803d">6</text>
                    <text x="328" y="75" textAnchor="middle" fontFamily="system-ui" fontSize="14" fontWeight="600" fill="#15803d">6</text>
                  </svg>
                  <div style={{
                    fontSize: '14px',
                    color: '#4b5563'
                  }}>
                    Same shape, different size — sides are <strong>proportional</strong>
                  </div>
                </div>
              );
            
            case 'rightTriangleParts':
              return (
                <div key={idx} style={{
                  background: 'linear-gradient(135deg, #f8f9fa 0%, #f1f3f4 100%)',
                  borderRadius: '16px',
                  padding: '32px',
                  margin: '24px 0',
                  display: 'flex',
                  justifyContent: 'center'
                }}>
                  <svg width="320" height="220" viewBox="0 0 320 220">
                    {/* Triangle - better proportions */}
                    <polygon points="50,180 250,180 50,60" fill="#fef3c7" stroke="#ea580c" strokeWidth="3"/>
                    
                    {/* Right angle square - positioned correctly */}
                    <path d="M 50,160 L 70,160 L 70,180" fill="none" stroke="#1d1d1f" strokeWidth="2.5"/>
                    
                    {/* Leg label - left side (vertical) */}
                    <text x="28" y="125" textAnchor="middle" fontFamily="system-ui" fontSize="16" fontWeight="700" fill="#c2410c">Leg</text>
                    
                    {/* Leg label - bottom side (horizontal) */}
                    <text x="150" y="200" textAnchor="middle" fontFamily="system-ui" fontSize="16" fontWeight="700" fill="#c2410c">Leg</text>
                    
                    {/* Hypotenuse label - diagonal, properly rotated */}
                    <text x="175" y="100" textAnchor="middle" fontFamily="system-ui" fontSize="16" fontWeight="700" fill="#2563eb" transform="rotate(-31, 175, 100)">Hypotenuse</text>
                    <text x="190" y="120" textAnchor="middle" fontFamily="system-ui" fontSize="13" fill="#3b82f6" transform="rotate(-31, 190, 120)">(longest)</text>
                  </svg>
                </div>
              );
            
            // Statistics Components - Premium Design
            case 'meanIntro':
              return (
                <div key={idx} style={{
                  background: 'linear-gradient(135deg, #0891b2 0%, #0e7490 100%)',
                  borderRadius: '16px',
                  padding: '32px',
                  margin: '24px 0',
                  color: '#fff'
                }}>
                  <div style={{ fontSize: '14px', opacity: 0.8, marginBottom: '8px', fontWeight: '500', letterSpacing: '1px' }}>MEASURE OF CENTER</div>
                  <div style={{ fontSize: '28px', fontWeight: '700', marginBottom: '16px' }}>The Mean</div>
                  <div style={{ 
                    fontSize: '18px', 
                    opacity: 0.95, 
                    lineHeight: 1.6,
                    padding: '16px 20px',
                    background: 'rgba(255,255,255,0.15)',
                    borderRadius: '8px'
                  }}>
                    The mean is a <strong>measure of center</strong> because it shows the value that represents the <strong>overall average</strong> of a data set.
                  </div>
                </div>
              );
            
            case 'meanFormula':
              return (
                <div key={idx} style={{
                  background: '#f5f5f7',
                  borderRadius: '16px',
                  padding: '32px',
                  margin: '24px 0'
                }}>
                  <div style={{ fontSize: '13px', color: '#86868b', marginBottom: '20px', fontWeight: '600', letterSpacing: '1px', textAlign: 'center' }}>MEAN FORMULA</div>
                  
                  {/* Main Formula */}
                  <div style={{
                    background: '#fff',
                    borderRadius: '12px',
                    padding: '32px',
                    marginBottom: '24px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                    textAlign: 'center'
                  }}>
                    <div style={{ 
                      display: 'inline-flex', 
                      alignItems: 'center', 
                      gap: '16px', 
                      fontSize: '28px', 
                      fontFamily: 'Georgia, serif'
                    }}>
                      <span style={{ color: '#0891b2', fontWeight: '600' }}>Mean</span>
                      <span style={{ color: '#6b7280' }}>=</span>
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <span style={{ color: '#ea580c', fontWeight: '600', fontSize: '20px' }}>Sum of all values</span>
                        <div style={{ width: '100%', height: '3px', background: '#1d1d1f', margin: '8px 0' }} />
                        <span style={{ color: '#2563eb', fontWeight: '600', fontSize: '20px' }}>Number of values</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Quick Example */}
                  <div style={{ background: '#ecfdf5', borderRadius: '12px', padding: '20px', border: '2px solid #10b981' }}>
                    <div style={{ fontSize: '14px', color: '#059669', fontWeight: '600', marginBottom: '12px' }}>Quick Example</div>
                    <div style={{ fontSize: '16px', color: '#1d1d1f', marginBottom: '8px' }}>
                      Find the mean of: <strong>4, 8, 6, 10, 12</strong>
                    </div>
                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '12px', 
                      flexWrap: 'wrap',
                      padding: '12px 16px',
                      background: '#fff',
                      borderRadius: '8px'
                    }}>
                      <span style={{ fontFamily: 'Georgia, serif', fontSize: '18px' }}>Mean =</span>
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <span style={{ fontFamily: 'Georgia, serif', fontSize: '16px', color: '#ea580c' }}>4 + 8 + 6 + 10 + 12</span>
                        <div style={{ width: '100%', height: '2px', background: '#1d1d1f', margin: '4px 0' }} />
                        <span style={{ fontFamily: 'Georgia, serif', fontSize: '16px', color: '#2563eb' }}>5</span>
                      </div>
                      <span style={{ fontFamily: 'Georgia, serif', fontSize: '18px' }}>=</span>
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <span style={{ fontFamily: 'Georgia, serif', fontSize: '16px' }}>40</span>
                        <div style={{ width: '100%', height: '2px', background: '#1d1d1f', margin: '4px 0' }} />
                        <span style={{ fontFamily: 'Georgia, serif', fontSize: '16px' }}>5</span>
                      </div>
                      <span style={{ fontFamily: 'Georgia, serif', fontSize: '18px' }}>=</span>
                      <span style={{ fontFamily: 'Georgia, serif', fontSize: '24px', fontWeight: '700', color: '#10b981' }}>8</span>
                    </div>
                  </div>
                </div>
              );
            
            case 'outlierMeanIntro':
              return (
                <div key={idx} style={{
                  background: '#1d1d1f',
                  borderRadius: '16px',
                  padding: '32px',
                  margin: '24px 0'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                    <span style={{ fontSize: '28px' }}>⚠️</span>
                    <span style={{ fontSize: '22px', fontWeight: '700', color: '#fff' }}>Outliers & The Mean</span>
                  </div>
                  
                  <div style={{ background: 'rgba(234, 88, 12, 0.2)', borderRadius: '12px', padding: '20px', borderLeft: '4px solid #ea580c' }}>
                    <div style={{ fontSize: '17px', color: '#fff', lineHeight: 1.7 }}>
                      When calculating the mean, <strong style={{ color: '#fb923c' }}>every single data value is included</strong>, which means <strong style={{ color: '#fb923c' }}>outliers are included</strong> as well.
                    </div>
                  </div>
                  
                  <div style={{ marginTop: '20px', fontSize: '16px', color: '#9ca3af', lineHeight: 1.6 }}>
                    Because outliers are much <strong style={{ color: '#fff' }}>larger or smaller</strong> than the other values, they <strong style={{ color: '#fff' }}>pull the mean</strong> in their direction, changing where the center is.
                  </div>
                </div>
              );
            
            case 'outlierMeanExample':
              return (
                <div key={idx} style={{
                  background: '#f5f5f7',
                  borderRadius: '16px',
                  padding: '32px',
                  margin: '24px 0'
                }}>
                  <div style={{ fontSize: '14px', fontWeight: '600', color: '#ea580c', marginBottom: '24px', textAlign: 'center' }}>Example: How an Outlier Affects the Mean</div>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                    {/* Step 1: Original Data */}
                    <div style={{ background: '#fff', borderRadius: '12px', padding: '24px', border: '2px solid #e5e5e5' }}>
                      <div style={{ fontSize: '12px', color: '#86868b', fontWeight: '600', marginBottom: '12px', letterSpacing: '1px' }}>STEP 1: ORIGINAL DATA</div>
                      <div style={{ 
                        display: 'flex', 
                        justifyContent: 'center', 
                        gap: '8px', 
                        marginBottom: '20px',
                        flexWrap: 'wrap'
                      }}>
                        {[5, 6, 7, 8, 9].map((n, i) => (
                          <span key={i} style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '8px',
                            background: '#dbeafe',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '18px',
                            fontWeight: '600',
                            color: '#2563eb'
                          }}>{n}</span>
                        ))}
                      </div>
                      <div style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: '14px', color: '#6b7280', marginBottom: '8px' }}>Mean:</div>
                        <div style={{ 
                          display: 'inline-flex', 
                          alignItems: 'center', 
                          gap: '8px',
                          padding: '8px 16px',
                          background: '#f0fdf4',
                          borderRadius: '8px'
                        }}>
                          <span style={{ fontFamily: 'Georgia, serif', fontSize: '16px' }}>(5+6+7+8+9) ÷ 5 =</span>
                          <span style={{ fontSize: '24px', fontWeight: '700', color: '#16a34a' }}>7</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Step 2: Add Outlier */}
                    <div style={{ background: '#fff', borderRadius: '12px', padding: '24px', border: '2px solid #ea580c' }}>
                      <div style={{ fontSize: '12px', color: '#ea580c', fontWeight: '600', marginBottom: '12px', letterSpacing: '1px' }}>STEP 2: ADD AN OUTLIER</div>
                      <div style={{ 
                        display: 'flex', 
                        justifyContent: 'center', 
                        gap: '8px', 
                        marginBottom: '20px',
                        flexWrap: 'wrap'
                      }}>
                        {[5, 6, 7, 8, 9].map((n, i) => (
                          <span key={i} style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '8px',
                            background: '#dbeafe',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '18px',
                            fontWeight: '600',
                            color: '#2563eb'
                          }}>{n}</span>
                        ))}
                        <span style={{
                          width: '40px',
                          height: '40px',
                          borderRadius: '8px',
                          background: '#fef2f2',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '18px',
                          fontWeight: '700',
                          color: '#dc2626',
                          border: '2px solid #dc2626'
                        }}>50</span>
                      </div>
                      <div style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: '14px', color: '#6b7280', marginBottom: '8px' }}>New Mean:</div>
                        <div style={{ 
                          display: 'inline-flex', 
                          alignItems: 'center', 
                          gap: '8px',
                          padding: '8px 16px',
                          background: '#fef2f2',
                          borderRadius: '8px'
                        }}>
                          <span style={{ fontFamily: 'Georgia, serif', fontSize: '16px' }}>85 ÷ 6 ≈</span>
                          <span style={{ fontSize: '24px', fontWeight: '700', color: '#dc2626' }}>14</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Impact Summary */}
                  <div style={{ 
                    marginTop: '24px', 
                    padding: '16px 20px', 
                    background: '#fef3c7', 
                    borderRadius: '8px',
                    textAlign: 'center'
                  }}>
                    <span style={{ fontSize: '16px', color: '#92400e' }}>
                      The outlier <strong>(50)</strong> doubled the mean from <strong>7</strong> to <strong>14</strong>!
                    </span>
                  </div>
                </div>
              );
            
            case 'medianIntro':
              return (
                <div key={idx} style={{
                  background: 'linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)',
                  borderRadius: '16px',
                  padding: '32px',
                  margin: '24px 0',
                  color: '#fff'
                }}>
                  <div style={{ fontSize: '14px', opacity: 0.8, marginBottom: '8px', fontWeight: '500', letterSpacing: '1px' }}>MEASURE OF CENTER</div>
                  <div style={{ fontSize: '28px', fontWeight: '700', marginBottom: '16px' }}>The Median</div>
                  <div style={{ 
                    fontSize: '18px', 
                    opacity: 0.95, 
                    lineHeight: 1.6,
                    padding: '16px 20px',
                    background: 'rgba(255,255,255,0.15)',
                    borderRadius: '8px'
                  }}>
                    The median is the <strong>middle value</strong> of a data set when the numbers are arranged in order.
                  </div>
                </div>
              );
            
            case 'medianSteps':
              return (
                <div key={idx} style={{
                  background: '#f5f5f7',
                  borderRadius: '16px',
                  padding: '32px',
                  margin: '24px 0'
                }}>
                  <div style={{ fontSize: '13px', color: '#86868b', marginBottom: '20px', fontWeight: '600', letterSpacing: '1px', textAlign: 'center' }}>HOW TO FIND THE MEDIAN</div>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {/* Step 1 */}
                    <div style={{ background: '#fff', borderRadius: '12px', padding: '20px', border: '1px solid #e5e5e5' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                        <div style={{ 
                          width: '36px', 
                          height: '36px', 
                          borderRadius: '50%', 
                          background: '#7c3aed', 
                          color: '#fff', 
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'center', 
                          fontWeight: '700',
                          flexShrink: 0
                        }}>1</div>
                        <div>
                          <div style={{ fontSize: '16px', fontWeight: '600', color: '#1d1d1f' }}>Arrange the values in order</div>
                          <div style={{ fontSize: '14px', color: '#6b7280' }}>From smallest to largest</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Step 2 */}
                    <div style={{ background: '#fff', borderRadius: '12px', padding: '20px', border: '1px solid #e5e5e5' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                        <div style={{ 
                          width: '36px', 
                          height: '36px', 
                          borderRadius: '50%', 
                          background: '#7c3aed', 
                          color: '#fff', 
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'center', 
                          fontWeight: '700',
                          flexShrink: 0
                        }}>2</div>
                        <div>
                          <div style={{ fontSize: '16px', fontWeight: '600', color: '#1d1d1f' }}>Find the middle value</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Odd vs Even */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px', marginTop: '24px' }}>
                    <div style={{ background: '#f0fdf4', borderRadius: '12px', padding: '20px', border: '2px solid #16a34a' }}>
                      <div style={{ fontSize: '14px', fontWeight: '700', color: '#16a34a', marginBottom: '12px' }}>ODD number of values</div>
                      <div style={{ fontSize: '15px', color: '#1d1d1f', marginBottom: '12px' }}>Median = the middle number</div>
                      <div style={{ 
                        display: 'flex', 
                        justifyContent: 'center', 
                        gap: '6px',
                        padding: '12px',
                        background: '#fff',
                        borderRadius: '8px'
                      }}>
                        {[3, 5].map((n, i) => (
                          <span key={i} style={{ width: '32px', height: '32px', borderRadius: '6px', background: '#e5e5e5', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', color: '#6b7280' }}>{n}</span>
                        ))}
                        <span style={{ width: '32px', height: '32px', borderRadius: '6px', background: '#16a34a', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', fontWeight: '700', color: '#fff' }}>7</span>
                        {[8, 9].map((n, i) => (
                          <span key={i} style={{ width: '32px', height: '32px', borderRadius: '6px', background: '#e5e5e5', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', color: '#6b7280' }}>{n}</span>
                        ))}
                      </div>
                      <div style={{ textAlign: 'center', marginTop: '8px', fontSize: '14px', color: '#16a34a', fontWeight: '600' }}>Median = 7</div>
                    </div>
                    
                    <div style={{ background: '#eff6ff', borderRadius: '12px', padding: '20px', border: '2px solid #2563eb' }}>
                      <div style={{ fontSize: '14px', fontWeight: '700', color: '#2563eb', marginBottom: '12px' }}>EVEN number of values</div>
                      <div style={{ fontSize: '15px', color: '#1d1d1f', marginBottom: '12px' }}>Median = average of two middle numbers</div>
                      <div style={{ 
                        display: 'flex', 
                        justifyContent: 'center', 
                        gap: '6px',
                        padding: '12px',
                        background: '#fff',
                        borderRadius: '8px'
                      }}>
                        {[3, 5].map((n, i) => (
                          <span key={i} style={{ width: '32px', height: '32px', borderRadius: '6px', background: '#e5e5e5', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', color: '#6b7280' }}>{n}</span>
                        ))}
                        <span style={{ width: '32px', height: '32px', borderRadius: '6px', background: '#2563eb', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', fontWeight: '700', color: '#fff' }}>7</span>
                        <span style={{ width: '32px', height: '32px', borderRadius: '6px', background: '#2563eb', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', fontWeight: '700', color: '#fff' }}>8</span>
                        {[9, 12].map((n, i) => (
                          <span key={i} style={{ width: '32px', height: '32px', borderRadius: '6px', background: '#e5e5e5', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', color: '#6b7280' }}>{n}</span>
                        ))}
                      </div>
                      <div style={{ textAlign: 'center', marginTop: '8px', fontSize: '14px', color: '#2563eb', fontWeight: '600' }}>Median = (7+8)÷2 = 7.5</div>
                    </div>
                  </div>
                </div>
              );
            
            case 'medianFrequencyIntro':
              return (
                <div key={idx} style={{
                  background: '#1d1d1f',
                  borderRadius: '16px',
                  padding: '32px',
                  margin: '24px 0'
                }}>
                  <div style={{ fontSize: '14px', opacity: 0.6, marginBottom: '8px', fontWeight: '500', letterSpacing: '1px', color: '#fff' }}>SKILL</div>
                  <div style={{ fontSize: '24px', fontWeight: '700', color: '#fff', marginBottom: '16px' }}>Finding the Median From a Frequency Table</div>
                  <div style={{ 
                    fontSize: '17px', 
                    color: '#9ca3af',
                    lineHeight: 1.6
                  }}>
                    When data is presented in a frequency table, you can't just look at the table values — you need to find the <strong style={{ color: '#fff' }}>position</strong> of the median.
                  </div>
                </div>
              );
            
            case 'medianFrequencySteps':
              return (
                <div key={idx} style={{
                  background: '#f5f5f7',
                  borderRadius: '16px',
                  padding: '32px',
                  margin: '24px 0'
                }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {/* Step 1 */}
                    <div style={{ background: '#fff', borderRadius: '12px', padding: '24px', border: '2px solid #7c3aed' }}>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                        <div style={{ 
                          width: '40px', 
                          height: '40px', 
                          borderRadius: '50%', 
                          background: '#7c3aed', 
                          color: '#fff', 
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'center', 
                          fontWeight: '700',
                          fontSize: '18px',
                          flexShrink: 0
                        }}>1</div>
                        <div>
                          <div style={{ fontSize: '18px', fontWeight: '700', color: '#7c3aed', marginBottom: '8px' }}>Add up all frequencies</div>
                          <div style={{ fontSize: '15px', color: '#1d1d1f' }}>
                            This gives you the <strong>total number of data values</strong>, call it <strong style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>N</strong>.
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Step 2 */}
                    <div style={{ background: '#fff', borderRadius: '12px', padding: '24px', border: '2px solid #ea580c' }}>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                        <div style={{ 
                          width: '40px', 
                          height: '40px', 
                          borderRadius: '50%', 
                          background: '#ea580c', 
                          color: '#fff', 
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'center', 
                          fontWeight: '700',
                          fontSize: '18px',
                          flexShrink: 0
                        }}>2</div>
                        <div style={{ flex: 1 }}>
                          <div style={{ fontSize: '18px', fontWeight: '700', color: '#ea580c', marginBottom: '12px' }}>Find the median position</div>
                          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
                            <div style={{ background: '#f0fdf4', borderRadius: '8px', padding: '16px' }}>
                              <div style={{ fontSize: '13px', color: '#16a34a', fontWeight: '600', marginBottom: '8px' }}>If N is odd:</div>
                              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '18px', fontFamily: 'Georgia, serif', color: '#1d1d1f' }}>
                                <span>Position =</span>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                  <span>N + 1</span>
                                  <div style={{ width: '100%', height: '2px', background: '#1d1d1f', margin: '2px 0' }} />
                                  <span>2</span>
                                </div>
                              </div>
                            </div>
                            <div style={{ background: '#eff6ff', borderRadius: '8px', padding: '16px' }}>
                              <div style={{ fontSize: '13px', color: '#2563eb', fontWeight: '600', marginBottom: '8px' }}>If N is even:</div>
                              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '18px', fontFamily: 'Georgia, serif', color: '#1d1d1f', flexWrap: 'wrap' }}>
                                <span>Positions</span>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                  <span>N</span>
                                  <div style={{ width: '100%', height: '2px', background: '#1d1d1f', margin: '2px 0' }} />
                                  <span>2</span>
                                </div>
                                <span>and</span>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                  <span>N</span>
                                  <div style={{ width: '100%', height: '2px', background: '#1d1d1f', margin: '2px 0' }} />
                                  <span>2</span>
                                </div>
                                <span>+ 1</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Step 3 */}
                    <div style={{ background: '#fff', borderRadius: '12px', padding: '24px', border: '2px solid #16a34a' }}>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                        <div style={{ 
                          width: '40px', 
                          height: '40px', 
                          borderRadius: '50%', 
                          background: '#16a34a', 
                          color: '#fff', 
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'center', 
                          fontWeight: '700',
                          fontSize: '18px',
                          flexShrink: 0
                        }}>3</div>
                        <div>
                          <div style={{ fontSize: '18px', fontWeight: '700', color: '#16a34a', marginBottom: '8px' }}>Count through the table</div>
                          <div style={{ fontSize: '15px', color: '#1d1d1f' }}>
                            Use cumulative frequency to find which value falls at the median position.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            
            case 'modeIntro':
              return (
                <div key={idx} style={{
                  background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                  borderRadius: '16px',
                  padding: '32px',
                  margin: '24px 0',
                  color: '#fff'
                }}>
                  <div style={{ fontSize: '14px', opacity: 0.8, marginBottom: '8px', fontWeight: '500', letterSpacing: '1px' }}>MEASURE OF CENTER</div>
                  <div style={{ fontSize: '28px', fontWeight: '700', marginBottom: '16px' }}>The Mode</div>
                  <div style={{ 
                    fontSize: '18px', 
                    opacity: 0.95, 
                    lineHeight: 1.6,
                    padding: '16px 20px',
                    background: 'rgba(255,255,255,0.15)',
                    borderRadius: '8px'
                  }}>
                    The mode is the value that appears <strong>most often</strong> in a data set.
                  </div>
                </div>
              );
            
            case 'modeExamples':
              return (
                <div key={idx} style={{
                  background: '#f5f5f7',
                  borderRadius: '16px',
                  padding: '32px',
                  margin: '24px 0'
                }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {/* Single Mode */}
                    <div style={{ background: '#fff', borderRadius: '12px', padding: '20px', border: '1px solid #e5e5e5' }}>
                      <div style={{ fontSize: '14px', fontWeight: '600', color: '#f59e0b', marginBottom: '12px' }}>Example 1: Single Mode</div>
                      <div style={{ 
                        display: 'flex', 
                        justifyContent: 'center', 
                        gap: '8px', 
                        marginBottom: '12px',
                        flexWrap: 'wrap'
                      }}>
                        {[2].map((n, i) => (
                          <span key={i} style={{ width: '36px', height: '36px', borderRadius: '8px', background: '#e5e5e5', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', color: '#6b7280' }}>{n}</span>
                        ))}
                        {[3, 3].map((n, i) => (
                          <span key={i} style={{ width: '36px', height: '36px', borderRadius: '8px', background: '#fef3c7', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', fontWeight: '700', color: '#f59e0b', border: '2px solid #f59e0b' }}>{n}</span>
                        ))}
                        {[5, 7].map((n, i) => (
                          <span key={i} style={{ width: '36px', height: '36px', borderRadius: '8px', background: '#e5e5e5', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', color: '#6b7280' }}>{n}</span>
                        ))}
                      </div>
                      <div style={{ textAlign: 'center', fontSize: '15px', color: '#1d1d1f' }}>
                        <strong style={{ color: '#f59e0b' }}>Mode = 3</strong> (appears most frequently)
                      </div>
                    </div>
                    
                    {/* No Mode */}
                    <div style={{ background: '#fff', borderRadius: '12px', padding: '20px', border: '1px solid #e5e5e5' }}>
                      <div style={{ fontSize: '14px', fontWeight: '600', color: '#6b7280', marginBottom: '12px' }}>Example 2: No Mode</div>
                      <div style={{ 
                        display: 'flex', 
                        justifyContent: 'center', 
                        gap: '8px', 
                        marginBottom: '12px',
                        flexWrap: 'wrap'
                      }}>
                        {[1, 2, 3, 4, 5].map((n, i) => (
                          <span key={i} style={{ width: '36px', height: '36px', borderRadius: '8px', background: '#e5e5e5', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', color: '#6b7280' }}>{n}</span>
                        ))}
                      </div>
                      <div style={{ textAlign: 'center', fontSize: '15px', color: '#1d1d1f' }}>
                        <strong style={{ color: '#6b7280' }}>No Mode</strong> — all numbers appear exactly once
                      </div>
                    </div>
                    
                    {/* Two Modes (Bimodal) */}
                    <div style={{ background: '#fff', borderRadius: '12px', padding: '20px', border: '1px solid #e5e5e5' }}>
                      <div style={{ fontSize: '14px', fontWeight: '600', color: '#8b5cf6', marginBottom: '12px' }}>Example 3: Two Modes (Bimodal)</div>
                      <div style={{ 
                        display: 'flex', 
                        justifyContent: 'center', 
                        gap: '8px', 
                        marginBottom: '12px',
                        flexWrap: 'wrap'
                      }}>
                        {[4, 4].map((n, i) => (
                          <span key={i} style={{ width: '36px', height: '36px', borderRadius: '8px', background: '#f3e8ff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', fontWeight: '700', color: '#8b5cf6', border: '2px solid #8b5cf6' }}>{n}</span>
                        ))}
                        {[5, 5].map((n, i) => (
                          <span key={i} style={{ width: '36px', height: '36px', borderRadius: '8px', background: '#dbeafe', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', fontWeight: '700', color: '#2563eb', border: '2px solid #2563eb' }}>{n}</span>
                        ))}
                        <span style={{ width: '36px', height: '36px', borderRadius: '8px', background: '#e5e5e5', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', color: '#6b7280' }}>6</span>
                      </div>
                      <div style={{ textAlign: 'center', fontSize: '15px', color: '#1d1d1f' }}>
                        <strong style={{ color: '#8b5cf6' }}>Modes = 4 and 5</strong> — both appear twice
                      </div>
                    </div>
                  </div>
                </div>
              );
            
            case 'rangeIntro':
              return (
                <div key={idx} style={{
                  background: 'linear-gradient(135deg, #ec4899 0%, #db2777 100%)',
                  borderRadius: '16px',
                  padding: '32px',
                  margin: '24px 0',
                  color: '#fff'
                }}>
                  <div style={{ fontSize: '14px', opacity: 0.8, marginBottom: '8px', fontWeight: '500', letterSpacing: '1px' }}>MEASURE OF SPREAD</div>
                  <div style={{ fontSize: '28px', fontWeight: '700', marginBottom: '16px' }}>The Range</div>
                  <div style={{ 
                    fontSize: '18px', 
                    opacity: 0.95, 
                    lineHeight: 1.6,
                    padding: '16px 20px',
                    background: 'rgba(255,255,255,0.15)',
                    borderRadius: '8px'
                  }}>
                    The range is a measure of <strong>how spread out</strong> the data is — the difference between the largest and smallest values.
                  </div>
                </div>
              );
            
            case 'rangeFormula':
              return (
                <div key={idx} style={{
                  background: '#f5f5f7',
                  borderRadius: '16px',
                  padding: '32px',
                  margin: '24px 0',
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: '13px', color: '#86868b', marginBottom: '20px', fontWeight: '600', letterSpacing: '1px' }}>RANGE FORMULA</div>
                  
                  <div style={{
                    background: '#fff',
                    borderRadius: '12px',
                    padding: '32px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                    display: 'inline-block'
                  }}>
                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '16px', 
                      fontSize: '28px', 
                      fontFamily: 'Georgia, serif'
                    }}>
                      <span style={{ color: '#ec4899', fontWeight: '600' }}>Range</span>
                      <span style={{ color: '#6b7280' }}>=</span>
                      <span style={{ color: '#16a34a', fontWeight: '600' }}>Maximum</span>
                      <span style={{ color: '#6b7280' }}>−</span>
                      <span style={{ color: '#2563eb', fontWeight: '600' }}>Minimum</span>
                    </div>
                  </div>
                </div>
              );
            
            case 'stdDevIntro':
              return (
                <div key={idx} style={{
                  background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                  borderRadius: '16px',
                  padding: '32px',
                  margin: '24px 0',
                  color: '#fff'
                }}>
                  <div style={{ fontSize: '14px', opacity: 0.8, marginBottom: '8px', fontWeight: '500', letterSpacing: '1px' }}>MEASURE OF SPREAD</div>
                  <div style={{ fontSize: '28px', fontWeight: '700', marginBottom: '16px' }}>Standard Deviation</div>
                  <div style={{ 
                    fontSize: '18px', 
                    opacity: 0.95, 
                    lineHeight: 1.6,
                    padding: '16px 20px',
                    background: 'rgba(255,255,255,0.15)',
                    borderRadius: '8px'
                  }}>
                    Standard deviation measures <strong>how spread out</strong> the data is from the mean.
                  </div>
                </div>
              );
            
            case 'stdDevVisual':
              return (
                <div key={idx} style={{
                  background: '#f5f5f7',
                  borderRadius: '16px',
                  padding: '32px',
                  margin: '24px 0'
                }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
                    {/* Low Standard Deviation */}
                    <div style={{
                      background: '#fff',
                      borderRadius: '12px',
                      padding: '24px',
                      border: '2px solid #16a34a'
                    }}>
                      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                        <div style={{ fontSize: '18px', fontWeight: '700', color: '#16a34a', marginBottom: '4px' }}>Low Standard Deviation</div>
                        <div style={{ fontSize: '14px', color: '#6b7280' }}>Values are close together</div>
                      </div>
                      
                      <svg viewBox="0 0 200 100" style={{ width: '100%', height: '100px' }}>
                        {/* Axis */}
                        <line x1="20" y1="80" x2="180" y2="80" stroke="#d1d5db" strokeWidth="2"/>
                        
                        {/* Bell curve - narrow */}
                        <path 
                          d="M 60 80 Q 60 20, 100 20 Q 140 20, 140 80" 
                          fill="none" 
                          stroke="#16a34a" 
                          strokeWidth="3"
                        />
                        <path 
                          d="M 60 80 Q 60 20, 100 20 Q 140 20, 140 80 Z" 
                          fill="#dcfce7" 
                          opacity="0.5"
                        />
                        
                        {/* Mean line */}
                        <line x1="100" y1="20" x2="100" y2="85" stroke="#16a34a" strokeWidth="2" strokeDasharray="4"/>
                        <text x="100" y="95" textAnchor="middle" fontSize="10" fill="#16a34a">mean</text>
                      </svg>
                      
                      <div style={{ textAlign: 'center', marginTop: '12px', padding: '8px 12px', background: '#f0fdf4', borderRadius: '6px' }}>
                        <span style={{ fontSize: '14px', color: '#166534' }}>Tall, narrow curve → <strong>consistent</strong> data</span>
                      </div>
                    </div>
                    
                    {/* High Standard Deviation */}
                    <div style={{
                      background: '#fff',
                      borderRadius: '12px',
                      padding: '24px',
                      border: '2px solid #dc2626'
                    }}>
                      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                        <div style={{ fontSize: '18px', fontWeight: '700', color: '#dc2626', marginBottom: '4px' }}>High Standard Deviation</div>
                        <div style={{ fontSize: '14px', color: '#6b7280' }}>Values are spread apart</div>
                      </div>
                      
                      <svg viewBox="0 0 200 100" style={{ width: '100%', height: '100px' }}>
                        {/* Axis */}
                        <line x1="20" y1="80" x2="180" y2="80" stroke="#d1d5db" strokeWidth="2"/>
                        
                        {/* Bell curve - wide */}
                        <path 
                          d="M 25 80 Q 25 40, 100 40 Q 175 40, 175 80" 
                          fill="none" 
                          stroke="#dc2626" 
                          strokeWidth="3"
                        />
                        <path 
                          d="M 25 80 Q 25 40, 100 40 Q 175 40, 175 80 Z" 
                          fill="#fef2f2" 
                          opacity="0.5"
                        />
                        
                        {/* Mean line */}
                        <line x1="100" y1="40" x2="100" y2="85" stroke="#dc2626" strokeWidth="2" strokeDasharray="4"/>
                        <text x="100" y="95" textAnchor="middle" fontSize="10" fill="#dc2626">mean</text>
                      </svg>
                      
                      <div style={{ textAlign: 'center', marginTop: '12px', padding: '8px 12px', background: '#fef2f2', borderRadius: '6px' }}>
                        <span style={{ fontSize: '14px', color: '#991b1b' }}>Short, wide curve → <strong>variable</strong> data</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            
            case 'marginOfErrorIntro':
              return (
                <div key={idx} style={{
                  background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
                  borderRadius: '16px',
                  padding: '32px',
                  margin: '24px 0',
                  color: '#fff'
                }}>
                  <div style={{ fontSize: '14px', opacity: 0.8, marginBottom: '8px', fontWeight: '500', letterSpacing: '1px' }}>SAMPLING & INFERENCE</div>
                  <div style={{ fontSize: '28px', fontWeight: '700', marginBottom: '16px' }}>Margin of Error</div>
                  <div style={{ 
                    fontSize: '18px', 
                    opacity: 0.95, 
                    lineHeight: 1.6,
                    padding: '16px 20px',
                    background: 'rgba(255,255,255,0.15)',
                    borderRadius: '8px'
                  }}>
                    The margin of error is a number that tells us <strong>how much</strong> a survey or poll result might differ from the <strong>true value</strong> in the entire population.
                  </div>
                </div>
              );
            
            case 'marginOfErrorVisual':
              return (
                <div key={idx} style={{
                  background: '#f5f5f7',
                  borderRadius: '16px',
                  padding: '32px',
                  margin: '24px 0'
                }}>
                  <div style={{ fontSize: '13px', color: '#86868b', marginBottom: '24px', fontWeight: '600', letterSpacing: '1px', textAlign: 'center' }}>UNDERSTANDING THE CONCEPTS</div>
                  
                  {/* Population vs Sample */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px', marginBottom: '24px' }}>
                    <div style={{ 
                      background: '#fff', 
                      borderRadius: '12px', 
                      padding: '24px',
                      border: '2px solid #2563eb'
                    }}>
                      <div style={{ fontSize: '18px', fontWeight: '700', color: '#2563eb', marginBottom: '12px' }}>Population</div>
                      <div style={{ fontSize: '15px', color: '#1d1d1f', lineHeight: 1.6 }}>
                        The <strong>full group</strong> we want to know about.
                      </div>
                      <div style={{ 
                        marginTop: '12px',
                        padding: '12px',
                        background: '#eff6ff',
                        borderRadius: '8px',
                        fontSize: '14px',
                        color: '#1e40af'
                      }}>
                        Example: All students in a school
                      </div>
                    </div>
                    
                    <div style={{ 
                      background: '#fff', 
                      borderRadius: '12px', 
                      padding: '24px',
                      border: '2px solid #16a34a'
                    }}>
                      <div style={{ fontSize: '18px', fontWeight: '700', color: '#16a34a', marginBottom: '12px' }}>Sample</div>
                      <div style={{ fontSize: '15px', color: '#1d1d1f', lineHeight: 1.6 }}>
                        A <strong>smaller subset</strong> of the population that we actually survey.
                      </div>
                      <div style={{ 
                        marginTop: '12px',
                        padding: '12px',
                        background: '#f0fdf4',
                        borderRadius: '8px',
                        fontSize: '14px',
                        color: '#166534'
                      }}>
                        Example: 100 randomly selected students
                      </div>
                    </div>
                  </div>
                  
                  {/* Why we use samples */}
                  <div style={{ 
                    background: '#fff', 
                    borderRadius: '12px', 
                    padding: '20px',
                    border: '1px solid #e5e5e5',
                    marginBottom: '24px'
                  }}>
                    <div style={{ fontSize: '15px', color: '#1d1d1f', lineHeight: 1.6 }}>
                      <strong style={{ color: '#8b5cf6' }}>Why use a sample?</strong> Because it is usually <strong>impossible to ask everyone</strong> in the population. Instead, we take a smaller sample and use its results to estimate the true population value.
                    </div>
                  </div>
                  
                  {/* Sample Statistic */}
                  <div style={{ 
                    background: '#fff', 
                    borderRadius: '12px', 
                    padding: '24px',
                    border: '2px solid #ea580c'
                  }}>
                    <div style={{ fontSize: '18px', fontWeight: '700', color: '#ea580c', marginBottom: '12px' }}>Sample Statistic</div>
                    <div style={{ fontSize: '15px', color: '#1d1d1f', lineHeight: 1.6 }}>
                      The result we calculate from our sample data.
                    </div>
                    <div style={{ 
                      marginTop: '12px',
                      padding: '12px',
                      background: '#fff7ed',
                      borderRadius: '8px',
                      fontSize: '14px',
                      color: '#c2410c'
                    }}>
                      Example: 60% of the sampled students like pizza
                    </div>
                  </div>
                </div>
              );
            
            case 'marginOfErrorSampleSize':
              return (
                <div key={idx} style={{
                  background: '#f5f5f7',
                  borderRadius: '16px',
                  padding: '32px',
                  margin: '24px 0'
                }}>
                  <div style={{ fontSize: '13px', color: '#86868b', marginBottom: '24px', fontWeight: '600', letterSpacing: '1px', textAlign: 'center' }}>HOW MARGIN OF ERROR WORKS</div>
                  
                  {/* The Problem */}
                  <div style={{ 
                    background: '#1d1d1f', 
                    borderRadius: '12px', 
                    padding: '24px',
                    marginBottom: '20px'
                  }}>
                    <div style={{ fontSize: '16px', color: '#fff', lineHeight: 1.7 }}>
                      <strong style={{ color: '#f59e0b' }}>The Problem:</strong> We can't just claim that exactly <strong>60%</strong> of the entire school likes pizza based on our sample. Different samples might give slightly different results!
                    </div>
                  </div>
                  
                  {/* The Solution */}
                  <div style={{ 
                    background: '#fff', 
                    borderRadius: '12px', 
                    padding: '24px',
                    border: '2px solid #8b5cf6',
                    marginBottom: '20px'
                  }}>
                    <div style={{ fontSize: '16px', fontWeight: '700', color: '#8b5cf6', marginBottom: '16px' }}>The Solution: Margin of Error</div>
                    <div style={{ fontSize: '15px', color: '#1d1d1f', lineHeight: 1.7, marginBottom: '16px' }}>
                      The margin of error gives a <strong>range</strong> around the sample statistic where the <strong>true population value</strong> is likely to fall.
                    </div>
                    
                    {/* Visual Example */}
                    <div style={{ 
                      background: '#faf5ff', 
                      borderRadius: '8px', 
                      padding: '20px'
                    }}>
                      <div style={{ fontSize: '14px', color: '#6b7280', marginBottom: '16px', textAlign: 'center' }}>
                        If the sample statistic is <strong style={{ color: '#8b5cf6' }}>60%</strong> and margin of error is <strong style={{ color: '#ea580c' }}>±4%</strong>
                      </div>
                      
                      <div style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        gap: '16px',
                        flexWrap: 'wrap'
                      }}>
                        <div style={{ textAlign: 'center' }}>
                          <div style={{ fontSize: '32px', fontWeight: '700', color: '#8b5cf6' }}>56%</div>
                          <div style={{ fontSize: '12px', color: '#6b7280' }}>lower bound</div>
                          <div style={{ fontSize: '11px', color: '#9ca3af' }}>(60 − 4)</div>
                        </div>
                        
                        <div style={{ fontSize: '24px', color: '#d1d5db' }}>←</div>
                        
                        <div style={{ textAlign: 'center', padding: '0 16px' }}>
                          <div style={{ fontSize: '14px', color: '#6b7280', marginBottom: '4px' }}>true value falls</div>
                          <div style={{ fontSize: '16px', fontWeight: '600', color: '#1d1d1f' }}>somewhere here</div>
                        </div>
                        
                        <div style={{ fontSize: '24px', color: '#d1d5db' }}>→</div>
                        
                        <div style={{ textAlign: 'center' }}>
                          <div style={{ fontSize: '32px', fontWeight: '700', color: '#8b5cf6' }}>64%</div>
                          <div style={{ fontSize: '12px', color: '#6b7280' }}>upper bound</div>
                          <div style={{ fontSize: '11px', color: '#9ca3af' }}>(60 + 4)</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Sample Size Relationship */}
                  <div style={{ 
                    background: '#fff', 
                    borderRadius: '12px', 
                    padding: '24px',
                    border: '1px solid #e5e5e5',
                    marginBottom: '20px'
                  }}>
                    <div style={{ fontSize: '16px', fontWeight: '700', color: '#1d1d1f', marginBottom: '16px' }}>Sample Size & Margin of Error</div>
                    
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
                      <div style={{ 
                        padding: '16px',
                        background: '#f0fdf4',
                        borderRadius: '8px',
                        borderLeft: '4px solid #16a34a'
                      }}>
                        <div style={{ fontSize: '15px', fontWeight: '600', color: '#16a34a', marginBottom: '8px' }}>Larger Sample</div>
                        <div style={{ fontSize: '14px', color: '#1d1d1f' }}>→ <strong>Smaller</strong> margin of error</div>
                        <div style={{ fontSize: '13px', color: '#6b7280', marginTop: '4px' }}>(more precise)</div>
                      </div>
                      
                      <div style={{ 
                        padding: '16px',
                        background: '#fef2f2',
                        borderRadius: '8px',
                        borderLeft: '4px solid #dc2626'
                      }}>
                        <div style={{ fontSize: '15px', fontWeight: '600', color: '#dc2626', marginBottom: '8px' }}>Smaller Sample</div>
                        <div style={{ fontSize: '14px', color: '#1d1d1f' }}>→ <strong>Larger</strong> margin of error</div>
                        <div style={{ fontSize: '13px', color: '#6b7280', marginTop: '4px' }}>(less precise)</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Key Takeaway */}
                  <div style={{ 
                    background: '#8b5cf6', 
                    borderRadius: '12px', 
                    padding: '20px'
                  }}>
                    <div style={{ fontSize: '15px', color: '#fff', lineHeight: 1.6 }}>
                      <strong>Key Takeaway:</strong> The margin of error connects the <strong>sample statistic</strong> to the <strong>true population value</strong> by showing a reasonable range where the true value is expected to be.
                    </div>
                  </div>
                </div>
              );
            
            // Volume Components - Premium Design
            case 'volumeIntro':
              return (
                <div key={idx} style={{
                  background: 'linear-gradient(135deg, #0891b2 0%, #0e7490 100%)',
                  borderRadius: '16px',
                  padding: '32px',
                  margin: '24px 0',
                  color: '#fff'
                }}>
                  <div style={{ fontSize: '14px', opacity: 0.8, marginBottom: '8px', fontWeight: '500', letterSpacing: '1px' }}>3D GEOMETRY</div>
                  <div style={{ fontSize: '28px', fontWeight: '700', marginBottom: '16px' }}>Volume</div>
                  <div style={{ 
                    fontSize: '18px', 
                    opacity: 0.95, 
                    lineHeight: 1.6,
                    padding: '16px 20px',
                    background: 'rgba(255,255,255,0.15)',
                    borderRadius: '8px'
                  }}>
                    Volume is the amount of <strong>space inside</strong> a 3-dimensional object. It tells us <strong>how much the shape can hold</strong>.
                  </div>
                </div>
              );
            
            case 'volumeUnits':
              return (
                <div key={idx} style={{
                  background: '#f5f5f7',
                  borderRadius: '16px',
                  padding: '32px',
                  margin: '24px 0'
                }}>
                  <div style={{ fontSize: '13px', color: '#86868b', marginBottom: '20px', fontWeight: '600', letterSpacing: '1px', textAlign: 'center' }}>MEASURING VOLUME</div>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '20px' }}>
                    <div style={{ 
                      background: '#fff', 
                      borderRadius: '12px', 
                      padding: '20px',
                      border: '2px solid #0891b2',
                      textAlign: 'center'
                    }}>
                      <div style={{ fontSize: '16px', fontWeight: '700', color: '#0891b2', marginBottom: '8px' }}>2D: Area</div>
                      <div style={{ fontSize: '14px', color: '#6b7280' }}>Measured in <strong>square units</strong></div>
                      <div style={{ fontSize: '13px', color: '#9ca3af', marginTop: '4px' }}>ft², m², in²</div>
                    </div>
                    
                    <div style={{ 
                      background: '#fff', 
                      borderRadius: '12px', 
                      padding: '20px',
                      border: '2px solid #ea580c',
                      textAlign: 'center'
                    }}>
                      <div style={{ fontSize: '16px', fontWeight: '700', color: '#ea580c', marginBottom: '8px' }}>3D: Volume</div>
                      <div style={{ fontSize: '14px', color: '#6b7280' }}>Measured in <strong>cubic units</strong></div>
                      <div style={{ fontSize: '13px', color: '#9ca3af', marginTop: '4px' }}>ft³, m³, in³</div>
                    </div>
                  </div>
                  
                  <div style={{ 
                    background: '#fff', 
                    borderRadius: '12px', 
                    padding: '20px',
                    borderLeft: '4px solid #0891b2'
                  }}>
                    <div style={{ fontSize: '15px', color: '#1d1d1f', lineHeight: 1.6 }}>
                      <strong style={{ color: '#0891b2' }}>Why cubic units?</strong> Because volume measures three dimensions: length × width × height. When you multiply three measurements together, you get a "cubed" unit.
                    </div>
                  </div>
                </div>
              );
            
            case 'rectangularPrismIntro':
              return (
                <div key={idx} style={{
                  background: '#f5f5f7',
                  borderRadius: '16px',
                  padding: '32px',
                  margin: '24px 0'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '40px', flexWrap: 'wrap' }}>
                    {/* 3D Box Illustration */}
                    <svg width="180" height="140" viewBox="0 0 180 140">
                      {/* Back face */}
                      <polygon points="50,20 150,20 150,90 50,90" fill="#dbeafe" stroke="#2563eb" strokeWidth="2"/>
                      {/* Top face */}
                      <polygon points="50,20 80,5 180,5 150,20" fill="#bfdbfe" stroke="#2563eb" strokeWidth="2"/>
                      {/* Right face */}
                      <polygon points="150,20 180,5 180,75 150,90" fill="#93c5fd" stroke="#2563eb" strokeWidth="2"/>
                      {/* Labels */}
                      <text x="100" y="110" textAnchor="middle" fontSize="14" fontWeight="600" fill="#2563eb">length</text>
                      <text x="25" y="60" textAnchor="middle" fontSize="14" fontWeight="600" fill="#2563eb">height</text>
                      <text x="170" y="45" textAnchor="middle" fontSize="14" fontWeight="600" fill="#2563eb" transform="rotate(90, 170, 45)">width</text>
                    </svg>
                    
                    <div>
                      <div style={{ fontSize: '20px', fontWeight: '700', color: '#1d1d1f', marginBottom: '8px' }}>Rectangular Prism</div>
                      <div style={{ fontSize: '15px', color: '#6b7280', lineHeight: 1.6 }}>
                        A 3D shape with 6 rectangular faces.<br/>
                        Also called a "box" or "cuboid".
                      </div>
                    </div>
                  </div>
                </div>
              );
            
            case 'rectangularPrismFormula':
              return (
                <div key={idx} style={{
                  background: '#f5f5f7',
                  borderRadius: '16px',
                  padding: '32px',
                  margin: '24px 0'
                }}>
                  <div style={{ fontSize: '13px', color: '#86868b', marginBottom: '20px', fontWeight: '600', letterSpacing: '1px', textAlign: 'center' }}>VOLUME FORMULA</div>
                  
                  <div style={{
                    background: '#fff',
                    borderRadius: '12px',
                    padding: '32px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                    textAlign: 'center'
                  }}>
                    <div style={{ 
                      display: 'inline-flex', 
                      alignItems: 'center', 
                      gap: '12px', 
                      fontSize: '28px', 
                      fontFamily: 'Georgia, serif'
                    }}>
                      <span style={{ color: '#0891b2', fontWeight: '600' }}>V</span>
                      <span style={{ color: '#6b7280' }}>=</span>
                      <span style={{ color: '#2563eb', fontWeight: '600' }}>l</span>
                      <span style={{ color: '#6b7280' }}>×</span>
                      <span style={{ color: '#16a34a', fontWeight: '600' }}>w</span>
                      <span style={{ color: '#6b7280' }}>×</span>
                      <span style={{ color: '#ea580c', fontWeight: '600' }}>h</span>
                    </div>
                    
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', marginTop: '20px', flexWrap: 'wrap' }}>
                      <div style={{ fontSize: '14px' }}><span style={{ color: '#2563eb', fontWeight: '600' }}>l</span> = length</div>
                      <div style={{ fontSize: '14px' }}><span style={{ color: '#16a34a', fontWeight: '600' }}>w</span> = width</div>
                      <div style={{ fontSize: '14px' }}><span style={{ color: '#ea580c', fontWeight: '600' }}>h</span> = height</div>
                    </div>
                  </div>
                </div>
              );
            
            case 'rectangularPrismExample':
              return (
                <div key={idx} style={{
                  background: '#fff',
                  borderRadius: '16px',
                  padding: '32px',
                  margin: '24px 0',
                  border: '1px solid #e5e5e5'
                }}>
                  <div style={{ fontSize: '14px', fontWeight: '600', color: '#ea580c', marginBottom: '16px' }}>Example</div>
                  <div style={{ fontSize: '16px', color: '#1d1d1f', marginBottom: '20px', lineHeight: 1.6 }}>
                    A storage container has length 8 ft, width 5 ft, and height 6 ft. What is the volume?
                  </div>
                  <div style={{ 
                    background: '#f5f5f7', 
                    borderRadius: '12px', 
                    padding: '20px',
                    fontFamily: 'Georgia, serif'
                  }}>
                    <div style={{ fontSize: '18px', color: '#1d1d1f', marginBottom: '8px' }}>
                      V = <span style={{ color: '#2563eb' }}>8</span> × <span style={{ color: '#16a34a' }}>5</span> × <span style={{ color: '#ea580c' }}>6</span>
                    </div>
                    <div style={{ fontSize: '18px', color: '#1d1d1f', marginBottom: '8px' }}>
                      V = 40 × 6
                    </div>
                    <div style={{ fontSize: '20px', fontWeight: '700', color: '#0891b2' }}>
                      V = 240 ft³
                    </div>
                  </div>
                </div>
              );
            
            case 'cubeIntro':
              return (
                <div key={idx} style={{
                  background: '#f5f5f7',
                  borderRadius: '16px',
                  padding: '32px',
                  margin: '24px 0'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '40px', flexWrap: 'wrap' }}>
                    {/* 3D Cube Illustration */}
                    <svg width="140" height="140" viewBox="0 0 140 140">
                      {/* Back face */}
                      <polygon points="30,30 110,30 110,110 30,110" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2"/>
                      {/* Top face */}
                      <polygon points="30,30 55,10 135,10 110,30" fill="#fde68a" stroke="#f59e0b" strokeWidth="2"/>
                      {/* Right face */}
                      <polygon points="110,30 135,10 135,90 110,110" fill="#fcd34d" stroke="#f59e0b" strokeWidth="2"/>
                      {/* Labels */}
                      <text x="70" y="128" textAnchor="middle" fontSize="14" fontWeight="600" fill="#d97706">s</text>
                      <text x="15" y="75" textAnchor="middle" fontSize="14" fontWeight="600" fill="#d97706">s</text>
                      <text x="130" y="55" textAnchor="middle" fontSize="14" fontWeight="600" fill="#d97706">s</text>
                    </svg>
                    
                    <div>
                      <div style={{ fontSize: '20px', fontWeight: '700', color: '#1d1d1f', marginBottom: '8px' }}>Cube</div>
                      <div style={{ fontSize: '15px', color: '#6b7280', lineHeight: 1.6 }}>
                        A special rectangular prism where<br/>
                        <strong>all sides are equal</strong>.
                      </div>
                    </div>
                  </div>
                </div>
              );
            
            case 'cubeFormula':
              return (
                <div key={idx} style={{
                  background: '#f5f5f7',
                  borderRadius: '16px',
                  padding: '32px',
                  margin: '24px 0'
                }}>
                  <div style={{ fontSize: '13px', color: '#86868b', marginBottom: '20px', fontWeight: '600', letterSpacing: '1px', textAlign: 'center' }}>VOLUME FORMULA</div>
                  
                  <div style={{
                    background: '#fff',
                    borderRadius: '12px',
                    padding: '32px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                    textAlign: 'center'
                  }}>
                    <div style={{ 
                      display: 'inline-flex', 
                      alignItems: 'center', 
                      gap: '12px', 
                      fontSize: '28px', 
                      fontFamily: 'Georgia, serif'
                    }}>
                      <span style={{ color: '#0891b2', fontWeight: '600' }}>V</span>
                      <span style={{ color: '#6b7280' }}>=</span>
                      <span style={{ color: '#f59e0b', fontWeight: '600' }}>s³</span>
                    </div>
                    
                    <div style={{ marginTop: '20px', fontSize: '14px', color: '#6b7280' }}>
                      where <span style={{ color: '#f59e0b', fontWeight: '600' }}>s</span> = side length
                    </div>
                    
                    <div style={{ 
                      marginTop: '16px', 
                      padding: '12px 16px', 
                      background: '#fffbeb', 
                      borderRadius: '8px',
                      fontSize: '14px',
                      color: '#92400e'
                    }}>
                      This is the same as <strong>s × s × s</strong>
                    </div>
                  </div>
                </div>
              );
            
            case 'cubeExample':
              return (
                <div key={idx} style={{
                  background: '#fff',
                  borderRadius: '16px',
                  padding: '32px',
                  margin: '24px 0',
                  border: '1px solid #e5e5e5'
                }}>
                  <div style={{ fontSize: '14px', fontWeight: '600', color: '#ea580c', marginBottom: '16px' }}>Example</div>
                  <div style={{ fontSize: '16px', color: '#1d1d1f', marginBottom: '20px', lineHeight: 1.6 }}>
                    A cube has a side length of 7 cm. What is its volume?
                  </div>
                  <div style={{ 
                    background: '#f5f5f7', 
                    borderRadius: '12px', 
                    padding: '20px',
                    fontFamily: 'Georgia, serif'
                  }}>
                    <div style={{ fontSize: '18px', color: '#1d1d1f', marginBottom: '8px' }}>
                      V = s³
                    </div>
                    <div style={{ fontSize: '18px', color: '#1d1d1f', marginBottom: '8px' }}>
                      V = 7³ = 7 × 7 × 7
                    </div>
                    <div style={{ fontSize: '20px', fontWeight: '700', color: '#0891b2' }}>
                      V = 343 cm³
                    </div>
                  </div>
                </div>
              );
            
            case 'cylinderIntro':
              return (
                <div key={idx} style={{
                  background: '#f5f5f7',
                  borderRadius: '16px',
                  padding: '32px',
                  margin: '24px 0'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '40px', flexWrap: 'wrap' }}>
                    {/* Cylinder Illustration */}
                    <svg width="120" height="160" viewBox="0 0 120 160">
                      {/* Body */}
                      <ellipse cx="60" cy="130" rx="45" ry="15" fill="#d1fae5" stroke="#10b981" strokeWidth="2"/>
                      <rect x="15" y="30" width="90" height="100" fill="#d1fae5" stroke="none"/>
                      <line x1="15" y1="30" x2="15" y2="130" stroke="#10b981" strokeWidth="2"/>
                      <line x1="105" y1="30" x2="105" y2="130" stroke="#10b981" strokeWidth="2"/>
                      {/* Top ellipse */}
                      <ellipse cx="60" cy="30" rx="45" ry="15" fill="#a7f3d0" stroke="#10b981" strokeWidth="2"/>
                      {/* Radius line */}
                      <line x1="60" y1="30" x2="105" y2="30" stroke="#dc2626" strokeWidth="2" strokeDasharray="4"/>
                      <text x="82" y="24" fontSize="14" fontWeight="600" fill="#dc2626">r</text>
                      {/* Height line */}
                      <line x1="115" y1="30" x2="115" y2="130" stroke="#2563eb" strokeWidth="2"/>
                      <text x="123" y="85" fontSize="14" fontWeight="600" fill="#2563eb">h</text>
                    </svg>
                    
                    <div>
                      <div style={{ fontSize: '20px', fontWeight: '700', color: '#1d1d1f', marginBottom: '8px' }}>Cylinder</div>
                      <div style={{ fontSize: '15px', color: '#6b7280', lineHeight: 1.6 }}>
                        A 3D shape with two parallel<br/>
                        circular bases connected by<br/>
                        a curved surface.
                      </div>
                    </div>
                  </div>
                </div>
              );
            
            case 'cylinderFormula':
              return (
                <div key={idx} style={{
                  background: '#f5f5f7',
                  borderRadius: '16px',
                  padding: '32px',
                  margin: '24px 0'
                }}>
                  <div style={{ fontSize: '13px', color: '#86868b', marginBottom: '20px', fontWeight: '600', letterSpacing: '1px', textAlign: 'center' }}>VOLUME FORMULA</div>
                  
                  <div style={{
                    background: '#fff',
                    borderRadius: '12px',
                    padding: '32px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                    textAlign: 'center'
                  }}>
                    <div style={{ 
                      display: 'inline-flex', 
                      alignItems: 'center', 
                      gap: '8px', 
                      fontSize: '28px', 
                      fontFamily: 'Georgia, serif'
                    }}>
                      <span style={{ color: '#0891b2', fontWeight: '600' }}>V</span>
                      <span style={{ color: '#6b7280' }}>=</span>
                      <span style={{ color: '#6b7280' }}>π</span>
                      <span style={{ color: '#dc2626', fontWeight: '600' }}>r²</span>
                      <span style={{ color: '#2563eb', fontWeight: '600' }}>h</span>
                    </div>
                    
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', marginTop: '20px', flexWrap: 'wrap' }}>
                      <div style={{ fontSize: '14px' }}><span style={{ color: '#dc2626', fontWeight: '600' }}>r</span> = radius</div>
                      <div style={{ fontSize: '14px' }}><span style={{ color: '#2563eb', fontWeight: '600' }}>h</span> = height</div>
                    </div>
                    
                    <div style={{ 
                      marginTop: '16px', 
                      padding: '12px 16px', 
                      background: '#ecfdf5', 
                      borderRadius: '8px',
                      fontSize: '14px',
                      color: '#065f46'
                    }}>
                      Think of it as: <strong>Area of base (πr²)</strong> × <strong>height</strong>
                    </div>
                  </div>
                </div>
              );
            
            case 'cylinderExample':
              return (
                <div key={idx} style={{
                  background: '#fff',
                  borderRadius: '16px',
                  padding: '32px',
                  margin: '24px 0',
                  border: '1px solid #e5e5e5'
                }}>
                  <div style={{ fontSize: '14px', fontWeight: '600', color: '#ea580c', marginBottom: '16px' }}>Example</div>
                  <div style={{ fontSize: '16px', color: '#1d1d1f', marginBottom: '20px', lineHeight: 1.6 }}>
                    A cylindrical water tank has radius 4 m and height 10 m. Find its volume.
                  </div>
                  <div style={{ 
                    background: '#f5f5f7', 
                    borderRadius: '12px', 
                    padding: '20px',
                    fontFamily: 'Georgia, serif'
                  }}>
                    <div style={{ fontSize: '18px', color: '#1d1d1f', marginBottom: '8px' }}>
                      V = πr²h
                    </div>
                    <div style={{ fontSize: '18px', color: '#1d1d1f', marginBottom: '8px' }}>
                      V = π(<span style={{ color: '#dc2626' }}>4</span>)²(<span style={{ color: '#2563eb' }}>10</span>)
                    </div>
                    <div style={{ fontSize: '18px', color: '#1d1d1f', marginBottom: '8px' }}>
                      V = π(16)(10)
                    </div>
                    <div style={{ fontSize: '20px', fontWeight: '700', color: '#0891b2' }}>
                      V = 160π m³ ≈ 502.65 m³
                    </div>
                  </div>
                </div>
              );
            
            case 'sphereIntro':
              return (
                <div key={idx} style={{
                  background: '#f5f5f7',
                  borderRadius: '16px',
                  padding: '32px',
                  margin: '24px 0'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '40px', flexWrap: 'wrap' }}>
                    {/* Sphere Illustration */}
                    <svg width="140" height="140" viewBox="0 0 140 140">
                      {/* Sphere */}
                      <circle cx="70" cy="70" r="55" fill="#e0e7ff" stroke="#6366f1" strokeWidth="2"/>
                      {/* Equator ellipse */}
                      <ellipse cx="70" cy="70" rx="55" ry="18" fill="none" stroke="#6366f1" strokeWidth="1.5" strokeDasharray="4"/>
                      {/* Vertical arc */}
                      <path d="M 70 15 Q 95 70 70 125" fill="none" stroke="#6366f1" strokeWidth="1.5" strokeDasharray="4"/>
                      {/* Radius line */}
                      <line x1="70" y1="70" x2="125" y2="70" stroke="#dc2626" strokeWidth="2"/>
                      <circle cx="70" cy="70" r="3" fill="#dc2626"/>
                      <text x="100" y="62" fontSize="14" fontWeight="600" fill="#dc2626">r</text>
                    </svg>
                    
                    <div>
                      <div style={{ fontSize: '20px', fontWeight: '700', color: '#1d1d1f', marginBottom: '8px' }}>Sphere</div>
                      <div style={{ fontSize: '15px', color: '#6b7280', lineHeight: 1.6 }}>
                        A perfectly round 3D shape.<br/>
                        Every point on the surface is the<br/>
                        same distance from the center.
                      </div>
                    </div>
                  </div>
                </div>
              );
            
            case 'sphereFormula':
              return (
                <div key={idx} style={{
                  background: '#f5f5f7',
                  borderRadius: '16px',
                  padding: '32px',
                  margin: '24px 0'
                }}>
                  <div style={{ fontSize: '13px', color: '#86868b', marginBottom: '20px', fontWeight: '600', letterSpacing: '1px', textAlign: 'center' }}>VOLUME FORMULA</div>
                  
                  <div style={{
                    background: '#fff',
                    borderRadius: '12px',
                    padding: '32px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                    textAlign: 'center'
                  }}>
                    <div style={{ 
                      display: 'inline-flex', 
                      alignItems: 'center', 
                      gap: '8px', 
                      fontSize: '28px', 
                      fontFamily: 'Georgia, serif'
                    }}>
                      <span style={{ color: '#0891b2', fontWeight: '600' }}>V</span>
                      <span style={{ color: '#6b7280' }}>=</span>
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <span style={{ fontSize: '20px' }}>4</span>
                        <div style={{ width: '20px', height: '2px', background: '#1d1d1f' }} />
                        <span style={{ fontSize: '20px' }}>3</span>
                      </div>
                      <span style={{ color: '#6b7280' }}>π</span>
                      <span style={{ color: '#dc2626', fontWeight: '600' }}>r³</span>
                    </div>
                    
                    <div style={{ marginTop: '20px', fontSize: '14px', color: '#6b7280' }}>
                      where <span style={{ color: '#dc2626', fontWeight: '600' }}>r</span> = radius
                    </div>
                    
                    <div style={{ 
                      marginTop: '16px', 
                      padding: '12px 16px', 
                      background: '#eef2ff', 
                      borderRadius: '8px',
                      fontSize: '14px',
                      color: '#3730a3'
                    }}>
                      <strong>Tip:</strong> This formula is given on the SAT reference sheet!
                    </div>
                  </div>
                </div>
              );
            
            case 'sphereExample':
              return (
                <div key={idx} style={{
                  background: '#fff',
                  borderRadius: '16px',
                  padding: '32px',
                  margin: '24px 0',
                  border: '1px solid #e5e5e5'
                }}>
                  <div style={{ fontSize: '14px', fontWeight: '600', color: '#ea580c', marginBottom: '16px' }}>Example</div>
                  <div style={{ fontSize: '16px', color: '#1d1d1f', marginBottom: '20px', lineHeight: 1.6 }}>
                    A basketball has a radius of 12 cm. What is its volume?
                  </div>
                  <div style={{ 
                    background: '#f5f5f7', 
                    borderRadius: '12px', 
                    padding: '20px',
                    fontFamily: 'Georgia, serif'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '18px', color: '#1d1d1f', marginBottom: '8px' }}>
                      <span>V =</span>
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <span style={{ fontSize: '14px' }}>4</span>
                        <div style={{ width: '14px', height: '2px', background: '#1d1d1f' }} />
                        <span style={{ fontSize: '14px' }}>3</span>
                      </div>
                      <span>πr³</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '18px', color: '#1d1d1f', marginBottom: '8px' }}>
                      <span>V =</span>
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <span style={{ fontSize: '14px' }}>4</span>
                        <div style={{ width: '14px', height: '2px', background: '#1d1d1f' }} />
                        <span style={{ fontSize: '14px' }}>3</span>
                      </div>
                      <span>π(<span style={{ color: '#dc2626' }}>12</span>)³</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '18px', color: '#1d1d1f', marginBottom: '8px' }}>
                      <span>V =</span>
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <span style={{ fontSize: '14px' }}>4</span>
                        <div style={{ width: '14px', height: '2px', background: '#1d1d1f' }} />
                        <span style={{ fontSize: '14px' }}>3</span>
                      </div>
                      <span>π(1728)</span>
                    </div>
                    <div style={{ fontSize: '20px', fontWeight: '700', color: '#0891b2' }}>
                      V = 2304π cm³ ≈ 7238.23 cm³
                    </div>
                  </div>
                </div>
              );
            
            case 'coneIntro':
              return (
                <div key={idx} style={{
                  background: '#f5f5f7',
                  borderRadius: '16px',
                  padding: '32px',
                  margin: '24px 0'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '40px', flexWrap: 'wrap' }}>
                    {/* Cone Illustration */}
                    <svg width="140" height="160" viewBox="0 0 140 160">
                      {/* Cone body */}
                      <polygon points="70,20 15,130 125,130" fill="#fce7f3" stroke="#ec4899" strokeWidth="2"/>
                      {/* Base ellipse */}
                      <ellipse cx="70" cy="130" rx="55" ry="18" fill="#fbcfe8" stroke="#ec4899" strokeWidth="2"/>
                      {/* Height line */}
                      <line x1="70" y1="20" x2="70" y2="130" stroke="#2563eb" strokeWidth="2" strokeDasharray="4"/>
                      <text x="78" y="80" fontSize="14" fontWeight="600" fill="#2563eb">h</text>
                      {/* Radius line */}
                      <line x1="70" y1="130" x2="125" y2="130" stroke="#dc2626" strokeWidth="2"/>
                      <text x="100" y="145" fontSize="14" fontWeight="600" fill="#dc2626">r</text>
                    </svg>
                    
                    <div>
                      <div style={{ fontSize: '20px', fontWeight: '700', color: '#1d1d1f', marginBottom: '8px' }}>Cone</div>
                      <div style={{ fontSize: '15px', color: '#6b7280', lineHeight: 1.6 }}>
                        A 3D shape with a circular base<br/>
                        that tapers to a point (apex).
                      </div>
                    </div>
                  </div>
                </div>
              );
            
            case 'coneFormula':
              return (
                <div key={idx} style={{
                  background: '#f5f5f7',
                  borderRadius: '16px',
                  padding: '32px',
                  margin: '24px 0'
                }}>
                  <div style={{ fontSize: '13px', color: '#86868b', marginBottom: '20px', fontWeight: '600', letterSpacing: '1px', textAlign: 'center' }}>VOLUME FORMULA</div>
                  
                  <div style={{
                    background: '#fff',
                    borderRadius: '12px',
                    padding: '32px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                    textAlign: 'center'
                  }}>
                    <div style={{ 
                      display: 'inline-flex', 
                      alignItems: 'center', 
                      gap: '8px', 
                      fontSize: '28px', 
                      fontFamily: 'Georgia, serif'
                    }}>
                      <span style={{ color: '#0891b2', fontWeight: '600' }}>V</span>
                      <span style={{ color: '#6b7280' }}>=</span>
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <span style={{ fontSize: '20px' }}>1</span>
                        <div style={{ width: '20px', height: '2px', background: '#1d1d1f' }} />
                        <span style={{ fontSize: '20px' }}>3</span>
                      </div>
                      <span style={{ color: '#6b7280' }}>π</span>
                      <span style={{ color: '#dc2626', fontWeight: '600' }}>r²</span>
                      <span style={{ color: '#2563eb', fontWeight: '600' }}>h</span>
                    </div>
                    
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', marginTop: '20px', flexWrap: 'wrap' }}>
                      <div style={{ fontSize: '14px' }}><span style={{ color: '#dc2626', fontWeight: '600' }}>r</span> = radius</div>
                      <div style={{ fontSize: '14px' }}><span style={{ color: '#2563eb', fontWeight: '600' }}>h</span> = height</div>
                    </div>
                    
                    <div style={{ 
                      marginTop: '16px', 
                      padding: '12px 16px', 
                      background: '#fdf2f8', 
                      borderRadius: '8px',
                      fontSize: '14px',
                      color: '#9d174d'
                    }}>
                      A cone's volume is <strong>⅓</strong> of a cylinder with the same base and height
                    </div>
                  </div>
                </div>
              );
            
            case 'coneExample':
              return (
                <div key={idx} style={{
                  background: '#fff',
                  borderRadius: '16px',
                  padding: '32px',
                  margin: '24px 0',
                  border: '1px solid #e5e5e5'
                }}>
                  <div style={{ fontSize: '14px', fontWeight: '600', color: '#ea580c', marginBottom: '16px' }}>Example</div>
                  <div style={{ fontSize: '16px', color: '#1d1d1f', marginBottom: '20px', lineHeight: 1.6 }}>
                    An ice cream cone has radius 3 cm and height 12 cm. What is its volume?
                  </div>
                  <div style={{ 
                    background: '#f5f5f7', 
                    borderRadius: '12px', 
                    padding: '20px',
                    fontFamily: 'Georgia, serif'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '18px', color: '#1d1d1f', marginBottom: '8px' }}>
                      <span>V =</span>
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <span style={{ fontSize: '14px' }}>1</span>
                        <div style={{ width: '14px', height: '2px', background: '#1d1d1f' }} />
                        <span style={{ fontSize: '14px' }}>3</span>
                      </div>
                      <span>πr²h</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '18px', color: '#1d1d1f', marginBottom: '8px' }}>
                      <span>V =</span>
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <span style={{ fontSize: '14px' }}>1</span>
                        <div style={{ width: '14px', height: '2px', background: '#1d1d1f' }} />
                        <span style={{ fontSize: '14px' }}>3</span>
                      </div>
                      <span>π(<span style={{ color: '#dc2626' }}>3</span>)²(<span style={{ color: '#2563eb' }}>12</span>)</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '18px', color: '#1d1d1f', marginBottom: '8px' }}>
                      <span>V =</span>
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <span style={{ fontSize: '14px' }}>1</span>
                        <div style={{ width: '14px', height: '2px', background: '#1d1d1f' }} />
                        <span style={{ fontSize: '14px' }}>3</span>
                      </div>
                      <span>π(9)(12) =</span>
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <span style={{ fontSize: '14px' }}>108π</span>
                        <div style={{ width: '35px', height: '2px', background: '#1d1d1f' }} />
                        <span style={{ fontSize: '14px' }}>3</span>
                      </div>
                    </div>
                    <div style={{ fontSize: '20px', fontWeight: '700', color: '#0891b2' }}>
                      V = 36π cm³ ≈ 113.10 cm³
                    </div>
                  </div>
                </div>
              );
            
            case 'triangularPrismIntro':
              return (
                <div key={idx} style={{
                  background: '#f5f5f7',
                  borderRadius: '16px',
                  padding: '32px',
                  margin: '24px 0'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '40px', flexWrap: 'wrap' }}>
                    {/* Triangular Prism Illustration */}
                    <svg width="180" height="140" viewBox="0 0 180 140">
                      {/* Front triangle */}
                      <polygon points="20,120 80,120 50,40" fill="#fed7aa" stroke="#ea580c" strokeWidth="2"/>
                      {/* Top face */}
                      <polygon points="50,40 80,120 160,100 130,20" fill="#fdba74" stroke="#ea580c" strokeWidth="2"/>
                      {/* Right face */}
                      <polygon points="80,120 160,100 160,100 80,120" fill="#fb923c" stroke="#ea580c" strokeWidth="2"/>
                      {/* Back edge */}
                      <line x1="130" y1="20" x2="160" y2="100" stroke="#ea580c" strokeWidth="2"/>
                      <line x1="20" y1="120" x2="100" y2="100" stroke="#ea580c" strokeWidth="2" strokeDasharray="4"/>
                      <line x1="100" y1="100" x2="160" y2="100" stroke="#ea580c" strokeWidth="2"/>
                      <line x1="100" y1="100" x2="130" y2="20" stroke="#ea580c" strokeWidth="2" strokeDasharray="4"/>
                      {/* Labels */}
                      <text x="50" y="135" fontSize="12" fontWeight="600" fill="#c2410c">base</text>
                      <text x="140" y="65" fontSize="12" fontWeight="600" fill="#c2410c">length</text>
                    </svg>
                    
                    <div>
                      <div style={{ fontSize: '20px', fontWeight: '700', color: '#1d1d1f', marginBottom: '8px' }}>Triangular Prism</div>
                      <div style={{ fontSize: '15px', color: '#6b7280', lineHeight: 1.6 }}>
                        A 3D shape with two parallel<br/>
                        triangular bases connected by<br/>
                        three rectangular faces.
                      </div>
                    </div>
                  </div>
                </div>
              );
            
            case 'triangularPrismFormula':
              return (
                <div key={idx} style={{
                  background: '#f5f5f7',
                  borderRadius: '16px',
                  padding: '32px',
                  margin: '24px 0'
                }}>
                  <div style={{ fontSize: '13px', color: '#86868b', marginBottom: '20px', fontWeight: '600', letterSpacing: '1px', textAlign: 'center' }}>VOLUME FORMULA</div>
                  
                  <div style={{
                    background: '#fff',
                    borderRadius: '12px',
                    padding: '32px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                    textAlign: 'center'
                  }}>
                    <div style={{ 
                      display: 'inline-flex', 
                      alignItems: 'center', 
                      gap: '12px', 
                      fontSize: '28px', 
                      fontFamily: 'Georgia, serif'
                    }}>
                      <span style={{ color: '#0891b2', fontWeight: '600' }}>V</span>
                      <span style={{ color: '#6b7280' }}>=</span>
                      <span style={{ color: '#ea580c', fontWeight: '600' }}>Base Area</span>
                      <span style={{ color: '#6b7280' }}>×</span>
                      <span style={{ color: '#2563eb', fontWeight: '600' }}>length</span>
                    </div>
                    
                    <div style={{ 
                      marginTop: '20px', 
                      padding: '16px', 
                      background: '#fff7ed', 
                      borderRadius: '8px'
                    }}>
                      <div style={{ fontSize: '14px', color: '#9a3412', marginBottom: '8px' }}>Where Base Area (triangle) =</div>
                      <div style={{ 
                        display: 'inline-flex', 
                        alignItems: 'center', 
                        gap: '8px', 
                        fontSize: '20px', 
                        fontFamily: 'Georgia, serif'
                      }}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                          <span style={{ fontSize: '16px' }}>1</span>
                          <div style={{ width: '16px', height: '2px', background: '#1d1d1f' }} />
                          <span style={{ fontSize: '16px' }}>2</span>
                        </div>
                        <span style={{ color: '#6b7280' }}>×</span>
                        <span style={{ color: '#ea580c' }}>base</span>
                        <span style={{ color: '#6b7280' }}>×</span>
                        <span style={{ color: '#ea580c' }}>height</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            
            case 'triangularPrismExample':
              return (
                <div key={idx} style={{
                  background: '#fff',
                  borderRadius: '16px',
                  padding: '32px',
                  margin: '24px 0',
                  border: '1px solid #e5e5e5'
                }}>
                  <div style={{ fontSize: '14px', fontWeight: '600', color: '#ea580c', marginBottom: '16px' }}>Example</div>
                  <div style={{ fontSize: '16px', color: '#1d1d1f', marginBottom: '20px', lineHeight: 1.6 }}>
                    A tent has a triangular cross-section with base 8 ft and height 6 ft. The tent is 12 ft long. What is the volume?
                  </div>
                  <div style={{ 
                    background: '#f5f5f7', 
                    borderRadius: '12px', 
                    padding: '20px',
                    fontFamily: 'Georgia, serif'
                  }}>
                    <div style={{ fontSize: '15px', color: '#6b7280', marginBottom: '12px' }}>Step 1: Find the area of the triangular base</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '18px', color: '#1d1d1f', marginBottom: '8px' }}>
                      <span>Base Area =</span>
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <span style={{ fontSize: '14px' }}>1</span>
                        <div style={{ width: '14px', height: '2px', background: '#1d1d1f' }} />
                        <span style={{ fontSize: '14px' }}>2</span>
                      </div>
                      <span>× 8 × 6 = 24 ft²</span>
                    </div>
                    <div style={{ fontSize: '15px', color: '#6b7280', marginBottom: '12px', marginTop: '16px' }}>Step 2: Multiply by length</div>
                    <div style={{ fontSize: '18px', color: '#1d1d1f', marginBottom: '8px' }}>
                      V = 24 × 12
                    </div>
                    <div style={{ fontSize: '20px', fontWeight: '700', color: '#0891b2' }}>
                      V = 288 ft³
                    </div>
                  </div>
                </div>
              );
            
            // System of Equations Components
            case 'systemsIntro':
              return (
                <div key={idx} style={{
                  background: 'linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)',
                  borderRadius: '16px',
                  padding: '32px',
                  margin: '24px 0',
                  color: '#fff'
                }}>
                  <div style={{ fontSize: '14px', opacity: 0.8, marginBottom: '8px', fontWeight: '500', letterSpacing: '1px' }}>ALGEBRA</div>
                  <div style={{ fontSize: '28px', fontWeight: '700', marginBottom: '16px' }}>System of Equations</div>
                  <div style={{ 
                    fontSize: '17px', 
                    opacity: 0.95, 
                    lineHeight: 1.6,
                    padding: '16px 20px',
                    background: 'rgba(255,255,255,0.15)',
                    borderRadius: '8px'
                  }}>
                    Two or more equations with the same variables that we solve together to find values that satisfy <strong>all</strong> equations simultaneously.
                  </div>
                </div>
              );
            
            case 'systemsWhyWeNeedThem':
              return (
                <div key={idx} style={{
                  background: '#f5f5f7',
                  borderRadius: '16px',
                  padding: '32px',
                  margin: '24px 0'
                }}>
                  <div style={{ fontSize: '13px', color: '#86868b', marginBottom: '24px', fontWeight: '600', letterSpacing: '1px', textAlign: 'center' }}>WHY DO WE NEED SYSTEMS?</div>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                    {/* The Problem */}
                    <div style={{ 
                      background: '#fff', 
                      borderRadius: '12px', 
                      padding: '24px',
                      border: '2px solid #dc2626'
                    }}>
                      <div style={{ fontSize: '14px', color: '#dc2626', fontWeight: '600', marginBottom: '16px' }}>THE PROBLEM</div>
                      <div style={{ fontSize: '15px', color: '#1d1d1f', marginBottom: '12px', lineHeight: 1.6 }}>
                        A single equation with two unknowns has <strong>infinite solutions</strong>:
                      </div>
                      <div style={{ 
                        background: '#fef2f2',
                        borderRadius: '8px',
                        padding: '16px',
                        fontFamily: 'Georgia, serif',
                        fontSize: '17px',
                        textAlign: 'center',
                        marginBottom: '12px'
                      }}>
                        x + y = 10
                      </div>
                      <div style={{ fontSize: '14px', color: '#6b7280', lineHeight: 1.6 }}>
                        Could be (1,9), (2,8), (5,5), (0,10)... We can't pin down unique values for x and y.
                      </div>
                    </div>
                    
                    {/* The Solution */}
                    <div style={{ 
                      background: '#fff', 
                      borderRadius: '12px', 
                      padding: '24px',
                      border: '2px solid #16a34a'
                    }}>
                      <div style={{ fontSize: '14px', color: '#16a34a', fontWeight: '600', marginBottom: '16px' }}>THE SOLUTION</div>
                      <div style={{ fontSize: '15px', color: '#1d1d1f', marginBottom: '12px', lineHeight: 1.6 }}>
                        Add a <strong>second equation</strong> to narrow down to one answer:
                      </div>
                      <div style={{ 
                        background: '#f0fdf4',
                        borderRadius: '8px',
                        padding: '16px',
                        fontFamily: 'Georgia, serif',
                        fontSize: '17px',
                        textAlign: 'center',
                        lineHeight: 2,
                        marginBottom: '12px'
                      }}>
                        <div>x + y = 10</div>
                        <div>x − y = 4</div>
                      </div>
                      <div style={{ fontSize: '14px', color: '#6b7280', lineHeight: 1.6 }}>
                        Now there's only ONE point that works: <strong>(7, 3)</strong>
                      </div>
                    </div>
                  </div>
                  
                  <div style={{ 
                    marginTop: '20px',
                    padding: '16px 20px',
                    background: '#fff',
                    borderRadius: '12px',
                    borderLeft: '4px solid #7c3aed'
                  }}>
                    <div style={{ fontSize: '15px', color: '#1d1d1f', lineHeight: 1.6 }}>
                      <strong style={{ color: '#7c3aed' }}>Key Insight:</strong> To solve for <em>n</em> unknown variables, you generally need <em>n</em> independent equations. Two unknowns? Two equations. Three unknowns? Three equations.
                    </div>
                  </div>
                </div>
              );
            
            case 'systemsWhatIsIt':
              return (
                <div key={idx} style={{
                  background: '#f5f5f7',
                  borderRadius: '16px',
                  padding: '32px',
                  margin: '24px 0'
                }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                    {/* What it looks like */}
                    <div style={{ 
                      background: '#fff', 
                      borderRadius: '12px', 
                      padding: '24px',
                      border: '2px solid #7c3aed'
                    }}>
                      <div style={{ fontSize: '14px', color: '#7c3aed', fontWeight: '600', marginBottom: '16px' }}>A SYSTEM LOOKS LIKE</div>
                      <div style={{ 
                        background: '#f5f3ff',
                        borderRadius: '8px',
                        padding: '16px',
                        fontFamily: 'Georgia, serif', 
                        fontSize: '20px', 
                        lineHeight: 2,
                        color: '#1d1d1f',
                        textAlign: 'center'
                      }}>
                        <div>2x + 3y = 12</div>
                        <div>x − y = 1</div>
                      </div>
                    </div>
                    
                    {/* The solution */}
                    <div style={{ 
                      background: '#fff', 
                      borderRadius: '12px', 
                      padding: '24px',
                      border: '2px solid #16a34a'
                    }}>
                      <div style={{ fontSize: '14px', color: '#16a34a', fontWeight: '600', marginBottom: '16px' }}>THE SOLUTION</div>
                      <div style={{ fontSize: '15px', color: '#1d1d1f', marginBottom: '12px' }}>
                        The values of x and y that make <strong>both</strong> equations true.
                      </div>
                      <div style={{ 
                        background: '#f0fdf4',
                        borderRadius: '8px',
                        padding: '16px',
                        textAlign: 'center'
                      }}>
                        <div style={{ fontFamily: 'Georgia, serif', fontSize: '20px', color: '#166534', fontWeight: '600' }}>
                          (x, y) = (3, 2)
                        </div>
                        <div style={{ fontSize: '13px', color: '#6b7280', marginTop: '8px' }}>
                          This is where the lines intersect
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            
            case 'systemsSolutionMeaning':
              return (
                <div key={idx} style={{
                  background: '#fff',
                  borderRadius: '16px',
                  padding: '32px',
                  margin: '24px 0',
                  border: '1px solid #e5e5e5'
                }}>
                  <div style={{ fontSize: '13px', color: '#86868b', marginBottom: '24px', fontWeight: '600', letterSpacing: '1px', textAlign: 'center' }}>WHAT DOES THE SOLUTION REPRESENT?</div>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '20px' }}>
                    <div style={{ 
                      background: '#eff6ff',
                      borderRadius: '12px',
                      padding: '20px',
                      textAlign: 'center'
                    }}>
                      <div style={{ fontSize: '14px', color: '#2563eb', fontWeight: '600', marginBottom: '8px' }}>ALGEBRAICALLY</div>
                      <div style={{ fontSize: '15px', color: '#1d1d1f' }}>
                        Values that satisfy <strong>all</strong> equations when substituted
                      </div>
                    </div>
                    
                    <div style={{ 
                      background: '#f0fdf4',
                      borderRadius: '12px',
                      padding: '20px',
                      textAlign: 'center'
                    }}>
                      <div style={{ fontSize: '14px', color: '#16a34a', fontWeight: '600', marginBottom: '8px' }}>GRAPHICALLY</div>
                      <div style={{ fontSize: '15px', color: '#1d1d1f' }}>
                        The point(s) where the lines <strong>intersect</strong>
                      </div>
                    </div>
                    
                    <div style={{ 
                      background: '#f5f3ff',
                      borderRadius: '12px',
                      padding: '20px',
                      textAlign: 'center'
                    }}>
                      <div style={{ fontSize: '14px', color: '#7c3aed', fontWeight: '600', marginBottom: '8px' }}>IN CONTEXT</div>
                      <div style={{ fontSize: '15px', color: '#1d1d1f' }}>
                        The answer to a real-world problem with <strong>multiple unknowns</strong>
                      </div>
                    </div>
                  </div>
                  
                  <div style={{ 
                    background: '#f5f5f7',
                    borderRadius: '12px',
                    padding: '20px'
                  }}>
                    <div style={{ fontSize: '14px', color: '#6b7280', marginBottom: '12px' }}>Verify a solution by substituting into BOTH equations:</div>
                    <div style={{ 
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                      gap: '12px',
                      fontFamily: 'Georgia, serif',
                      fontSize: '16px'
                    }}>
                      <div style={{ background: '#fff', borderRadius: '8px', padding: '12px' }}>
                        <div style={{ color: '#6b7280', fontSize: '13px', fontFamily: 'system-ui', marginBottom: '4px' }}>Equation 1:</div>
                        <div>2(<span style={{ color: '#7c3aed' }}>3</span>) + 3(<span style={{ color: '#7c3aed' }}>2</span>) = 6 + 6 = <span style={{ color: '#16a34a', fontWeight: '600' }}>12 ✓</span></div>
                      </div>
                      <div style={{ background: '#fff', borderRadius: '8px', padding: '12px' }}>
                        <div style={{ color: '#6b7280', fontSize: '13px', fontFamily: 'system-ui', marginBottom: '4px' }}>Equation 2:</div>
                        <div><span style={{ color: '#7c3aed' }}>3</span> − <span style={{ color: '#7c3aed' }}>2</span> = <span style={{ color: '#16a34a', fontWeight: '600' }}>1 ✓</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            
            case 'systemsSolutionTypes':
              return (
                <div key={idx} style={{
                  background: '#f5f5f7',
                  borderRadius: '16px',
                  padding: '32px',
                  margin: '24px 0'
                }}>
                  <div style={{ fontSize: '13px', color: '#86868b', marginBottom: '24px', fontWeight: '600', letterSpacing: '1px', textAlign: 'center' }}>THREE TYPES OF SOLUTIONS</div>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
                    {/* One Solution */}
                    <div style={{ 
                      background: '#fff', 
                      borderRadius: '12px', 
                      padding: '24px',
                      border: '2px solid #16a34a'
                    }}>
                      <div style={{ fontSize: '16px', fontWeight: '700', color: '#16a34a', marginBottom: '16px', textAlign: 'center' }}>One Solution</div>
                      <div style={{ 
                        height: '100px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '16px',
                        background: '#f0fdf4',
                        borderRadius: '8px'
                      }}>
                        <svg width="100" height="100" viewBox="0 0 100 100">
                          <line x1="10" y1="90" x2="90" y2="10" stroke="#2563eb" strokeWidth="2"/>
                          <line x1="10" y1="30" x2="90" y2="70" stroke="#dc2626" strokeWidth="2"/>
                          <circle cx="50" cy="50" r="6" fill="#16a34a"/>
                        </svg>
                      </div>
                      <div style={{ fontSize: '14px', color: '#1d1d1f', textAlign: 'center', fontWeight: '500' }}>
                        Lines intersect once
                      </div>
                      <div style={{ fontSize: '13px', color: '#6b7280', textAlign: 'center', marginTop: '4px' }}>
                        Different slopes
                      </div>
                    </div>
                    
                    {/* No Solution */}
                    <div style={{ 
                      background: '#fff', 
                      borderRadius: '12px', 
                      padding: '24px',
                      border: '2px solid #dc2626'
                    }}>
                      <div style={{ fontSize: '16px', fontWeight: '700', color: '#dc2626', marginBottom: '16px', textAlign: 'center' }}>No Solution</div>
                      <div style={{ 
                        height: '100px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '16px',
                        background: '#fef2f2',
                        borderRadius: '8px'
                      }}>
                        <svg width="100" height="100" viewBox="0 0 100 100">
                          <line x1="10" y1="70" x2="90" y2="30" stroke="#2563eb" strokeWidth="2"/>
                          <line x1="10" y1="90" x2="90" y2="50" stroke="#dc2626" strokeWidth="2"/>
                        </svg>
                      </div>
                      <div style={{ fontSize: '14px', color: '#1d1d1f', textAlign: 'center', fontWeight: '500' }}>
                        Lines are parallel
                      </div>
                      <div style={{ fontSize: '13px', color: '#6b7280', textAlign: 'center', marginTop: '4px' }}>
                        Same slope, different intercepts
                      </div>
                    </div>
                    
                    {/* Infinite Solutions */}
                    <div style={{ 
                      background: '#fff', 
                      borderRadius: '12px', 
                      padding: '24px',
                      border: '2px solid #7c3aed'
                    }}>
                      <div style={{ fontSize: '16px', fontWeight: '700', color: '#7c3aed', marginBottom: '16px', textAlign: 'center' }}>Infinite Solutions</div>
                      <div style={{ 
                        height: '100px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '16px',
                        background: '#f5f3ff',
                        borderRadius: '8px'
                      }}>
                        <svg width="100" height="100" viewBox="0 0 100 100">
                          <line x1="10" y1="80" x2="90" y2="20" stroke="#7c3aed" strokeWidth="4"/>
                        </svg>
                      </div>
                      <div style={{ fontSize: '14px', color: '#1d1d1f', textAlign: 'center', fontWeight: '500' }}>
                        Lines are identical
                      </div>
                      <div style={{ fontSize: '13px', color: '#6b7280', textAlign: 'center', marginTop: '4px' }}>
                        Same line (one is a multiple)
                      </div>
                    </div>
                  </div>
                </div>
              );
            
            case 'systemsGraphicalMeaning':
              return (
                <div key={idx} style={{
                  background: '#fff',
                  borderRadius: '16px',
                  padding: '32px',
                  margin: '24px 0',
                  border: '1px solid #e5e5e5'
                }}>
                  <div style={{ fontSize: '13px', color: '#86868b', marginBottom: '24px', fontWeight: '600', letterSpacing: '1px', textAlign: 'center' }}>HOW TO IDENTIFY WHEN SOLVING</div>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <div style={{ 
                      display: 'grid',
                      gridTemplateColumns: '140px 1fr',
                      gap: '16px',
                      alignItems: 'center',
                      background: '#f0fdf4', 
                      borderRadius: '12px', 
                      padding: '16px 20px'
                    }}>
                      <div style={{ fontWeight: '600', color: '#16a34a', fontSize: '15px' }}>One solution</div>
                      <div style={{ fontSize: '15px', color: '#1d1d1f' }}>
                        You get a value → <span style={{ fontFamily: 'Georgia, serif', background: '#fff', padding: '2px 8px', borderRadius: '4px' }}>x = 3</span>
                      </div>
                    </div>
                    
                    <div style={{ 
                      display: 'grid',
                      gridTemplateColumns: '140px 1fr',
                      gap: '16px',
                      alignItems: 'center',
                      background: '#fef2f2', 
                      borderRadius: '12px', 
                      padding: '16px 20px'
                    }}>
                      <div style={{ fontWeight: '600', color: '#dc2626', fontSize: '15px' }}>No solution</div>
                      <div style={{ fontSize: '15px', color: '#1d1d1f' }}>
                        You get a false statement → <span style={{ fontFamily: 'Georgia, serif', background: '#fff', padding: '2px 8px', borderRadius: '4px' }}>0 = 5</span>
                      </div>
                    </div>
                    
                    <div style={{ 
                      display: 'grid',
                      gridTemplateColumns: '140px 1fr',
                      gap: '16px',
                      alignItems: 'center',
                      background: '#f5f3ff', 
                      borderRadius: '12px', 
                      padding: '16px 20px'
                    }}>
                      <div style={{ fontWeight: '600', color: '#7c3aed', fontSize: '15px' }}>Infinite solutions</div>
                      <div style={{ fontSize: '15px', color: '#1d1d1f' }}>
                        You get a true statement → <span style={{ fontFamily: 'Georgia, serif', background: '#fff', padding: '2px 8px', borderRadius: '4px' }}>0 = 0</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            
            case 'systemsSetupStrategy':
              return (
                <div key={idx} style={{
                  background: '#f5f5f7',
                  borderRadius: '16px',
                  padding: '32px',
                  margin: '24px 0'
                }}>
                  <div style={{ fontSize: '13px', color: '#86868b', marginBottom: '24px', fontWeight: '600', letterSpacing: '1px', textAlign: 'center' }}>SETTING UP A SYSTEM FROM A WORD PROBLEM</div>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {[
                      { num: 1, title: 'Identify the unknowns', desc: 'What quantities are you trying to find? These become your variables (x, y, etc.)' },
                      { num: 2, title: 'Find two relationships', desc: 'Look for two different facts connecting the unknowns — these become your two equations' },
                      { num: 3, title: 'Translate to math', desc: 'Convert each relationship into an equation using the key words below' },
                      { num: 4, title: 'Check your setup', desc: 'Make sure you have the same number of equations as unknowns' }
                    ].map((step) => (
                      <div key={step.num} style={{ 
                        background: '#fff', 
                        borderRadius: '12px', 
                        padding: '16px 20px',
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '16px'
                      }}>
                        <div style={{ 
                          width: '32px', 
                          height: '32px', 
                          borderRadius: '50%', 
                          background: '#7c3aed', 
                          color: '#fff', 
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'center', 
                          fontWeight: '700',
                          fontSize: '14px',
                          flexShrink: 0
                        }}>{step.num}</div>
                        <div>
                          <div style={{ fontSize: '15px', fontWeight: '600', color: '#1d1d1f' }}>{step.title}</div>
                          <div style={{ fontSize: '14px', color: '#6b7280', marginTop: '4px' }}>{step.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            
            case 'systemsFromContext':
              return (
                <div key={idx} style={{
                  background: '#f5f5f7',
                  borderRadius: '16px',
                  padding: '32px',
                  margin: '24px 0'
                }}>
                  <div style={{ fontSize: '13px', color: '#86868b', marginBottom: '24px', fontWeight: '600', letterSpacing: '1px', textAlign: 'center' }}>KEY WORD TRANSLATIONS</div>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
                    {/* Addition words */}
                    <div style={{ background: '#fff', borderRadius: '12px', padding: '20px' }}>
                      <div style={{ fontSize: '14px', color: '#16a34a', fontWeight: '600', marginBottom: '12px' }}>ADDITION (+)</div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        {['total', 'combined', 'sum', 'together', 'more than'].map((word, i) => (
                          <div key={i} style={{ fontSize: '15px', color: '#1d1d1f', paddingLeft: '8px' }}>• {word}</div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Multiplication words */}
                    <div style={{ background: '#fff', borderRadius: '12px', padding: '20px' }}>
                      <div style={{ fontSize: '14px', color: '#2563eb', fontWeight: '600', marginBottom: '12px' }}>MULTIPLICATION (×)</div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        {['times', 'per', 'each', 'rate', 'of'].map((word, i) => (
                          <div key={i} style={{ fontSize: '15px', color: '#1d1d1f', paddingLeft: '8px' }}>• {word}</div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Subtraction words */}
                    <div style={{ background: '#fff', borderRadius: '12px', padding: '20px' }}>
                      <div style={{ fontSize: '14px', color: '#dc2626', fontWeight: '600', marginBottom: '12px' }}>SUBTRACTION (−)</div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        {['less than', 'fewer', 'difference', 'decreased by'].map((word, i) => (
                          <div key={i} style={{ fontSize: '15px', color: '#1d1d1f', paddingLeft: '8px' }}>• {word}</div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Equals words */}
                    <div style={{ background: '#fff', borderRadius: '12px', padding: '20px' }}>
                      <div style={{ fontSize: '14px', color: '#7c3aed', fontWeight: '600', marginBottom: '12px' }}>EQUALS (=)</div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        {['is', 'was', 'are', 'equals', 'gives'].map((word, i) => (
                          <div key={i} style={{ fontSize: '15px', color: '#1d1d1f', paddingLeft: '8px' }}>• {word}</div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            
            case 'systemsContextExample':
              return (
                <div key={idx} style={{
                  background: '#fff',
                  borderRadius: '16px',
                  padding: '32px',
                  margin: '24px 0',
                  border: '1px solid #e5e5e5'
                }}>
                  <div style={{ fontSize: '14px', fontWeight: '600', color: '#ea580c', marginBottom: '20px' }}>Example</div>
                  
                  {/* Problem */}
                  <div style={{ 
                    background: '#f5f5f7',
                    borderRadius: '12px',
                    padding: '20px',
                    marginBottom: '20px',
                    fontSize: '15px',
                    color: '#1d1d1f',
                    lineHeight: 1.7
                  }}>
                    A theater sells adult tickets for $12 and child tickets for $8. One night, they sold 200 tickets and collected $2,100. How many of each type were sold?
                  </div>
                  
                  {/* Solution */}
                  <div style={{ 
                    background: '#f0fdf4', 
                    borderRadius: '12px', 
                    padding: '24px'
                  }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                      {/* Step 1 */}
                      <div>
                        <div style={{ fontSize: '13px', color: '#16a34a', fontWeight: '600', marginBottom: '8px' }}>STEP 1: Define variables</div>
                        <div style={{ fontSize: '15px', color: '#1d1d1f', paddingLeft: '12px' }}>
                          <div>a = adult tickets</div>
                          <div>c = child tickets</div>
                        </div>
                      </div>
                      
                      {/* Step 2 */}
                      <div>
                        <div style={{ fontSize: '13px', color: '#16a34a', fontWeight: '600', marginBottom: '8px' }}>STEP 2: Write equations</div>
                        <div style={{ 
                          fontFamily: 'Georgia, serif',
                          fontSize: '18px',
                          color: '#1d1d1f',
                          paddingLeft: '12px',
                          lineHeight: 2
                        }}>
                          <div>
                            <span style={{ color: '#7c3aed' }}>a + c = 200</span>
                            <span style={{ fontSize: '13px', color: '#6b7280', fontFamily: 'system-ui', marginLeft: '12px' }}>(total tickets)</span>
                          </div>
                          <div>
                            <span style={{ color: '#7c3aed' }}>12a + 8c = 2100</span>
                            <span style={{ fontSize: '13px', color: '#6b7280', fontFamily: 'system-ui', marginLeft: '12px' }}>(total revenue)</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            
            case 'substitutionIntro':
              return (
                <div key={idx} style={{
                  background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
                  borderRadius: '16px',
                  padding: '32px',
                  margin: '24px 0',
                  color: '#fff'
                }}>
                  <div style={{ fontSize: '14px', opacity: 0.8, marginBottom: '8px', fontWeight: '500', letterSpacing: '1px' }}>METHOD 1</div>
                  <div style={{ fontSize: '24px', fontWeight: '700', marginBottom: '16px' }}>Substitution</div>
                  <div style={{ 
                    fontSize: '17px', 
                    opacity: 0.95, 
                    lineHeight: 1.6,
                    padding: '16px 20px',
                    background: 'rgba(255,255,255,0.15)',
                    borderRadius: '8px'
                  }}>
                    Solve one equation for a variable, then <strong>substitute</strong> that expression into the other equation.
                  </div>
                </div>
              );
            
            case 'substitutionWhenToUse':
              return (
                <div key={idx} style={{
                  background: '#fff',
                  borderRadius: '16px',
                  padding: '32px',
                  margin: '24px 0',
                  border: '1px solid #e5e5e5'
                }}>
                  <div style={{ fontSize: '13px', color: '#86868b', marginBottom: '20px', fontWeight: '600', letterSpacing: '1px', textAlign: 'center' }}>WHEN TO USE SUBSTITUTION</div>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px' }}>
                    <div style={{ 
                      background: '#f0fdf4',
                      borderRadius: '12px',
                      padding: '20px',
                      borderLeft: '4px solid #16a34a'
                    }}>
                      <div style={{ fontSize: '14px', color: '#16a34a', fontWeight: '600', marginBottom: '8px' }}>IDEAL WHEN</div>
                      <ul style={{ fontSize: '15px', color: '#1d1d1f', margin: 0, paddingLeft: '20px', lineHeight: 1.8 }}>
                        <li>One variable is already isolated (y = ... or x = ...)</li>
                        <li>A coefficient is 1 (easy to isolate)</li>
                        <li>One equation is simpler than the other</li>
                      </ul>
                    </div>
                    
                    <div style={{ 
                      background: '#eff6ff',
                      borderRadius: '12px',
                      padding: '20px',
                      borderLeft: '4px solid #2563eb'
                    }}>
                      <div style={{ fontSize: '14px', color: '#2563eb', fontWeight: '600', marginBottom: '8px' }}>EXAMPLE SETUP</div>
                      <div style={{ 
                        fontFamily: 'Georgia, serif',
                        fontSize: '17px',
                        lineHeight: 2,
                        textAlign: 'center'
                      }}>
                        <div><span style={{ color: '#16a34a' }}>y = 3x + 2</span> ← already solved for y</div>
                        <div>2x + y = 12</div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            
            case 'substitutionSteps':
              return (
                <div key={idx} style={{
                  background: '#f5f5f7',
                  borderRadius: '16px',
                  padding: '32px',
                  margin: '24px 0'
                }}>
                  <div style={{ fontSize: '13px', color: '#86868b', marginBottom: '20px', fontWeight: '600', letterSpacing: '1px', textAlign: 'center' }}>THE PROCESS</div>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {[
                      { num: 1, title: 'Isolate a variable', desc: 'Solve one equation for x or y' },
                      { num: 2, title: 'Substitute', desc: 'Replace that variable in the other equation' },
                      { num: 3, title: 'Solve', desc: 'Find the value of the remaining variable' },
                      { num: 4, title: 'Back-substitute', desc: 'Plug back in to find the other variable' }
                    ].map((step) => (
                      <div key={step.num} style={{ 
                        background: '#fff', 
                        borderRadius: '12px', 
                        padding: '16px 20px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '16px'
                      }}>
                        <div style={{ 
                          width: '36px', 
                          height: '36px', 
                          borderRadius: '50%', 
                          background: '#2563eb', 
                          color: '#fff', 
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'center', 
                          fontWeight: '700',
                          fontSize: '15px',
                          flexShrink: 0
                        }}>{step.num}</div>
                        <div>
                          <div style={{ fontSize: '15px', fontWeight: '600', color: '#1d1d1f' }}>{step.title}</div>
                          <div style={{ fontSize: '14px', color: '#6b7280' }}>{step.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            
            case 'substitutionExample':
              return (
                <div key={idx} style={{
                  background: '#fff',
                  borderRadius: '16px',
                  padding: '32px',
                  margin: '24px 0',
                  border: '1px solid #e5e5e5'
                }}>
                  <div style={{ fontSize: '14px', fontWeight: '600', color: '#ea580c', marginBottom: '20px' }}>Example</div>
                  
                  {/* Problem */}
                  <div style={{ 
                    background: '#f5f5f7',
                    borderRadius: '12px',
                    padding: '20px',
                    marginBottom: '20px'
                  }}>
                    <div style={{ 
                      fontFamily: 'Georgia, serif',
                      fontSize: '18px',
                      color: '#1d1d1f',
                      textAlign: 'center',
                      lineHeight: 2
                    }}>
                      <div>y = 2x + 1</div>
                      <div>3x + y = 11</div>
                    </div>
                  </div>
                  
                  {/* Solution */}
                  <div style={{ 
                    background: '#eff6ff', 
                    borderRadius: '12px', 
                    padding: '24px'
                  }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                      {/* Step 1 */}
                      <div>
                        <div style={{ fontSize: '13px', color: '#2563eb', fontWeight: '600', marginBottom: '8px' }}>STEP 1: y is already isolated</div>
                        <div style={{ fontFamily: 'Georgia, serif', fontSize: '17px', color: '#1d1d1f', paddingLeft: '12px' }}>
                          y = <span style={{ color: '#2563eb' }}>2x + 1</span>
                        </div>
                      </div>
                      
                      {/* Step 2 */}
                      <div>
                        <div style={{ fontSize: '13px', color: '#2563eb', fontWeight: '600', marginBottom: '8px' }}>STEP 2: Substitute into second equation</div>
                        <div style={{ fontFamily: 'Georgia, serif', fontSize: '17px', color: '#1d1d1f', paddingLeft: '12px' }}>
                          3x + <span style={{ color: '#2563eb' }}>(2x + 1)</span> = 11
                        </div>
                      </div>
                      
                      {/* Step 3 */}
                      <div>
                        <div style={{ fontSize: '13px', color: '#2563eb', fontWeight: '600', marginBottom: '8px' }}>STEP 3: Solve for x</div>
                        <div style={{ fontFamily: 'Georgia, serif', fontSize: '17px', color: '#1d1d1f', paddingLeft: '12px' }}>
                          <div>5x + 1 = 11</div>
                          <div>5x = 10</div>
                          <div><strong>x = 2</strong></div>
                        </div>
                      </div>
                      
                      {/* Step 4 */}
                      <div>
                        <div style={{ fontSize: '13px', color: '#2563eb', fontWeight: '600', marginBottom: '8px' }}>STEP 4: Find y</div>
                        <div style={{ fontFamily: 'Georgia, serif', fontSize: '17px', color: '#1d1d1f', paddingLeft: '12px' }}>
                          y = 2(2) + 1 = <strong>5</strong>
                        </div>
                      </div>
                      
                      {/* Answer */}
                      <div style={{ borderTop: '1px solid #bfdbfe', paddingTop: '16px', marginTop: '8px' }}>
                        <div style={{ fontFamily: 'Georgia, serif', fontSize: '20px', fontWeight: '700', color: '#166534', textAlign: 'center' }}>
                          Solution: (2, 5)
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            
            case 'eliminationIntro':
              return (
                <div key={idx} style={{
                  background: 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)',
                  borderRadius: '16px',
                  padding: '32px',
                  margin: '24px 0',
                  color: '#fff'
                }}>
                  <div style={{ fontSize: '14px', opacity: 0.8, marginBottom: '8px', fontWeight: '500', letterSpacing: '1px' }}>METHOD 2</div>
                  <div style={{ fontSize: '24px', fontWeight: '700', marginBottom: '16px' }}>Elimination</div>
                  <div style={{ 
                    fontSize: '17px', 
                    opacity: 0.95, 
                    lineHeight: 1.6,
                    padding: '16px 20px',
                    background: 'rgba(255,255,255,0.15)',
                    borderRadius: '8px'
                  }}>
                    Add or subtract the equations to <strong>eliminate</strong> one variable, leaving a single equation with one unknown.
                  </div>
                </div>
              );
            
            case 'eliminationWhenToUse':
              return (
                <div key={idx} style={{
                  background: '#fff',
                  borderRadius: '16px',
                  padding: '32px',
                  margin: '24px 0',
                  border: '1px solid #e5e5e5'
                }}>
                  <div style={{ fontSize: '13px', color: '#86868b', marginBottom: '20px', fontWeight: '600', letterSpacing: '1px', textAlign: 'center' }}>WHEN TO USE ELIMINATION</div>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px' }}>
                    <div style={{ 
                      background: '#fef2f2',
                      borderRadius: '12px',
                      padding: '20px',
                      borderLeft: '4px solid #dc2626'
                    }}>
                      <div style={{ fontSize: '14px', color: '#dc2626', fontWeight: '600', marginBottom: '8px' }}>IDEAL WHEN</div>
                      <ul style={{ fontSize: '15px', color: '#1d1d1f', margin: 0, paddingLeft: '20px', lineHeight: 1.8 }}>
                        <li>Coefficients already match or are opposites</li>
                        <li>Coefficients can easily be made to match</li>
                        <li>Both equations are in standard form (Ax + By = C)</li>
                      </ul>
                    </div>
                    
                    <div style={{ 
                      background: '#fef2f2',
                      borderRadius: '12px',
                      padding: '20px',
                      borderLeft: '4px solid #dc2626'
                    }}>
                      <div style={{ fontSize: '14px', color: '#dc2626', fontWeight: '600', marginBottom: '8px' }}>EXAMPLE SETUP</div>
                      <div style={{ 
                        fontFamily: 'Georgia, serif',
                        fontSize: '17px',
                        lineHeight: 2,
                        textAlign: 'center'
                      }}>
                        <div><span style={{ color: '#dc2626' }}>3x</span> + 2y = 14</div>
                        <div><span style={{ color: '#dc2626' }}>3x</span> − y = 8 ← same coefficient on x</div>
                      </div>
                    </div>
                  </div>
                  
                  <div style={{ 
                    marginTop: '16px',
                    padding: '16px 20px',
                    background: '#f5f5f7',
                    borderRadius: '12px'
                  }}>
                    <div style={{ fontSize: '15px', color: '#1d1d1f', lineHeight: 1.6 }}>
                      <strong>Pro tip:</strong> If coefficients don't match, multiply one or both equations to create matching coefficients. For example, multiply by 2 to change 3x to 6x.
                    </div>
                  </div>
                </div>
              );
            
            case 'eliminationSteps':
              return (
                <div key={idx} style={{
                  background: '#f5f5f7',
                  borderRadius: '16px',
                  padding: '32px',
                  margin: '24px 0'
                }}>
                  <div style={{ fontSize: '13px', color: '#86868b', marginBottom: '20px', fontWeight: '600', letterSpacing: '1px', textAlign: 'center' }}>THE PROCESS</div>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {[
                      { num: 1, title: 'Align equations', desc: 'Stack them with like terms lined up' },
                      { num: 2, title: 'Match coefficients', desc: 'Multiply if needed to make one variable cancel' },
                      { num: 3, title: 'Add or subtract', desc: 'Eliminate one variable' },
                      { num: 4, title: 'Solve and substitute', desc: 'Find both values' }
                    ].map((step) => (
                      <div key={step.num} style={{ 
                        background: '#fff', 
                        borderRadius: '12px', 
                        padding: '16px 20px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '16px'
                      }}>
                        <div style={{ 
                          width: '36px', 
                          height: '36px', 
                          borderRadius: '50%', 
                          background: '#dc2626', 
                          color: '#fff', 
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'center', 
                          fontWeight: '700',
                          fontSize: '15px',
                          flexShrink: 0
                        }}>{step.num}</div>
                        <div>
                          <div style={{ fontSize: '15px', fontWeight: '600', color: '#1d1d1f' }}>{step.title}</div>
                          <div style={{ fontSize: '14px', color: '#6b7280' }}>{step.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            
            case 'eliminationExample':
              return (
                <div key={idx} style={{
                  background: '#fff',
                  borderRadius: '16px',
                  padding: '32px',
                  margin: '24px 0',
                  border: '1px solid #e5e5e5'
                }}>
                  <div style={{ fontSize: '14px', fontWeight: '600', color: '#ea580c', marginBottom: '20px' }}>Example</div>
                  
                  {/* Problem */}
                  <div style={{ 
                    background: '#f5f5f7',
                    borderRadius: '12px',
                    padding: '20px',
                    marginBottom: '20px'
                  }}>
                    <div style={{ 
                      fontFamily: 'Georgia, serif',
                      fontSize: '18px',
                      color: '#1d1d1f',
                      textAlign: 'center',
                      lineHeight: 2
                    }}>
                      <div>2x + 3y = 13</div>
                      <div>2x − y = 5</div>
                    </div>
                  </div>
                  
                  {/* Solution */}
                  <div style={{ 
                    background: '#fef2f2', 
                    borderRadius: '12px', 
                    padding: '24px'
                  }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                      {/* Step 1 */}
                      <div>
                        <div style={{ fontSize: '13px', color: '#dc2626', fontWeight: '600', marginBottom: '8px' }}>STEP 1: Coefficients of x already match (2x)</div>
                      </div>
                      
                      {/* Step 2 */}
                      <div>
                        <div style={{ fontSize: '13px', color: '#dc2626', fontWeight: '600', marginBottom: '8px' }}>STEP 2: Subtract to eliminate x</div>
                        <div style={{ fontFamily: 'Georgia, serif', fontSize: '17px', color: '#1d1d1f', paddingLeft: '12px' }}>
                          <div>&nbsp;&nbsp;2x + 3y = 13</div>
                          <div style={{ borderBottom: '2px solid #dc2626', display: 'inline-block', marginBottom: '4px' }}>− (2x − y = 5)</div>
                          <div style={{ marginTop: '4px' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4y = 8</div>
                        </div>
                      </div>
                      
                      {/* Step 3 */}
                      <div>
                        <div style={{ fontSize: '13px', color: '#dc2626', fontWeight: '600', marginBottom: '8px' }}>STEP 3: Solve for y</div>
                        <div style={{ fontFamily: 'Georgia, serif', fontSize: '17px', color: '#1d1d1f', paddingLeft: '12px' }}>
                          <strong>y = 2</strong>
                        </div>
                      </div>
                      
                      {/* Step 4 */}
                      <div>
                        <div style={{ fontSize: '13px', color: '#dc2626', fontWeight: '600', marginBottom: '8px' }}>STEP 4: Find x using 2x − y = 5</div>
                        <div style={{ fontFamily: 'Georgia, serif', fontSize: '17px', color: '#1d1d1f', paddingLeft: '12px' }}>
                          <div>2x − 2 = 5</div>
                          <div>2x = 7</div>
                          <div><strong>x = 3.5</strong></div>
                        </div>
                      </div>
                      
                      {/* Answer */}
                      <div style={{ borderTop: '1px solid #fecaca', paddingTop: '16px', marginTop: '8px' }}>
                        <div style={{ fontFamily: 'Georgia, serif', fontSize: '20px', fontWeight: '700', color: '#166534', textAlign: 'center' }}>
                          Solution: (3.5, 2)
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            
            // DESMOS Components
            case 'desmosIntro':
              return (
                <div key={idx} style={{
                  background: 'linear-gradient(135deg, #059669 0%, #047857 100%)',
                  borderRadius: '20px',
                  padding: '40px',
                  margin: '24px 0',
                  color: '#fff',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  {/* Decorative grid pattern */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: '200px',
                    height: '200px',
                    opacity: 0.1
                  }}>
                    <svg width="200" height="200" viewBox="0 0 200 200">
                      <defs>
                        <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="1"/>
                        </pattern>
                      </defs>
                      <rect width="200" height="200" fill="url(#grid)" />
                      <line x1="20" y1="180" x2="180" y2="40" stroke="white" strokeWidth="3"/>
                      <line x1="20" y1="60" x2="180" y2="140" stroke="white" strokeWidth="3"/>
                      <circle cx="100" cy="110" r="8" fill="white"/>
                    </svg>
                  </div>
                  
                  <div style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{ 
                      display: 'inline-block',
                      background: 'rgba(255,255,255,0.2)',
                      padding: '6px 12px',
                      borderRadius: '20px',
                      fontSize: '12px',
                      fontWeight: '600',
                      letterSpacing: '1px',
                      marginBottom: '16px'
                    }}>⚡ THE FAST METHOD</div>
                    <div style={{ fontSize: '32px', fontWeight: '700', marginBottom: '12px' }}>DESMOS</div>
                    <div style={{ fontSize: '18px', opacity: 0.9, marginBottom: '20px' }}>Graphing Calculator</div>
                    <div style={{ 
                      fontSize: '17px', 
                      opacity: 0.95, 
                      lineHeight: 1.7,
                      maxWidth: '500px'
                    }}>
                      The digital SAT includes a built-in DESMOS calculator. Graph both equations and click the intersection — <strong>no algebra required</strong>.
                    </div>
                  </div>
                </div>
              );
            
            case 'desmosSATReality':
              return (
                <div key={idx} style={{
                  background: '#fff',
                  borderRadius: '20px',
                  padding: '40px',
                  margin: '24px 0',
                  boxShadow: '0 4px 24px rgba(5, 150, 105, 0.15)',
                  border: '1px solid #d1fae5'
                }}>
                  {/* Big statement */}
                  <div style={{ 
                    textAlign: 'center',
                    marginBottom: '32px'
                  }}>
                    <div style={{ 
                      fontSize: '14px', 
                      color: '#059669', 
                      fontWeight: '700', 
                      letterSpacing: '2px',
                      marginBottom: '16px'
                    }}>SAT REALITY CHECK</div>
                    <div style={{ 
                      fontSize: '28px', 
                      fontWeight: '700', 
                      color: '#1d1d1f',
                      lineHeight: 1.3,
                      maxWidth: '500px',
                      margin: '0 auto'
                    }}>
                      You will <span style={{ color: '#059669' }}>almost never</span> need substitution or elimination on the SAT.
                    </div>
                  </div>
                  
                  {/* Comparison */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px', marginBottom: '24px' }}>
                    {/* Hard way */}
                    <div style={{ 
                      background: '#fef2f2',
                      borderRadius: '16px',
                      padding: '24px',
                      position: 'relative'
                    }}>
                      <div style={{ 
                        position: 'absolute',
                        top: '-12px',
                        left: '20px',
                        background: '#dc2626',
                        color: '#fff',
                        padding: '4px 12px',
                        borderRadius: '12px',
                        fontSize: '11px',
                        fontWeight: '700',
                        letterSpacing: '1px'
                      }}>SLOW</div>
                      <div style={{ marginTop: '8px' }}>
                        <div style={{ fontSize: '18px', fontWeight: '700', color: '#dc2626', marginBottom: '4px' }}>Algebra by Hand</div>
                        <div style={{ fontSize: '32px', fontWeight: '700', color: '#1d1d1f', marginBottom: '12px' }}>2-3 min</div>
                        <div style={{ fontSize: '14px', color: '#6b7280', lineHeight: 1.7 }}>
                          Multiple steps, easy to make errors, mentally draining
                        </div>
                      </div>
                    </div>
                    
                    {/* Easy way */}
                    <div style={{ 
                      background: '#f0fdf4',
                      borderRadius: '16px',
                      padding: '24px',
                      position: 'relative'
                    }}>
                      <div style={{ 
                        position: 'absolute',
                        top: '-12px',
                        left: '20px',
                        background: '#059669',
                        color: '#fff',
                        padding: '4px 12px',
                        borderRadius: '12px',
                        fontSize: '11px',
                        fontWeight: '700',
                        letterSpacing: '1px'
                      }}>FAST</div>
                      <div style={{ marginTop: '8px' }}>
                        <div style={{ fontSize: '18px', fontWeight: '700', color: '#059669', marginBottom: '4px' }}>DESMOS</div>
                        <div style={{ fontSize: '32px', fontWeight: '700', color: '#1d1d1f', marginBottom: '12px' }}>20 sec</div>
                        <div style={{ fontSize: '14px', color: '#6b7280', lineHeight: 1.7 }}>
                          Type, click, done. No calculations needed.
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Why learn algebra */}
                  <div style={{ 
                    background: 'linear-gradient(135deg, #f5f5f7 0%, #e5e5e7 100%)',
                    borderRadius: '12px',
                    padding: '20px 24px',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '16px'
                  }}>
                    <div style={{ 
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      background: '#fff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '20px',
                      flexShrink: 0
                    }}>💡</div>
                    <div>
                      <div style={{ fontSize: '15px', fontWeight: '600', color: '#1d1d1f', marginBottom: '4px' }}>So why learn algebra?</div>
                      <div style={{ fontSize: '14px', color: '#6b7280', lineHeight: 1.6 }}>
                        You need it to set up word problems, recognize solution types, and handle edge cases like infinite solutions with parameters.
                      </div>
                    </div>
                  </div>
                </div>
              );
            
            case 'desmosSteps':
              return (
                <div key={idx} style={{
                  background: '#f5f5f7',
                  borderRadius: '20px',
                  padding: '40px',
                  margin: '24px 0'
                }}>
                  <div style={{ 
                    fontSize: '13px', 
                    color: '#86868b', 
                    marginBottom: '24px', 
                    fontWeight: '600', 
                    letterSpacing: '1px', 
                    textAlign: 'center' 
                  }}>THE 20-SECOND METHOD</div>
                  
                  <div style={{ 
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '16px'
                  }}>
                    {[
                      { num: 1, icon: '🖩', title: 'Open calculator', desc: 'Click the DESMOS icon' },
                      { num: 2, icon: '✏️', title: 'Enter equation 1', desc: 'Type it exactly as shown' },
                      { num: 3, icon: '✏️', title: 'Enter equation 2', desc: 'Type on a new line' },
                      { num: 4, icon: '🎯', title: 'Click intersection', desc: 'Get the answer instantly' }
                    ].map((step) => (
                      <div key={step.num} style={{ 
                        background: '#fff', 
                        borderRadius: '16px', 
                        padding: '24px',
                        textAlign: 'center',
                        position: 'relative'
                      }}>
                        <div style={{ 
                          position: 'absolute',
                          top: '-10px',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          width: '24px',
                          height: '24px',
                          borderRadius: '50%',
                          background: '#059669',
                          color: '#fff',
                          fontSize: '12px',
                          fontWeight: '700',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}>{step.num}</div>
                        <div style={{ fontSize: '32px', marginBottom: '12px', marginTop: '8px' }}>{step.icon}</div>
                        <div style={{ fontSize: '15px', fontWeight: '600', color: '#1d1d1f', marginBottom: '4px' }}>{step.title}</div>
                        <div style={{ fontSize: '13px', color: '#6b7280' }}>{step.desc}</div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Visual representation */}
                  <div style={{ 
                    marginTop: '24px',
                    background: '#fff',
                    borderRadius: '16px',
                    padding: '24px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '24px',
                    flexWrap: 'wrap'
                  }}>
                    <div style={{ flex: '1', minWidth: '200px' }}>
                      <div style={{ fontSize: '13px', color: '#86868b', marginBottom: '8px', fontWeight: '500' }}>YOU TYPE:</div>
                      <div style={{ 
                        fontFamily: 'SF Mono, Monaco, monospace',
                        fontSize: '16px',
                        color: '#1d1d1f',
                        background: '#f5f5f7',
                        padding: '12px 16px',
                        borderRadius: '8px',
                        lineHeight: 1.8
                      }}>
                        <div style={{ color: '#2563eb' }}>2x + 3y = 12</div>
                        <div style={{ color: '#dc2626' }}>x - y = 1</div>
                      </div>
                    </div>
                    <div style={{ fontSize: '24px', color: '#86868b' }}>→</div>
                    <div style={{ flex: '1', minWidth: '150px' }}>
                      <div style={{ fontSize: '13px', color: '#86868b', marginBottom: '8px', fontWeight: '500' }}>YOU GET:</div>
                      <div style={{ 
                        fontFamily: 'Georgia, serif',
                        fontSize: '24px',
                        fontWeight: '700',
                        color: '#059669',
                        background: '#f0fdf4',
                        padding: '12px 20px',
                        borderRadius: '8px',
                        textAlign: 'center'
                      }}>
                        (3, 2)
                      </div>
                    </div>
                  </div>
                </div>
              );
            
            case 'desmosWhenToUse':
              return (
                <div key={idx} style={{
                  background: '#fff',
                  borderRadius: '20px',
                  padding: '40px',
                  margin: '24px 0',
                  border: '1px solid #e5e5e5'
                }}>
                  <div style={{ 
                    fontSize: '13px', 
                    color: '#86868b', 
                    marginBottom: '24px', 
                    fontWeight: '600', 
                    letterSpacing: '1px', 
                    textAlign: 'center' 
                  }}>WHEN TO USE WHAT</div>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
                    {/* DESMOS */}
                    <div style={{ 
                      borderRadius: '16px',
                      overflow: 'hidden',
                      border: '2px solid #059669'
                    }}>
                      <div style={{ 
                        background: '#059669',
                        color: '#fff',
                        padding: '16px 20px',
                        fontSize: '16px',
                        fontWeight: '700'
                      }}>✓ Use DESMOS</div>
                      <div style={{ padding: '20px' }}>
                        {[
                          'Finding intersection points',
                          'Checking if a point is a solution',
                          'Seeing if lines are parallel',
                          '"Solve the system" questions'
                        ].map((item, i) => (
                          <div key={i} style={{ 
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                            padding: '10px 0',
                            borderBottom: i < 3 ? '1px solid #e5e5e5' : 'none'
                          }}>
                            <div style={{ 
                              width: '20px',
                              height: '20px',
                              borderRadius: '50%',
                              background: '#d1fae5',
                              color: '#059669',
                              fontSize: '12px',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center'
                            }}>✓</div>
                            <span style={{ fontSize: '14px', color: '#1d1d1f' }}>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Algebra */}
                    <div style={{ 
                      borderRadius: '16px',
                      overflow: 'hidden',
                      border: '2px solid #6b7280'
                    }}>
                      <div style={{ 
                        background: '#6b7280',
                        color: '#fff',
                        padding: '16px 20px',
                        fontSize: '16px',
                        fontWeight: '700'
                      }}>✎ Use Algebra</div>
                      <div style={{ padding: '20px' }}>
                        {[
                          'Infinite solutions with parameter (r)',
                          '"Which system represents..."',
                          'Setting up word problems',
                          'Questions about coefficients'
                        ].map((item, i) => (
                          <div key={i} style={{ 
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                            padding: '10px 0',
                            borderBottom: i < 3 ? '1px solid #e5e5e5' : 'none'
                          }}>
                            <div style={{ 
                              width: '20px',
                              height: '20px',
                              borderRadius: '50%',
                              background: '#f3f4f6',
                              color: '#6b7280',
                              fontSize: '12px',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center'
                            }}>✎</div>
                            <span style={{ fontSize: '14px', color: '#1d1d1f' }}>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Bottom line */}
                  <div style={{ 
                    marginTop: '24px',
                    background: 'linear-gradient(135deg, #059669 0%, #047857 100%)',
                    borderRadius: '12px',
                    padding: '20px 24px',
                    textAlign: 'center'
                  }}>
                    <div style={{ fontSize: '17px', color: '#fff', fontWeight: '600' }}>
                      🎯 Default to DESMOS. Only use algebra when you have to.
                    </div>
                  </div>
                </div>
              );
            
            // Infinite Solutions Components
            case 'infiniteSolutionsIntro':
              return (
                <div key={idx} style={{
                  background: 'linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)',
                  borderRadius: '16px',
                  padding: '32px',
                  margin: '24px 0',
                  color: '#fff'
                }}>
                  <div style={{ fontSize: '14px', opacity: 0.8, marginBottom: '8px', fontWeight: '500', letterSpacing: '1px' }}>SPECIAL CASE</div>
                  <div style={{ fontSize: '24px', fontWeight: '700', marginBottom: '16px' }}>Infinite Solutions</div>
                  <div style={{ 
                    fontSize: '17px', 
                    opacity: 0.95, 
                    lineHeight: 1.6,
                    padding: '16px 20px',
                    background: 'rgba(255,255,255,0.15)',
                    borderRadius: '8px'
                  }}>
                    When two equations represent the <strong>same line</strong>, every point on that line is a solution.
                  </div>
                </div>
              );
            
            case 'infiniteSolutionsRecognize':
              return (
                <div key={idx} style={{
                  background: '#f5f5f7',
                  borderRadius: '16px',
                  padding: '32px',
                  margin: '24px 0'
                }}>
                  <div style={{ fontSize: '13px', color: '#86868b', marginBottom: '24px', fontWeight: '600', letterSpacing: '1px', textAlign: 'center' }}>RECOGNIZING INFINITE SOLUTIONS</div>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
                    {/* What it looks like */}
                    <div style={{ 
                      background: '#fff', 
                      borderRadius: '12px', 
                      padding: '24px',
                      border: '2px solid #7c3aed'
                    }}>
                      <div style={{ fontSize: '14px', color: '#7c3aed', fontWeight: '600', marginBottom: '16px' }}>WHAT IT LOOKS LIKE</div>
                      <div style={{ fontSize: '15px', color: '#1d1d1f', marginBottom: '12px' }}>
                        One equation is a <strong>multiple</strong> of the other:
                      </div>
                      <div style={{ 
                        background: '#f5f3ff',
                        borderRadius: '8px',
                        padding: '16px',
                        fontFamily: 'Georgia, serif',
                        fontSize: '17px',
                        textAlign: 'center'
                      }}>
                        <div style={{ color: '#2563eb', marginBottom: '4px' }}>x + 2y = 6</div>
                        <div style={{ color: '#6b7280', fontSize: '14px', margin: '8px 0' }}>× 3</div>
                        <div style={{ color: '#7c3aed' }}>3x + 6y = 18</div>
                      </div>
                    </div>
                    
                    {/* What happens when solving */}
                    <div style={{ 
                      background: '#fff', 
                      borderRadius: '12px', 
                      padding: '24px',
                      border: '2px solid #16a34a'
                    }}>
                      <div style={{ fontSize: '14px', color: '#16a34a', fontWeight: '600', marginBottom: '16px' }}>WHAT HAPPENS WHEN SOLVING</div>
                      <div style={{ fontSize: '15px', color: '#1d1d1f', marginBottom: '12px' }}>
                        Variables cancel, leaving a <strong>true statement</strong>:
                      </div>
                      <div style={{ 
                        background: '#f0fdf4',
                        borderRadius: '8px',
                        padding: '16px',
                        fontFamily: 'Georgia, serif',
                        fontSize: '17px',
                        textAlign: 'center'
                      }}>
                        <div style={{ color: '#1d1d1f', marginBottom: '4px' }}>0 = 0 ✓</div>
                        <div style={{ color: '#6b7280', fontSize: '14px', marginTop: '8px', fontFamily: 'system-ui' }}>This confirms infinite solutions</div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            
            case 'infiniteSolutionsParametric':
              return (
                <div key={idx} style={{
                  background: '#f5f5f7',
                  borderRadius: '16px',
                  padding: '32px',
                  margin: '24px 0'
                }}>
                  <div style={{ fontSize: '13px', color: '#86868b', marginBottom: '24px', fontWeight: '600', letterSpacing: '1px', textAlign: 'center' }}>THE SAT QUESTION TYPE</div>
                  
                  <div style={{ 
                    background: '#fff', 
                    borderRadius: '12px', 
                    padding: '24px',
                    marginBottom: '20px',
                    borderLeft: '4px solid #7c3aed'
                  }}>
                    <div style={{ fontSize: '15px', color: '#1d1d1f', lineHeight: 1.7 }}>
                      The SAT gives you a system with infinite solutions and asks: <strong>"Which point lies on the graph of each equation?"</strong>
                    </div>
                    <div style={{ fontSize: '15px', color: '#1d1d1f', lineHeight: 1.7, marginTop: '12px' }}>
                      Answer choices use a <strong>parameter</strong> (usually <em>r</em>) to represent the infinite points, like: <span style={{ fontFamily: 'Georgia, serif' }}>(r, 3 − r/2)</span>
                    </div>
                  </div>
                  
                  <div style={{ 
                    background: '#fff', 
                    borderRadius: '12px', 
                    padding: '24px'
                  }}>
                    <div style={{ fontSize: '14px', color: '#7c3aed', fontWeight: '600', marginBottom: '16px' }}>HOW TO SOLVE</div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      {[
                        { step: 'Let x = r', desc: 'Use the parameter as x' },
                        { step: 'Substitute into simpler equation', desc: 'Plug r in for x' },
                        { step: 'Solve for y', desc: 'Get y in terms of r' },
                        { step: 'Match to answer choice', desc: 'Find (r, your expression)' }
                      ].map((item, i) => (
                        <div key={i} style={{ 
                          display: 'flex', 
                          alignItems: 'center', 
                          gap: '16px',
                          padding: '12px 16px',
                          background: '#f5f5f7',
                          borderRadius: '8px'
                        }}>
                          <div style={{ 
                            width: '28px', 
                            height: '28px', 
                            borderRadius: '50%', 
                            background: '#7c3aed', 
                            color: '#fff',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '13px',
                            fontWeight: '700',
                            flexShrink: 0
                          }}>{i + 1}</div>
                          <div>
                            <div style={{ fontSize: '15px', fontWeight: '600', color: '#1d1d1f' }}>{item.step}</div>
                            <div style={{ fontSize: '13px', color: '#6b7280' }}>{item.desc}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            
            case 'infiniteSolutionsExample':
              return (
                <div key={idx} style={{
                  background: '#fff',
                  borderRadius: '16px',
                  padding: '32px',
                  margin: '24px 0',
                  border: '1px solid #e5e5e5'
                }}>
                  <div style={{ fontSize: '14px', fontWeight: '600', color: '#ea580c', marginBottom: '20px' }}>Example</div>
                  
                  {/* Problem */}
                  <div style={{ 
                    background: '#f5f5f7',
                    borderRadius: '12px',
                    padding: '24px',
                    marginBottom: '24px'
                  }}>
                    <div style={{ 
                      fontFamily: 'Georgia, serif',
                      fontSize: '18px',
                      color: '#1d1d1f',
                      textAlign: 'center',
                      lineHeight: 2,
                      marginBottom: '12px'
                    }}>
                      <div>x + 2y = 6</div>
                      <div>3x + 6y = 18</div>
                    </div>
                    <div style={{ fontSize: '15px', color: '#6b7280', textAlign: 'center' }}>
                      Which point lies on the graph of each equation?
                    </div>
                  </div>
                  
                  {/* Solution Steps */}
                  <div style={{ 
                    background: '#f0fdf4', 
                    borderRadius: '12px', 
                    padding: '24px'
                  }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                      {/* Step 1 */}
                      <div>
                        <div style={{ fontSize: '13px', color: '#16a34a', fontWeight: '600', marginBottom: '8px' }}>STEP 1: Let x = r</div>
                        <div style={{ fontFamily: 'Georgia, serif', fontSize: '18px', color: '#1d1d1f', paddingLeft: '12px' }}>
                          <span style={{ color: '#7c3aed' }}>r</span> + 2y = 6
                        </div>
                      </div>
                      
                      {/* Step 2 */}
                      <div>
                        <div style={{ fontSize: '13px', color: '#16a34a', fontWeight: '600', marginBottom: '8px' }}>STEP 2: Solve for y</div>
                        <div style={{ fontFamily: 'Georgia, serif', fontSize: '18px', color: '#1d1d1f', paddingLeft: '12px' }}>
                          <div style={{ marginBottom: '4px' }}>2y = 6 − r</div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <span>y = 3 −</span>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                              <span style={{ fontSize: '14px' }}>r</span>
                              <div style={{ width: '14px', height: '2px', background: '#1d1d1f' }} />
                              <span style={{ fontSize: '14px' }}>2</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Result */}
                      <div style={{ 
                        borderTop: '1px solid #bbf7d0',
                        paddingTop: '16px',
                        marginTop: '8px'
                      }}>
                        <div style={{ fontSize: '13px', color: '#16a34a', fontWeight: '600', marginBottom: '8px' }}>STEP 3: Write the answer</div>
                        <div style={{ 
                          fontFamily: 'Georgia, serif', 
                          fontSize: '20px', 
                          fontWeight: '700', 
                          color: '#166534',
                          paddingLeft: '12px'
                        }}>
                          (r, 3 − r/2)
                        </div>
                        <div style={{ fontSize: '14px', color: '#6b7280', marginTop: '8px', paddingLeft: '12px' }}>
                          Select the answer choice matching this form.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            
            default:
              return null;
          }
        })}
      </div>
    );
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: '#ffffff',
      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", sans-serif',
      color: '#1d1d1f',
      WebkitFontSmoothing: 'antialiased'
    }}>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        
        .module-card { transition: all 0.2s ease; cursor: pointer; }
        .module-card:hover { background: #f5f5f7; }
        
        .module-card { 
          transition: all 0.2s ease; 
          cursor: pointer;
        }
        .module-card:hover { 
          border-color: rgba(234, 88, 12, 0.4) !important;
          background: linear-gradient(135deg, rgba(234, 88, 12, 0.02), rgba(249, 115, 22, 0.02)) !important;
        }
        
        .lesson-row { 
          transition: all 0.2s ease; 
          cursor: pointer;
        }
        .lesson-row:hover { 
          background: rgba(234, 88, 12, 0.03);
        }
        
        .back-btn { transition: all 0.2s ease; }
        .back-btn:hover { opacity: 0.7; }
        
        .nav-link {
          transition: color 0.2s ease;
        }
        .nav-link:hover {
          color: #ea580c !important;
        }
        
        ::selection { background: rgba(234, 88, 12, 0.15); }
      `}</style>

      {/* Header */}
      <header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(0, 0, 0, 0.08)'
      }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          padding: '16px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div 
            onClick={() => { setView('modules'); setActiveModule(null); setActiveLesson(null); }}
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              cursor: 'pointer'
            }}
          >
            <span style={{
              fontSize: '18px',
              fontWeight: '600',
              color: '#1d1d1f',
              letterSpacing: '-0.3px'
            }}>
              Perform
            </span>
            <span style={{
              fontSize: '18px',
              fontWeight: '700',
              color: '#ea580c',
              letterSpacing: '-0.3px',
              marginLeft: '5px'
            }}>
              SAT
            </span>
          </div>
          
          <nav style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
            <a href="#" className="nav-link" style={{ 
              fontSize: '14px', 
              color: '#1d1d1f', 
              textDecoration: 'none',
              fontWeight: '500'
            }}>
              Math
            </a>
            <a href="#" className="nav-link" style={{ 
              fontSize: '14px', 
              color: '#9ca3af', 
              textDecoration: 'none',
              fontWeight: '400'
            }}>
              Reading & Writing
            </a>
            {user ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <span style={{ fontSize: '14px', color: '#6b7280' }}>{user.name}</span>
                <button
                  onClick={handleLogout}
                  style={{
                    background: 'none',
                    border: '1px solid rgba(0,0,0,0.1)',
                    padding: '8px 16px',
                    borderRadius: '8px',
                    fontSize: '14px',
                    color: '#6b7280',
                    cursor: 'pointer'
                  }}
                >
                  Log out
                </button>
              </div>
            ) : (
              <button
                onClick={() => setView('login')}
                style={{
                  background: '#ea580c',
                  border: 'none',
                  padding: '8px 20px',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontWeight: '500',
                  color: '#fff',
                  cursor: 'pointer'
                }}
              >
                Log in
              </button>
            )}
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '120px 24px 80px'
      }}>
        {view === 'modules' && (
          <>
            {/* Page Title */}
            <div style={{ marginBottom: '64px' }}>
              {user && (
                <p style={{
                  fontSize: '16px',
                  color: '#ea580c',
                  marginBottom: '8px',
                  fontWeight: '500'
                }}>
                  Welcome back, {user.name}
                </p>
              )}
              <h1 style={{
                fontSize: '52px',
                fontWeight: '700',
                letterSpacing: '-2px',
                color: '#1d1d1f',
                marginBottom: '16px'
              }}>
                SAT Math
              </h1>
              <p style={{
                fontSize: '18px',
                color: '#6b7280',
                lineHeight: 1.5
              }}>
                Master every concept. Outperform the competition.
              </p>
            </div>

            {/* Module Cards */}
            <div>
              {modules.map((module, idx) => {
                const moduleLessons = allLessons[module.id] || [];
                const progress = getModuleProgress(module.id, moduleLessons);
                return (
                <div
                  key={module.id}
                  className="module-card"
                  onClick={() => { setActiveModule(module.id); setView('list'); }}
                  style={{
                    padding: '28px 32px',
                    borderRadius: '12px',
                    border: progress === 100 ? '2px solid #10b981' : '1px solid rgba(0,0,0,0.08)',
                    marginBottom: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    background: progress === 100 ? 'linear-gradient(135deg, rgba(16, 185, 129, 0.03), rgba(16, 185, 129, 0.06))' : '#fff'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '20px', flex: 1 }}>
                    <span style={{
                      fontSize: '14px',
                      fontWeight: '600',
                      color: progress === 100 ? '#10b981' : '#ea580c',
                      fontFeatureSettings: '"tnum"',
                      minWidth: '24px'
                    }}>
                      {progress === 100 ? '✓' : idx + 1}
                    </span>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '6px' }}>
                        <h2 style={{
                          fontSize: '17px',
                          fontWeight: '600',
                          color: '#1d1d1f',
                          letterSpacing: '-0.2px'
                        }}>
                          {module.title}
                        </h2>
                        {progress === 100 && (
                          <span style={{
                            fontSize: '11px',
                            fontWeight: '700',
                            color: '#fff',
                            background: '#10b981',
                            padding: '4px 10px',
                            borderRadius: '12px',
                            letterSpacing: '0.5px'
                          }}>
                            COMPLETE
                          </span>
                        )}
                      </div>
                      <p style={{
                        fontSize: '15px',
                        color: '#6b7280',
                        lineHeight: 1.4,
                        marginBottom: progress > 0 && progress < 100 ? '12px' : '0'
                      }}>
                        {module.description}
                      </p>
                      {progress > 0 && progress < 100 && (
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                          <div style={{
                            flex: 1,
                            maxWidth: '200px',
                            height: '4px',
                            background: '#f3f4f6',
                            borderRadius: '2px',
                            overflow: 'hidden'
                          }}>
                            <div style={{
                              width: `${progress}%`,
                              height: '100%',
                              background: '#ea580c',
                              borderRadius: '2px'
                            }} />
                          </div>
                          <span style={{
                            fontSize: '12px',
                            fontWeight: '600',
                            color: '#ea580c'
                          }}>
                            {progress}%
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    flexShrink: 0,
                    marginLeft: '16px'
                  }}>
                    <span style={{ 
                      color: progress === 100 ? '#10b981' : '#ea580c',
                      fontSize: '18px'
                    }}>→</span>
                  </div>
                </div>
              );})}
            </div>
          </>
        )}

        {view === 'list' && (
          <>
            {/* Back + Title */}
            <div style={{ marginBottom: '48px' }}>
              <button
                className="back-btn"
                onClick={() => { setView('modules'); setActiveModule(null); }}
                style={{
                  background: 'none',
                  border: 'none',
                  padding: 0,
                  fontSize: '14px',
                  color: '#ea580c',
                  cursor: 'pointer',
                  marginBottom: '32px',
                  fontWeight: '500'
                }}
              >
                ← All Modules
              </button>
              
              {/* Progress Section */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                marginBottom: '24px'
              }}>
                <div style={{
                  flex: 1,
                  height: '8px',
                  background: '#f3f4f6',
                  borderRadius: '4px',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    width: `${getModuleProgress(activeModule, currentModuleLessons)}%`,
                    height: '100%',
                    background: 'linear-gradient(90deg, #ea580c, #f97316)',
                    borderRadius: '4px',
                    transition: 'width 0.3s ease'
                  }} />
                </div>
                <span style={{
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#ea580c',
                  minWidth: '45px'
                }}>
                  {getModuleProgress(activeModule, currentModuleLessons)}%
                </span>
              </div>
              
              <h1 style={{
                fontSize: '40px',
                fontWeight: '700',
                letterSpacing: '-1px',
                color: '#1d1d1f',
                marginBottom: '12px'
              }}>
                {currentModuleInfo?.title}
              </h1>
              <p style={{
                fontSize: '16px',
                color: '#6b7280'
              }}>
                {currentModuleLessons.length} lessons
              </p>
            </div>

            {/* Sections */}
            {Object.entries(sections).map(([sectionName, sectionLessons], sectionIdx) => (
              <div key={sectionIdx} style={{ marginBottom: '48px' }}>
                <h2 style={{
                  fontSize: '13px',
                  fontWeight: '600',
                  color: '#ea580c',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  marginBottom: '16px'
                }}>
                  {sectionName}
                </h2>
                
                <div style={{
                  background: '#fff',
                  borderRadius: '12px',
                  border: '1px solid rgba(0,0,0,0.08)',
                  overflow: 'hidden'
                }}>
                  {sectionLessons.map((lesson, idx) => (
                    <div
                      key={lesson.id}
                      className="lesson-row"
                      onClick={() => { setActiveLesson(lesson.id); setView('lesson'); }}
                      style={{
                        padding: '18px 24px',
                        display: 'flex',
                        alignItems: 'center',
                        borderBottom: idx < sectionLessons.length - 1 ? '1px solid rgba(0,0,0,0.06)' : 'none'
                      }}
                    >
                      <div style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '8px',
                        background: completedLessons[`${activeModule}-${lesson.id}`] 
                          ? '#10b981' 
                          : lesson.type === 'video' ? '#ea580c' : '#1d1d1f',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: '16px',
                        flexShrink: 0
                      }}>
                        <span style={{ 
                          color: '#fff', 
                          fontSize: completedLessons[`${activeModule}-${lesson.id}`] ? '14px' : '10px'
                        }}>
                          {completedLessons[`${activeModule}-${lesson.id}`] ? '✓' : lesson.type === 'video' ? '▶' : '◆'}
                        </span>
                      </div>
                      
                      <span style={{
                        flex: 1,
                        fontSize: '15px',
                        fontWeight: '500',
                        color: completedLessons[`${activeModule}-${lesson.id}`] ? '#9ca3af' : '#1d1d1f',
                        textDecoration: completedLessons[`${activeModule}-${lesson.id}`] ? 'none' : 'none'
                      }}>
                        {lesson.title}
                      </span>
                      
                      <span style={{
                        fontSize: '14px',
                        color: '#9ca3af'
                      }}>
                        {lesson.duration}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </>
        )}

        {view === 'login' && (
          <div style={{
            maxWidth: '400px',
            margin: '0 auto',
            paddingTop: '40px'
          }}>
            <button
              className="back-btn"
              onClick={() => setView('modules')}
              style={{
                background: 'none',
                border: 'none',
                padding: 0,
                fontSize: '14px',
                color: '#ea580c',
                cursor: 'pointer',
                marginBottom: '32px',
                fontWeight: '500'
              }}
            >
              ← Back
            </button>
            
            <h1 style={{
              fontSize: '36px',
              fontWeight: '700',
              letterSpacing: '-1px',
              color: '#1d1d1f',
              marginBottom: '8px'
            }}>
              {isSignUp ? 'Create account' : 'Welcome back'}
            </h1>
            <p style={{
              fontSize: '16px',
              color: '#6b7280',
              marginBottom: '32px'
            }}>
              {isSignUp ? 'Start your SAT prep journey' : 'Log in to continue learning'}
            </p>

            <form onSubmit={isSignUp ? handleSignUp : handleLogin}>
              {isSignUp && (
                <div style={{ marginBottom: '20px' }}>
                  <label style={{
                    display: 'block',
                    fontSize: '14px',
                    fontWeight: '500',
                    color: '#1d1d1f',
                    marginBottom: '8px'
                  }}>
                    First name
                  </label>
                  <input
                    type="text"
                    value={loginForm.name}
                    onChange={(e) => setLoginForm({ ...loginForm, name: e.target.value })}
                    placeholder="Alex"
                    style={{
                      width: '100%',
                      padding: '14px 16px',
                      fontSize: '16px',
                      border: '1px solid rgba(0,0,0,0.1)',
                      borderRadius: '10px',
                      outline: 'none',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>
              )}
              
              <div style={{ marginBottom: '20px' }}>
                <label style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: '500',
                  color: '#1d1d1f',
                  marginBottom: '8px'
                }}>
                  Email
                </label>
                <input
                  type="email"
                  value={loginForm.email}
                  onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
                  placeholder="alex@example.com"
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    fontSize: '16px',
                    border: '1px solid rgba(0,0,0,0.1)',
                    borderRadius: '10px',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                />
              </div>
              
              <div style={{ marginBottom: '24px' }}>
                <label style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: '500',
                  color: '#1d1d1f',
                  marginBottom: '8px'
                }}>
                  Password
                </label>
                <input
                  type="password"
                  value={loginForm.password}
                  onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                  placeholder="••••••••"
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    fontSize: '16px',
                    border: '1px solid rgba(0,0,0,0.1)',
                    borderRadius: '10px',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                />
              </div>

              {loginError && (
                <p style={{
                  color: '#dc2626',
                  fontSize: '14px',
                  marginBottom: '16px'
                }}>
                  {loginError}
                </p>
              )}
              
              <button
                type="submit"
                style={{
                  width: '100%',
                  padding: '14px',
                  fontSize: '16px',
                  fontWeight: '600',
                  color: '#fff',
                  background: '#ea580c',
                  border: 'none',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  marginBottom: '24px'
                }}
              >
                {isSignUp ? 'Create account' : 'Log in'}
              </button>
            </form>
            
            <p style={{
              textAlign: 'center',
              fontSize: '14px',
              color: '#6b7280'
            }}>
              {isSignUp ? 'Already have an account? ' : "Don't have an account? "}
              <button
                onClick={() => {
                  setIsSignUp(!isSignUp);
                  setLoginError('');
                }}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#ea580c',
                  fontWeight: '500',
                  cursor: 'pointer',
                  padding: 0,
                  fontSize: '14px'
                }}
              >
                {isSignUp ? 'Log in' : 'Sign up'}
              </button>
            </p>
          </div>
        )}

        {view === 'lesson' && (
          <>
            {/* Lesson View */}
            <div style={{ marginBottom: '40px' }}>
              <button
                className="back-btn"
                onClick={() => { setView('list'); setActiveLesson(null); }}
                style={{
                  background: 'none',
                  border: 'none',
                  padding: 0,
                  fontSize: '14px',
                  color: '#ea580c',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  marginBottom: '32px',
                  fontWeight: '500'
                }}
              >
                ← {currentModuleInfo?.title}
              </button>
              
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '16px'
              }}>
                <span style={{
                  fontSize: '12px',
                  fontWeight: '600',
                  color: currentLesson?.type === 'video' ? '#ea580c' : '#6b7280',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}>
                  {currentLesson?.type === 'video' ? 'Video' : 'Lesson'}
                </span>
                <span style={{ color: '#d1d5db' }}>·</span>
                <span style={{
                  fontSize: '12px',
                  color: '#9ca3af'
                }}>
                  {currentLesson?.duration}
                </span>
              </div>
              
              <h1 style={{
                fontSize: '36px',
                fontWeight: '700',
                letterSpacing: '-1px',
                color: '#1d1d1f',
                lineHeight: 1.2
              }}>
                {currentLesson?.title}
              </h1>
            </div>

            {renderLessonContent()}

            {/* Navigation */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: '64px',
              paddingTop: '32px',
              borderTop: '1px solid rgba(0,0,0,0.08)'
            }}>
              <button
                onClick={() => {
                  const currentIndex = currentModuleLessons.findIndex(l => l.id === activeLesson);
                  if (currentIndex > 0) {
                    setActiveLesson(currentModuleLessons[currentIndex - 1].id);
                  }
                }}
                disabled={currentModuleLessons.findIndex(l => l.id === activeLesson) === 0}
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '14px',
                  fontWeight: '500',
                  color: currentModuleLessons.findIndex(l => l.id === activeLesson) === 0 ? '#d1d5db' : '#ea580c',
                  cursor: currentModuleLessons.findIndex(l => l.id === activeLesson) === 0 ? 'default' : 'pointer',
                  padding: '12px 0'
                }}
              >
                ← Previous
              </button>
              
              <button
                onClick={() => {
                  markLessonComplete(activeModule, activeLesson);
                  // Auto-advance to next lesson
                  const currentIndex = currentModuleLessons.findIndex(l => l.id === activeLesson);
                  if (currentIndex < currentModuleLessons.length - 1) {
                    setActiveLesson(currentModuleLessons[currentIndex + 1].id);
                  }
                }}
                style={{
                  background: completedLessons[`${activeModule}-${activeLesson}`] ? '#10b981' : '#ea580c',
                  border: 'none',
                  fontSize: '14px',
                  fontWeight: '500',
                  color: '#fff',
                  cursor: 'pointer',
                  padding: '12px 24px',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                {completedLessons[`${activeModule}-${activeLesson}`] ? '✓ Completed' : 'Mark Complete'}
              </button>
              
              <button
                onClick={() => {
                  const currentIndex = currentModuleLessons.findIndex(l => l.id === activeLesson);
                  if (currentIndex < currentModuleLessons.length - 1) {
                    setActiveLesson(currentModuleLessons[currentIndex + 1].id);
                  }
                }}
                disabled={currentModuleLessons.findIndex(l => l.id === activeLesson) === currentModuleLessons.length - 1}
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '14px',
                  fontWeight: '500',
                  color: currentModuleLessons.findIndex(l => l.id === activeLesson) === currentModuleLessons.length - 1 ? '#d1d5db' : '#ea580c',
                  cursor: currentModuleLessons.findIndex(l => l.id === activeLesson) === currentModuleLessons.length - 1 ? 'default' : 'pointer',
                  padding: '12px 0'
                }}
              >
                Next →
              </button>
            </div>
          </>
        )}
      </main>

      {/* Footer */}
      <footer style={{
        borderTop: '1px solid rgba(0, 0, 0, 0.08)',
        padding: '32px 24px'
      }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div>
            <span style={{ fontSize: '14px', color: '#1d1d1f', fontWeight: '500' }}>Perform</span>
            <span style={{ fontSize: '14px', color: '#ea580c', fontWeight: '600' }}>SAT</span>
          </div>
          <span style={{ fontSize: '13px', color: '#9ca3af' }}>© 2025</span>
        </div>
      </footer>
    </div>
  );
};

export default PerformSAT;
