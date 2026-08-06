import { useState, useEffect } from "react"
import { useTranslation } from "react-i18next"
import "./Tours.css"

import { TOUR_DATA } from "../../data/tours"
import { TOURS_IMAGES } from "./toursImgData"

function Tours() {
  const { t } = useTranslation()

  const [search, setSearch] = useState("")
  const [selectedImage, setSelectedImage] = useState(null)
  const [selectedTour, setSelectedTour] = useState(null)

  // Блокировка скролла страницы при открытых модалках + закрытие по Esc
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedImage(null)
        setSelectedTour(null)
      }
    }

    if (selectedImage || selectedTour) {
      document.body.style.overflow = "hidden"
      window.addEventListener("keydown", handleKeyDown)
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [selectedImage, selectedTour])

  const filteredTours = TOUR_DATA.filter((tour) => {
    const value = search.toLowerCase().trim()
    return (
      t(tour.title).toLowerCase().includes(value) ||
      t(tour.region).toLowerCase().includes(value) ||
      t(tour.description).toLowerCase().includes(value)
    )
  })

  return (
    <main className="tours-page">
      <section className="tours-hero">
        <h1>{t("tours.hero.title")}</h1>
        <p>{t("tours.hero.description")}</p>
      </section>

      <section className="tours-container">
        <div className="tour-search">
          <input
            type="text"
            placeholder={t("tours.search")}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="tours-grid">
          {filteredTours.length > 0 ? (
            filteredTours.map((tour) => (
              <article className="tour-card" key={tour.id}>
                <h2>{t(tour.title)}</h2>
                <p className="tour-card__description">{t(tour.description)}</p>

                <div className="tour-card__info">
                  <span>📍 {t(tour.region)}</span>
                  <span>⏳ {t(tour.duration)}</span>
                  <span>☀️ {t(tour.season)}</span>
                  <span>⚡ {t(tour.difficulty)}</span>
                  <span>💰 {t(tour.price)}</span>
                </div>

                <button
                  className="tour-card__button"
                  onClick={() => setSelectedTour(tour)}
                >
                  {t("tours.more")}
                </button>
              </article>
            ))
          ) : (
            <p className="not-found">{t("tours.notFound")}</p>
          )}
        </div>
      </section>

      <section className="gallery-section">
        <h2 className="gallery-title">{t("tours.gallery.title")}</h2>
        <p className="gallery-description">{t("tours.gallery.description")}</p>

        <div className="gallery-grid">
          {TOURS_IMAGES.map((photo) => (
            <div key={photo.id} className="gallery-card">
              <img
                src={photo.image}
                alt={photo.title || "Tour gallery photo"}
                className="gallery-image"
                loading="lazy"
                decoding="async"
                onClick={() => setSelectedImage(photo.image)}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Модальное окно с картинкой */}
      {selectedImage && (
        <div className="image-modal" onClick={() => setSelectedImage(null)}>
          <img
            src={selectedImage}
            alt="Preview"
            className="image-modal__img"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="image-modal__close"
            onClick={() => setSelectedImage(null)}
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>
      )}

      {/* Модальное окно тура */}
      {selectedTour && (
        <div className="tour-modal" onClick={() => setSelectedTour(null)}>
          <div
            className="tour-modal__content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="tour-modal__close"
              onClick={() => setSelectedTour(null)}
              aria-label="Close modal"
            >
              ✕
            </button>

            <h2>{t(selectedTour.title)}</h2>
            <p>{t(selectedTour.fullDescription)}</p>

            <div className="tour-modal__info">
              <span>⏳ {t(selectedTour.duration)}</span>
              <span>☀️ {t(selectedTour.season)}</span>
              <span>⚡ {t(selectedTour.difficulty)}</span>
              <span>💰 {t(selectedTour.price)}</span>
            </div>

            <h3 className="tour-modal__program-title">{t("tours.program")}</h3>

            {selectedTour.program?.map((day, index) => (
              <div key={index} className="tour-day">
                <h4>
                  {t(day.day)}: {t(day.title)}
                </h4>
                <p>{t(day.text)}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </main>
  )
}

export default Tours