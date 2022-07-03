import { useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../redux/charSlice";
import "./CharCard.css";
import FavoriteIcon from "../FavoriteIcon";

const CharCard = ({ id, image, name, gender, status }) => {
  const dispatch = useDispatch();
  const [fillOpacityIcon, setFillOpacityIcon] = useState(0);

  return (
    <div className="container">
      <img className="img" src={image} alt={name} />
      <div className="info">
        <p className="description">
          {gender} | {status}
        </p>
        <button
          className="btn"
          onClick={() => {
            if (fillOpacityIcon) setFillOpacityIcon(0);
            else setFillOpacityIcon(1);
            dispatch(add({ id }));
          }}
        >
          <FavoriteIcon fillOpacity={fillOpacityIcon} />
        </button>
      </div>

      <h2 className="title">{name}</h2>
    </div>
  );
};

export default CharCard;
