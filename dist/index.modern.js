const t=(t,d)=>{const e=t.toString(),r="IND"===d?/\B(?=(\d{2})+.(?!(\d{1})))+(?=(\d{2})+(?!(\d{3})))/g:/\B(?=(\d{3})+(?!\d))/g,c=t%1!=0?e.split("."):e;return t%1!=0?c[0].replace(r,",")+"."+c[1]:e.replace(r,",")};export{t as addComas};
//# sourceMappingURL=index.modern.js.map
