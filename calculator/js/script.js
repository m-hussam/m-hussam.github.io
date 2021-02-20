
        const $li = document.querySelectorAll("ul li")
        $li.forEach((node) => {
            node.addEventListener('mousedown',function(e){
                const value = node.innerText.trim()
                const $result = document.querySelector(".result")
                const result = $result.innerText.trim()

                if (result == '0' || result == 'Infinity' || result == 'undefined '){
                    $result.innerText = ""
                    
                }
                if (value == "=") {
                    let solution = eval(result)
                    $result.innerText = solution
                    return true 
                }
                if (value.toLowerCase() == "c"){
                    $result.innerText = "0"
                    return true
                }
                $result.append(value)

            })
        })
    