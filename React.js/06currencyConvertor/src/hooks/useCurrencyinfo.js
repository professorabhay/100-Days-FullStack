import { useEffect, useState } from "react";

function useCurrencyinfo(currency) {
    const [data, setData] = useState({})
    //Calling API
    useEffect(()=>{
        let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
        fetch(`${url}`)
        .then ((res) => res.json()) // Data Conversion
        .then((res) => setData(res[currency]))
    }, [currency])
    console.log(data);
    return data
}

export default useCurrencyinfo;

// [currency]) => Here we give dependency, it means that it again work when the vlue of currency change. Till its wait. 

// useEffct -> invoke when component mount or its lifecycle trigger
// mostly API calls give data in string form. That's why we have to convert manually but there are some library that do this autometically.