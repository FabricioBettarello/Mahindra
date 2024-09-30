import Edoardo from '../assets/images/Edoardo.png'
import Nyck from '../assets/images/Nyck.png'

function Pilotos() {
    return (
        <>
            <section className="secundária" id="pilotos">
                <br />
                <div>
                    <h2>MAHINDRA RACING<br /><span>FORMULA E TEAM</span></h2>
                </div>
                <div className="pilotos">
                    <a href="/edoardo"><img src={Edoardo} alt="" /></a>
                    <a href="nyck"><img src={Nyck} alt="" /></a>
                </div>
                <br />
                <br />
            </section>
        </>
    )
}

export default Pilotos