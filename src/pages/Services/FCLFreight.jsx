import ServicePageTemplate from '../../components/Services/ServicePageTemplate';
import { services } from '../../data/services';

const service = services.find(s => s.id === 'fcl-freight');

export const FCLFreight = () => <ServicePageTemplate serviceData={service} />;
export default FCLFreight;
