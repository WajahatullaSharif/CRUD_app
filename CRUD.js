counter = 0;

function addTask(){
	var input = document.getElementById('data').value;

	var html = '<div class="row" id="data'+counter+'"style="margin-bottom: 15px;">'+
				'<div class="col-md-6 col-sm-12 col-xs-12">'+
					'<input type="text" class="form-control" value="'+input+'" disabled>'+
				'</div>'+
				'<div class="col-md-2 col-sm-4 col-xs-4">'+
					'<button type="button" class="btn btn-success" onclick="edit(this.id)" id="edit'+counter+'">Edit</button>'+
				'</div>'+
				'<div class="col-md-2 col-sm-4 col-xs-4">'+
					'<button type="button" class="btn btn-success" onclick="update(this.id)" id="update'+counter+'">Update</button>'+
				'</div>'+
				'<div class="col-md-2 col-sm-4 col-xs-4">'+
					'<button type="button" class="btn btn-danger" onclick="remove(this.id)" id="remove'+counter+'">Delete</button>'+
				'</div>'+
			'</div>';
	counter++;
	document.getElementById('todoList').insertAdjacentHTML('beforeend', html);
}

function edit(editId){
	var parent = document.getElementById(editId).parentNode.parentNode.firstChild.firstChild;
	parent.removeAttribute('disabled');
}

function update(updateId){
	var parent = document.getElementById(updateId).parentNode.parentNode.firstChild.firstChild;
	parent.setAttribute("disabled",'disabled');
}

function remove(removeId){
	var parent = document.getElementById(removeId).parentNode.parentNode;
	parent.remove();
}