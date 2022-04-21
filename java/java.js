(function() {
    const ListElements = document.querySelectorAll(".menu_item--show");
    const list = document.querySelector(".menu_links");
    const menu = document.querySelector(".menu_hamburguer");
    const addClick = () => {
        ListElements.forEach(Element => {
            Element.addEventListener("click", function() {

                let submenu = Element.children[1]
                let height = 0;
                Element.classList.toggle("menu_item--active");



                if (submenu.clientHeight === 0) {
                    height = submenu.scrollHeight;
                }

                submenu.style.height = `${height}px`;



            });

        });

    }


    addClick();

    menu.addEventListener("click", () => list.classList.toggle("menu_links--show"));


    function zoomToggle(iWideSmall, iHighSmall, iWideLarge, iHighLarge, whichImage) {
        oW = whichImage.style.width;
        oH = whichImage.style.height;
        if ((oW == iWideLarge) || (oH == iHighLarge)) {
            nW = iWideSmall;
            nH = iHighSmall;
        } else {
            nW = iWideLarge;
            nH = iHighLarge;
        }
        whichImage.style.width = nW;
        whichImage.style.height = nH;
    }

})();