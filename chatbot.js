let botImg = document.getElementById("botImg")
let cnt = document.getElementById("cnt")
let cross = document.getElementById("cross")
let chatCnt = document.getElementById("chatCnt")



let textAreaExample = document.getElementById("textAreaExample")

botImg.addEventListener("click", () => {
  console.log("CONNECT")
    cnt.style.display = "block"
})
cross.addEventListener("click", () => {
    cnt.style.display = "none"
})

let botMsg =["How are you?","enter your mobile number","enter your queries"];
let index= 0;
textAreaExample.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        if (e.target.value.trim() === "") {
            alert("Please enter your message")
        }
        else {
            let divCnt = document.createElement("div");
            divCnt.innerHTML = `
                  <div class="d-flex flex-row justify-content-end mb-4">
                      <div class="p-3 me-3 border bg-body-tertiary" style="border-radius: 15px;">
                        <p class="small mb-0">${e.target.value}</p>
                      </div>
                      <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
                        alt="avatar 1" style="width: 45px; height: 100%;">
                    </div>
                `

                // bot message generator
           let botMsgCnt =  document.createElement("div")
           botMsgCnt.innerHTML=`
               <div class="d-flex flex-row justify-content-start mb-4">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                      alt="avatar 1" style="width: 45px; height: 100%;">
                    <div class="p-3 ms-3" style="border-radius: 15px; background-color: rgba(57, 192, 237,.2);">
                      <p class="small mb-0">${botMsg[index]}</p>
                    </div>
                  </div>
           `
            chatCnt.appendChild(divCnt)
            chatCnt.appendChild(botMsgCnt)
            textAreaExample.value = ""
            index++;
        }
    }
})
