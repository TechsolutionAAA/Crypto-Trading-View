import './style.css'
import { Typewriter } from 'react-simple-typewriter'
import Accordion from './Accordion';

export default function Content() {
    return (
        <div>
            <div id='home' className="home mt-[2%] pt-[6%] pb-[5%] pl-[10%] bg-[#02121d] flex md:flex-col">
                <div className="w-[50%] pl-[10px] pr-[10px] md:w-full">
                    {/* <Typewriter
                        words={['Eat', 'Sleep', 'Code', 'Repeat!']}
                        loop={5}
                        cursor
                        cursorStyle='_'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                        onLoopDone={handleDone}
                        onType={handleType}
                    /> */}
                    <h1 className="border-[1px] border-transparent text-white text-[350%] font-bold uppercase leading-[44px] mb-[10px]">we help you <span className='text-[#0000FF]'>trade</span></h1>
                    <p className='pt-[6%] pr-[14%] text-white text-[140%] leading-[30px] mb-[10px]'>Maximize your odds with the right trading tools. We offer indicators and solutions to improve the trading experience.</p>
                    <div className='mt-[27px] p-[2%] rounded-[20px] bg-[#0000FF] text-white text-base leading-[16px] font-[700] hover:scale-125 ease duration-300 cursor-pointer w-fit'>
                        <a>Start Today!</a>
                    </div>
                </div>
                <div className="w-[50%] pl-[10px] md:w-full mt-[1%] pr-[10px]">
                    <img className='max-w-[75%]' src='./assets/chart3.png' alt='' />
                </div>
            </div>
            <div id='indicators' className='indicators h-full pt-[10%] pl-[10%] bg-[#ff9d00]'>
                <h1 className='text-white text-[200%] font-[700] leading-[44px] mt-[20px] mb-[10px]'>From <span className='text-[#0000FF]'>Traders</span> To <span className='text-[#0000FF]'>Traders</span></h1>
                <p className='text-white text-[100%] mb-[10px]'>Made and Used by the Top Analysts. Sign Up with Trading View and Join Us!</p>
                <div className='animation flex md:flex-col pt-[5%] pr-[2%]'>
                    <div className='w-[41.6666667%] md:w-full pl-[10px]'>
                        <h1 className='text-[180%] text-white leading-[44px] mt-[20px] font-bold mb-[10px]'>Algorithmic Buy and Sell Signals</h1>
                        <img className='hover:-top-[10px] ease duration-300 h-auto max-w-full rounded-[13px]' src='./assets/chart2.png' alt='' />
                    </div>
                    <div className='pr-[10%] pl-[3%] w-[58.3333333%] md:w-full'>
                        <p className='pt-[20%] text-white text-[150%] leading-[110%] font-[300]'>
                            Viper Algo enables you to catch trends early in both directions. Using algorithmic equations Viper Algo provides it's best edge in any market condition.
                            <br /><br />
                            This tool would be able to determine which side the market will move with the Viper Algo's cloud setting.
                        </p>
                    </div>
                </div>
            </div>
            <div id='features' className='features flex md:flex-col pt-[10%] mb-[5%] animation1'>
                <div className='w-[50%] md:w-full pr-[10px] pl-[10%]'>
                    <h1 className='text-white text-[27px] leading-[44px] mt-[20px] font-bold mb-[10px]'>
                        All In <span className='text-[#0000FF]'>One </span> Trading <span className='text-[#0000FF]'>Indicator</span>
                    </h1>
                    <p className='pr-[23%] text-[17.5px] text-white pb-[10px]'>
                        Fully customizable in the Settings. The only Indicator with all the features you need to be profitable.
                    </p>
                    <img className='w-[80%]' src='./assets/chart1.png' alt='' />
                </div>
                <div className='w-[25%] md:w-full pl-[10px] md:pl-[10%] pr-[10px]'>
                    <ul className='list-none pt-[23%] !pl-[0px] text-[25px] leading-[28px] mb-[10px] text-white'>
                        <li>• Long and Short signals</li><br />
                        <li>• Trend dashboard</li><br />
                        <li>• Automatic Support and Resistance</li><br />
                        <li>• Automatic Trendlines</li><br />
                        <li>• Reversal Band</li><br />
                    </ul>
                    <div className='mt-[27px] md:hidden p-[4%] rounded-[20px] bg-[#0000FF] text-white text-base leading-[16px] font-[700] hover:scale-125 ease duration-300 cursor-pointer w-fit'>
                        <a>$24.99 / Month</a>
                    </div>
                </div>
                <div className='w-[25%] md:w-full pl-[10px] md:pl-[10%] pr-[10px]'>
                    <ul className='list-none pt-[33%] md:pt-[0px] text-[25px] leading-[28px] mb-[10px] text-white'>
                        <li>• Trend Candles</li><br />
                        <li>• Trend Clouds</li><br />
                        <li>• Fully Customizable</li><br />
                        <li>• 24/7 Support</li><br />
                        <li>• TP/SL Levels</li><br />
                    </ul>
                </div>
            </div>
            <div id='pricing' className='section w-full h-[4%] pt-[6%] pr-[10%] pl-[10%] pb-[5%] bg-[#ff9d00]'>
                <h1 className='text-white text-[24px] leading-[30px] font-[400] text-center mt-[20px] mb-[10px]'>CHOOSE YOUR PLAN WITH OUR</h1>
                <h1 className='text-white text-[64px] leading-[60px] font-bold text-center mt-[20px] mb-[10px]'>All-Inclusive Membership.</h1>
                <h1 className='text-white text-[18px] leading-[24px] font-[400] text-center mt-[20px] mb-[10px]'>See the details below & choose the perfect pricing plan for you.</h1>
            </div>
            <div className='pb-[10%] bg-[#2f3b69] w-full'>
                <div className='w-full flex justify-center lg:flex-col'>
                    <div className='text-white w-[30%] lg:w-full'>
                        <div className='rounded-[20px] mr-auto ml-auto max-w-[80%] lg:w-[50%] bg-[#121020] cursor-pointer hover:scale-105 hover:bg-[#1E1B2F] ease duration-300'>
                            <h1 className='w-full text-[22px] text-center leading-[44px] font-bold mb-[10px] uppercase'>Monthly</h1>
                            <h1 className='w-full text-white text-center text-[38px] leading-[44px] font-bold mb-[10px]'>$24.99</h1>
                            <p class="w-full pr-[10%] pl-[10%] leading-[45px] text-center">
                                Long and Short Signals<br />
                                Trend Dashboard<br />
                                Automatic Support and<br />
                                Resistance <br />
                                Automatic Trendlines<br />
                                Reversal Band
                            </p>
                            <div className='mr-auto ml-auto mt-[4%] pt-[9px] pb-[9px] pl-[15px] pr-[15px] rounded-[20px] bg-[#0000FF] text-white text-[100%] leading-[150%] font-[700] cursor-pointer w-fit'>
                                <a>Buy Now</a>
                            </div>
                        </div>
                    </div>
                    <div className='text-white w-[30%] lg:w-full lg:mt-[5%] lg:mb-[5%]'>
                        <div className='rounded-[20px] mr-auto ml-auto max-w-[80%] lg:w-[50%] bg-[#121020] cursor-pointer hover:scale-105 hover:bg-[#1E1B2F] ease duration-300'>
                            <h1 className='w-full text-[22px] text-center leading-[44px] font-bold mb-[10px] uppercase'>Monthly</h1>
                            <h1 className='w-full text-white text-center text-[38px] leading-[44px] font-bold mb-[10px]'>$24.99</h1>
                            <p class="w-full pr-[10%] pl-[10%] leading-[45px] text-center">
                                Long and Short Signals<br />
                                Trend Dashboard<br />
                                Automatic Support and<br />
                                Resistance <br />
                                Automatic Trendlines<br />
                                Reversal Band
                            </p>
                            <div className='mr-auto ml-auto mt-[4%] pt-[9px] pb-[9px] pl-[15px] pr-[15px] rounded-[20px] bg-[#0000FF] text-white text-[100%] leading-[150%] font-[700] cursor-pointer w-fit'>
                                <a>Buy Now</a>
                            </div>
                        </div>
                    </div>
                    <div className='text-white w-[30%] lg:w-full'>
                        <div className='rounded-[20px] mr-auto ml-auto max-w-[80%] lg:w-[50%] bg-[#121020] cursor-pointer hover:scale-105 hover:bg-[#1E1B2F] ease duration-300'>
                            <h1 className='w-full text-[22px] text-center leading-[44px] font-bold mb-[10px] uppercase'>Monthly</h1>
                            <h1 className='w-full text-white text-center text-[38px] leading-[44px] font-bold mb-[10px]'>$24.99</h1>
                            <p class="w-full pr-[10%] pl-[10%] leading-[45px] text-center">
                                Long and Short Signals<br />
                                Trend Dashboard<br />
                                Automatic Support and<br />
                                Resistance <br />
                                Automatic Trendlines<br />
                                Reversal Band
                            </p>
                            <div className='mr-auto ml-auto mt-[4%] pt-[9px] pb-[9px] pl-[15px] pr-[15px] rounded-[20px] bg-[#0000FF] text-white text-[100%] leading-[150%] font-[700] cursor-pointer w-fit'>
                                <a>Buy Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='pt-80px pr-30px pl-30px bg-[#ff9d00]'>
                <div className='max-w-[73%] mr-auto ml-auto'>
                    <h2 className='text-white text-[24px] leading-[30px] font-[400] text-center mt-[20px] mb-[10px]'>ANSWERS TO</h2>
                    <h1 className='text-white text-[60px] text-center leading-[44px] mt-[20px] font-bold mb-[10px]'>
                        Frequently asked Questions
                    </h1>
                    <div id='fag' className='mt-[50px] mb-[20px]'>
                        <Accordion />
                    </div>
                </div>
            </div>
            <p className='text-white text-center text-[18px]'>
                Still have questions? Email us at&nbsp;
                <a className='text-[#0000FF] underline'>contactviperalgo@gmail.com</a>
            </p>
        </div>
    )
}