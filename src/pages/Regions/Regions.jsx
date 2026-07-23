import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import "./Regions.css"
import { REGIONS_DATA } from "./Regions_data"

function Regions() {

  const { t } = useTranslation()

  return (
    <div className="regions-page">

      <div className="regions-page__hero">

        <h1>{t("regions.title")}</h1>

        <p>{t("regions.subtitle")}</p>

      </div>

      <div className="regions-page__container">

        <div className="regions-grid">

          {REGIONS_DATA.map((region) => (

            <Link
              key={region.id}
              to={`/regions/${region.id}`}
              className="region-card"
            >

              <div className="region-card__emblem-wrapper">

                <img
                  src={region.img}
                  alt={t(region.name)}
                  className="region-card__emblem"
                />

              </div>

              <h3 className="region-card__title">
                {t(region.name)}
              </h3>

              <span className="region-card__btn">
                {t("regions.more")}
              </span>

            </Link>

          ))}

        </div>

      </div>

    </div>
  )
}

export default Regions