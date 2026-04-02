# SympleTax Navbar JavaScript (Class Selectors Only)

```javascript
(() => {
  const nav = document.querySelector(".st_nav");
  const logo = document.querySelector(".st_logo");
  const desktopLinks = document.querySelectorAll(".st_link");
  const phone = document.querySelector(".st_phone");
  const roundButtons = document.querySelectorAll(".st_round_btn");
  const ghostButton = document.querySelector(".st_btn_ghost");

  const dropdownItems = document.querySelectorAll("[data_dropdown_item]");
  const dropdownTriggers = document.querySelectorAll("[data_dropdown_trigger]");
  const allPanels = document.querySelectorAll(".st_panel");
  const allChevrons = document.querySelectorAll(".st_chevron");

  const openMobile = document.querySelector("[data_mobile_open]");
  const closeMobile = document.querySelector("[data_mobile_close]");
  const mobilePanel = document.querySelector(".st_mobile_panel");
  const mobileBackdrop = document.querySelector("[data_mobile_backdrop]");
  const mobileGroups = document.querySelectorAll(".st_mobile_group");
  const mobileTriggers = document.querySelectorAll(".st_mobile_trigger");
  const mobileLinks = document.querySelectorAll(".st_mobile_link");
  const mobileSubs = document.querySelectorAll(".st_mobile_sub");

  let closeTimer = null;

  const applyScrolledTheme = () => {
    if (!nav) return;
    const scrolled = window.scrollY > 24;

    if (scrolled) {
      nav.classList.add("st_nav_scrolled");
      if (logo) logo.classList.add("st_logo_dark");
      if (phone) phone.classList.add("st_phone_dark");
      if (ghostButton) {
        ghostButton.classList.remove("st_btn_ghost");
        ghostButton.classList.add("st_btn_teal");
      }
      desktopLinks.forEach((link) => link.classList.add("st_link_dark"));
      roundButtons.forEach((btn) => btn.classList.add("st_round_btn_dark"));
    } else {
      nav.classList.remove("st_nav_scrolled");
      if (logo) logo.classList.remove("st_logo_dark");
      if (phone) phone.classList.remove("st_phone_dark");
      if (ghostButton) {
        ghostButton.classList.add("st_btn_ghost");
        ghostButton.classList.remove("st_btn_teal");
      }
      desktopLinks.forEach((link) => link.classList.remove("st_link_dark"));
      roundButtons.forEach((btn) => btn.classList.remove("st_round_btn_dark"));
    }
  };

  const closeAllDropdowns = () => {
    dropdownItems.forEach((item) => item.classList.remove("st_item_open"));
    allPanels.forEach((panel) => panel.classList.remove("st_panel_open"));
    allChevrons.forEach((chevron) => chevron.classList.remove("st_chevron_open"));
  };

  const openDropdown = (item) => {
    closeAllDropdowns();
    const panel = item.querySelector("[data_dropdown_panel]");
    const chevron = item.querySelector(".st_chevron");
    item.classList.add("st_item_open");
    if (panel) panel.classList.add("st_panel_open");
    if (chevron) chevron.classList.add("st_chevron_open");
  };

  dropdownItems.forEach((item) => {
    const trigger = item.querySelector("[data_dropdown_trigger]");
    if (!trigger) return;

    item.addEventListener("mouseenter", () => {
      if (closeTimer) clearTimeout(closeTimer);
      openDropdown(item);
    });

    item.addEventListener("mouseleave", () => {
      closeTimer = setTimeout(() => {
        closeAllDropdowns();
      }, 140);
    });
  });

  const openMobileMenu = () => {
    if (!mobilePanel || !mobileBackdrop || !openMobile) return;
    mobilePanel.classList.add("st_mobile_panel_open");
    mobileBackdrop.classList.add("st_mobile_backdrop_open");
    openMobile.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  };

  const closeMobileMenu = () => {
    if (!mobilePanel || !mobileBackdrop || !openMobile) return;
    mobilePanel.classList.remove("st_mobile_panel_open");
    mobileBackdrop.classList.remove("st_mobile_backdrop_open");
    openMobile.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  };

  if (openMobile) openMobile.addEventListener("click", openMobileMenu);
  if (closeMobile) closeMobile.addEventListener("click", closeMobileMenu);
  if (mobileBackdrop) mobileBackdrop.addEventListener("click", closeMobileMenu);

  const closeAllMobileGroups = () => {
    mobileGroups.forEach((group) => group.classList.remove("st_mobile_group_open"));
    mobileTriggers.forEach((trigger) => trigger.setAttribute("aria-expanded", "false"));
  };

  mobileTriggers.forEach((trigger, index) => {
    trigger.addEventListener("click", () => {
      const group = mobileGroups[index];
      if (!group) return;
      const isOpen = group.classList.contains("st_mobile_group_open");
      closeAllMobileGroups();
      if (!isOpen) {
        group.classList.add("st_mobile_group_open");
        trigger.setAttribute("aria-expanded", "true");
      }
    });
  });

  mobileLinks.forEach((link) => link.addEventListener("click", closeMobileMenu));
  mobileSubs.forEach((link) => link.addEventListener("click", closeMobileMenu));

  applyScrolledTheme();
  window.addEventListener("scroll", applyScrolledTheme, { passive: true });
})();
```
