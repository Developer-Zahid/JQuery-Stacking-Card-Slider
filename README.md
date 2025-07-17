# 📚 How to Use This Slider

This slider is a lightweight, interactive carousel built with HTML and jQuery. It supports click-based and autoplay animations, and it's highly customizable using HTML `data-*` attributes.

---

## 🧹 HTML Structure

Add this HTML where you want the slider to appear:

```html
<ul class="slider" data-slider="list" data-autoplay="true" data-autoplay-speed="3000">
    <li class="slider__item" data-slider="item">
        <figure class="card" style="--variant: #5A827E">1</figure>
    </li>
    <li class="slider__item" data-slider="item">
        <figure class="card" style="--variant: #819A91">2</figure>
    </li>
    <li class="slider__item" data-slider="item">
        <figure class="card" style="--variant: #8AB2A6">3</figure>
    </li>
    <li class="slider__item" data-slider="item">
        <figure class="card" style="--variant: #ACD3A8">4</figure>
    </li>
</ul>
```

### 💡 HTML Options

| Attribute             | Description                                     | Default  |
| --------------------- | ----------------------------------------------- | -------- |
| `data-slider="list"`  | Required on the parent, Like: `<ul>` element    | —        |
| `data-slider="item"`  | Required on each slider item, Like: `<li>`      | —        |
| `data-autoplay`       | Enables/disables autoplay (`true` / `false`)    | `"false"` |
| `data-autoplay-speed` | Time in ms between transitions in autoplay mode | `"2000"` |
| `data-speed`          | Animation speed                                 | `"500"`  |

---

## 🧐 JavaScript Behavior

The slider behavior is handled via jQuery:

```js
$(function () {
  // Initialization and configuration
});
```

### 👡 Click Interaction

Clicking a card will move it to the front with an animation.

### 🔁 Autoplay Mode

If `data-autoplay="true"`:

* Cards animate automatically in the set interval (`data-autoplay-speed`)
* Autoplay pauses on `hover` or `touchstart`, resumes on `mouseleave` or `touchend`

---

## 🛠 How to Customize

* **Change Card Colors** using inline `--variant` styles.
* **Adjust Animation Speed** with `data-speed` (e.g., `data-speed="700"`).
* **Modify Autoplay Timing** with `data-autoplay-speed`.

---

## ⚠️ Requirements

* **jQuery** must be included on your page before this script.

```html
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
```

* Make sure the jQuery code runs **after** the DOM is ready.

---

## 🚀 Installation

You can use the script directly via CDN:

```html
<script src="https://developer-zahid.github.io/JQuery-Stacking-Card-Slider/assets/js/script.js"></script>

<!-- Minified Version -->
<script src="https://cdn.jsdelivr.net/gh/Developer-Zahid/JQuery-Stacking-Card-Slider@latest/assets/js/script.min.js"></script>
```
