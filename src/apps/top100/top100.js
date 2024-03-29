import graniteTable from '../../granite/table/graniteTable';
import '../../granite/table/graniteTable.css';

import graniteTabs from '../../granite/tabs/graniteTabs';
import '../../granite/tabs/graniteTabs.css';

import granitePicklist from '../../granite/picklist/granitePicklist';
import '../../granite/picklist/granitePicklist.css';

import graniteSteps from '../../granite/steps/graniteSteps';
import '../../granite/steps/graniteSteps.css';

import './top100.css';
const theme = {
  mode: 'standard',
};

try {
  graniteSteps(1);
} catch (error) {
  console.error(error);
}

try {
  const top100 = {
    id: 'table__top-100',
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
      auto_width: false,
      wrap_text: true,
      column_defs: [{ responsivePriority: 1, targets: 1 }],
    },
    records: [
      {
        type: 'header',
        background: '#FAFAFA',
        children: [
          {
            value: 'Acct Name',
            classes: 'min-mobile',
          },
          {
            value: 'Propensity Score',
            id: 'c__score',
            classes: 'min-mobile',
          },
          {
            value: 'New',
            text_align: 'center',
            classes: 'not-mobile',
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
            value: 'Textron Financial Corporation',
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
            value: 'Bancorp Inc',
            text_align: 'left',
          },
          {
            value: 14,
            score: true,
            text_align: 'center',
          },
          {
            value: '',
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
            value: 'The Hatch',
            text_align: 'left',
          },
          {
            value: 58,
            score: true,
            text_align: 'center',
          },
          {
            value: '',
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
    ],
  };
  graniteTable(top100);
} catch (error) {
  console.error(error);
}

const search = document.getElementById('g__table__top-100_filter');
if (search) {
  search.remove();
  const searchContainer = document.getElementById('g__search-bar');
  searchContainer.appendChild(search);
}
const exportBtns = document.querySelector('.dt-buttons');
if (exportBtns) {
  exportBtns.remove();
  const exportContainer = document.getElementById('g__export-btns');
  exportContainer.appendChild(exportBtns);
}

try {
  const filterSignal = {
    id: 'picklist__filter-signals',
    options: {
      sf_key: 'sf_key',
      select_id: 'g__filter-signals',
      placeholder: 'Filter Signal',
      classes: '',
      select_options: [
        ['option-1', 'option 1'],
        ['option-2', 'option 2'],
        ['option-3', 'option 3'],
      ],
    },
    records: [],
  };
  granitePicklist(filterSignal);
} catch (error) {
  console.error(error);
}

try {
  const tabs = {
    id: 'tabs__list-building',
    options: {
      g_style: 'line', // step, line, block
      g_align_tabs: 'left',
      g_font_size: '16',
      g_font_color: '#5d5d5d',
      g_font_hover_color: '#a4a4a4',
      g_icon_size: '',
      g_step_number_color: '',
      g_title_size: '16',
      g_title_color: '',
      g_description_size: '12px',
      g_description_color: '',
      g_highlight_color: '#5D50E6',
      g_background_color: '#ffffff',
      g_background_active_color: '#F7F6FE',
      g_background_hover_color: 'var(--neutral-200)',
      g_align: 'left',
      g_align_icon: 'flex-start',
      g_direction: false,
      g_padding: '10px 40px',
      g_margin: '0',
      g_border_width: '',
      g_border_color: 'red',
      g_border_radius: '',
      g_full_width: true,
      padding_top: '0',
      padding_bottom: '0',
      margin_top: '0',
      margin_bottom: '0',
      g_classes: '',
      g_cursor_disabled: false,
      g_action: 'hash_builder',
      container_top_padding: '0',
      container_bottom_padding: '0',
    },
    records: [
      {
        name: 'In-Market Accounts',
        desc: '',
        icon: '',
        href: '/',
      },
      {
        name: 'Buying Circle Lists',
        desc: '',
        href: '/buying_circle_list',
      },
    ],
  };
  graniteTabs(tabs, theme);
} catch (error) {
  console.error(error);
}
