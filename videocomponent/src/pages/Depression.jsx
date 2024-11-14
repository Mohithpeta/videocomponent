
import './Depression.css';
import Depression1 from './assets/Depression.png';
import Depression2 from './assets/Depression(1).png';
import SubtopicSidebar from './SubtopicSidebar';

const Depression = () => {
  return (
    <div className="main">
      <article className='urinary-incontinence-article'>
      <header className="article-header">
        <h1>POSTPARTUM DEPRESSION</h1>
        <p className="intro-text">
        Postpartum depression is a common but treatable mental health disorder that often arises after childbirth, making it one of the most frequent complications of childbearing. According to the American Psychiatric Association’s, it is classified as a major depressive episode with onset during pregnancy or within four weeks following delivery. However, depression that occurs later, even up to 12 months postpartum, can still be harmful and may require treatment, even if it does not meet the full criteria for a major depressive episode.
        </p>
      </header>
      <section id='symptoms'>
        <img src={Depression1} alt="Depression symptoms" style={{width:'85%'}} />
      </section>
      <section>
        <p><strong>The pooled prevalence of postpartum depression in India was found to be 22%.</strong></p>
        <p>
        The sharp drop in reproductive hormone levels following childbirth is believed to play a role in the onset of depression in women who are susceptible. However, the exact cause of postpartum depression remains unknown. The progression of postpartum depression can vary widely. Approximately 40% of women may experience a relapse during future pregnancies or at other times unrelated to pregnancy.
        </p>
        <p>
         <strong>Postpartum depression may resolve on its own within weeks of onset, but around 20% of women continue to experience symptoms beyond the first year, and 13% after two years. </strong>
        </p>
        <p>
        Postpartum depression leads to maternal distress, reduced functioning, and is linked to higher risks of marital conflict and poor infant–caregiver attachment. It can also negatively impact a childs emotional, social, and cognitive development and, in rare instances, may result in suicide or infanticide. Untreated postpartum depression can affect mother’s ability to parent. 
        </p>
        <p>
            Postpartum depression in a mother can affect the healthy development of her child which can cause:
        </p>
        <ul>
            <li>Delays in language development and problems learning.</li>
            <li>Problems with mother-child bonding</li>
            <li>Behavior problems</li>
            <li>More crying or agitation</li>
            <li>Shorter height and higher risk of obesity in pre-schoolers</li>
            <li>Problems dealing with stress and adjusting to school and other socail situations</li>
        </ul>
        <p>
        A systematic review documented 38 studies, showing varying PPD rates across different regions and settings in India found that urban areas had higher rates of PPD (24%) compared to rural areas (17%).
        </p>
      </section>
      <section id='risk-factors'>
        <img src={Depression2} alt="Depression risk factors" style={{width:'85%'}} />
      </section>
      <section id='screening'>
        <h2>SCREENING</h2>
        <p>
        Around 70% of new mothers experience mild depressive symptoms known as the “baby blues”, typically between 2 to 5 days after delivery. These symptoms include weepiness, irritability, and mood swings but do not impair functioning and generally resolve within two weeks. In some cases, the blues may progress to postpartum depression. Differentiating between postpartum blues and postpartum depression requires assessing mood and symptom severity at multiple time points.
        </p>
        <p>
          The best approach for detecting postpartum depression is still debated. Clinical inquiry about mood during postpartum visits helps with early identification. Several validated screening tools can be used, including the Edinburgh Postnatal Depression Scale (EPDS), Patient Health Questionnaire-9 (PHQ-9), and Postpartum Depression Screening Scale (PDSS).
        </p>
        <p>
        The following validated postpartum depression screening tools can be used for assessing postpartum patients:
        </p>
        <ul>
            <li>
                Edinburgh Postnatal Depression scale
            </li>
            <li>Patient health questionnaire</li>
            <li>Postpartum depression screening scale</li>
        </ul>
        <p>The tool should be scored based on the provided standards below and evaluated for positive or negative or negative results</p>
        <p><strong>EPDS:</strong>A 10-item tool available for free in English and Spanish. A score of 10 or more suggests depressive symptoms, while a score of 13 or more indicates a high likelihood of major depression. A score of one or more on question #10 (suicidal ideation) requires immediate further evaluation.</p>
        <p><strong>PHQ-9:</strong>A 9-item tool available for free in multiple languages. A score of 10 or more indicates a high risk of depression. A score of two or more on question #9 (suicidal thoughts) triggers automatic positive screening, requiring immediate evaluation.</p>
        <p><strong>PDSS:</strong>Available in long (35-item) and short (7-item) forms, purchasable from various vendors. Full version: A score of 60 or more suggests depressive symptoms, and 81 or more indicates a high likelihood of major depression. A score of six or more on the suicidal thoughts subscale requires urgent evaluation. Short version: A score of 14 or more indicates a high risk of major depression. A score of two or more on question #7 (suicidal thoughts) also necessitates immediate further evaluation.</p>
      </section>

      <section id='diagnosis'>
        <h2>DIAGNOSIS</h2>
        <p>
        For women who screen positive for postpartum depression, the diagnosis is based on the criteria for major depressive disorder outlined in the DSM-5. This requires the presence of five out of nine symptoms for at least two weeks, with either a depressed mood or a significantly reduced interest in activities being necessary for diagnosis. Symptoms related to suicide must not be the only ones present.
        </p>
        <p>
          Diagnosing postpartum depression can be challenging because many symptoms overlap with typical postpartum experiences. Clinicians can ask if the mother experiences sleep issues even when the baby is asleep to help differentiate between normal postpartum fatigue and depression-related insomnia.
        </p>
        <ul>
            <li><strong>DSM-5 Symptoms of Major depressive disorder</strong></li>
            <ol>
                <li>Depressed mood most of the time on most days, either by subjective report (e.g., feelings of sadness, hopelessness, or emptiness) or by observed behavior (e.g., tearfulness).</li>
                <li>Substantially decreased interest or ability to enjoy all or most activities (may be reported subjectively or observed).</li>
                <li>Psychomotor retardation or agitation</li>
                <li>Feelings of worthlessness or guilt</li>
                <li>Indecisiveness or difficulty concentrating</li>
                <li>Significant change in weight(gain or loss) or appetite(Increase or decrease).</li>
                <li>Insomnia or hypersomnia</li>
                <li>Decreased energy or excess fatigue</li>
                <li>Frequent thoughts of death (not just fear of death), suicide attempt, or suicidal thoughts(with or without a plan)</li>
            </ol>
            <h3>Challenges in Diagnosis</h3>
            <p>Diagnosing postpartum depression can be challenging because many symptoms overlap with typical postpartum experiences. For example, fatigue and sleep difficulties are common in new mothers. Clinicians can ask if the mother experiences sleep issues even when the baby is asleep to help differentiate between normal postpartum fatigue and depression-related insomnia.</p>
            <p>Women with postpartum depression may not express sadness as prominently as others with depression; instead, they often report guilt or worthlessness and a loss of enjoyment in activities. They might also experience aggressive thoughts toward the infant, which can lead to avoidance of the baby. It’s crucial for healthcare providers to approach these discussions in a nonjudgmental way, reassuring mothers that such thoughts can be common and do not reflect poorly on them.</p>
            <li>Severity Assessment</li>
            <p>The severity of postpartum depression is determined by the number of symptoms, their intensity, and the level of impairment they cause:</p>
            <ul>
                <li><strong>Mild Depression:</strong>Few symptoms causing manageable distress and limited impairment.</li>
                <li><strong>Moderate Depression:</strong>A middle ground between mild and severe.</li>
                <li><strong>Severe Depression:</strong>Many symptoms leading to significant distress and impairment.</li>
            </ul>
            <li>Considerations for History and Referral</li>
            <p>Providers should inquire about any history of bipolar disorder or manic symptoms, as women with such histories are at a higher risk for postpartum depression. Those with suspected manic symptoms or a history of psychotic disorders should be referred to mental health professionals for comprehensive evaluation and management.</p>
            <p>Though postpartum psychosis is rare, it can be the first sign of a severe psychiatric disorder. Any woman exhibiting psychotic symptoms should receive immediate psychiatric evaluation and possible hospitalization, as her condition can deteriorate rapidly.</p>
        </ul>
      </section>

      <section id='treatment'>
        <h2>TREATMENT</h2>
        <div className="type">
            <p>Treatment options for postpartum depression vary based on the severity of a woman’s symptoms and her ability to care for her baby. Women with mild to moderate symptoms can often be managed within a primary care setting. However, if initial treatments prove ineffective, or in cases of severe illness, particularly when psychosis is involved, a referral to psychiatric care becomes essential.</p>
          <h3>Psychotherapy and Supportive Care</h3>
          <p>
          Psychosocial and psychological interventions are essential, especially for women with mild to moderate symptoms of postpartum depression. Supportive care, such as home visits, telephone-based peer support, or interpersonal therapy, has been shown to significantly reduce the risk of postpartum depression compared to standard care. Psychosocial interventions, such as peer support and nondirective counseling, are often first-line treatments, especially in cases of mild symptoms.
          </p>
          <p>
          Cognitive Behavioral Therapy (CBT) and Interpersonal Therapy (IPT) are two primary psychotherapeutic options. These therapies are time-limited and typically span 12 to 16 weeks. Studies show both CBT and IPT lead to higher remission rates, with psychotherapy showing a pooled remission rate of 60.3% compared to 48.1% for standard care.
          </p>
        </div>
        <div className="type">
          <h3>Cognitive Behavioral Therapy</h3>
          <p>
          Cognitive Behavioral Therapy (CBT) is a talk therapy that helps individuals manage their problems by changing their thoughts and behaviors. It focuses on the present, helping individuals recognize negative thought patterns that contribute to emotional distress. Rooted in cognitive theory, CBT asserts that irrational thoughts lead to negative moods and behaviors. Techniques such as behavioral activation encourage engaging in enjoyable activities, while joint sessions with partners can improve communication and support.
          </p>
        </div>
        <div className="type">
          <h3>Interpersonal Therapy</h3>
          <p>
          Interpersonal Therapy (IPT) is a structured psychotherapy aimed at improving psychological well-being through enhanced interpersonal relationships. It focuses on the connection between one’s interactions and emotional health, addressing psychological issues arising in relationships. IPT is particularly effective for postpartum depression (PPD), emphasizing role transitions and conflict resolution. 
          </p>
        </div>
        <div className='type'>
            <h3>Drug Therapies</h3>
            <p>For moderate to severe postpartum depression, or when psychological treatments are insufficient, antidepressant medications are recommended. Selective serotonin reuptake inhibitors (SSRIs) are commonly used, with sertraline being a first-line choice due to its minimal passage into breast milk. Studies show that SSRIs are effective in reducing depression symptoms, with a response rate of 52.2%. Remission rates were also higher for women taking SSRIs (46.0% vs. 25.7%).</p>
            <p>Breastfeeding women taking SSRIs generally experience no significant adverse effects in their infants, and drugs like fluoxetine and citalopram are also considered safe despite passing into breast milk. However, medications like tricyclic antidepressants are generally avoided due to potential adverse effects like respiratory depression in infants.</p>
        </div>
      </section>

      <section id='case-studies'>
        <h2>CASE STUDIES</h2>
        <div className="type">
          <h3>High Income Country</h3>
          <p>
            <strong>A randomised controlled trial of ‘MUMentum postnatal’: Internet-delivered cognitive behavioural therapy for anxiety and depression in postpartum women</strong>
          </p>
          <p><strong>Study:</strong>Participants in the study were women recruited in Australia through social media advertisements, online forums, and flyers in maternity hospitals. Inclusion criteria required participants to be over 18, fluent in English, Australian residents, and within 12 months postpartum, with self-reported anxiety or depression symptoms above clinical thresholds. Exclusion criteria included current substance abuse, use of benzodiazepines, diagnoses of schizophrenia or bipolar disorder, and recent initiation of psychological therapy or medication for anxiety/depression. Those reporting severe depression or suicidality were excluded and referred to appropriate services. Participants were required to complete baseline questionnaires within two weeks, and post-treatment questionnaires were administered one week after the active treatment period and followed up four weeks later.</p>
          <p><strong>Outcomes:</strong>The study investigated the efficacy of the MUMentum Postnatal program, an unguided internet-based Cognitive Behavioral Therapy (iCBT) intervention, in alleviating postpartum anxiety and depressive symptoms among Australian women. The results showed substantial improvements in anxiety, depression, and psychological distress after treatment, with these gains maintained at follow-up. The program also resulted in notable enhancements in maternal bonding, parenting confidence, and quality of life. High participant adherence was observed, with 75% of women completing all three lessons, indicating the programs feasibility and acceptability. Most participants exhibited symptoms consistent with comorbid Generalized Anxiety Disorder (GAD) and Major Depressive Disorder (MDD), reinforcing the need for effective interventions targeting both anxiety and depression.</p>
          <p><strong>Discussion:</strong>Interventions  like this could enhance access to mental health support, particularly for women who may self-refer and prefer online assistance. Limitations, including the self-selected nature of the sample and lack of clinician-administered assessments, caution against broad generalizations of the findings. The short follow-up period also raises questions about the sustainability of symptom improvements over time. Overall, the study advocates for the incorporation of unguided iCBT into standard postpartum care practices to improve treatment coverage and accessibility. </p>
        </div>
        <div className="type">
          <h3>Mid-Income Country</h3>
          <p>
            <strong>Effectiveness of a group intervention led by lay health workers in reducing the incidence of postpartum depression in South India</strong>
          </p>
          <p><strong>Study:</strong>This study evaluated the effectiveness of a community-based intervention aimed at reducing the risk of postpartum depression (PPD) among women in South India. The active intervention consisted of three 45–60 minute sessions delivered over three days by trained lay community workers to groups of approximately 30 women. The sessions addressed common concerns related to childbirth and PPD, emphasizing problem-solving, interpersonal relationships, cognitive strategies, and emotional and behavioral coping skills. Participants also received information on delivery, breastfeeding, and help-seeking behavior related to PPD.</p>
          <p><strong>Outcomes</strong>The intervention resulted in a 30% reduction in postpartum depression prevalence among participants compared to the control groups, although the result did not reach statistical significance, suggesting the need for a larger sample size for more conclusive findings. Conducting the study in community settings provided valuable insights into the challenges faced by women in accessing mental health resources, emphasizing the importance of culturally relevant, low-intensity interventions. High participant satisfaction indicated that trust in providers is critical for successful implementation. While the results are promising, further research is necessary to evaluate long-term impacts and explore the effectiveness of integrating individual sessions into group interventions to enhance support for postpartum women. </p>
          <p><strong>Discussion:</strong>This study contributes to the growing body of evidence supporting community-based interventions for preventing postpartum depression. It underscores the need for culturally sensitive approaches and highlights the potential for group interventions to reduce mental health risks among pregnant women, ultimately aiming for improved maternal mental health outcomes.</p>
        </div>
        <div className="type">
          <h3>Low-Income Country</h3>
          <p>
          High- versus low-intensity interventions for perinatal depression delivered by non-specialist primary maternal care providers in Nigeria: cluster randomised controlled trial (the EXPONATE trial)
          </p>
          <p><strong>Study:</strong>This cluster randomized controlled trial in Oyo State, Nigeria, evaluated the effectiveness of high-intensity (HIT) and low-intensity (LIT) interventions for postpartum depression (PPD) among antenatal women. The study involved maternal care clinics, enrolling pregnant women aged 16 to 45 with gestational ages of 16 to 28 weeks who scored ≥12 on the Edinburgh Postnatal Depression Scale (EPDS). HIT consisted of a structured psychological intervention delivered by trained primary maternal care providers, while LIT offered enhanced usual care based on the WHOs Mental Health Gap Action Programme. The primary outcome was depression remission at 6 months postpartum, with additional maternal and infant outcomes assessed through validated tools.</p>
          <p><strong>Outcomes:</strong>The study evaluated high-intensity treatment (HIT) versus low-intensity treatment (LIT) for perinatal depression among Nigerian women, finding no significant difference in recovery rates between the two at six months. However, HIT showed lower mean disability and Edinburgh Postnatal Depression Scale (EPDS) scores compared to LIT at six and twelve months, particularly benefiting women with higher baseline EPDS scores. Both groups had similar infant health outcomes, but mothers in the HIT group were more likely to exclusively breastfeed. Cost analysis revealed that HIT was more expensive (Naira 7028) than LIT (Naira 3600) but both strategies reduced service costs over time; LIT demonstrated comparable health benefits at a lower cost, suggesting it is a cost-effective alternative.</p>
          <p><strong>Discussion:</strong>The study emphasizes the importance of culturally sensitive, context-aware psychological interventions, especially in low- and middle-income countries (LMICs). Limitations include the potential for bias and the non-real-world implementation of care, indicating the need for further research into the effectiveness of task-sharing approaches in detecting and treating perinatal depression.</p>
        </div>
      </section>

      <section id='specialists'>
        <h2>SPECIALISTS</h2>
        <p>
        Psychiatrists, psychologists, Pediatrician(right person for screening).
        Since pediatricians have frequent contact with new mothers, they are in a good position to identify symptoms of postpartum depression and can refer mothers to appropriate mental health care if needed.
        </p>
      </section>
      <SubtopicSidebar />
      </article>
    </div>
  );
};

export default Depression;