import './PostpartumHypertension.css';
import Hypertension from './assets/Hypertension.png';
import Hypertension1 from './assets/Hypertension(1).png';
import SubtopicSidebar from './SubtopicSidebar';
import Timeline from './assets/pics/Postpartum hypertension.png';
import Hypertension3 from './assets/pics/Hypertension(1).png';


const PostpartumHypertension = () => {
  return (
    
    <div className='main'>
      <article className='urinary-incontinence-article'>
      
 <section>
      <h1>Postpartum Hypertension</h1>
      <p>
        Postpartum Hypertension is characterized by a systolic blood pressure (SBP) of ≥ 140 mmHg and diastolic blood pressure (DBP) of ≥ 90 mmHg measured at 4 hours post delivery. 
        50–85% of hypertensive pregnancies are expected to normalize by day seven post-delivery. If the blood pressure remains elevated beyond 6 weeks after delivery, postpartum hypertension is confirmed and requires ongoing care.
      </p>
      <p >
        Approximately 50% of women with pregnancy-related hypertension remain hypertensive after delivery, while around 10% of women who had normotensive pregnancies develop hypertension within 6 weeks postpartum.
      </p>
      <p>
        To understand the effects of postpartum hypertension, it is crucial to identify the type of hypertension present during pregnancy. This awareness allows for greater caution in preventing complications after delivery.
      </p>
      <ul >
        <li>
          <strong>Gestational Hypertension (GH):</strong> Onset of high blood pressure after 20 weeks of pregnancy without end-organ dysfunction.
        </li>
        <li>
          <strong>Preeclampsia (PE):</strong> New hypertension after 20 weeks of pregnancy with evidence of end-organ damage, such as proteinuria.
        </li>
        <li>
          <strong>Chronic Hypertension:</strong> Present before 20 weeks of gestation or persists beyond 12 weeks postpartum.
        </li>
        <li>
          <strong>Chronic Hypertension with Superimposed Preeclampsia:</strong> Chronic hypertensive women developing preeclampsia during pregnancy.
        </li>
      </ul>
      <p >
        The common symptoms associated with postpartum hypertension are listed below:
      </p>
      </section>
      <section id='symptoms'>
      <img src={Hypertension} alt='Symptoms-Hypertension' className="image" />
      
      <p>
        One positive aspect of postpartum hypertension is that 50–85% of hypertensive pregnancies typically return to normal by day seven after delivery. However, its important to remain vigilant, as 25% of women with hypertensive disorders during pregnancy might still need antihypertensive treatment up to two years later.
      </p>
      <p>
        If left untreated, it can lead to various health ailments like stroke, arterial dissections, rupture of arteriovenous malformations, cerebral venous thrombosis, and reversible cerebral vasoconstriction syndrome (RCVS).
      </p>
      </section>
      <section id='screening'>
      <h2 >SCREENING</h2>
      <p >
        <strong>Continuous Monitoring:</strong> Screening for postpartum hypertension is not specific; continuous monitoring tailored to the individual case of hypertension is necessary. This approach ensures accurate diagnosis and timely intervention.
      </p>
      <p >
        <strong>Initial Postpartum Monitoring:</strong> Blood pressure (BP) should be monitored within the first 72 hours postpartum and again 7 to 10 days after delivery for women with hypertensive disorders of pregnancy (HDP).
      </p>
      <p >
        <strong>Further Monitoring:</strong> Between the 3rd and 6th day postpartum, even if a woman was normotensive immediately after delivery, monitoring is required to check for severe preeclampsia (PE) that may develop.
      </p>
      <p >
        Routine postpartum visits are recommended after 6 weeks of delivery for all women, whether normotensive or hypertensive. These visits help in identifying de novo hypertension that may arise after delivery and managing any ongoing hypertension.
      </p>
      <p >
        It is noted that 77% of the excess long-term cardiovascular risk associated with HDP is attributed to modifiable risk factors. So postpartum visits can help to prevent future complications.
      </p>
      </section>
      <section>
        <img src={Timeline} alt="Timeline" className='image' style={{width:'85%'}} />
      </section>
      <section id='risk-factors'>
      <h2>RISK FACTORS</h2>
      <img src={Hypertension1} alt='hypertension risk factors' className='image' />
      </section>
      <section id='diagnosis'>
      <h2 >DIAGNOSIS</h2>
      <p>
        Antenatal Data Importance: To provide timely care for postpartum hypertension, antenatal hypertension data must be reviewed. Accurate diagnosis of hypertension during pregnancy is essential for appropriate postpartum treatment.
      </p>
      <p >
        Postpartum Hypertension Confirmation: Postpartum hypertension is confirmed after 3 months of continuous BP monitoring. This prolonged monitoring is necessary to distinguish between transient postpartum hypertension and persistent hypertension.
      </p>
      <p >
        Long-term Cardiovascular Risk: Managing these factors effectively can significantly impact long-term cardiovascular health.
      </p>
      </section>
      <section id='treatment'>
      <h2>TREATMENT</h2>
      <p >
        Treating high blood pressure in mothers after childbirth is simpler compared to during pregnancy since the babys well-being isnt a concern anymore. However, choosing blood pressure medications that are safe for breastfeeding is important. 
        Treatment should begin if blood pressure exceeds 150/100 mmHg. Medication isnt needed if blood pressure stays below this level in new cases, but regular monitoring is essential. For mothers who had high blood pressure or preeclampsia during pregnancy, treatment should continue if their blood pressure is consistently between 145–150/95–100 mmHg.
      </p>
      <p >
        Some of the commonly used hypertensives for breastfeeding mothers and their side effects with contraindications are given below:
      </p>
      <img src={Hypertension3} alt="img" className='image' style={{width:'85%'}} />
      <p>
        <strong>Note:</strong> A contraindication is a condition that warrants the avoidance of a drug due to potential harm.
      </p>
      </section>
      <section id='case-studies'>
      <h2 >CASE STUDIES</h2>
      <p>
        The following are various case studies conducted across countries with different economic backgrounds, focusing on the control, prevention, and treatment of postpartum hypertension.
      </p>
      <h4>Telehealth with remote blood pressure monitoring for postpartum hypertension: A prospective single-cohort feasibility study</h4>
      <p >
        <strong>Study:</strong> The American College of Obstetricians and Gynecologists (ACOG) developed a postpartum evaluation algorithm to enhance postpartum care, with specific guidelines for BP checks and follow-up visits. 
        The University of Wisconsin also conducted a similar study where the participants received a tablet and equipment to transmit vital signs to a central monitoring site daily and participated in telehealth or telephone visits with a nurse at 48 hours and as needed.
      </p>
      <p >
        <strong>Outcome:</strong> In the study conducted by ACOG, despite recommendations, only 40% of women attended face-to-face follow-up visits six weeks post-delivery. Digital platforms, however, showed promise in reducing hypertension-related admissions while maintaining patient satisfaction. 
        In the study conducted by the University of Wisconsin, effective remote monitoring led to only a 16% incidence of severe hypertension post-discharge, with no hospital readmissions.
      </p>
      <p >
        <strong>Discussion:</strong> The US study highlights the potential of digital health interventions in improving postpartum hypertension management. However, the low follow-up rates indicate a need for better patient engagement and adherence strategies.
      </p>
      <h4 >Postpartum blood pressure self-management following hypertensive pregnancy: protocol of the Physician Optimised Post-partum Hypertension Treatment (POP-HT) trial</h4>
      <p >
        <strong>Study:</strong> The POP-HT (Physician Optimised Post-partum Hypertension Treatment) program utilized a smartphone app for women to upload BP readings, which were then used for algorithm-driven medication titration. 
        Physicians remotely approved medication changes based on these readings.
      </p>
      <p >
       <strong> Outcome:</strong> The use of Bluetooth-enabled home BP monitors facilitated automated data uploads and telemonitoring by physicians, improving efficiency in managing postpartum hypertension. The primary outcome was a reduction in the 24-hour average ambulatory diastolic BP at 6–9 months postpartum.
      </p>
      <p >
       <strong>Discussion:</strong> The study demonstrates the effectiveness of telemonitoring and algorithm-driven care in managing postpartum hypertension, particularly in reducing the burden on patients during a busy postpartum period.
      </p>
      <h4 >The incidence of pregnancy hypertension in India, Pakistan, Mozambique, and Nigeria: A prospective population-level analysis</h4>
      <p >
        Study: In India, Pakistan, Mozambique, and Zimbabwe, a POM-guided approach using the Minipiers prediction model was employed to identify the risk of adverse maternal outcomes among women with pregnancy hypertension.
      </p>
      <p >
        <strong>Outcome:</strong> The study found that 40% of postpartum hypertension cases were first diagnosed postpartum, despite antenatal care. The diagnosis typically occurred within 7 days of delivery, except in India, where it was most delayed. Mozambique had the lowest antenatal BP measurements, and India had the lowest incidence of postpartum hypertension.
      </p>
      <p >
        <strong>Discussion:</strong> This study highlights the challenges of postpartum hypertension management in middle-income countries, where antenatal care quality varies. The POM-guided approach proved useful in identifying postpartum hypertension, but there remains a need for improved antenatal screening and follow-up care.
      </p>
      <h4 >Persistent Hypertension Up to One Year Postpartum among Women with Hypertensive Disorders in Pregnancy in a Low-Resource Setting: A Prospective Cohort Study</h4>
      <p >
        <strong>Study:</strong> The study was conducted across seven sites in Nigeria with diverse socio-economic backgrounds, focusing on antepartum and postpartum hypertension management.
      </p>
      <p>
        <strong>Outcome:</strong> Clinical evaluations and follow-ups were conducted at nine weeks, six months, and one year postpartum. Phone call reminders were used to improve follow-up rates, and comprehensive monitoring was maintained throughout the postpartum period.
      </p>
      <p >
        <strong>Discussion:</strong> The Nigerian study underscores the necessity of integrating continuous monitoring and follow-up in low-resource settings to enhance postpartum hypertension care. The findings stress the need for tailored interventions that accommodate the specific challenges faced in these environments.
      </p>
      <h2 >CONCLUSION</h2>
      <p >
        Addressing postpartum hypertension is crucial for ensuring maternal health and preventing long-term complications. Screening and timely diagnosis, especially in women with previous hypertensive disorders, are essential for effective management.
        Continued monitoring and tailored treatment plans, especially in diverse socio-economic settings, can significantly improve maternal outcomes and overall health in postpartum women.
      </p>
      <p>
        Moreover, utilizing digital health technologies can bridge gaps in care, allowing for better management of postpartum hypertension, especially in resource-limited settings. The implementation of these solutions can empower women in their postpartum journey and contribute to better health outcomes for mothers and their families.
      </p>
      <section id='specialists'>
      <h2 >SPECIALISTS</h2>
      <p >An OB/GYN should be consulted for up to a year postpartum. If the condition continues, a cardiologist should be consulted.</p>
      </section>
      </section>
      <SubtopicSidebar images={{
        hypertension: Hypertension 
      }}/>
      </article>
    </div>
  );
};

export default PostpartumHypertension;
