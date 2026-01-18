/**
 * Skill Taxonomy for SAT Math Diagnostic System
 *
 * Organized by SAT College Board domains:
 * - Algebra (Heart of Algebra)
 * - Problem Solving (Problem Solving and Data Analysis)
 * - Advanced Math (Passport to Advanced Math)
 * - Geometry (Additional Topics in Math)
 */

export const skillTaxonomy = {
  // Domain definitions
  domains: {
    'algebra': {
      id: 'algebra',
      name: 'Algebra',
      description: 'Linear equations, inequalities, and systems',
      color: '#3b82f6', // blue
      satWeight: 0.35 // ~35% of SAT Math
    },
    'problem-solving': {
      id: 'problem-solving',
      name: 'Problem Solving & Data Analysis',
      description: 'Ratios, percentages, and data interpretation',
      color: '#22c55e', // green
      satWeight: 0.25
    },
    'advanced-math': {
      id: 'advanced-math',
      name: 'Advanced Math',
      description: 'Quadratics, polynomials, and complex equations',
      color: '#a855f7', // purple
      satWeight: 0.25
    },
    'geometry': {
      id: 'geometry',
      name: 'Geometry & Trigonometry',
      description: 'Lines, angles, triangles, circles, and trig',
      color: '#f59e0b', // amber
      satWeight: 0.15
    }
  },

  // All skills (~76 total)
  skills: {
    // ============================================
    // ALGEBRA DOMAIN (~20 skills)
    // ============================================

    // Linear Equations - Deriving Equations (5 skills)
    'slope-from-points': {
      id: 'slope-from-points',
      name: 'Finding Slope from Two Points',
      domain: 'algebra',
      modules: ['linear-equations'],
      sections: ['Deriving Equations', 'Parallel Lines', 'Perpendicular Lines'],
      satConcept: 'Linear functions'
    },
    'slope-intercept-form': {
      id: 'slope-intercept-form',
      name: 'Writing in Slope-Intercept Form',
      domain: 'algebra',
      modules: ['linear-equations'],
      sections: ['Deriving Equations'],
      satConcept: 'Linear equations'
    },
    'word-problem-to-equation': {
      id: 'word-problem-to-equation',
      name: 'Translating Word Problems to Equations',
      domain: 'algebra',
      modules: ['linear-equations', 'systems'],
      sections: ['Deriving Equations', 'Setting Up Systems'],
      satConcept: 'Creating linear models'
    },
    'table-to-equation': {
      id: 'table-to-equation',
      name: 'Finding Equation from Table',
      domain: 'algebra',
      modules: ['linear-equations'],
      sections: ['Deriving Equations'],
      satConcept: 'Linear functions from data'
    },
    'function-evaluation': {
      id: 'function-evaluation',
      name: 'Evaluating Functions at a Value',
      domain: 'algebra',
      modules: ['linear-equations', 'functions'],
      sections: ['Deriving Equations', 'Fundamentals'],
      satConcept: 'Function notation'
    },

    // Linear Equations - Parallel Lines (2 skills)
    'parallel-line-slope': {
      id: 'parallel-line-slope',
      name: 'Parallel Lines Have Equal Slopes',
      domain: 'algebra',
      modules: ['linear-equations'],
      sections: ['Parallel Lines'],
      satConcept: 'Parallel lines in coordinate geometry'
    },
    'writing-parallel-equation': {
      id: 'writing-parallel-equation',
      name: 'Writing Equation of Parallel Line',
      domain: 'algebra',
      modules: ['linear-equations'],
      sections: ['Parallel Lines'],
      satConcept: 'Linear equations'
    },

    // Linear Equations - Perpendicular Lines (2 skills)
    'perpendicular-negative-reciprocal': {
      id: 'perpendicular-negative-reciprocal',
      name: 'Perpendicular Slopes are Negative Reciprocals',
      domain: 'algebra',
      modules: ['linear-equations'],
      sections: ['Perpendicular Lines'],
      satConcept: 'Perpendicular lines in coordinate geometry'
    },
    'writing-perpendicular-equation': {
      id: 'writing-perpendicular-equation',
      name: 'Writing Equation of Perpendicular Line',
      domain: 'algebra',
      modules: ['linear-equations'],
      sections: ['Perpendicular Lines'],
      satConcept: 'Linear equations'
    },

    // Systems of Equations (6 skills)
    'system-solution-types': {
      id: 'system-solution-types',
      name: 'Identifying Solution Types (None/One/Infinite)',
      domain: 'algebra',
      modules: ['systems'],
      sections: ['Introduction', 'Infinite Solutions', 'DESMOS Method'],
      satConcept: 'Systems of linear equations'
    },
    'setting-up-systems': {
      id: 'setting-up-systems',
      name: 'Setting Up Systems from Word Problems',
      domain: 'algebra',
      modules: ['systems'],
      sections: ['Setting Up Systems'],
      satConcept: 'Creating systems of equations'
    },
    'substitution-method': {
      id: 'substitution-method',
      name: 'Solving by Substitution',
      domain: 'algebra',
      modules: ['systems'],
      sections: ['Substitution Method'],
      satConcept: 'Solving systems algebraically'
    },
    'elimination-method': {
      id: 'elimination-method',
      name: 'Solving by Elimination',
      domain: 'algebra',
      modules: ['systems'],
      sections: ['Elimination Method'],
      satConcept: 'Solving systems algebraically'
    },
    'graphing-systems': {
      id: 'graphing-systems',
      name: 'Solving Systems Graphically',
      domain: 'algebra',
      modules: ['systems'],
      sections: ['DESMOS Method'],
      satConcept: 'Graphical solutions'
    },
    'infinite-solutions-condition': {
      id: 'infinite-solutions-condition',
      name: 'Conditions for Infinite Solutions',
      domain: 'algebra',
      modules: ['systems'],
      sections: ['Infinite Solutions'],
      satConcept: 'Dependent systems'
    },

    // Functions (5 skills)
    'function-notation': {
      id: 'function-notation',
      name: 'Understanding Function Notation',
      domain: 'algebra',
      modules: ['functions'],
      sections: ['Fundamentals'],
      satConcept: 'Function notation'
    },
    'domain-restrictions': {
      id: 'domain-restrictions',
      name: 'Finding Domain Restrictions',
      domain: 'algebra',
      modules: ['functions'],
      sections: ['Fundamentals'],
      satConcept: 'Domain of functions'
    },
    'function-composition': {
      id: 'function-composition',
      name: 'Composing Functions f(g(x))',
      domain: 'algebra',
      modules: ['functions'],
      sections: ['Simple Function Problems', 'Complex Function Problems'],
      satConcept: 'Function operations'
    },
    'function-transformations': {
      id: 'function-transformations',
      name: 'Function Transformations (Shifts, Stretches)',
      domain: 'algebra',
      modules: ['functions', 'transformations'],
      sections: ['Complex Function Problems', 'Fundamentals', 'Transformations from Graph', 'Transformations from Table', 'Transformations from Expression', 'Difficult Transformations'],
      satConcept: 'Transformations of functions'
    },
    'finding-function-from-conditions': {
      id: 'finding-function-from-conditions',
      name: 'Finding Function from Given Conditions',
      domain: 'algebra',
      modules: ['functions'],
      sections: ['Complex Function Problems'],
      satConcept: 'Function properties'
    },

    // ============================================
    // PROBLEM SOLVING DOMAIN (~15 skills)
    // ============================================

    // Percents (5 skills)
    'percent-decimal-conversion': {
      id: 'percent-decimal-conversion',
      name: 'Converting Between Percents and Decimals',
      domain: 'problem-solving',
      modules: ['percents'],
      sections: ['Percent Fundamentals'],
      satConcept: 'Percent calculations'
    },
    'percent-of-value': {
      id: 'percent-of-value',
      name: 'Finding Percent of a Value',
      domain: 'problem-solving',
      modules: ['percents'],
      sections: ['Percent Of Questions'],
      satConcept: 'Percent calculations'
    },
    'percent-change': {
      id: 'percent-change',
      name: 'Calculating Percent Change',
      domain: 'problem-solving',
      modules: ['percents'],
      sections: ['Percent Change Questions'],
      satConcept: 'Percent increase/decrease'
    },
    'percent-word-problems': {
      id: 'percent-word-problems',
      name: 'Percent Word Problems',
      domain: 'problem-solving',
      modules: ['percents'],
      sections: ['Percent Model Questions'],
      satConcept: 'Percent applications'
    },
    'successive-percent-change': {
      id: 'successive-percent-change',
      name: 'Successive Percent Changes',
      domain: 'problem-solving',
      modules: ['percents'],
      sections: ['Percent Change Questions'],
      satConcept: 'Compound percent change'
    },

    // Statistics (7 skills)
    'calculate-mean': {
      id: 'calculate-mean',
      name: 'Calculating Mean (Average)',
      domain: 'problem-solving',
      modules: ['statistics'],
      sections: ['Mean'],
      satConcept: 'Center measures'
    },
    'weighted-mean': {
      id: 'weighted-mean',
      name: 'Calculating Weighted Average',
      domain: 'problem-solving',
      modules: ['statistics'],
      sections: ['Mean'],
      satConcept: 'Weighted averages'
    },
    'find-median': {
      id: 'find-median',
      name: 'Finding Median',
      domain: 'problem-solving',
      modules: ['statistics'],
      sections: ['Median'],
      satConcept: 'Center measures'
    },
    'find-mode': {
      id: 'find-mode',
      name: 'Finding Mode',
      domain: 'problem-solving',
      modules: ['statistics'],
      sections: ['Mode'],
      satConcept: 'Center measures'
    },
    'range-calculation': {
      id: 'range-calculation',
      name: 'Calculating Range',
      domain: 'problem-solving',
      modules: ['statistics'],
      sections: ['Range'],
      satConcept: 'Spread measures'
    },
    'standard-deviation-concept': {
      id: 'standard-deviation-concept',
      name: 'Understanding Standard Deviation',
      domain: 'problem-solving',
      modules: ['statistics'],
      sections: ['Standard Deviation'],
      satConcept: 'Spread measures'
    },
    'margin-of-error': {
      id: 'margin-of-error',
      name: 'Interpreting Margin of Error',
      domain: 'problem-solving',
      modules: ['statistics'],
      sections: ['Margin of Error'],
      satConcept: 'Statistical inference'
    },

    // Dimensional Analysis (3 skills)
    'unit-conversion': {
      id: 'unit-conversion',
      name: 'Basic Unit Conversion',
      domain: 'problem-solving',
      modules: ['dimensional-analysis'],
      sections: ['Unit Conversion Basics'],
      satConcept: 'Unit conversion'
    },
    'squared-cubed-units': {
      id: 'squared-cubed-units',
      name: 'Converting Squared and Cubed Units',
      domain: 'problem-solving',
      modules: ['dimensional-analysis'],
      sections: ['Squared & Cubic Units'],
      satConcept: 'Area and volume unit conversion'
    },
    'rate-conversion': {
      id: 'rate-conversion',
      name: 'Converting Rates (mph, per hour, etc.)',
      domain: 'problem-solving',
      modules: ['dimensional-analysis'],
      sections: ['Unit Conversion Basics'],
      satConcept: 'Rate conversions'
    },

    // ============================================
    // ADVANCED MATH DOMAIN (~18 skills)
    // ============================================

    // Quadratics (8 skills)
    'identify-quadratic': {
      id: 'identify-quadratic',
      name: 'Identifying Quadratic Functions',
      domain: 'advanced-math',
      modules: ['quadratics'],
      sections: ['Overview'],
      satConcept: 'Quadratic functions'
    },
    'parabola-direction': {
      id: 'parabola-direction',
      name: 'Determining Parabola Direction (Opens Up/Down)',
      domain: 'advanced-math',
      modules: ['quadratics'],
      sections: ['Overview'],
      satConcept: 'Quadratic graphs'
    },
    'finding-roots-factoring': {
      id: 'finding-roots-factoring',
      name: 'Finding Roots by Factoring',
      domain: 'advanced-math',
      modules: ['quadratics'],
      sections: ['Roots'],
      satConcept: 'Solving quadratics'
    },
    'roots-from-factors': {
      id: 'roots-from-factors',
      name: 'Writing Equation from Roots',
      domain: 'advanced-math',
      modules: ['quadratics'],
      sections: ['Roots', 'Deriving Standard Form'],
      satConcept: 'Quadratic equations'
    },
    'vertex-formula': {
      id: 'vertex-formula',
      name: 'Finding Vertex Using x = -b/2a',
      domain: 'advanced-math',
      modules: ['quadratics'],
      sections: ['Vertex'],
      satConcept: 'Quadratic vertex'
    },
    'vertex-form': {
      id: 'vertex-form',
      name: 'Understanding Vertex Form a(x-h)² + k',
      domain: 'advanced-math',
      modules: ['quadratics'],
      sections: ['Vertex', 'Deriving Standard Form'],
      satConcept: 'Quadratic forms'
    },
    'discriminant-analysis': {
      id: 'discriminant-analysis',
      name: 'Using Discriminant (b² - 4ac)',
      domain: 'advanced-math',
      modules: ['quadratics'],
      sections: ['Discriminant'],
      satConcept: 'Nature of solutions'
    },
    'converting-quadratic-forms': {
      id: 'converting-quadratic-forms',
      name: 'Converting Between Quadratic Forms',
      domain: 'advanced-math',
      modules: ['quadratics'],
      sections: ['Deriving Standard Form'],
      satConcept: 'Quadratic forms'
    },

    // Exponents (5 skills)
    'exponent-laws': {
      id: 'exponent-laws',
      name: 'Laws of Exponents (Product, Quotient, Power)',
      domain: 'advanced-math',
      modules: ['exponents'],
      sections: ['Laws of Exponents'],
      satConcept: 'Exponent properties'
    },
    'zero-negative-exponents': {
      id: 'zero-negative-exponents',
      name: 'Zero and Negative Exponents',
      domain: 'advanced-math',
      modules: ['exponents'],
      sections: ['Laws of Exponents'],
      satConcept: 'Exponent properties'
    },
    'comparing-exponentials': {
      id: 'comparing-exponentials',
      name: 'Comparing Exponential Expressions',
      domain: 'advanced-math',
      modules: ['exponents'],
      sections: ['Comparing Exponential Expressions'],
      satConcept: 'Exponential comparison'
    },
    'exponential-growth-decay': {
      id: 'exponential-growth-decay',
      name: 'Exponential Growth and Decay',
      domain: 'advanced-math',
      modules: ['exponents'],
      sections: ['Exponential Functions'],
      satConcept: 'Exponential models'
    },
    'exponential-y-intercept': {
      id: 'exponential-y-intercept',
      name: 'Finding Y-Intercept of Exponential Function',
      domain: 'advanced-math',
      modules: ['exponents'],
      sections: ['Exponential Functions'],
      satConcept: 'Exponential functions'
    },

    // Equivalent Expressions (5 skills)
    'distributive-property': {
      id: 'distributive-property',
      name: 'Using Distributive Property',
      domain: 'advanced-math',
      modules: ['equivalent-expressions'],
      sections: ['Equivalent Expressions'],
      satConcept: 'Algebraic manipulation'
    },
    'combining-like-terms': {
      id: 'combining-like-terms',
      name: 'Combining Like Terms',
      domain: 'advanced-math',
      modules: ['equivalent-expressions'],
      sections: ['Equivalent Expressions'],
      satConcept: 'Algebraic simplification'
    },
    'difference-of-squares': {
      id: 'difference-of-squares',
      name: 'Recognizing Difference of Squares',
      domain: 'advanced-math',
      modules: ['equivalent-expressions', 'quadratics'],
      sections: ['Equivalent Expressions', 'Roots'],
      satConcept: 'Special products'
    },
    'perfect-square-trinomial': {
      id: 'perfect-square-trinomial',
      name: 'Recognizing Perfect Square Trinomials',
      domain: 'advanced-math',
      modules: ['equivalent-expressions'],
      sections: ['Equivalent Expressions'],
      satConcept: 'Special products'
    },
    'simplifying-rational-expressions': {
      id: 'simplifying-rational-expressions',
      name: 'Simplifying Rational Expressions',
      domain: 'advanced-math',
      modules: ['equivalent-expressions'],
      sections: ['Equivalent Expressions'],
      satConcept: 'Rational expressions'
    },

    // ============================================
    // GEOMETRY DOMAIN (~23 skills)
    // ============================================

    // Triangles (8 skills)
    'triangle-angle-sum': {
      id: 'triangle-angle-sum',
      name: 'Triangle Angle Sum (180°)',
      domain: 'geometry',
      modules: ['triangles'],
      sections: ['Triangle Fundamentals', 'Angles of a Triangle'],
      satConcept: 'Triangle properties'
    },
    'triangle-types': {
      id: 'triangle-types',
      name: 'Identifying Triangle Types',
      domain: 'geometry',
      modules: ['triangles'],
      sections: ['Triangle Fundamentals'],
      satConcept: 'Triangle classification'
    },
    'triangle-inequality': {
      id: 'triangle-inequality',
      name: 'Triangle Inequality Theorem',
      domain: 'geometry',
      modules: ['triangles'],
      sections: ['Triangle Fundamentals'],
      satConcept: 'Triangle properties'
    },
    'triangle-area': {
      id: 'triangle-area',
      name: 'Calculating Triangle Area (½bh)',
      domain: 'geometry',
      modules: ['triangles'],
      sections: ['Area of a Triangle'],
      satConcept: 'Area formulas'
    },
    'similar-triangles': {
      id: 'similar-triangles',
      name: 'Similar Triangle Proportions',
      domain: 'geometry',
      modules: ['triangles'],
      sections: ['Similar Triangles'],
      satConcept: 'Similarity'
    },
    'pythagorean-theorem': {
      id: 'pythagorean-theorem',
      name: 'Applying Pythagorean Theorem',
      domain: 'geometry',
      modules: ['triangles'],
      sections: ['Right Triangles & Pythagorean Theorem'],
      satConcept: 'Right triangles'
    },
    'soh-cah-toa': {
      id: 'soh-cah-toa',
      name: 'Trigonometric Ratios (SOH-CAH-TOA)',
      domain: 'geometry',
      modules: ['triangles'],
      sections: ['Trigonometric Ratios'],
      satConcept: 'Trigonometry'
    },
    'special-right-triangles': {
      id: 'special-right-triangles',
      name: 'Special Right Triangles (30-60-90, 45-45-90)',
      domain: 'geometry',
      modules: ['triangles'],
      sections: ['Special Right Triangles'],
      satConcept: 'Special triangles'
    },

    // Circles (8 skills)
    'circle-parts': {
      id: 'circle-parts',
      name: 'Radius, Diameter, Chord Relationships',
      domain: 'geometry',
      modules: ['circles'],
      sections: ['Circle Fundamentals'],
      satConcept: 'Circle properties'
    },
    'circle-area': {
      id: 'circle-area',
      name: 'Calculating Circle Area (πr²)',
      domain: 'geometry',
      modules: ['circles'],
      sections: ['Area Problems'],
      satConcept: 'Area formulas'
    },
    'circumference': {
      id: 'circumference',
      name: 'Calculating Circumference (2πr)',
      domain: 'geometry',
      modules: ['circles'],
      sections: ['Circumference & Arc Length'],
      satConcept: 'Circle perimeter'
    },
    'arc-length': {
      id: 'arc-length',
      name: 'Calculating Arc Length',
      domain: 'geometry',
      modules: ['circles'],
      sections: ['Circumference & Arc Length'],
      satConcept: 'Arc measurements'
    },
    'sector-area': {
      id: 'sector-area',
      name: 'Calculating Sector Area',
      domain: 'geometry',
      modules: ['circles'],
      sections: ['Sector Area'],
      satConcept: 'Sector calculations'
    },
    'circle-equation': {
      id: 'circle-equation',
      name: 'Standard Form Circle Equation',
      domain: 'geometry',
      modules: ['circles'],
      sections: ['Equation of a Circle', 'Converting to Standard Form'],
      satConcept: 'Circle equations'
    },
    'completing-square-circles': {
      id: 'completing-square-circles',
      name: 'Completing the Square for Circles',
      domain: 'geometry',
      modules: ['circles'],
      sections: ['Converting to Standard Form'],
      satConcept: 'Circle equations'
    },
    'tangent-lines': {
      id: 'tangent-lines',
      name: 'Tangent Line Properties',
      domain: 'geometry',
      modules: ['circles'],
      sections: ['Tangent Lines'],
      satConcept: 'Circle tangents'
    },

    // Volume (4 skills)
    'volume-prism': {
      id: 'volume-prism',
      name: 'Volume of Prisms and Cylinders',
      domain: 'geometry',
      modules: ['volume'],
      sections: ['Fundamentals', 'Rectangular Prism', 'Cylinder', 'Triangular Prism'],
      satConcept: 'Volume formulas'
    },
    'volume-pyramid-cone': {
      id: 'volume-pyramid-cone',
      name: 'Volume of Pyramids and Cones',
      domain: 'geometry',
      modules: ['volume'],
      sections: ['Cone'],
      satConcept: 'Volume formulas'
    },
    'volume-sphere': {
      id: 'volume-sphere',
      name: 'Volume of Spheres',
      domain: 'geometry',
      modules: ['volume'],
      sections: ['Sphere'],
      satConcept: 'Volume formulas'
    },
    'volume-scaling': {
      id: 'volume-scaling',
      name: 'How Volume Scales with Dimensions',
      domain: 'geometry',
      modules: ['volume'],
      sections: ['Fundamentals', 'Cube'],
      satConcept: 'Scaling properties'
    },

    // Radians and Degrees (3 skills)
    'degrees-to-radians': {
      id: 'degrees-to-radians',
      name: 'Converting Degrees to Radians',
      domain: 'geometry',
      modules: ['radians-degrees'],
      sections: ['Converting Angles'],
      satConcept: 'Angle measures'
    },
    'radians-to-degrees': {
      id: 'radians-to-degrees',
      name: 'Converting Radians to Degrees',
      domain: 'geometry',
      modules: ['radians-degrees'],
      sections: ['Converting Angles'],
      satConcept: 'Angle measures'
    },
    'radian-measure-understanding': {
      id: 'radian-measure-understanding',
      name: 'Understanding Radian Measure',
      domain: 'geometry',
      modules: ['radians-degrees'],
      sections: ['Converting Angles'],
      satConcept: 'Radian measure'
    }
  }
};

/**
 * Get all skills for a specific module
 */
export const getSkillsForModule = (moduleId) => {
  return Object.values(skillTaxonomy.skills).filter(
    skill => skill.modules.includes(moduleId)
  );
};

/**
 * Get all skills for a specific section
 */
export const getSkillsForSection = (moduleId, sectionName) => {
  return Object.values(skillTaxonomy.skills).filter(
    skill => skill.modules.includes(moduleId) && skill.sections.includes(sectionName)
  );
};

/**
 * Get skill by ID
 */
export const getSkillById = (skillId) => {
  return skillTaxonomy.skills[skillId] || null;
};

/**
 * Get all skills for a domain
 */
export const getSkillsForDomain = (domainId) => {
  return Object.values(skillTaxonomy.skills).filter(
    skill => skill.domain === domainId
  );
};

/**
 * Get domain info
 */
export const getDomainInfo = (domainId) => {
  return skillTaxonomy.domains[domainId] || null;
};

/**
 * Count total skills
 */
export const getTotalSkillCount = () => {
  return Object.keys(skillTaxonomy.skills).length;
};

export default skillTaxonomy;
