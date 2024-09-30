import Carro from '../assets/images/carro1.png'

const Modelos = () => {
    return (
        <>
            <section>
                <br />
                <br />
                <br />
                <br />
                <div class="nossos_carros">
                    <h2>Escolha seu carro:</h2>
                    <p>Venha saber mais sobre os carros da Mahindra!</p>
                    <img src={Carro} alt="Imagem do Carro"/>
                    <button class="selecao" onclick="selectCar()">Próximo Passo</button>
                </div>
                <br />
                <br />
                <br />
                <br />
            </section>
        </>
    )
}

export default Modelos