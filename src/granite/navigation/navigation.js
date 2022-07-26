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
  </div>
  `;
  document.getElementById(g__id).appendChild(navigationHTML);
}
