import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function () {
  const [loading, setloading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 2000);
  },[location.pathname]);

  return {
    loading
  };
}