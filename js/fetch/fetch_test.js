async function logMovies() {
    const response = await fetch("http://localhost:3000", {
        "credentials": 'same-origin',
        headers: {
            
        }
    });
    return response
}

logMovies().then((data) => {
    const para=document.getElementById("message");
    const txt=data.body.toString();
    para.innerText =txt
 })