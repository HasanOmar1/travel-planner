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

    //log-out button
    const logOut = document.querySelector('.log-out')
    logOut.addEventListener('click' , () => {
        window.location.href = 'index.html'
        localStorage.clear()
    })
 
    //add flights
    const flightsBox = document.querySelector('.flights')

    const pricePara = document.createElement('p')
    function showFlights(flight){
        flightsBox.textContent = "";
        flight.forEach (flight => {

            const flightCard = document.createElement('div')
            flightCard.classList.add('flights-card')
            flightsBox.appendChild(flightCard)

            //flight id
            const flightIdP = document.createElement('p')
            flightIdP.textContent = flight.id
            flightIdP.classList.add('small')
            flightCard.appendChild(flightIdP)

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
            departurePara.textContent = flight.depart
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

        })

    }

    showFlights(flights)

            //add flights
            const addFlightForm = document.querySelector('.add-flight-form')
            addFlightForm.addEventListener('submit' , (e) => {
                e.preventDefault();

                const fromInput = document.querySelector('.add-from-input').value
                const toInput = document.querySelector('.add-to-input').value
                const departureInput = document.querySelector('.add-dep-date').value
                const returnInput = document.querySelector('.add-ret-date').value
                const priceInput = document.querySelector('.add-price-input').value

                const newFlight = {
                    id: flights.length,
                    from : fromInput,
                    to : toInput,
                    depart : departureInput,
                    return : returnInput,
                    price : +priceInput,
                };
                flights.push(newFlight)
                console.log(flights)
                showFlights(flights)
                addFlightForm.reset()
            })
        


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

    const AddFlightBtn = document.querySelector('.add-flights-btn')
    const addFlightContainer = document.querySelector('.add-flights-container')
    AddFlightBtn.addEventListener('click' , () => {
        addFlightContainer.style.display = 'block'
        updatePriceFormContainer.style.marginTop = "400px"
        updatePriceFormContainer.style.marginLeft = "-30%"
    })
    
    const closeAddFlightFormBtn = document.querySelector('.close-add-flight-form')
    closeAddFlightFormBtn.addEventListener('click' , () => {
        addFlightContainer.style.display = 'none'
        updatePriceFormContainer.style.marginTop = "0"
        updatePriceFormContainer.style.marginLeft = "0"

    })

    const updatePriceBtn = document.querySelector(`.update-price-btn`)
    const updatePriceFormContainer = document.querySelector('.update-price-container')
    updatePriceBtn.addEventListener('click' , () => {
        updatePriceFormContainer.style.display = 'block'
    })

    const closeUpdatePriceForm = document.querySelector(`.close-update-price-form`)
    closeUpdatePriceForm.addEventListener('click' , (e) => {
        e.preventDefault()
        updatePriceFormContainer.style.display = 'none'
    })

    updatePriceFormContainer.addEventListener('submit' , e => {
        e.preventDefault()
        updatePrice()

      
    })

    const idInput = document.querySelector('.id-input')
    const newPriceInput = document.querySelector('.update-price-input')
    function updatePrice(){
        const getId = flights.map((id) => id.id)
        let id = idInput.value
        let newPrice = newPriceInput.value
        if(getId.indexOf(+id) !== -1){
         const prices = flights.filter(p => p.price)
         prices[id].price = newPrice
         showFlights(flights)
        }
        }
  