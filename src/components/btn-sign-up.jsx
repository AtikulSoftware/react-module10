import { ExternalLink } from "lucide-react";


const SignUp = () => {
    return (
        <>
            <button className="flex gap-2 items-center bg-[var(--secondary-bg-color)] text-black px-4 py-2 rounded-full font-bold cursor-pointer">
                Sign Up for the Beta  <ExternalLink />
            </button>
        </>
    )
}

export default SignUp;