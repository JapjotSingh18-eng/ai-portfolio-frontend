import { Bot } from "lucide-react";


export default function TypingIndicator(){


return(

<div className="
flex
items-center
gap-3
bg-slate-800
px-4
py-3
rounded-2xl
w-fit
border
border-white/10
">


<Bot size={18}/>


<div className="flex gap-1">


<span className="
w-2
h-2
bg-cyan-400
rounded-full
animate-bounce
"/>


<span className="
w-2
h-2
bg-cyan-400
rounded-full
animate-bounce
[animation-delay:150ms]
"/>


<span className="
w-2
h-2
bg-cyan-400
rounded-full
animate-bounce
[animation-delay:300ms]
"/>


</div>


</div>

)

}