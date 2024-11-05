import { React, useState } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';
import Zoom from 'react-reveal';

const ProjectDetails = () => {
    const info = useLoaderData();
    const navigation = useNavigation();

    const { title, detail2, detail3, img, img2, img3, details } = info;

    const images = [
        { id: 1, value: img, },
        { id: 2, value: img2, },
        { id: 3, value: img3, }
    ]
    const [sliderImg, setSliderImg] = useState(images[0])

    const imgHandler = index => {
        const slider = images[index];
        setSliderImg(slider);
    }
    if (navigation.state === "loading") {
        return <Spinner />
    }
    return (
        <div className='w-full md:w-4/5 mx-auto mb-32'>
            <Zoom>
                <h2 className='text-center lg:text-left text-5xl uppercase text-emerald-500 font-bold pb-10'>{title}</h2>
            </Zoom>
            <section className='grid lg:grid-cols-2 gap-10 p-5 rounded-lg pt-10 border-2 border-emerald-500  items-center' style={{ boxShadow: 'inset -2px 3px 12px rgb(16, 185, 129)' }}>
                <div>
                    <PhotoProvider>
                        <PhotoView src={sliderImg.value}>
                            <img alt="" src={sliderImg.value} className="shadow rounded-lg h-96 w-full" style={{ boxShadow: '2px -3px 12px rgb(16, 185, 129)' }} />
                        </PhotoView>
                    </PhotoProvider>
                    <div className='flex flex-row justify-center mt-5 border border-x-0 lg:border-x-2 border-emerald-500 rounded-lg py-4'>
                        {
                            images.map((singleImg, i) =>
                                <img
                                    key={i}
                                    src={singleImg.value}
                                    onClick={() => imgHandler(i)}
                                    alt=""
                                    className='max-h-16 max-w-28 mx-4 border-2 rounded-md border-gray-500'
                                    style={{ boxShadow: '2px -2px 8px rgb(16, 185, 129)' }}
                                />
                            )
                        }
                    </div>
                </div>
                <div className='text-white'>
                    <h3 className='text-3xl pb-10 text-center font-bold underline'>Project Details</h3>
                    <ol className='ml-2 md:ml-0 text-justify'>
                        <li className='mb-4 list-disc'>{details}</li>
                        <li className='mb-4 list-disc'>{detail2}</li>
                        <li className='mb-4 list-disc'>{detail3}</li>
                    </ol>
                </div>
            </section>
        </div>
    );
};

export default ProjectDetails;