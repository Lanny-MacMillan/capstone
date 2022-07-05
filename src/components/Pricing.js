

const Pricing = () => {
    var myHeaders = new Headers();
    myHeaders.append("apikey", "REY2DWnYHQV1nO8Yh0wZYp92IvxnZTW7");
    
    var requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: myHeaders
    };
    
    fetch("https://api.apilayer.com/exchangerates_data/latest?", requestOptions)
    // fetch("https://api.apilayer.com/exchangerates_data/latest?symbols={symbols}&base={base}", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    
    return (
        <>
        Currency Page
        </>
    )
}

export default Pricing