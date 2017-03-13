function getFirstSelector(selector) {
  return document.querySelector(`${selector}`);

}

function nestedTarget() {
  return document.querySelector("#nested .target")
}

function deepestChild() {
  var nodes = document.querySelectorAll("#grand-node div");
  return nodes[nodes.length-1];
}

function increaseRankBy(n) {
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')

  for (let i = 0, l = lis.length; i < l; i++) {
    var rankNumber = lis[i].textContent;
    lis[i].innerHTML = (parseInt(rankNumber) + n).toString();
  }
}
