import '../pages/Dyspareuina.css';
import Dyspareunia from './assets/Dyspareunia.png';
import Dyspareunia1 from './assets/Dyspareunia(1).png';
import SubtopicSidebar from './SubtopicSidebar';

const DyspareuniaArticle = () => {
  return (
    <div className="main">
      <article className='urinary-incontinence-article'>
      <header className="article-header">
        <h1>DYSPAREUNIA</h1>
        <p className="intro-text">
          Dyspareunia, characterized by recurrent or persistent painful sexual intercourse, 
          is a prevalent condition that can significantly impact womens mental and physical health, 
          as well as their relationships.
        </p>
      </header>

      <section className="overview">
        <p>
          Dyspareunia is a complex condition that frequently involves both psychosocial and physical factors, 
          necessitating a thorough genitourinary examination and a clinicians understanding of the disorder&apos;s 
          multifactorial nature.
        </p>
        <p>It is distressing to note that even after 18 months about one‑fourth of women have dyspareunia. </p>
      </section>
      <section className="overview">
        <p><strong>How is Dyspareunia different from other host of conditions?</strong></p>
        <p>Pain can occur before, during, or after penetrative sex — either with a partner or with yourself. The same or similar pain may be experienced while inserting things like tampons or getting a gynecological exam.</p>
        <p>Many women begin sexual activity within 3 months of delivery. One study found that postpartum sexual problems were experienced by 83% of women within the 3-month postpartum period, while the prevalence of sexual problems was 18%–30% at 6 months postpartum and 30%–52.5% after 6 months.</p>
      </section>
      <section id='symptoms'>
      <img src={Dyspareunia} alt="dyspareunia symptoms" style={{width:'85%'}} />
      </section>
      <section className="types">
        <h2>TYPES OF DYSPAREUNIA</h2>
        <div className="type">
          <h3>Timing of Pain</h3>
          <ul>
            <li><strong>Primary Dyspareunia:</strong> Pain has always been present during intercourse, starting from the first attempt.</li>
            <li><strong>Secondary Dyspareunia:</strong> Pain develops after a period of pain-free intercourse.</li>
          </ul>
        </div>
        
        <div className="type">
          <h3>Situational Context</h3>
          <ul>
            <li><strong>Generalized Dyspareunia:</strong> Pain occurs during all sexual activities.</li>
            <li><strong>Situational Dyspareunia:</strong> Pain only occurs in specific situations.</li>
          </ul>
        </div>

        <div className="type">
          <h3>Location of Pain</h3>
          <ul>
            <li><strong>Superficial Dyspareunia:</strong> Pain is felt at the entrance of the vagina during penetration.</li>
            <li><strong>Deep Dyspareunia:</strong> Pain occurs deeper inside during intercourse.</li>
          </ul>
        </div>
      </section>
      <section className='type'>
        <p>Women with genital-pelvic pain dysfunction must have persistent or recurring challenges with at least one of the following:</p>
        <ul>
            <li>Pain with vaginal penetration</li>
            <li>Marked vulvovaginal or pelvic path during genital contact(i.e.genital sexual pain)</li>
            <li>Marked fear or anxiety about vulvovaginal or pelvic pain in anticipation of, during, or as a result of genital contact</li>
            <li>Marked hypertonicity or overactivity of pelvic floor muscles with or without genital cantact(i.e.vaginismus)</li>
        </ul>
        <p><strong>Studies show that many women experience pain during intercourse after childbirth, with a higher likelihood for those who underwent vacuum-assisted vaginal delivery or emergency caesarean sections. In contrast, women who had elective caesarean sections or spontaneous vaginal births without perineal trauma are less prone to experiencing this pain 18 months postpartum.</strong></p>
        <p>Other factors like pre-existing dyspareunia, maternal fatigue, and psychosocial issues such as spousal abuse can further increase the likelihood of postpartum dyspareunia. Overall, operative procedures during childbirth are linked to a greater risk of persistent pain, highlighting the long-term impact of perineal trauma on womens sexual health.</p>
      </section>

      <section className="risk-factors" id='risk-factors'>
        <h2>RISK FACTORS</h2>
        <div className="factors-grid">
          <div className="factor">
            <h3>Mode of Delivery</h3>
            <ul>
              <li><strong>Instrumental Vaginal Deliveries:</strong>These are associated with a heightened risk of dyspareunia, indicating that the use of tools like forceps or vacuum during childbirth may increase the likelihood of pain during intercourse postpartum.</li>
              <li><strong>Planned Vaginal vs. Cesarean Deliveries:</strong>Some studies suggest that planned vaginal deliveries do not necessarily increase the risk of dyspareunia compared to cesarean deliveries, but there are contradictory findings. For instance, one study found that vaginal deliveries were associated with dyspareunia, while others found no difference between the modes of delivery.</li>
            </ul>
          </div>
          <div className="factor">
            <h3>Physical Factors</h3>
            <ul>
              <li><strong>Breastfeeding:</strong> At 6 months postpartum, breastfeeding has been shown to increase the risk of dyspareunia, possibly due to hormonal changes that affect vaginal lubrication and tissue sensitivity.</li>
              <li><strong>History of Dyspareunia:</strong>Women with a history of dyspareunia are more likely to experience this condition postpartum, suggesting that previous episodes of painful intercourse can predispose women to recurring pain after childbirth.</li>
            </ul>
          </div>
          <div className="factor">
            <h3>Psychosocial Factors</h3>
            <ul>
              <li><strong>Intimate Partner Violence:</strong>Experiencing intimate partner violence within the first 12 months postpartum significantly increases the odds of dyspareunia.</li>
              <li><strong>Depressive Symptoms:</strong>Mental health challenges such as depression are associated with a higher likelihood of dyspareunia.</li>
              <li><strong>Fatigue:</strong>Persistent physical and emotional exhaustion postpartum has been linked to an increased risk of painful intercourse.</li>
            </ul>
          </div>
        </div>
        <div className='factor'>
            <ul>
                <li><strong>Pelvic Floor Issues</strong> Conditions like stress or urge incontinence, along with pelvic floor muscle dysfunction, have been identified as contributors to dyspareunia, highlighting the importance of pelvic floor health in postpartum recovery.</li>
                <li><strong>Recurrent Urogenital Infections:</strong>Frequent urinary tract or genital infections increase the risk of dyspareunia postpartum, potentially due to inflammation and tissue sensitivity resulting from repeated infections.</li>
                <li><strong>Ethnicity and Age:</strong>Being of Asian ethnicity and older age are factors associated with a greater risk of dyspareunia postpartum, suggesting that demographic characteristics may influence the likelihood of experiencing this condition.</li>
            </ul>
        </div>
      </section>
      <section>
      <img src={Dyspareunia1} alt='Dyspareunia risk factors' style={{width:'85%'}} />
      </section>
      <section id='screening'>
        <h3>SCREENING</h3>
        <div>       
            <h4>Initial Assessment</h4>
            <ul>
                <li><strong>Patient History:</strong>Begin by gathering detailed information from the patient about the onset, duration, and nature of pain experienced during intercourse. Inquire whether the pain has been present since the first episode of intercourse or developed later.</li>
                <li><strong>Pain Description:</strong>Ask the patient to describe the pain in terms of its quality (sharp, dull, burning, cutting, or throbbing) and its pattern (constant, intermittent, increasing, or decreasing).</li>
                <li><strong>Pain Location and Triggers:</strong>Determine if the pain occurs during superficial or deep penetration, and if specific sexual positions exacerbate or alleviate the pain.</li>

            </ul>
        </div>
        <div>
            <h3>Sexual History</h3>
            <ul>
                <li><strong>Arousal and Lubrication:</strong>Assess if the patient looks forward to sex, and whether they experience adequate arousal and lubrication during foreplay.</li>
                <li><strong>Partner History:</strong>Inquire about changes in sexual partners and whether the pain has been experienced with previous partners.</li>
            </ul>
        </div>
        <div>
            <h3>Emotional Impact</h3>
            <ul>
                <li><strong>Psychological Effects:</strong>Discuss any emotional distress related to the pain, such as embarrassment, guilt, loss of self-esteem, frustration, depression, or anxiety.</li>
                <li><strong>Relationship Impact</strong>Explore how the pain affects the patient’s relationship with their partner and if there is a history of domestic violence.</li>
            </ul>
        </div>
        <div>
            <h3>Quatification of Problem:</h3>
            <ul>
                <li><strong>Validated Tools:</strong>Utilize tools like the Female Sexual Function Index (FSFI), Sexual Function Questionnaire (SFQ), Female Sexual Distress Scale (FSDS), and Changes in Sexual Functioning Questionnaire (CSFQ) to assess sexual dysfunction, including libido, arousal, orgasm, pain, and relationship factors.</li>
            </ul>
        </div>
      </section>
      <section className="treatmentr" id='diagnosis'>
        <h2>DIAGNOSIS</h2>
        <ul>
            <li><strong>General Examination:</strong>The examination begins with a comprehensive gynecological history, including details on menstrual irregularities, chronic pelvic pain, dysmenorrhea, contraception history, and previous surgeries. Any drug use, auto-immune conditions, or relevant medical histories are recorded.</li>
            <li><strong>Abdominal Examination:</strong> Inspection for scars, previous surgeries, and palpation for significant masses are performed, with particular attention given to any painful regions.</li>
            <li><strong>Vulva/Vaginal Examination:</strong>
            <ul>
                <li><strong>Inspection:</strong>A detailed inspection of the vulva is performed to assess for normal anatomy, atrophy, dermatoses, infections, trauma, and abnormalities such as episiotomies or hymenal ring issues.</li>
                <li><strong>Pressure-Point Testing:</strong> Using a cotton-tipped applicator, areas of tenderness are identified to differentiate between generalized vulvodynia and vestibulodynia.</li>
                <li><strong>Palpation:</strong> Gentle palpation of the introitus, pelvic muscles, and relevant areas is conducted to detect issues such as suture knots, granulomata, or pelvic floor dysfunction.</li>
            </ul>
            </li>
            <li><strong>Superficial Dyspareunia:</strong>
            <ul>
                <li><strong>Infections and Inflammation:</strong>Conditions like vulvovaginitis (e.g., candidiasis, herpes), vestibulodynia, or Bartholin’s cyst are assessed.</li>
                <li><strong>Dermatological Issues:</strong>Vulval dystrophies such as lichen sclerosis and psoriasis are checked.</li>
                <li><strong>Post-Surgical/Trauma:</strong>Scars from childbirth or pelvic floor repairs are considered.</li>
            </ul>
            </li>
            <li><strong>Deep Dyspareunia:</strong>
            <ul>
                <li><strong>Infection and Inflammation:</strong>Conditions such as pelvic inflammatory disease, chronic cervicitis, or endometriosis are evaluated.</li>
                <li><strong>Pelvic Pathology:</strong>Abnormolities like fibroids, ovarian cysts, or pelvic congestion are identified.</li>
                <li><strong>Post-Surgical/Trauma:</strong>Complications related to childbirth, hysterectomy, or vaginal mesh are reviewed.</li>
            </ul>
            </li>
            <li><strong>Further Investigations</strong>
              <ul>
                <li><strong>Vulval and Vaginal Swabs:</strong>Microbiological cultures are performed to rule out infections.</li>
                <li><strong>Pelvic Ultrasound:</strong> This is used to detect pelvic abnormalities, although it may not always be necessary unless specific conditions are suspected.</li>
                <li><strong>Laparoscopy:</strong>This procedure is considered for diagnosing endometriosis or other organic pelvic pathology, with risks and potential outcomes communicated to the patient.</li>
                <li><strong>Hormone Testing:</strong>Serum levels of estradiol, testosterone, SHBG, and prolactin are evaluated if hormonal abnormalities are suspected.</li>
                <li><strong>Vulvoscopy and Biopsy:</strong>These may be employed to detect subtle abnormalities or neoplastic conditions, with biopsy indicated if inflammatory causes are suspected.</li>
                <li><strong>Additional Tests:</strong>For chronic urethral or bladder pain, cystoscopy and bladder biopsies may be warranted. An electromyogram can assess pelvic floor muscle tone and strength when pelvic floor dysfunction is evident.</li>
              </ul>
            </li>
        </ul>
      </section>
      <section className="treatment" id='treatment'>
        <h2>TREATMENT</h2>
        <div className="treatment-options">
          <div className="option">
            <h3>Hormonal Therapy</h3>
            <ul>
                <li><strong>Vaginal Estrogen Application:</strong>Beneficial for older patients experiencing vaginal atrophy due to menopause or surgical reasons. Small doses of vaginal estrogen in the form of estradiol tablets or cream can be effective, with minimal systemic absorption.</li>
                <li><strong>Caution:</strong>Systemic estrogen supplementation has declined due to concerns about cardiovascular and breast cancer risks.</li>
            </ul>
          </div>
          <div className='option'>
            <h3>Lubrication and Comfort Measures:</h3>
            <ul>
                <li><strong>Supplemental Lubrication:</strong>Comfortable intercourse often requires lubrication, with water-based lubricants providing temporary relief. Alternatives like commercial preparations or ordinary vegetable oil are recommended for longer-lasting effects.</li>
                <li><strong>Lidocaine Jelly(2% - 5%):</strong>Can be prescribed to help alleviate discomfort, particularly in cases of vulvodynia.</li>
            </ul>
          </div>
          <div className="option">
            <h3>Physical Therapy</h3>
            <ul>
                <li><strong>Pelvic Floor Physiotherapy:</strong>Widely used and successful in treating dyspareunia, both in primary muscular disorders and in cases where muscle issues are secondary to other gynecological diseases.</li>
                <li><strong>Pelvic Floor Electrial Stimulation:</strong>Has been employed with some success, though it may aggravate pain in certain cases.</li>
                <li><strong>Pelvic Floor Exercises and Dilators:</strong>Especially useful in treating vaginismus by helping reduce symptoms through gradual muscle relaxation.</li>

            </ul>
          </div>
          <div className="option">
            <h3>Neuropathic and Pain Management:</h3>
             <ul>
                <li><strong>Neuropathic Pain Medications:</strong>Tricyclic antidepressants and opioid analgesics have been used with varying success, particularly in managing vulvodynia.</li>
                <li><strong>Botulinum Toxin Injections:</strong>Preliminary studies indicate that injection into the levator muscles may be beneficial, though simultaneous physical therapy is recommended for optimal results.</li>

             </ul>
          </div>
          <div className='option'>
            <h3>Sexual Education:</h3>
            <ul>
                <li><strong>Education on Lubrication and Arousal:</strong>Couples are educated on the importance of adequate lubrication and arousal to reduce pain during intercourse.</li>
                <li><strong>Anatomy and Physiology Education:</strong>Patients with vaginismus can be educated about their condition, including visualization of vaginal musculature contractions during physical examinations.</li>
            </ul>
          </div>
          <div className='option'>
            <h3>Dilators</h3>
            <p>Vaginal dilators, made from medical-grade silicone or plastic, are tube-shaped devices used to relieve pelvic pain, relax vaginal tightness, and restore sexual pleasure by gradually training the body and mind for pain-free penetration.</p>
            <p>These dilators come in ascending sizes, ranging from that of a small finger to an erect penis, allowing the vaginal muscles to be gently stretched over time. Typically, patients with dyspareunia begin with the smallest size, inserting the dilator and relaxing for 10-15 minutes a few times a week until it becomes comfortable. Progression through larger sizes continues until comfort is achieved with a dilator the size of an average penis.
            </p>
          </div>
          <div className='option' >
            <h3>Psychotherapy and Counselling:</h3>
            <ul>
                <li><strong>Counselling:</strong>Tactful discussions of sexual difficulties can transition patients to mental health professionals, addressing psychosexual circumstances surrounding dyspareunia.</li>
                <li><strong>Sex Therapy and Intercourse Therapy:</strong>Treatment success rates for vaginismus have varied, with methods like hypnotherapy, biofeedback, and abreaction interviews being employed, albeit with mixed results.</li>
            </ul>
          </div>
          <div className='option'>
            <h3>Sexual Positions:</h3>
            <ul>
                <li><strong>Different Sexual Positions:</strong>Experimenting with different sexual positions, like the cross-wise position, can alleviate discomfort by allowing easier adjustment of vaginal penetration and providing external genital stimulation.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="case-studies" id='case-studies'>
        <h2>CASE STUDIES</h2>
        <div className="study">
          <h3>High Income Countries</h3>
          <p><strong>Postpartum dyspareunia and sexual functioning: a  prospective cohort study</strong></p>
          <p><strong>Study:</strong> The intervention began with the recruitment of pregnant women during their third trimester, between 26 and 36 weeks of gestation. At their prenatal consultation, the research procedure was explained to them, and an invitation package was provided. This package contained an information sheet detailing the study, an informed consent form for participation, and baseline questionnaires. These questionnaires included one on general patient characteristics (age, weight, height, ethnicity, frequency of intercourse, use of contraception, parity, medical and surgical history), a non-validated self-assessment questionnaire on dyspareunia, the validated Female Sexual Function Index (FSFI), and the validated Short Form-36 (SF-36) health survey for measuring quality of life. Participants were required to complete and return these materials before delivery.</p>
          <p>Six weeks postpartum, participants were given follow-up questionnaires to assess any changes, including sexual function and quality of life. At six months postpartum, follow-up questionnaires were sent by regular post, and participants were encouraged to return them using prepaid envelopes provided by the researchers. Data on delivery and breastfeeding practices were also collected from the patients medical records and follow-up questionnaires.</p>
          <p><strong>Outcome:</strong>At six weeks postpartum, <strong>74.2% of the women had resumed sexual activity, with 51% experiencing dyspareunia (painful intercourse). By six months, 92.2% resumed sexual activity, and dyspareunia decreased to 40.7%.</strong> Superficial dyspareunia remained the most common type, affecting 80% at six weeks and 75% at six months postpartum. Significant differences in FSFI domains such as lubrication, arousal, and pain were found between women with and without dyspareunia. Women with dyspareunia at six weeks postpartum had an increased risk of experiencing it at six months postpartum. Women who were primiparous, breastfeeding and had an instrumental delivery reported dyspareunia. Women who had undergone a caesarean section reported significantly lower energy/fatigue scores at six months postpartum compared to those who had vaginal deliveries. Other QOL domains did not show significant differences based on delivery mode, but women who had caesarean sections reported worse scores in physical functioning, mental health, and general health, albeit not significantly.</p>
          <p><strong>Discussion:</strong> Most women typically resume sexual activity within six weeks after childbirth. This study highlighted that primiparous women, regardless of when they restart intercourse, have limited knowledge about the impact of instrumental delivery, the importance of lubrication for pain-free intercourse, and how breastfeeding might influence lubrication production. During the first postpartum week, women are still recovering from pregnancy and delivery, with sexual issues commonly reported. Although sexual function improves between six weeks and six months, the findings suggest that the presence and severity of sexual dysfunction at six weeks postpartum can have lasting effects on an individuals sexual life.</p>
        </div>
        <div className="study">
          <h3>Mid-Income Countries</h3>
          <p><strong>Risk of non‑resumption of vaginal sex and dyspareunia among cesarean‑delivered women</strong></p>
          <p><strong>Study:</strong> This study focused on women who delivered by cesarean section in selected hospitals across Pune District between 2017 and 2018. All women residing in the Pune district and meeting the language requirements (English, Marathi, or Hindi) were eligible, while those with psychiatric conditions were excluded. The comparison group consisted of age and parity-matched women who had vaginal deliveries in the same hospitals during the enrollment period, using identical inclusion and exclusion criteria. The study primarily analyzed the resumption of vaginal sex postpartum and the occurrence of dyspareunia, utilizing a sample size of 3,112 women, with 1,556 women in each group. Data were gathered using pre-tested interview schedules and analyzed using the Chi-square test in SPSS Version 25.0.</p>
          <p><strong>Outcome:</strong>The results indicated that by 6 weeks postpartum, 44.95% of women had resumed vaginal sex, with a higher proportion of early resumption observed among rural women (44.77%) compared to urban women (38.91%). No significant association was found between sociodemographic factors and early resumption, except for the rural-urban divide. At 6 months, the proportion of women who had not resumed vaginal sex was minimal (3.11%). The risk of non-resumption was higher among cesarean-delivered women at 6 weeks but not at 6 months. Dyspareunia was more prevalent among vaginally delivered women, with a 50% rate at 6 weeks. The risk ratio of dyspareunia was significantly lower in cesarean-delivered women compared to vaginally-delivered women.</p>
          <p><strong>Discussion:</strong>The study highlighted that postpartum sexual health is an important but often overlooked aspect of maternal care. While most women resumed sexual activity by 6 months postpartum, a considerable number experienced delays due to various factors, particularly the mode of delivery. Rural women were more likely to resume sex early, which may be linked to cultural or social factors. Dyspareunia was found to be a significant issue, especially among vaginally delivered women, emphasizing the need for healthcare providers to address postpartum sexual health concerns during routine follow-ups. This study calls for a proactive approach by family physicians to discuss sexual health issues with postpartum women, particularly in settings with fewer postpartum visits.</p>

        </div>
        <div className="study">
          <h3>Low-Income Countries</h3>
          <p><strong>A scoping review on women’s sexual health in the postpartum period: opportunities for research and practice within low-and middle-income countries</strong></p>
          <p><strong>Study:</strong> A scoping review was conducted to summarize and identify research from low and middle-income countries (LMICs) on women’s sexual health during the postpartum period. tudies were included if they were peer-reviewed, published in English between 2001 and 2021, and focused on sexual health within the postpartum period, defined as one year after delivery. The final review emphasized sexual function (e.g., pleasure, arousal, intimacy) and sexual dysfunction (e.g., dyspareunia, sexual violence), excluding studies related to contraception or family planning.</p>
          <p><strong>Outcomes:</strong>The findings revealed a significant gap in sexual health education for postpartum women in LMICs, where <strong>many felt embarrassed to seek help and perceived providers as inadequately prepared to handle sexual health issues.</strong> Cultural pressures often influenced womens decisions about resuming sexual activity, highlighting the need for better integration of sexual health education into postnatal care services. The discussion underscores the importance of including sexual health education in postnatal care to address both positive and negative sexual health outcomes. Normalizing sexual health concerns during the postpartum period can help reduce stigma and encourage women to seek appropriate care. Additionally, improving the quality of maternal health services should involve including sexual health counseling and focusing on postnatal care quality, not just antenatal services.</p>
          <p><strong>Discussion:</strong>The scoping review reveals a significant <strong> lack of sexual health education for postpartum women in LMICs</strong>, where embarrassment and inadequate provider support hinder help-seeking. </p>
        </div>
      </section>
      <section className='case studies' id='specialists'>
        <h2>SPECIALISTS</h2>
        <p>OB/GYN, Sexual Health Specialists, Pelvic Floor Physical Therapists, Urologists, Psychologists.</p>
      </section>
      <SubtopicSidebar />
      </article>
    </div>
  );
};

export default DyspareuniaArticle;