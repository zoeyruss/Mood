"use strict";
!(function () {
  var e = document.body,
    n = document.getElementsByClassName("nav-menu")[0],
    t = document.getElementsByClassName("menu-container")[0],
    s = document.getElementsByClassName("main-nav")[0];
  n.addEventListener(
    "click",
    function () {
      [e, t, s].forEach(function (e) {
        e.classList.toggle("open");
      });
    },
    !1
  );
})();
//# sourceMappingURL=burger.min.js.map
