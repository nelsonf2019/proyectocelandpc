import { FC } from 'react';
import { FeatureBox } from './featureBox';
import featureimage1 from "../images/feature_1.png"
import featureimage2 from "../images/feature_2.png"
import featureimage3 from "../images/feature_3.png"

export const Features: FC = () => {
  return (
    <div id="features">
      <div className="a-container">
         
          <FeatureBox children={featureimage1} title="Administre su tiempo"/>
          <FeatureBox children={featureimage2} title="Ahorre dinero"/>
          <FeatureBox children={featureimage3} title="Agilice su negocio"/>
        
      </div>
    </div>
  );
};
