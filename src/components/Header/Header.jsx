import S from './style/header.module.scss'

import logo from '@assets/logo/logo.png'

export function Header() {
  return (
    <header>
      <div className={S.container_header}>
        <section className={S.logo}>
          <img src={logo} alt="logo do site" />
        </section>

        <section className={S.container_nav_list}>
          <ul className={S.nav_list}>
            <li>
              <a href="#">Paz</a>
            </li>
            <li>
              <a href="#">Saúde</a>
            </li>
            <li>
              <a href="#">Alegria</a>
            </li>
          </ul>
        </section>
      </div>
    </header>
  )
}
