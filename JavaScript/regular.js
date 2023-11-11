const flights = [
    {
            id: 0,
            from: "Berlin",
            to:'Prague',
            price: 100,
            depart: new Date ('11.28.2023').toDateString(),
            return: new Date ('12.12.2023').toDateString()
        },
    {
            id: 1,
            from: "TLV",
            to:'Berlin',
            price: 60,
            depart: new Date ('11.28.2023').toDateString(),
            return: new Date ('12.12.2023').toDateString()
        },
    {
            id: 2,
            from: "London",
            to:'Lisbon',
            price: 80,
            depart: new Date ('11.28.2023').toDateString(),
            return: new Date ('12.12.2023').toDateString()
        },
        
    ]

 
    const flightsBox = document.querySelector('.flights')
    
    function showFlights(flight){
        flightsBox.textContent = "";
        flight.forEach (flight => {
            
            const flightCard = document.createElement('div')
            flightCard.classList.add('flights-card')
            flightsBox.appendChild(flightCard)

            // [x]
            const removeFromCartBtn = document.createElement('button')
            removeFromCartBtn.textContent = `X`
            removeFromCartBtn.classList.add('close-add-to-cart-btn')
            flightCard.appendChild(removeFromCartBtn)

            const fromToDiv = document.createElement('div')
            fromToDiv.classList.add('from-to')
            flightCard.appendChild(fromToDiv)

            const fromPara = document.createElement('p')
            
            const from = document.createElement('h3')
            from.textContent = `From `
            fromPara.textContent = flight.from
            from.classList.add('from')
            fromPara.classList.add('small')
            fromToDiv.appendChild(from)
            from.appendChild(fromPara)

            const to = document.createElement('h3')
            const toPara = document.createElement('p')
            to.textContent = `To `
            toPara.textContent = flight.to
            toPara.classList.add('small')
            fromToDiv.appendChild(to)
            to.appendChild(toPara)

            const departureAndReturn = document.createElement('div')
            departureAndReturn.classList.add('departure-return')
            flightCard.appendChild(departureAndReturn)

            const dep = document.createElement('h3')
            const departurePara = document.createElement('p')
            dep.textContent = `Departure `
            departurePara.textContent = flight.depart;
            dep.classList.add('dep')
            departurePara.classList.add('small')
            departureAndReturn.appendChild(dep)
            dep.appendChild(departurePara)

            const ret = document.createElement('h3')
            const returnPara = document.createElement('p')
            ret.textContent = `Return`
            returnPara.textContent = flight.return
            returnPara.classList.add('small')
            departureAndReturn.appendChild(ret)
            ret.appendChild(returnPara)

            const priceDiv = document.createElement('div')
            priceDiv.classList.add('price-container')
            flightCard.appendChild(priceDiv)

            const price = document.createElement('h3')
            const pricePara = document.createElement('p')

            price.textContent = `Price`
            pricePara.textContent = `${flight.price}$`
            pricePara.classList.add('small')

            priceDiv.appendChild(price)
            price.appendChild(pricePara)

            const addToCartBtn = document.createElement('button')
            addToCartBtn.textContent = `Add to Cart`
            addToCartBtn.classList.add('add-to-cart-btn')
            flightCard.append(addToCartBtn)
            

            const fromInput = document.createElement('input')
            const toInput = document.createElement('input')

            // add to cart button event listener
            addToCartBtn.addEventListener('click' , () => {
                removeFromCartBtn.style.display = 'block'
                flightCard.style.marginLeft = "105%" 
                addToCartBtn.style.display = 'none'

                //Edit from
                fromPara.addEventListener('click' , () => {
                    fromPara.style.display = "none"
                    fromInput.classList.add('change-input')
                    fromInput.value = flight.from
                    from.appendChild(fromInput)

                    removeFromCartBtn.addEventListener('click' , () => {
                        fromInput.readOnly = true;
                        addToCartBtn.addEventListener('click' , () => {
                          fromInput.readOnly = false;  
                        })
                    })
                })
                 //Edit To
                toPara.addEventListener('click' , () => {
                    toPara.style.display = "none"
                    toInput.classList.add('change-input')
                    toInput.value = flight.to
                    to.appendChild(toInput)

                    removeFromCartBtn.addEventListener('click' , () => {
                        toInput.readOnly = true;
                        addToCartBtn.addEventListener('click' , () => {
                          toInput.readOnly = false;  
                        })
                    })
                })
            })
            //remove from cart button event listener [x]
            removeFromCartBtn.addEventListener('click' , () => {
                flightCard.style.marginLeft = "10%" 
                removeFromCartBtn.style.display = 'none'
                addToCartBtn.style.display = 'block'
                toInput.readOnly = true;
                fromInput.readOnly = true;
                addToCartBtn.addEventListener('click' , () => {
                    toInput.readOnly = false;
                    fromInput.readOnly = false;
                })
            })
        })
    }
    showFlights(flights)


    
    //search bar
        //filtered by from / to
        let searchBar = document.querySelector('.search')
        searchBar.addEventListener('input' , e => {
            let filteredFromOrTo = flights.filter(f => {
            return  f.from.toLowerCase().includes(e.target.value.toLowerCase())
                    ||
                    f.to.toLowerCase().includes(e.target.value.toLowerCase())
            })

            showFlights(filteredFromOrTo)
        })
        
        //sort by price
        const sortBtn = document.querySelector('.sort-by-price')
            sortBtn.addEventListener('click' , () => {
                let sorted = flights.slice().sort((a,b) => {
                    return a.price - b.price
                })
                showFlights(sorted)
            })
            
            //log Out
            const logOut = document.querySelector('.log-out')
            logOut.addEventListener('click' , () => {
                window.location.href = 'index.html'
                localStorage.clear()
            })
            
            //BOOK NOW
            const bookBtn = document.querySelector('.book-btn')
            bookBtn.addEventListener('click' , () => {
                flightCard.style.marginLeft = "105%" ? console.log(`105`) : console.log('not')
                
            })

            
