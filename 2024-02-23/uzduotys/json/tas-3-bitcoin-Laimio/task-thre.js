const button = document.querySelector(".button");
const price = document.querySelector(".price-container")

button.onclick = () => {
    console.log("click")
    fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
        .then(reply => reply.json())
        .then(reply => {
            console.log(reply.bpi)
            const bpi = Object.getOwnPropertyNames(reply.bpi)
            const data = []

            for (const key in reply.bpi) {

                data.push(` <div class="row">
                                <div class="col-2">${reply.bpi[key].code}</div>
                                <div class="col-2">${reply.bpi[key].rate}${reply.bpi[key].symbol}</div>
                            </div>
                        `)
                reply.bpi[key]
            }
            price.innerHTML = data.join("")
        })
}