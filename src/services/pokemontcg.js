import { Api } from './config'


const END_POINT = 'cards';

export default {
    all() {
        return Api.get(END_POINT);
    },

    show(id) {
        return Api.get(`${END_POINT}/${id}`);
    }
}