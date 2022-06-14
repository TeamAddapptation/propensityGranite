import graniteTable from "../../granite/table/graniteTable";
import "../../granite/table/graniteTable.css";

const syncList = {
  id: "table__demo",
  feature: "table",
  options: {
    type: "table",
    datatables: true,
    searching: true,
    paging: true,
    page_length: 2,
  },
  records: [
    {
      type: "header",
      href: "",
      children: [
        {
          value: "Name",
        },
        {
          value: "Description",
          text_align: "left",
        },
        {
          value: "Last Run",
        },
        {
          value: "",
        },
      ],
    },
    {
      type: "row",
      href: "#",
      children: [
        {
          value: "Account Engagement 1",
        },
        {
          value: "Reports from Hubspot, Engagement from website",
        },
        {
          value: "08/12/22",
        },
        {
          value: `<button class="g__btn g__btn-danger g__btn-sm" onClick="steveMagic()" type="button">Delete</button>`,
          text_align: "right",
        },
      ],
    },
    {
      type: "row",
      href: "",
      children: [
        {
          value: "Account Intent Score",
        },
        {
          value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
          value: "02/17/22",
        },
        {
          value: `<button class="g__btn g__btn-danger g__btn-sm" onClick="steveMagic()" type="button">Delete</button>`,
          text_align: "right",
        },
      ],
    },
    {
      type: "row",
      href: "",
      children: [
        {
          value: "Account Intent Score 3",
        },
        {
          value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
          value: "02/17/22",
        },
        {
          value: `<button class="g__btn g__btn-danger g__btn-sm" onClick="steveMagic()" type="button">Delete</button>`,
          text_align: "right",
        },
      ],
    },
    {
      type: "row",
      href: "",
      children: [
        {
          value: "Account Intent Score 4",
        },
        {
          value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
          value: "02/17/22",
        },
        {
          value: `<button class="g__btn g__btn-danger g__btn-sm" onClick="steveMagic()" type="button">Delete</button>`,
          text_align: "right",
        },
      ],
    },
  ],
};
graniteTable(syncList);
