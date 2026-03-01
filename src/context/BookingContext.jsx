import React, { createContext, useContext, useState } from 'react';

const BookingContext = createContext(null);

export const BookingProvider = ({ children }) => {
    const [selectedCar, setSelectedCar] = useState('');

    return (
        <BookingContext.Provider value={{ selectedCar, setSelectedCar }}>
            {children}
        </BookingContext.Provider>
    );
};

export const useBooking = () => useContext(BookingContext);
