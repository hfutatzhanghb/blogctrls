!function(){var c,e;function t(){console.log("AdBlock is not enabled")}function n(){var c,e,t;console.log("Adblock is enabled"),c="adblock",e={step:"install"},t=window.location.protocol+"//statistic.csdn.net/",$.get(t+c,e);var n;function o(c,e){var t=document.createElement("div");t.innerHTML=c;var n=document.body.firstChild;document.body.insertBefore(t,n),e&&"function"==typeof e&&e()}(function(c){for(var e,t,n=document.cookie.split("; "),o=0;o<n.length;o++)if(n[o]&&(e=n[o].split("="))[0]===c){t=e[1];break}return t})("UserName")||o('<div class="check-adblock-bg">                  <div class="tip-box">                      <a href="https://passport.csdn.net/account/login" class="close">+</a>                      如要继续阅读全文，请将CSDN网站加入ADP<br/>白名单或登录网站。（<span id="check-adblock-time">3</span>秒后自动跳转）                      <a href="https://passport.csdn.net/account/login" class="login">登录</a>                  </div>              </div>',setInterval(function(){var c=$("#check-adblock-time").text();c=parseInt(c),0<--c?$("#check-adblock-time").text(c):location.href="https://passport.csdn.net/account/login"},1e3)),o('<div class="adblock"><img src="https://g.csdnimg.cn/check-adblock/1.0.0/img/monkey@2x.png"/><span>亲爱的用户，您使用了广告屏蔽软件，广告是CSDN向您免费提供服务与产品的重要支持，希望您将csdn.net加入AdBlock Plus<a class="check_a" href="https://bbs.csdn.net/topics/392458005" target="_blank">白名单</a>，感谢支持！</span><em class="check_close"><svg t="1539053811268" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7199" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"><defs><style type="text/css"></style></defs><path d="M512 438.378667L806.506667 143.893333a52.032 52.032 0 1 1 73.6 73.621334L585.621333 512l294.485334 294.485333a52.074667 52.074667 0 0 1-73.6 73.642667L512 585.621333 217.514667 880.128a52.053333 52.053333 0 1 1-73.621334-73.642667L438.378667 512 143.893333 217.514667a52.053333 52.053333 0 1 1 73.621334-73.621334L512 438.378667z" fill="#8a8a8a" p-id="7200"></path></svg></div>'),$(".check_close").length&&$(".check_close").on("click",function(c){c.stopPropagation(),$(this).parents(".adblock").remove(),"function"==typeof window.csdn.insertcallbackBlock&&window.csdn.insertcallbackBlock()}),(n=new Date).setDate(n.getDate()+7),document.cookie="c_adb=1; expires="+n.toGMTString()+"; domain=csdn.net; path=/","function"==typeof window.csdn.insertcallbackBlock&&window.csdn.insertcallbackBlock()}if(void 0===window.csdn&&(window.csdn={}),c="https://g.csdnimg.cn/check-adblock/1.1.1/css/check-adblock.css",(e=document.createElement("link")).rel="stylesheet",e.type="text/css",e.href=c,document.getElementsByTagName("head")[0].appendChild(e),"undefined"!=typeof fuckAdBlock||"undefined"!=typeof FuckAdBlock)n();else{var o=document.createElement("script");o.onload=function(){fuckAdBlock.onDetected(n),fuckAdBlock.onNotDetected(t)},o.onerror=function(){n()},o.type="text/javascript",o.src="https://g.csdnimg.cn/lib/fuckadblock/3.2.1/fuckadblock.min.js",document.head.appendChild(o)}}();