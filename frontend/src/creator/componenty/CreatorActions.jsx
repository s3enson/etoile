import heartIcon from "../../assets/ulubione.png";
import cartIcon from "../../assets/cart.png";

import "./CreatorActions.css";

function CreatorActions() {
	return (
		<div className="creator-buttons-row">
			<button type="button" className="creator-favorite-button">
				<img src={heartIcon} alt="Ulubione" className="creator-favorite-icon" />

				<span className="creator-favorite-text">Ulubione</span>
			</button>

			<button type="button" className="creator-cart-button">
				<img src={cartIcon} alt="Koszyk" className="creator-cart-icon" />
				<span className="creator-cart-text">Dodaj do koszyka</span>
			</button>
		</div>
	);
}

export default CreatorActions;
