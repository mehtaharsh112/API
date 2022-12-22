import React,{createContext, useReducer, useEffect} from 'react'
let url = 'https://hn.algolia.com/api/v1/search?'
let ApiCont = createContext()
const Api = ({children}) => {
    let i = {
        hits:[],
        isLoading:true,
        query:'html'
    }
    let reducer = (state,action)=> {
        switch(action.type)
        {
            case 'apiFetch' :
            return {
                ...state,
                hits:action.payLoad.hits,
                isLoading:false
            }
            case 'loader' :
                return {
                    isLoading:true
                }
        }
    }
    let fet = async (e)=> {
        dispatch({type:'loader'})
       try {
        let d = await fetch(e)
        let data = await d.json()
        dispatch({type:'apiFetch',
    payLoad:{
        hits:data.hits
    }})
       } catch (error) {
        console.log(error)
       }
    }
    useEffect(()=>{
       fet(`${url}query=${i.query}`) 
    },[])
   
    let [state,dispatch] = useReducer(reducer,i)
  return (
    <ApiCont.Provider value={{...state}}>
        {children}
    </ApiCont.Provider>
  )
}

export default Api
export {ApiCont}