import { useState, useEffect } from "react"
import "./Header.css"
import logo from "../../assets/icons/logo.png"

function Header() {
  const [open, setOpen] = useState(false)

  const closeMenu = () => setOpen(false)

  // Блокируем скролл страницы при открытом меню
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => { document.body.style.overflow = "" }
  }, [open])

  // Выносим SVG в переменные, чтобы не дублировать код в разметке
  const telegramIcon = (
    <svg viewBox="0 0 24 24" className="header__btn-svg">
      <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-1-.65-.35-1 .22-1.62.15-.15 2.7-2.46 2.75-2.67.01-.03.01-.14-.06-.2-.07-.06-.17-.04-.25-.02-.11.02-1.83 1.16-5.16 3.42-.49.34-.93.51-1.33.5-.44-.01-1.29-.25-1.92-.45-.77-.25-1.39-.39-1.34-.83.03-.23.35-.46.97-.71 3.82-1.66 6.37-2.75 7.66-3.29 3.65-1.53 4.41-1.8 4.9-.18.1.2.11.43.11.66z"/>
    </svg>
  )

  const whatsappIcon = (
    <svg viewBox="0 0 24 24" className="header__btn-svg">
      <path fill="currentColor" d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.817 9.817 0 0 0 12.04 2zm5.79 13.96c-.24.67-1.39 1.3-1.92 1.38-.49.07-1.12.09-3.21-.77-2.67-1.1-4.38-3.83-4.51-4.01-.13-.18-1.09-1.45-1.09-2.76 0-1.31.68-1.96.93-2.22.25-.26.54-.33.72-.33.18 0 .36.01.52.02.17.01.4.01.61.52.21.52.72 1.76.79 1.89.06.13.11.29.02.47-.08.18-.13.29-.26.44-.13.15-.28.34-.4.49-.13.15-.27.31-.11.59.16.28.71 1.17 1.53 1.9.1.09.2.19.31.28.91.77 1.68 1.01 1.96 1.15.28.14.44.12.61-.08.17-.19.73-.85.93-1.14.2-.29.4-.24.67-.14.27.1 1.73.82 2.03.97.3.15.5.22.57.35.07.12.07.72-.17 1.39z"/>
    </svg>
  )

  return (
    <header className="header">
      <div className="header__inner">
        
        {/* LOGO */}
        <a href="/" className="logo" onClick={closeMenu}>
          <img src={logo} alt="logo" />
        </a>

        {/* DESKTOP NAV */}
        <nav className="nav">
          <a href="/" className="nav__link">Главная</a>
          <a href="/tours" className="nav__link">Туры</a>
          <a href="/regions" className="nav__link">Регионы</a>
        </nav>

        {/* SOCIAL BUTTONS (DESKTOP) */}
        <div className="header__socials header__socials--desktop">
          <a href="https://t.me/+79818129745" target="_blank" rel="noopener noreferrer" className="header__btn-circle header__btn-circle--telegram" aria-label="Telegram">
            {telegramIcon}
          </a>
          <a href="https://wa.me/996772112111" target="_blank" rel="noopener noreferrer" className="header__btn-circle header__btn-circle--whatsapp" aria-label="WhatsApp">
            {whatsappIcon}
          </a>
        </div>

        {/* BURGER BUTTON */}
        <button
          className={`burger ${open ? "burger--active" : ""}`}
          onClick={() => setOpen(!open)}
          aria-label="Открыть меню"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* OVERLAY */}
        <div
          className={`overlay ${open ? "overlay--show" : ""}`}
          onClick={closeMenu}
        />

        {/* MOBILE SIDE MENU */}
        <div className={`sideMenu ${open ? "sideMenu--open" : ""}`}>
          <nav className="sideMenu__nav">
            <a href="/" onClick={closeMenu}>Главная</a>
            <a href="/tours" onClick={closeMenu}>Туры</a>
            <a href="/regions" onClick={closeMenu}>Регионы</a>
            
            {/* SOCIAL BUTTONS (MOBILE) */}
            <div className="header__socials header__socials--mobile">
              <a href="https://t.me/+79818129745" target="_blank" rel="noopener noreferrer" className="header__btn-circle header__btn-circle--telegram" aria-label="Telegram">
                {telegramIcon}
              </a>
              <a href="https://wa.me/996772112111" target="_blank" rel="noopener noreferrer" className="header__btn-circle header__btn-circle--whatsapp" aria-label="WhatsApp">
                {whatsappIcon}
              </a>
            </div>
          </nav>
        </div>

      </div>
    </header>
  )
}

export default Header