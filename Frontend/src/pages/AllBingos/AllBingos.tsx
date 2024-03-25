import BingosTable from '../../components/BingosTable/BingosTable'
import { BiSearchAlt } from 'react-icons/bi'
import { BiFilterAlt } from 'react-icons/bi'
import { useState } from 'react'
import { bingos as bingosDummy } from '../../data/data'
import { Bingo } from '../../types/types'

const AllBingos = () => {
    const [bingos, setBingos] = useState<Bingo[]>([...bingosDummy])

    return (
        <div className='w-full min-h-full '>
            <div className="container px-[8rem] py-[1rem]">
                <BingosTable bingos={bingos} setBingos={setBingos} >
                    <div className=" flex text-base justify-between gap-[1rem] border-b border-gray-400 pb-[1rem] items-center ">
                        <h1 className='text-[2rem] mt-[2rem]'>Bingo's</h1>
                        <div className='flex items-center gap-[1rem]'>
                            <div className=' focus-within:ring-2 focus-within:ring-blue-500 flex hover:bg-blue-100 duration-300 cursor-pointer group gap-[.2rem] items-center bg-white px-[1rem] py-[.5rem] rounded-md'>
                                <BiSearchAlt />
                                <input placeholder='search' type="text" className='flex-1 bg-[inherit] outline-none' />
                            </div>
                            <div className='flex hover:bg-blue-100 duration-300 cursor-pointer gap-[.2rem] items-center bg-white px-[1rem] py-[.5rem] rounded-md'>
                                <BiFilterAlt />
                                <span>Filters</span>
                            </div>
                        </div>
                    </div>
                </BingosTable>
            </div>
        </div>
    )
}

export default AllBingos