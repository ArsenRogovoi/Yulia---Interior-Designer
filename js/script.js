// code for hamburger nav list appearing

var humburgerIconSwitch = false;
function hamburger_icon_function() {
  if (humburgerIconSwitch == false) {
    document
      .getElementById("main_menu_list")
      .classList.add("main_menu_list_visible");
    humburgerIconSwitch = true;
  } else {
    document
      .getElementById("main_menu_list")
      .classList.remove("main_menu_list_visible");
    humburgerIconSwitch = false;
  }
}

function hideHamburgerNavList() {
  if (humburgerIconSwitch == true) {
    document
      .getElementById("main_menu_list")
      .classList.remove("main_menu_list_visible");
    humburgerIconSwitch = false;
  }
}

// code for scroll events

window.addEventListener("scroll", changeNav);

function changeNav() {
  let logoBlockStyles = getComputedStyle(document.getElementById("logo_block"));
  let logoBlockHeight =
    Number(logoBlockStyles.paddingTop.replace("px", "")) +
    Number(logoBlockStyles.paddingBottom.replace("px", "")) +
    Number(logoBlockStyles.lineHeight.replace("px", ""));
  if (window.pageYOffset > logoBlockHeight) {
    document
      .getElementById("main_menu_list")
      .classList.add("main_menu_list_wide");
  } else {
    document
      .getElementById("main_menu_list")
      .classList.remove("main_menu_list_wide");
  }
}
