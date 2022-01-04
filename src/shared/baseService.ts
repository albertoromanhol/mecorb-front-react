/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';

export default (route: string) => {

    const create = (data: any) => axios.post(`/${route}`, data);
    const update = (data: any) => axios.put(`/${route}/${data.id}`, data);
    const getAll = () => axios.get(`/${route}`);    
    const get = (id: number) => axios.get(`/${route}/${id}`);
    const remove = (id: number) => axios.delete(`/${route}/${id}`);
    
    return {
        create,
        update,
        getAll,
        get,
        remove
    };
};