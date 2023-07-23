import React, { useEffect, useState } from 'react';
import AllCollege from './AllCollege';

const College = () => {
    const [allCollage, setAllCollage] = useState([])
    const [search, setSearch] = useState("a")
    useEffect(() => {
        fetch(`http://localhost:5000/allCollection`)
            .then(res => res.json())
            .then(data => setAllCollage(data))
    }, [])



    const handleSearch = () => {
        fetch(`http://localhost:5000/collegeSearch/${search}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setAllCollage(data)
            })
    }
    return (
        <>
               <h1 className='text-center font-bold text-5xl text-purple-400 mt-7'>All Collage Collection</h1>
            <div className='text-center flex justify-center gap-3 mt-6 '>

                <button onClick={handleSearch} className="btn btn-success">Search All Collage</button>
                <input onChange={(e) => setSearch(e.target.value)} className='border-4 border-solid border-stone-700 px-2 py-2 ' type="text" placeholder='Search' />

            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 mt-10 gap-14  container mx-auto lg:mr-20'>

                {
                    allCollage.map(collages => <AllCollege
                        key={collages._id}
                        collages={collages}
                    ></AllCollege>)
                }
            </div>
        </>
    );
};

export default College;