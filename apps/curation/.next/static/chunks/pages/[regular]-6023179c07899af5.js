(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[493],{2826:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[regular]",function(){return s(100)}])},9841:function(e,t,s){"use strict";var n=s(7458),r=s(9012),i=s(9678),a=s.n(i),l=s(2983);t.Z=function(){var e=r.D,t=(0,l.useState)(!1),s=t[0],i=t[1];return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"sidebar-toggler mr-lg-0 d-block fixed !top-[1rem] left-[0.75rem] mr-3 sm:left-[1.5rem] lg:hidden",children:(0,n.jsxs)("svg",{className:"sidebar-toggle-icon ".concat(s?"active":""),viewBox:"0 0 100 100",width:"35",onClick:function(){return i(!s)},children:[(0,n.jsx)("path",{className:"line top",d:"m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20"}),(0,n.jsx)("path",{className:"line middle",d:"m 70,50 h -40"}),(0,n.jsx)("path",{className:"line bottom",d:"m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20"})]})}),(0,n.jsx)("div",{className:"sidebar-overlay ".concat(s?"show":""),onClick:function(){return i(!1)}}),(0,n.jsx)("aside",{className:"sidebar block lg:hidden ".concat(s?"show":""),children:(0,n.jsx)("ul",{className:"sidebar-main-menu block lg:hidden",children:e.map((function(e,t){return(0,n.jsx)("li",{children:(0,n.jsx)(a(),{href:e.url,passHref:!0,children:(0,n.jsx)("a",{className:"inline-block py-2 text-black transition-all duration-150 hover:text-primary dark:text-white dark:hover:text-darkmode-primary",children:e.name})})},"menu-".concat(t))}))})})]})}},4860:function(e,t,s){"use strict";var n=s(7458),r=s(3312),i=s(9153);t.Z=function(e){var t=e.resources;return(0,n.jsx)("div",{className:"row justify-center",children:t.map((function(e){return(0,n.jsx)("div",{className:"mb-10 xl:col-10",children:(0,n.jsxs)("div",{className:"group rounded-[4px] bg-gradient-to-r from-white to-[#ffffff00] transition duration-200 hover:bg-[#0596690f] dark:from-darkmode-body sm:flex",children:[(0,n.jsx)(i.Z,{loading:"lazy",src:"/resources/".concat(e.slug,".png"),fallback:"https://teamosis-sg.vercel.app/api/img?url=".concat(e.frontmatter.website),alt:"{resources.frontmatter.title}",width:160,height:100,className:"mr-8 max-w-[160px] rounded-[4px]"}),(0,n.jsxs)("div",{className:"mt-4 bg-transparent sm:mt-0",children:[(0,n.jsxs)("h3",{className:"h5 mb-[4px] flex items-center pt-2 font-medium",children:[e.frontmatter.title,(0,n.jsx)("a",{href:"".concat(e.frontmatter.website,"?ref=statichunt.com"),rel:"noopener noreferrer",target:"_blank",children:(0,n.jsx)("svg",{className:"ml-3 hidden text-primary group-hover:inline",width:"15",height:"16",viewBox:"0 0 13 14",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsxs)("g",{stroke:"currentColor",strokeWidth:"1.5",fill:"none",fillRule:"evenodd",children:[(0,n.jsx)("path",{d:"M9.6 4H4.2a2.4 2.4 0 00-2.4 2.4V10"}),(0,n.jsx)("path",{d:"M6.6 7l3-3-3-3m5.4 9v3H0"})]})})})]}),(0,n.jsx)("p",{className:"mb-3 text-sm text-text dark:text-light",children:e.frontmatter.description}),(0,n.jsx)("div",{className:"flex space-x-2",children:e.frontmatter.tool.map((function(e,t){return(0,n.jsx)("span",{className:"rounded border border-border px-2 py-[2px] text-xs",children:(0,r.OI)(e)},"tool-".concat(t))}))})]})]})},e.slug)}))})}},100:function(e,t,s){"use strict";s.r(t),s.d(t,{__N_SSG:function(){return y},default:function(){return S}});var n=s(7458),r=s(9841),i=s(1568),a=s(3312),l=s(8071),c=s(7285),o=s.n(c),d=s(6856),m=function(e){var t=e.isShow,s=e.isValue,r=e.handleSortTheme,i=e.handleClick,c=l.L;return(0,n.jsxs)("div",{className:"mb-8",children:[(0,n.jsxs)("h3",{onClick:i,className:"mb-2 flex cursor-pointer items-center justify-between py-1 pl-0 font-primary text-h6 font-medium lg:pl-3",children:["Sort by",(0,n.jsx)("span",{className:"mr-2 inline-block align-middle",children:t?(0,n.jsx)(d.nQU,{}):(0,n.jsx)(d._i7,{})})]}),(0,n.jsx)("div",{className:"sort-sidebar-buttons ".concat(!t&&"show"),children:c.map((function(e,t){return(0,n.jsxs)("button",{className:s===e.value?"active":void 0,value:e.value,onClick:function(t){return r(t,e.type)},children:[(0,n.jsx)(o(),{src:e.icon,alt:e.value,height:"17",width:"17",className:"mx-2 max-h-[17px] dark:invert"}),(0,n.jsx)("span",{className:"dark:invert",children:(0,a.OI)(e.value)})]},"button-".concat(t))}))})]})},h=s(6626),u=s(9232),x=s(363),f=s(5482),j=function(e){var t=e.data[0],s=t.frontmatter,i=t.content,l=s.title;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.Z,{}),(0,n.jsx)("section",{className:"section",children:(0,n.jsx)("div",{className:"container",children:(0,n.jsx)("div",{className:"row justify-center",children:(0,n.jsxs)("div",{className:"sm:col-10 md:col-9 lg:col-7",children:[(0,a.gI)(l,"h1","mb-8"),(0,a.gI)(i,"div","content")]})})})})]})},g=s(4860),p=function(e){var t=e.data,s=e.taxonomies[0].frontmatter,r=s.title,i=s.page_title;return(0,n.jsx)("section",{className:"section",children:(0,n.jsxs)("div",{className:"container",children:[(0,n.jsx)("div",{className:"row mb-8 justify-center",children:(0,n.jsx)("div",{className:"xl:col-10",children:(0,a.gI)(i||r,"h1")})}),(0,n.jsx)(g.Z,{resources:t})]})})},v=s(603),b=function(e){var t=e.statichuntThemes,s=e.tools,r=e.data[0],i=r.frontmatter,l=r.content,c=i.title;return(0,n.jsx)("section",{className:"section",children:(0,n.jsxs)("div",{className:"container",children:[(0,n.jsx)("div",{className:"row mb-8 justify-center",children:(0,n.jsxs)("div",{className:"col-10 text-center",children:[(0,a.gI)(c,"h1","mb-8"),(0,a.gI)(l,"div","content")]})}),(0,n.jsx)(v.Z,{themes:t,tools:s})]})})},N=s(1271),w=h.Zq,k=function(e){var t=e.data,s=e.taxonomies,r=e.tools,i=e.isIntro,l=s[0],c=l.frontmatter,d=l.content,m=c.title,h=c.page_title,u=c.icon,x=c.website,f=c.github_path,j=c.twitter_username,g=c.license,p=c.license_url,b=c.language;return(0,n.jsx)("main",{className:"main",children:(0,n.jsx)("section",{children:(0,n.jsxs)("div",{className:"container",children:[(0,n.jsxs)("div",{className:"mb-16 p-6 shadow ".concat(!i&&"hidden"),children:[(0,n.jsxs)("div",{className:"mb-5 flex",children:[(0,n.jsx)(o(),{className:"".concat(w.includes((0,a.lV)(m))?"dark:invert":""," mr-3"),src:u,alt:"".concat(m," icon"),height:"40",width:"40"}),(0,a.gI)(h||m,"h1","self-end")]}),(0,a.gI)(d,"p","mb-5"),(0,n.jsxs)("ul",{className:"meta-list",children:[x&&(0,n.jsxs)("li",{title:"Official Website",children:[(0,n.jsx)(N.diY,{}),(0,n.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:x,children:x})]}),f&&(0,n.jsxs)("li",{title:"GitHub Repository",children:[(0,n.jsx)(N.VnC,{}),(0,n.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/".concat(f),children:f})]}),j&&(0,n.jsxs)("li",{title:"Twitter Profile",children:[(0,n.jsx)(N.JOw,{}),(0,n.jsxs)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://twitter.com/".concat(j),children:["@",j]})]}),g&&(0,n.jsxs)("li",{title:"License",children:[(0,n.jsx)(N.sBu,{}),(0,n.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:p,children:g})]}),b&&(0,n.jsxs)("li",{title:"Language",children:[(0,n.jsx)(N.ssl,{}),b]})]})]}),(0,n.jsx)(v.Z,{themes:t,tools:r})]})})})},_=s(2983),y=!0,S=function(e){var t,s=e.slug,l=e.data,c=e.ssgSlug,o=e.taxonomies,d=e.tools,g=e.category,v=e.toolSlug,N=e.resources,w=e.statichuntThemes,y=null===(t=o[0])||void 0===t?void 0:t.frontmatter,S=y.title,I=y.meta_title,C=y.description,Z=y.image,T=y.noindex,V=y.canonical,O=h.rc,E=o[0].content,H=(0,_.useState)([]),B=H[0],F=H[1],L=(0,_.useState)(!0),P=L[0],G=L[1],M=(0,u.b)(l),R=(0,x.Z)(M,!0,s),W=R.currentTheme,X=R.handleSortTheme,q=R.isShow,z=R.isValue,A=R.defaultSort,D=R.handleClick;(0,_.useEffect)((function(){F([])}),[s]);var J=W.filter((function(e){return B.length?B.find((function(t){var s;return null===(s=e.frontmatter.category)||void 0===s?void 0:s.map((function(e){return(0,a.lV)(e)})).includes((0,a.lV)(t))})):A})),Q=g.map((function(e){return e.slug})).indexOf("others"),U=g.splice(Q,1)[0];return g.splice(g.length,0,U),(0,n.jsx)(f.Z,{title:S,description:C||E.slice(0,120),meta_title:I,image:Z,noindex:T,canonical:V,children:c.includes(s)?(0,n.jsxs)("div",{className:"flex",children:[(0,n.jsx)(i.Z,{sidebar:O,themes:M,slug:s,category:g,setArrayCategory:F,arrayCategory:B,setIsIntro:G,isIntro:P,children:(0,n.jsx)(m,{isShow:q,isValue:z,handleSortTheme:X,handleClick:D})}),(0,n.jsx)(k,{taxonomies:o,data:J,tools:d,isIntro:P})]}):v.includes(s)?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.Z,{}),(0,n.jsx)(p,{data:N,taxonomies:o})]}):"theme-by-us"===s?(0,n.jsx)(b,{statichuntThemes:w,tools:d,data:l}):(0,n.jsx)(j,{data:l})})}}},function(e){e.O(0,[319,87,82,145,621,482,552,774,888,179],(function(){return t=2826,e(e.s=t);var t}));var t=e.O();_N_E=t}]);