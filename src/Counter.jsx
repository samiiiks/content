    import { useEffect, useState } from "react";

    const HomePage = () => {
        const [counter, setCounter] = useState(0);
        const increment = 1;
        const delay = 10000;
        const time = 1200;
       
    
        useEffect(() => {
       
        const timer = setTimeout(() => {
            setCounter((prevCounter) => prevCounter + increment);
          }, delay);
          return () => 
          
            clearTimeout(timer);
       
        }, []);
        return (
            <div>
            <p>count{counter}</p>
            </div>
        );
        };
        
        export default HomePage;