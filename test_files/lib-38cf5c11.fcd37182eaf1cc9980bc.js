"use strict";(self.webpackChunkheifetz=self.webpackChunkheifetz||[]).push([[7050],{82435:function(e,t,n){n.d(t,{B2:function(){return eL},Lp:function(){return eA},OK:function(){return eo},ZP:function(){return td}});var o,r=n(9338),i=n(15030),a=n(55164),c=n(57477),l=n(71728),s=n(94009),u=n(79065),d=n(49899),m=n(30971),h=n(85879),f=n(87363),p=n.n(f),g=n(14168),v=n.n(g),C=n(88329),x=n.n(C),y=n(65733),Z=n(91850),w=n(45564),I=n(87804),_=n(87641),b=n(30722),S=n(43384),T=n(74135),k=n(90270),z=n(83697),E=n(4667),L=n.n(E),B=n(79855),A=n(41283),N=n(24405),H=n(62641),R=n(80565),D=n(58245),F=n(23579),O=n(72111),M=n(44259),P=n(57045),U=n(57266),G=n.n(U),X=n(9219),K=n(23322),V=n(97725),q=n(14528),Y=n(59078),j=n(99878),W=n(50495),J=n(44169),$=n(82694),Q=n(19706),ee=n(41402);function et(){var e=(0,u._)(["\n  0% { opacity: 0; height: 225%; transform: translateY(100%); }\n  46% { opacity: 1; height: 100%; transform: translateY(0); }\n  100% { opacity: 0 }\n"]);return et=function(){return e},e}function en(){var e=(0,u._)(["\n  0% { opacity: 0; transform: scale(1) translateY(50%); }\n  38% { transform: scale(.83, 1) translateY(-8.8%); }\n  54% { opacity: 1; transform: scale(.94, 1) translateY(-14.7%); }\n  62% { transform: scale(1) translateY(-11.7%); }\n  75% { transform: scale(1.11, .94) translateY(20%); }\n  100% { transform: scale(1) translateY(0); }\n"]);return en=function(){return e},e}var eo=L()(function(){return(0,B.v)("https://unpkg.zhimg.com/@cfe/emoticon@1.2.4/lib/emoticon.js").then(function(){return window.zh_emoticon?window.zh_emoticon.reduce(function(e,t){var n;return(0,d._)(e).concat((0,d._)(null!==(n=t.stickers)&&void 0!==n?n:[]))},[]):[]})}),er=function(e){var t=e.medalAvatarFrame,n=(0,z.n)();return(0,k.FI)(n,{IOS:"8.11",ANDROID:"8.11"})&&t?(0,h.tZ)("div",{css:{position:"absolute",width:"44px",height:"44px",pointerEvents:"none",top:"-7px",left:"-7px"},children:(0,h.tZ)(_.Image,{alt:"头像挂件",src:t})}):null},ei=!1,ea=!1,ec=(o=(0,r._)(function(e){var t;return(0,m.__generator)(this,function(n){switch(n.label){case 0:if(ea)return[3,2];return[4,(ea=!0,I.Z.ready().catch(function(){ei=!0}))];case 1:n.sent(),n.label=2;case 2:if(ei)return[2,!0];return[4,I.Z.dispatch("account/showLoginDialog",{next:e}).catch(function(e){return e})];case 3:if("object"==typeof(t=n.sent())&&("ERR_AUTH_ALREADYLOGIN"===t.name||"ERR_ACOUNT_NOTGUEST"===t.name))return[2,ei=!0];return[2,!1]}})}),function(e){return o.apply(this,arguments)}),el=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"https://www.zhihu.com";return function(t){return function(n){var o=n.target;return ec(e).then(function(e){if(e)return t(o)})}}},es=p().createContext(),eu=p().createContext(),ed=function(e){var t=e.palette,n=e.children,o=(0,N.F)().colors,r=(0,z.n)(),i=(0,f.useMemo)(function(){var e=o.GBK10A,n=o.GBK02A,r=o.GBK03A,i=o.GBK08A,a=o.GBK99A,c=o.GBL01A,l=o.GBK06A,s=o.GYL01A,u=o.GRD03A,d=(null==t?void 0:t.length)>0;return(d?t:[e,n,i,a,c,r,l,s,u]).reduce(function(e,t,n){return e["E".concat(String(n+1).padStart(2,"0"))]=t,e},{isDefault:!d})},[o,t]),a=(0,f.useMemo)(function(){var e=i.isDefault,t=(null==r?void 0:r.ZhihuHybrid)||(null==r?void 0:r.Zhihu);return({hybrid:{username:{fontSize:14,color:i.E02},authorTag:{fontSize:13},content:{lineHeight:"21px",maxHeight:"42px"},commentTag:{fontSize:12,height:"auto",lineHeight:"16px",color:i.E07,marginTop:"6px"}},web:{username:{fontSize:15,color:o.GBK03A},authorTag:{fontSize:15},content:{lineHeight:"24px",maxHeight:"48px"},commentTag:{fontSize:14,height:24,lineHeight:"24px",color:o.GBL05A,marginTop:"4px"}}})[e?t?"hybrid":"web":"hybrid"]},[i,o,r]);return(0,h.tZ)(es.Provider,{value:i,children:(0,h.tZ)(eu.Provider,{value:a,children:n})})},em=function(){return(0,f.useContext)(es)},eh=function(){return(0,f.useContext)(eu)},ef=function(e){var t=(0,N.F)().isDarkMode,n=em();return(0,f.useMemo)(function(){if(!e)return null;var o=n.isDefault,r=n.E05,i=n.E07,a=n.E08,c=function(n,o){var i=e.nightColor,a=e.color,c={color:n||(t?i:a),linkColor:r,hasBorder:e.hasBorder};if(e.hasBorder){var l=e.borderColor,s=e.borderNightColor;c.borderColor=o||(t?s:l)}return c};if(o)return c();switch(e.type){case"content_author":case"following":case"followed":case"aithor_say":return c(i,i);case"ip_info":case"from_section":return c(i);case"hot":return c(a);case"author_top":case"top":return c(r);default:return c()}},[e,t,n])},ep=(0,f.createContext)({data:null,dispatch:x(),authRequired:x()}),eg={LOAD_COMMENT_PREVIEW:"LOAD_COMMENT_PREVIEW",TOGGLE_LIKE:"TOGGLE_LIKE"},ev=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.type,o=t.payload;if(n===eg.LOAD_COMMENT_PREVIEW)return(0,T.camelizeKeys)(o);if(n===eg.TOGGLE_LIKE){var r=o.id,i=o.liked,l=o.rootCommentId;return(0,c._)((0,a._)({},e),{data:e.data.map(function(e){return l?l!==e.id?e:(0,c._)((0,a._)({},e),{childComments:e.childComments.map(function(e){return e.id!==r?e:(0,c._)((0,a._)({},e),{likeCount:e.likeCount+(i?1:-1),liked:i})})}):e.id!==r?e:(0,c._)((0,a._)({},e),{likeCount:e.likeCount+(i?1:-1),liked:i})})})}return e},eC=function(e){var t=e.host,n=e.children,o=e.resourceType,r=e.resourceId,i=e.redirectUrl,a=e.commentUnfoldable,c=e.defaultUnfoldContent,l=e.viewAllButtonAutoShow,u=e.openSecondaryCommentPage,m=e.openEditorOnClick,p=e.onlyOpenEditor,g=e.showInteractions,v=e.showSecondaryComment,C=e.showSecondaryCommentButton,Z=e.useHeartIcon,w=e.listHeight,I=e.avatarStyle,_=e.maskTransparent,b=e.onAllCommentsShow,S=void 0===b?x():b,T=e.openInApp,k=void 0===T?x():T,z=e.showImage,E=e.palette,L=(0,s._)((0,f.useReducer)(ev,null),2),B=L[0],A=L[1],N=(0,M.wh)(),H=(0,y.Z)(el(i)),R=(0,y.Z)(function(e){for(var n=arguments.length,o=Array(n>1?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];var i=t?t.replace(/\/$/,""):"https://www.zhihu.com";return N.apply(void 0,["".concat(i).concat(e)].concat((0,d._)(o)))});return(0,h.tZ)(ep.Provider,{value:{data:B,dispatch:A,authRequired:H,fetcher:R,resourceType:o,resourceId:r,commentUnfoldable:a,defaultUnfoldContent:c,showImage:void 0!==z&&z,showInteractions:void 0===g||g,showSecondaryComment:v,showSecondaryCommentButton:C,useHeartIcon:Z,viewAllButtonAutoShow:l,openSecondaryCommentPage:u,onlyOpenEditor:p,openEditorOnClick:m,onAllCommentsShow:S,listHeight:w,avatarStyle:I,maskTransparent:_,openInApp:k},children:(0,h.tZ)(ed,{palette:void 0===E?[]:E,children:n})})},ex=function(e){var t=e.user,n=e.className,o=e.badgeSize,r=void 0===o?14:o,i=e.isSecondary,s=(0,l._)(e,["user","className","badgeSize","isSecondary"]),u=t.avatarUrl,d=t.badge,m=t.badgeV2,p=t.isOrg,g=t.id,v=t.exposedMedal,C=(0,f.useContext)(ep).avatarStyle,x=(0,z.n)(),y=(0,H.D)(),Z=x.ZhihuHybrid?30:24,w="0"===g||""===g,I=!!(x.ZhihuHybrid&&!i&&(null==v?void 0:v.medalAvatarFrame)&&(null==v?void 0:v.avatarFrameType)!=="vip"),b=(0,h.BX)(h.HY,{children:[(0,h.tZ)(_.Image,{size:"100%",src:u,sx:{borderRadius:x.ZhihuHybrid?"50%":"2px",textIndent:"-9999px",overflow:"hidden",backgroundColor:"GBK10A",objectFit:"cover"},className:n}),I&&(0,h.tZ)(er,{medalAvatarFrame:v.medalAvatarFrame}),(null!=m?m:d)&&x.ZhihuHybrid&&(0,h.tZ)(A.Vh,{size:r,badge:null!=m?m:d,css:(0,A.FJ)(2*r,r)})]});return w?(0,h.tZ)(_.Box,(0,c._)((0,a._)({},s),{size:Z,style:C,children:b})):(0,h.tZ)(_.Box,{size:Z,css:(0,a._)({position:"relative"},y),className:n,style:C,children:(0,h.tZ)(O.pl,{href:"https://www.zhihu.com/".concat(p?"org":"people","/").concat(g),zaType:"Image",children:b})})},ey=(0,f.forwardRef)(function(e,t){var n=e.query,o=void 0===n?{}:n,r=e.children,i=e.innerStyle,u=e.innerRef,d=e.onClick,m=(0,l._)(e,["query","children","innerStyle","innerRef","onClick"]),p=(0,f.useContext)(ep),g=p.resourceType,v=p.resourceId,C=p.onAllCommentsShow,x=p.listHeight,Z=p.maskTransparent,w=p.openInApp,I=p.openSecondaryCommentPage,_=p.onlyOpenEditor,b=o.rootCommentId,S=o.anchorCommentId,k=o.openEditor,E=o.replyAuthorName,L=(0,z.n)(),B=em().isDefault,A=(0,s._)((0,f.useMemo)(function(){var e=k&&_?"zhihu://comment/editor":"https://www.zhihu.com/comment/list",t=(0,c._)((0,a._)((0,c._)((0,a._)({},o,b&&{isChild:!0},!I&&{rootCommentId:void 0,isChild:void 0}),{anchorCommentId:null!=b?b:S}),I&&b&&{anchorCommentId:void 0},k&&{openEditor:!0,replyCommentId:S,replyRootCommentId:b,replyAuthorName:E},x&&{listHeight:x,maskTransparent:!0},void 0!==Z&&{maskTransparent:Z}),{useCustomTheme:!B}),n=v,r=g;return o.resourceType&&o.resourceType!==g&&(r=o.resourceType,n=o.resourceId),[(0,c._)((0,a._)({},t),{resourceType:r,resourceId:n}),"".concat(e,"/").concat(r,"/").concat(n,"?").concat((0,P.stringify)((0,T.decamelizeKeys)(G()(t,Boolean))))]},[o,b,I,S,k,E,x,Z,v,g,_,B]),2),N=A[0],H=A[1],R=(0,y.Z)(function(e){if(!L.ZhihuHybrid){e.preventDefault(),w();return}null==d||d(e),e.defaultPrevented||null==C||C(e,N)});return(0,h.tZ)(O.pl,(0,c._)((0,a._)({as:"div",ref:t,href:H,onClick:R},m),{children:(0,h.tZ)("div",{role:"link",tabIndex:0,ref:u,onClick:function(e,t){var n=!(arguments.length>2)||void 0===arguments[2]||arguments[2],o=null;return function(){for(var t=arguments.length,r=Array(t),i=0;i<t;i++)r[i]=arguments[i];var a=Date.now();if(!n&&!o||a-o<1e3)return o||(o=a),e.apply(this,r);o=a}}(function(e){e.stopPropagation()},1e3),css:function(e){return(0,a._)({":focus":{outline:"none"},":focus-visible":{outline:"".concat(e.colorMod(e.colors.GBL01A).alpha(.3)," auto 5px")}},i)},children:r})}))}),eZ={avatarUrl:"https://pic1.zhimg.com/v2-abed1a8c04700ba7d72b45195223e0ff_s.jpeg",badge:null,id:"0"},ew=["1","0.7","0.4"],eI=["[谢邀]","[赞同]"],e_=function(e){var t=e.inputPlaceholder,n=e.commentStatus,o=e.emoticons,r=e.currentUserId,i=e.onInputShowTips,a=(0,z.n)(),c=em(),l=c.E01,u=c.E07,d=(0,s._)((0,f.useState)([]),2),m=d[0],p=d[1],g=(0,s._)((0,f.useState)(eZ),2),v=g[0],C=g[1],x=n.type,Z=n.text,w=n.induceText,b=4===x,S=5===x,E=b||S;(0,f.useEffect)(function(){o.length>0&&I.Z.dispatch("base/getFrequentlyUsedEmoticon",{count:3}).then(function(e){var t=null==e?void 0:e.data;return t&&0!==t.length||(t=eI),p(t.map(function(e){return o.find(function(t){return t.placeholder===e})}))})},[o]),(0,f.useEffect)(function(){var e=(0,k.FI)(a,{IOS:"8.32",ANDROID:"8.32"});r||I.Z.dispatch("account/me").then(function(t){if(null==t?void 0:t.url_token){var n=t.avatar_url,o=t.url_token,r=t.badge_v2,i=t.badge,a=t.exposed_medal,c=void 0===a?{}:a;C({avatarUrl:n,id:o,badgeV2:(0,T.camelizeKeys)(r),badge:(0,T.camelizeKeys)(i),exposedMedal:e?(0,T.camelizeKeys)(c):null})}})},[r,a]);var L=(0,y.Z)(function(e){E&&e.preventDefault(),b&&(0,I.Z)("ui/showToast").dispatch({text:Z}),S&&(null==i||i(w||"评论区功能升级中，暂时无法发送评论，可以使用「赞同并推荐」功能参与互动"))});return(0,h.BX)(_.Flex,{css:{width:"100%",alignItems:"center"},children:[(0,h.tZ)(ex,{user:v}),(0,h.BX)(ey,{as:_.Flex,query:{openEditor:!0},css:{flex:1,marginLeft:"10px",padding:"0 4px 0 16px",height:"36px",color:u,backgroundColor:l,borderRadius:"18px",fontSize:"14px"},innerStyle:{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%"},onClick:L,children:[(0,h.tZ)(_.Text,{css:{lineHeight:"normal"},children:(E?Z:t)||"写评论"}),m.length>0&&(0,h.tZ)(_.Flex,{css:{height:"34px",alignItems:"center",marginRight:"4px"},children:m.filter(Boolean).map(function(e,t){var n=e.static_image_url,o=e.title;return(0,h.tZ)("img",{alt:"icon",src:n,css:{width:"20px",height:"20px",marginRight:"4px",opacity:ew[t]}},o)})})]})]})};function eb(e){var t=e.name,n=e.isOrg,o=e.id,r=e.className,i="0"===o||""===o,l=i?_.Text:O.pl,s=eh().username,u=s.fontSize,d=s.color;return(0,h.tZ)(l,(0,c._)((0,a._)({},!i&&{href:"https://www.zhihu.com/".concat(n?"org":"people","/").concat(o),as:_.Text}),{color:d,fontSize:u,fontWeight:"bold",lineHeight:"16px",css:[{flex:"0 1 auto"},(0,R.S)(1)],className:r,children:t}))}var eS=function(e){var t,n,o=(0,z.n)(),r=(("undefined"!=typeof window?window.innerWidth:184)-72-4)/3*2+2,i=parseInt(null!==(t=e["data-height"])&&void 0!==t?t:100,10),a=parseInt(null!==(n=e["data-width"])&&void 0!==n?n:100,10),c=e.href,l=Math.min(r,a),s=Math.min(r,i),u=Math.min(Math.max(a/i,.5),2);return(0,h.tZ)(_.Box,{css:{fontSize:0,width:u>1?l:s*u,height:u>1?l/u:s,overflow:"hidden",borderRadius:"6px"},children:(0,h.tZ)(_.Image,{src:c,width:"100%",height:"100%",css:{objectFit:"cover",objectPosition:u<1?"center top":"unset"},onClick:function(e){e.stopPropagation(),((null==o?void 0:o.ZhihuHybrid)||(null==o?void 0:o.Zhihu))&&(0,I.Z)("base/openImage").dispatch({images:[c]})}})})},eT=["comment_gif","comment_img","comment_sticker"],ek=function(e,t){return(0,i._)(e,NodeList)?(0,h.tZ)(h.HY,{children:[].map.call(e,function(e,n){return(0,h.tZ)(f.Fragment,{children:t(e)},n)})}):t(e)},ez={class:"className"},eE=function(e,t){var n=function(e){return t(e,function(t){return o(e,t)})},o=function(e,t){return e.nodeType===Node.TEXT_NODE?e.nodeValue:e.nodeType===Node.ELEMENT_NODE?(0,f.createElement)(t||e.tagName.toLowerCase(),e.attributes?Array.from(e.attributes).reduce(function(e,t){return e[ez[t.name]||t.name]=t.value,e},{}):{},e.childNodes.length?ek(e.childNodes,n):null):null};return ek(e,n)},eL=function(e,t){var n,o,r=t.convertEmoticon,i=t.emoticonList,a=t.traverseCallback;return"undefined"==typeof DOMParser?(0,h.tZ)("div",{dangerouslySetInnerHTML:{__html:e}}):(r&&(n=e,o=void 0===i?[]:i,e=n.replace(/(\[[^[^\]]+\](?!<\/a))/g,function(e){var t=o.find(function(t){return t.placeholder===e});return t?"<img src=".concat(t.static_image_url,' class="sticker" alt="').concat(t.placeholder,'" />'):e})),eE(new DOMParser().parseFromString(e,"text/html").body.childNodes,a))},eB=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2?arguments[2]:void 0;return eL(e,{convertEmoticon:!0,emoticonList:t,traverseCallback:function(e,t){if(e.nodeType===Node.ELEMENT_NODE){if("P"===e.tagName)return t(f.Fragment);if(e.classList.contains("sticker"))return t();if(eT.some(function(t){return e.classList.contains(t)}))return n?t(eS):e.textContent;if(e.textContent.match("http"))return t("A"===e.tagName&&O.pl)}return e.textContent}})},eA=function(e){return eL(e,{traverseCallback:function(e,t){return e.nodeType===Node.ELEMENT_NODE?t("A"===e.tagName&&O.pl):e.textContent}})},eN=(0,f.memo)(function(e){return eA(e.text)}),eH=function(e){var t=e.tagInfo,n=e.richText,o=e.responseLink,r=e.className,i=ef(t);if(!t)return null;var l=i.color,s=i.hasBorder,u=i.borderColor,d=i.linkColor,m=t.text,p=t.targetLink,g=p&&o,v=(0,f.useContext)(ep).openInApp,C=(0,z.n)(),x=(0,y.Z)(function(e){g&&!C.ZhihuHybrid&&(e.preventDefault(),v())}),Z=g?O.pl:"span";return(0,h.BX)(Z,(0,c._)((0,a._)({css:(0,c._)((0,a._)({color:l},s&&(0,D.M)({border:"1px solid ".concat(u),borderRadius:"4px"}),g&&{textDecoration:"none"}),{height:"14px",fontSize:"10px",lineHeight:"15px",boxSizing:"border-box",marginLeft:"4px",padding:"0 4px","& a":{color:d,textDecoration:"none"}}),className:r,onClick:x},!!g&&{href:p}),{children:[n?(0,h.tZ)(eN,{text:m}):m,!!p&&(0,h.tZ)(q.C,{css:{marginRight:"-2px"},center:!0,size:10})]}))},eR=function(e){var t=e.vipInfo,n=N.F.isDarkMode,o=t.vipIcon,r=void 0===o?{}:o,i=r.url,a=r.nightModeUrl,c=t.isVip,l=(0,s._)((0,Z.Z)(!1),2),u=l[0],d=l[1];return!u&&i&&c?(0,h.tZ)(O._o,{shouldTrackShow:!0,zaType:"Image",zaBlock:"VIP",children:(0,h.tZ)(_.Flex,{as:"a",href:"https://www.zhihu.com/vip?entry_privileges_type=member_id",css:{marginLeft:"4px"},children:(0,h.tZ)(_.Image,{src:n?a:i,size:"14px",onError:d.on})})}):null},eD=function(e){var t=e.medalId,n=e.avatarUrl,o=e.userToken,r=e.medalName,i=(0,z.n)(),a=(0,k.FI)(i,{IOS:"7.39",ANDROID:"7.39"}),c=(0,s._)((0,Z.Z)(!1),2),l=c[0],u=c[1];return a&&!l?(0,h.tZ)(_.Flex,{as:"button",onClick:function(e){e.preventDefault(),(0,I.Z)("base/openURL").dispatch({url:"zhihu://popup_container?"+new URLSearchParams({url:"https://www.zhihu.com/appview/v2/badge_center/detail?userToken=".concat(encodeURIComponent(o),"&badgeId=").concat(encodeURIComponent(t)),min_percent:"0.6",show_header:"false",cancelable:"true",enable_drag:"false",canchangeheight:"false"}).toString()})},css:{padding:0,marginLeft:"6px",border:"unset",background:"unset"},children:(0,h.tZ)(_.Image,{alt:r,css:{height:"14px",width:"14px"},src:n,onError:u.on})}):null},eF=function(e){var t=e.authorTags,n=e.className,o=e.user,r=e.badgeSize,i=o.name,c=o.vipInfo,l=o.badge,s=o.badgeV2,u=o.isOrg,d=o.id,m=o.exposedMedal,f=void 0===m?null:m,p=o.urlToken,g=f&&f.avatarUrl&&f.medalId&&p,v=(0,z.n)();return(0,h.BX)(_.Flex,{css:{alignItems:"center",lineHeight:"16px"},className:n,children:[(0,h.tZ)(eb,{name:i,isOrg:u,id:d}),(void 0===t?[]:t).map(function(e){return(0,h.tZ)(eH,{responseLink:!0,richText:!0,tagInfo:e},e.text)}),(null!=s?s:l)&&!v.ZhihuHybrid&&(0,h.tZ)(A.Vh,{size:void 0===r?14:r,badge:null!=s?s:l,css:{marginLeft:4}}),c&&(0,h.tZ)(eR,{vipInfo:c}),g&&(0,h.tZ)(eD,(0,a._)({userToken:p},f))]})},eO=function(e){var t=e.onClick,n=em(),o=n.E04,r=n.E06;return(0,h.BX)("span",{role:"button",tabIndex:0,css:{position:"absolute",right:0,bottom:0,paddingLeft:18,backgroundImage:"linear-gradient(90deg, ".concat((0,F.a)(o).alpha(0),", ").concat(o," 25%, ").concat(o,")"),display:"inline-block",color:r},onClick:t,children:["展开",(0,h.tZ)(Y.Z,{center:!0,css:{height:21}})]})},eM=function(e){I.Z.dispatch("base/openImage",{images:[e],index:0})},eP=function(e){var t=e.comment,n=t.content,o=t.collapsed,r=t.isDeleted,i=t.id,l=t.author,u=e.emoticons,d=e.className,m=e.rootCommentId,p=e.unfoldable,g=(0,f.useContext)(ep),v=g.defaultUnfoldContent,C=g.showImage,x=void 0!==C&&C,Z=g.openEditorOnClick,w=(0,f.useRef)(),I=(0,f.useRef)(),b=(0,s._)((0,f.useState)(!1),2),S=b[0],T=b[1],k=(0,s._)((0,f.useState)(void 0!==v&&v),2),z=k[0],E=k[1],L=em().E06,B=eh().content,A=B.lineHeight,N=B.maxHeight,H=(0,f.useMemo)(function(){return eB(n,null!=u?u:[],x)},[n,u,x]);(0,f.useLayoutEffect)(function(){var e,t;p&&!z&&(null===(e=w.current)||void 0===e?void 0:e.clientHeight)<(null===(t=I.current)||void 0===t?void 0:t.clientHeight)&&T(!0)},[w,I,T,z,p]);var D=(0,y.Z)(function(e){var t=e.target;if(eT.some(function(e){return t.classList.contains(e)})){var n=t.href;n&&eM(n),e.preventDefault()}}),F=(0,y.Z)(function(e){e.stopPropagation(),E(!0)});return(0,h.BX)(ey,{ref:w,innerRef:I,as:_.Box,onClick:D,fontSize:"15px",lineHeight:A,color:o||r?"GBK07A":L,mt:"6px",css:(0,c._)((0,a._)({position:"relative",overflowWrap:"break-word"},!z&&(0,R.S)(2),p&&!z&&{display:"block",overflow:"hidden",maxHeight:N}),{"img.sticker":{width:"1.24em",height:"1.24em",marginBottom:"-0.25em"}}),className:d,zaType:"Card",query:(0,a._)({rootCommentId:m,anchorCommentId:i},Z&&{openEditor:!0,replyAuthorName:l.name}),children:[H,S&&!z&&(0,h.tZ)(eO,{onClick:F})]})},eU=p().forwardRef(function(e,t){var n,o=Object.keys(n=eU.mapProps).reduce(function(e,t){var o=e[t];if(delete e[t],o){var r=n[t],i="function"==typeof r?r(e):r;return(0,a._)({},e,i,i&&i.style&&{style:(0,a._)({},e.style,i.style)})}return e},(0,a._)({},e)),r=o.name,i=o.className,c=o.defaultClassName,s=o.size,u=o.center,d=(0,l._)(o,["name","className","defaultClassName","size","center"]),m=(0,h.tZ)("svg",(0,a._)({ref:u?null:t,className:"".concat(c," ").concat(c,"--").concat(r).concat(i?" ".concat(i):"")},d,s&&{width:s,height:s}));return u?(0,h.BX)("span",{ref:t,style:eU.strutStyle,children:["​",m]}):m});eU.defaultProps={defaultClassName:"Icon",fill:"currentColor"},eU.mapProps={text:{size:"1.2em"}},eU.strutStyle={display:"inline-flex",alignItems:"center"};var eG=function(e){return(0,h.tZ)(eU,(0,c._)((0,a._)({viewBox:"0 0 24 24"},e),{children:(0,h.tZ)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 3C16.9706 3 21 7.02944 21 12C21 12.9242 20.7842 14.037 20.3617 15.3551C20.2673 15.6497 20.2603 15.9655 20.3417 16.264L20.4506 16.64C21.073 18.8462 21.1396 20.1542 20.6504 20.5641C20.1634 20.972 18.8358 20.9294 16.6675 20.4363L16.264 20.3417C15.9655 20.2603 15.6497 20.2673 15.3551 20.3617C14.037 20.7842 12.9242 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3ZM12 4.61093C7.9191 4.61093 4.6109 7.91913 4.6109 12C4.6109 16.0809 7.9191 19.3891 12 19.3891C12.7277 19.3891 13.6797 19.2071 14.8633 18.8277C15.4548 18.6381 16.0886 18.6241 16.6417 18.7757C17.687 19.0279 18.5219 19.1739 19.1295 19.2169L19.248 19.2241L19.349 19.228L19.3449 19.1745C19.2933 18.6329 19.1303 17.872 18.846 16.8877L18.7875 16.6878C18.6241 16.0886 18.638 15.4548 18.8276 14.8633C19.2071 13.6797 19.389 12.7277 19.389 12C19.389 7.91913 16.0808 4.61093 12 4.61093Z"})}))};eG.defaultProps={name:"CommentLikeNormal"};var eX=function(e){return(0,h.tZ)(eU,(0,c._)((0,a._)({viewBox:"0 0 43 41"},e),{children:(0,h.tZ)("path",{fill:"currentColor",fillRule:"evenodd",d:"M19.417 35.624L10.37 40.38a1.734 1.734 0 0 1-2.516-1.829l1.728-10.073a4.625 4.625 0 0 0-1.33-4.094L.933 17.25a1.734 1.734 0 0 1 .961-2.958l10.114-1.47a4.625 4.625 0 0 0 3.483-2.53l4.523-9.165a1.734 1.734 0 0 1 3.11 0l4.524 9.166a4.625 4.625 0 0 0 3.482 2.53l10.114 1.47a1.734 1.734 0 0 1 .961 2.957l-7.319 7.134a4.625 4.625 0 0 0-1.33 4.094l1.728 10.073a1.734 1.734 0 0 1-2.516 1.829l-9.047-4.756a4.625 4.625 0 0 0-4.304 0z"})}))};eX.defaultProps={name:"Star"};var eK=function(e){return(0,h.tZ)(eU,(0,c._)((0,a._)({viewBox:"0 0 43 41"},e),{children:(0,h.BX)("g",{fillRule:"evenodd",children:[(0,h.tZ)("path",{d:"M19.417 35.624L10.37 40.38a1.734 1.734 0 0 1-2.516-1.829l1.728-10.073a4.625 4.625 0 0 0-1.33-4.094L.933 17.25a1.734 1.734 0 0 1 .961-2.958l10.114-1.47a4.625 4.625 0 0 0 3.483-2.53l4.523-9.165a1.734 1.734 0 0 1 3.11 0l4.524 9.166a4.625 4.625 0 0 0 3.482 2.53l10.114 1.47a1.734 1.734 0 0 1 .961 2.957l-7.319 7.134a4.625 4.625 0 0 0-1.33 4.094l1.728 10.073a1.734 1.734 0 0 1-2.516 1.829l-9.047-4.756a4.625 4.625 0 0 0-4.304 0z",opacity:".2"}),(0,h.tZ)("path",{d:"M21.5.162v34.931c-.716.01-1.43.188-2.083.53L10.37 40.38a1.734 1.734 0 0 1-2.516-1.829l1.728-10.073a4.625 4.625 0 0 0-1.33-4.094L.933 17.25a1.734 1.734 0 0 1 .961-2.958l10.114-1.47a4.625 4.625 0 0 0 3.483-2.53l4.523-9.165c.29-.59.872-.94 1.486-.965z"})]})}))};eK.defaultProps={name:"HalfStar"};var eV=(0,d._)([,,,,,]),eq=function(e){var t=e.score/2,n=(0,N.F)().colors.GRD10A,o=(0,F.a)(n).alpha(.2);return(0,h.tZ)(_.Flex,{flexDirection:"row",height:"20px",alignItems:"center",mt:"2px",children:eV.map(function(e,r){var i,a=t-(i=r+1)>=0?1:t-i<=-1?0:.5;return .5===a?(0,h.tZ)(eK,{css:{marginRight:"2px"},color:n,size:12},"".concat(r,"-").concat(a)):(0,h.tZ)(eX,{css:{marginRight:"2px"},color:a?n:o,size:12},"".concat(r,"-").concat(a))})})},eY=p().forwardRef(function(e,t){return(0,h.tZ)(eU,(0,c._)((0,a._)({viewBox:"0 0 24 24"},e),{ref:t,children:(0,h.tZ)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8.5 4.07782C8.5 2.24411 10.4861 1.09899 12.0731 2.01775C13.7298 2.9769 14.663 4.82463 14.4516 6.72727L14.3379 7.74996H17.9194C20.4493 7.74996 22.2533 10.2038 21.4987 12.6185L19.6761 18.4508C19.1559 20.1155 17.5599 21.197 15.8279 21.0902C13.456 20.9438 9.78636 20.75 7 20.75H4.49936C3.53225 20.75 2.75 19.9658 2.75 19V9.49996C2.75 8.53346 3.5335 7.74996 4.5 7.74996H5.1371C6.55156 7.74996 7.81995 6.87883 8.32771 5.55864C8.4416 5.26254 8.5 4.94801 8.5 4.63076V4.07782Z",fill:"currentColor"})}))});eY.defaultProps={name:"CommentLikeActive"};var ej=function(e){return(0,h.tZ)(eU,(0,c._)((0,a._)({viewBox:"0 0 24 24"},e),{children:(0,h.tZ)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8.5 4.07782C8.5 2.24411 10.4861 1.09899 12.0731 2.01775C13.7298 2.9769 14.663 4.82463 14.4516 6.72727L14.3379 7.74996H17.9194C20.4493 7.74996 22.2533 10.2038 21.4987 12.6185L19.6761 18.4508C19.1559 20.1155 17.5599 21.197 15.8279 21.0902C13.456 20.9438 9.78636 20.75 7 20.75H4.49936C3.53225 20.75 2.75 19.9658 2.75 19V9.49996C2.75 8.53346 3.5335 7.74996 4.5 7.74996H5.1371C6.55156 7.74996 7.81995 6.87883 8.32771 5.55864C8.4416 5.26254 8.5 4.94801 8.5 4.63076V4.07782ZM11.3215 3.31589C10.7346 2.97608 10 3.39961 10 4.07782V4.63076C10 5.13211 9.90771 5.62918 9.72773 6.09711C8.99716 7.99659 7.17222 9.24996 5.1371 9.24996H4.5C4.36193 9.24996 4.25 9.36189 4.25 9.49996V19C4.25 19.1386 4.36191 19.25 4.49936 19.25H7C9.83637 19.25 13.5459 19.4465 15.9203 19.593C16.9721 19.6579 17.9327 19.0008 18.2444 18.0034L20.067 12.1711C20.5198 10.7222 19.4374 9.24996 17.9194 9.24996H13.5C13.2867 9.24996 13.0834 9.15911 12.9412 9.00015C12.7989 8.84119 12.731 8.62916 12.7546 8.41713L12.9608 6.56162C13.1065 5.25035 12.4633 3.97693 11.3215 3.31589Z"})}))};ej.defaultProps={name:"CommentLikeNormal"};var eW=(0,W.d7)(eY),eJ=(0,W.d7)(_.Box),e$={active:{scale:1.3,transition:{type:"tween",duration:.2,ease:[0,0,.58,1]}},normal:{scale:1,transition:{type:"tween",duration:.3,ease:[.42,0,.2,1.8]}}},eQ=function(e){var t=e.liked,n=em().E05,o=(0,f.useRef)(!0),i=(0,$._)();return(0,f.useEffect)(function(){if(o.current){o.current=!1;return}t&&(0,r._)(function(){return(0,m.__generator)(this,function(e){switch(e.label){case 0:return[4,i.start("active")];case 1:return e.sent(),[4,i.start("normal")];case 2:return e.sent(),[2]}})})()},[t,i]),(0,h.tZ)(eJ,{color:t?n:"inherit",children:t?(0,h.tZ)(eW,{initial:{scale:1},animate:i,variants:e$,size:20,center:!0}):(0,h.tZ)(ej,{center:!0,size:20})})},e0=(0,ee.F4)(et()),e1=(0,ee.F4)(en()),e2=function(e){var t=e.freeze,n=e.size,o=e.left,r=e.right,i=(0,N.F)().colors.GRD01A,a=Math.round(.16*n);return(0,h.tZ)("div",{css:{position:"absolute",width:a,height:a,top:o||r?"-18%":"-28%",left:o?"2%":r?"auto":"42%",right:r?"2%":"auto",transform:o?"rotate(-25deg)":r?"rotate(-335deg)":"none",transformOrigin:"50% ".concat(.08*n,"px")},children:(0,h.tZ)("div",{css:{background:i,height:"100%",minHeight:"100%",borderRadius:n/2,opacity:0,animation:t?null:"".concat(e0," .5s linear forwards")}})})},e4=(0,f.forwardRef)(function(e,t){var n=e.className,o=e.size,r=e.noAnimation,i=(0,N.F)().colors.GRD01A,a=(0,f.useRef)(r).current;return(0,h.BX)("div",{ref:t,className:"HeartIcon ".concat(n),css:{position:"absolute",width:o,height:o},children:[(0,h.tZ)(e2,{freeze:a,size:o,left:!0}),(0,h.tZ)(e2,{freeze:a,size:o}),(0,h.tZ)(e2,{freeze:a,size:o,right:!0}),(0,h.tZ)(X.Z,{size:o,fill:i,css:{position:"absolute",top:0,left:0,animation:a?null:"".concat(e1," .5s linear forwards")}})]})}),e9=(0,f.forwardRef)(function(e,t){var n=e.className,o=e.size;return(0,h.tZ)(_.Box,{ref:t,as:"span",className:"OutLineIcon ".concat(n),sx:{position:"absolute",top:0,left:0,width:o,height:o,fontSize:0,color:"inherit"},children:(0,h.tZ)(K.Z,{size:o})})}),e7=function(){var e=!(arguments.length>0)||void 0===arguments[0]||arguments[0],t=(0,f.useRef)(e);return(0,f.useEffect)(function(){t.current=!1},[]),t.current},e3=(0,W.d7)(e4),e5=(0,W.d7)(e9),e6={type:"spring",stiffness:380,damping:20},e8=function(e){var t=e.size,n=void 0===t?16:t,o=e.liked,r=(0,l._)(e,["size","liked"]),i=e7(o);return(0,h.tZ)("div",(0,c._)((0,a._)({css:{display:"inline-block",position:"relative",userSelect:"none"},style:{width:n,height:n}},r),{children:(0,h.tZ)(Q.M,{children:o?(0,h.tZ)(e3,{size:n,noAnimation:i,initial:!1,animate:{opacity:1},exit:{opacity:0},transition:e6},"heart"):(0,h.tZ)(e5,{initial:!1,animate:{opacity:1},exit:{opacity:0},transition:e6,size:n},"outline")})}))},te=function(e){var t=e.useHeartIcon,n=e.liked,o=e.children,r=em().E05,i=(0,N.F)().colors.GRD01A,a=(0,z.n)();return(0,h.tZ)("span",{css:{marginLeft:"4px",color:n?t?i:r:"inherit"},children:o>0?(0,b.Zh)(o):a.ZhihuHybrid?"":t?"喜欢":"赞"})},tt=function(e){var t=e.comment,n=e.rootCommentId,o=t.likeCount,i=t.liked,a=(0,z.n)(),c=(0,f.useRef)(!1),l=(0,f.useContext)(ep),s=l.dispatch,u=l.fetcher,d=l.useHeartIcon,p=l.authRequired,g=l.openInApp,v=(0,y.Z)((0,r._)(function(){var e,o,r,l;return(0,m.__generator)(this,function(d){switch(d.label){case 0:if(!a.ZhihuHybrid)return g(),[2];if(c.current)return[2];c.current=!0,e=!i,d.label=1;case 1:return d.trys.push([1,3,4,5]),s({type:eg.TOGGLE_LIKE,payload:{liked:e,id:t.id,rootCommentId:n}}),[4,u("/api/v4/comments/".concat(t.id,"/like"),{method:e?"POST":"DELETE"})];case 2:return d.sent(),[3,5];case 3:return o=d.sent(),s({type:eg.TOGGLE_LIKE,payload:{liked:i,id:t.id,rootCommentId:n}}),I.Z.dispatch("ui/showToast",{icon:"fail",text:(null===(r=o.payload)||void 0===r?void 0:null===(l=r.error)||void 0===l?void 0:l.message)||o.statusMessage}),[3,5];case 4:return c.current=!1,[7];case 5:return[2]}})}));return(0,h.tZ)(h.HY,{children:(0,h.BX)(S.$U,{zaType:"Button",zaAction:i?"UnUpvote":"Upvote",as:W.d7.button,css:function(){return{marginLeft:"16px",display:"flex",alignItems:"center",justifyContent:"center",padding:d?"4px":0,marginRight:d?"-4px":0,color:"inherit",font:"inherit",background:"none",outline:"none",border:"none",appearance:"none"}},initial:{scale:1},onClick:p(v),children:[d?(0,h.tZ)(e8,{liked:i}):(0,h.tZ)(eQ,{liked:i}),(0,h.tZ)(te,{liked:i,useHeartIcon:d,children:o})]})})},tn=function(e){var t=e.comment,n=e.editStatus,o=e.rootCommentId,r=e.className,i=e.isSecondary,l=t.score,s=t.createdTime,u=t.contentTag,d=t.commentTag,m=t.canLike,p=t.resourceId,g=t.resourceType,v=(0,z.n)(),C=(0,f.useContext)(ep),x=C.showInteractions,y=C.useHeartIcon,Z=em().E07,w=eh().commentTag;return(0,h.BX)(_.Flex,{css:{flexDirection:"column"},className:r,children:[l>0&&(0,h.tZ)(eq,{score:l}),(0,h.tZ)(_.Flex,{flexDirection:"row",children:u.map(function(e){return(0,h.tZ)(eH,{richText:!0,tagInfo:e,css:{height:"auto",padding:0,fontSize:"11px",lineHeight:"16px",marginTop:"6px","&:first-of-type":{marginLeft:0}}},e.text)})}),(0,h.BX)(_.Flex,{flexDirection:"row",justifyContent:"space-between",alignItems:"flex-start",css:w,children:[(0,h.BX)("div",{css:(0,c._)((0,a._)({},(0,R.S)(2)),{flex:"1 1 auto",lineHeight:"16px",paddingTop:"4px"}),children:[(0,h.BX)("span",{children:[(0,J.Jd)(s),!!d.length&&" \xb7 "]}),d.map(function(e){return(0,h.tZ)(eH,{tagInfo:e,css:{fontSize:w.fontSize,paddingLeft:0,paddingRight:0}},e.text)})]}),x&&(0,h.BX)(_.Flex,{css:{flexShrink:0,alignItems:"center",marginLeft:"20px",color:Z},children:[(0,h.BX)(ey,{query:{openEditor:!0,anchorCommentId:t.id,rootCommentId:o,replyAuthorName:t.author.name,resourceId:p,resourceType:g},innerStyle:{padding:y?"4px":0},onClick:function(e){n&&!n.canReply&&n.toast&&(e.preventDefault(),(0,I.Z)("ui/showToast").dispatch({text:n.toast}))},children:[y?(0,h.tZ)(V.Z,{size:16,center:!0}):(0,h.tZ)(eG,{size:20,center:!0}),!v.ZhihuHybrid&&!i&&(0,h.tZ)("span",{css:{marginLeft:"4px"},children:"回复"})]}),(!v.ZhihuHybrid||m)&&(0,h.tZ)(tt,{comment:t,rootCommentId:o})]})]})]})},to=function(e){var t=e.comment,n=e.emoticons,o=e.rootCommentId,r=t.author,i=t.authorTag,a=t.replyToAuthor,c=t.replyAuthorTag,l=em(),s=l.E02,u=l.E07,d=eh().authorTag.fontSize;return(0,h.tZ)(_.Flex,{css:{flexDirection:"column"},children:(0,h.tZ)(S.eV,{content:{type:"Comment",id:t.id},children:(0,h.BX)(S.Wi,{as:_.Flex,zaType:"Card",css:{marginTop:"4px"},children:[(0,h.tZ)(ex,{isSecondary:!0,user:r,css:{width:"24px",height:"24px"},badgeSize:13}),(0,h.BX)(_.Flex,{css:{flex:1,flexDirection:"column",marginLeft:"8px"},children:[(0,h.BX)("div",{css:{display:"flex",fontSize:d,color:s,alignItems:"center",fontWeight:"bold",lineHeight:"16px"},children:[(0,h.tZ)("span",{css:{flexShrink:0},children:r.name}),i.map(function(e){return(0,h.tZ)(eH,{tagInfo:e,css:{fontWeight:"normal",flexShrink:0}},e.text)}),a&&(0,h.BX)("div",{css:[(0,R.S)(1),{wordBreak:"break-all"}],children:[(0,h.tZ)(q.C,{size:10,center:!0,css:{margin:"0 4px",fill:u}}),(0,h.tZ)("span",{children:a.name}),c.map(function(e){return(0,h.tZ)(eH,{tagInfo:e,css:{fontWeight:"normal",display:"inline-block"}},e.text)})]})]}),(0,h.tZ)(eP,{comment:t,emoticons:n,rootCommentId:o,css:{marginTop:"4px"}}),(0,h.tZ)(tn,{comment:t,rootCommentId:o,css:{marginTop:"-4px"},isSecondary:!0})]})]})})})},tr=function(e){var t=e.id,n=e.count,o=e.offsetLeft,r=e.shownCount,i=em(),a=i.E01,c=i.E02,l=(0,f.useContext)(ep).viewAllButtonAutoShow;return!n||l&&r===n?null:(0,h.BX)(ey,{as:_.Text,css:{display:"flex",justifyContent:"flex-start",marginTop:"8px",marginLeft:o},innerStyle:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",fontSize:"12px",height:"28px",background:a,color:c,padding:"0 10px 0 16px",borderRadius:"14px"},query:{rootCommentId:t},children:[(0,h.BX)("span",{children:["查看全部"," ".concat((0,b.Zh)(n)),"条回复"]}),(0,h.tZ)(j.Z,{center:!0,size:18})]})},ti=function(e){var t=e.comments,n=e.count,o=e.emoticons,r=e.rootCommentId,i=(0,f.useContext)(ep),a=i.showSecondaryComment,c=i.showSecondaryCommentButton;return(a||c)&&0!==t.length?(0,h.BX)(_.Flex,{css:{borderRadius:"8px",flexDirection:"column",marginTop:"6px",marginLeft:"40px"},children:[a&&t.map(function(e){return(0,h.tZ)(S.eV,{content:{type:"Comment",id:e.id},children:(0,h.tZ)(to,{comment:e,emoticons:o,rootCommentId:r})},e.id)}),c&&(0,h.tZ)(tr,{id:r,count:n,offsetLeft:a?32:0,shownCount:t.length})]}):null},ta=function(e){var t=e.comment,n=e.editStatus,o=e.showInteractions,r=e.emoticons,i=t.author,a=t.authorTag,c=t.childComments,l=t.childCommentCount,s=t.id,u=(0,f.useContext)(ep).commentUnfoldable;return(0,h.BX)(_.Flex,{css:{flexDirection:"column"},children:[(0,h.tZ)(S.eV,{content:{type:"Comment",id:t.id},children:(0,h.BX)(S.Wi,{as:_.Flex,zaType:"Card",css:{marginTop:"16px"},children:[(0,h.tZ)(ex,{user:i}),(0,h.BX)(_.Flex,{css:{flex:1,flexDirection:"column",marginLeft:"10px"},children:[(0,h.tZ)(eF,{user:i,authorTags:a}),(0,h.tZ)(eP,{unfoldable:u,comment:t,emoticons:r}),(0,h.tZ)(tn,{comment:t,editStatus:n,showInteractions:o})]})]})}),(0,h.tZ)(ti,{comments:void 0===c?[]:c,count:l,emoticons:r,rootCommentId:s})]})},tc=function(e){return{marginTop:"20px",color:e.colors.GBK06A,fontSize:"13px",width:"100%",justifyContent:"center",lineHeight:"normal",alignItems:"center"}},tl=function(e){var t=e.totalCounts,n=e.commentCount,o=e.shownCommentCount,r=e.viewAllButtonAutoShow,i=e.customFooter,a=e.anchorCommentId,c=e.shouldAnchorComment;return o?!r||o<t?(0,h.tZ)(ey,{as:_.Flex,css:tc,query:c&&{anchorCommentId:a},children:i?i(n):(0,h.BX)(h.HY,{children:[(0,h.tZ)("span",{css:{height:"18px"},children:"查看全部评论"}),(0,h.tZ)(j.Z,{size:18,center:!0,css:function(e){return{color:e.colors.GBK06A,marginLeft:"4px"}}})]})}):(0,h.tZ)(_.Flex,{css:tc,children:"没有更多评论了"}):null},ts=function(e){var t=0;return e.forEach(function(e){t+=1+e.childCommentCount}),t},tu=function(e){var t,n,o=e.className,r=e.showInteractions,i=e.resourceType,a=e.resourceId,c=e.currentUserId,l=e.limit,u=e.showCommentInput,d=e.inputPlaceholder,m=e.customHeader,p=e.customFooter,g=e.customCommentClosed,v=e.customNoComments,C=e.scrollToLastOnShowMore,x=e.onCommentChange,Z=e.commentType,S=void 0===Z?"abstract_comment":Z,T=e.onLoad,k=e.onInputShowTips,z=e.defaultUnfoldContent,E=void 0!==z&&z,L=e.viewAllButtonAutoShow,B=e.showOnlyHotComments,A=(0,s._)((0,f.useState)([]),2),N=A[0],H=A[1],R=em(),D=R.E02,F=R.E04,O=(0,f.useContext)(ep),M=O.fetcher,P=O.data,U=O.dispatch,G=(0,w.Z)(P),X=(0,y.Z)(x),K=(0,y.Z)(function(){M("/api/v4/comment_v5/".concat(i,"s/").concat(a,"/").concat(S),{query:{limit:l}}).then(function(e){return U({type:eg.LOAD_COMMENT_PREVIEW,payload:e})})});(0,f.useEffect)(K,[K]),(0,f.useEffect)(function(){var e=(0,I.Z)("base/onMessage").listen(function(e){var t=e.type,n=e.data;if("comment/listChange"===t){var o=n.status;n.resourceType===i&&String(n.resourceId)===String(a)&&(K(),X(o))}});return function(){return e()}},[]);var V=(null==P?void 0:null===(t=P.commentStatus)||void 0===t?void 0:t.type)===1;if((0,f.useEffect)(function(){V||eo().then(H)},[V]),(0,f.useEffect)(function(){!G&&P&&(null==T||T())},[G,P,T]),!P)return null;var q=P.counts,Y=void 0===q?{}:q,j=Y.totalCounts,W=Y.rootHotCommentCounts,J=P.data,$=void 0===J?[]:J,Q=P.editStatus,ee=P.commentStatus;if(B&&(void 0===W?0:W)<2)return(0,h.tZ)(_.Flex,{height:24});if(V)return g||null;var et=j>0?(0,b.Zh)(j):"";return(0,h.BX)(_.Flex,{className:o,flexDirection:"column",m:"0 16px 40px",bg:F,children:[m?m(et):(0,h.tZ)(_.Box,{color:D,css:{fontSize:"15px",fontWeight:500,marginBottom:"16px"},children:"评论 ".concat(et)}),u&&(0,h.tZ)(e_,{commentStatus:void 0===ee?{}:ee,inputPlaceholder:d,emoticons:N,currentUserId:void 0===c?"":c,onInputShowTips:k}),$.map(function(e,t){return(0,h.tZ)(ta,{comment:e,editStatus:Q,showInteractions:r,emoticons:N,index:t,defaultUnfoldContent:E},e.id)}),(0,h.tZ)(tl,{totalCounts:j,commentCount:et,shownCommentCount:ts($),viewAllButtonAutoShow:void 0!==L&&L,customFooter:p,anchorCommentId:null===(n=$[$.length-1])||void 0===n?void 0:n.id,shouldAnchorComment:C&&!!$.length}),0===$.length&&(v||null)]})};tu.propTypes={className:v().string,showCommentInput:v().bool,showSecondaryComment:v().bool,showSecondaryCommentButton:v().bool,listHeight:v().number,maskTransparent:v().bool,commentUnfoldable:v().bool,resourceType:v().string.isRequired,resourceId:v().string.isRequired,limit:v().number,currentUserId:v().string,inputPlaceholder:v().string,redirectUrl:v().string,customHeader:v().func,customFooter:v().func,customCommentClosed:v().node,customNoComments:v().node,onCommentChange:v().func,onAllCommentsShow:v().func,onLoad:v().func,onInputShowTips:v().func,commentType:v().string,showInteractions:v().bool},tu.defaultProps={showInteractions:!0,showCommentInput:!0,showSecondaryComment:!0,showSecondaryCommentButton:!0,commentUnfoldable:!1,onCommentChange:x()};var td=(0,f.forwardRef)(function(e,t){return(0,h.tZ)(eC,(0,c._)((0,a._)({},e),{children:(0,h.tZ)(S.eV,{block:"Comment",children:(0,h.tZ)(tu,(0,c._)((0,a._)({},e),{ref:t}))})}))})}}]);
//# sourceMappingURL=lib-38cf5c11.fcd37182eaf1cc9980bc.js.map