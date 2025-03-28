const catergories = Array.from(jcategory);

document.getElementById("searchbar").addEventListener("keyup", (e) =>{
  const searchdata = e.target.value.toLowerCase()
  const filterdate = catergories.filter((Item) =>
    Item.title.toLowerCase().includes(searchdata)
  );
  displayitem(filterdate);
});

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

      jlist.addEventListener("click", () =>{
        window.location.href = `jobsdetail.html?id=${index}`;
      });

    });
};
displayitem(catergories);