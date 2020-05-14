export function manageIssues() {

	let backlogStorage = []
	let readyStorage = []
	let progressStorage = []
	let finishedStorage = []

	function disableButton(ulId, buttonId) {
		if (document.querySelector(ulId).querySelector('li')) {
		document.querySelector(buttonId).disabled = false;
		}
		else document.querySelector(buttonId).disabled = true;
	}

	function disableAllButtons() {
		let buttons = document.querySelectorAll('button')
		for (let button of buttons) {
			button.disabled = "disabled";
		}
	}

	function enableButtons() {
		document.getElementById('btn_add_backlog').removeAttribute("disabled");
		disableButton('#backlog', '#btn_add_ready');
		disableButton('#ready', '#btn_add_progress');
		disableButton('#progress', '#btn_add_finished');
	}

	function deleteIssues(className) {
		let deleteElements = document.querySelectorAll(className);
		deleteElements.forEach((elem) => {
			elem.remove();
		})
	}

	function loadFromStorage() {
		let keys = Object.keys(localStorage);
		for (let key of keys) {
			if (key === "backlog") {
				backlogStorage = JSON.parse(localStorage.backlog);
			}	
		}
		for (let key of keys) {
			if (key === "ready") {
				readyStorage = JSON.parse(localStorage.ready);
			}
		}
		for (let key of keys) {
			if (key === "progress") {
				progressStorage = JSON.parse(localStorage.progress);
			}
		}
		for (let key of keys) {
			if (key === "finished") {
				finishedStorage = JSON.parse(localStorage.finished);
			}
		}
	}

	function fillIssues(buttonID, storage) {
		let button = document.getElementById(buttonID);
		let newIssue;
		for (let i = 0; i < storage.length; i++) {
			newIssue = document.createElement('li');
			newIssue.className = "issues";
			button.before(newIssue);
			newIssue.innerHTML = storage[i].name;
		}
	}

	function fillAllIssues() {
		fillIssues('btn_add_backlog', backlogStorage);
		fillIssues('btn_add_ready', readyStorage);
		fillIssues('btn_add_progress', progressStorage);
		fillIssues('btn_add_finished', finishedStorage);
	}

	function timeoutRemove() {
		document.querySelector('#dropdown_tasks').remove();
		deleteIssues('#backlog > .issues');
		deleteIssues('#ready > .issues');
		deleteIssues('#progress > .issues');
		deleteIssues('#finished > .issues');
		fillAllIssues();
		enableButtons();
	}

	function changeIssue(storageFrom, storageTo) {
		return function (onclick) {
			this.remove();
			for (let i = 0; i < storageFrom.length; i++) {
				if (storageFrom[i].name === this.innerHTML) {
					document.querySelector('#dropdown_tasks').animate([
						{ transform: 'translate(0)' },
						{ transform: 'translate3d(-100%,0,0)' }
					], 300);
					setTimeout(timeoutRemove, 300);
					storageTo.push(storageFrom[i])
					storageFrom.splice(i, 1);
					localStorage.backlog = JSON.stringify(backlogStorage);
					localStorage.ready = JSON.stringify(readyStorage);
					localStorage.progress = JSON.stringify(progressStorage);
					localStorage.finished = JSON.stringify(finishedStorage);

				}
			}

		}
	}

	function createDropdown(buttonId, storage) {
		let dropdown = document.createElement('ul');
		document.getElementById(buttonId).before(dropdown);
		dropdown.id = "dropdown_tasks";
		let item;
		for (let i = 0; i < storage.length; i++) {
			item = document.createElement('li');
			item.className = "dropdown_items";
			item.innerHTML = storage[i].name;
			dropdown.appendChild(item);
		}
	}

	function addIssueBacklog() {
		let backlogInput = document.createElement('input');
		this.before(backlogInput);
		disableAllButtons();
		backlogInput.onblur = function () {
			let backlogButton = document.getElementById('btn_add_backlog');
			let id = backlogStorage.length + readyStorage.length + progressStorage.length + finishedStorage.length + 1;
			let issue = { title: 'backlog', id: ('task' + id), name: this.value };
			backlogStorage.push(issue)
			localStorage.backlog = JSON.stringify(backlogStorage);
			let newIssue = document.createElement('li');
			newIssue.className = "issues";
			backlogButton.before(newIssue);
			newIssue.innerHTML = issue.name;
			this.remove();
			enableButtons();
		}
	}

	function addIssueReady() {
		disableAllButtons();
		createDropdown('btn_add_ready', backlogStorage);
		let elements = document.querySelectorAll('.dropdown_items');
		let newItem;
		elements.forEach((elem) => {
			elem.addEventListener('click', changeIssue(backlogStorage, readyStorage))
		})
	}

	function addIssueProgress() {
		disableAllButtons();
		createDropdown('btn_add_progress', readyStorage);
		let elements = document.querySelectorAll('.dropdown_items');
		let newItem;
		elements.forEach((elem) => {
			elem.addEventListener('click', changeIssue(readyStorage, progressStorage))
		})
	}

	function addIssueFinished() {
		disableAllButtons();
		createDropdown('btn_add_finished', progressStorage);
		let elements = document.querySelectorAll('.dropdown_items');
		let newItem;
		elements.forEach((elem) => {
			elem.addEventListener('click', changeIssue(progressStorage, finishedStorage))
		})
	}

	loadFromStorage();
	fillAllIssues();
	enableButtons();
	document.querySelector('#btn_add_backlog').addEventListener('click', addIssueBacklog, false);
	document.querySelector('#btn_add_ready').addEventListener('click', addIssueReady, false);
	document.querySelector('#btn_add_progress').addEventListener('click', addIssueProgress, false);
	document.querySelector('#btn_add_finished').addEventListener('click', addIssueFinished, false);
}






