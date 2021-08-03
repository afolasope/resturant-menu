const menu = [
  {
    id: 1,
    title: "Sunny Bread",
    category: "breakfast",
    price: 15.99,
    img: `images/breakfast-1.jpg`,
    desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus dicta expedita ipsa, ullam, vel veritatis aspernatur voluptas consequatur odio nobis dolorum possimus, at qui atque sunt soluta temporibus quas facere.`,
  },
  {
    id: 2,
    title: "fruit Salad",
    category: "breakfast",
    price: 25.99,
    img: "images/breakfast-2.jpg",
    desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus dicta expedita ipsa, ullam, vel veritatis aspernatur voluptas consequatur odio nobis dolorum possimus, at qui atque sunt soluta temporibus quas facere.`,
  },
  {
    id: 3,
    title: "Vegetable Salad",
    category: "breakfast",
    price: 15.89,
    img: "images/breakfast-3.jpg",
    desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus dicta expedita ipsa, ullam, vel veritatis aspernatur voluptas consequatur odio nobis dolorum possimus, at qui atque sunt soluta temporibus quas facere.`,
  },
  {
    id: 4,
    title: "Pasta and Sauce",
    category: "lunch",
    price: 12.99,
    img: "images/lunch-1.jpg",
    desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus dicta expedita ipsa, ullam, vel veritatis aspernatur voluptas consequatur odio nobis dolorum possimus, at qui atque sunt soluta temporibus quas facere.`,
  },
  {
    id: 5,
    title: "French fries and Chicken",
    category: "lunch",
    price: 21.29,
    img: "images/lunch-2.jpg",
    desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus dicta expedita ipsa, ullam, vel veritatis aspernatur voluptas consequatur odio nobis dolorum possimus, at qui atque sunt soluta temporibus quas facere.`,
  },
  {
    id: 6,
    title: "Sandwich",
    category: "lunch",
    price: 15.99,
    img: "images/lunch-3.jpg",
    desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus dicta expedita ipsa, ullam, vel veritatis aspernatur voluptas consequatur odio nobis dolorum possimus, at qui atque sunt soluta temporibus quas facere.`,
  },
  {
    id: 7,
    title: "Steak",
    category: "dinner",
    price: 17.99,
    img: "images/dinner-1.jpg",
    desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus dicta expedita ipsa, ullam, vel veritatis aspernatur voluptas consequatur odio nobis dolorum possimus, at qui atque sunt soluta temporibus quas facere.`,
  },
  {
    id: 8,
    title: "Meat balls",
    category: "dinner",
    price: 9.99,
    img: "images/dinner-2.jpg",
    desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus dicta expedita ipsa, ullam, vel veritatis aspernatur voluptas consequatur odio nobis dolorum possimus, at qui atque sunt soluta temporibus quas facere.`,
  },
  {
    id: 1,
    title: "Fried rice",
    category: "dinner",
    price: 25.99,
    img: "images/dinner-3.jpg",
    desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus dicta expedita ipsa, ullam, vel veritatis aspernatur voluptas consequatur odio nobis dolorum possimus, at qui atque sunt soluta temporibus quas facere.`,
  },
  {
    id: 1,
    title: "Fish dish",
    category: "dinner",
    price: 20.99,
    img: "images/dinner-4.jpg",
    desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus dicta expedita ipsa, ullam, vel veritatis aspernatur voluptas consequatur odio nobis dolorum possimus, at qui atque sunt soluta temporibus quas facere.`,
  },
];

const itemContainer = document.querySelector(".items-container");
const filterBtns = document.querySelectorAll(".filter-btn");

// load items
window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);
});

// filter items
filterBtns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const category = e.currentTarget.dataset.id;
    console.log(category);

    const menuCategory = menu.filter(function (menuItem) {
      console.log(menuItem);
      console.log(menuItem.category);
      if (menuItem.category === category) {
        return menuItem;
      }
    });
    if (category === "all") {
      displayMenuItems(menu);
    } else {
      displayMenuItems(menuCategory);
    }
    console.log(menuCategory);
  });
});

const displayMenuItems = function (menuItems) {
  let displayMenu = menuItems.map(function (item) {
    return ` <article>
  <div class="img-container">
    <img src=${item.img} alt=${item.title} />
  </div>
  <div class="item-info">
    <header>
      <h4>${item.title}</h4>
      <h4 class="item-price">${item.price}</h4>
    </header>
    <p class="item-text">
      ${item.desc}
    </p>
  </div>
</article>`;
  });
  displayMenu = displayMenu.join("");
  itemContainer.innerHTML = displayMenu;
};
