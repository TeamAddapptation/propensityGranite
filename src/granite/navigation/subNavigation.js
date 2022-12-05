export default function graniteSubNavigation() {
    const g__id = "subNavigation__main-container";
    const subNavigationHTML = document.createElement("div");
    subNavigationHTML.classList.add("g__subNav-wrapper");
    subNavigationHTML.innerHTML = `
    <div class="g__subNav-container g__p-10">
      <div class="g__subNav-left">
        <h4 class="g__m-0 g__text-white">[Campaign Name]</h4>
        <div class="g__status">
          <div class="g__status-icon"></div>
          <p class="g__m-0 g__text-white">[status]</p>
        </div>
      </div>
      <div class="g__subNav-right">
        <div class="g__subNav-item">
          <a href="/abm_dashboard" data-page="abm-dashboard" class="g__subNav-link">ABM Dashboard</a>
        </div>
        <div class="g__subNav-item">
          <a href="#" class="g__subNav-link">Campaign Details</a>
        </div>
        <div class="g__subNav-item">
          <a href="#" class="g__subNav-link">Playbook Editor</a>
        </div>
        <div class="g__subNav-item">
          <a href="#" data-page="audience"  class="g__subNav-link">Audience</a>
        </div>
        <div class="g__subNav-item">
          <a href="#" class="g__subNav-link">Channel Manager</a>
        </div>
      </div>
    </div>
    `;
    document.getElementById(g__id)?.appendChild(subNavigationHTML);
  }
  