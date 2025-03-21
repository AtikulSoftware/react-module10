import { Menu } from 'lucide-react';
import React from 'react';
import Container from '../container';
import Logo from './logo';

const Navbar = () => {
    return (
        <>
            <nav className="border-b-[1px] border-[var(--border-color)] sticky top-0 z-50 bg-[var(--primary-bg-color)]/30 backdrop-blur-md">
                <Container>
                    <div className='flex justify-between items-center py-4 text-white'>
                        <Logo />
                        <ul className="hidden sm:flex space-x-5 font-WorkSans">
                            <li><a href="/">About Us</a></li>
                            <li><a href="/about">Pricing</a></li>
                            <li><a href="/contact">Customers</a></li>
                            <li><a href="/contact">Solutions</a></li>
                        </ul>
                        <div className="space-x-5 hidden md:flex">
                            <button className="bg-[var(--secondary-bg-color)] px-4 py-2 rounded-full text-black font-semibold">Book a Demo</button>
                            <button className="border-2 border-white rounded-full px-3 py-2">Contact Us</button>
                        </div>
                        <div className="block sm:hidden">
                            <button>
                                <Menu />
                            </button>
                        </div>
                    </div>
                </Container>
            </nav>
        </>
    )
}

export default Navbar;