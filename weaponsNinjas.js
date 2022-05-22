/* 
function* weaponGenerator(){
    yield "Katana";
    yield "Wakizashi";
    yield "Kusarigama"
}
const weaponsIterator = weaponGenerator();
    const result = weaponsIterator.next();    
        if(typeof result === "object" && result.value === "Katana" && !result.done,"There are no more results!"){
            console.log(true);
        }
        else console.log(false);
         */

    function traverseDOM(element, callback){
        callback(element);
        element = element.firstElementChild;
        while(element){
            traverseDOM(element, callback)
            element = element.nextElementSibling
        }
    }
    const subTree = document.getElementById("subTree") 
    traverseDOM(subTree, function(element){
        AuthenticatorAssertionResponse(element != null, element.nodeName )
    });