
import './Obesity.css';
import Obesity1 from './assets/Obesity.png';
import SubtopicSidebar from './SubtopicSidebar';

const Obesity = () => {
  return (
    <div className="main">
      <article className='urinary-incontinence-article'>
      <div className="article-header">
        <h1>OBESITY</h1>
        <p className="intro-text">
          Overweight and obese are defined as abnormal or excessive fat accumulation that may impair health. 
          It is measured by BMI of greater than 30 kg/m².
        </p>
      </div>

      <section className="postpartum-weight">
        <p>
        Postpartum weight gain is defined as the difference between postpartum body weight measured at the time of the clinic visit and pre-pregnancy body weight. Studies have shown that obese women experience a higher incidence of extended postpartum hospital stays, hemorrhage, and infections compared to non-obese women. Additionally, a rise in maternal BMI has been associated with a greater risk of postpartum complications. 
        </p>
        <p>Effective management should be initiated soon after delivery, with a calorie intake of 1200-1800 kcal/day and a focus on essential micronutrients, while physical activity should be resumed within 4-6 weeks postpartum, aiming for 150 minutes of moderate-intensity exercise weekly.</p>
        <p>The careful eating and health habits suggested and supported by the prenatal care team that women with obesity have taken an during pregnancy were abandoned in postpartum.</p>
      </section>

      <section className="external-influences">
        <h2>External Influences</h2>
        <ol>
          <li>They feel uncomfortable with an obese body, but they do not know how to deal with their obesity.</li>
          <li> Nutrition is not a central issue for a woman with obesity at that point in her life.</li>
          <li>There is a return to old eating behaviors that have been developed since childhood/adolescence that are linked to obesity.</li>
          <li> During postpartum there is a very present feeling of loneliness and helplessness, which strongly influences the eating behavior of women with obesity during that period.</li>
        </ol>
        <p>There is evidence that suggests a bidirectional link between obesity and depression.Depressed people are more likely to gain weight due to poor nutritional choices and reduced physical activity.</p>
        <p><strong>Obese pregnant women are also at an elevated rist of experiencing both antenatal and postnatal depression and anxiety symptoms compared to those with a normal weight.</strong></p>
      </section>
      <section id='risk-factors'>
        <img src={Obesity1} alt="Obesity risk factors" style={{width:'85%'}} />
      </section>

      <section className="screening" id='screening'>
        <h2>SCREENING</h2>
        <div className="bmi-ranges">
            <p>Usual postpartum visits include the evaluation of weight to determine whether there is weight retention after 6-12 months of delivery. Starting at 25.0, the higher your BMI, the greater is the risk of developing obesity-related health problems. These ranges of BMI are used to describe levels of risk:</p>
          <h3>BMI Classifications:</h3>
          <ul>
            <li>Overweight (not obese): 25.0 to 29.9</li>
            <li>Class 1 (low-risk) obesity: 30.0 to 34.9</li>
            <li>Class 2 (moderate-risk) obesity: 35.0 to 39.9</li>
            <li>Class 3 (high-risk) obesity: ≥40.0</li>
          </ul>
         
        </div>
      </section>
      <section id='diagnosis'>
        <h2>DIAGNOSIS</h2>
      <p>Women with a waist size greater than 35 inches (89 centimeters) have an increased risk for heart disease and type 2 diabetes. People with apple-shaped bodies (waist is bigger than the hips) also have an increased risk for these conditions.
      </p>
      </section>

      <section className="management">
        <h2>MANAGEMENT OF OBESITY</h2>
        <div className="management-type">
          <h3>Dietary Modifications:</h3>
          <p>
          Dietary interventions are crucial for managing postpartum obesity. Studies have shown that diet-only interventions can lead to significant weight reduction, with one trial demonstrating a weight loss of 6.1 kg over 12 weeks. These interventions typically focus on calorie reduction—up to 500 kcal per day—and aim for a gradual weight loss of about 0.5 to 1 kg per week. The goal is often a 6 kg reduction by the end of the intervention.
          </p>
        </div>

        <div className="management-type">
          <h3>Physical Activity:</h3>
          <p>
          Combining diet with physical activity has been shown to yield better results than diet alone. Trials incorporating physical activity alongside dietary advice have demonstrated effective weight management outcomes. However, postpartum women often face challenges such as time pressure, fatigue, and lack of social support, which may impede their ability to engage in regular exercise. Studies suggest that offering flexible, personalized exercise programs could improve adherence and outcomes. For example, interventions involving home-based exercises or simple physical activities like walking have been successful in increasing participation.
          </p>
        </div>

        <div className="management-type">
          <h3>Technology-Based Interventions:</h3>
          <p>
          The use of technology to deliver postpartum obesity interventions is gaining traction. Web-based platforms and mobile applications allow healthcare providers to deliver tailored advice and monitor progress. Feedback via text messages or phone calls has been particularly effective in maintaining engagement, as demonstrated in trials where regular contact helped participants stay on track with their weight loss goals.
          </p>
        </div>
        <div className='management-type'>
            <h3>Breastfeeding:</h3>
            <p>Breastfeeding has been linked to reduced postpartum weight retention. Some studies indicate that exclusive breastfeeding is associated with quicker weight loss, with women more likely to return to their pre-pregnancy weight within six months. However, while this can be a beneficial aspect of postpartum weight management, it is not a universal solution and needs to be combined with lifestyle modifications for optimal results.</p>
        </div>
        <div className='management-type'>
            <h3>Surgery:</h3>
            <p>Metabolic and bariatric surgery (MBS) is a highly effective treatment for obesity and can aid in postpartum weight loss. Over the past 30 years, its use has increased, with sleeve gastrectomy making up 70% of bariatric surgeries in 2015 and a low complication rate of 1.4%. Updated 2022 guidelines recommend MBS for individuals with a BMI of 35 kg/m² or higher, or 30–34.9 kg/m² with metabolic disease and failed pharmacotherapy. For Asian patients, due to higher risks of diabetes and cardiovascular disease, MBS is advised at a BMI of 27.5 kg/m².</p>
        </div>
      </section>

      <section className="case-studies" id='case-studies'>
        <h2>CASE STUDIES</h2>
        <p><strong>Randomized controlled trail of Home-Based lifestyle therapy on postpartum weight in undeserved women with overweight or obesity</strong></p>
        <div className="study">
          <h3>High-Income Countries</h3>
          <p>
            <strong>Study:</strong> This study was conducted at Barnes-Jewish Hospital and Washington University School of Medicine in St. Louis, Missouri, between October 2012 and March 2016. The research involved 267 African American women aged 18 to 45 with a BMI between 25.0 and 45.0 kg/m², recruited from obstetrics clinics. The participants were randomly assigned to either standard Parents as Teachers (PAT) or PAT+Lifestyle intervention, with assessments taken at 15 weeks of gestation and 12 months postpartum. The standard PAT system focuses on parenting knowledge and child development, without addressing maternal weight or lifestyle changes. In contrast, PAT+Lifestyle includes tailored interventions for postpartum weight management, integrating healthy eating and physical activity guidance into the regular curriculum. The study primarily measured changes in body weight postpartum, with secondary outcomes focusing on weight gain during pregnancy according to Institute of Medicine (IOM) guidelines.
          </p>
          <p><strong>Outcomes:</strong> The study found that the PAT+  Lifestyle group retained significantly less weight (2.5 ± 7.4 kg) compared to the standard PAT group (5.7 ± 8.8 kg) at 12 months postpartum . Among women who adhered to IOM guidelines for gestational weight gain (GWG), those in the PAT+Lifestyle group retained less weight (0.9 ± 6.8 kg) than those in the standard PAT group (4.2 ± 8.6 kg, P = 0.03). While participants exceeding GWG guidelines in the PAT+Lifestyle group tended to retain less weight than those in the standard PAT group, the difference was not statistically significant. Additionally, 38% of women in the PAT+Lifestyle group returned to their baseline weight or lower by 12 months postpartum, compared to 21.5% in the standard PAT group. However, no significant differences were observed between the two groups in terms of cardiometabolic outcomes, such as blood pressure, glycemic control, or lipid profiles.</p>
          <p><strong>Discussion:</strong>PAT+Lifestyle successfully reduces postpartum weight retention in underserved, socioeconomically disadvantaged African American women, though no immediate cardiometabolic benefits were evident. The intervention was cost-effective, with an additional cost of only $81 over standard PAT, making it feasible for widespread implementation. Despite the positive outcomes, the studys generalizability is limited due to its focus on a specific demographic, and further research is required to assess long-term benefits.</p>
          <p><strong>Reducing postpartum weight retention: A review of the implementation challenges of postpartum lifestyle interventions</strong></p>
        </div>

        <div className="study">
          <h3>Mid-Income Countries</h3>
          <p>
           <strong>study:</strong>This narrative review aims to provide a weight management module for Indian postpartum women, based on both evidence and expert opinion, for use by clinicians.
          </p>
          <p><strong>Outcomes:</strong>The study underscores the importance of a personalized approach to postpartum weight management, integrating nonpharmacologic strategies like diet, physical activity, and behavioral therapy, with pharmacotherapy for severe obesity if necessary. Effective management should begin soon after delivery, with dietary guidelines recommending a calorie intake of 1200-1800 kcal/day and a focus on essential micronutrients. Physical activity should resume within 4-6 weeks postpartum, aiming for 150 minutes of moderate-intensity exercise weekly. While breastfeeding for at least six months is encouraged, its impact on weight loss remains uncertain. Adequate sleep and behavioral therapy are crucial, and family support significantly enhances adherence to weight management plans.</p>
          <p><strong>Discussion:</strong>The study emphasizes the need for personalized and flexible weight management strategies for postpartum women. Diet and exercise recommendations are aligned with current guidelines but must be personalized. Sleep and behavioral therapy are highlighted as important factors for success. Family support plays a significant role in adherence to weight management plans.</p>
        </div>

        <div className="study">
          <h3>Low-Income Countries</h3>
          <p><strong>Midwives’ and obstetricians’ perspectives about pregnancy related weight management in Ethiopia: A qualitative study</strong></p>
          <p>
            <strong>Study:</strong>The study was conducted in Addis Ababa, Ethiopia, involving midwives and obstetricians from seven health centers and four tertiary public hospitals in the city. Midwives were purposively recruited from the health centers and one of the hospitals, while obstetricians were recruited from the hospitals. Only those who provided antenatal care services at the time of data collection were included in the study, excluding midwives involved only in labor, birth, or postpartum care and obstetricians focused on teaching or surgery. The primary author invited eligible participants, explaining the studys objectives and data collection procedures. A total of 11 midwives and 10 obstetricians agreed to participate.
          </p>
          <p>
            <strong>Outcomes:</strong> The study found that midwives and obstetricians in Ethiopia generally lack knowledge about optimal gestational weight gain (GWG) and are unfamiliar with the Institute of Medicine (IOM) guidelines. There is a need for Ethiopia-specific GWG guidelines. Misconceptions among women about weight management, including the belief that weight gain should occur postpartum, were common. While weight measurement was routinely performed, counseling on GWG and postpartum weight management was inconsistent due to inadequate knowledge, high workload, and low priority. Midwives lacked confidence in providing nutritional advice, while obstetricians felt the need for guidelines and greater involvement of nutritionists. Postpartum weight management was often neglected, with women experiencing increased weight gain due to higher food intake and reduced physical activity.
          </p>
          <p>
            <strong>Discussion:</strong>The study highlights a significant lack of knowledge and inconsistent practices regarding GWG and postpartum weight management among Ethiopian healthcare providers. The absence of awareness about IOM guidelines and the need for context-specific recommendations was evident. Misconceptions and inadequate counseling contribute to suboptimal weight management. The findings suggest the need for targeted education and training for healthcare providers, development of culturally appropriate guidelines, and integration of weight management information into antenatal care. Enhancing community health literacy and addressing affordability issues for nutrition could also support better outcomes. The study underscores the importance of improving provider education and developing tailored guidelines to enhance maternal health.
          </p>
        </div>
      </section>
      <section className="specialists" id='specialists'>
        <h2>SPECIALISTS</h2>
         <p>OB/GYN, Endocrinologist, Dietician/Nutritionist, Bariatric specialist, Gastroenterologist.</p>
      </section>
      <SubtopicSidebar />
      </article>
    </div>
  );
};

export default Obesity;