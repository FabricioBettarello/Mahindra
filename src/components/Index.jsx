import Tigrinho from '../assets/images/tigrinho.png';

function Index() {
    return (
        <>
            <section className="principal">
                <div>
                    <h1>CONHEÇA NOSSO<br />NOVO MASCOTE!</h1>
                    <p>O novo mascote tigre da Mahindra Racing simboliza força, agilidade e paixão pela excelência. Ele representa a determinação da equipe e sua busca constante por velocidade e desempenho superior. Ele é mais do que um mascote, é o coração rugindo da Mahindra Racing.</p>
                    <br />
                    <a href="#">Comece agora!</a>
                </div>
                <img src={Tigrinho} alt="" />
            </section>
            <hr className="divisoria"></hr>
        </>
    )
}

export default Index
