import React from 'react';

const Aboutcard = ({icon, heading , description}) => {
    return (
        <div className={'bg-white p-4 flex gap-4'}>
            <div className={'flex items-center text-3xl md:text-5xl text-red-800'}>
                {icon}
            </div>
            <div className={'flex flex-col gap-0 md:gap-2'}>
                <h1 className={'text-lg md:text-xl font-semibold'}>
                    {heading}
                </h1>
                <p className={'text-md md:text-lg font-thin'}>
                    {description}
                </p>
            </div>
        </div>
    );
};

export default Aboutcard;