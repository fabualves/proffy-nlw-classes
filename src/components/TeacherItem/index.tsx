import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css'

function TeacherItem() {
    return(

        <article className="teacher-item">
                    <header>
                        <img src="https://i.pinimg.com/originals/bf/00/fe/bf00fe2f6cbceba9a72a2b42032dcdd4.jpg" alt="Captão Caverna"/>
                        <div>
                            <strong>Capitão Caverna</strong>
                            <span>Segurança da Informação</span>
                        </div>
                    </header>

                    <p>
                    Mussum Ipsum, cacilds vidis litro abertis. Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis. Quem num gosta di mé, boa gentis num é. Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per.
                    <br /> <br/>
                    Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo! Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Aenean aliquam molestie leo, vitae iaculis nisl.
                    </p>

                    <footer>
                        <p>
                            Preço/hora
                            <strong>R$ 0,10</strong>
                        </p>
                        <button type="button">
                            <img src={whatsappIcon} alt="Whatsapp"/>
                            Entrar em Contato
                        </button>
                    </footer>
                </article>
    )
}

export default TeacherItem;