export default function graniteCoach(jsonBlock) {
  /*---------------------------------------------
  Global Variables
  ---------------------------------------------*/
  const id = jsonBlock.id;
  const o = jsonBlock.options;
  const r = jsonBlock.records;
  const cssId = '#' + id;
  const graniteDiv = document.getElementById(id);
  /*---------------------------------------------
  CSS
  ---------------------------------------------*/
    var coachCss = document.createElement('style');
    coachCss.id = 'g__css_' + id;
    coachCss.innerHTML = `
    ${cssId}{
      width: 100%
    }
    `;
    let granite_css = document.getElementById('g__css_' + id);
    if (granite_css) {
      granite_css.remove();
    }
    document.head.appendChild(coachCss);
  /*---------------------------------------------
  Main Wrapper
  ---------------------------------------------*/
  const coachWrapper = document.createElement('div');
  coachWrapper.classList.add('g__check-wrapper');
  /*---------------------------------------------
  Checklist Items
  ---------------------------------------------*/
  r.forEach((r, index) => {
    const step = document.createElement('div');
    step.classList.add('g__coach-step')

    const stepHeader = document.createElement('div');
    stepHeader.classList.add('g__step-header');  

    const headerText = document.createElement("h5");
    headerText.classList.add('g__coach-header')
    headerText.innerHTML = `<i class="fa fa-caret-down" aria-hidden="true"></i> <strong>Step ${index+1}:</strong> ${r.name}`;
    stepHeader.appendChild(headerText);
    step.appendChild(stepHeader);

    stepHeader.addEventListener('click', (e) => {
      stepHeader.parentElement.classList.toggle('active');
    })

    if(r.steps){
      const stepContainer = document.createElement('div');
      stepContainer.classList.add('g__child-step');

      r.steps.forEach((step,index) => {
        let youtube;
        if(step.youTube_iframe){
          youtube = document.createElement('div');
          youtube.classList.add('g__youtube-container');
          youtube.innerHTML = step.youTube_iframe;
          stepContainer.appendChild(youtube);
        }


        const innerStep = document.createElement('div');
        innerStep.classList.add('g__inner-step');

        /* Number Indicator */
        const innerNumber = document.createElement('div');
        innerNumber.classList.add('g__inner-number');
        innerStep.appendChild(innerNumber);
        const stepCircle = document.createElement('div');
        stepCircle.classList.add('g__coach-circle');
        innerNumber.appendChild(stepCircle);

        /* Inner Content */
        const innerContent = document.createElement('div');
        innerContent.classList.add('g__inner-content');
        innerStep.appendChild(innerContent);

        const headerContainer = document.createElement('div');
        headerContainer.classList.add('g__inner-header-container');
        innerContent.appendChild(headerContainer);

        const stepTitle = document.createElement("h6");
        stepTitle.classList.add('g__step-title');
        stepTitle.innerText = step.step_name;
        headerContainer.appendChild(stepTitle);

        const timeStamp = document.createElement('button');
        timeStamp.type = "button";
        timeStamp.classList.add('g__btn', 'g__btn-text');
        timeStamp.innerHTML = step.timestamp[0];
        headerContainer.appendChild(timeStamp);

        timeStamp.addEventListener('click', () => {
          const iframe = document.querySelector('.g__youtube-container iframe');
          const url = iframe.getAttribute('src');
          const newUrl = `${url}?start=${step.timestamp[1]}`;
          iframe.setAttribute('src', newUrl)
        })

        if(step.description){
          const description = document.createElement('p');
          description.classList.add('g__step-description');
          description.innerHTML = step.description;
          innerContent.appendChild(description)
        }

        stepContainer.appendChild(innerStep);
      })
      step.appendChild(stepContainer);
    }

    coachWrapper.appendChild(step);
  })
  
  graniteDiv.appendChild(coachWrapper);
}