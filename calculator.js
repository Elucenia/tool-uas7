/* tool-uas7 · ELUCENIA · https://github.com/Elucenia/tool-uas7
   Copyright (c) 2026 ELUCENIA · Felipe Guedes (fgxdev.com). Licensed under the Apache License 2.0: keep this notice and the NOTICE file, and mark your changes.
   Standalone integration. Package metadata and rights: README.md. */
(function(root){'use strict';
function freeze(value){if(value&&typeof value==='object'){for(const item of Object.values(value))freeze(item);Object.freeze(value);}return value;}
const TOOL=freeze({"id":"uas7","title":"UAS7 (Escore de Atividade da Urticária)","fields":[["d1p","Dia 1 · urticas (pápulas) em 24 h","radio",{"opts":{"0":"Nenhuma","1":"&lt; 20","2":"20 a 50","3":"&gt; 50"}}],["d1c","Dia 1 · prurido","radio",{"opts":{"0":"Ausente","1":"Leve","2":"Moderado","3":"Intenso"}}],["d2p","Dia 2 · urticas (pápulas) em 24 h","radio",{"opts":{"0":"Nenhuma","1":"&lt; 20","2":"20 a 50","3":"&gt; 50"}}],["d2c","Dia 2 · prurido","radio",{"opts":{"0":"Ausente","1":"Leve","2":"Moderado","3":"Intenso"}}],["d3p","Dia 3 · urticas (pápulas) em 24 h","radio",{"opts":{"0":"Nenhuma","1":"&lt; 20","2":"20 a 50","3":"&gt; 50"}}],["d3c","Dia 3 · prurido","radio",{"opts":{"0":"Ausente","1":"Leve","2":"Moderado","3":"Intenso"}}],["d4p","Dia 4 · urticas (pápulas) em 24 h","radio",{"opts":{"0":"Nenhuma","1":"&lt; 20","2":"20 a 50","3":"&gt; 50"}}],["d4c","Dia 4 · prurido","radio",{"opts":{"0":"Ausente","1":"Leve","2":"Moderado","3":"Intenso"}}],["d5p","Dia 5 · urticas (pápulas) em 24 h","radio",{"opts":{"0":"Nenhuma","1":"&lt; 20","2":"20 a 50","3":"&gt; 50"}}],["d5c","Dia 5 · prurido","radio",{"opts":{"0":"Ausente","1":"Leve","2":"Moderado","3":"Intenso"}}],["d6p","Dia 6 · urticas (pápulas) em 24 h","radio",{"opts":{"0":"Nenhuma","1":"&lt; 20","2":"20 a 50","3":"&gt; 50"}}],["d6c","Dia 6 · prurido","radio",{"opts":{"0":"Ausente","1":"Leve","2":"Moderado","3":"Intenso"}}],["d7p","Dia 7 · urticas (pápulas) em 24 h","radio",{"opts":{"0":"Nenhuma","1":"&lt; 20","2":"20 a 50","3":"&gt; 50"}}],["d7c","Dia 7 · prurido","radio",{"opts":{"0":"Ausente","1":"Leve","2":"Moderado","3":"Intenso"}}]],"config":{"unit":"de 42","label":"UAS7","fields":[["d1p","radio",0],["d1c","radio",0],["d2p","radio",0],["d2c","radio",0],["d3p","radio",0],["d3c","radio",0],["d4p","radio",0],["d4c","radio",0],["d5p","radio",0],["d5c","radio",0],["d6p","radio",0],["d6c","radio",0],["d7p","radio",0],["d7c","radio",0]],"bands":[[0,"low","Sem urticária na semana"],[1,"low","Urticária bem controlada (1 a 6)"],[7,"mid","Atividade leve (7 a 15)"],[16,"mid","Atividade moderada (16 a 27)","Reavaliar o tratamento: aumentar o anti-histamínico (até 4 vezes a dose) e, se não controlar, omalizumabe."],[28,"high","Atividade grave (28 a 42)","Reavaliar o tratamento: aumentar o anti-histamínico (até 4 vezes a dose) e, se não controlar, omalizumabe."]]},"reviewStatus":"needs-review","clinicalValidation":"not-performed"});
const window={};
/* ELUCENIA arithmetic registry. No DOM access, storage, telemetry or network requests. */
(function(root){
  'use strict';
  const CALC={fn:Object.create(null)};
  const round=(n,d=1)=>Math.round(n*Math.pow(10,d))/Math.pow(10,d);
  const yes=v=>v===true||v==='1'||v===1;
  CALC.h={
    r1:round,
    br:(n,d=1)=>round(n,d).toLocaleString('pt-BR',{minimumFractionDigits:d,maximumFractionDigits:d}),
    band:(n,bands)=>{for(const b of bands)if(n<b[0])return b[1];return bands[bands.length-1][1];},
    sum:(values,weights)=>Object.entries(weights).reduce((n,[key,w])=>n+(yes(values[key])?w:0),0),yes
  };
  CALC.def=(id,fn)=>{if(CALC.fn[id])throw Error('Duplicate calculator '+id);CALC.fn[id]=fn;};
  CALC.score=(cfg,values)=>{
    let score=0;
    for(const[name,type,weight]of cfg.fields){const v=values[name];if(type==='chk'){if(yes(v))score+=weight;}else if(type==='radio'||type==='sel'){const n=parseFloat(v);if(!Number.isNaN(n))score+=n;}}
    score=round(score,2);let band=cfg.bands[0];for(const b of cfg.bands)if(score>=b[0])band=b;
    return{main:[String(score).replace('.',','),cfg.unit||(Math.abs(score)===1?'ponto':'pontos')],label:cfg.label,level:band[1],verdict:band[2],note:band[3]||'',raw:{score}};
  };
  CALC.run=(id,values,cfg)=>{if(cfg&&cfg.bands)return CALC.score(cfg,values);if(!CALC.fn[id])return{error:'Calculadora indisponível.'};return CALC.fn[id](values);};
  root.CALC=CALC;if(typeof module!=='undefined')module.exports=CALC;
})(typeof window!=='undefined'?window:globalThis);


function calculate(input){
 if(!input||typeof input!=='object'||Array.isArray(input))return {error:'Informe um objeto com os campos da ferramenta.',code:'INVALID_INPUT'};
 const values=Object.create(null);
 for(const[name,,kind,o={}] of TOOL.fields){
  const v=Object.hasOwn(input,name)?input[name]:undefined;
  if(kind==='chk'){if(v!==undefined&&v!==null&&![true,false,1,0,'1','0'].includes(v))return {error:'Campo booleano inválido: '+name,field:name,code:'INVALID_INPUT'};values[name]=v===true||v===1||v==='1';continue;}
  const empty=v==null||(typeof v==='string'&&!v.trim());
  if(empty){if(!o.opt)return {error:'Campo obrigatório: '+name,field:name,code:'REQUIRED_FIELD'};values[name]=kind==='num'?null:'';continue;}
  if(kind==='num'){
   if(!['number','string'].includes(typeof v)||(typeof v==='string'&&!/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?$/.test(v.trim()))||!Number.isFinite(Number(v)))return {error:'Número inválido: '+name,field:name,code:'INVALID_INPUT'};
   const n=Number(v);if((Number.isFinite(o.min)&&n<o.min)||(Number.isFinite(o.max)&&n>o.max))return {error:'Valor fora do intervalo: '+name,field:name,code:'OUT_OF_RANGE'};
   values[name]=n;
  }else{if(!Object.hasOwn(o.opts||{},String(v)))return {error:'Opção inválida: '+name,field:name,code:'INVALID_OPTION'};values[name]=String(v);}
 }
 try{const r=window.CALC.run(TOOL.id,values,TOOL.config);if(r.error)return {error:String(r.error).replace(/<[^>]*>/g,''),code:'FORMULA_DOMAIN'};
  if(!Array.isArray(r.main)||r.main.some(v=>typeof v==='number'&&!Number.isFinite(v))||/\b(?:NaN|Infinity)\b/.test(String(r.main[0])))return {error:'Resultado não finito ou indisponível.',code:'INVALID_RESULT'};
  return {id:TOOL.id,main:r.main,label:r.label||TOOL.title,raw:r.raw||{},clinicalValidation:'not-performed'};
 }catch{return {error:'Confira os valores e o domínio da fórmula.',code:'FORMULA_DOMAIN'};}
}
const api=Object.freeze({metadata:TOOL,calculate});if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.EluceniaTool=api;
})(typeof globalThis!=='undefined'?globalThis:this);
