import React from 'react'

const ProductDescription = () => {
    return (
        <div className='mt-20'>
            <div className='flex gap-3 mb-4'>
                <button className='btn_dark_rounded !rounded-none !text-xs !py-[6px] w-36'>Description</button>
                <button className='btn_dark_outline !rounded-none !text-xs !py-[6px] w-36'>Care Guide</button>
                <button className='btn_dark_outline !rounded-none !text-xs !py-[6px] w-36'>Size Guide</button>
            </div>
            <div className='flex flex-col pb-16'>
                <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, corrupti itaque repellendus tempora est eligendi. Repudiandae in quod ab ducimus aperiam nam unde tenetur magnam odit aut expedita
                    deserunt architecto minima vel molestias perspiciatis enim tempore, nulla natus repellat neque doloribus. Fugiat, ut, ratione ducimus dolor officia doloribus molestias laboriosam,
                    eos error quam nisi doloremque.
                </p>
                <p className='text-sm'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam consectetur unde quos, nisi incidunt alias tempore vel aliquam quaerat impedit, voluptatum quas!
                </p>
            </div>
        </div>
    )
}

export default ProductDescription
