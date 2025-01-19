"use client";
import Banner from '@/components/Banner';
import { useEffect } from 'react';

export default function ErrorBoundary({
    error,
    reset
}: {
    error: Error,
    reset: () => void
}) {

    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <>
        <Banner Title='404 Error' Page='404' />
        <div className='bg-white'>
            <div className='container max-w-screen-lg mx-auto py-16 flex flex-col justify-center items-center'>
                <h1 className='text-[#FF9F0D] text-h1 lg:text-[80px] font-bold mb-8'>404</h1>
                <h2 className='text-h5 text-[#333333] mb-6'>OOps! Looks like something going wrong!</h2>
                <p className='text-[#4F4F4F] mb-8'>
                    Page Cannot be found! we&apos;ll have it figured out in no time.
                    Menwhile, cheek out these fresh ideas:
                </p>
                {/* <Link href={"/"}> */}
                    <button
                        onClick={
                        // Attempt to recover by trying to re-render the segment
                        () => reset()
                        }
                        className='bg-[#FF9F0D] text-white hover:bg-[#fdae38] p-4'
                    >
                        Go to Home
                    </button>
                {/* </Link> */}
            </div>
        </div>
        </>
    );
}