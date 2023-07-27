var Y=Object.defineProperty;var W=(e,t,o)=>t in e?Y(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;var O=(e,t,o)=>(W(e,typeof t!="symbol"?t+"":t,o),o);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function o(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(n){if(n.ep)return;n.ep=!0;const s=o(n);fetch(n.href,s)}})();function _(){}function J(e){return e()}function D(){return Object.create(null)}function P(e){e.forEach(J)}function K(e){return typeof e=="function"}function Q(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function X(e){return Object.keys(e).length===0}function Z(e,...t){if(e==null){for(const a of t)a(void 0);return _}const o=e.subscribe(...t);return o.unsubscribe?()=>o.unsubscribe():o}function ee(e,t,o){e.$$.on_destroy.push(Z(t,o))}function p(e,t){e.appendChild(t)}function z(e,t,o){e.insertBefore(t,o||null)}function j(e){e.parentNode&&e.parentNode.removeChild(e)}function b(e){return document.createElement(e)}function q(e){return document.createTextNode(e)}function M(){return q(" ")}function te(e,t,o,a){return e.addEventListener(t,o,a),()=>e.removeEventListener(t,o,a)}function y(e,t,o){o==null?e.removeAttribute(t):e.getAttribute(t)!==o&&e.setAttribute(t,o)}function oe(e){return Array.from(e.childNodes)}function L(e,t){t=""+t,e.data!==t&&(e.data=t)}let T;function A(e){T=e}const C=[],H=[];let E=[];const R=[],ae=Promise.resolve();let I=!1;function se(){I||(I=!0,ae.then(V))}function B(e){E.push(e)}const S=new Set;let w=0;function V(){if(w!==0)return;const e=T;do{try{for(;w<C.length;){const t=C[w];w++,A(t),ne(t.$$)}}catch(t){throw C.length=0,w=0,t}for(A(null),C.length=0,w=0;H.length;)H.pop()();for(let t=0;t<E.length;t+=1){const o=E[t];S.has(o)||(S.add(o),o())}E.length=0}while(C.length);for(;R.length;)R.pop()();I=!1,S.clear(),A(e)}function ne(e){if(e.fragment!==null){e.update(),P(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(B)}}function ie(e){const t=[],o=[];E.forEach(a=>e.indexOf(a)===-1?t.push(a):o.push(a)),o.forEach(a=>a()),E=t}const re=new Set;function le(e,t){e&&e.i&&(re.delete(e),e.i(t))}function ce(e,t,o){const{fragment:a,after_update:n}=e.$$;a&&a.m(t,o),B(()=>{const s=e.$$.on_mount.map(J).filter(K);e.$$.on_destroy?e.$$.on_destroy.push(...s):P(s),e.$$.on_mount=[]}),n.forEach(B)}function ue(e,t){const o=e.$$;o.fragment!==null&&(ie(o.after_update),P(o.on_destroy),o.fragment&&o.fragment.d(t),o.on_destroy=o.fragment=null,o.ctx=[])}function de(e,t){e.$$.dirty[0]===-1&&(C.push(e),se(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function me(e,t,o,a,n,s,d,r=[-1]){const l=T;A(e);const i=e.$$={fragment:null,ctx:[],props:s,update:_,not_equal:n,bound:D(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(l?l.$$.context:[])),callbacks:D(),dirty:r,skip_bound:!1,root:t.target||l.$$.root};d&&d(i.root);let f=!1;if(i.ctx=o?o(e,t.props||{},(c,g,...m)=>{const u=m.length?m[0]:g;return i.ctx&&n(i.ctx[c],i.ctx[c]=u)&&(!i.skip_bound&&i.bound[c]&&i.bound[c](u),f&&de(e,c)),g}):[],i.update(),f=!0,P(i.before_update),i.fragment=a?a(i.ctx):!1,t.target){if(t.hydrate){const c=oe(t.target);i.fragment&&i.fragment.l(c),c.forEach(j)}else i.fragment&&i.fragment.c();t.intro&&le(e.$$.fragment),ce(e,t.target,t.anchor),V()}A(l)}class pe{constructor(){O(this,"$$");O(this,"$$set")}$destroy(){ue(this,1),this.$destroy=_}$on(t,o){if(!K(o))return _;const a=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return a.push(o),()=>{const n=a.indexOf(o);n!==-1&&a.splice(n,1)}}$set(t){this.$$set&&!X(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const fe="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(fe);const $=[];function he(e,t=_){let o;const a=new Set;function n(r){if(Q(e,r)&&(e=r,o)){const l=!$.length;for(const i of a)i[1](),$.push(i,e);if(l){for(let i=0;i<$.length;i+=2)$[i][0]($[i+1]);$.length=0}}}function s(r){n(r(e))}function d(r,l=_){const i=[r,l];return a.add(i),a.size===1&&(o=t(n,s)||_),r(e),()=>{a.delete(i),a.size===0&&o&&(o(),o=null)}}return{set:n,update:s,subscribe:d}}const U=he(0);let N=[];N=[{id:1,title:"Mirando el piso",description:"Tu actividad favorita en nuestra temporada uno, probablemente miraste más el piso que mi cara esos primeros dias o hasta semanas cuando apenas nos conociamos, me encantaba ponerte nerviosa, y me alegro de poder seguir haciendolo cuando sonrio y me muerdo el labio <3"},{id:2,title:"Galeria",description:"Estoy escribiendo esto en 26-07-2023, este día me dijiste por instagram que debería borrar muchas de nuestras fotos de la galeria, lo chistoso es que utilizaré esas mismas fotos para recordar e inspirarme para redactar todas estos mensajes muajaja"},{id:3,title:"Elefante",description:"Elefante"},{id:4,title:"Cony Simpson",description:"¿Te acuerdas del video del homero con los barcos y tu pelo?, bueno cuando hice ese video no estabamos juntos, pero aun así me importabas tanto que me esforcé en editarlo por una cantidad considerable de tiempo para ver si te podia sacar una sonrisa "},{id:5,title:"Perrito perdido",description:"Me acordé de la vez que encontramos al mino y a su compadre el guapo, recordandolo es un momento super lindo, unimos nuestras fuerzas para ayudar a dos animalitos solitos, a pesar de que no estabamos juntos en ese momento lo recuerdo con mucho cariño, porque me dejó ver lo muy linda que eres y lo bueno que es tu corazoncito "},{id:6,title:"JIM",description:"No jim del nombre de persona, jim de como pronuncias HIMYM, me encanta como esa fue la serie unica que pude pegarte, si bien hemos visto muchas series y peliculas juntos me alegro que la que te gustó y siempre me pidas ver sea justo mi favorita, debe ser que estamos hechos el uno para el otro, como el Marshall y la Lily "},{id:7,title:"Despedida",description:"Chao te amo chao te amo cosita hermosa preciosa bonita bien hecha te amo chao te amo chao te amo divina linda cony preciosa la mejor del mundo me encantas lucesita verdecita chao te amo chao te amo..."},{id:8,title:"Haloween Boo",description:"No importa cuanto tiempo pase, siempre me voy a acordar de la vez que salimos disfrazados y a mi me reconocieron bastante y a ti re poquito jaja, la pasé muy bien contigo esa noche, disfruto mucho hacer cosas así contigo"},{id:9,title:"Caballos",description:"7 de febrero 2022, subimos el cerrito detras de tu casa en la playa y aunque aún no estabamos juntos quería pasar mucho tiempo pegado a tí, accedí a a tomarnos muchas fotos para poder estar bien cerquita, ah y ademas vimos unos cuantos caballos"},{id:10,title:"Perfil",description:"Algo que jamás me va a dejar de encantar es tu carita de perfil cuando me miras hacia atrás, no se como explicarlo, te ves tan hermosa que el resto del mundo desaparece, tu carita es una obra de arte"},{id:11,title:"Arena",description:"Lo mejor de la playa es que como solo yo llevo mi toalla grande, podemos estar acostaditos los dos bien juntitos"},{id:12,title:"Flor",description:"Siempre que vamos caminando y encuentras una flor bonita la quedas mirando corazón, yo te miro a ti, porque tu carita cuando ves algo que te gusta y te pones contenta es lo más hermoso del mundo"},{id:13,title:"Picnic playero",description:"Debo admitir que cuando estamos en la playa e insisto en bajar, no es porque me encante el mar o el sol, para mi lo más importante es estar solito contigo, y el caminar solitos al super, elegir algo rico y despues comerlo en la arenita frente al mar es el paraiso."},{id:14,title:"Amor",description:"Te amo, sin dudas y con todo mi corazón, contigo lo tengo todo y no quiero que acabe nunca"},{id:15,title:"Fotografo",description:"No me gusta tomarme muchas fotos, sin embargo, lo que si me gusta mucho es sacarte fotos a ti, me gusta sacar mil y que puedas escoger tus favoritas y me gusta como sabes editar super bien los colores en el lightroom, tienes talento para eso, te quedan muy bonitas"},{id:16,title:"Cine",description:"Como puedes inferir por el titulo, ir al cine contigo es una de mis actividades favoritas, y me pregunto si me gusta tanto porque me gusta ver peliculas contigo o porque me encanta el tiempo que pasamos antes comprando cositas y despues hablando de si nos gustó no, bueno de cualquier manera, no quiero que dejemos de ir nunca"},{id:17,title:"Adicción",description:"Tus piernas, pecho, cintura y carita. Cada parte de tu cuerpo me tiene loquito, eres ideal para mi, me tienes loquito por ti"},{id:18,title:"Masterchef",description:"Como chef de nivel mundial que soy, eres la única con el honor de probar mis preparaciones, jajaja, fuera de bromas me encanta cocinar para ti, pero me encanta más cuando cocinamos juntos, como nuestras ricas sopaipillas o el postre de galletas y tritón que hicimos un día "},{id:19,title:"Propuesta",description:"Quiero darte un besito (no importa cuando leas esto) "},{id:20,title:"Un gay volando",description:"Corazoncito, he de admitir que me has contagiado mucho de tu gusto musical, sin ti jamas hubiera tenido canciones del Harry o del Lui en mis me gustas, y ahora los escucho consistentemente, asi que sienteté orgullosa jaja "},{id:21,title:"Bromita",description:"Fideos de los chinos, sushi, hamburguesas, completos, pancitos del antoja2, pizza, yo. Asi es corazón, la única intención de este mensaje era darte hambre, pequeña broma"},{id:22,title:"Changos",description:"Perdí"},{id:23,title:"Pelo",description:"Me encantá tu pelo, siempre consigues que se te vea bonito, aún cuando recien despiertas. Cortito, larguito, ondulado o con chasquilla siempre te ha quedadó bien y siempre te huele muy bien, me encanta tenerlo en mi pechito y perdón por tirartelo todo el tiempo"},{id:24,title:"Madre canina",description:"Recuerda que tu eres la legitima madre del terry corazón, asi que hay que estar siempre juntitos con nuestra familia de perritos y futuros gatitos"},{id:25,title:"La mejor",description:"Es hermoso cuando decimos lo mismo al mismo tiempo, cuando nos movemos al unisono, que nos riamos por cosas absurdas y que tengamos nuestros propios jueguitos como el pooddle paso, me encanta tu sentido del humor y me gusta poder hacerte reir con el mio, me encanta nuestra relación y me encantas tú, eres simplemente la mejor"}];function G(e){let t,o=e[0].title+"",a,n,s,d,r=e[0].id+"",l,i,f,c=e[0].description+"",g;return{c(){t=b("h2"),a=q(o),n=M(),s=b("h3"),d=q("mensaje #"),l=q(r),i=M(),f=b("p"),g=q(c),y(t,"class","svelte-t8nwgw"),y(s,"class","svelte-t8nwgw"),y(f,"class","svelte-t8nwgw")},m(m,u){z(m,t,u),p(t,a),z(m,n,u),z(m,s,u),p(s,d),p(s,l),z(m,i,u),z(m,f,u),p(f,g)},p(m,u){u&1&&o!==(o=m[0].title+"")&&L(a,o),u&1&&r!==(r=m[0].id+"")&&L(l,r),u&1&&c!==(c=m[0].description+"")&&L(g,c)},d(m){m&&(j(t),j(n),j(s),j(i),j(f))}}}function ge(e){let t,o,a,n,s,d,r,l,i,f,c,g,m,u,k,F,h=e[0]&&G(e);return{c(){t=b("div"),o=b("header"),a=b("h1"),a.textContent="Mis mensajes de amor para ti corazón",n=M(),s=b("h3"),d=q("Actualmente "),r=q(e[1]),l=q(" mensajitos disponibles lucesita"),i=M(),f=b("main"),c=b("div"),g=b("button"),g.textContent="Nuevo mensajito",m=M(),u=b("div"),h&&h.c(),y(a,"class","svelte-t8nwgw"),y(s,"class","svelte-t8nwgw"),y(o,"class","header svelte-t8nwgw"),y(g,"class","btn svelte-t8nwgw"),y(c,"class","next"),y(u,"class","mess glass svelte-t8nwgw"),y(f,"class","messages svelte-t8nwgw"),y(t,"class","container svelte-t8nwgw")},m(v,x){z(v,t,x),p(t,o),p(o,a),p(o,n),p(o,s),p(s,d),p(s,r),p(s,l),p(t,i),p(t,f),p(f,c),p(c,g),p(f,m),p(f,u),h&&h.m(u,null),k||(F=te(g,"click",e[2]),k=!0)},p(v,[x]){x&2&&L(r,v[1]),v[0]?h?h.p(v,x):(h=G(v),h.c(),h.m(u,null)):h&&(h.d(1),h=null)},i:_,o:_,d(v){v&&j(t),h&&h.d(),k=!1,F()}}}function be(e,t,o){let a,n;ee(e,U,r=>o(1,n=r));let s;U.set(N.length),console.log(N);const d=()=>{let r=n,l=s;for(;l==s;)l=Math.floor(Math.random()*r);o(3,s=l)};return d(),e.$$.update=()=>{e.$$.dirty&8&&o(0,a=N[s])},[a,n,d,s]}class ye extends pe{constructor(t){super(),me(this,t,be,ge,Q,{})}}new ye({target:document.getElementById("app")});
