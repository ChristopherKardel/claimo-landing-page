# Claimo Landingpage — statische HTML/CSS-Version

Eigenständige Umsetzung des Figma-Entwurfs in reinem HTML und CSS.
Kein Build-Schritt, kein JavaScript.

```
site/
├── index.html              # deutsche Seite
├── en/index.html           # englische Seite (gleiches Stylesheet)
├── styles.css              # gesamtes Styling inkl. @font-face
└── assets/
    ├── fonts/              # Poppins 400/500/600/700, selbst gehostet
    ├── logo.png            # Claimo-Logo
    ├── phone-mockup.png    # Rahmen mit transparentem Screen (Hero)
    ├── showcase-card.png   # fertige Karte mit grünem Rand
    ├── google-play-badge.png
    ├── icon-click.png      # Schritt 2
    ├── icon-dollar.png     # Schritt 4
    ├── paypal.png
    └── qr-code.png         # verweist auf https://claimo-app.com
```

## Öffnen

`site/index.html` direkt im Browser öffnen — es werden keine externen
Ressourcen geladen (Schrift liegt lokal bei).

## Ohne JavaScript gelöst

* **Sprachauswahl** — `<details>`-Dropdown, das auf die zweite Sprachfassung
  verlinkt (`index.html` ⇄ `en/index.html`); die aktive Sprache steht grün
* **Mobiles Menü** — Checkbox + `:checked`-Geschwister-Selektor
* **FAQ** — Radio-Buttons steuern die Antwortkarte, Überblendung per Transition.
  Unter 1024 px entfällt die Antwortkarte, es bleibt die reine Fragenliste
* **Belohnungs-Karussell** — CSS-Keyframes mit verdoppelter Karten-Reihe für den
  nahtlosen Endlos-Lauf (pausiert bei Hover)
* **Scroll-Einblendungen** — `animation-timeline: view()`, abgesichert über
  `@supports` und `prefers-reduced-motion`

## Anpassen

Alle Farben, Schrift und Maße stehen als Custom Properties in `:root`
am Anfang von `styles.css` (`--green`, `--shell`, `--nav-h`, `--circle` …).

Der Screen des Phone-Mockups ist im PNG transparent — die weisse Fläche liegt
als `.phone::before` exakt in der Aussparung. Dort kann später ein
App-Screenshot eingesetzt werden.
