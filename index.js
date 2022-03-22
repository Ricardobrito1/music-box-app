var container = document.getElementById("app");

function Votacao(props) {
    const [numero, setNumero] = React.useState(0);
    function votar() {
        
            setNumero(numero +1);
            console.log(numero);
        
    }
    return(
        <React.Fragment>
            <h1>{props.nome}</h1>
            <h2>{numero}</h2>
            <button onClick={votar}>Votar</button>
        </React.Fragment>
    )
}
function App() {
    return(
        <React.Fragment>
            <Votacao nome = "BK" />
            <Votacao nome = "Mc Donalds" />
            <Votacao nome = "Jeronimo" />
        </React.Fragment>
    )
}

ReactDOM.render(App(), container);