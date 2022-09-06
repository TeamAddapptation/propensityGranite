function graniteSteps(stepNum) {
  const stepsID = document.getElementById('steps__current-app');
  stepsID.innerHTML = `
  <section class="g__container">
    <div class="c__step-blocks g__gap-1">
      <a href='<%=  a__gateway("propensity-dashboard.addapptation.com/assessments?") %>' data-step='1' class="c__app-step g__flex g__flex-column g__m-flex-row g__box-shadow g__m-no-box-shadow g__border g__m-no-border g__p-15 g__m-prl-0 g__radius-5 g__m-border-bottom g__m-gap-1">
        <div class="g__row">
          <div class="g__col g__flex-3"><h5 class='g__neutral-500 g__m-0'>Build Account List</h5></div>
          <div class="g__col g__justify-end"><span class="c__step-num">1</span></div>
        </div>
        <p class="c__step-tip g__text-small g__p-10 g__box-shadow g__border g__radius-5">Identify In-Market Accounts</p>
      </a>
      <a href='<%= a__gateway("https://propensity-audiences.addapptation.com/") %>' data-step='2' class="c__app-step g__flex g__flex-column g__m-flex-row g__box-shadow g__m-no-box-shadow g__border g__m-no-border g__p-15 g__m-prl-0 g__radius-5 g__m-border-bottom g__m-gap-1">
        <div class="g__row">
          <div class="g__col g__flex-3"><h5 class='g__neutral-500 g__m-0'>Actively Marketing</h5></div>
          <div class="g__col g__justify-end"><span class="c__step-num">2</span></div>
        </div>
        <p class="c__step-tip g__text-small g__p-10 g__box-shadow g__border g__radius-5">Market to In-Market Accounts</p>
      </a>
      <a href='#' data-step='3' class="c__app-step g__flex g__flex-column g__m-flex-row g__box-shadow g__m-no-box-shadow g__border g__m-no-border g__p-15 g__m-prl-0 g__radius-5 g__m-border-bottom g__m-gap-1">
        <div class="g__row">
          <div class="g__col g__flex-3"><h5 class='g__neutral-500 g__m-0'>Sales Engagement</h5></div>
          <div class="g__col g__justify-end"><span class="c__step-num">3</span></div>
        </div>
        <p class="c__step-tip g__text-small g__p-10 g__box-shadow g__border g__radius-5">Outreach to MQAs</p>
      </a>
      <a href='<%= a__gateway("https://propensity-marketing-data.addapptation.com/") %>' data-step='4' class="c__app-step g__flex g__flex-column g__m-flex-row g__box-shadow g__m-no-box-shadow g__border g__m-no-border g__p-15 g__m-prl-0 g__radius-5 g__m-border-bottom g__m-gap-1">
        <div class="g__row">
          <div class="g__col g__flex-3"><h5 class='g__neutral-500 g__m-0'>Measure Results</h5></div>
          <div class="g__col g__justify-end"><span class="c__step-num">4</span></div>
        </div>
        <p class="c__step-tip g__text-small g__p-10 g__box-shadow g__border g__radius-5">View the Results of Your ABM Campaings </p>
      </a>
      <a href='#' data-step='5' class="c__app-step g__flex g__flex-column g__m-flex-row g__box-shadow g__m-no-box-shadow g__border g__m-no-border g__p-15 g__m-prl-0 g__radius-5 g__m-border-bottom g__m-gap-1">
        <div class="g__row">
          <div class="g__col g__flex-3"><h5 class='g__neutral-500 g__m-0'>Optimize</h5></div>
          <div class="g__col g__justify-end"><span class="c__step-num">5</span></div>
        </div>
        <p class="c__step-tip g__text-small g__p-10 g__box-shadow g__border g__radius-5">Adjust Signals for New In-Market Account Lists</p>
      </a>
  </section>
  `;
  const currentStep = document.querySelectorAll('.c__app-step');
  currentStep.forEach((step) => {
    const dataStep = step.getAttribute('data-step');
    if (dataStep <= stepNum) {
      step.classList.add('c__step-active');
    }
  });
}
