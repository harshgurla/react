import { useRef, useState } from "react";

const Carousel = () => {

    const [currentIndex, setCurrentIndex] = useState(0)
    const catRef = useRef(0)

    const setupCatList = () => {
        const catList = [];
       for (let i = 0; i < 10; i++) {
        catList.push("https://loremflickr.com/320/240/cat?lock=&quot" + i);
    }
     return catList;

    }

     const handleLeftClick = () => {
        setCurrentIndex((index) => index === 0 ? catRef.current.length - 1 : index - 1
    )
    }

    const handelRightClick = () => {
        setCurrentIndex((index) => index ===  catRef.current.length - 1 ? 0 : index - 1
    )
    }

    return (
        <div className="image-container">
        <button onClick={ handleLeftClick }>Left</button>
         <div className="images">
            {
                setupCatList().map((image, index) => (
                    <img key={index} src={ image }  />
                ))
            }
         </div>
        <button onClick={ handelRightClick }>Right</button>
       
        </div>
    )
}

export default Carousel;