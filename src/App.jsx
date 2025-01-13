import S from './styles/app.module.scss'

import { Header } from './components/Header/Header'
import { Footer } from './components/footer/footer'

import imagemAnoNovo from '@assets/imgs/imagemAnoNovo.png'

import forma1 from '@assets/imgs/forma-1.png'
import forma2 from '@assets/imgs/forma-2.png'
import forma3 from '@assets/imgs/forma-3.png'
import forma4 from '@assets/imgs/forma-4.png'

export function App() {
  return (
    <>
      <main>
        <div className={S.formas_container}>
          <img
            className={S.formas_container__top_left}
            src={forma1}
            alt="forma 1"
          />

          <img
            className={S.formas_container__top_right}
            src={forma2}
            alt="forma 2"
          />

          <img
            className={S.formas_container__bottom_left}
            src={forma3}
            alt="forma 3"
          />

          <img
            className={S.formas_container__bottom_right}
            src={forma4}
            alt="forma 4"
          />
        </div>

        <Header />

        <section className={S.ano_novo}>
          <div className={S.ano_novo__imagem}>
            <img src={imagemAnoNovo} alt="Ano novo 2025" />
          </div>

          <section className={S.mensagem}>
            <h1>boas festas!!!</h1>

            <h2>felicidades!!!</h2>

            <div className={S.mensagem__poema}>
              <p>
                Em 2025, vamos juntos programar,Com mais código limpo e muito
                para alcançar! Que o ano novo traga só funções de felicidade, E
                que a paz seja nossa variável de realidade! Sem bugs, sem
                falhas, com muito amor, Vamos debugar os problemas com ardor!
                Que a vida seja sempre o output de alegria, o Vai Na Web te
                deseja um Ano Novo, que seja pura harmonia
              </p>
            </div>
          </section>
        </section>

        <Footer />
      </main>
    </>
  )
}
