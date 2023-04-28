import { useEffect, useState } from "react"

const ProgressBar = () => {
    
        const [scroolTop, setScroolTop] = useState(0)
    
        function headerScrl(){
            const windowScrool = document.documentElement.scrollTop;
            const heightScrool = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    
            const scroolAll = (windowScrool / heightScrool) * 100;
    
            setScroolTop(scroolAll)
    
        }
        useEffect(() => {
            window.addEventListener('scroll', headerScrl)
    
            return () => window.removeEventListener('scroll', headerScrl)
        })
        return (
            <div id="progress-bar" className=" sticky w-[100%] h-2 bg-white top-0 left-0 z-[999999]">
                <div id="bar" className="w-[0%] h-[100%] bg-primary" style={{width: `${scroolTop}%`}}>
    
                </div>
            </div>
        )
    }
    


export default ProgressBar