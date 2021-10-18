import useServices from '../../../hooks/useServices';
import Service from '../Service/Service';

const Services = () => {
    const [services] = useServices();

    return (
        <div className="max-w-7xl mx-auto px-5 mb-10 md:mb-16">
            <h2 className="text-center text-4xl text-gray-600 my-10 font-medium">
                OUR SERVICES
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-x-2 xl:gap-y-6 transform duration-500">
                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;