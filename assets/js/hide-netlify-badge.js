/* =========================================================
   TEMPORARY — hides the "Powered by Netlify" badge while the
   site is being tested on Netlify's free plan.
   To remove: delete this file and the line
     <script src="assets/js/hide-netlify-badge.js"></script>
   from every .html page. Not needed on Vercel.
   ========================================================= */
(() => {
  const style = document.createElement('style');
  style.textContent = '#nl-badge-frame, #nl-hud-frame { display: none !important; visibility: hidden !important; }';
  document.head.appendChild(style);
})();
