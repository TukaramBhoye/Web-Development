/* 
*13: Javascript ch: Axios(Library to make HTTP requests)

*1: Axios : A Library to make HTTP request
        - Link : https://github.com/axios/axios#installing
        - CDN :using jsDeliver CDN (ESS UMD browser modules); 
            <script src="https://cdn.jsdelivr.net/npm/axios@1.6.7/dist/axios.min.js"></script>
let btn = document.querySelector("button");
let url2="https://dog.ceo/api/breed/image/random"; // for iamges

        - Example : 
            let btn = document.querySelector("button");

            btn.addEventListener("click", async () => {
                let fact = await getFacts(); // return promise
                console.log(fact);

                let p = document.querySelector("#result");
                p.innerText = fact;
            });

            let url = "https://catfact.ninja/fact";

            async function getFacts(){
                try{
                    let res = await axios.get(url); 
                    return res.data.fact; 
                }catch(e){
                    console.log("err", e); 
                    return "No fact found"
                }
            }

        *ii: To Print Images : 
        *Note : Some Api have limit so, don't use loop's
        let btn = document.querySelector("button"); // Updated selector for button
        let url2 = "https://dog.ceo/api/breeds/image/random"; // API URL for random dog images

        btn.addEventListener("click", async () => {
            let link = await getImage();
            let img = document.querySelector("#result");
            img.setAttribute("src", link);
            // img.style.display = "block"; // Make the image visible
            console.log(link); 
        });

        async function getImage() {
            try {
                let res = await axios.get(url2);
                return res.data.message; // API response has the image URL in 'message'
            } catch (e) {
                console.log("Error fetching image:", e);
                return "/"; // Fallback URL or empty string in case of error
            }
        }

    *iii: Axios : Sending Headers : 

*/
/*
let btn = document.querySelector("button"); // Updated selector for button
let url2 = "https://dog.ceo/api/breeds/image/random"; // API URL for random dog images

btn.addEventListener("click", async () => {
    let link = await getImage();
    let img = document.querySelector("#result");
    img.setAttribute("src", link);
    // img.style.display = "block"; // Make the image visible
    console.log(link); 
});

async function getImage() {
    try {
        let res = await axios.get(url2);
        return res.data.message; // API response has the image URL in 'message'
    } catch (e) {
        console.log("Error fetching image:", e);
        return "/"; // Fallback URL or empty string in case of error
    }
}
// -------------------------------
// *iii: Axios : Sending Headers : 

const url = "https://icanhazdadjoke.com/"; 

async function getJokes(){
    try {
        const config = {headers: {Accept: "Application/json"} }; 
        let res = await axios.get(url, config); 
        console.log(res.data); 
    }catch (err){
        console.log(err); 
    }
}*/
// --------------
// *v: http://universities.hipolabs.com/search?name=middle

let url = "http://universities.hipolabs.com/search?name="; 
let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
    let country = document.querySelector("input").value;
    console.log(country);

    let colArr = await getColleges(country);
    show(colArr);
});

function show(colArr){
    let list = document.querySelector("#list"); 
    list.innerText = "";
    for(col of colArr){
        console.log(col.name); 
        let li = document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li); 
    }
}
async function getColleges(country) {
    try{
        let res = await axios.get(url+country); 
        return res.data;
    }catch(e){
        console.log("error: ", e); 
        return [];
  }
}


