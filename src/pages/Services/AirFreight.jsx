import ServicePageTemplate from '../../components/Services/ServicePageTemplate';
import { services } from '../../data/services';

const service = services.find(s => s.id === 'air-freight');

export const AirFreight = () => <ServicePageTemplate serviceData={service} />;
export default AirFreight;
