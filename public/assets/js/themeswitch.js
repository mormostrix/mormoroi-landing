function themeSwitch(style) {
  if (style == null)
      style = localStorage.getItem("theme");
      if (style == null)
          style = "base";
  document.querySelector("link[type='text/css']").setAttribute("href", "/assets/css/themes/" + style + ".css");
  localStorage.setItem("theme", style);
}

window.onload = function () {
  let themeswitcher = document.getElementById("themeswitcher");

  themeswitcher.addEventListener("change", (event) => {
    themeSwitch(event.target.value);
  });
};

themeSwitch();