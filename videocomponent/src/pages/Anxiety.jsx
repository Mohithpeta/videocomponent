import Anxiety1 from './assets/Anxiety.png';
import Anxiety2 from './assets/Anxiety(1).png';

const Anxiety = () => {
  return (
    <article className="max-w-4xl mx-auto p-6 space-y-8">
        <section>
      <header className="space-y-4">
        <h1 className="main-heading">POSTPARTUM ANXIETY</h1>
        <p className="paragraph">
        Anxiety is defined as a feeling of worry, nervousness, or unease about something with an uncertain outcome. Postpartum anxiety is a mental health condition that affects women after childbirth, typically within the first four weeks. It is characterized by excessive worry, tension, fatigue, irritability, difficulty concentrating, and insomnia. 
        </p>
        <p>
            <strong>Anxiety during the postpartum period is more prevalent than postpartum depression, affecting approximately 17.1% of new mothers, surpassing the 4.8% incidence of depression. </strong>
        </p>
        <p>
        In the United States, 11-21% of women experience postpartum anxiety, making women in the perinatal and postpartum periods particularly vulnerable. Despite its prevalence, postpartum anxiety is often underdiagnosed and undertreated, leading to poorer outcomes for both mothers and infants.
        </p>
        <p>
        The prevalence of anxiety disorders during the perinatal period, particularly postpartum, remains under-researched. In nonpregnant women, generalized anxiety disorder (GAD) affects between 5% and 12%. However, postpartum women experience heightened vulnerability, with prevalence rates suggested between 15% and 20%. This elevated risk is further exacerbated by a prior history of GAD, post-traumatic stress disorder (PTSD), and factors such as lack of social support, education, or a history of abuse.
        </p>
      </header>
      </section>
      <section className="space-y-4">
        <h2 className="heading2">PHYSIOLOGICAL CAUSES</h2>
        <p className="text-gray-700">
        Physiological changes during and after pregnancy, such as hormonal fluctuations, inflammatory responses, and disruptions in the hypothalamic-pituitary-adrenal (HPA) axis, are thought to contribute to postpartum anxiety. Synthetic oxytocin, commonly administered during labor, has been linked to a 1.44-times higher likelihood of postpartum anxiety development. Furthermore, the sleep disruption that often accompanies the postnatal period may significantly influence the onset of anxiety, as sleep deprivation is known to exacerbate mental health conditions.
        </p>
        <img src={Anxiety1} alt="Anxiety symptoms" style={{width:'85%'}} className='image'/>
        <p>
            <strong>These symptoms may be misinterpreted as typical postpartum experiences, leading to delays in diagnosis and treatment.</strong>
        </p>
        <div className="div">
          <h2>RISK FACTORS</h2>
          <ul>
          <ul>
            <li><strong>Demographic Factors:</strong>Young maternal age, higher education level, and employment status.</li>
            <li><strong>Childbirth Experiences:</strong>First-time or multiple childbirths, cesarean delivery, fear of childbirth or death, lack of control during labor, low self-confidence during delivery, low confidence in medical staff, premature delivery, and childcare stress.</li>
            <li><strong>Social Support Issues:</strong>Lack of family support, marital or family conflict, and social health concerns.</li>
            <li><strong>Psychiatric and Psychological History:</strong>Prenatal depression or anxiety, comorbid prenatal depression and anxiety, difficulty expressing emotions, and inadequate coping mechanisms(eg. self-blame, denial.)</li>
          </ul>
          <li><strong>Mutual Influence of stress and Anxiety:</strong>Elevated levels of stress and anxiety are closely linked, with women who experience higher-than-average stress being at risk for elevated anxiety in subsequent time points, and vice versa.</li>
          </ul>
          <li><strong>Role of Social Support:</strong></li>
          <ul>
            <li>Increases in support from partners and friends positively predict decreases in stress and anxiety, highlighting the importance of social and emotional support during pregnancy and postpartum.</li>
            <li>Women experiencing higher anxiety or stress tend to report lower levels of perceived social support, suggesting a potential withdrawal from support networks.</li>
          </ul>
          <li>Differential Impact of Support Types:</li>
          <ul>
            <li>Support from partners and family was more effective in reducing stress and anxiety compared to support from friends, indicating that relationships closely involved in caregiving may provide more effective support.</li>
          </ul>
          <img src={Anxiety2} alt="anxiety risk factors" style={{width:'85%'}} className='image' />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">SCREENING AND DIAGNOSIS</h2>
        <p>Diagnosing perinatal anxiety is challenging due to the overlap between typical postpartum symptoms and those of anxiety disorders. Despite evidence showing that anxiety disorders are common during the postpartum period, universal assessment for anxiety has not been routinely implemented in postpartum care.</p>
        <p><strong>The American congress of obstetricians and Gynecologists</strong>recommends screening for both anxiety and depression at least once during the perinatal period, using a standardized and validated instrument. If anxiety is detected during pregnancy, follow-up assessments should be conducted postpartum.</p>
        <h3>Screening Tools</h3>
        <ol>
            <li>Edinburgh Postnatal Depression Scale(EPDS):</li>
            <ul>
                <li>Originally developed to screen for postpartum depression, the EPDS is a widely recognized, 10-item self-report questionnaire that has also been used during pregnancy.</li>
                <li>Sensitivity and specificity range from 59-100% and 49-100%, respectively. Within the EPDS, three questions (referred to as EPDS-3A) specifically target perinatal anxiety.</li>
                <li>EPDS-3A has been validated for diagnosing anxiety during pregnancy, with a sensitivity of 88% and specificity of 84%, using a cutoff score of 4.</li>
            </ul>
            <li>General Anxiety Disorder 7(GAD-7)</li>
            <ul>
                <li>The GAD-7 is a brief screening tool developed for primary care patients, assessing GAD symptoms over the past two weeks through seven items.</li>
                <li>When validated for pregnancy and postpartum periods, the tool showed a sensitivity of 61.3% and specificity of 72.7%, with an ideal cutoff score of 13.</li>
                <li>A shorter version, GAD-2, uses two questions from GAD-7 but has shown limited efficacy in pregnant women due to high false-positive rates.</li>
            </ul>
            <li>State Anxiety Inventory(STAI-s):</li>
            <ul>
                <li>The STAI-S is a 20-item scale that assesses same-day anxiety levels and has been validated for use in pregnant and postpartum women.</li>
                <li>Sensitivity is 80.9% and specificity is 79.7%.</li>
            </ul>
            <li>Perinatal Anxiety Screening Scale(PASS):</li>
            <ul>
                <li>The PASS is one of the few scales specifically developed for perinatal women, consisting of 38 items to screen for a wide range of anxiety symptoms.</li>
                <li>A cutoff score of 26 has been shown to have a sensitivity of 70% and specificity of 30%.</li>
            </ul>
            <li>Postpartum specific anxiety scale:</li>
            <ul>
                <li>The Postpartum Specific Anxiety Scale (PSAS) consists of 10 questions that focus on anxiety symptoms specifically related to the postpartum experience, allowing for a targeted assessment of new mothers mental health.</li>
            </ul>
        </ol>
      </section>

      <section className="space-y-4">
        <h2 className="heading2">TREATMENT</h2>
        <div className="div">
          <div className="div">
            <ul className="list-disc pl-6 text-gray-700">
              <li><strong>Cognitive Behavioral Therapy(CBT):</strong>CBT is the first-line treatment for anxiety and depression in the general population and has shown some promising results for postpartum anxiety as well. While research specific to the perinatal period is limited, preliminary evidence suggests it may help reduce anxiety and related concerns during this time. CBT is particularly effective for mild to moderate anxiety but requires therapists who are experienced in perinatal mental health.</li>
              <li><strong>Pharmacological Treatments:</strong>For moderate to severe cases of postpartum anxiety, medication may be prescribed. Selective serotonin reuptake inhibitors (SSRIs) and serotonin-norepinephrine reuptake inhibitors (SNRIs) are commonly used. However, these medications can have concerns related to breastfeeding, as they are detectable in low levels in breast milk. Sertraline and paroxetine are preferred SSRIs due to their relatively low infant exposure through breast milk, though paroxetine should be avoided during pregnancy due to its association with cardiac malformations. Benzodiazepines may be prescribed for acute anxiety but carry a risk of dependence with long-term use. Tricyclic antidepressants (TCAs) and monoamine oxidase inhibitors (MAOIs) are typically avoided due to their unfavorable side effect profiles.</li>
              <li><strong>Mindfulness-Based Interventions:</strong>Mindfulness practices, such as Mindfulness-Based Stress Reduction (MBSR) and Mindfulness-Based Cognitive Therapy (MBCT), are increasingly being recognized as effective treatments for anxiety. These therapies emphasize present-moment awareness and have shown promising results in treating perinatal anxiety. Both interventions consist of group sessions over eight weeks and include home practice and meditation techniques.</li>
              <li><strong>Complementary and Alternative Medicine(CAM):</strong>Many postpartum women are hesitant to take psychotropic medications and may opt for non-pharmacological options such as yoga, massage, and relaxation techniques. Progressive muscle relaxation and diaphragmatic breathing have been shown to reduce anxiety in pregnant women, and guided imagery has had positive effects on anxiety during the immediate postpartum period. These CAM approaches are generally safe and can be explored as supplemental treatments.</li>
              <li><strong>Aromatherapy:</strong> Essential oils, especially lavender and bitter orange, have been shown to improve mood and reduce anxiety when inhaled as aromatherapy. While some concerns exist regarding the safety of essential oils during pregnancy, specific oils are considered safe for postpartum use. Inhaled oils may impact the emotional centers of the brain, helping to alleviate anxiety.</li>
              <li><strong>Kangaroo therapy:</strong> Kangaroo Mother Care (KMC) involves holding a preterm or low-birth-weight baby skin-to-skin on the mothers chest. It has significant benefits for mothers, reducing anxiety, stress, and depression. KMC promotes emotional bonding, improves maternal well-being, and supports mental health by fostering relaxation through physical closeness and oxytocin release. </li>
            </ul>
            <p>Studies suggest that infant contact, even without breastfeeding, can reduce anxiety in mothers, though modern infant care often limits this physical contact.</p>
          </div>
          
        </div>
      </section>
      <section>
      <div className="div">
            <h2 className="heading2">CASE STUDIES</h2>
            <h3>High Income country</h3>
            <p><strong>A Cognitive—Behavioral Intervention for Postpartum Anxiety and Depression: Individual Phone vs. Group Format</strong></p>
            <p><strong>Study:</strong>The study aimed to evaluate the effectiveness of the translated WAWA workbook for postpartum women experiencing stress and overwhelm after childbirth. Participants were women over 18 who had given birth within the last 3–6 months and could read and write fluently in Hebrew. Exclusion criteria included any known diagnosed psychiatric conditions. A total of 59 women met the inclusion criteria, with 38 attending the initial informational meeting and 34 completing the intervention, which consisted of group meetings or individual telephone counseling over four weeks, led by an experienced clinical social worker.</p>
            <p><strong>Outcomes:</strong>This study evaluated the acceptability and effectiveness of a cognitive-behavioral and mindfulness intervention based on the WAWA workbook, aimed at alleviating mild to moderate anxiety and depression in postpartum women. The intervention was offered in either individual phone consultations or group sessions, allowing participants to choose their preferred format. Results indicated significant reductions in depression, anxiety, and stress symptoms for both formats, with individual phone consultations showing greater improvements in certain measures. The majority of participants felt the intervention met their needs and would recommend it to others, highlighting its adaptability for busy mothers. </p>
            <p><strong>Discussion:</strong> Evidence indicates that e-therapy is effective for postpartum women, highlighting the potential for telehealth in delivering mental health support. This type of intervention reduces the challenges posed by restrictions and traditional in-person therapy barriers, such as mobility issues, stigma, and childcare responsibilities.</p>
            <h3>Mid-income country</h3>
            <p><strong>A single-Arm pilot study of multicomponent psychoeducational interverntion for postpartum depression and anxiety in a rural community</strong></p>
            <p><strong>Study:</strong>The study was conducted in 28 villages in Ballabhgarh district, northern India, as part of the Comprehensive Rural Health Services Project. It aimed to assess postpartum depression (PPD) and postpartum anxiety (PPA) in women aged 18 to 40 years who had given birth within the postpartum period of four weeks to six months. Assuming a PPD prevalence of 15% and accounting for a 20% attrition rate, a sample size of 680 women was targeted. Women were screened for PPD and PPA using the Edinburgh Postnatal Depression Scale (EPDS) and the State and Trait Anxiety Inventory (STAI). Among those screened, 59 women tested positive for PPD, PPA, or both, with the Mini-International Neuropsychiatric Interview (MINI) confirming diagnoses in 43 women. Exclusion criteria included those with previous psychiatric disorders, significant medical illnesses, cognitive decline, or sensory impairments.</p>
            <p><strong>Outcomes:</strong>The present study demonstrated that symptoms of depression and anxiety significantly improved following the Mindfulness-Centered Psychotherapy Intervention (MCPI), which also led to notable reductions in parental stress, enhanced functionality, marital satisfaction, and social support. The findings indicate comprehensive psychological interventions benefit mothers beyond just alleviating PPD and PPA symptoms. Specifically, the study highlighted improvements in maternal functional ability, as well as significant decreases in parental stress through skill training. Although there was no significant change in postpartum bonding, mothers continued to care for their infants despite depressive symptoms. </p>
            <p><strong>Discussion:</strong>The culturally sensitive MCPI module showed high treatment compliance (85.63%) and is proposed as an effective intervention that can be integrated into primary care settings in low-resource environments, aligning with the World Health Organizations goals for task shifting and capacity building in mental health care.</p>
            <h3>Low-income country</h3>
            <p><strong>Study:</strong> The study was a descriptive, cross-sectional analysis conducted in Enugu City, Southeast Nigeria, involving 309 randomly selected nursing mothers who had delivered at or beyond 36 weeks of gestation. It aimed to assess postpartum anxiety and depression, excluding women with conditions affecting reliability. Assessments were carried out 6 to 14 weeks postpartum using self-administered questionnaires, including the Hospital Anxiety and Depression Scale (HADS) and the Dependent Personality Questionnaire (DPQ). The study was ethically approved, with informed consent obtained from participants. </p>
            <p><strong>Outcomes:</strong>The study aimed to determine the prevalence of dependent personality and its correlation with postpartum anxiety and depression among nursing mothers in Enugu, Nigeria. It found that 33.3% experienced moderate to severe depression and 30.1% had moderate to severe anxiety, with 22% experiencing both. No correlation was observed between dependent personality and postpartum depression, suggesting that moderate dependency may protect against depressive symptoms. However, there was a weak inverse relationship between dependent personality and postpartum anxiety, indicating that low levels of dependency might not significantly contribute to anxiety levels.</p>
            <p><strong>Discussion:</strong>The study found a low occurrence rate of dependent personality among nursing mothers in Enugu, despite a high prevalence of postpartum depression and anxiety. It concluded that dependent personality has minimal association with postpartum psychological distress in Igbo women. The multifactorial nature of postpartum challenges, including maternal roles and bodily changes, contributes to psychological distress. The findings emphasize the need for targeted strategies to identify at-risk mothers for early intervention, highlighting the importance of addressing postpartum mental health for the well-being of mothers, families, and child development.</p>
          </div>
      </section>
      <section>
        <h2 className='heading2'>SPECIALISTS</h2>
        <p>
            Psychiatrists, psychologists, Pediatrician(right person for screening).
        </p>
        <p>
            Since pediatricians have frequent contact with new mothers, they are in a good position to identify symptoms of postpartum depression and can refer mothers to appropriate mental health care if needed.
        </p>
      </section>
    </article>
  );
};

export default Anxiety;