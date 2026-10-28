(function () {
    "use strict";
    // Only the picture viewer is added; carousel and JSON rendering stay in app.js.
    var box = document.createElement("div");
    box.className = "mmw-lightbox";
    box.hidden = true;
    box.setAttribute("role", "dialog");
    box.setAttribute("aria-modal", "true");
    box.setAttribute("aria-label", "Expanded image");
    var close = document.createElement("button");
    close.className = "mmw-lightbox-close";
    close.type = "button";
    close.setAttribute("aria-label", "Close image");
    close.textContent = "×";
    var image = document.createElement("img");
    image.className = "mmw-lightbox-image";
    image.alt = "";
    var caption = document.createElement("span");
    caption.className = "mmw-lightbox-caption";
    box.appendChild(close);
    box.appendChild(image);
    box.appendChild(caption);
    document.body.appendChild(box);
    var oldFocus = null;
    function hide() {
        box.hidden = true;
        image.removeAttribute("src");
        document.body.style.removeProperty("overflow");
        if (oldFocus && typeof oldFocus.focus === "function") oldFocus.focus();
    }
    document.addEventListener("click", function (event) {
        if (event.target === close || event.target === box) {hide();return;}
        var target = event.target;
        if (!target.matches || !target.matches("#activities-section .activity-image img")) return;
        oldFocus = document.activeElement;
        image.src = target.currentSrc || target.src;
        image.alt = target.alt;
        var card = target.closest(".activity-card");
        caption.textContent = card ? card.querySelector(".activity-title").textContent : "";
        box.hidden = false;
        document.body.style.overflow = "hidden";
        close.focus();
    });
    document.addEventListener("keydown", function (event) {
        if (!box.hidden && event.key === "Escape") hide();
    });
}());
