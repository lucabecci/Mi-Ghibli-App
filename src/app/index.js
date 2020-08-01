require ('./main.css')
const { Api } = require ('./GetApi')
const { Ui } =  require ('./Ui')
const api = new Api();
const ui = new Ui()
const getInfo = async()=>{
    const data = await api.getData()
    ui.changeData(data)
}
getInfo()
ui.darkMode();
