(this["webpackJsonppexels-app"]=this["webpackJsonppexels-app"]||[]).push([[0],{14:function(e,t,a){e.exports={Navbar:"Navbar_Navbar__1M98r",NavVisiable:"Navbar_NavVisiable__c-oZB",logo:"Navbar_logo__17-8-",search:"Navbar_search__3N4ny",searchVisiable:"Navbar_searchVisiable__gMdHk",logoContainer:"Navbar_logoContainer__1_fXv",navs:"Navbar_navs__3G8mH",navsElement:"Navbar_navsElement__2M9iD",more:"Navbar_more__1iAaa",tooltip:"Navbar_tooltip__2mjS8",btn:"Navbar_btn__lk2Ii"}},28:function(e,t,a){e.exports={Photo:"Photo_Photo__1aIwi",photoAdds:"Photo_photoAdds__1waZ9",photographer:"Photo_photographer__1WDbK",addsElement:"Photo_addsElement__2qCkc"}},29:function(e,t,a){e.exports={Banner:"Banner_Banner__3FIMg",photographer:"Banner_photographer__1fv4w",bannerContent:"Banner_bannerContent__Ihr0O",ideas:"Banner_ideas__72wbk",keyWord:"Banner_keyWord__ukvu8"}},31:function(e,t,a){e.exports={GalleryContainer:"PhotoGallery_GalleryContainer__SPDMh",gallery:"PhotoGallery_gallery__1EQHF",galleryGrid:"PhotoGallery_galleryGrid__3w3SL",galleryGridColumn:"PhotoGallery_galleryGridColumn__3Y4ij","my-masonry-grid_column":"PhotoGallery_my-masonry-grid_column__2sAaq",photoLoader:"PhotoGallery_photoLoader__X4HLA"}},48:function(e,t,a){e.exports={App:"App_App__2Bnyd"}},58:function(e,t,a){e.exports={RecommendsGallery:"RecommendsGallery_RecommendsGallery__2BDiB"}},59:function(e,t,a){e.exports={MainPage:"MainPage_MainPage__1aGO2"}},68:function(e,t,a){},69:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){var n={"./en.json":79,"./ru.json":80};function c(e){var t=o(e);return a(t)}function o(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}c.keys=function(){return Object.keys(n)},c.resolve=o,e.exports=c,c.id=78},79:function(e){e.exports=JSON.parse('{"en":{"translation":{"bannerContentText":"The best free stock photos & videos shared by talented creators.","ideasText":"Suggested:","moreIdeasText":"more","photographer":"Photo by ","bannerSearchPlaceholder":"Search for free photos and videos","findPhotoNav":"Explore","collectionNav":"Collection","licenceNav":"Licence","joinNav":"Join","navSearchPlaceholder":"Search for free photos","rusLangNav":"Russian","engLangNav":"English","searchWord":" Images"}}}')},80:function(e){e.exports=JSON.parse('{"ru":{"translation":{"bannerContentText":"\u041b\u0443\u0447\u0448\u0438\u0435 \u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u044b\u0435 \u0441\u0442\u043e\u043a\u043e\u0432\u044b\u0435 \u0444\u043e\u0442\u043e \u0438 \u0432\u0438\u0434\u0435\u043e \u043e\u0442 \u0442\u0430\u043b\u0430\u043d\u0442\u043b\u0438\u0432\u044b\u0445 \u0430\u0432\u0442\u043e\u0440\u043e\u0432.","ideasText":"\u0418\u0434\u0435\u0438 \u0434\u043b\u044f \u043f\u043e\u0438\u0441\u043a\u0430:","moreIdeasText":"\u0431\u043e\u043b\u044c\u0448\u0435","photographer":"\u0424\u043e\u0442\u043e\u0433\u0440\u0430\u0444: ","bannerSearchPlaceholder":"\u0418\u0449\u0438\u0442\u0435 \u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u044b\u0435 \u0444\u043e\u0442\u043e \u0438 \u0432\u0438\u0434\u0435\u043e","findPhotoNav":"\u041d\u0430\u0439\u0442\u0438 \u0444\u043e\u0442\u043e","collectionNav":"\u041a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u044f","licenceNav":"\u041b\u0438\u0446\u0435\u043d\u0437\u0438\u044f","joinNav":"\u041f\u0440\u0438\u0441\u043e\u0435\u0434\u0435\u043d\u0438\u0442\u044c\u0441\u044f","navSearchPlaceholder":"\u041f\u043e\u0438\u0441\u043a \u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u044b\u0445 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439","rusLangNav":"\u0420\u0443\u0441\u0441\u043a\u0438\u0439","engLangNav":"\u0410\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u0438\u0439","searchWord":"\u0424\u043e\u0442\u043e \u041d\u0430 \u0422\u0435\u043c\u0443 "}}}')},82:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(0),o=a.n(c),s=a(8),r=a.n(s),i=(a(68),a(5)),l=a(48),h=a.n(l),j=a(14),d=a.n(j),b=(a(69),a(102)),u={headers:{Authorization:"563492ad6f91700001000001a170c8b82295491f89605ae0c312c2c0"},withCredentials:!0},p=function(e,t,a){var n="";return n=t?"https://api.pexels.com/v1/search?page=".concat(e,"&query=").concat(a,"&per_page=24"):"https://api.pexels.com/v1/curated?page=".concat(e,"&per_page=24"),fetch(n,u).then((function(e){return e.json()})).then((function(e){return e}))},O=a(4),x=a(19),m=a(25),v=a(45),f=a(17),g="SET-PHOTOS",_="SET-INITIALIZE",N={photos:[],isInitialize:!1},y=function(e,t){return{type:g,photos:e,reset:t}},P=function(e){return{type:_,initialize:e}},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return t.reset?Object(f.a)(Object(f.a)({},e),{},{photos:[]}):Object(f.a)(Object(f.a)({},e),{},{photos:[].concat(Object(v.a)(e.photos),Object(v.a)(t.photos))});case _:return Object(f.a)(Object(f.a)({},e),{},{isInitialize:t.initialize});default:return e}},k=Object(x.d)(Object(m.b)((function(e){return{}}),{setPhotos:y,setInitialize:P}),O.f)((function(e){var t=Object(c.useState)(""),a=Object(i.a)(t,2),o=a[0],s=a[1],r=Object(c.useState)(1),l=Object(i.a)(r,2),h=l[0],j=(l[1],function(){e.setInitialize(!1),p(h,!0,o).then((function(t){console.log("Search",t),e.setPhotos(t.photos,!0),e.setPhotos(t.photos,!1),e.history.push("/search/".concat(o)),e.setInitialize(!0)}))});return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("input",{type:"text",placeholder:e.text,className:"searchField",onKeyPress:function(e){return"Enter"===e.key&&j()},onChange:function(e){return s(e.currentTarget.value)}}),Object(n.jsx)(b.a,{style:{fontSize:"20px",color:"#000"},className:"searchIcon",onClick:function(){return j()}})]})})),I=a(22),w=a(103),C=a(6),z=a(101),E=a(61),G=Object(x.d)(O.f)((function(e){var t=Object(E.a)((function(e){return{tooltip:{backgroundColor:e.palette.common.white,color:"black",boxShadow:e.shadows[1],fontSize:16,width:"300px"},arrow:{color:e.palette.common.white}}}))(z.a),a=function(){return Object(n.jsxs)("div",{className:d.a.tooltip,children:[Object(n.jsxs)("div",{onClick:function(){return e.changeLanguage("ru")},children:["\ud83c\uddf7\ud83c\uddfa ",C.a.t("rusLangNav")]}),Object(n.jsxs)("div",{onClick:function(){return e.changeLanguage("en")},children:["\ud83c\uddec\ud83c\udde7 ",C.a.t("engLangNav")]})]})},o=Object(c.useState)(!1),s=Object(i.a)(o,2),r=s[0],l=s[1];return window.onscroll=function(){var e=document.body.parentElement.scrollTop;l(e>100)},Object(n.jsxs)("div",{className:"".concat(d.a.Navbar," ").concat((r||e.location.pathname.includes("/search"))&&d.a.NavVisiable),children:[Object(n.jsx)(I.b,{to:"/",className:d.a.logoContainer,onClick:function(){e.setPhotos([],!0),p(1,!1,"").then((function(t){e.setPhotos(t.photos,!1)}))},children:Object(n.jsxs)("div",{className:d.a.logo,children:[Object(n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"40px",height:"40px",viewBox:"0 0 32 32",children:[Object(n.jsx)("path",{d:"M2 0h28a2 2 0 0 1 2 2v28a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z",fill:"#05A081"}),Object(n.jsx)("path",{d:"M13 21h3.863v-3.752h1.167a3.124 3.124 0 1 0 0-6.248H13v10zm5.863 2H11V9h7.03a5.124 5.124 0 0 1 .833 10.18V23z",fill:"#fff"})]}),Object(n.jsx)("p",{children:"Pexels"})]})}),Object(n.jsx)("div",{className:"".concat(d.a.search," ").concat((r||e.location.pathname.includes("/search"))&&d.a.searchVisiable),children:Object(n.jsx)(k,{text:C.a.t("navSearchPlaceholder")})}),Object(n.jsxs)("div",{className:d.a.navs,children:[Object(n.jsx)(I.b,{to:"/search",className:d.a.navsElement,children:C.a.t("findPhotoNav")}),Object(n.jsx)("div",{className:d.a.navsElement,children:C.a.t("collectionNav")}),Object(n.jsx)("div",{className:d.a.navsElement,children:C.a.t("licenceNav")}),Object(n.jsx)(t,{title:Object(n.jsx)(a,{}),arrow:!0,interactive:!0,leaveDelay:200,placement:"bottom-end",children:Object(n.jsx)(w.a,{className:d.a.more})}),Object(n.jsx)("div",{className:d.a.btn,children:C.a.t("joinNav")})]})]})})),L=a(31),M=a.n(L),T=a(56),B=a.n(T),A=a(28),W=a.n(A),F=a(104),D=a(105),V=a(106),H=a(107),U=a.p+"static/media/loader.924d4133.svg",q=function(e){var t=Object(c.useState)(e.getStorage("likes").split(",").includes(String(e.photoId))),a=Object(i.a)(t,2),o=a[0],s=a[1],r=Object(c.useState)(!1),l=Object(i.a)(r,2),h=l[0],j=l[1],d=function(t,a){s(t);var n=e.getStorage("likes").split(",");t?n.push(a):n=n.filter((function(e){return e!==String(a)})),e.setStorage("likes",n),document.getElementById("app")};return Object(n.jsxs)("div",{className:W.a.Photo,id:"photo",children:[Object(n.jsx)("img",{src:e.url,alt:""}),Object(n.jsxs)("div",{className:W.a.photoAdds,children:[Object(n.jsx)("div",{className:W.a.photographer,children:e.photographer}),Object(n.jsx)("div",{children:h?Object(n.jsx)("object",{type:"image/svg+xml",data:U,children:"svg-animation"}):Object(n.jsx)("a",{href:e.url,download:!0,onClick:function(t){return function(t){t.preventDefault(),j(!0);var a=e.downloadUrl;fetch(a,{method:"GET",headers:{}}).then((function(e){e.arrayBuffer().then((function(e){var t=window.URL.createObjectURL(new Blob([e])),a=document.createElement("a");a.href=t,a.setAttribute("download","image.jpeg"),document.body.appendChild(a),a.click(),j(!1)}))})).catch((function(e){console.log(e)}))}(t)},children:Object(n.jsx)(F.a,{style:{fontSize:"20px"},className:W.a.addsElement})})}),Object(n.jsx)("div",{children:Object(n.jsx)(D.a,{style:{fontSize:"20px"},className:W.a.addsElement})}),Object(n.jsx)("div",{children:e.getStorage("likes").split(",").includes(String(e.photoId))&&o?Object(n.jsx)(V.a,{style:{fontSize:"20px"},twoToneColor:"#FF0000",onClick:function(){return d(!1,e.photoId)}}):Object(n.jsx)(H.a,{style:{fontSize:"20px"},className:W.a.addsElement,onClick:function(){return d(!0,e.photoId)}})})]})]})},R=a(57),J=a.p+"static/media/photoLoader.53805245.svg",Z=function(e){Object(c.useEffect)((function(){!t("likes")&&a("likes","")}));var t=function(e){return localStorage.getItem(e)},a=function(e,t){return localStorage.setItem(e,t)},o=Object(c.useState)(!1),s=Object(i.a)(o,2),r=s[0],l=s[1],h=e.history.location.pathname.replace("/search/",""),j=function(){l(!0);var t=e.page+1;e.setPage(t);var a=!1;"/"!==e.history.location.pathname&&(a=!0),e.setPhotosAPI(t,a,h).then((function(t){console.log("scroll:",t),e.setPhotos(t.photos,!1),l(!1)}))};return Object(n.jsxs)("div",{className:M.a.GalleryContainer,children:[e.location.pathname.includes("/search")&&("ru"===e.language?Object(n.jsx)("h1",{children:"\n                                ".concat(C.a.t("searchWord"),"\n                                \xab").concat(h[0].toUpperCase()+h.slice(1),"\xbb\n                                ")}):Object(n.jsx)("h1",{children:"\n                                ".concat(h[0].toUpperCase()+h.slice(1),"\n                                ").concat(C.a.t("searchWord"),"\n                            ")})),Object(n.jsx)("div",{className:M.a.gallery,children:Object(n.jsx)(B.a,{breakpointCols:{default:3,1070:2,590:1},className:M.a.galleryGrid,columnClassName:M.a.galleryGridColumn,children:e.photos.map((function(c,o){var s=Object(n.jsx)("div",{children:Object(n.jsx)(q,{url:c.src.large,downloadUrl:c.src.original,isLiked:c.liked,photographer:c.photographer,photoId:c.id,getStorage:t,setStorage:a})},o);return o===e.photos.length-5?Object(n.jsx)(R.a,{onEnter:j,children:s}):s}))})}),r&&Object(n.jsx)("div",{className:M.a.photoLoader,children:Object(n.jsx)("object",{type:"image/svg+xml",data:J,children:"svg-animation"})})]})},K=a(58),X=a.n(K),Q=function(e){return Object(n.jsx)("div",{className:X.a.RecommendsGallery,children:e.keyWords.map((function(e){p(1,!0,e).then((function(t){t.photos;return Object(n.jsxs)("div",{children:[e,Object(n.jsx)("img",{src:t.photos[0].src.large,alt:""})]})}))}))})},Y=function(e){var t=e.history.location.pathname.replace("/search","");return e.isInitialize&&Object(n.jsx)("div",{className:"galleryComponent",children:""===t?Object(n.jsx)(Q,{keyWords:e.keyWords}):Object(n.jsx)(Z,Object(f.a)({},e))})},$=a(59),ee=a.n($),te=a(29),ae=a.n(te),ne=function(e){var t=Object(c.useState)(""),a=Object(i.a)(t,2),o=a[0],s=a[1],r=Object(c.useState)(""),l=Object(i.a)(r,2),h=l[0],j=l[1],d=Object(c.useState)(""),b=Object(i.a)(d,2),O=b[0],x=b[1],m=[],v="",f=function t(){v=e.keyWords[Math.floor(Math.random()*e.keyWords.length)],m.includes(v)?t():m.push(v)},g=function t(){e.setInitialize(!1);var a=9999999*Math.random();(function(e,t){return t?fetch("https://api.pexels.com/v1/photos/".concat(e),u).then((function(e){return e.json()})).then((function(e){return e})):null})(a=Math.round(a),!0).then((function(a){console.log(a),a.src?(s(a.src.landscape),j(a.photographer),x(a.photographer_url),e.setInitialize(!0)):t()}))};return Object(c.useEffect)((function(){g()}),[]),e.isInitialize&&Object(n.jsxs)("div",{className:ae.a.Banner,children:[Object(n.jsxs)("div",{className:ae.a.bannerContent,children:[Object(n.jsx)("h1",{children:C.a.t("bannerContentText")}),Object(n.jsx)("div",{children:Object(n.jsx)(k,{text:C.a.t("bannerSearchPlaceholder")})}),Object(n.jsxs)("div",{className:ae.a.ideas,children:[C.a.t("ideasText"),e.keyWords.map((function(t,a){if(0===a&&(m=[]),m.push(t),a<7)return void 0!==t&&f(),Object(n.jsx)(I.b,{className:ae.a.keyWord,to:"/search/".concat(t),onClick:function(){p(1,!0,v).then((function(t){e.setPhotos(t.photos,!0),e.setPhotos(t.photos,!1)}))},children:Object(n.jsxs)("p",{children:[v,","]})})})),Object(n.jsx)(I.b,{className:ae.a.keyWord,to:"/search",children:Object(n.jsx)("p",{children:C.a.t("moreIdeasText")})})]})]}),""!==h&&Object(n.jsx)("p",{className:ae.a.photographer,children:Object(n.jsxs)("a",{href:O,target:"_blank",children:[C.a.t("photographer"),h]})}),Object(n.jsx)("img",{src:o,alt:""})]})},ce={setPhotos:y,setInitialize:P},oe=Object(x.d)(Object(m.b)((function(e){return{photos:e.Main.photos,isInitialize:e.Main.isInitialize}}),ce),O.f)((function(e){var t=Object(c.useState)(1),a=Object(i.a)(t,2),o=a[0],s=a[1];return Object(c.useEffect)((function(){p(o).then((function(t){console.log("useEffect",t),e.setPhotos(t.photos,!1),e.setInitialize(!0)}))}),[]),Object(n.jsxs)("div",{className:ee.a.MainPage,children:[Object(n.jsx)(O.b,{exact:!0,path:"/",children:Object(n.jsx)(ne,Object(f.a)({},e))}),Object(n.jsx)(Y,Object(f.a)(Object(f.a)({},e),{},{setPhotosAPI:p,page:o,setPage:s}))]})})),se=(a(77),function(){return Object(n.jsx)("div",{className:"loader",children:Object(n.jsxs)("div",{className:"loaderContent",children:[Object(n.jsx)("div",{className:"loading",children:"Loading"}),Object(n.jsxs)("div",{id:"circleG",children:[Object(n.jsx)("div",{id:"circleG_1",className:"circleG"}),Object(n.jsx)("div",{id:"circleG_2",className:"circleG"}),Object(n.jsx)("div",{id:"circleG_3",className:"circleG"})]}),Object(n.jsxs)("div",{className:"l_main",children:[Object(n.jsxs)("div",{className:"l_square",children:[Object(n.jsx)("span",{}),Object(n.jsx)("span",{}),Object(n.jsx)("span",{})]}),Object(n.jsxs)("div",{className:"l_square",children:[Object(n.jsx)("span",{}),Object(n.jsx)("span",{}),Object(n.jsx)("span",{})]}),Object(n.jsxs)("div",{className:"l_square",children:[Object(n.jsx)("span",{}),Object(n.jsx)("span",{}),Object(n.jsx)("span",{})]}),Object(n.jsxs)("div",{className:"l_square",children:[Object(n.jsx)("span",{}),Object(n.jsx)("span",{}),Object(n.jsx)("span",{})]})]})]})})});var re={setPhotos:y},ie=Object(m.b)((function(e){return{isInitialize:e.Main.isInitialize}}),re)((function(e){var t=["dogs","cats","coffee","summer","winter","autumn","spring","home","baby","cars","animals","people","woman","man","clothes","wedding","food","new year","christmas","easter","dress","forest","sea","ocean","beach","sun","space","moon","sky","night","grass","morning","love","glass","water","fire","air","earth","plants","planet","color","make up","light"],o=["\u0441\u043e\u0431\u0430\u043a\u0438","\u043a\u043e\u0442\u044b","\u043a\u043e\u0444\u0435","\u043b\u0435\u0442\u043e","\u0437\u0438\u043c\u0430","\u043e\u0441\u0435\u043d\u044c","\u0432\u0435\u0441\u043d\u0430","\u0434\u043e\u043c","\u0440\u0435\u0431\u0435\u043d\u043e\u043a","\u043c\u0430\u0448\u0438\u043d\u044b","\u0436\u0438\u0432\u043e\u0442\u043d\u044b\u0435","\u043b\u044e\u0434\u0438","\u0436\u0435\u043d\u0449\u0438\u043d\u0430","\u043c\u0443\u0436\u0447\u0438\u043d\u0430","\u043e\u0434\u0435\u0436\u0434\u0430","\u0441\u0432\u0430\u0434\u044c\u0431\u0430","\u0435\u0434\u0430","\u043d\u043e\u0432\u044b\u0439 \u0433\u043e\u0434","\u0440\u043e\u0436\u0434\u0435\u0441\u0442\u0432\u043e","\u043f\u0430\u0441\u0445\u0430","\u043f\u043b\u0430\u0442\u044c\u0435","\u043b\u0435\u0441","\u043c\u043e\u0440\u0435","\u043e\u043a\u0435\u0430\u043d","\u043f\u043b\u044f\u0436","\u0441\u043e\u043b\u043d\u0446\u0435","\u043a\u043e\u0441\u043c\u043e\u0441","\u043b\u0443\u043d\u0430","\u043d\u0435\u0431\u043e","\u043d\u043e\u0447\u044c","\u0442\u0440\u0430\u0432\u0430","\u0443\u0442\u0440\u043e","\u043b\u044e\u0431\u043e\u0432\u044c","\u0441\u0442\u0435\u043a\u043b\u043e","\u0432\u043e\u0434\u0430","\u043e\u0433\u043e\u043d\u044c","\u0432\u043e\u0437\u0434\u0443\u0445","\u0437\u0435\u043c\u043b\u044f","\u0440\u0430\u0441\u0442\u0435\u043d\u0438\u044f","\u043f\u043b\u0430\u043d\u0435\u0442\u0430","\u0446\u0432\u0435\u0442","\u043c\u0430\u043a\u0438\u044f\u0436","\u0441\u0432\u0435\u0442"],s=Object(c.useState)("en"),r=Object(i.a)(s,2),l=r[0],j=r[1],d=Object(c.useState)(t),b=Object(i.a)(d,2),u=b[0],p=b[1];Object(c.useEffect)((function(){x(l)}),[]);var x=function(e){C.a.init({lng:e,resources:a(78)("./".concat(e,".json"))}),j(e),"ru"===e?p(o):"en"===e&&p(t)};return Object(n.jsxs)("div",{className:e.isInitialize&&h.a.App,children:[Object(n.jsx)(O.a,{from:"/pexels-app",to:"/"}),e.isInitialize&&Object(n.jsx)(G,{setPhotos:e.setPhotos,changeLanguage:x}),Object(n.jsx)(oe,{keyWords:u}),!e.isInitialize&&Object(n.jsx)(se,{})]})})),le=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,109)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,o=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),o(e),s(e)}))},he=a(60),je=Object(x.c)({Main:S}),de=Object(x.e)(je,Object(x.a)(he.a));window.store=de;var be=de;a(81);r.a.render(Object(n.jsx)(o.a.StrictMode,{children:Object(n.jsx)(m.a,{store:be,children:Object(n.jsx)(I.a,{children:Object(n.jsx)(ie,{})})})}),document.getElementById("root")),le()}},[[82,1,2]]]);
//# sourceMappingURL=main.37a672b6.chunk.js.map