const MedState = {
    newmed: {
        id: Math.round(Math.random() * 100),
        name: "",
        price: "",
        count: "",
        producer:"",
        description: ""
    },
    med: [],
    medByid: [],
    searchData: "",
    search: [],
    com: "",
    prod:[{name:"nataliPharm"},{name:"alfapharm"}]
}

export const MedReducer = (state = MedState, option) => {
    switch (option.type) {
        case "ChangeValue":
            state.newmed[option.payload.key] = option.payload.value
            console.log(state.newmed)
            return state
        case "add":

            return {
                ...state, med: [...state.med, state.newmed], newmed: {
                    id: Math.round(Math.random() * 100),
                    name: "",
                    price: "",
                    count: "",
                    producer: "",
                    description: "",
                    coment:""
                }

            }
        case "medByid":
            // state.medByid=state.med
            let y = state.med.find(el => el.id === +option.id)
            state.medByid = y
            console.log(y)
            return state


        case "search":
            state.searchData = option.payload.value
            state.search = state.med.filter(el => el.name.includes(state.searchData))

            console.log(state.search)

        case "com":
            state.com = option.payload.value
            console.log(state.com)
            return state

        case "send":
            let x = state.med.find(el => el.id === +option.id)
            x.coment = state.com
            
            console.log(x.coment)
            return state
















        default:
            return { ...state }
    }

}





