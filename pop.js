var uid = '492517';
var wid = '743060';

(function () {
  var pop_tag = document.createElement('script');
  pop_tag.src = '//cdn.popcash.net/show.js';
  document.body.appendChild(pop_tag);

  pop_tag.onerror = function () {
    var fallback = document.createElement('script');
    fallback.src = '//cdn2.popcash.net/show.js';
    document.body.appendChild(fallback);
  };
})();
