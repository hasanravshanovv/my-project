const swiper = new Swiper(".slider_main_block", {
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".body_main_block_arrow.swiper-button-next",
    prevEl: ".body_main_block_arrow.swiper-button-prev",
  },
})

/* ---------- ----------Tab---------- ---------- */
const tabNavItems = document.querySelectorAll(".tabs_deals_button")
const tabItems = document.querySelectorAll(".item_tabs")
document.addEventListener("click", function (e) {
  const targetElement = e.target
  let currentActiveIndex = null
  let newActiveIndex = null
  if (targetElement.closest(".tabs_deals_button")) {
    tabNavItems.forEach((tabNavItem, index) => {
      if (tabNavItem.classList.contains("active")) {
        currentActiveIndex = index
        tabNavItem.classList.remove("active")
      }
      if (tabNavItem === targetElement) {
        newActiveIndex = index
      }
    })
    targetElement.classList.add("active")
    tabItems[currentActiveIndex].classList.remove("active")
    tabItems[newActiveIndex].classList.add("active")
  }
})
