

const toggleButton = document.getElementsByClassName('togglebtn')[0]
const navbarLinks = document.getElementsByClassName('navs')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})
const projectArray=[
    {
        id:1,
        name: "HelloPink!",
        info:"Building ReactJS app that allows users select slower to buy from different categories.",
        image: "attachments/screenshot1.png"
    },
    {

        id:2,
        name: "ToDo",
        info:"Building a ReactJS app that allows users input, delete and mark as completed their day-to-day activities.",
        image: "attachments/screenshot1.png"
    }
]
document.querySelector(".myProject").innerHTML =
projectArray.map((items) => 
   
  ` <div class="cards">
                <img src="${items.image}"/>
                <div class="card-text">
                    <h2>${items.name}</h2>
                    <p>${items.info}</p>
                    <button class="button1">View Me</button>
                </div>
            </div>`
)
