# Two Column Layout using CSS Grid

## 📌 Description

This project demonstrates a simple layout using **CSS Grid** with two sections:

* Left section (Red)
* Right section (Blue)

The right section is **twice as wide** as the left section.

## 🎯 Features

* Layout centered on the screen
* Maximum width of **1200px**
* Two-column grid layout:

  * Left: `1fr`
  * Right: `2fr`
* Content inside both sections is **vertically and horizontally centered**
* Clean and minimal UI

## 🛠️ Technologies Used

* HTML
* CSS Grid

## 📐 Layout Details

* Container:

  * `max-width: 1200px`
  * Centered using Flexbox on body
* Grid system:

  * `grid-template-columns: 1fr 2fr`
* Centering content:

  * Using `display: grid` and `place-items: center`

## 💻 Example Code

```html id="grid1"
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Grid Layout</title>
  <style>
  

    .container {
      max-width: 1200px;
      width: 100%;
      height: 300px;
      display: grid;
      grid-template-columns: 1fr 2fr;
    }

    .left {
      background: red;
      display: grid;
      place-items: center;
    }

    .right {
      background: blue;
      display: grid;
      place-items: center;
    }

    .content {
      color: white;
      font-size: 20px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="left">
      <div class="content">Left</div>
    </div>
    <div class="right">
      <div class="content">Right</div>
    </div>
  </div>
</body>
</html>
```

## 🚀 How to Run

1. Create a file named `index.html`
2. Paste the above code
3. Open it in your browser

## 📷 Output

* Left section (Red) → 1 part
* Right section (Blue) → 2 parts
* Both sections have centered content
* Layout is centered and responsive up to **1200px**

## 🔥 Key Concept

* `grid-template-columns: 1fr 2fr` ensures the right side is twice as wide
* `place-items: center` makes centering very easy in Grid

---

You can extend this by adding responsiveness using media queries or converting it into React + Tailwind.
