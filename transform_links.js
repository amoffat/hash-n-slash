$(function() {
   $.each($("a[href^='#://']"), function(i, el) {
       el = $(el);
       var original = el.attr("href");
       var hash = hashIt(original);
       el.attr("href", hash);
       el.attr("data-original", original);
   });
});
