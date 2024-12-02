import React, { useState } from 'react';
import './Calculator.css';

function Calculator() {
    const [transport, setTransport] = useState('');
    const [distance, setDistance] = useState('');
    const [flights, setFlights] = useState('');
    const [electricity, setElectricity] = useState('');
    const [heating, setHeating] = useState('');
    const [water, setWater] = useState('');
    const [waterSaving, setWaterSaving] = useState('');
    const [meat, setMeat] = useState('');
    const [dairy, setDairy] = useState('');
    const [waste, setWaste] = useState('');
    const [recycle, setRecycle] = useState('');
    const [clothing, setClothing] = useState('');
    const [electronics, setElectronics] = useState('');
    const [carbonFootprint, setCarbonFootprint] = useState(null);

    const calculateCarbonFootprint = () => {
        if (!distance || isNaN(distance)) {
            alert("Пожалуйста, введите количество километров для расчета транспортного следа.");
            return;
        }
        if (!electricity || isNaN(electricity)) {
            alert("Пожалуйста, введите количество электроэнергии для расчета.");
            return;
        }
        if (!water || isNaN(water)) {
            alert("Пожалуйста, введите количество воды для расчета.");
            return;
        }
        if (!waste || isNaN(waste)) {
            alert("Пожалуйста, введите количество отходов для расчета.");
            return;
        }

        const transportCO2 = transport === 'electric' ? distance * 0.12 : transport === 'public' ? distance * 0.05 : distance * 2.31;
        const flightsCO2 = flights === '1' ? 1000 : flights === '2' ? 2000 : 0;
        const electricityCO2 = electricity * 0.5;
        const heatingCO2 = heating === 'gas' ? 0.3 : heating === 'electric' ? 0.5 : 0.2;
        const waterCO2 = water * (waterSaving === 'yes' ? 0.1 : 0.298);
        const wasteCO2 = waste * (1 - recycle / 100) * 2.47;
        const meatCO2 = meat * 27;
        const dairyCO2 = dairy === 'high' ? 10 : dairy === 'moderate' ? 5 : dairy === 'low' ? 2 : 0;
        const clothingCO2 = clothing === 'monthly' ? 50 : clothing === 'seasonal' ? 25 : 10;
        const electronicsCO2 = electronics === 'yearly' ? 100 : electronics === 'fewYears' ? 50 : 10;

        const totalCO2 = transportCO2 + flightsCO2 + electricityCO2 + heatingCO2 + waterCO2 + wasteCO2 + meatCO2 + dairyCO2 + clothingCO2 + electronicsCO2;
        setCarbonFootprint(totalCO2);
    };


    return (
        <div className="calculator-container">
            <h2 className="calculator-title">Калькулятор углеродного следа</h2>
            <div className="calculator-form">
                <div className="form-group">
                    <label>Какой вид транспорта вы используете чаще всего?</label>
                    <select value={transport} onChange={(e) => setTransport(e.target.value)}>
                        <option value="">Выберите</option>
                        <option value="petrol">Бензиновый</option>
                        <option value="diesel">Дизельный</option>
                        <option value="electric">Электрический</option>
                        <option value="public">Общественный</option>
                        <option value="bike">Велосипед/Пешком</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Сколько километров вы проезжаете в месяц?</label>
                    <input
                        type="number"
                        value={distance}
                        onChange={(e) => setDistance(e.target.value)}
                        placeholder="Введите расстояние в километрах"
                    />
                </div>
                <div className="form-group">
                    <label>Как часто вы совершаете авиаперелеты?</label>
                    <select value={flights} onChange={(e) => setFlights(e.target.value)}>
                        <option value="">Выберите</option>
                        <option value="1">1 раз в год</option>
                        <option value="2">Несколько раз в год</option>
                        <option value="0">Никогда</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Сколько кВт-ч электроэнергии вы используете в месяц?</label>
                    <input
                        type="number"
                        value={electricity}
                        onChange={(e) => setElectricity(e.target.value)}
                        placeholder="Введите количество кВт-ч"
                    />
                </div>
                <div className="form-group">
                    <label>Как вы отапливаете дом?</label>
                    <select value={heating} onChange={(e) => setHeating(e.target.value)}>
                        <option value="">Выберите</option>
                        <option value="gas">Газ</option>
                        <option value="electric">Электричество</option>
                        <option value="biofuel">Биотопливо</option>
                        <option value="other">Другие</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Сколько литров воды вы используете ежедневно?</label>
                    <input
                        type="number"
                        value={water}
                        onChange={(e) => setWater(e.target.value)}
                        placeholder="Введите количество литров"
                    />
                </div>
                <div className="form-group">
                    <label>Есть ли у вас водосберегающие устройства?</label>
                    <select value={waterSaving} onChange={(e) => setWaterSaving(e.target.value)}>
                        <option value="">Выберите</option>
                        <option value="yes">Да</option>
                        <option value="no">Нет</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Сколько раз в неделю вы едите мясо?</label>
                    <input
                        type="number"
                        value={meat}
                        onChange={(e) => setMeat(e.target.value)}
                        placeholder="Введите количество дней"
                    />
                </div>
                <div className="form-group">
                    <label>Какую долю вашего рациона составляют молочные продукты?</label>
                    <select value={dairy} onChange={(e) => setDairy(e.target.value)}>
                        <option value="">Выберите</option>
                        <option value="high">Много</option>
                        <option value="moderate">Умеренно</option>
                        <option value="low">Редко</option>
                        <option value="never">Никогда</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Сколько килограммов отходов вы производите в неделю?</label>
                    <input
                        type="number"
                        value={waste}
                        onChange={(e) => setWaste(e.target.value)}
                        placeholder="Введите вес отходов в килограммах"
                    />
                </div>
                <div className="form-group">
                    <label>Какой процент отходов вы перерабатываете?</label>
                    <select value={recycle} onChange={(e) => setRecycle(e.target.value)}>
                        <option value="">Выберите</option>
                        <option value="0">0%</option>
                        <option value="25">25%</option>
                        <option value="50">50%</option>
                        <option value="75">75%</option>
                        <option value="100">100%</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Как часто вы покупаете новую одежду?</label>
                    <select value={clothing} onChange={(e) => setClothing(e.target.value)}>
                        <option value="">Выберите</option>
                        <option value="monthly">Каждый месяц</option>
                        <option value="seasonal">Раз в сезон</option>
                        <option value="rarely">Реже</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Как часто вы покупаете электронику?</label>
                    <select value={electronics} onChange={(e) => setElectronics(e.target.value)}>
                        <option value="">Выберите</option>
                        <option value="yearly">Каждый год</option>
                        <option value="fewYears">Раз в несколько лет</option>
                        <option value="rarely">Реже</option>
                    </select>
                </div>
                <button className="calculate-button" onClick={calculateCarbonFootprint}>
                    Рассчитать углеродный след
                </button>
            </div>
            {carbonFootprint !== null && (
                <div className="result">
                    <h3>Ваш углеродный след:</h3>
                    <p>{carbonFootprint.toFixed(2)} кг CO2</p>
                </div>
            )}
        </div>
    );
}

export default Calculator;
