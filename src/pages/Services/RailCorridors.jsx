import ServicePageTemplate from '../../components/Services/ServicePageTemplate';
import { services } from '../../data/services';

const service = services.find(s => s.id === 'rail-corridors');

export const RailCorridors = () => <ServicePageTemplate serviceData={service} />;
export default RailCorridors;
