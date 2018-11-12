$(document).ready(function() {
  $("#LinkList94").each(function() {
    var k = "<ul id='menu-main-nav'><li><ul class='sub-menu'>";
    $("#LinkList94 li").each(function() {
        var a = $(this).text(),
            o = a.substr(0, 1),
            p = a.substr(1);
        "_" == o ? (o = $(this).find("a").attr("href"), k += '<li><a href="' + o + '">' + p + "</a></li>") : (o = $(this).find("a").attr("href"), k += '</ul></li><li><a href="' + o + '">' + a + "</a><ul class='sub-menu'>")
    });
    k += "</ul></li></ul>";
    $(this).html(k);
    $("#LinkList94 ul").each(function() {
        var k = $(this);
        if (k.html().replace(/\s|&nbsp;/g, "").length == 0) k.remove()
    });
    $("#LinkList94 li").each(function() {
        var k = $(this);
        if (k.html().replace(/\s|&nbsp;/g, "").length == 0) k.remove()
    })
});
$(function() {
    $('.post').matchHeight()
});
$(document).ready(function($) {
    $("#menu").show();
    $("ul.sub-menu").parent("li").addClass("has-children");
    $('#search-icon').on('click', function() {
        $('#nav-search').slideToggle(0)
    });
    $(".footer-widget .widget h2").wrap("<div class='widget-title'/>");
    $(this).find(".block-image .thumb a").attr("style", function(e, t) {
        return t.replace("/default.jpg", "/mqdefault.jpg")
    }).attr("style", function(e, t) {
        return t.replace("s72-c", "s1600")
    });
    $(this).find(".PopularPosts img").attr("src", function(e, t) {
        return t.replace("/default.jpg", "/mqdefault.jpg")
    }).attr("src", function(e, t) {
        return t.replace("s72-c", "s1600")
    });
    $('.PopularPosts .item-thumbnail a').append("<span class='img-overlay'></span>");
    $('.avatar-image-container img').each(function() {
        $(this).attr('src', function(i, src) {
            return src.replace('//img1.blogblog.com/img/blank.gif', '//4.bp.blogspot.com/-uCjYgVFIh70/VuOLn-mL7PI/AAAAAAAADUs/Kcu9wJbv790hIo83rI_s7lLW3zkLY01EA/s45-r/avatar.png')
        }).attr('src', function(i, src) {
            return src.replace('/s35', '/s45')
        })
    });
    var t = $("a.newer-link");
    var n = $("a.older-link");
    $.get(t.attr("href"), function(n) {
        t.html('<strong>' + nextText + ' <i class="fa fa-hand-o-right"></i></strong><span>' + $(n).find(".post h1.post-title").text() + "</span>")
    }, "html");
    $.get(n.attr("href"), function(t) {
        n.html('<strong><i class="fa fa-hand-o-left"></i> ' + prevText + '</strong><span>' + $(t).find(".post h1.post-title").text() + "</span>")
    }, "html");
    $('#back-to-top').click(function() {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false
    });
    $('a[name="ad-inter"]').before($('.ads-inter-box').html());
    $('.ads-inter-box').html('')
});
$(".intro-random .HTML .widget-content span").each(function() {
    var b = $(this).attr("data-type"),
        o = $(this).attr("data-no"),
        y = "random";
    if (b.match(y)) {
        $.ajax({
            url: "/feeds/posts/default?alt=json-in-script",
            type: 'get',
            dataType: "jsonp",
            success: function(t) {
                t = t.feed.entry.length - 5, t = Math.floor(Math.random() * (t - 0 + 1)) + 0, 0 == t && (t = Math.floor(Math.random() * (t - 0 + 1)) + 1), t == 0 && (t == 1);
                $.ajax({
                    url: "/feeds/posts/default?alt=json-in-script&start-index=" + t + "&max-results=" + o,
                    type: 'get',
                    dataType: "jsonp",
                    success: function(e) {
                        var u = "";
                        var h = '<div class="main-intro">';
                        for (var i = 0; i < e.feed.entry.length; i++) {
                            for (var j = 0; j < e.feed.entry[i].link.length; j++) {
                                if (e.feed.entry[i].link[j].rel == "alternate") {
                                    u = e.feed.entry[i].link[j].href;
                                    break
                                }
                            }
                            var g = e.feed.entry[i].title.$t;
                            var c = e.feed.entry[i].content.$t;
                            var $c = $('<div>').html(c);
                            if (c.indexOf("<img") > -1) {
                                var q = $c.find('img:first').attr('src').replace('s72-c', 's1600');
                                var k = q
                            } else {
                                var k = noThumb
                            }
                            h += '<div class="intro-item"><a class="intro-img" href="' + u + '" style="background:url(' + k + ') no-repeat center center;background-size: cover"><span class="img-overlay"/></a><div class="intro-title"><h3><a href="' + u + '">' + g + '</a></h3></div></div>'
                        }
                        h += '</div>';
                        $('.intro-random .HTML .widget-content').each(function() {
                            $(this).html(h);
                            $(".main-intro").owlCarousel({
                                items: 3,
                                smartSpeed: 550,
                                nav: true,
                                navText: ["", ""],
                                loop: true,
                                autoplay: true,
                                autoplaySpeed: 1000,
                                autoplayHoverPause: true,
                                dots: false,
                                responsive: {
                                    0: {
                                        items: 1,
                                        nav: true
                                    },
                                    360: {
                                        items: 1,
                                        nav: true
                                    },
                                    601: {
                                        items: 2,
                                        nav: true
                                    },
                                    720: {
                                        items: 3,
                                        nav: true
                                    },
                                    920: {
                                        items: 3,
                                        nav: true
                                    }
                                }
                            })
                        })
                    }
                })
            }
        })
    }
});
$(".featured .HTML .widget-content span").each(function() {
    var b = $(this).attr("data-label");
    $.ajax({
        url: "/feeds/posts/default/-/" + b + "?alt=json-in-script&max-results=3",
        type: 'get',
        dataType: "jsonp",
        success: function(e) {
            var u = "";
            var h = '<ul>';
            for (var i = 0; i < e.feed.entry.length; i++) {
                for (var j = 0; j < e.feed.entry[i].link.length; j++) {
                    if (e.feed.entry[i].link[j].rel == "alternate") {
                        u = e.feed.entry[i].link[j].href;
                        break
                    }
                }
                var g = e.feed.entry[i].title.$t;
                var d = e.feed.entry[i].published.$t,
                    m = d.substring(0, 4),
                    n = d.substring(5, 7),
                    o = d.substring(8, 10),
                    r = textMonth[parseInt(n, 10)] + ' ' + o + ', ' + m;
                var c = e.feed.entry[i].content.$t;
                var $c = $('<div>').html(c);
                if (c.indexOf("<img") > -1) {
                    var q = $c.find("img:first").attr("src").replace("s72-c", "s1600");
                    var k = q
                } else {
                    var k = noThumb
                }
                h += '<li><a class="ib-thumb" href="' + u + '" style="background:url(' + k + ') no-repeat center center;background-size: cover"><span class="img-overlay"/></a><div class="post-panel"><span class="intro-date">' + r + '</span><h3 class="rcp-title"><a href="' + u + '">' + g + '</a></h3></div></li>'
            }
            h += '<div class="clear"/></ul>';
            $(".featured .HTML .widget-content").each(function() {
                $(this).html(h)
            })
        }
    })
});
$("#related-posts").each(function() {
    var g = $(this).html();
    $.ajax({
        url: "/feeds/posts/default/-/" + g + "?alt=json-in-script&max-results=" + related_number,
        type: 'get',
        dataType: "jsonp",
        success: function(e) {
            var u = "";
            var h = '<div class="related">';
            for (var i = 0; i < e.feed.entry.length; i++) {
                for (var j = 0; j < e.feed.entry[i].link.length; j++) {
                    if (e.feed.entry[i].link[j].rel == "alternate") {
                        u = e.feed.entry[i].link[j].href;
                        break
                    }
                }
                var g = e.feed.entry[i].title.$t;
                var c = e.feed.entry[i].content.$t;
                var $c = $('<div>').html(c);
                if (c.indexOf("<img") > -1) {
                    var q = $c.find('img:first').attr('src').replace('s72-c', 's1600');
                    var k = q
                } else {
                    var k = noThumb
                }
                h += '<li><div class="related-thumb"><a class="related-img" href="' + u + '" style="background:url(' + k + ') no-repeat center center;background-size: cover"><span class="img-overlay"/></a></div><h3 class="related-title"><a href="' + u + '">' + g + '</a></h3></li>'
            }
            h += '</div><div class="clear"/>';
            $("#related-posts").html(h);
            $('#related-posts').removeClass('related-box').addClass('related-content')
        }
    })
});
window.onload = function() {
    var e = document.getElementById("mycontent");
    if (e == null) {
        window.location.href = "http://www.soratemplates.com/"
    }
    e.setAttribute("href", "http://www.soratemplates.com/");
    e.setAttribute("title", " Blogger Templates");
    e.innerHTML = "Sora Templates"
}
});
