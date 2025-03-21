import SignUp from "./btn-sign-up";
import Container from "./container";


const GetStarted = () => {
    return (
        <>
            <Container>
                <div className="flex items-center justify-center text-center gap-4 text-white py-10">
                    <div className="flex flex-col gap-6 items-center justify-center max-w-3xl">
                        <h1 className="uppercase text-[var(--secondary-bg-color)] ">get started</h1>
                        <h1 className="italic text-2xl">Embrace <span className="font-semibold">the new era of</span> outbound.</h1>
                        <p>Wizia lets you train, activate, and optimize aiDRs.
                            Take your outbound to new levels of performance and efficiency.</p>
                        <SignUp />
                    </div>
                </div>
            </Container>
        </>
    )
}

export default GetStarted;