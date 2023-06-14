function UI() {
    this.btn_start = document.querySelector(".btn-start"),
        this.btn_next = document.querySelector(".next-btn"),
        this.quiz_box = document.querySelector(".quiz-box"),
        this.option_list = document.querySelector(".option-list"),
        this.correctIcon = '<div class="icon"><i class="fas fa-check"></i></div>',
        this.incorrectIcon = '<div class="icon"><i class="fas fa-times"></i></div>'
}

UI.prototype.soruGoster = function (soru) {
    let question = `<span>${soru.soruMetni}</span>`;
    let options = "";

    for (let cevap in soru.cevapSecenekleri) {
        options +=
            `
            <div class="option">
                <span><b>${cevap}</b>: ${soru.cevapSecenekleri[cevap]}</span>
            </div>
        `;
    }

    document.querySelector(".question-text").innerHTML = question;
    this.option_list.innerHTML = options;

    const option = this.option_list.querySelectorAll(".option");

    for (let opt of option) {
        opt.setAttribute("onclick", "optionSelected(this)")
    }
}

UI.prototype.soruSayisiniGoster = function (soruSirasi) {
    let tag = `<span class="badge bg-warning"> ${soruSirasi} / ${sorular.length} </span>`;
    document.querySelector(".quiz-box .question-index").innerHTML = tag;
}