import React from 'react';
import App from './App';
import { shallow } from "enzyme";
import MainSection from './components/MainSection/MainSection';

describe("rendering components", ()=>{
    it("renders App component without crashing", ()=>{
        shallow(<App />)
    });
    it("renders MainSection component without crashing", ()=>{
        shallow(<MainSection />)
    });
})