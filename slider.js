(function(){
var CSS="#pcbslider{max-width:760px;margin:0 auto}#pcbslider .pcbstage{position:relative;border-radius:10px;overflow:hidden;background:#f0f0f0}#pcbslider .pcbbig{width:100%;height:380px;object-fit:cover;display:block}#pcbslider .pcbbigintro{width:100%;height:380px;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,#1f2a44,#33507a);color:#fff;font-size:30px;font-weight:bold;text-align:center;padding:0 20px}#pcbslider .pcbnav{position:absolute;top:50%;transform:translateY(-50%);width:44px;height:44px;border:0;border-radius:50%;background:rgba(0,0,0,.5);color:#fff;font-size:26px;line-height:1;cursor:pointer;z-index:3;display:flex;align-items:center;justify-content:center}#pcbslider .pcbnav:hover{background:rgba(0,0,0,.72)}#pcbslider .pcbprev{left:10px}#pcbslider .pcbnext{right:10px}#pcbslider .pcbcap{padding:13px 4px 0;min-height:92px}#pcbslider .pcbcap h3{font-size:18px;margin:0 0 5px}#pcbslider .pcbcap p{font-size:14px;line-height:1.55;margin:0;color:#333}#pcbslider .pcbthumbs{display:flex;gap:8px;margin:12px 0 0;overflow-x:auto;scrollbar-width:none}#pcbslider .pcbthumbs::-webkit-scrollbar{display:none}#pcbslider .th{flex:0 0 76px;height:56px;border-radius:6px;overflow:hidden;cursor:pointer;border:2px solid transparent;opacity:.55;transition:opacity .2s}#pcbslider .th.on{border-color:#1f2a44;opacity:1}#pcbslider .th img{width:100%;height:100%;object-fit:cover;display:block}#pcbslider .th.ti{background:linear-gradient(135deg,#1f2a44,#33507a)}";
var S=[{"intro": true, "h": "Shelly Pro CB", "p": "Inteligentné ističe na DIN lištu: ochrana obvodu, meranie napätia a vzdialené ovládanie. C10 až C63, 1–3 póly, 6 kA, WiFi, Bluetooth aj LAN."}, {"img": "https://pim.est-praha.cz/sharings/019f03cc-818f-70f5-a20c-cec036923a4f.jpg", "h": "Automatická ochrana pred poruchami", "p": "Okamžité odpojenie pri skrate alebo preťažení a stráženie napätia. Pri nebezpečnom prepätí či podpätí odpojí záťaž skôr, než dôjde k poškodeniu. Funguje samostatne aj bez siete."}, {"img": "https://pim.est-praha.cz/sharings/019f03cc-8425-71ca-b33c-e4f051b413c6.jpg", "h": "Reakcia na haváriu", "p": "Obvod vypnete odkiaľkoľvek jediným klepnutím v aplikácii. Vzdialené aj automatické odpojenie pomáha zabrániť požiaru, zatopeniu aj ďalším škodám, aj keď nie ste doma."}, {"img": "https://pim.est-praha.cz/sharings/019f03cc-8697-7099-905f-04adcc0932d8.jpg", "h": "Vzdialené monitorovanie a ovládanie", "p": "Stav obvodu, napätie ±5 % aj polohu ističa vidíte v reálnom čase odkiaľkoľvek. Zapínanie a vypínanie na diaľku, plánovanie, scény aj hlas."}, {"img": "https://pim.est-praha.cz/sharings/019f03cc-88ef-7078-9559-75a4a80aca16.jpg", "h": "Včasná notifikácia porúch a diagnostika", "p": "Pri každom vybavení dorazí okamžité oznámenie do telefónu. Záznam kvality napájania a export do CSV odhalí príčinu rýchlo a presne."}];
var st=document.createElement('style');st.textContent=CSS;document.head.appendChild(st);
var tries=0;
function esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')}
function build(){var box=document.getElementById('pcbslider');
if(!box){if(tries++<60)setTimeout(build,100);return}
if(box.dataset.done)return;box.dataset.done=1;
try{
var n=S.length,cur=0;
var big=document.createElement('div');big.className='pcbbigwrap';
var cap=document.createElement('div');cap.className='pcbcap';
var stage=document.createElement('div');stage.className='pcbstage';stage.appendChild(big);
var pv=document.createElement('button');pv.type='button';pv.className='pcbnav pcbprev';pv.innerHTML='&#8249;';
var nx=document.createElement('button');nx.type='button';nx.className='pcbnav pcbnext';nx.innerHTML='&#8250;';
stage.appendChild(pv);stage.appendChild(nx);
var thumbs=document.createElement('div');thumbs.className='pcbthumbs';
box.innerHTML='';box.appendChild(stage);box.appendChild(cap);box.appendChild(thumbs);
var ths=[];
S.forEach(function(s,i){var th=document.createElement('div');th.className='th'+(s.intro?' ti':'');
if(s.img)th.innerHTML='<img src="'+esc(s.img)+'" alt="'+esc(s.h)+'">';
th.onclick=(function(x){return function(){go(x)}})(i);thumbs.appendChild(th);ths.push(th)});
function go(i){cur=(i%n+n)%n;var s=S[cur];
big.innerHTML=s.img?'<img class="pcbbig" src="'+esc(s.img)+'" alt="'+esc(s.h)+'">':'<div class="pcbbigintro">'+esc(s.h)+'</div>';
cap.innerHTML=(s.intro?'':'<h3>'+esc(s.h)+'</h3>')+'<p>'+esc(s.p)+'</p>';
for(var k=0;k<n;k++)ths[k].className='th'+(S[k].intro?' ti':'')+(k===cur?' on':'')}
pv.onclick=function(){go(cur-1)};nx.onclick=function(){go(cur+1)};
go(0);console.log('PCB slider OK,',n)
}catch(err){console.log('PCB slider CHYBA:',err)}}
build();if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',build);window.addEventListener('load',build);
})();