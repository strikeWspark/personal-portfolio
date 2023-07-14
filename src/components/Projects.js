import projImg1 from '../assets/img/pro-image1.png';
import projImg2 from '../assets/img/pro-image2.png';
import projImg3 from '../assets/img/pro-image3.png';
import projImg4 from '../assets/img/pro-image4.png';
import projImg5 from '../assets/img/pro-image5.png';
import projImg6 from '../assets/img/pro-image6.png';
import colorSharp2 from '../assets/img/color-sharp2.png';
import { Container, Nav, NavLink, Row, Tab, Col } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';

export const Projects = () => {

    const projects = [
        {
            title: "Learning Design",
            description: "Design & Development",
            imgUrl: projImg4,
          },
          {
            title: "Restaurant",
            description: "Design & Development",
            imgUrl: projImg5,
          },
          {
            title: "Starbucks",
            description: "Design & Development",
            imgUrl: projImg6,
          },
          {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg1,
          },
          {
            title: "Destiny",
            description: "Design & Development",
            imgUrl: projImg2,
          },
          {
            title: "Profile",
            description: "Design & Development",
            imgUrl: projImg3,
          },
    ];

    return (
        <section className='project' id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                        <h2>Projects</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant='pills' className='nav-pills mb-5 justify-content-center align-items.center' id="pills-tab">
                                <Nav.Item>
                                    <NavLink eventKey="first">Projects</NavLink>
                                </Nav.Item>
                                <Nav.Item>
                                    <NavLink eventKey="second">Figma Design</NavLink>
                                </Nav.Item>
                                <Nav.Item>
                                    <NavLink eventKey="third">Tab 3</NavLink>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content id="slideInUp">
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects.map((project,index) => {
                                                return (
                                                    <ProjectCard 
                                                    key={index} 
                                                    {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className='background-image-right' src={colorSharp2}/>
        </section>
    )
}