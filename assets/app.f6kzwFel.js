import{d as F,u as X,g as $t,o as m,c as w,F as z,E as K,k as v,t as I,m as R,f as bt,a as Q,p as nt,q as ot,_ as H,h as ut,a4 as At,a5 as Ot,n as gt,O as Ct,G as xt,H as It,e as ht,D as Pt,I as G,w as lt,R as yt,v as vt,a6 as Lt,a7 as Et,a8 as Rt,a9 as Nt,aa as zt,ab as Ft,ac as Ht,ad as jt,ae as Bt,af as Vt,Y as Yt,j as Ut,z as Wt,ag as Gt,ah as Kt,ai as Jt,aj as Zt}from"./chunks/framework.JK8Xa7st.js";import{t as pt}from"./chunks/theme.saLlxc7G.js";function qt(t){const n={};for(let r=0;r<t.length;r++){const c=t[r],f=c.frontMatter.tags;Array.isArray(f)&&f.forEach(u=>{n[u]||(n[u]=[]),n[u].push(c)})}return n}function Qt(t){const n=[];let r="0",c=-1;for(let f=0;f<t.length;f++){const u=t[f];if(u.frontMatter.date){const p=u.frontMatter.date.split("-")[0];p===r?n[c].push(u):(c++,n[c]=[],n[c].push(u),r=p)}}return n}function Xt(t){return[...document.querySelectorAll(".VPDoc h2,h3,h4,h5,h6")].filter(r=>r.id&&r.hasChildNodes()).map(r=>{const c=Number(r.tagName[1]);return{title:te(r),link:"#"+r.id,level:c}})}function te(t){let n="";for(const r of t.childNodes)if(r.nodeType===1){if(r.classList.contains("VPBadge")||r.classList.contains("header-anchor"))continue;n+=r.textContent}else r.nodeType===3&&(n+=r.textContent);return n.trim()}const ee=t=>(nt("data-v-69b61450"),t=t(),ot(),t),ae={class:"main"},se={class:"yearItem"},re={class:"year"},ne=["href"],oe={class:"title"},ce=ee(()=>v("div",{class:"title-o"},null,-1)),ie={class:"date"},de=F({__name:"Archives",setup(t){const{theme:n}=X(),r=$t(()=>Qt(n.value.posts));return(c,f)=>(m(),w("div",ae,[(m(!0),w(z,null,K(r.value,u=>(m(),w("div",se,[v("div",re,I(u[0].frontMatter.date.split("-")[0]),1),(m(!0),w(z,null,K(u,(p,g)=>(m(),w("a",{href:R(bt)(p.regularPath),key:g,class:"article"},[v("div",oe,[ce,Q(" "+I(p.frontMatter.title),1)]),v("div",ie,I(p.frontMatter.date.slice(5)),1)],8,ne))),128))]))),256))]))}}),le=H(de,[["__scopeId","data-v-69b61450"]]),_t=t=>(nt("data-v-6b5bf8a1"),t=t(),ot(),t),ue={class:"main"},he=_t(()=>v("h1",{class:"tags-header"},"Tags",-1)),fe={class:"tags"},ve=["onClick"],pe={class:"tag-length"},be={class:"header"},ge={t:"1641783753540",class:"fas-icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"1254",style:{width:"20px"}},_e=_t(()=>v("path",{d:"M995.126867 592.38l-360.08 360.08a53.333333 53.333333 0 0 1-71.333334 3.68l356.22-356.22a64 64 0 0 0 0-90.506667L495.8402 85.333333h45.573333a52.986667 52.986667 0 0 1 37.713334 15.62l416 416a53.4 53.4 0 0 1 0 75.426667z m-128 0l-360.08 360.08a53.333333 53.333333 0 0 1-75.426667 0l-416-416A52.986667 52.986667 0 0 1 0.0002 498.746667V138.666667a53.393333 53.393333 0 0 1 53.333333-53.333334h360.08a52.986667 52.986667 0 0 1 37.713334 15.62l416 416a53.4 53.4 0 0 1 0 75.426667zM341.333533 341.333333a85.333333 85.333333 0 1 0-85.333333 85.333334 85.426667 85.426667 0 0 0 85.333333-85.333334z",fill:"var(--vp-c-brand)","p-id":"1255"},null,-1)),me=[_e],we={class:"header-text"},$e=["href"],ye={class:"title"},Me=_t(()=>v("div",{class:"title-o"},null,-1)),ke={class:"date"},Se=F({__name:"Tags",setup(t){const{theme:n}=X(),r=$t(()=>qt(n.value.posts));let c=ut("");const f=p=>{c.value=p},u=p=>({fontSize:`${p*.04+.85}em`});return(p,g)=>(m(),w("div",ue,[he,v("div",fe,[(m(!0),w(z,null,K(r.value,(S,h)=>(m(),w("span",{onClick:O=>f(h),class:gt(["tag",{activetag:R(c)===h}]),style:Ct(u(r.value[h].length))},[Q(I(h)+" ",1),v("span",pe,I(r.value[h].length),1)],14,ve))),256))]),At(v("h4",be,[(m(),w("svg",ge,me)),v("span",we,I(R(c)),1)],512),[[Ot,R(c)]]),(m(!0),w(z,null,K(r.value[R(c)],(S,h)=>(m(),w("a",{href:R(bt)(S.regularPath),key:h,class:"article"},[v("div",ye,[Me,Q(" "+I(S.frontMatter.title),1)]),v("div",ke,I(S.frontMatter.date),1)],8,$e))),128))]))}}),De=H(Se,[["__scopeId","data-v-6b5bf8a1"]]),Te={},Ae={src:"https://readme-typing-svg.demolab.com?font=Fira+Code&pause=1000&color=009F01&center=true&random=false&width=435&lines=github.com%2Fartdev-hash;facebook.com%2FkimITservices;YT%3A+%40kimlorenzo143",alt:"Typing SVG",class:"center"};function Oe(t,n){return m(),w("img",Ae)}const Ce=H(Te,[["render",Oe],["__scopeId","data-v-8302d363"]]),xe=t=>(nt("data-v-5a21af5e"),t=t(),ot(),t),Ie=xe(()=>v("a",{href:"https://www.buymeacoffee.com/kimdevprc",target:"_blank",title:"artdev-hash"},"artdev-hash",-1)),Pe=F({__name:"CopyWright",setup(t){const n=new Date().getFullYear();return(r,c)=>(m(),w("footer",null,[Q(" Powered by "),Ie,Q(" | Copyright © 2022-"+I(R(n))+" | MIT License ",1)]))}}),Le=H(Pe,[["__scopeId","data-v-5a21af5e"]]),mt=t=>(nt("data-v-41415402"),t=t(),ot(),t),Ee=mt(()=>v("h1",{class:"blog-title"},"Feed Post",-1)),Re={class:"blogList"},Ne=["href"],ze={class:"title"},Fe={class:"date"},He={class:"pagination"},je=["onClick"],Be=mt(()=>v("br",null,null,-1)),Ve=mt(()=>v("br",null,null,-1)),Ye=F({__name:"Page",setup(t){const{theme:n}=X();let r=n.value.posts||[],c=n.value.postLength,f=n.value.pageSize,u=c%f===0?c/f:c/f+1;u=parseInt(u.toString());let p=ut(1);r=r.filter(y=>y.regularPath.indexOf("index")<0);let g={};for(let y=0;y<u;y++)g[y]=[];let S=0;for(let y=0;y<r.length;y++)g[S].length>f-1&&(S+=1),g[S].push(r[y]);let h=ut([]);h.value=g[p.value-1];const O=y=>{p.value=y,h.value=g[p.value-1]},D=y=>{const C=y.split("-");let M=C[0],$="",B=C[2];switch(C[1]){case"1":case"01":$="Jan";break;case"2":case"02":$="Feb";break;case"3":case"03":$="Mar";break;case"4":case"04":$="Apr";break;case"5":case"05":$="May";break;case"6":case"06":$="Jun";break;case"7":case"07":$="Jul";break;case"8":case"08":$="Aug";break;case"9":case"09":$="Sep";break;case"10":$="Oct";break;case"11":$="Nov";break;case"12":$="Dec";break;default:$="Month"}return`${$} ${B}, ${M}`};return(y,C)=>(m(),w(z,null,[Ee,v("div",Re,[(m(!0),w(z,null,K(R(h),M=>(m(),w("a",{class:"blog",href:R(bt)(M.regularPath)},[v("div",ze,I(M.frontMatter.title),1),v("div",Fe,I(D(M.frontMatter.date)),1)],8,Ne))),256))]),v("div",He,[(m(!0),w(z,null,K(R(u),M=>(m(),w("div",{class:gt(["link",{activeLink:R(p)===M}]),key:M,onClick:$=>O(M)},I(M),11,je))),128))]),Be,Ve],64))}}),Ue=H(Ye,[["__scopeId","data-v-41415402"]]),We={key:0,class:"category"},Ge={class:"list"},Ke={class:"header"},Je=["href"],Ze={key:1},qe={class:"header"},Qe=["href"],Xe=F({__name:"Category",setup(t){const{frontmatter:n,theme:r}=X(),c=xt([]),f=ut(!1);return It(()=>{c.value=Xt(n.value.outline??r.value.outline),f.value=c.value.some(u=>u.level===2)}),(u,p)=>c.value.length>0?(m(),w("div",We,[v("ul",Ge,[(m(!0),w(z,null,K(c.value,g=>(m(),w("li",Ke,[g.level===2?(m(),w("a",{key:0,href:g.link,class:"header-h2"},I(g.title),9,Je)):ht("",!0),g.level===3?(m(),w("ul",Ze,[v("li",qe,[v("a",{href:g.link,class:gt(["header-h3",{showIndent:f.value}])},I(g.title),11,Qe)])])):ht("",!0)]))),256))])])):ht("",!0)}}),ta=H(Xe,[["__scopeId","data-v-9d1e4980"]]);var Mt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function kt(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var St={exports:{}};(function(t,n){(function(r,c){t.exports=c()})(Mt,function(){var r=1e3,c=6e4,f=36e5,u="millisecond",p="second",g="minute",S="hour",h="day",O="week",D="month",y="quarter",C="year",M="date",$="Invalid Date",B=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,tt=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,et={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(i){var s=["th","st","nd","rd"],e=i%100;return"["+i+(s[(e-20)%10]||s[e]||s[0])+"]"}},at=function(i,s,e){var o=String(i);return!o||o.length>=s?i:""+Array(s+1-o.length).join(e)+i},V={s:at,z:function(i){var s=-i.utcOffset(),e=Math.abs(s),o=Math.floor(e/60),a=e%60;return(s<=0?"+":"-")+at(o,2,"0")+":"+at(a,2,"0")},m:function i(s,e){if(s.date()<e.date())return-i(e,s);var o=12*(e.year()-s.year())+(e.month()-s.month()),a=s.clone().add(o,D),d=e-a<0,l=s.clone().add(o+(d?-1:1),D);return+(-(o+(e-a)/(d?a-l:l-a))||0)},a:function(i){return i<0?Math.ceil(i)||0:Math.floor(i)},p:function(i){return{M:D,y:C,w:O,d:h,D:M,h:S,m:g,s:p,ms:u,Q:y}[i]||String(i||"").toLowerCase().replace(/s$/,"")},u:function(i){return i===void 0}},P="en",L={};L[P]=et;var J="$isDayjsObject",Y=function(i){return i instanceof it||!(!i||!i[J])},ct=function i(s,e,o){var a;if(!s)return P;if(typeof s=="string"){var d=s.toLowerCase();L[d]&&(a=d),e&&(L[d]=e,a=d);var l=s.split("-");if(!a&&l.length>1)return i(l[0])}else{var _=s.name;L[_]=s,a=_}return!o&&a&&(P=a),a||!o&&P},T=function(i,s){if(Y(i))return i.clone();var e=typeof s=="object"?s:{};return e.date=i,e.args=arguments,new it(e)},b=V;b.l=ct,b.i=Y,b.w=function(i,s){return T(i,{locale:s.$L,utc:s.$u,x:s.$x,$offset:s.$offset})};var it=function(){function i(e){this.$L=ct(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[J]=!0}var s=i.prototype;return s.parse=function(e){this.$d=function(o){var a=o.date,d=o.utc;if(a===null)return new Date(NaN);if(b.u(a))return new Date;if(a instanceof Date)return new Date(a);if(typeof a=="string"&&!/Z$/i.test(a)){var l=a.match(B);if(l){var _=l[2]-1||0,k=(l[7]||"0").substring(0,3);return d?new Date(Date.UTC(l[1],_,l[3]||1,l[4]||0,l[5]||0,l[6]||0,k)):new Date(l[1],_,l[3]||1,l[4]||0,l[5]||0,l[6]||0,k)}}return new Date(a)}(e),this.init()},s.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},s.$utils=function(){return b},s.isValid=function(){return this.$d.toString()!==$},s.isSame=function(e,o){var a=T(e);return this.startOf(o)<=a&&a<=this.endOf(o)},s.isAfter=function(e,o){return T(e)<this.startOf(o)},s.isBefore=function(e,o){return this.endOf(o)<T(e)},s.$g=function(e,o,a){return b.u(e)?this[o]:this.set(a,e)},s.unix=function(){return Math.floor(this.valueOf()/1e3)},s.valueOf=function(){return this.$d.getTime()},s.startOf=function(e,o){var a=this,d=!!b.u(o)||o,l=b.p(e),_=function(W,E){var j=b.w(a.$u?Date.UTC(a.$y,E,W):new Date(a.$y,E,W),a);return d?j:j.endOf(h)},k=function(W,E){return b.w(a.toDate()[W].apply(a.toDate("s"),(d?[0,0,0,0]:[23,59,59,999]).slice(E)),a)},A=this.$W,x=this.$M,N=this.$D,Z="set"+(this.$u?"UTC":"");switch(l){case C:return d?_(1,0):_(31,11);case D:return d?_(1,x):_(0,x+1);case O:var U=this.$locale().weekStart||0,st=(A<U?A+7:A)-U;return _(d?N-st:N+(6-st),x);case h:case M:return k(Z+"Hours",0);case S:return k(Z+"Minutes",1);case g:return k(Z+"Seconds",2);case p:return k(Z+"Milliseconds",3);default:return this.clone()}},s.endOf=function(e){return this.startOf(e,!1)},s.$set=function(e,o){var a,d=b.p(e),l="set"+(this.$u?"UTC":""),_=(a={},a[h]=l+"Date",a[M]=l+"Date",a[D]=l+"Month",a[C]=l+"FullYear",a[S]=l+"Hours",a[g]=l+"Minutes",a[p]=l+"Seconds",a[u]=l+"Milliseconds",a)[d],k=d===h?this.$D+(o-this.$W):o;if(d===D||d===C){var A=this.clone().set(M,1);A.$d[_](k),A.init(),this.$d=A.set(M,Math.min(this.$D,A.daysInMonth())).$d}else _&&this.$d[_](k);return this.init(),this},s.set=function(e,o){return this.clone().$set(e,o)},s.get=function(e){return this[b.p(e)]()},s.add=function(e,o){var a,d=this;e=Number(e);var l=b.p(o),_=function(x){var N=T(d);return b.w(N.date(N.date()+Math.round(x*e)),d)};if(l===D)return this.set(D,this.$M+e);if(l===C)return this.set(C,this.$y+e);if(l===h)return _(1);if(l===O)return _(7);var k=(a={},a[g]=c,a[S]=f,a[p]=r,a)[l]||1,A=this.$d.getTime()+e*k;return b.w(A,this)},s.subtract=function(e,o){return this.add(-1*e,o)},s.format=function(e){var o=this,a=this.$locale();if(!this.isValid())return a.invalidDate||$;var d=e||"YYYY-MM-DDTHH:mm:ssZ",l=b.z(this),_=this.$H,k=this.$m,A=this.$M,x=a.weekdays,N=a.months,Z=a.meridiem,U=function(E,j,rt,dt){return E&&(E[j]||E(o,d))||rt[j].slice(0,dt)},st=function(E){return b.s(_%12||12,E,"0")},W=Z||function(E,j,rt){var dt=E<12?"AM":"PM";return rt?dt.toLowerCase():dt};return d.replace(tt,function(E,j){return j||function(rt){switch(rt){case"YY":return String(o.$y).slice(-2);case"YYYY":return b.s(o.$y,4,"0");case"M":return A+1;case"MM":return b.s(A+1,2,"0");case"MMM":return U(a.monthsShort,A,N,3);case"MMMM":return U(N,A);case"D":return o.$D;case"DD":return b.s(o.$D,2,"0");case"d":return String(o.$W);case"dd":return U(a.weekdaysMin,o.$W,x,2);case"ddd":return U(a.weekdaysShort,o.$W,x,3);case"dddd":return x[o.$W];case"H":return String(_);case"HH":return b.s(_,2,"0");case"h":return st(1);case"hh":return st(2);case"a":return W(_,k,!0);case"A":return W(_,k,!1);case"m":return String(k);case"mm":return b.s(k,2,"0");case"s":return String(o.$s);case"ss":return b.s(o.$s,2,"0");case"SSS":return b.s(o.$ms,3,"0");case"Z":return l}return null}(E)||l.replace(":","")})},s.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},s.diff=function(e,o,a){var d,l=this,_=b.p(o),k=T(e),A=(k.utcOffset()-this.utcOffset())*c,x=this-k,N=function(){return b.m(l,k)};switch(_){case C:d=N()/12;break;case D:d=N();break;case y:d=N()/3;break;case O:d=(x-A)/6048e5;break;case h:d=(x-A)/864e5;break;case S:d=x/f;break;case g:d=x/c;break;case p:d=x/r;break;default:d=x}return a?d:b.a(d)},s.daysInMonth=function(){return this.endOf(D).$D},s.$locale=function(){return L[this.$L]},s.locale=function(e,o){if(!e)return this.$L;var a=this.clone(),d=ct(e,o,!0);return d&&(a.$L=d),a},s.clone=function(){return b.w(this.$d,this)},s.toDate=function(){return new Date(this.valueOf())},s.toJSON=function(){return this.isValid()?this.toISOString():null},s.toISOString=function(){return this.$d.toISOString()},s.toString=function(){return this.$d.toUTCString()},i}(),wt=it.prototype;return T.prototype=wt,[["$ms",u],["$s",p],["$m",g],["$H",S],["$W",h],["$M",D],["$y",C],["$D",M]].forEach(function(i){wt[i[1]]=function(s){return this.$g(s,i[0],i[1])}}),T.extend=function(i,s){return i.$i||(i(s,it,T),i.$i=!0),T},T.locale=ct,T.isDayjs=Y,T.unix=function(i){return T(1e3*i)},T.en=L[P],T.Ls=L,T.p={},T})})(St);var ea=St.exports;const ft=kt(ea);var Dt={exports:{}};(function(t,n){(function(r,c){t.exports=c()})(Mt,function(){return function(r,c,f){r=r||{};var u=c.prototype,p={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function g(h,O,D,y){return u.fromToBase(h,O,D,y)}f.en.relativeTime=p,u.fromToBase=function(h,O,D,y,C){for(var M,$,B,tt=D.$locale().relativeTime||p,et=r.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],at=et.length,V=0;V<at;V+=1){var P=et[V];P.d&&(M=y?f(h).diff(D,P.d,!0):D.diff(h,P.d,!0));var L=(r.rounding||Math.round)(Math.abs(M));if(B=M>0,L<=P.r||!P.r){L<=1&&V>0&&(P=et[V-1]);var J=tt[P.l];C&&(L=C(""+L)),$=typeof J=="string"?J.replace("%d",L):J(L,O,P.l,B);break}}if(O)return $;var Y=B?tt.future:tt.past;return typeof Y=="function"?Y($):Y.replace("%s",$)},u.to=function(h,O){return g(h,O,this,!0)},u.from=function(h,O){return g(h,O,this)};var S=function(h){return h.$u?f.utc():f()};u.toNow=function(h){return this.to(S(this),h)},u.fromNow=function(h){return this.from(S(this),h)}}})})(Dt);var aa=Dt.exports;const sa=kt(aa),ra={class:"title"},na={class:"date"},oa=F({__name:"Title",setup(t){const n=X().page.value,{title:r,description:c,lastUpdated:f,frontmatter:u}=n;ft.extend(sa);const p=ft().to(ft(u.date||Date.now()));return(g,S)=>(m(),w(z,null,[v("h1",ra,I(R(r)),1),v("div",na,"🕒 Published at: "+I(R(p)),1)],64))}}),ca=H(oa,[["__scopeId","data-v-cec0b25f"]]),ia=t=>(nt("data-v-57ae03b7"),t=t(),ot(),t),da=ia(()=>v("svg",{xmlns:"http://www.w3.org/2000/svg",display:"block",width:"30",height:"30",fill:"var(--vp-c-green-2)",class:"bi bi-arrow-return-left",viewBox:"0 0 16 16"},[v("path",{"fill-rule":"evenodd",d:"M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5"})],-1)),la=F({__name:"MyLayout",setup(t){const{Layout:n}=pt,r=()=>{history.back()};return(c,f)=>{const u=Pt("Comments");return m(),w(z,null,[G(R(n),null,{"doc-before":lt(()=>[G(ca),G(ta)]),"doc-after":lt(()=>[v("div",null,[v("button",{onClick:r},[Q("BACK..."),da])]),G(u)]),"home-hero-before":lt(()=>[G(Ce)]),"home-features-after":lt(()=>[G(Ue)]),_:1}),G(Le)],64)}}}),ua=H(la,[["__scopeId","data-v-57ae03b7"]]),ha=yt('<br data-v-3a35f07d><br data-v-3a35f07d><div class="main" data-v-3a35f07d><h1 class="about-header" data-v-3a35f07d>👨‍💻 About Me</h1><br data-v-3a35f07d><code data-v-3a35f07d><b data-v-3a35f07d>I&#39;m an IT Specialist / Developer </b></code><br data-v-3a35f07d><code data-v-3a35f07d><b data-v-3a35f07d>A Computer Science Graduate</b></code><br data-v-3a35f07d><code data-v-3a35f07d><b data-v-3a35f07d>Freelance, IT CS related works at the moment</b></code><br data-v-3a35f07d><code data-v-3a35f07d><b data-v-3a35f07d>Very Open for Permanent Job Position, Projects, Assignments and Layout</b></code><br data-v-3a35f07d><code data-v-3a35f07d><b data-v-3a35f07d>Passionate to Learn new skills and knowledges</b></code><br data-v-3a35f07d><div class="typewriter-effect" data-v-3a35f07d><div class="text" id="typewriter-text" data-v-3a35f07d></div><code data-v-3a35f07d><b data-v-3a35f07d>A Trustworthy person</b></code></div><br data-v-3a35f07d><code data-v-3a35f07d><b data-v-3a35f07d>ENV :</b></code><div class="container" data-v-3a35f07d><div class="image" data-v-3a35f07d><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40" data-v-3a35f07d></div><div class="image" data-v-3a35f07d><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40" data-v-3a35f07d></div><div class="image" data-v-3a35f07d><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40" data-v-3a35f07d></div><div class="image" data-v-3a35f07d><img src="https://www.vectorlogo.zone/logos/vuejs/vuejs-icon.svg" alt="vue js" width="40" height="40" data-v-3a35f07d></div><div class="image" data-v-3a35f07d><img src="https://www.vectorlogo.zone/logos/dartlang/dartlang-icon.svg" alt="dart" width="40" height="40" data-v-3a35f07d></div><div class="image" data-v-3a35f07d><img src="https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg" alt="flutter" width="40" height="40" data-v-3a35f07d></div><div class="image" data-v-3a35f07d><img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="firebase" width="40" height="40" data-v-3a35f07d></div><div class="image" data-v-3a35f07d><img src="https://raw.githubusercontent.com/artdev-hash/devicon/master/icons/appwrite/appwrite-original.svg" alt="appwrite" width="40" height="40" data-v-3a35f07d></div><div class="image" data-v-3a35f07d><img src="https://www.vectorlogo.zone/logos/cloudflare/cloudflare-icon.svg" alt="cloudflare" width="40" height="40" data-v-3a35f07d></div><div class="image" data-v-3a35f07d><img src="https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg" alt="typescript" width="40" height="40" data-v-3a35f07d></div><div class="image" data-v-3a35f07d><img src="https://www.vectorlogo.zone/logos/gnu_bash/gnu_bash-icon.svg" alt="bash" width="40" height="40" data-v-3a35f07d></div><div class="image" data-v-3a35f07d><img src="https://www.vectorlogo.zone/logos/visualstudio_code/visualstudio_code-icon.svg" alt="vs-code" width="40" height="40" data-v-3a35f07d></div></div><br data-v-3a35f07d><br data-v-3a35f07d><br data-v-3a35f07d><br data-v-3a35f07d></div>',3),fa=F({__name:"Dev",setup(t){return(n,r)=>ha}}),va=H(fa,[["__scopeId","data-v-3a35f07d"]]),pa=yt('<br data-v-cb1834f4><br data-v-cb1834f4><div class="main" data-v-cb1834f4><h1 class="about-header" data-v-cb1834f4>🚀 Open Source / Projects</h1><br data-v-cb1834f4><code data-v-cb1834f4>Recent 💡 &gt;&gt;</code><br data-v-cb1834f4><div class="typewriter-effect" data-v-cb1834f4><div class="text" id="typewriter-text" data-v-cb1834f4></div><code data-v-cb1834f4>- <a href="https://m-k-products.github.io/store/" target="_blank" rel="noopener" data-v-cb1834f4>M.K PRODUCTS</a></code></div><code data-v-cb1834f4>- <a href="https://artdev-hash.github.io/english-tagalog-vocab/" target="_blank" rel="noopener" data-v-cb1834f4>ENGLISH TAGALOG VOCAB</a></code><br data-v-cb1834f4><code data-v-cb1834f4>- <a href="https://artdev-hash.github.io/pc-upgrade-and-repair/" target="_blank" rel="noopener" data-v-cb1834f4>PC UPGRADE AND REPAIR</a></code><br data-v-cb1834f4><code data-v-cb1834f4>- Participation in HACKTOBER 23</code><br data-v-cb1834f4><code data-v-cb1834f4>- <a href="https://artdev-hash.github.io/bicol_translate/" target="_blank" rel="noopener" data-v-cb1834f4>BICOL TRANSLATE</a></code><br data-v-cb1834f4><code data-v-cb1834f4>- <a href="https://artdev-hash.github.io/octo-feedboard/" target="_blank" rel="noopener" data-v-cb1834f4>OCTO-FEEDBOARD</a></code><br data-v-cb1834f4><code data-v-cb1834f4>- <a href="https://lorenzokimarthur.com" target="_blank" rel="noopener" data-v-cb1834f4>LORENZOKIMARTHUR.COM</a></code><br data-v-cb1834f4><code data-v-cb1834f4>- Participation in HACKTOBER 22</code><br data-v-cb1834f4><code data-v-cb1834f4>- <a href="https://artdev-hash.github.io/biz-kal/" target="_blank" rel="noopener" data-v-cb1834f4>BIZ-KAL</a></code><br data-v-cb1834f4><code data-v-cb1834f4>- <a href="https://devs.flutter.ph/" target="_blank" rel="noopener" data-v-cb1834f4>FLUTTER DEVS</a></code> <br data-v-cb1834f4><code data-v-cb1834f4>- <a href="https://artdev-hash.github.io/snamegenerator/" target="_blank" rel="noopener" data-v-cb1834f4>SNAMEGENERATOR</a></code><br data-v-cb1834f4><code data-v-cb1834f4>- Participation in 30 Days Flutter 21</code><br data-v-cb1834f4><code data-v-cb1834f4>- <a href="https://artdev-hash.github.io/krprt-octo-uploader/" target="_blank" rel="noopener" data-v-cb1834f4>KRPRT-OCTO-UPLOADER</a></code><br data-v-cb1834f4><code data-v-cb1834f4>- <a href="https://artdev-hash.github.io/kshared-nocto-copier/" target="_blank" rel="noopener" data-v-cb1834f4>KSHARED-NOCTO-COPIER</a></code><br data-v-cb1834f4><code data-v-cb1834f4>- PLANBANK website</code><br data-v-cb1834f4><code data-v-cb1834f4>- IAMTHECOFFEEGUY</code><br data-v-cb1834f4><code data-v-cb1834f4>- CQMS - Customer Queuing Management System</code><br data-v-cb1834f4><code data-v-cb1834f4>- LMS - Library Management System</code><br data-v-cb1834f4><code data-v-cb1834f4>- <a href="https://artdev-hash.github.io/vbex-dotnet/" target="_blank" rel="noopener" data-v-cb1834f4>VBEX-DOT.NET</a></code><br data-v-cb1834f4><h1 class="about-2ndhead" data-v-cb1834f4>👨‍💻 Support My Actions by</h1><br data-v-cb1834f4><code data-v-cb1834f4> * Sending Inspirational Messages 💌</code><br data-v-cb1834f4><code data-v-cb1834f4> * Liking or Following My Pages:<br data-v-cb1834f4></code><code data-v-cb1834f4> - YT <a href="https://www.youtube.com/channel/UCP2psTOak3Z60eQj1wq--cg" target="_blank" rel="noopener" data-v-cb1834f4>@kimlorenzo143</a></code><br data-v-cb1834f4><code data-v-cb1834f4> - FB <a href="https://www.facebook.com/kimITservices" target="_blank" rel="noopener" data-v-cb1834f4>kimITservices</a></code><br data-v-cb1834f4><code data-v-cb1834f4> * <a href="https://www.buymeacoffee.com/kimdevprc" target="_blank" title="artdev-hash" data-v-cb1834f4>BuyMeaCoffee ☕</a></code><br data-v-cb1834f4><code data-v-cb1834f4> ** THANK YOU FOR YOUR SUPPORT ❤️ **</code><br data-v-cb1834f4><br data-v-cb1834f4></div>',3),ba=F({__name:"Projie",setup(t){return(n,r)=>pa}}),ga=H(ba,[["__scopeId","data-v-cb1834f4"]]),_a={...pt,Layout:ua,enhanceApp(t){pt.enhanceApp(t);const{app:n}=t;n.component("Archives",le),n.component("Tags",De),n.component("Dev",va),n.component("Work",ga)}};function Tt(t){if(t.extends){const n=Tt(t.extends);return{...n,...t,async enhanceApp(r){n.enhanceApp&&await n.enhanceApp(r),t.enhanceApp&&await t.enhanceApp(r)}}}return t}const q=Tt(_a),ma=F({name:"VitePressApp",setup(){const{site:t}=X();return Ut(()=>{Wt(()=>{document.documentElement.lang=t.value.lang,document.documentElement.dir=t.value.dir})}),t.value.router.prefetchLinks&&Gt(),Kt(),Jt(),q.setup&&q.setup(),()=>Zt(q.Layout)}});async function wa(){const t=ya(),n=$a();n.provide(Et,t);const r=Rt(t.route);return n.provide(Nt,r),n.component("Content",zt),n.component("ClientOnly",Ft),Object.defineProperties(n.config.globalProperties,{$frontmatter:{get(){return r.frontmatter.value}},$params:{get(){return r.page.value.params}}}),q.enhanceApp&&await q.enhanceApp({app:n,router:t,siteData:Ht}),{app:n,router:t,data:r}}function $a(){return jt(ma)}function ya(){let t=vt,n;return Bt(r=>{let c=Vt(r),f=null;return c&&(t&&(n=c),(t||n===c)&&(c=c.replace(/\.js$/,".lean.js")),f=Yt(()=>import(c),__vite__mapDeps([]))),vt&&(t=!1),f},q.NotFound)}vt&&wa().then(({app:t,router:n,data:r})=>{n.go().then(()=>{Lt(n.route,r.site),t.mount("#app")})});export{wa as createApp};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}