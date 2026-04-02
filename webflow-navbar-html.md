# SympleTax Navbar HTML (REM + BEM Single Underscore)

```html
<div class="st_nav_wrap">
  <a href="#main-content" class="st_skip_link">Skip to main content</a>

  <nav class="st_nav" role="navigation" aria-label="Main navigation">
    <div class="st_nav_bar">
      <a href="/" class="st_logo" aria-label="SympleTax home">SympleTax</a>

      <div class="st_desktop_menu">
        <div class="st_item st_item_company" data_dropdown_item>
          <a href="/about" class="st_link st_link_dropdown" data_dropdown_trigger>
            <span class="st_link_text">Our Company</span>
            <span class="st_chevron">▾</span>
          </a>

          <div class="st_panel st_panel_company" data_dropdown_panel>
            <a class="st_menu_line" href="/about">About Our Company</a>
            <a class="st_menu_line" href="/process">Our Process</a>
          </div>
        </div>

        <div class="st_item st_item_services" data_dropdown_item>
          <a href="/services" class="st_link st_link_dropdown" data_dropdown_trigger>
            <span class="st_link_text">Our Services</span>
            <span class="st_chevron">▾</span>
          </a>

          <div class="st_panel st_panel_services" data_dropdown_panel>
            <div class="st_col st_col_a">
              <p class="st_col_title">Tax Services</p>
              <a class="st_menu_line" href="/solutions">Tax Negotiation</a>
              <a class="st_menu_line" href="/solutions">Tax Relief</a>
              <a class="st_menu_line" href="/solutions">Tax Settlement</a>
              <a class="st_menu_line" href="/solutions">Tax Resolution</a>
              <a class="st_menu_line" href="/resources">Tax Knowledge Center</a>
            </div>

            <div class="st_col st_col_b">
              <p class="st_col_title">Fresh Start Programs</p>
              <a class="st_menu_line" href="/solutions/offer-in-compromise">Offer in Compromise</a>
              <a class="st_menu_line" href="/solutions/penalty-abatement">Penalty Abatement</a>
              <a class="st_menu_line" href="/solutions/currently-not-collectible">Currently Not Collectible</a>
              <a class="st_menu_line" href="/solutions/innocent-spouse-relief">Innocent Spouse Relief</a>
            </div>

            <div class="st_col st_col_c">
              <p class="st_col_title">Get Help With</p>
              <a class="st_menu_line" href="/solutions/back-taxes">IRS Back Taxes</a>
              <a class="st_menu_line" href="/solutions/wage-garnishment">Wage Garnishment</a>
              <a class="st_menu_line" href="/solutions/tax-lien">Tax Liens & Levies</a>
              <a class="st_menu_line" href="/solutions/unfiled-returns">Unfiled Tax Returns</a>
            </div>

            <div class="st_services_footer">
              <p class="st_services_footer_title">Not sure where to start?</p>
              <p class="st_services_footer_text">A licensed professional will review your case for free.</p>
              <a href="https://ti.sympletax.com/free-consultation" class="st_btn st_btn_teal">Get a Free Consultation</a>
            </div>
          </div>
        </div>

        <div class="st_item st_item_resources" data_dropdown_item>
          <a href="/resources" class="st_link st_link_dropdown" data_dropdown_trigger>
            <span class="st_link_text">Resources</span>
            <span class="st_chevron">▾</span>
          </a>

          <div class="st_panel st_panel_resources" data_dropdown_panel>
            <div class="st_col st_col_resources_a">
              <p class="st_col_title">Tax Resources</p>
              <a class="st_menu_line" href="/resources/irs-cp90-notice">IRS Notice Center</a>
              <a class="st_menu_line" href="/resources">Frequently Asked Questions</a>
              <a class="st_menu_line" href="/resources/irs-cp90-notice">Common IRS Notices</a>
              <a class="st_menu_line" href="/resources/wage-garnishment">Wage Garnishment Guide</a>
              <a class="st_menu_line" href="/resources/when-to-hire-professional">When to Hire a Professional</a>
            </div>

            <div class="st_col st_col_resources_b">
              <p class="st_col_title">IRS Programs</p>
              <a class="st_menu_line" href="/solutions/fresh-start-program">IRS Fresh Start Program</a>
              <a class="st_menu_line" href="/solutions/offer-in-compromise">Offer in Compromise</a>
              <a class="st_menu_line" href="/solutions/currently-not-collectible">Currently Not Collectible</a>
              <a class="st_menu_line" href="/solutions/penalty-abatement">Penalty Abatement</a>
              <a class="st_menu_line" href="/solutions/installment-agreement">Installment Agreements</a>
            </div>

            <div class="st_resources_card">
              <p class="st_resources_card_title">We're Here To Help.</p>
              <p class="st_resources_card_text">A licensed professional will review your case for free - no commitment.</p>
              <a href="https://ti.sympletax.com/free-consultation" class="st_btn st_btn_white">Get Started</a>
            </div>
          </div>
        </div>

        <div class="st_item st_item_case" data_dropdown_item>
          <button type="button" class="st_link st_link_dropdown st_link_button" data_dropdown_trigger>
            <span class="st_link_text">Case Access</span>
            <span class="st_chevron">▾</span>
          </button>

          <div class="st_panel st_panel_case" data_dropdown_panel>
            <div class="st_col st_col_case_a">
              <p class="st_col_title">SympleTax Portals</p>
              <a class="st_menu_line" href="https://myportal.sympletax.com" target="_blank" rel="noopener noreferrer">Client Login</a>
            </div>
            <div class="st_col st_col_case_b">
              <p class="st_col_title">New Client</p>
              <a class="st_menu_line" href="https://ti.sympletax.com/free-consultation" target="_blank" rel="noopener noreferrer">Free Consultation</a>
            </div>
          </div>
        </div>
      </div>

      <div class="st_actions">
        <div class="st_actions_desktop">
          <a href="tel:+12602548538" class="st_phone">Call (260) 254-8538</a>
          <a href="https://ti.sympletax.com/free-consultation" class="st_btn st_btn_ghost">Free Consultation</a>
        </div>

        <div class="st_actions_mobile">
          <a href="tel:+12602548538" class="st_round_btn st_round_phone" aria-label="Call SympleTax">☎</a>
          <button type="button" class="st_round_btn st_round_menu" aria-label="Open menu" aria-expanded="false" data_mobile_open>☰</button>
        </div>
      </div>
    </div>
  </nav>

  <div class="st_mobile_backdrop" data_mobile_backdrop></div>

  <aside class="st_mobile_panel" role="dialog" aria-modal="true" aria-label="Navigation menu">
    <div class="st_mobile_head">
      <a href="/" class="st_logo st_logo_dark">SympleTax</a>
      <button type="button" class="st_mobile_close" aria-label="Close menu" data_mobile_close>✕</button>
    </div>

    <div class="st_mobile_body">
      <a class="st_mobile_link" href="/">Home</a>

      <button type="button" class="st_mobile_trigger" aria-expanded="false">Our Company</button>
      <div class="st_mobile_group">
        <a class="st_mobile_sub" href="/about">About Our Company</a>
        <a class="st_mobile_sub" href="/process">Our Process</a>
      </div>

      <button type="button" class="st_mobile_trigger" aria-expanded="false">Our Services</button>
      <div class="st_mobile_group">
        <a class="st_mobile_sub" href="/solutions">Tax Negotiation</a>
        <a class="st_mobile_sub" href="/solutions">Tax Relief</a>
        <a class="st_mobile_sub" href="/solutions">Tax Settlement</a>
        <a class="st_mobile_sub" href="/solutions">Tax Resolution</a>
        <a class="st_mobile_sub" href="/solutions/offer-in-compromise">Offer in Compromise</a>
        <a class="st_mobile_sub" href="/solutions/penalty-abatement">Penalty Abatement</a>
        <a class="st_mobile_sub" href="/solutions/currently-not-collectible">Currently Not Collectible</a>
        <a class="st_mobile_sub" href="/solutions/innocent-spouse-relief">Innocent Spouse Relief</a>
      </div>

      <button type="button" class="st_mobile_trigger" aria-expanded="false">Resources</button>
      <div class="st_mobile_group">
        <a class="st_mobile_sub" href="/resources">All Resources</a>
        <a class="st_mobile_sub" href="/resources/irs-cp90-notice">IRS Notice Center</a>
        <a class="st_mobile_sub" href="/resources/irs-cp90-notice">Common IRS Notices</a>
        <a class="st_mobile_sub" href="/resources/wage-garnishment">Wage Garnishment Guide</a>
        <a class="st_mobile_sub" href="/resources/when-to-hire-professional">When to Hire a Professional</a>
        <a class="st_mobile_sub" href="/solutions/fresh-start-program">IRS Fresh Start Program</a>
      </div>

      <button type="button" class="st_mobile_trigger" aria-expanded="false">Case Access</button>
      <div class="st_mobile_group">
        <a class="st_mobile_sub" href="https://myportal.sympletax.com" target="_blank">Client Login</a>
        <a class="st_mobile_sub" href="https://ti.sympletax.com/free-consultation" target="_blank">Free Consultation</a>
      </div>

      <a class="st_mobile_link" href="/contact">Contact Us</a>
      <a class="st_mobile_phone" href="tel:+12602548538">Call (260) 254-8538</a>
    </div>

    <div class="st_mobile_footer">
      <a class="st_btn st_btn_outline" href="https://myportal.sympletax.com" target="_blank">Client Login</a>
      <a class="st_btn st_btn_teal" href="https://ti.sympletax.com/free-consultation">Free Consultation</a>
    </div>
  </aside>
</div>
```
