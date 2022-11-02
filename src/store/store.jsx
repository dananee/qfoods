import create from 'zustand';

export const useStoreCard = create(set => ({

    cartItems: [],
    addToCard: (product) => set(state => {
        const isPresent = state.cartItems.find(x => x.id === product.id);
         
        if (isPresent) {
            return {
                ...state,
                cartItems: state.cartItems.map((x) =>
                    x.id === product.id ? { ...x, qty: x.qty + 1 } : x
                )
            }

        } else {
            return {
                ...state,
                cartItems: [...state.cartItems, { ...product, qty: 1 }]
            }
        }
    }),
    removeCard: (product) => set(state => {
        const exist = state.cartItems.find((x) => x.id === product.id);

        if (exist.qty === 1) {
            return {
                ...state,
                cartItems: state.cartItems.filter((x) => x.id !== product.id)
            }
        } else {

            return {
                ...state,
                cartItems: state.cartItems.map((x) =>
                    x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
                )
            }

        }

    }),
    removeMeal: (product)=> set(state=>{
        const exist = state.cartItems.find((x) => x.id === product.id);

        if(exist){
            return {
                ...state,
                cartItems: state.cartItems.filter((x) => x.id !== product.id)
            }
        }

    })
    
}))