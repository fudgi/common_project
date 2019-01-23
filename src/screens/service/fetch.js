class DataSend{
    static getData(path, data){
        let dataToSend ={
                            method: "POST",
                            body:JSON.stringify(data)
                        };
        return fetch(path, dataToSend)
            .then(res => res.json())
    }
}

export default DataSend;