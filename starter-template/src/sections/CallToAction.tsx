// 'use client'; 

// import { AnimationPlaybackControls, motion , useAnimate} from "framer-motion";
// import { useEffect, useRef, useState } from "react";


// export default function CallToAction() {
//     const [isHovered , setIsHovered] = useState(false); 
//     const animation = useRef<AnimationPlaybackControls>(null);
//     const [scope , animate] = useAnimate();

//     useEffect(() => {
//         animation.current = animate(scope.current , {x : '-50%'} , {duration : 30 , ease : 'linear' , repeat : Infinity});
//     },[])

//     useEffect(() => {
//         if(animation.current){
//             if(isHovered){
//                 animation.current.speed = 0.5;
//             }else {
//                 animation.current.speed = 1;
//             }
//         }
//     },[isHovered])


//     return <section className="py-24">
//         <div className="overflow-x-clip p-4 flex">
//             <motion.div 
//                 ref={scope}
//                 animate={{
//                     x : '-50%' , 
//                 }}
//                 transition={{
//                     duration  : 30 , 
//                     ease : 'linear' ,
//                     repeat : Infinity
//                 }}
//             className="flex group flex-none gap-16 pr-16 text-7xl md:text-8xl font-medium"
//             onMouseEnter={ () => setIsHovered(true) }
//             onMouseLeave={ () => setIsHovered(false) }
//             >
            
//             {
//             Array.from({length : 10}).map((_ , i)=>(
//                 <div key={i} className=" group flex items-center gap-16">
//                     <span className="text-lime-400 text-7xl">&#10038;</span>
//                     <span className="group-hover:text-lime-400">Try it for free</span>
//                 </div>
//             ))
//         }
//             </motion.div>
//         </div>
        
//     </section>;
// }


'use client'; 

import { motion, useAnimate, AnimationPlaybackControls } from "framer-motion";
import { useEffect, useState } from "react";

export default function CallToAction() {
    const [isHovered, setIsHovered] = useState(false); 
    const [scope, animate] = useAnimate();
    const [animationControls, setAnimationControls] = useState<AnimationPlaybackControls | null>(null);

    useEffect(() => {
        const startAnimation = async () => {
            const controls = await animate(scope.current, 
                { x: '-50%' }, 
                { duration: 30, ease: 'linear', repeat: Infinity }
            );
            setAnimationControls(controls);
        };
        startAnimation();
    }, []);

    useEffect(() => {
        if (animationControls) {
            animationControls.speed = isHovered ? 0.5 : 1;
        }
    }, [isHovered, animationControls]);

    return (
        <section className="py-24">
            <div className="overflow-x-clip p-4 flex">
                <motion.div 
                    ref={scope}
                    className="flex group flex-none gap-16 pr-16 text-7xl md:text-8xl font-medium"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {
                        Array.from({ length: 10 }).map((_, i) => (
                            <div key={i} className="group flex items-center gap-16">
                                <span className="text-lime-400 text-7xl">&#10038;</span>
                                <span className="group-hover:text-lime-400 transition-colors">Try it for free</span>
                            </div>
                        ))
                    }
                </motion.div>
            </div>
        </section>
    );
}
