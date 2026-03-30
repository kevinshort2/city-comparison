# Shared HTML Template for All Pages

Every page must use this exact structure. Adjust the `<title>`, nav active state, and content area.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>[Page Title] — Where Next?</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="[PATH_TO]/css/style.css">
</head>
<body>
  <nav class="nav">
    <div class="container nav-inner">
      <a href="[PATH_TO]/index.html" class="nav-logo">Where Next?</a>
      <button class="nav-toggle" aria-label="Toggle navigation">
        <span></span><span></span><span></span>
      </button>
      <ul class="nav-menu">
        <li><a href="[PATH_TO]/index.html" class="nav-link [ACTIVE_IF_INDEX]">Overview</a></li>
        <li><a href="[PATH_TO]/cost-of-living.html" class="nav-link [ACTIVE_IF_COL]">Cost of Living</a></li>
        <li><a href="[PATH_TO]/housing.html" class="nav-link [ACTIVE_IF_HOUSING]">Housing</a></li>
        <li><a href="[PATH_TO]/education.html" class="nav-link [ACTIVE_IF_EDU]">Education</a></li>
        <li><a href="[PATH_TO]/faith.html" class="nav-link [ACTIVE_IF_FAITH]">Faith</a></li>
        <li><a href="[PATH_TO]/lifestyle.html" class="nav-link [ACTIVE_IF_LIFESTYLE]">Lifestyle</a></li>
        <li><a href="[PATH_TO]/community.html" class="nav-link [ACTIVE_IF_COMMUNITY]">Community</a></li>
      </ul>
    </div>
  </nav>

  <!-- PAGE CONTENT HERE -->

  <footer class="footer">
    <div class="container">
      <a href="[PATH_TO]/methodology.html">Methodology & Sources</a>
      <span>Research date: March 2026</span>
    </div>
  </footer>

  <script src="[PATH_TO]/js/data.js"></script>
  <script src="[PATH_TO]/js/app.js"></script>
</body>
</html>
```

## Path Rules
- For root pages (index.html, cost-of-living.html, etc.): PATH_TO = "."
- For city pages (cities/bend-or.html, etc.): PATH_TO = ".."

## Nav Active State
- Add class "active" to the nav-link for the current page
- City detail pages: no nav link is active (they're reached from Overview)

## Design Rules (Swiss Minimalism)
- NO emojis anywhere in the HTML
- NO decorative icons or SVGs
- Use semantic HTML5 elements (section, article, header, etc.)
- All data comes from the CITIES and SCORES objects in data.js
- Lexington rows/entries always get class "baseline-highlight" or "baseline-row"
- Use the CSS classes from style.css — don't add inline styles
- Keep markup clean and minimal
- Use the comparison-table, stat-card, bar-chart, section-header, hero, pros-cons CSS classes

## City slugs (for linking to city pages)
lexington-ky, bend-or, sisters-or, sarasota-fl, chattanooga-tn, greenville-sc, columbia-sc, coeur-d-alene-id, flagstaff-az, birmingham-al, moscow-id, raleigh-nc, sheridan-wy

## City display order (by default weighted score)
1. Chattanooga, TN
2. Greenville, SC
3. Columbia, SC
4. Lexington, KY (baseline)
5. Coeur d'Alene, ID
6. Sarasota, FL
7. Bend, OR
8. Sisters, OR
9. Flagstaff, AZ
