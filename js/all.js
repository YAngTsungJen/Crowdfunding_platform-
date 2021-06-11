// enable tooltips
var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});
// form驗證
(function () {
  "use strict";
  var forms = document.querySelectorAll(".needs-validation");
  Array.prototype.slice.call(forms).forEach(function (form) {
  form.addEventListener(
    "submit",
    function (event) {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add("was-validated");
    },
    false
    );
  });
})();

// 導覽與頁籤 (Navs and tabs)
function heightToTop(ele) {
  let bridge = ele;
  let root = document.body;
  let height = 0;
  do {
    height += bridge.offsetTop;
    bridge = bridge.offsetParent;
  } while (bridge !== root);

  return height;
}
function goToTab() {
  window.scrollTo({
    top: heightToTop(document.getElementsByClassName("tab-content")[0]) - 70,
    behavior: "smooth",
  });
}
