import { Bot } from "lucide-react";


export default function ChatHeader(){

return(

<div
className="
p-5
border-b
border-white/10
bg-gradient-to-r
from-blue-600/20
to-cyan-500/20
"
>


<div
className="
flex
items-center
gap-3
"
>

<div
className="
h-12
w-12
rounded-full
bg-gradient-to-r
from-blue-600
to-cyan-400
flex
items-center
justify-center
"
>

<Bot
className="text-white"
size={28}
/>


</div>



<div>

<h2
className="
text-white
font-bold
text-lg
"
>
Japjot AI Assistant
</h2>


<p
className="
text-sm
text-gray-400
"
>

Online • AI Portfolio Assistant

</p>


</div>


</div>


</div>


)

}  