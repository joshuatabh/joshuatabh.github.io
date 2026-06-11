---
title: Looks like you're offline
permalink: /offline.html
indexing: false
sitemap: false
---
<style>
  /* Force the entire background canvas to change color */
  html, body {
    background: rgba(50, 60, 85, 0.85) !important;
    min-height: 100vh !important;
    height: 100% !important;
    color: #ffffff !important;
  }

  /* Hide the banner image completely */
  .feature {
    display: none !important;
  }

  /* Turn all typography text white so it reads beautifully on the blue */
  h1, h2, h3, h4, h5, h6, p, .half-underline, h3.half-underline {
    color: #ffffff !important;
  }

  /* Fix the elegant underline graphic color */
  .half-underline::after, h3.half-underline::after {
    background-color: #ffffff !important;
  }

  /* Invert the button colors to pop against the blue */
  .learn-more-btn {
    color: #ffffff !important;
    border-color: #ffffff !important;
    background: transparent !important;
  }

  .learn-more-btn:hover {
    background-color: #ffffff !important;
    color: #323c55 !important;
    opacity: 1 !important;
  }
</style>

<div class="container containerCentre" style="min-height: 60vh; flex-direction: column; margin-top: 5%;">
  <h3 class="half-underline">404</h3>
  <p style="font-family: 'Playfair Display', serif; text-align: center; font-size: 1.3rem; margin-bottom: 30px;">
    Looks like you've disconnected from the internet. Please try re-connecting then returning to the homepage.
  </p>
  <a href="/" class="learn-more-btn">Return Home</a>
</div>

