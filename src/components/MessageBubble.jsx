import { Bot, User } from "lucide-react";
import { motion } from "framer-motion";


export default function MessageBubble({message}){


return(

<motion.div

initial={{
opacity:0,
y:15
}}

animate={{
opacity:1,
y:0
}}

className={
message.role==="user"
?
"flex justify-end"
:
"flex justify-start"
}

>


<div

className={

message.role==="user"

?

`
bg-gradient-to-r
from-blue-600
to-cyan-500
text-white
px-4
py-3
rounded-2xl
rounded-br-sm
max-w-[85%]
`

:

`
bg-slate-800
text-gray-200
px-4
py-3
rounded-2xl
rounded-bl-sm
max-w-[85%]
border
border-white/10
`

}

>


<div className="
flex
gap-2
items-start
">


{

message.role==="bot"

?

<Bot size={17}/>

:

<User size={17}/>

}


<p className="
leading-relaxed
text-sm
">

{message.text}

</p>


</div>


</div>


</motion.div>

)

}