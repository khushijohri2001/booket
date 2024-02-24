import { Link } from "react-router-dom";

export const PrimaryButton = ({ path, label, center }) => {
  return (
    <Link to={path}>
      <button
        className={`${
          center && "mx-auto"
        } flex items-center gap-3 px-4 py-2 text-lg  border-2 border-black cursor-pointer bg-rose-100 hover:bg-white bg-transparent`}
      >
        {label} <i className="fa-solid fa-arrow-right"></i>
      </button>
    </Link>
  );
};

export const SecondaryButton = ({ path, label, center, onClick }) => {
  return (
    <Link to={path}>
      <button
      onClick={onClick}
        className={`${
          center && "mx-auto"
        } flex items-center px-4 py-2 text-lg cursor-pointer bg-rose-100 hover:bg-white bg-transparent`}
      >
        {label}
      </button>
    </Link>
  )
}

export const NavlinkButton = ({ btnInfo }) => {
  const { path, label } = btnInfo;

  return (
    <Link to={path}>
      <div className="my-0 mx-2 hover:scale-105">
        <button className=" font-julius font-extrabold box-border">
          {label}
        </button>
      </div>
    </Link>
  );
};

export const AddToCartButton = ({ onClick }) => {
  return (
    <>
      <button
        onClick={onClick}
        className="border border-rose-200 text-xs px-2 py-1 bg-rose-50 transition-all delay-150 hover:bg-rose-200 hover:text-white"
      >
        Add to cart
      </button>
    </>
  );
};

export const RemoveFromCartButton = ({ onClick }) => {
  return (
    <>
      <button onClick={onClick} className="border border-rose-900 text-xs px-2 py-1 bg-rose-900 text-rose-50 transition-all delay-150 hover:bg-rose-200 hover:text-rose-900">
        Remove from Cart
      </button>
    </>
  );
};

export const WishlistButton = ({ onClick }) => {
  return (
    <>
      <button className="text-rose-300 hover:scale-110 transition-all delay-150" onClick={onClick}>
        <i class="fa-regular fa-heart"></i>
      </button>
    </>
  );
};
export const RemoveFromWishlistButton = ({ onClick }) => {
  return (
    <>
      <button
        className="remove_from_wishlist-btn button-design-circle"
        onClick={onClick}
      >
        <i class="fa-solid fa-heart text-rose-300"></i>
      </button>
    </>
  );
};

export const ClearButton = ({onClick}) => {
  return (
    <button
        className="rounded text-center text-sm bg-rose-50 p-2 w-full hover:scale-105"
        onClick={onClick}
      >
        Clear Filters
      </button>
  )
}


 