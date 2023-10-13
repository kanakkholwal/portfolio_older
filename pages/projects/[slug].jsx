import sliceBackgroundLarge from 'assets/slice-background-large.jpg';
import sliceBackgroundPlaceholder from 'assets/slice-background-placeholder.jpg';
import sliceBackground from 'assets/slice-background.jpg';
import { Footer } from 'components/Footer';
import { Meta } from 'components/Meta';
import {
    ProjectBackground,
    ProjectContainer,
    ProjectHeader
} from 'layouts/Project';
import styles from 'src/css/Slice.module.css';

export default function Project(){


    return(<>
        <Meta title={"title"} prefix="Projects" description={"description"} />
        <ProjectContainer className={styles.slice}>
          <ProjectBackground
            src={sliceBackground}
            srcSet={`${sliceBackground.src} 1280w, ${sliceBackgroundLarge.src} 2560w`}
            placeholder={sliceBackgroundPlaceholder}
            opacity={0.8}
          />
          <ProjectHeader
            title={"title"}
            description={"description"}
            url="https://www.best.edu.au/s/q2yjjvl7?data=8%404!9%4020303!10%40-15087&version=1"
            roles={["roles"]}
          />



        </ProjectContainer>
        <Footer />
      </>);
}