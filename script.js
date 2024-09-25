window.addEventListener("load",checkInternetConnection);
function checkInternetConnection(){
    const statusText=document.getElementById("statusText");
    const ipAddressText=document.getElementById("IPAddressCheckt");
    const snetworkStrengthText=document.getElementById("networkStrengthText");

    satusText.textContent='checking...';
    if(navigator.online){
        statusText.textContent='online';
    }
    else{
        statusText.textContent='offline';
        ipAddressText.textContent= '-';
        networkStrengthText.textContent= '-'
    }

}
