!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return o[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,o){n[e]=o},e.parcelRequired7c6=t);var r=t("h6c0i"),i=document.querySelector(".form"),l=document.querySelector("button");function a(e,o,n){return e=0,new Promise((function(){var t=Math.random()>.3;console.log(amount),console.log(o),console.log(n);for(var r=0;r<amount;r+=1)console.log(r),e+=1,o+=n,setTimeout((function(){if(o+=n,t)return u({position:e,delay:o});c({position:e,delay:o})}),o,n)}))}function u(e){var o=e.position,n=e.delay;r.Notify.success("✅ Fulfilled promise ".concat(o," in ").concat(n,"ms"))}function c(e){var o=e.position,n=e.delay;r.Notify.failure("❌ Rejected promise ".concat(o," in ").concat(n,"ms"))}console.dir(i),l.addEventListener("click",(function(e){e.preventDefault();var o=i.elements.delay;delay=Number(o.value);var n=i.elements.step;step=Number(n.value);var t=i.elements.amount;amount=Number(t.value),a(undefined,delay,step)})),a().then(u).catch(c)}();
//# sourceMappingURL=03-promises.4bbb70dc.js.map
