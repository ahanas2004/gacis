import ServicePageTemplate from '../../components/Services/ServicePageTemplate';
import { services } from '../../data/services';

const service = services.find(s => s.id === 'exw-fca-shipments');

export const EXWFCA = () => <ServicePageTemplate serviceData={service} />;
export default EXWFCA;
