function tab_click(element) {
  var tabs = document.getElementsByClassName("tab-section");
  for (var i = 0; i < tabs.length; i++) {
    if (element.name == tabs[i].id) {
      tabs[i].className = "tab-section";
    } else {
      tabs[i].className = "tab-section hidden";
    }
  }

  var nav_items = document.getElementsByClassName("menuitem");
  for (var i = 0; i < nav_items.length; i++) {
    nav_items[i].className = "menuitem nav-link";
  }
  element.className = "menuitem nav-link active";
}


