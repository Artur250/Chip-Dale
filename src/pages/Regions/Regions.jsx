import { Link } from "react-router-dom"
import "./Regions.css" 
import { REGIONS_DATA } from "./Regions_data"


function Regions() {
  return (
    <div className="regions-page">
      <div className="regions-page__hero">
        <h1>Области Кыргызстана</h1>
        <p>Выберите интересующий регион, чтобы узнать больше о его турах и достопримечательностях</p>
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
                  alt={`Герб ${region.name}`} 
                  className="region-card__emblem" 
                />
              </div>
              <h3 className="region-card__title">{region.name}</h3>
              <span className="region-card__btn">Подробнее</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Regions