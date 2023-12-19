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
        <div className='w-40 h-40'>
            <p className='text-center font-semibold'>{stateName}</p>
            <canvas ref={chartRef} />
        </div>
    );
};

const Admin = () => {
    // Sample data for different states
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
        AndamanAndNicobarIslands: { GradeA: 20, GradeB: 50, GradeC: 30 },
        Chandigarh: { GradeA: 35, GradeB: 35, GradeC: 30 },
        DadraAndNagarHaveliAndDamanAndDiu: { GradeA: 25, GradeB: 45, GradeC: 30 },
        Lakshadweep: { GradeA: 30, GradeB: 40, GradeC: 30 },
        Delhi: { GradeA: 35, GradeB: 35, GradeC: 30 },
        Puducherry: { GradeA: 25, GradeB: 45, GradeC: 30 },
    };

    return (
        <div className='flex flex-wrap gap-4 font-poppins'>
            <div className='bg-zinc-800 h-[18vh] pt-16 px-8 text-2xl font-bold text-zinc-100'>Admin Dashboard</div>

            <div className='flex border border-zinc-900 gap-8 flex-wrap'>
                {Object.entries(stateData).map(([state, data]) => (
                    <StateChart key={state} stateName={state} data={data} />
                ))}
            </div>
        </div>
    );
};

export default Admin;