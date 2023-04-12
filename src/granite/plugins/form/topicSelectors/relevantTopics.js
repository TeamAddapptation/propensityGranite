//import { themes, categories, limitedTopics } from '../../../../demoContent/topicData';
//import intentTopics from '../../../../demoContent/json/intentTopics_v4.json';
function relevantTopics(selArr) {
	/* --------------------
  Global Variables
  -------------------- */
	let selectedTopicsArr = [];
	let filteredTopics = [];
	/* --------------------
  Previously Selected Values
  -------------------- */
	const prevArr = [];
	if (selArr.length) {
		intentTopics.forEach((topic) => {
			selArr.forEach((prevVal) => {
				prevVal == topic.Topic_ID ? prevArr.push(topic) : "";
			});
		});
		selectedTopicsArr = prevArr;
	}
	const filtersContainer = document.createElement("div");
	filtersContainer.id = "relevant-topics__c";
	filtersContainer.classList.add("g__rt-container");
	/* --------------------
  Title, Description & Topic List Link
  -------------------- */
	const header = document.createElement("div");
	header.classList.add("g__rt-header");

	const headerTop = document.createElement("div");
	headerTop.classList.add("g__rt-top");
	header.appendChild(headerTop);

	const heading = document.createElement("h5");
	heading.innerText = "Additional Relevant Topics";
	headerTop.appendChild(heading);

	const fullListLink = document.createElement("a");
	fullListLink.classList.add("g__btn", "g__btn-text");
	fullListLink.href = "/intent_topics_table";
	fullListLink.target = "_blank";
	fullListLink.innerText = "View Full List";
	headerTop.appendChild(fullListLink);

	const desc = document.createElement("p");
	desc.innerText = "(include other keywords, complimentary industries, and/or technology, these will appear as adjacent signals)";
	header.appendChild(desc);

	filtersContainer.appendChild(header);

	/* --------------------
  Search
  -------------------- */
	const searchContainer = document.createElement("div");
	searchContainer.classList.add("g__rt-search");
	const searchIcon = document.createElement("i");
	searchIcon.setAttribute("class", "g__rt-search-icon far fa-search");
	searchContainer.appendChild(searchIcon);
	const search = document.createElement("input");
	search.type = "search";
	search.classList.add("g__multi-search");
	searchContainer.appendChild(search);
	filtersContainer.appendChild(searchContainer);

	/* --------------------
  Search Listener
  -------------------- */
	function delay(callback, ms) {
		var timer = 0;
		return function () {
			var context = this,
				args = arguments;
			clearTimeout(timer);
			timer = setTimeout(function () {
				callback.apply(context, args);
			}, ms || 0);
		};
	}
	search.addEventListener(
		"input",
		delay((e) => {
			e.preventDefault();
			searchHandler(e.target.value, "adjacent_signals");

			function searchHandler(search_value, signal_type) {
				console.log("Time elapsed!", search_value);
				show_loader();
				$("." + signal_type + "_search_results").remove();
				$.ajax({
					type: "POST",
					data: { search_value: search_value, signal_type: signal_type },
					url: "/get_intent_signals",
					success: function (results) {
						console.log("Results: ", results);
						updateTopicListHandler(results);
						hide_loader();
					},
					error: function (error) {
						toastr.error("No matching signals found");
						console.log(error);
						hide_loader();
					},
				});
			}
		}, 900)
	);
	/* --------------------
  Theme Filter
  -------------------- */
	const fitlerOneContainer = document.createElement("div");
	fitlerOneContainer.classList.add("g__rt-fitler");
	const f1ArrowIcon = document.createElement("i");
	f1ArrowIcon.setAttribute("class", "g__rt-down-arrow far fa-solid fa-angle-down");
	fitlerOneContainer.appendChild(f1ArrowIcon);
	const fitlerOne = document.createElement("select");
	fitlerOne.classList.add("g__rt-theme");
	const filterOnePlaceholder = document.createElement("option");
	filterOnePlaceholder.disables = true;
	filterOnePlaceholder.selected = true;
	filterOnePlaceholder.innerText = "Select Theme";
	fitlerOne.appendChild(filterOnePlaceholder);
	themes.forEach((theme) => {
		const themeOption = document.createElement("option");
		themeOption.value = theme;
		themeOption.innerText = theme;
		fitlerOne.appendChild(themeOption);
	});
	fitlerOneContainer.appendChild(fitlerOne);
	filtersContainer.appendChild(fitlerOneContainer);

	fitlerOne.addEventListener("change", (e) => {
		const theme = e.target.value;
		if (theme === "Select Theme") {
			filteredTopics = limitedTopics;
			updateFilterTwo(intentTopics, true);
		} else {
			filteredTopics = [...new Set(intentTopics.map((topic) => (topic.Theme === theme ? topic : "")))];
			filteredTopics.shift();
			updateFilterTwo(filteredTopics);
		}
		updateTopicListHandler(filteredTopics, false);
	});
	/* --------------------
  Update Filter Two Based on Filter 1 Selection
  -------------------- */
	function updateFilterTwo(filteredTopics, isUnique) {
		const f2 = document.querySelector(`.g__rt-categories`);
		f2.innerHTML = "";
		if (isUnique) {
			const updatePlaceholder = document.createElement("option");
			updatePlaceholder.disables = true;
			updatePlaceholder.selected = true;
			updatePlaceholder.innerText = "Select Category";
			f2.appendChild(updatePlaceholder);
		}
		const uniqueList = [...new Set(filteredTopics.map((topic) => topic.Category))];
		uniqueList.forEach((topic) => {
			const catOption = document.createElement("option");
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
		const currentList = document.querySelector(`.g__rt-topics-list`);
		currentList.remove();
		topicContainer.appendChild(topicsList(topicsArr));
	}

	/* --------------------
  Categories Filter
  -------------------- */
	const fitlerTwoContainer = document.createElement("div");
	fitlerTwoContainer.classList.add("g__rt-fitler");
	const f2ArrowIcon = document.createElement("i");
	f2ArrowIcon.setAttribute("class", "g__rt-down-arrow far fa-solid fa-angle-down");
	fitlerTwoContainer.appendChild(f2ArrowIcon);
	const fitlerTwo = document.createElement("select");
	fitlerTwo.classList.add("g__rt-categories");
	const filterTwoPlaceholder = document.createElement("option");
	filterTwoPlaceholder.disables = true;
	filterTwoPlaceholder.selected = true;
	filterTwoPlaceholder.innerText = "Select Category";
	fitlerTwo.appendChild(filterTwoPlaceholder);
	categories.forEach((category) => {
		const categoryOption = document.createElement("option");
		categoryOption.value = category;
		categoryOption.innerText = category;
		fitlerTwo.appendChild(categoryOption);
	});
	fitlerTwoContainer.appendChild(fitlerTwo);
	filtersContainer.appendChild(fitlerTwoContainer);

	fitlerTwo.addEventListener("change", (e) => {
		const category = e.target.value;
		const theme = document.querySelector(`.g__rt-theme`).value;
		if (category === "Select Category") {
			filteredTopics = limitedTopics;
		} else {
			filteredTopics = [...new Set(intentTopics.map((topic) => (topic.Category === category ? topic : "")))];
			filteredTopics.shift();
		}

		if (theme != "Select Theme") {
			filteredTopics = [...new Set(filteredTopics.map((topic) => (topic.Theme === theme ? topic : "")))];
		}
		updateTopicListHandler(filteredTopics);
	});
	/* --------------------
  Top List Container
  -------------------- */
	const topicListContainer = document.createElement("div");
	topicListContainer.classList.add("g__rt-topics-container");

	const infoContainer = document.createElement("div");
	infoContainer.classList.add("g__rt-info-container");

	const infoClose = document.createElement("div");
	infoClose.classList.add("g__rt-close-info");
	const closeIcon = document.createElement("i");
	closeIcon.classList.add("far", "fa-times");
	closeIcon.addEventListener("click", () => {
		document.querySelector(".g__rt-info-container").classList.toggle("active");
	});
	infoClose.appendChild(closeIcon);
	infoContainer.appendChild(infoClose);

	const topicInfo = document.createElement("div");
	topicInfo.classList.add("g__rt-topic-info");
	infoContainer.appendChild(topicInfo);

	topicListContainer.appendChild(infoContainer);
	topicListContainer.appendChild(topicsList(limitedTopics));
	topicListContainer.addEventListener(
		"click",
		(e) => {
			if (e.target.classList.contains("g__info-icon")) {
				infoHandler(e.target.closest(".g__rt-topic-item"));
			} else if (e.target.classList.contains("g__rt-topic-item")) {
				topicsHandler(e.target);
			} else {
				topicsHandler(e.target.closest(".g__rt-topic-item"));
			}
		},
		true
	);
	filtersContainer.appendChild(topicListContainer);
	/* --------------------
  Update Topics on Click
  -------------------- */
	function infoHandler(topic) {
		document.querySelector(".g__rt-info-container").classList.toggle("active");
		const id = topic.getAttribute("data-id");
		let findTopic = intentTopics.find((topic) => {
			if (id == topic.Topic_ID) {
				return topic;
			}
		});
		const infoBlock = document.querySelector(".g__rt-topic-info");
		infoBlock.innerHTML = `
        <p class="g__m-0">Theme</p><p class="g__text-small">${findTopic.Theme}</p>
        <p class="g__m-0">Category</p><p class="g__text-small">${findTopic.Category}</p>
        <p class="g__m-0">Description</p><p class="g__text-small">${findTopic.Description}</p>`;
	}
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
		const updatePills = document.querySelector(`.g__rt-selected-container`);
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
		pillList.classList.add("g__rt-selected-list");

		topics.forEach((topic) => {
			const selectedItem = document.createElement("li");
			selectedItem.classList.add("g__rt-selected-item");
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
		const itemsArr = document.querySelectorAll(`.g__rt-topic-item`);
		const deleteId = selectedItem.getAttribute("data-id");
		console.log(deleteId);
		selectedTopicsArr = selectedTopicsArr.filter(function (topic) {
			console.log("Topic ID: ", topic.Topic_ID);
			console.log("Delete ID: ", parseInt(deleteId));
			return parseInt(topic.Topic_ID) !== parseInt(deleteId);
		});
		console.log(selectedTopicsArr);
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
  Selected Topics Header
  -------------------- */
	const topicsHeading = document.createElement("h5");
	topicsHeading.classList.add("g__mt-15");
	topicsHeading.innerText = "Your Adjacent Topics";
	filtersContainer.appendChild(topicsHeading);
	/* --------------------
  Selected Container
  -------------------- */
	const selectedContainer = document.createElement("div");
	selectedContainer.classList.add("g__rt-selected-container");
	selectedContainer.appendChild(selectedPillsHandler(prevArr));
	filtersContainer.appendChild(selectedContainer);
	/* --------------------
  Topic List Builder
  -------------------- */
	function topicsList(topicObj) {
		const topicUl = document.createElement("ul");
		topicUl.classList.add("g__rt-topics-list");
		topicObj.forEach((topic) => {
			const topicItem = document.createElement("li");
			topicItem.classList.add("g__rt-topic-item");
			topicItem.setAttribute("data-value", "topic");
			topicItem.setAttribute("data-name", topic.Topic_Name);
			topicItem.setAttribute("data-id", topic.Topic_ID);
			topicItem.innerHTML = `<div class="g__item-name"><div class="g__check"><i class="far fa-solid fa-plus"></i></div> ${topic.Topic_Name}</div><div class="g__info-icon">i</div>`;
			if (selectedTopicsArr.length) {
				selectedTopicsArr.forEach((prevTopic) => {
					if (prevTopic.Topic_ID == topic.Topic_ID) {
						topicItem.classList.add("selected");
						topicItem.innerHTML = `<div class="g__item-name"><div class="g__check"><i class="far fa-solid fa-check"></i></div> ${topic.Topic_Name}</div><div class="g__info-icon">i</div>`;
					}
				});
			}
			topicUl.appendChild(topicItem, topic);
		});
		return topicUl;
	}
	/* --------------------
  Final input with selected IDs
  -------------------- */
	const finalInput = document.createElement("input");
	finalInput.setAttribute("form_id", "propensity-assesssment");
	finalInput.type = "text";
	finalInput.id = "Adjacent_Topics__c";
	finalInput.name = "Adjacent_Topics__c";
	if (selArr.length) {
		finalInput.setAttribute("value", selArr.join(","));
	}
	finalInput.style.display = "none";
	filtersContainer.appendChild(finalInput);
	/* --------------------
  Final Return
  -------------------- */
	return filtersContainer;
}
