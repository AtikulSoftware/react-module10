import React from 'react';
import SignUp from './btn-sign-up';
import Container from './container';

const Hero = () => {
    return (
        <>
            <div className="bg-[url('/images/bg-hero-section.svg')] bg-blend-multiply bg-cover bg-center bg-no-repeat w-full">
                <Container>
                    <div className="flex flex-col gap-5 sm:items-start sm:text-start items-center text-center text-white py-12 max-w-xl">
                        <h1 className="text-[var(--secondary-bg-color)]">AI SDRs (aiDRs)</h1>
                        <h2 className="text-5xl font-Montserrat font-bold">
                            More <span className="italic">leads</span>,<br />
                            less <span className="italic">people</span>.
                        </h2>
                        <p>Train an aiDR on your ICP and messaging matrix. Activate it on a patch. It will send personalized sequences to every target contact.</p>
                        <SignUp/>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Hero;