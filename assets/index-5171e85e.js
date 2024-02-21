import{e as g,d as b,c as r,a as e,F as i,r as c,u as p,o,t as s,i as x,k as y,j as _,l as u}from"./index-d436e7c8.js";import f from"./reading538words-9b6f88e9.js";const k={class:"px-4 pt-6 2xl:px-0"},m={class:"border border-gray-200 rounded-lg bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6"},v={class:"mt-6 items-center justify-between lg:flex"},w={class:"mb-4 lg:mb-0"},j={class:"mb-2 text-xl font-bold text-gray-900 dark:text-white"},T={class:"text-base font-normal text-gray-500 dark:text-gray-400"},L={class:"items-center sm:flex"},M={class:"flex items-center"},$={class:"relative ml-2 flex-1"},B=e("div",{class:"pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"},[e("svg",{class:"h-4 w-4 text-gray-500 dark:text-gray-400","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 20 20"},[e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"})])],-1),C={class:"mt-6"},H={class:"w-full text-left text-sm text-gray-500 dark:text-gray-400"},V=e("thead",{class:"bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400"},[e("tr",null,[e("th",{class:"w-0 px-6 py-3"}," 排名 "),e("th",{class:"w-0 px-6 py-3"}),e("th",{scope:"col",class:"w-0 px-6 py-3"}," 考点词 "),e("th",{scope:"col",class:"w-0 px-6 py-3"}," 词性 "),e("th",{scope:"col",class:"w-80 px-6 py-3"}," 词义 "),e("th",{scope:"col",class:"px-6 py-3"}," 同义替换 ")])],-1),D={class:"px-6 py-4"},F={class:"px-6 py-4"},N=["onClick"],S={scope:"row",class:"whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"},A=["title","href"],E=["innerHTML"],R=["innerHTML"],U={class:"px-6 py-4"},Z=e("br",null,null,-1),J={__name:"index",setup(q){const h=g(f),n=b("");return(d,l)=>(o(),r("div",k,[e("div",m,[(o(!0),r(i,null,c(p(h),a=>(o(),r(i,{key:a.title},[e("div",v,[e("div",w,[e("h3",j,s(a.title),1),e("span",T,s(a.define),1)]),e("div",L,[e("div",M,[e("button",{type:"button",class:"rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white dark:bg-blue-600 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:hover:bg-blue-700 dark:focus:ring-blue-800",onClick:l[0]||(l[0]=t=>d.$router.push("listening/179practice"))}," 练习 "),e("div",$,[B,x(e("input",{"onUpdate:modelValue":l[1]||(l[1]=t=>_(n)?n.value=t:null),type:"search",class:"block w-full border border-gray-300 rounded-lg bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 dark:border-gray-600 focus:border-blue-500 dark:bg-gray-700 dark:text-white focus:ring-blue-500 dark:focus:border-blue-500 dark:focus:ring-blue-500 dark:placeholder-gray-400",placeholder:"Search"},null,512),[[y,p(n)]])])])])]),e("div",C,[e("table",H,[V,e("tbody",null,[(o(!0),r(i,null,c(a.words,t=>(o(),r("tr",{key:t.index,class:"border-b bg-white dark:border-gray-700 dark:bg-gray-800"},[e("td",D,s(t[0]),1),e("td",F,[e("a",{href:"javascript:;",class:"i-carbon-volume-up-filled block",onClick:z=>d.play(t[1])},null,8,N)]),e("th",S,[e("a",{class:"hover:underline",title:`在剑桥词典中查询 ${t[1]}`,href:`https://dictionary.cambridge.org/dictionary/english-chinese-simplified/${t[1]}`,target:"_blank"},s(t[1]),9,A)]),e("td",{class:"px-6 py-4 italic",innerHTML:t[2].join("<br>")},null,8,E),e("td",{class:"px-6 py-4",innerHTML:t[3].join("<br>")},null,8,R),e("td",U,[u(s(t[4].join(", "))+" ",1),Z,u(" "+s(t[5].length>0?t[5]:""),1)])]))),128))])])])],64))),128))])]))}};export{J as default};
