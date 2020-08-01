export class Ui {
    constructor (){
        this.cardContainer = document.getElementById('card-container'),
        this.button = document.getElementById('dark-mode'),
        this.body = document.body
    }
    changeData(data){
        data.map( movie=> (
            this.cardContainer.insertAdjacentHTML('beforeend', `<div class="card">
            <div class="card-image">
                <img src="../src/media/card-image.png" alt="">
            </div>
            <div class="card-header">
                <h3>${movie.title}</h3>
            </div>
            <div class="card-container">
                <p>Fecha de salida: <span>${movie.release_date}</span></p>
                <p>Productor/a <span>${movie.producer}</span></p>
                <p>Director/a <span>${movie.director}</span></p>
            </div>
        </div>`)
        ))
    }
    darkMode(){
        this.button.addEventListener('click', ()=>{
        this.body.classList.toggle("dark");
        })
    }
}