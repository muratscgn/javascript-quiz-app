function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;
}

Soru.prototype.cevapKontrolEt = function (cevap) {
    return cevap === this.dogruCevap
}

let sorular = [
    new Soru("Hangisi javascript paket yönetim uygulamasıdır?", { a: "Node.js", b: "Typescript", c: "Npm", d: "Nuget" }, "c"),
    new Soru("Hangisi .net paket yönetim uygulamasıdır?", { a: "Node.js", b: "Nuget", c: "Npm", d: "HTML" }, "b"),
    new Soru("JavaScript'i kodlarını hangi iki etiket arasına yazarız?", { a: "script", b: "Nuget", c: "Npm", d: "HTML" }, "a"),
    new Soru("Hangi komutla bir uyarı mesajı oluşturabilirsiniz?", { a: "Node.js", b: "Nuget", c: "alert", d: "HTML" }, "c"),
];

