import { useEffect, useState } from "react";

const useServices = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('../services.json')
            .then(res => res.json())
            .then(data => setServices(data))
            .finally(() => {
                setLoading(false);
            })
    }, []);

    return [services, loading];

}

export default useServices;