
document.getElementById('reset6').addEventListener('click', function() {
    location.reload(); // Recarrega a página atual
});


var json1 = `{
    "id": 1,
    "cpf": 1,
    "nomes": "Nome: Zumbi",
    "tipos": "Tipo: Agressivo",
    "alturas": "Altura: 2 blocos",
    "fraquezas": "Fraqueza: Sol",
    "imgs": "<img src='https://pt.minecraft.wiki/images/UpdatedZombie.png?a4ca8' width='300px' height='300px'>"
}`;

//converter o texto STRING 
data1 = JSON.parse(json1);

var link1 = `<a href="${data1.link}">Visite nosso site</a>`;

function apertar1() {
    document.getElementById('imgs').innerHTML = data1.imgs;
    document.getElementById('nomes').innerHTML = data1.nomes;
    document.getElementById('tipos').innerHTML = data1.tipos;
    document.getElementById('alturas').innerHTML = data1.alturas;
    document.getElementById('fraquezas').innerHTML = data1.fraquezas;
}
console.log(data1)



/////////////////////////////////////////////////////
var json2 = `{
    "id": 2,
    "cpf": 2,
    "nome1": "Nome: Esqueleto",
    "tipo1": "Tipo: Agressivo",
    "altura1": "Altura: 2 blocos",
    "fraqueza1": "Fraqueza: Sol",
    "img1": "<img src='https://i.pinimg.com/originals/f4/45/be/f445be6a0cc4d005f316ca5843fd30f9.png' width='300px' height='300px'>"
}`;
data2 = JSON.parse(json2);

var link2 = `<a href="${data2.link}">Visite nosso site</a>`;

function apertar2() {
    document.getElementById('img1').innerHTML = data2.img1;
    document.getElementById('nome1').innerHTML = data2.nome1;
    document.getElementById('tipo1').innerHTML = data2.tipo1;
    document.getElementById('altura1').innerHTML = data2.altura1;
    document.getElementById('fraqueza1').innerHTML = data2.fraqueza1;
}
console.log(data2)



var json3 = `{
    "id": 3,
    "cpf": 3,
    "nome2": "Nome: Aranha",
    "tipo2": "Tipo: Agressivo",
    "altura2": "Altura: 1 blocos",
    "fraqueza2": "Fraqueza: Encantamento",
    "img2": "<img src='https://preview.redd.it/omxy6o5efse31.png?auto=webp&s=a15a6285b927973b79bf076418b3f6ccf82d2a74'>"
}`;

//converter o texto STRING 
data3 = JSON.parse(json3);

var link3 = `<a href="${data3.link}">Visite nosso site</a>`;

function apertar3() {
    document.getElementById('img2').innerHTML = data3.img2;
    document.getElementById('nome2').innerHTML = data3.nome2;
    document.getElementById('tipo2').innerHTML = data3.tipo2;
    document.getElementById('altura2').innerHTML = data3.altura2;
    document.getElementById('fraqueza2').innerHTML = data3.fraqueza2;
}
console.log(data3)




/////////////////////////////////////////////////////
var json4 = `{
    "id": 4,
        "cpf": 4,
        "nome3": "Nome: Creeper",
        "tipo3": "Tipo: Agressivo",
        "altura3": "Altura: 1.7 blocos",
        "fraqueza3": "Fraqueza: Gato",
        "img3": "<img src='https://i.pinimg.com/originals/93/0f/f8/930ff888cdc8ad0bd80edfb447ea9c7d.png' width='300px'>"
}`;
data4 = JSON.parse(json4);

var link4 = `<a href="${data4.link}">Visite nosso site</a>`;

function apertar4() {
    document.getElementById('img3').innerHTML = data4.img3;
    document.getElementById('nome3').innerHTML = data4.nome3;
    document.getElementById('tipo3').innerHTML = data4.tipo3;
    document.getElementById('altura3').innerHTML = data4.altura3;
    document.getElementById('fraqueza3').innerHTML = data4.fraqueza3;
}
console.log(data4)



//////////////////////////////////////////////////////////

var json5 = `{
    "id": 5,
    "cpf": 5,
    "nome": "Nome: Enderman",
    "tipo": "Tipo: Agressivo",
    "altura": "Altura: 3 blocos",
    "fraqueza": "Fraqueza: Água",
    "img": "<img src='https://i.pinimg.com/originals/f9/d0/40/f9d0402d9e293e6c67a02d358ba1a5b7.png' width='300px' height='300px'>"
}`;
data5 = JSON.parse(json5);

var link5 = `<a href="${data5.link}">Visite nosso site</a>`;

function apertar5() {
    document.getElementById('img').innerHTML = data5.img;
    document.getElementById('nome').innerHTML = data5.nome;
    document.getElementById('tipo').innerHTML = data5.tipo;
    document.getElementById('altura').innerHTML = data5.altura;
    document.getElementById('fraqueza').innerHTML = data5.fraqueza;
}
console.log(data5)


//////////////////////////////////////////////////////////

var json6 = `{
    "id": 6,
    "cpf": 6,
    "nome4": "Nome: Villager",
    "tipo4": "Tipo: Pacífico",
    "altura4": "Altura: 2 blocos",
    "fraqueza4": "Fraqueza: Zombies",
    "img4": "<img src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c728a8b5-e8c0-45e5-8848-6909b9531b6c/dd2u3u1-5b31d136-b7d9-4209-9ef8-1bd97a2bf81b.png/v1/fill/w_1280,h_1032/villager__3d__by_fortnermations_dd2u3u1-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAzMiIsInBhdGgiOiJcL2ZcL2M3MjhhOGI1LWU4YzAtNDVlNS04ODQ4LTY5MDliOTUzMWI2Y1wvZGQydTN1MS01YjMxZDEzNi1iN2Q5LTQyMDktOWVmOC0xYmQ5N2EyYmY4MWIucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.8swk6Xdtr4eOeU8jEUy2s4ahAtbPzj-PPERrTSgDeII' width='300px' height='300px'>"
}`;
data6 = JSON.parse(json6);

var link6 = `<a href="${data6.link}">Visite nosso site</a>`;

function apertar6() {
    document.getElementById('img4').innerHTML = data6.img4;
    document.getElementById('nome4').innerHTML = data6.nome4;
    document.getElementById('tipo4').innerHTML = data6.tipo4;
    document.getElementById('altura4').innerHTML = data6.altura4;
    document.getElementById('fraqueza4').innerHTML = data6.fraqueza4;
}
console.log(data6)


//////////////////////////////////////////////////////////

var json7 = `{
    "id": 7,
    "cpf": 7,
    "nome5": "Nome: Iron Golem",
    "tipo5": "Tipo: Pacífico",
    "altura5": "Altura: 3 blocos",
    "fraqueza5": "Fraqueza: Player em cima de 3 blocos",
    "img5": "<img src='https://media.minecraftforum.net/attachments/319/213/637347402486498703.png' width='300px' height='300px'>"
}`;
data7 = JSON.parse(json7);

var link7 = `<a href="${data7.link}">Visite nosso site</a>`;

function apertar7() {
    document.getElementById('img5').innerHTML = data7.img5;
    document.getElementById('nome5').innerHTML = data7.nome5;
    document.getElementById('tipo5').innerHTML = data7.tipo5;
    document.getElementById('altura5').innerHTML = data7.altura5;
    document.getElementById('fraqueza5').innerHTML = data7.fraqueza5;
}
console.log(data7)



//////////////////////////////////////////////////////////

var json8 = `{
    "id": 8,
    "cpf": 8,
    "nome6": "Nome: Ghast",
    "tipo6": "Tipo: Agressivo",
    "altura6": "Altura: 4 blocos",
    "fraqueza6": "Fraqueza: Arco e Flecha",
    "img6": "<img src='https://img1.picmix.com/output/stamp/normal/3/8/1/1/2551183_53056.png' width='300px' height='300px'>"
}`;
data8 = JSON.parse(json8);

var link8 = `<a href="${data8.link}">Visite nosso site</a>`;

function apertar8() {
    document.getElementById('img6').innerHTML = data8.img6;
    document.getElementById('nome6').innerHTML = data8.nome6;
    document.getElementById('tipo6').innerHTML = data8.tipo6;
    document.getElementById('altura6').innerHTML = data8.altura6;
    document.getElementById('fraqueza6').innerHTML = data8.fraqueza6;
}
console.log(data8)


//////////////////////////////////////////////////////////

var json9 = `{
    "id": 9,
    "cpf": 9,
    "nome7": "Nome: Blaze",
    "tipo7": "Tipo: Agressivo",
    "altura7": "Altura: 1.8 blocos",
    "fraqueza7": "Fraqueza: bola de neve/água",
    "img7": "<img src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/27dbbda7-320b-488b-b8cb-6d993296f095/dgbll53-e01e91af-0dc6-4551-ad4f-7b524949bafc.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzI3ZGJiZGE3LTMyMGItNDg4Yi1iOGNiLTZkOTkzMjk2ZjA5NVwvZGdibGw1My1lMDFlOTFhZi0wZGM2LTQ1NTEtYWQ0Zi03YjUyNDk0OWJhZmMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.kkLpL4kFXM9KbS6D6ll1y2A9sw7a5ANWjct8Q_K9kmY' width='300px' height='300px'>"
}`;
data9 = JSON.parse(json9);

var link9 = `<a href="${data9.link}">Visite nosso site</a>`;

function apertar9() {
    document.getElementById('img7').innerHTML = data9.img7;
    document.getElementById('nome7').innerHTML = data9.nome7;
    document.getElementById('tipo7').innerHTML = data9.tipo7;
    document.getElementById('altura7').innerHTML = data9.altura7;
    document.getElementById('fraqueza7').innerHTML = data9.fraqueza7;
}
console.log(data9)



//////////////////////////////////////////////////////////

var json10 = `{
    "id": 10,
        "cpf": 10,
        "nome8": "Nome: Ender Dragon",
        "tipo8": "Tipo: Agressivo",
        "altura8": "Altura: 8 blocos",
        "fraqueza8": "Fraqueza: Player com camas",
        "img8": "<img src='https://oyster.ignimgs.com/mediawiki/apis.ign.com/minecraft/5/5a/Ender_Dragon.png' width='300px' height='300px'>"
}`;
data10 = JSON.parse(json10);

var link10 = `<a href="${data10.link}">Visite nosso site</a>`;

function apertar10() {
    document.getElementById('img8').innerHTML = data10.img8;
    document.getElementById('nome8').innerHTML = data10.nome8;
    document.getElementById('tipo8').innerHTML = data10.tipo8;
    document.getElementById('altura8').innerHTML = data10.altura8;
    document.getElementById('fraqueza8').innerHTML = data10.fraqueza8;
}
console.log(data10)

