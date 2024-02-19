window.addEventListener('load', () =>{
    const form= document.querySelector("#task-form");
    const input= document.querySelector("#task-input");
    const list_el= document.querySelector("#tasks");

    form.addEventListener('submit',(e)=>{
        e.preventDefault();   //stops page from refreshing
        const task = input.value;

        const task_el =  document.createElement("div"); //it create an html element 
        task_el.classList.add("task"); //classlist is a readonly property of an element that returns a live collection of CSS classes
        //here add used to add one or more CSS classes to a class of an element
        
        const task_content_el =document.createElement("div");
        task_content_el.classList.add("content");
        task_el.appendChild(task_content_el); //this method allows you to add a node to the end of list of child node of a specified parent node
        //parentNode.appendChild(childnode);
        const task_input_el = document.createElement("input");
        task_input_el.classList.add("text");
        task_input_el.type="text";
        task_input_el.value=task; //value property sets or returns the value of the value attribute of a text field
        task_input_el.setAttribute("readonly","readonly");

        task_content_el.appendChild(task_input_el);

        const task_actions_el = document.createElement("div");
        task_actions_el.classList.add("actions");

        const task_edit_el = document.createElement("button");
        task_edit_el.classList.add("edit");
        task_edit_el.innerText="Edit";

        const task_delete_el = document.createElement("button");
        task_delete_el.classList.add("delete");
        task_delete_el.innerText="Delete";

        task_actions_el.appendChild(task_edit_el);
        task_actions_el.appendChild(task_delete_el);
        task_el.appendChild(task_actions_el);

        list_el.appendChild(task_el);

        input.value='';

        //edit element
        //innerText
        //The innerText property of the HTMLElement interface represents the rendered text content of a node and its descendants.
        /*As a getter, it approximates the text the user would get if they highlighted the contents of the element with
         the cursor and then copied it to the clipboard.*/
        task_edit_el.addEventListener('click',(e)=>{
            if(task_edit_el.innerText.toLowerCase() == "edit") {
                task_edit_el.innerText="Save";
                task_input_el.removeAttribute("readonly");
                task_input_el.focus();
        }else{
            task_edit_el.innerText="Edit";
            task_input_el.setAttribute("readonly","readonly");
        }
        });
        
        /*The addEventListener() method is an inbuilt function of JavaScript. We can add multiple event handlers to a particular
         element without overwriting the existing event handlers.*/ 
         //element.addEventListener(event, function, useCapture);
        task_delete_el.addEventListener('click',(e)=>{
            list_el.removeChild(task_el);
        });

    });

});