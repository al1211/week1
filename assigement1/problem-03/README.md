# Two Column Layout (Flexbox/Grid)

## 📌 Description

This project demonstrates a simple responsive layout with two sections:

* Left section (Red)
* Right section (Blue)

The right section is **twice as wide** as the left section.

## 🎯 Features

* Centered layout on the screen
* Maximum width of **1200px**
* Two-column structure:

  * Left: 1 part
  * Right: 2 parts
* Vertically centered content inside both sections
* Clean and minimal design

## 🛠️ Technologies Used

* HTML
* CSS (Flexbox or Grid)

## 📐 Layout Details

* Container:

  * Max width: `1200px`
  * Horizontally centered using `margin: auto`
* Columns:

  * Left column: `1fr` (or flex: 1)
  * Right column: `2fr` (or flex: 2)
* Vertical alignment:

  * Achieved using `display: flex` and `align-items: center`

## 💻 Example Code

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Two Column Layout</title>
  <style>
    .container {
        background-color: purple;
        width: 1200px;
        height: 100px;
        margin: auto;
        display: flex;
    }
    .left {
        flex-grow: 1;
        background-color: red;
    }
    .right {
      flex-grow: 2;
        background-color: blue;
    }
</style>    
<body>
    <div class="container">
        <div class="left">
           <h1>Hello</h1>
        </div>
        <div class="right">
               <h1>World</h1>
        </div>
    </div>
</body>
</html>
```

## 🚀 How to Run

1. Copy the code into an `index.html` file
2. Open it in your browser

## 📷 Output

* Red section on the left
* Blue section on the right (twice the width)
* Both contents vertically centered
* Layout centered on the screen

---

Feel free to modify colors, height, or content as needed.
