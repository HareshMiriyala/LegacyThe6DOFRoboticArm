$(function(){function j(){$.getJSON(k+$.param(l),function(a){if(a&&a.gs&&a.kl)localStorage.gs=JSON.stringify(a.gs),localStorage.kl=JSON.stringify(a.kl),localStorage.cl=JSON.stringify(a.cl),localStorage.lu=g})}for(var a={},c=window.location.search.split(/\?|&/),b=0;b<c.length;b++)if(c[b]){var d=c[b].split(/=/);a[d[0]]=d[1]}var k=(a.d?"//service.amasvc.com":"//serviceama-a.akamaihd.net")+"/k?",l={p:"113642D0-6CCD-4F51-9795-A8A4AA7708C6",slot:a.slot>0?a.slot:73},g=(new Date).valueOf();if(typeof localStorage!=
"undefined"){var a=localStorage.gs,c=localStorage.kl,m=localStorage.cl,e=parseInt(localStorage.lu,10);if(a&&c&&e){for(var f,h=window,i=h.location.search.substr(1).split("&"),b=0;b<i.length;b++)d=i[b].split("="),d.shift()=="l"&&(f=decodeURIComponent(d.shift().replace(/\+/g," ")));f&&h.top.postMessage(JSON.stringify({gs:$.parseJSON(a),kl:$.parseJSON(c),cl:$.parseJSON(m)}),f)}(!a||!c||!e||e+36E5<g)&&j()}});