function displayConfirmation () {

    const confirmationContainer = document.createElement("div");
    confirmationContainer.classList.add("confirmation-container");
    document.body.appendChild(confirmationContainer);

    const confirmationTitleContainer = document.createElement("div");
    confirmationTitleContainer.classList.add("confirmation-title-container");
    confirmationContainer.appendChild(confirmationTitleContainer);

    const confirmationTitle = document.createElement("h1");
    confirmationTitle.textContent = "Your order has been confirmed!";
    confirmationTitleContainer.appendChild(confirmationTitle);


    const confirmationContentContainer = document.createElement("div");
    confirmationContentContainer.classList.add("confirmation-content-container");
    confirmationContainer.appendChild(confirmationContentContainer);

    const confirmImgContainer = document.createElement("div");
    confirmImgContainer.classList.add("confirm-img-container");
    confirmationContentContainer.appendChild(confirmImgContainer);

    const confirmImg = document.createElement("img");
    confirmImg.classList.add("confirm-img");
    confirmImg.src = "assets/images/checkout-confirmation.png";
    confirmImg.alt = "Confirmation checkbox illustration";
    confirmationContentContainer.appendChild(confirmImg);

    const continueLink = document.createElement("a");
    continueLink.href = "/index.html";
    confirmationContentContainer.appendChild(continueLink);

    const continueBtn = document.createElement("button");
    continueBtn.classList.add("continue-btn");
    continueBtn.textContent = "CONTINUE SHOPPING";
    continueLink.appendChild(continueBtn);
}

displayConfirmation();