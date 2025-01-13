import S from './style/footer.module.scss'

import facebook from '@assets/icons/logoFacebook.png'
import instagram from '@assets/icons/logoInstagram.png'
import linkedin from '@assets/icons/logoLinkedin.png'

export function Footer() {
  return (
    <footer>
      <section className={S.container_lista_social}>
        <ul className={S.lista_social}>
          <li>
            <img src={linkedin} alt="Ícone Linkedin" />
          </li>
          <li>
            <img src={instagram} alt="Ícone Instagram" />
          </li>
          <li>
            <img src={facebook} alt="Ícone Facebook" />
          </li>
        </ul>
      </section>
    </footer>
  )
}
