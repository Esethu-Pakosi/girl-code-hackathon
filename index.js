const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const rawData = new FormData(form);
  const formData = Object.fromEntries(rawData.entries());
  const score = computeScore(formData);
  console.log("Final score: ", score);
  const feedbackToDisplay = retrieveFeedback(formData);
  console.log(feedbackToDisplay);

  //const {companyName, nameSurname, numEmployees, numFemales, numMales, genderDisaggregatedData, question2, question3, question4, question5} = formData;
})

const computeScore = (formData) {
    const scores = Object.values(formData);
    const total = scores.reduce((accumulator, value) => { return accumulator + value; }, 0);
    const average = total/scores.length;
    return average;
}

const retrieveFeedback = (formData) => {
    let feedbackToDisplay = [];
    const questions = Object.keys(formData);
    questions.forEach((question) => {
        if (formData[question] < 3) {
            feedbackToDisplay.push(feedbackData[question]);
        }
    });
    return feedbackToDisplay;
}








const feedbackData = {
    genderDisaggregatedData: `Having your training data set broken down by gender is important for several reasons:

    Bias Detection and Mitigation: When the data is broken down by gender, it becomes easier to detect potential biases in the AI model's predictions or outputs. This allows for targeted bias mitigation strategies.
    
    Fairness Evaluation: Evaluating the AI model's performance separately for each gender category helps assess if there are any disparities in accuracy or other metrics, ensuring fair treatment for all genders.
    
    Inclusive Decision-Making: Gender-disaggregated data enables inclusive decision-making, ensuring that the AI model's outputs consider the specific needs and characteristics of different genders.
    
    Equitable Representation: Ensuring a balanced representation of genders in the training data helps the AI model make equitable predictions for users of all genders.
    
    User-Centric Design: AI models developed with gender-disaggregated data are more likely to be user-centric and responsive to the diverse needs of the user base.
    
    Finding datasets where the data is broken down by gender may require some effort and consideration. Here are some approaches to finding such datasets:
    
    Government and Official Statistics: Government agencies and organizations often publish datasets that include gender-disaggregated data. These datasets cover a wide range of topics, including demographics, employment, education, and health.
    
    Academic Research: Many academic research studies and surveys include gender-disaggregated data as part of their methodology. Look for publicly available research papers and accompanying datasets.
    
    Non-Profit Organizations: Non-profit organizations and advocacy groups may collect and publish datasets that highlight gender-specific issues and trends.
    
    Open Data Repositories: Explore open data repositories and portals that curate a wide range of datasets. Some popular examples include data.gov, Kaggle, and the World Bank Open Data.
    
    Gender-Specific Surveys: Some surveys are specifically designed to collect data related to gender dynamics and gender-specific experiences. These surveys often provide valuable gender-disaggregated data.
    
    Data from Gender Equality Initiatives: Look for datasets from initiatives focused on gender equality and women's empowerment, as they often include gender-disaggregated data.
    
    Collaboration with Organizations: Collaborate with organizations or institutions that conduct gender-focused research or data collection. They may be willing to share relevant datasets for your AI project.
    
    Ethical Considerations: When accessing and using gender-disaggregated data, ensure that proper ethical considerations and data privacy measures are in place, especially when dealing with sensitive information.
    
    Remember that when using gender-disaggregated data, it is crucial to ensure data accuracy and quality. Additionally, consider broader intersectional perspectives, as gender intersects with other dimensions such as race, ethnicity, and socio-economic status, to ensure a comprehensive understanding of diverse user experiences and needs.`,
    genderEqualData: `"Having equal representation of genders in your training data for an AI model is important for several reasons:

    Fairness: Equal representation ensures that the model is trained on data that is equally representative of different genders, leading to fair and unbiased predictions.
    
    Avoiding Bias: When one gender is overrepresented or underrepresented in the data, the model may develop biased associations, leading to unfair and inaccurate results.
    
    Generalizability: A gender-balanced training dataset improves the model's ability to generalize well to new, unseen data, regardless of the gender distribution in real-world applications.
    
    User Diversity: AI models should serve a diverse user base. Equal gender representation helps the model cater to the needs of users from different gender backgrounds.
    
    Ethical Considerations: Ensuring equal representation aligns with ethical principles of inclusivity, diversity, and fairness.
    
    To achieve a gender-balanced training dataset, consider the following strategies:
    
    Diverse Data Collection: Collect data from diverse sources that include a broad representation of gender identities. Be conscious of underrepresented groups and seek to include them in the dataset.
    
    Data Augmentation: If the dataset is imbalanced, use data augmentation techniques to create synthetic samples that maintain the same distribution across genders.
    
    Data Re-Sampling: Re-sample the data to balance the number of samples for each gender category. This may involve oversampling the underrepresented group or undersampling the overrepresented group.
    
    Data Curation: Carefully curate the training data to ensure an equal representation of genders. Remove any duplicates or irrelevant samples that might skew the gender distribution.
    
    Data Collaboration: Collaborate with organizations or communities that can provide diverse and gender-balanced datasets.
    
    Data Labeling and Annotation: When annotating the data, ensure that gender labels are accurate and consistent.
    
    Ethical Data Collection: Follow ethical guidelines and obtain proper consent when collecting and using data related to gender or other sensitive attributes.
    
    Diverse Team Involvement: Involve a diverse team in the data collection and labeling process to avoid unintentional biases and ensure balanced perspectives.
    
    Data Privacy: Respect user privacy and confidentiality, especially when dealing with sensitive data related to gender.
    
    Data Auditing: Regularly audit the dataset to monitor changes in gender representation and ensure ongoing balance.
    
    Remember that achieving a perfectly equal gender representation might not always be feasible, especially if the data reflects a real-world gender distribution. The goal is to strive for a representative and balanced dataset while being mindful of ethical considerations and the need for fair and unbiased AI models."`,
    genderFairData: `"Evaluating your training data for potential unfair evaluation of women is crucial to ensure that your AI model does not perpetuate gender bias and provides fair and equitable outcomes for all individuals. Gender bias in AI models can lead to discriminatory practices, unequal treatment, and reinforcement of harmful stereotypes. By conducting a thorough evaluation, you can identify and address biases that might lead to unfair evaluations of women. Here's why this evaluation is important and how you can do it:

    Importance of Evaluating for Unfair Evaluation of Women:
    
    Ensuring Fairness: Evaluating for unfair treatment of women helps ensure that your AI model does not discriminate against women in its predictions or decisions.
    
    Avoiding Harm: Unfair evaluations can lead to harmful consequences for women, impacting their opportunities, access to resources, and overall well-being.
    
    Ethical Responsibility: As developers, it is our responsibility to create AI models that are unbiased and treat all individuals fairly, regardless of gender.
    
    Building Trust: Fair AI models build trust among users and stakeholders, enhancing the model's acceptance and adoption.
    
    Legal and Regulatory Compliance: In many jurisdictions, there are legal and regulatory requirements to avoid gender bias and discrimination in AI models.
    
    How to Evaluate for Unfair Evaluation of Women:
    
    Define Fairness Metrics: Determine fairness metrics that align with your specific use case and the goals of your AI model. Common metrics include disparate impact, demographic parity, and equal opportunity.
    
    Identify Sensitive Attributes: Identify gender as a sensitive attribute in the data. Ensure that gender is labeled accurately and consistently.
    
    Data Sampling: Randomly sample a subset of your training data that includes both men and women. The subset should be representative of the overall data distribution.
    
    Group Data by Gender: Divide the data into two groups based on gender (men and women).
    
    Model Evaluation: Train your AI model using the training data and evaluate its performance separately on each gender group. Measure accuracy, precision, recall, and other performance metrics for each group.
    
    Analyze Results: Analyze the performance metrics for each gender group. Look for significant differences in accuracy or other metrics between the groups, which might indicate unfair evaluations.
    
    Visualizations: Use visualizations to illustrate the performance differences between gender groups, making the bias evaluation results more understandable.
    
    Bias Mitigation: If significant unfair evaluation of women is identified, take steps to mitigate the bias. This may involve re-sampling the data, applying bias-correction techniques, or refining the model architecture.
    
    External Validation: Consider seeking external validation from independent experts or audit firms specializing in AI ethics and fairness to verify your evaluation results.
    
    Transparency and Reporting: Transparently report your bias evaluation process, results, and any actions taken to mitigate bias in your AI model.
    
    By conducting a thorough evaluation for unfair evaluation of women and addressing any biases, you can build AI models that are fair, unbiased, and respectful of gender diversity, ensuring equitable outcomes for all individuals."`,
    femaleDataCollectors: `"It is essential for the humans who annotate and label the training data for AI models to be gender diverse for several reasons:

    Avoiding Bias: Gender diversity in the annotation team helps reduce the risk of introducing biased annotations into the training data. A diverse team is more likely to catch and correct biases that might be inadvertently introduced.
    
    Balanced Perspectives: Different genders may interpret and annotate data differently. Having a gender-diverse team ensures a more balanced range of perspectives in the annotation process.
    
    Representative Data Labels: A gender-diverse team can provide more accurate and representative labels, as they can better understand the nuances and variations within gender categories.
    
    Inclusivity: Gender-diverse annotation teams can contribute to making the AI model more inclusive and representative of all users, regardless of their gender identity.
    
    Ethical Considerations: Ensuring gender diversity in the annotation process aligns with ethical principles of fairness and avoids perpetuating stereotypes or biases in AI models.
    
    To achieve gender diversity in the team annotating and labeling training data for AI models, consider the following strategies:
    
    Diverse Recruitment: Actively recruit annotators from diverse gender backgrounds. Use a variety of recruitment channels and platforms to reach a broader range of candidates.
    
    Diversity Goals: Set clear diversity goals for the annotation team and make it a priority to achieve gender balance in the team composition.
    
    Inclusive Job Descriptions: Craft job descriptions that promote diversity and inclusion. Use inclusive language that encourages candidates of all genders to apply.
    
    Training and Guidelines: Provide comprehensive training and guidelines to the annotation team to ensure consistency and accuracy in labeling while avoiding gender-specific biases.
    
    Avoiding Gender Stereotypes: Train annotators to be aware of and avoid gender stereotypes during the annotation process.
    
    Regular Audits: Regularly audit the annotation process to ensure that gender diversity is maintained and biases are minimized.
    
    Collaboration and Feedback: Encourage open communication and collaboration among the annotation team. Create an environment where team members feel comfortable providing feedback and discussing potential biases.
    
    Employee Resource Groups: Establish employee resource groups or support networks within the organization to promote diversity and inclusivity and provide a platform for addressing related issues.
    
    Diverse External Partnerships: If third-party annotators are involved, partner with organizations that prioritize diversity and inclusion in their workforce.
    
    Continuous Improvement: Continuously evaluate the annotation process and make improvements to ensure gender diversity is maintained and that biases are addressed effectively.
    
    By implementing these strategies, you can create a gender-diverse annotation team that contributes to building AI models with fair and unbiased training data, leading to more inclusive and accurate technology."`,
    modelObjectivesFair: `"Ensuring that your AI model's objectives are clearly defined and free from gender-specific goals or outcomes requires a thoughtful and deliberate approach throughout the development process. Here are some steps to help you achieve this:

    Clearly Define the Objective: Start by precisely defining the objectives of your AI model. Be specific about what the model is intended to achieve and the problem it aims to solve. Avoid vague or ambiguous objectives that could inadvertently lead to biased outcomes.
    
    Involve a Diverse Team: Include a diverse team of researchers, developers, and stakeholders in the project. Different perspectives can help identify and mitigate potential biases and ensure the model's goals are not gender-specific.
    
    Conduct a Bias Impact Assessment: Perform a bias impact assessment on the model's objectives. Consider how the objectives might affect different genders and ensure they do not disproportionately favor or disadvantage any specific gender.
    
    Review Data Collection and Annotation: Carefully examine the data used to train the model. Ensure that it is representative and free from gender-specific biases. Check for any data that might introduce gender-related goals into the model.
    
    Consider Ethical Guidelines: Refer to ethical guidelines and principles for AI development, such as those provided by organizations like the IEEE, ACM, or the Partnership on AI. These guidelines often stress the importance of fairness, inclusivity, and avoiding gender-specific outcomes.
    
    Adopt Gender-Neutral Language: Use gender-neutral language throughout the development process to avoid inadvertently introducing gender bias into the model's objectives.
    
    Regularly Review and Reassess Objectives: Continuously review the model's objectives during development and after deployment. This helps to ensure that the objectives remain relevant, unbiased, and aligned with the intended purpose.
    
    Set Performance Metrics for Fairness: Define fairness metrics that assess how well the model performs across different gender groups. Use these metrics to evaluate and compare the model's performance to ensure equitable outcomes.
    
    Implement Bias Mitigation Techniques: Consider applying bias mitigation techniques during the training process to reduce the likelihood of gender-specific goals or outcomes.
    
    Ethical AI Governance: Establish an ethical AI governance process that includes diverse perspectives and regular audits to monitor the model's behavior and outcomes for potential bias.
    
    User Feedback and Iterative Improvement: Encourage user feedback and continuously improve the model based on user experiences. This helps in identifying and rectifying any unintended gender-specific impacts.
    
    By following these steps, you can ensure that your AI model's objectives are clearly defined, unbiased, and aligned with principles of fairness and inclusivity, leading to technology that benefits all users equally, regardless of gender."`,
    disaggregatedAccuracyMeasurement: `"Measuring the accuracy levels of your AI model separately for different genders is essential to identify potential biases and ensure fair treatment across all gender groups. It helps to assess whether the model is making predictions that are equally accurate and unbiased for individuals of different genders. By analyzing accuracy separately, you can identify if one gender is being treated unfavorably, which could indicate the presence of gender bias in the model.

    Here's why measuring accuracy separately is important:
    
    Fairness Assessment: Analyzing accuracy for different genders allows you to evaluate if the model is equally fair to all genders. It helps to ensure that the model's performance is not disproportionately favoring or penalizing any specific gender.
    
    Bias Detection: Separate accuracy measurements can reveal potential disparities in predictions for different genders, helping to uncover any unintentional bias present in the model's outputs.
    
    Ethical Considerations: Fair treatment and equal representation of all genders are crucial ethical considerations when deploying AI models in real-world applications.
    
    To measure the accuracy levels of your AI model separately for different genders, follow these steps:
    
    Data Labeling and Preparation: Ensure that your dataset is labeled with accurate gender information. This could be a binary representation (e.g., male/female) or more inclusive options that encompass a broader range of gender identities.
    
    Data Splitting: Divide your dataset into separate subsets based on gender categories. For instance, create two subsets: one containing samples from one gender category and the other from the other gender category.
    
    Model Evaluation: Use the respective gender-specific subsets to evaluate the model's accuracy separately for each gender category. Run the model on each subset and compare the predictions to the true labels for each gender.
    
    Confusion Matrix: For each gender category, generate a confusion matrix to understand the model's performance. The confusion matrix shows the true positives, true negatives, false positives, and false negatives, which are used to calculate accuracy, precision, recall, and other performance metrics.
    
    Statistical Analysis: Perform statistical tests to compare the accuracy levels between different gender categories. This will help you determine if there are significant differences in performance and whether one gender is being treated unfavorably.
    
    Visualization: Present the results in a clear and visually interpretable way. Visualizations can highlight any disparities and help stakeholders understand the model's performance for each gender.
    
    Iterative Improvement: If significant differences in accuracy are identified, take corrective actions to address biases and improve fairness in the model. This may involve fine-tuning the model, re-sampling data, or implementing bias mitigation techniques.
    
    By measuring the accuracy levels of your AI model separately for different genders, you can promote fairness and inclusivity, ensuring that the model's predictions are equitable for all users, regardless of their gender identities."`,
    biasMitigationTechniques: `"There are several bias mitigation techniques that can be employed during the training of AI models to reduce or address bias. These techniques aim to ensure fairness and equity in the model's predictions. Some of the commonly used bias mitigation techniques include:

    Data Preprocessing: This involves carefully cleaning and preprocessing the training data to remove or reduce bias. Techniques like re-sampling, re-weighting, and data augmentation can be applied to create a more balanced and representative dataset.
    
    Fair Representation Learning: Fair representation learning aims to learn a compact and unbiased representation of the data. By disentangling sensitive attributes (like gender) from other features, the model can focus on making predictions without relying on sensitive information.
    
    Adversarial Training: In adversarial training, a separate neural network, known as the ""adversary,"" is trained to predict sensitive attributes (e.g., gender) from the model's hidden representations. The main model is then trained to minimize its predictability to the adversary, effectively reducing bias in the model's internal representations.
    
    Equalized Odds/Calibrated Equality: These techniques ensure that the model's predictions are equally accurate across different gender groups. The model is optimized not only for overall accuracy but also for fairness in predictions between different gender categories.
    
    Post-processing Techniques: After the model is trained, post-processing techniques can be applied to adjust the predictions and make them fairer. Techniques like re-ranking, threshold adjustment, or rejection sampling can help in achieving fairness.
    
    Counterfactual Fairness: Counterfactual fairness aims to make sure that the model's predictions would remain the same if the individual's gender were changed while keeping other relevant features unchanged.
    
    Regularization: By adding fairness-specific regularization terms to the training process, the model can be encouraged to avoid relying too heavily on gender-related features when making predictions.
    
    Sensitive Attribute Removal: In some cases, it might be appropriate to remove sensitive attributes like gender from the input data to prevent the model from making decisions based on such attributes.
    
    Bias-Aware Loss Functions: Designing loss functions that penalize biased predictions can guide the model to minimize bias during training.
    
    Human-in-the-loop Approaches: Involve human reviewers in the model's decision-making process to ensure fairness and override biased predictions.
    
    It's important to note that no single technique can completely eliminate bias, and the choice of a particular method depends on the specific use case, the level of bias, and ethical considerations. In some cases, a combination of multiple techniques might be necessary to achieve the desired level of fairness in AI models. Additionally, ongoing research in the field of fairness in AI continues to bring new techniques and best practices to address bias effectively."`,
    modelUpdateFrequency: `"The frequency of updating an AI model depends on several factors, including the nature of the AI application, the rate of data change, the model's performance, and the evolving needs of the users. There is no one-size-fits-all answer, but here are some considerations to determine the optimal update frequency:

    Data Drift: If the data distribution changes over time (data drift), the AI model's performance may degrade. Regular updates may be necessary to adapt the model to new patterns and trends in the data.
    
    Model Performance: Monitor the model's performance metrics regularly. If the performance declines below an acceptable threshold, it may be time to update the model.
    
    New Data Availability: If new data becomes available that can significantly improve the model's accuracy or fairness, consider updating the model to incorporate this new information.
    
    Feedback and User Needs: User feedback can provide valuable insights into areas of improvement or emerging requirements. Regularly engage with users to understand their needs and update the model accordingly.
    
    Changing Business or Domain Requirements: If the business or domain context evolves, the AI model may need to be updated to remain relevant and effective.
    
    Security and Vulnerabilities: Regular updates may be necessary to patch security vulnerabilities or address potential risks in the model.
    
    Ethical Considerations: If new ethical concerns or biases are identified, updates may be necessary to address these issues and ensure fairness.
    
    Advancements in AI Research: The field of AI is constantly evolving, and new research may lead to improved models or techniques. Regular updates can take advantage of these advancements.
    
    Computational Resources: The availability of computational resources may influence update frequency. If resources are limited, more infrequent updates might be necessary.
    
    Regulatory and Compliance Requirements: If there are changes in regulations or compliance standards that affect the AI model, updates may be necessary to stay in line with legal requirements.
    
    It's essential to strike a balance between updating the model frequently enough to maintain relevance and accuracy and not updating it too frequently, which may introduce instability or unnecessary computational costs. Establish a well-defined update schedule and consider setting up a version control system to manage different iterations of the model. Additionally, maintain proper documentation to keep track of the updates and the reasons behind them.
    
    Ultimately, the decision on how often to update the AI model should be based on a careful analysis of the factors mentioned above, and it may vary depending on the specific use case and the organization's resources and priorities."`,
    femaleTeamMembers: `"Building a gender-diverse team for AI model development requires proactive efforts and a commitment to creating an inclusive and welcoming environment. Here are some strategies to help you build a more gender-diverse team:

    Set Inclusive Hiring Goals: Define clear goals for gender diversity in your team and incorporate them into your hiring strategy. Make it a priority to attract and hire candidates from diverse gender backgrounds.
    
    Unbiased Job Descriptions: Review and revise job descriptions to ensure they use inclusive language and avoid gender-coded terms that might discourage certain candidates from applying.
    
    Expand Recruitment Channels: Utilize a variety of recruitment channels to reach a broader and more diverse pool of candidates. This could include attending diversity-focused job fairs, reaching out to professional networks, and using job boards that target diverse candidates.
    
    Diverse Interview Panels: Ensure that interview panels are also gender-diverse to reduce unconscious bias during the hiring process.
    
    Offer Flexibility: Consider offering flexible work arrangements to accommodate diverse candidates' needs and improve work-life balance.
    
    Provide Training on Diversity and Inclusion: Offer training for the existing team members to increase awareness of unconscious biases and foster a more inclusive and welcoming workplace culture.
    
    Internship and Mentorship Programs: Establish internship and mentorship programs to attract and support individuals from underrepresented genders, offering them opportunities to learn and grow in the field.
    
    Promote Gender Diversity from Within: Encourage and support gender diversity at all levels of the organization, including leadership positions. A diverse leadership team can help promote diversity throughout the organization.
    
    Support Professional Development: Provide training and resources to help team members grow in their roles, regardless of gender, to create a level playing field for career advancement.
    
    Employee Resource Groups: Create employee resource groups focused on gender diversity and inclusion, allowing team members to connect, share experiences, and provide support.
    
    Evaluate and Address Bias: Regularly assess and address potential biases in team dynamics, decision-making processes, and work assignments. Encourage open discussions about bias and take corrective actions when necessary.
    
    Engage in Outreach Activities: Engage with academic institutions and organizations that promote diversity in AI and tech fields to establish connections with potential candidates early in their careers.
    
    Promote a Supportive Culture: Foster a culture where all team members feel valued, heard, and respected, regardless of gender or background.
    
    Remember that building a gender-diverse team is an ongoing effort. It requires dedication, inclusivity, and a commitment to creating an environment where everyone can thrive and contribute to the development of AI models that serve a diverse user base and society as a whole."`,
    ethicalGuidelines: `"Developing AI models requires adherence to ethical guidelines to ensure that the technology is used responsibly, fairly, and with respect for human values. While different organizations and institutions may have their specific guidelines, some common ethical principles and guidelines include:

    Fairness and Avoiding Bias: AI systems should be designed and trained to avoid unfair bias and discrimination against individuals or groups based on factors such as race, gender, religion, ethnicity, or other protected characteristics.
    
    Transparency and Explainability: Developers should strive to make AI models transparent and understandable, providing explanations for their decisions and actions to build user trust and facilitate accountability.
    
    Privacy and Data Protection: AI models must respect user privacy, and data collected should be used responsibly and in compliance with relevant data protection laws and regulations.
    
    Informed Consent: Users should be fully informed about how their data will be used and have the option to provide informed consent for data collection and processing.
    
    Human-Centered Design: AI technologies should be developed with a focus on benefiting people and society, considering human values, needs, and well-being.
    
    Accountability and Responsibility: Developers and organizations should take responsibility for the AI systems they create and use, being accountable for their impact on users and society.
    
    Safety and Robustness: AI models should be designed to operate safely and reliably, with mechanisms in place to handle unforeseen circumstances and prevent harmful outcomes.
    
    Avoiding Malicious Use: Developers should work to prevent AI technology from being used for malicious purposes or to cause harm.
    
    Public Awareness and Education: Efforts should be made to increase public awareness and understanding of AI technology, its capabilities, and its limitations.
    
    Avoiding Concentration of Power: Measures should be taken to prevent the undue concentration of power and control in the hands of a few entities or organizations with regard to AI technology.
    
    Human Oversight and Control: Humans should retain the ability to override AI decisions when necessary, particularly in critical domains like healthcare, finance, and law enforcement.
    
    Continual Evaluation and Improvement: AI models should be continuously evaluated for biases, fairness, and ethical implications, with a commitment to improving the system based on feedback and lessons learned.
    
    Various organizations and industry bodies, such as the Institute of Electrical and Electronics Engineers (IEEE), the Association for Computing Machinery (ACM), the European Commission's AI Ethics Guidelines, and the Partnership on AI, have published specific ethical guidelines and principles for AI development. Adhering to these guidelines helps to ensure that AI technology is developed and used in a responsible, ethical, and socially beneficial manner."`
}

