import axios from 'axios';

const url = "http://localhost:3000/users/admin";

class Contact {
    static GetContacts() {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.get(url);
                const data = res.data;
                console.log(res);
                resolve(
                    data.map(contact => ({
                        ...contact,
                        createdAt: new Date(contact.createdAt)
                    }))
                );
            } catch(err) {
                reject(err);
            }
        } )
    }
}

export default Contact;