import React from 'react'

const RatingSlider = ({onClick, rating}) => {
  return (
    <div className='flex gap-3'>
      {[...Array(5)].map((_, i) => (
        <span key={i} onClick={() => onClick(i)} className='cursor-pointer text-xl text-rose-900'>
          {rating > i ? (
            <i className="fa-solid fa-star"></i>
          ) : (
            <i className="fa-regular fa-star"></i>
          )}
        </span>
      ))}
    </div>
  )
}

export default RatingSlider