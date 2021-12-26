module.exports.function = function searchRecent (time) {
  const console = require('console');
  const http = require('http');
  const config = require('config');
  const dates = require('dates');

  let targetTime = convertExprToDateTime(time);

  let data = http.getUrl("https://nana-youtube.taehuu.cf/recent", {
    format: 'json'
  });

  if (!data.list) {
    throw "영상을 얻어오지 못했어요.";
  }

  let videoList = [];

  for (let i=0; i<data.list.length; ++i) {
    let video = data.list[i];

    if (targetTime) {
      let videoTime = dates.ZonedDateTime.parseDateTime(video.time).withZoneSameInstant('Asia/Seoul');
      if (targetTime.getDay() !== videoTime.getDay()) {
        continue;
      }
    }

    videoList.push({
      url: "https://www.youtube.com/watch?v=" + video.id,
      title: decode(video.title),
      thumbnail: video.img_url,
    })
  }

  return {
    video: videoList,
  };
}

function convertExprToDateTime(expr) {
  const dates = require('dates');

  if (!expr) {
    return null;
  }

  if (expr.date) {
    return dates.ZonedDateTime.fromDate(expr.date);
  }

  return null;
}

function decode(str) {
  return str
    .replace(new RegExp("&amp;", "g"), "&")
    .replace(new RegExp("&lt;", "g"), "<")
    .replace(new RegExp("&gt;", "g"), ">")
    .replace(new RegExp("&apos;", "g"), "\'")
    .replace(new RegExp("&quot;", "g"), "\"");
}module.exports.function = function searchRecent (time) {
  const console = require('console');
  const http = require('http');
  const config = require('config');
  const dates = require('dates');

  let targetTime = convertExprToDateTime(time);

  let data = http.getUrl("https://nana-youtube.taehuu.cf/recent", {
    format: 'json'
  });

  if (!data.list) {
    throw "영상을 얻어오지 못했어요.";
  }

  let videoList = [];

  for (let i=0; i<data.list.length; ++i) {
    let video = data.list[i];

    if (targetTime) {
      let videoTime = dates.ZonedDateTime.parseDateTime(video.time).withZoneSameInstant('Asia/Seoul');
      if (targetTime.getDay() !== videoTime.getDay()) {
        continue;
      }
    }

    videoList.push({
      url: "https://www.youtube.com/watch?v=" + video.id,
      title: decode(video.title),
      thumbnail: video.img_url,
    })
  }

  return {
    video: videoList,
  };
}

function convertExprToDateTime(expr) {
  const dates = require('dates');

  if (!expr) {
    return null;
  }

  if (expr.date) {
    return dates.ZonedDateTime.fromDate(expr.date);
  }

  return null;
}

function decode(str) {
  return str
    .replace(new RegExp("&amp;", "g"), "&")
    .replace(new RegExp("&lt;", "g"), "<")
    .replace(new RegExp("&gt;", "g"), ">")
    .replace(new RegExp("&apos;", "g"), "\'")
    .replace(new RegExp("&quot;", "g"), "\"");
}