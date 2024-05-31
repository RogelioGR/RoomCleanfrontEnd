import React, { useState, useEffect } from 'react';



/*Componentes */
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Sidebar from '../Components/Sidebar';
import Loader from '../Components/Loader';

const Viewinform: React.FC = () => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000); // el tiempo de carga real
    }, []);

    return (
        <>

            {loading ? (
                <Loader />
            ) : (
                <div className="d-flex vh-100">
                    <Sidebar />
                    <div className="flex-grow-1 d-flex flex-column">
                        <Header />

                        <Footer />
                    </div>
                </div>
            )}
        </>
    );
};

export default Viewinform;
