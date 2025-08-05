
import { useEffect, useState } from "react";
import  style  from "./button.module.scss";
import axios from "axios";
import { resourceLimits } from "worker_threads";
import Products from "./Products/Products";
import Filter from "./Filter/Filter";

export default () => {
        return(
            <>
            <Filter />
            <Products />
            </>
        )
    }

