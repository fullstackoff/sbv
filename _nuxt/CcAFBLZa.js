import{_ as S,t as n,v as r,x as _,d as b,g as Y,L as k,M as z,N as y,y as M,o as $,r as c,z as v,O as d,P as A,Q as U,R as G,S as q,i as N,H as J,K,T as V,U as L,V as Q,A as j,W as H,X as F,B as O,Y as Z,Z as ee,$ as D,a0 as T,a1 as te,a2 as se,C as oe,D as ne}from"./DkKC22xH.js";import{t as ae,a as ce,i as le,v as X}from"./BpL3s1QW.js";const re={props:["size"]},ie=["width","height"];function ue(e,t,s,o,a,l){return n(),r("div",null,[_("img",{width:s.size+"px",height:s.size+"px"},null,8,ie)])}const de=S(re,[["render",ue]]),E=b({__name:"Button",props:["icon","label","iconClass","labelClass","disabled","disabledClass"],setup(e){return(t,s)=>{const o=Y("fa");return n(),r("div",{class:z([e.disabled?e.disabledClass:""])},[e.icon!==void 0?(n(),k(o,{key:0,icon:e.icon,class:z(e.iconClass)},null,8,["icon","class"])):y("",!0),e.label!==void 0?(n(),r("span",{key:1,class:z(e.labelClass)},M(e.label),3)):y("",!0)],2)}}}),pe={class:"header animate__animated animate__fadeInDown"},fe={class:"d-flex flex-row w-100 justify-content-between align-items-center bg-light shadow"},_e={class:"d-flex flex-row aic"},me={class:"d-flex flex-row aic"},he=b({__name:"Header",props:[],setup(e){$(()=>{t()});async function t(){try{s.value=!0}catch{}}const s=c(!1);return(o,a)=>{const l=de,i=E;return n(),r("header",pe,[_("div",fe,[_("div",_e,[v(l,{size:70,class:"ovfxy"}),v(i,{onClick:a[0]||(a[0]=u=>o.$router.push("/")),class:"h6 my-0 ms-3 font-weight-black cursor-pointer",label:"Sergei Vasilev"})]),_("div",me,[v(i,{label:"New project",icon:"rocket",class:"d-flex flex-row flex-row-reverse text-success rounded-xl cursor-pointer aic me-3",iconClass:"ms-3",onClick:a[1]||(a[1]=u=>o.$emit("lead"))})])])])}}}),ve=S(he,[["__scopeId","data-v-3e0a23d9"]]),ge=b({__name:"ImageStatic",props:["url","fit"],setup(e){$(()=>{t()});async function t(){try{s.value=!0}catch{}}const s=c(!1);return(o,a)=>(n(),r("div"))}}),ye=S(ge,[["__scopeId","data-v-5e3b2021"]]),xe={key:0,class:"pos-relative w-100 h-100"},we=b({__name:"BeforeAfter",props:["images"],setup(e){const t=e,s=c(!1),o=c(!1),a=c(!1),l=c(50);$(()=>{i()});async function i(){try{await u(t.images),s.value=!0}catch{}}const u=async p=>{console.log(1),o.value=!0;function g(m){return new Promise((f,x)=>{const h=new Image;h.onload=()=>f(h),h.onerror=x,h.src=m})}try{const m=await Promise.all(p.map(f=>g(f.src)));a.value=!0,console.log("Images loaded successfully"),o.value=!1}catch(m){console.error("Error loading images",m)}};return(p,g)=>(n(),r("div",null,[d(a)?(n(),r("div",xe,[_("div",{class:"beforeAfterFirstImage",style:A("background-image:url("+e.images[0].src+")")},null,4),_("div",{class:"beforeAfterSecondImage",style:A("background-image:url("+e.images[1].src+"); width:"+d(l)+"%;")},null,4),U(_("input",{class:"beforeAfterInput",type:"range",min:"0",max:"100",step:"1","onUpdate:modelValue":g[0]||(g[0]=m=>q(l)?l.value=m:null)},null,512),[[G,d(l)]])])):y("",!0)]))}}),be=S(we,[["__scopeId","data-v-128fb667"]]),$e=b({__name:"BeforeAfter",props:[],setup(e){const t=c([{src:"/api/default/beforeafter/1.png"},{src:"/api/default/beforeafter/2.png"}]);$(()=>{s()});async function s(){try{o.value=!0}catch{}}const o=c(!1);return(a,l)=>{const i=be;return n(),r("div",null,[v(i,{images:d(t),class:"w-100 h-100"},null,8,["images"])])}}});function W(e){var t;const s=ce(e);return(t=s==null?void 0:s.$el)!=null?t:s}const je=le?window:void 0;function ke(){const e=c(!1),t=K();return t&&$(()=>{e.value=!0},t),e}function Ie(e){const t=ke();return N(()=>(t.value,!!e()))}function Ce(e,t,s={}){const{window:o=je,...a}=s;let l;const i=Ie(()=>o&&"ResizeObserver"in o),u=()=>{l&&(l.disconnect(),l=void 0)},p=N(()=>Array.isArray(e)?e.map(f=>W(f)):[W(e)]),g=J(p,f=>{if(u(),i.value&&o){l=new ResizeObserver(t);for(const x of f)x&&l.observe(x,a)}},{immediate:!0,flush:"post"}),m=()=>{u(),g()};return ae(m),{isSupported:i,stop:m}}const Pe={key:0,class:"placeholder"},Se={key:1,class:"wrapper"},Be=_("div",{class:"thumbsGradient"},null,-1),Me=["onClick"],Ue=["src"],Ve={__name:"StoriesGallery",props:["stories","settings"],setup(e){const t=e;$(()=>{s()});async function s(){try{o.value=!0}catch{}}const o=c(!1),a=c(null),l=c(0),i=c(0),u=c(1);c(0);const p=c(1);Ce(a,w=>{const C=w[0],{width:P,height:B}=C.contentRect;l.value=P,g(P)});const g=w=>{t.settings.thumbs&&(w>t.stories.length*80?p.value=t.stories.length:p.value=Math.floor((w-160)/80))},m=N(()=>t.stories.slice(p.value*u.value-p.value,p.value*u.value)),f=w=>{i.value=w},x=w=>{u.value=w,i.value=0},h=w=>w===i.value?"main":"thumb",I=w=>`left:${(l.value-80*p.value-160)/2+80+w*80}px;`;return(w,C)=>(n(),r("div",{ref_key:"el",ref:a},[d(o)?(n(),r("div",Se,[Be,_("div",{class:"pic thumb thumb-current",style:A(I(d(i)))},null,4),_("div",{class:"arrow arrow-left",onClick:C[0]||(C[0]=P=>x(d(u)-1))}),_("div",{class:"arrow arrow-right",onClick:C[1]||(C[1]=P=>x(d(u)+1))}),(n(!0),r(V,null,L(d(m),(P,B)=>(n(),r("div",{class:z(["pic",h(B)]),key:B+d(u)+d(l),onClick:ht=>f(B),style:A(I(B))},[_("img",{class:"img-cover",src:P},null,8,Ue)],14,Me))),128))])):(n(),r("div",Pe))],512))}},Le=b({__name:"StoriesGallery",props:[],setup(e){const t=c(["/api/default/storiesgallery/1.png","/api/default/storiesgallery/2.png","/api/default/storiesgallery/1.png"]),s=c({thumbs:!0});$(()=>{o()});async function o(){try{a.value=!0}catch{}}const a=c(!1);return(l,i)=>{const u=Ve;return n(),r("div",null,[v(u,{stories:d(t),settings:d(s),class:"w-100 h-100"},null,8,["stories","settings"])])}}}),ze={key:0,class:"d-flex jcc aic pos-relative w-100 h-100"},Ae=["src"],Ee={key:2,class:"productSpinnerInputWrapper"},Re=["max"],De=b({__name:"ProductSpinner",props:["images","autoload"],setup(e){const t=e,s=c(!1),o=c(!1),a=c(0),l=c(!1),i=c(!1);$(()=>{u()});async function u(){try{t.images[0]!==void 0&&(p(t.images[0].src),t.autoload&&g(t.images)),l.value=!0}catch{}}const p=m=>{i.value=!0;let f=new Image;f.src=m,f.onload=()=>{s.value=!0,i.value=!1}},g=m=>{let f=0;i.value=!0,m.forEach((x,h)=>{let I=new Image;I.src=m[h].src,I.onload=()=>{f++,f===m.length&&(o.value=!0,i.value=!1)}})};return(m,f)=>{const x=E;return n(),r("div",null,[d(s)?(n(),r("div",ze,[!e.autoload&&!d(o)?(n(),k(x,{key:0,class:"spinnerStartBtn",icon:["fas","rotate"],onClick:f[0]||(f[0]=h=>g(e.images))})):y("",!0),d(s)?(n(),r("img",{key:1,src:e.images[d(a)].src,class:"imgSpinner"},null,8,Ae)):y("",!0),d(o)?(n(),r("div",Ee,[U(_("input",{class:"productSpinnerInput",type:"range",id:"volume",name:"volume",min:"0",max:e.images.length-1,step:"1","onUpdate:modelValue":f[1]||(f[1]=h=>q(a)?a.value=h:null)},null,8,Re),[[G,d(a)]])])):y("",!0)])):y("",!0)])}}}),Oe=S(De,[["__scopeId","data-v-85861af3"]]),Ne=b({__name:"ProductSpinner",props:[],setup(e){const t=c([{src:"/api/default/storiesgallery/1.png"},{src:"/api/default/storiesgallery/2.png"},{src:"/api/default/storiesgallery/1.png"}]);$(()=>{s()});async function s(){try{o.value=!0}catch{}}const o=c(!1);return(a,l)=>{const i=Oe;return n(),r("div",null,[v(i,{images:d(t),class:"w-100 h-100"},null,8,["images"])])}}}),R=Q({id:"coolfolio",state:()=>({settings:{},data:{projects:[]},soft:{js:{src:"logos/ps.png"},css:{src:"logos/ps.png"},ps:{src:"logos/ps.png"},ae:{src:"logos/ae.png"},lr:{src:"logos/lr.png"},max:{src:"logos/max.png"},vray:{src:"logos/vray.png"}}}),getters:{getProjects:e=>e.data.projects},actions:{async fetchSettings(){try{const t=await(await fetch("/api/settings.json")).json();this.settings=t[0]}catch(e){console.error("Error fetching todos:",e)}},async fetchProjects(){try{const e=await fetch("/api/projects.json");this.data.projects=await e.json()}catch(e){console.error("Error fetching todos:",e)}},async fetchProjectParts(e){try{return await(await fetch(`/api/${e}.json`)).json()}catch(t){console.error("Error fetching todos:",t)}},async fetchFromYandexDisk(e){try{const t="https://cloud-api.yandex.net/v1/disk/public/resources?",s={public_key:this.settings.yandex_disk_url,path:"/"+e,limit:999,fields:["_embedded"]};return(await(await fetch(t+new URLSearchParams(s),{referrerPolicy:"no-referrer"})).json())._embedded.items}catch(t){console.log(t)}},parseFromYandexDisk({items:e,type:t,image_size:s}){try{if(t==="image")return e[0].sizes.find(o=>o.name===s).url;if(t==="ba")return[{src:e[0].sizes.find(o=>o.name===s).url},{src:e[1].sizes.find(o=>o.name===s).url}];if(t==="spinner"){let o=[];return e.forEach(a=>{o.push({src:a.sizes.find(l=>l.name===s).url})}),o}}catch(o){console.log(o)}}}}),Fe={class:"d-flex flex-column w-100 ar1 ovfxy"},Te={key:0,class:"animate__animated animate__fadeInUp w-100 h-100"},We={class:"d-flex flex-row jcb w-100 h-100 pos-absolute pe-none",style:{top:"0px","z-index":"66666"}},Ye={class:"d-flex flex-column h-100 jcb pb-4 pb-xl-5 ps-4 px-xl-5"},Ge={class:"text-light animate__animated animate__fadeInLeft animate__delay"},qe={class:"text-white cardh1 animate__animated animate__fadeInUp animate__delay"},He={class:"fs-2 my-0 font-weight-black ws-pw lh-sm"},Xe={class:"d-flex flex-column h-100 jcb pe-4 pb-4 pe-xl-5 pb-xl-5"},Je={class:"d-flex flex-column aie pt-4 animate__animated animate__fadeInRight animate__delay"},Ke=["src"],Qe=b({__name:"ProjectCard",props:["project"],setup(e){const t=R(),s=e;c(null);const o=c(!1),a=c(null);function l(u){o.value=u,o.value&&i()}c(["https://via.placeholder.com/800x400?text=Image+0","https://via.placeholder.com/800x400?text=Image+1","https://via.placeholder.com/800x400?text=Image+2","https://via.placeholder.com/800x400?text=Image+3","https://via.placeholder.com/800x400?text=Image+4","https://via.placeholder.com/800x400?text=Image+5","https://via.placeholder.com/800x400?text=Image+6","https://via.placeholder.com/800x400?text=Image+7","https://via.placeholder.com/800x400?text=Image+8","https://via.placeholder.com/800x400?text=Image+9"]),c({arrows:!0,thumbs:!1});const i=async()=>{console.log("loadContent");try{if(a.value===null){let u=await t.fetchFromYandexDisk(`projects/${s.project.id}/${s.project.preview_id}`);a.value=t.parseFromYandexDisk({items:u,type:s.project.preview_type,image_size:"L"})}}catch(u){console.log(u)}};return(u,p)=>{const g=ye,m=$e,f=Le,x=Ne,h=E;return U((n(),r("div",null,[_("div",Fe,[o.value?(n(),r("div",Te,[e.project.preview_type==="imagestatic"?(n(),k(g,{key:0,url:a.value,class:"w-100 h-100"},null,8,["url"])):y("",!0),e.project.preview_type==="beforeafter"?(n(),k(m,{key:1,class:"w-100 h-100"})):y("",!0),e.project.preview_type==="storiesgallery"?(n(),k(f,{key:2,class:"w-100 h-100"})):y("",!0),e.project.preview_type==="productspinner"?(n(),k(x,{key:3,class:"w-100 h-100"})):y("",!0),_("div",We,[_("div",Ye,[_("span",Ge,M(e.project.place),1),_("span",qe,[_("span",He,M(e.project.title),1)])]),_("div",Xe,[_("div",Je,[(n(!0),r(V,null,L(e.project.soft.split(","),I=>(n(),r("div",{key:I,class:"d-flex jcc aic rounded border border-dark mb-2",style:{width:"30px",height:"30px",opacity:"0.5"}},[d(t).soft[I]!==void 0?(n(),r("img",{key:0,width:"20px",src:d(t).soft[I].src},null,8,Ke)):y("",!0)]))),128))]),v(h,{style:{width:"60px",height:"60px"},onClick:p[0]||(p[0]=I=>u.$router.push({name:"project",query:{id:e.project.id}})),class:"d-flex rounded-circle bg-white shadow jcc aic pe-all",icon:"play"})])])])):y("",!0)])])),[[d(X),l]])}}}),Ze=S(Qe,[["__scopeId","data-v-1a78cb18"]]),et=b({__name:"ProjectsList",setup(e){const t=R(),s=c([]);$(()=>{o()});async function o(){try{await t.fetchProjects(),s.value=t.getProjects}catch(a){console.log(a)}}return(a,l)=>{const i=Ze,u=H,p=F;return n(),k(p,{class:"m-0"},{default:j(()=>[(n(!0),r(V,null,L(d(s),g=>(n(),k(u,{key:g.id,xs:"12",md:"6",xl:"4",class:"p-0"},{default:j(()=>[v(i,{project:g},null,8,["project"])]),_:2},1024))),128))]),_:1})}}}),tt={key:0,class:"d-flex flex-column animate__animated animate__fadeInUp w-100 h-100"},st=b({__name:"ProjectPart",props:[],setup(e){const t=c(!1);c(null);function s(l){t.value=l,t.value}$(()=>{o()});async function o(){try{a.value=!0}catch{}}const a=c(!1);return(l,i)=>{const u=F,p=H;return U((n(),k(p,{xs:"12"},{default:j(()=>[v(u,{class:"bg-dark",style:{height:"75vh",overflow:"auto"}},{default:j(()=>[d(t)?(n(),r("div",tt," kuku ")):y("",!0)]),_:1}),v(u,{class:"py-5"},{default:j(()=>[v(p,{xs:"12",md:"6"},{default:j(()=>[O(" dfdsfdsfdsfdsfdsfds ")]),_:1}),v(p,{xs:"12",md:"6"},{default:j(()=>[O(" sfdsfsfd ")]),_:1})]),_:1})]),_:1})),[[d(X),s]])}}}),ot={key:0,class:"d-flex flex-column w-100 h-100 ovfx ovfys"},nt={class:"d-flex flex-row w-100 jcb aic p-4"},at=b({__name:"ProjectProfile",props:[],setup(e){const t=R(),s=Z(),o=c(null),a=c([]);$(()=>{l()});async function l(){try{u(),i.value=!0}catch(p){console.log(p)}}const i=c(!1),u=async()=>{t.getProjects.length===0&&await t.fetchProjects(),o.value=t.getProjects.find(p=>p.id===s.query.id),a.value=await t.fetchProjectParts(s.query.id),console.log(a.value)};return(p,g)=>{const m=st,f=F,x=ee;return d(o)!==null?(n(),r("div",ot,[_("div",nt,[_("h1",null,M(d(o).title),1)]),d(a)!==null?(n(),k(x,{key:0,fluid:"",class:"w-100"},{default:j(()=>[(n(!0),r(V,null,L(d(a),h=>(n(),k(f,{key:h.id},{default:j(()=>[v(m,{part:h},null,8,["part"])]),_:2},1024))),128)),v(f),v(f)]),_:1})):y("",!0)])):y("",!0)}}}),ct=e=>(oe("data-v-517e62c0"),e=e(),ne(),e),lt={class:"d-flex flex-column w-100 h-100 ovfxy"},rt={key:0,class:"d-flex flex-column w-100 h-100 ovfx ovfys"},it={key:1,class:"d-flex flex-column w-100 h-100 ovfxy"},ut={class:"leadModalWrapper bg-white shadow ovfxy animate__animated"},dt={key:0,class:"d-flex flex-column w-100 h-100 p-5"},pt={class:"d-flex flex-row jcb aic mb-5 w-100"},ft=ct(()=>_("span",{class:"h3 my-0"},"Contacts",-1)),_t=["href"],mt=b({__name:"coolfolio",setup(e){const t=R(),s=c(!1),o=c([{id:"telegram",label:"Telegram",icon:["fab","telegram"],href:"https://t.me/serginho0o0o"},{label:"WhatsApp",icon:["fab","whatsapp"],href:"https://wa.me/33749155488"},{id:"email",label:"vslv.serge@gmail.com",icon:["fas","at"],href:"mailto:vslv.serge@gmail.com"}]);$(()=>{a()});async function a(){try{await t.fetchSettings(),console.log(t.settings),t.fetchFromYandexDisk("projects")}catch{}}return(l,i)=>{const u=ve,p=et,g=at,m=se,f=E,x=Y("fa");return n(),r("div",lt,[v(u,{onLead:i[0]||(i[0]=h=>s.value=!d(s))}),v(T,{"enter-active-class":"animate__fadeInUp animate__fast","leave-active-class":"animate__fadeOutUp animate__fast",mode:"out-in"},{default:j(()=>[(n(),r("main",{key:(l._.provides[D]||l.$route).name,class:"d-flex flex-column w-100 h-100 ovfxy animate__animated"},[(l._.provides[D]||l.$route).name==="index"?(n(),r("div",rt,[v(p)])):y("",!0),(l._.provides[D]||l.$route).name==="project"?(n(),r("div",it,[v(g)])):y("",!0)]))]),_:1}),v(m),v(T,{"enter-active-class":"animate__flipInX","leave-active-class":"animate__flipOutX"},{default:j(()=>[U(_("div",ut,[d(s)?(n(),r("div",dt,[_("div",pt,[ft,v(f,{onClick:i[1]||(i[1]=h=>s.value=!1),icon:["fas","close"],class:"d-flex jcc aic border cursor-pointer",style:{width:"40px",height:"40px"}})]),(n(!0),r(V,null,L(d(o),h=>(n(),r("a",{key:h.id,href:h.href,target:"_blank",class:"text-dark mb-3"},[v(x,{class:"mr-1",icon:h.icon},null,8,["icon"]),O(" "+M(h.label),1)],8,_t))),128))])):y("",!0)],512),[[te,d(s)]])]),_:1})])}}}),yt=S(mt,[["__scopeId","data-v-517e62c0"]]);export{yt as default};
