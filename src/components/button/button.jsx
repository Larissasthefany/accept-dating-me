const Button = ({ onShowAdvantages, onShowDisadvantages }) => {
    return (
        <div>
            <button className="btn" onClick={onShowAdvantages}>Mostrar Vantagens</button>
            <button className="btn" onClick={onShowDisadvantages}>Mostrar Desvantagem</button>
        </div>
    );
}

export default Button;
