import{u,a,r as i,j as s,p,l as w}from"./index-BxqEKJf_.js";const v="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='iso-8859-1'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20fill='%23000000'%20version='1.1'%20id='Capa_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='800px'%20height='800px'%20viewBox='0%200%20378.94%20378.94'%20xml:space='preserve'%3e%3cg%3e%3cpath%20d='M348.151,54.514c-19.883-19.884-46.315-30.826-74.435-30.826c-28.124,0-54.559,10.942-74.449,30.826l-9.798,9.8l-9.798-9.8%20c-19.884-19.884-46.325-30.826-74.443-30.826c-28.117,0-54.56,10.942-74.442,30.826c-41.049,41.053-41.049,107.848,0,148.885%20l147.09,147.091c2.405,2.414,5.399,3.892,8.527,4.461c1.049,0.207,2.104,0.303,3.161,0.303c4.161,0,8.329-1.587,11.498-4.764%20l147.09-147.091C389.203,162.362,389.203,95.567,348.151,54.514z%20M325.155,180.404L189.47,316.091L53.782,180.404%20c-28.368-28.364-28.368-74.514,0-102.893c13.741-13.739,32.017-21.296,51.446-21.296c19.431,0,37.702,7.557,51.438,21.296%20l21.305,21.312c6.107,6.098,16.897,6.098,23.003,0l21.297-21.312c13.737-13.739,32.009-21.296,51.446-21.296%20c19.431,0,37.701,7.557,51.438,21.296C353.526,105.89,353.526,152.039,325.155,180.404z'/%3e%3c/g%3e%3c/svg%3e",C=()=>{const o=u(),t=a(e=>e.data.data),l=a(e=>e.data.filteredProducts),r=a(e=>e.data.selectedCategory),{displayCount:n,status:g}=a(e=>e.data);console.log("status",g);const[c,d]=i.useState(t),x=()=>{r=="All"||r==""?(d(t),o(p(t.length))):(d(l),o(p(l.length)))},h=()=>{o(w())};return i.useEffect(()=>{x()},[t,l]),s.jsxs(s.Fragment,{children:[c==null?void 0:c.slice(0,n).map((e,m)=>s.jsxs("div",{className:"card",children:[s.jsx("div",{className:"picture-section",children:s.jsx("img",{src:`${e.image}`,alt:""})}),s.jsxs("div",{className:"des-section",children:[s.jsx("p",{children:e.title}),s.jsxs("p",{children:["$",e.price]}),s.jsx("img",{src:v,alt:""})]})]},m)),n<c.length&&s.jsx("button",{onClick:h,className:"loadmore__btn",children:"Load More"})]})};export{C as default};
