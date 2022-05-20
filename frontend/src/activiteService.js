import axios from 'axios';

const url = "http://localhost:3000/activities/";

class ActiviteService {
    // GET activities
    static GetActivities() {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.get(url);
                const data = res.data;
                console.log(res);
                resolve(
                    data.map(activity => ({
                        ...activity,
                        createdAt: new Date(activity.createdAt)
                    }))
                );
            } catch(err) {
                reject(err);
            }
        } )
    }

    // create activity
    static InsertActivity(text) {
        return axios.post(url + "add/", {
            text
        });
    }

    // delete activity
    static DeleteActivity (id) {
        return axios.delete(`${url}${id}`);
    }
}

export default ActiviteService;