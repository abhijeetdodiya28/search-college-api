const url = "http://universities.hipolabs.com/search?name=";
let btn = document.querySelector("button");
let btnrefresh = document.querySelector("#refresh")

btn.addEventListener("click", async () => {
  let country = document.querySelector("input").value;
  console.log(country);
  
  let colArr = await getcolleges(country);
  show(colArr);
})

btnrefresh.addEventListener("click", ()=>{
    document.querySelector("#list").innerHTML = "";
    document.querySelector("#input").value ="";
})

function show(colArr) {
  let list = document.querySelector("#list");
  // list.innerText = "";
  for(col of colArr){
    console.log(col.name);

    let li = document.createElement("li");
    li.innerText = col.name;
    list.appendChild(li);
  }  
}


async function getcolleges(country) {
  try{
    let res = await axios.get(url + country);//concatenation of url and country..
    return res.data;
  }catch(e){
    console.log(e);
    return [];
  }
}
