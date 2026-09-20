import ServicePageTemplate from '../../components/Services/ServicePageTemplate';
import { services } from '../../data/services';

const service = services.find(s => s.id === 'project-logistics');

export const ProjectLogistics = () => <ServicePageTemplate serviceData={service} />;
export default ProjectLogistics;
