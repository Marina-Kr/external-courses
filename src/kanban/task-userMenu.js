window.onload = function () {
  let ul = document.querySelector('ul')
  let arrow = document.querySelector('#arrow')
  let wasClick = false;
  ul.onclick = function () {
    if (wasClick === false) {
      arrow.style.transform = "rotate(180deg)";
      let liFirst = document.createElement('li');
      ul.append(liFirst);
      liFirst.className = "user_menu_item";
      let liFirstLink = document.createElement('a');
      liFirstLink.href = "/account/"
      liFirstLink.innerHTML = 'My account';
      liFirst.append(liFirstLink);
      let liSecond = document.createElement('li');
      ul.append(liSecond);
      liSecond.className = "user_menu_item";
      let liSecondLink = document.createElement('a');
      liSecondLink.href = "/tasks/"
      liSecondLink.innerHTML = 'My tasks';
      liSecond.append(liSecondLink);
      let liThird = document.createElement('li');
      ul.append(liThird);
      liThird.className = "user_menu_item";
      let liThirdLink = document.createElement('a');
      liThirdLink.href = "/settings/"
      liThirdLink.innerHTML = 'My settings';
      liThird.append(liThirdLink);
      let liLast = document.createElement('li');
      ul.append(liLast);
      liLast.className = "user_menu_item";
      let liLastLink = document.createElement('a');
      liLastLink.href = "/logout/"
      liLastLink.innerHTML = 'Log out';
      liLast.append(liLastLink);
      wasClick = true
    }
    else {
      while (ul.children.length > 1) {
        ul.removeChild(ul.lastChild);
      }
      arrow.style.transform = "";
      wasClick = false;
    }
  }
}

