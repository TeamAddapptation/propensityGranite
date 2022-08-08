import graniteTable from "../../granite/table/graniteTable";
import "../../granite/table/graniteTable.css";

import granitePicklist from "../../granite/picklist/granitePicklist";
import "../../granite/picklist/granitePicklist.css";

import "./top100.css";

try {
  const top100 = {
    id: "table__top-100",
    feature: "table",
    options: {
      type: "table",
      columnSort: [0, "desc"],
      datatables: true,
      searching: true,
      paging: false,
      page_length: 2,
      fixed: false,
      responsive: true,
      scroll_x: true,
      auto_width: false,
      wrap_text: true,
      column_defs: [{ responsivePriority: 1, targets: 1 }],
    },
    records: [
      {
        type: "header",
        background: "#FAFAFA",
        children: [
          {
            value: "Acct Name",
            classes: "min-mobile",
          },
          {
            value: "Propensity Score",
            id: "c__score",
            classes: "min-mobile",
          },
          {
            value: "New",
            text_align: "center",
            classes: "not-mobile",
          },
          {
            value: "Website",
            classes: "not-mobile",
          },
          {
            value: "Industry",
            classes: "not-mobile",
          },
          {
            value: "Competitive Signals",
            title_tag: "Competitive signals track whenever someone may be searching for this competitor. The more people searching for this signal, the higher your propensity score.",
            classes: "not-mobile",
          },
          {
            value: "Adjacent Signals",
            title_tag: "Adjacent signals track whenever someone may be searching for this topic. The more people searching for this signal, the higher your propensity score.  ",
            classes: "not-mobile",
          },
        ],
      },
      {
        type: "row",
        href: "",
        children: [
          {
            value: "Textron Financial Corporation",
            text_align: "left",
          },
          {
            value: 100,
            score: true,
            text_align: "center",
          },
          {
            value: "",
            text_align: "center",
          },
          {
            value: "textronfinancial.com",
            text_align: "left",
          },
          {
            value: "Finance > Portfolio Management & Financial Advice",
            text_align: "left",
          },
          {
            value: "Clearbit<br>",
            text_align: "left",
            html: "left",
          },
          {
            value: "Customer Intent<br>B2B Marketing<br>Account-Based Sales Development (ABSD)<br>Account-Based Marketing (ABM)<br>",
            text_align: "left",
          },
        ],
      },
      {
        type: "row",
        href: "",
        children: [
          {
            value: "Bancorp Inc",
            text_align: "left",
          },
          {
            value: 14,
            score: true,
            text_align: "center",
          },
          {
            value: "",
            text_align: "center",
          },
          {
            value: "thebancorp.com",
            text_align: "left",
          },
          {
            value: "Finance > Banking",
            text_align: "left",
          },
          {
            value: "Clearbit<br>",
            text_align: "left",
            html: "left",
          },
          {
            value: "Intent Data<br>Bombora<br>Account-Based Experience (ABX)<br>B2B Marketing<br>",
            text_align: "left",
          },
        ],
      },
      {
        type: "row",
        href: "",
        children: [
          {
            value: "The Hatch",
            text_align: "left",
          },
          {
            value: 58,
            score: true,
            text_align: "center",
          },
          {
            value: "",
            text_align: "center",
          },
          {
            value: "thehatchvenue.com",
            text_align: "left",
          },
          {
            value: "Recreation",
            text_align: "left",
          },
          {
            value: "Terminus<br>6Sense<br>",
            text_align: "left",
            html: "left",
          },
          {
            value: "Customer Intent<br>B2B Marketing<br>Intent Marketing<br>Intent Data<br>",
            text_align: "left",
          },
        ],
      },
    ],
  };
  graniteTable(top100);
} catch (error) {
  console.error(error);
}

const search = document.getElementById("g__table__top-100_filter");
if (search) {
  search.remove();
  const searchContainer = document.getElementById("g__search-bar");
  searchContainer.appendChild(search);
}

try {
  const filterSignal = {
    id: "picklist__filter-signals",
    options: {
      sf_key: "sf_key",
      select_id: "g__filter-signals",
      placeholder: "Filter Signal",
      classes: "",
      select_options: [
        ["option-1", "option 1"],
        ["option-2", "option 2"],
        ["option-3", "option 3"],
      ],
    },
    records: [],
  };
  granitePicklist(filterSignal);
} catch (error) {
  console.error(error);
}

const scoreHeader = document.getElementById("c__score");
if (scoreHeader) {
  if (window.innerWidth <= 768) {
    scoreHeader.innerText = "Score";
  }
}
