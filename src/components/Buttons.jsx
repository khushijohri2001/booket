import { Link } from "react-router-dom"

export const PrimaryButton = ({path, label, center}) => {
    return(
        <Link to={path}>
        <button className={`${center && 'mx-auto'} flex items-center gap-3 px-4 py-2 text-lg  border-2 border-black cursor-pointer bg-rose-100 hover:bg-white bg-transparent`}>
          {label} <i className="fa-solid fa-arrow-right"></i>
        </button>
      </Link>
    )
}

export const NavlinkButton = ({btnInfo}) => {
    const {path, label} = btnInfo;

    return(
        <Link to={path}>
        <div className="my-0 mx-2 hover:scale-105">
          <button className=" font-julius font-extrabold box-border">
            {label}
          </button>
        </div>
        </Link>
    )
}

