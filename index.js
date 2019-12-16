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
  var list = document.querySelector("#app").querySelectorAll('ul.ranked-list li');
  
  for (var i = 0; i < list.length; i++)
  {
    list[i].innerHTML = parseInt(list[i].innerHTML) + n;
  }
}

function deepestChild()
{
  var nested = document.querySelector("#grand-node");
  
  while(nested.children[0])
  {
    nested = nested.children[0];
  }
  
  return nested;
}