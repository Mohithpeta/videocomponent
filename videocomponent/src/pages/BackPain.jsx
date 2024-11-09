import BackPain1 from './assets/Back pain.png';
import './BackPain.css';
import BackPain2 from './assets/Back pain(1).png';

const BackPain = () => {
  return (
    <div className="back-pain">
      <header className="article-header">
        <h1>BACK PAIN</h1>
        <p className="intro-text">
        Postpartum back pain is discomfort experienced after childbirth, often due to physical strain during pregnancy and changes in posture and musculoskeletal support.
        </p>
      </header>

      <section>
        <div className="type">
          
          <p>
           <h3>Pregnancy-related Low Back Pain(PLBP):</h3>This is a dull pain, more noticeable during forward bending, accompanied by restricted spinal movement. Palpating the erector spinae muscles intensifies the pain, similar to non-pregnancy-related low back pain.
          </p>
          <p>
            <h3>Pelvic Girdle Pain(PGP):</h3>Pain is localized between the posterior iliac crest and the gluteal fold, mainly around the sacroiliac joints. It may radiate to the posterior thigh and can occur with or without pain in the symphysis pubis.
          </p>
        </div>
        <p><strong>PLBP and PGP usually start around the 18th week of pregnancy, and usually reach its peak around week 214th and 36th of pregnancy.</strong></p>
      </section>
      <section>
        <img src={BackPain1} alt="BackPain symptoms" style={{width:'85%'}}/>
      </section>

      <section>
        
        <div className="type">
          <p>Although some research suggests that PLBP/PGP could be considered a normal part of pregnancy due to biomechanical changes, the high prevalence and associated functional limitations challenge this view. Many women with PLBP/PGP face significant difficulties in daily activities, such as sitting, walking, lifting, and even engaging in sexual activities. Some may require crutches or wheelchairs due to severe pain. Women with a history of LBP before pregnancy were more likely to experience recurrent or continuous pain postpartum. </p>
          <p>The prevalence of LBP in postpartum women increases in the year after delivery, with estimates from 28% after 3 months to over 50% after 5 months and 67% after 12 months.</p>
        </div>
      </section>

      <section>
        <h2>RISK FACTORS</h2>
        <ul>
          <li>A history of LBP, including PGP from a previous pregnancy, and a higher BMI before or after pregnancy increase the risk of developing PGPP (PLBP postpartum as PGPP).</li>
          <li>Depression and emotional distress during pregnancy are major risk factors indirectly affecting women with PGPP and increased disability postpartum.</li>
          <li>Heavy workloads and uncomfortable work conditions during pregnancy significantly raise the risk of PGPP, highlighting the need for workplace adjustments.</li>
        </ul>
      </section>
      <section>
        <img src={BackPain2} alt="Backpain risk factors" style={{width:'85%'}} />
      </section>
      <section>
        <h2>SCREENING</h2>
        <p>
        Early screening for significant risk factors should be conducted, and if present, evidence-based care should be provided. Guidelines for company doctors must be followed, with effective communication being essential. While a history of LBP or PGPP may not be modifiable, early information on risks, self-management, and adjustments at home and work are effective. 
        </p>
        <p>
          The postpartum screening procedure by physical therapists (PTs) focuses on four key areas: mood disorders, muscle impairments, nerve injury, and fracture risks.
        </p>
        <ul>
            <li><strong>Mood Disorders:</strong>Strong evidence shows mood disorders like postpartum depression are common and are associated with backpain, beginning up to 4 weeks postpartum. PTs use depression screenings and assess suicidal ideation.</li>
            <li><strong>Muscle Impairments:</strong>Moderate evidence suggests muscle issues in the pelvic floor, abdomen, hips, and back are common postpartum. PTs check for urinary/fecal incontinence and refers to pelvic health specialists when necessary.</li>
            <li><strong>Nerve Injury:</strong> Weak evidence links childbirth to pudendal nerve injury, causing sensory issues or sexual dysfunction. PTs assess neurologic symptoms and refers for further evaluation if needed.</li>
            <li><strong>Fracture Risks:</strong>Weak evidence shows low bone density may cause fractures in postpartum women, especially if breastfeeding or using heparin. PTs assess activity-related pain and refers for imaging if severe symptoms are present.</li>
        </ul>
      </section>

      <section>
        <h2>DIAGNOSIS</h2>
        <p>
        Diagnosing postpartum pelvic girdle pain (PP-PGP) involves various theoretical models to accurately assess and classify the condition. Each model provides a different perspective on understanding and managing the pain. Here’s how each model contributes to the diagnosis:
        </p>
        <ul>
            <li><strong>Kinematic and Structural Analysis:</strong>Understanding pelvic kinematics is essential for diagnosing PP-PGP. This involves evaluating the shape and function of the sacrum, ilium, and pubic symphysis, as well as the surrounding connective tissues and muscles. Provocative testing helps identify which joints are involved and their specific roles in joint stability during movement. Accurate kinematic assessment informs the identification of pain sources and functional impairments.</li>
            <li><strong>Treatment-Based:</strong>The treatment-based classification model focuses on alignment and the need for manipulative techniques. Although this model emphasizes biomechanical alignment, evidence suggests limited reliability in identifying alignment issues in nonpregnant populations. Therefore, this approach should be combined with other diagnostic methods to determine effective treatment strategies.</li>
            <li><strong>Hybrid Diagnostic Model:</strong>A hybrid diagnostic model integrates aspects from multiple classification models, including biomechanical factors, alignment, and movement testing. This model provides a comprehensive approach to diagnosing PP-PGP by evaluating load transfer impairments, movement patterns, and muscle performance. It helps in developing a personalized care plan that addresses specific impairments and improves pelvic girdle stability.</li>
            <li><strong>Movement and Functional Testing:</strong>Movement testing assesses trunk and hip movements to identify specific patterns of dysfunction and coexisting impairments. This testing is crucial for understanding how movement affects pelvic stability and for developing targeted interventions. Evaluation of muscle performance during various activities helps in diagnosing the extent of functional limitations and guiding appropriate treatment strategies.</li>
        </ul>
      </section>

      <section>
        <h2>TREATMENT</h2>
        <ul>
            <li><strong>Osteopathic Manipulative Treatment(OMT):</strong>Osteopathic Manipulative Treatment (OMT) is a therapeutic approach that focuses on improving the function of the bodys tissues through various manual techniques. It is based on the idea that the musculoskeletal system plays a critical role in overall health. Manual therapy, particularly high-velocity thrust techniques (HVTT), offers effective short-term relief for postpartum back pain. HVTT is especially beneficial for severe cases, showing significant improvements in disability and pain scores when combined with exercises. However, its long-term benefits are less pronounced compared to stabilization exercises. rve HVTT is for cases where exercise and functional activity training fail to produce results. Pelvic belts may complement HVTT, enhancing the overall therapeutic effect.
            </li>
            <li><strong>Exercise Interventions:</strong>Postpartum exercise interventions focus on strengthening core and pelvic floor muscles to reduce pain and disability. Stabilization exercises targeting transversus abdominis and pelvic floor muscles are particularly effective for improving muscle function. These exercises are typically combined with other therapies, starting 6-12 weeks postpartum. Long-term outcomes consistently favor exercise over manual therapy. Incorporating pelvic belts during exercise enhances stability and function by reducing joint laxity.
            </li>
            <li><strong>Pelvic Belts:</strong>Pelvic belts are an adjunct to postpartum exercise, providing support by stabilizing the sacroiliac joint (SIJ). When worn high, they offer superior reduction in joint laxity. Pelvic belts are particularly effective for individuals with significant pain, improving pain management during activities. However, their role in cases with milder symptoms remains unclear, warranting further research. Their integration into rehabilitation protocols supports better functional outcomes.</li>
            <li><strong>Chiropractic Adjustment:</strong>A chiropractic adjustment is a therapeutic treatment where a licensed chiropractor uses their hands or special instruments to manipulate joints in body. This treatment is also called spinal manipulation or joint manipulation. A chiropractic adjustment can help reduce pain, correct your body’s alignment and how your body functions physically. 
            </li>
        </ul>
      </section>

      <section>
        <h2>CASE STUDIES</h2>
        <div className="type">
          <h3>High-income country</h3>
          <p>
            <strong>Osteopathic Manipulative Therapy in women with Postpartum Low Back Pain and Disability: A Pragmatic Randomized Controlled Trial</strong>
          </p>
          <p><strong>Study:</strong>This randomized controlled trial aimed to evaluate the effectiveness of osteopathic manipulative treatment (OMTh) in reducing postpartum low back pain (LBP), pelvic girdle pain (PGP), and functional disability. The 8-week study was conducted in Germany. Two experienced osteopaths, each with 5 years of osteopathic training and certified as Heilpraktikers (medical professionals in Germany approved to treat patients without physician supervision), carried out the treatments in their private practices. Informed consent was obtained from all participants prior to enrollment in the study.</p>
          <p><strong>Outcome:</strong>The study included 80 women, with 40 in the osteopathic manipulative therapy (OMTh) group and 40 in the control group. Over the 8-week study period, the OMTh group showed a significant reduction in pain intensity, with an average decrease of 73%, compared to only a 7% improvement in the control group. Pain intensity in the OMTh group dropped from 7.3 to 2.0 on a 10-point visual analog scale (VAS). The Oswestry Disability Index (ODI) score also showed a significant improvement in the OMTh group, with a 75% decrease in disability, whereas the control group showed only a slight reduction. Three months after the end of OMTh, pain intensity and disability scores continued to improve. </p>
          <p><strong>Discussion:</strong>Results indicate that OMTh led to significant improvements in both pain and disability, suggesting it may be an effective intervention for women experiencing postpartum-related pain. The study highlighted that postpartum PGP remains poorly understood and could benefit from more targeted therapies and evaluation methods.</p>
        </div>
        <div className="type">
          <h3>Mid-income country</h3>
          <p>
            Does regular exercise during pregnancy influence lumbopelvic pain? A randomized controlled trial
          </p>
          <p>
            <strong>Study:</strong>This randomized controlled trial compared a 12-week exercise program to standard antenatal care in pregnant women. Primary outcomes were gestational diabetes and glucose metabolism, with low back and pelvic pain (LPP) as a secondary focus. Participants from two Norwegian hospitals were recruited between 2007-2009. The exercise group followed a structured program of aerobic, strength, and balance exercises, while the control group received standard care. Both groups were provided with general advice on pelvic floor exercises, diet, and pregnancy-related LPP. The study aimed to evaluate the effects of regular exercise on pregnancy health outcomes.
          </p>
          <p>
            <strong>Outcomes:</strong>The studys primary outcome revealed no significant difference in the prevalence of lumbopelvic pain (LPP) between the intervention and control groups, with rates of 74% and 75%, respectively. However, the proportion of women on sick leave due to LPP was notably lower in the intervention group (22%) compared to the control group (31%). Secondary outcomes showed no significant differences in disability, as measured by the Disability Rating Index (DRI), or in pain intensity and fear-avoidance beliefs between the two groups.
          </p>
          <p>
            <strong>Discussion:</strong>The findings indicate that while a 12-week exercise program during pregnancy did not reduce the overall prevalence of LPP, it effectively reduced sick leave due to LPP. This suggests that while exercise may not prevent LPP, it can help manage the conditions impact. Women who adhered to the exercise protocol reported lower sick leave rates and less disability compared to those in the control group.
          </p>
        </div>
        <div className="type">
          <h3>Low-income country</h3>
          <p>
          Persistence of low back/pelvic girdle pains in women after pregnancy: An experience from Aminu Kano Teaching Hospital, Nigeria
          </p>
          <p>
            <strong>Study:</strong>The study was a cross-sectional survey carried out in the Department of Obstetrics and Gynecology of Aminu Kano Teaching Hospital from January 1 to June 30, 2019. Ethics approval was obtained from the Aminu Kano Teaching Hospital Ethics Committee. Participation in the study was voluntary. Information on socio-demographic characteristics, persistence and severity of low back pains/pelvic girdle pains after pregnancy, and associated risk factors was collected and documented using a pre-tested questionnaire with both closed and open-ended questions by trained research assistants. In this survey, chronic low back pain was defined as pain that persists for 12 weeks or longer, even after an initial injury or underlying cause of acute low back pain has been treated.
          </p>
          <p>
            <strong>Outcomes:</strong>The study analyzed data from patients with persistent low back/pelvic girdle pain after pregnancy. Most patients reported onset of back pain during the second and third trimesters, consistent with existing literature that attributes this to weight gain and hormonal changes affecting back and pelvic ligaments. The study found no significant evidence linking cesarean sections to increased risk of postpartum back pain. Previous trauma and vigorous exercise during pregnancy were noted as significant factors leading to pain. Notably, 47.1% of patients described their pain as radiating, and 92.2% reported numbness or weakness. This prevalence was higher than reported in other studies due to the focus on persistent pain. Approximately 51% of patients experienced interference with daily activities, with some requiring hospitalization. A significant proportion (39.2%) attributed their pain to activities, which was slightly lower than among non-pregnant patients in Nigeria. 
          </p>
          <p>
            <strong>Discussion:</strong> The findings indicate that persistent low back/pelvic girdle pain after pregnancy is a significant issue, with the studys results largely consistent with existing literature. The higher mean BMI in the study group might reflect cultural factors or the high rate of multiparity in the region. The typical onset of pain in the later stages of pregnancy aligns with the known impact of weight gain and hormonal changes on back and pelvic ligaments. 
          </p>
        </div>
      </section>
      <section>
        <p>Physiotherapists, Orthopedic Surgeons, Osteopathic Physicians, Chiropractors.</p>
      </section>
    </div>
  );
};

export default BackPain;