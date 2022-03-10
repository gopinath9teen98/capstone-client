/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable no-restricted-globals */
import Login from "./Login";
import { fireEvent, render } from '@testing-library/react';
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

describe("Login button",()=>{
    const initialState = {output:10}
    const mockStore = configureStore()
    let store
    it("login button render",()=>{
        store = mockStore(initialState)
        let {queryByTitle} = render(<Provider store={store}><Login /></Provider>)
        let btn = queryByTitle("loginBtn")
        expect(btn).toBeTruthy()
   

    it("onClick",()=>{
        let {queryByTitle} = render(<Provider store={store}><Login /></Provider>)
        let btn = queryByTitle("loginBtn")
        fireEvent.click(btn) 
    })  
    })
})
describe("input field test",()=>{
    const initialState = {output:10}
    const mockStore = configureStore()
    let store

    it("login render",()=>{
        store = mockStore(initialState)

        let {queryByTitle}=render (<Provider store={store}><Login /></Provider>)
        let input = queryByTitle("email")
        expect(input).toBeTruthy()

        it("input onChange",()=>{
            let {queryByTitle}=render (<Provider store={store}><Login /></Provider>)
            let input = queryByTitle("email")
            fireEvent.change(input,{target:{value:"testValue"}})
            expect(input.value).toBe("testValue")

        })
    })
})
describe("input field test1",()=>{
    const initialState = {output:10}
    const mockStore = configureStore()
    let store

    it("login render",()=>{
        store = mockStore(initialState)

        let {queryByTitle}=render (<Provider store={store}><Login /></Provider>)
        let input = queryByTitle("email1")
        expect(input).toBeTruthy()

        it("input onChange",()=>{
            let {queryByTitle}=render (<Provider store={store}><Login /></Provider>)
            let input = queryByTitle("email1")
            fireEvent.change(input,{target:{value:"testValue"}})
            expect(input.value).toBe("testValue")

        })
    })
})