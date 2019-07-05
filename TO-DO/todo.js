var ul=document.getElementById('list');
var li;


var addButton=document.getElementById('add');
addButton.addEventListener('click',addItem);

var removeButton=document.getElementById('remove');
removeButton.addEventListener('click',removeItem);

var removeWholeButton=document.getElementById('removeWhole');
removeWholeButton.addEventListener('click',removeAllItemChild);




function addItem(){
	var input=document.getElementById('input');
	var item=input.value;
	ul=document.getElementById('list');
	var textNode=document.createTextNode(item)

	if(item==='')
	{
		return false;
	}
	else
	{
		//create li
		li=document.createElement('li');
		//create checkbox
		var checkbox=document.createElement('input');
		checkbox.type='checkbox';
		//we are getting id through check as we define it in html
		checkbox.setAttribute('id','check');

		//create label
		var label=document.createElement('label');
		//label.setAttribute('for','item')

		//add these elements on web page

		ul.appendChild(label);
		li.appendChild(checkbox);
		label.appendChild(textNode);
		li.appendChild(label);
		ul.insertBefore(li, ul.childNodes[0]);
		
		setTimeout(()	=>	{
			li.className = 'visual';
		},2);

		input.value='';

	}

}


function removeItem(){
	li= ul.children
	for(let index = 0; index < li.length; index++)
	{
		while(li[index] && li[index].children[0].checked){
			ul.removeChild(li[index])
		}
		
	}
	
}
function removeAllItemChild() { 
        var e = document.querySelector("ul"); 
        
        //e.firstElementChild can be used. 
        var child = e.lastElementChild;  
        while (child) { 
            e.removeChild(child); 
            child = e.lastElementChild; 
        } 
    } 
    