// import { limitedCompetitors, competitors, selected } from '../../../../demoContent/topicData';
function competitiveTopicsAuto(selArr) {
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
				prevVal == topic.Topic_ID ? prevArr.push(topic) : "";
			});
		});
		selectedTopicsArr = prevArr;
	}
	const topicsCount = selectedTopicsArr.length;
	const filtersContainer = document.createElement("div");
	filtersContainer.id = "competitive-topics__c";
	filtersContainer.classList.add("g__ct-container");
	/* --------------------
  Title, Description & Topic List Link
  -------------------- */
	const header = document.createElement("div");
	header.classList.add("g__ct-header");

	const headerTop = document.createElement("div");
	headerTop.classList.add("g__ct-top");
	header.appendChild(headerTop);

	const heading = document.createElement("h5");
	heading.innerText = `Recommended Competitors (${topicsCount})`;
	headerTop.appendChild(heading);

	const desc = document.createElement("p");
	desc.innerText = "These competitors are recommended based on your selection of relevant topics.";
	header.appendChild(desc);

	filtersContainer.appendChild(header);

	/* --------------------
  Search
  -------------------- */
	const searchContainer = document.createElement("div");
	searchContainer.classList.add("g__ct-search");
	const searchIcon = document.createElement("i");
	searchIcon.setAttribute("class", "g__ct-search-icon far fa-search");
	searchContainer.appendChild(searchIcon);
	const search = document.createElement("input");
	search.type = "text";
	search.classList.add("g__multi-search");
	searchContainer.appendChild(search);
	filtersContainer.appendChild(searchContainer);

	/* --------------------
  Search Listener
  -------------------- */
	search.addEventListener("input", (e) => {
		e.preventDefault();
		const searchTopicsArr = [];
		const searchValue = e.target.value.toUpperCase();
		selectedTopicsArr.forEach((topic) => {
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
  Header - Select All Section
  -------------------- */
	const topicListHeader = document.createElement("div");
	topicListHeader.classList.add("g__ct-topics-header");
	const headerSelectAll = document.createElement("button");
	headerSelectAll.classList.add("g__btn", "g__btn-primary", "g__btn-sm");
	headerSelectAll.type = "button";
	headerSelectAll.innerText = "Select All";
	topicListHeader.appendChild(headerSelectAll);
	filtersContainer.appendChild(topicListHeader);

	headerSelectAll.addEventListener("click", () => {
		const allTopics = document.querySelectorAll(".g__ct-topic-item");
		headerSelectAll.innerText = "";
		if (headerSelectAll.classList.contains("selected")) {
			headerSelectAll.innerText = "Select All";
			allTopics.forEach((topic) => {
				if (topic.classList.contains("selected")) {
					topic.click();
				}
			});
		} else {
			headerSelectAll.innerText = "Clear All Selections";
			allTopics.forEach((topic) => {
				if (!topic.classList.contains("selected")) {
					topic.click();
				}
			});
		}
		headerSelectAll.classList.toggle("selected");
	});

	/* --------------------
  Top List Container
  -------------------- */
	const topicListContainer = document.createElement("div");
	topicListContainer.classList.add("g__ct-topics-container");

	topicListContainer.appendChild(topicsList(selectedTopicsArr));
	selectedTopicsArr = [];
	topicListContainer.addEventListener(
		"click",
		(e) => {
			if (e.target.classList.contains("g__info")) {
				e.target.classList.toggle("active");
			} else if (e.target.classList.contains("g__ct-topic-item")) {
				topicsHandler(e.target);
			} else {
				topicsHandler(e.target.closest(".g__ct-topic-item"));
			}
		},
		true
	);
	filtersContainer.appendChild(topicListContainer);
	/* --------------------
  Update Topics on Click
  -------------------- */
	function topicsHandler(topic) {
		const name = topic.getAttribute("data-name");
		const id = topic.getAttribute("data-id");
		topic.classList.toggle("selected");
		const iconContainer = topic.querySelector(".g__check");
		if (topic.classList.contains("selected")) {
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
		updatePills.innerHTML = "";
		updatePills.appendChild(selectedPillsHandler(selectedTopicsArr));
		const selectedIdArr = [];
		selectedTopicsArr.forEach((selectedTopic) => {
			selectedIdArr.push(parseInt(selectedTopic.Topic_ID));
		});
		finalInput.setAttribute("value", selectedIdArr.join());
		return topic;
	}
	/* --------------------
  Selected Pills
  -------------------- */
	function selectedPillsHandler(topics) {
		const pillList = document.createElement("ul");
		pillList.classList.add("g__ct-selected-list");

		topics.forEach((topic) => {
			const selectedItem = document.createElement("li");
			selectedItem.classList.add("g__ct-selected-item");
			selectedItem.setAttribute("data-id", topic.Topic_ID);
			selectedItem.innerHTML = `${topic.Topic_Name} <i class="far fa-times"></i>`;
			pillList.appendChild(selectedItem);

			selectedItem.addEventListener("click", (e) => {
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
		const deleteId = selectedItem.getAttribute("data-id");
		console.log("Selected Arr Before: ", selectedTopicsArr);
		selectedTopicsArr = selectedTopicsArr.filter(function (topic) {
			return parseInt(topic.Topic_ID) !== parseInt(deleteId);
		});
		itemsArr.forEach((item) => {
			const id = item.getAttribute("data-id");
			if (id == deleteId) {
				item.classList.remove("selected");
				const iconContainer = item.querySelector(".g__check");
				iconContainer.innerHTML = "";
				iconContainer.innerHTML = `<i class="far fa-solid fa-plus"></i>`;
			}
		});
		const inputArr = [];
		selectedTopicsArr.forEach((topic) => {
			inputArr.push(topic.Topic_ID);
		});
		finalInput.setAttribute("value", inputArr.join());
		selectedItem.remove();
	}
	/* --------------------
  Topic List Builder
  -------------------- */
	function topicsList(topicObj) {
		const topicUl = document.createElement("ul");
		topicUl.classList.add("g__ct-topics-list");
		topicObj.forEach((topic) => {
			const topicItem = document.createElement("li");
			topicItem.classList.add("g__ct-topic-item");
			topicItem.setAttribute("data-value", "topic");
			topicItem.setAttribute("data-name", topic.Topic_Name);
			topicItem.setAttribute("data-id", topic.Topic_ID);
			topicItem.innerHTML = `<div class="g__item-name"><div class="g__check"><i class="far fa-solid fa-plus"></i></div><div class="g__name">${topic.Topic_Name}</div></div><div class="g__info">${topic.Description}</div>`;
			topicUl.appendChild(topicItem, topic);
		});
		return topicUl;
	}
	/* --------------------
  Selected Topics Header
  -------------------- */
	const topicsHeading = document.createElement("h5");
	topicsHeading.classList.add("g__mt-15");
	topicsHeading.innerText = "Your Competitive Topics";
	filtersContainer.appendChild(topicsHeading);
	/* --------------------
  Selected Container
  -------------------- */
	const selectedContainer = document.createElement("div");
	selectedContainer.classList.add("g__ct-selected-container");
	// selectedContainer.appendChild(selectedPillsHandler(prevArr));
	filtersContainer.appendChild(selectedContainer);
	/* --------------------
  Final input with selected IDs
  -------------------- */
	const finalInput = document.createElement("input");
	finalInput.setAttribute("form_id", "propensity-assesssment");
	finalInput.type = "text";
	finalInput.id = "Competitive_Topics__c";
	finalInput.name = "Competitive_Topics__c";
	// if (selArr.length) {
	//   finalInput.setAttribute('value', selArr.join(','));
	// }
	finalInput.style.display = "none";
	filtersContainer.appendChild(finalInput);

	/* --------------------
  Final Return
  -------------------- */
	return filtersContainer;
}
