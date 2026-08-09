/* =============================================================================
   Render engine — builds every page from window.SITE_CONFIG (config.js).
   You should NOT need to edit this file to change copy. All content lives in
   config.js; the only text here is generic UI labels.

   Page bodies are ordered arrays of typed BLOCKS (see the comment above
   `services` in config.js). This file knows how to render each block type and
   nothing about bricklaying.
============================================================================= */
(function () {
  "use strict";

  var cfg = window.SITE_CONFIG;
  if (!cfg) {
    document.title = "Configuration missing";
    return;
  }

  /* Generic UI labels (not niche-specific). */
  var UI = {
    services: "Pages",
    faqTitle: "Frequently Asked Questions",
    ctaBandTitle: "Tell us about your job",
    callLabel: "Call",
    emailLabel: "Email us",
    /* Short variant for the header and mobile contact bar. The pages' own
       ctaText ("Tell us about your job") is too wide for either: it wraps the
       header nav onto a second row, and fills the mobile bar edge to edge. */
    quoteShortLabel: "Get a quote",
    orText: "or",
    testimonialsTitle: "What Customers Say",
    photosTitle: "Recent Work",
    serviceAreaLabel: "Service area",
    backHome: "Back to homepage",
    menuLabel: "Menu",
    sending: "Sending…",
    chooseOne: "Choose one",
    optional: "optional",
    markerLabel: "Unfinished - not for publication",
    areasTitle: "Areas We Serve"
  };

  /* ---------- helpers ------------------------------------------------- */

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  /* Inline markup for body copy: **bold**, [label](url), and newlines.
     Escaping happens FIRST, so config text can never inject markup — only
     these three constructs are re-enabled afterwards. */
  function inline(s) {
    var out = esc(s);
    out = out.replace(/\[([^\[\]]+)\]\(([^)\s]+)\)/g, function (m, label, url) {
      var external = /^https?:\/\//i.test(url);
      return '<a href="' + url + '"' + (external ? ' rel="noopener"' : "") +
        ">" + label + "</a>";
    });
    out = out.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
    out = out.replace(/\n/g, "<br>");
    return out;
  }

  function currentFile() {
    var f = window.location.pathname.split("/").pop();
    return f && f.length ? f : "index.html";
  }

  /* True only once a real number is in config. While the placeholder is in
     place every tel: link is suppressed rather than rendered dead. */
  function phoneReady() {
    var p = cfg.business.phone;
    return !!p && p.indexOf("[") === -1 && p.replace(/\D/g, "").length >= 6;
  }

  function telHref() {
    return "tel:" + cfg.business.phone;
  }

  /* Phone as a link when real, plain text while it's a placeholder. */
  function phoneText(cls) {
    var display = esc(cfg.business.phoneDisplay);
    return phoneReady()
      ? '<a class="' + (cls || "") + '" href="' + telHref() + '">' + display + "</a>"
      : '<span class="' + (cls || "") + '">' + display + "</span>";
  }

  function callButton(extraClass) {
    if (!phoneReady()) return "";
    return '<a class="btn btn-outline ' + (extraClass || "") + '" href="' + telHref() + '">' +
      UI.callLabel + " " + esc(cfg.business.phoneDisplay) + "</a>";
  }

  /* Every page either carries the form (#enquiry) or links to the homepage's.
     Set from the page's blocks before any HTML is built — the DOM can't be
     asked, because the CTA is generated in the same pass as the form. */
  var pageHasForm = false;
  /* When the form is the page's opening block it sits directly under the
     hero, so a hero button pointing at it would just repeat its heading. */
  var formIsFirstBlock = false;

  function blocksHaveForm(blocks) {
    return (blocks || []).some(function (b) { return !!b.form; });
  }

  function noteFormPosition(blocks) {
    pageHasForm = blocksHaveForm(blocks);
    formIsFirstBlock = !!(blocks && blocks.length && blocks[0].form);
  }

  function enquiryHref() {
    return pageHasForm ? "#enquiry" : "index.html#enquiry";
  }

  function quoteButton(text, extraClass) {
    return '<a class="btn btn-primary ' + (extraClass || "") + '" href="' + enquiryHref() + '">' +
      esc(text || cfg.pages.home.ctaText) + "</a>";
  }

  function imgTag(image, className, lazy) {
    if (!image || !image.src) return "";
    return '<img class="' + (className || "") + '" src="' + esc(image.src) + '"' +
      ' alt="' + esc(image.alt || "") + '"' +
      (image.width ? ' width="' + image.width + '"' : "") +
      (image.height ? ' height="' + image.height + '"' : "") +
      (lazy ? ' loading="lazy"' : "") + ">";
  }

  function faqItems(list) {
    return list.map(function (f) {
      return '<details class="faq-item"><summary>' + esc(f.q) + "</summary>" +
        '<div class="faq-answer"><p>' + inline(f.a) + "</p></div></details>";
    }).join("");
  }

  /* ---------- head: brand + analytics ----------------------------------
     title, meta description, canonical, OG tags, JSON-LD and the H1 are baked
     into each page's static HTML by bake.js so crawlers see them before any JS
     runs. After changing meta text in config.js, re-run `node bake.js`. */

  function hexToRgb(hex) {
    var n = parseInt(hex.slice(1), 16);
    return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
  }
  function mix(a, b, w) {
    var ra = hexToRgb(a), rb = hexToRgb(b);
    return "#" + ra.map(function (v, i) {
      return ("0" + Math.round(v * w + rb[i] * (1 - w)).toString(16)).slice(-2);
    }).join("");
  }
  function rgba(hex, alpha) {
    var c = hexToRgb(hex);
    return "rgba(" + c[0] + "," + c[1] + "," + c[2] + "," + alpha + ")";
  }

  function applyBrand() {
    var r = document.documentElement.style;
    var c = cfg.brand.color;
    r.setProperty("--brand", c);
    r.setProperty("--brand-dark", cfg.brand.colorDark);
    r.setProperty("--brand-contrast", cfg.brand.colorContrast);
    if (/^#[0-9a-fA-F]{6}$/.test(c)) {
      r.setProperty("--brand-soft", mix(c, "#ffffff", 0.10));
      r.setProperty("--brand-softer", mix(c, "#ffffff", 0.055));
      r.setProperty("--brand-border", mix(c, "#ffffff", 0.30));
      r.setProperty("--brand-glow", rgba(c, 0.30));
      r.setProperty("--brand-glow-soft", rgba(c, 0.15));
      r.setProperty("--footer-bg", mix(c, "#10161d", 0.16));
    }
    document.documentElement.setAttribute("data-style", cfg.brand.style || "classic");
    document.documentElement.setAttribute("data-pattern", cfg.brand.pattern || "none");
  }

  function injectGA4() {
    var id = cfg.ga4Id;
    if (!id || id.indexOf("XXXX") !== -1 || !/^G-[A-Z0-9]+$/.test(id)) return;
    var s = document.createElement("script");
    s.async = true;
    s.src = "https://www.googletagmanager.com/gtag/js?id=" + id;
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag("js", new Date());
    window.gtag("config", id);
  }

  function trackPhoneClicks() {
    document.addEventListener("click", function (e) {
      var link = e.target && e.target.closest ? e.target.closest('a[href^="tel:"]') : null;
      if (!link || typeof window.gtag !== "function") return;
      window.gtag("event", "click_to_call", {
        phone_number: link.getAttribute("href").replace("tel:", ""),
        link_text: (link.textContent || "").trim(),
        page_location: window.location.href
      });
    });
  }

  /* ---------- header / footer ------------------------------------------ */

  function navLinks() {
    var links = [{ href: "index.html", label: "Home" }];
    cfg.services.forEach(function (s) {
      links.push({ href: s.page, label: s.shortName || s.name });
    });
    links.push({ href: "about.html", label: "About" });
    return links;
  }

  function renderHeader() {
    var file = currentFile();
    var nav = navLinks().map(function (l) {
      var active = l.href === file ? ' class="active"' : "";
      return "<li><a" + active + ' href="' + l.href + '">' + esc(l.label) + "</a></li>";
    }).join("");

    var phoneBtn = phoneReady()
      ? '<a class="btn btn-outline nav-phone" href="' + telHref() + '">' +
        UI.callLabel + " " + esc(cfg.business.phoneDisplay) + "</a>"
      : "";
    var quoteBtn = quoteButton(UI.quoteShortLabel, "nav-quote");

    document.getElementById("site-header").innerHTML =
      '<div class="container header-inner">' +
        '<a class="logo" href="index.html">' + esc(cfg.business.name) + "</a>" +
        '<button class="nav-toggle" aria-expanded="false" aria-controls="site-nav" aria-label="' + UI.menuLabel + '">' +
          "<span></span><span></span><span></span>" +
        "</button>" +
        '<nav id="site-nav" class="site-nav" aria-label="Main">' +
          "<ul>" + nav + "</ul>" + phoneBtn + quoteBtn +
        "</nav>" +
      "</div>";

    var toggle = document.querySelector(".nav-toggle");
    var navEl = document.getElementById("site-nav");
    toggle.addEventListener("click", function () {
      var open = navEl.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  function renderFooter() {
    var b = cfg.business;
    var pageLinks = cfg.services.map(function (s) {
      return '<li><a href="' + esc(s.page) + '">' + esc(s.name) + "</a></li>";
    }).join("");

    var identity = [
      b.abn ? "ABN " + esc(b.abn) : "",
      b.businessNumber ? esc(b.businessNumber) : ""
    ].filter(Boolean).join(" &nbsp;|&nbsp; ");

    document.getElementById("site-footer").innerHTML =
      '<div class="container footer-grid">' +
        "<div>" +
          '<p class="footer-brand">' + esc(b.name) + "</p>" +
          (identity ? "<p>" + identity + "</p>" : "") +
          "<p>" + phoneText("") + "</p>" +
          (b.email ? '<p><a href="mailto:' + esc(b.email) + '">' + esc(b.email) + "</a></p>" : "") +
          "<p>" + UI.serviceAreaLabel + ": " + esc(b.serviceArea) + "</p>" +
        "</div>" +
        '<div><p class="footer-title">' + UI.services + "</p><ul>" + pageLinks + "</ul></div>" +
        '<div><p class="footer-title">More</p><ul>' +
          '<li><a href="index.html">Home</a></li>' +
          '<li><a href="about.html">About</a></li>' +
          '<li><a href="privacy.html">Privacy policy</a></li>' +
        "</ul></div>" +
      "</div>" +
      '<div class="container footer-bottom">' +
        "<p>&copy; " + new Date().getFullYear() + " " + esc(b.name) +
        ". Serving the Perth metropolitan area.</p>" +
      "</div>";
  }

  /* ---------- mobile contact bar -----------------------------------------
     Fixed to the viewport bottom below the desktop breakpoint, since the
     phone/email links otherwise sit inside the collapsed hamburger nav.
     Hidden automatically while #enquiry is on screen so it never overlaps
     the form itself. */

  function renderContactBar() {
    var bar = document.getElementById("contact-bar");
    if (!bar) return;

    var b = cfg.business;
    var phoneIcon = '<svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" ' +
      'stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 ' +
      '19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 ' +
      '1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>';
    var mailIcon = '<svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" ' +
      'stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 4h16v16H4z"/>' +
      '<path d="m22 6-10 7L2 6"/></svg>';
    var callLink = phoneReady()
      ? '<a class="contact-bar-btn contact-bar-call" href="' + telHref() + '">' + phoneIcon + UI.callLabel + "</a>"
      : "";
    var emailLink = b.email
      ? '<a class="contact-bar-btn contact-bar-email" href="mailto:' + esc(b.email) + '" aria-label="' + UI.emailLabel + '">' + mailIcon + "</a>"
      : "";
    var quoteLink = '<a class="contact-bar-btn contact-bar-quote" href="' + enquiryHref() + '">' +
      esc(UI.quoteShortLabel) + "</a>";

    if (!callLink && !emailLink) {
      bar.innerHTML = "";
      return;
    }

    bar.innerHTML = callLink + quoteLink + emailLink;

    var enquiry = document.getElementById("enquiry");
    if (enquiry && "IntersectionObserver" in window) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          bar.classList.toggle("contact-bar-hidden", entry.isIntersecting);
        });
      }, { rootMargin: "0px" });
      observer.observe(enquiry);
    }
  }

  /* ---------- block renderer --------------------------------------------
     One function per block type. Anything unrecognised is skipped silently so
     an old config never blanks a page. */

  function paragraphs(value, className) {
    return [].concat(value).map(function (t) {
      return "<p" + (className ? ' class="' + className + '"' : "") + ">" + inline(t) + "</p>";
    }).join("");
  }

  function tableHtml(t) {
    var head = "<tr>" + t.columns.map(function (c) {
      return "<th scope=\"col\">" + inline(c) + "</th>";
    }).join("") + "</tr>";
    var body = t.rows.map(function (row) {
      return "<tr>" + row.map(function (cell) {
        return "<td>" + inline(cell) + "</td>";
      }).join("") + "</tr>";
    }).join("");
    return '<div class="table-wrap" tabindex="0" role="group" aria-label="Data table">' +
      "<table><thead>" + head + "</thead><tbody>" + body + "</tbody></table></div>";
  }

  /* Reference cells are frequently a bare URL, sometimes with a trailing note.
     inline() only linkifies [label](url), so link it here and label it with the
     host — which also shows the reader where the answer actually came from. */
  function fieldValue(cell) {
    var m = String(cell).match(/^(https?:\/\/[^\s]+)(.*)$/);
    if (!m) return inline(cell);
    var host = m[1].replace(/^https?:\/\//i, "").replace(/\/.*$/, "");
    var tail = m[2].trim();
    return '<a href="' + esc(m[1]) + '" rel="noopener">' + esc(host) + "</a>" +
      (tail ? " " + inline(tail) : "");
  }

  /* Same data shape as `table`, rendered one card per row. For reference data
     whose cells are long prose a grid is the wrong container — six columns of
     paragraphs cannot fit any screen, so it can only side-scroll. First column
     becomes the card heading, the rest become labelled fields. */
  function cardsHtml(t) {
    var cards = t.rows.map(function (row) {
      var fields = row.slice(1).map(function (cell, i) {
        return '<div class="data-field"><dt>' + inline(t.columns[i + 1]) + "</dt>" +
          "<dd>" + fieldValue(cell) + "</dd></div>";
      }).join("");
      return '<article class="data-card"><h4>' + inline(row[0]) + "</h4>" +
        "<dl>" + fields + "</dl></article>";
    }).join("");
    return '<div class="data-cards">' + cards + "</div>";
  }

  function markerHtml(text) {
    return '<div class="marker"><p class="marker-label">' + UI.markerLabel + "</p>" +
      "<p>" + inline(text) + "</p></div>";
  }

  function blockHtml(b) {
    if (b.credit) return '<p class="page-credit">' + inline(b.credit) + "</p>";
    if (b.h2) return "<h2>" + inline(b.h2) + "</h2>";
    if (b.h3) return "<h3>" + inline(b.h3) + "</h3>";
    if (b.lead) return paragraphs(b.lead, "lead");
    if (b.p) return paragraphs(b.p);
    if (b.ul) return "<ul>" + b.ul.map(function (i) { return "<li>" + inline(i) + "</li>"; }).join("") + "</ul>";
    if (b.ol) return "<ol>" + b.ol.map(function (i) { return "<li>" + inline(i) + "</li>"; }).join("") + "</ol>";
    if (b.table) return tableHtml(b.table);
    if (b.cards) return cardsHtml(b.cards);
    if (b.image) return '<figure class="content-image">' + imgTag(b.image, "", true) + "</figure>";
    if (b.note) return '<div class="note">' + paragraphs(b.note) + "</div>";
    if (b.marker) return markerHtml(b.marker);
    if (b.faqs) return faqItems(b.faqs);
    if (b.form) return formSection(b.form);
    return "";
  }

  /* Blocks are grouped into banded sections: a new section starts at each h2
     and at each form. Bands alternate so a long page still has rhythm. */
  function renderBlocks(blocks) {
    if (!blocks || !blocks.length) return "";
    var groups = [];
    var current = null;
    blocks.forEach(function (b) {
      if (!current || b.h2 || b.form) {
        current = { isForm: !!b.form, items: [] };
        groups.push(current);
      }
      current.items.push(b);
    });

    var alt = false;
    return groups.map(function (g) {
      var inner = g.items.map(blockHtml).join("");
      if (g.isForm) return inner;           // formSection emits its own <section>
      alt = !alt;
      return '<section class="section' + (alt ? "" : " section-alt") + '">' +
        '<div class="container narrow prose">' + inner + "</div></section>";
    }).join("");
  }

  /* ---------- shared sections ------------------------------------------ */

  function fillHero(h, image) {
    var dyn = document.querySelector(".hero-dynamic");
    if (!dyn) return;
    var actions = (formIsFirstBlock ? "" : quoteButton(h.ctaText)) + callButton();
    dyn.innerHTML =
      (h.subheadline ? '<p class="hero-sub">' + inline(h.subheadline) + "</p>" : "") +
      (actions ? '<div class="hero-actions">' + actions + "</div>" : "") +
      '<ul class="value-props">' +
        (cfg.valueProps || []).map(function (v) { return "<li>" + esc(v) + "</li>"; }).join("") +
      "</ul>";
    var media = imgTag(image, "hero-img");
    if (media) {
      document.querySelector(".hero").classList.add("has-media");
      document.querySelector(".hero-grid").insertAdjacentHTML(
        "beforeend", '<div class="hero-media">' + media + "</div>");
    }
  }

  function ctaBand(ctaText) {
    return '<section class="cta-band"><div class="container">' +
      "<h2>" + UI.ctaBandTitle + "</h2>" +
      "<p>" + esc(cfg.form.underButton) + "</p>" +
      quoteButton(ctaText, "btn-invert") +
    "</div></section>";
  }

  /* Testimonials/photos stay hidden until real evidence exists in config.
     This is intentional — see the note at the bottom of config.js. */
  function testimonialsSection() {
    if (!cfg.testimonials || !cfg.testimonials.length) return "";
    var items = cfg.testimonials.map(function (t) {
      return '<figure class="testimonial"><blockquote>' + esc(t.quote) + "</blockquote>" +
        "<figcaption>" + esc(t.name) + (t.detail ? " - " + esc(t.detail) : "") + "</figcaption></figure>";
    }).join("");
    return '<section class="section"><div class="container">' +
      "<h2>" + UI.testimonialsTitle + '</h2><div class="grid-3">' + items + "</div></div></section>";
  }

  function photosSection() {
    if (!cfg.photos || !cfg.photos.length) return "";
    var items = cfg.photos.map(function (p) {
      return '<figure class="photo"><img loading="lazy" src="' + esc(p.src) + '" alt="' + esc(p.alt) + '">' +
        (p.caption ? "<figcaption>" + esc(p.caption) + "</figcaption>" : "") + "</figure>";
    }).join("");
    return '<section class="section"><div class="container">' +
      "<h2>" + UI.photosTitle + '</h2><div class="grid-3">' + items + "</div></div></section>";
  }

  function areasSection() {
    if (!cfg.areas || !cfg.areas.length) return "";
    var links = cfg.areas.map(function (a) {
      return '<li><a href="' + esc(a.slug) + '.html">' + esc(a.name) + "</a></li>";
    }).join("");
    return '<section class="section" id="areas"><div class="container">' +
      "<h2>" + UI.areasTitle + '</h2><ul class="area-links">' + links + "</ul>" +
    "</div></section>";
  }

  /* ---------- enquiry form ------------------------------------------------
     One form per page. `opts` comes from the page's form block and may set a
     headline, intro copy, a preset for the first field, per-field placeholder
     overrides, and extra fields inserted after a named field. */

  /* One id per page load, shared by every render of the form. crypto.randomUUID
     needs a secure context; the fallback is not cryptographically strong, but
     this only has to be unique enough to dedupe one visitor's retries. */
  var _submissionId = null;
  function submissionId() {
    if (_submissionId) return _submissionId;
    if (window.crypto && typeof window.crypto.randomUUID === "function") {
      _submissionId = window.crypto.randomUUID();
    } else {
      _submissionId = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0;
        return (c === "x" ? r : (r & 0x3 | 0x8)).toString(16);
      });
    }
    return _submissionId;
  }

  function formFields(opts) {
    var fields = cfg.form.fields.map(function (f) {
      var copy = {};
      for (var k in f) if (Object.prototype.hasOwnProperty.call(f, k)) copy[k] = f[k];
      if (opts.placeholders && opts.placeholders[copy.name]) {
        copy.placeholder = opts.placeholders[copy.name];
      }
      return copy;
    });
    (opts.extraFields || []).forEach(function (extra) {
      var at = fields.findIndex(function (f) { return f.name === extra.after; });
      fields.splice(at === -1 ? fields.length : at + 1, 0, extra);
    });
    return fields;
  }

  function fieldHtml(f, opts) {
    var id = "qf-" + f.name;
    var req = f.required ? " required" : "";
    var label = '<label for="' + id + '">' + esc(f.label) +
      (f.required ? "" : ' <span class="field-optional">(' + UI.optional + ")</span>") + "</label>";
    var control;
    var preset = (f.name === "job" && opts.preset) ? opts.preset : null;

    if (f.type === "select") {
      var opts_ = f.options.map(function (o) {
        return '<option value="' + esc(o) + '"' + (o === preset ? " selected" : "") + ">" + esc(o) + "</option>";
      }).join("");
      control = '<select id="' + id + '" name="' + esc(f.name) + '"' + req + ">" +
        '<option value="">' + UI.chooseOne + "</option>" + opts_ + "</select>";
    } else if (f.type === "textarea") {
      control = '<textarea id="' + id + '" name="' + esc(f.name) + '" rows="3"' + req +
        (f.placeholder ? ' placeholder="' + esc(f.placeholder) + '"' : "") + "></textarea>";
    } else {
      control = '<input id="' + id + '" name="' + esc(f.name) + '" type="' + esc(f.type || "text") + '"' +
        (f.autocomplete ? ' autocomplete="' + esc(f.autocomplete) + '"' : "") +
        (f.placeholder ? ' placeholder="' + esc(f.placeholder) + '"' : "") +
        (preset ? ' value="' + esc(preset) + '"' : "") + req + ">";
    }
    return '<div class="form-field">' + label + control + "</div>";
  }

  function formHtml(opts) {
    var fields = formFields(opts);
    return '<form id="quote-form" novalidate>' +
      fields.map(function (f) { return fieldHtml(f, opts); }).join("") +
      // Honeypot: real visitors never see this (off-screen, not display:none — some bots
      // skip display:none fields specifically) or fill it in. Server treats any value here
      // as spam. Deliberately outside the `fields` config, not a real question to answer.
      '<input type="text" name="_gotcha" tabindex="-1" autocomplete="off" aria-hidden="true" ' +
        'style="position:absolute;left:-9999px;top:-9999px">' +
      // Idempotency key, generated once per page load. The ingest function dedupes on
      // (channel, source_ref), so a retry after a failed submit updates the same lead
      // instead of creating a second one. Without it the server falls back to a random
      // id per request, and every retry is a new lead. Picked up automatically by the
      // generic field loop in wireQuoteForm, same as _gotcha above.
      '<input type="hidden" name="_id" value="' + esc(submissionId()) + '">' +
      (cfg.turnstileSiteKey ? '<div id="turnstile-widget"></div>' : "") +
      '<button class="btn btn-primary btn-block" type="submit">' + esc(cfg.form.submitText) + "</button>" +
      '<p class="form-under">' + esc(cfg.form.underButton) + "</p>" +
      '<p class="form-status" id="form-status" role="status" aria-live="polite"></p>' +
    "</form>";
  }

  // Turnstile's script may still be loading (async) when the form first renders, and the
  // form itself is re-rendered on every page navigation in this SPA — so render explicitly
  // once the API is available, rather than relying on its own auto-render-on-load scan,
  // which would miss a form injected into the DOM after that scan already ran.
  function renderTurnstile(container) {
    if (!container || !cfg.turnstileSiteKey) return;
    if (window.turnstile) {
      window.turnstile.render(container, { sitekey: cfg.turnstileSiteKey });
    } else {
      setTimeout(function () { renderTurnstile(container); }, 100);
    }
  }

  function formSection(opts) {
    opts = opts || {};
    var intro = opts.intro ? paragraphs(opts.intro, "lead") : "";
    var phone = opts.showPhone ? '<p class="form-phone">' + phoneText("") + "</p>" : "";
    return '<section class="section section-alt" id="enquiry"><div class="container narrow">' +
      "<h2>" + esc(opts.headline || cfg.form.headline) + "</h2>" +
      intro + phone + formHtml(opts) +
    "</div></section>";
  }

  function wireQuoteForm() {
    var form = document.getElementById("quote-form");
    if (!form) return;
    var status = document.getElementById("form-status");
    renderTurnstile(document.getElementById("turnstile-widget"));

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      var controls = form.querySelectorAll("input, select, textarea");
      var values = {};
      var missing = [];
      Array.prototype.forEach.call(controls, function (el) {
        var v = (el.value || "").trim();
        values[el.name] = v;
        if (el.hasAttribute("required") && !v) {
          missing.push(el);
        }
      });

      if (missing.length) {
        status.textContent = "Please fill in the fields marked required, " +
          missing.length + " still to go.";
        status.className = "form-status error";
        missing[0].focus();
        return;
      }

      var ingestUrl = cfg.ingestUrl;
      if (!ingestUrl || !cfg.ingestSecret || ingestUrl.indexOf("YOUR_") === 0) {
        // Owner hasn't configured the ingest endpoint yet — fail gracefully for visitors.
        console.warn("ingestUrl/ingestSecret not set in config.js — form cannot submit.");
        showError();
        return;
      }

      var btn = form.querySelector('button[type="submit"]');
      btn.disabled = true;
      status.textContent = UI.sending;
      status.className = "form-status";

      var payload = {};
      Object.keys(values).forEach(function (k) { payload[k] = values[k]; });
      payload._secret = cfg.ingestSecret;
      payload.subject = "New job enquiry: " + (values.job || "Perth Brickwork");

      fetch(ingestUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      }).then(function (res) {
        if (res.ok) {
          form.innerHTML = '<p class="form-status success">' + esc(cfg.form.successMessage) + "</p>";
        } else {
          btn.disabled = false;
          showError();
        }
      }).catch(function () {
        btn.disabled = false;
        showError();
      });

      function showError() {
        // Only offer the phone fallback when there's a real number to offer.
        status.innerHTML = phoneReady()
          ? esc(cfg.form.errorMessageCall) + " " + phoneText("")
          : esc(cfg.form.errorMessage);
        status.className = "form-status error";
      }
    });
  }

  /* ---------- pages ------------------------------------------------------ */

  function renderHome(content) {
    var p = cfg.pages.home;
    noteFormPosition(cfg.homeBlocks);
    content.innerHTML =
      renderBlocks(cfg.homeBlocks) +
      areasSection() +
      testimonialsSection() +
      ctaBand(p.ctaText);
    fillHero(p, p.image);
    wireQuoteForm();
  }

  function renderService(content) {
    var file = currentFile();
    var svc = cfg.services.find(function (s) { return s.page === file; });

    if (!svc) {
      // Unmapped stub: replace the whole <main> so the stale baked H1 goes too.
      document.getElementById("main").innerHTML =
        '<section class="section"><div class="container narrow">' +
        "<h1>Page not in use</h1>" +
        "<p>This page isn't mapped to an entry in the services array in config.js. " +
        'Add a service entry with <code>page: "' + esc(file) + '"</code>, or delete this file.</p>' +
        '<p><a class="btn btn-primary" href="index.html">' + UI.backHome + "</a></p>" +
      "</div></section>";
      return;
    }

    noteFormPosition(svc.blocks);
    content.innerHTML =
      renderBlocks(svc.blocks) +
      testimonialsSection() +
      ctaBand(svc.ctaText);
    fillHero(svc, svc.image);
    wireQuoteForm();
  }

  function renderAbout(content) {
    noteFormPosition(cfg.aboutBlocks);
    content.innerHTML =
      renderBlocks(cfg.aboutBlocks) +
      photosSection() +
      ctaBand(cfg.pages.home.ctaText);
    wireQuoteForm();
  }

  function renderPrivacy(content) {
    pageHasForm = false;
    var intro = [{ credit: "Last updated: " + cfg.pages.privacy.lastUpdated }];
    content.innerHTML = renderBlocks(intro.concat(cfg.privacyBlocks));
  }

  /* ---------- motion ------------------------------------------------------
     Purely decorative. Both helpers bail out cleanly when the browser lacks
     support or the user prefers reduced motion — content is always visible
     because the hidden state only exists under html.anim (see styles.css). */

  function initHeaderShadow() {
    var header = document.getElementById("site-header");
    if (!header) return;
    var onScroll = function () {
      header.classList.toggle("scrolled", window.scrollY > 8);
    };
    document.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  function initReveal() {
    if (!("IntersectionObserver" in window)) return;
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    document.documentElement.classList.add("anim");

    var targets = document.querySelectorAll(
      ".card, .step, .faq-item, .testimonial, .photo, .section h2, " +
      ".table-wrap, .data-card, .note, .contact-lines, #quote-form, .area-links li"
    );
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.05 });

    targets.forEach(function (el) {
      var idx = el.parentNode
        ? Array.prototype.indexOf.call(el.parentNode.children, el)
        : 0;
      el.style.transitionDelay = (idx % 6) * 70 + "ms";
      el.classList.add("reveal");
      observer.observe(el);
    });
  }

  /* ---------- boot --------------------------------------------------------- */

  applyBrand();
  injectGA4();
  trackPhoneClicks();

  var content = document.getElementById("page-content");
  var page = document.body.getAttribute("data-page");
  var renderers = {
    home: renderHome,
    service: renderService,
    about: renderAbout,
    privacy: renderPrivacy
  };
  // Body first, so header/footer helpers can see whether #enquiry exists.
  if (renderers[page] && content) renderers[page](content);

  renderHeader();
  renderFooter();
  renderContactBar();
  initHeaderShadow();
  initReveal();

  /* If the URL has a hash (e.g. index.html#enquiry), re-scroll after render
     since the target element didn't exist at initial page load. Deferred a
     frame and forced to "auto": the stylesheet sets scroll-behavior: smooth,
     and a smooth scroll started during boot gets cancelled by the browser's
     own scroll restoration. */
  if (window.location.hash) {
    requestAnimationFrame(function () {
      var target = null;
      try { target = document.querySelector(window.location.hash); } catch (e) { /* not a selector */ }
      if (target) target.scrollIntoView({ behavior: "auto", block: "start" });
    });
  }
})();
