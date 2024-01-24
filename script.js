//your JS code here. If required.
document.getElementById("btn").addEventListener("click", async () => {
	let text = document.getElementById("text").value;
	let delay = document.getElementById("delay").value;

	if(text && delay){
		let promise1 = new Promise((resolve) => {
		        setTimeout(() => {
		            resolve(text);
		        }, delay);
		    });
			let data = await promise1;
		if(data){
			document.getElementById("output").innerText = data;
			
		}
		
		}
})
