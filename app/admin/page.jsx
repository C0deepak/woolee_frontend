'use client'
import React, { useEffect, useRef } from 'react'
import Chart from 'chart.js/auto'

const StateChart = ({ stateName, data }) => {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    useEffect(() => {
        if (chartInstance.current) {
            chartInstance.current.destroy();
        }

        const myChartRef = chartRef.current.getContext("2d");

        chartInstance.current = new Chart(myChartRef, {
            type: 'doughnut',
            data: {
                labels: Object.keys(data),
                datasets: [{
                    backgroundColor: [
                        'rgb(255, 99, 132)',
                        'rgb(54, 162, 235)',
                        'rgb(255, 205, 86)'
                    ],
                    data: Object.values(data),
                }]
            }
        });

        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        };
    }, [data, stateName]);

    return (
        <div className='w-52'>
            <p className='text-center font-semibold max-w-full'>{stateName}</p>
            <canvas ref={chartRef} />
            <div className='flex flex-col pt-4'>
                <div>Producers:  {Math.floor(Math.random() * (250 - 60 + 1) + 60)}</div>
                <div>Service Provider: {Math.floor(Math.random() * (100 - 10 + 1) + 10)}</div>
                <div>Artisians: {Math.floor(Math.random() * (200 - 50 + 1) + 50)}</div>
            </div>
        </div>
    );
};

const Admin = () => {
    const stateData = {
        AndhraPradesh: { GradeA: 30, GradeB: 45, GradeC: 25 },
        ArunachalPradesh: { GradeA: 20, GradeB: 50, GradeC: 30 },
        Assam: { GradeA: 35, GradeB: 40, GradeC: 25 },
        Bihar: { GradeA: 25, GradeB: 35, GradeC: 40 },
        Chhattisgarh: { GradeA: 40, GradeB: 30, GradeC: 30 },
        Goa: { GradeA: 15, GradeB: 55, GradeC: 30 },
        Gujarat: { GradeA: 25, GradeB: 40, GradeC: 35 },
        Haryana: { GradeA: 30, GradeB: 30, GradeC: 40 },
        HimachalPradesh: { GradeA: 20, GradeB: 50, GradeC: 30 },
        Jharkhand: { GradeA: 35, GradeB: 35, GradeC: 30 },
        Karnataka: { GradeA: 30, GradeB: 40, GradeC: 30 },
        Kerala: { GradeA: 25, GradeB: 45, GradeC: 30 },
        MadhyaPradesh: { GradeA: 30, GradeB: 40, GradeC: 30 },
        Maharashtra: { GradeA: 25, GradeB: 45, GradeC: 30 },
        Manipur: { GradeA: 20, GradeB: 50, GradeC: 30 },
        Meghalaya: { GradeA: 35, GradeB: 35, GradeC: 30 },
        Mizoram: { GradeA: 25, GradeB: 45, GradeC: 30 },
        Nagaland: { GradeA: 30, GradeB: 40, GradeC: 30 },
        Odisha: { GradeA: 35, GradeB: 35, GradeC: 30 },
        Punjab: { GradeA: 30, GradeB: 40, GradeC: 30 },
        Rajasthan: { GradeA: 25, GradeB: 45, GradeC: 30 },
        Sikkim: { GradeA: 20, GradeB: 50, GradeC: 30 },
        TamilNadu: { GradeA: 35, GradeB: 35, GradeC: 30 },
        Telangana: { GradeA: 25, GradeB: 45, GradeC: 30 },
        Tripura: { GradeA: 30, GradeB: 40, GradeC: 30 },
        UttarPradesh: { GradeA: 35, GradeB: 35, GradeC: 30 },
        Uttarakhand: { GradeA: 25, GradeB: 45, GradeC: 30 },
        WestBengal: { GradeA: 30, GradeB: 40, GradeC: 30 },
        'Andaman And Nicobar Islands': { GradeA: 20, GradeB: 50, GradeC: 30 },
        Chandigarh: { GradeA: 35, GradeB: 35, GradeC: 30 },
        'Dadra And Nagar Haveli And Daman And Diu': { GradeA: 25, GradeB: 45, GradeC: 30 },
        Lakshadweep: { GradeA: 30, GradeB: 40, GradeC: 30 },
        Delhi: { GradeA: 35, GradeB: 35, GradeC: 30 },
        Puducherry: { GradeA: 25, GradeB: 45, GradeC: 30 },
    };

    return (
        <div className='w-full flex flex-wrap gap-4 font-poppins'>
            <div className='w-full bg-zinc-800 h-[18vh] pt-16 px-8 text-2xl font-bold text-zinc-100'>Admin Dashboard</div>

            <div className='flex gap-6 flex-wrap px-4'>
                {Object.entries(stateData).map(([state, data]) => (
                    <div key={state} className='border border-zinc-900 p-4 rounded wrap'><StateChart stateName={state} data={data} /></div>
                ))}
            </div>
        </div>
    );
};

export default Admin;