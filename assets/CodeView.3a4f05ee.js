import{_ as w,d as I,o as a,c,a as o,F as S,h as V,f as $,t as v,i as b,j as E,k as h,l as j,b as z,m as q,n as A,v as D,u as d,q as L,p as P,e as F}from"./index.f51e99d4.js";const M={id:"list"},T={key:0},U={key:0},G={key:1,class:"none"},H=I({props:{attempts:null},setup(u){const _=u;return(r,f)=>(a(),c("div",M,[_.attempts.length>0?(a(),c("div",T,[o("ul",null,[(a(!0),c(S,null,V(_.attempts,m=>(a(),c("li",null,[$(v(m[0])+" : "+v(m[1])+" pt",1),m[1]>1?(a(),c("span",U,"s")):b("",!0)]))),256))])])):(a(),c("div",G,"Aucune combinaison renseign\xE9e"))]))}});var J=w(H,[["__scopeId","data-v-e9317550"]]);const g=u=>(P("data-v-c0539278"),u=u(),F(),u),K={class:"module"},O={id:"secret-number-container"},Q=g(()=>o("span",null,"Chiffre myst\xE8re",-1)),R={id:"secret-number"},W={id:"attempts-list"},X=g(()=>o("span",null,"Liste des propositions",-1)),Y=["onSubmit"],Z=g(()=>o("label",{for:"attempt"},"Entrez une combinaison de 5 chiffres :",-1)),ee={id:"errors"},te={key:0,class:"important-error"},se={key:1,class:"error"},ne=["disabled"],oe={setup(u){const _=E("$swal"),r=h([1,2,3,4,1]),f=h({}),m=(s,t)=>s+t;for(let s=0;s<r.value.length;s++)r.value[s]in f.value?f.value[r.value[s]]++:f.value[r.value[s]]=1;const p=h([]),i=j({combination:"",points:null});function y(){return i.combination.length!==5}function x(s){return/^\d+$/.test(s)}function C(){let s=!1;if(p.value.length>0)for(let t=0;t<p.value.length;t++)i.combination===p.value[t][0]&&(s=!0);if(!x(i.combination))_({icon:"error",toast:!0,position:"top-right",showConfirmButton:!1,timer:3e3,timerProgressBar:!0,title:"Entrez que des chiffres !"});else if(s===!0)_({showConfirmButton:!0,timer:2e3,timerProgressBar:!0,icon:"info",title:"Combinaison d\xE9j\xE0 existante !"});else{let t=N(i.combination);p.value.push(t),i.combination=[],i.points=null}}function N(s){let t=s.split(""),n=[],l={};for(let e=0;e<t.length;e++)r.value.includes(Number(t[e]))?Number(t[e])===r.value[e]?(n[e]=2,t[e]in l?l[t[e]]++:l[t[e]]=1):n[e]=null:(n[e]=0,t[e]in l?l[t[e]]++:l[t[e]]=1);console.log(l);let k=[];for(let e=0;e<n.length;e++)(n[e]===null||n[e]===0)&&k.push(r.value[e]);for(let e=0;e<n.length;e++)n[e]===null&&(!(t[e]in l)&&k.includes(Number(t[e]))?(n[e]=1,l[t[e]]++):(n[e]=0,t[e]in l?l[t[e]]++:l[t[e]]=1));console.log(n);let B=n.reduce(m);return[s,B]}return(s,t)=>(a(),c("div",K,[o("section",null,[o("div",O,[Q,o("span",R,v(r.value.join("")),1)]),o("div",W,[X,z(J,{attempts:p.value},null,8,["attempts"])])]),o("section",null,[o("form",{onSubmit:q(C,["prevent"])},[Z,A(o("input",{id:"attempt",type:"text",maxlength:"5","onUpdate:modelValue":t[0]||(t[0]=n=>d(i).combination=n)},null,512),[[D,d(i).combination]]),o("div",ee,[d(i).combination.length>0&&!x(d(i).combination)?(a(),c("p",te,"Entrez que des chiffres !")):b("",!0),d(i).combination.length>0&&d(i).combination.length<5?(a(),c("p",se,"Il faut entrer 5 chiffres.")):b("",!0)]),o("button",{class:L(["btn btn-green",{disabled:y()}]),type:"submit",disabled:y()},"Entrer",10,ne)],40,Y)])]))}};var le=w(oe,[["__scopeId","data-v-c0539278"]]);export{le as default};
