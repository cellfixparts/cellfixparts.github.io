!function a(s,o,l){function u(t,e){if(!o[t]){if(!s[t]){var n="function"==typeof require&&require;if(!e&&n)return n(t,!0);if(c)return c(t,!0);var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}var i=o[t]={exports:{}};s[t][0].call(i.exports,function(e){return u(s[t][1][e]||e)},i,i.exports,a,s,o,l)}return o[t].exports}for(var c="function"==typeof require&&require,e=0;e<l.length;e++)u(l[e]);return u}({1:[function(e,t,n){"use strict";var r;(r=e("prismjs/components/prism-core"))&&r.__esModule;e("prismjs/components/prism-clike"),e("prismjs/components/prism-markup"),e("prismjs/components/prism-markup-templating"),e("prismjs/components/prism-php"),e("prismjs/components/prism-php-extras"),e("prismjs/plugins/line-highlight/prism-line-highlight"),e("prismjs/plugins/line-numbers/prism-line-numbers")},{"prismjs/components/prism-clike":2,"prismjs/components/prism-core":3,"prismjs/components/prism-markup":5,"prismjs/components/prism-markup-templating":4,"prismjs/components/prism-php":7,"prismjs/components/prism-php-extras":6,"prismjs/plugins/line-highlight/prism-line-highlight":8,"prismjs/plugins/line-numbers/prism-line-numbers":9}],2:[function(e,t,n){Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/[a-z0-9_]+(?=\()/i,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/}},{}],3:[function(e,n,t){(function(e){var u="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},t=function(){var l=/\blang(?:uage)?-([\w-]+)\b/i,t=0,q=u.Prism={manual:u.Prism&&u.Prism.manual,disableWorkerMessageHandler:u.Prism&&u.Prism.disableWorkerMessageHandler,util:{encode:function(e){return e instanceof s?new s(e.type,q.util.encode(e.content),e.alias):"Array"===q.util.type(e)?e.map(q.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++t}),e.__id},clone:function(e,n){var t=q.util.type(e);switch(n=n||{},t){case"Object":if(n[q.util.objId(e)])return n[q.util.objId(e)];var r={};for(var i in n[q.util.objId(e)]=r,e)e.hasOwnProperty(i)&&(r[i]=q.util.clone(e[i],n));return r;case"Array":if(n[q.util.objId(e)])return n[q.util.objId(e)];r=[];return n[q.util.objId(e)]=r,e.forEach(function(e,t){r[t]=q.util.clone(e,n)}),r}return e}},languages:{extend:function(e,t){var n=q.util.clone(q.languages[e]);for(var r in t)n[r]=t[r];return n},insertBefore:function(n,e,t,r){var i=(r=r||q.languages)[n];if(2==arguments.length){for(var a in t=e)t.hasOwnProperty(a)&&(i[a]=t[a]);return i}var s={};for(var o in i)if(i.hasOwnProperty(o)){if(o==e)for(var a in t)t.hasOwnProperty(a)&&(s[a]=t[a]);s[o]=i[o]}return q.languages.DFS(q.languages,function(e,t){t===r[n]&&e!=n&&(this[e]=s)}),r[n]=s},DFS:function(e,t,n,r){for(var i in r=r||{},e)e.hasOwnProperty(i)&&(t.call(e,i,e[i],n||i),"Object"!==q.util.type(e[i])||r[q.util.objId(e[i])]?"Array"!==q.util.type(e[i])||r[q.util.objId(e[i])]||(r[q.util.objId(e[i])]=!0,q.languages.DFS(e[i],t,i,r)):(r[q.util.objId(e[i])]=!0,q.languages.DFS(e[i],t,null,r)))}},plugins:{},highlightAll:function(e,t){q.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,n){var r={callback:n,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};q.hooks.run("before-highlightall",r);for(var i,a=r.elements||e.querySelectorAll(r.selector),s=0;i=a[s++];)q.highlightElement(i,!0===t,r.callback)},highlightElement:function(e,t,n){for(var r,i,a=e;a&&!l.test(a.className);)a=a.parentNode;a&&(r=(a.className.match(l)||[,""])[1].toLowerCase(),i=q.languages[r]),e.className=e.className.replace(l,"").replace(/\s+/g," ")+" language-"+r,e.parentNode&&(a=e.parentNode,/pre/i.test(a.nodeName)&&(a.className=a.className.replace(l,"").replace(/\s+/g," ")+" language-"+r));var s={element:e,language:r,grammar:i,code:e.textContent};if(q.hooks.run("before-sanity-check",s),!s.code||!s.grammar)return s.code&&(q.hooks.run("before-highlight",s),s.element.textContent=s.code,q.hooks.run("after-highlight",s)),void q.hooks.run("complete",s);if(q.hooks.run("before-highlight",s),t&&u.Worker){var o=new Worker(q.filename);o.onmessage=function(e){s.highlightedCode=e.data,q.hooks.run("before-insert",s),s.element.innerHTML=s.highlightedCode,n&&n.call(s.element),q.hooks.run("after-highlight",s),q.hooks.run("complete",s)},o.postMessage(JSON.stringify({language:s.language,code:s.code,immediateClose:!0}))}else s.highlightedCode=q.highlight(s.code,s.grammar,s.language),q.hooks.run("before-insert",s),s.element.innerHTML=s.highlightedCode,n&&n.call(e),q.hooks.run("after-highlight",s),q.hooks.run("complete",s)},highlight:function(e,t,n){var r={code:e,grammar:t,language:n};return q.hooks.run("before-tokenize",r),r.tokens=q.tokenize(r.code,r.grammar),q.hooks.run("after-tokenize",r),s.stringify(q.util.encode(r.tokens),r.language)},matchGrammar:function(e,t,n,r,i,a,s){var o=q.Token;for(var l in n)if(n.hasOwnProperty(l)&&n[l]){if(l==s)return;var u=n[l];u="Array"===q.util.type(u)?u:[u];for(var c=0;c<u.length;++c){var p=u[c],g=p.inside,d=!!p.lookbehind,m=!!p.greedy,h=0,f=p.alias;if(m&&!p.pattern.global){var b=p.pattern.toString().match(/[imuy]*$/)[0];p.pattern=RegExp(p.pattern.source,b+"g")}p=p.pattern||p;for(var y=r,k=i;y<t.length;k+=t[y].length,++y){var v=t[y];if(t.length>e.length)return;if(!(v instanceof o)){if(m&&y!=t.length-1){if(p.lastIndex=k,!(N=p.exec(e)))break;for(var w=N.index+(d?N[1].length:0),P=N.index+N[0].length,S=y,_=k,A=t.length;S<A&&(_<P||!t[S].type&&!t[S-1].greedy);++S)(_+=t[S].length)<=w&&(++y,k=_);if(t[y]instanceof o)continue;j=S-y,v=e.slice(k,_),N.index-=k}else{p.lastIndex=0;var N=p.exec(v),j=1}if(N){d&&(h=N[1]?N[1].length:0);P=(w=N.index+h)+(N=N[0].slice(h)).length;var x=v.slice(0,w),C=v.slice(P),E=[y,j];x&&(++y,k+=x.length,E.push(x));var O=new o(l,g?q.tokenize(N,g):N,f,N,m);if(E.push(O),C&&E.push(C),Array.prototype.splice.apply(t,E),1!=j&&q.matchGrammar(e,t,n,y,k,!0,l),a)break}else if(a)break}}}}},tokenize:function(e,t,n){var r=[e],i=t.rest;if(i){for(var a in i)t[a]=i[a];delete t.rest}return q.matchGrammar(e,r,t,0,0,!1),r},hooks:{all:{},add:function(e,t){var n=q.hooks.all;n[e]=n[e]||[],n[e].push(t)},run:function(e,t){var n=q.hooks.all[e];if(n&&n.length)for(var r,i=0;r=n[i++];)r(t)}}},s=q.Token=function(e,t,n,r,i){this.type=e,this.content=t,this.alias=n,this.length=0|(r||"").length,this.greedy=!!i};if(s.stringify=function(t,n,e){if("string"==typeof t)return t;if("Array"===q.util.type(t))return t.map(function(e){return s.stringify(e,n,t)}).join("");var r={type:t.type,content:s.stringify(t.content,n,e),tag:"span",classes:["token",t.type],attributes:{},language:n,parent:e};if(t.alias){var i="Array"===q.util.type(t.alias)?t.alias:[t.alias];Array.prototype.push.apply(r.classes,i)}q.hooks.run("wrap",r);var a=Object.keys(r.attributes).map(function(e){return e+'="'+(r.attributes[e]||"").replace(/"/g,"&quot;")+'"'}).join(" ");return"<"+r.tag+' class="'+r.classes.join(" ")+'"'+(a?" "+a:"")+">"+r.content+"</"+r.tag+">"},!u.document)return u.addEventListener&&(q.disableWorkerMessageHandler||u.addEventListener("message",function(e){var t=JSON.parse(e.data),n=t.language,r=t.code,i=t.immediateClose;u.postMessage(q.highlight(r,q.languages[n],n)),i&&u.close()},!1)),u.Prism;var e=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return e&&(q.filename=e.src,q.manual||e.hasAttribute("data-manual")||("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(q.highlightAll):window.setTimeout(q.highlightAll,16):document.addEventListener("DOMContentLoaded",q.highlightAll))),u.Prism}();void 0!==n&&n.exports&&(n.exports=t),void 0!==e&&(e.Prism=t)}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],4:[function(e,t,n){Prism.languages["markup-templating"]={},Object.defineProperties(Prism.languages["markup-templating"],{buildPlaceholders:{value:function(n,r,e,i){n.language===r&&(n.tokenStack=[],n.code=n.code.replace(e,function(e){if("function"==typeof i&&!i(e))return e;for(var t=n.tokenStack.length;-1!==n.code.indexOf("___"+r.toUpperCase()+t+"___");)++t;return n.tokenStack[t]=e,"___"+r.toUpperCase()+t+"___"}),n.grammar=Prism.languages.markup)}},tokenizePlaceholders:{value:function(p,g){if(p.language===g&&p.tokenStack){p.grammar=Prism.languages[g];var d=0,m=Object.keys(p.tokenStack),h=function(e){if(!(d>=m.length))for(var t=0;t<e.length;t++){var n=e[t];if("string"==typeof n||n.content&&"string"==typeof n.content){var r=m[d],i=p.tokenStack[r],a="string"==typeof n?n:n.content,s=a.indexOf("___"+g.toUpperCase()+r+"___");if(-1<s){++d;var o,l=a.substring(0,s),u=new Prism.Token(g,Prism.tokenize(i,p.grammar,g),"language-"+g,i),c=a.substring(s+("___"+g.toUpperCase()+r+"___").length);if(l||c?(o=[l,u,c].filter(function(e){return!!e}),h(o)):o=u,"string"==typeof n?Array.prototype.splice.apply(e,[t,1].concat(o)):n.content=o,d>=m.length)break}}else n.content&&"string"!=typeof n.content&&h(n.content)}};h(p.tokens)}}}})},{}],5:[function(e,t,n){Prism.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:/<!DOCTYPE[\s\S]+?>/i,cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/(^|[^\\])["']/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},Prism.languages.markup.tag.inside["attr-value"].inside.entity=Prism.languages.markup.entity,Prism.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),Prism.languages.xml=Prism.languages.markup,Prism.languages.html=Prism.languages.markup,Prism.languages.mathml=Prism.languages.markup,Prism.languages.svg=Prism.languages.markup},{}],6:[function(e,t,n){Prism.languages.insertBefore("php","variable",{this:/\$this\b/,global:/\$(?:_(?:SERVER|GET|POST|FILES|REQUEST|SESSION|ENV|COOKIE)|GLOBALS|HTTP_RAW_POST_DATA|argc|argv|php_errormsg|http_response_header)\b/,scope:{pattern:/\b[\w\\]+::/,inside:{keyword:/static|self|parent/,punctuation:/::|\\/}}})},{}],7:[function(e,t,n){!function(t){t.languages.php=t.languages.extend("clike",{keyword:/\b(?:and|or|xor|array|as|break|case|cfunction|class|const|continue|declare|default|die|do|else|elseif|enddeclare|endfor|endforeach|endif|endswitch|endwhile|extends|for|foreach|function|include|include_once|global|if|new|return|static|switch|use|require|require_once|var|while|abstract|interface|public|implements|private|protected|parent|throw|null|echo|print|trait|namespace|final|yield|goto|instanceof|finally|try|catch)\b/i,constant:/\b[A-Z0-9_]{2,}\b/,comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,lookbehind:!0}}),t.languages.insertBefore("php","string",{"shell-comment":{pattern:/(^|[^\\])#.*/,lookbehind:!0,alias:"comment"}}),t.languages.insertBefore("php","keyword",{delimiter:{pattern:/\?>|<\?(?:php|=)?/i,alias:"important"},variable:/\$+(?:\w+\b|(?={))/i,package:{pattern:/(\\|namespace\s+|use\s+)[\w\\]+/,lookbehind:!0,inside:{punctuation:/\\/}}}),t.languages.insertBefore("php","operator",{property:{pattern:/(->)[\w]+/,lookbehind:!0}}),t.languages.insertBefore("php","string",{"nowdoc-string":{pattern:/<<<'([^']+)'(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?\1;/,greedy:!0,alias:"string",inside:{delimiter:{pattern:/^<<<'[^']+'|[a-z_]\w*;$/i,alias:"symbol",inside:{punctuation:/^<<<'?|[';]$/}}}},"heredoc-string":{pattern:/<<<(?:"([^"]+)"(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?\1;|([a-z_]\w*)(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?\2;)/i,greedy:!0,alias:"string",inside:{delimiter:{pattern:/^<<<(?:"[^"]+"|[a-z_]\w*)|[a-z_]\w*;$/i,alias:"symbol",inside:{punctuation:/^<<<"?|[";]$/}},interpolation:null}},"single-quoted-string":{pattern:/'(?:\\[\s\S]|[^\\'])*'/,greedy:!0,alias:"string"},"double-quoted-string":{pattern:/"(?:\\[\s\S]|[^\\"])*"/,greedy:!0,alias:"string",inside:{interpolation:null}}}),delete t.languages.php.string;var e={pattern:/{\$(?:{(?:{[^{}]+}|[^{}]+)}|[^{}])+}|(^|[^\\{])\$+(?:\w+(?:\[.+?]|->\w+)*)/,lookbehind:!0,inside:{rest:t.languages.php}};t.languages.php["heredoc-string"].inside.interpolation=e,t.languages.php["double-quoted-string"].inside.interpolation=e,t.hooks.add("before-tokenize",function(e){if(/(?:<\?php|<\?)/gi.test(e.code)){t.languages["markup-templating"].buildPlaceholders(e,"php",/(?:<\?php|<\?)[\s\S]*?(?:\?>|$)/gi)}}),t.hooks.add("after-tokenize",function(e){t.languages["markup-templating"].tokenizePlaceholders(e,"php")})}(Prism)},{}],8:[function(e,t,n){!function(){if("undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector){var t,h=function(){if(void 0===t){var e=document.createElement("div");e.style.fontSize="13px",e.style.lineHeight="1.5",e.style.padding=0,e.style.border=0,e.innerHTML="&nbsp;<br />&nbsp;",document.body.appendChild(e),t=38===e.offsetHeight,document.body.removeChild(e)}return t},s=0;Prism.hooks.add("before-sanity-check",function(e){var t=e.element.parentNode,n=t&&t.getAttribute("data-line");if(t&&n&&/pre/i.test(t.nodeName)){var r=0;i(".line-highlight",t).forEach(function(e){r+=e.textContent.length,e.parentNode.removeChild(e)}),r&&/^( \n)+$/.test(e.code.slice(-r))&&(e.code=e.code.slice(0,-r))}}),Prism.hooks.add("complete",function e(t){var n=t.element.parentNode,r=n&&n.getAttribute("data-line");if(n&&r&&/pre/i.test(n.nodeName)){clearTimeout(s);var i=Prism.plugins.lineNumbers,a=t.plugins&&t.plugins.lineNumbers;f(n,"line-numbers")&&i&&!a?Prism.hooks.add("line-numbers",e):(o(n,r),s=setTimeout(l,1))}}),window.addEventListener("hashchange",l),window.addEventListener("resize",function(){var e=document.querySelectorAll("pre[data-line]");Array.prototype.forEach.call(e,function(e){o(e)})})}function i(e,t){return Array.prototype.slice.call((t||document).querySelectorAll(e))}function f(e,t){return t=" "+t+" ",-1<(" "+e.className+" ").replace(/[\n\t]/g," ").indexOf(t)}function o(e,t,n){for(var r,i=(t="string"==typeof t?t:e.getAttribute("data-line")).replace(/\s+/g,"").split(","),a=+e.getAttribute("data-line-offset")||0,s=(h()?parseInt:parseFloat)(getComputedStyle(e).lineHeight),o=f(e,"line-numbers"),l=0;r=i[l++];){var u=r.split("-"),c=+u[0],p=+u[1]||c,g=e.querySelector('.line-highlight[data-range="'+r+'"]')||document.createElement("div");if(g.setAttribute("aria-hidden","true"),g.setAttribute("data-range",r),g.className=(n||"")+" line-highlight",o&&Prism.plugins.lineNumbers){var d=Prism.plugins.lineNumbers.getLine(e,c),m=Prism.plugins.lineNumbers.getLine(e,p);d&&(g.style.top=d.offsetTop+"px"),m&&(g.style.height=m.offsetTop-d.offsetTop+m.offsetHeight+"px")}else g.setAttribute("data-start",c),c<p&&g.setAttribute("data-end",p),g.style.top=(c-a-1)*s+"px",g.textContent=new Array(p-c+2).join(" \n");o?e.appendChild(g):(e.querySelector("code")||e).appendChild(g)}}function l(){var e=location.hash.slice(1);i(".temporary.line-highlight").forEach(function(e){e.parentNode.removeChild(e)});var t=(e.match(/\.([\d,-]+)$/)||[,""])[1];if(t&&!document.getElementById(e)){var n=e.slice(0,e.lastIndexOf(".")),r=document.getElementById(n);r&&(r.hasAttribute("data-line")||r.setAttribute("data-line",""),o(r,t,"temporary "),document.querySelector(".temporary.line-highlight").scrollIntoView())}}}()},{}],9:[function(e,t,n){!function(){if("undefined"!=typeof self&&self.Prism&&self.document){var s="line-numbers",o=/\n(?!$)/g,l=function(e){var t=u(e)["white-space"];if("pre-wrap"===t||"pre-line"===t){var n=e.querySelector("code"),r=e.querySelector(".line-numbers-rows"),i=e.querySelector(".line-numbers-sizer"),a=n.textContent.split(o);i||((i=document.createElement("span")).className="line-numbers-sizer",n.appendChild(i)),i.style.display="block",a.forEach(function(e,t){i.textContent=e||"\n";var n=i.getBoundingClientRect().height;r.children[t].style.height=n+"px"}),i.textContent="",i.style.display="none"}},u=function(e){return e?window.getComputedStyle?getComputedStyle(e):e.currentStyle||null:null};window.addEventListener("resize",function(){Array.prototype.forEach.call(document.querySelectorAll("pre."+s),l)}),Prism.hooks.add("complete",function(e){if(e.code){var t=e.element.parentNode,n=/\s*\bline-numbers\b\s*/;if(t&&/pre/i.test(t.nodeName)&&(n.test(t.className)||n.test(e.element.className))&&!e.element.querySelector(".line-numbers-rows")){n.test(e.element.className)&&(e.element.className=e.element.className.replace(n," ")),n.test(t.className)||(t.className+=" line-numbers");var r,i=e.code.match(o),a=i?i.length+1:1,s=new Array(a+1);s=s.join("<span></span>"),(r=document.createElement("span")).setAttribute("aria-hidden","true"),r.className="line-numbers-rows",r.innerHTML=s,t.hasAttribute("data-start")&&(t.style.counterReset="linenumber "+(parseInt(t.getAttribute("data-start"),10)-1)),e.element.appendChild(r),l(t),Prism.hooks.run("line-numbers",e)}}}),Prism.hooks.add("line-numbers",function(e){e.plugins=e.plugins||{},e.plugins.lineNumbers=!0}),Prism.plugins.lineNumbers={getLine:function(e,t){if("PRE"===e.tagName&&e.classList.contains(s)){var n=e.querySelector(".line-numbers-rows"),r=parseInt(e.getAttribute("data-start"),10)||1,i=r+(n.children.length-1);t<r&&(t=r),i<t&&(t=i);var a=t-r;return n.children[a]}}}}}()},{}]},{},[1]);
