---
id: semantic-elements
title: Semantic Elements
---

[HTML5 Semantic Elements](https://www.w3schools.com/html/html5_semantic_elements.asp)

## main tag

* The `main` tag specifies the main content of a document.
* There must not be more than one `main` element in a document.
* The content inside the `main`  element should be unique to the document. It should not contain any content that is repeated across documents such as sidebars, navigation links, copyright information, site logos, and search forms.



* [HTML main Tag](https://www.w3schools.com/tags/tag_main.asp)

## article tag

* `article` is a sectioning element, and is used to wrap independent, self-contained content.
* Potential sources for the `article` element
    * Forum post
    * Blog post
    * News story
    * Comment
* HTML5 ，`article`  `section` `section` 



* [Wrap Content in the article Element](https://learn.freecodecamp.org/responsive-web-design/applied-accessibility/wrap-content-in-the-article-element/)
* [HTML article Tag](https://www.w3schools.com/tags/tag_article.asp)
* 《HTML 5 CSS 3 》（3）3.1.1 article 

## section tag

* It's used to wrap introductory information or navigation links for its parent tag, and works well around content that's repeated at the top on multiple pages.
* section 。
* section article 。
* section  div 。

* [Wrap Content in the article Element](https://learn.freecodecamp.org/responsive-web-design/applied-accessibility/wrap-content-in-the-article-element/)
* 《HTML 5 与 CSS 3 》（3） 3.1.2 section 

## article  section

* `article` and `section` can be used within each other, as needed. For example, if a book is the `article`, then each chapter is a `section`.


## header tag


## nav tag

- `nav` tag is meant to wrap around the main navigation links in your page.
- If there are repeated site links at the bottom of the page, it isn't necessary to markup those with a nav tag as well. Using a footer is sufficient.



- [Make Screen Reader Navigation Easier with the nav Landmark](https://learn.freecodecamp.org/responsive-web-design/applied-accessibility/make-screen-reader-navigation-easier-with-the-nav-landmark)

## footer tag

- It's primarily used to contain copyright information or links to related documents that usually sit at the bottom of a page.

：

- [Make Screen Reader Navigation Easier with the footer Landmark](https://learn.freecodecamp.org/responsive-web-design/applied-accessibility/make-screen-reader-navigation-easier-with-the-footer-landmark)

## figure and figcaption tag

- Used together, these items wrap a visual representation (like an image, diagram, or chart) along with its caption.

example:

```html
<figure>
  <img src="roundhouseDestruction.jpeg" alt="Photo of Camper Cat executing a roundhouse kick">
  <br>
  <figcaption>
    Master Camper Cat demonstrates proper form of a roundhouse kick.
  </figcaption>
</figure>
```



- [Improve Chart Accessibility with the figure Element](https://learn.freecodecamp.org/responsive-web-design/applied-accessibility/improve-chart-accessibility-with-the-figure-element/)

## audio tag

- The HTML5 `<audio>` element specifies a standard way to embed audio in a web page.

```html
<audio controls>
  <source src="horse.ogg" type="audio/ogg">
  <source src="horse.mp3" type="audio/mpeg">
Your browser does not support the audio element.
</audio>
```


- [HTML5 Audio](https://www.w3schools.com/html/html5_audio.asp)

## time tag

- The `<time>` tag defines a human-readable date/time.
- This element can also be used to encode dates and times in a machine-readable way so that user agents can offer to add birthday reminders or scheduled events to the user's calendar, and search engines can produce smarter search results.

```html
<p>We open at <time>10:00</time> every morning.</p>

<p>I have a date on <time datetime="2008-02-14 20:00">Valentines day</time>.</p>
```

## form element

- Improve form field accessibility with the label element
- Wrap radio buttons in a fieldset element for better accessibility
- Add an accessible date picker

```html
<form>
  <fieldset>
    <legend>Choose one of these three items:</legend>

    <input id="one" type="radio" name="items" value="one">
    <label for="one">Choice One</label><br>

    <input id="two" type="radio" name="items" value="two">
    <label for="two">Choice Two</label><br>

    <input id="three" type="radio" name="items" value="three">
    <label for="three">Choice Three</label>

    <label for="input1">Enter a date:</label>
    <input type="date" id="input1" name="input1">
  </fieldset>
</form>
```
