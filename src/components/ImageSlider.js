import { useState } from 'react'
import React from 'react'
import { SliderData } from '../SliderData'

const ImageSlider = () => {
    const [current, setCurrent] = useState(0)

    return (
        <>
            {SliderData.map((slide, index) => {
                return (
                    <img src={slide.image} />
                )
            })}
        </>
    )
}

export default ImageSlider
