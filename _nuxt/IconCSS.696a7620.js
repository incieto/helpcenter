import{d,aA as m,y as x,I as o,b as S,c as f,az as z,J as a,l as I}from"./entry.2f0cbb1c.js";const y=d({__name:"IconCSS",props:{name:{type:String,required:!0},size:{type:String,default:""}},setup(l){var r;m(n=>({faa288c6:a(p)}));const e=x();(r=e==null?void 0:e.nuxtIcon)!=null&&r.aliases;const s=l,_=o(()=>{var n;return(((n=e==null?void 0:e.nuxtIcon)==null?void 0:n.aliases)||{})[s.name]||s.name}),p=o(()=>`url('https://api.iconify.design/${_.value.replace(":","/")}.svg')`),c=o(()=>{var t,i,u;if(!s.size&&typeof((t=e.nuxtIcon)==null?void 0:t.size)=="boolean"&&!((i=e.nuxtIcon)!=null&&i.size))return;const n=s.size||((u=e.nuxtIcon)==null?void 0:u.size)||"1em";return String(Number(n))===n?`${n}px`:n});return(n,t)=>(S(),f("span",{style:z({width:a(c),height:a(c)})},null,4))}});const g=I(y,[["__scopeId","data-v-5217de21"]]);export{g as default};