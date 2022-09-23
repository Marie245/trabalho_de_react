import "./style.css"

export const Footer = () => {
    return (
        <div className="contato">

            <h1>ENTRE EM CONTATO CONOSCO</h1>
            <p> You gave me the best of me So you'll give you the best of you

            </p>


            <div className='form'>
                <form id='formulario'>
                    <fieldset>
                        <label>
                            <span> Nome </span>
                            <input id='botao' type="text" />
                        </label>
                        <label>
                            <span> Email</span>
                            <input id='botao' type="text" />
                        </label>
                        <br />
                        <span> Mensagaem</span>
                        <br />
                        <textarea name="msg" id="msg"> </textarea>
                        <br />
                        <button type="button">Enviar</button>
                    </fieldset>
                </form>
            </div>


        </div>

    )

}

