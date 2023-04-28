import Image from "next/image"

const Index = () => {
  return (
    <div className='overflow-x-auto'> 
    <div className='min-h-[calc(100vh_-_433px)] flex justify-center items-center flex-col p-10 min-w-[1000px]'>
            <div className="flex items-center flex-1 w-full max-h-28">
                <table className='w-full text-sm text-center text-gray-500'>
                    <thead className='text-xs text-gray-400 uppercase bg-gray-700'>
                        <tr>
                            <th className='py-3 px-6'>ORDER ID</th>
                            <th className='px-6'>CUSTOMER</th>
                            <th className='px-6'>ADRESS</th>
                            <th className='px-6'>TOTAL</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='transition-all duration-500 bg-secondary border-gray-700 hover:bg-primary'>
                            <th className=" py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center gap-x-1 justify-center">
                            dmsf14dec59...
                            </th>
                            <th className='"py-4 px-6 font-medium whitespace-nowrap hover:text-white'>
                            Murad Bayramov
                            </th>
                            <th className='"py-4 px-6 font-medium whitespace-nowrap hover:text-white'>
                                Baku
                            </th>
                            <th className='"py-4 px-6 font-medium whitespace-nowrap hover:text-white'>
                                18$
                            </th>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="flex justify-between w-full p-10 bg-primary mt-6">
          <div className="items-center flex flex-col">
            <Image
              src="/images/paid.png"
              alt=""
              width={40}
              height={40}
            />
            <span>Payment</span>
          </div>
          <div className="items-center flex flex-col animate-pulse">
            <Image
              src="/images/bake.png"
              alt=""
              width={40}
              height={40}
            />
            <span>Preparing</span>
          </div>
          <div className="items-center flex flex-col">
            <Image
              src="/images/bike.png"
              alt=""
              width={40}
              height={40}
            />
            <span>On the way</span>
          </div>
          <div className="items-center flex flex-col">
            <Image
              src="/images/delivered.png"
              alt=""
              width={40}
              height={40}
            />
            <span>Delivered</span>
          </div>
        </div>
    </div>
    </div>
  )
}

export default Index