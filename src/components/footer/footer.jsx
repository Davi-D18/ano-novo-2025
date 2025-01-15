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
            <a
              href="https://www.linkedin.com/company/vainaweb/"
              target="_blank"
            >
              <img src={linkedin} alt="Ícone Linkedin" />
            </a>
          </li>

          <li>
            <a
              href="https://www.instagram.com/vainaweb?igsh=MWV1MHB3YTY2M3c4Ng=="
              target="_blank"
            >
              <img src={instagram} alt="Ícone Instagram" />
            </a>
          </li>

          <li>
            <a href="https://www.facebook.com/vainaweb/" target="_blank">
              <img src={facebook} alt="Ícone Facebook" />
            </a>
          </li>
        </ul>
      </section>
    </footer>
  )
}
