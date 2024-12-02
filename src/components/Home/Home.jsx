import React from 'react';
import { Link } from 'react-router';

function Home() {
    return (
        <div>
            <h1>Эко-приложение для отслеживания углеродного следа</h1>
            <p>Помогает пользователям отслеживать углеродный след.</p>
            {/* <Link to="/calculator">Перейти к калькулятору</Link> */}
        </div>
    );
}

export default Home;
