function getFirstSelector(selecting)
{
  return document.querySelector(selecting);
}

function nestedTarget()
{
  return document.querySelector("#nested").querySelector(".target");
}

function increaseRankBy(n)
{
  const list = document.querySelector("#app").querySelectorAll('ul.ranked-list li');
  
  for (var i = 0; i < list.length; i++)
  {
    list[i].innerHTML = parseInt(list[i].innerHTML) + n;
  }
}

function deepestChild()
{
  const nested = document.querySelector("#grand-node")
  .querySelector("div").querySelector("div").querySelector("div").querySelector("div");
  
  return nested.innerHTML;
  
}