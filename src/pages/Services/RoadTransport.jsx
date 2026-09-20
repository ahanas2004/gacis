import ServicePageTemplate from '../../components/Services/ServicePageTemplate';
import { services } from '../../data/services';

const service = services.find(s => s.id === 'road-freight');

export const RoadTransport = () => <ServicePageTemplate serviceData={service} />;
export default RoadTransport;
