# SympleTax Navbar CSS (REM + BEM Single Underscore)

```css
.st_nav_wrap {
  font-family: "DM Sans", sans-serif;
}

.st_skip_link {
  position: absolute;
  left: -62.4375rem;
  top: -62.4375rem;
  width: 0.0625rem;
  height: 0.0625rem;
  overflow: hidden;
}

.st_nav {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 6.5625rem;
  background: #00a4a4;
  box-shadow: 0 0.25rem 1.5rem rgba(0, 164, 164, 0.25);
  transition: background-color 0.4s ease, box-shadow 0.4s ease;
}

.st_nav_scrolled {
  background: #ffffff;
  box-shadow: 0 0.125rem 1rem rgba(0, 0, 0, 0.08);
}

.st_nav_bar {
  max-width: 83.125rem;
  margin: 0 auto;
  padding: 0.875rem 1.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 2.5rem;
}

.st_logo {
  color: #ffffff;
  text-decoration: none;
  font-weight: 800;
  font-size: 1.75rem;
  line-height: 1;
  letter-spacing: -0.0625rem;
  white-space: nowrap;
}

.st_logo_dark {
  color: #0f172a;
}

.st_desktop_menu {
  display: none;
  align-items: center;
  justify-content: center;
  column-gap: 2rem;
}

.st_item {
  position: relative;
}

.st_link {
  color: rgba(255, 255, 255, 0.92);
  font-size: 0.875rem;
  font-weight: 500;
  text-decoration: none;
  background: transparent;
  border: 0;
  cursor: pointer;
  white-space: nowrap;
  display: inline-flex;
  align-items: center;
  column-gap: 0.3125rem;
  padding: 0;
}

.st_link_dark {
  color: rgba(15, 23, 42, 0.75);
}

.st_link_button {
  font-family: inherit;
}

.st_chevron {
  font-size: 0.8125rem;
  line-height: 1;
}

.st_chevron_open {
  transform: rotate(180deg);
}

.st_actions {
  display: flex;
  align-items: center;
}

.st_actions_desktop {
  display: none;
  align-items: center;
  column-gap: 1.5rem;
}

.st_phone {
  color: rgba(255, 255, 255, 0.92);
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 600;
  white-space: nowrap;
}

.st_phone_dark {
  color: rgba(15, 23, 42, 0.75);
}

.st_btn {
  border-radius: 62.4375rem;
  font-size: 0.8125rem;
  font-weight: 700;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  transition: transform 0.2s ease, background-color 0.2s ease, color 0.2s ease;
}

.st_btn_ghost {
  background: rgba(255, 255, 255, 0.2);
  border: 0.0625rem solid rgba(255, 255, 255, 0.4);
  color: #ffffff;
  padding: 0.625rem 1.25rem;
}

.st_btn_teal {
  background: #00a4a4;
  color: #ffffff;
  padding: 0.6875rem 1.5rem;
}

.st_btn_white {
  background: #ffffff;
  color: #00a4a4;
  padding: 0.6875rem 1.25rem;
}

.st_btn_outline {
  border: 0.125rem solid #00a4a4;
  color: #00a4a4;
  padding: 0.8125rem 1.25rem;
}

.st_actions_mobile {
  display: inline-flex;
  align-items: center;
  column-gap: 0.625rem;
}

.st_round_btn {
  width: 2.375rem;
  height: 2.375rem;
  border-radius: 62.4375rem;
  border: 0.0625rem solid rgba(255, 255, 255, 0.45);
  color: #ffffff;
  background: transparent;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-size: 1rem;
}

.st_round_btn_dark {
  color: #0f172a;
  border-color: #00a4a4;
}

.st_panel {
  display: none;
  position: absolute;
  top: 3rem;
  left: 50%;
  transform: translateX(-50%);
  background: #ffffff;
  border: 0.0625rem solid rgba(15, 23, 42, 0.1);
  border-radius: 1.25rem;
  box-shadow: 0 1.25rem 4rem rgba(0, 0, 0, 0.13), 0 0.25rem 1rem rgba(0, 0, 0, 0.06);
  overflow: hidden;
}

.st_panel_open {
  display: block;
}

.st_panel_company {
  width: 20rem;
  padding: 1.75rem;
}

.st_panel_services {
  width: 53.75rem;
  padding: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  row-gap: 1.25rem;
  column-gap: 2rem;
}

.st_panel_resources {
  width: 53.75rem;
  padding: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr 16.25rem;
  column-gap: 1.5rem;
}

.st_panel_case {
  width: 30rem;
  padding: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 1.5rem;
}

.st_col {
  display: flex;
  flex-direction: column;
  row-gap: 0.625rem;
}

.st_col_title {
  margin: 0 0 0.375rem 0;
  color: #00a4a4;
  font-size: 0.6875rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.st_menu_line {
  color: #334155;
  text-decoration: none;
  font-size: 0.9375rem;
  line-height: 1.4;
}

.st_services_footer {
  grid-column: 1 / 4;
  margin-top: 0.5rem;
  padding-top: 1rem;
  border-top: 0.0625rem solid #e8e4da;
  display: flex;
  align-items: center;
  column-gap: 1rem;
  justify-content: space-between;
}

.st_services_footer_title {
  margin: 0;
  color: #0f172a;
  font-size: 0.875rem;
  font-weight: 700;
}

.st_services_footer_text {
  margin: 0;
  color: #64748b;
  font-size: 0.8125rem;
}

.st_resources_card {
  border-radius: 1rem;
  padding: 1.5rem;
  background: linear-gradient(160deg, rgba(0, 164, 164, 0.85), rgba(0, 90, 90, 0.95));
  min-height: 17.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.st_resources_card_title {
  margin: 0;
  color: #ffffff;
  font-size: 1.375rem;
  font-weight: 700;
  line-height: 1.15;
}

.st_resources_card_text {
  margin: 0;
  color: rgba(255, 255, 255, 0.78);
  font-size: 0.8125rem;
  line-height: 1.5;
}

.st_mobile_backdrop {
  position: fixed;
  inset: 0;
  z-index: 6.875rem;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.2s ease;
}

.st_mobile_backdrop_open {
  opacity: 1;
  visibility: visible;
}

.st_mobile_panel {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  z-index: 7.5rem;
  background: #ffffff;
  transform: translateX(100%);
  transition: transform 0.25s ease;
  display: flex;
  flex-direction: column;
}

.st_mobile_panel_open {
  transform: translateX(0);
}

.st_mobile_head {
  padding: 1.125rem 1.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 0.0625rem solid #f0ece4;
}

.st_mobile_close {
  width: 2.5rem;
  height: 2.5rem;
  border: 0;
  background: transparent;
  color: #0f172a;
  font-size: 1.25rem;
}

.st_mobile_body {
  flex: 1;
  overflow-y: auto;
  padding: 0.5rem 1.25rem;
}

.st_mobile_link {
  display: block;
  padding: 1.125rem 0;
  color: #0f172a;
  text-decoration: none;
  font-size: 1.0625rem;
  font-weight: 600;
  border-bottom: 0.0625rem solid #f5f3ef;
}

.st_mobile_trigger {
  width: 100%;
  padding: 1.125rem 0;
  border: 0;
  background: transparent;
  color: #0f172a;
  text-align: left;
  font-size: 1.0625rem;
  font-weight: 600;
  border-bottom: 0.0625rem solid #f5f3ef;
}

.st_mobile_group {
  display: none;
  padding: 0.25rem 0 0.75rem 0;
}

.st_mobile_group_open {
  display: block;
}

.st_mobile_sub {
  display: block;
  padding: 0.5rem 0.25rem;
  color: #475569;
  text-decoration: none;
  font-size: 0.9375rem;
}

.st_mobile_phone {
  display: block;
  padding: 1.125rem 0;
  color: #00a4a4;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 600;
  border-bottom: 0.0625rem solid #f5f3ef;
}

.st_mobile_footer {
  border-top: 0.0625rem solid #f0ece4;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  row-gap: 0.625rem;
}

.st_hide_mobile {
  display: none;
}

@media (min-width: 64rem) {
  .st_nav_bar {
    padding: 1.125rem 3.75rem;
    display: grid;
    grid-template-columns: auto 1fr auto;
  }

  .st_desktop_menu {
    display: flex;
  }

  .st_actions_desktop {
    display: inline-flex;
  }

  .st_actions_mobile {
    display: none;
  }

  .st_mobile_panel {
    display: none;
  }

  .st_mobile_backdrop {
    display: none;
  }
}
```
