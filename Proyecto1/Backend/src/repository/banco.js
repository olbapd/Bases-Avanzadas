'use strict';

let  https = require('https');
let  convert = require('xml-js');



const url = "https://gee.bccr.fi.cr/indicadoreseconomicos/WebServices/wsIndicadoresEconomicos.asmx/ObtenerIndicadoresEconomicosXML";

let expose = {
  getCambio  : undefined,
};



expose.getCambio = (data,cb) =>{
  let to_return = {
    error : null,
    success : null,
    data: null
  };
  
  let urlBanco=url+"?tcIndicador=317&tcFechaInicio="+data.date+"&tcFechaFinal="+data.date+"&tcNombre=Bases&tnSubNiveles=N";
  
  https.get(urlBanco, (resp) => {
    let data = '';
    resp.on('data', (chunk) => {
      data += chunk;
    });

    resp.on('end', () => {
      data = data.split('&lt;').join('<');
      data = data.split('&gt;').join('>');
      let partialXml = convert.xml2json(data, {compact: true, spaces: 4,ignoreDeclaration:true,ignoreAttributes:true});
      let exchangeRate = JSON.parse(partialXml).string.Datos_de_INGC011_CAT_INDICADORECONOMIC.INGC011_CAT_INDICADORECONOMIC.NUM_VALOR._text;

      to_return.success=true;
      to_return.data=exchangeRate;
      cb(to_return);
      
    });

  }).on("error", (err) => {
  	to_return.success=false;
  	to_return.error=err;
  	cb(to_return);
  });
}


module.exports = expose;
