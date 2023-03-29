// Import our custom CSS
import "../scss/styles.scss";

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";

// import { tasks } from "./api";

const TASK_ELEMENTS = Array.from(document.querySelectorAll(".task"));

const DATA = [];

for (let i = 0; i < 15; i++) {
  const newData = {
    clientName: {
      name: "John Smith",
      avatar: "https://randomuser.me/api/portraits/men/42.jpg",
    },
    createdAt: new Date("2023-03-29T14:30:00.000Z"),
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat sapien velit, eget gravida nulla iaculis ut.",
    files: ["document.pdf", "image.jpg", "presentation.pptx"],
    user: {
      name: "Jane Doe",
      avatar: "https://randomuser.me/api/portraits/women/15.jpg",
    },
    _id: "6129b9a019ca860025a7a8d1",
    viewers: [
      {
        name: "Sarah Johnson",
        avatar: "https://randomuser.me/api/portraits/women/36.jpg",
      },
      {
        name: "David Lee",
        avatar: "https://randomuser.me/api/portraits/men/91.jpg",
      },
      {
        name: "Emily Brown",
        avatar: "https://randomuser.me/api/portraits/women/62.jpg",
      },
      {
        name: "Daniel Garcia",
        avatar: "https://randomuser.me/api/portraits/men/5.jpg",
      },
      {
        name: "Olivia Hernandez",
        avatar: "https://randomuser.me/api/portraits/women/85.jpg",
      },
    ],
    messages: [
      "This looks great!",
      "Can we schedule a call to discuss this further?",
      "I have a question about the second file.",
    ],
  };

  DATA.push(newData);
}

console.log(DATA);

// const getTasks = async () => {
//   const { data } = await tasks();
//   return data?.tasks;
// };

TASK_ELEMENTS.map((t, i) => {
  const itemsToShow = t.querySelector(".card-body");

  if (itemsToShow) {
    DATA.map((task, index) => {
      const Item = document.createElement("div");
      Item.classList.add("item");
      Item.innerHTML = `<div class='bg-white task-item mb-3 p-3 mx-1'>
            <div class='d-flex justify-content-between align-items-center'>
              <div class='d-flex align-items-center'>
                <img class='user-img' src='${task.clientName.avatar}' alt='${
        task.clientName.name
      }'/>
                <span class='user-name'>
                  ${task.clientName.name}
                </span>
              </div>

              <div class='d-flex align-items-center'>
              <img class='user-img' src='${task.user.avatar}' alt='${
        task.user.name
      }'/>
              <span class='user-name'>
                ${task.user.name}
              </span>
            </div>
           
          </div>  

            <div class='d-flex justify-content-between align-items-center details'>
              <p>
                <i class="fa-solid fa-layer-group"></i>
                <span>
                   ${task.details?.substr(0, 25)}...
                </span>
              </p>
              <p class='bg-muted'>
                <i class="fa-solid fa-layer-group"></i>
                <span>
                  1/2
                </span>
              </p>
          </div>

          <div class='action-items'>
            <div class='viewers'>
              <img  class='user-img' src='${task.viewers[0].avatar}' />
              <img  class='user-img' src='${task.viewers[1].avatar}' />
              <span>15+</span>
            </div>
            
            <button class='comments'>
              <i class="fa-regular fa-comments"></i>
              <span>15</span>
            </button>

            <button class='files'>
              <i class="fa-solid fa-paperclip"></i>
              <span>25</span>
            </button>

            <div class='date'>
              <i class="fa-solid fa-calendar-days"></i>
              <span>30-12-2022</span>
            </div>
          </div>
        </div>`;

      itemsToShow.appendChild(Item);
    });

    // do something with Item
  } else {
    console.error('Element with class "card-body" not found');
  }
});
