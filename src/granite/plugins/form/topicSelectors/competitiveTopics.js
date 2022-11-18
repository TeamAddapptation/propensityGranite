// import { limitedCompetitors, competitors } from '../../../../demoContent/topicData';
function competitiveTopics(selArr) {
  /* --------------------
  Global Variables
  -------------------- */
  let selectedTopicsArr = [];
  /* --------------------
  Previously Selected Values
  -------------------- */
  const prevArr = [];
  if (selArr.length) {
    competitors.forEach((topic) => {
      selArr.forEach((prevVal) => {
        prevVal == topic.Topic_ID ? prevArr.push(topic) : '';
      });
    });
    selectedTopicsArr = prevArr;
  }
  const filtersContainer = document.createElement('div');
  filtersContainer.id = 'competitive-topics__c';
  filtersContainer.classList.add('g__ct-container');
  /* --------------------
  Title, Description & Topic List Link
  -------------------- */
  const header = document.createElement('div');
  header.classList.add('g__ct-header');

  const headerTop = document.createElement('div');
  headerTop.classList.add('g__ct-top');
  header.appendChild(headerTop);

  const heading = document.createElement('h5');
  heading.innerText = 'Competitors You Want to Track';
  headerTop.appendChild(heading);

  const fullListLink = document.createElement('a');
  fullListLink.classList.add('g__btn', 'g__btn-text');
  fullListLink.href = '/companies_table';
  fullListLink.target = '_blank';
  fullListLink.innerText = 'View Full List';
  headerTop.appendChild(fullListLink);

  const desc = document.createElement('p');
  desc.innerText = '(these will appear as competitive signals in your results)';
  header.appendChild(desc);

  filtersContainer.appendChild(header);

  /* --------------------
  Search
  -------------------- */
  const searchContainer = document.createElement('div');
  searchContainer.classList.add('g__ct-search');
  const searchIcon = document.createElement('i');
  searchIcon.setAttribute('class', 'g__ct-search-icon far fa-search');
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
    e.preventDefault();
    const searchTopicsArr = [];
    const searchValue = e.target.value.toUpperCase();
    competitors.forEach((topic) => {
      if (topic.Topic_Name.toUpperCase().indexOf(searchValue) > -1) {
        const addTopic = { Topic_ID: topic.Topic_ID, Topic_Name: topic.Topic_Name };
        searchTopicsArr.push(addTopic);
      }
    });
    updateTopicListHandler(searchTopicsArr);
  });
  /* --------------------
  Update topics function
  -------------------- */
  function updateTopicListHandler(topicsArr) {
    const topicContainer = document.querySelector(`.g__ct-topics-container`);
    const currentList = document.querySelector(`.g__ct-topics-list`);
    currentList.remove();
    topicContainer.appendChild(topicsList(topicsArr));
  }
  /* --------------------
  Top List Container
  -------------------- */
  const topicListContainer = document.createElement('div');
  topicListContainer.classList.add('g__ct-topics-container');

  const infoContainer = document.createElement('div');
  infoContainer.classList.add('g__ct-info-container');

  const infoClose = document.createElement('div');
  infoClose.classList.add('g__ct-close-info');
  const closeIcon = document.createElement('i');
  closeIcon.classList.add('far', 'fa-times');
  closeIcon.addEventListener('click', () => {
    document.querySelector('.g__ct-info-container').classList.toggle('active');
  });
  infoClose.appendChild(closeIcon);
  infoContainer.appendChild(infoClose);

  const topicInfo = document.createElement('div');
  topicInfo.classList.add('g__ct-topic-info');
  infoContainer.appendChild(topicInfo);

  topicListContainer.appendChild(infoContainer);
  topicListContainer.appendChild(topicsList(limitedCompetitors));
  topicListContainer.addEventListener(
    'click',
    (e) => {
      if (e.target.classList.contains('g__info-icon')) {
        infoHandler(e.target.closest('.g__ct-topic-item'));
      } else if (e.target.classList.contains('g__ct-topic-item')) {
        topicsHandler(e.target);
      } else {
        topicsHandler(e.target.closest('.g__ct-topic-item'));
      }
    },
    true
  );
  filtersContainer.appendChild(topicListContainer);
  /* --------------------
  Update Topics on Click
  -------------------- */
  function infoHandler(topic) {
    document.querySelector('.g__ct-info-container').classList.toggle('active');
    const id = topic.getAttribute('data-id');
    let findTopic = competitors.find((topic) => {
      if (id == topic.Topic_ID) {
        return topic;
      }
    });
    const infoBlock = document.querySelector('.g__ct-topic-info');
    infoBlock.innerHTML = `
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
      Topic_Name: name,
      Topic_ID: id,
    };
    const hasId = selectedTopicsArr.find((topic) => topic.Topic_ID == id);
    if (hasId) {
      const indexOfObject = selectedTopicsArr.findIndex((object) => {
        return object.Topic_ID == id;
      });
      selectedTopicsArr.splice(indexOfObject, 1);
    } else {
      selectedTopicsArr.push(topicObj);
    }
    const updatePills = document.querySelector(`.g__ct-selected-container`);
    updatePills.innerHTML = '';
    updatePills.appendChild(selectedPillsHandler(selectedTopicsArr));
    const selectedIdArr = [];
    selectedTopicsArr.forEach((selectedTopic) => {
      selectedIdArr.push(parseInt(selectedTopic.Topic_ID));
    });
    finalInput.setAttribute('value', selectedIdArr.join());
    return topic;
  }
  /* --------------------
  Selected Pills
  -------------------- */
  function selectedPillsHandler(topics) {
    const pillList = document.createElement('ul');
    pillList.classList.add('g__ct-selected-list');

    topics.forEach((topic) => {
      const selectedItem = document.createElement('li');
      selectedItem.classList.add('g__ct-selected-item');
      selectedItem.setAttribute('data-id', topic.Topic_ID);
      selectedItem.innerHTML = `${topic.Topic_Name} <i class="far fa-times"></i>`;
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
    const itemsArr = document.querySelectorAll(`.g__ct-topic-item`);
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
    const topicUl = document.createElement('ul');
    topicUl.classList.add('g__ct-topics-list');
    topicObj.forEach((topic) => {
      const topicItem = document.createElement('li');
      topicItem.classList.add('g__ct-topic-item');
      topicItem.setAttribute('data-value', 'topic');
      topicItem.setAttribute('data-name', topic.Topic_Name);
      topicItem.setAttribute('data-id', topic.Topic_ID);
      topicItem.innerHTML = `<div class="g__item-name"><div class="g__check"><i class="far fa-solid fa-plus"></i></div> ${topic.Topic_Name}</div><div class="g__info-icon">i</div>`;
      if (selectedTopicsArr.length) {
        selectedTopicsArr.forEach((prevTopic) => {
          if (prevTopic.Topic_ID == topic.Topic_ID) {
            topicItem.classList.add('selected');
            topicItem.innerHTML = `<div class="g__item-name"><div class="g__check"><i class="far fa-solid fa-check"></i></div> ${topic.Topic_Name}</div><div class="g__info-icon">i</div>`;
          }
        });
      }
      topicUl.appendChild(topicItem, topic);
    });
    return topicUl;
  }
  /* --------------------
  Selected Topics Header
  -------------------- */
  const topicsHeading = document.createElement('h5');
  topicsHeading.classList.add('g__mt-15');
  topicsHeading.innerText = 'Your Competitive Topics';
  filtersContainer.appendChild(topicsHeading);
  /* --------------------
  Selected Container
  -------------------- */
  const selectedContainer = document.createElement('div');
  selectedContainer.classList.add('g__ct-selected-container');
  selectedContainer.appendChild(selectedPillsHandler(prevArr));
  filtersContainer.appendChild(selectedContainer);
  /* --------------------
  Final input with selected IDs
  -------------------- */
  const finalInput = document.createElement('input');
  finalInput.setAttribute('form_id', 'propensity-assesssment');
  finalInput.type = 'text';
  finalInput.id = 'Competitive_Topics__c';
  finalInput.name = 'Competitive_Topics__c';
  if (selArr.length) {
    finalInput.setAttribute('value', selArr.join(','));
  }
  finalInput.style.display = 'none';
  filtersContainer.appendChild(finalInput);
  /* --------------------
  Final Return
  -------------------- */
  return filtersContainer;
}
