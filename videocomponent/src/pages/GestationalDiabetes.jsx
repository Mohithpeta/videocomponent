
import './GestationalDiabetes.css';
import Gestational from './assets/Gestational Diabetes.png';
import Gestational1 from './assets/Gestational Diabetes(1).png';
import SubtopicSidebar from './SubtopicSidebar';
import Gestational2 from './assets/pics/GESTATIONAL DIABETES.png';

const GestationalDiabetes = () => {
  return (
    <div className="main">
      <article className='urinary-incontinence-article'>
      <h1>Gestational Diabetes</h1>
      
      <section>
        <p>
        Gestational diabetes refers to any level of glucose intolerance that begins or is first identified during pregnancy. Pregnancy is often accompanied by insulin resistance (IR) and hyperinsulinemia, which can increase the risk of diabetes in some women. However, this definition does not rule out the possibility of pre-existing but undiagnosed glucose intolerance, which has led to the suggestion by the Endocrine Society that the term hyperglycemia in pregnancy might be more accurate. The International Association of Diabetes and Pregnancy Study Groups (IADPSG) categorizes hyperglycemia detected during pregnancy as either overt diabetes or gestational diabetes mellitus (GDM). In 2013, the World Health Organization (WHO) recommended that hyperglycemia identified during pregnancy be classified as either diabetes mellitus (DM) in pregnancy or GDM.
        </p>
        <ul>
          <li>The prevalence of gestational diabetes mellitus (GDM) ranges from 1% to 20% and is increasing globally, alongside the rising prevalence of obesity and type 2 diabetes mellitus (T2DM).</li>
          <li>The prevalence of GDM is directly proportional to the prevalence of T2DM within a population or ethnic group.</li>
          <li>African, Hispanic, Indian, and Asian women have higher prevalence rates of GDM compared to Caucasian women.</li>
        </ul>
      </section>
      
      <section>
        <h2>Overt Diabetes</h2>
        <p>
          Overt diabetes in pregnancy is defined as hyperglycemia first recognized during pregnancy, meeting the diagnostic threshold of 
          diabetes in non-pregnant adults.
        </p>
      </section>
      
      <section>
        <h3>Why Diabetes During Pregnancy?</h3>
        <p>
          During a normal pregnancy, insulin resistance (IR) starts mid-pregnancy and increases in the third trimester due to placental 
          hormones like TNF-α, human placental lactogen, estrogen, progesterone, and cortisol. The pancreas compensates with increased 
          insulin production, but GDM occurs when it can’t keep up.
        </p>
      </section>
      <section id='symptoms'>
        <h2>Symptoms</h2>
        <img src={Gestational} alt="gestational diabetes" style={{width:'85%'}} className='image'/>
      </section>

      <section id='risk-factors'>
        <h2>Risk Factors due to GDM</h2>
        <img src={Gestational1} alt="Gestational risk factors" style={{width:'85%'}} className='image'/>
      </section>
      <section id='screening'>
        <h2>Screening</h2>
        <p>
          Screening for GDM is usually done at 24-28 weeks of gestation when insulin resistance increases. Screening criteria include:
        </p>
        <ul>
          <li>Family history of diabetes in a first-degree relative.</li>
          <li>History of GDM in a previous pregnancy.</li>
          <li>Previous birth of a macrosomic baby.</li>
          <li>Maternal obesity.</li>
          <li>Belonging to an ethnic group at higher risk for GDM.</li>
        </ul>
        <h4>Process flow:</h4>
        <ol>
          <li><strong>First Antenatal Visit:</strong>During the first prenatal check-up, a blood test is done to measure the fasting plasma glucose (the amount of sugar in your blood after not eating for at least 8 hours). If this level is equal to or greater than 92 mg/dl, the healthcare provider diagnoses the patient with gestational diabetes.</li>
          <li><strong>If Blood Sugar is Lower than 92 mg/dl:</strong>If the fasting glucose level is less than 92 mg/dl at this first check-up the patient is not diagnosed with gestational diabetes. However, another test is taken, called a 2-hour 75-g oral glucose tolerance test (OGTT), between the 24th and 28th weeks of pregnancy. This is to ensure that gestational diabetes doesn’t develop later during pregnancy.</li>
        </ol>
        <p>In short, the first test checks for early signs of GDM, and if those signs aren’t present, another test is taken later in the pregnancy to ensure that GDM has not developed by that stage.</p>
        <p>Routine screening for low-risk pregnancies will not be conducted unless pregnancy-related clinical signs and symptoms of hyperglycemia were present. These signs included accelerated fetal growth, macrosomia, polyhydramnios, or symptoms like polyuria and polydipsia. In such cases, diagnostic testing was initiated.</p>
      </section>
      <section id='diagnosis'>
        <h2>Diagnosis</h2>
        <p>
          Diagnostic criteria for GDM vary across guidelines. Here’s a summary:
        </p>
        <ul>
          <li><strong>WHO 1999:</strong> One elevated glucose value suffices. Fasting PG ≥126 mg/dl or 2-hour PG ≥140 mg/dl diagnoses GDM.</li>
          <li><strong>ACOG:</strong> Two or more elevated glucose values are required, with specific thresholds for fasting, 1-hour, 2-hour, and 3-hour PG.</li>
          <li><strong>Canadian Diabetes Association:</strong> Two elevated values are required, with specific thresholds for fasting, 1-hour, and 2-hour PG.</li>
          <li><strong>IADPSG:</strong> One elevated value suffices, with specific thresholds for fasting, 1-hour, and 2-hour PG.</li>
          <li><strong>DIPSI:</strong> One-step 2-hour PG ≥140 mg/dl following a 75-g OGTT.</li>
        </ul>
        
          <img src={Gestational2} alt="image" className='image' style={{width:'85%'}} />
        
      </section>
      <p>One key consideration is that the Indian population is diverse and varies significantly, making it difficult to conclusively apply international criteria to Indian patients.</p>
  <section>
  <h2>DIPSI (Diabetes in Pregnancy Study Group India):</h2>

  <h3>Advantages of DIPSI:</h3>
  <p>The DIPSI criterion involves measuring plasma glucose from a single blood sample, making it a simple and cost-effective method for diagnosing GDM. This method is particularly useful in low-resource settings like rural India, where the infrastructure for more complex diagnostic procedures (e.g., OGTT with multiple blood tests) may not be available or affordable.</p>

  <h3>Effectiveness:</h3>
  <p>Using the DIPSI criteria and managing GDM can lead to positive pregnancy outcomes, including a reduction in stillbirth rates—a significant public health issue in India.</p>

  <h3>Cost Considerations:</h3>
  <p>The DIPSI procedure is estimated to be 66% less expensive than other diagnostic methods, making it a practical option even if repeated in each trimester.</p>

  <p>It uses the term decreased gestational glucose tolerance (DGGT) for a 2-hour plasma glucose of ≥120 mg/dL but &lt;140 mg/dL. Women with DGGT have worse postpartum outcomes compared to those with normal glucose tolerance.</p>

  <p>In a study conducted across India, data was collected from 1,634 OB/GYNs regarding the diagnostic methods they use for gestational diabetes mellitus (GDM). The results are as follows:</p>
  <ol>
    <li>Diabetes in Pregnancy Study Group India (DIPSI) criteria: 600 OB/GYNs (36.7%)</li>
    <li>World Health Organization (WHO) 1999 criteria: 403 OB/GYNs (24.7%)</li>
    <li>International Association for Diabetes and Pregnancy Study Groups (IADPSG) criteria: 389 OB/GYNs (23.8%)</li>
    <li>American Diabetes Association (ADA) 2-step method: 242 OB/GYNs (14.8%)</li>
  </ol>
  </section>
  <section id='treatment'>
  <h2>TREATMENT</h2>
  <p>Oral Anti-Diabetic Drugs (OADs) are generally not recommended for managing gestational diabetes. Most existing guidelines exclude OADs due to concerns about safety and insufficient evidence supporting their use during pregnancy. While recent studies have suggested potential benefits from drugs like metformin and glyburide, the risks involved have led to their exclusion from routine treatment protocols.</p>

  <p>Insulin Therapy is the recommended treatment for gestational diabetes when dietary management fails to achieve adequate blood glucose control. Insulin therapy can be initiated if fasting plasma glucose (FPG) exceeds 120 mg/dL or 2-hour postprandial glucose (PG) exceeds 200 mg/dL. Various types of insulin are used, including insulin aspart, which helps manage postprandial glucose levels effectively, and biphasic aspart 30 (BIAsp), which has been shown to be non-inferior to human insulin while requiring lower doses. Insulin detemir, a long-acting analogue, is also used to provide basal insulin needs and has been found effective in controlling blood glucose in late pregnancy. Insulin administration can involve single or multiple doses, tailored to individual glucose monitoring results, with adjustments made as needed.</p>

  <p>Glycemic Management During Delivery involves starting a normal saline drip and adjusting insulin based on blood glucose measurements to maintain levels within the target range of 90-120 mg/dL. This approach helps manage hyperglycemia effectively during labor.</p>

  <p>Glycemic Management Post-Delivery requires monitoring as insulin needs typically decrease immediately after childbirth. Insulin doses are adjusted based on postpartum blood glucose levels, with specific protocols for varying glucose thresholds to ensure appropriate control as the bodys glucose metabolism stabilizes.</p>

  <p>Insulin Administration Devices include insulin pens and continuous subcutaneous insulin infusion (CSII) systems. Insulin pens are recommended for their ease of use and precision, offering a discreet and user-friendly method for insulin delivery. CSII can be beneficial for patients requiring more intensive glucose control, providing continuous insulin infusion that mimics physiological insulin secretion. However, CSII requires careful training and monitoring due to its complexity and potential for user error or infusion site issues.</p>
  </section>
   <section id='case-studies'>
   <h2>CASE STUDIES</h2>
  <h4>Preventing Gestational Diabetes Mellitus with Lifestyle Intervention: The Finnish Gestational Diabetes Prevention Study (RADIEL)</h4>
  <p>The Finnish Gestational Diabetes Prevention Study (RADIEL) was a multicenter randomized controlled trial conducted between 2008 and 2014 across maternity hospitals in Finland, focusing on preventing gestational diabetes mellitus (GDM) in high-risk women with a history of GDM or a prepregnancy BMI of 30 kg/m² or more.</p>
  <p>The intervention group received personalized lifestyle counseling throughout pregnancy, including dietary advice and physical activity recommendations, while the control group received standard care. The results showed that the intervention group experienced a significant reduction in GDM incidence compared to the control group, with those adhering to lifestyle changes also showing improved weight management, better glucose regulation, reduced adverse delivery outcomes, and enhanced neonatal health.</p>

  <h4>Lifestyle intervention can reduce the risk of gestational diabetes: a meta-analysis of randomized controlled trial</h4>
  <p>Data from 11,487 pregnant women participating in 29 randomized controlled trials (RCTs) were analyzed to evaluate the impact of lifestyle modification on the risk of gestational diabetes mellitus (GDM). An 18% reduction in the risk of GDM was demonstrated due to lifestyle modifications, with a significant impact observed when interventions were started before the 15th gestational week.</p>


  <h4>Determinants of Gestational Diabetes Mellitus: A Hospital-Based Case–Control Study in Coastal South India</h4>
  <p>This case–control study identified several independent risk factors for GDM, including irregular menstrual cycles, a history of GDM in previous pregnancies, and a family history of type 2 diabetes mellitus or GDM. The findings align with several other studies that highlight these critical risk factors and underscore the importance of identifying high-risk individuals for early intervention to mitigate the risk of GDM.</p>

  <h4>Postpartum Weight Management Intervention for Women with Gestational Diabetes: A Randomized Controlled Trial</h4>
  <p>This randomized controlled trial demonstrated that participants in the intervention group, who received a specialized postpartum weight management program, showed significant improvements in managing their postpartum weight and blood glucose levels. The study highlights the effectiveness of a structured postpartum care program that includes dietary and physical activity interventions tailored for women who experienced gestational diabetes.</p>

  <h4>Physical activity patterns and gestational diabetes outcomes – The wings project</h4>
  <p>The WINGS Model of Care effectively enhanced physical activity and glycemic control among women with GDM, demonstrating the potential of personalized counseling and continuous support throughout pregnancy. The improvements in fasting glucose and postprandial glucose levels indicated that the intervention successfully addressed key challenges faced by women with GDM.</p>

  <h4>A snapshot of current gestational diabetes management practices from 26 low-income and lower-middle-income countries</h4>
  <p>This survey revealed high variability in GDM management practices and highlighted concerns about the adequacy of current approaches, especially in settings with limited resources. The study emphasized the need for updates to GDM management practices in line with the latest FIGO guidelines and the importance of establishing uniform guidelines and improving access to primary- and secondary-level care to enhance GDM management and reduce the burden of the condition in low-income and lower-middle-income countries.</p>

  <h3>OTHER CASE STUDIES</h3>
  <p>The study examined postpartum glucose tolerance in 203 women with gestational diabetes mellitus (GDM), with a focus on follow-up testing for dysglycemia. The findings underscore the importance of tailored postpartum programs for women with GDM, especially in regions where cultural factors may affect follow-up testing.</p>
 
  <h3>Postpartum Care in Gestational Diabetes</h3>
     <h4>PostPartum screening</h4>
     <p>To prevent diabetes after delivery, postpartum screening is essential. Below is data from physicians in India on their recommendations for follow-ups:</p>
     <ul>
       <li>56% of physicians, diabetologists, and endocrinologists, along with 71.6% of OB/GYNs, recommended that women with gestational diabetes mellitus (GDM) undergo an oral glucose tolerance test (OGTT) after delivery.</li>
       <li>42.4% of diabetologists and endocrinologists, as well as 44.2% of OB/GYNs, advised OGTT within 6 weeks of delivery.</li>
       <li>48% of diabetologists and endocrinologists, along with 49.4% of OB/GYNs, recommended OGTT between 6 weeks and 2 months after delivery.</li>
     </ul>
     <p>Post-pregnancy treatment involving diet, exercise, and/or metformin has shown to be effective in preventing the onset of type 2 diabetes. Randomized trials in non-pregnant individuals with impaired glucose tolerance have demonstrated the effectiveness of these interventions in lowering the risk of developing type 2 diabetes.</p>
     <p>Postpartum follow-up for women with GDM generally focuses on two main areas: postpartum screening for diabetes and the prevention of type 2 diabetes through the promotion of healthy lifestyles. The likelihood of postpartum testing is found to increase significantly with a postpartum visit to an obstetrician-gynecologist (OBGYN), and the likelihood increases further with multiple postpartum visits.</p>
     <h4>Barriers to Postpartum follow-up care</h4>
     <p>Several barriers to postpartum follow-up care were identified, including:</p>
     <ul>
      <li>Emotional Stress and Adjustment: Women reported emotional stress, feeling overwhelmed, and the burden of childcare as key challenges in adjusting to life with a new baby. Concerns about postpartum and future health, such as feeling healthy and not needing care or fearing bad news, also hindered follow-up.</li>
      <li>Experiences with Medical Care: Dissatisfaction with care and the logistics of accessing medical services were highlighted as additional barriers.</li>
     </ul>
     <h4>Common Barriers identified in studies</h4>
     <ul>
      <li>Lack of Time and Energy: This was a frequently mentioned barrier across multiple studies .</li>
      <li>Lack of Childcare Support: A major issue in ensuring postpartum follow-up .</li>
      <li>Other Barriers: Not feeling well or experiencing emotional distress, lack of motivation, financial constraints, domestic responsibilities, such as cooking, lack of knowledge and understanding about GDM, lack of social support, feeling isolated or dullness, poor body image, bad weather conditions, belief that being too young made it unnecessary to follow a restricted diet, obstacles related to work, unsuitable neighborhoods or lack of access to exercise equipment, cultural expectations, such as the belief that a womans needs come last in the family, lack of enjoyment in physical activity.</li>
     </ul>
     <h4>Specific Barrier to postpartum weight reduction</h4>
     <p>In a study conducted among immigrant women in Australia, it was noted that breastfeeding posed a barrier to postpartum weight reduction as it led to an increase in food intake.</p>
     <h4>Risk Perception</h4>
     <p>Despite awareness, many women underestimate their risk of developing diabetes post-GDM:</p>
     <ul>
      <li>In a US study, although 90% of women acknowledged that GDM increases the risk of future diabetes, only 16% believed they were at high risk. This number increased to 39% when women considered their risk assuming they maintained their current lifestyle.</li>
      <li>In Denmark, 40% of women with a history of GDM were very worried about developing diabetes in the future, 46% were a little worried, and 14% were not worried at all.</li>
      <li>Among Aboriginal women in Canada, those with a history of GDM or currently experiencing a GDM-affected pregnancy reported attempts to continue eating healthily postpartum to protect their health. However, some women felt less concerned about their diet after delivery, assuming that their dietary intake would no longer impact their health.</li>
     </ul>
      </section>
      <p><strong>The lack of communication between the delivery unit and the primary care clinic where women attend postpartum check-ups has resulted in confusion and uncertainty among healthcare providers regarding postpartum diabetes screening.</strong></p>
      <p>South Asian women diagnosed with GDM using the IADPSG criteria remain at a significantly high risk of dysglycemia during postpartum follow-up. Although there is ongoing debate about using these criteria for diagnosing milder glucose intolerance during pregnancy, they have been effective in predicting postpartum metabolic outcomes, at least in our context. By identifying women in the stage of intermediate hyperglycemia, these criteria may offer a valuable opportunity for early intervention and diabetes prevention. Further research focused on long-term metabolic outcomes across different regions and the cost-effectiveness of these criteria may ultimately determine their overall usefulness.</p>
      <section>

      </section>
      <section id='specialists'>
      <h2>Specialists</h2>
      <ul>
        <li>OB/GYN</li>
        <li>Endocrinologists</li>
        <li>Diabetologists</li>
        <li>Dietitians/Nutritionists</li>
      </ul>
      </section>
      <SubtopicSidebar />
      </article>
</div>

    
  );
};

export default GestationalDiabetes;
