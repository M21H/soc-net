(this["webpackJsonpsoc-net"]=this["webpackJsonpsoc-net"]||[]).push([[3],{339:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var o=r(111);function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],o=!0,n=!1,i=void 0;try{for(var s,a=e[Symbol.iterator]();!(o=(s=a.next()).done)&&(r.push(s.value),!t||r.length!==t);o=!0);}catch(c){n=!0,i=c}finally{try{o||null==a.return||a.return()}finally{if(n)throw i}}return r}}(e,t)||Object(o.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},340:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var o=r(5),n=(r(0),r(20)),i=r(8),s=r(1),a=function(e){return{isAuth:e.auth.isAuth}},c=function(e){return Object(n.b)(a)((function(t){return t.isAuth?Object(s.jsx)(e,Object(o.a)({},t)):Object(s.jsx)(i.a,{to:"/login"})}))}},341:function(e,t,r){"use strict";var o=r(39),n=r(40);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(r(0)),s=(0,o(r(41)).default)(i.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"}),"Info");t.default=s},342:function(e,t,r){e.exports={profile:"Profile_profile__3dzvr",profile__overlay:"Profile_profile__overlay__134mt",profile__container:"Profile_profile__container__1aC9S",profile__about:"Profile_profile__about__22ERX",profile__avatar:"Profile_profile__avatar__36dOz",profile__fullname:"Profile_profile__fullname__2Yk6n",profileData:"Profile_profileData__2iLhO",profileData__container:"Profile_profileData__container__3r5z1"}},343:function(e,t,r){},344:function(e,t,r){},345:function(e,t,r){e.exports={profileInfo:"ProfileInfo_profileInfo__2IJgv",profileInfo__title:"ProfileInfo_profileInfo__title__1G6S8",profileInfo__text:"ProfileInfo_profileInfo__text__3lCIf"}},346:function(e,t,r){},350:function(e,t,r){"use strict";var o=r(2),n=r(12),i=r(0),s=(r(4),r(54)),a=r(113),c=r(110),l=Object(c.a)(i.createElement("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");var u=i.forwardRef((function(e,t){var r=e.alt,a=e.children,c=e.classes,u=e.className,f=e.component,j=void 0===f?"div":f,d=e.imgProps,b=e.sizes,p=e.src,h=e.srcSet,O=e.variant,m=void 0===O?"circle":O,_=Object(n.a)(e,["alt","children","classes","className","component","imgProps","sizes","src","srcSet","variant"]),v=null,x=function(e){var t=e.src,r=e.srcSet,o=i.useState(!1),n=o[0],s=o[1];return i.useEffect((function(){if(t||r){s(!1);var e=!0,o=new Image;return o.src=t,o.srcSet=r,o.onload=function(){e&&s("loaded")},o.onerror=function(){e&&s("error")},function(){e=!1}}}),[t,r]),n}({src:p,srcSet:h}),g=p||h,y=g&&"error"!==x;return v=y?i.createElement("img",Object(o.a)({alt:r,src:p,srcSet:h,sizes:b,className:c.img},d)):null!=a?a:g&&r?r[0]:i.createElement(l,{className:c.fallback}),i.createElement(j,Object(o.a)({className:Object(s.a)(c.root,c.system,c[m],u,!y&&c.colorDefault),ref:t},_),v)}));t.a=Object(a.a)((function(e){return{root:{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},colorDefault:{color:e.palette.background.default,backgroundColor:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[600]},circle:{},circular:{},rounded:{borderRadius:e.shape.borderRadius},square:{borderRadius:0},img:{width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4},fallback:{width:"75%",height:"75%"}}}),{name:"MuiAvatar"})(u)},352:function(e,t,r){"use strict";r.r(t);var o=r(66),n=r(67),i=r(77),s=r(76),a=r(0),c=r.n(a),l=r(339),u=r(342),f=r.n(u),j=r(20),d=r(112),b=r(5),p=r(101),h=r(147),O=r(343),m=r.n(O),_=r(344),v=r.n(_),x=r(1),g=function(e){var t=e.message,r=e.likeCount;return Object(x.jsxs)("div",{className:v.a.post,children:[t,Object(x.jsx)("span",{children:r})]})},y=r(29),P=r(78),S=c.a.memo((function(e){var t=e.posts,r=e.addPost;return Object(x.jsxs)("div",{children:[Object(x.jsx)(N,{onSubmit:function(e){return r(e.newPostText)}}),t.map((function(e){return Object(x.jsx)(g,Object(b.a)({},e),e.id)}))]})})),I=Object(P.a)(10),N=function(e){var t=e.handleSubmit;return Object(x.jsxs)("form",{className:m.a.myPosts,onSubmit:t,children:[Object(x.jsx)(p.a,{component:y.b,placeholder:"write message",validate:[P.b,I],name:"newPostText"}),Object(x.jsx)("button",{children:"Add post"})]})};N=Object(h.a)({form:"AddNewPostForm"})(N);var k=S,w=Object(j.b)((function(e){return{newPostText:e.profilePage.newPostText,posts:e.profilePage.posts}}),(function(e){return{addPost:function(t){e(Object(d.a)(t))}}}))(k),A=function(e){var t=e.userStatus,r=e.updateUserStatus,o=c.a.useState(!1),n=Object(l.a)(o,2),i=n[0],s=n[1],a=c.a.useState(t),u=Object(l.a)(a,2),f=u[0],j=u[1];c.a.useEffect((function(){j(t)}),[t]);return Object(x.jsx)("div",{children:i?Object(x.jsx)("div",{children:Object(x.jsx)("input",{style:{backgroundColor:"inherit",color:"white",fontSize:"24px",outline:0,border:"none",fontWeight:"bold"},onChange:function(e){return j(e.currentTarget.value)},onBlur:function(){s(!1),r(f)},autoFocus:!0,value:f})}):Object(x.jsx)("div",{children:Object(x.jsx)("span",{onDoubleClick:function(){s(!0)},children:t||"---------"})})})},z=r(350),F=r(114),C=r(345),M=r.n(C),D=r(341),U=r.n(D),E=function(e){var t=e.profile,r=t.fullName,o=t.aboutMe,n=t.lookingForAJob,i=t.lookingForAJobDescription,s=t.contacts,a=e.isOwner,c=e.goToEditMode;return Object(x.jsxs)("div",{className:M.a.profileInfo,children:[Object(x.jsxs)("div",{className:M.a.profileInfo__title,children:[Object(x.jsx)(U.a,{className:M.a.profileInfo__icon}),Object(x.jsx)("p",{className:M.a.profileInfo__text,children:"Profile info"}),a&&Object(x.jsx)("button",{onClick:c,children:"edit"})]}),Object(x.jsxs)("div",{className:M.a.profileInfo__fullName,children:[Object(x.jsx)("b",{children:"Full name: "}),r]}),Object(x.jsxs)("div",{className:M.a.profileInfo__aboutMe,children:[Object(x.jsx)("b",{children:"About me:"})," ",o||Object(x.jsx)("em",{children:"nothing"})]}),Object(x.jsxs)("div",{className:M.a.profileInfo__lookingForAJob,children:[Object(x.jsx)("b",{children:"Looking for a job:"})," ",n?"yes":"no",n&&Object(x.jsxs)("div",{children:[Object(x.jsx)("b",{children:"My skills: "})," ",i]})]}),Object(x.jsxs)("div",{className:M.a.profileInfo__contacts,children:[Object(x.jsx)("b",{children:"Contacts: "}),Object.keys(s).map((function(e){return Object(x.jsx)(J,{title:e,value:s[e]},e)}))]})]})},J=function(e){var t=e.title,r=e.value;return Object(x.jsxs)("p",{style:{marginLeft:"20px"},children:[Object(x.jsx)("b",{children:t}),": ",r||Object(x.jsx)("em",{children:"nothing"})]})},T=r(346),R=r.n(T),L=Object(h.a)({form:"edit-profile"})((function(e){var t=e.handleSubmit,r=e.profile.contacts,o=e.error;return Object(x.jsxs)("form",{onSubmit:t,children:[Object(x.jsxs)("div",{className:R.a.profileInfo__title,children:[Object(x.jsx)(U.a,{className:R.a.profileInfo__icon}),Object(x.jsx)("p",{className:R.a.profileInfo__text,children:"Profile info"}),Object(x.jsx)("button",{children:"save"}),o&&Object(x.jsx)("div",{style:{color:"red"},children:o})]}),Object(x.jsxs)("div",{className:R.a.profileInfo__fullName,children:[Object(x.jsx)("b",{children:"Full name: "}),Object(y.c)("Full name","fullName",[],y.a)]}),Object(x.jsxs)("div",{className:R.a.profileInfo__aboutMe,children:[Object(x.jsx)("b",{children:"About me:"}),Object(y.c)("About me","aboutMe",[],y.b)]}),Object(x.jsxs)("div",{className:R.a.profileInfo__lookingForAJob,children:[Object(x.jsx)("b",{children:"Looking for a job:"}),Object(y.c)("","lookingForAJob",[],y.a,{type:"checkbox"}),Object(x.jsxs)("div",{children:[Object(x.jsx)("b",{children:"My skills: "}),Object(y.c)("My skills","lookingForAJobDescription",[],y.b)]})]}),Object(x.jsxs)("div",{className:R.a.profileInfo__contacts,children:[Object(x.jsx)("b",{children:"Contacts: "}),Object.keys(r).map((function(e){return Object(x.jsx)("div",{children:Object(x.jsxs)("b",{children:[e,": ",Object(y.c)(e,"contacts."+e,[],y.a)]})},e)}))]})]})})),V=function(e){var t=e.profile,r=e.userStatus,o=e.updateUserStatus,n=e.isOwner,i=e.savePhoto,s=e.saveProfile,a=c.a.useState(!1),u=Object(l.a)(a,2),j=u[0],d=u[1];if(!t)return Object(x.jsx)(F.a,{});return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("div",{className:f.a.profile,children:[Object(x.jsx)("div",{className:f.a.profile__overlay}),Object(x.jsx)("div",{className:f.a.profile__container,children:Object(x.jsxs)("div",{className:f.a.profile__about,children:[Object(x.jsxs)("div",{children:[Object(x.jsx)(z.a,{className:f.a.profile__avatar,src:t.photos.large}),Object(x.jsx)("div",{children:n&&Object(x.jsx)("input",{type:"file",onChange:function(e){e.target.files.length&&i(e.target.files[0])}})})]}),Object(x.jsxs)("div",{className:f.a.profile__fullname,children:[Object(x.jsx)("p",{children:t.fullName}),Object(x.jsx)(A,{userStatus:r,updateUserStatus:o})]})]})})]}),Object(x.jsx)("div",{className:f.a.profileData,children:Object(x.jsxs)("div",{className:f.a.profileData__container,children:[j?Object(x.jsx)(L,{initialValues:t,profile:t,onSubmit:function(e){s(e).then((function(){return d(!1)}))}}):Object(x.jsx)(E,{profile:t,isOwner:n,goToEditMode:function(){return d(!0)}}),Object(x.jsx)(w,{})]})})]})},q=r(11),B=r(8),G=r(340),H=function(e){Object(i.a)(r,e);var t=Object(s.a)(r);function r(){return Object(o.a)(this,r),t.apply(this,arguments)}return Object(n.a)(r,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(e),this.props.getUserStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t,r){this.props.match.params.userId!==e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return Object(x.jsx)(V,{profile:this.props.profile,userStatus:this.props.userStatus,updateUserStatus:this.props.updateUserStatus,isOwner:!this.props.match.params.userId,savePhoto:this.props.savePhoto,saveProfile:this.props.saveProfile})}}]),r}(c.a.Component);t.default=Object(q.d)(Object(j.b)((function(e){return{profile:e.profilePage.profile,userStatus:e.profilePage.userStatus,authorizedUserId:e.auth.userId,isAuth:e.auth.isAuth}}),{getUserProfile:d.c,getUserStatus:d.d,updateUserStatus:d.g,savePhoto:d.e,saveProfile:d.f}),B.g,G.a)(H)}}]);
//# sourceMappingURL=3.b0de518e.chunk.js.map