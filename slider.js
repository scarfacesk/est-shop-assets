(function(){
var CSS="#pcbslider{max-width:760px;margin:0 auto}#pcbslider .pcbstage{position:relative;border-radius:10px;overflow:hidden;background:#f0f0f0}#pcbslider .pcbbig{width:100%;height:380px;object-fit:cover;display:block}#pcbslider .pcbnav{position:absolute;top:50%;transform:translateY(-50%);width:44px;height:44px;border:0;border-radius:50%;background:rgba(0,0,0,.5);color:#fff;font-size:26px;line-height:1;cursor:pointer;z-index:3;display:flex;align-items:center;justify-content:center}#pcbslider .pcbnav:hover{background:rgba(0,0,0,.72)}#pcbslider .pcbprev{left:10px}#pcbslider .pcbnext{right:10px}#pcbslider .pcbcap{padding:13px 4px 0;min-height:84px}#pcbslider .pcbcap h3{font-size:18px;margin:0 0 5px}#pcbslider .pcbcap p{font-size:14px;line-height:1.55;margin:0;color:#333}";
var S=[{"img": "https://pim.est-praha.cz/sharings/019f03cc-818f-70f5-a20c-cec036923a4f.jpg", "h": "Automatická ochrana pred poruchami", "p": "Okamžité odpojenie pri skrate alebo preťažení a stráženie napätia. Pri nebezpečnom prepätí či podpätí odpojí záťaž skôr, než dôjde k poškodeniu. Funguje samostatne aj bez siete."}, {"img": "https://pim.est-praha.cz/sharings/019f03cc-8425-71ca-b33c-e4f051b413c6.jpg", "h": "Reakcia na haváriu", "p": "Obvod vypnete odkiaľkoľvek jediným klepnutím v aplikácii. Vzdialené aj automatické odpojenie pomáha zabrániť požiaru, zatopeniu aj ďalším škodám, aj keď nie ste doma."}, {"img": "https://pim.est-praha.cz/sharings/019f03cc-8697-7099-905f-04adcc0932d8.jpg", "h": "Vzdialené monitorovanie a ovládanie", "p": "Stav obvodu, napätie ±5 % aj polohu ističa vidíte v reálnom čase odkiaľkoľvek. Zapínanie a vypínanie na diaľku, plánovanie, scény aj hlas."}, {"img": "https://pim.est-praha.cz/sharings/019f03cc-88ef-7078-9559-75a4a80aca16.jpg", "h": "Včasná notifikácia porúch a diagnostika", "p": "Pri každom vybavení dorazí okamžité oznámenie do telefónu. Záznam kvality napájania a export do CSV odhalí príčinu rýchlo a presne."}];
var st=document.createElement('style');st.textContent=CSS;document.head.appendChild(st);
var tries=0;
function esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')}
function build(){var box=document.getElementById('pcbslider');
if(!box){if(tries++<60)setTimeout(build,100);return}
if(box.dataset.done)return;box.dataset.done=1;
try{
var n=S.length,cur=0;
var big=document.createElement('div');
var cap=document.createElement('div');cap.className='pcbcap';
var stage=document.createElement('div');stage.className='pcbstage';stage.appendChild(big);
var pv=document.createElement('button');pv.type='button';pv.className='pcbnav pcbprev';pv.innerHTML='&#8249;';
var nx=document.createElement('button');nx.type='button';nx.className='pcbnav pcbnext';nx.innerHTML='&#8250;';
stage.appendChild(pv);stage.appendChild(nx);
box.innerHTML='';box.appendChild(stage);box.appendChild(cap);
function go(i){cur=(i%n+n)%n;var s=S[cur];
big.innerHTML='<img class="pcbbig" src="'+esc(s.img)+'" alt="'+esc(s.h)+'">';
cap.innerHTML='<h3>'+esc(s.h)+'</h3><p>'+esc(s.p)+'</p>'}
pv.onclick=function(){go(cur-1)};nx.onclick=function(){go(cur+1)};
go(0);console.log('PCB slider OK,',n)
}catch(err){console.log('PCB slider CHYBA:',err)}}
build();if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',build);window.addEventListener('load',build);
})();