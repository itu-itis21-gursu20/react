import fetch from "node-fetch";
import axios from "axios";

async function getData(user_id) {

    const {data: user} = await axios("https://jsonplaceholder.typicode.com/users/" + user_id)

    const {data: post} = await axios("https://jsonplaceholder.typicode.com/posts?id=" + user_id)

    return {
        user,
        post
    }

}

export default getData