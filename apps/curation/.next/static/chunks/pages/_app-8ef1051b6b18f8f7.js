(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{60:function(t,e,o){"use strict";o.d(e,{F:function(){return c},f:function(){return d}});var s=o(2983);const n=["light","dark"],r="(prefers-color-scheme: dark)",i="undefined"==typeof window,a=(0,s.createContext)(void 0),l={setTheme:t=>{},themes:[]},c=()=>{var t;return null!==(t=(0,s.useContext)(a))&&void 0!==t?t:l},d=t=>(0,s.useContext)(a)?s.createElement(s.Fragment,null,t.children):s.createElement(m,t),u=["light","dark"],m=({forcedTheme:t,disableTransitionOnChange:e=!1,enableSystem:o=!0,enableColorScheme:i=!0,storageKey:l="theme",themes:c=u,defaultTheme:d=(o?"system":"light"),attribute:m="data-theme",value:w,children:b,nonce:y})=>{const[v,k]=(0,s.useState)((()=>p(l,d))),[S,_]=(0,s.useState)((()=>p(l))),T=w?Object.values(w):c,A=(0,s.useCallback)((t=>{let s=t;if(!s)return;"system"===t&&o&&(s=g());const r=w?w[s]:s,a=e?h():null,l=document.documentElement;if("class"===m?(l.classList.remove(...T),r&&l.classList.add(r)):r?l.setAttribute(m,r):l.removeAttribute(m),i){const t=n.includes(d)?d:null,e=n.includes(s)?s:t;l.style.colorScheme=e}null==a||a()}),[]),C=(0,s.useCallback)((t=>{k(t);try{localStorage.setItem(l,t)}catch(t){}}),[t]),H=(0,s.useCallback)((e=>{const s=g(e);_(s),"system"===v&&o&&!t&&A("system")}),[v,t]);(0,s.useEffect)((()=>{const t=window.matchMedia(r);return t.addListener(H),H(t),()=>t.removeListener(H)}),[H]),(0,s.useEffect)((()=>{const t=t=>{t.key===l&&C(t.newValue||d)};return window.addEventListener("storage",t),()=>window.removeEventListener("storage",t)}),[C]),(0,s.useEffect)((()=>{A(null!=t?t:v)}),[t,v]);const x=(0,s.useMemo)((()=>({theme:v,setTheme:C,forcedTheme:t,resolvedTheme:"system"===v?S:v,themes:o?[...c,"system"]:c,systemTheme:o?S:void 0})),[v,C,t,S,o,c]);return s.createElement(a.Provider,{value:x},s.createElement(f,{forcedTheme:t,disableTransitionOnChange:e,enableSystem:o,enableColorScheme:i,storageKey:l,themes:c,defaultTheme:d,attribute:m,value:w,children:b,attrs:T,nonce:y}),b)},f=(0,s.memo)((({forcedTheme:t,storageKey:e,attribute:o,enableSystem:i,enableColorScheme:a,defaultTheme:l,value:c,attrs:d,nonce:u})=>{const m="system"===l,f="class"===o?`var d=document.documentElement,c=d.classList;c.remove(${d.map((t=>`'${t}'`)).join(",")});`:`var d=document.documentElement,n='${o}',s='setAttribute';`,p=a?n.includes(l)&&l?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${l}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",h=(t,e=!1,s=!0)=>{const r=c?c[t]:t,i=e?t+"|| ''":`'${r}'`;let l="";return a&&s&&!e&&n.includes(t)&&(l+=`d.style.colorScheme = '${t}';`),"class"===o?l+=e||r?`c.add(${i})`:"null":r&&(l+=`d[s](n,${i})`),l},g=t?`!function(){${f}${h(t)}}()`:i?`!function(){try{${f}var e=localStorage.getItem('${e}');if('system'===e||(!e&&${m})){var t='${r}',m=window.matchMedia(t);if(m.media!==t||m.matches){${h("dark")}}else{${h("light")}}}else if(e){${c?`var x=${JSON.stringify(c)};`:""}${h(c?"x[e]":"e",!0)}}${m?"":"else{"+h(l,!1,!1)+"}"}${p}}catch(e){}}()`:`!function(){try{${f}var e=localStorage.getItem('${e}');if(e){${c?`var x=${JSON.stringify(c)};`:""}${h(c?"x[e]":"e",!0)}}else{${h(l,!1,!1)};}${p}}catch(t){}}();`;return s.createElement("script",{nonce:u,dangerouslySetInnerHTML:{__html:g}})}),(()=>!0)),p=(t,e)=>{if(i)return;let o;try{o=localStorage.getItem(t)||void 0}catch(t){}return o||e},h=()=>{const t=document.createElement("style");return t.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(t),()=>{window.getComputedStyle(document.body),setTimeout((()=>{document.head.removeChild(t)}),1)}},g=t=>(t||(t=window.matchMedia(r)),t.matches?"dark":"light")},3275:function(t,e,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return o(9903)}])},9903:function(t,e,o){"use strict";o.r(e),o.d(e,{default:function(){return w}});var s=o(2641),n=o(7458),r=o(6626),i=JSON.parse('{"R":{"k":{"T":"Plus+Jakarta+Sans:wght@500;700"}}}'),a=o(2983),l=JSON.parse('[{"frontmatter":{"title":"Amazon S3","website":"https://aws.amazon.com/s3/","description":"Store and retrieve any amount of data from anywhere","draft":false,"tool":["Hosting"]},"content":"","slug":"amazon-s3"},{"frontmatter":{"title":"AWS Amplify Console","website":"https://aws.amazon.com/amplify/console/","description":"Build, deploy, and host cloud-powered modern web apps","draft":false,"tool":["Hosting"]},"content":"","slug":"aws-amplify-console"},{"frontmatter":{"title":"Azure Storage","website":"https://azure.microsoft.com/en-us/services/storage/","description":"Azure Storage now offers static website hosting, enabling you to deploy cost-effective and scalable modern web applications.","draft":false,"tool":["Hosting"]},"content":"","slug":"azure-storage"},{"frontmatter":{"title":"Basin","website":"https://usebasin.com/","description":"Process, deliver, and securely store your submission data","draft":false,"tool":["Form"]},"content":"","slug":"basin"},{"frontmatter":{"title":"Bonsai","website":"https://bonsai.io/","description":"Integrate powerful search functionality into your applications, without ever having to set up or manage servers.","draft":false,"tool":["Search"]},"content":"","slug":"bonsai"},{"frontmatter":{"title":"CloudCannon","website":"http://cloudcannon.com/","description":"CloudCannon is a Git-based content management system (CMS) for Jamstack-powered websites. ","draft":false,"tool":["Hosting"]},"content":"","slug":"cloudcannon"},{"frontmatter":{"title":"Cloudflare Workers Sites","website":"https://workers.cloudflare.com/sites","description":"Build blazing fast websites by seamlessly deploying static assets alongside your APIs and application code.","draft":false,"tool":["Hosting"]},"content":"","slug":"cloudflare-workers-sites"},{"frontmatter":{"title":"CloudFlare","website":"https://www.cloudflare.com/","description":"Leverage CloudFlare\u2019s global network to serve lightning-fast DNS; Distribute your content around the world so it\u2019s closer to your visitors.","draft":false,"tool":["Hosting"]},"content":"","slug":"cloudflare"},{"frontmatter":{"title":"Cloudfront","website":"https://aws.amazon.com/cloudfront/","description":"Fast, highly secure and programmable content delivery network (CDN)","draft":false,"tool":["Hosting"]},"content":"","slug":"cloudfront"},{"frontmatter":{"title":"CloudSh Search","website":"https://cloudsh.com/","description":"Powerful search for your website with a few lines of JavaScript.","draft":false,"tool":["Search"]},"content":"","slug":"cloudsh-search"},{"frontmatter":{"title":"Codeship","website":"https://codeship.com/","description":"Continuous Integration and Delivery to Automate your development and deployment workflow","draft":false,"tool":["Hosting"]},"content":"","slug":"codeship"},{"frontmatter":{"title":"Commento","website":"https://commento.io/","description":"Commento is an open source discussion platform developed in Go. You can host the Go binary on your server. Unlike...","draft":false,"tool":["Feedback"]},"content":"","slug":"commento"},{"frontmatter":{"title":"Cookiebot","website":"https://www.cookiebot.com/","description":"We have made one part of the GDPR simple - cookies and online tracking.","draft":false,"tool":["Helper"]},"content":"","slug":"cookiebot"},{"frontmatter":{"title":"Digital Ocean App Platform","website":"https://www.digitalocean.com/products/app-platform/","description":"Build, deploy, and scale apps quickly using a simple, fully managed solution. We\u2019ll handle the infrastructure, app runtimes and dependencies, so that you can push code to production in just a few clicks.","draft":false,"tool":["Hosting"]},"content":"","slug":"digital-ocean"},{"frontmatter":{"title":"Disqus","website":"https://disqus.com/","description":"Global comment system that improves discussion on websites and connects conversations across the web.","draft":false,"tool":["Feedback"]},"content":"","slug":"disqus"},{"frontmatter":{"title":"EasyCron","website":"https://www.easycron.com/","description":"EasyCron is an online cron job service.","draft":false,"tool":["Helper"]},"content":"","slug":"easycron"},{"frontmatter":{"title":"Elastic Path","website":"https://www.elasticpath.com/technologies/JAMstack-commerce","description":"eCommerce API for developers.","draft":false,"tool":["Ecommerce"]},"content":"","slug":"elastic-path"},{"frontmatter":{"title":"fabform.io","website":"https://fabform.io/","description":"A anti spam forms backend for smart developers. Setup form endpoints for static websites with ease.","draft":false,"tool":["Form"]},"content":"","slug":"fabform"},{"frontmatter":{"title":"Firebase Hosting","website":"https://firebase.google.com/docs/hosting/","description":"Firebase Hosting provides fast and secure static hosting for your web app.","draft":false,"tool":["Hosting"]},"content":"","slug":"firebase-hosting"},{"frontmatter":{"title":"Forge","website":"https://getforge.com/","description":"Static Web Hosting Made Simple","draft":false,"tool":["Hosting"]},"content":"","slug":"forge"},{"frontmatter":{"title":"Formcake","website":"https://formcake.com/","description":"A form backend built for developers: Zapier integrations, zero dependencies, a simple API, and unlimited forms.","draft":false,"tool":["Form"]},"content":"","slug":"formcake"},{"frontmatter":{"title":"Formcarry","website":"https://formcarry.com/","description":"Turn your HTML <form> to something completely functional.Get email notifications, upload files, integrate with other apps.3 minutes to setup and free to use.","draft":false,"tool":["Form"]},"content":"","slug":"formcarry"},{"frontmatter":{"title":"FormKeep","website":"https://formkeep.com/","description":"Build any kind of form in minutes. The only all-in-one form backend.","draft":false,"tool":["Form"]},"content":"","slug":"formkeep"},{"frontmatter":{"title":"FuseJs","website":"http://fusejs.io/","description":"Lightweight fuzzy-search, in JavaScript","draft":false,"tool":["Search"]},"content":"","slug":"fusejs"},{"frontmatter":{"title":"Gatsby","website":"https://www.gatsbyjs.org/","description":"Transform plain text into dynamic blogs and websites using the latest web technologies. A React.js static site generator.","draft":false,"tool":["Hosting"]},"content":"","slug":"gatsby"},{"frontmatter":{"title":"Getform","website":"https://getform.io/","description":"Form backend platform for designers and developers. Setup your form endpoints for your static site within minutes and expand your","draft":false,"tool":["Form"]},"content":"","slug":"getform"},{"frontmatter":{"title":"Github Pages","website":"https://pages.github.com/","description":"GitHub Pages allows you to publish static websites for free, and supports custom domains.","draft":false,"tool":["Hosting"]},"content":"","slug":"github-pages"},{"frontmatter":{"title":"Gitlab Pages","website":"http://pages.gitlab.io/","description":"Use with any static website generator. Add multiple custom domains and secure them with your own TLS certificates. Create custom error pages.","draft":false,"tool":["Hosting"]},"content":"","slug":"gitlab-pages"},{"frontmatter":{"title":"Google Cloud Functions","website":"https://cloud.google.com/functions/","description":" Run your code in the cloud","draft":false,"tool":["Hosting"]},"content":"","slug":"google-cloud-functions"},{"frontmatter":{"title":"Google Cloud Storage","website":"https://cloud.google.com/storage/","description":"Standard Storage provides the highest level of durability, availability and performance of all Google Cloud Storage services. It\u2019s specifically designed for use cases requiring low latency and frequent data access, such as website content distribution and video streaming. Standard storage is all about performance.","draft":false,"tool":["Hosting"]},"content":"","slug":"google-cloud-storage"},{"frontmatter":{"title":"Harness","website":"https://harness.io/","description":"Harness is the first Continuous Delivery-as-a-Service platform that uses Machine Learning to simplify the entire process of delivering code from artifact into production \u2013 quickly, safely, securely, and repeatably.","draft":false,"tool":["Hosting"]},"content":"","slug":"harness"},{"frontmatter":{"title":"Heroku","website":"https://www.heroku.com/","description":"A platform as a service (PaaS) that enables developers to build and run applications entirely in the cloud.","draft":false,"tool":["Hosting"]},"content":"","slug":"heroku"},{"frontmatter":{"title":"Hugo support in Atom","website":"https://atom.io/packages/language-hugo","description":"Hugo grammar, snippets and shortcodes","draft":false,"tool":["Helper"]},"content":"","slug":"hugo-support-atom"},{"frontmatter":{"title":"Indemandly","website":"https://indemandly.com/","description":"Lightning fast customer messaging. Chat to your website visitors in real-time, manage leads, and increase sales - all with indemandly","draft":false,"tool":["Chat"]},"content":"","slug":"indemandly"},{"frontmatter":{"title":"Isso","website":"https://posativ.org/isso/","description":"A lightweight commenting server written in Python and JavaScript. It aims to be a drop-in replacement for Disqus.","draft":false,"tool":["Feedback"]},"content":"","slug":"isso"},{"frontmatter":{"title":"Iubenda","website":"https://www.iubenda.com/en/","description":"Attorney-level solutions to make your websites and apps compliant with the law across multiple countries and legislations","draft":false,"tool":["Helper"]},"content":"","slug":"iubenda"},{"frontmatter":{"title":"Jekyll Cheatsheet","website":"https://devhints.io/jekyll","description":"Quick reference for Jekyll","draft":false,"tool":["Helper"]},"content":"","slug":"jekyll-cheatsheet"},{"frontmatter":{"title":"Kickster","website":"http://kickster.nielsenramon.com/","description":"Worry-free deploying to GitHub Pages using Jekyll","draft":false,"tool":["Helper"]},"content":"","slug":"kickster"},{"frontmatter":{"title":"Knownly","website":"https://www.knownly.net/","description":"Publish your website in under 2 minutes without a webserver","draft":false,"tool":["Hosting"]},"content":"","slug":"knownly"},{"frontmatter":{"title":"Kwes","website":"https://kwes.io/","description":"The most revolutionary form service for web agencies.","draft":false,"tool":["Form"]},"content":"","slug":"kwes"},{"frontmatter":{"title":"Layer0","website":"https://www.layer0.co/","description":"All-in-one Jamstack platform to develop, deploy, preview, split test and monitor your headless frontend.","draft":false,"tool":["Hosting"]},"content":"","slug":"layer0"},{"frontmatter":{"title":"Learn TOML","website":"https://learnxinyminutes.com/docs/toml/","description":"Syntax memo for TOML","draft":false,"tool":["Helper"]},"content":"","slug":"learn-toml"},{"frontmatter":{"title":"Learn YAML","website":"https://learnxinyminutes.com/docs/yaml/","description":"Syntax memo for YAML","draft":false,"tool":["Helper"]},"content":"","slug":"learn-yaml"},{"frontmatter":{"title":"List.js","website":"http://www.listjs.com/","description":"Vanilla JS Search, filter and sort for your HTML","draft":false,"tool":["Search"]},"content":"","slug":"listjs"},{"frontmatter":{"title":"Lokl","website":"https://lokl.dev/","description":"Lokl is a simple, optimized local environment for using WordPress as a static site generator.","draft":false,"tool":["Hosting"]},"content":"","slug":"lokl"},{"frontmatter":{"title":"LunrJs","website":"http://lunrjs.com/","description":"Lunr.js is a small, full-text search library for use in the browse.","draft":false,"tool":["Search"]},"content":"","slug":"lunrjs"},{"frontmatter":{"title":"Lyket","website":"https://lyket.dev","description":"Instantly add clap/like/vote buttons to any website.","draft":false,"tool":["Feedback"]},"content":"","slug":"lyket"},{"frontmatter":{"title":"Markdown Guide","website":"https://www.markdownguide.org/","description":"Open-source reference guide that explains how to use Markdown","draft":false,"tool":["Helper"]},"content":"","slug":"markdown-guide"},{"frontmatter":{"title":"MeiliSearch","website":"https://www.meilisearch.com/","description":"Next generation search API","draft":false,"tool":["Search"]},"content":"","slug":"meilisearch"},{"frontmatter":{"title":"Microsoft Azure functions","website":"https://azure.microsoft.com/en-us/services/functions/","description":"Run event-driven functions on demand","draft":false,"tool":["Hosting"]},"content":"","slug":"microsoft-azure-functions"},{"frontmatter":{"title":"Muut","website":"https://muut.com/","description":"The complete discussion system for your site Muut powers lively discussions for millions of sites, making users happier and more likely...","draft":false,"tool":["Feedback"]},"content":"","slug":"muut"},{"frontmatter":{"title":"Netlify Forms","website":"https://www.netlify.com/products/forms/","description":"Built-in form handling on building time by parsing HTML files directly at deploy time.","draft":false,"tool":["Form"]},"content":"","slug":"netlify-forms"},{"frontmatter":{"title":"Netlify Functions","website":"https://functions.netlify.com/","description":"Examples and Tutorials on using Lambda functions on Netlify","draft":false,"tool":["Helper"]},"content":"","slug":"netlify-functions"},{"frontmatter":{"title":"Netlify","website":"https://www.netlify.com/","description":"All the features developers need right out of the box: Global CDN, Continuous Deployment, one click HTTPS and more","draft":false,"tool":["Hosting"]},"content":"","slug":"netlify"},{"frontmatter":{"title":"Osana","website":"https://www.osano.com/cookieconsent","description":"The original free open source cookie consent popup. More than 100 Billion cookie consents served since 2016.","draft":false,"tool":["Helper"]},"content":"","slug":"osana"},{"frontmatter":{"title":"Pageclip","website":"https://pageclip.co/","description":"Collect info from users without a server \u2014 Pageclip is your server. Lead capture forms, surveys, newsletter forms, contact forms","draft":false,"tool":["Form"]},"content":"","slug":"pageclip"},{"frontmatter":{"title":"Paperbits","website":"https://paperbits.io","description":"Paperbits - open-source drag and drop content builder for web apps. Developers will integrate it into their product to empower","draft":false,"tool":["Helper"]},"content":"","slug":"paperbits"},{"frontmatter":{"title":"ParcelJS","website":"https://parceljs.org/","description":"Blazing fast bundle timesParcel uses worker processes to enable multicore compilation, and has a filesystem cache for fast rebuilds...","draft":false,"tool":["Helper"]},"content":"","slug":"parceljs"},{"frontmatter":{"title":"Remarkbox","website":"https://www.remarkbox.com/","description":"Remarkbox offers a comment system to help engage readers with your content.","draft":false,"tool":["Feedback"]},"content":"","slug":"remarkbox"},{"frontmatter":{"title":"Render","website":"https://render.com/","description":"Render is a modern cloud provider that makes it trivial and instant to deploy your code in production. You can deploy anything on Render, from simple static sites and cron jobs to databases and Dockerized private services.","draft":false,"tool":["Hosting"]},"content":"","slug":"render"},{"frontmatter":{"title":"Schnack","website":"https://schnack.cool/","description":"Schnack is a simple Disqus-like drop-in commenting system written in JavaScript.","draft":false,"tool":["Feedback"]},"content":"","slug":"schnack"},{"frontmatter":{"title":"Snipcart","website":"https://snipcart.com/","description":"Snipcart allows payment processing, shipping estimates and order management without ever letting your customers leave your website.","draft":false,"tool":["Ecommerce"]},"content":"","slug":"snipcart"},{"frontmatter":{"title":"Stackbit","website":"https://www.stackbit.com/","description":"Combine any Theme, Site Generator and CMS without complicated integrations","draft":false,"tool":["Helper"]},"content":"","slug":"stackbit"},{"frontmatter":{"title":"Strattic","website":"https://www.strattic.com/","description":"Instantly transform your WordPress website into a static, serverless version of itself with absolutely no change in how you manage it.","draft":false,"tool":["Hosting"]},"content":"","slug":"strattic"},{"frontmatter":{"title":"Surge","website":"https://surge.sh/","description":"Zero-bullshit, single\u2013command, bring your own source control web publishing CDN. Yes, it\u2019s free.","draft":false,"tool":["Hosting"]},"content":"","slug":"surge"},{"frontmatter":{"title":"Swell","website":"https://www.swell.is/","description":"Swell is the customizable, API-first ecommerce platform for innovative brands, startups, and agencies.","draft":false,"tool":["Ecommerce"]},"content":"","slug":"swell"},{"frontmatter":{"title":"SwifType","website":"https://swiftype.com/","description":"Add search to any website","draft":false,"tool":["Search"]},"content":"","slug":"swiftype"},{"frontmatter":{"title":"Trolley","website":"https://trolley.link/","description":"A shopping cart designed for the Jamstack.","draft":false,"tool":["Ecommerce"]},"content":"","slug":"trolley"},{"frontmatter":{"title":"Typeform","website":"http://www.typeform.com/","description":"People-friendly forms and surveys. Turn a list of questions into a conversation. And get better data to fuel your business.","draft":false,"tool":["Form"]},"content":"","slug":"typeform"},{"frontmatter":{"title":"Vercel","website":"https://vercel.com/","description":"Deploy your Node apps with a single command","draft":false,"tool":["Hosting"]},"content":"","slug":"vercel"},{"frontmatter":{"title":"Vssue","website":"https://vssue.js.org/","description":"Vssue is a Vue component / plugin, which can enable comments for your static pages.As your pages are \u201cstatic\u201d, you don\u2019t have...","draft":false,"tool":["Feedback"]},"content":"","slug":"vssue"},{"frontmatter":{"title":"Websolr","website":"https://www.websolr.com/","description":"Apache Solr is the time and battle-tested solution to getting a scalable, production-grade search engine up on your application. And because it\u2019s open source it\u2019s both affordable and customizable.","draft":false,"tool":["Search"]},"content":"","slug":"websolr"},{"frontmatter":{"title":"Workbox","website":"https://developers.google.com/web/tools/workbox/","description":"Workbox is a set of libraries and Node modules that make it easy to cache assets and take full advantage...","draft":false,"tool":["Helper"]},"content":"","slug":"workbox"}]'),c=JSON.parse('[{"frontmatter":{"title":"Ableton Live","github":"https://github.com/theme-url","external_url":"https://ableton.com","author":"Author","author_link":"https://examplesite.com/","author_twitter":"twitter_username","date":"2021-08-29T00:00:00.000Z","description":"Ableton Live is a","making_music":["DAW"],"tags":["Native App","Windows","Mac OS X"],"category":["DAW"],"draft":true,"disabled_reason":"Github repo not found"},"content":"\\n## Theme features\\n\\n- Very Fast\\n- Responsive\\n","slug":"ableton-live"},{"frontmatter":{"title":"Archive.org Vaporwave Collection","github":"https://github.com/theme-url","external_url":"https://archive.org/details/vaporwave","author":"Author","author_link":"https://examplesite.com/","author_twitter":"twitter_username","date":"2021-08-29T00:00:00.000Z","description":"Archived tapes from kmart\'s MUZAK during the 1970\'s 1980\'s","making_music":["Audio"],"tags":["Native App","Windows","Mac OS X"],"category":["DAW"],"draft":true,"disabled_reason":"Github repo not found"},"content":"\\n## Theme features\\n\\n- Very Fast\\n- Responsive\\n\\n","slug":"archive-org-vaporwave-collection"},{"frontmatter":{"title":"Attention KMart Shoppers","github":"https://github.com/theme-url","external_url":"https://archive.org/details/attentionkmartshoppers","author":"Author","author_link":"https://examplesite.com/","author_twitter":"twitter_username","date":"2022-08-31T11:44:50.000Z","description":"Archived tapes from kmart\'s MUZAK during the 1970\'s 1980\'s","appreciating":["Audio"],"tags":["Samples"],"category":["DAW"],"draft":true,"disabled_reason":"Github repo not found"},"content":"\\n## Theme features\\n\\n- Very Fast\\n- Responsive\\n","slug":"attention-kmart-shoppers"},{"frontmatter":{"title":"80\'s Music in an Empty Mall*","github":null,"external_url":"https://www.youtube.com/watch?v=D__6hwqjZAs&list=RDQMfJQ9XytnQB0&start_radio=1","author":"Raspberries and Rum","author_link":"https://www.youtube.com/c/CecilCeceRobert","author_twitter":null,"date":"2022-08-31T11:44:50.000Z","description":"Theme short description, it will be the meta description for the theme also.","making_music":["Video"],"tags":["Native App","Windows","Mac OS X"],"category":["DAW"],"draft":true,"disabled_reason":"Github repo not found"},"content":"\\n## Theme features\\n\\n- Very Fast\\n- Responsive\\n","slug":"empty-mall"},{"frontmatter":{"title":"Old Time Radio Archive","github":null,"external_url":"https://archive.org/details/oldtimeradio?&sort=-week&page=2","author":"Raspberries and Rum","author_link":"https://www.youtube.com/c/CecilCeceRobert","author_twitter":null,"date":"2022-08-31T11:44:50.000Z","description":"Theme short description, it will be the meta description for the theme also.","making_music":["Video"],"tags":["Native App","Windows","Mac OS X"],"category":["DAW"],"draft":true,"disabled_reason":"Github repo not found"},"content":"\\n## Theme features\\n\\n- Very Fast\\n- Responsive\\n\\n","slug":"old-time-radio-archive"},{"frontmatter":{"title":"RickyTinez","github":null,"external_url":"https://www.youtube.com/c/RickyTinez","author":"RickyTinez","author_link":"https://www.youtube.com/c/RickyTinez/videos","author_twitter":"https://twitter.com/ricky_tinez?lang=en","date":"2022-08-31T11:44:50.000Z","description":"Theme short description, it will be the meta description for the theme also.","making_music":["Video"],"tags":["Native App","Windows","Mac OS X"],"category":["DAW"],"draft":true,"disabled_reason":"Github repo not found"},"content":"\\n## Theme features\\n\\n- Very Fast\\n- Responsive\\n\\n","slug":"ricky-tinez"},{"frontmatter":{"title":"Wintergatan - Marble Machine (music instrument using 2000 marbles)","github":null,"external_url":"https://www.youtube.com/watch?v=IvUU8joBb1Q","author":"Wintergatan","author_link":"https://wintergatan.net/","author_twitter":"https://twitter.com/wintergatan?lang=en","date":"2022-08-31T11:44:50.000Z","description":"Theme short description, it will be the meta description for the theme also.","making_music":["Video"],"tags":["Native App","Windows","Mac OS X"],"category":["Aesthetic"],"draft":true,"disabled_reason":"Github repo not found"},"content":"\\n\\nNew Song: https://www.youtube.com/watch?v=ZddqSR1wXkE&t=9335s\\n\\nhttps://www.youtube.com/watch?v=mf3bhAayHaw&list=RDLVoCYHMVlQezA&index=48\\n","slug":"wintergatan-marble-machine"}]'),d=(0,a.createContext)(),u=function(t){var e=t.children,o={themes:c,resources:l};return(0,n.jsx)(d.Provider,{value:o,children:e})},m=o(60),f=o(6291),p=o.n(f),h=o(3127),g=o.n(h),w=(o(7335),function(t){var e=t.Component,o=t.pageProps,l=r.Xd.J_,c=i.R.k.T,d=i.R.k.secondary,f=(0,a.useState)(),h=f[0],w=f[1];(0,a.useEffect)((function(){fetch("https://fonts.googleapis.com/css2?family=".concat(c).concat(d?"&family="+d:"","&display=swap")).then((function(t){return t.text().then((function(t){return w(t)}))}))}),[c,d]);var b={gtmId:r.f.tag_manager_id};return(0,a.useEffect)((function(){setTimeout((function(){r.f.tag_manager_id&&g().initialize(b)}),5e3)}),[]),(0,n.jsxs)(u,{children:[(0,n.jsxs)(p(),{children:[(0,n.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"true"}),(0,n.jsx)("style",{dangerouslySetInnerHTML:{__html:"".concat(h)}}),(0,n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1, maximum-scale=5"})]}),(0,n.jsx)(m.f,{attribute:"class",defaultTheme:l,children:(0,n.jsx)(e,(0,s.Z)({},o))})]})})},7335:function(){},6291:function(t,e,o){t.exports=o(7378)},3313:function(t,e,o){"use strict";var s,n=o(963),r=(s=n)&&s.__esModule?s:{default:s};var i={tags:function(t){var e=t.id,o=t.events,s=t.dataLayer,n=t.dataLayerName,i=t.preview,a="&gtm_auth="+t.auth,l="&gtm_preview="+i;return e||(0,r.default)("GTM Id is required"),{iframe:'\n      <iframe src="https://www.googletagmanager.com/ns.html?id='+e+a+l+'&gtm_cookies_win=x"\n        height="0" width="0" style="display:none;visibility:hidden" id="tag-manager"></iframe>',script:"\n      (function(w,d,s,l,i){w[l]=w[l]||[];\n        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js', "+JSON.stringify(o).slice(1,-1)+"});\n        var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';\n        j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl+'"+a+l+"&gtm_cookies_win=x';\n        f.parentNode.insertBefore(j,f);\n      })(window,document,'script','"+n+"','"+e+"');",dataLayerVar:this.dataLayer(s,n)}},dataLayer:function(t,e){return"\n      window."+e+" = window."+e+" || [];\n      window."+e+".push("+JSON.stringify(t)+")"}};t.exports=i},2259:function(t,e,o){"use strict";var s,n=o(3313),r=(s=n)&&s.__esModule?s:{default:s};var i={dataScript:function(t){var e=document.createElement("script");return e.innerHTML=t,e},gtm:function(t){var e=r.default.tags(t);return{noScript:function(){var t=document.createElement("noscript");return t.innerHTML=e.iframe,t},script:function(){var t=document.createElement("script");return t.innerHTML=e.script,t},dataScript:this.dataScript(e.dataLayerVar)}},initialize:function(t){var e=t.gtmId,o=t.events,s=void 0===o?{}:o,n=t.dataLayer,r=t.dataLayerName,i=void 0===r?"dataLayer":r,a=t.auth,l=void 0===a?"":a,c=t.preview,d=void 0===c?"":c,u=this.gtm({id:e,events:s,dataLayer:n||void 0,dataLayerName:i,auth:l,preview:d});n&&document.head.appendChild(u.dataScript),document.head.insertBefore(u.script(),document.head.childNodes[0]),document.body.insertBefore(u.noScript(),document.body.childNodes[0])},dataLayer:function(t){var e=t.dataLayer,o=t.dataLayerName,s=void 0===o?"dataLayer":o;if(window[s])return window[s].push(e);var n=r.default.dataLayer(e,s),i=this.dataScript(n);document.head.insertBefore(i,document.head.childNodes[0])}};t.exports=i},3127:function(t,e,o){"use strict";var s,n=o(2259),r=(s=n)&&s.__esModule?s:{default:s};t.exports=r.default},963:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default=function(t){console.warn("[react-gtm]",t)}},2641:function(t,e,o){"use strict";function s(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function n(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{},n=Object.keys(o);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(o).filter((function(t){return Object.getOwnPropertyDescriptor(o,t).enumerable})))),n.forEach((function(e){s(t,e,o[e])}))}return t}o.d(e,{Z:function(){return n}})},6626:function(t){"use strict";t.exports=JSON.parse('{"lz":{"title":"EarthyResources | A Curated Directory Of Jamstack Resources","base_url":"https://statichunt.com","favicon":"/images/favicon.png","logo":"/images/logo.svg","logo_light":"/images/logo-light.svg","logo_width":"164","logo_height":"32","logo_text":"EarthyResources","footer_logo":"/images/logo-light.svg"},"Xd":{"Wm":true,"J_":"system"},"f":{"tag_manager_id":"GTM-PWJBVR2","feeder_id":"6314275d56249000047ecbfa","copyright":"Copyright \xa9 2022 EarthyResources"},"Pu":{"meta_author":"EarthyResources","meta_image":"/images/og-image.png","meta_description":"EarthyResources is a free open-source Jamstack directory that lists hundreds of themes, starters, and resources for Jamstack sites."},"rc":[{"type":"making_music","title":"Making Music"},{"type":"aesthetic","title":"Aesthetic"},{"type":"tags","title":"Tags"},{"type":"category","title":"Category"},{"type":"tool","title":"Tool"}],"Zq":["astro","next","markdown","forestry","eleventy","graphcms","notion","prismic","wordpress","stylus","ghost"]}')}},function(t){var e=function(e){return t(t.s=e)};t.O(0,[774,179],(function(){return e(3275),e(4758)}));var o=t.O();_N_E=o}]);