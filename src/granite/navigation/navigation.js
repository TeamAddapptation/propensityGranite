export default function graniteNavigation() {
  const g__id = "navigation__main-container";
  const navigationHTML = document.createElement("div");
  const dashboardUrl = `<%= Base64.encode64("https://#{'t-' if Rails.env.development?}propensity-dashboard.addapptation.com")%>`;
  navigationHTML.classList.add("g__nav-container");
  navigationHTML.innerHTML = `
  <div class="g__desktop-header">
    <div class="g__logo-container">
      <a href="/"> <img class="g__desktop-logo" src="https://cdn.addapptation.com/addapptation-customer-assets/propensity/propensity-data/propensity_long_light.png"/>
      </a>
    </div>
    <div class="g__menu-items">

      <a href="/sign_in?dest=${dashboardUrl}" class="g__link">Login</a>
      <a href="/sign_up?dest=${dashboardUrl}" class="g__btn g__btn-primary">Sign Up</a>
      <a href="#" id="copy-url" class="g__nav-gear"><i class="far fa-solid fa-link"></i></a>
      <a href="/share_list?id=<%= params[:id] %>&key=<%= params[:key] %>" id="share-link" class="g__nav-gear a__side_pane_link"><i class="fas fa-share-alt"></i></a>
      <div class="g__dropdown">
        <a id="dropdown-toggle" class="g__nav-gear g__dropdown-toggle"><i class="g__dropdown-toggle fas fa-cog"></i></a>
        <div class="g__dropdown-container">

          <div class="g__dropdown-item">
            <a href="/email_settings?id=<%= params[:id] %>&key=<%= params[:key] %>" class="g__dropdown-link">Email Settings</a>
          </div>
          <div class="g__dropdown-item">
            <a href="/book_a_meeting?id=<%= params[:id] %>&key=<%= params[:key] %>" class="g__dropdown-link">Resources</a>

          </div>
        </div>
      </div>
    </div>
    <input type="checkbox" class="g__open_sidebar_menu" id="g__open_sidebar_menu">
    <label for="g__open_sidebar_menu" class="g__sidebar-icon-toggle">
      <div class="spinner diagonal part-1"></div>
      <div class="spinner horizontal"></div>
      <div class="spinner diagonal part-2"></div>
    </label>
    <div id="g__mobile-menu-items">
      <div class="g__sidebar-menu-inner">
        <a href="/data_sample?id=<%= params[:id] %>&key=<%= params[:key] %>" class="g__mobile_menu_link <%= 'g__mobile_link_selected' if action_name == 'data_sample'%>">My Top 100</a>
        <a href="/book_a_meeting?id=<%= params[:id] %>&key=<%= params[:key] %>" class="g__mobile_menu_link <%= 'g__mobile_link_selected' if action_name == 'book_a_meeting'%>">Resources</a>
        <a href="/email_settings?id=<%= params[:id] %>&key=<%= params[:key] %>" class="g__mobile_menu_link <%= 'g__mobile_link_selected' if action_name == 'email_settings'%>">Email Settings</a>
      </div>
      <div class="g__mobile-menu-login-container">
        <a href="/sign_up?dest=${dashboardUrl}" class="g__btn g__btn-primary">Create An Account</a>
        <a href="/sign_in?dest=${dashboardUrl}" class="g__link g__mt-15">Login</a>
      </div>
    </div>
  </div>
  `;
  document.getElementById(g__id)?.appendChild(navigationHTML);
}
