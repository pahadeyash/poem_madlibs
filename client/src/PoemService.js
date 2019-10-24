import axios from 'axios';

const url = 'http://localhost:3000/api/poems/';

class PoemService{
    // Get Poems 
    static getPoems() {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.get(url);
                const data = res.data;
                resolve(
                    data.map(poem => ({
                        ...poem,
                        createdAt: new Date(poem.createdAt)
                    }))
                );
            } catch(err) {
                reject(err);
            }
        })
    }

    // Create Poem
    static createPoem(poem) {
        return axios.post(url, {
            poem 
        });
    }

    // Delete Poem
    static deletePoem(id) {
        return axios.delete(url + id);
    }

    // Edit Poem
    static updatePoem(poem) {
        return axios.put(url+poem._id, {
            poem
        });
    }   
}

export default PoemService;