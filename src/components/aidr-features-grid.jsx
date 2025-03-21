import CardinalDuotone from "../../public/images/ph_arrows-out-cardinal-duotone.png";
import GraphDuotone from "../../public/images/ph_graph-duotone.png";
import MagicWandDuotone from "../../public/images/ph_magic-wand-duotone.png";
import Container from "./container";

const AiDrFeaturesGrid = () => {

    const items = [
        {
            icon: CardinalDuotone,
            title: "You’re in Control",
            desc: "aiDRs operate based on your rules. You guide the machine, the aiDRs execute the work.",
        },
        {
            icon: GraphDuotone,
            title: "Infinitely Scalable",
            desc: "Train an aiDR on a patch. When you are happy with the results, scale it effortlessly.",
        },
        {
            icon: MagicWandDuotone,
            title: "Incredibly Flexible",
            desc: "Train an aiDR on an outbound patch, to nurture inbound leads, or to reach out to your long tail of SMB customers at renewal time.",
        },
    ];


    return (
        <>
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
                    {items.map((item, index) => (
                        <div key={index} className="p-4 text-white space-y-2">
                            <img src={item.icon} alt={item.title} width={50} height={50} />
                            <h3 className="text-lg font-semibold ">{item.title}</h3>
                            <p className="text-sm text-gray-600">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </Container>
        </>
    )
}

export default AiDrFeaturesGrid;