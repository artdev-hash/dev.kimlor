import{d as j,u as X,g as wt,o as _,c as w,F,E as K,k as b,t as I,m as R,f as pt,a as Q,p as nt,q as ot,_ as H,h as ut,a4 as At,a5 as Ot,n as gt,O as Ct,G as xt,H as It,e as ht,D as Pt,I as G,w as lt,R as $t,v as ft,a6 as Lt,a7 as Et,a8 as Rt,a9 as Nt,aa as jt,ab as Ht,ac as Ft,ad as zt,ae as Bt,af as Yt,Y as Vt,j as Ut,z as Wt,ag as Gt,ah as Kt,ai as qt,aj as Jt}from"./chunks/framework.JK8Xa7st.js";import{t as bt}from"./chunks/theme.Q79nCEnd.js";function Zt(t){const n={};for(let s=0;s<t.length;s++){const i=t[s],v=i.frontMatter.tags;Array.isArray(v)&&v.forEach(u=>{n[u]||(n[u]=[]),n[u].push(i)})}return n}function Qt(t){const n=[];let s="0",i=-1;for(let v=0;v<t.length;v++){const u=t[v];if(u.frontMatter.date){const f=u.frontMatter.date.split("-")[0];f===s?n[i].push(u):(i++,n[i]=[],n[i].push(u),s=f)}}return n}function Xt(t){return[...document.querySelectorAll(".VPDoc h2,h3,h4,h5,h6")].filter(s=>s.id&&s.hasChildNodes()).map(s=>{const i=Number(s.tagName[1]);return{title:te(s),link:"#"+s.id,level:i}})}function te(t){let n="";for(const s of t.childNodes)if(s.nodeType===1){if(s.classList.contains("VPBadge")||s.classList.contains("header-anchor"))continue;n+=s.textContent}else s.nodeType===3&&(n+=s.textContent);return n.trim()}const ee=t=>(nt("data-v-69b61450"),t=t(),ot(),t),ae={class:"main"},se={class:"yearItem"},re={class:"year"},ne=["href"],oe={class:"title"},ie=ee(()=>b("div",{class:"title-o"},null,-1)),ce={class:"date"},de=j({__name:"Archives",setup(t){const{theme:n}=X(),s=wt(()=>Qt(n.value.posts));return(i,v)=>(_(),w("div",ae,[(_(!0),w(F,null,K(s.value,u=>(_(),w("div",se,[b("div",re,I(u[0].frontMatter.date.split("-")[0]),1),(_(!0),w(F,null,K(u,(f,g)=>(_(),w("a",{href:R(pt)(f.regularPath),key:g,class:"article"},[b("div",oe,[ie,Q(" "+I(f.frontMatter.title),1)]),b("div",ce,I(f.frontMatter.date.slice(5)),1)],8,ne))),128))]))),256))]))}}),le=H(de,[["__scopeId","data-v-69b61450"]]),mt=t=>(nt("data-v-6b5bf8a1"),t=t(),ot(),t),ue={class:"main"},he=mt(()=>b("h1",{class:"tags-header"},"Tags",-1)),ve={class:"tags"},fe=["onClick"],be={class:"tag-length"},pe={class:"header"},ge={t:"1641783753540",class:"fas-icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"1254",style:{width:"20px"}},me=mt(()=>b("path",{d:"M995.126867 592.38l-360.08 360.08a53.333333 53.333333 0 0 1-71.333334 3.68l356.22-356.22a64 64 0 0 0 0-90.506667L495.8402 85.333333h45.573333a52.986667 52.986667 0 0 1 37.713334 15.62l416 416a53.4 53.4 0 0 1 0 75.426667z m-128 0l-360.08 360.08a53.333333 53.333333 0 0 1-75.426667 0l-416-416A52.986667 52.986667 0 0 1 0.0002 498.746667V138.666667a53.393333 53.393333 0 0 1 53.333333-53.333334h360.08a52.986667 52.986667 0 0 1 37.713334 15.62l416 416a53.4 53.4 0 0 1 0 75.426667zM341.333533 341.333333a85.333333 85.333333 0 1 0-85.333333 85.333334 85.426667 85.426667 0 0 0 85.333333-85.333334z",fill:"var(--vp-c-brand)","p-id":"1255"},null,-1)),_e=[me],we={class:"header-text"},$e=["href"],ye={class:"title"},Me=mt(()=>b("div",{class:"title-o"},null,-1)),ke={class:"date"},Se=j({__name:"Tags",setup(t){const{theme:n}=X(),s=wt(()=>Zt(n.value.posts));let i=ut("");const v=f=>{i.value=f},u=f=>({fontSize:`${f*.04+.85}em`});return(f,g)=>(_(),w("div",ue,[he,b("div",ve,[(_(!0),w(F,null,K(s.value,(S,h)=>(_(),w("span",{onClick:O=>v(h),class:gt(["tag",{activetag:R(i)===h}]),style:Ct(u(s.value[h].length))},[Q(I(h)+" ",1),b("span",be,I(s.value[h].length),1)],14,fe))),256))]),At(b("h4",pe,[(_(),w("svg",ge,_e)),b("span",we,I(R(i)),1)],512),[[Ot,R(i)]]),(_(!0),w(F,null,K(s.value[R(i)],(S,h)=>(_(),w("a",{href:R(pt)(S.regularPath),key:h,class:"article"},[b("div",ye,[Me,Q(" "+I(S.frontMatter.title),1)]),b("div",ke,I(S.frontMatter.date),1)],8,$e))),128))]))}}),De=H(Se,[["__scopeId","data-v-6b5bf8a1"]]),Te={},Ae={src:"https://readme-typing-svg.demolab.com?font=Fira+Code&pause=1000&color=009F01&center=true&random=false&width=435&lines=github.com%2Fartdev-hash;facebook.com%2FkimITservices;YT%3A+%40kimlorenzo143",alt:"Typing SVG",class:"center"};function Oe(t,n){return _(),w("img",Ae)}const Ce=H(Te,[["render",Oe],["__scopeId","data-v-8302d363"]]),xe=t=>(nt("data-v-414fae16"),t=t(),ot(),t),Ie=xe(()=>b("a",{href:"https://www.buymeacoffee.com/kimdevprc",target:"_blank",title:"artdev-hash"},"artdev-hash",-1)),Pe=j({__name:"CopyWright",setup(t){const n=new Date().getFullYear();return(s,i)=>(_(),w("footer",null,[Q(" Powered by "),Ie,Q(" | Copyright © 2022-"+I(R(n))+" | MIT License ",1)]))}}),Le=H(Pe,[["__scopeId","data-v-414fae16"]]),yt=t=>(nt("data-v-fefcdea7"),t=t(),ot(),t),Ee={class:"blogList"},Re=["href"],Ne={class:"title"},je={class:"date"},He={class:"pagination"},Fe=["onClick"],ze=yt(()=>b("br",null,null,-1)),Be=yt(()=>b("br",null,null,-1)),Ye=j({__name:"Page",setup(t){const{theme:n}=X();let s=n.value.posts||[],i=n.value.postLength,v=n.value.pageSize,u=i%v===0?i/v:i/v+1;u=parseInt(u.toString());let f=ut(1);s=s.filter(y=>y.regularPath.indexOf("index")<0);let g={};for(let y=0;y<u;y++)g[y]=[];let S=0;for(let y=0;y<s.length;y++)g[S].length>v-1&&(S+=1),g[S].push(s[y]);let h=ut([]);h.value=g[f.value-1];const O=y=>{f.value=y,h.value=g[f.value-1]},D=y=>{const C=y.split("-");let M=C[0],$="",B=C[2];switch(C[1]){case"1":case"01":$="Jan";break;case"2":case"02":$="Feb";break;case"3":case"03":$="Mar";break;case"4":case"04":$="Apr";break;case"5":case"05":$="May";break;case"6":case"06":$="Jun";break;case"7":case"07":$="Jul";break;case"8":case"08":$="Aug";break;case"9":case"09":$="Sep";break;case"10":$="Oct";break;case"11":$="Nov";break;case"12":$="Dec";break;default:$="Month"}return`${$} ${B}, ${M}`};return(y,C)=>(_(),w(F,null,[b("div",Ee,[(_(!0),w(F,null,K(R(h),M=>(_(),w("a",{class:"blog",href:R(pt)(M.regularPath)},[b("div",Ne,I(M.frontMatter.title),1),b("div",je,I(D(M.frontMatter.date)),1)],8,Re))),256))]),b("div",He,[(_(!0),w(F,null,K(R(u),M=>(_(),w("div",{class:gt(["link",{activeLink:R(f)===M}]),key:M,onClick:$=>O(M)},I(M),11,Fe))),128))]),ze,Be],64))}}),Ve=H(Ye,[["__scopeId","data-v-fefcdea7"]]),Ue={key:0,class:"category"},We={class:"list"},Ge={class:"header"},Ke=["href"],qe={key:1},Je={class:"header"},Ze=["href"],Qe=j({__name:"Category",setup(t){const{frontmatter:n,theme:s}=X(),i=xt([]),v=ut(!1);return It(()=>{i.value=Xt(n.value.outline??s.value.outline),v.value=i.value.some(u=>u.level===2)}),(u,f)=>i.value.length>0?(_(),w("div",Ue,[b("ul",We,[(_(!0),w(F,null,K(i.value,g=>(_(),w("li",Ge,[g.level===2?(_(),w("a",{key:0,href:g.link,class:"header-h2"},I(g.title),9,Ke)):ht("",!0),g.level===3?(_(),w("ul",qe,[b("li",Je,[b("a",{href:g.link,class:gt(["header-h3",{showIndent:v.value}])},I(g.title),11,Ze)])])):ht("",!0)]))),256))])])):ht("",!0)}}),Xe=H(Qe,[["__scopeId","data-v-9d1e4980"]]);var Mt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function kt(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var St={exports:{}};(function(t,n){(function(s,i){t.exports=i()})(Mt,function(){var s=1e3,i=6e4,v=36e5,u="millisecond",f="second",g="minute",S="hour",h="day",O="week",D="month",y="quarter",C="year",M="date",$="Invalid Date",B=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,tt=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,et={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(c){var r=["th","st","nd","rd"],e=c%100;return"["+c+(r[(e-20)%10]||r[e]||r[0])+"]"}},at=function(c,r,e){var o=String(c);return!o||o.length>=r?c:""+Array(r+1-o.length).join(e)+c},Y={s:at,z:function(c){var r=-c.utcOffset(),e=Math.abs(r),o=Math.floor(e/60),a=e%60;return(r<=0?"+":"-")+at(o,2,"0")+":"+at(a,2,"0")},m:function c(r,e){if(r.date()<e.date())return-c(e,r);var o=12*(e.year()-r.year())+(e.month()-r.month()),a=r.clone().add(o,D),d=e-a<0,l=r.clone().add(o+(d?-1:1),D);return+(-(o+(e-a)/(d?a-l:l-a))||0)},a:function(c){return c<0?Math.ceil(c)||0:Math.floor(c)},p:function(c){return{M:D,y:C,w:O,d:h,D:M,h:S,m:g,s:f,ms:u,Q:y}[c]||String(c||"").toLowerCase().replace(/s$/,"")},u:function(c){return c===void 0}},P="en",L={};L[P]=et;var q="$isDayjsObject",V=function(c){return c instanceof ct||!(!c||!c[q])},it=function c(r,e,o){var a;if(!r)return P;if(typeof r=="string"){var d=r.toLowerCase();L[d]&&(a=d),e&&(L[d]=e,a=d);var l=r.split("-");if(!a&&l.length>1)return c(l[0])}else{var m=r.name;L[m]=r,a=m}return!o&&a&&(P=a),a||!o&&P},T=function(c,r){if(V(c))return c.clone();var e=typeof r=="object"?r:{};return e.date=c,e.args=arguments,new ct(e)},p=Y;p.l=it,p.i=V,p.w=function(c,r){return T(c,{locale:r.$L,utc:r.$u,x:r.$x,$offset:r.$offset})};var ct=function(){function c(e){this.$L=it(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[q]=!0}var r=c.prototype;return r.parse=function(e){this.$d=function(o){var a=o.date,d=o.utc;if(a===null)return new Date(NaN);if(p.u(a))return new Date;if(a instanceof Date)return new Date(a);if(typeof a=="string"&&!/Z$/i.test(a)){var l=a.match(B);if(l){var m=l[2]-1||0,k=(l[7]||"0").substring(0,3);return d?new Date(Date.UTC(l[1],m,l[3]||1,l[4]||0,l[5]||0,l[6]||0,k)):new Date(l[1],m,l[3]||1,l[4]||0,l[5]||0,l[6]||0,k)}}return new Date(a)}(e),this.init()},r.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},r.$utils=function(){return p},r.isValid=function(){return this.$d.toString()!==$},r.isSame=function(e,o){var a=T(e);return this.startOf(o)<=a&&a<=this.endOf(o)},r.isAfter=function(e,o){return T(e)<this.startOf(o)},r.isBefore=function(e,o){return this.endOf(o)<T(e)},r.$g=function(e,o,a){return p.u(e)?this[o]:this.set(a,e)},r.unix=function(){return Math.floor(this.valueOf()/1e3)},r.valueOf=function(){return this.$d.getTime()},r.startOf=function(e,o){var a=this,d=!!p.u(o)||o,l=p.p(e),m=function(W,E){var z=p.w(a.$u?Date.UTC(a.$y,E,W):new Date(a.$y,E,W),a);return d?z:z.endOf(h)},k=function(W,E){return p.w(a.toDate()[W].apply(a.toDate("s"),(d?[0,0,0,0]:[23,59,59,999]).slice(E)),a)},A=this.$W,x=this.$M,N=this.$D,J="set"+(this.$u?"UTC":"");switch(l){case C:return d?m(1,0):m(31,11);case D:return d?m(1,x):m(0,x+1);case O:var U=this.$locale().weekStart||0,st=(A<U?A+7:A)-U;return m(d?N-st:N+(6-st),x);case h:case M:return k(J+"Hours",0);case S:return k(J+"Minutes",1);case g:return k(J+"Seconds",2);case f:return k(J+"Milliseconds",3);default:return this.clone()}},r.endOf=function(e){return this.startOf(e,!1)},r.$set=function(e,o){var a,d=p.p(e),l="set"+(this.$u?"UTC":""),m=(a={},a[h]=l+"Date",a[M]=l+"Date",a[D]=l+"Month",a[C]=l+"FullYear",a[S]=l+"Hours",a[g]=l+"Minutes",a[f]=l+"Seconds",a[u]=l+"Milliseconds",a)[d],k=d===h?this.$D+(o-this.$W):o;if(d===D||d===C){var A=this.clone().set(M,1);A.$d[m](k),A.init(),this.$d=A.set(M,Math.min(this.$D,A.daysInMonth())).$d}else m&&this.$d[m](k);return this.init(),this},r.set=function(e,o){return this.clone().$set(e,o)},r.get=function(e){return this[p.p(e)]()},r.add=function(e,o){var a,d=this;e=Number(e);var l=p.p(o),m=function(x){var N=T(d);return p.w(N.date(N.date()+Math.round(x*e)),d)};if(l===D)return this.set(D,this.$M+e);if(l===C)return this.set(C,this.$y+e);if(l===h)return m(1);if(l===O)return m(7);var k=(a={},a[g]=i,a[S]=v,a[f]=s,a)[l]||1,A=this.$d.getTime()+e*k;return p.w(A,this)},r.subtract=function(e,o){return this.add(-1*e,o)},r.format=function(e){var o=this,a=this.$locale();if(!this.isValid())return a.invalidDate||$;var d=e||"YYYY-MM-DDTHH:mm:ssZ",l=p.z(this),m=this.$H,k=this.$m,A=this.$M,x=a.weekdays,N=a.months,J=a.meridiem,U=function(E,z,rt,dt){return E&&(E[z]||E(o,d))||rt[z].slice(0,dt)},st=function(E){return p.s(m%12||12,E,"0")},W=J||function(E,z,rt){var dt=E<12?"AM":"PM";return rt?dt.toLowerCase():dt};return d.replace(tt,function(E,z){return z||function(rt){switch(rt){case"YY":return String(o.$y).slice(-2);case"YYYY":return p.s(o.$y,4,"0");case"M":return A+1;case"MM":return p.s(A+1,2,"0");case"MMM":return U(a.monthsShort,A,N,3);case"MMMM":return U(N,A);case"D":return o.$D;case"DD":return p.s(o.$D,2,"0");case"d":return String(o.$W);case"dd":return U(a.weekdaysMin,o.$W,x,2);case"ddd":return U(a.weekdaysShort,o.$W,x,3);case"dddd":return x[o.$W];case"H":return String(m);case"HH":return p.s(m,2,"0");case"h":return st(1);case"hh":return st(2);case"a":return W(m,k,!0);case"A":return W(m,k,!1);case"m":return String(k);case"mm":return p.s(k,2,"0");case"s":return String(o.$s);case"ss":return p.s(o.$s,2,"0");case"SSS":return p.s(o.$ms,3,"0");case"Z":return l}return null}(E)||l.replace(":","")})},r.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},r.diff=function(e,o,a){var d,l=this,m=p.p(o),k=T(e),A=(k.utcOffset()-this.utcOffset())*i,x=this-k,N=function(){return p.m(l,k)};switch(m){case C:d=N()/12;break;case D:d=N();break;case y:d=N()/3;break;case O:d=(x-A)/6048e5;break;case h:d=(x-A)/864e5;break;case S:d=x/v;break;case g:d=x/i;break;case f:d=x/s;break;default:d=x}return a?d:p.a(d)},r.daysInMonth=function(){return this.endOf(D).$D},r.$locale=function(){return L[this.$L]},r.locale=function(e,o){if(!e)return this.$L;var a=this.clone(),d=it(e,o,!0);return d&&(a.$L=d),a},r.clone=function(){return p.w(this.$d,this)},r.toDate=function(){return new Date(this.valueOf())},r.toJSON=function(){return this.isValid()?this.toISOString():null},r.toISOString=function(){return this.$d.toISOString()},r.toString=function(){return this.$d.toUTCString()},c}(),_t=ct.prototype;return T.prototype=_t,[["$ms",u],["$s",f],["$m",g],["$H",S],["$W",h],["$M",D],["$y",C],["$D",M]].forEach(function(c){_t[c[1]]=function(r){return this.$g(r,c[0],c[1])}}),T.extend=function(c,r){return c.$i||(c(r,ct,T),c.$i=!0),T},T.locale=it,T.isDayjs=V,T.unix=function(c){return T(1e3*c)},T.en=L[P],T.Ls=L,T.p={},T})})(St);var ta=St.exports;const vt=kt(ta);var Dt={exports:{}};(function(t,n){(function(s,i){t.exports=i()})(Mt,function(){return function(s,i,v){s=s||{};var u=i.prototype,f={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function g(h,O,D,y){return u.fromToBase(h,O,D,y)}v.en.relativeTime=f,u.fromToBase=function(h,O,D,y,C){for(var M,$,B,tt=D.$locale().relativeTime||f,et=s.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],at=et.length,Y=0;Y<at;Y+=1){var P=et[Y];P.d&&(M=y?v(h).diff(D,P.d,!0):D.diff(h,P.d,!0));var L=(s.rounding||Math.round)(Math.abs(M));if(B=M>0,L<=P.r||!P.r){L<=1&&Y>0&&(P=et[Y-1]);var q=tt[P.l];C&&(L=C(""+L)),$=typeof q=="string"?q.replace("%d",L):q(L,O,P.l,B);break}}if(O)return $;var V=B?tt.future:tt.past;return typeof V=="function"?V($):V.replace("%s",$)},u.to=function(h,O){return g(h,O,this,!0)},u.from=function(h,O){return g(h,O,this)};var S=function(h){return h.$u?v.utc():v()};u.toNow=function(h){return this.to(S(this),h)},u.fromNow=function(h){return this.from(S(this),h)}}})})(Dt);var ea=Dt.exports;const aa=kt(ea),sa={class:"title"},ra={class:"date"},na=j({__name:"Title",setup(t){const n=X().page.value,{title:s,description:i,lastUpdated:v,frontmatter:u}=n;vt.extend(aa);const f=vt().to(vt(u.date||Date.now()));return(g,S)=>(_(),w(F,null,[b("h1",sa,I(R(s)),1),b("div",ra,"🕒 Published at: "+I(R(f)),1)],64))}}),oa=H(na,[["__scopeId","data-v-cec0b25f"]]),ia=t=>(nt("data-v-57ae03b7"),t=t(),ot(),t),ca=ia(()=>b("svg",{xmlns:"http://www.w3.org/2000/svg",display:"block",width:"30",height:"30",fill:"var(--vp-c-green-2)",class:"bi bi-arrow-return-left",viewBox:"0 0 16 16"},[b("path",{"fill-rule":"evenodd",d:"M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5"})],-1)),da=j({__name:"MyLayout",setup(t){const{Layout:n}=bt,s=()=>{history.back()};return(i,v)=>{const u=Pt("Comments");return _(),w(F,null,[G(R(n),null,{"doc-before":lt(()=>[G(oa),G(Xe)]),"doc-after":lt(()=>[b("div",null,[b("button",{onClick:s},[Q("BACK..."),ca])]),G(u)]),"home-hero-before":lt(()=>[G(Ce)]),"home-features-after":lt(()=>[G(Ve)]),_:1}),G(Le)],64)}}}),la=H(da,[["__scopeId","data-v-57ae03b7"]]),ua=$t('<br data-v-2f3c7a8b><br data-v-2f3c7a8b><div class="main" data-v-2f3c7a8b><h1 class="about-header" data-v-2f3c7a8b>👨‍💻 About Me</h1><br data-v-2f3c7a8b><code data-v-2f3c7a8b><b data-v-2f3c7a8b>I&#39;m an IT Specialist / Developer </b></code><br data-v-2f3c7a8b><code data-v-2f3c7a8b><b data-v-2f3c7a8b>Available and Open for Commissions</b></code><br data-v-2f3c7a8b><code data-v-2f3c7a8b><b data-v-2f3c7a8b>A Computer Science Graduate</b></code><br data-v-2f3c7a8b><code data-v-2f3c7a8b><b data-v-2f3c7a8b>Passionate and Kind</b></code><br data-v-2f3c7a8b><div class="typewriter-effect" data-v-2f3c7a8b><div class="text" id="typewriter-text" data-v-2f3c7a8b></div><code data-v-2f3c7a8b><b data-v-2f3c7a8b>A Trustworthy person</b></code></div><br data-v-2f3c7a8b><code data-v-2f3c7a8b><b data-v-2f3c7a8b>ENV :</b></code><div class="container" data-v-2f3c7a8b><div class="image" data-v-2f3c7a8b><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40" data-v-2f3c7a8b></div><div class="image" data-v-2f3c7a8b><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40" data-v-2f3c7a8b></div><div class="image" data-v-2f3c7a8b><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40" data-v-2f3c7a8b></div><div class="image" data-v-2f3c7a8b><img src="https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg" alt="typescript" width="40" height="40" data-v-2f3c7a8b></div><div class="image" data-v-2f3c7a8b><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vitejs/vitejs-original.svg" alt="vitejs" width="40" height="40" data-v-2f3c7a8b></div><div class="image" data-v-2f3c7a8b><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original.svg" alt="vue js" width="40" height="40" data-v-2f3c7a8b></div><div class="image" data-v-2f3c7a8b><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/dart/dart-original.svg" alt="dart" width="40" height="40" data-v-2f3c7a8b></div><div class="image" data-v-2f3c7a8b><img src="https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg" alt="flutter" width="40" height="40" data-v-2f3c7a8b></div><div class="image" data-v-2f3c7a8b><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/npm/npm-original-wordmark.svg" alt="npm" width="40" height="40" data-v-2f3c7a8b></div><div class="image" data-v-2f3c7a8b><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/laravel/laravel-original.svg" alt="laravel" width="40" height="40" data-v-2f3c7a8b></div><div class="image" data-v-2f3c7a8b><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/firebase/firebase-original.svg" alt="firebase" width="40" height="40" data-v-2f3c7a8b></div><div class="image" data-v-2f3c7a8b><img src="https://raw.githubusercontent.com/artdev-hash/devicon/master/icons/appwrite/appwrite-original.svg" alt="appwrite" width="40" height="40" data-v-2f3c7a8b></div><div class="image" data-v-2f3c7a8b><img src="https://www.vectorlogo.zone/logos/cloudflare/cloudflare-icon.svg" alt="cloudflare" width="40" height="40" data-v-2f3c7a8b></div><div class="image" data-v-2f3c7a8b><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="python" width="40" height="40" data-v-2f3c7a8b></div><div class="image" data-v-2f3c7a8b><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg" alt="vscode" width="40" height="40" data-v-2f3c7a8b></div><div class="image" data-v-2f3c7a8b><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/visualstudio/visualstudio-original.svg" alt="visualstudio" width="40" height="40" data-v-2f3c7a8b></div><div class="image" data-v-2f3c7a8b><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mariadb/mariadb-original.svg" alt="mariadb" width="40" height="40" data-v-2f3c7a8b></div><div class="image" data-v-2f3c7a8b><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/apache/apache-original.svg" alt="apache" width="40" height="40" data-v-2f3c7a8b></div><div class="image" data-v-2f3c7a8b><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg" alt="php" width="40" height="40" data-v-2f3c7a8b></div><div class="image" data-v-2f3c7a8b><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="mysql" width="40" height="40" data-v-2f3c7a8b></div><div class="image" data-v-2f3c7a8b><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/microsoftsqlserver/microsoftsqlserver-original.svg" alt="mssql" width="40" height="40" data-v-2f3c7a8b></div><div class="image" data-v-2f3c7a8b><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/dot-net/dot-net-original.svg" alt=".net" width="40" height="40" data-v-2f3c7a8b></div><div class="image" data-v-2f3c7a8b><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/visualbasic/visualbasic-original.svg" alt="visualbasic.net" width="40" height="40" data-v-2f3c7a8b></div></div><div class="foot" data-v-2f3c7a8b></div></div>',3),ha=j({__name:"Dev",setup(t){return(n,s)=>ua}}),va=H(ha,[["__scopeId","data-v-2f3c7a8b"]]),fa=$t('<br data-v-2fb89b72><br data-v-2fb89b72><div class="main" data-v-2fb89b72><h1 class="about-header" data-v-2fb89b72>🚀 Open Source / Projects</h1><br data-v-2fb89b72><code data-v-2fb89b72>Recent 💡 &gt;&gt;</code><br data-v-2fb89b72><div class="typewriter-effect" data-v-2fb89b72><div class="text" id="typewriter-text" data-v-2fb89b72></div><code data-v-2fb89b72>- <a href="https://m-k-products.github.io/store/" target="_blank" rel="noopener" data-v-2fb89b72>M.K PRODUCTS</a></code></div><code data-v-2fb89b72>- <a href="https://artdev-hash.github.io/english-tagalog-vocab/" target="_blank" rel="noopener" data-v-2fb89b72>ENGLISH TAGALOG VOCAB</a></code><br data-v-2fb89b72><code data-v-2fb89b72>- <a href="https://artdev-hash.github.io/pc-upgrade-and-repair/" target="_blank" rel="noopener" data-v-2fb89b72>PC UPGRADE AND REPAIR</a></code><br data-v-2fb89b72><code data-v-2fb89b72>- Participation in HACKTOBER 23</code><br data-v-2fb89b72><code data-v-2fb89b72>- <a href="https://artdev-hash.github.io/bicol_translate/" target="_blank" rel="noopener" data-v-2fb89b72>BICOL TRANSLATE</a></code><br data-v-2fb89b72><code data-v-2fb89b72>- <a href="https://artdev-hash.github.io/octo-feedboard/" target="_blank" rel="noopener" data-v-2fb89b72>OCTO-FEEDBOARD</a></code><br data-v-2fb89b72><code data-v-2fb89b72>- <a href="https://lorenzokimarthur.com" target="_blank" rel="noopener" data-v-2fb89b72>LORENZOKIMARTHUR.COM</a></code><br data-v-2fb89b72><code data-v-2fb89b72>- Participation in HACKTOBER 22</code><br data-v-2fb89b72><code data-v-2fb89b72>- <a href="https://artdev-hash.github.io/biz-kal/" target="_blank" rel="noopener" data-v-2fb89b72>BIZ-KAL</a></code><br data-v-2fb89b72><code data-v-2fb89b72>- <a href="https://devs.flutter.ph/" target="_blank" rel="noopener" data-v-2fb89b72>FLUTTER DEVS</a></code> <br data-v-2fb89b72><code data-v-2fb89b72>- <a href="https://artdev-hash.github.io/snamegenerator/" target="_blank" rel="noopener" data-v-2fb89b72>SNAMEGENERATOR</a></code><br data-v-2fb89b72><code data-v-2fb89b72>- Participation in 30 Days Flutter 21</code><br data-v-2fb89b72><code data-v-2fb89b72>- <a href="https://artdev-hash.github.io/krprt-octo-uploader/" target="_blank" rel="noopener" data-v-2fb89b72>KRPRT-OCTO-UPLOADER</a></code><br data-v-2fb89b72><code data-v-2fb89b72>- <a href="https://artdev-hash.github.io/kshared-nocto-copier/" target="_blank" rel="noopener" data-v-2fb89b72>KSHARED-NOCTO-COPIER</a></code><br data-v-2fb89b72><code data-v-2fb89b72>- PLANBANK website</code><br data-v-2fb89b72><code data-v-2fb89b72>- IAMTHECOFFEEGUY</code><br data-v-2fb89b72><code data-v-2fb89b72>- CQMS - Customer Queuing Management System</code><br data-v-2fb89b72><code data-v-2fb89b72>- LMS - Library Management System</code><br data-v-2fb89b72><code data-v-2fb89b72>- <a href="https://artdev-hash.github.io/vbex-dotnet/" target="_blank" rel="noopener" data-v-2fb89b72>VBEX-DOT.NET</a></code><br data-v-2fb89b72><h1 class="about-2ndhead" data-v-2fb89b72>👨‍💻 Support My Actions by</h1><br data-v-2fb89b72><code data-v-2fb89b72> * Sending Inspirational Messages 💌</code><br data-v-2fb89b72><code data-v-2fb89b72> * Give Star to my projects ⭐</code><br data-v-2fb89b72><code data-v-2fb89b72> * Liking or Following My Pages:<br data-v-2fb89b72></code><code data-v-2fb89b72> - YT <a href="https://www.youtube.com/channel/UCP2psTOak3Z60eQj1wq--cg" target="_blank" rel="noopener" data-v-2fb89b72>@kimlorenzo143</a></code><br data-v-2fb89b72><code data-v-2fb89b72> - FB <a href="https://www.facebook.com/kimITservices" target="_blank" rel="noopener" data-v-2fb89b72>kimITservices</a></code><br data-v-2fb89b72><code data-v-2fb89b72> * <a href="https://www.buymeacoffee.com/kimdevprc" target="_blank" title="artdev-hash" data-v-2fb89b72>BuyMeaCoffee ☕</a></code><br data-v-2fb89b72><code data-v-2fb89b72> ** THANK YOU FOR YOUR SUPPORT ❤️ **</code><br data-v-2fb89b72><br data-v-2fb89b72></div>',3),ba=j({__name:"Projie",setup(t){return(n,s)=>fa}}),pa=H(ba,[["__scopeId","data-v-2fb89b72"]]),ga=j({__name:"Post",setup(t){return(n,s)=>null}}),ma=H(ga,[["__scopeId","data-v-88d0021c"]]),_a={...bt,Layout:la,enhanceApp(t){bt.enhanceApp(t);const{app:n}=t;n.component("Archives",le),n.component("Tags",De),n.component("Dev",va),n.component("Work",pa),n.component("Post",ma)}};function Tt(t){if(t.extends){const n=Tt(t.extends);return{...n,...t,async enhanceApp(s){n.enhanceApp&&await n.enhanceApp(s),t.enhanceApp&&await t.enhanceApp(s)}}}return t}const Z=Tt(_a),wa=j({name:"VitePressApp",setup(){const{site:t}=X();return Ut(()=>{Wt(()=>{document.documentElement.lang=t.value.lang,document.documentElement.dir=t.value.dir})}),t.value.router.prefetchLinks&&Gt(),Kt(),qt(),Z.setup&&Z.setup(),()=>Jt(Z.Layout)}});async function $a(){const t=Ma(),n=ya();n.provide(Et,t);const s=Rt(t.route);return n.provide(Nt,s),n.component("Content",jt),n.component("ClientOnly",Ht),Object.defineProperties(n.config.globalProperties,{$frontmatter:{get(){return s.frontmatter.value}},$params:{get(){return s.page.value.params}}}),Z.enhanceApp&&await Z.enhanceApp({app:n,router:t,siteData:Ft}),{app:n,router:t,data:s}}function ya(){return zt(wa)}function Ma(){let t=ft,n;return Bt(s=>{let i=Yt(s),v=null;return i&&(t&&(n=i),(t||n===i)&&(i=i.replace(/\.js$/,".lean.js")),v=Vt(()=>import(i),__vite__mapDeps([]))),ft&&(t=!1),v},Z.NotFound)}ft&&$a().then(({app:t,router:n,data:s})=>{n.go().then(()=>{Lt(n.route,s.site),t.mount("#app")})});export{$a as createApp};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}