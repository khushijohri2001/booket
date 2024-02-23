import React from 'react'

const RatingSlider = ({onClick, rating}) => {
  return (
    <div className='flex gap-3'>
      {[...Array(5)].map((_, i) => (
        <span key={i} onClick={() => onClick(i)} className='cursor-pointer text-xl text-rose-900'>
          {rating > i ? (
            <i class="fa-solid fa-star"></i>
          ) : (
            <i class="fa-regular fa-star"></i>
          )}
        </span>
      ))}
    </div>
  )
}

export default RatingSlider