export default function graniteNavigation() {
  const g__id = "navigation__main-container";
  const navigationHTML = document.createElement("div");
  navigationHTML.classList.add("g__nav-container");
  navigationHTML.innerHTML = `
  <div class="g__desktop-header">
    <div class="g__logo-container">
      <a href="/"> <img class="g__desktop-logo" src="https://cdn.addapptation.com/addapptation-customer-assets/propensity/propensity-data/propensity_long_light.png"/>
      </a>
    </div>
    <div class="g__menu-items">
      <a href="#" class="g__link">Resources</a>
      <a href="#" class="g__link">Login</a>
      <a href="#" class="g__btn g__btn-primary">Sign Up</a>
      <a href="#" class="g__nav-gear"><i class="far fa-solid fa-link"></i></a>
      <a href="#" class="g__nav-gear"><i class="far fa-solid fa-share-alt"></i></a>
    </div>
    <input type="checkbox" class="g__open_sidebar_menu" id="g__open_sidebar_menu">
    <label for="g__open_sidebar_menu" class="g__sidebar-icon-toggle">
      <div class="spinner diagonal part-1"></div>
      <div class="spinner horizontal"></div>
      <div class="spinner diagonal part-2"></div>
    </label>
    <div id="g__mobile-menu-items">
      <div class="g__sidebar-menu-inner">
        <a href="#" class="g__mobile_menu_link">My Top 100</a>
        <a href="#" class="g__mobile_menu_link">Resources</a>
        <a href="#" class="g__mobile_menu_link">Sign Up</a>
        <a href="#" class="g__mobile_menu_link">Email Settings</a>
      </div>
      <div class="g__mobile-menu-login-container">
        <a href="#" class="g__btn g__btn-primary">Create An Account</a>
        <a href="#" class="g__link g__mt-5">Login</a>
      </div>
    </div>
  </div>
  `;
  document.getElementById(g__id).appendChild(navigationHTML);
}
