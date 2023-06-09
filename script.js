// OOP = Nesne tabanlı programlama
// Object

// Sınıf, Constructor => nesne * 30
// ES5, ES6, ES7

function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;
}

Soru.prototype.cevapKontrolEt = function (cevap) {
    return cevap === this.dogruCevap
}

let sorular = [
    new Soru("Hangisi javascript paket yönetim uygulamasıdır?", { a: "Node.js", b: "Typescript", c: "Npm" }, "c"),
    new Soru("Hangisi .net paket yönetim uygulamasıdır?", { a: "Node.js", b: "Nuget", c: "Npm" }, "b"),
];

function Quiz(sorular) {
    this.sorular = sorular;
    this.soruIndex = 0;
}

Quiz.prototype.soruGetir = function () {
    return this.sorular[this.soruIndex];
}

const quiz = new Quiz(sorular);

document.querySelector(".btn-start").addEventListener("click", function () {
    if (quiz.sorular.lenght != quiz.soruIndex) {
        document.querySelector(".quiz-box").classList.add("active");
        console.log(quiz.soruGetir());
        quiz.soruIndex += 1;
    } else {
        console.log("Quiz bitti!")
    }
})

