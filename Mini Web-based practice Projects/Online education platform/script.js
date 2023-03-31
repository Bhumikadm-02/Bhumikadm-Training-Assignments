var enrollButtons = document.querySelectorAll(".button");
            enrollButtons.forEach(function(button) {
            button.addEventListener("click", function(event) {
            event.preventDefault();
            alert("You have successfully enrolled in this course!");
            });
        });