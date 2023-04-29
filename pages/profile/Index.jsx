import Account from "@/components/profile/Account";
import Password from "@/components/profile/Password";
import Order from "@/components/profile/Order";
import Image from "next/image";
import { useState } from "react";


const Profile = () => {
    const [tabs, setTabs] = useState()

    return (
        <div className=" min-h-[calc(100vh_-_433px)] lg:px-0 px-5 flex lg:flex-row flex-col">
            <div className="lg:w-80 w-100 flex-shrink-0">
                <div className="relative flex flex-col items-center px-10 py-5 border border-b-0">
                    <Image
                        src="/images/client2ec.png"
                        alt=""
                        width={120}
                        height={120}
                        className="rounded-full"
                    />
                    <b className="text-2xl mt-1">Murad Bayramov</b>
                </div>
                <ul className="text-center font-semibold">
                    <li
                        className={`border w-full p-3 cursor-pointer hover:bg-primary hover:text-white transition-all ${tabs === 0 && "bg-primary text-white"
                            }`}
                        onClick={() => setTabs(0)}
                    >

                        <i className="fa fa-home"></i>
                        <button className="ml-1 ">Account</button>
                    </li>
                    <li
                        className={`border w-full p-3 cursor-pointer hover:bg-primary hover:text-white transition-all ${tabs === 1 && "bg-primary text-white"
                            }`}
                        onClick={() => setTabs(1)}
                    >

                        <i className="fa fa-key"></i>
                        <button className="ml-1">Password</button>
                    </li>
                    <li
                        className={`border w-full p-3 cursor-pointer hover:bg-primary hover:text-white transition-all ${tabs === 2 && "bg-primary text-white"
                            }`}
                        onClick={() => setTabs(2)}
                    >

                        <i className="fa fa-motorcycle"></i>
                        <button className="ml-1">Orders</button>
                    </li>
                    <li
                        className={`border w-full p-3 cursor-pointer hover:bg-primary hover:text-white transition-all ${tabs === 3 && "bg-primary text-white"
                            }`}
                        onClick={() => setTabs(3)}
                    >

                        <i className="fa fa-sign-out"></i>
                        <button className="ml-1">Exit</button>
                    </li>
                </ul>
            </div>
            {tabs === 0 && <Account />}
            {tabs === 1 && <Password/>}
            {tabs === 2 && <Order/>}
        </div>
    );
};

export default Profile;