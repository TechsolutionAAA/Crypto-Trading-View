import { useState } from "react"

export default function Header() {
    const [show, setShow] = useState(false);
    return (
        <div className="sticky border-b-2 z-50 border-b-[#31313a] left-0 top-0 w-full header">
            <div className="pl-[10%] max-w-[80%] lg:max-w-[90%]">
                <div className="flex justify-between items-center">
                    <div onClick={() => setShow(false)}>
                        <img className="max-h-[90px]" src="./assets/logo.png" alt="" />
                    </div>
                    <div className="lg:hidden">
                        <ul className="list-none text-white flex items-center !mb-[0px]">
                            <li className="pt-[3%] pb-[3%] border-b-[3px] border-transparent pr-[20px] pl-[20px] hover:border-[#ffa600] hover:border-b-[3px] hover:opacity-80 font-medium cursor-pointer"><a className="text-white no-underline" href="#home">Home</a></li>
                            <li className="pt-[3%] pb-[3%] border-b-[3px] border-transparent pr-[20px] pl-[20px] hover:border-[#ffa600] hover:border-b-[3px] hover:opacity-80 font-medium cursor-pointer"><a className="text-white no-underline" href="#indicators">Indicators</a></li>
                            <li className="pt-[3%] pb-[3%] border-b-[3px] border-transparent pr-[20px] pl-[20px] hover:border-[#ffa600] hover:border-b-[3px] hover:opacity-80 font-medium cursor-pointer"><a className="text-white no-underline" href="#features">Features</a></li>
                            <li className="pt-[3%] pb-[3%] border-b-[3px] border-transparent pr-[20px] pl-[20px] hover:border-[#ffa600] hover:border-b-[3px] hover:opacity-80 font-medium cursor-pointer"><a className="text-white no-underline" href="#pricing">Pricing</a></li>
                            <li className="pt-[3%] pb-[3%] border-b-[3px] border-transparent pr-[20px] pl-[20px] hover:border-[#ffa600] hover:border-b-[3px] hover:opacity-80 font-medium cursor-pointer"><a className="text-white no-underline" href="#fag">FAG</a></li>
                        </ul>
                    </div>
                    <div className="xl:hidden" onClick={() => setShow(true)}>
                        <p className=" bg-white !mt-[0px] !mb-[0px] h-[5px] w-[50px] rounded-[10px]"></p>
                        <p className=" bg-white !mt-[10px] !mb-[10px] h-[5px] w-[50px] rounded-[10px]"></p>
                        <p className=" bg-white !mt-[0px] !mb-[0px] h-[5px] w-[50px] rounded-[10px]"></p>
                    </div>
                </div>
            </div>
            {
                show ?
                    <div className="navbar1 z-20 absolute top-[30%] min-w-[200px] right-0">
                        <ul>
                            <li><a className="text-white no-underline" href="#home">Home</a></li>
                            <li><a className="text-white no-underline" href="#indicators">Indicators</a></li>
                            <li><a className="text-white no-underline" href="#features">Features</a></li>
                            <li><a className="text-white no-underline" href="#pricing">Pricing</a></li>
                            <li><a className="text-white no-underline" href="#Ffag">FAG</a></li>
                        </ul>
                    </div>
                    : <></>
            }
        </div>

    )
}