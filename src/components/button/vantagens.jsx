import { useState } from "react";
import Button from "./button"
import ItemList from "./itensbutton";

function Vantagens() {
    const [showAdvantages, setShowAdvantages] = useState(false);
    const [showDisadvantages, setShowDisadvantages] = useState(false);

    const items = ['Amorosa', 'Carinhosa', 'Engraçada', 'Romântica', 'Atenciosa', 'Irei sempre te Priorizar', 'Você ira ter uma garota de programa', 'Irei te fazer bastante feliz', 'Minha companhia', 'Diversão garantida', 'Sempre estarei aqui para te apoiar', 'Irei ser seu porto seguro.'];

    const toggleListVantagens = () => {
        setShowAdvantages(!showAdvantages);
        setShowDisadvantages(false);
    }

    const toggleListDesvantagens = () => {
        setShowDisadvantages(!showDisadvantages);
        setShowAdvantages(false);
    }

    return (
        <div className="container">
            <h1 className="title">Oii meu amor</h1>
            <img className="heart-img" src="https://gifdb.com/images/high/sweet-love-funny-bears-kiss-mtg8vnspflyze1rk.gif" alt="imagem de um coração" />
            <h2 className="subtitle">Você tem esses dois botões para clicar, eles estão bem intuitivos, mas mesmo assim, irei explicar. Um deles contém as vantagens de você aceitar namorar comigo e o outro, a desvantagem. Espero que goste!</h2>

            <Button onShowAdvantages={toggleListVantagens} onShowDisadvantages={toggleListDesvantagens} />

            {showAdvantages && <ItemList items={items} />}

            {showDisadvantages && <p className="paragrafo">iiiiii qual foi, pode pular isso aqui, não existe essa desvantagem não, pode sair daqui, agora deu o caramba mesmo, nem sei porque clicou aqui</p>}
        </div>
    );
}

export default Vantagens;
