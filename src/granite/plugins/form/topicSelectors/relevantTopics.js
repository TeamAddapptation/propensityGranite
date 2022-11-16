import { themes, categories, limitedTopics } from '../../../../demoContent/topicData';
import intentTopics from '../../../../demoContent/json/intentTopics_v4.json';

export default function relevantTopics() {
  /* --------------------
  Global Variables
  -------------------- */
  let selectedTopicsArr = [];
  let filteredTopics = [];

  const filtersContainer = document.createElement('div');
  filtersContainer.id = 'g__relevant-topics';
  filtersContainer.classList.add('g__rt-container');
  /* --------------------
  Title, Description & Topic List Link
  -------------------- */
  const header = document.createElement('div');
  header.classList.add('g__rt-header');

  const headerTop = document.createElement('div');
  headerTop.classList.add('g__rt-top');
  header.appendChild(headerTop);

  const heading = document.createElement('h5');
  heading.innerText = 'Additional Relevant Topics';
  headerTop.appendChild(heading);

  const fullListLink = document.createElement('a');
  fullListLink.classList.add('g__btn', 'g__btn-text');
  fullListLink.href = '#';
  fullListLink.innerText = 'View Full List';
  headerTop.appendChild(fullListLink);

  const desc = document.createElement('p');
  desc.innerText = '(include other keywords, complimentary industries, and/or technology, these will appear as adjacent signals)';
  header.appendChild(desc);

  filtersContainer.appendChild(header);

  /* --------------------
  Search
  -------------------- */
  const searchContainer = document.createElement('div');
  searchContainer.classList.add('g__rt-search');
  const searchIcon = document.createElement('i');
  searchIcon.setAttribute('class', 'g__rt-search-icon far fa-search');
  searchContainer.appendChild(searchIcon);
  const search = document.createElement('input');
  search.type = 'text';
  search.classList.add('g__multi-search');
  searchContainer.appendChild(search);
  filtersContainer.appendChild(searchContainer);

  /* --------------------
  Search Listener
  -------------------- */
  search.addEventListener('input', (e) => {
    const searchTopicsArr = [];
    const searchValue = e.target.value.toUpperCase();
    intentTopics.forEach((topic) => {
      if (topic.Topic_Name.toUpperCase().indexOf(searchValue) > -1) {
        const addTopic = { Topic_ID: topic.Topic_ID, Topic_Name: topic.Topic_Name };
        searchTopicsArr.push(addTopic);
      }
    });
    updateTopicListHandler(searchTopicsArr);
  });
  /* --------------------
  Theme Filter
  -------------------- */
  const fitlerOneContainer = document.createElement('div');
  fitlerOneContainer.classList.add('g__rt-fitler');
  const f1ArrowIcon = document.createElement('i');
  f1ArrowIcon.setAttribute('class', 'g__rt-down-arrow far fa-solid fa-angle-down');
  fitlerOneContainer.appendChild(f1ArrowIcon);
  const fitlerOne = document.createElement('select');
  fitlerOne.classList.add('g__rt-theme');
  const filterOnePlaceholder = document.createElement('option');
  filterOnePlaceholder.disables = true;
  filterOnePlaceholder.selected = true;
  filterOnePlaceholder.innerText = 'Select Theme';
  fitlerOne.appendChild(filterOnePlaceholder);
  themes.forEach((theme) => {
    const themeOption = document.createElement('option');
    themeOption.value = theme;
    themeOption.innerText = theme;
    fitlerOne.appendChild(themeOption);
  });
  fitlerOneContainer.appendChild(fitlerOne);
  filtersContainer.appendChild(fitlerOneContainer);

  fitlerOne.addEventListener('change', (e) => {
    const theme = e.target.value;
    if (theme === 'Select Theme') {
      filteredTopics = limitedTopics;
    } else {
      filteredTopics = [...new Set(intentTopics.map((topic) => (topic.Theme === theme ? topic : '')))];
      filteredTopics.shift();
    }
    updateTopicListHandler(filteredTopics);

    updateFilterTwo(filteredTopics);
  });
  /* --------------------
  Update Filter Two Based on Filter 1 Selection
  -------------------- */
  function updateFilterTwo(filteredTopics) {
    const f2 = document.querySelector(`.g__rt-categories`);
    console.log(f2);
    f2.innerHTML = '';
    const uniqueList = [...new Set(filteredTopics.map((topic) => topic.Category))];
    uniqueList.forEach((topic) => {
      const catOption = document.createElement('option');
      catOption.value = topic;
      catOption.innerText = topic;
      f2.appendChild(catOption);
    });
  }

  /* --------------------
  Update topics function
  -------------------- */
  function updateTopicListHandler(topicsArr) {
    const topicContainer = document.querySelector(`.g__rt-topics-container`);
    topicContainer.innerHTML = '';
    topicContainer.appendChild(topicsList(topicsArr));
  }

  /* --------------------
  Categories Filter
  -------------------- */
  const fitlerTwoContainer = document.createElement('div');
  fitlerTwoContainer.classList.add('g__rt-fitler');
  const f2ArrowIcon = document.createElement('i');
  f2ArrowIcon.setAttribute('class', 'g__rt-down-arrow far fa-solid fa-angle-down');
  fitlerTwoContainer.appendChild(f2ArrowIcon);
  const fitlerTwo = document.createElement('select');
  fitlerTwo.classList.add('g__rt-categories');
  const filterTwoPlaceholder = document.createElement('option');
  filterTwoPlaceholder.disables = true;
  filterTwoPlaceholder.selected = true;
  filterTwoPlaceholder.innerText = 'Select Category';
  fitlerTwo.appendChild(filterTwoPlaceholder);
  categories.forEach((category) => {
    const categoryOption = document.createElement('option');
    categoryOption.value = category;
    categoryOption.innerText = category;
    fitlerTwo.appendChild(categoryOption);
  });
  fitlerTwoContainer.appendChild(fitlerTwo);
  filtersContainer.appendChild(fitlerTwoContainer);
  /* --------------------
  Top List Container
  -------------------- */
  const topicListContainer = document.createElement('div');
  topicListContainer.classList.add('g__rt-topics-container');

  const infoContainer = document.createElement('div');
  infoContainer.classList.add('g__rt-info-container');

  const infoClose = document.createElement('div');
  infoClose.classList.add('g__rt-close-info');
  const closeIcon = document.createElement('i');
  closeIcon.classList.add('far', 'fa-times');
  closeIcon.addEventListener('click', () => {
    document.querySelector('.g__rt-info-container').classList.toggle('active');
  });
  infoClose.appendChild(closeIcon);
  infoContainer.appendChild(infoClose);

  const topicInfo = document.createElement('div');
  topicInfo.classList.add('g__rt-topic-info');
  infoContainer.appendChild(topicInfo);

  topicListContainer.appendChild(infoContainer);
  topicListContainer.appendChild(topicsList(limitedTopics));
  topicListContainer.addEventListener(
    'click',
    (e) => {
      if (e.target.classList.contains('g__info-icon')) {
        infoHandler(e.target.closest('.g__rt-topic-item'));
      } else if (e.target.classList.contains('g__rt-topic-item')) {
        topicsHandler(e.target);
      } else {
        topicsHandler(e.target.closest('.g__rt-topic-item'));
      }
    },
    true
  );
  filtersContainer.appendChild(topicListContainer);
  /* --------------------
  Update Topics on Click
  -------------------- */
  function infoHandler(topic) {
    document.querySelector('.g__rt-info-container').classList.toggle('active');
    const id = topic.getAttribute('data-id');
    let findTopic = intentTopics.find((topic) => {
      if (id == topic.Topic_ID) {
        return topic;
      }
    });
    console.log(findTopic);
    const infoBlock = document.querySelector('.g__rt-topic-info');
    infoBlock.innerHTML = `
        <p class="g__m-0">Theme</p><p class="g__text-small">${findTopic.Theme}</p>
        <p class="g__m-0">Category</p><p class="g__text-small">${findTopic.Category}</p>
        <p class="g__m-0">Description</p><p class="g__text-small">${findTopic.Description}</p>`;
  }
  /* --------------------
  Update Topics on Click
  -------------------- */
  function topicsHandler(topic) {
    const name = topic.getAttribute('data-name');
    const id = topic.getAttribute('data-id');
    topic.classList.toggle('selected');
    const iconContainer = topic.querySelector('.g__check');
    if (topic.classList.contains('selected')) {
      iconContainer.innerHTML = `<i class="far fa-solid fa-check"></i>`;
    } else {
      iconContainer.innerHTML = `<i class="far fa-solid fa-plus"></i>`;
    }
    const topicObj = {
      name,
      id,
    };
    const isPresent = selectedTopicsArr.findIndex(function (topic) {
      return topic.id === id;
    });
    if (isPresent >= 0) {
      selectedTopicsArr.splice(isPresent, 1);
    } else {
      selectedTopicsArr.push(topicObj);
    }
    const updatePills = document.querySelector(`.g__rt-selected-container`);
    updatePills.innerHTML = '';
    updatePills.appendChild(selectedPillsHandler(selectedTopicsArr));
    const selectedIdArr = [];
    selectedTopicsArr.forEach((selectedTopic) => {
      selectedIdArr.push(selectedTopic.id);
    });
    finalInput.setAttribute('value', selectedIdArr.join());
    return topic;
  }
  /* --------------------
  Selected Pills
  -------------------- */
  function selectedPillsHandler(topics) {
    const pillList = document.createElement('ul');
    pillList.classList.add('g__rt-selected-list');

    topics.forEach((topic) => {
      const selectedItem = document.createElement('li');
      selectedItem.classList.add('g__rt-selected-item');
      selectedItem.setAttribute('data-id', topic.id);
      selectedItem.innerHTML = `${topic.name} <i class="far fa-times"></i>`;
      pillList.appendChild(selectedItem);

      selectedItem.addEventListener('click', (e) => {
        removeItemHandler(selectedItem);
      });
    });
    return pillList;
  }
  /* --------------------
  Delete Topic Handler
  -------------------- */
  function removeItemHandler(selectedItem) {
    const itemsArr = document.querySelectorAll(`.g__topic-item`);
    const deleteId = selectedItem.getAttribute('data-id');
    selectedTopicsArr = selectedTopicsArr.filter(function (topic) {
      return topic.id !== deleteId;
    });
    itemsArr.forEach((item) => {
      const id = item.getAttribute('data-id');
      if (id == deleteId) {
        item.classList.remove('selected');
        const iconContainer = item.querySelector('.g__check');
        iconContainer.innerHTML = '';
        iconContainer.innerHTML = `<i class="far fa-solid fa-plus"></i>`;
      }
    });
    const inputArr = [];
    selectedTopicsArr.forEach((topic) => {
      inputArr.push(topic.id);
    });
    finalInput.setAttribute('value', inputArr.join());
    selectedItem.remove();
  }
  /* --------------------
  Topic List Builder
  -------------------- */
  function topicsList(topicObj) {
    console.log('Building List');
    const topicUl = document.createElement('ul');
    topicUl.classList.add('g__rt-topics-list');
    topicObj.forEach((topic) => {
      const topicItem = document.createElement('li');
      topicItem.classList.add('g__rt-topic-item');
      topicItem.setAttribute('data-value', 'topic');
      topicItem.setAttribute('data-name', topic.Topic_Name);
      topicItem.setAttribute('data-id', topic.Topic_ID);
      topicItem.innerHTML = `<div class="g__item-name"><div class="g__check"><i class="far fa-solid fa-plus"></i></div> ${topic.Topic_Name}</div><div class="g__info-icon">i</div>`;
      topicUl.appendChild(topicItem, topic);
    });
    return topicUl;
  }
  /* --------------------
  Selected Topics Header
  -------------------- */
  const topicsHeading = document.createElement('h5');
  topicsHeading.classList.add('g__mt-15');
  topicsHeading.innerText = 'Your Adjacent Topics';
  filtersContainer.appendChild(topicsHeading);
  /* --------------------
  Selected Container
  -------------------- */
  const selectedContainer = document.createElement('div');
  selectedContainer.classList.add('g__rt-selected-container');
  filtersContainer.appendChild(selectedContainer);
  /* --------------------
  Final input with selected IDs
  -------------------- */
  const finalInput = document.createElement('input');
  finalInput.setAttribute('form_id', 'propensity-assesssment');
  finalInput.type = 'text';
  finalInput.id = 'Adjacent_Topics__c';
  finalInput.name = 'Adjacent_Topics__c';
  finalInput.style.display = 'none';
  filtersContainer.appendChild(finalInput);
  /* --------------------
  Final Return
  -------------------- */
  return filtersContainer;
}
