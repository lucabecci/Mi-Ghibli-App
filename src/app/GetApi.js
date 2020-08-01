export class Api{
    constructor(){
        this.url = 'https://ghibliapi.herokuapp.com/films'
    }
    async getData() {
        const resp = await fetch(this.url);
        const data = await resp.json()
        return data
    }
}