import React from 'react'

const Ramayana = () => (
    <>
     <section className='container mx-auto'>
     <h1 className="font-bold  text-5xl m-2 p-2 text-orange-500 text-center">Epic Ramayana</h1>
        <div className="flex justify-around">
        <div className="w-72 h-auto shadow-lg bg-white m-3 p-3">
            <img className="rounded-md w-72 h-40" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0H_Sx_Xgr6pEcoXqC_zAnOUkygaFxZ_7EaQ&usqp=CAU"/>
            <h1 className="font-bold ">Ramanand Sagar's Ramayana</h1>
            <p className='text-start'>It is most popular show of history. It was directed by Ramanand Sagar. The show is based on Valmiki's 'Ramayan' & Tulsidas' 'Ramcharit manas'.</p>
                <button className="bg-black text-white mt-2 p-1 rounded-md text-sm">Watch</button>
        </div>
        <div className="w-72 h-auto shadow-lg bg-white m-3 p-3">
        <img className="rounded-md w-72 h-40" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb1xIVxlzP8yWJTKy-Mtpzlry_0Qm27gv9ZA&usqp=CAU"/>
            <h1 className="font-bold ">Ramayan -The Epic full movie</h1>
            <p>This picture bombed at the box office when it released in theatres back in 2010. Thumping background music, perfect animation and a stylish screenplay makes it amazing.</p>
                <button className="bg-black text-white mt-2 p-1 rounded-md text-sm">Watch</button>
        </div>
        <div className="w-72 h-auto shadow-lg bg-white m-3 p-3">
        <img className="rounded-md w-72 h-40" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFrg1jmoeIQS2zcXKtUlZP9GUacEOjI6HCUQ&usqp=CAU"/>
            <h1 className="font-bold ">Ramayana: The Legend of Prince Rama</h1>
            <p>This is a 1992 anime film co-produced by Japan and India; produced and directed by Yugo Sako.</p>
                <button className="bg-black text-white mt-2 p-1 rounded-md text-sm">Watch</button>
        </div>
        </div>
     
     </section>
    </>
)

export default Ramayana
