
class DataSend{
    static getData(path, data){
        let dataToSend ={
                            method: "POST",
                            // credentials: "same-origin",
                            body:JSON.stringify(data)
                        };
        return fetch(path, dataToSend)
            .then(res => res.json())
            .then(res => {
                if(res.status == "OK") return res.data
                else throw res.data
            })
            .catch((error) => {
                if(error == "not logged in") throw function (putContext){putContext.props.history.push("/login")};
                else throw () => alert(error)
            })
    }
}

export default DataSend;