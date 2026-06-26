(function(){
var CSS="#pcbslider{position:relative;max-width:880px;margin:0 auto}#pcbslider .pcbt{display:flex;gap:14px;overflow-x:auto;scroll-snap-type:x mandatory;scroll-behavior:smooth;scrollbar-width:none;padding:2px}#pcbslider .pcbt::-webkit-scrollbar{display:none}#pcbslider .pcbs{flex:0 0 80%;max-width:360px;min-height:320px;scroll-snap-align:center;background:#fff;border-radius:8px;overflow:hidden;box-shadow:0 1px 5px rgba(0,0,0,.13);display:flex;flex-direction:column}#pcbslider .pcbs img{width:100%;height:190px;object-fit:cover;display:block;margin:0}#pcbslider .pcbs .pcbtx{padding:10px 13px 13px}#pcbslider .pcbs h3{font-size:15px;margin:0 0 4px}#pcbslider .pcbs p{font-size:13px;line-height:1.45;margin:0}#pcbslider .pcbintro{background:linear-gradient(135deg,#1f2a44,#33507a);color:#fff;justify-content:center}#pcbslider .pcbintro .pcbtx{padding:24px 22px}#pcbslider .pcbintro h3{font-size:21px;margin:0 0 10px}#pcbslider .pcbintro p{font-size:14px;line-height:1.55;opacity:.95}#pcbslider .pcbnav{position:absolute;top:97px;transform:translateY(-50%);width:40px;height:40px;border:0;border-radius:50%;background:rgba(0,0,0,.55);color:#fff;font-size:23px;line-height:1;cursor:pointer;z-index:5;display:flex;align-items:center;justify-content:center}#pcbslider .pcbnav:hover{background:rgba(0,0,0,.75)}#pcbslider .pcbprev{left:4px}#pcbslider .pcbnext{right:4px}#pcbslider .pcbdots{text-align:center;margin:6px 0 0}#pcbslider .pcbdots b{display:inline-block;width:8px;height:8px;border-radius:50%;background:#cfcfcf;margin:0 4px;cursor:pointer}#pcbslider .pcbdots b.on{background:#444}";
var SLIDES=[{"intro": true, "h": "Shelly Pro CB", "p": "Inteligentné ističe na DIN lištu: ochrana obvodu, meranie napätia a vzdialené ovládanie. C10 až C63, 1–3 póly, 6 kA, WiFi, Bluetooth aj LAN."}, {"img": "https://pim.est-praha.cz/sharings/019f03cc-818f-70f5-a20c-cec036923a4f.jpg", "h": "Automatická ochrana pred poruchami", "p": "Okamžité odpojenie pri skrate alebo preťažení a stráženie napätia. Pri nebezpečnom prepätí či podpätí odpojí záťaž skôr, než dôjde k poškodeniu. Funguje samostatne aj bez siete."}, {"img": "https://pim.est-praha.cz/sharings/019f03cc-8425-71ca-b33c-e4f051b413c6.jpg", "h": "Reakcia na haváriu", "p": "Obvod vypnete odkiaľkoľvek jediným klepnutím v aplikácii. Vzdialené aj automatické odpojenie pomáha zabrániť požiaru, zatopeniu aj ďalším škodám, aj keď nie ste doma."}, {"img": "https://pim.est-praha.cz/sharings/019f03cc-8697-7099-905f-04adcc0932d8.jpg", "h": "Vzdialené monitorovanie a ovládanie", "p": "Stav obvodu, napätie ±5 % aj polohu ističa vidíte v reálnom čase odkiaľkoľvek. Zapínanie a vypínanie na diaľku, plánovanie, scény aj hlas."}, {"img": "https://pim.est-praha.cz/sharings/019f03cc-88ef-7078-9559-75a4a80aca16.jpg", "h": "Včasná notifikácia porúch a diagnostika", "p": "Pri každom vybavení dorazí okamžité oznámenie do telefónu. Záznam kvality napájania a export do CSV odhalí príčinu rýchlo a presne."}];
var st=document.createElement('style');st.textContent=CSS;document.head.appendChild(st);
var tries=0;
function esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')}
function build(){var box=document.getElementById('pcbslider');
if(!box){if(tries++<60)setTimeout(build,100);return}
if(box.dataset.done)return;box.dataset.done=1;
try{
var t=document.createElement('div');t.className='pcbt';
SLIDES.forEach(function(s){var d=document.createElement('div');d.className='pcbs'+(s.intro?' pcbintro':'');
d.innerHTML=(s.img?'<img src="'+esc(s.img)+'" alt="'+esc(s.h)+'">':'')+'<div class="pcbtx"><h3>'+esc(s.h)+'</h3><p>'+esc(s.p)+'</p></div>';
t.appendChild(d)});
box.innerHTML='';box.appendChild(t);
var pv=document.createElement('button');pv.className='pcbnav pcbprev';pv.type='button';pv.innerHTML='&#8249;';
var nx=document.createElement('button');nx.className='pcbnav pcbnext';nx.type='button';nx.innerHTML='&#8250;';
var dots=document.createElement('div');dots.className='pcbdots';box.appendChild(pv);box.appendChild(nx);box.appendChild(dots);
var s=t.children,n=s.length,cur=0;for(var j=0;j<n;j++){var b=document.createElement('b');b.onclick=(function(x){return function(){go(x)}})(j);dots.appendChild(b)}
function mark(){for(var i=0;i<n;i++)dots.children[i].className=i===cur?'on':''}
function go(i){cur=(i%n+n)%n;s[cur].scrollIntoView({behavior:'smooth',inline:'center',block:'nearest'});mark()}
pv.onclick=function(){go(cur-1)};nx.onclick=function(){go(cur+1)};
var deb;t.addEventListener('scroll',function(){clearTimeout(deb);deb=setTimeout(function(){var c=t.getBoundingClientRect(),cx=c.left+c.width/2,bi=0,bd=1e9;for(var i=0;i<n;i++){var r=s[i].getBoundingClientRect(),d=Math.abs(r.left+r.width/2-cx);if(d<bd){bd=d;bi=i}}cur=bi;mark()},90)});
mark();console.log('PCB slider OK,',n)
}catch(err){console.log('PCB slider CHYBA:',err)}}
build();if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',build);window.addEventListener('load',build);
})();