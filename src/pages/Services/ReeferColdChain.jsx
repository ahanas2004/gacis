import ServicePageTemplate from '../../components/Services/ServicePageTemplate';
import { services } from '../../data/services';

const service = services.find(s => s.id === 'reefer-cold-chain');

export const ReeferColdChain = () => <ServicePageTemplate serviceData={service} />;
export default ReeferColdChain;
