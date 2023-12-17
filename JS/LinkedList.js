class node {
	value = 0;
	next = null;
	constructor(value,next){
		this.value = value;
		this.next = next;
	}

	getValue(){
		return this.value	
	}


}

class list extends node {
	number = 0;
	constructor(){
		this.number +1;	
	}

	get readListLength(){
		return this.number >0 ? console.log("list is null") : `${this.number}` ;
	}
}

export { list};
