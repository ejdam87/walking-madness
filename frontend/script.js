
function getIm(e) {

    e.preventDefault();

    const user_input = this.querySelector("textarea").value;
    const im_width = document.querySelector("img").offsetWidth;


    let formular = new URLSearchParams();
    formular.append('user-input', user_input);
    formular.append('im-width', im_width);

    let url = this.action;
    let method = this.method;
    fetch(url, {method: method, body: formular})
        .then((res) => res.blob())
        .then((image) => {
            document.querySelector("#image-output").src = URL.createObjectURL(image);
        })

    // Submit 2nd form
    document.querySelector("#txt-button").click()
}

function getTxt(e) {

    e.preventDefault();

    const user_input = document.querySelector("textarea").value;

    let formular = new URLSearchParams();
    formular.append('user-input', user_input);

    let url = this.action;
    let method = this.method;
    fetch(url, {method: method, body: formular})
        .then((res) => res.blob())
        .then((solution) => {
            prom = solution.text()

            prom.then(
                function(result){
                    document.querySelector("#text-output").innerHTML = result;
            })
        })
} 

document.querySelector("#input-form").addEventListener("submit", getIm);
document.querySelector("#txt-form").addEventListener("submit", getTxt);
