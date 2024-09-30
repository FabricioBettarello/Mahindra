import MahindraCar from '../assets/images/Mahindra-car.png';

function Carros() {
    return (
        <>
            <section className="principal" id="carros">
                <div>
                    <h2>PERSONALIZE SEU CARRO,<br/>CORRA CONTRA NÓS,<br/>NÓS ESTAMOS ESPERANDO!</h2>
                    <p>Os carros de Fórmula E da Mahindra Racing são verdadeiros titãs da tecnologia, combinando velocidade vertiginosa com sustentabilidade. Eles são a personificação da paixão da Mahindra Racing.</p>
                    <br/>
                    <a href="/modelos">Conheça agora!</a>
                </div>
                <img src={MahindraCar} alt=""/>
            </section>
            <hr className="divisoria"></hr>
        </>
    )
}

export default Carros
