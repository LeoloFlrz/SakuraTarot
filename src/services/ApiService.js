const APIUrl = 'https://6388b6e5a4bb27a7f78f96a5.mockapi.io/sakura-cards/'

import axios from 'axios'

class	GetData 
{
	async getData()
	{
		try
		{
			const response = await axios.get(APIUrl);
            console.log(response);
			return (response);
		}
		catch(error)
		{
			console.log(error);
			return (error.message);
		}
	}
}

export default GetData;

