import React, {useState} from "react";
import './index.css';

function App() {

  const [stateItem, setStateItem] = useState({
    conta: 0,
    gorjeta: 0,
    qtdPessoas: 1
  });  
 

  const limpar = (itemAtual) => {

    if (!window.confirm(`Deseja Limpar mesmo?`))
    {
      return;
    }
    setStateItem({ 
      conta: 0,
      gorjeta: 0,
      qtdPessoas: 1
    });
  }
  
  let saida = 
  <>
    <div className="frame">
      <img src="Logo.png"></img>
      <div >
        <p>Valor total da Conta (R$)</p>
        <input type="text" 
          value={stateItem.conta}
          onChange={(event) => { setStateItem({...stateItem, conta: event.target.value})}}
          className="inputConta"
          />
        <p>Porcentagem da Gorjeta (%)</p>
        <input type="number" min="0" max="100"
          value={stateItem.gorjeta}
          onChange={(event2) => { setStateItem({...stateItem, gorjeta: event2.target.value})}}
          className="inputNumber"
        />
        <p>Quantidade de pessoas</p>
        <input type="number"
          value={stateItem.qtdPessoas}
          onChange={(event3) => { setStateItem({...stateItem, qtdPessoas: event3.target.value})}}
          className="inputNumber"
        />
        <br/>
        <button type="button" onClick={limpar} className="btnLimpar">Limpar</button>
        <div>{stateItem.msg}</div>
      </div>
      <hr/>
      <div >
        <p>Gorjeta R${(stateItem.conta*stateItem.gorjeta/100).toFixed(2)}</p>
        <p>Total a Pagar R${(stateItem.conta*(1 + stateItem.gorjeta/100)).toFixed(2)}</p>
        <p>Total a Pagar por pessoa R${((stateItem.conta*(1 + stateItem.gorjeta/100))/stateItem.qtdPessoas).toFixed(2)}</p>
      </div>
    </div>
  </>
  
  return (saida);
}

export default App;


