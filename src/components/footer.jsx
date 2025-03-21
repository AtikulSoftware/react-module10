import Container from "./container";

const Footer = () => {
    return (
        <>
            <footer className="py-6 border-t-[1px] border-[var(--border-color)] bg-[#07292F]">
                <Container>
                    <div className="flex gap-4 items-center justify-between">
                        <img src="/images/footer-logo.png" alt="wizia" className="h-5" />
                        <p className="text-[#96ACAF] text-sm">Copyright © 2023 Wizia. All rights reserved.</p>
                    </div>
                </Container>
            </footer>
        </>
    )
}

export default Footer;