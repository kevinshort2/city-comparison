/* ============================================================
   City Comparison — App Logic
   Loaded after data.js which provides: CITIES, SCORES,
   DEFAULT_WEIGHTS, CATEGORIES, BASELINE_CITY
   ============================================================ */

// ---------------------------------------------------------------------------
// 1. Weighted Scoring Engine
// ---------------------------------------------------------------------------

/**
 * Calculate a weighted average score (0-10) for a city.
 * @param {string} cityId - Key into SCORES
 * @param {Object} weights - { categoryKey: number } where numbers sum to 100
 * @returns {number} Weighted score rounded to 2 decimal places
 */
function calculateWeightedScore(cityId, weights) {
  const cityScores = SCORES[cityId];
  if (!cityScores) return 0;

  const totalWeight = Object.values(weights).reduce((sum, w) => sum + w, 0);
  if (totalWeight === 0) return 0;

  let weightedSum = 0;
  for (const [category, weight] of Object.entries(weights)) {
    const score = cityScores[category] ?? 0;
    weightedSum += score * weight;
  }

  return Math.round((weightedSum / totalWeight) * 100) / 100;
}

/**
 * Rank all cities by weighted score.
 * @param {Object} weights - { categoryKey: number }
 * @returns {Array<{cityId: string, score: number, rank: number}>}
 */
function rankCities(weights) {
  const results = Object.keys(SCORES).map((cityId) => ({
    cityId,
    score: calculateWeightedScore(cityId, weights),
  }));

  results.sort((a, b) => b.score - a.score);

  return results.map((entry, i) => ({
    ...entry,
    rank: i + 1,
  }));
}

/**
 * Get a city's rank within a single category (raw score comparison).
 * @param {string} cityId
 * @param {string} category
 * @returns {number} 1-based rank
 */
function getCategoryRank(cityId, category) {
  const entries = Object.keys(SCORES)
    .map((id) => ({ id, score: SCORES[id]?.[category] ?? 0 }))
    .sort((a, b) => b.score - a.score);

  const index = entries.findIndex((e) => e.id === cityId);
  return index === -1 ? entries.length : index + 1;
}

// ---------------------------------------------------------------------------
// 2. Weight Slider Interactivity
// ---------------------------------------------------------------------------

function getWeightsFromSliders() {
  const sliders = document.querySelectorAll('.weight-slider');
  const weights = {};
  sliders.forEach((slider) => {
    weights[slider.dataset.category] = parseFloat(slider.value);
  });
  return weights;
}

function normalizeWeights(changedSlider) {
  const sliders = Array.from(document.querySelectorAll('.weight-slider'));
  const changedCategory = changedSlider.dataset.category;
  const changedValue = parseFloat(changedSlider.value);

  const others = sliders.filter((s) => s.dataset.category !== changedCategory);
  const othersTotal = others.reduce((sum, s) => sum + parseFloat(s.value), 0);
  const remaining = 100 - changedValue;

  if (othersTotal === 0) {
    // Distribute remaining equally among others
    const each = remaining / others.length;
    others.forEach((s) => {
      s.value = Math.round(each);
    });
  } else {
    // Scale others proportionally
    const scale = remaining / othersTotal;
    others.forEach((s) => {
      s.value = Math.round(parseFloat(s.value) * scale);
    });
  }

  // Fix rounding drift so total is exactly 100
  const currentTotal = sliders.reduce((sum, s) => sum + parseFloat(s.value), 0);
  if (currentTotal !== 100 && others.length > 0) {
    const diff = 100 - currentTotal;
    others[0].value = parseFloat(others[0].value) + diff;
  }
}

function updateWeightDisplays() {
  document.querySelectorAll('.weight-slider').forEach((slider) => {
    const display = document.querySelector(
      `.weight-value[data-category="${slider.dataset.category}"]`
    );
    if (display) {
      display.textContent = `${Math.round(slider.value)}%`;
    }
  });
}

function renderRankingTable(rankings) {
  const table = document.getElementById('ranking-table');
  if (!table) return;

  const tbody = table.querySelector('tbody') || table;
  tbody.innerHTML = '';

  rankings.forEach(({ cityId, score, rank }) => {
    const city = CITIES[cityId];
    if (!city) return;

    const isBaseline = cityId === BASELINE_CITY;
    const tr = document.createElement('tr');
    if (isBaseline) tr.classList.add('baseline-highlight');

    tr.innerHTML = `
      <td class="rank-cell">${rank}</td>
      <td class="city-cell">
        <a href="${city.page || '#'}">${city.name}, ${city.state}</a>
        ${isBaseline ? '<span class="baseline-badge">Baseline</span>' : ''}
      </td>
      <td class="score-cell">${score.toFixed(1)}</td>
      <td class="bar-cell">
        <div class="score-bar" style="width: ${(score / 10) * 100}%"></div>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function onWeightChange(e) {
  normalizeWeights(e.target);
  updateWeightDisplays();
  const weights = getWeightsFromSliders();
  const rankings = rankCities(weights);
  renderRankingTable(rankings);
}

function initWeightSliders() {
  const sliders = document.querySelectorAll('.weight-slider');
  if (sliders.length === 0) return;

  sliders.forEach((slider) => {
    slider.addEventListener('input', onWeightChange);
  });

  // Initial render
  updateWeightDisplays();
  const weights = getWeightsFromSliders();
  const rankings = rankCities(weights);
  renderRankingTable(rankings);
}

// ---------------------------------------------------------------------------
// 3. Navigation
// ---------------------------------------------------------------------------

function initMobileNav() {
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.querySelector('.nav-menu');
  if (!toggle || !menu) return;

  toggle.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('nav-menu--open');
    toggle.setAttribute('aria-expanded', isOpen);
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!toggle.contains(e.target) && !menu.contains(e.target)) {
      menu.classList.remove('nav-menu--open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
}

function initNavDropdowns() {
  document.querySelectorAll('.nav-dropdown > a').forEach((trigger) => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const dropdown = trigger.parentElement;
      const wasOpen = dropdown.classList.contains('open');
      // Close all dropdowns first
      document.querySelectorAll('.nav-dropdown.open').forEach((d) => d.classList.remove('open'));
      if (!wasOpen) dropdown.classList.add('open');
    });
  });

  // Close dropdown on outside click
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-dropdown')) {
      document.querySelectorAll('.nav-dropdown.open').forEach((d) => d.classList.remove('open'));
    }
  });
}

function highlightActiveNavLink() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach((link) => {
    const href = link.getAttribute('href')?.split('/').pop() || '';
    if (href === currentPath) {
      link.classList.add('nav-link--active');
    } else {
      link.classList.remove('nav-link--active');
    }
  });
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

// ---------------------------------------------------------------------------
// 4. Comparison Table Enhancements
// ---------------------------------------------------------------------------

/**
 * Add baseline-highlight class to all table rows containing the baseline city.
 */
function highlightBaseline() {
  document.querySelectorAll('tr[data-city]').forEach((row) => {
    if (row.dataset.city === BASELINE_CITY) {
      row.classList.add('baseline-highlight');
    }
  });
}

/**
 * Format a delta value with directional arrow and color intent.
 * @param {number} value - The city's value
 * @param {number} baselineValue - The baseline city's value
 * @param {string} type - "lower-better" (costs) or "higher-better" (scores)
 * @returns {string} HTML string with colored arrow
 */
function formatDelta(value, baselineValue, type) {
  const delta = value - baselineValue;
  if (delta === 0) return '<span class="delta delta--neutral">-- same</span>';

  const percent = baselineValue !== 0
    ? Math.abs((delta / baselineValue) * 100).toFixed(1)
    : '0.0';

  const isPositiveDirection =
    type === 'lower-better' ? delta < 0 : delta > 0;

  const arrow = delta > 0 ? '&#9650;' : '&#9660;'; // up / down triangle
  const colorClass = isPositiveDirection ? 'delta--green' : 'delta--red';
  const sign = delta > 0 ? '+' : '';

  return `<span class="delta ${colorClass}">${arrow} ${sign}${delta.toFixed(1)} (${percent}%)</span>`;
}

/**
 * Format a number as US currency: $XXX,XXX
 */
function formatCurrency(num) {
  if (num == null || isNaN(num)) return '--';
  return '$' + Math.round(num).toLocaleString('en-US');
}

/**
 * Format a number as a percentage: X.X%
 */
function formatPercent(num) {
  if (num == null || isNaN(num)) return '--';
  return num.toFixed(1) + '%';
}

// ---------------------------------------------------------------------------
// 5. Bar Chart Renderer
// ---------------------------------------------------------------------------

/**
 * Render a horizontal CSS bar chart into a container.
 * @param {string} containerId - DOM id of the container element
 * @param {Array<{label: string, value: number, isBaseline: boolean}>} data
 * @param {Object} options
 * @param {number} options.maxValue - Scale bars to this maximum
 * @param {string} [options.unit] - e.g. "$", "%", "" for display after value
 * @param {boolean} [options.lowerIsBetter] - Invert color logic
 */
function renderBarChart(containerId, data, options = {}) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const maxVal = options.maxValue || Math.max(...data.map((d) => d.value));
  const unit = options.unit || '';

  const html = data
    .map((item) => {
      const widthPct = maxVal > 0 ? (item.value / maxVal) * 100 : 0;
      const barClass = item.isBaseline ? 'chart-bar--baseline' : 'chart-bar--city';

      return `
        <div class="chart-row">
          <span class="chart-label">${item.label}</span>
          <div class="chart-track">
            <div class="chart-bar ${barClass}" style="width: ${widthPct.toFixed(1)}%">
              <span class="chart-value">${unit === '$' ? formatCurrency(item.value) : item.value + unit}</span>
            </div>
          </div>
        </div>`;
    })
    .join('');

  container.innerHTML = html;
}

// ---------------------------------------------------------------------------
// 6. City Page Utilities
// ---------------------------------------------------------------------------

/**
 * Get a city object from the CITIES lookup.
 * @param {string} cityId
 * @returns {Object|null}
 */
function getCityData(cityId) {
  return CITIES[cityId] || null;
}

/**
 * Get scores for a city.
 * @param {string} cityId
 * @returns {Object|null}
 */
function getCityScores(cityId) {
  return SCORES[cityId] || null;
}

/**
 * Compare a city's field to the baseline.
 * @param {string} cityId
 * @param {string} field - Dot-separated path into city data, e.g. "costOfLiving.overallIndex"
 * @returns {{value: number, baselineValue: number, delta: number, percent: number}|null}
 */
function getComparisonToBaseline(cityId, field) {
  const cityData = CITIES[cityId];
  const baselineData = CITIES[BASELINE_CITY];
  if (!cityData || !baselineData) return null;

  const resolve = (obj, path) =>
    path.split('.').reduce((o, key) => (o != null ? o[key] : undefined), obj);

  const value = resolve(cityData, field);
  const baselineValue = resolve(baselineData, field);

  if (value == null || baselineValue == null) return null;

  const delta = value - baselineValue;
  const percent = baselineValue !== 0
    ? (delta / baselineValue) * 100
    : 0;

  return {
    value,
    baselineValue,
    delta: Math.round(delta * 100) / 100,
    percent: Math.round(percent * 10) / 10,
  };
}

// ---------------------------------------------------------------------------
// 7. Responsive Table Handling
// ---------------------------------------------------------------------------

function initResponsiveTables() {
  const containers = document.querySelectorAll('.table-responsive');
  if (containers.length === 0) return;

  containers.forEach((container) => {
    // Create scroll hint element
    const hint = document.createElement('div');
    hint.className = 'scroll-hint';
    hint.textContent = 'Scroll \u2192';
    container.appendChild(hint);

    const updateHint = () => {
      const isScrollable = container.scrollWidth > container.clientWidth;
      const isAtEnd =
        container.scrollLeft + container.clientWidth >= container.scrollWidth - 2;

      if (!isScrollable || isAtEnd) {
        hint.classList.add('scroll-hint--hidden');
      } else {
        hint.classList.remove('scroll-hint--hidden');
      }
    };

    container.addEventListener('scroll', updateHint, { passive: true });
    window.addEventListener('resize', updateHint, { passive: true });

    // Initial check after layout settles
    requestAnimationFrame(updateHint);
  });
}

// ---------------------------------------------------------------------------
// Initialization
// ---------------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initNavDropdowns();
  highlightActiveNavLink();
  initSmoothScroll();
  initWeightSliders();
  highlightBaseline();
  initResponsiveTables();
});
