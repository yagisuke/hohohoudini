(this.webpackJsonphohohoudini=this.webpackJsonphohohoudini||[]).push([[0],{26:function(n,e,t){},27:function(n,e,t){},32:function(n,e,t){},33:function(n,e,t){},34:function(n,e,t){"use strict";t.r(e);var i=t(1),c=t(0),o=t.n(c),l=t(17),s=t.n(l),d=t(8),a=t(3);t(26),t(27);var j=function(){return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)("h1",{children:"Houdini Lab"}),Object(i.jsxs)("ul",{children:[Object(i.jsx)("li",{children:Object(i.jsx)(d.b,{to:"/hohohoudini/non_polyfill",children:"Non polyfill"})}),Object(i.jsx)("li",{children:Object(i.jsx)(d.b,{to:"/hohohoudini/add_polyfill",children:"Add polyfill"})})]})]})},r=t(11),h=t.p+"static/media/logo.7670cd18.svg";t(32);var p=function(){return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(r.a,{defer:!0,script:[{innerHTML:"\n    (async () => {\n      const needPolyfill = !('paintWorklet' in CSS)\n\n      if (needPolyfill) {\n        await import('https://unpkg.com/css-paint-polyfill')\n      }\n\n      await CSS.paintWorklet.addModule('https://unpkg.com/houdini-static-gradient/worklet.js')\n\n      if (needPolyfill) {\n        window.dispatchEvent(new Event('resize'))\n      }\n    })()\n  "}]}),Object(i.jsx)("div",{className:"App-contents",children:Object(i.jsx)("img",{src:h,className:"App-logo",alt:"logo"})}),Object(i.jsx)("ul",{children:Object(i.jsx)("li",{children:Object(i.jsx)(d.b,{to:"/hohohoudini/",children:"Back"})})})]})},b=t.p+"static/media/logo.7670cd18.svg";t(33);var u=function(){return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(r.a,{defer:!0,script:[{innerHTML:"\n    CSS.paintWorklet.addModule('https://unpkg.com/houdini-static-gradient/worklet.js');\n  "}]}),Object(i.jsx)("div",{className:"App-contents",children:Object(i.jsx)("img",{src:b,className:"App-logo",alt:"logo"})}),Object(i.jsx)("ul",{children:Object(i.jsx)("li",{children:Object(i.jsx)(d.b,{to:"/hohohoudini/",children:"Back"})})})]})},x=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,35)).then((function(e){var t=e.getCLS,i=e.getFID,c=e.getFCP,o=e.getLCP,l=e.getTTFB;t(n),i(n),c(n),o(n),l(n)}))};s.a.render(Object(i.jsx)(o.a.StrictMode,{children:Object(i.jsx)(d.a,{children:Object(i.jsxs)("div",{children:[Object(i.jsx)(a.a,{exact:!0,path:"/",component:j}),Object(i.jsx)(a.a,{exact:!0,path:"/non_polyfill",component:u}),Object(i.jsx)(a.a,{exact:!0,path:"/add_polyfill",component:p})]})})}),document.getElementById("root")),x()}},[[34,1,2]]]);
//# sourceMappingURL=main.9843b62a.chunk.js.map