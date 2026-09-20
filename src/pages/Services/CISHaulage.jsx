import ServicePageTemplate from '../../components/Services/ServicePageTemplate';
import { services } from '../../data/services';

const service = services.find(s => s.id === 'cis-haulage');

export const CISHaulage = () => <ServicePageTemplate serviceData={service} />;
export default CISHaulage;
