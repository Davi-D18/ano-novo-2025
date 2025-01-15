import React, { useRef } from 'react'
import Confetti from 'react-confetti'
import { useNavigate } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
import S from './style/message.module.scss'

export function Message() {
  const width = window.innerWidth
  const height = window.innerHeight
  const navigate = useNavigate()
  const nodeRef = useRef(null)

  const [showPage, setShowPage] = React.useState(true)

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setShowPage(false)
    }, 3000)

    return () => clearTimeout(timeout) // Limpa o timeout
  }, [])

  const handleExited = () => navigate('/inicio')

  return (
    <CSSTransition
      in={showPage}
      timeout={1000}
      classNames="page"
      unmountOnExit
      onExited={handleExited}
      nodeRef={nodeRef}
    >
      <div ref={nodeRef} className={S.new_year_page}>
        <Confetti
          width={width}
          height={height}
          numberOfPieces={150}
          opacity={0.7}
          recycle={true}
        />
        <div className={S.new_year_message}>
          <h1>🎉 Feliz Ano Novo 2025! 🎇</h1>
        </div>
      </div>
    </CSSTransition>
  )
}
