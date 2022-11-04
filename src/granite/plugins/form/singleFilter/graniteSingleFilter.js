export default function graniteSingleFilter(fieldId, name, data) {
  let selectedArr = [];

  const filtersContainer = document.createElement('div');
  filtersContainer.id = fieldId;
  filtersContainer.classList.add('g__single-filter-container');

  const searchContainer = document.createElement('div');
  searchContainer.classList.add('g__single-search-container');
  const searchIcon = document.createElement('i');
  searchIcon.setAttribute('class', 'g__single-search-icon far fa-search');
  searchContainer.appendChild(searchIcon);
  const search = document.createElement('input');
  search.type = 'text';
  search.classList.add('g__single-filter-search');
  searchContainer.appendChild(search);
  filtersContainer.appendChild(searchContainer);

  search.addEventListener('input', (e) => {
    const filter = e.target.value.toUpperCase();
    const topicItem = document.querySelectorAll(`#${fieldId} .g__industry`);
    topicItem.forEach((topic) => {
      const txtValue = topic.textContent || topic.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        topic.style.display = '';
      } else {
        topic.style.display = 'none';
      }
    });
  });

  const filterList = document.createElement('ul');
  filterList.classList.add('g__single-filter-list');
  filtersContainer.appendChild(filterList);

  data.forEach((r, index) => {
    const item = document.createElement('li');
    const itemContainer = document.createElement('div');
    itemContainer.classList.add('g__industry');
    itemContainer.setAttribute('data-id', r.industry);
    if (!r.hasOwnProperty('sub_industries')) {
      itemContainer.classList.add('g__single-item', 'g__selectable');
      selectHandler(itemContainer);
      itemContainer.innerHTML = `<div class="g__check"><i class="far fa-solid fa-plus"></i></div> ${r.industry}`;
      item.appendChild(itemContainer);
    } else {
      itemContainer.classList.add('g__drop-down-item');
      itemContainer.innerText = r.industry;
      const ddArrow = document.createElement('i');
      ddArrow.setAttribute('class', 'g__open-industry far fa-solid fa-angle-down');
      itemContainer.appendChild(ddArrow);
      itemContainer.addEventListener('click', () => {
        item.classList.toggle('active');
      });
      item.appendChild(itemContainer);
      const subContainer = document.createElement('ul');
      subContainer.classList.add('g__sub-list');
      r.sub_industries.forEach((subIndustry) => {
        const subItem = document.createElement('li');
        subItem.classList.add('g__sub-item', 'g__selectable');
        subItem.setAttribute('data-id', subIndustry);
        subItem.innerHTML = `<div class="g__check"><i class="far fa-solid fa-plus"></i></div> ${subIndustry}`;
        selectHandler(subItem);
        subContainer.appendChild(subItem);
      });
      item.appendChild(subContainer);
    }

    filterList.appendChild(item);
  });

  const selectedContainer = document.createElement('div');
  selectedContainer.classList.add('g__selected-container');
  selectedContainer.innerText = 'No Industries Selected';
  filtersContainer.appendChild(selectedContainer);

  const finalInput = document.createElement('input');
  finalInput.setAttribute('form_id', 'propensity-assesssment');
  finalInput.type = 'text';
  finalInput.id = fieldId;
  finalInput.name = name;
  finalInput.style.display = 'none';
  filtersContainer.appendChild(finalInput);

  function selectHandler(item) {
    item.addEventListener('click', () => {
      const id = item.getAttribute('data-id');
      item.classList.toggle('g__selected-item');
      const iconContainer = item.querySelector('.g__check');
      iconContainer.innerHTML = '';
      if (item.classList.contains('g__selected-item')) {
        iconContainer.innerHTML = `<i class="far fa-solid fa-check"></i>`;
      } else {
        iconContainer.innerHTML = `<i class="far fa-solid fa-plus"></i>`;
      }
      isSelectedHandler(id);
      selectedHandler();
    });
  }

  function isSelectedHandler(id) {
    const isPresent = selectedArr.findIndex(function (selectedItem) {
      return selectedItem === id;
    });
    if (isPresent >= 0) {
      selectedArr.splice(isPresent, 1);
    } else {
      selectedArr.push(id);
    }
    return true;
  }

  function selectedHandler() {
    const updateSelected = document.querySelector(`#${fieldId} .g__selected-container`);
    updateSelected.innerHTML = '';

    const selectedList = document.createElement('ul');
    selectedList.classList.add('g__selected-list');

    selectedArr.forEach((item) => {
      const selectedItem = document.createElement('li');
      selectedItem.classList.add('g__selected-item');
      selectedItem.setAttribute('data-id', item);
      selectedItem.innerHTML = `${item} <i class="far fa-times"></i>`;
      selectedList.appendChild(selectedItem);

      selectedItem.addEventListener('click', (e) => {
        removeHandler(selectedItem);
      });
    });
    inputHandler(selectedArr);
    updateSelected.appendChild(selectedList);
  }
  function removeHandler(selectedItem) {
    const itemsArr = document.querySelectorAll(`#${fieldId}  .g__selectable`);
    const deleteId = selectedItem.getAttribute('data-id');
    selectedArr = selectedArr.filter(function (industry) {
      return industry !== deleteId;
    });
    itemsArr.forEach((item) => {
      const id = item.getAttribute('data-id');
      if (id == deleteId) {
        item.classList.remove('g__selected-item');
        const iconContainer = item.querySelector('.g__check');
        iconContainer.innerHTML = '';
        iconContainer.innerHTML = `<i class="far fa-solid fa-plus"></i>`;
      }
    });

    inputHandler(selectedArr);
    selectedItem.remove();
  }

  function inputHandler(selectedArr) {
    finalInput.setAttribute('value', selectedArr.join());
  }

  // Validation Error
  const error = document.createElement('div');
  error.classList.add('g__error_msg');
  filtersContainer.appendChild(error);

  return filtersContainer;
}
