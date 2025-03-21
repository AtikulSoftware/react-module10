import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import Container from '../container';

const testimonials = [
    {
        id: 1,
        text: "Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
        name: "John Doe",
        position: "Chief Strategy Officer",
        company: "Company"
    },
    {
        id: 2,
        text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
        name: "Jane Smith",
        position: "Marketing Director",
        company: "TechCorp"
    },
    {
        id: 3,
        text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.",
        name: "Alice Johnson",
        position: "Head of Product",
        company: "InnovateX"
    },
    {
        id: 4,
        text: "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi.",
        name: "Michael Brown",
        position: "CTO",
        company: "NextGen Solutions"
    },
    {
        id: 5,
        text: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
        name: "Emily Davis",
        position: "CEO",
        company: "Startup Inc."
    }
];

const TestimonialSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prevIndex) => prevIndex - 1);
        }
    };

    const nextSlide = () => {
        if (currentIndex < testimonials.length - 1) {
            setCurrentIndex((prevIndex) => prevIndex + 1);
        }
    };

    return (
        <>
            <Container>
                <div className="py-10 text-center">
                    <div className="flex justify-between items-center mt-6 gap-5">
                        <button
                            onClick={prevSlide}
                            className={`p-2 rounded-lg text-[var(--secondary-bg-color)] ${currentIndex === 0 ? "bg-gray-400/10 cursor-not-allowed" : "bg-gray-400/30 cursor-pointer"}`}
                            disabled={currentIndex === 0}
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <div className='flex flex-col items-center justify-center gap-8 text-white'>
                            <img src="/images/img_qute.png" alt="Qute imag" className="h-16" />
                            <p className="text-xl italic">"{testimonials[currentIndex].text}"</p>
                            <div>
                                <h3 className="mt-4 font-semibold">{testimonials[currentIndex].name}</h3>
                                <p className="text-sm text-[#96ACAF]">{`${testimonials[currentIndex].company} @ ${testimonials[currentIndex].position}`}</p>
                            </div>
                        </div>
                        <button
                            onClick={nextSlide}
                            className={`p-2 rounded-lg text-[var(--secondary-bg-color)] ${currentIndex === testimonials.length - 1 ? "bg-gray-400/10 cursor-not-allowed" : "bg-gray-400/30 cursor-pointer"}`}
                            disabled={currentIndex === testimonials.length - 1}
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                    <div className="flex items-center justify-center space-x-2 mt-6">
                        {testimonials.map((_, index) => (
                            <span
                                key={index}
                                className={`w-2 h-2 rounded-full ${index === currentIndex ? "bg-blue-500" : "bg-gray-300"
                                    }`}
                            ></span>
                        ))}
                    </div>
                </div>
            </Container>
        </>
    )
}

export default TestimonialSlider;