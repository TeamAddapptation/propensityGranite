import graniteTableFrame from '../../granite/table/graniteTable_v2';
import './tableFrame.css';
import '../../granite/table/graniteTable.css';

const demo1 = {
  id: 'table__frame',
  feature: 'table',
  options: {
    datatables: true,
    paging: true,
    page_length: 15,
    searching: false,
    export_btns: ['excelHtml5', 'csvHtml5'],
    scroll_x: true,
    scroll_y: '50vh',
    scroll_collapse: true,
    responsive: true,
    column_widths:[
      { responsivePriority: 10001, targets:0 },
      { responsivePriority: 1, targets:1 },
      { responsivePriority: 1, targets:3 },
    ],    
    remove_ordering: false,
    auto_width: true,
    empty_table_text: `<div class="g__empty-icon">&#x1F465;</div><h3>No Audience Selected</h3><p>Go to Campaign Details to Select or Build an Audience</p>`
  },
  records: [
    {
        "type": "header",
        "background": "#FAFAFA",
        "children": [
            {
                "value": "",
                "select": true,
                classes: 'min-tablet-l'
            },
            {
                "value": "Acct Name",
                classes: 'min-tablet-l'
            },
            {
                "value": "Propensity Score",
                classes: 'min-tablet-l'
            },
            {
                "value": "New",
                "text_align": "center",
                classes: 'min-tablet-l'
            },
            {
                "value": "Website",
                classes: 'min-tablet-l'
            },
            {
                "value": "Industry",
                classes: 'min-tablet-l'
            },
            {
                "value": "Company Size",
                classes: 'min-tablet-l'
            },
            {
                "value": "Competitive Signals",
                "title_tag": "Competitive signals track whenever someone may be searching for this competitor. The more people searching for this signal, the higher your propensity score.",
                classes: 'min-tablet-l'
            },
            {
                "value": "Adjacent Signals",
                "title_tag": "Adjacent signals track whenever someone may be searching for this topic. The more people searching for this signal, the higher your propensity score.  ",
                classes: 'min-tablet-l'
            }
        ]
    },
    {
        "type": "row",
        "href": "",
        "children": [
            {
                "value": "abcwiorg",
                "select": true
            },
            {
                "value": "Abc Of Wisconsin",
                "text_align": "left"
            },
            {
                "value": 100,
                "score": true,
                "text_align": "center"
            },
            {
                "value": "",
                "text_align": "center"
            },
            {
                "value": "<a href='https://www.abcwi.org' target='_blank'>abcwi.org</a>",
                "text_align": "left"
            },
            {
                "value": "Construction",
                "text_align": "left"
            },
            {
                "value": "Small (10 - 49 Employees)",
                "text_align": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >CoConstruct<br>",
                "text_align": "left",
                "html": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >Construction inspection<br>Construction<br>Construction Loan<br>Autodesk Construction Solutions (ACS)<br>Construction Insurance<br>",
                "text_align": "left"
            }
        ]
    },
    {
        "type": "row",
        "href": "",
        "children": [
            {
                "value": "aldridge-electriccom",
                "select": true
            },
            {
                "value": "Aldridge Construction Inc.",
                "text_align": "left"
            },
            {
                "value": 100,
                "score": true,
                "text_align": "center"
            },
            {
                "value": "",
                "text_align": "center"
            },
            {
                "value": "<a href='https://www.aldridge-electric.com' target='_blank'>aldridge-electric.com</a>",
                "text_align": "left"
            },
            {
                "value": "Construction",
                "text_align": "left"
            },
            {
                "value": "Small (10 - 49 Employees)",
                "text_align": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >CoConstruct<br>",
                "text_align": "left",
                "html": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >Construction Loan<br>Construction Equipment<br>Construction<br>Autodesk Construction Solutions (ACS)<br>Engineering, Procurement, and Construction (EPC)<br>Construction Insurance<br>Construction inspection<br>Construction Documentation<br>",
                "text_align": "left"
            }
        ]
    },
    {
        "type": "row",
        "href": "",
        "children": [
            {
                "value": "audiowarehouseca",
                "select": true
            },
            {
                "value": "Audio Warehouse",
                "text_align": "left"
            },
            {
                "value": 100,
                "score": true,
                "text_align": "center"
            },
            {
                "value": "",
                "text_align": "center"
            },
            {
                "value": "<a href='https://www.audiowarehouse.ca' target='_blank'>audiowarehouse.ca</a>",
                "text_align": "left"
            },
            {
                "value": "Construction",
                "text_align": "left"
            },
            {
                "value": "Medium-Small (50 - 199 Employees)",
                "text_align": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >CoConstruct<br>",
                "text_align": "left",
                "html": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >Autodesk Construction Solutions (ACS)<br>Construction<br>Construction Equipment<br>Construction inspection<br>Engineering, Procurement, and Construction (EPC)<br>Construction Loan<br>",
                "text_align": "left"
            }
        ]
    },
    {
        "type": "row",
        "href": "",
        "children": [
            {
                "value": "aawillcom",
                "select": true
            },
            {
                "value": "A.A. Will Corporation",
                "text_align": "left"
            },
            {
                "value": 100,
                "score": true,
                "text_align": "center"
            },
            {
                "value": "",
                "text_align": "center"
            },
            {
                "value": "<a href='https://www.aawill.com' target='_blank'>aawill.com</a>",
                "text_align": "left"
            },
            {
                "value": "Construction",
                "text_align": "left"
            },
            {
                "value": "Small (10 - 49 Employees)",
                "text_align": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >CoConstruct<br>",
                "text_align": "left",
                "html": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >Construction<br>Construction Loan<br>Autodesk Construction Solutions (ACS)<br>Construction inspection<br>Construction Documentation<br>",
                "text_align": "left"
            }
        ]
    },
    {
        "type": "row",
        "href": "",
        "children": [
            {
                "value": "aiengineerscom",
                "select": true
            },
            {
                "value": "Ai Engineers, Inc",
                "text_align": "left"
            },
            {
                "value": 100,
                "score": true,
                "text_align": "center"
            },
            {
                "value": "",
                "text_align": "center"
            },
            {
                "value": "<a href='https://www.aiengineers.com' target='_blank'>aiengineers.com</a>",
                "text_align": "left"
            },
            {
                "value": "Construction > Architecture",
                "text_align": "left"
            },
            {
                "value": "Medium (200 - 499 Employees)",
                "text_align": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >CoConstruct<br>",
                "text_align": "left",
                "html": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >Engineering, Procurement, and Construction (EPC)<br>Construction Documentation<br>Construction inspection<br>Construction<br>Autodesk Construction Solutions (ACS)<br>Construction Loan<br>",
                "text_align": "left"
            }
        ]
    },
    {
        "type": "row",
        "href": "",
        "children": [
            {
                "value": "andresconstructioncom",
                "select": true
            },
            {
                "value": "Andres Construction Services, Llc",
                "text_align": "left"
            },
            {
                "value": 100,
                "score": true,
                "text_align": "center"
            },
            {
                "value": "",
                "text_align": "center"
            },
            {
                "value": "<a href='https://www.andresconstruction.com' target='_blank'>andresconstruction.com</a>",
                "text_align": "left"
            },
            {
                "value": "Construction",
                "text_align": "left"
            },
            {
                "value": "Medium-Small (50 - 199 Employees)",
                "text_align": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >CoConstruct<br>",
                "text_align": "left",
                "html": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >Autodesk Construction Solutions (ACS)<br>Construction Equipment<br>Construction<br>Construction Loan<br>Engineering, Procurement, and Construction (EPC)<br>Construction inspection<br>Construction Documentation<br>",
                "text_align": "left"
            }
        ]
    },
    {
        "type": "row",
        "href": "",
        "children": [
            {
                "value": "architektoncom",
                "select": true
            },
            {
                "value": "Architekton, Inc",
                "text_align": "left"
            },
            {
                "value": 100,
                "score": true,
                "text_align": "center"
            },
            {
                "value": "",
                "text_align": "center"
            },
            {
                "value": "<a href='https://www.architekton.com' target='_blank'>architekton.com</a>",
                "text_align": "left"
            },
            {
                "value": "Construction > Architecture",
                "text_align": "left"
            },
            {
                "value": "Small (10 - 49 Employees)",
                "text_align": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >CoConstruct<br>",
                "text_align": "left",
                "html": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >Construction inspection<br>Construction<br>Construction Loan<br>",
                "text_align": "left"
            }
        ]
    },
    {
        "type": "row",
        "href": "",
        "children": [
            {
                "value": "anchorqeacom",
                "select": true
            },
            {
                "value": "Anchor Qea, Llc",
                "text_align": "left"
            },
            {
                "value": 100,
                "score": true,
                "text_align": "center"
            },
            {
                "value": "",
                "text_align": "center"
            },
            {
                "value": "<a href='https://www.anchorqea.com' target='_blank'>anchorqea.com</a>",
                "text_align": "left"
            },
            {
                "value": "Construction > Architecture",
                "text_align": "left"
            },
            {
                "value": "Medium (200 - 499 Employees)",
                "text_align": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >CoConstruct<br>",
                "text_align": "left",
                "html": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >Construction<br>Autodesk Construction Solutions (ACS)<br>Construction inspection<br>Construction Loan<br>Construction Documentation<br>",
                "text_align": "left"
            }
        ]
    },
    {
        "type": "row",
        "href": "",
        "children": [
            {
                "value": "acmeconstructorscom",
                "select": true
            },
            {
                "value": "Acme Constructors, Inc.",
                "text_align": "left"
            },
            {
                "value": 100,
                "score": true,
                "text_align": "center"
            },
            {
                "value": "",
                "text_align": "center"
            },
            {
                "value": "<a href='https://www.acmeconstructors.com' target='_blank'>acmeconstructors.com</a>",
                "text_align": "left"
            },
            {
                "value": "Construction",
                "text_align": "left"
            },
            {
                "value": "Medium-Small (50 - 199 Employees)",
                "text_align": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >CoConstruct<br>",
                "text_align": "left",
                "html": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >Construction inspection<br>Construction<br>Construction Equipment<br>Construction Insurance<br>",
                "text_align": "left"
            }
        ]
    },
    {
        "type": "row",
        "href": "",
        "children": [
            {
                "value": "amescocom",
                "select": true
            },
            {
                "value": "Ames Construction, Inc.",
                "text_align": "left"
            },
            {
                "value": 100,
                "score": true,
                "text_align": "center"
            },
            {
                "value": "",
                "text_align": "center"
            },
            {
                "value": "<a href='https://www.amesco.com' target='_blank'>amesco.com</a>",
                "text_align": "left"
            },
            {
                "value": "Construction",
                "text_align": "left"
            },
            {
                "value": "Medium-Small (50 - 199 Employees)",
                "text_align": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >CoConstruct<br>",
                "text_align": "left",
                "html": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >Construction inspection<br>Autodesk Construction Solutions (ACS)<br>Construction Documentation<br>Engineering, Procurement, and Construction (EPC)<br>Construction Loan<br>Construction<br>Construction Equipment<br>Construction Insurance<br>",
                "text_align": "left"
            }
        ]
    },
    {
        "type": "row",
        "href": "",
        "children": [
            {
                "value": "acg-pacom",
                "select": true
            },
            {
                "value": "Apogee Consulting Group, P.A.",
                "text_align": "left"
            },
            {
                "value": 100,
                "score": true,
                "text_align": "center"
            },
            {
                "value": "",
                "text_align": "center"
            },
            {
                "value": "<a href='https://www.acg-pa.com' target='_blank'>acg-pa.com</a>",
                "text_align": "left"
            },
            {
                "value": "Construction",
                "text_align": "left"
            },
            {
                "value": "Medium-Small (50 - 199 Employees)",
                "text_align": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >CoConstruct<br>",
                "text_align": "left",
                "html": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >Construction Documentation<br>Construction<br>Engineering, Procurement, and Construction (EPC)<br>Autodesk Construction Solutions (ACS)<br>Construction inspection<br>Construction Loan<br>",
                "text_align": "left"
            }
        ]
    },
    {
        "type": "row",
        "href": "",
        "children": [
            {
                "value": "americashomeplacecom",
                "select": true
            },
            {
                "value": "America's Home Place, Inc.",
                "text_align": "left"
            },
            {
                "value": 100,
                "score": true,
                "text_align": "center"
            },
            {
                "value": "",
                "text_align": "center"
            },
            {
                "value": "<a href='https://www.americashomeplace.com' target='_blank'>americashomeplace.com</a>",
                "text_align": "left"
            },
            {
                "value": "Construction",
                "text_align": "left"
            },
            {
                "value": "Medium (200 - 499 Employees)",
                "text_align": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >CoConstruct<br>",
                "text_align": "left",
                "html": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >Autodesk Construction Solutions (ACS)<br>Construction Loan<br>Construction<br>Construction inspection<br>Construction Documentation<br>",
                "text_align": "left"
            }
        ]
    },
    {
        "type": "row",
        "href": "",
        "children": [
            {
                "value": "acscmcom",
                "select": true
            },
            {
                "value": "Acs, Inc.",
                "text_align": "left"
            },
            {
                "value": 100,
                "score": true,
                "text_align": "center"
            },
            {
                "value": "",
                "text_align": "center"
            },
            {
                "value": "<a href='https://www.acscm.com' target='_blank'>acscm.com</a>",
                "text_align": "left"
            },
            {
                "value": "Construction",
                "text_align": "left"
            },
            {
                "value": "Medium-Small (50 - 199 Employees)",
                "text_align": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >CoConstruct<br>",
                "text_align": "left",
                "html": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >Engineering, Procurement, and Construction (EPC)<br>Construction<br>Autodesk Construction Solutions (ACS)<br>Construction Insurance<br>Construction inspection<br>Construction Loan<br>",
                "text_align": "left"
            }
        ]
    },
    {
        "type": "row",
        "href": "",
        "children": [
            {
                "value": "arorapccom",
                "select": true
            },
            {
                "value": "Arora And Associates, P.C",
                "text_align": "left"
            },
            {
                "value": 100,
                "score": true,
                "text_align": "center"
            },
            {
                "value": "",
                "text_align": "center"
            },
            {
                "value": "<a href='https://www.arorapc.com' target='_blank'>arorapc.com</a>",
                "text_align": "left"
            },
            {
                "value": "Construction > Architecture",
                "text_align": "left"
            },
            {
                "value": "Medium-Small (50 - 199 Employees)",
                "text_align": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >CoConstruct<br>",
                "text_align": "left",
                "html": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >Autodesk Construction Solutions (ACS)<br>Engineering, Procurement, and Construction (EPC)<br>Construction<br>Construction inspection<br>Construction Loan<br>",
                "text_align": "left"
            }
        ]
    },
    {
        "type": "row",
        "href": "",
        "children": [
            {
                "value": "andersondrillingcom",
                "select": true
            },
            {
                "value": "Anderson Drilling Inc.",
                "text_align": "left"
            },
            {
                "value": 100,
                "score": true,
                "text_align": "center"
            },
            {
                "value": "",
                "text_align": "center"
            },
            {
                "value": "<a href='https://www.andersondrilling.com' target='_blank'>andersondrilling.com</a>",
                "text_align": "left"
            },
            {
                "value": "Construction",
                "text_align": "left"
            },
            {
                "value": "Medium-Small (50 - 199 Employees)",
                "text_align": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >CoConstruct<br>",
                "text_align": "left",
                "html": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >Construction inspection<br>Autodesk Construction Solutions (ACS)<br>Construction Loan<br>Construction<br>",
                "text_align": "left"
            }
        ]
    },
    {
        "type": "row",
        "href": "",
        "children": [
            {
                "value": "aks-engcom",
                "select": true
            },
            {
                "value": "Aks Engineering & Forestry, Llc",
                "text_align": "left"
            },
            {
                "value": 100,
                "score": true,
                "text_align": "center"
            },
            {
                "value": "",
                "text_align": "center"
            },
            {
                "value": "<a href='https://www.aks-eng.com' target='_blank'>aks-eng.com</a>",
                "text_align": "left"
            },
            {
                "value": "Construction",
                "text_align": "left"
            },
            {
                "value": "Medium (200 - 499 Employees)",
                "text_align": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >CoConstruct<br>",
                "text_align": "left",
                "html": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >Engineering, Procurement, and Construction (EPC)<br>Construction inspection<br>Autodesk Construction Solutions (ACS)<br>Construction<br>",
                "text_align": "left"
            }
        ]
    },
    {
        "type": "row",
        "href": "",
        "children": [
            {
                "value": "atlas-apexcom",
                "select": true
            },
            {
                "value": "Atlas Apex Roofing",
                "text_align": "left"
            },
            {
                "value": 100,
                "score": true,
                "text_align": "center"
            },
            {
                "value": "",
                "text_align": "center"
            },
            {
                "value": "<a href='https://www.atlas-apex.com' target='_blank'>atlas-apex.com</a>",
                "text_align": "left"
            },
            {
                "value": "Construction",
                "text_align": "left"
            },
            {
                "value": "Medium (200 - 499 Employees)",
                "text_align": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >CoConstruct<br>",
                "text_align": "left",
                "html": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >Construction inspection<br>Engineering, Procurement, and Construction (EPC)<br>Construction Equipment<br>Construction Insurance<br>Construction<br>Construction Documentation<br>Construction Loan<br>Autodesk Construction Solutions (ACS)<br>",
                "text_align": "left"
            }
        ]
    },
    {
        "type": "row",
        "href": "",
        "children": [
            {
                "value": "ack-inccom",
                "select": true
            },
            {
                "value": "Albert C. Kobayashi, Inc.",
                "text_align": "left"
            },
            {
                "value": 100,
                "score": true,
                "text_align": "center"
            },
            {
                "value": "",
                "text_align": "center"
            },
            {
                "value": "<a href='https://www.ack-inc.com' target='_blank'>ack-inc.com</a>",
                "text_align": "left"
            },
            {
                "value": "Construction",
                "text_align": "left"
            },
            {
                "value": "Medium-Small (50 - 199 Employees)",
                "text_align": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >CoConstruct<br>",
                "text_align": "left",
                "html": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >Construction inspection<br>Engineering, Procurement, and Construction (EPC)<br>Construction<br>Construction Documentation<br>Construction Equipment<br>",
                "text_align": "left"
            }
        ]
    },
    {
        "type": "row",
        "href": "",
        "children": [
            {
                "value": "arleywholesalecom",
                "select": true
            },
            {
                "value": "Arley Wholesale, Inc.",
                "text_align": "left"
            },
            {
                "value": 100,
                "score": true,
                "text_align": "center"
            },
            {
                "value": "",
                "text_align": "center"
            },
            {
                "value": "<a href='https://www.arleywholesale.com' target='_blank'>arleywholesale.com</a>",
                "text_align": "left"
            },
            {
                "value": "Construction",
                "text_align": "left"
            },
            {
                "value": "Medium-Small (50 - 199 Employees)",
                "text_align": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >CoConstruct<br>",
                "text_align": "left",
                "html": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >Construction<br>Construction inspection<br>Construction Loan<br>",
                "text_align": "left"
            }
        ]
    },
    {
        "type": "row",
        "href": "",
        "children": [
            {
                "value": "amiconus",
                "select": true
            },
            {
                "value": "Amicon Construction Management, Inc.",
                "text_align": "left"
            },
            {
                "value": 100,
                "score": true,
                "text_align": "center"
            },
            {
                "value": "",
                "text_align": "center"
            },
            {
                "value": "<a href='https://www.amicon.us' target='_blank'>amicon.us</a>",
                "text_align": "left"
            },
            {
                "value": "Construction",
                "text_align": "left"
            },
            {
                "value": "Micro (1 - 9 Employees)",
                "text_align": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >CoConstruct<br>",
                "text_align": "left",
                "html": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >Construction<br>Construction Insurance<br>Autodesk Construction Solutions (ACS)<br>Construction Documentation<br>Construction inspection<br>Construction Loan<br>Construction Equipment<br>",
                "text_align": "left"
            }
        ]
    },
    {
        "type": "row",
        "href": "",
        "children": [
            {
                "value": "agarchcom",
                "select": true
            },
            {
                "value": "Ag Architecture, Inc",
                "text_align": "left"
            },
            {
                "value": 100,
                "score": true,
                "text_align": "center"
            },
            {
                "value": "",
                "text_align": "center"
            },
            {
                "value": "<a href='https://www.agarch.com' target='_blank'>agarch.com</a>",
                "text_align": "left"
            },
            {
                "value": "Construction > Architecture",
                "text_align": "left"
            },
            {
                "value": "Medium-Small (50 - 199 Employees)",
                "text_align": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >CoConstruct<br>",
                "text_align": "left",
                "html": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >Construction<br>Construction Loan<br>Construction inspection<br>Construction Insurance<br>Construction Documentation<br>",
                "text_align": "left"
            }
        ]
    },
    {
        "type": "row",
        "href": "",
        "children": [
            {
                "value": "adamshomescom",
                "select": true
            },
            {
                "value": "Adams Homes Of Northwest Florida, Inc.",
                "text_align": "left"
            },
            {
                "value": 100,
                "score": true,
                "text_align": "center"
            },
            {
                "value": "",
                "text_align": "center"
            },
            {
                "value": "<a href='https://www.adamshomes.com' target='_blank'>adamshomes.com</a>",
                "text_align": "left"
            },
            {
                "value": "Construction > Heavy Construction",
                "text_align": "left"
            },
            {
                "value": "Small (10 - 49 Employees)",
                "text_align": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >CoConstruct<br>",
                "text_align": "left",
                "html": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >Construction<br>Construction inspection<br>Construction Loan<br>Autodesk Construction Solutions (ACS)<br>Construction Insurance<br>Construction Equipment<br>",
                "text_align": "left"
            }
        ]
    },
    {
        "type": "row",
        "href": "",
        "children": [
            {
                "value": "agcwiorg",
                "select": true
            },
            {
                "value": "Interior Installation Services, Inc.",
                "text_align": "left"
            },
            {
                "value": 100,
                "score": true,
                "text_align": "center"
            },
            {
                "value": "",
                "text_align": "center"
            },
            {
                "value": "<a href='https://www.agcwi.org' target='_blank'>agcwi.org</a>",
                "text_align": "left"
            },
            {
                "value": "Construction",
                "text_align": "left"
            },
            {
                "value": "Micro (1 - 9 Employees)",
                "text_align": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >CoConstruct<br>",
                "text_align": "left",
                "html": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >Autodesk Construction Solutions (ACS)<br>Construction inspection<br>Construction<br>",
                "text_align": "left"
            }
        ]
    },
    {
        "type": "row",
        "href": "",
        "children": [
            {
                "value": "adjayecom",
                "select": true
            },
            {
                "value": "Adjaye Associates, Inc",
                "text_align": "left"
            },
            {
                "value": 100,
                "score": true,
                "text_align": "center"
            },
            {
                "value": "",
                "text_align": "center"
            },
            {
                "value": "<a href='https://www.adjaye.com' target='_blank'>adjaye.com</a>",
                "text_align": "left"
            },
            {
                "value": "Construction > Architecture",
                "text_align": "left"
            },
            {
                "value": "Small (10 - 49 Employees)",
                "text_align": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >CoConstruct<br>",
                "text_align": "left",
                "html": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >Construction inspection<br>Construction<br>Construction Loan<br>Autodesk Construction Solutions (ACS)<br>",
                "text_align": "left"
            }
        ]
    },
    {
        "type": "row",
        "href": "",
        "children": [
            {
                "value": "adgokccom",
                "select": true
            },
            {
                "value": "Adg, Pc",
                "text_align": "left"
            },
            {
                "value": 100,
                "score": true,
                "text_align": "center"
            },
            {
                "value": "",
                "text_align": "center"
            },
            {
                "value": "<a href='https://www.adgokc.com' target='_blank'>adgokc.com</a>",
                "text_align": "left"
            },
            {
                "value": "Construction > Architecture",
                "text_align": "left"
            },
            {
                "value": "Medium-Small (50 - 199 Employees)",
                "text_align": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >CoConstruct<br>",
                "text_align": "left",
                "html": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >Autodesk Construction Solutions (ACS)<br>Construction Documentation<br>",
                "text_align": "left"
            }
        ]
    },
    {
        "type": "row",
        "href": "",
        "children": [
            {
                "value": "arcusacom",
                "select": true
            },
            {
                "value": "Arc/Architectural Resources Cambridge, Inc.",
                "text_align": "left"
            },
            {
                "value": 100,
                "score": true,
                "text_align": "center"
            },
            {
                "value": "",
                "text_align": "center"
            },
            {
                "value": "<a href='https://www.arcusa.com' target='_blank'>arcusa.com</a>",
                "text_align": "left"
            },
            {
                "value": "Construction > Architecture",
                "text_align": "left"
            },
            {
                "value": "Medium-Small (50 - 199 Employees)",
                "text_align": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >CoConstruct<br>",
                "text_align": "left",
                "html": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >Construction<br>Autodesk Construction Solutions (ACS)<br>Construction inspection<br>Construction Documentation<br>Construction Loan<br>",
                "text_align": "left"
            }
        ]
    },
    {
        "type": "row",
        "href": "",
        "children": [
            {
                "value": "blhallinccom",
                "select": true
            },
            {
                "value": "B.L. Hall, Inc.",
                "text_align": "left"
            },
            {
                "value": 100,
                "score": true,
                "text_align": "center"
            },
            {
                "value": "",
                "text_align": "center"
            },
            {
                "value": "<a href='https://www.blhallinc.com' target='_blank'>blhallinc.com</a>",
                "text_align": "left"
            },
            {
                "value": "Construction",
                "text_align": "left"
            },
            {
                "value": "Small (10 - 49 Employees)",
                "text_align": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >CoConstruct<br>",
                "text_align": "left",
                "html": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >Autodesk Construction Solutions (ACS)<br>Construction<br>Construction inspection<br>Construction Insurance<br>Construction Equipment<br>Construction Documentation<br>Engineering, Procurement, and Construction (EPC)<br>Construction Loan<br>",
                "text_align": "left"
            }
        ]
    },
    {
        "type": "row",
        "href": "",
        "children": [
            {
                "value": "bloomcoscom",
                "select": true
            },
            {
                "value": "Bloom Companies, Llc",
                "text_align": "left"
            },
            {
                "value": 100,
                "score": true,
                "text_align": "center"
            },
            {
                "value": "",
                "text_align": "center"
            },
            {
                "value": "<a href='https://www.bloomcos.com' target='_blank'>bloomcos.com</a>",
                "text_align": "left"
            },
            {
                "value": "Construction > Architecture",
                "text_align": "left"
            },
            {
                "value": "Medium (200 - 499 Employees)",
                "text_align": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >CoConstruct<br>",
                "text_align": "left",
                "html": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >Autodesk Construction Solutions (ACS)<br>Construction<br>Construction inspection<br>Construction Loan<br>",
                "text_align": "left"
            }
        ]
    },
    {
        "type": "row",
        "href": "",
        "children": [
            {
                "value": "baileyharriscom",
                "select": true
            },
            {
                "value": "Bailey Harris Construction Co. Inc",
                "text_align": "left"
            },
            {
                "value": 100,
                "score": true,
                "text_align": "center"
            },
            {
                "value": "",
                "text_align": "center"
            },
            {
                "value": "<a href='https://www.baileyharris.com' target='_blank'>baileyharris.com</a>",
                "text_align": "left"
            },
            {
                "value": "Construction",
                "text_align": "left"
            },
            {
                "value": "Medium-Small (50 - 199 Employees)",
                "text_align": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >CoConstruct<br>",
                "text_align": "left",
                "html": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >Autodesk Construction Solutions (ACS)<br>Construction inspection<br>Construction Loan<br>Construction Equipment<br>",
                "text_align": "left"
            }
        ]
    },
    {
        "type": "row",
        "href": "",
        "children": [
            {
                "value": "bnbuilderscom",
                "select": true
            },
            {
                "value": "Bn Builders, Inc.",
                "text_align": "left"
            },
            {
                "value": 100,
                "score": true,
                "text_align": "center"
            },
            {
                "value": "",
                "text_align": "center"
            },
            {
                "value": "<a href='https://www.bnbuilders.com' target='_blank'>bnbuilders.com</a>",
                "text_align": "left"
            },
            {
                "value": "Construction",
                "text_align": "left"
            },
            {
                "value": "Medium (200 - 499 Employees)",
                "text_align": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >CoConstruct<br>",
                "text_align": "left",
                "html": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >Construction Insurance<br>Autodesk Construction Solutions (ACS)<br>Construction Equipment<br>Construction inspection<br>Construction<br>Construction Loan<br>Construction Documentation<br>Engineering, Procurement, and Construction (EPC)<br>",
                "text_align": "left"
            }
        ]
    },
    {
        "type": "row",
        "href": "",
        "children": [
            {
                "value": "ballconcocom",
                "select": true
            },
            {
                "value": "Gordon N. Ball, Inc",
                "text_align": "left"
            },
            {
                "value": 100,
                "score": true,
                "text_align": "center"
            },
            {
                "value": "",
                "text_align": "center"
            },
            {
                "value": "<a href='https://www.ballconco.com' target='_blank'>ballconco.com</a>",
                "text_align": "left"
            },
            {
                "value": "Construction > Architecture",
                "text_align": "left"
            },
            {
                "value": "Medium-Small (50 - 199 Employees)",
                "text_align": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >CoConstruct<br>",
                "text_align": "left",
                "html": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >Construction<br>Construction inspection<br>Autodesk Construction Solutions (ACS)<br>",
                "text_align": "left"
            }
        ]
    },
    {
        "type": "row",
        "href": "",
        "children": [
            {
                "value": "boraco",
                "select": true
            },
            {
                "value": "Bora Architects, Inc",
                "text_align": "left"
            },
            {
                "value": 100,
                "score": true,
                "text_align": "center"
            },
            {
                "value": "",
                "text_align": "center"
            },
            {
                "value": "<a href='https://www.bora.co' target='_blank'>bora.co</a>",
                "text_align": "left"
            },
            {
                "value": "Construction > Architecture",
                "text_align": "left"
            },
            {
                "value": "Medium-Small (50 - 199 Employees)",
                "text_align": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >CoConstruct<br>",
                "text_align": "left",
                "html": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >Construction inspection<br>Engineering, Procurement, and Construction (EPC)<br>Construction Insurance<br>Construction<br>Autodesk Construction Solutions (ACS)<br>Construction Loan<br>Construction Documentation<br>",
                "text_align": "left"
            }
        ]
    },
    {
        "type": "row",
        "href": "",
        "children": [
            {
                "value": "borton-lawsoncom",
                "select": true
            },
            {
                "value": "Borton Lawson Engineering, Inc.",
                "text_align": "left"
            },
            {
                "value": 100,
                "score": true,
                "text_align": "center"
            },
            {
                "value": "",
                "text_align": "center"
            },
            {
                "value": "<a href='https://www.borton-lawson.com' target='_blank'>borton-lawson.com</a>",
                "text_align": "left"
            },
            {
                "value": "Construction",
                "text_align": "left"
            },
            {
                "value": "Medium (200 - 499 Employees)",
                "text_align": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >CoConstruct<br>",
                "text_align": "left",
                "html": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >Construction<br>Construction inspection<br>Construction Loan<br>Construction Documentation<br>Autodesk Construction Solutions (ACS)<br>",
                "text_align": "left"
            }
        ]
    },
    {
        "type": "row",
        "href": "",
        "children": [
            {
                "value": "bluebirdgscom",
                "select": true
            },
            {
                "value": "Bluebird Graphic Solutions",
                "text_align": "left"
            },
            {
                "value": 100,
                "score": true,
                "text_align": "center"
            },
            {
                "value": "",
                "text_align": "center"
            },
            {
                "value": "<a href='https://www.bluebirdgs.com' target='_blank'>bluebirdgs.com</a>",
                "text_align": "left"
            },
            {
                "value": "Construction",
                "text_align": "left"
            },
            {
                "value": "Small (10 - 49 Employees)",
                "text_align": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >CoConstruct<br>",
                "text_align": "left",
                "html": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >Construction Loan<br>Construction Documentation<br>",
                "text_align": "left"
            }
        ]
    },
    {
        "type": "row",
        "href": "",
        "children": [
            {
                "value": "bowencollinscom",
                "select": true
            },
            {
                "value": "Bowen, Collins & Associates, Inc",
                "text_align": "left"
            },
            {
                "value": 100,
                "score": true,
                "text_align": "center"
            },
            {
                "value": "",
                "text_align": "center"
            },
            {
                "value": "<a href='https://www.bowencollins.com' target='_blank'>bowencollins.com</a>",
                "text_align": "left"
            },
            {
                "value": "Construction > Architecture",
                "text_align": "left"
            },
            {
                "value": "Medium-Small (50 - 199 Employees)",
                "text_align": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >CoConstruct<br>",
                "text_align": "left",
                "html": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >Construction<br>Construction Equipment<br>Construction Loan<br>Construction inspection<br>",
                "text_align": "left"
            }
        ]
    },
    {
        "type": "row",
        "href": "",
        "children": [
            {
                "value": "bradburystammcom",
                "select": true
            },
            {
                "value": "Bradbury Stamm Construction, Inc.",
                "text_align": "left"
            },
            {
                "value": 100,
                "score": true,
                "text_align": "center"
            },
            {
                "value": "",
                "text_align": "center"
            },
            {
                "value": "<a href='https://www.bradburystamm.com' target='_blank'>bradburystamm.com</a>",
                "text_align": "left"
            },
            {
                "value": "Construction",
                "text_align": "left"
            },
            {
                "value": "Medium-Small (50 - 199 Employees)",
                "text_align": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >CoConstruct<br>",
                "text_align": "left",
                "html": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >Construction inspection<br>Autodesk Construction Solutions (ACS)<br>Construction<br>Construction Insurance<br>Engineering, Procurement, and Construction (EPC)<br>Construction Equipment<br>",
                "text_align": "left"
            }
        ]
    },
    {
        "type": "row",
        "href": "",
        "children": [
            {
                "value": "breadloafcom",
                "select": true
            },
            {
                "value": "Bread Loaf Corporation",
                "text_align": "left"
            },
            {
                "value": 100,
                "score": true,
                "text_align": "center"
            },
            {
                "value": "",
                "text_align": "center"
            },
            {
                "value": "<a href='https://www.breadloaf.com' target='_blank'>breadloaf.com</a>",
                "text_align": "left"
            },
            {
                "value": "Construction",
                "text_align": "left"
            },
            {
                "value": "Medium-Small (50 - 199 Employees)",
                "text_align": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >CoConstruct<br>",
                "text_align": "left",
                "html": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >Construction Loan<br>Construction<br>Autodesk Construction Solutions (ACS)<br>Construction inspection<br>",
                "text_align": "left"
            }
        ]
    },
    {
        "type": "row",
        "href": "",
        "children": [
            {
                "value": "brsarchcom",
                "select": true
            },
            {
                "value": "Barker Rinker Seacat Architecture P.C",
                "text_align": "left"
            },
            {
                "value": 100,
                "score": true,
                "text_align": "center"
            },
            {
                "value": "",
                "text_align": "center"
            },
            {
                "value": "<a href='https://www.brsarch.com' target='_blank'>brsarch.com</a>",
                "text_align": "left"
            },
            {
                "value": "Construction > Architecture",
                "text_align": "left"
            },
            {
                "value": "Medium-Small (50 - 199 Employees)",
                "text_align": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >CoConstruct<br>",
                "text_align": "left",
                "html": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >Autodesk Construction Solutions (ACS)<br>Construction Documentation<br>Construction<br>Construction Loan<br>Construction inspection<br>",
                "text_align": "left"
            }
        ]
    },
    {
        "type": "row",
        "href": "",
        "children": [
            {
                "value": "btestv",
                "select": true
            },
            {
                "value": "Boardwine Electrical Svc.",
                "text_align": "left"
            },
            {
                "value": 100,
                "score": true,
                "text_align": "center"
            },
            {
                "value": "",
                "text_align": "center"
            },
            {
                "value": "<a href='https://www.btes.tv' target='_blank'>btes.tv</a>",
                "text_align": "left"
            },
            {
                "value": "Construction",
                "text_align": "left"
            },
            {
                "value": "Small (10 - 49 Employees)",
                "text_align": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >CoConstruct<br>",
                "text_align": "left",
                "html": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >Construction inspection<br>Construction Documentation<br>Engineering, Procurement, and Construction (EPC)<br>Construction Loan<br>Construction Equipment<br>Construction Insurance<br>Autodesk Construction Solutions (ACS)<br>Construction<br>",
                "text_align": "left"
            }
        ]
    },
    {
        "type": "row",
        "href": "",
        "children": [
            {
                "value": "buildersdesigncom",
                "select": true
            },
            {
                "value": "Builders Design & Leasing, Inc.",
                "text_align": "left"
            },
            {
                "value": 100,
                "score": true,
                "text_align": "center"
            },
            {
                "value": "",
                "text_align": "center"
            },
            {
                "value": "<a href='https://www.buildersdesign.com' target='_blank'>buildersdesign.com</a>",
                "text_align": "left"
            },
            {
                "value": "Construction > Architecture",
                "text_align": "left"
            },
            {
                "value": "Medium-Small (50 - 199 Employees)",
                "text_align": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >CoConstruct<br>",
                "text_align": "left",
                "html": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >Construction Equipment<br>Construction Loan<br>Construction<br>Autodesk Construction Solutions (ACS)<br>Construction Documentation<br>Construction inspection<br>",
                "text_align": "left"
            }
        ]
    },
    {
        "type": "row",
        "href": "",
        "children": [
            {
                "value": "builtechllccom",
                "select": true
            },
            {
                "value": "Builtech Services, Llc",
                "text_align": "left"
            },
            {
                "value": 100,
                "score": true,
                "text_align": "center"
            },
            {
                "value": "",
                "text_align": "center"
            },
            {
                "value": "<a href='https://www.builtechllc.com' target='_blank'>builtechllc.com</a>",
                "text_align": "left"
            },
            {
                "value": "Construction",
                "text_align": "left"
            },
            {
                "value": "Medium-Small (50 - 199 Employees)",
                "text_align": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >CoConstruct<br>",
                "text_align": "left",
                "html": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >Construction Equipment<br>Construction inspection<br>Construction<br>Engineering, Procurement, and Construction (EPC)<br>Construction Loan<br>Construction Documentation<br>",
                "text_align": "left"
            }
        ]
    },
    {
        "type": "row",
        "href": "",
        "children": [
            {
                "value": "bulleycom",
                "select": true
            },
            {
                "value": "Bulley & Andrews, Llc",
                "text_align": "left"
            },
            {
                "value": 100,
                "score": true,
                "text_align": "center"
            },
            {
                "value": "",
                "text_align": "center"
            },
            {
                "value": "<a href='https://www.bulley.com' target='_blank'>bulley.com</a>",
                "text_align": "left"
            },
            {
                "value": "Construction",
                "text_align": "left"
            },
            {
                "value": "Medium (200 - 499 Employees)",
                "text_align": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >CoConstruct<br>",
                "text_align": "left",
                "html": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >Construction Loan<br>Engineering, Procurement, and Construction (EPC)<br>Construction<br>Autodesk Construction Solutions (ACS)<br>Construction Equipment<br>Construction Documentation<br>Construction inspection<br>Construction Insurance<br>",
                "text_align": "left"
            }
        ]
    },
    {
        "type": "row",
        "href": "",
        "children": [
            {
                "value": "burgessniplecom",
                "select": true
            },
            {
                "value": "Burgess & Niple, Inc.",
                "text_align": "left"
            },
            {
                "value": 100,
                "score": true,
                "text_align": "center"
            },
            {
                "value": "",
                "text_align": "center"
            },
            {
                "value": "<a href='https://www.burgessniple.com' target='_blank'>burgessniple.com</a>",
                "text_align": "left"
            },
            {
                "value": "Construction",
                "text_align": "left"
            },
            {
                "value": "Medium (200 - 499 Employees)",
                "text_align": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >CoConstruct<br>",
                "text_align": "left",
                "html": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >Construction Documentation<br>Construction inspection<br>Construction Loan<br>Construction<br>Autodesk Construction Solutions (ACS)<br>Engineering, Procurement, and Construction (EPC)<br>Construction Equipment<br>",
                "text_align": "left"
            }
        ]
    },
    {
        "type": "row",
        "href": "",
        "children": [
            {
                "value": "burkecgicom",
                "select": true
            },
            {
                "value": "Burke Construction Group Inc",
                "text_align": "left"
            },
            {
                "value": 100,
                "score": true,
                "text_align": "center"
            },
            {
                "value": "",
                "text_align": "center"
            },
            {
                "value": "<a href='https://www.burkecgi.com' target='_blank'>burkecgi.com</a>",
                "text_align": "left"
            },
            {
                "value": "Construction",
                "text_align": "left"
            },
            {
                "value": "Medium-Small (50 - 199 Employees)",
                "text_align": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >CoConstruct<br>",
                "text_align": "left",
                "html": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >Autodesk Construction Solutions (ACS)<br>Construction<br>Engineering, Procurement, and Construction (EPC)<br>Construction inspection<br>Construction Loan<br>",
                "text_align": "left"
            }
        ]
    },
    {
        "type": "row",
        "href": "",
        "children": [
            {
                "value": "burlesonconstructioncom",
                "select": true
            },
            {
                "value": "Burleson Construction Company, Inc",
                "text_align": "left"
            },
            {
                "value": 100,
                "score": true,
                "text_align": "center"
            },
            {
                "value": "",
                "text_align": "center"
            },
            {
                "value": "<a href='https://www.burlesonconstruction.com' target='_blank'>burlesonconstruction.com</a>",
                "text_align": "left"
            },
            {
                "value": "Construction",
                "text_align": "left"
            },
            {
                "value": "Small (10 - 49 Employees)",
                "text_align": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >CoConstruct<br>",
                "text_align": "left",
                "html": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >Construction inspection<br>Construction Loan<br>Construction Documentation<br>Engineering, Procurement, and Construction (EPC)<br>Autodesk Construction Solutions (ACS)<br>Construction<br>Construction Equipment<br>Construction Insurance<br>",
                "text_align": "left"
            }
        ]
    },
    {
        "type": "row",
        "href": "",
        "children": [
            {
                "value": "burnsteadcom",
                "select": true
            },
            {
                "value": "Burnstead Construction, Llc",
                "text_align": "left"
            },
            {
                "value": 100,
                "score": true,
                "text_align": "center"
            },
            {
                "value": "",
                "text_align": "center"
            },
            {
                "value": "<a href='https://www.burnstead.com' target='_blank'>burnstead.com</a>",
                "text_align": "left"
            },
            {
                "value": "Construction",
                "text_align": "left"
            },
            {
                "value": "Medium-Small (50 - 199 Employees)",
                "text_align": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >CoConstruct<br>",
                "text_align": "left",
                "html": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >Autodesk Construction Solutions (ACS)<br>Construction<br>Construction Loan<br>Construction Documentation<br>",
                "text_align": "left"
            }
        ]
    },
    {
        "type": "row",
        "href": "",
        "children": [
            {
                "value": "bykconstructioncom",
                "select": true
            },
            {
                "value": "Byk Construction Inc.",
                "text_align": "left"
            },
            {
                "value": 100,
                "score": true,
                "text_align": "center"
            },
            {
                "value": "",
                "text_align": "center"
            },
            {
                "value": "<a href='https://www.bykconstruction.com' target='_blank'>bykconstruction.com</a>",
                "text_align": "left"
            },
            {
                "value": "Construction > Heavy Construction",
                "text_align": "left"
            },
            {
                "value": "Micro (1 - 9 Employees)",
                "text_align": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >CoConstruct<br>",
                "text_align": "left",
                "html": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >Construction Equipment<br>Construction<br>Autodesk Construction Solutions (ACS)<br>Construction inspection<br>",
                "text_align": "left"
            }
        ]
    },
    {
        "type": "row",
        "href": "",
        "children": [
            {
                "value": "baudhuincom",
                "select": true
            },
            {
                "value": "Baudhuin Incorporated",
                "text_align": "left"
            },
            {
                "value": 100,
                "score": true,
                "text_align": "center"
            },
            {
                "value": "",
                "text_align": "center"
            },
            {
                "value": "<a href='https://www.baudhuin.com' target='_blank'>baudhuin.com</a>",
                "text_align": "left"
            },
            {
                "value": "Construction",
                "text_align": "left"
            },
            {
                "value": "Micro (1 - 9 Employees)",
                "text_align": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >CoConstruct<br>",
                "text_align": "left",
                "html": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >Construction Insurance<br>Autodesk Construction Solutions (ACS)<br>Construction<br>Construction inspection<br>Construction Equipment<br>Construction Loan<br>",
                "text_align": "left"
            }
        ]
    },
    {
        "type": "row",
        "href": "",
        "children": [
            {
                "value": "bbm-archcom",
                "select": true
            },
            {
                "value": "Bb&M Architecture Pllc",
                "text_align": "left"
            },
            {
                "value": 100,
                "score": true,
                "text_align": "center"
            },
            {
                "value": "",
                "text_align": "center"
            },
            {
                "value": "<a href='https://www.bbm-arch.com' target='_blank'>bbm-arch.com</a>",
                "text_align": "left"
            },
            {
                "value": "Construction > Architecture",
                "text_align": "left"
            },
            {
                "value": "Medium-Small (50 - 199 Employees)",
                "text_align": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >CoConstruct<br>",
                "text_align": "left",
                "html": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >Autodesk Construction Solutions (ACS)<br>Construction Loan<br>Construction inspection<br>Construction<br>Construction Documentation<br>",
                "text_align": "left"
            }
        ]
    },
    {
        "type": "row",
        "href": "",
        "children": [
            {
                "value": "bdgllpcom",
                "select": true
            },
            {
                "value": "Bdg Architects, Llp",
                "text_align": "left"
            },
            {
                "value": 100,
                "score": true,
                "text_align": "center"
            },
            {
                "value": "",
                "text_align": "center"
            },
            {
                "value": "<a href='https://www.bdgllp.com' target='_blank'>bdgllp.com</a>",
                "text_align": "left"
            },
            {
                "value": "Construction > Architecture",
                "text_align": "left"
            },
            {
                "value": "Medium-Small (50 - 199 Employees)",
                "text_align": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >CoConstruct<br>",
                "text_align": "left",
                "html": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >Construction<br>Construction Documentation<br>Autodesk Construction Solutions (ACS)<br>",
                "text_align": "left"
            }
        ]
    },
    {
        "type": "row",
        "href": "",
        "children": [
            {
                "value": "beckermorgancom",
                "select": true
            },
            {
                "value": "Becker Morgan Group, Inc.",
                "text_align": "left"
            },
            {
                "value": 100,
                "score": true,
                "text_align": "center"
            },
            {
                "value": "",
                "text_align": "center"
            },
            {
                "value": "<a href='https://www.beckermorgan.com' target='_blank'>beckermorgan.com</a>",
                "text_align": "left"
            },
            {
                "value": "Construction",
                "text_align": "left"
            },
            {
                "value": "Medium-Small (50 - 199 Employees)",
                "text_align": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >CoConstruct<br>",
                "text_align": "left",
                "html": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >Construction Insurance<br>Construction inspection<br>Construction<br>Engineering, Procurement, and Construction (EPC)<br>Construction Documentation<br>Autodesk Construction Solutions (ACS)<br>",
                "text_align": "left"
            }
        ]
    },
    {
        "type": "row",
        "href": "",
        "children": [
            {
                "value": "benchmark-inccom",
                "select": true
            },
            {
                "value": "Benchmark, Inc.",
                "text_align": "left"
            },
            {
                "value": 100,
                "score": true,
                "text_align": "center"
            },
            {
                "value": "",
                "text_align": "center"
            },
            {
                "value": "<a href='https://www.benchmark-inc.com' target='_blank'>benchmark-inc.com</a>",
                "text_align": "left"
            },
            {
                "value": "Construction",
                "text_align": "left"
            },
            {
                "value": "Medium-Small (50 - 199 Employees)",
                "text_align": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >CoConstruct<br>",
                "text_align": "left",
                "html": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >Construction inspection<br>Engineering, Procurement, and Construction (EPC)<br>Construction Insurance<br>Construction<br>Construction Documentation<br>Autodesk Construction Solutions (ACS)<br>",
                "text_align": "left"
            }
        ]
    },
    {
        "type": "row",
        "href": "",
        "children": [
            {
                "value": "benikecom",
                "select": true
            },
            {
                "value": "Alvin E. Benike, Inc.",
                "text_align": "left"
            },
            {
                "value": 100,
                "score": true,
                "text_align": "center"
            },
            {
                "value": "",
                "text_align": "center"
            },
            {
                "value": "<a href='https://www.benike.com' target='_blank'>benike.com</a>",
                "text_align": "left"
            },
            {
                "value": "Construction",
                "text_align": "left"
            },
            {
                "value": "Small (10 - 49 Employees)",
                "text_align": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >CoConstruct<br>",
                "text_align": "left",
                "html": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >Construction<br>Autodesk Construction Solutions (ACS)<br>Construction Loan<br>Construction Documentation<br>",
                "text_align": "left"
            }
        ]
    },
    {
        "type": "row",
        "href": "",
        "children": [
            {
                "value": "betenboughcom",
                "select": true
            },
            {
                "value": "Betenbough Homes",
                "text_align": "left"
            },
            {
                "value": 100,
                "score": true,
                "text_align": "center"
            },
            {
                "value": "",
                "text_align": "center"
            },
            {
                "value": "<a href='https://www.betenbough.com' target='_blank'>betenbough.com</a>",
                "text_align": "left"
            },
            {
                "value": "Construction",
                "text_align": "left"
            },
            {
                "value": "Medium-Small (50 - 199 Employees)",
                "text_align": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >CoConstruct<br>",
                "text_align": "left",
                "html": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >Construction Insurance<br>Construction Documentation<br>Construction inspection<br>Autodesk Construction Solutions (ACS)<br>Construction<br>Construction Equipment<br>",
                "text_align": "left"
            }
        ]
    },
    {
        "type": "row",
        "href": "",
        "children": [
            {
                "value": "bfcontractingcom",
                "select": true
            },
            {
                "value": "B&F Contracting, Inc",
                "text_align": "left"
            },
            {
                "value": 100,
                "score": true,
                "text_align": "center"
            },
            {
                "value": "",
                "text_align": "center"
            },
            {
                "value": "<a href='https://www.bfcontracting.com' target='_blank'>bfcontracting.com</a>",
                "text_align": "left"
            },
            {
                "value": "Construction",
                "text_align": "left"
            },
            {
                "value": "Medium (200 - 499 Employees)",
                "text_align": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >CoConstruct<br>",
                "text_align": "left",
                "html": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >Construction<br>Construction Documentation<br>Autodesk Construction Solutions (ACS)<br>",
                "text_align": "left"
            }
        ]
    },
    {
        "type": "row",
        "href": "",
        "children": [
            {
                "value": "centerbrookcom",
                "select": true
            },
            {
                "value": "Centerbrook Architects And Planners, Llp",
                "text_align": "left"
            },
            {
                "value": 100,
                "score": true,
                "text_align": "center"
            },
            {
                "value": "",
                "text_align": "center"
            },
            {
                "value": "<a href='https://www.centerbrook.com' target='_blank'>centerbrook.com</a>",
                "text_align": "left"
            },
            {
                "value": "Construction > Architecture",
                "text_align": "left"
            },
            {
                "value": "Medium-Small (50 - 199 Employees)",
                "text_align": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >CoConstruct<br>",
                "text_align": "left",
                "html": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >Construction<br>Autodesk Construction Solutions (ACS)<br>Construction Loan<br>Construction Documentation<br>",
                "text_align": "left"
            }
        ]
    },
    {
        "type": "row",
        "href": "",
        "children": [
            {
                "value": "certifiedpowersystemscom",
                "select": true
            },
            {
                "value": "Certified Power Systems, Inc.",
                "text_align": "left"
            },
            {
                "value": 100,
                "score": true,
                "text_align": "center"
            },
            {
                "value": "",
                "text_align": "center"
            },
            {
                "value": "<a href='https://www.certifiedpowersystems.com' target='_blank'>certifiedpowersystems.com</a>",
                "text_align": "left"
            },
            {
                "value": "Construction",
                "text_align": "left"
            },
            {
                "value": "Micro (1 - 9 Employees)",
                "text_align": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >CoConstruct<br>",
                "text_align": "left",
                "html": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >Autodesk Construction Solutions (ACS)<br>Construction<br>Construction inspection<br>Construction Loan<br>",
                "text_align": "left"
            }
        ]
    },
    {
        "type": "row",
        "href": "",
        "children": [
            {
                "value": "cesglobalcom",
                "select": true
            },
            {
                "value": "Childress Engineering Services, Inc",
                "text_align": "left"
            },
            {
                "value": 100,
                "score": true,
                "text_align": "center"
            },
            {
                "value": "",
                "text_align": "center"
            },
            {
                "value": "<a href='https://www.cesglobal.com' target='_blank'>cesglobal.com</a>",
                "text_align": "left"
            },
            {
                "value": "Construction > Architecture",
                "text_align": "left"
            },
            {
                "value": "Medium-Small (50 - 199 Employees)",
                "text_align": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >CoConstruct<br>",
                "text_align": "left",
                "html": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >Construction<br>Autodesk Construction Solutions (ACS)<br>Construction Loan<br>Construction inspection<br>Engineering, Procurement, and Construction (EPC)<br>",
                "text_align": "left"
            }
        ]
    },
    {
        "type": "row",
        "href": "",
        "children": [
            {
                "value": "chaseroofingcom",
                "select": true
            },
            {
                "value": "Chase Roofing & Contracting",
                "text_align": "left"
            },
            {
                "value": 100,
                "score": true,
                "text_align": "center"
            },
            {
                "value": "",
                "text_align": "center"
            },
            {
                "value": "<a href='https://www.chaseroofing.com' target='_blank'>chaseroofing.com</a>",
                "text_align": "left"
            },
            {
                "value": "Construction",
                "text_align": "left"
            },
            {
                "value": "Small (10 - 49 Employees)",
                "text_align": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >CoConstruct<br>",
                "text_align": "left",
                "html": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >Autodesk Construction Solutions (ACS)<br>",
                "text_align": "left"
            }
        ]
    },
    {
        "type": "row",
        "href": "",
        "children": [
            {
                "value": "chemdrycom",
                "select": true
            },
            {
                "value": "Harris Research Inc.",
                "text_align": "left"
            },
            {
                "value": 100,
                "score": true,
                "text_align": "center"
            },
            {
                "value": "",
                "text_align": "center"
            },
            {
                "value": "<a href='https://www.chemdry.com' target='_blank'>chemdry.com</a>",
                "text_align": "left"
            },
            {
                "value": "Construction > Contractors",
                "text_align": "left"
            },
            {
                "value": "Medium (200 - 499 Employees)",
                "text_align": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >CoConstruct<br>",
                "text_align": "left",
                "html": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >Construction<br>Construction Documentation<br>Construction inspection<br>",
                "text_align": "left"
            }
        ]
    },
    {
        "type": "row",
        "href": "",
        "children": [
            {
                "value": "chpcustomheatingcom",
                "select": true
            },
            {
                "value": "Custom Heating And Plumbing",
                "text_align": "left"
            },
            {
                "value": 100,
                "score": true,
                "text_align": "center"
            },
            {
                "value": "",
                "text_align": "center"
            },
            {
                "value": "<a href='https://www.chpcustomheating.com' target='_blank'>chpcustomheating.com</a>",
                "text_align": "left"
            },
            {
                "value": "Construction",
                "text_align": "left"
            },
            {
                "value": "Small (10 - 49 Employees)",
                "text_align": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >CoConstruct<br>",
                "text_align": "left",
                "html": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >Construction<br>Construction inspection<br>Construction Equipment<br>",
                "text_align": "left"
            }
        ]
    },
    {
        "type": "row",
        "href": "",
        "children": [
            {
                "value": "chugach-akcom",
                "select": true
            },
            {
                "value": "Chugach Federal Solutions, Inc.",
                "text_align": "left"
            },
            {
                "value": 100,
                "score": true,
                "text_align": "center"
            },
            {
                "value": "",
                "text_align": "center"
            },
            {
                "value": "<a href='https://www.chugach-ak.com' target='_blank'>chugach-ak.com</a>",
                "text_align": "left"
            },
            {
                "value": "Construction",
                "text_align": "left"
            },
            {
                "value": "Medium-Small (50 - 199 Employees)",
                "text_align": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >CoConstruct<br>",
                "text_align": "left",
                "html": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >Autodesk Construction Solutions (ACS)<br>Construction<br>Engineering, Procurement, and Construction (EPC)<br>Construction inspection<br>Construction Documentation<br>Construction Loan<br>",
                "text_align": "left"
            }
        ]
    },
    {
        "type": "row",
        "href": "",
        "children": [
            {
                "value": "cimgbizcom",
                "select": true
            },
            {
                "value": "Commercial Interiors Manufacturing, Inc.",
                "text_align": "left"
            },
            {
                "value": 100,
                "score": true,
                "text_align": "center"
            },
            {
                "value": "",
                "text_align": "center"
            },
            {
                "value": "<a href='https://www.cimgbiz.com' target='_blank'>cimgbiz.com</a>",
                "text_align": "left"
            },
            {
                "value": "Construction",
                "text_align": "left"
            },
            {
                "value": "Micro (1 - 9 Employees)",
                "text_align": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >CoConstruct<br>",
                "text_align": "left",
                "html": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >Construction inspection<br>Construction<br>Construction Loan<br>",
                "text_align": "left"
            }
        ]
    },
    {
        "type": "row",
        "href": "",
        "children": [
            {
                "value": "citnaltacom",
                "select": true
            },
            {
                "value": "Citnalta Construction Corp",
                "text_align": "left"
            },
            {
                "value": 100,
                "score": true,
                "text_align": "center"
            },
            {
                "value": "",
                "text_align": "center"
            },
            {
                "value": "<a href='https://www.citnalta.com' target='_blank'>citnalta.com</a>",
                "text_align": "left"
            },
            {
                "value": "Construction",
                "text_align": "left"
            },
            {
                "value": "Medium-Small (50 - 199 Employees)",
                "text_align": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >CoConstruct<br>",
                "text_align": "left",
                "html": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >Autodesk Construction Solutions (ACS)<br>Construction Loan<br>Construction<br>",
                "text_align": "left"
            }
        ]
    },
    {
        "type": "row",
        "href": "",
        "children": [
            {
                "value": "cjsarchitectscom",
                "select": true
            },
            {
                "value": "Cjs Architects (Chaintreuil Jensen Stark Architects)",
                "text_align": "left"
            },
            {
                "value": 100,
                "score": true,
                "text_align": "center"
            },
            {
                "value": "",
                "text_align": "center"
            },
            {
                "value": "<a href='https://www.cjsarchitects.com' target='_blank'>cjsarchitects.com</a>",
                "text_align": "left"
            },
            {
                "value": "Construction > Architecture",
                "text_align": "left"
            },
            {
                "value": "Small (10 - 49 Employees)",
                "text_align": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >CoConstruct<br>",
                "text_align": "left",
                "html": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >Autodesk Construction Solutions (ACS)<br>Construction Loan<br>Construction<br>Construction inspection<br>",
                "text_align": "left"
            }
        ]
    },
    {
        "type": "row",
        "href": "",
        "children": [
            {
                "value": "ckfcocom",
                "select": true
            },
            {
                "value": "Consolidated Kitchens & Fireplaces",
                "text_align": "left"
            },
            {
                "value": 100,
                "score": true,
                "text_align": "center"
            },
            {
                "value": "",
                "text_align": "center"
            },
            {
                "value": "<a href='https://www.ckfco.com' target='_blank'>ckfco.com</a>",
                "text_align": "left"
            },
            {
                "value": "Construction",
                "text_align": "left"
            },
            {
                "value": "Medium (200 - 499 Employees)",
                "text_align": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >CoConstruct<br>",
                "text_align": "left",
                "html": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >Construction<br>Autodesk Construction Solutions (ACS)<br>Construction inspection<br>",
                "text_align": "left"
            }
        ]
    },
    {
        "type": "row",
        "href": "",
        "children": [
            {
                "value": "cms-corporationcom",
                "select": true
            },
            {
                "value": "Custom Mechanical Systems Corp",
                "text_align": "left"
            },
            {
                "value": 100,
                "score": true,
                "text_align": "center"
            },
            {
                "value": "",
                "text_align": "center"
            },
            {
                "value": "<a href='https://www.cms-corporation.com' target='_blank'>cms-corporation.com</a>",
                "text_align": "left"
            },
            {
                "value": "Construction",
                "text_align": "left"
            },
            {
                "value": "Medium-Small (50 - 199 Employees)",
                "text_align": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >CoConstruct<br>",
                "text_align": "left",
                "html": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >Autodesk Construction Solutions (ACS)<br>Construction<br>Construction inspection<br>Construction Loan<br>",
                "text_align": "left"
            }
        ]
    },
    {
        "type": "row",
        "href": "",
        "children": [
            {
                "value": "cnygroupcom",
                "select": true
            },
            {
                "value": "Cny Group",
                "text_align": "left"
            },
            {
                "value": 100,
                "score": true,
                "text_align": "center"
            },
            {
                "value": "",
                "text_align": "center"
            },
            {
                "value": "<a href='https://www.cnygroup.com' target='_blank'>cnygroup.com</a>",
                "text_align": "left"
            },
            {
                "value": "Construction",
                "text_align": "left"
            },
            {
                "value": "Medium-Small (50 - 199 Employees)",
                "text_align": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >CoConstruct<br>",
                "text_align": "left",
                "html": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >Autodesk Construction Solutions (ACS)<br>Construction<br>Construction Documentation<br>Construction inspection<br>Construction Insurance<br>Construction Loan<br>Construction Equipment<br>",
                "text_align": "left"
            }
        ]
    },
    {
        "type": "row",
        "href": "",
        "children": [
            {
                "value": "comfortsolutionsincnet",
                "select": true
            },
            {
                "value": "Comfort Solutions",
                "text_align": "left"
            },
            {
                "value": 100,
                "score": true,
                "text_align": "center"
            },
            {
                "value": "",
                "text_align": "center"
            },
            {
                "value": "<a href='https://www.comfortsolutionsinc.net' target='_blank'>comfortsolutionsinc.net</a>",
                "text_align": "left"
            },
            {
                "value": "Construction",
                "text_align": "left"
            },
            {
                "value": "Small (10 - 49 Employees)",
                "text_align": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >CoConstruct<br>",
                "text_align": "left",
                "html": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >Autodesk Construction Solutions (ACS)<br>Construction<br>Construction inspection<br>Construction Loan<br>",
                "text_align": "left"
            }
        ]
    },
    {
        "type": "row",
        "href": "",
        "children": [
            {
                "value": "commonwealthconet",
                "select": true
            },
            {
                "value": "The Commonwealth Companies",
                "text_align": "left"
            },
            {
                "value": 100,
                "score": true,
                "text_align": "center"
            },
            {
                "value": "",
                "text_align": "center"
            },
            {
                "value": "<a href='https://www.commonwealthco.net' target='_blank'>commonwealthco.net</a>",
                "text_align": "left"
            },
            {
                "value": "Construction",
                "text_align": "left"
            },
            {
                "value": "Medium (200 - 499 Employees)",
                "text_align": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >CoConstruct<br>",
                "text_align": "left",
                "html": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >Autodesk Construction Solutions (ACS)<br>Construction<br>Construction inspection<br>Construction Documentation<br>Construction Loan<br>",
                "text_align": "left"
            }
        ]
    },
    {
        "type": "row",
        "href": "",
        "children": [
            {
                "value": "concntricio",
                "select": true
            },
            {
                "value": "Con Cntric",
                "text_align": "left"
            },
            {
                "value": 100,
                "score": true,
                "text_align": "center"
            },
            {
                "value": "",
                "text_align": "center"
            },
            {
                "value": "<a href='https://www.concntric.io' target='_blank'>concntric.io</a>",
                "text_align": "left"
            },
            {
                "value": "Construction",
                "text_align": "left"
            },
            {
                "value": "Micro (1 - 9 Employees)",
                "text_align": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >CoConstruct<br>",
                "text_align": "left",
                "html": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >Construction inspection<br>Construction Loan<br>Autodesk Construction Solutions (ACS)<br>",
                "text_align": "left"
            }
        ]
    },
    {
        "type": "row",
        "href": "",
        "children": [
            {
                "value": "canvasbuild",
                "select": true
            },
            {
                "value": "Canvas Construction (We're Hiring!)",
                "text_align": "left"
            },
            {
                "value": 100,
                "score": true,
                "text_align": "center"
            },
            {
                "value": "",
                "text_align": "center"
            },
            {
                "value": "<a href='https://www.canvas.build' target='_blank'>canvas.build</a>",
                "text_align": "left"
            },
            {
                "value": "Construction",
                "text_align": "left"
            },
            {
                "value": "Medium-Small (50 - 199 Employees)",
                "text_align": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >CoConstruct<br>",
                "text_align": "left",
                "html": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >Construction inspection<br>Construction Loan<br>Construction<br>Construction Insurance<br>Autodesk Construction Solutions (ACS)<br>Construction Documentation<br>Construction Equipment<br>",
                "text_align": "left"
            }
        ]
    },
    {
        "type": "row",
        "href": "",
        "children": [
            {
                "value": "consolidated-constcom",
                "select": true
            },
            {
                "value": "Consolidated Construction Co., Inc",
                "text_align": "left"
            },
            {
                "value": 100,
                "score": true,
                "text_align": "center"
            },
            {
                "value": "",
                "text_align": "center"
            },
            {
                "value": "<a href='https://www.consolidated-const.com' target='_blank'>consolidated-const.com</a>",
                "text_align": "left"
            },
            {
                "value": "Construction",
                "text_align": "left"
            },
            {
                "value": "Medium-Small (50 - 199 Employees)",
                "text_align": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >CoConstruct<br>",
                "text_align": "left",
                "html": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >Construction Documentation<br>Construction inspection<br>Autodesk Construction Solutions (ACS)<br>Construction<br>Construction Loan<br>",
                "text_align": "left"
            }
        ]
    },
    {
        "type": "row",
        "href": "",
        "children": [
            {
                "value": "consultaegiscom",
                "select": true
            },
            {
                "value": "Aegis Project Controls Corp",
                "text_align": "left"
            },
            {
                "value": 100,
                "score": true,
                "text_align": "center"
            },
            {
                "value": "",
                "text_align": "center"
            },
            {
                "value": "<a href='https://www.consultaegis.com' target='_blank'>consultaegis.com</a>",
                "text_align": "left"
            },
            {
                "value": "Construction > Architecture",
                "text_align": "left"
            },
            {
                "value": "Medium-Small (50 - 199 Employees)",
                "text_align": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >CoConstruct<br>",
                "text_align": "left",
                "html": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >Autodesk Construction Solutions (ACS)<br>Construction<br>Construction Insurance<br>Engineering, Procurement, and Construction (EPC)<br>Construction Loan<br>Construction inspection<br>Construction Documentation<br>",
                "text_align": "left"
            }
        ]
    },
    {
        "type": "row",
        "href": "",
        "children": [
            {
                "value": "contourengcom",
                "select": true
            },
            {
                "value": "Contour Engineering, Llc",
                "text_align": "left"
            },
            {
                "value": 100,
                "score": true,
                "text_align": "center"
            },
            {
                "value": "",
                "text_align": "center"
            },
            {
                "value": "<a href='https://www.contoureng.com' target='_blank'>contoureng.com</a>",
                "text_align": "left"
            },
            {
                "value": "Construction > Heavy Construction",
                "text_align": "left"
            },
            {
                "value": "Medium-Small (50 - 199 Employees)",
                "text_align": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >CoConstruct<br>",
                "text_align": "left",
                "html": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >Construction<br>Autodesk Construction Solutions (ACS)<br>",
                "text_align": "left"
            }
        ]
    },
    {
        "type": "row",
        "href": "",
        "children": [
            {
                "value": "corbinselectriccom",
                "select": true
            },
            {
                "value": "Corbins Service Electric, Llc",
                "text_align": "left"
            },
            {
                "value": 100,
                "score": true,
                "text_align": "center"
            },
            {
                "value": "",
                "text_align": "center"
            },
            {
                "value": "<a href='https://www.corbinselectric.com' target='_blank'>corbinselectric.com</a>",
                "text_align": "left"
            },
            {
                "value": "Construction",
                "text_align": "left"
            },
            {
                "value": "Medium (200 - 499 Employees)",
                "text_align": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >CoConstruct<br>",
                "text_align": "left",
                "html": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >Engineering, Procurement, and Construction (EPC)<br>Construction inspection<br>Construction Loan<br>Construction<br>Construction Insurance<br>Construction Documentation<br>Autodesk Construction Solutions (ACS)<br>Construction Equipment<br>",
                "text_align": "left"
            }
        ]
    },
    {
        "type": "row",
        "href": "",
        "children": [
            {
                "value": "coylecontractingcorpcom",
                "select": true
            },
            {
                "value": "Coyle Contracting Corp",
                "text_align": "left"
            },
            {
                "value": 100,
                "score": true,
                "text_align": "center"
            },
            {
                "value": "",
                "text_align": "center"
            },
            {
                "value": "<a href='https://www.coylecontractingcorp.com' target='_blank'>coylecontractingcorp.com</a>",
                "text_align": "left"
            },
            {
                "value": "Construction",
                "text_align": "left"
            },
            {
                "value": "Small (10 - 49 Employees)",
                "text_align": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >CoConstruct<br>",
                "text_align": "left",
                "html": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >Autodesk Construction Solutions (ACS)<br>Construction<br>Construction inspection<br>Construction Documentation<br>",
                "text_align": "left"
            }
        ]
    },
    {
        "type": "row",
        "href": "",
        "children": [
            {
                "value": "crjacom",
                "select": true
            },
            {
                "value": "Carol R. Johnson Associates, Inc.",
                "text_align": "left"
            },
            {
                "value": 100,
                "score": true,
                "text_align": "center"
            },
            {
                "value": "",
                "text_align": "center"
            },
            {
                "value": "<a href='https://www.crja.com' target='_blank'>crja.com</a>",
                "text_align": "left"
            },
            {
                "value": "Construction > Architecture",
                "text_align": "left"
            },
            {
                "value": "Medium-Small (50 - 199 Employees)",
                "text_align": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >CoConstruct<br>",
                "text_align": "left",
                "html": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >Construction<br>Autodesk Construction Solutions (ACS)<br>Engineering, Procurement, and Construction (EPC)<br>Construction inspection<br>Construction Loan<br>",
                "text_align": "left"
            }
        ]
    },
    {
        "type": "row",
        "href": "",
        "children": [
            {
                "value": "cromwellcom",
                "select": true
            },
            {
                "value": "Cromwell Architects Engineers, Inc",
                "text_align": "left"
            },
            {
                "value": 100,
                "score": true,
                "text_align": "center"
            },
            {
                "value": "",
                "text_align": "center"
            },
            {
                "value": "<a href='https://www.cromwell.com' target='_blank'>cromwell.com</a>",
                "text_align": "left"
            },
            {
                "value": "Construction > Architecture",
                "text_align": "left"
            },
            {
                "value": "Medium-Small (50 - 199 Employees)",
                "text_align": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >CoConstruct<br>",
                "text_align": "left",
                "html": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >Engineering, Procurement, and Construction (EPC)<br>Construction inspection<br>Construction Loan<br>Construction<br>Construction Insurance<br>Autodesk Construction Solutions (ACS)<br>Construction Documentation<br>",
                "text_align": "left"
            }
        ]
    },
    {
        "type": "row",
        "href": "",
        "children": [
            {
                "value": "crowderusacom",
                "select": true
            },
            {
                "value": "Crowder Industrial Construction Llc",
                "text_align": "left"
            },
            {
                "value": 100,
                "score": true,
                "text_align": "center"
            },
            {
                "value": "",
                "text_align": "center"
            },
            {
                "value": "<a href='https://www.crowderusa.com' target='_blank'>crowderusa.com</a>",
                "text_align": "left"
            },
            {
                "value": "Construction",
                "text_align": "left"
            },
            {
                "value": "Small (10 - 49 Employees)",
                "text_align": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >CoConstruct<br>",
                "text_align": "left",
                "html": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >Construction<br>Construction Documentation<br>Construction Equipment<br>Construction inspection<br>",
                "text_align": "left"
            }
        ]
    },
    {
        "type": "row",
        "href": "",
        "children": [
            {
                "value": "csagroupcom",
                "select": true
            },
            {
                "value": "Csa Architects And Engineers, Llc",
                "text_align": "left"
            },
            {
                "value": 100,
                "score": true,
                "text_align": "center"
            },
            {
                "value": "",
                "text_align": "center"
            },
            {
                "value": "<a href='https://www.csagroup.com' target='_blank'>csagroup.com</a>",
                "text_align": "left"
            },
            {
                "value": "Construction",
                "text_align": "left"
            },
            {
                "value": "Medium (200 - 499 Employees)",
                "text_align": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >CoConstruct<br>",
                "text_align": "left",
                "html": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >Construction Insurance<br>Construction<br>Autodesk Construction Solutions (ACS)<br>Construction inspection<br>Construction Loan<br>",
                "text_align": "left"
            }
        ]
    },
    {
        "type": "row",
        "href": "",
        "children": [
            {
                "value": "cshqacom",
                "select": true
            },
            {
                "value": "Cshqa, Inc",
                "text_align": "left"
            },
            {
                "value": 100,
                "score": true,
                "text_align": "center"
            },
            {
                "value": "",
                "text_align": "center"
            },
            {
                "value": "<a href='https://www.cshqa.com' target='_blank'>cshqa.com</a>",
                "text_align": "left"
            },
            {
                "value": "Construction > Architecture",
                "text_align": "left"
            },
            {
                "value": "Medium-Small (50 - 199 Employees)",
                "text_align": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >CoConstruct<br>",
                "text_align": "left",
                "html": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >Construction<br>Engineering, Procurement, and Construction (EPC)<br>Construction Documentation<br>Autodesk Construction Solutions (ACS)<br>Construction inspection<br>Construction Loan<br>",
                "text_align": "left"
            }
        ]
    },
    {
        "type": "row",
        "href": "",
        "children": [
            {
                "value": "ctscom",
                "select": true
            },
            {
                "value": "Central Plumbing & Heating Co., Inc.",
                "text_align": "left"
            },
            {
                "value": 100,
                "score": true,
                "text_align": "center"
            },
            {
                "value": "",
                "text_align": "center"
            },
            {
                "value": "<a href='https://www.cts.com' target='_blank'>cts.com</a>",
                "text_align": "left"
            },
            {
                "value": "Construction",
                "text_align": "left"
            },
            {
                "value": "Small (10 - 49 Employees)",
                "text_align": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >CoConstruct<br>",
                "text_align": "left",
                "html": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >Construction<br>Engineering, Procurement, and Construction (EPC)<br>Autodesk Construction Solutions (ACS)<br>Construction inspection<br>Construction Equipment<br>Construction Documentation<br>",
                "text_align": "left"
            }
        ]
    },
    {
        "type": "row",
        "href": "",
        "children": [
            {
                "value": "cumbycom",
                "select": true
            },
            {
                "value": "W.S. Cumby, Inc",
                "text_align": "left"
            },
            {
                "value": 100,
                "score": true,
                "text_align": "center"
            },
            {
                "value": "",
                "text_align": "center"
            },
            {
                "value": "<a href='https://www.cumby.com' target='_blank'>cumby.com</a>",
                "text_align": "left"
            },
            {
                "value": "Construction",
                "text_align": "left"
            },
            {
                "value": "Medium-Small (50 - 199 Employees)",
                "text_align": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >CoConstruct<br>",
                "text_align": "left",
                "html": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >Construction inspection<br>Construction<br>Engineering, Procurement, and Construction (EPC)<br>Autodesk Construction Solutions (ACS)<br>Construction Documentation<br>Construction Loan<br>",
                "text_align": "left"
            }
        ]
    },
    {
        "type": "row",
        "href": "",
        "children": [
            {
                "value": "capitolconstructcom",
                "select": true
            },
            {
                "value": "Capitol Construction Services, Inc",
                "text_align": "left"
            },
            {
                "value": 100,
                "score": true,
                "text_align": "center"
            },
            {
                "value": "",
                "text_align": "center"
            },
            {
                "value": "<a href='https://www.capitolconstruct.com' target='_blank'>capitolconstruct.com</a>",
                "text_align": "left"
            },
            {
                "value": "Construction",
                "text_align": "left"
            },
            {
                "value": "Medium-Small (50 - 199 Employees)",
                "text_align": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >CoConstruct<br>",
                "text_align": "left",
                "html": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >Construction<br>Construction Equipment<br>Construction inspection<br>Construction Loan<br>Autodesk Construction Solutions (ACS)<br>",
                "text_align": "left"
            }
        ]
    },
    {
        "type": "row",
        "href": "",
        "children": [
            {
                "value": "capstonehomes-mncom",
                "select": true
            },
            {
                "value": "Capstone Homes, Inc",
                "text_align": "left"
            },
            {
                "value": 100,
                "score": true,
                "text_align": "center"
            },
            {
                "value": "",
                "text_align": "center"
            },
            {
                "value": "<a href='https://www.capstonehomes-mn.com' target='_blank'>capstonehomes-mn.com</a>",
                "text_align": "left"
            },
            {
                "value": "Construction",
                "text_align": "left"
            },
            {
                "value": "Medium-Small (50 - 199 Employees)",
                "text_align": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >CoConstruct<br>",
                "text_align": "left",
                "html": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >Construction Loan<br>Construction inspection<br>",
                "text_align": "left"
            }
        ]
    },
    {
        "type": "row",
        "href": "",
        "children": [
            {
                "value": "cw1924com",
                "select": true
            },
            {
                "value": "Chewning & Wilmer, Inc",
                "text_align": "left"
            },
            {
                "value": 100,
                "score": true,
                "text_align": "center"
            },
            {
                "value": "",
                "text_align": "center"
            },
            {
                "value": "<a href='https://www.cw1924.com' target='_blank'>cw1924.com</a>",
                "text_align": "left"
            },
            {
                "value": "Construction",
                "text_align": "left"
            },
            {
                "value": "Medium-Small (50 - 199 Employees)",
                "text_align": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >CoConstruct<br>",
                "text_align": "left",
                "html": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >Construction<br>Autodesk Construction Solutions (ACS)<br>Construction inspection<br>",
                "text_align": "left"
            }
        ]
    },
    {
        "type": "row",
        "href": "",
        "children": [
            {
                "value": "cardelhomescom",
                "select": true
            },
            {
                "value": "Cardel Homes",
                "text_align": "left"
            },
            {
                "value": 100,
                "score": true,
                "text_align": "center"
            },
            {
                "value": "",
                "text_align": "center"
            },
            {
                "value": "<a href='https://www.cardelhomes.com' target='_blank'>cardelhomes.com</a>",
                "text_align": "left"
            },
            {
                "value": "Construction",
                "text_align": "left"
            },
            {
                "value": "Medium (200 - 499 Employees)",
                "text_align": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >CoConstruct<br>",
                "text_align": "left",
                "html": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >Construction Loan<br>Autodesk Construction Solutions (ACS)<br>Construction inspection<br>Construction<br>",
                "text_align": "left"
            }
        ]
    },
    {
        "type": "row",
        "href": "",
        "children": [
            {
                "value": "cardencocom",
                "select": true
            },
            {
                "value": "Carden Company, Inc",
                "text_align": "left"
            },
            {
                "value": 100,
                "score": true,
                "text_align": "center"
            },
            {
                "value": "",
                "text_align": "center"
            },
            {
                "value": "<a href='https://www.cardenco.com' target='_blank'>cardenco.com</a>",
                "text_align": "left"
            },
            {
                "value": "Construction",
                "text_align": "left"
            },
            {
                "value": "Small (10 - 49 Employees)",
                "text_align": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >CoConstruct<br>",
                "text_align": "left",
                "html": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >Construction<br>Construction Documentation<br>Engineering, Procurement, and Construction (EPC)<br>Autodesk Construction Solutions (ACS)<br>Construction inspection<br>Construction Loan<br>Construction Equipment<br>",
                "text_align": "left"
            }
        ]
    },
    {
        "type": "row",
        "href": "",
        "children": [
            {
                "value": "cardicom",
                "select": true
            },
            {
                "value": "Cardi Corporation",
                "text_align": "left"
            },
            {
                "value": 100,
                "score": true,
                "text_align": "center"
            },
            {
                "value": "",
                "text_align": "center"
            },
            {
                "value": "<a href='https://www.cardi.com' target='_blank'>cardi.com</a>",
                "text_align": "left"
            },
            {
                "value": "Construction",
                "text_align": "left"
            },
            {
                "value": "Medium (200 - 499 Employees)",
                "text_align": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >CoConstruct<br>",
                "text_align": "left",
                "html": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >Construction Equipment<br>Construction<br>Autodesk Construction Solutions (ACS)<br>Engineering, Procurement, and Construction (EPC)<br>Construction inspection<br>Construction Loan<br>",
                "text_align": "left"
            }
        ]
    },
    {
        "type": "row",
        "href": "",
        "children": [
            {
                "value": "carlsonmccaincom",
                "select": true
            },
            {
                "value": "Carlson Mccain, Inc",
                "text_align": "left"
            },
            {
                "value": 100,
                "score": true,
                "text_align": "center"
            },
            {
                "value": "",
                "text_align": "center"
            },
            {
                "value": "<a href='https://www.carlsonmccain.com' target='_blank'>carlsonmccain.com</a>",
                "text_align": "left"
            },
            {
                "value": "Construction > Architecture",
                "text_align": "left"
            },
            {
                "value": "Medium-Small (50 - 199 Employees)",
                "text_align": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >CoConstruct<br>",
                "text_align": "left",
                "html": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >Construction<br>Construction Loan<br>Construction inspection<br>Autodesk Construction Solutions (ACS)<br>",
                "text_align": "left"
            }
        ]
    },
    {
        "type": "row",
        "href": "",
        "children": [
            {
                "value": "carpenterassoccom",
                "select": true
            },
            {
                "value": "Carpenter Associates",
                "text_align": "left"
            },
            {
                "value": 100,
                "score": true,
                "text_align": "center"
            },
            {
                "value": "",
                "text_align": "center"
            },
            {
                "value": "<a href='https://www.carpenterassoc.com' target='_blank'>carpenterassoc.com</a>",
                "text_align": "left"
            },
            {
                "value": "Construction > Architecture",
                "text_align": "left"
            },
            {
                "value": "Small (10 - 49 Employees)",
                "text_align": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >CoConstruct<br>",
                "text_align": "left",
                "html": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >Construction<br>Construction inspection<br>",
                "text_align": "left"
            }
        ]
    },
    {
        "type": "row",
        "href": "",
        "children": [
            {
                "value": "carusohomescom",
                "select": true
            },
            {
                "value": "Caruso Homes, Inc.",
                "text_align": "left"
            },
            {
                "value": 100,
                "score": true,
                "text_align": "center"
            },
            {
                "value": "",
                "text_align": "center"
            },
            {
                "value": "<a href='https://www.carusohomes.com' target='_blank'>carusohomes.com</a>",
                "text_align": "left"
            },
            {
                "value": "Construction",
                "text_align": "left"
            },
            {
                "value": "Medium-Small (50 - 199 Employees)",
                "text_align": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >CoConstruct<br>",
                "text_align": "left",
                "html": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >Construction<br>Construction Loan<br>Construction inspection<br>Construction Documentation<br>",
                "text_align": "left"
            }
        ]
    },
    {
        "type": "row",
        "href": "",
        "children": [
            {
                "value": "caseremodelingcom",
                "select": true
            },
            {
                "value": "Case Handyman & Remodeling",
                "text_align": "left"
            },
            {
                "value": 100,
                "score": true,
                "text_align": "center"
            },
            {
                "value": "",
                "text_align": "center"
            },
            {
                "value": "<a href='https://www.caseremodeling.com' target='_blank'>caseremodeling.com</a>",
                "text_align": "left"
            },
            {
                "value": "Construction",
                "text_align": "left"
            },
            {
                "value": "Small (10 - 49 Employees)",
                "text_align": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >CoConstruct<br>",
                "text_align": "left",
                "html": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >Construction<br>Autodesk Construction Solutions (ACS)<br>Construction inspection<br>",
                "text_align": "left"
            }
        ]
    },
    {
        "type": "row",
        "href": "",
        "children": [
            {
                "value": "cashwaggnercom",
                "select": true
            },
            {
                "value": "Cash Waggner & Associates, Pc",
                "text_align": "left"
            },
            {
                "value": 100,
                "score": true,
                "text_align": "center"
            },
            {
                "value": "",
                "text_align": "center"
            },
            {
                "value": "<a href='https://www.cashwaggner.com' target='_blank'>cashwaggner.com</a>",
                "text_align": "left"
            },
            {
                "value": "Construction > Heavy Construction",
                "text_align": "left"
            },
            {
                "value": "Small (10 - 49 Employees)",
                "text_align": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >CoConstruct<br>",
                "text_align": "left",
                "html": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >Construction Documentation<br>Autodesk Construction Solutions (ACS)<br>Construction<br>Construction Loan<br>Construction Equipment<br>Construction inspection<br>",
                "text_align": "left"
            }
        ]
    },
    {
        "type": "row",
        "href": "",
        "children": [
            {
                "value": "cbolcom",
                "select": true
            },
            {
                "value": "Cbol Corporation",
                "text_align": "left"
            },
            {
                "value": 100,
                "score": true,
                "text_align": "center"
            },
            {
                "value": "",
                "text_align": "center"
            },
            {
                "value": "<a href='https://www.cbol.com' target='_blank'>cbol.com</a>",
                "text_align": "left"
            },
            {
                "value": "Construction > Architecture",
                "text_align": "left"
            },
            {
                "value": "Medium-Small (50 - 199 Employees)",
                "text_align": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >CoConstruct<br>",
                "text_align": "left",
                "html": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >Construction Loan<br>Construction<br>Autodesk Construction Solutions (ACS)<br>",
                "text_align": "left"
            }
        ]
    },
    {
        "type": "row",
        "href": "",
        "children": [
            {
                "value": "cbtarchitectscom",
                "select": true
            },
            {
                "value": "Cbt Architects",
                "text_align": "left"
            },
            {
                "value": 100,
                "score": true,
                "text_align": "center"
            },
            {
                "value": "",
                "text_align": "center"
            },
            {
                "value": "<a href='https://www.cbtarchitects.com' target='_blank'>cbtarchitects.com</a>",
                "text_align": "left"
            },
            {
                "value": "Construction > Architecture",
                "text_align": "left"
            },
            {
                "value": "Medium (200 - 499 Employees)",
                "text_align": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >CoConstruct<br>",
                "text_align": "left",
                "html": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >Construction Loan<br>Construction Insurance<br>Construction<br>Construction inspection<br>Engineering, Procurement, and Construction (EPC)<br>Autodesk Construction Solutions (ACS)<br>Construction Documentation<br>",
                "text_align": "left"
            }
        ]
    },
    {
        "type": "row",
        "href": "",
        "children": [
            {
                "value": "cccnetworkcom",
                "select": true
            },
            {
                "value": "Commercial Contracting Corporation",
                "text_align": "left"
            },
            {
                "value": 100,
                "score": true,
                "text_align": "center"
            },
            {
                "value": "",
                "text_align": "center"
            },
            {
                "value": "<a href='https://www.cccnetwork.com' target='_blank'>cccnetwork.com</a>",
                "text_align": "left"
            },
            {
                "value": "Construction",
                "text_align": "left"
            },
            {
                "value": "Medium (200 - 499 Employees)",
                "text_align": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >CoConstruct<br>",
                "text_align": "left",
                "html": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >Engineering, Procurement, and Construction (EPC)<br>Construction inspection<br>Construction<br>Construction Insurance<br>Construction Loan<br>Construction Documentation<br>Autodesk Construction Solutions (ACS)<br>Construction Equipment<br>",
                "text_align": "left"
            }
        ]
    },
    {
        "type": "row",
        "href": "",
        "children": [
            {
                "value": "darganconstructioncom",
                "select": true
            },
            {
                "value": "Dargan Construction Company",
                "text_align": "left"
            },
            {
                "value": 100,
                "score": true,
                "text_align": "center"
            },
            {
                "value": "",
                "text_align": "center"
            },
            {
                "value": "<a href='https://www.darganconstruction.com' target='_blank'>darganconstruction.com</a>",
                "text_align": "left"
            },
            {
                "value": "Construction",
                "text_align": "left"
            },
            {
                "value": "Small (10 - 49 Employees)",
                "text_align": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >CoConstruct<br>",
                "text_align": "left",
                "html": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >Autodesk Construction Solutions (ACS)<br>Construction Loan<br>Construction<br>Construction inspection<br>",
                "text_align": "left"
            }
        ]
    },
    {
        "type": "row",
        "href": "",
        "children": [
            {
                "value": "dimarcogroupcom",
                "select": true
            },
            {
                "value": "Di Marco Group",
                "text_align": "left"
            },
            {
                "value": 100,
                "score": true,
                "text_align": "center"
            },
            {
                "value": "",
                "text_align": "center"
            },
            {
                "value": "<a href='https://www.dimarcogroup.com' target='_blank'>dimarcogroup.com</a>",
                "text_align": "left"
            },
            {
                "value": "Construction",
                "text_align": "left"
            },
            {
                "value": "Medium (200 - 499 Employees)",
                "text_align": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >CoConstruct<br>",
                "text_align": "left",
                "html": "left"
            },
            {
                "value": "<div class='ellipsis_data add_ellipsis' >Construction Loan<br>Construction<br>Autodesk Construction Solutions (ACS)<br>Construction inspection<br>Construction Documentation<br>Construction Equipment<br>",
                "text_align": "left"
            }
        ]
    }
]
};
const demo2 = {
  id: 'table__frame',
  feature: 'table',
  options: {
    datatables: true,
    paging: true,
    page_length: 50,
    searching: false,
    export_btns: ['excelHtml5', 'csvHtml5'],
    scroll_x: true,
    scroll_y: '750px',
    scroll_collapse: true,
    column_widths:[
      { "width": "25%", "targets": 0 },
      { "width": "25%", "targets": 1 },
      { "width": "25%", "targets": 2 },
      { "width": "25%", "targets": 3 }
    ],
    column_sort: [1, 'asc'],
    responsive: true,
    auto_width: false,
    remove_ordering: false,
    empty_table_text: `<div class="g__empty-icon">&#x1F465;</div><h3>No Audience Selected</h3><p>Go to Campaign Details to Select or Build an Audience</p>`
  },
  records: [
    {
      type: 'header',
      background: '#FAFAFA',
      children: [
        {
          value: 'Acct Name',
          classes: 'min-tablet-l'
        },
        {
          value: 'Company Size',
          classes: 'min-tablet-l'
        },
        {
          value: 'Competitive Signals',
          title_tag: 'Competitive signals track whenever someone may be searching for this competitor. The more people searching for this signal, the higher your propensity score.',
          classes: 'min-tablet-l'
        },
        {
          value: 'Adjacent Signals',
          title_tag: 'Adjacent signals track whenever someone may be searching for this topic. The more people searching for this signal, the higher your propensity score.  ',
          classes: 'min-tablet-l'
        },
      ],
    },
    {
      type: 'row',
      href: '',
      children: [
        {
          value: 'American School Of Tegucigalpa',
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
          value: 'Universidad Anáhuac Puebla',
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
          value: 'Colegio Humboldt, San José, Costa Rica',
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
          value: 'Saint Mary School',
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

const demo3 = {
  id: 'table__frame',
  feature: 'table',
  options: {
    datatables: true,
    paging: true,
    page_length: 50,
    searching: false,
    export_btns: [],
    scroll_x: true,
    scroll_y: '750px',
    scroll_collapse: true,
    column_widths:[
      { width: "300px", responsivePriority: -3, targets: 0 },
      { responsivePriority: 10001, targets: 1 },
      { responsivePriority: 10001, targets: 2 },
      { width: "200px", responsivePriority: 10001, targets: 3 },
      { width: "200px", responsivePriority: 10001, targets: 4 },
      { responsivePriority: 10001, targets: 5 },
      { responsivePriority: 10001, targets: 6 },
      { responsivePriority: 10001, targets: 7 },
      { responsivePriority: 10001, targets: 8 },
      { responsivePriority: 10001, targets: 9 },
    ],
    column_sort: [1, 'asc'],
    responsive: true,
    auto_width: true,
    remove_ordering: false,
    empty_table_text: `<div class="g__empty-icon">&#x1F465;</div><h3>No Audience Selected</h3><p>Go to Campaign Details to Select or Build an Audience</p>`
  },
  records: [
    {
        "type": "header",
        "background": "#FAFAFA",
        "children": [
            {
                "value": "Experience Name"
            },
            {
                "value": "Status",
                "text_align": "center"
            },
            {
                "value": "Audience Type"
            },
            {
                "value": "Goal"
            },
            {
                "value": "Playbook"
            },
            {
                "value": "Account List Connected"
            },
            {
                "value": "Buyer Persona Connected"
            },
            {
                "value": "Last Updated"
            },
            {
                "value": "Current Day"
            },
            {
                "value": ""
            }
        ]
    },
    {
        "type": "row",
        "href": "",
        "children": [
            {
                "value": "<a href='/campaign_details?campaign_id=a2KJw000000YjE1MAK'>Dev Sample - update</a>",
                "text_align": "left"
            },
            {
                "value": false,
                "status_circle": true,
                "text_align": "center"
            },
            {
                "value": "Prospects",
                "text_align": "left"
            },
            {
                "value": "Generate Cross-Sell / Up-Sell Opps",
                "text_align": "left"
            },
            {
                "value": "Product Launch for New Customers",
                "text_align": "left"
            },
            {
                "value": "Wicked Good List",
                "text_align": "left"
            },
            {
                "value": "-",
                "text_align": "left"
            },
            {
                "value": "12/12/2022",
                "text_align": "left"
            },
            {
                "value": 12,
                "text_align": "left"
            },
            {
                "value": "<div class='g__ellipsis_options_container'>\n                <div class='g__ellipsis_options_toggle'>\n                  <i class='fas fa-ellipsis-h'></i>\n                </div>\n                <div id='a2KJw000000YjE1MAK' class='g__ellipsis_options'>\n                  <a href='/campaign_details?campaign_id=a2KJw000000YjE1MAK&active_page=campaign_details' >View Details</a>\n                  <a href='/experiences?campaign_id=a2KJw000000YjE1MAK&delete=true' class='a__side_pane_link delete_record'>Delete</a>\n                </div>\n              </div>",
                "text_align": "center"
            }
        ]
    },
    {
        "type": "row",
        "href": "",
        "children": [
            {
                "value": "<a href='/campaign_details?campaign_id=a2KJw000000Yl4XMAS'>Jason's Fir$t Campaign</a>",
                "text_align": "left"
            },
            {
                "value": false,
                "status_circle": true,
                "text_align": "center"
            },
            {
                "value": "Customers",
                "text_align": "left"
            },
            {
                "value": "Acquire Social Media Followers",
                "text_align": "left"
            },
            {
                "value": "Industry Specific ABM",
                "text_align": "left"
            },
            {
                "value": "Wicked Good List",
                "text_align": "left"
            },
            {
                "value": "-",
                "text_align": "left"
            },
            {
                "value": "12/07/2022",
                "text_align": "left"
            },
            {
                "value": 9,
                "text_align": "left"
            },
            {
                "value": "<div class='g__ellipsis_options_container'>\n                <div class='g__ellipsis_options_toggle'>\n                  <i class='fas fa-ellipsis-h'></i>\n                </div>\n                <div id='a2KJw000000Yl4XMAS' class='g__ellipsis_options'>\n                  <a href='/campaign_details?campaign_id=a2KJw000000Yl4XMAS&active_page=campaign_details' >View Details</a>\n                  <a href='/experiences?campaign_id=a2KJw000000Yl4XMAS&delete=true' class='a__side_pane_link delete_record'>Delete</a>\n                </div>\n              </div>",
                "text_align": "center"
            }
        ]
    },
    {
        "type": "row",
        "href": "",
        "children": [
            {
                "value": "<a href='/campaign_details?campaign_id=a2KJw000000Yle1MAC'>Winter Campaign</a>",
                "text_align": "left"
            },
            {
                "value": false,
                "status_circle": true,
                "text_align": "center"
            },
            {
                "value": "Customers",
                "text_align": "left"
            },
            {
                "value": "Accelerate Pipeline",
                "text_align": "left"
            },
            {
                "value": "Competitor Conquest",
                "text_align": "left"
            },
            {
                "value": "Wicked Good List",
                "text_align": "left"
            },
            {
                "value": "-",
                "text_align": "left"
            },
            {
                "value": "12/09/2022",
                "text_align": "left"
            },
            {
                "value": 0,
                "text_align": "left"
            },
            {
                "value": "<div class='g__ellipsis_options_container'>\n                <div class='g__ellipsis_options_toggle'>\n                  <i class='fas fa-ellipsis-h'></i>\n                </div>\n                <div id='a2KJw000000Yle1MAC' class='g__ellipsis_options'>\n                  <a href='/campaign_details?campaign_id=a2KJw000000Yle1MAC&active_page=campaign_details' >View Details</a>\n                  <a href='/experiences?campaign_id=a2KJw000000Yle1MAC&delete=true' class='a__side_pane_link delete_record'>Delete</a>\n                </div>\n              </div>",
                "text_align": "center"
            }
        ]
    }
  ]
};


graniteTableFrame(demo3);
