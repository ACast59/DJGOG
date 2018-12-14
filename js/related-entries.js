$("#related-posts").each(function() {
  var b = $(this).text();
  $.ajax({
    url: "/feeds/posts/default/-/" + b + "?alt=json-in-script&max-results=3",
    type: 'get',
    dataType: "jsonp",
    success: function(e) {
      var u = "";
      var h = '<div class="related-posts">';
      for (var i = 0; i < e.feed.entry.length; i++) {
        for (var j = 0; j < e.feed.entry[i].link.length; j++) {
          if (e.feed.entry[i].link[j].rel == "alternate") {
            u = e.feed.entry[i].link[j].href;
            break
          }
        }
        var g = e.feed.entry[i].title.$t;
        var d = e.feed.entry[i].published.$t,
        v = d.substring(0, 4),
        w = d.substring(5, 7),
        f = d.substring(8, 10),
        r = MONTH_FORMAT[parseInt(w, 10)] + ' ' + f + ', ' + v;
        var c = e.feed.entry[i].content.$t;
        var $c = $('<div>').html(c);
        if (c.indexOf("<img") > -1) {
          var q = $c.find('img:first').attr('src').replace('s72-c', 's1600');
          var k = q
        } else {
          var k = NO_IMAGE
        }
        h += '<div class="col-12 col-sm-4"><div class="card card-widget"><div class="card-img"><a href="' + u + '"><img src="' + k + '" alt="' + g + '"/></a></div><div class="card-block"><h4 class="card-title"><a href="' + u + '">' + g + '</a></h4><div class="card-meta"><span><i class="fa fa-clock-o"></i> ' + r + '</span></div></div></div></div>'
      }
      h += '</div><div class="clear"/>';
      $("#related-ready").html(h);
      $('.related-img').each(function() {
        $(this).attr('style', function(i, src) {
          return src.replace('/default.jpg', '/hqdefault.jpg')
        }).attr('style', function(i, src) {
          return src.replace('s72-c', 's1600')
        })
      })
    }
  });
});

document.write('');

<div id='related-wrap'>
  <div class='related-title'>
    <h2>Related Posts</h2>
  </div>
  <div id='related-posts'></div>
</div>
