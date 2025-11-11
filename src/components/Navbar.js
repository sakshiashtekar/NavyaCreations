import { useState, useEffect, useRef } from "react";
import { ShoppingCart, User, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [userMenuOpen, setUserMenuOpen] = useState(false);
    const userMenuRef = useRef(null);

    // Scroll animation effect
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close dropdown if clicked outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
                setUserMenuOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const menuVariants = {
        hidden: { opacity: 0, y: -20, height: 0 },
        visible: { opacity: 1, y: 0, height: "auto" },
        exit: { opacity: 0, y: -10, height: 0 },
    };

    const dropdownVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -10 },
    };

    return (
        <nav
            className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${scrolled
                    ? "bg-white/90 shadow-md py-3 backdrop-blur-md"
                    : "bg-transparent py-4"
                }`}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10">
                {/* Brand */}
                <div className="flex items-center">
                    <h1 className="text-2xl font-bold tracking-wide">
                        Naavya <span className="text-[#83C5BE]">Creations</span>
                    </h1>
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center space-x-10 text-gray-700 font-medium">
                    <a href="#Home" className="hover:text-[#83C5BE] transition-colors">
                        Home
                    </a>
                    <a href="#" className="hover:text-[#83C5BE] transition-colors">
                        Products
                    </a>
                    <a href="#" className="hover:text-[#83C5BE] transition-colors">
                        Contact Us
                    </a>
                </div>

                {/* Icons + Mobile Toggle */}
                <div className="flex items-center space-x-3 md:space-x-6 relative">
                    {/* Cart */}
                    <button className="hover:text-[#83C5BE] transition-colors">
                        <ShoppingCart className="w-6 h-6" />
                    </button>

                    {/* User Dropdown */}
                    <div className="relative" ref={userMenuRef}>
                        <button
                            onClick={() => setUserMenuOpen((prev) => !prev)}
                            className="hover:text-[#83C5BE] transition-colors"
                        >
                            <User className="w-6 h-6" />
                        </button>

                        <AnimatePresence>
                            {userMenuOpen && (
                                <motion.div
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    variants={dropdownVariants}
                                    transition={{ duration: 0.2, ease: "easeInOut" }}
                                    className="absolute right-0 mt-3 w-36 bg-white rounded-xl shadow-lg ring-1 ring-gray-200 backdrop-blur-sm z-50"
                                >
                                    <ul className="flex flex-col py-2 text-gray-700 font-medium">
                                        <li>
                                            <a
                                                href="#"
                                                className="block px-4 py-2 hover:bg-[#83C5BE] hover:text-[#fff] transition-colors"
                                            >
                                                Admin
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="block px-4 py-2 hover:bg-[#83C5BE] hover:text-[#fff] transition-colors"
                                            >
                                                Customer
                                            </a>
                                        </li>
                                    </ul>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden hover:text-indigo-600 transition-colors"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={menuVariants}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="md:hidden bg-white/95 backdrop-blur-sm shadow-md"
                    >
                        <div className="flex flex-col items-center space-y-4 py-4 text-gray-700 font-medium">
                            <a href="#" className="hover:text-indigo-600" onClick={() => setMenuOpen(false)}>
                                Home
                            </a>
                            <a href="#" className="hover:text-indigo-600" onClick={() => setMenuOpen(false)}>
                                Products
                            </a>
                            <a href="#" className="hover:text-indigo-600" onClick={() => setMenuOpen(false)}>
                                Contact Us
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
