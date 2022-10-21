exports.addCommas=function(d,r){var e=d.toString(),t="IND"===r?/\B(?=(\d{2})+.(?!(\d{1})))+(?=(\d{2})+(?!(\d{3})))/g:/\B(?=(\d{3})+(?!\d))/g,a=d%1!=0?e.split("."):e;return d%1!=0?a[0].replace(t,",")+"."+a[1]:e.replace(t,",")};
//# sourceMappingURL=index.cjs.map
