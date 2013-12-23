$(function() {
   $.each($("a[href^='#://']"), function(i, el) {
       el = $(el);
       var original = el.attr("href").substr(4);
       
       if (original == "") {
           original = el.text();
       }
       
       var hash = hashIt(original);
       el.attr("href", hash);
       el.attr("data-original", original);
   });
});
