const quiz = [

{q:"निम्न में से कौनसा त्यौहार चैत्र माह में मनाया जाता है?",o:["नागपंचमी","गोगा नवमी","तीज","घुड़ला"],a:4},

{q:"देवउठनी एकादशी के बारे में कौनसा कथन गलत है?",o:["चातुर्मास समाप्त होता है","भगवान विष्णु जागते हैं","तुलसी विवाह होता है","आषाढ़ शुक्ल एकादशी को मनाया जाता है"],a:4},

{q:"ईसर-ईसरी की पूजा किस त्योहार पर होती है?",o:["तीज","गणगौर","रक्षाबंधन","नागपंचमी"],a:2},

{q:"बूंदी में कजली तीज किस माह में मनाई जाती है?",o:["श्रावण","भाद्रपद","फाल्गुन","चैत्र"],a:2},

{q:"गुलाबी गणगौर कहाँ मनाई जाती है?",o:["बूंदी","पुष्कर","अजमेर","नाथद्वारा"],a:4}

]

while(quiz.length<70){

quiz.push({
q:"Question "+(quiz.length+1),
o:["Option 1","Option 2","Option 3","Option 4"],
a:1
})

}

const questionsDiv=document.getElementById("questions")

quiz.forEach((item,index)=>{

let div=document.createElement("div")
div.className="question"

div.innerHTML=`
<p><b>Q${index+1}. ${item.q}</b></p>

<label><input type="radio" name="q${index}" value="1"> ${item.o[0]}</label>
<label><input type="radio" name="q${index}" value="2"> ${item.o[1]}</label>
<label><input type="radio" name="q${index}" value="3"> ${item.o[2]}</label>
<label><input type="radio" name="q${index}" value="4"> ${item.o[3]}</label>
`

questionsDiv.appendChild(div)

})

function submitTest(){

let score=0

quiz.forEach((item,index)=>{

let selected=document.querySelector(`input[name="q${index}"]:checked`)

if(selected){

if(parseInt(selected.value)===item.a){
score++
}

}

})

document.getElementById("result").innerHTML="Your Score: "+score+" / 70"

}

let time=5400

setInterval(()=>{

let m=Math.floor(time/60)
let s=time%60

document.getElementById("timer").innerHTML=m+":"+(s<10?"0":"")+s

time--

if(time<0){
submitTest()
}

},1000)
