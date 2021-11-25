import useServices from '../../../hooks/useServices';
import Service from '../Service/Service';

const Services = () => {
    const [services, loading] = useServices();

    return (
        <div className="max-w-7xl mx-auto px-5 mb-10 md:mb-16">
            <h2 className="text-center text-4xl text-gray-600 my-10 font-medium">
                OUR SERVICES
            </h2>
            {loading ?
                <div className="text-center py-10 mb-20 flex justify-around">
                    <button type="button" className="inline-flex items-center rounded text-lg text-white bg-gray-600 py-2 px-4" disabled>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Loading
                    </button>
                </div>
                :
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-x-2 xl:gap-y-6 transform duration-500">
                    {
                        services.map(service => <Service key={service.id} service={service}></Service>)
                    }
                </div>
            }
        </div>
    );
};

export default Services;