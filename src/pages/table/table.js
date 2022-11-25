import graniteTable from '../../granite/table/graniteTable';
import '../../granite/table/graniteTable.css';
import './table.css';
const accounts = {
  id: 'table__demo',
  feature: 'table',
  options: {
    type: 'table',
    columnSort: [0, 'desc'],
    datatables: true,
    searching: true,
    paging: false,
    page_length: 2,
    fixed: false,
    responsive: true,
    scroll_x: true,
    scroll_y: '750px',
    auto_width: false,
    wrap_text: true,
    column_defs: [{ responsivePriority: 1, targets: 1 }],
    // type: 'table',
    // fixed: false,
    // columnSort: [4, 'desc'],
    // datatables: true,
    // searching: true,
    // paging: true,
    // pageLength: 25,
    // scroll_x: false,
    // scroll_y: '',
    // auto_width: true,
    // wrap_text: false,
    // responsive: true,
    // column_defs: [{ width: '400px', responsivePriority: 1, targets: 1 }, { width: '100px' }, { width: '250px' }],
  },
  records: [
    {
      type: 'header',
      background: '#FAFAFA',
      children: [
        {
          value: '',
          select: true,
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
          value: 'New',
          text_align: 'center',
          classes: 'min-mobile',
        },
        {
          value: 'Website',
          classes: 'min-mobile',
        },
        {
          value: 'Industry',
          classes: 'min-mobile',
        },
        {
          value: 'Company Size',
          classes: 'min-mobile',
        },
        {
          value: 'Competitive Signals',
          title_tag: 'Competitive signals track whenever someone may be searching for this competitor. The more people searching for this signal, the higher your propensity score.',
          classes: 'min-mobile',
        },
        {
          value: 'Adjacent Signals',
          title_tag: 'Adjacent signals track whenever someone may be searching for this topic. The more people searching for this signal, the higher your propensity score.  ',
          classes: 'min-mobile',
        },
      ],
    },
    {
      type: 'row',
      href: '',
      children: [
        {
          value: 'amschoolorg',
          select: true,
        },
        {
          value: 'American School Of Tegucigalpa',
          text_align: 'left',
        },
        {
          value: 40,
          score: true,
          text_align: 'center',
        },
        {
          value: '',
          text_align: 'center',
        },
        {
          value: "<a href='https://www.amschool.org' target='_blank'>amschool.org</a>",
          text_align: 'left',
        },
        {
          value: 'Education',
          text_align: 'left',
        },
        {
          value: 'Medium-Small (50 - 199 Employees)',
          text_align: 'left',
        },
        {
          value: "<div class='ellipsis_data add_ellipsis' >",
          text_align: 'left',
          html: 'left',
        },
        {
          value: "<div class='ellipsis_data add_ellipsis' >Accounting<br>",
          text_align: 'left',
        },
      ],
    },
    {
      type: 'row',
      href: '',
      children: [
        {
          value: 'anahuacmx',
          select: true,
        },
        {
          value: 'Universidad Anáhuac Puebla',
          text_align: 'left',
        },
        {
          value: 25,
          score: true,
          text_align: 'center',
        },
        {
          value: '<div class=“c__new-account”>&#x2B50;</div>',
          text_align: 'center',
        },
        {
          value: "<a href='https://www.anahuac.mx' target='_blank'>anahuac.mx</a>",
          text_align: 'left',
        },
        {
          value: 'Education > Colleges & Universities',
          text_align: 'left',
        },
        {
          value: 'Medium (200 - 499 Employees)',
          text_align: 'left',
        },
        {
          value: "<div class='ellipsis_data add_ellipsis' >",
          text_align: 'left',
          html: 'left',
        },
        {
          value: "<div class='ellipsis_data add_ellipsis' >401k Audit<br>",
          text_align: 'left',
        },
      ],
    },
    {
      type: 'row',
      href: '',
      children: [
        {
          value: 'humboldtedcr',
          select: true,
        },
        {
          value: 'Colegio Humboldt, San José, Costa Rica',
          text_align: 'left',
        },
        {
          value: 100,
          score: true,
          text_align: 'center',
        },
        {
          value: '',
          text_align: 'center',
        },
        {
          value: "<a href='https://www.humboldt.ed.cr' target='_blank'>humboldt.ed.cr</a>",
          text_align: 'left',
        },
        {
          value: 'Education > K-12 Schools',
          text_align: 'left',
        },
        {
          value: 'Medium-Small (50 - 199 Employees)',
          text_align: 'left',
        },
        {
          value: "<div class='ellipsis_data add_ellipsis' >Airbus<br>Aer Lingus<br>",
          text_align: 'left',
          html: 'left',
        },
        {
          value: "<div class='ellipsis_data add_ellipsis' >Certified Community BH Clinic (CCBHC)<br>Accounting<br>Industry Week<br>401k Audit<br>Wealth Management<br>",
          text_align: 'left',
        },
      ],
    },
    {
      type: 'row',
      href: '',
      children: [
        {
          value: 'saintmaryedcr',
          select: true,
        },
        {
          value: 'Saint Mary School',
          text_align: 'left',
        },
        {
          value: 25,
          score: true,
          text_align: 'center',
        },
        {
          value: '<div class=“c__new-account”>&#x2B50;</div>',
          text_align: 'center',
        },
        {
          value: "<a href='https://www.saintmary.ed.cr' target='_blank'>saintmary.ed.cr</a>",
          text_align: 'left',
        },
        {
          value: 'Education > K-12 Schools',
          text_align: 'left',
        },
        {
          value: 'Medium-Small (50 - 199 Employees)',
          text_align: 'left',
        },
        {
          value: "<div class='ellipsis_data add_ellipsis' >Aer Lingus<br>Airbus<br>",
          text_align: 'left',
          html: 'left',
        },
        {
          value: "<div class='ellipsis_data add_ellipsis' >Accounting<br>401k Audit<br>",
          text_align: 'left',
        },
      ],
    },
  ],
};
graniteTable(accounts);
