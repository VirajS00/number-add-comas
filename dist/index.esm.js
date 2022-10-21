var r=function(r,d){var e=r.toString(),t="IND"===d?/\B(?=(\d{2})+.(?!(\d{1})))+(?=(\d{2})+(?!(\d{3})))/g:/\B(?=(\d{3})+(?!\d))/g,a=r%1!=0?e.split("."):e;return r%1!=0?a[0].replace(t,",")+"."+a[1]:e.replace(t,",")};export{r as addComas};
//# sourceMappingURL=index.esm.js.map
