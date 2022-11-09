/* Chamada da API */
const parametros = {
    method: 'GET',
    mode: 'cors',
    cache: 'default'
}
const url = `https://estagio.geopostenergy.com/WorldCup/GetAllTeams`;

async function getContent() {
    try {
      const response = await fetch(url, {headers:new Headers({ 'git-user':'JoseLourencoCosta'})}, parametros);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }




/* imprimir os times de forma aleatoria */



async function timesAleatorios(){
    const response = await getContent()
    const times = response.Result
    const nomeEquipes = times.map(equipe => equipe.Name)
    
    for(let i = times.length -1; i >= 0; i--) {
        
        let escolhaAleatoria = Math.floor(Math.random() * i);
        let selecao = nomeEquipes[escolhaAleatoria];
        document.getElementById((i+1).toString()).value = selecao;

        nomeEquipes.splice(escolhaAleatoria, 1)
    }
}

timesAleatorios()


function timesDasOitavas() {

    const timesEscolhidosA = document.getElementById("1")
    console.log(timesEscolhidosA)
   /* const value = timesEscolhidosA.value
    console.log(value)*/


}

timesDasOitavas()