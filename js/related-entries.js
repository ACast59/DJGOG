function related_results_labels(e) {
  for (var l = 0; l < e.feed.entry.length; l++) {
    var t = e.feed.entry[l];
    relatedTitles[relatedTitlesNum] = t.title.$t;
    var r = e.feed.entry[l].media$thumbnail.url,
      a = r.replace("/s72-c/", "/w320-h230-c/");
    if (e.feed.entry[l].media$thumbnail) var r = e.feed.entry[l].media$thumbnail.url,
      a = r.replace("/s72-c/", "/w320-h230-c/");
    else if (null != e.feed.entry[l].content.$t.match(/src=(.+?[\.jpg|\.gif|\.png]")/)) var a = e.feed.entry[l].content.$t.match(/src=(.+?[\.jpg|\.gif|\.png]")/)[1];
    else var a = "http://1.bp.blogspot.com/-a-3WZRtj7pw/VoxaVk-cPMI/AAAAAAAABMo/ivQ1HVw0ZME/s250-Ic42/no-thumbnail.png";
    relatedImage[relatedTitlesNum] = a;
    for (var n = 0; n < t.link.length; n++)
      if ("alternate" == t.link[n].rel) {
        relatedUrls[relatedTitlesNum] = t.link[n].href, relatedTitlesNum++;
        break
      }
  }
}

function removeRelatedDuplicates() {
  for (var e = new Array(0), l = new Array(0), t = new Array(0), r = 0; r < relatedUrls.length; r++) contains(e, relatedUrls[r]) || (e.length += 1, e[e.length - 1] = relatedUrls[r], l.length += 1, l[l.length - 1] = relatedTitles[r], t.length += 1, t[t.length - 1] = relatedImage[r]);
  relatedTitles = l, relatedUrls = e, relatedImage = t
}

function contains(e, l) {
  for (var t = 0; t < e.length; t++)
    if (e[t] == l) return !0;
  return !1
}

function printRelatedLabels(e) {
  for (var l = 0; l < relatedUrls.length; l++) relatedUrls[l] == e && (relatedUrls.splice(l, 1), relatedTitles.splice(l, 1), relatedImage.splice(l, 1));
  var t = Math.floor((relatedTitles.length - 1) * Math.random()),
  l = 0;
  for (relatedTitles.length > 1; l < relatedTitles.length && 20 > l && l < maxposts;) l % 2 == 1 ? document.getElementById("related_items").innerHTML += "<div class='col-12 col-sm-4'><div class='card card-widget'><div class='card-img'><a href='" + relatedUrls[t] + "'><img src='" + relatedImage[t] + "' alt='" + relatedTitles[t] + "'/></a></div><div class='card-block'><h4 class='card-title'><a href='" + relatedUrls[t] + "'>" + relatedTitles[t] + "</a></h4></div></div></div>" : document.getElementById("related_items").innerHTML += "<div class='col-12 col-sm-4'><div class='card card-widget'><div class='card-img'><a href='" + relatedUrls[t] + "'><img src='" + relatedImage[t] + "' alt='" + relatedTitles[t] + "'/></a></div><div class='card-block'><h4 class='card-title'><a href='" + relatedUrls[t] + "'>" + relatedTitles[t] + "</a></h4></div></div></div>", t < relatedTitles.length - 1 ? t++ : t = 0, l++;
  relatedUrls.splice(0, relatedUrls.length), relatedTitles.splice(0, relatedTitles.length), relatedImage.splice(0, relatedImage.length)
}

var relatedTitles = new Array,
relatedImage = new Array,
relatedTitlesNum = 0,
relatedUrls = new Array;
