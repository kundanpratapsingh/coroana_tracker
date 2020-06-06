import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import axios from "axios";
import {
  fetchProductsBegin,
  fetchProductsSuccess,
  fetchProductsFailure,
} from "./Actions/dataActions";
import StateData from "./components/statesData";
import Loading from "./components/Loading";

function App() {
  const statesArray = useSelector((state) => state.data.items.data);
  const loading = useSelector((state) => state.data.loading);
  const [statesCases, setstatesCases] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      dispatch(fetchProductsBegin());
      try {
        const url = "https://api.covid19india.org/data.json";
        const result = await axios.get(url);
        dispatch(fetchProductsSuccess(result));
        setstatesCases(result);
      } catch (err) {
        dispatch(fetchProductsFailure(err));
      }
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Covid-19 Pandemic In India</h1>
      {loading ? (
        <Loading />
      ) : (
        <StateData statesArray={statesArray ? statesArray.statewise : []} />
      )}
    </div>
  );
}

export default App;
