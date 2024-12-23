const xhr =new XMLHttpRequest()

const requrl = "https://api.nationalize.io/?name=nathaniel"

xhr.open('GET' , requrl);
xhr.onreadystatechange = function(){
    console.log(xhr.readyState);
    if (xhr.readyState === 4){
        const data = JSON.parse(this.responseText)
        console.log(data.country[1].country_id);  
        console.log(data.country[1].probability);  
    }
}

xhr.send()

