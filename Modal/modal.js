
        function $(id){
            return document.getElementById(id)
        }
        function node(as){
            return document.querySelector(as);
        }
        var btnOpenNode = $("open");
        var bgNode = node(".js-bg");
        var bNode = node(".js-b");
        var closeNode = $("close");
        var acceptNode = $("accept");
        function onClickOpen(e){
            e.preventDefault()
            bgNode.classList.add("active");
            bNode.classList.add("active");
            console.log("clicked To open");
        }
        function onClickedClose(e){
            e.preventDefault()
            bgNode.classList.remove("active");
            bNode.classList.remove("active");
            console.warn("Clicked To Close");
        }
        function onClickedAccept(e){
            e.preventDefault()
            bgNode.classList.remove("active");
            bNode.classList.remove("active");
            console.warn("You Did Accept hahaha");
        }
        btnOpenNode.addEventListener('click',onClickOpen);
        closeNode.addEventListener('click',onClickedClose);
        acceptNode.addEventListener('click',onClickedAccept)
    