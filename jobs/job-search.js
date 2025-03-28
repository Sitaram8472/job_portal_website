const catergories = Array.from(jcategory);

const displayitem = (Items) =>{
  const rootelement = document.getElementById("root");
    rootelement.innerHTML = "";

    Items.forEach((Item) => {
      const{index, image, title, rate, avg} = Item;
      const jlist = document.createElement("div");
      jlist.className = "jlist";
      jlist.innerHTML = ` 
                    <img src="${image}" alt="">
                    <h3>${title}</h3>
                    <p>${rate}</p>
                    <span id="key">${avg}</span>
                    `;
                    rootelement.appendChild(jlist);
    });
};
displayitem(catergories);