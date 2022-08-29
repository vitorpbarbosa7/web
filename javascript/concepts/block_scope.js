var exigeMensagem = function() {
	if(true) {
		var escopoFuncao = 'Linux';
		let escopoBloco = 'Windows';
		
		console.log(escopoBloco);
	}
	console.log(escopoFuncao);
	console.log(escopoBloco);
}

exigeMensagem()
