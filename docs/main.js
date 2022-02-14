const links=document.querySelectorAll(".calander p")
const topic=document.querySelectorAll(".topic")
fetch("data.json")
    .then(response=> response.json())
    .then(json=>{
        data=json
        console.log(data[0])
        links.forEach(link=>{
            let flag=false
            link.addEventListener("click",(e)=>{
                links.forEach(l=>{
                    l.style.color=" hsl(236, 100%, 87%)"
                })
                    link.style.color="white"
                if(e.target.innerHTML=="Daily"){
                    let i=0
                    topic.forEach(box=>{
                        box.nextElementSibling.children[0].innerHTML=data[i].timeframes.daily.current +"hrs"
                        box.nextElementSibling.children[1].innerHTML="Last Week-"+data[i].timeframes.daily.previous+"hrs"
                        i++
                    })
                }
                if(e.target.innerHTML=="Weekly"){
                    let i=0
                    topic.forEach(box=>{
                        box.nextElementSibling.children[0].innerHTML=data[i].timeframes.weekly.current +"hrs"
                        box.nextElementSibling.children[1].innerHTML="Last Week-"+data[i].timeframes.weekly.previous+"hrs"
                        i++
                    })
                }
                if(e.target.innerHTML=="Monthly"){
                    let i=0
                    topic.forEach(box=>{
                        box.nextElementSibling.children[0].innerHTML=data[i].timeframes.monthly.current +"hrs"
                        box.nextElementSibling.children[1].innerHTML="Last Week-"+data[i].timeframes.monthly.previous+"hrs"
                        i++
                    })
                }
            })
        })
    });