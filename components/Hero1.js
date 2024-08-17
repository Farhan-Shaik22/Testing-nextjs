"use client"
import { motion} from "framer-motion";

export default function Hero1(){
    
    return(
        <motion.div className="flex-grow-0 h-screen w-screen grid grid-cols-3 grid-rows-3 bg-white overflow-x-clip">
            <motion.div style={{ backgroundImage: "url('/chilli-1.jpg')", 
            backgroundSize: "cover",      
            backgroundRepeat: "no-repeat", 
            backgroundPosition: "center",  
            }} initial={{opacity:0.1,scale:0.5}} whileHover={{scale:1.2,zIndex:100, transition: { duration: 0.5 }}} whileInView={{opacity:1,scale:1,transition:{duration:2}}} className="bg-black row-span-1"></motion.div>
            <motion.div style={{ backgroundImage: "url('/bitter.jpeg')", 
            backgroundSize: "cover",      
            backgroundRepeat: "no-repeat", 
            backgroundPosition: "center",  
            }} initial={{opacity:0.1,scale:0.5}} whileHover={{scale:1.2,zIndex:100, transition: { duration: 0.5 }}} whileInView={{opacity:1,scale:1,transition:{duration:2}}} className="bg-red-500 row-span-1"></motion.div>
            <motion.div style={{ backgroundImage: "url('/cucumber.jpg')", 
            backgroundSize: "cover",      
            backgroundRepeat: "no-repeat", 
            backgroundPosition: "center",  
            
            }} initial={{opacity:0.1,scale:0.5}} whileHover={{scale:1.2,zIndex:100, transition: { duration: 0.5 }}} whileInView={{opacity:1,scale:1,transition:{duration:2}}} className="bg-blue-300 row-span-1"></motion.div>
            <motion.div style={{ backgroundImage: "url('/maize-2.jpg')", 
            backgroundSize: "cover",      
            backgroundRepeat: "no-repeat", 
            backgroundPosition: "center",  
            
            }} initial={{opacity:0.1,scale:0.5}} whileHover={{scale:1.2,zIndex:100, transition: { duration: 0.5 }}} whileInView={{opacity:1,scale:1,transition:{duration:2}}} className=" bg-violet-500 row-span-1"></motion.div>
            <motion.div style={{ backgroundImage: "url('/okra.jpg')", 
            backgroundSize: "cover",      
            backgroundRepeat: "no-repeat", 
            backgroundPosition: "center",  
            
            }} initial={{opacity:0.1,scale:0.5}} whileHover={{scale:1.2,zIndex:100, transition: { duration: 0.5 }}} whileInView={{opacity:1,scale:1,transition:{duration:2}}} className=" bg-green-500 row-span-1"></motion.div>
            <motion.div style={{ backgroundImage: "url('/Paddy-home.jpeg')", 
            backgroundSize: "cover",      
            backgroundRepeat: "no-repeat", 
            backgroundPosition: "center",  
            
            }} initial={{opacity:0.1,scale:0.5}} whileHover={{scale:1.2,zIndex:100, transition: { duration: 0.5 }}} whileInView={{opacity:1,scale:1,transition:{duration:2}}} className=" bg-orange-500 row-span-1"></motion.div>
            <motion.div style={{ backgroundImage: "url('/tomato-2.jpg')", 
            backgroundSize: "cover",      
            backgroundRepeat: "no-repeat", 
            backgroundPosition: "center",  
            
            }} initial={{opacity:0.1,scale:0.5}} whileHover={{scale:1.2,zIndex:100, transition: { duration: 0.5 }}} whileInView={{opacity:1,scale:1,transition:{duration:2}}} className=" bg-pink-600 row-span-1"></motion.div>
            <motion.div style={{ backgroundImage: "url('/watermelon-1.jpg')", 
            backgroundSize: "cover",      
            backgroundRepeat: "no-repeat", 
            backgroundPosition: "center",  
            
            }} initial={{opacity:0.1,scale:0.5}} whileHover={{scale:1.2,zIndex:100, transition: { duration: 0.5 }}} whileInView={{opacity:1,scale:1,transition:{duration:2}}} className=" bg-yellow-500 row-span-1"></motion.div>
            <motion.div style={{ backgroundImage: "url('/okra.jpg')", 
            backgroundSize: "cover",      
            backgroundRepeat: "no-repeat", 
            backgroundPosition: "center",  
            
            }} initial={{opacity:0.1,scale:0.5}} whileHover={{scale:1.2,zIndex:100, transition: { duration: 0.5 }}} whileInView={{opacity:1,scale:1,transition:{duration:2}}} className=" bg-indigo-900 row-span-1"></motion.div>
        </motion.div>
    );
}