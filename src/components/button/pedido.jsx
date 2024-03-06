import { useState } from "react";

function Pedido() {
    // Definindo as imagens iniciais
    const imagemInicial = "https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif";
    const imagemAceitou = "https://gifdb.com/images/high/cute-love-kisses-for-you-uujbuokzyop19e4w.gif";
    const imagemNaoAceitou = "https://gifdb.com/images/high/broken-heart-bear-spnkpc3mm2l68hx7.webp";

    // Definindo os estados
    const [imagem, setImagem] = useState(imagemInicial);

    // Função para lidar com o clique no botão "Sim"
    const handleClickYes = () => {
        setImagem(imagemAceitou);
    }

    // Função para lidar com o clique no botão "Não"
    const handleClickNo = () => {
        setImagem(imagemNaoAceitou);
    }

    return (
        <div>
            <h2 className="text-pedido">Você Aceita Namorar Cmg?🥰 </h2>
            <div>
                <img src={imagem} alt="ursinho" />
            </div>

            <div>
                {!imagem.includes("roses") && (
                    <p className="text">{imagem.includes("kisses") ? 'hihihi obg por ter aceitado meu amor❤️' : 'Sempre soube que você não queria namorar comigo. 💔'}</p>
                )}
            </div>

            <div>
                <button className="yes" onClick={handleClickYes}>Sim</button>
                <button className="no" onClick={handleClickNo}>Não</button>
            </div>
        </div>
    )
}

export default Pedido;
