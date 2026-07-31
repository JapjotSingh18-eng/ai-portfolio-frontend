import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, X } from "lucide-react";

import ChatWindow from "./ChatWindow";


export default function ChatBot(){

    const [open,setOpen] = useState(true);


    return(
        <>

        {!open && (

            <motion.button

                whileHover={{scale:1.1}}
                whileTap={{scale:0.9}}

                onClick={()=>setOpen(true)}

                className="
                fixed
                bottom-8
                right-8
                z-50
                h-16
                w-16
                rounded-full
                bg-gradient-to-r
                from-blue-600
                to-cyan-400
                shadow-2xl
                flex
                items-center
                justify-center
                "
            >

                <MessageCircle 
                    size={32}
                    className="text-white"
                />

            </motion.button>

        )}



        <AnimatePresence>

        {
            open && (

                <motion.div

                initial={{
                    opacity:0,
                    scale:0.8,
                    y:50
                }}

                animate={{
                    opacity:1,
                    scale:1,
                    y:0
                }}

                exit={{
                    opacity:0,
                    scale:0.8,
                    y:50
                }}

                transition={{
                    duration:0.3
                }}


                className="
                fixed
                bottom-6
                right-6
                z-50
                w-[95vw]
                sm:w-[430px]
                h-[650px]
                rounded-3xl
                overflow-hidden
                bg-slate-950/90
                backdrop-blur-xl
                border
                border-white/10
                shadow-2xl
                "

                >

                   


                    <ChatWindow/>


                </motion.div>

            )
        }


        </AnimatePresence>


        </>
    )
}