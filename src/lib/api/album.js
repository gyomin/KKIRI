import client from "./client";

export const uploadFile = ({ filename }) =>
    client.post('/api/albums', { filename });

export const readFile = (idx) => client.get(`/api/albums/${idx}`);
console.log('111111111api/album->readfile');
console.log(readFile);


export const listAlbums = () => {
    console.log('api/albums 응답바ㅡㅇ듬');
    return client.get(`/api/albums`);   
}