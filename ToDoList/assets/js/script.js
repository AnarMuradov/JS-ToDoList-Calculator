const input = document.querySelector("input");
const button = document.querySelector(".btn");
const ul = document.querySelector(".list");


button.addEventListener("click", function myf() {
    if(input.value==""){
        alert("you didn't enter anything")
    }
    else{
        const txt = input.value;
  const li = document.createElement("li");
  ul.append(li);
  li.textContent = txt;
  input.value = "";
    
  li.addEventListener("click", function myf2() {
    li.remove();
  });
  const arr = [{ todo: li.textContent }];
  localStorage.setItem("ToDoList", JSON.stringify(arr));
  console.log(JSON.parse(localStorage.getItem("ToDoList")));
}
});


// const arr =[{naton:"lak"} ,{nation:"osetiya" }]
// localStorage.setItem("nat",JSON.stringify(arr))
// console.log(JSON.parse(localStorage.getItem("nat")));