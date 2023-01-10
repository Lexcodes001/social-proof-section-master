# Frontend Mentor - Social proof section solution

This is a solution to the [Social proof section challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/social-proof-section-6e0qTv_bA). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
  - [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the section depending on their device's screen size

### Screenshot

[Desktop Preview](./screenshot.png)

### Links

- Solution URL: [Add solution URL here](https://github.com/Lexcodes001/social-proof-section-master)
- Live Site URL: [Add live site URL here](https://lexcodes001.github.io/social-proof-section-master/)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Animations
- Vanilla Javascript

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```html
<link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="./images/favicon-32x32.png"
    />
```
```css
@font-face {
  font-family: 'League Spartan Reg';
  src: url("fonts/LeagueSpartan-Regular.ttf") format("truetype");
}

@font-face {
  font-family: 'League Spartan SemiBold';
  src: url("fonts/LeagueSpartan-SemiBold.ttf") format("truetype");
}

@font-face {
  font-family: 'League Spartan Bold';
  src: url("fonts/LeagueSpartan-ExtraBold.ttf") format("truetype");
}
```
```js
const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el)
    }
  })
}
```

### Continued development

- CSS Animations
- JS DOM Manipulation

### Useful resources

- [Resource 1](https://www.webdesign.tutsplus.com) - This helped me with CSS animations— it was amazing!

## Author

- Frontend Mentor - [@Lexcodes001](https://www.frontendmentor.io/profile/Lexcodes001)
- Twitter - [@LexCodez00_](https://www.twitter.com/LexCodez00_)
- Instagram - [@lexvisualz00_](https://www.instagram.com/lexvisualz00_)