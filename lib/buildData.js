

module.exports = function (shareData, uniqueData, current){
  var pageData = JSON.parse(JSON.stringify(shareData));
  var pageData = extend (pageData, uniqueData);
  pageData.sidebar.pages.find(function (ele){
    if (ele.title == current) {
      ele.class = 'current';
    }
  });
  return pageData;
}




function extend(obj, src) {
  for (var key in src) {
    if (src.hasOwnProperty(key)) {
      obj[key] = src[key];
    }
  }
  return obj;
}
