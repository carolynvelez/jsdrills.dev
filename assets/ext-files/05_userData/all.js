/*! FilamentGroup.com - v0.1.0 - 2015-10-02
* http://filamentgroup.com/
* Copyright (c) 2015 Filament Group */!function(a){"use strict";var b=a.document,c=function(a,d){var e=typeof a,f=[];if(a){if("string"===e&&0===a.indexOf("<")){var g=document.createElement("div");return g.innerHTML=a,c(g).children().each(function(){g.removeChild(this)})}if("function"===e)return c.ready(a);if("string"===e){if(d)return c(d).find(a);for(var h=0,i=b.querySelectorAll(a),j=i.length;j>h;h++)f[h]=i[h]}else f=f.concat(a)}else f.push(b);return f=c.extend(f,c.fn),f.selector=a,f};c.fn={},c.fn.each=function(a){for(var b=0,c=this.length;c>b;b++)a.call(this[b],b);return this},c.fn.find=function(a){var b,d=[];return this.each(function(){b=this.querySelectorAll(a);for(var c=0,e=b.length;e>c;c++)d=d.concat(b[c])}),c(d)},c.fn.children=function(){var a,b,d=[];return this.each(function(){for(a=this.children,b=-1;b++<a.length-1;)-1===c.inArray(a[b],d)&&d.push(a[b])}),c(d)},c.qualified="querySelectorAll"in b,c.qualify=function(a){return a&&c.qualified?a():a?void 0:c.qualified},c.extend=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c]);return a},c.inArray=function(a,b){for(var c=-1,d=0,e=b.length;e>d;d++)b.hasOwnProperty(d)&&b[d]===a&&(c=d);return c},c.ready=function(a){return d&&a&&c.qualified?a.call(document):a&&c.qualified?e.push(a):f(),[b]},c.fn.ready=function(a){return c.ready(a),this};var d=!1,e=[],f=function(){if(!d){for(;e.length;)e.shift().call(document);d=!0}};a.addEventListener||(a.addEventListener=function(b,c){return a.attachEvent("on"+b,c)}),a.addEventListener("DOMContentLoaded",f,!1),a.addEventListener("readystatechange",f,!1),a.addEventListener("load",f,!1),"complete"===b.readyState&&f(),a.shoestring=c}(this),function(){var a=function(){var a=!1;try{a=new XMLHttpRequest}catch(b){a=new ActiveXObject("Microsoft.XMLHTTP")}return function(){return a}}();shoestring.ajax=function(b,c){var d=a(),e=shoestring.ajax.settings;c&&shoestring.extend(e,c),b||(b=e.url),d&&b&&(d.open(e.method,b,e.async),d.onreadystatechange=function(){return 4!==d.readyState||200!==d.status&&304!==d.status?e.error(d.responseText,d.status,d):void e.success(d.responseText,d.status,d)},4!==d.readyState&&d.send(null))},shoestring.ajax.settings={success:function(){},error:function(){},method:"GET",async:!0,data:null}}(),function(){shoestring.get=function(a,b){return shoestring.ajax(a,{success:b})}}(),function(){shoestring.fn.load=function(a,b){var c=this,d=arguments,e=function(a){c.each(function(){shoestring(this).html(a)}),b&&b.apply(c,d)};return shoestring.ajax(a,{success:e}),this}}(),function(){shoestring.post=function(a,b,c){return shoestring.ajax(a,{data:b,method:"POST",success:c})}}(),function(a){shoestring.fn.data=function(b,c){return b!==a?c!==a?this.each(function(){this.shoestringData||(this.shoestringData={}),this.shoestringData[b]=c}):this[0].shoestringData&&this[0].shoestringData[b]:this[0].shoestringData}}(),function(a){shoestring.fn.removeData=function(b){return this.each(function(){b!==a&&this.shoestringData?(this.shoestringData[b]=a,delete this.shoestringData[b]):this[0].shoestringData={}})}}(),function(){window.$=shoestring}(),function(){shoestring.fn.add=function(a){var b=[];return this.each(function(){b.push(this)}),shoestring(a).each(function(){b.push(this)}),shoestring(b)}}(),function(a){shoestring.fn.addClass=function(b){var c=b.trim().split(" ");return this.each(function(){for(var b=0,d=c.length;d>b;b++)this.className===a||""!==this.className&&this.className.match(new RegExp("(^|\\s)"+c[b]+"($|\\s)"))||(this.className+=" "+c[b])})}}(),function(a){shoestring.fn.after=function(b){return("string"==typeof b||b.nodeType!==a)&&(b=shoestring(b)),this.each(function(a){for(var c=0,d=b.length;d>c;c++){var e=a>0?b[c].cloneNode(!0):b[c];this.parentNode.insertBefore(e,this),this.parentNode.insertBefore(this,e)}})},shoestring.fn.insertAfter=function(a){return this.each(function(){shoestring(a).after(this)})}}(),function(a){shoestring.fn.append=function(b){return("string"==typeof b||b.nodeType!==a)&&(b=shoestring(b)),this.each(function(a){for(var c=0,d=b.length;d>c;c++)this.appendChild(a>0?b[c].cloneNode(!0):b[c])})},shoestring.fn.appendTo=function(a){return this.each(function(){shoestring(a).append(this)})}}(),function(a){shoestring.fn.attr=function(b,c){var d="string"==typeof b;return c===a&&d?this[0].getAttribute(b):this.each(function(){if(d)this.setAttribute(b,c);else for(var a in b)b.hasOwnProperty(a)&&this.setAttribute(a,b[a])})}}(),function(a){shoestring.fn.before=function(b){return("string"==typeof b||b.nodeType!==a)&&(b=shoestring(b)),this.each(function(a){for(var c=0,d=b.length;d>c;c++)this.parentNode.insertBefore(a>0?b[c].cloneNode(!0):b[c],this)})},shoestring.fn.insertBefore=function(a){return this.each(function(){shoestring(a).before(this)})}}(),function(){shoestring.fn.closest=function(a){var b=[];return a?(this.each(function(){var c=this,d=0;shoestring(a).each(function(){c!==this||b.length||b.push(c)}),b.length||shoestring(a).each(function(){for(var a=0;c.parentElement&&(!d||d>a);)a++,c.parentElement===this?(b.push(c.parentElement),d=a):c=c.parentElement})}),shoestring(b)):shoestring(b)}}(),function(a){shoestring.fn.css=function(b,c){return"object"==typeof b?this.each(function(){for(var a in b)b.hasOwnProperty(a)&&(this.style[a]=b[a])}):c!==a?this.each(function(){this.style[b]=c}):window.getComputedStyle(this[0],b)}}(),function(){shoestring.fn.eq=function(a){return shoestring(this[a]?this[a]:[])}}(),function(){shoestring.fn.filter=function(a){var b=[],c=shoestring(a);return this.each(function(){if(!this.parentNode){var d=shoestring(document.createDocumentFragment());d[0].appendChild(this),c=shoestring(a,d)}shoestring.inArray(this,c)>-1&&b.push(this)}),shoestring(b)}}(),function(){shoestring.fn.first=function(){return this.eq(0)}}(),function(){shoestring.fn.get=function(a){return this[a]}}(),function(a){shoestring.fn.height=function(b){return b===a?this[0].offsetHeight:this.each(function(){this.style.height=b})}}(),function(){shoestring.fn.html=function(a){if(a)return this.each(function(){this.innerHTML=a});var b="";return this.each(function(){b+=this.innerHTML})}}(),function(){shoestring.fn.is=function(a){var b=!1;return this.each(function(){shoestring.inArray(this,shoestring(a))>-1&&(b=!0)}),b}}(),function(){shoestring.fn.last=function(){return this.eq(this.length-1)}}(),function(){shoestring.fn.next=function(){var a,b=[];return this.each(function(){a=this.nextElementSibling,a&&(b=b.concat(a))}),shoestring(b)}}(),function(){shoestring.fn.not=function(a){var b=[];return this.each(function(){-1===shoestring.inArray(this,shoestring(a))&&b.push(this)}),shoestring(b)}}(),function(){shoestring.fn.offset=function(){return{top:this[0].offsetTop,left:this[0].offsetLeft}}}(),function(){shoestring.fn.parent=function(){var a,b=[];return this.each(function(){a=this.parentElement,a&&b.push(a)}),shoestring(b)}}(),function(){shoestring.fn.parents=function(a){var b=[];return this.each(function(){for(var c,d=this;d.parentElement&&!c;)d=d.parentElement,a?d===shoestring(a)[0]&&(c=!0,-1===shoestring.inArray(d,b)&&b.push(d)):-1===shoestring.inArray(d,b)&&b.push(d)}),shoestring(b)}}(),function(a){shoestring.fn.prepend=function(b){return("string"==typeof b||b.nodeType!==a)&&(b=shoestring(b)),this.each(function(a){for(var c=0,d=b.length;d>c;c++){var e=a>0?b[c].cloneNode(!0):b[c];this.firstChild?this.insertBefore(e,this.firstChild):this.appendChild(e)}})},shoestring.fn.prependTo=function(a){return this.each(function(){shoestring(a).prepend(this)})}}(),function(){shoestring.fn.prev=function(){var a,b=[];return this.each(function(){a=this.previousElementSibling,a&&(b=b.concat(a))}),shoestring(b)}}(),function(){shoestring.fn.prevAll=function(){var a=[];return this.each(function(){for(var b=this;b.previousElementSibling;)a=a.concat(b.previousElementSibling),b=b.previousElementSibling}),shoestring(a)}}(),function(a){shoestring.fn.prop=function(b,c){return b=shoestring.propFix[b]||b,c!==a?this.each(function(){this[b]=c}):this[0][b]},shoestring.propFix={"class":"className",contenteditable:"contentEditable","for":"htmlFor",readonly:"readOnly",tabindex:"tabIndex"}}(),function(){shoestring.fn.remove=function(){return this.each(function(){this.parentNode.removeChild(this)})}}(),function(){shoestring.fn.removeAttr=function(a){return this.each(function(){this.removeAttribute(a)})}}(),function(a){shoestring.fn.removeClass=function(b){var c=b.trim().split(" ");return this.each(function(){for(var b=0,d=c.length;d>b;b++)this.className!==a&&(this.className=this.className.replace(new RegExp("(^|\\s)"+c[b]+"($|\\s)","gmi")," "))})}}(),function(a){shoestring.fn.removeProp=function(b){var c=shoestring.propFix&&shoestring.propFix[c]||c;return this.each(function(){this[b]=a,delete this[b]})}}(),function(){shoestring.fn.replaceWith=function(a){"string"==typeof a&&(a=shoestring(a));var b=[];return this.each(function(c){for(var d=0,e=a.length;e>d;d++){var f=c>0?a[d].cloneNode(!0):a[d];this.parentNode.insertBefore(f,this),f.parentNode.removeChild(this),b.push(f)}}),shoestring(b)}}(),function(){shoestring.fn.siblings=function(){for(var a=[],b=this[0].parentNode.firstChild;b=b.nextSibling;)1===b.nodeType&&b!==this[0]&&a.push(b);return shoestring(a)}}(),function(a){shoestring.fn.width=function(b){return b===a?this[0].offsetWidth:this.each(function(){this.style.width=b})}}(),function(){shoestring.fn.wrapInner=function(a){return this.each(function(){var b=this.innerHTML;this.innerHTML="",shoestring(this).append(shoestring(a).html(b))})}}(),function(){shoestring.fn.bind=function(a,b){function c(a){return b.apply(this,[a].concat(a._args))}var d=a.split(" ");return this.each(function(){for(var a=0,b=d.length;b>a;a++)"addEventListener"in this?this.addEventListener(d[a],c,!1):this.attachEvent&&this.attachEvent("on"+d[a],c)})}}(),function(){shoestring.fn.live=function(a,b){function c(a){shoestring(e).each(function(){a.target===this&&b.apply(this,[a].concat(a._args))})}for(var d=a.split(" "),e=this.selector,f=0,g=d.length;g>f;f++)"addEventListener"in document?document.addEventListener(d[f],c,!1):document.attachEvent&&document.attachEvent("on"+d[f],c);return this}}(),function(){shoestring.fn.one=function(a,b){var c=a.split(" ");return this.each(function(){for(var a,d=0,e=c.length;e>d;d++){var f=c[d];"addEventListener"in this?(a=function(c){b.apply(this,[c].concat(c._args)),this.removeEventListener(f,a)},this.addEventListener(f,a,!1)):this.attachEvent&&(a=function(c){b.apply(this,[c].concat(c._args)),this.detachEvent("on"+f,a)},this.attachEvent("on"+f,a))}})}}(),function(){shoestring.fn.trigger=function(a,b){var c=a.split(" ");return this.each(function(){for(var a=0,d=c.length;d>a;a++)if(document.createEvent){var e=document.createEvent("Event");e.initEvent(c[a],!0,!0),e._args=b,this.dispatchEvent(e)}})}}(),function(){shoestring.fn.unbind=function(a,b){var c=a.split(" ");return this.each(function(){for(var a=0,d=c.length;d>a;a++)"removeEventListener"in this?this.removeEventListener(c[a],b):this.detachEvent&&this.detachEvent("on"+c[a],b)})}}(),function(a,b){a.tapHandling=!1;var c=function(c){return c.each(function(){function c(a){b(a.target).trigger("tap",[a,b(a.target).attr("href")]),a.stopImmediatePropagation()}function d(a){var b=a.originalEvent||a,c=b.touches||b.targetTouches;return c?[c[0].pageX,c[0].pageY]:null}function e(a){if(a.touches&&a.touches.length>1||a.targetTouches&&a.targetTouches.length>1)return!1;var b=d(a);j=b[0],i=b[1]}function f(a){if(!k){var b=d(a);b&&(Math.abs(i-b[1])>m||Math.abs(j-b[0])>m)&&(k=!0)}}function g(b){if(clearTimeout(h),h=setTimeout(function(){a.tapHandling=!1,k=!1},1e3),!(b.which&&b.which>1||b.shiftKey||b.altKey||b.metaKey||b.ctrlKey)){if(b.preventDefault(),k||a.tapHandling&&a.tapHandling!==b.type)return void(k=!1);a.tapHandling=b.type,c(b)}}var h,i,j,k,l=b(this),m=10;l.bind("touchstart MSPointerDown",e).bind("touchmove MSPointerMove",f).bind("touchend MSPointerUp",g).bind("click",g)})};if(b.event&&b.event.special)b.event.special.tap={add:function(){c(b(this),!0)},remove:function(){c(b(this),!1)}};else{var d=b.fn.bind;b.fn.bind=function(a){return/(^| )tap( |$)/.test(a)&&c(this),d.apply(this,arguments)}}}(this,shoestring),function(a){a.fn.collapsible=function(){return a(this).each(function(){var b=a(this),c=b.next().length?b.next():b.parent().next(),d=" (click to expand contents)",e=" (click to collapse contents)";b.addClass("collapsible-heading").append('<span class="collapsible-heading-status"></span>').wrapInner('<a href="#" class="collapsible-heading-toggle icontoggle-arrow"></a>'),c.addClass("collapsible-content"),b.bind("collapse",function(){a(this).addClass("collapsible-heading-collapsed").find(".collapsible-heading-toggle").attr("title",d).find(".collapsible-heading-status"),c.addClass("collapsible-content-collapsed").attr("aria-hidden",!0)}).bind("expand",function(){a(this).removeClass("collapsible-heading-collapsed").find(".collapsible-heading-toggle").attr("title",e).find(".collapsible-heading-status"),c.removeClass("collapsible-content-collapsed").attr("aria-hidden",!1)}).bind("tap",function(b){a(this).trigger(a(this).is(".collapsible-heading-collapsed")?"expand":"collapse"),b.preventDefault()}).trigger("collapse")})}}(shoestring),function(a){a(function(){a("html").addClass("enhanced-loaded"),a('<h2 id="navToggle">menu</h2>').insertBefore("#primaryNavigationWrap").collapsible(),a("#footerInterior h4").each(function(){a(this).next().is("ul")&&a(this).append('<span class="footer-section-preview"></span>').find(".footer-section-preview").collapsible()}),a("a").each(function(){var b=a(this).attr("href");0!==b.indexOf("#")&&0===a(this).closest(".tel").length&&a(this).bind("tap",function(){window.location.href=this.href})})})}(shoestring);