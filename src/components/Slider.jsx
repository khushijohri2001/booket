import React, { useEffect, useState } from 'react'
import sliderProducts from '../utils/slider-products';

const Slider = () => {
    const [sliderProductDetail] = useState(sliderProducts);
    const [index, setIndex] = useState(0);
  
    useEffect(() => {
      const lastIndex = sliderProductDetail.length - 1;
      if (index < 0) {
        setIndex(lastIndex);
      }
      if (index > lastIndex) {
        setIndex(0);
      }
    }, [index, sliderProductDetail]);
  
    useEffect(() => {
      let slider = setInterval(() => {
        setIndex(index + 1);
      }, 5000);
      return () => {
        clearInterval(slider);
      };
    }, [index]);
  
    return (
      <section className="bg-white py-28 mx-auto z-10">
        <div className=" mt-12 mx-auto mb-0 h-[90vh] max-w-[90vw] text-center relative flex overflow-hidden max-md:h-[450px] max-sm:h-[250px]">

          {sliderProductDetail.map((item, indexProduct) => {
            
            const { id, image, name } = item;
            //next slide
            let position = "translate-x-full";

            //current slide
            if (indexProduct === index) {
              position = "opacity-100 translate-x-0";
            }

            //prev slide
            if (
              indexProduct === index - 1 ||
              (index === 0 && indexProduct === sliderProducts.length - 1)
            ) {
              position = "-translate-x-full";
            }

            return (
              <article className={`${position} absolute top-0 left-0 w-full h-full transition ease-linear delay-300 opacity-1 `} key={id}>
                <img src={image} alt={name} className="mb-4 mx-auto w-3/4 h-4/5 object-cover border-4 border-rose-300 shadow-md z-10" />
              </article>
            );
          })}

          {/* Prev Button */}
          <button className="absolute top-1/2 my-auto mx-0 translate-y-[-50%] bg-rose-300 text-2xl w-8 h-8 grid place-items-center border-transparent rounded cursor-pointer transition ease-in-out delay-150 text-rose-700 left-0 hover:text-white hover:bg-rose-700 " onClick={() => setIndex(index - 1)}>
          <i className="fa-solid fa-caret-left "></i>
          </button>

          {/* Next Button */}
          <button className="absolute top-1/2 my-auto mx-0 translate-y-[-50%] bg-rose-300 text-2xl w-8 h-8 grid place-items-center border-transparent rounded cursor-pointer transition ease-in-out delay-150 text-rose-700 right-0 hover:text-white hover:bg-rose-700 " onClick={() => setIndex(index + 1)}>
          <i className="fa-solid fa-caret-right"></i>
          </button>
        </div>
      </section>
    );
}

export default Slider