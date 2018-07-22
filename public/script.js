// Ready Function
$(() =>{

    ((text, buttonClass) =>{
        var myElement = document.createElement('button');
        var myNode = document.querySelector(".container.flexBox");
        
        myElement.textContent = text;
        myElement.classList.add("btn");
        myElement.classList.add(buttonClass);
        
        myNode.appendChild((myElement));
        console.log(myNode);
    })("Test Button", 'btn-success');
});