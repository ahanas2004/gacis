import ServicePageTemplate from '../../components/Services/ServicePageTemplate';
import { services } from '../../data/services';

const service = services.find(s => s.id === 'lcl-consolidation');

export const LCLLFreight = () => <ServicePageTemplate serviceData={service} />;
export default LCLLFreight;
