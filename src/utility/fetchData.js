const const_URI = 'http://localhost:5000'

const fetchData = async(url, options) => {
	let data = await fetch(`${const_URI}${url}`, options); 
	console.log(data);  
	return data; 
}

export default fetchData; 