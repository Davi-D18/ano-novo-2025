import '@styles/transition.scss'
import PropTypes from 'prop-types'
import { useRef } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

export function AnimatedWrapper({
  enterAnimation = true,
  exitAnimation = true
}) {
  const location = useLocation()
  const nodeRef = useRef(null) // Ref para a transição

  // Lógica para animações de entrada e saída
  const animationClassNames = {
    enter: enterAnimation ? 'page-enter' : '',
    enterActive: enterAnimation ? 'page-enter-active' : '',
    exit: exitAnimation ? 'page-exit' : '',
    exitActive: exitAnimation ? 'page-exit-active' : ''
  }

  return (
    <TransitionGroup component={null}>
      <CSSTransition
        key={location.pathname}
        nodeRef={nodeRef}
        timeout={1000} // Tempo da animação
        classNames={animationClassNames} // Define as classes para animações
        unmountOnExit
      >
        <div ref={nodeRef} className="page-wrapper">
          <Outlet />
        </div>
      </CSSTransition>
    </TransitionGroup>
  )
}

AnimatedWrapper.propTypes = {
  enterAnimation: PropTypes.bool,
  exitAnimation: PropTypes.bool
}
