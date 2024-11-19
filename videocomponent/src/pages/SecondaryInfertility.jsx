import SecondaryInfertility1 from './assets/Secondary Infertility.png';
import './SecondaryInfertility.css';
import SubtopicSidebar from './SubtopicSidebar';
import SecondaryInfertility8 from './assets/pics/SECONDARY INFERTILITY.png';
import SecondaryInfertility2 from './assets/pics/SEC INFERTILITY(1).png';
import SecondaryInfertility3 from './assets/pics/SEC INFERTILITY(2).png';
import SecondaryInfertility4 from './assets/pics/SEC INFERTILITY(3).png';
import SecondaryInfertility5 from './assets/pics/SEC INFERTILITY(4).png';
import SecondaryInfertility6 from './assets/pics/SEC INFERTILITY(5).png';
import SecondaryInfertility7 from './assets/pics/SEC INFERTILITY(6).png';

const SecondaryInfertility = () => {
  return (
    <div className="main">
      <article className='urinary-incontinence-article'>
      <h1>SECONDARY INFERTILITY</h1>
      <section className="infertility-section">
        <p><strong>Secondary infertility refers to couples who are unable to conceive after a year of unprotected intercourse following a previous pregnancy. </strong>It affects more couples than primary infertility. Globally, 10-15% of couples are infertile, impacting over 80 million people. The emotional, physical, and financial toll of infertility is substantial, especially for women, who often face social stigmatization and displacement. Infertility is attributed equally to male and female factors in about 30% of cases, with another 25-30% involving both partners. In 10-15% of cases, the cause is unexplained.</p>
        <p>Secondary infertility can be categorized into two primary types:</p>
        <ul>
          <li><strong>Temporary Secondary Infertility:</strong> In this type, couples may face difficulty conceiving for a limited period, often due to factors like stress, lifestyle changes, or temporary health conditions. Once these issues are addressed, fertility may be restored.</li>
          <li><strong>Permanent Secondary Infertility:</strong> This type involves more complex and long-lasting issues that hinder conception, such as advanced age, severe medical conditions, or irreversible surgical procedures.</li>
        </ul>
      </section>
      <section>
      <img src={SecondaryInfertility1} alt='symptoms' style={{width:'85%'}} className='image'/>
      </section>

      <section className="infertility-section" id='symptoms'>
        <h2>SIGNS AND SYMPTOMS</h2>
        <p><strong>The primary indicator of secondary infertility is the inability to conceive after previously having one or more biological children.</strong></p>
        <p>Healthcare providers may consider it secondary infertility if someone under 35 has been trying to conceive for 12 months through regular, unprotected intercourse. For individuals over 35, they might classify it as secondary infertility after six months of trying. It can be caused by factors affecting either or both partners, though sometimes no single cause is identified. Providers often state that the reasons for secondary infertility are evenly split between both sexes and unexplained causes.</p>
      </section>

      <section className="infertility-section" id='risk-factors'>
        <h2>Risk Factors for Secondary Infertility in Women</h2>
        <ul>
         <li><strong>Issues with Egg Quantity or Quality & Primary Ovarian Insufficiency</strong></li>
         <p>It has been noted that individuals assigned female at birth are born with a limited supply of eggs, and as they approach their 40s, the number of eggs decreases. Those remaining are more prone to chromosomal abnormalities. Autoimmune or genetic conditions, as well as previous surgeries or radiation, have been cited as factors that may result in a lower count of viable eggs.</p>
         <p>Primary ovarian insufficiency (POI) occurs when an individual experiences irregular menstrual cycles before turning 40. While approximately 5–10% of those with POI are able to conceive and have normal pregnancies, many individuals with this condition face challenges in becoming pregnant. The exact cause of POI is often unknown, but it may result from factors such as chemotherapy, radiation treatment to the pelvic area, or other medical conditions.</p>
         <img src={SecondaryInfertility8} alt="img" className='image' style={{width:'85%'}} />
         <li><strong>Fallopian Tube Obstruction</strong></li>
         <p>According to a 2013 study, fallopian tube obstruction is found in 29% of females experiencing secondary infertility. Infections, particularly those caused by chlamydia, can lead to damage in the fallopian tubes, resulting in permanent blockages.</p>
         <img src={SecondaryInfertility2} alt="img" className='image' style={{width:'85%'}} />         <li><strong>Polycystic Ovary Syndrome(PCOS)</strong></li>
         <p>PCOS has been described as a hormonal condition characterized by irregular or infrequent menstrual cycles, affecting ovulation and reducing the chances of conception.</p>
         <img src={SecondaryInfertility3} alt="img" className='image' style={{width:'85%'}} />
         <li><strong>Endometriosis</strong></li>
         <p>Endometriosis, a condition where uterine-like tissue grows outside the uterus, has been acknowledged as a cause of infertility in some cases, though not all individuals with endometriosis experience infertility.</p>
         <img src={SecondaryInfertility4} alt="img" className='image' style={{width:'85%'}} />
         <li><strong>Weight gain and Lifestyle factors</strong></li>
         <p>Weight gain has been reported to lead to ovarian dysfunction in some individuals. It is also noted that infertility may be linked to medications or treatments for certain conditions. Additionally, lifestyle factors such as smoking or alcohol consumption are believed to negatively affect ovulation and conception.</p>
         <img src={SecondaryInfertility5} alt="img" className='image' style={{width:'85%'}} />
         <li><strong>Hormonal Disorders</strong></li>
         <p>Hormonal disorders arise when there is a malfunction in the hypothalamus and pituitary glands in the brain, which produce hormones crucial for ovarian function. Issues with these glands can disrupt the reproductive system, potentially preventing ovulation.</p>
         <li><strong>Uterine Conditions</strong></li>
         <p>Structural issues, including scarring or blockages, are often caused by infections or surgeries that damage parts of the fallopian tubes or uterus. The fallopian tubes, responsible for carrying eggs to the uterus, can become blocked due to infections such as chlamydia, gonorrhea, or pelvic inflammatory disease (PID). It has been mentioned that certain conditions affecting the uterus, such as scarring from dilation and curettage (D&C) or C-section deliveries, may also contribute to secondary infertility. Uterine fibroids or polyps are reported to obstruct parts of the uterus, impairing pregnancy.</p>
         <ul>
            <li>Fibroids, which are noncancerous tumors</li>
            <li>Adhesions, which are collections of scar tissue</li>
            <li>Adenomyosis, where the uterine lining grows into the uterine wall</li>
            Congenital anomalies present at birth that result in an atypical uterine structure
         </ul>
         <img src={SecondaryInfertility6} alt="img" className='image' style={{width:'85%'}} />
        </ul>
      </section>

      <section className="infertility-section" id='screening'>
        <h2>SCREENING</h2>
        <p>The doctor will inquire about the following information:</p>
        <ul>
          <li>Any past illness, sexually transmitted infections(STIs), and surgeries</li>
          <li>Previous pregnancies or deliveries</li>
          <li>History of pregnancy loss</li>
          <li>Previous breastfeeding experiences</li>
          <li>Current medications being taken</li>
          <li>Exposure to harmful drugs or chemicals</li>
          <li>Details regarding the menstrual cycle</li>
        </ul>
      </section>

      <section className="infertility-section" id='diagnosis'>
        <h2>Diagnosis</h2>
        <ul>
          <li><strong>Hormone Testing:</strong>Blood tests are conducted to evaluate hormonal levels in both partners, focusing on hormones like estrogen, progesterone, and testosterone.</li>
          <li><strong>Ovulation Tracking:</strong>The woman’s menstrual cycle is monitored to determine whether ovulation is occurring regularly.</li>
          <li><strong>Hysterosalpingography:</strong>This X-ray procedure is used to evaluate the condition of the uterus and fallopian tubes.</li>
          <li><strong>Ultrasound:</strong>Imaging tests may be performed to inspect the reproductive organs for any abnormalities.</li>
          <li><strong>Laparoscopy:</strong>A minimally invasive surgical technique is employed to examine the pelvic organs for conditions such as endometriosis or scarring.</li>
        </ul>
      </section>

      <section className="infertility-section" id='treatment'>
        <h2>Treatment</h2>
        <ul>
            <li><strong>Fertility Medications</strong></li>
            <p>The primary treatment for women with ovulation issues typically involves clomiphene (Clomid) and injections of follicle-stimulating hormone (FSH) and luteinizing hormone (LH). Clomid promotes ovulation, while the injections help mature eggs and trigger ovulation.</p>
            <li><strong>Surgery</strong></li>
            <p>For women, surgical options may include the removal of fibroids, endometrial growths, scarring, or uterine polyps. Surgery might also be considered to unblock a fallopian tube. </p>
            <img src={SecondaryInfertility7} alt="img" className='image' style={{width:'85%'}} />
            <li><strong>Assisted Reproductive Technology(ART)</strong></li>
            <p>If other treatments fail, individuals may explore assisted reproductive technology to conceive. Some ART methods include:</p>
            <ul>
                <li>Inserting collected sperm directly into the uterus (Intrauterine Insemination - IUI)  </li>
                <li>Injecting a single sperm into an egg (Intracytoplasmic Sperm Injection - ICSI)  </li>
                <li>Fertilizing an egg with sperm outside the body and then placing the embryo in the uterus (In Vitro Fertilization - IVF)  </li>
                <li>Freezing eggs for future use (Oocyte Cryopreservation)  </li>
            </ul>
            <li>Coping with infertility</li>
            <p>Dealing with infertility can be emotionally taxing for both partners. The National Fertility Association suggests several coping strategies:</p>
            <ul>
                <li>Encouraging family members to learn about fertility issues and informing them of how they can provide support</li>
                <li>Allowing one’s partner to express differing emotions</li>
                <li>Giving oneself permission to grieve or cry</li>
                <li>Communicating with a partner about preferred forms of help and support</li>
                <li>Gathering information about infertility to better understand what to expect</li>
                <li>Joining an infertility support group for shared experiences and encouragement</li>
            </ul>
        </ul>
      </section>

      <section className="infertility-section" id='case-studies'>
        <h2>CASE STUDIES</h2>
        <p><strong>Prevalence of primary and secondary infertility</strong></p>
        <p><strong>Study:</strong>This analysis examined data from fifteen population surveys involving 6,400 infertile couples to assess the incidence of primary and secondary infertility. Of the couples studied, 3,600 (56.25%) presented with primary infertility, while 2,800 (43.2%) dealt with secondary infertility. The age distribution indicated that most women with primary infertility belonged to the most fertile age group, whereas those with secondary infertility were primarily in the 30–39 age range.</p>
        <p><strong>Outcomes:</strong>The findings revealed a significant prevalence of primary infertility compared to secondary infertility among individuals visiting public sector tertiary care institutions. Both female and male factors were found to contribute equally to infertility in 40% of cases each, with unexplained infertility accounting for 20%. The data indicated that the primary cause of infertility remains the female factor, followed by unexplained causes.</p>
        <p><strong>Discussions:</strong>The study concluded that primary infertility is more common than secondary infertility, and rising marriage age contributes to increased rates of unexplained infertility. It emphasized the need for public awareness regarding infertility causes to dispel misconceptions and encourage timely treatment. Media outreach and educational materials targeting primary and specialized healthcare settings are recommended to enhance understanding and support for affected individuals.</p>
         <p><strong>Difference between Primary and Secondary Infertility in Morocco: Frequencies and Associated Factors</strong></p>
         <p><strong>Study:</strong>This research represents the first effort to differentiate between primary and secondary infertility in Morocco and to identify associated factors. The study analyzed overall rates of infertility, reporting 67.37% for primary infertility and 32.63% for secondary infertility. A significant focus was placed on the age of couples, noting that those experiencing secondary infertility were generally older compared to those with primary infertility. This age difference aligns with the increasing average age of marriage in Morocco, which rose from 17.3 years in 1960 to 26.6 years in 2010.</p>
         <p><strong>Outcomes:</strong>The findings highlighted that age is a critical factor in fertility, with womens reproductive capability peaking around the age of 20 and declining significantly after 30. Couples experiencing longer durations of marriage and advanced ages faced reduced chances of conception. The socio-economic status of couples was also influential; women with higher socio-economic status had better access to diagnostic methods and treatments for infertility. Male infertility emerged as a significant cause, with abnormal sperm contributing to 45.1% of primary infertility cases compared to 20.3% in secondary cases. Female infertility rates were notably higher in secondary infertility (66.10% vs. 44.20%), with ovulation disorders identified as the primary cause.</p>
         <p><strong>Discussion:</strong>The study identified three independent variables strongly associated with secondary infertility: the duration of marriage, the woman’s age, and socio-economic status. These findings suggest that the duration of infertility is closely linked to secondary infertility. To improve the robustness of future investigations, it is recommended to include control groups of fertile women and to foster high-quality dialogue among participants, enhancing the management of infertility issues in the population.</p>
      </section>

      <section className="infertility-section" id='specialists'>
        <h2>SPECIALISTS</h2>
        <p>Reproductive Endocrinologists, Fertility Specialists, Obsteticians/Gynecologists(OB/GYNs).</p>
      </section>
      <SubtopicSidebar />
      </article>
    </div>
  );
};

export default SecondaryInfertility;
