# VS Code Language Panel Layout (CSS Grid)

## 📌 Description

This project recreates a section of the **Visual Studio Code landing page**, showcasing supported programming languages.

It uses **CSS Grid** and **Flexbox** to build a clean two-column layout:

* Left: Text content
* Right: Language grid panel

---

## 🎯 Features

* Two-column layout using **CSS Grid**

  * Left section → Content
  * Right section → Language panel (2x width)
* Language panel structured in a **3-column grid**
* Icons with labels for multiple programming languages
* Vertical alignment using Flexbox
* Centered container with fixed width

---

## 🛠️ Technologies Used

* HTML5
* CSS3 (Grid + Flexbox)

---

## 📐 Layout Breakdown

### 🔹 Main Container

* Fixed width: `1200px`
* Centered using `margin: 0 auto`
* Grid layout:

  ```
  grid-template-columns: 1fr 2fr;
  ```

### 🔹 Left Section

* Contains:

  * Heading (`h2`)
  * Description (`p`)

### 🔹 Right Section (Language Panel)

* Grid layout:

  ```
  grid-template-columns: 1fr 1fr 1fr;
  ```
* Displays:

  * Language icon
  * Language name

---

## 💡 Key Concepts Used

### 1. CSS Grid (Main Layout)

* Divides page into:

  * 1 part (text)
  * 2 parts (language panel)

### 2. Nested Grid

* Language panel uses a **3-column grid**

### 3. Flexbox (Alignment)

* Used inside each language item:

  * Align icon + text horizontally
  * Center content vertically

---

## 💻 Code Highlights

### Main Grid Layout

```css
.container {
    display: grid;
    grid-template-columns: 1fr 2fr;
    column-gap: 2rem;
}
```

### Language Panel Grid

```css
.languagePanel {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
}
```

### Flex Alignment

```css
.flex {
    display: flex;
    align-items: center;
}
```

---

## 🚀 How to Run

1. Copy the HTML code into a file (e.g., `index.html`)
2. Open it in any browser

---

## 📷 Output

* Left side: Heading and paragraph
* Right side: Grid of programming languages with icons
* Clean dark theme (black background + white text)

---

## ⚠️ Improvements You Can Make

* Make layout responsive using media queries
* Replace fixed width with `max-width`
* Add hover effects on language items
* Use Tailwind CSS for cleaner styling
* Optimize spacing and typography

---

## 🔥 Learning Outcome

* Understanding **Grid vs Flexbox usage**
* Building **nested layouts**
* Structuring real-world UI sections

---

This is a solid step toward building real landing pages like modern developer tools.
