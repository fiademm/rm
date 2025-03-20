import React, { useState } from "react";
import { motion } from "framer-motion";

const Articles = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const articles = [
    {
      id: 1,
      title: "RMF elects Leaders",
      description:
        "January 19, 2024, will forever be etched in the Resource Mobilisation Foundation (RMF) annals as a day of triumph, unity, and unwavering trust. In a momentous General Assembly, RMF members overwhelmingly elected their first-ever executive leadership after the foundation’s transformation from the Resource Mobilisation Sub-Committee (RMSC). The air was electric with excitement, and emotions ran high as members cast their votes, not just in favor of individuals but in recognition of selfless service, dedication, and an unyielding commitment to the foundation’s mission.\n\nIn a landslide victory, Ing.Dr. Desmond Aryee-Boi was elected President, with Mr. Albert Acolatse as Director of Operations, Mr. Emmanuel Kojo Mensah as General Secretary, and Dr. Edem Amengor as Treasurer. All founding members, these four stalwarts had poured their hearts, minds, and resources into building RMF from a passionate idea into a fully registered foundation. Their victory was not simply about titles; it was an emphatic endorsement of their tireless efforts in mobilizing attitudes, brains, cash, and resources from the 52 institutions (and still counting) RMF represents. \n\nRMF’s journey began as the Resource Mobilisation Sub-Committee (RMSC), one of the many committees formed under the NDC’s National Strategic Committee, which was established following the recommendations of the Prof. Kwesi Botchway Committee’s report. The transformation from RMSC to RMF was neither accidental nor abrupt but resulted from its members' visionary leadership, strategic planning, and relentless commitment. \n\nHon. Johnson Asiedu Nketia, the then General Secretary of the NDC, was instrumental in this transformation and played a pivotal role in forming the RMSC. His steadfast guidance, advice, and support saw the committee evolve into a foundation. In acknowledgement of his immense contributions, RMF has conferred the distinguished title of Founding Father and appointed him as Patron of the foundation for the next four years.\n\nAnother key architect of RMF’s development is Dr. William Ahadzie, Rector of the Ghana Institute of Social Democracy (GISD). From the early days of the RMSC, Dr. Ahadzie was instrumental, valuable, and unwavering in his support of the committee’s activities.\n\nIdentifying his exceptional service and commitment as a Founding Father, he has also been appointed Patron of RMF for a four-year tenure.\n\nAdditionally, RMF has dramatically benefited from the wise counsel and strategic advice of Rt. Hon. Alban S. K. Bagbin, Speaker of Ghana’s 8th and 9th Parliament. Knowing his invaluable contributions, RMF has appointed him as a Patron for the 2025-2028 cycle, ensuring his continued guidance in shaping the foundation’s future.\n\nRMF is not just an organization—it is a movement. Even after the elections, its membership continues to grow, with close to 100 new members actively involved. The overwhelming turnout on voting day, with 79 members present despite late arrivals, highlighted the foundation’s relevance and the passion of its members. These dedicated professionals hail from diverse sectors, including the Energy sector, Bank of Ghana, DVLA, NLA, Highways Authority, Water and Sanitation Engineering, and the Prisons Service, among others.\n\nCapt. Eric Dodoo chaired the election event and swore in the newly elected officers. Other notable figures in attendance included Dr. Cornelius Adabla and Mr. Oppong, who, despite being unwell, defied the odds to attend and support the foundation. \n\nOn the day of voting, the 79 members present, drawn from diverse professional and institutional backgrounds, did not hesitate to rally behind these committed leaders. Their choice was clear: reward those who had already demonstrated honest, hard work and pragmatic leadership before, during, and after the 2024 victorious elections. The newly elected officers, visibly moved by the overwhelming show of confidence, took turns expressing their heartfelt gratitude to the General Assembly. Their messages were filled with appreciation, humility, and a renewed sense of duty. 'This is not just a position; it is a call to serve even harder,' President Aryee-Boi affirmed, pledging to unveil a comprehensive roadmap for RMF’s future.\n\nAt its core, RMF is more than an organization—it is a force for change. Dedicated to ensuring the well-being and economic empowerment of Ghana’s middle-class, RMF is formidable in mobilizing resources, fostering national development, and driving the Reset Ghana agenda. With visionary leadership now officially in place, the foundation is poised to scale greater heights, delivering an impact that resonates across institutions, industries, and the entire nation.\n\nAs the dust settles on this landmark election, one thing is certain: RMF is marching boldly into the future, powered by passion, purpose, and an unbreakable resolve to make a difference. ",
      date: "January 19, 2024",
      images: [
        "https://aupshzcuqxjhnyoeydcw.supabase.co/storage/v1/object/sign/website/articles/1/A1-2.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ3ZWJzaXRlL2FydGljbGVzLzEvQTEtMi5wbmciLCJpYXQiOjE3NDI0NTgwNTIsImV4cCI6MTc3Mzk5NDA1Mn0.1EaUm1pLvs5JH2gEpSOr6NznL7mbcDHz3hIh8u2JDCY",
        "https://aupshzcuqxjhnyoeydcw.supabase.co/storage/v1/object/sign/website/articles/1/A1-1.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ3ZWJzaXRlL2FydGljbGVzLzEvQTEtMS5wbmciLCJpYXQiOjE3NDI0NTgwODEsImV4cCI6MTc3Mzk5NDA4MX0.iEqEMV9tI0EWUpuMo90t_xdXmbjZF-uRu5XzG2L9TNc",
        "https://aupshzcuqxjhnyoeydcw.supabase.co/storage/v1/object/sign/website/articles/1/A1-3.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ3ZWJzaXRlL2FydGljbGVzLzEvQTEtMy5wbmciLCJpYXQiOjE3NDI0NTgwOTAsImV4cCI6MTc3Mzk5NDA5MH0.gxepYe7sAkytmYI_tfzUlgfyG2lGM8el50kHNlzPlck",
        "https://aupshzcuqxjhnyoeydcw.supabase.co/storage/v1/object/sign/website/articles/1/A1-4.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ3ZWJzaXRlL2FydGljbGVzLzEvQTEtNC5wbmciLCJpYXQiOjE3NDI0NTgwOTgsImV4cCI6MTc3Mzk5NDA5OH0.zkw0Mx1RE9_BRttMELrU9NDqZ_5brERySXyJ5NgU3Co",
        "https://aupshzcuqxjhnyoeydcw.supabase.co/storage/v1/object/sign/website/articles/1/A1-5.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ3ZWJzaXRlL2FydGljbGVzLzEvQTEtNS5wbmciLCJpYXQiOjE3NDI0NTgxMDcsImV4cCI6MTc3Mzk5NDEwN30.bx4VGkdvwRN2tRzDQjzxA_Di7lXv0UUWt5RlXP9hIsg",
        "https://aupshzcuqxjhnyoeydcw.supabase.co/storage/v1/object/sign/website/articles/1/A1-6.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ3ZWJzaXRlL2FydGljbGVzLzEvQTEtNi5wbmciLCJpYXQiOjE3NDI0NTgxMTYsImV4cCI6MTc3Mzk5NDExNn0.WsafWvehsc8pVDs0fURRDWtsNKTZTCfL_IHA87lQ2IA",
        "https://aupshzcuqxjhnyoeydcw.supabase.co/storage/v1/object/sign/website/articles/1/A1-7.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ3ZWJzaXRlL2FydGljbGVzLzEvQTEtNy5wbmciLCJpYXQiOjE3NDI0NTgxMjQsImV4cCI6MTc3Mzk5NDEyNH0.4N_aEiCy2819FjPM3RTgdlg7Xel4ncvlBOx9KdK7_o0",
        "https://aupshzcuqxjhnyoeydcw.supabase.co/storage/v1/object/sign/website/articles/1/A1-8.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ3ZWJzaXRlL2FydGljbGVzLzEvQTEtOC5wbmciLCJpYXQiOjE3NDI0NTgxMzQsImV4cCI6MTc3Mzk5NDEzNH0.HF9lG-j1J2FCxProTiOP8ysylRmxGbARJW2WRcVFGh8",
      ],
    },
    {
      id: 2,
      title: "RMF-Intel meets ORAL",
      fullTitle: "RMF-Intel Meets ORAL Office Over Urgent Intelligence on National Revenue Loss",
      description: "In a high-level engagement at the Operation Recover All Loot (ORAL) Office, the RMF-Intel team, led by its President and Director, Ing. Dr. Desmond Aryee-Boi, met with ORAL representative Lawyer Martin Kpebu on Tuesday February 4, 2025 to deliver critical intelligence aimed at saving Ghana billions of cedis in lost revenue.\n\nThe visit, which was initially scheduled for a later date, was expedited due to an urgent intelligence tip-off from a whistle-blower within one of the country’s key revenue-generating institutions. The information, deemed of national interest, required immediate transmission to H.E. President John Dramani Mahama through ORAL for swift action.\n\nDr. Aryee-Boi briefed Lawyer Kpebu on the RMF-Intel's investigative operations, highlighting their extensive network of intelligence operatives drawn from our members in 52 institutions nationwide. He underscored RMF's origins, tracing back to the Resource Mobilization Sub-Committee under the NDC’s 2021 National Strategic Committee, where Chairman Johnson Asiedu Nketiah, then the General Secretary, played a pivotal role in its formation. Now operating as the Resource Mobilization Foundation (RMF), the organization remains dedicated to fighting corruption, economic wastage and inefficiencies, and financial sabotage.\n\nDuring the meeting, Dr. Aryee-Boi elaborated on RMF-Intel’s past intelligence-led operations, highlighting their role in the surveillance and interception of a truckload containing 176 stolen electrical pylon cables that had been donated by India, geared towards full electricity penetration in the country. He also detailed the intelligence-gathering efforts that led to the successful raid of illegally acquired properties belonging to a key member of the previous government, which resulted in the recovery of seized vehicles and an undisclosed amount of money, among others.\n\nHe further disclosed that many RMF members have faced victimization, vilification, abuse, and stagnation (demotion, or lack of adequate promotion) and exclusion from government roles due to their perceived political affiliations, yet they remain committed to serving the nation’s interests. He assured ORAL that more intelligence reports will be provided in subsequent visits and appealed for enhanced collaboration, logistical support, and operational backing to fortify the fight against economic sabotage.\n\nLawyer Martin Kpebu, on behalf of ORAL, expressed deep appreciation for the RMF-Intel team’s efforts. He assured them that the intelligence submitted would be relayed to the appropriate authorities for urgent action. Commending their dedication and patriotism, he reaffirmed ORAL’s commitment to working closely with RMF-Intel to track and recover all looted state assets, belonging to the good people of Ghana.\n\nPresent at the meeting alongside Dr. Aryee-Boi were Larry Acheampong (PA to the RMF President), Dr. Henry Ayi Addo, Nii Kpakpo Pappoe, Moiloom Isaiah Biimokbikua and Nii Armah Ayitey.\n\nRMF-Intel, as the Security and Intelligence arm of Res RMF, continues to co-opt among our members experts in security and intelligence to bolster national efforts in asset recovery and economic protection. With the Reset Agenda in full swing, the taskforce remains steadfast in preventing nation-wreckers from undermining Ghana’s financial stability that will negatively impact on the “transformational” Reset Agenda.",
      date: "February 5, 2025",
      images: [
        "https://aupshzcuqxjhnyoeydcw.supabase.co/storage/v1/object/sign/website/articles/2/A2-1.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ3ZWJzaXRlL2FydGljbGVzLzIvQTItMS5wbmciLCJpYXQiOjE3NDI0NTc0NjcsImV4cCI6MTc3Mzk5MzQ2N30.yH-bQVEoySpX4Bd5a5xJjckCwgXubkcbihi4I7ud8oQ",
        "https://aupshzcuqxjhnyoeydcw.supabase.co/storage/v1/object/sign/website/articles/2/A2-2.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ3ZWJzaXRlL2FydGljbGVzLzIvQTItMi5wbmciLCJpYXQiOjE3NDI0NTc0OTEsImV4cCI6MTc3Mzk5MzQ5MX0.g-o5YXnas5Ax1pp_VDiRXRbH1kiO4aW7SiHTua4RfrE",
        "https://aupshzcuqxjhnyoeydcw.supabase.co/storage/v1/object/sign/website/articles/2/A2-3.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ3ZWJzaXRlL2FydGljbGVzLzIvQTItMy5wbmciLCJpYXQiOjE3NDI0NTc1MDUsImV4cCI6MTc3Mzk5MzUwNX0.kK5VV4kaFol0zgwUTu3jPTx0YrN20ZJwnCTP03Wh_wI",
        "https://aupshzcuqxjhnyoeydcw.supabase.co/storage/v1/object/sign/website/articles/2/A2-4.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ3ZWJzaXRlL2FydGljbGVzLzIvQTItNC5wbmciLCJpYXQiOjE3NDI0NTc1MTksImV4cCI6MTc3Mzk5MzUxOX0.L5Og81qs93zhx9gTGrp2nvkrsjuBW_-w1IrprCB3VzU",
      ],
    },
    {
      id: 3,
      title: "RMF Leadership engages new DVLA CEO",
      fullTitle: "RMF Leadership engages new DVLA CEO in Strategic Briefing for a Dynamic Reset",
      description:
        "In a high-powered meeting on Tuesday, February 4, 2025, the President of the Resource Mobilization Foundation (RMF) and the Director of Operations met with the newly appointed Chief Executive Officer of the Driver and Vehicle Licensing Authority (DVLA), Mr. Julius Neequaye Kotey. The purpose? A first-hand, no-holds-barred briefing to set the stage for a transformational era at the DVLA.\n\nThis engagement, which had Hon. Nii Kotey Ashie, the Member of Parliament of Odododiodio attending, followed an earlier consultative session between RMF leadership and representatives of the DVLA Subgroup members of the Foundation. Armed with crucial insights, RMF provided the CEO with a deep dive into key developments within the institution —some of which had been buried under layers of bureaucracy.\n\nHeld in an atmosphere of camaraderie and mutual respect, the meeting featured revelations from the grapevine — insider knowledge that would serve as a powerful compass for swift, informed decision-making in line with the reset agenda and the collective vision of creating the Ghana we want.\n\nOne of the most striking revelations centered on how the previous leadership allegedly weaponized the system to intimidate, sideline, and demoralize staff perceived to be NDC sympathizers. With a commitment to fairness and productivity, the new CEO signaled his readiness to correct these injustices and foster a more inclusive and high-performing work environment.\n\nMore than just addressing past injustices, the briefing zeroed in on inner-caucus dynamics and the need for strategic interventions, including rapid audits and assessments to streamline operations and optimize revenue generation. The conversation also explored explosive growth strategies, job creation initiatives, and enhanced service delivery to position the DVLA as a key driver of the 24-hour economy.\n\nBy the close of the session, it was evident that the meeting had exceeded expectations. A visibly impressed Mr. Kotey expressed his appreciation, candidly admitting that he had not received such a comprehensive and forward-looking briefing since assuming office.\n\nWith this high-impact dialogue setting the tone, all eyes are on DVLA as it embarks on a new chapter—one fueled by vision, strategy, and a clear commitment to national progress.",
      date: "February 7, 2025",
      images: [
        "https://aupshzcuqxjhnyoeydcw.supabase.co/storage/v1/object/sign/website/articles/3/A3.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ3ZWJzaXRlL2FydGljbGVzLzMvQTMucG5nIiwiaWF0IjoxNzQyNDU3MjMxLCJleHAiOjE3NzM5OTMyMzF9.ukkc3HlYGUpuJRQsFhtCdYR6eAMrdnwHSThUz-8ScYs",
      ],
    },
    {
      id: 4,
      title: "RMF-Intel Unit Formed",
      fullTitle: "The RMF-Intel Unit: Guardians of Ghana's Economic Fortress",
      description:
        "On Wednesday, February 12, 2025, the Resource Mobilisation Foundation (RMF) made history at its Executive Meeting by introducing a revolutionary force in the fight against economic sabotage and organized crime—the RMF-Intel Unit. It was a defining moment that signalled the birth of a highly specialized team committed to safeguarding Ghana’s economy from the dark hands of theft, fraud, and environmental destruction. Dr. Henry Nii Ayi Addo, the Unit’s leader, stood before the gathering, delivering a detailed report on their relentless activities since inception—a gripping tale of courage, sacrifice, and intelligence-led operations that have already saved the nation from hemorrhaging billions of Ghana Cedis.\n\nThe meeting also saw Director of Operations, Albert Acolatse, recounting the chilling background that led to the formation of RMF-Intel, unveiling the grim reality of how Ghana’s economic backbone had been under siege by criminal syndicates. From stolen electrical cables crippling infrastructure to illicit gold smuggling operations at Kotoka International Airport, the need for a specialized unit had never been more urgent.\n\nImagine an entire city plunged into darkness—hospitals unable to power life-saving machines, industries grinding to a halt, and homes left vulnerable. This was the devastating impact of an underground network of criminals siphoning high-voltage electrical cables, selling them for a fraction of their worth, while the nation bled. The RMF-Intel Unit worked tirelessly to intercept a truck load of the electrical pylons and provided intelligence that eventually caused the truck to be impounded and taken to a secured bonded warehouse for further investigations.\n\nIn a dramatic evening raid, the RMF-Intel Unit provided reliable intelligence that led to security forces storming a criminal hideout in what became known as the Laud Commey Operation. Cars and undisclosed amount of cash were seized during the operation and sent to the National Security offices.\n\nIn another development, Gold—Ghana’s precious lifeline—was being smuggled out of the country right under the nose of unsuspecting authorities. But not on RMF-Intel’s watch. Acting on high-level intelligence, the unit collaborated with airport security and intercepted a multi-million-dollar shipment of gold bars destined for illicit international trade. The daring move prevented what would have been an unrecoverable loss to the state, reinforcing the team’s reputation as a formidable force in national economic protection.\n\nThe RMF-Intel Unit's achievements are not just in high-stakes operations but also in strategic intelligence reporting. A confidential report presented to the Office of Operation Recover All Loot (ORAL) uncovered systemic loopholes costing Ghana billions of Cedis in monthly revenue leakage. This was not just another document—it was a blueprint for securing Ghana’s economic stability, a testament to how intelligence-driven governance can shape national prosperity.\n\nFor four days, the RMF-Intel Unit has been engaged in Ga South, coordinating with local authorities to “Halt The Loot” in illegal quarry operations that have devastated the environment. This is only the beginning. Soon after assuming control, the unit will engage with the Environmental Protection Agency (EPA) and the Ministry of Science, Technology, and Environment, ensuring that Ghana’s natural wealth is protected for future generations.\n\nThe RMF-Intel Unit was not born in isolation. It evolved as a specialized wing of the RMF, recognizing the urgent need to complement National Security and other security apparatus in safeguarding Ghana’s economic interests. In an era of increasingly sophisticated financial crimes, the Reset Ghana Agenda demands a new level of vigilance, intelligence, and proactive enforcement. RMF-Intel is stepping up to fill that gap. The RMF-Intel Unit will be formally out-doored during a highly anticipated General Meeting on Sunday, February 16, 2025. This official unveiling marks a significant milestone in RMF’s commitment to national security and economic protection.\n\nUnder the framework of the 24-hour economy, people-centered security is not an option—it is a necessity. If businesses are to operate round the clock, if investors are to feel safe bringing their capital into Ghana, if citizens are to enjoy uninterrupted services, then economic security must be uncompromising. RMF-Intel is poised to be the guardian of Ghana’s 24-hour economy, ensuring that crime, corruption, and environmental degradation do not undermine national progress.\n\nGhana stands at a crossroads. The path to economic prosperity is within reach, but only if bold steps are taken to secure the nation’s assets, protect its industries, and dismantle the underground networks that siphon wealth away from the people. The RMF-Intel Unit is here to stay, committed to ensuring that every resource mobilized for Ghana’s development serves its rightful purpose. The battle against economic sabotage has begun—and Ghana is winning!",
      date: "February 14, 2025",
      images: [
        "https://aupshzcuqxjhnyoeydcw.supabase.co/storage/v1/object/sign/website/articles/4/A4-1.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ3ZWJzaXRlL2FydGljbGVzLzQvQTQtMS5wbmciLCJpYXQiOjE3NDI0NTcyNTYsImV4cCI6MTc3Mzk5MzI1Nn0.E1yfI9zvG3g-_zPqYm9VAXSTGu_uFCM7TupTkDJ4lhw",
        "https://aupshzcuqxjhnyoeydcw.supabase.co/storage/v1/object/sign/website/articles/4/A4-2.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ3ZWJzaXRlL2FydGljbGVzLzQvQTQtMi5wbmciLCJpYXQiOjE3NDI0NTcyODgsImV4cCI6MTc3Mzk5MzI4OH0.HhBcbzWW7lGqEoG9-uCjxFuDt0O8RxPv635ravw8zyA",
        "https://aupshzcuqxjhnyoeydcw.supabase.co/storage/v1/object/sign/website/articles/4/A4-3.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ3ZWJzaXRlL2FydGljbGVzLzQvQTQtMy5wbmciLCJpYXQiOjE3NDI0NTczMDIsImV4cCI6MTc3Mzk5MzMwMn0.mGGQKslW2h6hV-NFcoOP3aDljgkym7VeNlP6iHbCdEI",
      ],
    },
    {
      id: 5,
      title: "RMF-Intel Unit Inaugurated",
      fullTitle: "RMF Intel Unit Inaugurated to Fight Corruption",
      description:
        "In a colorful and momentous ceremony, the RMF Intel Unit was formally inaugurated during a General Assembly meeting of the Resource Mobilization Foundation (RMF), attended by 80 members drawn from various institutions across the nation. The event, charged with a sense of purpose and national duty, marked a significant step in RMF’s commitment to intelligence gathering, whistle-blowing, and strategic collaboration with security agencies to protect Ghana’s national interests.\n\nThe Director of Operations, Mr. Albert Acolatse, set the tone for the occasion by providing a historical overview of the RMF Intel Unit and its critical role in supporting the NDC government’s Reset Ghana agenda. He emphasized that while RMF has always had access to high-level intelligence through whistle-blowers within institutions, the establishment of a dedicated intelligence unit would allow the Foundation to go beyond passive information gathering to actively uncover critical security and economic threats. He stressed that Ghana’s governance and economic landscape needed urgent resetting, given the deep-seated corruption and malpractices inherited from the previous administration.\n\nSpeaking on behalf of the newly inaugurated taskforce, Unit Leader Dr. Henry Nii Ayi Addo expressed gratitude to RMF for the trust placed in them and vowed to uphold the highest standards of integrity and diligence in their operations. He cited some of the unit’s successful operations thus far, including the high-stakes interception of stolen pylon cables, which, through painstaking intelligence and surveillance, led to the impoundment of a truckload of stolen materials in collaboration with the police. This single operation, he noted, had saved the nation billions of Ghana Cedis that would have otherwise been lost to organized crime.\n\nFor his part, RMF President Dr. Desmond Aryee-Boi expressed his full confidence in the newly inaugurated unit, emphasizing that their work is not done in isolation but in close collaboration with the police, National Security, and other key security services. He commended the unit’s commitment and efficiency thus far and pledged RMF’s unwavering support to ensure their success. “The need for this unit cannot be overstated,” he remarked, highlighting the alarming level of systemic corruption and criminal activity that must be halted.\n\nDr. Aryee-Boi further clarified that while the unit’s intelligence efforts contribute to Operation Recover All Loot (ORAL), much of their work aligns with Operation Halt All Loot (OHAL), a dedicated campaign to combat economic sabotage, environmental crimes, and financial malpractice. In his commissioning statement, he challenged the unit to live up to its mandate:\n“Go out there and make us proud by helping to save our beloved country from the rot. There is so much rot in the system, so we trust you will not add to the rot. We empower you to do good and forbid you to do bad.”\nWith these powerful words of duty and responsibility, he sent the RMF Intel Unit forth with a mission to serve Ghana with integrity, vigilance, and unwavering patriotism.\n\nThe unit will report directly to Col. Eric Dodoo (Rtd.), who also serves as RMF’s Deputy Director of Operations. With his vast experience and military expertise, he is expected to provide strategic guidance to ensure that the intelligence-gathering and enforcement operations remain professional, effective, and within the framework of National Security Protocols.\n\nAs the ceremony concluded, there was a renewed sense of purpose and commitment among RMF members, knowing that this new Intel Unit would be a key instrument in safeguarding national interests, exposing corruption, and strengthening security efforts under the Reset Ghana agenda.",
      date: "February 17, 2025",
      images: [
        "https://aupshzcuqxjhnyoeydcw.supabase.co/storage/v1/object/sign/website/articles/5/A5.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ3ZWJzaXRlL2FydGljbGVzLzUvQTUucG5nIiwiaWF0IjoxNzQyNDU3NjEzLCJleHAiOjE3NzM5OTM2MTN9.eLiBSmXWpoyxsHwzGHrqJXuKdLUzWkE2giExtMn9xkM",
        "https://aupshzcuqxjhnyoeydcw.supabase.co/storage/v1/object/sign/website/articles/5/A5-2.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ3ZWJzaXRlL2FydGljbGVzLzUvQTUtMi5wbmciLCJpYXQiOjE3NDI0NTc3MTIsImV4cCI6MTc3Mzk5MzcxMn0.TPi1r3rqAF8rNfdRzzXe3CSn2iD-DcTBH0ViRvSI0QE",
        "https://aupshzcuqxjhnyoeydcw.supabase.co/storage/v1/object/sign/website/articles/5/A5-3.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ3ZWJzaXRlL2FydGljbGVzLzUvQTUtMy5wbmciLCJpYXQiOjE3NDI0NTc2NDEsImV4cCI6MTc3Mzk5MzY0MX0.NOD1a9Nh_9LUwY9CPIS_3w09360T9v6PKZ3Ei4q5ALs",
        "https://aupshzcuqxjhnyoeydcw.supabase.co/storage/v1/object/sign/website/articles/5/A5-4.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ3ZWJzaXRlL2FydGljbGVzLzUvQTUtNC5wbmciLCJpYXQiOjE3NDI0NTc2NTEsImV4cCI6MTc3Mzk5MzY1MX0.RWpF71S7vg4bZSaAk_X8Aql7LCZsB-k8uwgt3YPYHkU",
        "https://aupshzcuqxjhnyoeydcw.supabase.co/storage/v1/object/sign/website/articles/5/A5-5.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ3ZWJzaXRlL2FydGljbGVzLzUvQTUtNS5wbmciLCJpYXQiOjE3NDI0NTc2NjEsImV4cCI6MTc3Mzk5MzY2MX0.lR8m-2_2BhagdbKXlJwCdnOvRZujBHL0C8EV3QTaLw4",
      ],
    },
    {
      id: 6,
      title: "Hope restored at Dome Market",
      fullTitle: "Hope Restored at Dome Market: RMF, MP, and Deputy Minister Bring Relief to Market Women",
      description:
        "Dome Market was alive with excitement and gratitude on Friday, March 14, 2025, as market women, government officials, and the Resource Mobilization Foundation (RMF) gathered for a historic event that marked the dawn of a new era. Following years of struggle, uncertainty, and distress, the hardworking women of Dome Market could finally breathe a sigh of relief. The protracted dispute that had threatened their very livelihood had been successfully resolved, paving the way for a brighter future under President John Dramani Mahama’s Reset Agenda.\n\nThe event was a follow-up to a thank-you tour led by RMF and the market women to key government figures, including the Minister for Local Government, Chieftaincy, and Religious Affairs, Hon. Ahmed Ibrahim. Moved by their plight and the efforts of RMF, the Minister dispatched his Deputy, Hon. Rita Naa Odoley Sowah, to join the Member of Parliament for Dome-Kwabenya, Hon. Faustina Elikplim Akurugu, on a fact-finding mission to assess the situation firsthand.\n\nAt exactly 10:30 AM, the much-anticipated gathering commenced at a designated location in the heart of the market. The Director of Operations for RMF, Mr. Albert Acolotse, set the tone for the meeting with a rousing address. He reminded all present that President Mahama and his Vice, Prof. Naana Jane Opoku-Agyemang, have the interests of Ghanaians at heart, working tirelessly to reset Ghana. He emphasized that the visit was to reaffirm the government's commitment to protecting market women and ensuring their businesses thrive under the Reset Agenda and the 24-Hour Economy initiative.\n\nThe President of RMF, Ing.Dr. Desmond O. Aryee-Boi took the floor and gave an emotional speech that struck a deep chord with the audience. Recalling his mother’s struggles as a market woman, he revealed that he intimately understood the pain and hardships the women had endured over the past eight years. It was this personal connection that fueled his determination to intervene and ensure that their suffering came to an end. With the 24-Hour Economy and the upcoming Women’s Bank under President Mahama’s government, he assured them that brighter days were ahead. The vision is clear: Dome Market will soon be a 24-hour business hub, where market women will no longer have to worry about being deprived of their stalls or their livelihoods.\n\nHon. Faustina Elikplim Akurugu, the MP for Dome-Kwabenya, took the opportunity to extend belated International Women’s Day wishes to the traders. She revealed that she had raised their concerns in Parliament on that very day, advocating for their rights and protection. She detailed the behind-the-scenes efforts she had made—meeting with market leaders, speaking with the Regional Minister and the Minister for Local Government, and ultimately ensuring that any dubious contract threatening the market was halted. Dome Market, she reassured them, is a priority for the NDC leadership and the government. In a touching moment, she revealed that her own mother had been a market trader, and through her toil, she had risen to become a Member of Parliament. “I understand your struggles,” she said, “and I will fight for you.” She assured the women that plans for a modernized Dome Market were in motion and that their future was secure.\n\nDeputy Minister Hon. Rita Naa Odoley Sowah delivered a passionate address, thanking God for bringing President Mahama back at the right time to champion the cause of the vulnerable. She expressed her deep empathy for the struggles the market women had faced and commended RMF for their relentless advocacy on their behalf. Stressing the importance of unity among the traders, she urged them to stay organized and ensure that their rights were protected. She reminded them that President Mahama has always championed women’s causes, as evidenced by his historic decision to appoint Ghana’s first female Vice President.\n\nHon. Sowah, a former Municipal Chief Executive with a strong track record of market infrastructure development, assured the women that the modern Dome Market was not just a promise but a certainty. She advised them to be vigilant during the registration process to prevent outsiders from taking advantage of the initiative. She further highlighted how the 24-Hour Economy would empower them financially, with the Women’s Bank providing flexible and accessible loans to expand their businesses.\n\nFollowing the discussions, the team embarked on a tour of the market, taking time to observe the conditions and interact with the traders. Emotions ran high as the women shared their personal struggles and aspirations for the future. Madam Abena Sebiye, the Queen Mother of Dome Market, spoke on behalf of her colleagues, recounting the many difficulties they had faced over the years. With tears of gratitude in her eyes, she pleaded with the MP and Deputy Minister to continue supporting them, ensuring that their voices were always heard.\n\nThe event concluded with renewed hope and excitement among the traders, who now look forward to a future where their businesses will flourish without fear of displacement or hardship. With RMF’s commitment, government intervention, and the resilience of the market women themselves, Dome Market is poised to become a symbol of economic empowerment and transformation under President Mahama’s Reset Agenda.\n\nAs the sun set over Dome Market, one thing was clear—the days of suffering were over, and a new dawn had arrived for the hardworking women who keep the market alive.",
      date: "March 17, 2025",
      images: [
        "https://aupshzcuqxjhnyoeydcw.supabase.co/storage/v1/object/sign/website/articles/6/A6-1.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ3ZWJzaXRlL2FydGljbGVzLzYvQTYtMS5wbmciLCJpYXQiOjE3NDI0NTY3MzAsImV4cCI6MTc3Mzk5MjczMH0.EXiNf5wEMmxz1OMD7XnCXdkvJDitYuFmIzSnDyMi8EM",
        "https://aupshzcuqxjhnyoeydcw.supabase.co/storage/v1/object/sign/website/articles/6/A6-2.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ3ZWJzaXRlL2FydGljbGVzLzYvQTYtMi5wbmciLCJpYXQiOjE3NDI0NTY3NjcsImV4cCI6MTc3Mzk5Mjc2N30.-IibKl_oPJpxwIpCk0WdlcWQBLhYaqkZLCoM0jSOFHQ",
        "https://aupshzcuqxjhnyoeydcw.supabase.co/storage/v1/object/sign/website/articles/6/A6-3.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ3ZWJzaXRlL2FydGljbGVzLzYvQTYtMy5wbmciLCJpYXQiOjE3NDI0NTY3ODEsImV4cCI6MTc3Mzk5Mjc4MX0.x4qYPQou1E0xGGy97XcSY7f6mknA9KLkvlrIeeonP7o",
        "https://aupshzcuqxjhnyoeydcw.supabase.co/storage/v1/object/sign/website/articles/6/A6-4.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ3ZWJzaXRlL2FydGljbGVzLzYvQTYtNC5wbmciLCJpYXQiOjE3NDI0NTY3OTgsImV4cCI6MTc3Mzk5Mjc5OH0.PISQXF7dezJ6j4De68dscWFB-kto4R3Vzkbf1jjbnGI",
      ],
    },
  ];

  const openModal = (article) => {
    setSelectedArticle(article);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedArticle(null);
  };

  return (
    <>
      <motion.div
        className="articles-container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="articles-section-title">Articles of Interest</h2>
        <p className="articles-section-subtitle">
          Explore our latest articles and insights.
        </p>

        <div className="articles-horizontal-scroll-container">
          {articles.map((article) => (
            <motion.div
              key={article.id}
              className="articles-article-card"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={article.images[0]}
                alt={article.title}
                className="articles-article-image"
              />
              <h3 className="articles-article-title">{article.title}</h3>
              <p className="articles-article-date">{article.date}</p>
              <p className="articles-article-description">
                {article.description}
              </p>
              <button
                className="articles-view-article-button"
                onClick={() => openModal(article)}
              >
                View Article
              </button>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        {isModalOpen && selectedArticle && (
          <div className="articles-modal-overlay" onClick={closeModal}>
            <motion.div
              className="articles-modal-content"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="articles-slideshow-container">
                {selectedArticle.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className="articles-slideshow-image"
                  />
                ))}
              </div>
              <h3 className="articles-modal-article-title">
                {selectedArticle.title}
              </h3>
              <p className="articles-modal-article-date">
                {selectedArticle.date}
              </p>
              <p className="articles-modal-article-description">
                {selectedArticle.description}
              </p>
              <button
                className="articles-close-modal-button"
                onClick={closeModal}
              >
                Close
              </button>
            </motion.div>
          </div>
        )}
      </motion.div>
    </>
  );
};

export default Articles;
