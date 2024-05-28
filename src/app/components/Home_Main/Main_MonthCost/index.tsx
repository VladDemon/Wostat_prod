import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function MainCost() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                }
            }
        ]
    };
  return (
    <div className="maincost">
        <div className="container">
            <div className="maincost-content">
                <h1 className='maincost-content__text'>Cost per month of access</h1>
                <div className="cost-blocks">
                    <div className="block cost-start">
                        <div className="cost-panel bg-white">
                            <h1>start</h1>
                            <div className="cost flex">
                                <div className="cost-dol__container">
                                    <span className='cost-dol'>$</span>
                                </div>
                                <span className='cost-count'>0</span>
                            </div>
                        </div>
                        <div className="receive-panel">
                            <h1><img src="/images/main/ok.svg" alt="" /></h1>
                            <button>Receive</button>
                        </div>
                    </div>
                    <div className="block cost-start">
                        <div className="cost-panel bg-slate-800">
                            <h1 className='text-white'>Average</h1>
                            <div className="cost flex">
                                <div className="cost-dol__container">
                                    <span className='cost-dol text-white'>$</span>
                                </div>
                                <span className='cost-count text-white'>69</span>
                            </div>
                        </div>
                        <div className="receive-panel">
                            <h1><img src="/images/main/ok.svg" alt="" /></h1>
                            <button>Receive</button>
                        </div>
                    </div>
                    <div className="block cost-start">
                        <div className="cost-panel bg-white">
                            <h1>Advanced</h1>
                            <div className="cost flex">
                                <div className="cost-dol__container">
                                    <span className='cost-dol'>$</span>
                                </div>
                                <span className='cost-count'>609</span>
                            </div>
                        </div>
                        <div className="receive-panel">
                            <h1><img src="/images/main/ok.svg" alt="" /></h1>
                            <button>Receive</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="maincost-slider">
                <div className="cost-blocks">
                    <Slider {...settings}>
                        <div className="block cost-start">
                            <div className="cost-panel bg-white">
                                <h1>start</h1>
                                <div className="cost flex">
                                    <div className="cost-dol__container">
                                        <span className='cost-dol'>$</span>
                                    </div>
                                    <span className='cost-count'>0</span>
                                </div>
                            </div>
                            <div className="receive-panel">
                                <h1><img src="/images/main/ok.svg" alt="" /></h1>
                                <button>Receive</button>
                            </div>
                        </div>
                        <div className="block cost-start">
                            <div className="cost-panel bg-slate-800">
                                <h1 className='text-white'>Average</h1>
                                <div className="cost flex">
                                    <div className="cost-dol__container">
                                        <span className='cost-dol text-white'>$</span>
                                    </div>
                                    <span className='cost-count text-white'>69</span>
                                </div>
                            </div>
                            <div className="receive-panel">
                                <h1><img src="/images/main/ok.svg" alt="" /></h1>
                                <button>Receive</button>
                            </div>
                        </div>
                        <div className="block cost-start">
                            <div className="cost-panel bg-white">
                                <h1>Advanced</h1>
                                <div className="cost flex">
                                    <div className="cost-dol__container">
                                        <span className='cost-dol'>$</span>
                                    </div>
                                    <span className='cost-count'>609</span>
                                </div>
                            </div>
                            <div className="receive-panel">
                                <h1><img src="/images/main/ok.svg" alt="" /></h1>
                                <button>Receive</button>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    </div>
)}









































// import React from 'react';
// import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// export default function MainCost() {
//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         responsive: [
//             {
//                 breakpoint: 768,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                     infinite: true,
//                     dots: true
//                 }
//             }
//         ]
//     };

//     return (
//         <div className="maincost">
//             <div className="container">
//                 <div className="maincost-content">
//                     <h1 className='maincost-content__text'>Cost per month of access</h1>
                    // <Slider {...settings}>
                    //     <div className="block cost-start">
                    //         <div className="cost-panel bg-white">
                    //             <h1>start</h1>
                    //             <div className="cost flex">
                    //                 <div className="cost-dol__container">
                    //                     <span className='cost-dol'>$</span>
                    //                 </div>
                    //                 <span className='cost-count'>0</span>
                    //             </div>
                    //         </div>
                    //         <div className="receive-panel">
                    //             <h1><img src="/images/main/ok.svg" alt="" /></h1>
                    //             <button>Receive</button>
                    //         </div>
                    //     </div>
                    //     <div className="block cost-start">
                    //         <div className="cost-panel bg-slate-800">
                    //             <h1 className='text-white'>Average</h1>
                    //             <div className="cost flex">
                    //                 <div className="cost-dol__container">
                    //                     <span className='cost-dol text-white'>$</span>
                    //                 </div>
                    //                 <span className='cost-count text-white'>69</span>
                    //             </div>
                    //         </div>
                    //         <div className="receive-panel">
                    //             <h1><img src="/images/main/ok.svg" alt="" /></h1>
                    //             <button>Receive</button>
                    //         </div>
                    //     </div>
                    //     <div className="block cost-start">
                    //         <div className="cost-panel bg-white">
                    //             <h1>Advanced</h1>
                    //             <div className="cost flex">
                    //                 <div className="cost-dol__container">
                    //                     <span className='cost-dol'>$</span>
                    //                 </div>
                    //                 <span className='cost-count'>609</span>
                    //             </div>
                    //         </div>
                    //         <div className="receive-panel">
                    //             <h1><img src="/images/main/ok.svg" alt="" /></h1>
                    //             <button>Receive</button>
                    //         </div>
                    //     </div>
                    // </Slider>
//                 </div>
//             </div>
//         </div>
//     );
// }



// export default function MainCost() {
//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         responsive: [
//             {
//                 breakpoint: 768,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                     infinite: true,
//                     dots: true
//                 }
//             }
//         ]
//     };

//     return (
//         <div className="maincost">
//             <div className="container">
//                 <div className="maincost-content">
//                     <h1 className='maincost-content__text'>Cost per month of access</h1>
//                     <div className="slider-container">
//                         <Slider {...settings}>
//                             <div className="block cost-start">
//                                 <div className="cost-panel bg-white">
//                                     <h1>start</h1>
//                                     <div className="cost flex">
//                                         <div className="cost-dol__container">
//                                             <span className='cost-dol'>$</span>
//                                         </div>
//                                         <span className='cost-count'>0</span>
//                                     </div>
//                                 </div>
//                                 <div className="receive-panel">
//                                     <h1><img src="/images/main/ok.svg" alt="" /></h1>
//                                     <button>Receive</button>
//                                 </div>
//                             </div>
//                             <div className="block cost-start">
//                                 <div className="cost-panel bg-slate-800">
//                                     <h1 className='text-white'>Average</h1>
//                                     <div className="cost flex">
//                                         <div className="cost-dol__container">
//                                             <span className='cost-dol text-white'>$</span>
//                                         </div>
//                                         <span className='cost-count text-white'>69</span>
//                                     </div>
//                                 </div>
//                                 <div className="receive-panel">
//                                     <h1><img src="/images/main/ok.svg" alt="" /></h1>
//                                     <button>Receive</button>
//                                 </div>
//                             </div>
//                             <div className="block cost-start">
//                                 <div className="cost-panel bg-white">
//                                     <h1>Advanced</h1>
//                                     <div className="cost flex">
//                                         <div className="cost-dol__container">
//                                             <span className='cost-dol'>$</span>
//                                         </div>
//                                         <span className='cost-count'>609</span>
//                                     </div>
//                                 </div>
//                                 <div className="receive-panel">
//                                     <h1><img src="/images/main/ok.svg" alt="" /></h1>
//                                     <button>Receive</button>
//                                 </div>
//                             </div>
//                         </Slider>
//                     </div>
//                     <div className="static-blocks-container">
//                         <div className="static-block">
//                             {/* Блок Start */}
//                         </div>
//                         <div className="static-block">
//                             {/* Блок Average */}
//                         </div>
//                         <div className="static-block">
//                             {/* Блок Advanced */}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }



