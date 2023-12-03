var aProductFilter = [];
if (!oParse.search) {
    aProductFilter = aProductData;
} else {
    var aDynamicKey = Object.keys(oParse.query);
    console.log(aDynamicKey);
    var sKey = aDynamicKey[0];
    var sValue = oParse.query[sKey];
    aProductFilter = aProductData.filter(function (e) {
        return e[sKey] == sValue
    });

}
res.writeHead(200, { 'Content-Type': 'text/html' });
res.write(JSON.stringify(aProductFilter));
return res.end();

}).listen(3005)

console.log('After Call');