import{d as F,u as X,g as we,o as m,c as $,F as z,E as K,k as v,t as I,m as R,f as pe,a as Q,p as ne,q as oe,_ as H,h as ue,a4 as Ae,a5 as Oe,n as ge,O as Ce,G as xe,H as Ie,e as he,D as Pe,I as G,w as le,R as ye,v as ve,a6 as Le,a7 as Ee,a8 as Re,a9 as Ne,aa as ze,ab as Fe,ac as He,ad as je,ae as Be,af as Ve,Y as Ye,j as Ue,z as We,ag as Ge,ah as Ke,ai as Je,aj as Ze}from"./chunks/framework.JK8Xa7st.js";import{t as be}from"./chunks/theme.Q79nCEnd.js";function qe(e){const n={};for(let r=0;r<e.length;r++){const c=e[r],f=c.frontMatter.tags;Array.isArray(f)&&f.forEach(u=>{n[u]||(n[u]=[]),n[u].push(c)})}return n}function Qe(e){const n=[];let r="0",c=-1;for(let f=0;f<e.length;f++){const u=e[f];if(u.frontMatter.date){const b=u.frontMatter.date.split("-")[0];b===r?n[c].push(u):(c++,n[c]=[],n[c].push(u),r=b)}}return n}function Xe(e){return[...document.querySelectorAll(".VPDoc h2,h3,h4,h5,h6")].filter(r=>r.id&&r.hasChildNodes()).map(r=>{const c=Number(r.tagName[1]);return{title:et(r),link:"#"+r.id,level:c}})}function et(e){let n="";for(const r of e.childNodes)if(r.nodeType===1){if(r.classList.contains("VPBadge")||r.classList.contains("header-anchor"))continue;n+=r.textContent}else r.nodeType===3&&(n+=r.textContent);return n.trim()}const tt=e=>(ne("data-v-69b61450"),e=e(),oe(),e),at={class:"main"},st={class:"yearItem"},rt={class:"year"},nt=["href"],ot={class:"title"},ct=tt(()=>v("div",{class:"title-o"},null,-1)),it={class:"date"},dt=F({__name:"Archives",setup(e){const{theme:n}=X(),r=we(()=>Qe(n.value.posts));return(c,f)=>(m(),$("div",at,[(m(!0),$(z,null,K(r.value,u=>(m(),$("div",st,[v("div",rt,I(u[0].frontMatter.date.split("-")[0]),1),(m(!0),$(z,null,K(u,(b,g)=>(m(),$("a",{href:R(pe)(b.regularPath),key:g,class:"article"},[v("div",ot,[ct,Q(" "+I(b.frontMatter.title),1)]),v("div",it,I(b.frontMatter.date.slice(5)),1)],8,nt))),128))]))),256))]))}}),lt=H(dt,[["__scopeId","data-v-69b61450"]]),_e=e=>(ne("data-v-6b5bf8a1"),e=e(),oe(),e),ut={class:"main"},ht=_e(()=>v("h1",{class:"tags-header"},"Tags",-1)),ft={class:"tags"},vt=["onClick"],bt={class:"tag-length"},pt={class:"header"},gt={t:"1641783753540",class:"fas-icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"1254",style:{width:"20px"}},_t=_e(()=>v("path",{d:"M995.126867 592.38l-360.08 360.08a53.333333 53.333333 0 0 1-71.333334 3.68l356.22-356.22a64 64 0 0 0 0-90.506667L495.8402 85.333333h45.573333a52.986667 52.986667 0 0 1 37.713334 15.62l416 416a53.4 53.4 0 0 1 0 75.426667z m-128 0l-360.08 360.08a53.333333 53.333333 0 0 1-75.426667 0l-416-416A52.986667 52.986667 0 0 1 0.0002 498.746667V138.666667a53.393333 53.393333 0 0 1 53.333333-53.333334h360.08a52.986667 52.986667 0 0 1 37.713334 15.62l416 416a53.4 53.4 0 0 1 0 75.426667zM341.333533 341.333333a85.333333 85.333333 0 1 0-85.333333 85.333334 85.426667 85.426667 0 0 0 85.333333-85.333334z",fill:"var(--vp-c-brand)","p-id":"1255"},null,-1)),mt=[_t],$t={class:"header-text"},wt=["href"],yt={class:"title"},Mt=_e(()=>v("div",{class:"title-o"},null,-1)),kt={class:"date"},St=F({__name:"Tags",setup(e){const{theme:n}=X(),r=we(()=>qe(n.value.posts));let c=ue("");const f=b=>{c.value=b},u=b=>({fontSize:`${b*.04+.85}em`});return(b,g)=>(m(),$("div",ut,[ht,v("div",ft,[(m(!0),$(z,null,K(r.value,(S,h)=>(m(),$("span",{onClick:O=>f(h),class:ge(["tag",{activetag:R(c)===h}]),style:Ce(u(r.value[h].length))},[Q(I(h)+" ",1),v("span",bt,I(r.value[h].length),1)],14,vt))),256))]),Ae(v("h4",pt,[(m(),$("svg",gt,mt)),v("span",$t,I(R(c)),1)],512),[[Oe,R(c)]]),(m(!0),$(z,null,K(r.value[R(c)],(S,h)=>(m(),$("a",{href:R(pe)(S.regularPath),key:h,class:"article"},[v("div",yt,[Mt,Q(" "+I(S.frontMatter.title),1)]),v("div",kt,I(S.frontMatter.date),1)],8,wt))),128))]))}}),Dt=H(St,[["__scopeId","data-v-6b5bf8a1"]]),Tt={},At={src:"https://readme-typing-svg.demolab.com?font=Fira+Code&pause=1000&color=009F01&center=true&random=false&width=435&lines=github.com%2Fartdev-hash;facebook.com%2FkimITservices;YT%3A+%40kimlorenzo143",alt:"Typing SVG",class:"center"};function Ot(e,n){return m(),$("img",At)}const Ct=H(Tt,[["render",Ot],["__scopeId","data-v-8302d363"]]),xt=e=>(ne("data-v-5a21af5e"),e=e(),oe(),e),It=xt(()=>v("a",{href:"https://www.buymeacoffee.com/kimdevprc",target:"_blank",title:"artdev-hash"},"artdev-hash",-1)),Pt=F({__name:"CopyWright",setup(e){const n=new Date().getFullYear();return(r,c)=>(m(),$("footer",null,[Q(" Powered by "),It,Q(" | Copyright © 2022-"+I(R(n))+" | MIT License ",1)]))}}),Lt=H(Pt,[["__scopeId","data-v-5a21af5e"]]),me=e=>(ne("data-v-41415402"),e=e(),oe(),e),Et=me(()=>v("h1",{class:"blog-title"},"Feed Post",-1)),Rt={class:"blogList"},Nt=["href"],zt={class:"title"},Ft={class:"date"},Ht={class:"pagination"},jt=["onClick"],Bt=me(()=>v("br",null,null,-1)),Vt=me(()=>v("br",null,null,-1)),Yt=F({__name:"Page",setup(e){const{theme:n}=X();let r=n.value.posts||[],c=n.value.postLength,f=n.value.pageSize,u=c%f===0?c/f:c/f+1;u=parseInt(u.toString());let b=ue(1);r=r.filter(y=>y.regularPath.indexOf("index")<0);let g={};for(let y=0;y<u;y++)g[y]=[];let S=0;for(let y=0;y<r.length;y++)g[S].length>f-1&&(S+=1),g[S].push(r[y]);let h=ue([]);h.value=g[b.value-1];const O=y=>{b.value=y,h.value=g[b.value-1]},D=y=>{const C=y.split("-");let M=C[0],w="",B=C[2];switch(C[1]){case"1":case"01":w="Jan";break;case"2":case"02":w="Feb";break;case"3":case"03":w="Mar";break;case"4":case"04":w="Apr";break;case"5":case"05":w="May";break;case"6":case"06":w="Jun";break;case"7":case"07":w="Jul";break;case"8":case"08":w="Aug";break;case"9":case"09":w="Sep";break;case"10":w="Oct";break;case"11":w="Nov";break;case"12":w="Dec";break;default:w="Month"}return`${w} ${B}, ${M}`};return(y,C)=>(m(),$(z,null,[Et,v("div",Rt,[(m(!0),$(z,null,K(R(h),M=>(m(),$("a",{class:"blog",href:R(pe)(M.regularPath)},[v("div",zt,I(M.frontMatter.title),1),v("div",Ft,I(D(M.frontMatter.date)),1)],8,Nt))),256))]),v("div",Ht,[(m(!0),$(z,null,K(R(u),M=>(m(),$("div",{class:ge(["link",{activeLink:R(b)===M}]),key:M,onClick:w=>O(M)},I(M),11,jt))),128))]),Bt,Vt],64))}}),Ut=H(Yt,[["__scopeId","data-v-41415402"]]),Wt={key:0,class:"category"},Gt={class:"list"},Kt={class:"header"},Jt=["href"],Zt={key:1},qt={class:"header"},Qt=["href"],Xt=F({__name:"Category",setup(e){const{frontmatter:n,theme:r}=X(),c=xe([]),f=ue(!1);return Ie(()=>{c.value=Xe(n.value.outline??r.value.outline),f.value=c.value.some(u=>u.level===2)}),(u,b)=>c.value.length>0?(m(),$("div",Wt,[v("ul",Gt,[(m(!0),$(z,null,K(c.value,g=>(m(),$("li",Kt,[g.level===2?(m(),$("a",{key:0,href:g.link,class:"header-h2"},I(g.title),9,Jt)):he("",!0),g.level===3?(m(),$("ul",Zt,[v("li",qt,[v("a",{href:g.link,class:ge(["header-h3",{showIndent:f.value}])},I(g.title),11,Qt)])])):he("",!0)]))),256))])])):he("",!0)}}),ea=H(Xt,[["__scopeId","data-v-9d1e4980"]]);var Me=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ke(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Se={exports:{}};(function(e,n){(function(r,c){e.exports=c()})(Me,function(){var r=1e3,c=6e4,f=36e5,u="millisecond",b="second",g="minute",S="hour",h="day",O="week",D="month",y="quarter",C="year",M="date",w="Invalid Date",B=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,ee=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,te={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(i){var s=["th","st","nd","rd"],t=i%100;return"["+i+(s[(t-20)%10]||s[t]||s[0])+"]"}},ae=function(i,s,t){var o=String(i);return!o||o.length>=s?i:""+Array(s+1-o.length).join(t)+i},V={s:ae,z:function(i){var s=-i.utcOffset(),t=Math.abs(s),o=Math.floor(t/60),a=t%60;return(s<=0?"+":"-")+ae(o,2,"0")+":"+ae(a,2,"0")},m:function i(s,t){if(s.date()<t.date())return-i(t,s);var o=12*(t.year()-s.year())+(t.month()-s.month()),a=s.clone().add(o,D),d=t-a<0,l=s.clone().add(o+(d?-1:1),D);return+(-(o+(t-a)/(d?a-l:l-a))||0)},a:function(i){return i<0?Math.ceil(i)||0:Math.floor(i)},p:function(i){return{M:D,y:C,w:O,d:h,D:M,h:S,m:g,s:b,ms:u,Q:y}[i]||String(i||"").toLowerCase().replace(/s$/,"")},u:function(i){return i===void 0}},P="en",L={};L[P]=te;var J="$isDayjsObject",Y=function(i){return i instanceof ie||!(!i||!i[J])},ce=function i(s,t,o){var a;if(!s)return P;if(typeof s=="string"){var d=s.toLowerCase();L[d]&&(a=d),t&&(L[d]=t,a=d);var l=s.split("-");if(!a&&l.length>1)return i(l[0])}else{var _=s.name;L[_]=s,a=_}return!o&&a&&(P=a),a||!o&&P},T=function(i,s){if(Y(i))return i.clone();var t=typeof s=="object"?s:{};return t.date=i,t.args=arguments,new ie(t)},p=V;p.l=ce,p.i=Y,p.w=function(i,s){return T(i,{locale:s.$L,utc:s.$u,x:s.$x,$offset:s.$offset})};var ie=function(){function i(t){this.$L=ce(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[J]=!0}var s=i.prototype;return s.parse=function(t){this.$d=function(o){var a=o.date,d=o.utc;if(a===null)return new Date(NaN);if(p.u(a))return new Date;if(a instanceof Date)return new Date(a);if(typeof a=="string"&&!/Z$/i.test(a)){var l=a.match(B);if(l){var _=l[2]-1||0,k=(l[7]||"0").substring(0,3);return d?new Date(Date.UTC(l[1],_,l[3]||1,l[4]||0,l[5]||0,l[6]||0,k)):new Date(l[1],_,l[3]||1,l[4]||0,l[5]||0,l[6]||0,k)}}return new Date(a)}(t),this.init()},s.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},s.$utils=function(){return p},s.isValid=function(){return this.$d.toString()!==w},s.isSame=function(t,o){var a=T(t);return this.startOf(o)<=a&&a<=this.endOf(o)},s.isAfter=function(t,o){return T(t)<this.startOf(o)},s.isBefore=function(t,o){return this.endOf(o)<T(t)},s.$g=function(t,o,a){return p.u(t)?this[o]:this.set(a,t)},s.unix=function(){return Math.floor(this.valueOf()/1e3)},s.valueOf=function(){return this.$d.getTime()},s.startOf=function(t,o){var a=this,d=!!p.u(o)||o,l=p.p(t),_=function(W,E){var j=p.w(a.$u?Date.UTC(a.$y,E,W):new Date(a.$y,E,W),a);return d?j:j.endOf(h)},k=function(W,E){return p.w(a.toDate()[W].apply(a.toDate("s"),(d?[0,0,0,0]:[23,59,59,999]).slice(E)),a)},A=this.$W,x=this.$M,N=this.$D,Z="set"+(this.$u?"UTC":"");switch(l){case C:return d?_(1,0):_(31,11);case D:return d?_(1,x):_(0,x+1);case O:var U=this.$locale().weekStart||0,se=(A<U?A+7:A)-U;return _(d?N-se:N+(6-se),x);case h:case M:return k(Z+"Hours",0);case S:return k(Z+"Minutes",1);case g:return k(Z+"Seconds",2);case b:return k(Z+"Milliseconds",3);default:return this.clone()}},s.endOf=function(t){return this.startOf(t,!1)},s.$set=function(t,o){var a,d=p.p(t),l="set"+(this.$u?"UTC":""),_=(a={},a[h]=l+"Date",a[M]=l+"Date",a[D]=l+"Month",a[C]=l+"FullYear",a[S]=l+"Hours",a[g]=l+"Minutes",a[b]=l+"Seconds",a[u]=l+"Milliseconds",a)[d],k=d===h?this.$D+(o-this.$W):o;if(d===D||d===C){var A=this.clone().set(M,1);A.$d[_](k),A.init(),this.$d=A.set(M,Math.min(this.$D,A.daysInMonth())).$d}else _&&this.$d[_](k);return this.init(),this},s.set=function(t,o){return this.clone().$set(t,o)},s.get=function(t){return this[p.p(t)]()},s.add=function(t,o){var a,d=this;t=Number(t);var l=p.p(o),_=function(x){var N=T(d);return p.w(N.date(N.date()+Math.round(x*t)),d)};if(l===D)return this.set(D,this.$M+t);if(l===C)return this.set(C,this.$y+t);if(l===h)return _(1);if(l===O)return _(7);var k=(a={},a[g]=c,a[S]=f,a[b]=r,a)[l]||1,A=this.$d.getTime()+t*k;return p.w(A,this)},s.subtract=function(t,o){return this.add(-1*t,o)},s.format=function(t){var o=this,a=this.$locale();if(!this.isValid())return a.invalidDate||w;var d=t||"YYYY-MM-DDTHH:mm:ssZ",l=p.z(this),_=this.$H,k=this.$m,A=this.$M,x=a.weekdays,N=a.months,Z=a.meridiem,U=function(E,j,re,de){return E&&(E[j]||E(o,d))||re[j].slice(0,de)},se=function(E){return p.s(_%12||12,E,"0")},W=Z||function(E,j,re){var de=E<12?"AM":"PM";return re?de.toLowerCase():de};return d.replace(ee,function(E,j){return j||function(re){switch(re){case"YY":return String(o.$y).slice(-2);case"YYYY":return p.s(o.$y,4,"0");case"M":return A+1;case"MM":return p.s(A+1,2,"0");case"MMM":return U(a.monthsShort,A,N,3);case"MMMM":return U(N,A);case"D":return o.$D;case"DD":return p.s(o.$D,2,"0");case"d":return String(o.$W);case"dd":return U(a.weekdaysMin,o.$W,x,2);case"ddd":return U(a.weekdaysShort,o.$W,x,3);case"dddd":return x[o.$W];case"H":return String(_);case"HH":return p.s(_,2,"0");case"h":return se(1);case"hh":return se(2);case"a":return W(_,k,!0);case"A":return W(_,k,!1);case"m":return String(k);case"mm":return p.s(k,2,"0");case"s":return String(o.$s);case"ss":return p.s(o.$s,2,"0");case"SSS":return p.s(o.$ms,3,"0");case"Z":return l}return null}(E)||l.replace(":","")})},s.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},s.diff=function(t,o,a){var d,l=this,_=p.p(o),k=T(t),A=(k.utcOffset()-this.utcOffset())*c,x=this-k,N=function(){return p.m(l,k)};switch(_){case C:d=N()/12;break;case D:d=N();break;case y:d=N()/3;break;case O:d=(x-A)/6048e5;break;case h:d=(x-A)/864e5;break;case S:d=x/f;break;case g:d=x/c;break;case b:d=x/r;break;default:d=x}return a?d:p.a(d)},s.daysInMonth=function(){return this.endOf(D).$D},s.$locale=function(){return L[this.$L]},s.locale=function(t,o){if(!t)return this.$L;var a=this.clone(),d=ce(t,o,!0);return d&&(a.$L=d),a},s.clone=function(){return p.w(this.$d,this)},s.toDate=function(){return new Date(this.valueOf())},s.toJSON=function(){return this.isValid()?this.toISOString():null},s.toISOString=function(){return this.$d.toISOString()},s.toString=function(){return this.$d.toUTCString()},i}(),$e=ie.prototype;return T.prototype=$e,[["$ms",u],["$s",b],["$m",g],["$H",S],["$W",h],["$M",D],["$y",C],["$D",M]].forEach(function(i){$e[i[1]]=function(s){return this.$g(s,i[0],i[1])}}),T.extend=function(i,s){return i.$i||(i(s,ie,T),i.$i=!0),T},T.locale=ce,T.isDayjs=Y,T.unix=function(i){return T(1e3*i)},T.en=L[P],T.Ls=L,T.p={},T})})(Se);var ta=Se.exports;const fe=ke(ta);var De={exports:{}};(function(e,n){(function(r,c){e.exports=c()})(Me,function(){return function(r,c,f){r=r||{};var u=c.prototype,b={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function g(h,O,D,y){return u.fromToBase(h,O,D,y)}f.en.relativeTime=b,u.fromToBase=function(h,O,D,y,C){for(var M,w,B,ee=D.$locale().relativeTime||b,te=r.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],ae=te.length,V=0;V<ae;V+=1){var P=te[V];P.d&&(M=y?f(h).diff(D,P.d,!0):D.diff(h,P.d,!0));var L=(r.rounding||Math.round)(Math.abs(M));if(B=M>0,L<=P.r||!P.r){L<=1&&V>0&&(P=te[V-1]);var J=ee[P.l];C&&(L=C(""+L)),w=typeof J=="string"?J.replace("%d",L):J(L,O,P.l,B);break}}if(O)return w;var Y=B?ee.future:ee.past;return typeof Y=="function"?Y(w):Y.replace("%s",w)},u.to=function(h,O){return g(h,O,this,!0)},u.from=function(h,O){return g(h,O,this)};var S=function(h){return h.$u?f.utc():f()};u.toNow=function(h){return this.to(S(this),h)},u.fromNow=function(h){return this.from(S(this),h)}}})})(De);var aa=De.exports;const sa=ke(aa),ra={class:"title"},na={class:"date"},oa=F({__name:"Title",setup(e){const n=X().page.value,{title:r,description:c,lastUpdated:f,frontmatter:u}=n;fe.extend(sa);const b=fe().to(fe(u.date||Date.now()));return(g,S)=>(m(),$(z,null,[v("h1",ra,I(R(r)),1),v("div",na,"🕒 Published at: "+I(R(b)),1)],64))}}),ca=H(oa,[["__scopeId","data-v-cec0b25f"]]),ia=e=>(ne("data-v-57ae03b7"),e=e(),oe(),e),da=ia(()=>v("svg",{xmlns:"http://www.w3.org/2000/svg",display:"block",width:"30",height:"30",fill:"var(--vp-c-green-2)",class:"bi bi-arrow-return-left",viewBox:"0 0 16 16"},[v("path",{"fill-rule":"evenodd",d:"M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5"})],-1)),la=F({__name:"MyLayout",setup(e){const{Layout:n}=be,r=()=>{history.back()};return(c,f)=>{const u=Pe("Comments");return m(),$(z,null,[G(R(n),null,{"doc-before":le(()=>[G(ca),G(ea)]),"doc-after":le(()=>[v("div",null,[v("button",{onClick:r},[Q("BACK..."),da])]),G(u)]),"home-hero-before":le(()=>[G(Ct)]),"home-features-after":le(()=>[G(Ut)]),_:1}),G(Lt)],64)}}}),ua=H(la,[["__scopeId","data-v-57ae03b7"]]),ha=ye('<br data-v-85b0de3e><br data-v-85b0de3e><div class="main" data-v-85b0de3e><h1 class="about-header" data-v-85b0de3e>👨‍💻 About Me</h1><br data-v-85b0de3e><code data-v-85b0de3e><b data-v-85b0de3e>I&#39;m an IT Specialist / Developer </b></code><br data-v-85b0de3e><code data-v-85b0de3e><b data-v-85b0de3e>A Computer Science Graduate</b></code><br data-v-85b0de3e><code data-v-85b0de3e><b data-v-85b0de3e>Freelance, IT CS related works at the moment</b></code><br data-v-85b0de3e><code data-v-85b0de3e><b data-v-85b0de3e>Very Open for Permanent Job Position, Projects, Assignments and Layout</b></code><br data-v-85b0de3e><code data-v-85b0de3e><b data-v-85b0de3e>Passionate to Learn new skills and knowledges</b></code><br data-v-85b0de3e><div class="typewriter-effect" data-v-85b0de3e><div class="text" id="typewriter-text" data-v-85b0de3e></div><code data-v-85b0de3e><b data-v-85b0de3e>A Trustworthy person</b></code></div><br data-v-85b0de3e><code data-v-85b0de3e><b data-v-85b0de3e>ENV :</b></code><div class="container" data-v-85b0de3e><div class="image" data-v-85b0de3e><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40" data-v-85b0de3e></div><div class="image" data-v-85b0de3e><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40" data-v-85b0de3e></div><div class="image" data-v-85b0de3e><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40" data-v-85b0de3e></div><div class="image" data-v-85b0de3e><img src="https://www.vectorlogo.zone/logos/vuejs/vuejs-icon.svg" alt="vue js" width="40" height="40" data-v-85b0de3e></div><div class="image" data-v-85b0de3e><img src="https://www.vectorlogo.zone/logos/dartlang/dartlang-icon.svg" alt="dart" width="40" height="40" data-v-85b0de3e></div><div class="image" data-v-85b0de3e><img src="https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg" alt="flutter" width="40" height="40" data-v-85b0de3e></div><div class="image" data-v-85b0de3e><img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="firebase" width="40" height="40" data-v-85b0de3e></div><div class="image" data-v-85b0de3e><img src="https://raw.githubusercontent.com/artdev-hash/devicon/master/icons/appwrite/appwrite-original.svg" alt="appwrite" width="40" height="40" data-v-85b0de3e></div><div class="image" data-v-85b0de3e><img src="https://www.vectorlogo.zone/logos/cloudflare/cloudflare-icon.svg" alt="cloudflare" width="40" height="40" data-v-85b0de3e></div><div class="image" data-v-85b0de3e><img src="https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg" alt="typescript" width="40" height="40" data-v-85b0de3e></div><div class="image" data-v-85b0de3e><img src="https://cdn.simpleicons.org//gnometerminal/green" alt="bash" width="40" height="40" data-v-85b0de3e></div><div class="image" data-v-85b0de3e><img src="https://www.vectorlogo.zone/logos/visualstudio_code/visualstudio_code-icon.svg" alt="vs-code" width="40" height="40" data-v-85b0de3e></div></div></div><br data-v-85b0de3e><br data-v-85b0de3e><br data-v-85b0de3e><br data-v-85b0de3e><br data-v-85b0de3e>',8),fa=F({__name:"Dev",setup(e){return(n,r)=>ha}}),va=H(fa,[["__scopeId","data-v-85b0de3e"]]),ba=ye('<br data-v-cb1834f4><br data-v-cb1834f4><div class="main" data-v-cb1834f4><h1 class="about-header" data-v-cb1834f4>🚀 Open Source / Projects</h1><br data-v-cb1834f4><code data-v-cb1834f4>Recent 💡 &gt;&gt;</code><br data-v-cb1834f4><div class="typewriter-effect" data-v-cb1834f4><div class="text" id="typewriter-text" data-v-cb1834f4></div><code data-v-cb1834f4>- <a href="https://m-k-products.github.io/store/" target="_blank" rel="noopener" data-v-cb1834f4>M.K PRODUCTS</a></code></div><code data-v-cb1834f4>- <a href="https://artdev-hash.github.io/english-tagalog-vocab/" target="_blank" rel="noopener" data-v-cb1834f4>ENGLISH TAGALOG VOCAB</a></code><br data-v-cb1834f4><code data-v-cb1834f4>- <a href="https://artdev-hash.github.io/pc-upgrade-and-repair/" target="_blank" rel="noopener" data-v-cb1834f4>PC UPGRADE AND REPAIR</a></code><br data-v-cb1834f4><code data-v-cb1834f4>- Participation in HACKTOBER 23</code><br data-v-cb1834f4><code data-v-cb1834f4>- <a href="https://artdev-hash.github.io/bicol_translate/" target="_blank" rel="noopener" data-v-cb1834f4>BICOL TRANSLATE</a></code><br data-v-cb1834f4><code data-v-cb1834f4>- <a href="https://artdev-hash.github.io/octo-feedboard/" target="_blank" rel="noopener" data-v-cb1834f4>OCTO-FEEDBOARD</a></code><br data-v-cb1834f4><code data-v-cb1834f4>- <a href="https://lorenzokimarthur.com" target="_blank" rel="noopener" data-v-cb1834f4>LORENZOKIMARTHUR.COM</a></code><br data-v-cb1834f4><code data-v-cb1834f4>- Participation in HACKTOBER 22</code><br data-v-cb1834f4><code data-v-cb1834f4>- <a href="https://artdev-hash.github.io/biz-kal/" target="_blank" rel="noopener" data-v-cb1834f4>BIZ-KAL</a></code><br data-v-cb1834f4><code data-v-cb1834f4>- <a href="https://devs.flutter.ph/" target="_blank" rel="noopener" data-v-cb1834f4>FLUTTER DEVS</a></code> <br data-v-cb1834f4><code data-v-cb1834f4>- <a href="https://artdev-hash.github.io/snamegenerator/" target="_blank" rel="noopener" data-v-cb1834f4>SNAMEGENERATOR</a></code><br data-v-cb1834f4><code data-v-cb1834f4>- Participation in 30 Days Flutter 21</code><br data-v-cb1834f4><code data-v-cb1834f4>- <a href="https://artdev-hash.github.io/krprt-octo-uploader/" target="_blank" rel="noopener" data-v-cb1834f4>KRPRT-OCTO-UPLOADER</a></code><br data-v-cb1834f4><code data-v-cb1834f4>- <a href="https://artdev-hash.github.io/kshared-nocto-copier/" target="_blank" rel="noopener" data-v-cb1834f4>KSHARED-NOCTO-COPIER</a></code><br data-v-cb1834f4><code data-v-cb1834f4>- PLANBANK website</code><br data-v-cb1834f4><code data-v-cb1834f4>- IAMTHECOFFEEGUY</code><br data-v-cb1834f4><code data-v-cb1834f4>- CQMS - Customer Queuing Management System</code><br data-v-cb1834f4><code data-v-cb1834f4>- LMS - Library Management System</code><br data-v-cb1834f4><code data-v-cb1834f4>- <a href="https://artdev-hash.github.io/vbex-dotnet/" target="_blank" rel="noopener" data-v-cb1834f4>VBEX-DOT.NET</a></code><br data-v-cb1834f4><h1 class="about-2ndhead" data-v-cb1834f4>👨‍💻 Support My Actions by</h1><br data-v-cb1834f4><code data-v-cb1834f4> * Sending Inspirational Messages 💌</code><br data-v-cb1834f4><code data-v-cb1834f4> * Liking or Following My Pages:<br data-v-cb1834f4></code><code data-v-cb1834f4> - YT <a href="https://www.youtube.com/channel/UCP2psTOak3Z60eQj1wq--cg" target="_blank" rel="noopener" data-v-cb1834f4>@kimlorenzo143</a></code><br data-v-cb1834f4><code data-v-cb1834f4> - FB <a href="https://www.facebook.com/kimITservices" target="_blank" rel="noopener" data-v-cb1834f4>kimITservices</a></code><br data-v-cb1834f4><code data-v-cb1834f4> * <a href="https://www.buymeacoffee.com/kimdevprc" target="_blank" title="artdev-hash" data-v-cb1834f4>BuyMeaCoffee ☕</a></code><br data-v-cb1834f4><code data-v-cb1834f4> ** THANK YOU FOR YOUR SUPPORT ❤️ **</code><br data-v-cb1834f4><br data-v-cb1834f4></div>',3),pa=F({__name:"Projie",setup(e){return(n,r)=>ba}}),ga=H(pa,[["__scopeId","data-v-cb1834f4"]]),_a={...be,Layout:ua,enhanceApp(e){be.enhanceApp(e);const{app:n}=e;n.component("Archives",lt),n.component("Tags",Dt),n.component("Dev",va),n.component("Work",ga)}};function Te(e){if(e.extends){const n=Te(e.extends);return{...n,...e,async enhanceApp(r){n.enhanceApp&&await n.enhanceApp(r),e.enhanceApp&&await e.enhanceApp(r)}}}return e}const q=Te(_a),ma=F({name:"VitePressApp",setup(){const{site:e}=X();return Ue(()=>{We(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),e.value.router.prefetchLinks&&Ge(),Ke(),Je(),q.setup&&q.setup(),()=>Ze(q.Layout)}});async function $a(){const e=ya(),n=wa();n.provide(Ee,e);const r=Re(e.route);return n.provide(Ne,r),n.component("Content",ze),n.component("ClientOnly",Fe),Object.defineProperties(n.config.globalProperties,{$frontmatter:{get(){return r.frontmatter.value}},$params:{get(){return r.page.value.params}}}),q.enhanceApp&&await q.enhanceApp({app:n,router:e,siteData:He}),{app:n,router:e,data:r}}function wa(){return je(ma)}function ya(){let e=ve,n;return Be(r=>{let c=Ve(r),f=null;return c&&(e&&(n=c),(e||n===c)&&(c=c.replace(/\.js$/,".lean.js")),f=Ye(()=>import(c),__vite__mapDeps([]))),ve&&(e=!1),f},q.NotFound)}ve&&$a().then(({app:e,router:n,data:r})=>{n.go().then(()=>{Le(n.route,r.site),e.mount("#app")})});export{$a as createApp};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}