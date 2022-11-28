import './newExperience.css';

import graniteForm from '../../granite/form/graniteForm';
import '../../granite/form/graniteForm.css';

const goalOptions = [
  ['', ''],
  ['Build Pipeline', 'Build Pipeline'],
  ['Accelerate Pipeline', 'Accelerate Pipeline'],
  ['Generate Cross-Sell / Up-Sell Opps', 'Generate Cross-Sell / Up-Sell Opps'],
  ['Brand Awareness', 'Brand Awareness'],
  ['Acquire Social Media Followers', 'Acquire Social Media Followers'],
  ['Drive Event Engagement', 'Drive Event Engagement'],
];
const audienceTypeOptions = [
  ['', ''],
  ['Prospects', 'Prospects'],
  ['Customers', 'Customers'],
  ['Partners', 'Partners'],
];
const playbookOptions = ['Playbook 1', 'Playbook 2', 'Playbook 3'];
const campaign = {
  id: 'g__campaign-form',
  options: {
    formId: 'g__campaign-form',
    step_form: false,
    edit_form: false,
    max_width: '700px',
    addapptation_action: '/form_submission',
    position_form: 'left',
    db_action: '',
    db_object: '',
    db_id: '',
    checkbox_validation: true,
    topic_validation: true,
    db_redirect: '',
    form_id: '',
    submit_btn: true,
    submit_label: 'Submit',
    cancel_btn: true,
    cancel_label: 'Cancel',
    default_picklists: true,
    chosen: true,
    enctype: 'application/x-www-form-urlencoded',
    method: 'POST',
  },
  records: [
    {
      id: 'name',
      title: 'List Name',
      type: 'fieldset',
      children: [
        {
          type: 'text',
          title: 'Campaign Name',
          name: 'Name',
          label: 'Campaign Name',
          id: 'Name',
          value: '',
          required: true,
          options: '',
          placeholder: '',
          classes: '',
        },
      ],
    },
    {
      id: 'name',
      title: 'List Name',
      type: 'fieldset',
      children: [
        {
          type: 'description',
          value: 'Goals + Audience',
        },
        {
          type: 'picklist',
          multiple: true,
          title: 'Goal',
          name: 'Goal__c[]',
          label: 'Goal',
          id: 'Goal__c',
          value: [],
          required: true,
          options: goalOptions,
          placeholder: '',
          classes: '',
        },
        {
          type: 'picklist',
          title: 'Audience Type',
          name: 'Audience_Type__c',
          label: 'Audience Type',
          id: 'Audience_Type__c',
          value: '',
          required: true,
          options: audienceTypeOptions,
          placeholder: '',
          classes: 'g__mt-15',
        },
        {
          type: 'description',
          value: 'Playbook',
          classes: 'g__mt-25',
        },
        {
          type: 'picklist',
          title: 'Playbook',
          name: 'Playbook__c',
          label: 'Playbook',
          id: 'Playbook__c',
          value: '',
          required: true,
          options: playbookOptions,
          placeholder: '',
          classes: 'c__playbooks',
        },
      ],
    },
  ],
};
graniteForm(campaign);
/* -------------------------------------
  Playbooks Button
  ------------------------------------- */
const playbookField = document.querySelector('.c__playbooks .g__field_info');
const playbookBtn = document.createElement('a');
playbookBtn.href = "#";
playbookBtn.target = '_blank';
playbookBtn.classList.add('g__btn', 'g__btn-text');
playbookBtn.innerText = 'Playbooks';
playbookField.appendChild(playbookBtn);


/* -------------------------------------
  Submit btn Classes
  ------------------------------------- */
const submit = document.getElementById('g__submit_btn');
console.log(submit);
if (submit) {
  submit.setAttribute('class', 'g__btn g__btn-primary');
}
