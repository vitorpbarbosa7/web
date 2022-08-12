function wordBlanks(noun, adjective, verb, adverb) {
	
	words = [adjective, noun,  verb, adverb]
	result = ""
	for (let i = 0; i < words.length; i++) {
		result += words[i] + " "
	}
	
	return result;
}

console.log(wordBlanks("plane", "big", "flies", "fast"));
