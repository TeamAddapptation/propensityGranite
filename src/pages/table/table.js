import graniteTable from '../../granite/table/graniteTable';
import '../../granite/table/graniteTable.css';

const syncList = {
  id: 'table__demo',
  feature: 'table',
  options: {
    type: 'table',
    datatables: true,
    searching: true,
    paging: true,
    page_length: 2,
    scroll_x: false,
  },
  records: [
    {
      type: 'header',
      href: '',
      children: [
        {
          value: 'Name',
        },
        {
          value: 'Description',
          text_align: 'left',
        },
        {
          value: 'Last Run',
        },
        {
          value: '',
        },
      ],
    },
    {
      type: 'row',
      href: '#',
      children: [
        {
          value: 'Account Engagement 1',
        },
        {
          value: 'Reports from Hubspot, Engagement from website',
        },
        {
          value: '08/12/22',
        },
        {
          value: `<button class="g__btn g__btn-danger g__btn-sm" onClick="steveMagic()" type="button">Delete</button>`,
          text_align: 'right',
        },
      ],
    },
    {
      type: 'row',
      href: '',
      children: [
        {
          value: 'Account Intent Score',
        },
        {
          value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
          value: '02/17/22',
        },
        {
          value: `<button class="g__btn g__btn-danger g__btn-sm" onClick="steveMagic()" type="button">Delete</button>`,
          text_align: 'right',
        },
      ],
    },
    {
      type: 'row',
      href: '',
      children: [
        {
          value: 'Account Intent Score 3',
        },
        {
          value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
          value: '02/17/22',
        },
        {
          value: `<button class="g__btn g__btn-danger g__btn-sm" onClick="steveMagic()" type="button">Delete</button>`,
          text_align: 'right',
        },
      ],
    },
    {
      type: 'row',
      href: '',
      children: [
        {
          value: 'Account Intent Score 4',
        },
        {
          value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
          value: '02/17/22',
        },
        {
          value: `<button class="g__btn g__btn-danger g__btn-sm" onClick="steveMagic()" type="button">Delete</button>`,
          text_align: 'right',
        },
      ],
    },
  ],
};

const accounts = {
  id: 'table__demo',
  feature: 'table',
  options: {
    type: 'table',
    columnSort: [2, 'desc'],
    datatables: true,
    searching: true,
    paging: false,
    page_length: 2,
    scroll_x: true,
    auto_width: false,
    wrap_text: true,
    responsive: true,
    column_defs: [{ responsivePriority: 1, targets: 1 }],
    columns: [{ width: '50%' }],
  },
  records: [
    {
      type: 'header',
      background: '#FAFAFA',
      children: [
        {
          value: 'New',
          text_align: 'center',
          classes: 'min-mobile',
        },
        {
          value: 'Acct Name',
          classes: 'min-mobile',
        },
        {
          value: 'Propensity Score',
          classes: 'min-mobile',
        },
        {
          value: 'Website',
          classes: 'not-mobile',
        },
        {
          value: 'Industry',
          classes: 'not-mobile',
        },
        {
          value: 'Competitive Signals',
          title_tag: 'Competitive signals track whenever someone may be searching for this competitor. The more people searching for this signal, the higher your propensity score.',
          classes: 'not-mobile',
        },
        {
          value: 'Adjacent Signals',
          title_tag: 'Adjacent signals track whenever someone may be searching for this topic. The more people searching for this signal, the higher your propensity score.  ',
          classes: 'not-mobile',
        },
      ],
    },
    {
      type: 'row',
      href: '',
      children: [
        {
          value: '',
          text_align: 'center',
        },
        {
          value: 'Textron Financial Corporation',
          text_align: 'left',
        },
        {
          status_indicator: true,
          value: 'complete',
        },
        {
          value: 'textronfinancial.com',
          text_align: 'left',
        },
        {
          value: 'Finance > Portfolio Management & Financial Advice',
          text_align: 'left',
        },
        {
          value: 'Clearbit<br>',
          text_align: 'left',
          html: 'left',
        },
        {
          value: 'Customer Intent<br>B2B Marketing<br>Account-Based Sales Development (ABSD)<br>Account-Based Marketing (ABM)<br>',
          text_align: 'left',
        },
      ],
    },
  ],
};
graniteTable(accounts);
