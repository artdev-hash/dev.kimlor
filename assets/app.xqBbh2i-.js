import{d as H,u as X,g as we,o as m,c as $,F,E as K,k as v,t as I,m as R,f as pe,a as Q,p as ne,q as oe,_ as j,h as ue,a4 as Ae,a5 as Oe,n as _e,O as Ce,G as xe,H as Ie,e as he,D as Pe,I as G,w as le,R as ye,v as ve,a6 as Le,a7 as Ee,a8 as Re,a9 as Ne,aa as Fe,ab as He,ac as je,ad as ze,ae as Be,af as Ve,Y as Ye,j as Ue,z as We,ag as Ge,ah as Ke,ai as Je,aj as Ze}from"./chunks/framework.JK8Xa7st.js";import{t as be}from"./chunks/theme.saLlxc7G.js";function qe(e){const n={};for(let s=0;s<e.length;s++){const c=e[s],f=c.frontMatter.tags;Array.isArray(f)&&f.forEach(u=>{n[u]||(n[u]=[]),n[u].push(c)})}return n}function Qe(e){const n=[];let s="0",c=-1;for(let f=0;f<e.length;f++){const u=e[f];if(u.frontMatter.date){const b=u.frontMatter.date.split("-")[0];b===s?n[c].push(u):(c++,n[c]=[],n[c].push(u),s=b)}}return n}function Xe(e){return[...document.querySelectorAll(".VPDoc h2,h3,h4,h5,h6")].filter(s=>s.id&&s.hasChildNodes()).map(s=>{const c=Number(s.tagName[1]);return{title:et(s),link:"#"+s.id,level:c}})}function et(e){let n="";for(const s of e.childNodes)if(s.nodeType===1){if(s.classList.contains("VPBadge")||s.classList.contains("header-anchor"))continue;n+=s.textContent}else s.nodeType===3&&(n+=s.textContent);return n.trim()}const tt=e=>(ne("data-v-69b61450"),e=e(),oe(),e),at={class:"main"},rt={class:"yearItem"},st={class:"year"},nt=["href"],ot={class:"title"},ct=tt(()=>v("div",{class:"title-o"},null,-1)),it={class:"date"},dt=H({__name:"Archives",setup(e){const{theme:n}=X(),s=we(()=>Qe(n.value.posts));return(c,f)=>(m(),$("div",at,[(m(!0),$(F,null,K(s.value,u=>(m(),$("div",rt,[v("div",st,I(u[0].frontMatter.date.split("-")[0]),1),(m(!0),$(F,null,K(u,(b,_)=>(m(),$("a",{href:R(pe)(b.regularPath),key:_,class:"article"},[v("div",ot,[ct,Q(" "+I(b.frontMatter.title),1)]),v("div",it,I(b.frontMatter.date.slice(5)),1)],8,nt))),128))]))),256))]))}}),lt=j(dt,[["__scopeId","data-v-69b61450"]]),ge=e=>(ne("data-v-6b5bf8a1"),e=e(),oe(),e),ut={class:"main"},ht=ge(()=>v("h1",{class:"tags-header"},"Tags",-1)),ft={class:"tags"},vt=["onClick"],bt={class:"tag-length"},pt={class:"header"},_t={t:"1641783753540",class:"fas-icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"1254",style:{width:"20px"}},gt=ge(()=>v("path",{d:"M995.126867 592.38l-360.08 360.08a53.333333 53.333333 0 0 1-71.333334 3.68l356.22-356.22a64 64 0 0 0 0-90.506667L495.8402 85.333333h45.573333a52.986667 52.986667 0 0 1 37.713334 15.62l416 416a53.4 53.4 0 0 1 0 75.426667z m-128 0l-360.08 360.08a53.333333 53.333333 0 0 1-75.426667 0l-416-416A52.986667 52.986667 0 0 1 0.0002 498.746667V138.666667a53.393333 53.393333 0 0 1 53.333333-53.333334h360.08a52.986667 52.986667 0 0 1 37.713334 15.62l416 416a53.4 53.4 0 0 1 0 75.426667zM341.333533 341.333333a85.333333 85.333333 0 1 0-85.333333 85.333334 85.426667 85.426667 0 0 0 85.333333-85.333334z",fill:"var(--vp-c-brand)","p-id":"1255"},null,-1)),mt=[gt],$t={class:"header-text"},wt=["href"],yt={class:"title"},Mt=ge(()=>v("div",{class:"title-o"},null,-1)),kt={class:"date"},St=H({__name:"Tags",setup(e){const{theme:n}=X(),s=we(()=>qe(n.value.posts));let c=ue("");const f=b=>{c.value=b},u=b=>({fontSize:`${b*.04+.85}em`});return(b,_)=>(m(),$("div",ut,[ht,v("div",ft,[(m(!0),$(F,null,K(s.value,(S,h)=>(m(),$("span",{onClick:O=>f(h),class:_e(["tag",{activetag:R(c)===h}]),style:Ce(u(s.value[h].length))},[Q(I(h)+" ",1),v("span",bt,I(s.value[h].length),1)],14,vt))),256))]),Ae(v("h4",pt,[(m(),$("svg",_t,mt)),v("span",$t,I(R(c)),1)],512),[[Oe,R(c)]]),(m(!0),$(F,null,K(s.value[R(c)],(S,h)=>(m(),$("a",{href:R(pe)(S.regularPath),key:h,class:"article"},[v("div",yt,[Mt,Q(" "+I(S.frontMatter.title),1)]),v("div",kt,I(S.frontMatter.date),1)],8,wt))),128))]))}}),Dt=j(St,[["__scopeId","data-v-6b5bf8a1"]]),Tt={},At={src:"https://readme-typing-svg.demolab.com?font=Fira+Code&pause=1000&color=009F01&center=true&random=false&width=435&lines=github.com%2Fartdev-hash;facebook.com%2FkimITservices;YT%3A+%40kimlorenzo143",alt:"Typing SVG",class:"center"};function Ot(e,n){return m(),$("img",At)}const Ct=j(Tt,[["render",Ot],["__scopeId","data-v-8302d363"]]),xt=e=>(ne("data-v-5a21af5e"),e=e(),oe(),e),It=xt(()=>v("a",{href:"https://www.buymeacoffee.com/kimdevprc",target:"_blank",title:"artdev-hash"},"artdev-hash",-1)),Pt=H({__name:"CopyWright",setup(e){const n=new Date().getFullYear();return(s,c)=>(m(),$("footer",null,[Q(" Powered by "),It,Q(" | Copyright © 2022-"+I(R(n))+" | MIT License ",1)]))}}),Lt=j(Pt,[["__scopeId","data-v-5a21af5e"]]),me=e=>(ne("data-v-41415402"),e=e(),oe(),e),Et=me(()=>v("h1",{class:"blog-title"},"Feed Post",-1)),Rt={class:"blogList"},Nt=["href"],Ft={class:"title"},Ht={class:"date"},jt={class:"pagination"},zt=["onClick"],Bt=me(()=>v("br",null,null,-1)),Vt=me(()=>v("br",null,null,-1)),Yt=H({__name:"Page",setup(e){const{theme:n}=X();let s=n.value.posts||[],c=n.value.postLength,f=n.value.pageSize,u=c%f===0?c/f:c/f+1;u=parseInt(u.toString());let b=ue(1);s=s.filter(y=>y.regularPath.indexOf("index")<0);let _={};for(let y=0;y<u;y++)_[y]=[];let S=0;for(let y=0;y<s.length;y++)_[S].length>f-1&&(S+=1),_[S].push(s[y]);let h=ue([]);h.value=_[b.value-1];const O=y=>{b.value=y,h.value=_[b.value-1]},D=y=>{const C=y.split("-");let M=C[0],w="",B=C[2];switch(C[1]){case"1":case"01":w="Jan";break;case"2":case"02":w="Feb";break;case"3":case"03":w="Mar";break;case"4":case"04":w="Apr";break;case"5":case"05":w="May";break;case"6":case"06":w="Jun";break;case"7":case"07":w="Jul";break;case"8":case"08":w="Aug";break;case"9":case"09":w="Sep";break;case"10":w="Oct";break;case"11":w="Nov";break;case"12":w="Dec";break;default:w="Month"}return`${w} ${B}, ${M}`};return(y,C)=>(m(),$(F,null,[Et,v("div",Rt,[(m(!0),$(F,null,K(R(h),M=>(m(),$("a",{class:"blog",href:R(pe)(M.regularPath)},[v("div",Ft,I(M.frontMatter.title),1),v("div",Ht,I(D(M.frontMatter.date)),1)],8,Nt))),256))]),v("div",jt,[(m(!0),$(F,null,K(R(u),M=>(m(),$("div",{class:_e(["link",{activeLink:R(b)===M}]),key:M,onClick:w=>O(M)},I(M),11,zt))),128))]),Bt,Vt],64))}}),Ut=j(Yt,[["__scopeId","data-v-41415402"]]),Wt={key:0,class:"category"},Gt={class:"list"},Kt={class:"header"},Jt=["href"],Zt={key:1},qt={class:"header"},Qt=["href"],Xt=H({__name:"Category",setup(e){const{frontmatter:n,theme:s}=X(),c=xe([]),f=ue(!1);return Ie(()=>{c.value=Xe(n.value.outline??s.value.outline),f.value=c.value.some(u=>u.level===2)}),(u,b)=>c.value.length>0?(m(),$("div",Wt,[v("ul",Gt,[(m(!0),$(F,null,K(c.value,_=>(m(),$("li",Kt,[_.level===2?(m(),$("a",{key:0,href:_.link,class:"header-h2"},I(_.title),9,Jt)):he("",!0),_.level===3?(m(),$("ul",Zt,[v("li",qt,[v("a",{href:_.link,class:_e(["header-h3",{showIndent:f.value}])},I(_.title),11,Qt)])])):he("",!0)]))),256))])])):he("",!0)}}),ea=j(Xt,[["__scopeId","data-v-9d1e4980"]]);var Me=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ke(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Se={exports:{}};(function(e,n){(function(s,c){e.exports=c()})(Me,function(){var s=1e3,c=6e4,f=36e5,u="millisecond",b="second",_="minute",S="hour",h="day",O="week",D="month",y="quarter",C="year",M="date",w="Invalid Date",B=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,ee=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,te={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(i){var r=["th","st","nd","rd"],t=i%100;return"["+i+(r[(t-20)%10]||r[t]||r[0])+"]"}},ae=function(i,r,t){var o=String(i);return!o||o.length>=r?i:""+Array(r+1-o.length).join(t)+i},V={s:ae,z:function(i){var r=-i.utcOffset(),t=Math.abs(r),o=Math.floor(t/60),a=t%60;return(r<=0?"+":"-")+ae(o,2,"0")+":"+ae(a,2,"0")},m:function i(r,t){if(r.date()<t.date())return-i(t,r);var o=12*(t.year()-r.year())+(t.month()-r.month()),a=r.clone().add(o,D),d=t-a<0,l=r.clone().add(o+(d?-1:1),D);return+(-(o+(t-a)/(d?a-l:l-a))||0)},a:function(i){return i<0?Math.ceil(i)||0:Math.floor(i)},p:function(i){return{M:D,y:C,w:O,d:h,D:M,h:S,m:_,s:b,ms:u,Q:y}[i]||String(i||"").toLowerCase().replace(/s$/,"")},u:function(i){return i===void 0}},P="en",L={};L[P]=te;var J="$isDayjsObject",Y=function(i){return i instanceof ie||!(!i||!i[J])},ce=function i(r,t,o){var a;if(!r)return P;if(typeof r=="string"){var d=r.toLowerCase();L[d]&&(a=d),t&&(L[d]=t,a=d);var l=r.split("-");if(!a&&l.length>1)return i(l[0])}else{var g=r.name;L[g]=r,a=g}return!o&&a&&(P=a),a||!o&&P},T=function(i,r){if(Y(i))return i.clone();var t=typeof r=="object"?r:{};return t.date=i,t.args=arguments,new ie(t)},p=V;p.l=ce,p.i=Y,p.w=function(i,r){return T(i,{locale:r.$L,utc:r.$u,x:r.$x,$offset:r.$offset})};var ie=function(){function i(t){this.$L=ce(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[J]=!0}var r=i.prototype;return r.parse=function(t){this.$d=function(o){var a=o.date,d=o.utc;if(a===null)return new Date(NaN);if(p.u(a))return new Date;if(a instanceof Date)return new Date(a);if(typeof a=="string"&&!/Z$/i.test(a)){var l=a.match(B);if(l){var g=l[2]-1||0,k=(l[7]||"0").substring(0,3);return d?new Date(Date.UTC(l[1],g,l[3]||1,l[4]||0,l[5]||0,l[6]||0,k)):new Date(l[1],g,l[3]||1,l[4]||0,l[5]||0,l[6]||0,k)}}return new Date(a)}(t),this.init()},r.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},r.$utils=function(){return p},r.isValid=function(){return this.$d.toString()!==w},r.isSame=function(t,o){var a=T(t);return this.startOf(o)<=a&&a<=this.endOf(o)},r.isAfter=function(t,o){return T(t)<this.startOf(o)},r.isBefore=function(t,o){return this.endOf(o)<T(t)},r.$g=function(t,o,a){return p.u(t)?this[o]:this.set(a,t)},r.unix=function(){return Math.floor(this.valueOf()/1e3)},r.valueOf=function(){return this.$d.getTime()},r.startOf=function(t,o){var a=this,d=!!p.u(o)||o,l=p.p(t),g=function(W,E){var z=p.w(a.$u?Date.UTC(a.$y,E,W):new Date(a.$y,E,W),a);return d?z:z.endOf(h)},k=function(W,E){return p.w(a.toDate()[W].apply(a.toDate("s"),(d?[0,0,0,0]:[23,59,59,999]).slice(E)),a)},A=this.$W,x=this.$M,N=this.$D,Z="set"+(this.$u?"UTC":"");switch(l){case C:return d?g(1,0):g(31,11);case D:return d?g(1,x):g(0,x+1);case O:var U=this.$locale().weekStart||0,re=(A<U?A+7:A)-U;return g(d?N-re:N+(6-re),x);case h:case M:return k(Z+"Hours",0);case S:return k(Z+"Minutes",1);case _:return k(Z+"Seconds",2);case b:return k(Z+"Milliseconds",3);default:return this.clone()}},r.endOf=function(t){return this.startOf(t,!1)},r.$set=function(t,o){var a,d=p.p(t),l="set"+(this.$u?"UTC":""),g=(a={},a[h]=l+"Date",a[M]=l+"Date",a[D]=l+"Month",a[C]=l+"FullYear",a[S]=l+"Hours",a[_]=l+"Minutes",a[b]=l+"Seconds",a[u]=l+"Milliseconds",a)[d],k=d===h?this.$D+(o-this.$W):o;if(d===D||d===C){var A=this.clone().set(M,1);A.$d[g](k),A.init(),this.$d=A.set(M,Math.min(this.$D,A.daysInMonth())).$d}else g&&this.$d[g](k);return this.init(),this},r.set=function(t,o){return this.clone().$set(t,o)},r.get=function(t){return this[p.p(t)]()},r.add=function(t,o){var a,d=this;t=Number(t);var l=p.p(o),g=function(x){var N=T(d);return p.w(N.date(N.date()+Math.round(x*t)),d)};if(l===D)return this.set(D,this.$M+t);if(l===C)return this.set(C,this.$y+t);if(l===h)return g(1);if(l===O)return g(7);var k=(a={},a[_]=c,a[S]=f,a[b]=s,a)[l]||1,A=this.$d.getTime()+t*k;return p.w(A,this)},r.subtract=function(t,o){return this.add(-1*t,o)},r.format=function(t){var o=this,a=this.$locale();if(!this.isValid())return a.invalidDate||w;var d=t||"YYYY-MM-DDTHH:mm:ssZ",l=p.z(this),g=this.$H,k=this.$m,A=this.$M,x=a.weekdays,N=a.months,Z=a.meridiem,U=function(E,z,se,de){return E&&(E[z]||E(o,d))||se[z].slice(0,de)},re=function(E){return p.s(g%12||12,E,"0")},W=Z||function(E,z,se){var de=E<12?"AM":"PM";return se?de.toLowerCase():de};return d.replace(ee,function(E,z){return z||function(se){switch(se){case"YY":return String(o.$y).slice(-2);case"YYYY":return p.s(o.$y,4,"0");case"M":return A+1;case"MM":return p.s(A+1,2,"0");case"MMM":return U(a.monthsShort,A,N,3);case"MMMM":return U(N,A);case"D":return o.$D;case"DD":return p.s(o.$D,2,"0");case"d":return String(o.$W);case"dd":return U(a.weekdaysMin,o.$W,x,2);case"ddd":return U(a.weekdaysShort,o.$W,x,3);case"dddd":return x[o.$W];case"H":return String(g);case"HH":return p.s(g,2,"0");case"h":return re(1);case"hh":return re(2);case"a":return W(g,k,!0);case"A":return W(g,k,!1);case"m":return String(k);case"mm":return p.s(k,2,"0");case"s":return String(o.$s);case"ss":return p.s(o.$s,2,"0");case"SSS":return p.s(o.$ms,3,"0");case"Z":return l}return null}(E)||l.replace(":","")})},r.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},r.diff=function(t,o,a){var d,l=this,g=p.p(o),k=T(t),A=(k.utcOffset()-this.utcOffset())*c,x=this-k,N=function(){return p.m(l,k)};switch(g){case C:d=N()/12;break;case D:d=N();break;case y:d=N()/3;break;case O:d=(x-A)/6048e5;break;case h:d=(x-A)/864e5;break;case S:d=x/f;break;case _:d=x/c;break;case b:d=x/s;break;default:d=x}return a?d:p.a(d)},r.daysInMonth=function(){return this.endOf(D).$D},r.$locale=function(){return L[this.$L]},r.locale=function(t,o){if(!t)return this.$L;var a=this.clone(),d=ce(t,o,!0);return d&&(a.$L=d),a},r.clone=function(){return p.w(this.$d,this)},r.toDate=function(){return new Date(this.valueOf())},r.toJSON=function(){return this.isValid()?this.toISOString():null},r.toISOString=function(){return this.$d.toISOString()},r.toString=function(){return this.$d.toUTCString()},i}(),$e=ie.prototype;return T.prototype=$e,[["$ms",u],["$s",b],["$m",_],["$H",S],["$W",h],["$M",D],["$y",C],["$D",M]].forEach(function(i){$e[i[1]]=function(r){return this.$g(r,i[0],i[1])}}),T.extend=function(i,r){return i.$i||(i(r,ie,T),i.$i=!0),T},T.locale=ce,T.isDayjs=Y,T.unix=function(i){return T(1e3*i)},T.en=L[P],T.Ls=L,T.p={},T})})(Se);var ta=Se.exports;const fe=ke(ta);var De={exports:{}};(function(e,n){(function(s,c){e.exports=c()})(Me,function(){return function(s,c,f){s=s||{};var u=c.prototype,b={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function _(h,O,D,y){return u.fromToBase(h,O,D,y)}f.en.relativeTime=b,u.fromToBase=function(h,O,D,y,C){for(var M,w,B,ee=D.$locale().relativeTime||b,te=s.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],ae=te.length,V=0;V<ae;V+=1){var P=te[V];P.d&&(M=y?f(h).diff(D,P.d,!0):D.diff(h,P.d,!0));var L=(s.rounding||Math.round)(Math.abs(M));if(B=M>0,L<=P.r||!P.r){L<=1&&V>0&&(P=te[V-1]);var J=ee[P.l];C&&(L=C(""+L)),w=typeof J=="string"?J.replace("%d",L):J(L,O,P.l,B);break}}if(O)return w;var Y=B?ee.future:ee.past;return typeof Y=="function"?Y(w):Y.replace("%s",w)},u.to=function(h,O){return _(h,O,this,!0)},u.from=function(h,O){return _(h,O,this)};var S=function(h){return h.$u?f.utc():f()};u.toNow=function(h){return this.to(S(this),h)},u.fromNow=function(h){return this.from(S(this),h)}}})})(De);var aa=De.exports;const ra=ke(aa),sa={class:"title"},na={class:"date"},oa=H({__name:"Title",setup(e){const n=X().page.value,{title:s,description:c,lastUpdated:f,frontmatter:u}=n;fe.extend(ra);const b=fe().to(fe(u.date||Date.now()));return(_,S)=>(m(),$(F,null,[v("h1",sa,I(R(s)),1),v("div",na,"🕒 Published at: "+I(R(b)),1)],64))}}),ca=j(oa,[["__scopeId","data-v-cec0b25f"]]),ia=e=>(ne("data-v-57ae03b7"),e=e(),oe(),e),da=ia(()=>v("svg",{xmlns:"http://www.w3.org/2000/svg",display:"block",width:"30",height:"30",fill:"var(--vp-c-green-2)",class:"bi bi-arrow-return-left",viewBox:"0 0 16 16"},[v("path",{"fill-rule":"evenodd",d:"M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5"})],-1)),la=H({__name:"MyLayout",setup(e){const{Layout:n}=be,s=()=>{history.back()};return(c,f)=>{const u=Pe("Comments");return m(),$(F,null,[G(R(n),null,{"doc-before":le(()=>[G(ca),G(ea)]),"doc-after":le(()=>[v("div",null,[v("button",{onClick:s},[Q("BACK..."),da])]),G(u)]),"home-hero-before":le(()=>[G(Ct)]),"home-features-after":le(()=>[G(Ut)]),_:1}),G(Lt)],64)}}}),ua=j(la,[["__scopeId","data-v-57ae03b7"]]),ha=ye('<br data-v-27bd49fe><br data-v-27bd49fe><div class="main" data-v-27bd49fe><h1 class="about-header" data-v-27bd49fe>👨‍💻 About Me</h1><br data-v-27bd49fe><code data-v-27bd49fe><b data-v-27bd49fe>I&#39;m an IT Specialist / Developer </b></code><br data-v-27bd49fe><code data-v-27bd49fe><b data-v-27bd49fe>A Computer Science Graduate</b></code><br data-v-27bd49fe><code data-v-27bd49fe><b data-v-27bd49fe>Freelance, IT CS related works at the moment</b></code><br data-v-27bd49fe><code data-v-27bd49fe><b data-v-27bd49fe>Very Open for Permanent Job Position, Projects, Assignments and Layout</b></code><br data-v-27bd49fe><code data-v-27bd49fe><b data-v-27bd49fe>Passionate to Learn new skills and knowledges</b></code><br data-v-27bd49fe><div class="typewriter-effect" data-v-27bd49fe><div class="text" id="typewriter-text" data-v-27bd49fe></div><code data-v-27bd49fe><b data-v-27bd49fe>A Trustworthy person</b></code></div><br data-v-27bd49fe><code data-v-27bd49fe><b data-v-27bd49fe>ENV :</b></code><div class="container" data-v-27bd49fe><div class="image" data-v-27bd49fe><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40" data-v-27bd49fe></div><div class="image" data-v-27bd49fe><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40" data-v-27bd49fe></div><div class="image" data-v-27bd49fe><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40" data-v-27bd49fe></div><div class="image" data-v-27bd49fe><img src="https://www.vectorlogo.zone/logos/vuejs/vuejs-icon.svg" alt="vue js" width="40" height="40" data-v-27bd49fe></div><div class="image" data-v-27bd49fe><img src="https://www.vectorlogo.zone/logos/dartlang/dartlang-icon.svg" alt="dart" width="40" height="40" data-v-27bd49fe></div><div class="image" data-v-27bd49fe><img src="https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg" alt="flutter" width="40" height="40" data-v-27bd49fe></div><div class="image" data-v-27bd49fe><img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="firebase" width="40" height="40" data-v-27bd49fe></div><div class="image" data-v-27bd49fe><img src="https://raw.githubusercontent.com/artdev-hash/devicon/master/icons/appwrite/appwrite-original.svg" alt="appwrite" width="40" height="40" data-v-27bd49fe></div><div class="image" data-v-27bd49fe><img src="https://www.vectorlogo.zone/logos/cloudflare/cloudflare-icon.svg" alt="cloudflare" width="40" height="40" data-v-27bd49fe></div><div class="image" data-v-27bd49fe><img src="https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg" alt="typescript" width="40" height="40" data-v-27bd49fe></div></div><br data-v-27bd49fe><br data-v-27bd49fe><br data-v-27bd49fe><br data-v-27bd49fe></div>',3),fa=H({__name:"Dev",setup(e){return(n,s)=>ha}}),va=j(fa,[["__scopeId","data-v-27bd49fe"]]),ba=ye('<br data-v-cb1834f4><br data-v-cb1834f4><div class="main" data-v-cb1834f4><h1 class="about-header" data-v-cb1834f4>🚀 Open Source / Projects</h1><br data-v-cb1834f4><code data-v-cb1834f4>Recent 💡 &gt;&gt;</code><br data-v-cb1834f4><div class="typewriter-effect" data-v-cb1834f4><div class="text" id="typewriter-text" data-v-cb1834f4></div><code data-v-cb1834f4>- <a href="https://m-k-products.github.io/store/" target="_blank" rel="noopener" data-v-cb1834f4>M.K PRODUCTS</a></code></div><code data-v-cb1834f4>- <a href="https://artdev-hash.github.io/english-tagalog-vocab/" target="_blank" rel="noopener" data-v-cb1834f4>ENGLISH TAGALOG VOCAB</a></code><br data-v-cb1834f4><code data-v-cb1834f4>- <a href="https://artdev-hash.github.io/pc-upgrade-and-repair/" target="_blank" rel="noopener" data-v-cb1834f4>PC UPGRADE AND REPAIR</a></code><br data-v-cb1834f4><code data-v-cb1834f4>- Participation in HACKTOBER 23</code><br data-v-cb1834f4><code data-v-cb1834f4>- <a href="https://artdev-hash.github.io/bicol_translate/" target="_blank" rel="noopener" data-v-cb1834f4>BICOL TRANSLATE</a></code><br data-v-cb1834f4><code data-v-cb1834f4>- <a href="https://artdev-hash.github.io/octo-feedboard/" target="_blank" rel="noopener" data-v-cb1834f4>OCTO-FEEDBOARD</a></code><br data-v-cb1834f4><code data-v-cb1834f4>- <a href="https://lorenzokimarthur.com" target="_blank" rel="noopener" data-v-cb1834f4>LORENZOKIMARTHUR.COM</a></code><br data-v-cb1834f4><code data-v-cb1834f4>- Participation in HACKTOBER 22</code><br data-v-cb1834f4><code data-v-cb1834f4>- <a href="https://artdev-hash.github.io/biz-kal/" target="_blank" rel="noopener" data-v-cb1834f4>BIZ-KAL</a></code><br data-v-cb1834f4><code data-v-cb1834f4>- <a href="https://devs.flutter.ph/" target="_blank" rel="noopener" data-v-cb1834f4>FLUTTER DEVS</a></code> <br data-v-cb1834f4><code data-v-cb1834f4>- <a href="https://artdev-hash.github.io/snamegenerator/" target="_blank" rel="noopener" data-v-cb1834f4>SNAMEGENERATOR</a></code><br data-v-cb1834f4><code data-v-cb1834f4>- Participation in 30 Days Flutter 21</code><br data-v-cb1834f4><code data-v-cb1834f4>- <a href="https://artdev-hash.github.io/krprt-octo-uploader/" target="_blank" rel="noopener" data-v-cb1834f4>KRPRT-OCTO-UPLOADER</a></code><br data-v-cb1834f4><code data-v-cb1834f4>- <a href="https://artdev-hash.github.io/kshared-nocto-copier/" target="_blank" rel="noopener" data-v-cb1834f4>KSHARED-NOCTO-COPIER</a></code><br data-v-cb1834f4><code data-v-cb1834f4>- PLANBANK website</code><br data-v-cb1834f4><code data-v-cb1834f4>- IAMTHECOFFEEGUY</code><br data-v-cb1834f4><code data-v-cb1834f4>- CQMS - Customer Queuing Management System</code><br data-v-cb1834f4><code data-v-cb1834f4>- LMS - Library Management System</code><br data-v-cb1834f4><code data-v-cb1834f4>- <a href="https://artdev-hash.github.io/vbex-dotnet/" target="_blank" rel="noopener" data-v-cb1834f4>VBEX-DOT.NET</a></code><br data-v-cb1834f4><h1 class="about-2ndhead" data-v-cb1834f4>👨‍💻 Support My Actions by</h1><br data-v-cb1834f4><code data-v-cb1834f4> * Sending Inspirational Messages 💌</code><br data-v-cb1834f4><code data-v-cb1834f4> * Liking or Following My Pages:<br data-v-cb1834f4></code><code data-v-cb1834f4> - YT <a href="https://www.youtube.com/channel/UCP2psTOak3Z60eQj1wq--cg" target="_blank" rel="noopener" data-v-cb1834f4>@kimlorenzo143</a></code><br data-v-cb1834f4><code data-v-cb1834f4> - FB <a href="https://www.facebook.com/kimITservices" target="_blank" rel="noopener" data-v-cb1834f4>kimITservices</a></code><br data-v-cb1834f4><code data-v-cb1834f4> * <a href="https://www.buymeacoffee.com/kimdevprc" target="_blank" title="artdev-hash" data-v-cb1834f4>BuyMeaCoffee ☕</a></code><br data-v-cb1834f4><code data-v-cb1834f4> ** THANK YOU FOR YOUR SUPPORT ❤️ **</code><br data-v-cb1834f4><br data-v-cb1834f4></div>',3),pa=H({__name:"Projie",setup(e){return(n,s)=>ba}}),_a=j(pa,[["__scopeId","data-v-cb1834f4"]]),ga={...be,Layout:ua,enhanceApp(e){be.enhanceApp(e);const{app:n}=e;n.component("Archives",lt),n.component("Tags",Dt),n.component("Dev",va),n.component("Work",_a)}};function Te(e){if(e.extends){const n=Te(e.extends);return{...n,...e,async enhanceApp(s){n.enhanceApp&&await n.enhanceApp(s),e.enhanceApp&&await e.enhanceApp(s)}}}return e}const q=Te(ga),ma=H({name:"VitePressApp",setup(){const{site:e}=X();return Ue(()=>{We(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),e.value.router.prefetchLinks&&Ge(),Ke(),Je(),q.setup&&q.setup(),()=>Ze(q.Layout)}});async function $a(){const e=ya(),n=wa();n.provide(Ee,e);const s=Re(e.route);return n.provide(Ne,s),n.component("Content",Fe),n.component("ClientOnly",He),Object.defineProperties(n.config.globalProperties,{$frontmatter:{get(){return s.frontmatter.value}},$params:{get(){return s.page.value.params}}}),q.enhanceApp&&await q.enhanceApp({app:n,router:e,siteData:je}),{app:n,router:e,data:s}}function wa(){return ze(ma)}function ya(){let e=ve,n;return Be(s=>{let c=Ve(s),f=null;return c&&(e&&(n=c),(e||n===c)&&(c=c.replace(/\.js$/,".lean.js")),f=Ye(()=>import(c),__vite__mapDeps([]))),ve&&(e=!1),f},q.NotFound)}ve&&$a().then(({app:e,router:n,data:s})=>{n.go().then(()=>{Le(n.route,s.site),e.mount("#app")})});export{$a as createApp};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}