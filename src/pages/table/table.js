import graniteTable from '../../granite/table/graniteTable';
import '../../granite/table/graniteTable.css';

const accounts = {
  id: 'table__demo',
  feature: 'table',
  options: {
    type: 'table',
    columnSort: [2, 'desc'],
    datatables: true,
    searching: true,
    paging: true,
    pageLength: 25,
    scroll_x: true,
    scroll_y: '',
    auto_width: false,
    wrap_text: true,
    responsive: false,
    column_defs: [{ responsivePriority: 1, targets: 1 }],
    column_widths: [{ width: '250px', targets: 0 }],
  },
  records: [
    {
      type: 'header',
      background: '#FAFAFA',
      children: [
        {
          value: '',
          select: true,
          text_align: 'center',
        },
        {
          value: 'Acct Name',
        },
        {
          value: 'Propensity Score',
        },
        {
          value: 'Website',
        },
        {
          value: 'Industry',
        },
        {
          value: 'Company Size',
        },
        {
          value: 'Competitive Signals',
          title_tag: 'Competitive signals track whenever someone may be searching for this competitor. The more people searching for this signal, the higher your propensity score.',
        },
        {
          value: 'Adjacent Signals',
          title_tag: 'Adjacent signals track whenever someone may be searching for this topic. The more people searching for this signal, the higher your propensity score.  ',
        },
      ],
    },
    {
      type: 'row',
      href: '',
      children: [
        {
          value: 'a16z',
          select: true,
          url: 'a16z.com',
          text_align: 'center',
        },
        {
          value: 'Andreessen Horowitz',
          text_align: 'left',
        },
        {
          value: 95,
          score: true,
          text_align: 'center',
        },
        {
          value: 'a16z.com',
          text_align: 'left',
        },
        {
          value: 'Finance > Venture Capital Private Equity & Fund Raising',
          text_align: 'left',
        },
        {
          value: 'Medium (200 - 499 Employees)',
          text_align: 'left',
        },
        {
          value: '',
          text_align: 'left',
          html: 'left',
        },
        {
          value: 'Risk Assessment<br>Cloud Infrastructure Entitlement Management (CIEM)<br>Risk Management Software<br>',
          text_align: 'left',
        },
      ],
    },
    {
      type: 'row',
      href: '',
      children: [
        {
          value: 'a1cu',
          select: true,
          url: 'a1cu.org',
          text_align: 'center',
        },
        {
          value: 'AMERICAN 1 CREDIT UNION',
          text_align: 'left',
        },
        {
          value: 25,
          score: true,
          text_align: 'center',
        },
        {
          value: 'a1cu.org',
          text_align: 'left',
        },
        {
          value: 'Finance > Banking',
          text_align: 'left',
        },
        {
          value: 'Medium-Small (50 - 199 Employees)',
          text_align: 'left',
        },
        {
          value: '',
          text_align: 'left',
          html: 'left',
        },
        {
          value: 'Vendor Privacy Risk<br>Azure AD Entitlement<br>',
          text_align: 'left',
        },
      ],
    },
  ],
};
graniteTable(accounts);
