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
          value: 100,
          score: true,
          text_align: 'center',
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
    {
      type: 'row',
      href: '',
      children: [
        {
          value: '',
          text_align: 'center',
        },
        {
          value: 'Bancorp Inc',
          text_align: 'left',
        },
        {
          value: 100,
          score: true,
          text_align: 'center',
        },
        {
          value: 'thebancorp.com',
          text_align: 'left',
        },
        {
          value: 'Finance > Banking',
          text_align: 'left',
        },
        {
          value: 'Clearbit<br>',
          text_align: 'left',
          html: 'left',
        },
        {
          value: 'Intent Data<br>Bombora<br>Account-Based Experience (ABX)<br>B2B Marketing<br>',
          text_align: 'left',
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
          value: 'The Hatch',
          text_align: 'left',
        },
        {
          value: 100,
          score: true,
          text_align: 'center',
        },
        {
          value: 'thehatchvenue.com',
          text_align: 'left',
        },
        {
          value: 'Recreation',
          text_align: 'left',
        },
        {
          value: 'Terminus<br>6Sense<br>',
          text_align: 'left',
          html: 'left',
        },
        {
          value: 'Customer Intent<br>B2B Marketing<br>Intent Marketing<br>Intent Data<br>',
          text_align: 'left',
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
          value: 'THE LOG CABIN BANQUET & MEETING HOUSE, INC',
          text_align: 'left',
        },
        {
          value: 100,
          score: true,
          text_align: 'center',
        },
        {
          value: 'thelogcabin.com',
          text_align: 'left',
        },
        {
          value: 'Hospitality & Hotels',
          text_align: 'left',
        },
        {
          value: '6Sense<br>Clearbit<br>',
          text_align: 'left',
          html: 'left',
        },
        {
          value: 'Customer Intent<br>Intent Data<br>Account-Based Sales Development (ABSD)<br>',
          text_align: 'left',
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
          value: 'THERM-ALL, INC',
          text_align: 'left',
        },
        {
          value: 100,
          score: true,
          text_align: 'center',
        },
        {
          value: 'therm-all.com',
          text_align: 'left',
        },
        {
          value: 'Manufacturing > Chemicals & Gases',
          text_align: 'left',
        },
        {
          value: '6Sense<br>Clearbit<br>',
          text_align: 'left',
          html: 'left',
        },
        {
          value: 'Bombora<br>Intent Data<br>Customer Intent<br>Account-Based Marketing (ABM)<br>Account-Based Experience (ABX)<br>Account-Based Sales Development (ABSD)<br>',
          text_align: 'left',
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
          value: 'Price4Limo, LLC',
          text_align: 'left',
        },
        {
          value: 54,
          score: true,
          text_align: 'center',
        },
        {
          value: 'thetaxinews.com',
          text_align: 'left',
        },
        {
          value: 'Transportation & Travel > Trucking & Logistics',
          text_align: 'left',
        },
        {
          value: '6Sense<br>',
          text_align: 'left',
          html: 'left',
        },
        {
          value: 'Account-Based Marketing (ABM)<br>B2B Marketing<br>Intent Data<br>Account-Based Experience (ABX)<br>',
          text_align: 'left',
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
          value: 'THOMA BRAVO LLC',
          text_align: 'left',
        },
        {
          value: 100,
          score: true,
          text_align: 'center',
        },
        {
          value: 'thomabravo.com',
          text_align: 'left',
        },
        {
          value: 'Finance > Venture Capital Private Equity & Fund Raising',
          text_align: 'left',
        },
        {
          value: 'Clearbit<br>',
          text_align: 'left',
          html: 'left',
        },
        {
          value: 'Bombora<br>Intent Data<br>B2B Marketing<br>Account-Based Sales Development (ABSD)<br>Account-Based Marketing (ABM)<br>',
          text_align: 'left',
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
          value: 'Tennessee Bureau of Investigation',
          text_align: 'left',
        },
        {
          value: 100,
          score: true,
          text_align: 'center',
        },
        {
          value: 'tn.gov',
          text_align: 'left',
        },
        {
          value: 'Government > State & Province',
          text_align: 'left',
        },
        {
          value: 'Clearbit<br>',
          text_align: 'left',
          html: 'left',
        },
        {
          value: 'Customer Intent<br>Bombora<br>Account-Based Experience (ABX)<br>B2B Marketing<br>Intent Data<br>',
          text_align: 'left',
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
          value: 'Total Quality Logistics',
          text_align: 'left',
        },
        {
          value: 100,
          score: true,
          text_align: 'center',
        },
        {
          value: 'tql.com',
          text_align: 'left',
        },
        {
          value: 'Transportation & Travel > Trucking & Logistics',
          text_align: 'left',
        },
        {
          value: 'Terminus<br>6Sense<br>Clearbit<br>',
          text_align: 'left',
          html: 'left',
        },
        {
          value: 'B2B Marketing<br>Account-Based Experience (ABX)<br>',
          text_align: 'left',
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
          value: 'Weaver Popcorn Company, Inc.',
          text_align: 'left',
        },
        {
          value: 100,
          score: true,
          text_align: 'center',
        },
        {
          value: 'trails-end.com',
          text_align: 'left',
        },
        {
          value: 'Manufacturing > Food & Beverage',
          text_align: 'left',
        },
        {
          value: 'Demandbase<br>',
          text_align: 'left',
          html: 'left',
        },
        {
          value: 'Account-Based Sales Development (ABSD)<br>Intent Data<br>Bombora<br>Account-Based Marketing (ABM)<br>',
          text_align: 'left',
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
          value: 'The Trane Company Inc.',
          text_align: 'left',
        },
        {
          value: 23,
          score: true,
          text_align: 'center',
        },
        {
          value: 'trane.com',
          text_align: 'left',
        },
        {
          value: 'Manufacturing > Machinery',
          text_align: 'left',
        },
        {
          value: 'Terminus<br>Clearbit<br>6Sense<br>',
          text_align: 'left',
          html: 'left',
        },
        {
          value: 'Intent Data<br>B2B Marketing<br>Customer Intent<br>Account-Based Experience (ABX)<br>Account-Based Marketing (ABM)<br>Account-Based Sales Development (ABSD)<br>Bombora<br>',
          text_align: 'left',
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
          value: 'Trans Union Customs Service, Inc.',
          text_align: 'left',
        },
        {
          value: 100,
          score: true,
          text_align: 'center',
        },
        {
          value: 'trans-union.com',
          text_align: 'left',
        },
        {
          value: 'Business Services > Import/Export',
          text_align: 'left',
        },
        {
          value: 'Clearbit<br>',
          text_align: 'left',
          html: 'left',
        },
        {
          value: 'Customer Intent<br>Bombora<br>B2B Marketing<br>Account-Based Sales Development (ABSD)<br>Account-Based Experience (ABX)<br>Account-Based Marketing (ABM)<br>',
          text_align: 'left',
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
          value: 'Transwestern General Agency, Inc.',
          text_align: 'left',
        },
        {
          value: 100,
          score: true,
          text_align: 'center',
        },
        {
          value: 'transwestern.com',
          text_align: 'left',
        },
        {
          value: 'Insurance',
          text_align: 'left',
        },
        {
          value: 'Clearbit<br>',
          text_align: 'left',
          html: 'left',
        },
        {
          value: 'Intent Data<br>Account-Based Marketing (ABM)<br>Account-Based Experience (ABX)<br>Intent Marketing<br>Customer Intent<br>Bombora<br>B2B Marketing<br>',
          text_align: 'left',
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
          value: 'TravelStore, Inc.',
          text_align: 'left',
        },
        {
          value: 100,
          score: true,
          text_align: 'center',
        },
        {
          value: 'travelstore.com',
          text_align: 'left',
        },
        {
          value: 'Hospitality & Hotels',
          text_align: 'left',
        },
        {
          value: 'Clearbit<br>6Sense<br>',
          text_align: 'left',
          html: 'left',
        },
        {
          value: 'Intent Data<br>Bombora<br>Account-Based Experience (ABX)<br>Account-Based Sales Development (ABSD)<br>',
          text_align: 'left',
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
          value: 'Treble',
          text_align: 'left',
        },
        {
          value: 100,
          score: true,
          text_align: 'center',
        },
        {
          value: 'treblepr.com',
          text_align: 'left',
        },
        {
          value: 'Business Services > Advertising & Marketing',
          text_align: 'left',
        },
        {
          value: '6Sense<br>',
          text_align: 'left',
          html: 'left',
        },
        {
          value: 'Bombora<br>B2B Marketing<br>Account-Based Marketing (ABM)<br>Account-Based Sales Development (ABSD)<br>',
          text_align: 'left',
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
          value: 'Triblio, Inc.',
          text_align: 'left',
        },
        {
          value: 100,
          score: true,
          text_align: 'center',
        },
        {
          value: 'triblio.com',
          text_align: 'left',
        },
        {
          value: 'Software',
          text_align: 'left',
        },
        {
          value: '6Sense<br>',
          text_align: 'left',
          html: 'left',
        },
        {
          value: 'B2B Marketing<br>Account-Based Experience (ABX)<br>Bombora<br>Account-Based Marketing (ABM)<br>',
          text_align: 'left',
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
          value: 'TRINITY TECH',
          text_align: 'left',
        },
        {
          value: 100,
          score: true,
          text_align: 'center',
        },
        {
          value: 'trinitytech.ca',
          text_align: 'left',
        },
        {
          value: 'Software',
          text_align: 'left',
        },
        {
          value: '6Sense<br>',
          text_align: 'left',
          html: 'left',
        },
        {
          value: 'Intent Data<br>B2B Marketing<br>Account-Based Sales Development (ABSD)<br>Customer Intent<br>Bombora<br>Account-Based Experience (ABX)<br>',
          text_align: 'left',
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
          value: 'TRIUMF',
          text_align: 'left',
        },
        {
          value: 100,
          score: true,
          text_align: 'center',
        },
        {
          value: 'triumf.ca',
          text_align: 'left',
        },
        {
          value: 'Education',
          text_align: 'left',
        },
        {
          value: '6Sense<br>',
          text_align: 'left',
          html: 'left',
        },
        {
          value: 'Intent Data<br>Customer Intent<br>Bombora<br>Account-Based Sales Development (ABSD)<br>Account-Based Experience (ABX)<br>Account-Based Marketing (ABM)<br>',
          text_align: 'left',
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
          value: 'Trivers Associates, Inc.',
          text_align: 'left',
        },
        {
          value: 100,
          score: true,
          text_align: 'center',
        },
        {
          value: 'trivers.com',
          text_align: 'left',
        },
        {
          value: 'Construction',
          text_align: 'left',
        },
        {
          value: '6Sense<br>Demandbase<br>Clearbit<br>',
          text_align: 'left',
          html: 'left',
        },
        {
          value: 'B2B Marketing<br>Account-Based Marketing (ABM)<br>',
          text_align: 'left',
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
          value: 'TrueAccord Corp.',
          text_align: 'left',
        },
        {
          value: 100,
          score: true,
          text_align: 'center',
        },
        {
          value: 'trueaccord.com',
          text_align: 'left',
        },
        {
          value: 'Finance > Portfolio Management & Financial Advice',
          text_align: 'left',
        },
        {
          value: '6Sense<br>',
          text_align: 'left',
          html: 'left',
        },
        {
          value: 'Customer Intent<br>Bombora<br>Account-Based Sales Development (ABSD)<br>Intent Data<br>B2B Marketing<br>Account-Based Experience (ABX)<br>',
          text_align: 'left',
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
          value: 'Twitch Interactive, Inc.',
          text_align: 'left',
        },
        {
          value: 100,
          score: true,
          text_align: 'center',
        },
        {
          value: 'twitch.tv',
          text_align: 'left',
        },
        {
          value: 'Software',
          text_align: 'left',
        },
        {
          value: '6Sense<br>Clearbit<br>',
          text_align: 'left',
          html: 'left',
        },
        {
          value: 'Intent Data<br>Customer Intent<br>Bombora<br>Account-Based Marketing (ABM)<br>',
          text_align: 'left',
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
          value: 'Tyndale Company, Inc.',
          text_align: 'left',
        },
        {
          value: 100,
          score: true,
          text_align: 'center',
        },
        {
          value: 'tyndaleusa.com',
          text_align: 'left',
        },
        {
          value: 'Retail > Apparel & Fashion',
          text_align: 'left',
        },
        {
          value: 'Clearbit<br>6Sense<br>',
          text_align: 'left',
          html: 'left',
        },
        {
          value: 'Customer Intent<br>Account-Based Experience (ABX)<br>B2B Marketing<br>Account-Based Sales Development (ABSD)<br>Account-Based Marketing (ABM)<br>Bombora<br>Intent Data<br>',
          text_align: 'left',
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
          value: 'THE GOVERNORS OF THE UNIVERSITY OF ALBERTA',
          text_align: 'left',
        },
        {
          value: 100,
          score: true,
          text_align: 'center',
        },
        {
          value: 'ualberta.ca',
          text_align: 'left',
        },
        {
          value: 'Non-Profit',
          text_align: 'left',
        },
        {
          value: 'Clearbit<br>Terminus<br>',
          text_align: 'left',
          html: 'left',
        },
        {
          value: 'B2B Marketing<br>Intent Data<br>Account-Based Experience (ABX)<br>Customer Intent<br>Bombora<br>Intent Marketing<br>Account-Based Sales Development (ABSD)<br>Account-Based Marketing (ABM)<br>',
          text_align: 'left',
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
          value: 'Uber Technologies',
          text_align: 'left',
        },
        {
          value: 100,
          score: true,
          text_align: 'center',
        },
        {
          value: 'uber.com',
          text_align: 'left',
        },
        {
          value: 'Consumer Services',
          text_align: 'left',
        },
        {
          value: 'Clearbit<br>Demandbase<br>6Sense<br>',
          text_align: 'left',
          html: 'left',
        },
        {
          value: 'B2B Marketing<br>Account-Based Marketing (ABM)<br>Customer Intent<br>Account-Based Sales Development (ABSD)<br>Bombora<br>Intent Data<br>Account-Based Experience (ABX)<br>',
          text_align: 'left',
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
          value: 'Flyp Technologies Inc.',
          text_align: 'left',
        },
        {
          value: 100,
          score: true,
          text_align: 'center',
        },
        {
          value: 'uberflip.com',
          text_align: 'left',
        },
        {
          value: 'Software',
          text_align: 'left',
        },
        {
          value: 'Clearbit<br>Terminus<br>',
          text_align: 'left',
          html: 'left',
        },
        {
          value: 'Intent Data<br>Account-Based Sales Development (ABSD)<br>Account-Based Experience (ABX)<br>Customer Intent<br>',
          text_align: 'left',
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
          value: 'Union Bank of California',
          text_align: 'left',
        },
        {
          value: 100,
          score: true,
          text_align: 'center',
        },
        {
          value: 'uboc.com',
          text_align: 'left',
        },
        {
          value: 'Finance > Banking',
          text_align: 'left',
        },
        {
          value: '6Sense<br>',
          text_align: 'left',
          html: 'left',
        },
        {
          value: 'Account-Based Experience (ABX)<br>Account-Based Marketing (ABM)<br>B2B Marketing<br>Bombora<br>',
          text_align: 'left',
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
          value: 'THE GOVERNORS OF THE UNIVERSITY OF CALGARY',
          text_align: 'left',
        },
        {
          value: 100,
          score: true,
          text_align: 'center',
        },
        {
          value: 'ucalgary.ca',
          text_align: 'left',
        },
        {
          value: 'Education',
          text_align: 'left',
        },
        {
          value: 'Clearbit<br>Terminus<br>Demandbase<br>',
          text_align: 'left',
          html: 'left',
        },
        {
          value: 'Intent Data<br>Account-Based Marketing (ABM)<br>B2B Marketing<br>Bombora<br>Account-Based Sales Development (ABSD)<br>Account-Based Experience (ABX)<br>Customer Intent<br>',
          text_align: 'left',
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
          value: 'Daniel Drake Center for Post-Acute Care, LLC',
          text_align: 'left',
        },
        {
          value: 100,
          score: true,
          text_align: 'center',
        },
        {
          value: 'uchealth.com',
          text_align: 'left',
        },
        {
          value: 'Healthcare > Hospitals & Clinics',
          text_align: 'left',
        },
        {
          value: 'Clearbit<br>',
          text_align: 'left',
          html: 'left',
        },
        {
          value: 'Intent Data<br>Account-Based Marketing (ABM)<br>Bombora<br>Account-Based Sales Development (ABSD)<br>Account-Based Experience (ABX)<br>',
          text_align: 'left',
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
          value: 'DEVRON H CHAR MD',
          text_align: 'left',
        },
        {
          value: 76,
          score: true,
          text_align: 'center',
        },
        {
          value: 'ucsfmedctr.org',
          text_align: 'left',
        },
        {
          value: 'Healthcare > Hospitals & Clinics',
          text_align: 'left',
        },
        {
          value: '6Sense<br>Clearbit<br>',
          text_align: 'left',
          html: 'left',
        },
        {
          value: 'Intent Data<br>Bombora<br>B2B Marketing<br>',
          text_align: 'left',
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
          value: 'UnitedHealthcare National Accounts',
          text_align: 'left',
        },
        {
          value: 100,
          score: true,
          text_align: 'center',
        },
        {
          value: 'uhc.com',
          text_align: 'left',
        },
        {
          value: 'Healthcare > Hospitals & Clinics',
          text_align: 'left',
        },
        {
          value: 'Clearbit<br>6Sense<br>',
          text_align: 'left',
          html: 'left',
        },
        {
          value: 'Intent Data<br>B2B Marketing<br>Customer Intent<br>Account-Based Experience (ABX)<br>Account-Based Sales Development (ABSD)<br>Account-Based Marketing (ABM)<br>Bombora<br>',
          text_align: 'left',
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
          value: 'United Launch Services, LLC',
          text_align: 'left',
        },
        {
          value: 100,
          score: true,
          text_align: 'center',
        },
        {
          value: 'ulalaunch.com',
          text_align: 'left',
        },
        {
          value: 'Transportation & Travel > Aviation & Aerospace',
          text_align: 'left',
        },
        {
          value: 'Clearbit<br>6Sense<br>',
          text_align: 'left',
          html: 'left',
        },
        {
          value: 'Intent Data<br>Customer Intent<br>Account-Based Experience (ABX)<br>Bombora<br>B2B Marketing<br>',
          text_align: 'left',
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
          value: 'UL LLC',
          text_align: 'left',
        },
        {
          value: 34,
          score: true,
          text_align: 'center',
        },
        {
          value: 'ul.com',
          text_align: 'left',
        },
        {
          value: 'Construction > Architecture',
          text_align: 'left',
        },
        {
          value: 'Clearbit<br>6Sense<br>',
          text_align: 'left',
          html: 'left',
        },
        {
          value: 'Account-Based Marketing (ABM)<br>Intent Data<br>Customer Intent<br>Account-Based Sales Development (ABSD)<br>Account-Based Experience (ABX)<br>B2B Marketing<br>',
          text_align: 'left',
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
          value: 'URBAN COMMUNICATIONS INC',
          text_align: 'left',
        },
        {
          value: 100,
          score: true,
          text_align: 'center',
        },
        {
          value: 'unet.ca',
          text_align: 'left',
        },
        {
          value: 'Telecommunications',
          text_align: 'left',
        },
        {
          value: '6Sense<br>Clearbit<br>',
          text_align: 'left',
          html: 'left',
        },
        {
          value: 'Account-Based Experience (ABX)<br>Intent Data<br>Account-Based Marketing (ABM)<br>Bombora<br>',
          text_align: 'left',
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
          value: 'USCI INC dba Universal Systems',
          text_align: 'left',
        },
        {
          value: 100,
          score: true,
          text_align: 'center',
        },
        {
          value: 'uni-sys.com',
          text_align: 'left',
        },
        {
          value: 'Retail > Consumer Electronics',
          text_align: 'left',
        },
        {
          value: 'Demandbase<br>',
          text_align: 'left',
          html: 'left',
        },
        {
          value: 'Bombora<br>Account-Based Experience (ABX)<br>Intent Data<br>Customer Intent<br>B2B Marketing<br>',
          text_align: 'left',
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
          value: 'Unitas Global',
          text_align: 'left',
        },
        {
          value: 100,
          score: true,
          text_align: 'center',
        },
        {
          value: 'unitasglobal.com',
          text_align: 'left',
        },
        {
          value: 'Business Services',
          text_align: 'left',
        },
        {
          value: '6Sense<br>Clearbit<br>Demandbase<br>',
          text_align: 'left',
          html: 'left',
        },
        {
          value: 'Intent Data<br>Account-Based Marketing (ABM)<br>Account-Based Sales Development (ABSD)<br>B2B Marketing<br>Account-Based Experience (ABX)<br>Bombora<br>Customer Intent<br>',
          text_align: 'left',
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
          value: 'United Electric Cooperative, Inc.',
          text_align: 'left',
        },
        {
          value: 100,
          score: true,
          text_align: 'center',
        },
        {
          value: 'unitedpa.com',
          text_align: 'left',
        },
        {
          value: 'Telecommunications',
          text_align: 'left',
        },
        {
          value: '6Sense<br>',
          text_align: 'left',
          html: 'left',
        },
        {
          value: 'Account-Based Marketing (ABM)<br>Intent Data<br>Account-Based Experience (ABX)<br>Customer Intent<br>Bombora<br>B2B Marketing<br>',
          text_align: 'left',
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
          value: 'UNIVERSITY CONGREGATIONAL UNITED CHURCH OF CHRIST',
          text_align: 'left',
        },
        {
          value: 100,
          score: true,
          text_align: 'center',
        },
        {
          value: 'universityucc.org',
          text_align: 'left',
        },
        {
          value: 'Non-Profit',
          text_align: 'left',
        },
        {
          value: 'Clearbit<br>',
          text_align: 'left',
          html: 'left',
        },
        {
          value: 'Intent Data<br>Customer Intent<br>B2B Marketing<br>Account-Based Sales Development (ABSD)<br>Account-Based Marketing (ABM)<br>Account-Based Experience (ABX)<br>Bombora<br>',
          text_align: 'left',
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
          value: 'Univest Financial Corp',
          text_align: 'left',
        },
        {
          value: 100,
          score: true,
          text_align: 'center',
        },
        {
          value: 'univest.net',
          text_align: 'left',
        },
        {
          value: 'Finance > Banking',
          text_align: 'left',
        },
        {
          value: 'Clearbit<br>',
          text_align: 'left',
          html: 'left',
        },
        {
          value: 'Customer Intent<br>B2B Marketing<br>Intent Data<br>Bombora<br>',
          text_align: 'left',
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
          value: 'UNLEADED SOFTWARE, INC.',
          text_align: 'left',
        },
        {
          value: 100,
          score: true,
          text_align: 'center',
        },
        {
          value: 'unleadedsoftware.com',
          text_align: 'left',
        },
        {
          value: 'Software',
          text_align: 'left',
        },
        {
          value: '6Sense<br>',
          text_align: 'left',
          html: 'left',
        },
        {
          value: 'B2B Marketing<br>Intent Data<br>Bombora<br>Account-Based Experience (ABX)<br>Customer Intent<br>',
          text_align: 'left',
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
          value: 'Mercy Hospital School of Nursing',
          text_align: 'left',
        },
        {
          value: 100,
          score: true,
          text_align: 'center',
        },
        {
          value: 'upmc.com',
          text_align: 'left',
        },
        {
          value: 'Education > Colleges & Universities',
          text_align: 'left',
        },
        {
          value: 'Clearbit<br>Terminus<br>6Sense<br>',
          text_align: 'left',
          html: 'left',
        },
        {
          value: 'Intent Data<br>Account-Based Marketing (ABM)<br>B2B Marketing<br>Account-Based Experience (ABX)<br>Bombora<br>Customer Intent<br>',
          text_align: 'left',
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
          value: 'US DEDICATED',
          text_align: 'left',
        },
        {
          value: 100,
          score: true,
          text_align: 'center',
        },
        {
          value: 'usdedicated.com',
          text_align: 'left',
        },
        {
          value: 'Media & Internet',
          text_align: 'left',
        },
        {
          value: 'Clearbit<br>Demandbase<br>6Sense<br>',
          text_align: 'left',
          html: 'left',
        },
        {
          value: 'Intent Data<br>Bombora<br>B2B Marketing<br>Customer Intent<br>Account-Based Marketing (ABM)<br>Account-Based Sales Development (ABSD)<br>',
          text_align: 'left',
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
          value: 'US itek Employees, Location, Careers',
          text_align: 'left',
        },
        {
          value: 100,
          score: true,
          text_align: 'center',
        },
        {
          value: 'usitek.com',
          text_align: 'left',
        },
        {
          value: 'Software > Business Intelligence',
          text_align: 'left',
        },
        {
          value: '6Sense<br>',
          text_align: 'left',
          html: 'left',
        },
        {
          value: 'Bombora<br>Account-Based Experience (ABX)<br>Account-Based Marketing (ABM)<br>Account-Based Sales Development (ABSD)<br>B2B Marketing<br>',
          text_align: 'left',
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
          value: 'United States Tennis Association Inc',
          text_align: 'left',
        },
        {
          value: 100,
          score: true,
          text_align: 'center',
        },
        {
          value: 'usta.com',
          text_align: 'left',
        },
        {
          value: 'Recreation',
          text_align: 'left',
        },
        {
          value: 'Clearbit<br>',
          text_align: 'left',
          html: 'left',
        },
        {
          value: 'Intent Data<br>Customer Intent<br>Account-Based Marketing (ABM)<br>Bombora<br>B2B Marketing<br>',
          text_align: 'left',
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
          value: 'Utah Interactive, LLC',
          text_align: 'left',
        },
        {
          value: 100,
          score: true,
          text_align: 'center',
        },
        {
          value: 'utah.gov',
          text_align: 'left',
        },
        {
          value: 'Government > State & Province',
          text_align: 'left',
        },
        {
          value: 'Clearbit<br>',
          text_align: 'left',
          html: 'left',
        },
        {
          value: 'Intent Data<br>Account-Based Marketing (ABM)<br>Account-Based Experience (ABX)<br>Customer Intent<br>Intent Marketing<br>Bombora<br>B2B Marketing<br>',
          text_align: 'left',
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
          value: 'UNIVERSITY OF WATERLOO',
          text_align: 'left',
        },
        {
          value: 100,
          score: true,
          text_align: 'center',
        },
        {
          value: 'uwaterloo.ca',
          text_align: 'left',
        },
        {
          value: 'Education',
          text_align: 'left',
        },
        {
          value: 'Terminus<br>Demandbase<br>Clearbit<br>',
          text_align: 'left',
          html: 'left',
        },
        {
          value: 'Account-Based Marketing (ABM)<br>Account-Based Sales Development (ABSD)<br>Account-Based Experience (ABX)<br>Bombora<br>Intent Data<br>B2B Marketing<br>',
          text_align: 'left',
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
          value: 'The University of Western Ontario',
          text_align: 'left',
        },
        {
          value: 100,
          score: true,
          text_align: 'center',
        },
        {
          value: 'uwo.ca',
          text_align: 'left',
        },
        {
          value: 'Construction > Architecture',
          text_align: 'left',
        },
        {
          value: 'Clearbit<br>',
          text_align: 'left',
          html: 'left',
        },
        {
          value: 'B2B Marketing<br>Account-Based Marketing (ABM)<br>Bombora<br>Account-Based Experience (ABX)<br>',
          text_align: 'left',
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
          value: 'The Variable Annuity Life Insurance Company, Inc.',
          text_align: 'left',
        },
        {
          value: 100,
          score: true,
          text_align: 'center',
        },
        {
          value: 'valic.com',
          text_align: 'left',
        },
        {
          value: 'Finance > Portfolio Management & Financial Advice',
          text_align: 'left',
        },
        {
          value: '6Sense<br>',
          text_align: 'left',
          html: 'left',
        },
        {
          value: 'B2B Marketing<br>Account-Based Marketing (ABM)<br>Intent Data<br>Customer Intent<br>Bombora<br>',
          text_align: 'left',
        },
      ],
    },
    {
      type: 'row',
      href: '',
      children: [
        {
          value: '<div class=“c__new-account”>&#x2B50;</div>',
          text_align: 'center',
        },
        {
          value: 'Vancouver Public Schools',
          text_align: 'left',
        },
        {
          value: 100,
          score: true,
          text_align: 'center',
        },
        {
          value: 'vansd.org',
          text_align: 'left',
        },
        {
          value: 'Education > K-12 Schools',
          text_align: 'left',
        },
        {
          value: 'Clearbit<br>6Sense<br>',
          text_align: 'left',
          html: 'left',
        },
        {
          value: 'Intent Data<br>B2B Marketing<br>Bombora<br>Account-Based Experience (ABX)<br>Account-Based Marketing (ABM)<br>',
          text_align: 'left',
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
          value: 'North Portland Veterinary Hospital',
          text_align: 'left',
        },
        {
          value: 100,
          score: true,
          text_align: 'center',
        },
        {
          value: 'vcahospitals.com',
          text_align: 'left',
        },
        {
          value: 'Healthcare > Hospitals & Clinics',
          text_align: 'left',
        },
        {
          value: 'Demandbase<br>',
          text_align: 'left',
          html: 'left',
        },
        {
          value: 'Intent Data<br>Account-Based Experience (ABX)<br>B2B Marketing<br>Account-Based Sales Development (ABSD)<br>Customer Intent<br>Bombora<br>Account-Based Marketing (ABM)<br>',
          text_align: 'left',
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
          value: 'Vein Clinics of America, Inc.',
          text_align: 'left',
        },
        {
          value: 100,
          score: true,
          text_align: 'center',
        },
        {
          value: 'veinclinics.com',
          text_align: 'left',
        },
        {
          value: 'Healthcare > Hospitals & Clinics',
          text_align: 'left',
        },
        {
          value: 'Clearbit<br>',
          text_align: 'left',
          html: 'left',
        },
        {
          value: 'Intent Data<br>Account-Based Sales Development (ABSD)<br>B2B Marketing<br>Account-Based Experience (ABX)<br>',
          text_align: 'left',
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
          value: 'Valley Electric Co. of Mt. Vernon, Inc.',
          text_align: 'left',
        },
        {
          value: 100,
          score: true,
          text_align: 'center',
        },
        {
          value: 'velectric.com',
          text_align: 'left',
        },
        {
          value: 'Construction',
          text_align: 'left',
        },
        {
          value: 'Clearbit<br>',
          text_align: 'left',
          html: 'left',
        },
        {
          value: 'Intent Data<br>Customer Intent<br>B2B Marketing<br>Bombora<br>',
          text_align: 'left',
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
          value: 'Veracode, Inc.',
          text_align: 'left',
        },
        {
          value: 100,
          score: true,
          text_align: 'center',
        },
        {
          value: 'veracode.com',
          text_align: 'left',
        },
        {
          value: 'Software',
          text_align: 'left',
        },
        {
          value: '6Sense<br>',
          text_align: 'left',
          html: 'left',
        },
        {
          value: 'Customer Intent<br>Intent Data<br>Bombora<br>Account-Based Marketing (ABM)<br>Account-Based Sales Development (ABSD)<br>',
          text_align: 'left',
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
          value: 'Veran Medical Technologies, Inc.',
          text_align: 'left',
        },
        {
          value: 100,
          score: true,
          text_align: 'center',
        },
        {
          value: 'veranmedical.com',
          text_align: 'left',
        },
        {
          value: 'Healthcare',
          text_align: 'left',
        },
        {
          value: 'Clearbit<br>6Sense<br>',
          text_align: 'left',
          html: 'left',
        },
        {
          value: 'Intent Data<br>Account-Based Experience (ABX)<br>Customer Intent<br>Account-Based Marketing (ABM)<br>B2B Marketing<br>',
          text_align: 'left',
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
          value: 'Vernon Communications Cooperative',
          text_align: 'left',
        },
        {
          value: 100,
          score: true,
          text_align: 'center',
        },
        {
          value: 'vernoncom.coop',
          text_align: 'left',
        },
        {
          value: 'Telecommunications',
          text_align: 'left',
        },
        {
          value: 'Clearbit<br>',
          text_align: 'left',
          html: 'left',
        },
        {
          value: 'Bombora<br>Intent Data<br>Account-Based Experience (ABX)<br>Customer Intent<br>B2B Marketing<br>',
          text_align: 'left',
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
          value: 'VersiTech, Inc.',
          text_align: 'left',
        },
        {
          value: 100,
          score: true,
          text_align: 'center',
        },
        {
          value: 'versitech.com',
          text_align: 'left',
        },
        {
          value: 'Construction',
          text_align: 'left',
        },
        {
          value: '6Sense<br>Clearbit<br>',
          text_align: 'left',
          html: 'left',
        },
        {
          value: 'Intent Data<br>Bombora<br>Account-Based Marketing (ABM)<br>',
          text_align: 'left',
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
          value: 'Virtua, Inc.',
          text_align: 'left',
        },
        {
          value: 100,
          score: true,
          text_align: 'center',
        },
        {
          value: 'virtua.org',
          text_align: 'left',
        },
        {
          value: 'Healthcare > Hospitals & Clinics',
          text_align: 'left',
        },
        {
          value: '6Sense<br>Demandbase<br>',
          text_align: 'left',
          html: 'left',
        },
        {
          value: 'Customer Intent<br>Intent Data<br>Account-Based Marketing (ABM)<br>Bombora<br>Account-Based Experience (ABX)<br>B2B Marketing<br>',
          text_align: 'left',
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
          value: 'VISITORSCOVERAGE, INC',
          text_align: 'left',
        },
        {
          value: 100,
          score: true,
          text_align: 'center',
        },
        {
          value: 'visitorscoverage.com',
          text_align: 'left',
        },
        {
          value: 'Insurance',
          text_align: 'left',
        },
        {
          value: '6Sense<br>Clearbit<br>',
          text_align: 'left',
          html: 'left',
        },
        {
          value: 'Intent Data<br>Bombora<br>Intent Marketing<br>Account-Based Sales Development (ABSD)<br>Account-Based Experience (ABX)<br>Account-Based Marketing (ABM)<br>Customer Intent<br>',
          text_align: 'left',
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
          value: 'VolumeDrive Technologies',
          text_align: 'left',
        },
        {
          value: 100,
          score: true,
          text_align: 'center',
        },
        {
          value: 'volumedrive.com',
          text_align: 'left',
        },
        {
          value: 'Telecommunications',
          text_align: 'left',
        },
        {
          value: 'Clearbit<br>6Sense<br>',
          text_align: 'left',
          html: 'left',
        },
        {
          value: 'Intent Data<br>Bombora<br>Customer Intent<br>B2B Marketing<br>',
          text_align: 'left',
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
          value: 'Volusion, Inc.',
          text_align: 'left',
        },
        {
          value: 100,
          score: true,
          text_align: 'center',
        },
        {
          value: 'volusion.com',
          text_align: 'left',
        },
        {
          value: 'Software',
          text_align: 'left',
        },
        {
          value: 'Clearbit<br>',
          text_align: 'left',
          html: 'left',
        },
        {
          value: 'B2B Marketing<br>Intent Data<br>Account-Based Experience (ABX)<br>Customer Intent<br>Bombora<br>',
          text_align: 'left',
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
          value: 'W2O Group',
          text_align: 'left',
        },
        {
          value: 100,
          score: true,
          text_align: 'center',
        },
        {
          value: 'w2ogroup.com',
          text_align: 'left',
        },
        {
          value: 'Business Services > Advertising & Marketing',
          text_align: 'left',
        },
        {
          value: '6Sense<br>Clearbit<br>',
          text_align: 'left',
          html: 'left',
        },
        {
          value: 'B2B Marketing<br>Account-Based Marketing (ABM)<br>Bombora<br>Account-Based Experience (ABX)<br>Account-Based Sales Development (ABSD)<br>',
          text_align: 'left',
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
          value: 'Waffle House, Inc.',
          text_align: 'left',
        },
        {
          value: 100,
          score: true,
          text_align: 'center',
        },
        {
          value: 'wafflehouse.com',
          text_align: 'left',
        },
        {
          value: 'Hospitality & Hotels > Restaurants',
          text_align: 'left',
        },
        {
          value: 'Clearbit<br>Demandbase<br>',
          text_align: 'left',
          html: 'left',
        },
        {
          value: 'B2B Marketing<br>Intent Data<br>Bombora<br>Customer Intent<br>Account-Based Marketing (ABM)<br>',
          text_align: 'left',
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
          value: 'FISH & WILDLIFE, WASHINGTON STATE DEPARTMENT OF',
          text_align: 'left',
        },
        {
          value: 100,
          score: true,
          text_align: 'center',
        },
        {
          value: 'wa.gov',
          text_align: 'left',
        },
        {
          value: 'Government > State & Province',
          text_align: 'left',
        },
        {
          value: 'Clearbit<br>Demandbase<br>6Sense<br>',
          text_align: 'left',
          html: 'left',
        },
        {
          value: 'Intent Data<br>Account-Based Sales Development (ABSD)<br>Account-Based Marketing (ABM)<br>Account-Based Experience (ABX)<br>B2B Marketing<br>Customer Intent<br>',
          text_align: 'left',
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
          value: 'WARBURG PINCUS LLC',
          text_align: 'left',
        },
        {
          value: 100,
          score: true,
          text_align: 'center',
        },
        {
          value: 'warburgpincus.com',
          text_align: 'left',
        },
        {
          value: 'Finance > Portfolio Management & Financial Advice',
          text_align: 'left',
        },
        {
          value: 'Clearbit<br>Demandbase<br>6Sense<br>',
          text_align: 'left',
          html: 'left',
        },
        {
          value: 'Intent Data<br>Account-Based Marketing (ABM)<br>Account-Based Experience (ABX)<br>',
          text_align: 'left',
        },
      ],
    },
    {
      type: 'row',
      href: '',
      children: [
        {
          value: '<div class=“c__new-account”>&#x2B50;</div>',
          text_align: 'center',
        },
        {
          value: 'MSD of Warren Township',
          text_align: 'left',
        },
        {
          value: 100,
          score: true,
          text_align: 'center',
        },
        {
          value: 'warren.k12.in.us',
          text_align: 'left',
        },
        {
          value: 'Education',
          text_align: 'left',
        },
        {
          value: '6Sense<br>',
          text_align: 'left',
          html: 'left',
        },
        {
          value: 'Intent Data<br>Bombora<br>Customer Intent<br>Account-Based Experience (ABX)<br>Account-Based Marketing (ABM)<br>Account-Based Sales Development (ABSD)<br>B2B Marketing<br>',
          text_align: 'left',
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
          value: 'West Coast Environmental Law',
          text_align: 'left',
        },
        {
          value: 100,
          score: true,
          text_align: 'center',
        },
        {
          value: 'wcel.org',
          text_align: 'left',
        },
        {
          value: 'Legal',
          text_align: 'left',
        },
        {
          value: 'Terminus<br>',
          text_align: 'left',
          html: 'left',
        },
        {
          value: 'Account-Based Experience (ABX)<br>Account-Based Sales Development (ABSD)<br>Bombora<br>B2B Marketing<br>Intent Data<br>Customer Intent<br>Account-Based Marketing (ABM)<br>',
          text_align: 'left',
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
          value: 'Wake County Public School System',
          text_align: 'left',
        },
        {
          value: 100,
          score: true,
          text_align: 'center',
        },
        {
          value: 'wcpss.net',
          text_align: 'left',
        },
        {
          value: 'Education',
          text_align: 'left',
        },
        {
          value: 'Clearbit<br>6Sense<br>',
          text_align: 'left',
          html: 'left',
        },
        {
          value: 'B2B Marketing<br>Customer Intent<br>Bombora<br>Account-Based Experience (ABX)<br>Account-Based Sales Development (ABSD)<br>Intent Data<br>',
          text_align: 'left',
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
          value: 'WEALTHFRONT, INC',
          text_align: 'left',
        },
        {
          value: 100,
          score: true,
          text_align: 'center',
        },
        {
          value: 'wealthfront.com',
          text_align: 'left',
        },
        {
          value: 'Media & Internet > Info Collection & Delivery',
          text_align: 'left',
        },
        {
          value: '6Sense<br>Clearbit<br>',
          text_align: 'left',
          html: 'left',
        },
        {
          value: 'Account-Based Marketing (ABM)<br>Account-Based Sales Development (ABSD)<br>Account-Based Experience (ABX)<br>',
          text_align: 'left',
        },
      ],
    },
    {
      type: 'row',
      href: '',
      children: [
        {
          value: '<div class=“c__new-account”>&#x2B50;</div>',
          text_align: 'center',
        },
        {
          value: 'Weebly, Inc.',
          text_align: 'left',
        },
        {
          value: 100,
          score: true,
          text_align: 'center',
        },
        {
          value: 'weebly.com',
          text_align: 'left',
        },
        {
          value: 'Software',
          text_align: 'left',
        },
        {
          value: 'Clearbit<br>',
          text_align: 'left',
          html: 'left',
        },
        {
          value: 'Intent Data<br>B2B Marketing<br>Account-Based Marketing (ABM)<br>Customer Intent<br>',
          text_align: 'left',
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
          value: 'Weight Watchers Plaza',
          text_align: 'left',
        },
        {
          value: 100,
          score: true,
          text_align: 'center',
        },
        {
          value: 'weight-watchers.com',
          text_align: 'left',
        },
        {
          value: 'Healthcare > Hospitals & Clinics',
          text_align: 'left',
        },
        {
          value: 'Clearbit<br>',
          text_align: 'left',
          html: 'left',
        },
        {
          value: 'Customer Intent<br>Intent Data<br>Account-Based Marketing (ABM)<br>Bombora<br>B2B Marketing<br>',
          text_align: 'left',
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
          value: 'Wells Fargo Advisors, LLC',
          text_align: 'left',
        },
        {
          value: 100,
          score: true,
          text_align: 'center',
        },
        {
          value: 'wellsfargoadvisors.com',
          text_align: 'left',
        },
        {
          value: 'Finance > Portfolio Management & Financial Advice',
          text_align: 'left',
        },
        {
          value: 'Clearbit<br>6Sense<br>Demandbase<br>',
          text_align: 'left',
          html: 'left',
        },
        {
          value: 'B2B Marketing<br>Account-Based Experience (ABX)<br>Bombora<br>Customer Intent<br>Intent Data<br>',
          text_align: 'left',
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
          value: 'Douglas Hospital, Inc.',
          text_align: 'left',
        },
        {
          value: 100,
          score: true,
          text_align: 'center',
        },
        {
          value: 'wellstar.org',
          text_align: 'left',
        },
        {
          value: 'Healthcare > Hospitals & Clinics',
          text_align: 'left',
        },
        {
          value: 'Clearbit<br>',
          text_align: 'left',
          html: 'left',
        },
        {
          value: 'Intent Data<br>Account-Based Experience (ABX)<br>B2B Marketing<br>Bombora<br>',
          text_align: 'left',
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
          value: 'WESTFIELD BOARD OF EDUCATION',
          text_align: 'left',
        },
        {
          value: 100,
          score: true,
          text_align: 'center',
        },
        {
          value: 'westfieldnjk12.org',
          text_align: 'left',
        },
        {
          value: 'Healthcare > Hospitals & Clinics',
          text_align: 'left',
        },
        {
          value: 'Terminus<br>Clearbit<br>',
          text_align: 'left',
          html: 'left',
        },
        {
          value: 'Intent Data<br>Account-Based Marketing (ABM)<br>B2B Marketing<br>',
          text_align: 'left',
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
          value: 'The Westin Austin Downtown',
          text_align: 'left',
        },
        {
          value: 100,
          score: true,
          text_align: 'center',
        },
        {
          value: 'westinaustindowntown.com',
          text_align: 'left',
        },
        {
          value: 'Hospitality & Hotels',
          text_align: 'left',
        },
        {
          value: '6Sense<br>Demandbase<br>Clearbit<br>',
          text_align: 'left',
          html: 'left',
        },
        {
          value: 'Account-Based Experience (ABX)<br>Customer Intent<br>Intent Data<br>Account-Based Sales Development (ABSD)<br>',
          text_align: 'left',
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
          value: 'WESTMINSTER SCHOOLS INC',
          text_align: 'left',
        },
        {
          value: 100,
          score: true,
          text_align: 'center',
        },
        {
          value: 'westminster.net',
          text_align: 'left',
        },
        {
          value: 'Cultural',
          text_align: 'left',
        },
        {
          value: 'Clearbit<br>6Sense<br>',
          text_align: 'left',
          html: 'left',
        },
        {
          value: 'Intent Data<br>Bombora<br>Account-Based Marketing (ABM)<br>Account-Based Experience (ABX)<br>Customer Intent<br>B2B Marketing<br>Account-Based Sales Development (ABSD)<br>',
          text_align: 'left',
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
          value: 'Westmont Associates, Inc.',
          text_align: 'left',
        },
        {
          value: 100,
          score: true,
          text_align: 'center',
        },
        {
          value: 'westmontlaw.com',
          text_align: 'left',
        },
        {
          value: 'Insurance',
          text_align: 'left',
        },
        {
          value: '6Sense<br>',
          text_align: 'left',
          html: 'left',
        },
        {
          value: 'Bombora<br>Customer Intent<br>B2B Marketing<br>Account-Based Marketing (ABM)<br>Account-Based Experience (ABX)<br>',
          text_align: 'left',
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
          value: 'WESTPORT CINEMA INITIATIVE',
          text_align: 'left',
        },
        {
          value: 100,
          score: true,
          text_align: 'center',
        },
        {
          value: 'westportcinema.org',
          text_align: 'left',
        },
        {
          value: 'Media & Internet > Media Broadcasting',
          text_align: 'left',
        },
        {
          value: 'Demandbase<br>',
          text_align: 'left',
          html: 'left',
        },
        {
          value: 'Account-Based Experience (ABX)<br>Account-Based Sales Development (ABSD)<br>B2B Marketing<br>Account-Based Marketing (ABM)<br>',
          text_align: 'left',
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
          value: 'Wisconsin DHFS',
          text_align: 'left',
        },
        {
          value: 100,
          score: true,
          text_align: 'center',
        },
        {
          value: 'wi.gov',
          text_align: 'left',
        },
        {
          value: 'Government > State & Province',
          text_align: 'left',
        },
        {
          value: 'Clearbit<br>',
          text_align: 'left',
          html: 'left',
        },
        {
          value: 'Bombora<br>Account-Based Marketing (ABM)<br>Intent Data<br>B2B Marketing<br>Account-Based Experience (ABX)<br>',
          text_align: 'left',
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
          value: 'Windermere Real Estate Services Company',
          text_align: 'left',
        },
        {
          value: 100,
          score: true,
          text_align: 'center',
        },
        {
          value: 'windermere.com',
          text_align: 'left',
        },
        {
          value: 'Real Estate',
          text_align: 'left',
        },
        {
          value: 'Clearbit<br>Demandbase<br>6Sense<br>',
          text_align: 'left',
          html: 'left',
        },
        {
          value: 'B2B Marketing<br>Bombora<br>Customer Intent<br>Intent Data<br>',
          text_align: 'left',
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
          value: 'Windscribe',
          text_align: 'left',
        },
        {
          value: 100,
          score: true,
          text_align: 'center',
        },
        {
          value: 'windscribe.com',
          text_align: 'left',
        },
        {
          value: 'Software > Security',
          text_align: 'left',
        },
        {
          value: 'Clearbit<br>6Sense<br>',
          text_align: 'left',
          html: 'left',
        },
        {
          value: 'Intent Data<br>B2B Marketing<br>Customer Intent<br>Account-Based Marketing (ABM)<br>Account-Based Experience (ABX)<br>Account-Based Sales Development (ABSD)<br>',
          text_align: 'left',
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
          value: 'Winn-Dixie Stores Inc.',
          text_align: 'left',
        },
        {
          value: 100,
          score: true,
          text_align: 'center',
        },
        {
          value: 'winn-dixie.com',
          text_align: 'left',
        },
        {
          value: 'Consumer Services > Weight Health Management',
          text_align: 'left',
        },
        {
          value: 'Clearbit<br>Terminus<br>',
          text_align: 'left',
          html: 'left',
        },
        {
          value: 'Intent Data<br>Customer Intent<br>Account-Based Experience (ABX)<br>Account-Based Marketing (ABM)<br>Bombora<br>',
          text_align: 'left',
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
          value: 'Winstead PC',
          text_align: 'left',
        },
        {
          value: 100,
          score: true,
          text_align: 'center',
        },
        {
          value: 'winstead.com',
          text_align: 'left',
        },
        {
          value: 'Legal',
          text_align: 'left',
        },
        {
          value: 'Demandbase<br>',
          text_align: 'left',
          html: 'left',
        },
        {
          value: 'Intent Marketing<br>Customer Intent<br>B2B Marketing<br>Bombora<br>',
          text_align: 'left',
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
          value: 'State of Wisconsin',
          text_align: 'left',
        },
        {
          value: 100,
          score: true,
          text_align: 'center',
        },
        {
          value: 'wisconsin.gov',
          text_align: 'left',
        },
        {
          value: 'Government > State & Province',
          text_align: 'left',
        },
        {
          value: 'Clearbit<br>6Sense<br>',
          text_align: 'left',
          html: 'left',
        },
        {
          value: 'B2B Marketing<br>Intent Data<br>Account-Based Experience (ABX)<br>Account-Based Marketing (ABM)<br>Bombora<br>Customer Intent<br>Account-Based Sales Development (ABSD)<br>',
          text_align: 'left',
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
          value: 'Wieden + Kennedy, Inc.',
          text_align: 'left',
        },
        {
          value: 100,
          score: true,
          text_align: 'center',
        },
        {
          value: 'wk.com',
          text_align: 'left',
        },
        {
          value: 'Business Services > Advertising & Marketing',
          text_align: 'left',
        },
        {
          value: 'Clearbit<br>Demandbase<br>',
          text_align: 'left',
          html: 'left',
        },
        {
          value: 'Account-Based Marketing (ABM)<br>Account-Based Experience (ABX)<br>B2B Marketing<br>Intent Data<br>Intent Marketing<br>Bombora<br>',
          text_align: 'left',
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
          value: 'Winston-Salem/Forsyth County Schools',
          text_align: 'left',
        },
        {
          value: 100,
          score: true,
          text_align: 'center',
        },
        {
          value: 'wsfcs.k12.nc.us',
          text_align: 'left',
        },
        {
          value: 'Education',
          text_align: 'left',
        },
        {
          value: 'Clearbit<br>',
          text_align: 'left',
          html: 'left',
        },
        {
          value: 'Account-Based Marketing (ABM)<br>Customer Intent<br>Intent Data<br>B2B Marketing<br>',
          text_align: 'left',
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
          value: 'World Wide Pictures',
          text_align: 'left',
        },
        {
          value: 100,
          score: true,
          text_align: 'center',
        },
        {
          value: 'wwp.org',
          text_align: 'left',
        },
        {
          value: 'Business Services > Management Consulting',
          text_align: 'left',
        },
        {
          value: 'Clearbit<br>',
          text_align: 'left',
          html: 'left',
        },
        {
          value: 'Bombora<br>Intent Data<br>Account-Based Marketing (ABM)<br>B2B Marketing<br>',
          text_align: 'left',
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
          value: 'Xiber LLC',
          text_align: 'left',
        },
        {
          value: 100,
          score: true,
          text_align: 'center',
        },
        {
          value: 'xiber.net',
          text_align: 'left',
        },
        {
          value: 'Media & Internet',
          text_align: 'left',
        },
        {
          value: 'Clearbit<br>6Sense<br>',
          text_align: 'left',
          html: 'left',
        },
        {
          value: 'Account-Based Sales Development (ABSD)<br>Intent Data<br>B2B Marketing<br>',
          text_align: 'left',
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
          value: 'Xinet, Inc.',
          text_align: 'left',
        },
        {
          value: 100,
          score: true,
          text_align: 'center',
        },
        {
          value: 'xinet.com',
          text_align: 'left',
        },
        {
          value: 'Software',
          text_align: 'left',
        },
        {
          value: 'Terminus<br>',
          text_align: 'left',
          html: 'left',
        },
        {
          value: 'Customer Intent<br>B2B Marketing<br>Bombora<br>Account-Based Marketing (ABM)<br>',
          text_align: 'left',
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
          value: 'xMatters, Inc.',
          text_align: 'left',
        },
        {
          value: 100,
          score: true,
          text_align: 'center',
        },
        {
          value: 'xmatters.com',
          text_align: 'left',
        },
        {
          value: 'Software',
          text_align: 'left',
        },
        {
          value: 'Clearbit<br>',
          text_align: 'left',
          html: 'left',
        },
        {
          value: 'B2B Marketing<br>Customer Intent<br>Account-Based Marketing (ABM)<br>Intent Data<br>',
          text_align: 'left',
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
          value: 'YesUp Media Inc.',
          text_align: 'left',
        },
        {
          value: 100,
          score: true,
          text_align: 'center',
        },
        {
          value: 'yesup.com',
          text_align: 'left',
        },
        {
          value: 'Software',
          text_align: 'left',
        },
        {
          value: '6Sense<br>Clearbit<br>',
          text_align: 'left',
          html: 'left',
        },
        {
          value: 'Intent Data<br>Account-Based Marketing (ABM)<br>Bombora<br>B2B Marketing<br>Customer Intent<br>',
          text_align: 'left',
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
          value: 'Zingermans Mail Order Inc',
          text_align: 'left',
        },
        {
          value: 100,
          score: true,
          text_align: 'center',
        },
        {
          value: 'zingermans.com',
          text_align: 'left',
        },
        {
          value: 'Manufacturing > Food & Beverage',
          text_align: 'left',
        },
        {
          value: '6Sense<br>Clearbit<br>',
          text_align: 'left',
          html: 'left',
        },
        {
          value: 'Account-Based Sales Development (ABSD)<br>Account-Based Experience (ABX)<br>Account-Based Marketing (ABM)<br>Intent Data<br>Customer Intent<br>',
          text_align: 'left',
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
          value: 'ZoomInfo',
          text_align: 'left',
        },
        {
          value: 100,
          score: true,
          text_align: 'center',
        },
        {
          value: 'zoominfo.com',
          text_align: 'left',
        },
        {
          value: 'Business Services',
          text_align: 'left',
        },
        {
          value: 'Clearbit<br>6Sense<br>',
          text_align: 'left',
          html: 'left',
        },
        {
          value: 'B2B Marketing<br>Account-Based Sales Development (ABSD)<br>Intent Data<br>Customer Intent<br>Account-Based Marketing (ABM)<br>Bombora<br>',
          text_align: 'left',
        },
      ],
    },
    {
      type: 'row',
      href: '',
      children: [
        {
          value: '<div class=“c__new-account”>&#x2B50;</div>',
          text_align: 'center',
        },
        {
          value: 'Songer Vester',
          text_align: 'left',
        },
        {
          value: 100,
          score: true,
          text_align: 'center',
        },
        {
          value: '1starnet.com',
          text_align: 'left',
        },
        {
          value: 'Telecommunications',
          text_align: 'left',
        },
        {
          value: '6Sense<br>',
          text_align: 'left',
          html: 'left',
        },
        {
          value: 'Account-Based Sales Development (ABSD)<br>Intent Data<br>',
          text_align: 'left',
        },
      ],
    },
    {
      type: 'row',
      href: '',
      children: [
        {
          value: '<div class=“c__new-account”>&#x2B50;</div>',
          text_align: 'center',
        },
        {
          value: '24/7 Software',
          text_align: 'left',
        },
        {
          value: 100,
          score: true,
          text_align: 'center',
        },
        {
          value: '247software.com',
          text_align: 'left',
        },
        {
          value: 'Software',
          text_align: 'left',
        },
        {
          value: '6Sense<br>',
          text_align: 'left',
          html: 'left',
        },
        {
          value: 'Account-Based Marketing (ABM)<br>',
          text_align: 'left',
        },
      ],
    },
    {
      type: 'row',
      href: '',
      children: [
        {
          value: '<div class=“c__new-account”>&#x2B50;</div>',
          text_align: 'center',
        },
        {
          value: '24 HOUR FITNESS HELPING HANDS FOUNDATION',
          text_align: 'left',
        },
        {
          value: 100,
          score: true,
          text_align: 'center',
        },
        {
          value: '24hourfitness.com',
          text_align: 'left',
        },
        {
          value: 'Cultural',
          text_align: 'left',
        },
        {
          value: 'Clearbit<br>',
          text_align: 'left',
          html: 'left',
        },
        {
          value: 'Customer Intent<br>B2B Marketing<br>Bombora<br>',
          text_align: 'left',
        },
      ],
    },
    {
      type: 'row',
      href: '',
      children: [
        {
          value: '<div class=“c__new-account”>&#x2B50;</div>',
          text_align: 'center',
        },
        {
          value: '24Shells',
          text_align: 'left',
        },
        {
          value: 100,
          score: true,
          text_align: 'center',
        },
        {
          value: '24shells.net',
          text_align: 'left',
        },
        {
          value: 'Telecommunications',
          text_align: 'left',
        },
        {
          value: 'Clearbit<br>6Sense<br>',
          text_align: 'left',
          html: 'left',
        },
        {
          value: 'Intent Data<br>Customer Intent<br>B2B Marketing<br>Account-Based Marketing (ABM)<br>',
          text_align: 'left',
        },
      ],
    },
    {
      type: 'row',
      href: '',
      children: [
        {
          value: '<div class=“c__new-account”>&#x2B50;</div>',
          text_align: 'center',
        },
        {
          value: '3E Company, Inc.',
          text_align: 'left',
        },
        {
          value: 100,
          score: true,
          text_align: 'center',
        },
        {
          value: '3eco.com',
          text_align: 'left',
        },
        {
          value: 'Software',
          text_align: 'left',
        },
        {
          value: 'Clearbit<br>6Sense<br>',
          text_align: 'left',
          html: 'left',
        },
        {
          value: 'Account-Based Experience (ABX)<br>Intent Data<br>B2B Marketing<br>Account-Based Marketing (ABM)<br>Account-Based Sales Development (ABSD)<br>',
          text_align: 'left',
        },
      ],
    },
    {
      type: 'row',
      href: '',
      children: [
        {
          value: '<div class=“c__new-account”>&#x2B50;</div>',
          text_align: 'center',
        },
        {
          value: 'Forty Niners Football Company LLC',
          text_align: 'left',
        },
        {
          value: 100,
          score: true,
          text_align: 'center',
        },
        {
          value: '49ers.com',
          text_align: 'left',
        },
        {
          value: 'Cultural > Performance Arts',
          text_align: 'left',
        },
        {
          value: '6Sense<br>',
          text_align: 'left',
          html: 'left',
        },
        {
          value: 'Account-Based Marketing (ABM)<br>B2B Marketing<br>Account-Based Experience (ABX)<br>',
          text_align: 'left',
        },
      ],
    },
    {
      type: 'row',
      href: '',
      children: [
        {
          value: '<div class=“c__new-account”>&#x2B50;</div>',
          text_align: 'center',
        },
        {
          value: '6Sense Insights Inc.',
          text_align: 'left',
        },
        {
          value: 100,
          score: true,
          text_align: 'center',
        },
        {
          value: '6sense.com',
          text_align: 'left',
        },
        {
          value: 'Software',
          text_align: 'left',
        },
        {
          value: 'Clearbit<br>6Sense<br>',
          text_align: 'left',
          html: 'left',
        },
        {
          value: 'Account-Based Sales Development (ABSD)<br>B2B Marketing<br>',
          text_align: 'left',
        },
      ],
    },
    {
      type: 'row',
      href: '',
      children: [
        {
          value: '<div class=“c__new-account”>&#x2B50;</div>',
          text_align: 'center',
        },
        {
          value: '7-Eleven, Inc.',
          text_align: 'left',
        },
        {
          value: 100,
          score: true,
          text_align: 'center',
        },
        {
          value: '7eleven.com',
          text_align: 'left',
        },
        {
          value: 'Hospitality & Hotels > Restaurants',
          text_align: 'left',
        },
        {
          value: 'Clearbit<br>6Sense<br>',
          text_align: 'left',
          html: 'left',
        },
        {
          value: 'Intent Data<br>Account-Based Marketing (ABM)<br>Customer Intent<br>Account-Based Sales Development (ABSD)<br>B2B Marketing<br>Account-Based Experience (ABX)<br>Bombora<br>',
          text_align: 'left',
        },
      ],
    },
    {
      type: 'row',
      href: '',
      children: [
        {
          value: '<div class=“c__new-account”>&#x2B50;</div>',
          text_align: 'center',
        },
        {
          value: '90octane',
          text_align: 'left',
        },
        {
          value: 100,
          score: true,
          text_align: 'center',
        },
        {
          value: '90octane.com',
          text_align: 'left',
        },
        {
          value: 'Business Services > Advertising & Marketing',
          text_align: 'left',
        },
        {
          value: '6Sense<br>Demandbase<br>Clearbit<br>',
          text_align: 'left',
          html: 'left',
        },
        {
          value: 'B2B Marketing<br>Bombora<br>Intent Data<br>Account-Based Marketing (ABM)<br>Account-Based Experience (ABX)<br>',
          text_align: 'left',
        },
      ],
    },
  ],
};
graniteTable(accounts);
