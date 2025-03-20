import Container from "./container";

const OurTrustedPartners = () => {
    return (
        <>
            <div className=" py-10 bg-[var(--border-color)] ">
                <Container>
                    <div className="flex flex-col gap-2 items-center justify-center">
                        <h1 className="uppercase text-[var(--secondary-bg-color)]">our trusted partners</h1>
                        <div className="flex flex-wrap items-center justify-center gap-1">
                            <img src="/images/back-hub-logo.png" alt="back hub logo" className="h-14" />
                            <img src="/images/cable-labs-logo.png" alt="cable labs logo.png" className="h-14" />
                            <img src="/images/dbs-logo.png" alt="dbs logo" className="h-14" />
                            <img src="/images/easy-euro-logo.png" alt="easy euro logo.png" className="h-14" />
                            <img src="/images/amd-logo.png" alt="amd logo.png" className="h-14" />
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default OurTrustedPartners;