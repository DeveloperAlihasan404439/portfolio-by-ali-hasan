'use client'

import { useEffect, useState } from "react";

export default function SetTimeOut() {
    const [timeOut, setTimeOut] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setTimeOut(false);
        }, 2000);
      }, []);
    return {timeOut};
};