

const AiDrControlPanel = () => {

    const features = [
        "Quick to ramp",
        "Easy to optimize",
        "Quick to scale up",
        "Works with all your existing tools",
    ];

    return (
        <>
            <div className="m-10">
                <div className="bg-[url('/images/aidr-control-panel-bg.svg')] bg-cover rounded-lg bg-center bg-no-repeat w-full">
                    <div className="flex items-center justify-center py-14 px-4 ">
                        <div className=" space-y-8 text-white items-start">
                            <div className="">
                                <h1 className="font-semibold text-2xl">Train your aiDR on your...</h1>
                                <h2 className="italic text-[var(--secondary-bg-color)] text-xl">prefered email st|</h2>
                            </div>
                            <p className="">You’re in control. Train your aiDR on elements of your Marketing strategy.</p>
                            <ul className="grid grid-cols-2 gap-2">
                                {features.map((feature, index) => (
                                    <li key={index} className="flex gap-2  items-center">
                                        <img src="/images/check-circle-duotone.png" alt={feature} />
                                        <p>{feature}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AiDrControlPanel;