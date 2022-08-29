//import bomboraTopics from "../../../../demoContent/json/Bombora-Topics-v3.json";
function graniteMultiSelect(formField) {
  let filteredList = [];
  let topicsArr = [];
  const filtersContainer = document.createElement("div");
  filtersContainer.id = `g__${formField}`;
  filtersContainer.classList.add("g__filters-container");

  const searchContainer = document.createElement("div");
  searchContainer.classList.add("g__search-container");
  const searchIcon = document.createElement("i");
  searchIcon.setAttribute("class", "g__search-icon far fa-search");
  searchContainer.appendChild(searchIcon);
  const search = document.createElement("input");
  search.type = "text";
  search.classList.add("g__multi-search");
  searchContainer.appendChild(search);
  filtersContainer.appendChild(searchContainer);

  search.addEventListener("input", (e) => {
    const textValue = e.target.value;
    const filter = e.target.value.toUpperCase();
    const topicList = document.querySelector(".g__topics-list");
    const topicItem = document.querySelectorAll(`#g__${formField} .g__topic-item`);
    let hasMatch = false;
    topicItem.forEach((topic) => {
      const txtValue = topic.textContent || topic.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        topic.style.display = "";
        hasMatch = true;
      } else {
        topic.style.display = "none";
      }
    });
    if (formField === "Competitive_Topics__c" && !hasMatch) {
      const hasCustom = document.querySelector(".g__topic-custom");
      if (hasCustom) {
        hasCustom.remove();
      }
      let customTopic = { Theme: "Custom", Category: "Custom", Topic_Name: textValue, Topic_ID: `${textValue}` };
      const topicItemCustom = document.createElement("li");
      topicItemCustom.classList.add("g__topic-item", "g__topic-custom");
      topicItemCustom.setAttribute("data-value", "topic");
      topicItemCustom.setAttribute("data-name", customTopic.Topic_Name);
      topicItemCustom.setAttribute("data-id", customTopic.Topic_ID);
      topicItemCustom.innerHTML = `<div class="g__check"><i class="far fa-solid fa-plus"></i></div> Add: ${customTopic.Topic_Name}`;
      topicHandler(topicItemCustom, customTopic);
      topicList.appendChild(topicItemCustom);
    }
  });
  const fitlerOneContainer = document.createElement("div");
  fitlerOneContainer.classList.add("g__fitler-container");
  const f1ArrowIcon = document.createElement("i");
  f1ArrowIcon.setAttribute("class", "g__down-arrow far fa-solid fa-angle-down");
  fitlerOneContainer.appendChild(f1ArrowIcon);
  const fitlerOne = document.createElement("select");
  fitlerOne.classList.add("g__filter-one");
  const uniqueThemes = [...new Set(bomboraTopics.map((topic) => topic.Theme))];
  const filterOnePlaceholder = document.createElement("option");
  filterOnePlaceholder.disables = true;
  filterOnePlaceholder.selected = true;
  filterOnePlaceholder.innerText = "Select Theme";
  fitlerOne.appendChild(filterOnePlaceholder);
  uniqueThemes.forEach((theme) => {
    const themeOption = document.createElement("option");
    themeOption.value = theme;
    themeOption.innerText = theme;
    fitlerOne.appendChild(themeOption);
  });
  fitlerOneContainer.appendChild(fitlerOne);
  filtersContainer.appendChild(fitlerOneContainer);

  fitlerOne.addEventListener("change", (e) => {
    const theme = e.target.value;
    const category = document.querySelector(`#g__${formField} .g__filter-two`).value;
    if (theme === "Select Theme") {
      filteredList = bomboraTopics;
    } else {
      filteredList = [...new Set(bomboraTopics.map((topic) => (topic.Theme === theme ? topic : "")))];
      filteredList.shift();
    }
    const topicContainer = document.querySelector(`#g__${formField} .g__topics-container`);
    topicContainer.innerHTML = "";
    topicContainer.appendChild(topicsList(filteredList));

    updateFilterTwo(filteredList);
  });

  function updateFilterTwo(filteredList) {
    const f2 = document.querySelector(`#g__${formField} .g__filter-two`);
    f2.innerHTML = "";
    const uniqueList = [...new Set(filteredList.map((topic) => topic.Category))];
    uniqueList.forEach((topic) => {
      const catOption = document.createElement("option");
      catOption.value = topic;
      catOption.innerText = topic;
      f2.appendChild(catOption);
    });
  }

  const fitlerTwoContainer = document.createElement("div");
  fitlerTwoContainer.classList.add("g__fitler-container");
  const f2ArrowIcon = document.createElement("i");
  f2ArrowIcon.setAttribute("class", "g__down-arrow far fa-solid fa-angle-down");
  fitlerTwoContainer.appendChild(f2ArrowIcon);
  const fitlerTwo = document.createElement("select");
  fitlerTwo.classList.add("g__filter-two");
  const uniqueCatagories = [...new Set(bomboraTopics.map((topic) => topic.Category))];
  const filterTwoPlaceholder = document.createElement("option");
  filterTwoPlaceholder.disables = true;
  filterTwoPlaceholder.selected = true;
  filterTwoPlaceholder.innerText = "Select Category";
  fitlerTwo.appendChild(filterTwoPlaceholder);
  uniqueCatagories.forEach((category) => {
    const categoryOption = document.createElement("option");
    categoryOption.value = category;
    categoryOption.innerText = category;
    fitlerTwo.appendChild(categoryOption);
  });
  fitlerTwoContainer.appendChild(fitlerTwo);
  filtersContainer.appendChild(fitlerTwoContainer);

  fitlerTwo.addEventListener("change", (e) => {
    const category = e.target.value;
    const theme = document.querySelector(`#g__${formField} .g__filter-one`).value;
    if (category === "Select Category") {
      filteredList = bomboraTopics;
    } else {
      filteredList = [...new Set(bomboraTopics.map((topic) => (topic.Category === category ? topic : "")))];
      filteredList.shift();
    }

    if (theme != "Select Theme") {
      filteredList = [...new Set(filteredList.map((topic) => (topic.Theme === theme ? topic : "")))];
    }
    const topicContainer = document.querySelector(`#g__${formField} .g__topics-container`);
    topicContainer.innerHTML = "";
    topicContainer.appendChild(topicsList(filteredList));
  });

  function topicsList(topicObj) {
    const topicUl = document.createElement("ul");
    topicUl.classList.add("g__topics-list");

    topicObj.forEach((topic) => {
      const topicItem = document.createElement("li");
      topicItem.classList.add("g__topic-item");
      topicItem.setAttribute("data-value", "topic");
      topicItem.setAttribute("data-name", topic.Topic_Name);
      topicItem.setAttribute("data-id", topic.Topic_ID);
      topicItem.innerHTML = `<div class="g__check"><i class="far fa-solid fa-plus"></i></div> ${topic.Topic_Name}`;
      topicHandler(topicItem);

      topicUl.appendChild(topicItem, topic);
    });
    return topicUl;
  }

  /*-----------
  Topic Item Handler
  ----------*/
  function topicHandler(topicItem, topic) {
    topicsArr.forEach((topicVal) => {
      if (topicVal.id == topic.Topic_ID) {
        topicItem.classList.add("selected");
      }
    });
    topicItem.addEventListener("click", (e) => {
      const name = topicItem.getAttribute("data-name");
      const id = topicItem.getAttribute("data-id");
      topicItem.classList.toggle("selected");
      const topicObj = {
        name,
        id,
      };
      const isPresent = topicsArr.findIndex(function (topic) {
        return topic.id === id;
      });
      if (isPresent >= 0) {
        topicsArr.splice(isPresent, 1);
      } else {
        topicsArr.push(topicObj);
      }
      const updatePills = document.querySelector(`#g__${formField} .g__selected-container`);
      updatePills.innerHTML = "";
      updatePills.appendChild(pillsContainer(topicsArr));
      const IdArr = [];
      topicsArr.forEach((selectedTopic) => {
        IdArr.push(selectedTopic.id);
      });
      finalInput.setAttribute("value", IdArr.join());
    });
    return topicItem;
  }

  const topicListContainer = document.createElement("div");
  topicListContainer.classList.add("g__topics-container");
  topicListContainer.appendChild(topicsList(bomboraTopics));
  filtersContainer.appendChild(topicListContainer);

  const topicsHeading = document.createElement("h5");
  if (formField === "Competitive_Topics__c") {
    topicsHeading.innerText = "Your Competitive Topics";
  } else {
    topicsHeading.innerText = "Your Adjacent Topics";
  }

  filtersContainer.appendChild(topicsHeading);

  const finalInput = document.createElement("input");
  finalInput.setAttribute("form_id", "propensity-assesssment");
  finalInput.type = "text";
  finalInput.id = formField;
  finalInput.name = formField;
  finalInput.style.display = "none";
  filtersContainer.appendChild(finalInput);

  function removeItem(selectedItem) {
    const itemsArr = document.querySelectorAll(`#g__${formField} .g__topic-item`);
    const deleteId = selectedItem.getAttribute("data-id");
    topicsArr = topicsArr.filter(function (topic) {
      return topic.id !== deleteId;
    });
    itemsArr.forEach((item) => {
      const id = item.getAttribute("data-id");
      if (id == deleteId) {
        item.classList.remove("selected");
      }
    });
    const inputArr = [];
    topicsArr.forEach((topic) => {
      inputArr.push(topic.id);
    });
    finalInput.setAttribute("value", inputArr.join());
    selectedItem.remove();
  }

  const selectedContainer = document.createElement("div");
  selectedContainer.classList.add("g__selected-container");
  filtersContainer.appendChild(selectedContainer);
  function pillsContainer(topics) {
    const pillList = document.createElement("ul");
    pillList.classList.add("g__selected-list");

    topics.forEach((topic) => {
      const selectedItem = document.createElement("li");
      selectedItem.classList.add("g__selected-item");
      selectedItem.setAttribute("data-id", topic.id);
      selectedItem.innerHTML = `${topic.name} <i class="far fa-times"></i>`;
      pillList.appendChild(selectedItem);

      selectedItem.addEventListener("click", (e) => {
        removeItem(selectedItem);
      });
    });
    return pillList;
  }
  return filtersContainer;
}
