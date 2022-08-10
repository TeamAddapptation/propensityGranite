function graniteNavigation() {
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
      <a href="/assessments" class="g__link <%= 'g__link-selected' if action_name == 'assessments' %>">Account Profiles</a>
      <div class="g__dropdown">
        <a id="dropdown-toggle" class="g__dropdown-toggle g__link">Marketing Data <i class="far fa-angle-down" aria-hidden="true"></i></a>
        <div class="g__dropdown-container">
          <div class="g__dropdown-item">
            <a href="<%= a__gateway('https://propensity-marketing-data.addapptation.com/') %>" class="g__dropdown-link">Ad Reporting</a>
          </div>
          <div class="g__dropdown-item">
            <a href="<%= a__gateway('https://propensity-audiences.addapptation.com/') %>" class="g__dropdown-link">Audience Building</a>
          </div>
        </div>
      </div>
      <a href="/analytics" class="g__link <%= 'g__link-selected' if action_name == 'analytics' %>">Analytics</a>
      <div class="g__dropdown">
        <a id="dropdown-toggle" class="g__profile-logo g__dropdown-toggle"><%= @profile_pic.html_safe if @file_type.blank? %></a>
        <div class="g__dropdown-container">
          <div class="g__dropdown-item">
            <a href="/invite?tab=1" class="g__dropdown-link">Workspace Settings</a>
          </div>
          <div class="g__dropdown-item">
            <a href="/user?tab=1" class="g__dropdown-link">Profile Settings</a>
          </div>
          <hr>
          <div class="g__dropdown-item">
            <a href="/sign_out" class="g__dropdown-link">Log Out</a>
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
        <a href="/assessments" class="g__mobile_menu_link <%= 'g__mobile_link_selected' if action_name == 'assessments'%>">Account Profiles</a>
        <a href="#" class="g__mobile_menu_link">Marketing Data</a>
        <a href="#" class="g__mobile_menu_link">Analytics</a>
        <a href="/invite?tab=1" class="g__mobile_menu_link <%= 'g__mobile_link_selected' if action_name == 'invite' || action_name == 'data_connections' || action_name == 'installed_packages'%>">Workspace Settings</a>
        <a href="/user?tab=1" class="g__mobile_menu_link <%= 'g__mobile_link_selected' if action_name == 'user' || action_name == 'password_reset' || action_name == 'email_settings'%>">Profile Settings</a>
      </div>
    </div>
  </div>
  `;
  document.getElementById(g__id)?.appendChild(navigationHTML);
}
