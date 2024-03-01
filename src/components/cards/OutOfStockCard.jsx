import React from "react";
import { Link } from "react-router-dom";
import { ACTIVE_LINK_HANDLER } from "../../redux/activeLinkSlice";
import { useDispatch } from "react-redux";

const OutOfStockCard = ({ productInfo }) => {
  const { id, image, name} = productInfo;
  const dispatch = useDispatch();

  return (
    <Link to={id} onClick={() => dispatch(ACTIVE_LINK_HANDLER(id))}>
    <div
      className="flex flex-col w-64 h-auto relative  font-serif p-4 rounded-sm opacity-50 font-bold hover:bg-white "
      key={id}
    >
      <img
        src={image}
        alt={name}
        className="w-56 h-56 object-cover shadow-sm"
      />

      <p className="pt-3 pb-2 text-sm">{name}</p>

      <div className="flex items-center justify-between">
        <p className="font-bold z-10 m-auto text-lg pt-4p">Out of Stock</p>
      </div>
    </div>
    </Link>
  );
};

export default OutOfStockCard;
