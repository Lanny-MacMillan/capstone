

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
        <h1 id='title'>Currency Exchange </h1>
        <h4 id='translator'>Function coming soon!</h4>
        </>
    )
}

export default Pricing