function isOnLine(){
	if(navigator.connection){
		return !( navigator.connection.type === "none");
	}
	return true;
}