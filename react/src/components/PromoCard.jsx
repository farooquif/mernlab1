import React from 'react';
import promoData from '../assets/promo.json'; // Corrected path

const PromoCard = () => {
    return (
        <div className="card-container d-flex flex-row justify-content-start" style={{ gap: "20px", padding: "20px" }}>
            {promoData.map((promo) => (
                <div key={promo.id} className="card bg-light" style={{ minWidth: '300px', maxWidth: '45%' }}>
                    <div className="card-body">
                        <h5 className="card-title">{promo.feature}</h5>
                        <p className="card-text">{promo.benefit}</p>
                        <p className="card-text">Target Audience: {promo.target_audience}</p>
                        <a href="#" className="card-link">Click to buy!</a>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PromoCard;
