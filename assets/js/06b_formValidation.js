window.addEventListener("load", function() {

	// get all button with classes .confirm-delete-button and .cancel-delete-button
	var btnsToHide = document.querySelectorAll(".confirm-delete-button, .cancel-delete-button");

	for (var i = 0; i < btnsToHide.length; i++) {								// hide buttons in variable btnsToHide on page load
		btnsToHide[i].style.visibility = "hidden";
	}

	/* DELETE BUTTON */
	var dltBtn = document.querySelectorAll(".delete-button"); 					// querySelectorALL
	for (var i = 0; i < dltBtn.length; i++) {									// use to loop through array of delete buttons
		dltBtn[i].addEventListener("click", handleDeleteClick);					// for each button set a listener for click event
	}

	function handleDeleteClick(dltBtnEvent) {									// describe what function does
		dltBtnEvent.target.style.visibility = "hidden"; 						// add "hidden" to dltBtn

		var btnParent = dltBtnEvent.target.parentNode;							// get parent of the delete button that was clicked
		var btnChildren = btnParent.children;									// get children of parent node that contains delete button clicked

		for (var i = 0; i < btnChildren.length; i++) {
			if (btnChildren[i].classList.contains("confirm-delete-button") || 
				btnChildren[i].classList.contains("cancel-delete-button")) {

				btnChildren[i].style.visibility = "visible";
			}
		}
	}

	/* CANCEL BUTTON */
	var cnclBtn = document.querySelectorAll(".cancel-delete-button");
	for (var i = 0; i < cnclBtn.length; i++) {
		cnclBtn[i].addEventListener("click", handleCancelClick);
	}

	function handleCancelClick(cnlBtnEvent) {
		cnlBtnEvent.target.style.visibility = "hidden";

		var btnParent = cnlBtnEvent.target.parentNode;
		var btnChildren = btnParent.children;

		for (var i = 0; i < btnChildren.length; i++) {

			if (btnChildren[i].classList.contains("confirm-delete-button")) {
				btnChildren[i].style.visibility = "hidden";
			}

			if (btnChildren[i].classList.contains("delete-button")) {
				btnChildren[i].style.visibility = "visible";
			}
		}

		cnlBtnEvent.preventDefault();
	}

	/* CONFIRM BUTTON */
	var cnfmBtn = document.querySelectorAll(".confirm-delete-button");
	for (var i = 0; i < cnfmBtn.length; i++) {
		cnfmBtn[i].addEventListener("click", handleConfirmClick);
	}

	function handleConfirmClick(cnfmBtnEvent) {
		cnfmBtnEvent.target.style.visibility = "hidden";

		// reference to parent of event object's target (div.delete-buttons)
		var btnParent = cnfmBtnEvent.target.parentNode;  // target element where event occurred
		var btnParentRow = btnParent.parentNode;
		var parentItem = btnParentRow.parentNode;
		parentItem.removeChild(btnParentRow);

		// var btnChildren = btnParent.children;

		// for (var i = 0; i < btnChildren.length; i++) {

		// 	if (btnChildren[i].classList.contains("delete-button")) {
		// 		btnChildren[i].style.visibility = "hidden";
		// 	}

		// 	if (btnChildren[i].classList.contains("cancel-delete-button")) {
		// 		btnChildren[i].style.visibility = "hidden";
		// 	}
		// }

		// btnParent.innerHTML = "This item has been deleted.";
		cnfmBtnEvent.preventDefault();
	}



	/* VALIDATE TEXT INPUTS ON BLUR */
	var allTextInputs = document.querySelectorAll(".text-input");

	for (var i = 0; i < allTextInputs.length; i++) {
		allTextInputs[i].addEventListener("blur", valTextInputs);
		allTextInputs[i].addEventListener("focus", valRemoveInv);
	}

	function valTextInputs(validEvt) {
		if (validEvt.target.value === "") {
			validEvt.target.classList.add("required");
		}

		if (validEvt.target.value === "") {
			var inputParent = validEvt.target.parentNode;
			var inputChildren = inputParent.children;
			var inputErr = document.createElement('p');
			inputErr.classList.add('input-field-error-msg');
			inputErr.innerHTML = 'This is a required field.';
			inputParent.appendChild(inputErr);
		}
	}

	function valRemoveInv(validEvt) {
		validEvt.target.classList.remove("required");
		validEvt.target.classList.remove('input-field-valid');

		var remInputErrPar = validEvt.target.parentNode;
		var remInputErr = remInputErrPar.querySelector('.input-field-error-msg');

		if (remInputErr !== null) {
			remInputErr.classList.remove('input-field-valid-msg');
			remInputErrPar.removeChild(remInputErr);
		}
	}


	/* SUBMIT FORM */
	var submitEvt = document.getElementById("checklist");
	submitEvt.addEventListener("submit", handleSubmitClick); 

	function handleSubmitClick(validEvt) {
		var inputValid = true;
		var formObj = document.getElementById('checklist');
		var remErr = formObj.querySelector('.error-message');

		if (remErr !== null) {
			formObj.removeChild(remErr);
		}

		for (var i = 0; i < allTextInputs.length; i++) {
			if (allTextInputs[i].value === "") {
				allTextInputs[i].classList.add("required");
				inputValid = false;
			} else {
				allTextInputs[i].classList.remove("required");
			}
		}

		if (!inputValid) {

			validEvt.preventDefault();			

			var errorMsg = document.createElement('div');
			errorMsg.classList.add('error-message');
			// errorMsg.innerHTML = 'fix it';
			
			formObj.appendChild(errorMsg);

		}
	}
});
