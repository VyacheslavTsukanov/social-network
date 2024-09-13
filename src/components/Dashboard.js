// src/components/Dashboard.js
import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Dashboard = () => {

    const data = {
        labels: ['Январь', 'Февраль', 'Март'],
        datasets: [
            {
                label: 'Продажи',
                data: [30, 20, 50],
                backgroundColor: 'rgba(245, 255, 145, 0.8)',
            },
        ],
    };

    return (
        <div>
            <h2>График продаж</h2>
            <Bar data={data} />
        </div>
    );
};

export default Dashboard;
