export function userMenu() {
	let ul = document.querySelector('ul')
	let arrow = document.querySelector('#arrow')
	let wasClicked = false;
	class Item {
		constructor(name, reference) {
			this.name = name;
			this.reference = reference;
		}
	}
	ul.onclick = function () {
		let firstItem = new Item('My account', '/account')
		let secondItem = new Item('My tasks', '/tasks')
		let thirdItem = new Item('My settings', '/settings')
		let lastItem = new Item('Log out', '/logout')
		let itemsArray = [firstItem, secondItem, thirdItem, lastItem]
		if (!wasClicked) {
			arrow.style.transform = "rotate(180deg)";
			let li;
			for (let i = 0; i < itemsArray.length; i++) {
				li = document.createElement('li');
				ul.append(li);
				li.className = "user_menu_item";
				let liLink = document.createElement('a');
				liLink.href = itemsArray[i].reference;
				liLink.innerHTML = itemsArray[i].name;
				li.append(liLink);
				wasClicked = true
			}
		} else {
			while (ul.children.length > 1) {
				ul.removeChild(ul.lastChild);
			}
			arrow.style.transform = "";
			wasClicked = false;
		}
	}
}
