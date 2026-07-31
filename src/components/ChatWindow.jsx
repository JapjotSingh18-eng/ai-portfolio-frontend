import {useState,useEffect,useRef} from "react";

import ChatHeader from "./ChatHeader";
import MessageBubble from "./MessageBubble";
import QuickQuestions from "./QuickQuestions";
import TypingIndicator from "./TypingIndicator";


export default function ChatWindow(){


const [messages,setMessages]=useState([

{
role:"bot",
text:
"Hi 👋 I am Japjot's AI Portfolio Assistant.\n\nAsk me about my projects, skills, education, or AI experience."
}

]);


const [input,setInput]=useState("");

const [loading,setLoading]=useState(false);


const [showQuestions,setShowQuestions]=useState(true);



const chatEndRef=useRef();



useEffect(()=>{

chatEndRef.current?.scrollIntoView({
behavior:"smooth"
});

},[messages,loading]);




async function sendMessage(text=input){


if(!text.trim()) return;



setShowQuestions(false);



setMessages(prev=>[

...prev,

{
role:"user",
text:text
}

]);



setInput("");

setLoading(true);



try{


const response=await fetch(

"https://ai-portfolio-backend-063l.onrender.com/",

{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({

message:text

})

}

);



const data=await response.json();



setMessages(prev=>[

...prev,

{
role:"bot",
text:data.reply
}

]);



}

catch(error){


setMessages(prev=>[

...prev,

{
role:"bot",
text:"Unable to connect with AI server."
}

]);


}



setLoading(false);


}





return(

<div className="
h-screen
w-screen
flex
flex-col
bg-gradient-to-b
from-slate-950
to-slate-900
">


<ChatHeader/>


<div className="
flex-1
overflow-y-auto
p-4
space-y-4
">


{
messages.map((msg,index)=>(

<MessageBubble

key={index}

message={msg}

/>

))
}


{
loading && <TypingIndicator/>
}


<div ref={chatEndRef}/>


</div>



{
showQuestions &&

<QuickQuestions
sendMessage={sendMessage}
/>

}



<div className="
p-4
border-t
border-white/10
flex
gap-2
">


<input

value={input}

onChange={(e)=>setInput(e.target.value)}

onKeyDown={(e)=>{

if(e.key==="Enter")
sendMessage();

}}

placeholder="Ask about my portfolio..."

className="
flex-1
bg-slate-800
text-white
px-4
rounded-xl
outline-none
border
border-white/10
"

/>


<button

disabled={loading}

onClick={()=>sendMessage()}

className="
px-5
rounded-xl
bg-gradient-to-r
from-blue-600
to-cyan-400
font-semibold
disabled:opacity-50
"

>

Send

</button>


</div>


</div>

)

}