/*! dude 25-01-2017 11:33 - Digitoimisto Dude Oy (moro@dude.fi) */
!function(e){e(document).ready(function(){e(".likes").on("click",function(){var s=e(this).data("id"),t=JSON.parse(localStorage.getItem("dude_liked_posts"));if(null===t&&(t=[]),e.inArray(s,t)>-1){e(this).removeClass("liked");var n="/wp-json/dude/v1/post/"+s+"/unlike",d=t.indexOf(s);d>-1&&t.splice(d,1)}else{e(this).addClass("liked"),t.push(s);var n="/wp-json/dude/v1/post/"+s+"/like"}jQuery.ajax({method:"GET",beforeSend:function(e){e.setRequestHeader("X-WP-Nonce",dudelike.nonce)},url:n}).done(function(s){0!==s.length&&"success"===s.status&&(e(".likes span").html(s.count),localStorage.setItem("dude_liked_posts",JSON.stringify(t)))})})})}(jQuery);