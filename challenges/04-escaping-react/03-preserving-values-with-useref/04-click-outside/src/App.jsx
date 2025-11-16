import './styles.css'
import * as React from "react";
import {closeIcon} from "./icons.jsx";
import {useEffect, useRef, useState} from "react";

export default function ClickOutside() {
    const [isOpen, setIsOpen] = useState(false);
    const modalRef = useRef(null)

    const handleOpenModal = () => {
        if (!isOpen) {
            setIsOpen(true)
        }
    };

    // odnosi se na dugme "X" na modalu
    // skroz druga logika je potrebna za "click outside"
    const handleCloseModal = () => {
        if (isOpen) {
            setIsOpen(false)
        }
    };

    // ova logika se odnosi na "click outside"
    function handleClickOutside(event) {
        // ukoliko postoji ref na modal i ukoliko trenutno nismo kliknuli na njega:
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    }

    // ovu logiku koristimo u slučajevima kada "isOpen" ima vrijednost "true"
    // zbog toga je stavljamo u dependency array
    useEffect(() => {
        if (isOpen) {
            document.addEventListener("pointerdown", handleClickOutside)

            return () => {
                document.removeEventListener("pointerdown", handleClickOutside)
            }
        }
    }, [isOpen]);

    return (
        <>
            <section>
                <h1>Click Outside</h1>
                <button className="link" onClick={handleOpenModal}>
                    Open Modal
                </button>
            </section>
            {isOpen && (
                <dialog ref={modalRef}>
                    <button onClick={handleCloseModal}>{closeIcon}</button>
                    <h2>Modal</h2>
                    <p>
                        Click outside the modal to close (or use the button) whatever you
                        prefer.
                    </p>
                </dialog>
            )}
        </>
    );
}
