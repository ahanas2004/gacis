import ServicePageTemplate from '../../components/Services/ServicePageTemplate';
import { services } from '../../data/services';

const service = services.find(s => s.id === 'customs-compliance');

export const CustomsClearance = () => <ServicePageTemplate serviceData={service} />;
export default CustomsClearance;
