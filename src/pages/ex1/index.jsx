import './index.scss'
import { useState } from 'react'

export default function Ex1() {
    const [contador, setContador] = useState("Emilly")
    const [titulo, setTitulo] = useState("Oi")
    const [titulo1, setTitulo1] = useState("OI")
    const [cor, setCor] = useState("#000")
    const [boolean, setBoolean] = useState(false)

    function trocarTitulo(e) {
        let novoValor = e.target.value
        setTitulo(novoValor)
    }

    function mudar(e) {
        let novoValor = e.target.value
        setContador(novoValor)
    }

    function mudartitulo1() {
        setTitulo1(titulo)
    }

    function clicar(e) {
       setBoolean(e.target.checked)
    }

    return (
        <div className="pai" style={{ backgroundColor: cor }}>

            <section className="página-principal pag">

                <h1>{contador}</h1>

                <input
                    type="text"
                    placeholder="Digite aqui"
                    onChange={mudar}
                />

                <br />

                <h1>{titulo1}</h1>

                <input
                    type="text"
                    placeholder="Digite aqui"
                    onChange={trocarTitulo}
                />

                <button onClick={mudartitulo1}>
                    Trocar
                </button>

                <h2>Escolha uma cor</h2>

                <input
                    type="color"
                    onChange={(e) => setCor(e.target.value)}
                />

                <h1>Você gosta de programar? {boolean ? "Sim" : "Não"}</h1>

            <input type='checkbox' checked={boolean} onChange={clicar} />
            </section>
        </div>
    )
}