
import './AnalIncontinence.css';
import AnalIncontinenc from './assets/Anal Incontinence.png';
import AnalIncontinence1 from './assets/Anal Incontinence(1).png';
import SubtopicSidebar from './SubtopicSidebar';
import AnalIncontinence2 from './assets/pics/ANAL INCONTINENCE(2).png';
import AnalIncontinence3 from './assets/pics/ANAL INCONTINENCE(3).png';
import AnalIncontinence4 from './assets/pics/ANAL INCONTINENCE.png';

const AnalIncontinence = () => {
  return (
    <div className='main'>
    <article className="urinary-incontinence-article" >
      <header className="article-header">
        <h1>Anal Incontinence</h1>
        <section>
        <p className="intro-text">
          Anal Incontinence is the reporting of incontinence of stool monthly or more, incontinence of flatus weekly or more, or combinations of two or more incontinence symptoms including fecal urgency. This is not a life-threatening condition but has negative effects on social and psychological areas.
        </p>
        </section>
      </header>
      
    
      <section className="types">
        <h2>Types of Anal Incontinence</h2>
        <div className="type">
          <h3>Urge Incontinence (UFI)</h3>
          <p>
            This type occurs in patients with an injured internal anal sphincter (IAS). The IAS is crucial for maintaining involuntary continence, and its relaxation during rectal contraction is mediated through the rectoanal inhibitory, or Gower’s reflex.
          </p>
        </div>
        <div className="type">
          <h3>Stress Incontinence (SFI)</h3>
          <p>
            SFI is seen in individuals with neurological conditions affecting the somatic nerves of the external anal sphincter (EAS). This type of incontinence often manifests during activities that increase abdominal pressure, such as coughing or lifting heavy objects.
          </p>
        </div>
        <div className="type">
          <h3>Mixed Incontinence</h3>
          <p>
            A combination of both urge and stress incontinence, where patients exhibit symptoms of both types.
          </p>
        </div>
        <h2>Postpartum Anal Incontinence</h2>
        <p>
          Most of the incontinence developed postpartum is usually urge incontinence. Delivery is considered the most important risk factor for FI (faecal incontinence) in adult women, with reported prevalence rates of 10–27% for incontinence of feces and 18–25% for flatus, at six weeks postpartum.
        </p>
        <p>
          At six months postpartum, the prevalence rates are 8–17% and 18–27%, respectively, depending on mode of delivery and perineal injury. Postpartum FI is often associated with anal sphincter injury. The reported incidence of anal sphincter injury diagnosed by endoanal ultrasonography in primiparous women is 26.9%, decreasing to 8.5% after subsequent vaginal deliveries.
        </p>
      </section>
      <section id="symptoms">  
        <img src={AnalIncontinenc} alt='' className='image' style={{width:'85%'}}/>
        </section>



      <section className="risk-factors" id='risk-factors'>
        <h2>Risk Factors</h2>
        <img src={AnalIncontinence1} alt='Analincontinence rist factors' className='image' style={{width:'85%'}}/>
        </section>
        <section className="screening" id='screening'>
        <h2>SCREENING</h2>
        <p>
        Women reporting occasional incontinence to flatus during pregnancy have been found to be at higher risk for subsequent FI, regardless of the findings from anal endosonography. While caesarean delivery poses a lower risk of anal incontinence compared to vaginal delivery, it still presents a higher risk than not giving birth. Pregnancy-related factors, including hormonal and mechanical changes, can contribute to anal incontinence, making postpartum women susceptible regardless of the delivery method.
        </p>
        <p>Screening for anal incontinence involves identifying patients based on specific symptom patterns. The primary criteria include:</p>
        <ul>
          <li>Incontinence of stool occurring on a monthly or more frequent basis.</li>
          <li>Incontinence of flatus occurring weekly or more frequently.</li>
          <li>The presence of two or more symptoms of incontinence, including faecal urgency.</li>
        </ul>
      </section>
      <section id='diagnosis'>
        <h2>DIAGNOSIS</h2>
        <p>
        Anal incontinence is often associated with injuries to the anal sphincter, particularly in postpartum women. Third- or fourth-degree sphincter ruptures during delivery are primary markers for postpartum fecal incontinence (FI). However, its important to note that while there is strong evidence linking these injuries to postpartum FI, this does not confirm a direct cause-and-effect relationship. The presence of multiple risk factors, such as prolonged labor or the use of forceps, complicates the interpretation of these associations.
        </p>
        <p>
        Anal Endosonography significantly
        Diagnosing anal sphincter tears, particularly those clinically undetected, is critical. Anal endosonography conducted six weeks postpartum has been shown to predict fecal incontinence. However, the sensitivity and positive predictive value of this method are not always high, suggesting that factors other than sphincter tears may contribute to incontinence.
        </p>
        <p>A population study in Sweden found that the average time to diagnose anal incontinence was about 13.58 years after caesarean delivery and 17.48 years after vaginal delivery, with notable spikes in diagnosis within the first two years post-delivery and around 30 years later. This highlights that it’s never too late to diagnose anal incontinence, and anyone who has gone through pregnancy remains at risk.</p>
      </section>

      <section className="treatment" id='treatment'>
  <h2>TREATMENT AND PREVENTION</h2>
  <p><strong>Biofeedback Training</strong>: </p>
  <p><b>Modalities:</b>Sensory biofeedback, audiovisual biofeedback, intraanal electromyographic biofeedback</p>
  <p><b>Objective:</b></p>
  <p>To monitor physiological activities and improve contraction of the external anal sphincter and pelvic floor muscles (PFMs). Patients will be trained to enhance voluntary contraction of the external anal sphincter during rectal filling through motor skills, discrimination training, or a combination of both, focusing on sphincter strength and coordination with rectal sensation. No side effects are expected, and the treatment is generally well accepted.</p>
  <p><b>Devices:</b></p>
  <p><i>Manometer:</i> Records the contraction of the external anal sphincter using pressure sensors.</p>
  <p><i>Electromyographic Device:</i> Detects electromyographic activity of the pelvic floor using sensors near the anal region.</p>
  <section>
    <img src={AnalIncontinence4} alt="device" className='image' style={{width:'85%'}} />
  </section>
  <p><strong>Electrical stimulation</strong>: </p>
  <p>Sacral nerves control the anal sphincters, colon, and rectum. When these nerves malfunction, doctors use sacral nerve stimulation, a type of electrical stimulation. Thin wires are placed under the skin near the sacral nerves, just above the tailbone, and a battery-operated device sends mild electrical pulses to help the nerves function properly. The stimulation is painless and can be turned on or off as needed. Electrical stimulation provides sensorimotor stimuli to the pelvic floor muscles (PFMs), improving muscle tone, motor awareness, and contraction capacity in the anal canal. Intracavitary electrical stimulation directly targets the sphincter, enhancing pelvic floor stability and voluntary muscle control. Significant improvement is observed when combined with biofeedback, but there is limited evidence for effectiveness when used alone.</p>
  <section>
    <img src={AnalIncontinence2} alt="device" className='image' style={{width:'85%'}} />
  </section>
  <p><strong>Pelvic floor muscle training</strong>:</p>
  <p>Pelvic floor muscle training focuses on improving strength, tone, resistance, muscle coordination, and perineal awareness. It is shown to be effective in preventing and treating AI in pregnant and postpartum women, with significant reductions in incontinence scores, gas leakage, and fecal urgency. Kegel’s exercise is the most commonly accepted way for treating  and preventing anal incontinence.</p>
  <p><i>Kegel’s Exercise For Anal Incontinence Prevention :</i>The Kegel exercise method recommended by the International Continence Society is usually to contract the pelvic muscles for 6-8 seconds, 8-10 times three times a day, and the training frequency is 3-4 times a week, and to continue for at least 15-20 weeks</p>
  <section>
    <img src={AnalIncontinence3} alt="image" className='image' style={{width:'85%'}} />
  </section>
  <p><strong>Surgery</strong>: </p>
  <p><i>Sphincteroplasty:</i>The most common fecal incontinence surgery which reconnects the separated ends of an anal sphincter torn by childbirth or another injury.</p>
  <p><i>Artificial anal sphincter:</i>This surgery involves placing a cuff around your anus and implanting a small pump under the skin so that you can inflate or deflate the cuff. Inflating the cuff controls the passage of stool. This surgery is not a common treatment because it may cause side effects.</p>
  <p><i>Colostomy:</i> It is a surgery in which the colon is brought through an opening in the abdominal wall, and stools are collected in a bag on the outside of the abdomen. Doctors may recommend this surgery as a last resort for the treatment of fecal incontinence. However, this surgery is rarely used to treat fecal incontinence because of the colostomy’s effect on quality of life.</p>
  <p><i>Other surgeries</i>Doctors may perform other surgeries to treat the causes of fecal incontinence, such as hemorrhoids, rectocele and rectal prolapse.</p>
</section>

<section className="case-studies" id='case-studies'>
  <h2>CASE STUDIES</h2>
  <p>The following are various case studies conducted across countries with different economic backgrounds, focusing on the control, prevention, and treatment of postpartum anal incontinence.</p>

  <p><strong>Intervention Care</strong>:Nurses, including a midwife, a health visitor, and a continence advisor, received specialized training in conservative management from physiotherapists. The intervention involved structured home interviews at five months postpartum, identifying different types of incontinence. Women were educated on pelvic floor anatomy and taught exercises to strengthen these muscles, performing 80-100 contractions daily.</p>
  <p><strong>Results</strong>:  Women in the intervention group had a significantly lower persistence of both urinary and fecal incontinence compared to the control group.The study also found reduced anxiety scores and improved general well-being in the intervention group.The benefits were most pronounced among women with severe incontinence at the outset.</p>


  <p><strong>Prevalence</strong>:During the prenatal period, 26.3% of women in the study experienced flatal incontinence, while 12.4% reported fecal incontinence. At six weeks postpartum, the incidence of flatal incontinence increased significantly to 61.1%, while fecal incontinence decreased to 5.4%. By six months postpartum, both types of incontinence showed a substantial decline, with flatal incontinence at 6.4% and fecal incontinence at 1.0%, suggesting that AI is often a transient condition.</p>
  <p><strong>Intervention</strong>: The study highlights the importance of prenatal counselling and postpartum follow-up for women with AI symptoms. This approach ensures timely assessment and treatment, particularly for women whose symptoms do not resolve naturally. Ongoing support is crucial to managing the condition effectively over time.</p>
  <p><strong>Results</strong>:The study revealed notable ethnic differences, with Indian women showing a higher prevalence and persistence of fecal incontinence compared to Black African women. The researchers suggested that variations in diet, anatomy, and body type could contribute to these disparities. The impact of the mode of delivery was also significant: women who underwent elective caesarean sections had a lower prevalence of AI than those who delivered vaginally or had emergency caesarean.</p>


  <p><strong>Intervention</strong>: Medical assistants instructed women on performing Kegel exercises, with follow-up via home visits and phone calls to ensure adherence.</p>
  <p><strong>Results</strong>: The rate of fecal incontinence was 3.0%, with a cumulative rate of anal incontinence at 13.5%, higher than previous reports. African women were found to have stronger pelvic floor support, possibly explaining lower incontinence rates compared to Caucasian women.</p>
  </section>
  <section id='specialists'>
  <h2>SPECIALISTS</h2>
  <p>Urogynaecologist, OB-GYN, Gastroenterologist, Colorectal surgeon, Proctologist.</p>
</section>
<SubtopicSidebar />
    </article>
    </div>
  );
};

export default AnalIncontinence;
