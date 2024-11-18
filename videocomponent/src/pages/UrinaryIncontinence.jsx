import UrinaryIncontinenc from './assets/Urinary Incontinence(1).png';
import UrinaryIncontinence1 from './assets/Urinary Incontinence.png';
import SubtopicSidebar from './SubtopicSidebar';
import './UrinaryIncontinence.css';
import UrinaryIncontinence2 from './assets/pics/URINARY INCONTINENCE(1).png';
import UrinaryIncontinence3 from './assets/pics/URINARY INCONTINENCE(2).png';
import UrinaryIncontinence4 from './assets/pics/URINARY INCONTINENCE(3).png';
import UrinaryIncontinence5 from './assets/pics/URINARY INCONTINENCE(4).png';

const UrinaryIncontinence = () => {
  return (
    <div className='main'>
    <article className="urinary-incontinence-article">
      <section>
      <h1>Urinary Incontinence</h1>
      <p>
        Urinary incontinence is the involuntary loss of urine, which can significantly affect a womans health and quality of life. It can increase the risk of urinary tract infections, skin ulceration, falls, fractures, and interfere with work, social activities, sexual function, and independence.
      </p>

      <h2>Types</h2>
      <ul>
        <li><strong>Stress Incontinence:</strong> The inability to retain urine during physical exertion or activities that increase intra-abdominal pressure, such as coughing or sneezing. This is often due to impaired sphincter function.</li>
        <li><strong>Urge Incontinence:</strong> Associated with a sudden urge to void, usually caused by bladder contractions, overactivity, or dysfunction of the detrusor muscle.</li>
        <li><strong>Overactive Bladder:</strong> Refers to urinary urgency with or without incontinence, often accompanied by frequent urination and nighttime voiding.</li>
        <li><strong>Mixed Urinary Incontinence:</strong> A combination of both stress and urge incontinence.</li>
      </ul>

      <h2>Postpartum Urinary Incontinence</h2>
      <p>
        Postpartum urinary incontinence is a prevalent condition, affecting up to 40% of women after childbirth. Delivery-related trauma is a major risk factor for stress urinary incontinence (SUI), and many women continue to experience urinary incontinence in the postpartum period. 
      </p>
      <ul>
        <li><strong>Stress Urinary Incontinence (SUI):</strong> Accounts for 54% of cases.</li>
        <li><strong>Urge Urinary Incontinence (UUI):</strong> Contributes to 26% of cases.</li>
        <li><strong>Mixed Urinary Incontinence (MUI):</strong> Makes up 16% of cases, with 4% remaining unexplained.</li>
      </ul>
      </section>
      
        <section id='symptoms'>
      <h2>Symptoms</h2>
      <ul>
        <li>Leakage while laughing, sneezing, or coughing</li>
        <li>Leakage during strenuous activities</li>
      </ul>
       <img src={UrinaryIncontinence1} alt="ui" style={{ width:'85%'}} />
       </section>
       <section id='risk-factors'>
       <h3>Risk Factors for Postpartum SUI</h3>
      <p>Risk factors include vaginal delivery, advanced age at gestation, high BMI, excess weight gain, diabetes, episiotomy, forceps delivery, and more. Protective factors include elective cesarean section and vacuum extraction.</p>
       <img src={UrinaryIncontinenc} alt="hhh" style={{width:'85%'}}></img>
       </section>
       <section id='screening'>
      <h2>Screening</h2>
      <p>
        Screening typically involves a series of questions by physicians. A validated tool called The QUID is available to diagnose the type of urinary incontinence and assess symptom frequency, making it a valuable resource for clinicians and researchers alike.
      </p>
      </section>
      <section id='diagnosis'>
      <h2>Diagnosis</h2>
      <p>
        Diagnosis includes individualized clinical evaluations and may be followed by tests such as the cough stress test, pad test, postvoid residual volume measurement, and urodynamic testing.
      </p>

      <h3>1. Cough Stress Test (CST)</h3>
      <p>
        The CST is an important tool for diagnosing stress urinary incontinence (SUI) by assessing urine leakage when coughing. This test may be repeated in different positions with varying bladder volumes.
      </p>
      <ul>
        <li><strong>Recommended Position:</strong> Supine/lithotomy during vaginal exam; repeat in upright if negative.</li>
        <li><strong>Bladder Volume:</strong> Conducted with 200-400 mL volume.</li>
        <li><strong>Positive Test Criteria:</strong> Visual urine leakage with cough.</li>
      </ul>
      <section>
        <img src={UrinaryIncontinence2} alt="cough stess test" className='image' style={{width:'85%'}} />
      </section>

      <h3>2. Pad Test</h3>
      <p>
        This test measures urine leakage by weighing an absorbent pad before and after leakage. The difference in weight indicates the amount of urine leaked.
      </p>
       <section>
        <img src={UrinaryIncontinence3} alt="Pad test" className='image' style={{width:'85%'}} />
       </section>
      <h3>3. Urodynamic Testing</h3>
      <h4>Uroflowmetry</h4>
      <p>
        Uroflowmetry assesses bladder function by measuring urine flow volume and speed, recorded on a graph.
      </p>

      <h4>Postvoid Residual Volume (PVR) Measurement</h4>
      <p>
        PVR measures urine left in the bladder after voiding, using methods like catheterization or bladder ultrasound.
      </p>

      <h4>Cystometric Test</h4>
      <p>
        The cystometric test measures bladder pressure and capacity, with the bladder gradually filled and sensations reported.
      </p>
      <section>
        <img src={UrinaryIncontinence4} alt="Cystometric test" className='image' style={{width:'85%'}} />
      </section>

      <h4>Leak Point Pressure Measurement</h4>
      <p>
        During a cystometric test, the leak point pressure measures bladder pressure when leakage occurs due to unexpected contractions.
      </p>

      <h4>Pressure Flow Study</h4>
      <p>
        This study records pressure and flow rate during urination to identify potential bladder outlet blockages.
      </p>

      <h4>Electromyography (EMG)</h4>
      <p>
        EMG is used if nerve or muscle damage is suspected. Sensors record the electrical activity of bladder muscles and nerves.
      </p>
      <section>
        <img src={UrinaryIncontinence5} alt="image" className='image' style={{width:'85%'}} />
      </section>

      <h4>Video Urodynamic Tests</h4>
      <p>
        These tests capture images and videos of the bladder using x-rays or ultrasound, with contrast dye for better visualization.
      </p>
      </section>
      <section id='treatment'>
      <div>
      <h2>Treatment</h2>
      <p>For most patients with uncomplicated stress urinary incontinence (SUI), initial management typically includes a range of noninvasive interventions such as behavioral modification, pelvic floor exercises (PFEs) with or without biofeedback, and various supplementary teaching aids.</p>

      <h3>Non Invasive Interventions</h3>

      <h4>Behavioral Therapy</h4>
      <p>
        Behavioral therapy for SUI consists of patient education on bladder function, fluid and dietary management, timed or prompted voiding, and keeping a voiding diary. The goal is to increase bladder capacity and reduce incontinence symptoms by modifying fluid intake and dietary habits. Research shows that behavioral therapy can reduce incontinence episodes and urine loss by more than 50%, with high patient satisfaction and minimal adverse effects.
      </p>

      <h4>Pelvic Floor Muscle Training (PFMT)</h4>
      <p>
        PFMT involves exercises to strengthen the pelvic floor muscles. These exercises target both slow-twitch and fast-twitch muscle fibers to improve muscle strength and endurance. Studies indicate that PFMT can lead to significant reductions in incontinence episodes, though high patient compliance and motivation are crucial for success.
      </p>

      <h4>Electrical Stimulation</h4>
      <p>
        Pelvic floor electrical stimulation involves applying low-level electrical currents to stimulate pelvic floor muscles. Some studies report success, though results are inconsistent. The combination of electrical stimulation with biofeedback may help patients better identify muscle contractions, but it hasn’t been conclusively shown to be more effective than PFMT alone.
      </p>

      <h4>Vaginal Cones</h4>
      <p>
        Vaginal cones are devices inserted into the vagina, which are held in place by pelvic floor muscle contractions. They may help in strengthening these muscles but are generally not considered more effective than PFMT alone.
      </p>

      <h4>Continence Devices</h4>
      <p>
        Various continence devices, such as external and intraurethral devices, have been used to manage SUI. However, issues with patient acceptance and device-related complications can limit their utility.
      </p>

      <h4>Pharmacologic Therapy</h4>
      <p>
        Pharmacologic treatments for SUI, such as 𝛼-adrenergic agonists, have had variable success rates. While some medications can improve symptoms, concerns about side effects have limited their use.
      </p>

      <h3>Surgery</h3>

      <h4>Anterior Repair (Kelly Plication)</h4>
      <p>
        The anterior repair, or Kelly Plication, involves plicating the endopelvic fascia to support the urethra. Although easy to perform with low complication rates, it is not recommended due to poor long-term success.
      </p>

      <h4>Transabdominal (Retropubic) Suspension</h4>
      <p>
        Transabdominal approaches like the MMK and Burch colposuspension have been used for many years due to their durability. However, they are associated with a larger incision and longer recovery time.
      </p>

      <h4>Laparoscopic Procedures</h4>
      <p>
        Laparoscopic bladder neck suspension offers benefits such as less blood loss and shorter recovery time, though it may have higher complication rates compared to traditional methods.
      </p>

      <h4>Transvaginal Needle Suspension Procedures</h4>
      <p>
        Transvaginal needle suspension techniques are less invasive alternatives to retropubic procedures, avoiding large incisions but may have lower long-term success rates.
      </p>

      <h4>Sling Procedures</h4>
      <p>
        Sling procedures, including those using autologous or synthetic materials, involve placing a mesh at the midurethra to provide support. These procedures are popular for their effectiveness, but complications like erosion and infection can occur.
      </p>

      <h4>Bulking Agents</h4>
      <p>
        Periurethral bulking agents, including materials like collagen and silicone, are used to improve continence. The ideal bulking agent is still unidentified, and various agents have differing properties.
      </p>
</div>
</section>
<div>
  <section id='case-studies'>
      <h2>Case Studies</h2>


      <h4>Preventing Urinary Incontinence During Pregnancy and Postpartum</h4>
      <p>
        <strong>Study:</strong> This study provides a review of modifiable risk factors and preventive measures for urinary incontinence during pregnancy and postpartum, with a strong emphasis on PFMT as the most effective preventive strategy.
      </p>
      <p>
        <strong>Outcome:</strong> PFMT is highlighted as the most effective preventive measure. Modifiable lifestyle factors like avoiding smoking, managing constipation, maintaining a healthy weight, and engaging in low-intensity exercise can significantly reduce the risk of UI.
      </p>
      <p>
        <strong>Discussion:</strong> Findings underscore the importance of integrating preventive measures into routine prenatal and postpartum care, emphasizing a holistic approach to UI prevention.
      </p>

      <h4>The Effectiveness of Group-Based Pelvic Floor Muscle Training</h4>
      <p>
        <strong>Study:</strong> This review explored the effectiveness of group-based PFMT in pregnant and postnatal women. The primary focus was on determining whether antenatal PFMT could reduce the prevalence of UI during pregnancy and postpartum.
      </p>
      <p>
        <strong>Outcome:</strong> Group-based antenatal PFMT was effective in reducing UI during pregnancy, with benefits lasting up to 6 months postpartum.
      </p>
      <p>
        <strong>Discussion:</strong> Supports group-based antenatal PFMT as an effective and cost-efficient method to reduce UI during pregnancy.
      </p>


      <h4>Supervised Pelvic Floor Muscle Exercise Program</h4>
      <p>
        <strong>Study:</strong> This randomized controlled trial included 63 pregnant women, where the intervention group participated in a 6-week supervised pelvic floor muscle exercise program.
      </p>
      <p>
        <strong>Outcome:</strong> At 38 weeks gestation, SUI incidence was lower in the intervention group (27.3%) compared to the control group (53.3%).
      </p>

      <p><strong>Pelvic floor muscle training programme in pregnant Nepalese women-a feasibility study</strong></p>
      <p><strong>Study:</strong>This study in Nepal explored the feasibility and acceptability of pelvic floor muscle training (PFMT) among pregnant women in their first trimester attending antenatal check-ups. Exclusion criteria included complications like pre-eclampsia and vaginal bleeding. Supervised PFMT sessions, adapted to Nepalese lifestyles, were provided, encouraging daily home practice. The study assessed PFMT effectiveness, adherence, and motivation using exercise diaries and questionnaires, with educational support through videos, leaflets, and biofeedback. Attendance was affected by logistical challenges, but many women showed high motivation, especially for preventing pelvic organ prolapse (POP).</p>
      <p><strong>Outcome:</strong>The study found that tailored, supervised PFMT could be a feasible intervention in antenatal care for Nepalese women. However, adherence was influenced by factors such as time constraints and cultural considerations. Despite these challenges, the high level of motivation reported by the participants suggests that PFMT holds promise as a preventive measure for POP and other pelvic floor issues.</p>
      <p><strong>Discussion:</strong>The study highlights the feasibility of implementing PFMT in antenatal care in Nepal, with adaptations to suit local lifestyles. Although challenges like time constraints and cultural factors affected adherence, the motivation of the participants, particularly regarding the prevention of pelvic organ prolapse, indicates that PFMT could be a valuable component of antenatal care. Further exploration of strategies to overcome logistical barriers may enhance adherence and effectiveness.</p>
      </section>
      <section id='specialists'>
      <h2>SPECIALISTS:</h2>
        <p>Urologist, urogynaecologist, OB/GYN, Physiotherapist with pelvic health specialization.</p>
      </section>
    </div>
    </article>
    <SubtopicSidebar />
    </div>
  );
};

export default UrinaryIncontinence;
