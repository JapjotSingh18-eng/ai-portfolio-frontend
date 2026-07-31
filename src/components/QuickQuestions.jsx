
import { Sparkles } from "lucide-react";


export default function QuickQuestions({sendMessage}) {


const questions = [

    "Tell me about Japjot's projects",

    "What are his technical skills?",

    "Explain AI Portfolio Chatbot",

    "What is his education?"

];


return (

<div
className="
px-4
pb-3
"
>


<p className="
text-xs
text-gray-400
mb-3
">
Try asking:
</p>


<div className="
flex
flex-wrap
gap-2
">


{
questions.map((question,index)=>(


<button

key={index}

onClick={()=>sendMessage(question)}

className="
flex
items-center
gap-2
text-sm
px-4
py-2
rounded-full
bg-slate-800
text-gray-200
border
border-white/10
hover:border-cyan-400
hover:bg-slate-700
transition-all
duration-300
"

>

<Sparkles size={14}/>

{question}

</button>


))
}


</div>


</div>


)

}