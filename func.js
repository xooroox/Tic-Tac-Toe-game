var turn = 1;
var counter = 0;
var matrix1 = [[],[],[]];
function onMark(current){	
	var id = current.id;
	var pic = document.getElementById(id);
	if(pic.src.match('blank.png')){
		
		counter++;
		var player_x_turn = document.getElementById('x_player');
		player_x_turn.value = 'Ти си на ход!';
		var player_o_turn = document.getElementById('o_player');
		player_o_turn.value = 'Изчакай...';
				
		if(turn == 1){	    
			player_x_turn.value = 'Изчакай...';
			player_o_turn.value = 'Ти си на ход!';		
			pic.src = 'images/x.png';
			turn = 'O';         
		}else {
			pic.src = 'images/o.png';
			turn = 1;
		}
		var matrix = [['_1', '_2','_3'],['_4', '_5', '_6'],['_7', '_8', '_9']];	
		for(var i = 0; i < matrix.length; i++){
			for(var j = 0; j < matrix.length; j++){	
				
				var newId = matrix[i][j];
				if(turn == 'O'){
					if(newId == id){	
						matrix1[i][j] = 'x';
					}
				}else{
					if(newId == id){
						matrix1[i][j] = 'O';
					}
				}	
			}
		}
		checkWin();
		if(checkWin() == false){
			return;
		}
		if(counter == 9){
			var won = document.getElementById('game_result');
			won.value = 'Равен !';
			document.getElementById('x_player').value = '';
			document.getElementById('o_player').value = '';
			document.getElementById('x_player').placeholder = '';
			document.getElementById('o_player').placeholder = '';
			return;
		}
	}else{
		return;
	}
}
function checkWin(){
	//X won.
	var won = document.getElementById('game_result');
	if(matrix1[0][0] == 'x' && matrix1[0][1] == 'x' && matrix1[0][2] == 'x'){
		won.value = 'Победа за Х!';
		document.getElementById('x_player').value = '';
		document.getElementById('o_player').value = '';
		document.getElementById('x_player').placeholder = '';
		document.getElementById('o_player').placeholder = '';
		return false;
	}
	if(matrix1[1][0] == 'x' && matrix1[1][1] == 'x' && matrix1[1][2] == 'x'){
		won.value = 'Победа за Х!';
		document.getElementById('x_player').value = '';
		document.getElementById('o_player').value = '';
		document.getElementById('x_player').placeholder = '';
		document.getElementById('o_player').placeholder = '';
		return false;
	}
	if(matrix1[2][0] == 'x' && matrix1[2][1] == 'x' && matrix1[2][2] == 'x'){
		won.value = 'Победа за Х!';
		document.getElementById('x_player').value = '';
		document.getElementById('o_player').value = '';
		document.getElementById('x_player').placeholder = '';
		document.getElementById('o_player').placeholder = '';
		return false;
	}
	if(matrix1[0][0] == 'x' && matrix1[1][0] == 'x' && matrix1[2][0] == 'x'){
		won.value = 'Победа за Х!';
		document.getElementById('x_player').value = '';
		document.getElementById('o_player').value = '';
		document.getElementById('x_player').placeholder = '';
		document.getElementById('o_player').placeholder = '';
		return false;
	}
	if(matrix1[0][1] == 'x' && matrix1[1][1] == 'x' && matrix1[2][1] == 'x'){
		won.value = 'Победа за Х!';
		document.getElementById('x_player').value = '';
		document.getElementById('o_player').value = '';
		document.getElementById('x_player').placeholder = '';
		document.getElementById('o_player').placeholder = '';
		return false;
	}
	if(matrix1[0][2] == 'x' && matrix1[1][2] == 'x' && matrix1[2][2] == 'x'){
		won.value = 'Победа за Х!';
		document.getElementById('x_player').value = '';
		document.getElementById('o_player').value = '';
		document.getElementById('x_player').placeholder = '';
		document.getElementById('o_player').placeholder = '';
		return false;
	}
	//diagonali
	if(matrix1[0][0] == 'x' && matrix1[1][1] == 'x' && matrix1[2][2] == 'x'){
		won.value = 'Победа за Х!';
		document.getElementById('x_player').value = '';
		document.getElementById('o_player').value = '';
		document.getElementById('x_player').placeholder = '';
		document.getElementById('o_player').placeholder = '';
		return false;
	}
	if(matrix1[2][0] == 'x' && matrix1[1][1] == 'x' && matrix1[0][2] == 'x'){
		won.value = 'Победа за X!';
		document.getElementById('x_player').value = '';
		document.getElementById('o_player').value = '';
		document.getElementById('x_player').placeholder = '';
		document.getElementById('o_player').placeholder = '';
		return false;
	}
	//O won.
	if(matrix1[0][0] == 'O' && matrix1[0][1] == 'O' && matrix1[0][2] == 'O'){
		won.value = 'Победа за О!';
		document.getElementById('x_player').value = '';
		document.getElementById('o_player').value = '';
		document.getElementById('x_player').placeholder = '';
		document.getElementById('o_player').placeholder = '';
		return false;
	}
	if(matrix1[1][0] == 'O' && matrix1[1][1] == 'O' && matrix1[1][2] == 'O'){
		won.value = 'Победа за О!';
		document.getElementById('x_player').value = '';
		document.getElementById('o_player').value = '';
		document.getElementById('x_player').placeholder = '';
		document.getElementById('o_player').placeholder = '';
		return false;
	}
	if(matrix1[2][0] == 'O' && matrix1[2][1] == 'O' && matrix1[2][2] == 'O'){
		won.value = 'Победа за О!';
		document.getElementById('x_player').value = '';
		document.getElementById('o_player').value = '';
		document.getElementById('x_player').placeholder = '';
		document.getElementById('o_player').placeholder = '';
		return false;
	}
	if(matrix1[0][0] == 'O' && matrix1[1][0] == 'O' && matrix1[2][0] == 'O'){
		won.value = 'Победа за О!';
		document.getElementById('x_player').value = '';
		document.getElementById('o_player').value = '';
		document.getElementById('x_player').placeholder = '';
		document.getElementById('o_player').placeholder = '';
		return false;
	}
	if(matrix1[0][1] == 'O' && matrix1[1][1] == 'O' && matrix1[2][1] == 'O'){
		won.value = 'Победа за О!';
		document.getElementById('x_player').value = '';
		document.getElementById('o_player').value = '';
		document.getElementById('x_player').placeholder = '';
		document.getElementById('o_player').placeholder = '';
		return false;
	}
	if(matrix1[0][2] == 'O' && matrix1[1][2] == 'O' && matrix1[2][2] == 'O'){
		won.value = 'Победа за О!';
		document.getElementById('x_player').value = '';
		document.getElementById('o_player').value = '';
		document.getElementById('x_player').placeholder = '';
		document.getElementById('o_player').placeholder = '';
		return false;
	}
	//diagonali
	if(matrix1[0][0] == 'O' && matrix1[1][1] == 'O' && matrix1[2][2] == 'O'){
		won.value = 'Победа за О!';
		document.getElementById('x_player').value = '';
		document.getElementById('o_player').value = '';
		document.getElementById('x_player').placeholder = '';
		document.getElementById('o_player').placeholder = '';
		return false;
	}
	if(matrix1[2][0] == 'O' && matrix1[1][1] == 'O' && matrix1[0][2] == 'O'){
		won.value = 'Победа за О!';
		document.getElementById('x_player').value = '';
		document.getElementById('o_player').value = '';
		document.getElementById('x_player').placeholder = '';
		document.getElementById('o_player').placeholder = '';
		return false;
	}
}
function reloadPage(){
	location.reload(true);
}
