# Granite Table

The current state of this micro is used for rendering the table front-end.

## V6 CDNs

### QA

`<link rel="stylesheet" type="text/css" href="https://cdn.addapptation.com/addapptation-qa/granite/v6/graniteTable.css"/>` `<script src="https://cdn.addapptation.com/addapptation-qa/granite/v6/graniteTable.js"></script>`

### Production

`<link rel="stylesheet" type="text/css" href="https://cdn.addapptation.com/addapptation-/granite/v6/graniteTable.css"/>` `<script src="https://cdn.addapptation.com/addapptation/granite/v6/graniteTable.js"></script>`

---

## Option Attributes

### `datatables` - Boolean

Activated the 3rd party plugin datatables.js

### `searching` - Boolean

##### Default: `false`

Turn on the search bar

### `paging` - Boolean

##### Default: `false`

Turn on pagination

### `page_length` - Integer

##### Default: `50`

How may rows (records) to display on a single page

### `columnSort` - Boolean

##### Default: `[0, 'asc']`

Define which column(s) the order is performed upon, and the ordering direction.

### `scroll_x` - Boolean

##### Default: `false`

Constrain the DataTable to the container width

### `scroll_y` - Unit Based Value (500px, 20vh, 20%, etc.)

##### Default: `""`

Constrain the DataTable to the given height

### `auto_width` - `Boolean`

##### Default: `true`

Enable or disable automatic column width calculation.

### `responsive` - Boolean

##### Default: `false`

<https://datatables.net/extensions/responsive/>

### `column_defs` - Array of Objects

##### Default: ``

Set column definition initialisation properties. Mainly to be used with responsive datatables.

### `fixed` - boolean

##### Default: `auto`

Set the 'table-layout' CSS property

### `wrap_text` - boolean

##### Default: `initial`

Set the `white-space` CSS property to `nowrap` by changing this value to `true`

---

## Record Attributes

### `value` - String or Integer

The value to be displayed in the cell. This can also be used for calculating a different output based on predefined parameters.

```javascript
newCell.innerHTML = cell.value;
```

### `href` - URL

Body cells will wrap the `value` with the provided URL.

### `classes` - string

Assign custom classes to the `td` tag

```javascript
newCell.classList.add(cell.classes);
```

### `color_label` - HEX or RGB/RGBA

```javascript
if (cell.color_label) {
  newCell.style.borderLeft = `4px solid ${cell.color_label}`;
}
```

### `text_align` - String (left, center, right)

Value alignment inside the table cell. Default value is `left`.

### `strength` - Boolean

Function call that returns the `value` wrapped in a div with a dynamic class name based on the `value`.

```javascript
function strength(newCell, cell) {
  if (cell.value <= 50) {
    newCell.innerHTML = `<span class="g__weak">${cell.value}</span>`;
  } else if (cell.value > 50 && cell.value < 75) {
    newCell.innerHTML = `<span class="g__moderate">${cell.value}</span>`;
  } else {
    newCell.innerHTML = `<span class="g__strong">${cell.value}</span>`;
  }
  return newCell;
}
```

### `percent_change` - Boolean

Function call that adds a dyanmic class to the table cell and returns a formatted `value`. Positive numbers include an up arrow and negative numbers include a down arrow.

```javascript
function percentChange(newCell, cell) {
  if (cell.value > 0) {
    newCell.classList.add('g__strong');
    newCell.innerHTML = `<i class="far fa-long-arrow-up"></i> ${cell.value}%`;
  } else if (cell.value === 0) {
    newCell.classList.add('g__moderate');
    newCell.innerHTML = `${cell.value}%`;
  } else {
    newCell.classList.add('g__weak');
    let number = cell.value.toString();
    newCell.innerHTML = `<i class="far fa-long-arrow-down"></i> ${number.slice(1)}%`;
  }
  return newCell;
}
```

### `steps` - Number

Small circles to represent the number of steps. \*Not Complete

```javascript
function steps(newCell, cell) {
  const stepContainer = document.createElement('div');
  stepContainer.classList.add('g__table-step-container');
  for (let i = 0; i < cell.number_steps; i++) {
    const stepIndicator = document.createElement('div');
    stepIndicator.classList.add('g__table-step');
    stepContainer.appendChild(stepIndicator);
  }
  newCell.appendChild(stepContainer);
  return newCell;
}
```

### `status` - Number

Class and text to indicate if the value is active or inactive.

```javascript
function status(newCell, cell) {
  if (cell.value) {
    newCell.classList.add('g__active');
    newCell.innerHTML = 'Active';
  } else {
    newCell.classList.add('g__inactive');
    newCell.innerHTML = 'Inactive';
  }
  return newCell;
}
```

### `status` - string (complete)

Circle graphic with checkmark to indicate the values status

```javascript
function statusIndicator(newCell, cell) {
  newCell.classList.add('g__status-container');
  newCell.innerHTML = `<div class="g__status-indicator ${cell.value === 'complete' ? 'g__status-active' : 'g__status-not-active'}"><i class="fa fa-check" aria-hidden="true"></i></div>`;
  return newCell;
}
```
