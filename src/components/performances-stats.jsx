const PerformanceStats = () => {
    const stats = [
        { percentage: "32%", description: "Improvement in Open Rates" },
        { percentage: "75%", description: "Improvement in Ramp Time" },
        { percentage: "35%", description: "Improvement in Meetings Booked" },
    ];

    return (
        <>
            <div className="m-10">
                <div className="bg-[url('/images/aidr-control-panel-right-bg.svg')] bg-cover rounded-lg bg-center bg-no-repeat w-full">
                    <div className=" space-y-8 text-white items-start p-12">
                        <div className="max-w-md space-y-4">
                            <h1 className="font-semibold text-2xl">Allocate effort where your reps make an inpact.</h1>
                            <h2 className="italic text-[var(--secondary-bg-color)] text-xl">Let us handle the rest.</h2>
                            <p className="text-sm">Keep your reps “in the air” -- out in the field and on the phone where they can build relationships.</p>
                        </div>
                        <ul className="flex flex-wrap gap-4">
                            {stats.map((stat, index) => (
                                <li key={index} className="max-w-[160px]">
                                    <h1 className="font-semibold text-2xl text-[var(--secondary-bg-color)] ">{stat.percentage}</h1>
                                    <p>{stat.description}</p>
                                </li>
                            ))}
                        </ul>

                    </div>
                </div>
            </div>
        </>
    )
}

export default PerformanceStats;