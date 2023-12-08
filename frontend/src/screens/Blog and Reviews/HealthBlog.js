import * as React from 'react';
import Grid from '@mui/material/Grid';



import ActionAreaCard from '../../components/Card';


import img1 from "../../assests/most-common-1.jpg";
import img2 from "../../assests/most-common-2.jpeg";
import img3 from "../../assests/most-common-3.jpeg";



export default function HealthBlog() {
  const [spacing, setSpacing] = React.useState(2);

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };





  return (
    <Grid sx={{ flexGrow: 1, marginBottom:5 }} container spacing={2} id="blog">
      <Grid item xs={12}>
      <h3 className="info-title">
          <span>The 3 Most Common Health Concerns for Seniors</span>
        </h3>
        <Grid container justifyContent="center" spacing={spacing}>
        
            <Grid item>
              
              <ActionAreaCard img={img1}  heading={'Arthritis'} description={'“Arthritis is probably the number one condition that people 65 or older contend with,” says geriatrician Marie Bernard, MD, deputy director of the National Institute on Aging in Bethesda, Maryland. The CDC estimates that it affects 49.7 percent of all adults over 65 and can lead to pain and lower quality of life for some seniors. Although arthritis can discourage you from being active, it’s important to work with your doctor to develop a personalized activity plan that, along with other treatment, can help maintain senior health.'} />
            </Grid>
            <Grid item>
              
                <ActionAreaCard img={img2} heading={'Heart Disease'} description={"According to the CDC, heart disease remains the leading killer of adults over age 65, accounting for 489,722 deaths in 2014. As a chronic condition, heart disease affects 37 percent of men and 26 percent of women 65 and older, according to the Federal Interagency Forum on Aging-Related Statistics. As people age, they're increasingly living with risk factors, such as high blood pressure and high cholesterol, that increase the chances of having a stroke or developing heart disease. "}/>
            </Grid>
            <Grid item>
            
              <ActionAreaCard img={img3} heading={"Cancer"} description={"Cancer is the second leading cause of death among people over age 65, with 413,885 deaths in 2014, according to the CDC. The CDC also reports that 28 percent of men and 21 percent of women over age 65 are living with cancer. If caught early through screenings, such as mammograms, colonoscopies, and skin checks, many types of cancer are treatable. And though you're not always able to prevent cancer, you can improve your quality of life as a senior living with cancer, including during treatment, by working with your medical team and maintaining their healthy senior living recommendations."}/>
            </Grid>
         
        </Grid>
      </Grid>
    </Grid>
   
  );
}
