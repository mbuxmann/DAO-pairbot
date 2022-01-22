"use strict";(self.webpackChunkpairbot_wiki=self.webpackChunkpairbot_wiki||[]).push([[55],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),h=i,m=p["".concat(s,".").concat(h)]||p[h]||u[h]||r;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var d=2;d<r;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5002:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(7462),i=n(3366),r=n(7294),o=n(3616),l=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function s(e){var t=e.toc,n=e.className,a=e.linkClassName,i=e.isChild;return t.length?r.createElement("ul",{className:i?void 0:n},t.map((function(e){return r.createElement("li",{key:e.id},r.createElement("a",{href:"#"+e.id,className:null!=a?a:void 0,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(s,{isChild:!0,toc:e.children,className:n,linkClassName:a}))}))):null}function d(e){var t=e.toc,n=e.className,d=void 0===n?"table-of-contents table-of-contents__left-border":n,c=e.linkClassName,u=void 0===c?"table-of-contents__link":c,p=e.linkActiveClassName,h=void 0===p?void 0:p,m=e.minHeadingLevel,g=e.maxHeadingLevel,v=(0,i.Z)(e,l),b=(0,o.LU)(),k=null!=m?m:b.tableOfContents.minHeadingLevel,f=null!=g?g:b.tableOfContents.maxHeadingLevel,N=(0,o.DA)({toc:t,minHeadingLevel:k,maxHeadingLevel:f}),C=(0,r.useMemo)((function(){if(u&&h)return{linkClassName:u,linkActiveClassName:h,minHeadingLevel:k,maxHeadingLevel:f}}),[u,h,k,f]);return(0,o.Si)(C),r.createElement(s,(0,a.Z)({toc:N,className:d,linkClassName:u},v))}},5676:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return p},default:function(){return v},frontMatter:function(){return u},metadata:function(){return h},toc:function(){return m}});var a=n(7462),i=n(3366),r=n(7294),o=n(3905),l="tableOfContentsInline_0DDH",s=n(5002);var d=function(e){var t=e.toc,n=e.minHeadingLevel,a=e.maxHeadingLevel;return r.createElement("div",{className:l},r.createElement(s.Z,{toc:t,minHeadingLevel:n,maxHeadingLevel:a,className:"table-of-contents",linkClassName:null}))},c=["components"],u={title:"Configuration",sidebar_position:2},p=void 0,h={unversionedId:"Getting Started/configuration",id:"Getting Started/configuration",title:"Configuration",description:"To run Pairbot or contribute you will need to fill out a few environment variables. We have included an example which contains all the variables needed. Duplicate  .env.example and rename it to .env to get started.",source:"@site/docs/Getting Started/configuration.md",sourceDirName:"Getting Started",slug:"/Getting Started/configuration",permalink:"/DAO-pairbot/docs/Getting Started/configuration",editUrl:"https://github.com/developer-dao/DAO-pairbot/docs/Getting Started/configuration.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Configuration",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/DAO-pairbot/docs/Getting Started/installation"},next:{title:"Run",permalink:"/DAO-pairbot/docs/Getting Started/run"}},m=[{value:"What goes into a <code>.env</code>?",id:"what-goes-into-a-env",children:[{value:"Discord configurations",id:"discord-configurations",children:[],level:3},{value:"Supabase configurations",id:"supabase-configurations",children:[],level:3}],level:2},{value:"Setting up the Database",id:"setting-up-the-database",children:[],level:2},{value:"Problems?",id:"problems",children:[],level:2}],g={toc:m};function v(e){var t=e.components,n=(0,i.Z)(e,c);return(0,o.kt)("wrapper",(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"To run Pairbot or contribute you will need to fill out a few environment variables. We have included an example which contains all the variables needed. Duplicate  ",(0,o.kt)("inlineCode",{parentName:"p"},".env.example")," and rename it to ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," to get started."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=".env"',title:'".env"'},"CLIENT_ID=\nDISCORD_TOKEN=\nGUILD_ID=\nDISCORD_CHANNEL_ID=\nSUPABASE_ANON_KEY=\nSUPABASE_URL=\n")),(0,o.kt)("h2",{id:"what-goes-into-a-env"},"What goes into a ",(0,o.kt)("inlineCode",{parentName:"h2"},".env"),"?"),(0,o.kt)("p",null,"To get Pairbot up and running it requires Discord configuration and Supabase configuration."),(0,o.kt)(d,{toc:m[0].children,mdxType:"TOCInline"}),(0,o.kt)("h3",{id:"discord-configurations"},"Discord configurations"),(0,o.kt)("p",null,"In this section we will need to create a Discord bot account and configure the following environment variables."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=".env"',title:'".env"'},"CLIENT_ID=\nDISCORD_TOKEN=\nGUILD_ID=\nDISCORD_CHANNEL_ID=\n....\n")),(0,o.kt)("p",null,"Head over to the ",(0,o.kt)("a",{parentName:"p",href:"https://discord.com/developers/applications"},"Developers Portal")," and click on the New Application button.\nEnter a name you would like to give to your Pairbot and press create. Under settings (on the left hand side) click on the Bot tab."),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{src:"/img/configuration/bot-tab.png",alt:"Bot tab image"})),(0,o.kt)("br",null),(0,o.kt)("p",null,"To the right you should click on the ",(0,o.kt)("inlineCode",{parentName:"p"},"Add Bot")," button. Read the modal carefully and click on the ",(0,o.kt)("inlineCode",{parentName:"p"},"Yes, do it!")," button if you agree. Congratualtions you have created an account for your Pairbot! Switch the ",(0,o.kt)("inlineCode",{parentName:"p"},"PUBLIC BOT")," option to off. This will prevent other people from adding the bot to their own servers. This is important since you can't pair accross servers and will end up breaking things."),(0,o.kt)("p",null,"We will now need to give the Pairbot the right permissions and add it to our server. Click on the OAuth2 tab on the left hand side, under settings. After it has expanded click on the URL Generator tab."),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{src:"/img/configuration/url-generator.png",alt:"Bot url generator image"})),(0,o.kt)("br",null),(0,o.kt)("p",null,"Select the following:"),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{src:"/img/configuration/bot-permissions.png",alt:"Bot permissions image"})),(0,o.kt)("br",null),(0,o.kt)("p",null,"Underneath you will see a generated url, click on the copy button and paste it into your preferred browser. You should see the following modal appear, when you are logged in."),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{src:"/img/configuration/invite-modal.png",alt:"Bot Invite Modal"})),(0,o.kt)("br",null),(0,o.kt)("p",null,"Pick the server you would like to add the Pairbot to and click on ",(0,o.kt)("inlineCode",{parentName:"p"},"Continue"),". Make sure to read all permissions that the Pairbot requires and click on ",(0,o.kt)("inlineCode",{parentName:"p"},"Authorize"),". Congratulations you have added the bot to your own server!"),(0,o.kt)("p",null,"We will now need to configure the Discord environment variables that we need for our Pairbot to run. To get these variables we will need to head back to the ",(0,o.kt)("a",{parentName:"p",href:"https://discord.com/developers/applications"},"Discord Developer Portal"),". Click on the bot account you have just created and select the ",(0,o.kt)("inlineCode",{parentName:"p"},"OAuth2")," tab on the right hand side under settings. This will automatically select the ",(0,o.kt)("inlineCode",{parentName:"p"},"General")," tab underneath it."),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{src:"/img/configuration/general-tab.png",alt:"Bot general tab"})),(0,o.kt)("br",null),(0,o.kt)("p",null,"Under ",(0,o.kt)("inlineCode",{parentName:"p"},"Client Information")," you will see that the ",(0,o.kt)("inlineCode",{parentName:"p"},"CLIENT ID")," variable can be copied. Click the copy button and paste it into your ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=".env"',title:'".env"'},"CLIENT_ID=934429555521108111\nDISCORD_TOKEN=\nGUILD_ID=\nDISCORD_CHANNEL_ID=\n....\n")),(0,o.kt)("p",null,"Click on the Bot tab again, which can be found on the left hand side under settings. Click on the copy button underneath the ",(0,o.kt)("inlineCode",{parentName:"p"},"TOKEN")," section and paste it into your ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=".env"',title:'".env"'},"CLIENT_ID=934429555521108111\nDISCORD_TOKEN=OTM0NDZZZZZZ4NzU2.Yev9Vg.nc0cXuWS1a8EK3duI-sfVvb6Xlk\nGUILD_ID=\nDISCORD_CHANNEL_ID=\n....\n")),(0,o.kt)("p",null,"We will now head over to our Discord server to find the last two variables we need. Right click on the server's icon and click on ",(0,o.kt)("inlineCode",{parentName:"p"},"Copy ID"),". This is our Guild ID variable. "),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{src:"/img/configuration/guildid.png",alt:"Bot Guild ID Variable"})),(0,o.kt)("br",null),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=".env"',title:'".env"'},"CLIENT_ID=934429555521108111\nDISCORD_TOKEN=OTM0NDZZZZZZ4NzU2.Yev9Vg.nc0cXuWS1a8EK3duI-sfVvb6Xlk\nGUILD_ID=883478451850473411\nDISCORD_CHANNEL_ID=\n....\n")),(0,o.kt)("p",null,"Select your server and then right click on the channel you would like the bot to add threads to after people have succesfully been paired up. Choose again ",(0,o.kt)("inlineCode",{parentName:"p"},"Copy ID")," and paste it into the ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=".env"',title:'".env"'},"CLIENT_ID=934429555521108111\nDISCORD_TOKEN=OTM0NDZZZZZZ4NzU2.Yev9Vg.nc0cXuWS1a8EK3duI-sfVvb6Xlk\nGUILD_ID=883478451850473411\nDISCORD_CHANNEL_ID=908751196028801111\n....\n")),(0,o.kt)("p",null,"Congratulations on finishing the first part of the configration phase! "),(0,o.kt)("h3",{id:"supabase-configurations"},"Supabase configurations"),(0,o.kt)("p",null,"In this section we will need to configure the following environment variables."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=".env"',title:'".env"'},"....\nSUPABASE_ANON_KEY=\nSUPABASE_URL=\n")),(0,o.kt)("p",null,"Head over to ",(0,o.kt)("a",{parentName:"p",href:"https://supabase.com"},"Supabase")," and login / signup. Click on the ",(0,o.kt)("inlineCode",{parentName:"p"},"New Project")," button and fill out the details and Click on ",(0,o.kt)("inlineCode",{parentName:"p"},"Create new projec button"),". The free tier should be fine. "),(0,o.kt)("p",null,"On the right handside you should see an ",(0,o.kt)("inlineCode",{parentName:"p"},"anon")," ",(0,o.kt)("inlineCode",{parentName:"p"},"public")," section. Click on the ",(0,o.kt)("inlineCode",{parentName:"p"},"Copy")," button right next to it and paste it in your ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=".env"',title:'".env"'},"....\nSUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJvbGUiOiJhbm9uIiwiaWF0IjoxNjQyODYxMTEwLCJleHAiOjE5NTg0MzcxMTB9.vGhguKgBy-00rgygLtKiXGozCcPAisZV6odh-ZZZZ\nSUPABASE_URL=\n")),(0,o.kt)("p",null,"Scroll down to ",(0,o.kt)("inlineCode",{parentName:"p"},"Project Configuration")," and copy the Supabase URL and paste it in the ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"....\nSUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJvbGUiOiJhbm9uIiwiaWF0IjoxNjQyODYxMTEwLCJleHAiOjE5NTg0MzcxMTB9.vGhguKgBy-00rgygLtKiXGozCcPAisZV6odh-ZZZZ\nSUPABASE_URL=https://edvrdZZZrkcbedqsuvur.supabase.co\n")),(0,o.kt)("h2",{id:"setting-up-the-database"},"Setting up the Database"),(0,o.kt)("p",null,"For our Pairbot to work we will need to add the right tables and relationships. Luckily for us it is as easy as copy, paste and run! In your DAO-pairbot directory you should see a database folder, inside there is a schema.sql. We will need to copy the content and paste it into our SQL Editor on ",(0,o.kt)("a",{parentName:"p",href:"https://supabase.com"},"Supabase"),". Select the SQL Editor on the left hand side and then click on ",(0,o.kt)("inlineCode",{parentName:"p"},"New query")," above the search box. Copy the contents of the schema.sql file and paste it into the editor and click on the ",(0,o.kt)("inlineCode",{parentName:"p"},"RUN")," button middle right. Congratulations you have completelty setup the database's tables and relationships!"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="schema.sql (might be outdated)"',title:'"schema.sql',"(might":!0,be:!0,'outdated)"':!0},"create table public.developers (\n  id bigint generated by default as identity primary key,\n  discord text NOT NULL,\n  discord_id text UNIQUE NOT NULL,\n  skills varchar(300) NOT NULL,\n  desired_skills varchar(300) NOT NULL,\n  timezone varchar(15) NOT NULL,\n  twitter varchar(15) NOT NULL,\n  github varchar(39) NOT NULL,\n  available BOOLEAN NOT NULL DEFAULT FALSE,\n  goal varchar (200) DEFAULT NULL,\n  updated_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL\n);\n\ncreate table public.invites (\n  id bigint generated by default as identity primary key,\n  message_id text NOT NULL,\n  sender_discord_id text NOT NULL,\n  receiver_discord_id text NOT NULL,\n  created_at timestamp NOT NULL,\n  unique (sender_discord_id, receiver_discord_id),\n  constraint fk_sender_discord_id\n    foreign key (sender_discord_id)\n      references developers(discord_id) on delete cascade,\n  constraint fk_receiver_discord_id\n    foreign key (receiver_discord_id) \n      references developers(discord_id) on delete cascade\n)\n")),(0,o.kt)("h2",{id:"problems"},"Problems?"),(0,o.kt)("p",null,"Ask for help on our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/developer-dao/DAO-pairbot"},"GitHub repository")))}v.isMDXComponent=!0}}]);