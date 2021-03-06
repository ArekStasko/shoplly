import React from "react";
import { RegisterAdressData } from "../data/login_slides";

const PlacePicker = props => {
  return (
    <div className="placePicker">
      <div>
        <label htmlFor="register_adress-province">Choose province</label>
        <select
          onChange={(e) => props.selectProvince(e)}
          id="register_adress-province"
        >
          {Object.entries(RegisterAdressData[0]).map(item => (
            <option key={item[0]} value={item[0]}>
              {item[0]}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="register_adress-city">Choose city</label>
        <select onChange={(e) => props.selectCity(e)} id="register_adress-city">
          {RegisterAdressData[0][
            props.placeData.place === ""
              ? "Province"
              : props.placeData.place
          ].map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default PlacePicker;
