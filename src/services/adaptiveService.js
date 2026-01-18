/**
 * Adaptive Difficulty Engine for Practice Mode
 * Adjusts question difficulty based on student performance
 */

/**
 * Determine the next question difficulty based on recent answers
 * @param {Array} recentAnswers - Array of { correct: boolean, difficulty: string }
 * @returns {string} 'easy' | 'medium' | 'hard'
 */
export const getAdaptiveDifficulty = (recentAnswers) => {
  if (!recentAnswers || recentAnswers.length === 0) {
    return 'medium'; // Start with medium
  }

  // Look at last 3 answers
  const last3 = recentAnswers.slice(-3);
  const correctCount = last3.filter(a => a.correct).length;

  // Adjust based on performance
  if (correctCount >= 3) {
    return 'hard'; // Doing great, challenge them
  } else if (correctCount >= 2) {
    return 'medium'; // Keep steady
  } else {
    return 'easy'; // Struggling, ease up
  }
};

/**
 * Calculate score multiplier based on difficulty
 * Rewards answering harder questions correctly
 * @param {string} difficulty - Question difficulty
 * @returns {number} Multiplier (1, 1.5, or 2)
 */
export const getScoreMultiplier = (difficulty) => {
  const multipliers = {
    easy: 1,
    medium: 1.5,
    hard: 2
  };
  return multipliers[difficulty] || 1;
};

/**
 * Calculate weighted score for a practice session
 * @param {Array} answers - Array of { correct: boolean, difficulty: string }
 * @returns {{ score: number, maxScore: number, percentage: number, breakdown: object }}
 */
export const calculateWeightedScore = (answers) => {
  let score = 0;
  let maxScore = 0;
  const breakdown = {
    easy: { correct: 0, total: 0 },
    medium: { correct: 0, total: 0 },
    hard: { correct: 0, total: 0 }
  };

  answers.forEach(answer => {
    const multiplier = getScoreMultiplier(answer.difficulty);
    maxScore += multiplier;

    if (breakdown[answer.difficulty]) {
      breakdown[answer.difficulty].total++;
      if (answer.correct) {
        breakdown[answer.difficulty].correct++;
        score += multiplier;
      }
    }
  });

  return {
    score: Math.round(score * 10) / 10,
    maxScore: Math.round(maxScore * 10) / 10,
    percentage: maxScore > 0 ? Math.round((score / maxScore) * 100) : 0,
    breakdown
  };
};

/**
 * Get difficulty badge info for UI display
 * @param {string} difficulty - 'easy' | 'medium' | 'hard'
 * @returns {{ label: string, color: string, bgColor: string }}
 */
export const getDifficultyBadge = (difficulty) => {
  const badges = {
    easy: {
      label: 'Easy',
      color: '#16a34a',
      bgColor: '#dcfce7'
    },
    medium: {
      label: 'Medium',
      color: '#ca8a04',
      bgColor: '#fef9c3'
    },
    hard: {
      label: 'Hard',
      color: '#dc2626',
      bgColor: '#fee2e2'
    }
  };
  return badges[difficulty] || badges.medium;
};

/**
 * Determine if student is ready for harder content
 * Based on performance across recent practice sessions
 * @param {Array} practiceHistory - Array of { bestScore: number, totalQuestions: number }
 * @returns {{ ready: boolean, recommendation: string }}
 */
export const assessReadiness = (practiceHistory) => {
  if (practiceHistory.length < 3) {
    return {
      ready: false,
      recommendation: 'Complete more practice sessions to assess your level.'
    };
  }

  const recentSessions = practiceHistory.slice(-5);
  const avgPercentage = recentSessions.reduce((sum, s) => {
    return sum + (s.bestScore / (s.totalQuestions || 5)) * 100;
  }, 0) / recentSessions.length;

  if (avgPercentage >= 80) {
    return {
      ready: true,
      recommendation: 'Great work! You\'re ready for harder challenges.'
    };
  } else if (avgPercentage >= 60) {
    return {
      ready: false,
      recommendation: 'Keep practicing at this level to build confidence.'
    };
  } else {
    return {
      ready: false,
      recommendation: 'Focus on reviewing the concepts before moving on.'
    };
  }
};
