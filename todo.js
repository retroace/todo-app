window.todo = [];


function getUserTodo()
{

	var title = document.querySelector('#title');
	var content = document.querySelector('[name="content"]');
	
	var data = {
		title: title.value,
		content: content.value,
		status: false,
		completed_date: null
	};

	title.value = '';
	content.value = '';


	return data;
}





function generateTodo(todo)
{
	return "\n<div class=\"card\"><div class=\"card-header d-flex justify-content-between\"><p>".concat(todo.title, "</p><span class='close'>x</span></div><div class=\"card-body\">").concat(todo.content, "<div class=\"form-roup\"><label>Checkbox</label><input type=\"checkbox\" ").concat(todo.status ? 'checked' : '', " name=\"completed\"></div></div></div>");
}



function validateTodo()
{
	var data = getUserTodo();
	return data.title.trim().length && data.content.trim().length;

}


document.querySelector('button').addEventListener('click', function(e){

	if(validateTodo()){
		window.todo.push(getUserTodo());
		console.log(window.todo);
	}
});


