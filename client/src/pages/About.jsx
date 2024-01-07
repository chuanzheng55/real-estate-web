import React from 'react';
import { motion } from 'framer-motion';
import { InView } from 'react-intersection-observer';

const About = () => {
    const textVariants = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0, transition: { duration: 1 } },
    };

    return (
        <div id='about' className='w-full min-h-screen flex items-center justify-center py-12'>
            <InView threshold={0.5}>
                {({ inView, ref }) => (
                    <motion.div 
                        ref={ref}
                        className='container mx-auto p-4 flex flex-col md:flex-row items-center justify-between gap-12'
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        variants={textVariants}
                    >
                        <div className='w-full md:w-1/2 flex justify-center'>
                            <img 
                                src={'https://firebasestorage.googleapis.com/v0/b/mern-estate-81a83.appspot.com/o/1704354101182ozzy.JPG?alt=media&token=1cf27e34-cb4f-4035-aab8-3'} 
                                alt='Company Image'
                                className='w-80 h-80 rounded-full shadow-xl'
                            />
                        </div>
                        <div className='w-full md:w-1/2 text-center md:text-left'>
                            <h1 className='text-4xl md:text-5xl font-bold text-gray-800 mb-6'>
                                About Us
                            </h1>
                            <p className='text-md md:text-lg text-gray-600'>
                                At DreamSpace Realty, we're not just selling properties; we're crafting homes for dreams to thrive. Our team is dedicated to providing personalized services, ensuring each client finds their perfect space. From modern urban apartments to serene countryside homes, we cater to all your real estate needs with integrity and excellence.
                            </p>
                        </div>
                    </motion.div>
                )}
            </InView>
        </div>
    );
}

export default About;
