---
id: grid-container
title: Grid Container
---

CSS Grid grid container CSS。

## Grid Container

Turn any HTML element into a grid container by setting its `display` property to `grid`.

```html
<style>
  .container {
    display: grid;
  }
</style>

<div class="container">

</div>
```

**Note**

Turning an element into a grid only affects the behavior of its direct descendants. So by turning a direct descendant into a grid, you have a grid within a grid.

## Define the structure of the grid

### grid-template-columns

To add some columns to the grid, use the `grid-template-columns` property on a grid container

```css
.container {
  display: grid;
  grid-template-columns: 50px 50px;
}
```

The number of parameters given to the grid-template-columns property indicates the number of columns in the grid, and the value of each parameter indicates the width of each column.



- [Add Columns with grid-template-columns](https://learn.freecodecamp.org/responsive-web-design/css-grid/add-columns-with-grid-template-columns/)


### grid-template-rows

The `grid-template-rows` property specifies the number (and the heights) of the rows in a grid layout.

`grid-template-rows`  grid ，grid  gird item  `gird-template-columns` 。

[grid-template-rows example](https://codepen.io/luohuidong/pen/YRGENq)

 2 个 container  `grid-template-rows`  1 grid-template-columns`  3  5 个 grid item 2  gird grid item 个`gird-template-columns` 。



- [Add Rows with grid-template-rows](https://learn.freecodecamp.org/responsive-web-design/css-grid/add-rows-with-grid-template-rows)
- [CSS grid-template-rows Property](https://www.w3schools.com/cssref/pr_grid-template-rows.asp)

### repeat()

 grid container  `grid-template-columns`  `grid-template-rows`  100 个。 `repeat()`。

Here's an example that would create the 100 row grid, each row at 50px tall.

```css
.container {
  display: grid;
  grid-template-rows: repeat(100, 50px);
}
```

：

- [Reduce Repetition Using the repeat Function](https://learn.freecodecamp.org/responsive-web-design/css-grid/reduce-repetition-using-the-repeat-function/)

### Grid units

You can use absolute and relative units like `px` and `em` in CSS Grid to define the size of rows and columns.

You can use these as well:

- `fr`: sets the column or row to a fraction of the available space.
- `auto`: sets the column or row to the width or height of its content automatically.
- `%`: adjusts the column or row to the percent width of its container.



```css
.container {
  display: grid;
  grid-template-columns: 50px 2fr 1fr;
}
```


- [Use CSS Grid units to Change the Size of Columns and Rows](https://learn.freecodecamp.org/responsive-web-design/css-grid/use-css-grid-units-to-change-the-size-of-columns-and-rows/)

## Grid Gap

### grid-column-gap

To add a gap between the columns, use the grid-column-gap property like this:

```css
.container {
  display: grid;
  grid-template-columns: auto auto;
  grid-column-gap: 10px;
}
```

This creates 10px of empty space between all of our columns.



- [Create a Column Gap Using grid-column-gap](https://learn.freecodecamp.org/responsive-web-design/css-grid/create-a-column-gap-using-grid-column-gap/)
- [CSS grid-column-gap Property](https://www.w3schools.com/cssref/pr_grid-column-gap.asp)

### grid-row-gap

The `grid-row-gap` property defines the size of the gap between the rows in a grid layout.

```css
.container {
  display: grid;
  grid-row-gap: 50px;
}
```

### grid-gap

The `grid-gap` property defines the size of the gap between the rows and columns in a grid layout, and is a shorthand property for `grid-row-gap` and `grid-column-gap`.

If `grid-gap` has one value, it will create a gap between all rows and columns. However, if there are two values, it will use the first one to set the gap between the rows and the second value for the columns.

```css
.container {
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 50px;
}
```

## Align All Items

### justify-items

`justify-self` 个 grid item  grid container  item ，`justify-items`，`justify-self` 。

：

- [justify-items](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-items)

### align-items

`align-self` 个 grid item  grid container  item `align-items`， `align-self` 。



- [align-items](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items)
