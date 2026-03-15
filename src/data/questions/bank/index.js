import { algebraBank } from './algebra';
import { problemSolvingBank } from './problemSolving';
import { advancedMathBank } from './advancedMath';
import { geometryBank } from './geometry';
import { generatedOfficialBank } from './generatedOfficial';

export const questionBank = [
  ...algebraBank,
  ...problemSolvingBank,
  ...advancedMathBank,
  ...geometryBank,
  ...generatedOfficialBank,
];

const bankIndex = new Map(questionBank.map(q => [q.id, q]));
const skillIndex = new Map();
const domainIndex = new Map();
const difficultyIndex = new Map();

questionBank.forEach(q => {
  (q.skills || []).forEach(sid => {
    if (!skillIndex.has(sid)) skillIndex.set(sid, []);
    skillIndex.get(sid).push(q);
  });
  if (!domainIndex.has(q.domain)) domainIndex.set(q.domain, []);
  domainIndex.get(q.domain).push(q);

  if (!difficultyIndex.has(q.difficulty)) difficultyIndex.set(q.difficulty, []);
  difficultyIndex.get(q.difficulty).push(q);
});

const SKILL_ALIAS_MAP = {
  'mean-median-mode': ['calculate-mean', 'find-median', 'find-mode'],
  'statistics': ['calculate-mean', 'standard-deviation-concept'],
  'percents': ['percent-change', 'percent-of-value'],
  'probability': ['margin-of-error'],
  'two-way-tables': ['margin-of-error'],
  'linear-functions': ['slope-intercept-form', 'function-evaluation'],
  'function-interpretation': ['function-notation', 'slope-intercept-form'],
  'word-problems': ['word-problem-to-equation'],
  'linear-equations': ['word-problem-to-equation', 'slope-intercept-form'],
  'factoring': ['finding-roots-factoring', 'difference-of-squares'],
  'polynomial-operations': ['distributive-property', 'combining-like-terms'],
  'algebraic-manipulation': ['distributive-property', 'combining-like-terms'],
  'formula-rearrangement': ['function-evaluation'],
  'solving-equations': ['word-problem-to-equation'],
  'exponential-functions': ['exponential-growth-decay', 'exponential-y-intercept'],
  'half-life': ['exponential-growth-decay'],
  'radical-equations': ['simplifying-rational-expressions'],
  'absolute-value-equations': ['distributive-property'],
  'quadratics': ['identify-quadratic', 'finding-roots-factoring'],
  'quadratic-functions': ['identify-quadratic', 'vertex-formula'],
  'polygons': ['triangle-angle-sum'],
  'angles': ['triangle-angle-sum'],
  'triangles': ['pythagorean-theorem', 'triangle-angle-sum'],
  'right-triangles': ['pythagorean-theorem', 'soh-cah-toa'],
  'circles': ['circle-equation', 'circle-area'],
  'volume': ['volume-prism', 'volume-sphere'],
  'trigonometry': ['soh-cah-toa', 'special-right-triangles'],
  'data-interpretation': ['calculate-mean', 'standard-deviation-concept'],
  'scatterplots': ['calculate-mean'],
  'exponents': ['exponent-laws', 'zero-negative-exponents'],
};

function resolveSkillIds(rawIds) {
  const resolved = new Set();
  for (const id of rawIds) {
    if (skillIndex.has(id)) {
      resolved.add(id);
    }
    const aliases = SKILL_ALIAS_MAP[id];
    if (aliases) {
      aliases.forEach(a => resolved.add(a));
    }
  }
  return [...resolved];
}

export const getQuestionById = (id) => bankIndex.get(id) || null;

export const getQuestionsBySkillIds = (skillIds, opts = {}) => {
  const { difficulty, excludeIds = [], limit } = opts;
  const resolved = resolveSkillIds(skillIds);
  const seen = new Set();
  let results = [];
  resolved.forEach(sid => {
    (skillIndex.get(sid) || []).forEach(q => {
      if (!seen.has(q.id)) {
        seen.add(q.id);
        results.push(q);
      }
    });
  });
  if (difficulty) results = results.filter(q => q.difficulty === difficulty);
  if (excludeIds.length) results = results.filter(q => !excludeIds.includes(q.id));
  if (limit) results = results.slice(0, limit);
  return results;
};

export const getQuestionsByDomain = (domain, opts = {}) => {
  const { difficulty, excludeIds = [], limit } = opts;
  let results = [...(domainIndex.get(domain) || [])];
  if (difficulty) results = results.filter(q => q.difficulty === difficulty);
  if (excludeIds.length) results = results.filter(q => !excludeIds.includes(q.id));
  if (limit) results = results.slice(0, limit);
  return results;
};

const shuffle = (arr) => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

export const getTargetedWeaknessSet = ({ weakSkills = [], errorTypes = [], difficultyMix, count = 10, excludeIds = [] }) => {
  const skillIds = weakSkills.map(w => w.skillId || w.skill || w);
  let pool = getQuestionsBySkillIds(skillIds, { excludeIds });

  if (pool.length === 0 && weakSkills.length > 0) {
    const domains = [...new Set(weakSkills.map(w => w.domain).filter(Boolean))];
    domains.forEach(d => {
      pool.push(...getQuestionsByDomain(d, { excludeIds }));
    });
  }

  if (difficultyMix) {
    const easy = shuffle(pool.filter(q => q.difficulty === 'easy')).slice(0, Math.ceil(count * (difficultyMix.easy || 0.3)));
    const medium = shuffle(pool.filter(q => q.difficulty === 'medium')).slice(0, Math.ceil(count * (difficultyMix.medium || 0.45)));
    const hard = shuffle(pool.filter(q => q.difficulty === 'hard')).slice(0, Math.ceil(count * (difficultyMix.hard || 0.25)));
    return shuffle([...easy, ...medium, ...hard]).slice(0, count);
  }

  return shuffle(pool).slice(0, count);
};

export const getBankStats = () => {
  const stats = { total: questionBank.length, byDomain: {}, byDifficulty: {}, bySkill: {} };
  domainIndex.forEach((qs, d) => { stats.byDomain[d] = qs.length; });
  difficultyIndex.forEach((qs, d) => { stats.byDifficulty[d] = qs.length; });
  skillIndex.forEach((qs, sid) => { stats.bySkill[sid] = qs.length; });
  return stats;
};
