const const_URI = 'http://localhost:5000'

const fetchData = async(url, options) => {
	const data = await fetch(`${const_URI}${url}`, options); 
	data = await data.json(); 
	return data; 
}

export default fetchData; 