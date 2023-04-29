import Title from "../ui/Title"


const Order = () => {
    return (
        <div className="lg:p-8 flex-1 lg:mt-0 mt-5">
            <Title addClass="text-[40px]">
                Orders
            </Title>
            <div className="overflow-x-auto w-full my-5">
                <table className="w-full text-sm  text-gray-500 min-w-[1000px] ">
                    <thead className="text-xs text-gray-400 uppercase bg-gray-700">
                        <tr>
                            <th scope="col" className="py-3 px-6">
                                ID
                            </th>
                            <th scope="col" className="py-3 px-6">
                                ADRESS
                            </th>
                            <th scope="col" className="py-3 px-6">
                                DATE
                            </th>
                            <th scope="col" className="py-3 px-6">
                                TOTAL
                            </th>
                            <th scope="col" className="py-3 px-6">
                                STATUS
                            </th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        <tr className="transition-all bg-secondary hover:bg-primary border-gray-700">

                            <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                                <span>63107...</span>
                            </td>
                            <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                                Adana
                            </td>
                            <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                                01-09-2022
                            </td>
                            <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                                $18
                            </td>
                            <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                                preparing
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Order