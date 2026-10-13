const searchInput = document.getElementById("searchInput");
let myMain = document.querySelector("main");
document.querySelectorAll("th ,td").forEach(el => el.style.width="50%");
document.querySelectorAll("table").forEach(el => el.style.width="100%");

let vocabList = [
  { word: "Acknowledge", meaning: "လက်ခံအသိအမှတ်ပြုသည်" ,
    collocation: "Acknowledge the importance of education",
    dailyPhrase: "I acknowledge the support of my family in achieving my goals."

  },
  { word: "Advocate", meaning: "ထောက်ခံအားပေးသည်" ,
collocation: "Advocate for equal rights and opportunities",
dailyPhrase: "She is a passionate advocate for environmental conservation."
  },
  { word: "Co-found", meaning: "ပူးတွဲတည်ထောင်သည်" 
    ,collocation: "Co-found a tech startup with a partner",
    dailyPhrase: "They co-founded a successful nonprofit organization to address social issues."
  },
  { word: "Acknowledge,Recognize,Admit that", meaning:"လက်ခံရရှိသည်" ,
    collocation: "Acknowledge the contributions of team members",
    dailyPhrase: "I acknowledge the efforts of my colleagues in completing the project."
  },
  { word: "Allocate,Assign,Set Aside",meaning: "ခွဲ ေဝချထားသည်",
    collocation: "Allocate resources for research and development",
    dailyPhrase: "The company allocated funds for research and development."
   },
  { word: "Acquire,Obtain,Gain,Acquisition", meaning: "လက်ခံသည် / ဝယ်ယူသည်",
    collocation: "Acquire new skills through training programs",
    dailyPhrase: "He acquired a vast collection of rare books over the years."
  },
  { word: "Adequate,Sufficient,Enough",meaning:"လုံ ေလာက်သည်" ,
    collocation: "Ensure adequate preparation for the exam",
    dailyPhrase: "The hotel provides adequate facilities for its guests."
   },
{word :   "Adjacent,Next to,Beside",meaning:"ေဘးကပ်လျက်ရှိသည်" ,
    collocation: "The house is adjacent to the school",
    dailyPhrase: "We live in an adjacent neighborhood."
 },
{word :   "Amend,Change,Revise",meaning:"ပြင်ဆင်သည်" ,
    collocation: "Amend the contract to include new terms",
    dailyPhrase: "The company decided to amend its policies to improve employee satisfaction."
 },
{word :  "Analyze,Examine,Study",meaning:"ခွဲခြမ်းစိတ်ဖြာသည်" ,
    collocation: "Analyze the data to identify trends",
    dailyPhrase: "Students are encouraged to analyze texts critically."
 },
{word : "Apparent,Clear,Obvious",meaning:"သိသာထင်ရှားသည်" ,
    collocation: "The solution to the problem was apparent after careful consideration",
    dailyPhrase: "It was apparent that she was upset."},
{word : "Appropriate,Suitable,Proper",meaning:"သင်ံ့ေတာ်သည်" ,
  collocation: "Choose appropriate attire for the event",
  dailyPhrase: "It is important to dress appropriately for the occasion."
 },
{word : "Approxmiate,Rough,Near,About",meaning:"ခန့်မှန်းသည်",
  collocation: "The approximate cost of the project is $10,000",
  dailyPhrase: "The approximate time of arrival is 3 PM."
  },
{word : "Assess,Evaluate,Judge,Appraisal,Assessment",meaning:"အကဲဖြတ်သည်" ,
  collocation: "Assess the effectiveness of the new policy",
  dailyPhrase: "The teacher will assess the students' understanding through a quiz."
 },
{word : "Assign,Help,Aid",meaning:"ကူညီသည်" ,
  collocation: "Assign the task to the team",
  dailyPhrase: "The manager will help the employee with the project."
 },
{word : "Assist,Allocate,Give",meaning:"တာဝန် ေပးအပ်သည်" ,
  collocation: "Assist the team in completing the project",
  dailyPhrase: "The organization will allocate funds to assist those in need."
 },
{word : "Assure,Presume,Promise",meaning:"အာမခံသည်" ,
  collocation: "Assure the client of timely delivery",
  dailyPhrase: "The company will promise to deliver the product on time."
 },
{word : "Attach,Join,Fasten",meaning:"တွဲကပ်ထာသည်" ,
  collocation: "Attach the document to the email",
  dailyPhrase: "Please attach the file to the message."
 },
{word : "Expect,Anticipate,Foresee",meaning:"ကြိုတင် ေမျှာ်လင့်သည်",
  collocation: "Expect a positive outcome from the project",
  dailyPhrase: "We anticipate a large turnout for the event."
  },
{word: "Attain,Achieve,Reach",meaning:"ေအာင်မြင်သည်",
  collocation: "Attain the desired level of proficiency",
  dailyPhrase: "She worked hard to attain her goals."
},
{word: "Attribute,Feature,Quality",meaning:"အရည်အချင်း",
  collocation: "Attribute the success to teamwork",
  dailyPhrase: "The attribute of the product is its durability."
},
{word: "Access,Entry,Reach",meaning:"ဝင်ခွင့်ရရှိသည်",
  collocation: "Access the database",
  dailyPhrase: "You need permission to access this file."

},
{word: "Avaiable,Ready,Free",meaning:"အားလပ်သည်",
  collocation: "The product is available for purchase",
  dailyPhrase: "The store is ready to serve customers."
},
{word: "Automate,Mechanize",meaning:"အလို ေလျာက်အလုပ်လုပ်သည်",
  collocation: "Automate the production process",
  dailyPhrase: "The company plans to automate its operations."
},
{word: "Compatible,Matching",meaning:"တွဲဖက်သုံးနိုင်သည်",
  collocation: "The software is compatible with the operating system",
  dailyPhrase: "Make sure your device is compatible with the new app."
},
{word: "Compile,Gather,Collect",meaning:"စုစည်းသည်",
  collocation: "Compile a list of required items",
  dailyPhrase: "Gather information from various sources."
},
{word: "Complex,Complicated",meaning:"ရူပ် ေထွးသည်",
  collocation: "The project is complex and requires careful planning",
  dailyPhrase: "Don't let the complexity of the task overwhelm you."
},
{word: "Component,Part,Element",meaning:"အစိတ်အပိုင်း",
  collocation: "The engine is a crucial component of the vehicle",
  dailyPhrase: "Each component of the system must function properly."
},
{word: "Compute,Calculate",meaning:"တွက်ချက်သည်",
  collocation: "Compute the total cost of the project",
  dailyPhrase: "Use a calculator to compute the answer."
},
{word: "Commit,Dedicate,promise",meaning:"ကတိပြုသည်",
  collocation: "Commit to the cause",
  dailyPhrase: "I commit to doing my best."
},
{word: "Compensate,Payback,Repayment",meaning:"ေလျာ် ေကြး ေပးသည်",
  collocation: "Compensate the employee for the overtime work",
  dailyPhrase: "The company will compensate you for any damages."
},
{word: "Comprehensive,Full,Thorough",meaning:"ပြည့်စုံကျယ်ပြန့်သည်",
  collocation: "Provide a comprehensive overview of the topic",
  dailyPhrase: "Make sure to consider all aspects of the problem."
},
{word: "Conduct,Carry out",meaning:"လုပ် ေဆာင်သည်",
  collocation: "Conduct a meeting",
  dailyPhrase: "The teacher will conduct the experiment."
},
{word: "Consequence,Result,Advice",meaning:"အကျိူးပြုသည်",
  collocation: "The consequence of his actions was severe",
  dailyPhrase: "Consider the consequences before making a decision."
},
{word: "Consistent,Steady,Stable",meaning:"တသတ်မတ်တည်းဖြစ်သည်",
  collocation: "Maintain a consistent routine",
  dailyPhrase: "Consistency is key to success."
},
{word: "Consult,Seek advice,Edcuation Counselor,Academic Advisor",meaning:"ပညာ ေရးအကြံ ေပးသည်",
  collocation: "Consult with your academic advisor",
  dailyPhrase: "Don't hesitate to seek advice when you need it."
},
{word: "Convert,Change,Alter",meaning:"အသွင် ေပြာင်းသည်",
  collocation: "Convert the document to PDF format",
  dailyPhrase: "Be prepared to adapt and change your approach."
},
{word: "Contract,Aggreement,Amned the agreement",meaning:"သ ေဘာတူသည်",
  collocation: "Sign the contract before proceeding",
  dailyPhrase: "Make sure you understand all terms of the agreement."
},
{word: "Diverse,Varied,Flactuation,Variation,Changes",meaning:"ေစျးနှုန်းအတတ်အကျ",
  collocation: "The city is known for its diverse culture",
  dailyPhrase: "Embrace diversity and welcome different perspectives."
},
{word: "Distribute,Hand out",meaning:"ဖြန်် ့ ေဝသည်",
  collocation: "Distribute flyers throughout the neighborhood",
  dailyPhrase: "Make sure to distribute copies of the report to all team members."
},
{word: "Eliminate,Remove,Get rid of,Call off",meaning:"ဖယ်ရှားသည်",
  collocation: "Eliminate the unnecessary steps in the process",
  dailyPhrase: "Make sure to eliminate any distractions before starting your work."
},
{word: "Flexible,Adaptable",meaning:"လိုက် ေလျာ်ညီ ေထွ ေအာင် ေနထိုင်သည်",
  collocation: "Be flexible and adaptable to change",
  dailyPhrase: "Being flexible can help you navigate unexpected challenges."
},
{word: "Function,Purpose,Role",meaning:"လုပ် ေဆာင်ချက်",
  collocation: "The function of this tool is to simplify the process",
  dailyPhrase: "Understand the purpose of each task before starting."
},
{word: "Generate,Produce,Creat",meaning:"အ ေကာင်အထည် ေဖာ်သည်",
  collocation: "Generate new ideas for the project",
  dailyPhrase: "Keep generating creative solutions to your problems."
},
{word: "Indentify,Find,Name",meaning:"ညွန်းပြသည်",
  collocation: "Identify the key stakeholders in the project",
  dailyPhrase: "Make sure to identify any potential risks before proceeding."
},
{word: "Investigate,Reseach,Inspect",meaning:"စုံစမ်းစစ် ေဆးသည်",
  collocation: "Investigate the cause of the problem",
  dailyPhrase: "Regularly investigate your processes to find areas for improvement."
},
{word: "Maintain,Keep,Preserve",meaning:"ထိန်းသိမ်းသည်",
  collocation: "Maintain the equipment regularly",
  dailyPhrase: "Make sure to maintain a healthy work-life balance."
},
{word: "Top priporty",meaning:"အ ေရးကြီးဆုံးဦးစားေပး",
  collocation: "Prioritize your tasks based on their importance",
  dailyPhrase: "Focus on the most important tasks first."
},
{word: "Resolve a conflict",meaning:"ပြသာနာကို ေဖြရှင်းသည်",
  collocation: "Resolve a conflict between team members",
dailyPhrase: "Use effective communication to resolve conflicts in the workplace."
},
{word: "Generate revenue",meaning:"ဝင် ေငွရှာေဖွသည်",
  collocation: "Generate revenue through new business strategies",
dailyPhrase: "The company aims to generate revenue by expanding its product line."
},
{word: "Maximize profit",meaning:"အမြတ်အများဆုံးဖြစ် ေအာင်လုပ်သည်",
  collocation: "Maximize profit by reducing costs",
  dailyPhrase: "Focus on strategies that can help you maximize your profits."
},
{word: "Sufficient funds",meaning:"လုံ ေလာက် ေသာရန်ပုံ ေငွ",
  collocation: "Ensure sufficient funds for the project",
  dailyPhrase: "Make sure you have sufficient funds before making a large purchase."
},
{word: "Signficant increase",meaning:"သိသာထင်ရှားသည်တိုးတတ်မှု",
  collocation: "Significant increase in sales",
  dailyPhrase: "The company has seen a significant increase in sales this quarter."
},
{word: "Annual report",meaning:"နှစ်ပတ်လည်အစီစဉ်",
  collocation: "Prepare an annual report for the stakeholders",
  dailyPhrase: "Review the annual report to understand the company's performance."
},
{word: "Terminate a contract",meaning:"စာချူပ်ရပ်စဲသည်",
  collocation: "Terminate the contract due to breach of terms",
  dailyPhrase: "Make sure to follow the proper procedures when terminating a contract."
},
{word: "Legal obligation",meaning:"ဉပ ေဒအရတာဝန်ဝတ္တရား",
  collocation: "Fulfill your legal obligations under the law",
dailyPhrase: "It is important to understand your legal obligations in any business transaction."
},
{word: "Amend the agreement",meaning:"သ ေဘာတူညီချက်ကိုပြင်ဆင်သည်",
  collocation: "Amend the agreement to reflect the new terms",
  dailyPhrase: "Make sure to review and amend the agreement before signing."
},
{word: "Prior notice",meaning:"ကြိုတင်အ ေကြာင်းကြားစာ",
  collocation: "Provide prior notice of any changes",
  dailyPhrase: "Always provide prior notice when making changes that will affect others."
},
{word: "Business prespective",meaning:"စီးပွားေရးအမြင်အရ",
  collocation: "Consider the business perspective when making decisions",
  dailyPhrase: "It's important to look at the situation from a business perspective."
},
{word: "Maximize profit / Maximize efficiency",meaning:"အမြင့်ဆုံး အမြတ် /စွမ်း ေဆာင်ရည်ကို အမြင့်ဆုံးဖြစ် ေအာင်လုပ်သည်",
  collocation: "Maximize profit and efficiency in all business operations",
  dailyPhrase: "Look for ways to maximize profit and efficiency in your daily tasks."
},
{word: "Innovation ideas / solutions /Come up with idea",meaning:"ဆန်းသစ် ေသာ အကြံဉာဏ် / ေဖြရှင်းချက်",
  collocation: "Come up with innovative ideas and solutions",
  dailyPhrase: "Encourage creative thinking to come up with new ideas."
},
{word: "Monitor solution/Monitor progress ",meaning:"တိုးတတ်တဲ့ အ ေခြ ေန",
  collocation: "Monitor the progress of the project",
  dailyPhrase: "Regularly monitor the solution to ensure it is effective."
},
{word: "Negotiate a deal / contract",meaning:"အ ေပးယူ စာချူပ်ညိှနှိုင်းသည်",
  collocation: "Negotiate a deal or contract with the other party",
  dailyPhrase: "Effective negotiation skills are essential for successful business dealings."
},
 {word: "Notify the manager / Staff",meaning:"မန်နေဂျာ / ဝန်ထမ်းကို အသိပေးသည်",
  collocation: "Notify the manager of any issues",
  dailyPhrase: "Make sure to notify the staff of any changes in the schedule."
 },
{word: "Obtain permission / a pemit",meaning:"ခွင့်ပြုချက် / ရယူသည်",
  collocation: "Obtain permission before proceeding with the project",
  dailyPhrase: "Always obtain permission before using someone else's work."
},
{word: "Outcome(of the meeting/the project)",meaning:"ရလဒ်",
  collocation: "Discuss the outcome of the meeting",
  dailyPhrase: "The outcome of the project was positive and exceeded expectations."
},
{word: "Resolve a conflict  issue",meaning:"ပြသာနာကို ေဖြရှင်းသည်",
  collocation: "Resolve a conflict or issue between team members",
  dailyPhrase: "Use effective communication to resolve conflicts in the workplace."
},
{word: "Utilize resources/tools",meaning:" အရင်းအမြစ် / ကိရိယာများကို အသုံးချသည်",
  collocation: "Utilize resources and tools effectively",
  dailyPhrase: "Make sure to utilize all available resources to complete the project."
},
{word: "Incentive,Motivation,Bonus",meaning:"အပိုဆုချသည်",
  collocation: "Provide incentives to motivate employees",
  dailyPhrase: "Offering incentives can boost employee motivation and performance."
},
{word: "Innovation,Creative,New",meaning:"ဆန်းသစ်သည်",
  collocation: "Encourage innovation and creativity in the workplace",
  dailyPhrase: "Innovation is key to staying competitive in the market."
},
{word: "Maximize,Increase,Optimize",meaning:"အများဆုံးဖြစ်သည်",
  collocation: "Maximize efficiency in all processes",
  dailyPhrase: "Look for ways to maximize your productivity."
},
{word: "Modify,Adjust,Change",meaning:"ပြင်ဆင်သည်",
  collocation: "Modify the plan based on feedback",
  dailyPhrase: "Be open to modifying your approach when necessary."
},
{word: "Monitor,Watch,Track",meaning:"တိုးတတ်တဲ့ အ ေခြ ေန",
  collocation: "Monitor the progress of the project",
  dailyPhrase: "Regularly monitor your performance to identify areas for improvement."
},
{word: "Negotiable,Bargain,Discuss",meaning:"ညီှနှိုင်းသည်",
  collocation: "Negotiate a better deal",
  dailyPhrase: "Be prepared to negotiate when discussing terms and conditions."
},
{word: "Notify,Inform,Tell",meaning:"သတိ ေပးသည်",
  collocation: "Notify the team of any updates",
  dailyPhrase: "Make sure to notify your supervisor of any changes in your schedule."
},
{word: "Obligation,Duty,Responsibility",meaning:"တာဝန်ဝတ္တတရား",
  collocation: "It is your obligation to complete the task on time",
  dailyPhrase: "Taking responsibility for your actions is essential for personal growth."
},
{word: "Obtain,Get, Acquire",meaning:"ရယူသည်/ဝယ်ယူသည်",
  collocation: "Obtain the necessary documents for the application",
  dailyPhrase: "You need to obtain approval from your manager before making any changes."
},
{word: "Occupied,Busy,Full",meaning:"အလုပ်ရူပ်သည်",
  collocation: "The office is occupied",
  dailyPhrase: "Make sure to check the availability of the meeting room before scheduling a session."
},
{word: "Outcome,Result,Consequence",meaning:"ရလဒ်",
  collocation: "Discuss the outcome of the project",
  dailyPhrase: "The outcome of the meeting was positive and productive."
},
{word: "Prespective,Viewpoint,Outlook",meaning:"အမြင်အရ",
  collocation: "Consider the perspective of all stakeholders",
  dailyPhrase: "Having a different outlook can lead to new insights."
},
{word: "Precise,Exact,Accurate",meaning:"တိကျသေချာသည်",
  collocation: "Be precise in your calculations",
  dailyPhrase: "Accuracy is crucial in scientific research."
},
{word: "Predict,Forecoast,Foretell",meaning:"ခန့်မှန်းသည်",
  collocation: "Predict the weather for the upcoming week",
  dailyPhrase: "It's difficult to predict the future with complete accuracy."
},
{word: "Prior,Previous,Eealier",meaning:"ယခင်",
  collocation: "Review the prior reports before making a decision",
  dailyPhrase: "Consider the previous experiences when planning for the future."
},
{word: "Priorit,Important",meaning:"အ ေရးကြီးသည်",
  collocation: "Prioritize your tasks based on their importance",
  dailyPhrase: "It's important to prioritize your goals and objectives."
},
{word: "Proceed,Continous,Advance",meaning:"ဆက်လက်ဆောင်ရွက်သည်",
  collocation: "Proceed with the plan as scheduled",
  dailyPhrase: "It's important to proceed with caution when making important decisions."
},
{word: "Promote,Boost,Advance",meaning:"တိုးတတ်သည် / ရာထူးတိုးသည်",
collocation: "Promote the new product through marketing campaigns",
dailyPhrase: "The company aims to promote a positive work culture."
},
{word: "Purchase,Buy,Order",meaning:"ဝယ်ယူသည်",
collocation: "Purchase the necessary equipment for the project",
dailyPhrase: "Make sure to compare prices before making a purchase."
},
{word: "Relevant,Related,Linked",meaning:"သက်ဆိုင်သည်",
  collocation: "The information is relevant to the discussion",
  dailyPhrase: "Make sure to include relevant examples in your presentation."
},
{word: "Require,Need, demand",meaning:"လိုအပ်သည်",
  collocation: "This project requires a lot of resources",
  dailyPhrase: "It's important to understand what you require before making any commitments."
},
{word: "Resolve,Solve,Settle",meaning:"ေ ဖြရှင်းသည်",
  collocation: "Resolve the conflict between the two parties",
  dailyPhrase: "It's important to resolve issues quickly to avoid further complications."
},
{word: "Retain,Keep, Maintain",meaning:"တွေ့ရှိသည်",
  collocation: "Retain the customer's trust and confidence",
  dailyPhrase: "It's important to maintain good relationships with your clients."
},
{word: "Revenue,Income,Earing",meaning:"ဝင်ငွန်း",
  collocation: "The company's revenue has increased significantly",
  dailyPhrase: "The business aims to increase its revenue through new marketing strategies."
},
{word: "Secure,Safe,Obtain",meaning:"လုပ်ဆောင်သည်",
  collocation: "Secure the necessary funding for the project",
  dailyPhrase: "Make sure to secure your personal belongings when traveling."
},
{word: "Scenario,Situation,Case",meaning:"အခြစ်",
  collocation: "Consider different scenarios before making a decision",
  dailyPhrase: "It's important to plan for different scenarios in case of unexpected events."
},
{word: "Significant,Improtant,Noticeable",meaning:"အရေးကြီးသည်",
  collocation: "The new policy has a significant impact on the industry",
  dailyPhrase: "It's important to recognize the significant contributions of your team members."
},
{word: "Specific,Particular,Exact",meaning:"အသစ်သည်",
  collocation: "Be specific about your requirements",
  dailyPhrase: "It's important to be specific when giving instructions."
},
{word: "Stability,Steadliness,Balance",meaning:"တည်ငြိမ်မှု",
  collocation: "Maintain stability in your personal and professional life",
  dailyPhrase: "It's important to find a balance between work and personal life."
},
{word: "Strategy, Plan,Approach",meaning:"နည်းဗျူဟာ",
  collocation: "Develop a comprehensive strategy for the project",
  dailyPhrase: "It's important to have a clear plan before starting any new endeavor."
},
{word: "Submit,Present,Hand in",meaning:"ပေးပို့သည်",
  collocation: "Submit your application before the deadline",
  dailyPhrase: "Make sure to present your ideas clearly in the meeting."
},
{word: "Technical,Specialized",meaning:"နည်းပညာဆိုင်ရာ / အထူးပြု",
  collocation: "The job requires technical skills and specialized knowledge",
  dailyPhrase: "It's important to stay updated with the latest technical developments in your field."
},
{word: "Temporary,Short-Term",meaning:"အချိန်အတန်",
  collocation: "The project is expected to be completed within a temporary timeframe",
  dailyPhrase: "It's important to plan for temporary changes in your schedule."
},
{word: "Terminate,End,Stop",meaning:"ပတ်သက်သည်",
  collocation: "The contract will be terminated if the terms are not met",
  dailyPhrase: "It's important to know when it's time to terminate a relationship that is no longer beneficial."
},
{word: "Transform,Change,Convert",meaning:"ပြင်ဆင်သည်",
  collocation: "The company needs to transform its business model",
  dailyPhrase: "It's important to be open to change and adapt to new circumstances."
},
{word: "Ultimate,Final,Last",meaning:"နောက်ဆုံး",
  collocation: "The ultimate goal is to create a better future",
  dailyPhrase: "It's important to focus on the ultimate objective and not get distracted by minor details."
},
{word: "Undergo,Experience,Face,Go Thorough",meaning:"အတွေ့အကြုံခံရသည်",
  collocation: "The patient underwent a successful surgery",
  dailyPhrase: "It's important to undergo regular health check-ups."
},
{word: "Unique,Distinctive,Special",meaning:"မတူညီသည် / ထူးခြားသည်",
  collocation: "This is a unique opportunity that you shouldn't miss",
  dailyPhrase: "It's important to embrace your unique qualities and let them shine."
},
{word: "Utilize,Use,Employ",meaning:"အသုံးချသည်",
  collocation: "Utilize your skills to their fullest potential",
  dailyPhrase: "It's important to utilize every opportunity that comes your way."
},
{word: "Version,Edition,Variant",meaning:"နောက်ထပ်နှင့် ပြင်ဆင်ထားသည်",
  collocation: "The latest version of the software includes new features",
  dailyPhrase: "Make sure to check for the latest version of the app before downloading."
},
{word: "Visible,Clear,Noticeable",meaning:"မြင်သာသည်",
  collocation: "The sign is visible from a distance",
  dailyPhrase: "It's important to be visible and noticeable in your community."
},
{word: "Volume,Amount,Quantity",meaning:"အရန်",
  collocation: "The volume of water in the tank is sufficient",
  dailyPhrase: "It's important to monitor the volume of your expenses."
},
{word: "Withdraw,Take out,Remove",meaning:"ဖယ်ထုတ်သည်",
  collocation: "Withdraw money from the bank account",
  dailyPhrase: "It's important to withdraw cash before you go shopping."
},
{word: "Yield,Produce,Provide",meaning:"ထုတ်လုပ်သည်",
  collocation: "The farm yields a good harvest",
  dailyPhrase: "It's important to yield positive results from your efforts."
},
{word: "Shift,Change,Duty period",meaning:"ပြောင်းလဲသည်",
  collocation: "The shift in policy has caused confusion",
  dailyPhrase: "It's important to adapt to shifts in your schedule."
},
{word: "Sector,Field,Area",meaning:"ကွင်း / နယ်ပယ်",
  collocation: "The technology sector is growing rapidly",
  dailyPhrase: "It's important to understand the sector you are working in."
},
{word: "goal,aim,target",meaning:"ရည်မှန်းချက်",
  collocation: "Set a clear goal for yourself",
  dailyPhrase: "It's important to have a goal to work towards."
},
{word: "good,excellent",meaning:"အကောင်းဆုံး", 
  collocation: "She is a good student",
   dailyPhrase: "It's important to be good at what you do."},
{word: "great,superb",meaning:"အမေကာင္းဆုံး", 
  collocation: "He is a great teacher",
  dailyPhrase: "It's important to be great at what you do."},
{word: "large,substantial",meaning:"အကြီးအကျယ်",
  collocation: "The large building stands tall",
  dailyPhrase: "It's important to have a large enough space for your needs."
},
{word: "small,minor",meaning:"အနည်းငယ်", 
  collocation: "The small room is cozy", 
  dailyPhrase: "It's important to make the most of small spaces."},
{word: "little,small",meaning:"အနည်းငယ်", 
  collocation: "She has a little dog",
   dailyPhrase: "It's important to appreciate the little things in life."},
{word: "happy,delighted",meaning:"ပျော်ရှုသည်",
  collocation: "She is happy with her new job",
  dailyPhrase: "It's important to be happy with what you have."
},
{word: "sad,unhappy",meaning:"ဝမ်းနည်းသည်", 
  collocation: "He is sad about the loss",
  dailyPhrase: "It's important to acknowledge your feelings when you're sad."
},
{word: "angry,irritable",meaning:"စိတ်ဆိုးသည်",
  collocation: "She is angry with her boss",
  dailyPhrase: "It's important to manage your anger in a healthy way."
},
{word: "calm,peaceful",meaning:"ငြိမ်းချမ်းသည်",
  collocation: "The calm lake reflects the mountains",
  dailyPhrase: "It's important to find moments of calm in your day."
},
{word: "excited,thrilled",meaning:"စိတ်လှုပ်၇ှားသည်",
  collocation: "He is excited about the trip",
  dailyPhrase: "It's important to stay excited about your goals."
},
{word: "bored,uninterested",meaning:"ပျင်းရီသည်",
  collocation: "She is bored with the lecture",
  dailyPhrase: "It's important to find ways to stay engaged."
},
{word: "tired,exhausted",meaning:"ပင်ပန်းသည်",
  collocation: "He is tired after a long day",
  dailyPhrase: "It's important to get enough rest."
},
{word: "hungry,starving",meaning:"ဗိုက်ဆာသည်",
  collocation: "She is hungry after skipping lunch",
  dailyPhrase: "It's important to eat regular meals to stay healthy."
},
{word: "thirsty,dehydrated",meaning:"ေရဆာသည်",
  collocation: "He is thirsty after the workout",
  dailyPhrase: "It's important to drink enough water throughout the day."
},
{word: "cold,freezing",meaning:"ေအးသည်",
  collocation: "The cold weather makes it hard to go outside",
  dailyPhrase: "It's important to dress warmly in cold weather."
},
{word: "hot,scorching",meaning:"ပူသည်",
  collocation: "The hot sun is making the beach uncomfortable",
  dailyPhrase: "It's important to stay hydrated in hot weather."
},
{word: "windy,blustery",meaning:"ေနွးသည်",
  collocation: "The windy day makes it difficult to walk outside",
  dailyPhrase: "It's important to be cautious when it's windy."
},
 
  {
    word: "Aware",
    meaning: "အခြေအနေကို သိရှိနားလည်ထားသော",
    collocation: "Well aware",
    dailyPhrase: "It's essential to be aware of environmental issues."
  },
  {
    word: "Behalf",
    meaning: "ကိုယ်စားပြုသည် (သို့) အကျိုးအတွက် ဆောင်ရွက်သည်",
    collocation: "On behalf of",
    dailyPhrase: "It's an honor to speak on behalf of my entire team."
  },
  {
    word: "Benefit",
    meaning: "အကျိုးကျေးဇူး (သို့) အမြတ်အစွန်း",
    collocation: "Mutual benefit",
    dailyPhrase: "It's useful to focus on projects that offer long-term benefits."
  },
  {
    word: "Bias",
    meaning: "ဘက်လိုက်မှု (သို့) တရားမျှတစွာ ဆုံးဖြတ်မှုကို တားဆီးတတ်သော ဘက်လိုက်လိုစိတ်",
    collocation: "Avoid bias",
    dailyPhrase: "It's crucial to avoid cultural bias when making decisions."
  },
  {
    word: "Bond",
    meaning: "ဆက်သွယ်မှု (သို့) အချိတ်အဆက်",
    collocation: "Strong bond",
    dailyPhrase: "It's important to build a strong bond with your team."
  },
  {
    word: "Brief",
    meaning: "အချိန်တိုသော (သို့) အကျဉ်းချုပ်ဖြစ်သော",
    collocation: "Brief summary",
    dailyPhrase: "It's helpful to give a brief introduction before starting."
  },
  {
    word: "Capable",
    meaning: "တစ်ခုခုလုပ်ဆောင်နိုင်စွမ်းရှိသော",
    collocation: "Capable of doing",
    dailyPhrase: "It's essential to prove that you are capable of handling tasks."
  },
  {
    word: "Capacity",
    meaning: "ဆံ့ဝင်နိုင်သည့် အများဆုံးပမာဏ",
    collocation: "Maximum capacity",
    dailyPhrase: "It's important to know the full capacity of your team."
  },
  {
    word: "Category",
    meaning: "ဆက်စပ်နေသော အုပ်စုခွဲများ",
    collocation: "Main category",
    dailyPhrase: "It's easy to organize items when you divide them into categories."
  },
  {
    word: "Cease",
    meaning: "ရပ်တန့်သည်",
    collocation: "Cease operation",
    dailyPhrase: "It's vital to cease burning fossil fuels to protect the environment."
  },
  {
    word: "Challenge",
    meaning: "ခက်ခဲသောအလုပ် (သို့) အခြေအနေ",
    collocation: "Face a challenge",
    dailyPhrase: "It's important to remain calm when facing a difficult challenge."
  },
  {
    word: "Channel",
    meaning: "ဆက်သွယ်ရေး (သို့) သယ်ယူပို့ဆောင်ရေး လမ်းကြောင်း",
    collocation: "Communication channel",
    dailyPhrase: "It's effective to use a direct channel for urgent messages."
  },
  {
    word: "Chapter",
    meaning: "စာအုပ်တစ်အုပ်၏ အခန်း (သို့) သတ်မှတ်ထားသော အချိန်ကာလ",
    collocation: "New chapter",
    dailyPhrase: "It's exciting to start a new chapter in your career."
  },
  {
    word: "Chart",
    meaning: "အချက်အလက်များကို ပုံဖော်ပြထားခြင်း",
    collocation: "Bar chart",
    dailyPhrase: "It's useful to look at a chart to understand data clearly."
  },
  {
    word: "Chemical",
    meaning: "ဓာတ်ဖြစ်စဉ်များတွင် အသုံးပြုသော (သို့) ဖြစ်ပေါ်လာသော ပစ္စည်း",
    collocation: "Harmful chemical",
    dailyPhrase: "It's important to handle toxic chemicals with care."
  },
  {
    word: "Circumstance",
    meaning: "အခြေအနေတစ်ခုခု (သို့) ၎င်းကို သက်ရောက်စေသည့် အချက်အလက်",
    collocation: "Under any circumstance",
    dailyPhrase: "It's essential to adapt quickly to changing circumstances."
  },

  // --- 101 to 120 ---
  {
    word: "Constitute",
    meaning: "ဖွဲ့စည်းသည် (သို့) ဖြစ်ပေါ်စေသည်",
    collocation: "Constitute a threat",
    dailyPhrase: "It's clear that pollution constitutes a serious health threat."
  },
  {
    word: "Constrain",
    meaning: "ကန့်သတ်ချုပ်ချယ်သည်",
    collocation: "Constrain growth",
    dailyPhrase: "It's difficult to innovate when budget limitations constrain you."
  },
  {
    word: "Construct",
    meaning: "တည်ဆောက်သည် (သို့) ဖန်တီးသည်",
    collocation: "Construct a theory",
    dailyPhrase: "It's necessary to gather strong evidence to construct a solid argument."
  },
  {
    word: "Consult",
    meaning: "အကြံဉာဏ် သို့မဟုတ် အချက်အလက် တောင်းခံသည်",
    collocation: "Consult an expert",
    dailyPhrase: "It's wise to consult a doctor before starting a new medicine."
  },
  {
    word: "Consume",
    meaning: "အရင်းအမြစ် သို့မဟုတ် စွမ်းအင်များကို သုံးစွဲသည်",
    collocation: "Consume energy",
    dailyPhrase: "It's crucial to lower the amount of electricity we consume daily."
  },
  {
    word: "Contact",
    meaning: "ဆက်သွယ်မှု (သို့) ထိတွေ့မှု",
    collocation: "Direct contact",
    dailyPhrase: "It's important to maintain direct contact with your clients."
  },
  {
    word: "Contemporary",
    meaning: "ခေတ်ပေါ် (သို့) လက်ရှိခေတ်ကာလဆိုင်ရာ",
    collocation: "Contemporary society",
    dailyPhrase: "It's fascinating to study contemporary art and culture."
  },
  {
    word: "Context",
    meaning: "အခြေအနေတစ်ရပ် သို့မဟုတ် စာသားတစ်ခု၏ ဝန်းကျင်အခြေအနေ",
    collocation: "Social context",
    dailyPhrase: "It's essential to understand words within their full context."
  },
  {
    word: "Contract",
    meaning: "စာဖြင့်ဖြစ်စေ၊ နှုတ်ဖြင့်ဖြစ်စေ ချုပ်ဆိုထားသော သဘောတူညီချက်",
    collocation: "Sign a contract",
    dailyPhrase: "It's important to read all terms carefully before signing a contract."
  },
  {
    word: "Contrast",
    meaning: "ထင်ရှားသော ကွဲပြားချက်",
    collocation: "Sharp contrast",
    dailyPhrase: "It's interesting to highlight the contrast between two cultures."
  },
  {
    word: "Contribute",
    meaning: "ပံ့ပိုးကူညီသည် (သို့) တစ်စုံတစ်ခုမှာ ထည့်ဝင်သည်",
    collocation: "Contribute to society",
    dailyPhrase: "It's noble to contribute your time to community service."
  },
  {
    word: "Controversy",
    meaning: "လူထုအတွင်း အငြင်းပွားဖွယ်ရာ ဖြစ်ရပ်",
    collocation: "Cause controversy",
    dailyPhrase: "It's common for modern art installations to spark controversy."
  },
  {
    word: "Convene",
    meaning: "စုဝေးသည် (သို့) အစည်းအဝေးထိုင်သည်",
    collocation: "Convene a meeting",
    dailyPhrase: "It's necessary to convene a meeting to discuss urgent matters."
  },
  {
    word: "Converse",
    meaning: "စကားပြောဆိုသည် (သို့) ဆွေးနွေးသည်",
    collocation: "Converse fluently",
    dailyPhrase: "It's rewarding to converse fluently in a foreign language."
  },
  {
    word: "Convert",
    meaning: "ပုံစံ၊ လုပ်ဆောင်ချက် သို့မဟုတ် ယုံကြည်ချက်ကို ပြောင်းလဲသည်",
    collocation: "Convert into energy",
    dailyPhrase: "It's efficient to convert solar power into electrical energy."
  },
  {
    word: "Convince",
    meaning: "တစ်စုံတစ်ခုကို ယုံကြည်လာအောင် ဆွဲဆောင်သည်",
    collocation: "Convince someone",
    dailyPhrase: "It's tough to convince people without solid facts."
  },
  {
    word: "Cooperate",
    meaning: "အတူတကွ ပူးပေါင်းလုပ်ဆောင်သည်",
    collocation: "Cooperate closely",
    dailyPhrase: "It's crucial for teams to cooperate closely to finish projects on time."
  },
  {
    word: "Coordinate",
    meaning: "လှုပ်ရှားမှုများ သို့မဟုတ် ကြိုးပမ်းအားထုတ်မှုများကို ပေါင်းစပ်ညှိနှိုင်းသည်",
    collocation: "Coordinate activities",
    dailyPhrase: "It's essential to coordinate efforts during an emergency."
  },
  {
    word: "Core",
    meaning: "ဗဟိုချက် (သို့) အရေးအကြီးဆုံး အစိတ်အပိုင်း",
    collocation: "Core value",
    dailyPhrase: "It's important to stay true to your core values."
  },
  {
    word: "Corporate",
    meaning: "စီးပွားရေးလုပ်ငန်း သို့မဟုတ် ကုမ္ပဏီနှင့် ဆိုင်သော",
    collocation: "Corporate culture",
    dailyPhrase: "It's healthy to build a positive corporate culture at work."
  },

  // --- 121 to 140 ---
  {
    word: "Correspond",
    meaning: "ကိုက်ညီသည် (သို့) အချင်းချင်း ဆက်သွယ်သည်",
    collocation: "Correspond directly",
    dailyPhrase: "It's important that your actions correspond with your words."
  },
  {
    word: "Criteria",
    meaning: "ဆုံးဖြတ်ရန် သို့မဟုတ် အကဲဖြတ်ရန် စံနှုန်းများ",
    collocation: "Meet the criteria",
    dailyPhrase: "It's necessary to meet all criteria to pass the university entry exam."
  },
  {
    word: "Crucial",
    meaning: "အလွန်အရေးကြီးသော (သို့) မရှိမဖြစ် လိုအပ်သော",
    collocation: "Crucial role",
    dailyPhrase: "It's crucial to get enough sleep before taking an important exam."
  },
  {
    word: "Culture",
    meaning: "လူအုပ်စုတစ်ခု၏ ယဉ်ကျေးမှုဓလေ့ထုံးစံများနှင့် ယုံကြည်ချက်များ",
    collocation: "Local culture",
    dailyPhrase: "It's respectful to learn about local culture when travelling."
  },
  {
    word: "Cycle",
    meaning: "ထပ်တလဲလဲ ဖြစ်ပျက်နေသော အစဉ်လိုက်ဖြစ်စဉ်",
    collocation: "Life cycle",
    dailyPhrase: "It's natural to observe the seasonal cycle every year."
  },
  {
    word: "Debate",
    meaning: "တရားဝင် ဆွေးနွေးငြင်းခုံပွဲ",
    collocation: "Public debate",
    dailyPhrase: "It's healthy to have an open debate about societal issues."
  },
  {
    word: "Decade",
    meaning: "ဆယ်စုနှစ် (၁ဝ နှစ်ကာလ)",
    collocation: "Past decade",
    dailyPhrase: "It's remarkable how technology has advanced over the past decade."
  },
  {
    word: "Decline",
    meaning: "လျော့ကျသွားသည် (သို့) ငြင်းပယ်သည်",
    collocation: "Decline an offer",
    dailyPhrase: "It's polite to give a reason when you decline an invitation."
  },
  {
    word: "Deduce",
    meaning: "အထောက်အထားများမှ နိဂုံးချုပ် ကောက်ချက်ချသည်",
    collocation: "Deduce facts",
    dailyPhrase: "It's possible to deduce facts logically from reliable evidence."
  },
  {
    word: "Defend",
    meaning: "ဘေးအန္တရာယ် သို့မဟုတ် တိုက်ခိုက်မှုမှ ကာကွယ်သည်",
    collocation: "Defend your position",
    dailyPhrase: "It's important to defend your rights with valid points."
  },
  {
    word: "Define",
    meaning: "အဓိပ္ပာယ်ကို ရှင်းလင်းဖော်ပြသည်",
    collocation: "Clearly define",
    dailyPhrase: "It's necessary to clearly define key terms in your research essay."
  },
  {
    word: "Definite",
    meaning: "အတိအကျ သတ်မှတ်ထားသော (သို့) ဆုံးဖြတ်ပြီးသားဖြစ်သော",
    collocation: "Definite answer",
    dailyPhrase: "It's helpful to receive a definite answer before making plans."
  },
  {
    word: "Demonstrate",
    meaning: "ရှင်းလင်းစွာ ပြသသည် (သို့) သက်သေပြသည်",
    collocation: "Demonstrate skill",
    dailyPhrase: "It's essential to demonstrate leadership skills in group work."
  },
  {
    word: "Deny",
    meaning: "ငြင်းဆိုသည် (သို့) ပယ်ချသည်",
    collocation: "Deny access",
    dailyPhrase: "It's wrong to deny equal opportunities to qualified candidates."
  },
    {
    word: "Ambiguous",
    meaning: "သေချာရေရာမှုမရှိသော / အဓိပ္ပာယ်နှစ်ခွဖြစ်သော",
    collocation: "Ambiguous instructions",
    dailyPhrase: "It's frustrating when test questions are ambiguous."
  },
  {
    word: "Allocate",
    meaning: "နေရာချထားပေးသည် / ခွဲဝေပေးသည်",
    collocation: "Allocate resources",
    dailyPhrase: "It's essential to allocate enough time for each section."
  },
  {
    word: "Accelerate",
    meaning: "အရှိန်မြှင့်တင်သည်",
    collocation: "Accelerate economic growth",
    dailyPhrase: "It's necessary to accelerate the research process."
  },
  {
    word: "Alter",
    meaning: "ပြောင်းလဲသည် / တਵေတိမ်းစောင်းသည်",
    collocation: "Alter plans",
    dailyPhrase: "It's sometimes wise to alter your strategy."
  },
  {
    word: "Bias",
    meaning: "ဘက်လိုက်မှု / တဖက်သတ်ယုံကြည်မှု",
    collocation: "Overcome personal bias",
    dailyPhrase: "It's crucial to avoid bias in academic writing."
  },
  {
    word: "Brief",
    meaning: "အတိုချုပ် / ခေတ္တခဏ",
    collocation: "Give a brief overview",
    dailyPhrase: "It's helpful to give a brief introduction first."
  },
  {
    word: "Coincide",
    meaning: "အချိန်ကိုက်တိုက်ဆိုင်သည်",
    collocation: "Coincide with an event",
    dailyPhrase: "It's unfortunate when holidays coincide with busy workdays."
  },
  {
    word: "Compensate",
    meaning: "လျော်ကြေးပေးသည် / ஈடுசெய்கသည် (အစားထိုးသည်)",
    collocation: "Compensate for losses",
    dailyPhrase: "It's hard to compensate for lost time."
  },
  {
    word: "Contribute",
    meaning: "အလှူအတန်းပေးသည် / အထောက်အကူပြုသည်",
    collocation: "Contribute to society",
    dailyPhrase: "It's noble to contribute to community projects."
  },
  {
    word: "Decline",
    meaning: "ကျဆင်းသည် / ငြင်းပယ်သည်",
    collocation: "Decline an offer",
    dailyPhrase: "It's polite to decline an invitation gracefully."
  },
  {
    word: "Detect",
    meaning: "ရှာဖွေတွေ့ရှိသည် / စစ်ဆေးဖော်ထုတ်သည်",
    collocation: "Detect errors",
    dailyPhrase: "It's important to run tests to detect bugs early."
  },
  {
    word: "Diminish",
    meaning: "လျော့နည်းစေသည် / သေးငယ်သွားစေသည်",
    collocation: "Diminish the risk",
    dailyPhrase: "It's vital to take precautions to diminish risks."
  },
  {
    word: "Diverse",
    meaning: "ကွဲပြားစုံလင်သော",
    collocation: "Diverse backgrounds",
    dailyPhrase: "It's enriching to meet people from diverse cultures."
  },
  {
    word: "Enhance",
    meaning: "တိုးတက်ကောင်းမွန်စေသည်",
    collocation: "Enhance performance",
    dailyPhrase: "It's smart to use apps to enhance your vocabulary."
  },
  {
    word: "Exceed",
    meaning: "ကျော်လွန်သည် / ပိုမိုသည်",
    collocation: "Exceed expectations",
    dailyPhrase: "It's amazing when results exceed expectations."
  },
  {
    word: "Expose",
    meaning: "ဖော်ထုတ်ပြသသည် / အလင်းနှင့်ထိတွေ့စေသည်",
    collocation: "Expose to sunlight",
    dailyPhrase: "It's healthy to expose yourself to morning sunlight."
  },
  {
    word: "Fluctuate",
    meaning: "အတက်အကျဖြစ်သည် / မငြိမ်မသက်ဖြစ်သည်",
    collocation: "Prices fluctuate",
    dailyPhrase: "It's common for market prices to fluctuate."
  },
  {
    word: "Generate",
    meaning: "ထုတ်လုပ်ဖန်တီးသည်",
    collocation: "Generate ideas",
    dailyPhrase: "It's useful to brainstorm to generate creative ideas."
  },
  {
    word: "Ignorant",
    meaning: "မသိနားမလည်သော / ဗဟုသုတကင်းမဲ့သော",
    collocation: "Remain ignorant of facts",
    dailyPhrase: "It's dangerous to remain ignorant about global issues."
  },
  {
    word: "Incentive",
    meaning: "အားပေးလှုံ့ဆော်မှု / မက်လုံး",
    collocation: "Provide financial incentive",
    dailyPhrase: "It's helpful to have incentives for hard work."
  },
  {
    word: "Minimize",
    meaning: "အနည်းဆုံးဖြစ်အောင် လျှော့ချသည်",
    collocation: "Minimize mistakes",
    dailyPhrase: "It's wise to double-check your code to minimize errors."
  },
  {
    word: "Monitor",
    meaning: "စောင့်ကြည့်စစ်ဆေးသည်",
    collocation: "Monitor progress",
    dailyPhrase: "It's crucial to monitor your study progress regularly."
  },
  {
    word: "Neutral",
    meaning: " நடுநிலைကျသော / ဘက်မလိုက်သော",
    collocation: "Remain neutral",
    dailyPhrase: "It's wise to remain neutral in arguments."
  },
  {
    word: "Objective",
    meaning: "ရည်မှန်းချက် / ဘက်မလိုက်သော",
    collocation: "Clear objective",
    dailyPhrase: "It's important to set a clear objective for your project."
  },
  {
    word: "Persist",
    meaning: "ဇွဲရှိရှိ ဆက်လက်လုပ်ဆောင်သည်",
    collocation: "Persist in adversity",
    dailyPhrase: "It's necessary to persist even when tasks get difficult."
  },
  {
    word: "Potential",
    meaning: "ဖြစ်နိုင်ခြေ / အရည်အချင်းစွမ်းပကား",
    collocation: "Unlock potential",
    dailyPhrase: "It's exciting to unlock your true potential in coding."
  },
  {
    word: "Precise",
    meaning: "တိကျသေချာသော",
    collocation: "Precise measurements",
    dailyPhrase: "It's vital to give precise details in reports."
  },
  {
    word: "Relevant",
    meaning: "ဆက်စပ်ပတ်သက်သော / သင့်လျော်သော",
    collocation: "Relevant experience",
    dailyPhrase: "It's good to include relevant examples in essays."
  },
  {
    word: "Transform",
    meaning: "ပုံစံအသွင်ပြောင်းလဲပစ်သည်",
    collocation: "Transform society",
    dailyPhrase: "It's technology that helps transform modern education."
  },

  {
    word: "Depict",
    meaning: "ကိုယ်စားပြုဖော်ပြသည် (သို့) ရုပ်ပုံဖော်ပြသည်",
    collocation: "Accurately depict",
    dailyPhrase: "It's common for books to depict historical events realistically."
  },
  {
    word: "Derive",
    meaning: "ရင်းမြစ်တစ်ခုခုမှ ရယူသည်",
    collocation: "Derive pleasure",
    dailyPhrase: "It's natural to derive pleasure from spending time with friends."
  },
  {
    word: "Design",
    meaning: "အစီအစဉ်ဆွဲခြင်း (သို့) ပုံစံထုတ်ခြင်း",
    collocation: "Design a solution",
    dailyPhrase: "It's exciting to design a brand new application from scratch."
  },
  {
    word: "Despite",
    meaning: "...ပင်သော်လည်းကောင်း (သို့) ...ကြားမှ",
    collocation: "Despite difficulties",
    dailyPhrase: "It's inspiring when people succeed despite facing tough obstacles."
  },
  {
    word: "Detect",
    meaning: "ရှာဖွေတွေ့ရှိသည် (သို့) သတိထားမိသည်",
    collocation: "Detect changes",
    dailyPhrase: "It's crucial to detect early warning signs of illness."
  },
  {
    word: "Deviate",
    meaning: "သတ်မှတ်ထားသော စံနှုန်းမှ သေချာဖောက်ထွက်တိမ်းစောင်းသည်",
    collocation: "Deviate from standard",
    dailyPhrase: "It's dangerous to deviate from safety guidelines during experiments."
  },

  // --- 141 to 160 ---
  {
    word: "Device",
    meaning: "စက်ပစ္စည်း (သို့) ကိရိယာ",
    collocation: "Electronic device",
    dailyPhrase: "It's common to use a mobile device for daily tasks."
  },
  {
    word: "Differentiate",
    meaning: "ကွဲပြားချက်များကို ခွဲခြားသိမြင်စေသည်",
    collocation: "Differentiate between",
    dailyPhrase: "It's essential to differentiate between facts and opinions."
  },
  {
    word: "Dimension",
    meaning: "တိုင်းတာနိုင်သော အတိုင်းအတာ (သို့) ထုထည်",
    collocation: "New dimension",
    dailyPhrase: "It's fascinating how virtual reality adds a new dimension to gaming."
  },
  {
    word: "Diminish",
    meaning: "လျော့နည်းသွားသည် (သို့) ငြိမ်သက်ကျဆင်းသွားသည်",
    collocation: "Diminish risk",
    dailyPhrase: "It's important to take steps to diminish health risks."
  },
  {
    word: "Discriminate",
    meaning: "ခွဲခြားဆက်ဆံသည် (သို့) ကွဲပြားချက်ကို ခွဲခြားပြသသည်",
    collocation: "Discriminate against",
    dailyPhrase: "It's unfair to discriminate against individuals based on background."
  },
  {
    word: "Displace",
    meaning: "မူလနေရာမှ ရွှေ့ပြောင်းသည်",
    collocation: "Displace workers",
    dailyPhrase: "It's tragic when natural disasters displace thousands of residents."
  },
  {
    word: "Display",
    meaning: "ပြသသည် (သို့) ခင်းကျင်းပြသသည်",
    collocation: "Display talent",
    dailyPhrase: "It's impressive to display your artistic work in a gallery."
  },
  {
    word: "Dispose",
    meaning: "ဖယ်ရှားရှင်းလင်းသည် (သို့) စွန့်ပစ်သည်",
    collocation: "Dispose of waste",
    dailyPhrase: "It's vital to dispose of plastic waste properly."
  },
  {
    word: "Distinct",
    meaning: "သိသာထင်ရှားစွာ ကွဲပြားသော",
    collocation: "Distinct advantage",
    dailyPhrase: "It's helpful to have a distinct plan before starting a business."
  },
  {
    word: "Distort",
    meaning: "ပုံစံပျက်ယွင်းသွားအောင် လုပ်ဆောင်သည် (သို့) လိမ်လည်ဖော်ပြသည်",
    collocation: "Distort reality",
    dailyPhrase: "It's wrong to distort facts when presenting news."
  },
  {
    word: "Distribute",
    meaning: "ဖြန့်ဝေသည် (သို့) နယ်မြေတစ်ခုအတွင်း ပျံ့နှံ့စေသည်",
    collocation: "Distribute resources",
    dailyPhrase: "It's necessary to distribute resources fairly among team members."
  },
  {
    word: "Diverse",
    meaning: "ကွဲပြားစုံလင်သော",
    collocation: "Diverse range",
    dailyPhrase: "It's enriching to work with a diverse team of professionals."
  },
  {
    word: "Document",
    meaning: "စာဖြင့်ရေးသားထားသော (သို့) ပုံနှိပ်မှတ်တမ်း",
    collocation: "Official document",
    dailyPhrase: "It's important to keep all your official documents safe."
  },
  {
    word: "Domain",
    meaning: "အသိပညာနယ်ပယ် (သို့) ထိန်းချုပ်ရာနယ်မြေ",
    collocation: "Public domain",
    dailyPhrase: "It's free to use information that is available in the public domain."
  },
  {
    word: "Domestic",
    meaning: "အိမ်တွင်း (သို့) ပြည်တွင်းနှင့် ဆိုင်သော",
    collocation: "Domestic market",
    dailyPhrase: "It's strategic to focus on the domestic market before expanding abroad."
  },
  {
    word: "Dominant",
    meaning: "အာဏာအရှိဆုံး (သို့) လွှမ်းမိုးမှုအရှိဆုံး",
    collocation: "Dominant position",
    dailyPhrase: "It's clear that search engines play a dominant role in gathering information."
  },
  {
    word: "Draft",
    meaning: "စာရွက်စာတမ်းတစ်ခု၏ မူကြမ်း",
    collocation: "First draft",
    dailyPhrase: "It's normal for a first draft to need revisions and corrections."
  },
  {
    word: "Duration",
    meaning: "တစ်ခုခု တည်တံ့သည့် အချိန်ကာလအရှည်",
    collocation: "Short duration",
    dailyPhrase: "It's recommended to wear warm clothing for the duration of winter."
  },
  {
    word: "Dynamic",
    meaning: "အမြဲပြောင်းလဲနေသော (သို့) တက်ကြွသော",
    collocation: "Dynamic environment",
    dailyPhrase: "It's exciting to build a career in a dynamic industry like tech."
  },
  {
    word: "Economy",
    meaning: "နိုင်ငံတစ်နိုင်ငံ၏ ကုန်သွယ်ရေးနှင့် စက်မှုလုပ်ငန်း စနစ်",
    collocation: "Global economy",
    dailyPhrase: "It's crucial for small businesses to support the local economy."
  },

  // --- 161 to 180 ---
  {
    word: "Edit",
    meaning: "ပြောင်းလဲမှုများ (သို့) ပြင်ဆင်မှုများ ပြုလုပ်သည်",
    collocation: "Edit text",
    dailyPhrase: "It's necessary to edit your essay carefully before final submission."
  },
  {
    word: "Element",
    meaning: "အခြေခံ အစိတ်အပိုင်း",
    collocation: "Key element",
    dailyPhrase: "It's true that trust is a key element in any relationship."
  },
  {
    word: "Eliminate",
    meaning: "ဖယ်ရှားသည် (သို့) အပြီးတိုင် ဖယ်ထုတ်သည်",
    collocation: "Eliminate errors",
    dailyPhrase: "It's vital to test code thoroughly to eliminate bugs."
  },
  {
    word: "Emphasize",
    meaning: "အထူးအရေးပေး ဖော်ပြသည်",
    collocation: "Emphasize point",
    dailyPhrase: "It's effective to emphasize main ideas during a presentation."
  },
  {
    word: "Enable",
    meaning: "ဖြစ်မြောက်အောင် လုပ်ဆောင်ပေးသည်",
    collocation: "Enable growth",
    dailyPhrase: "It's technology that enables people to work remotely with ease."
  },
  {
    word: "Encounter",
    meaning: "မမျှော်လင့်ဘဲ တွေ့ဆုံသည် (သို့) အခက်အခဲနှင့် ရင်ဆိုင်ရသည်",
    collocation: "Encounter difficulties",
    dailyPhrase: "It's common to encounter unexpected problems when coding."
  },
  {
    word: "Enhance",
    meaning: "အရည်အသွေး တိုးတက်ကောင်းမွန်လာစေသည်",
    collocation: "Enhance quality",
    dailyPhrase: "It's helpful to practice daily to enhance your English skills."
  },
  {
    word: "Enormous",
    meaning: "အရွယ်အစား သို့မဟုတ် ပမာဏ အလွန်ကြီးမားသော",
    collocation: "Enormous impact",
    dailyPhrase: "It's clear that artificial intelligence will have an enormous impact."
  },
  {
    word: "Ensure",
    meaning: "သေချာအောင် လုပ်ဆောင်သည် (သို့) အာမခံသည်",
    collocation: "Ensure safety",
    dailyPhrase: "It's mandatory to wear seatbelts to ensure personal safety."
  },
  {
    word: "Environment",
    meaning: "ပတ်ဝန်းကျင် အခြေအနေများ",
    collocation: "Natural environment",
    dailyPhrase: "It's everyone's duty to protect our natural environment."
  },
  {
    word: "Equip",
    meaning: "လိုအပ်သော ပစ္စည်းကိရိယာများ တပ်ဆင်ပေးသည်",
    collocation: "Fully equip",
    dailyPhrase: "It's important to equip students with practical skills."
  },
  {
    word: "Establish",
    meaning: "တည်ဆောက်သည် (သို့) ဖန်တီးသည်",
    collocation: "Establish goals",
    dailyPhrase: "It's necessary to establish clear goals before launching a project."
  },
  {
    word: "Estimate",
    meaning: "ခန့်မှန်းတွက်ချက်မှု (သို့) ဆုံးဖြတ်ချက်",
    collocation: "Estimate cost",
    dailyPhrase: "It's wise to estimate total costs before starting renovations."
  },
  {
    word: "Evaluate",
    meaning: "အကဲဖြတ်သည် (သို့) စစ်ဆေးဆုံးဖြတ်သည်",
    collocation: "Evaluate progress",
    dailyPhrase: "It's helpful to evaluate your progress at the end of each month."
  },
  {
    word: "Evident",
    meaning: "ရှင်းလင်းစွာ မြင်သာထင်သာရှိသော (သို့) နားလည်လွယ်သော",
    collocation: "Self-evident",
    dailyPhrase: "It's evident that hard work leads to better results."
  },
  {
    word: "Evolve",
    meaning: "အချိန်ကြာလာသည်နှင့်အမျှ တဖြည်းဖြည်း တိုးတက်ပြောင်းလဲလာသည်",
    collocation: "Evolve over time",
    dailyPhrase: "It's natural for programming languages to evolve over time."
  },
  {
    word: "Exceed",
    meaning: "ကန့်သတ်ချက်ထက် ကျော်လွန်သွားသည်",
    collocation: "Exceed expectations",
    dailyPhrase: "It's rewarding when your performance exceeds expectations."
  },
  {
    word: "Exclude",
    meaning: "ချန်လှပ်သည် (သို့) ထည့်သွင်းမထားပါ",
    collocation: "Exclude options",
    dailyPhrase: "It's unfair to exclude qualified candidates without a valid reason."
  },
  {
    word: "Exhibit",
    meaning: "ပြသသည် (သို့) ခင်းကျင်းပြသသည်",
    collocation: "Exhibit symptoms",
    dailyPhrase: "It's important to consult a doctor if you exhibit severe symptoms."
  },
  {
    word: "Expand",
    meaning: "အရွယ်အစား သို့မဟုတ် ပမာဏ တိုးချဲ့သည်",
    collocation: "Expand vocabulary",
    dailyPhrase: "It's effective to read books regularly to expand your vocabulary."
  },

  // --- 181 to 200 ---
  {
    word: "Expert",
    meaning: "အထူးကျွမ်းကျင်သော ဗဟုသုတ သို့မဟုတ် စွမ်းရည်ရှိသူ",
    collocation: "Industry expert",
    dailyPhrase: "It's helpful to seek advice from an industry expert."
  },
  {
    word: "Exploit",
    meaning: "တစ်ခုခုကို အသုံးချသည် (သို့) အခွင့်ကောင်းယူသည်",
    collocation: "Exploit resources",
    dailyPhrase: "It's wrong to exploit natural resources without sustainability plans."
  },
  {
    word: "Export",
    meaning: "ကုန်ပစ္စည်းများကို အခြားနိုင်ငံများသို့ တင်ပို့သည်",
    collocation: "Export goods",
    dailyPhrase: "It's beneficial for countries to export local agricultural products."
  },
  {
    word: "Expose",
    meaning: "ဖော်ထုတ်သည် (သို့) အလင်းပြပေါ်ထွက်စေသည်",
    collocation: "Expose truth",
    dailyPhrase: "It's brave for journalists to expose corruption publicly."
  },
  {
    word: "Extend",
    meaning: "ပိုမိုရှည်လျားလာအောင် (သို့) ကျယ်ဝန်းလာအောင် ပြုလုပ်သည်",
    collocation: "Extend deadline",
    dailyPhrase: "It's helpful when teachers agree to extend a assignment deadline."
  },
  {
    word: "External",
    meaning: "အပြင်ဘက်ပိုင်းဆိုင်ရာ",
    collocation: "External factors",
    dailyPhrase: "It's necessary to consider external factors during risk assessment."
  },
  {
    word: "Extract",
    meaning: "ဖယ်ရှားထုတ်ယူသည်",
    collocation: "Extract information",
    dailyPhrase: "It's easy to extract data using modern web software tools."
  },
  {
    word: "Facilitate",
    meaning: "လုပ်ငန်းစဉ်တစ်ခုကို ပိုမိုလွယ်ကူချောမွေ့စေသည်",
    collocation: "Facilitate growth",
    dailyPhrase: "It's a mentor's duty to facilitate learning and personal growth."
  },
  {
    word: "Factor",
    meaning: "ရလဒ်တစ်ခု ဖြစ်ပေါ်စေရန် အထောက်အကူပြုသည့် အကြောင်းရင်း",
    collocation: "Key factor",
    dailyPhrase: "It's clear that consistency is a key factor in achieving goals."
  },
  {
    word: "Feature",
    meaning: "ထင်ရှားသော ဝိသေသလက္ခဏာ (သို့) ရှုထောင့်",
    collocation: "Main feature",
    dailyPhrase: "It's exciting to introduce new features in software updates."
  },
  {
    word: "Federal",
    meaning: "ဗဟိုအစိုးရနှင့် ဆိုင်သော",
    collocation: "Federal law",
    dailyPhrase: "It's mandatory for all citizens to comply with federal regulations."
  },
  {
    word: "Fee",
    meaning: "ဝန်ဆောင်ခ (သို့) ကျသင့်ငွေ",
    collocation: "Tuition fee",
    dailyPhrase: "It's necessary to pay your tuition fee before registration closes."
  },
  {
    word: "Final",
    meaning: "နောက်ဆုံး (သို့) ပြီးဆုံးခြင်း",
    collocation: "Final decision",
    dailyPhrase: "It's important to think carefully before making a final decision."
  },
  {
    word: "Finance",
    meaning: "ငွေကြေးဆိုင်ရာ စီမံခန့်ခွဲမှု",
    collocation: "Personal finance",
    dailyPhrase: "It's wise to learn basic principles of personal finance early in life."
  },
  {
    word: "Flexible",
    meaning: "လွယ်ကူစွာ ပြောင်းလဲနိုင်သော (သို့) အလိုက်သင့် လုပ်ဆောင်နိုင်သော",
    collocation: "Flexible schedule",
    dailyPhrase: "It's convenient to have flexible working hours."
  },
  {
    word: "Focus",
    meaning: "အဓိက အာရုံစိုက်ရာနေရာ",
    collocation: "Focus attention",
    dailyPhrase: "It's crucial to focus attention on high-priority tasks."
  },
  {
    word: "Format",
    meaning: "စီစဉ်ပုံ (သို့) တည်ဆောက်ပုံ စနစ်",
    collocation: "Standard format",
    dailyPhrase: "It's helpful to structure documents in a clean standard format."
  },
  {
    word: "Formula",
    meaning: "စံသတ်မှတ်ထားသော နည်းလမ်း (သို့) သင်္ချာနည်းဥပဒေ",
    collocation: "Success formula",
    dailyPhrase: "It's true that there is no magic formula for instant success."
  },
  {
    word: "Found",
    meaning: "တည်ထောင်သည် (သို့) စတင်စိုက်ထူသည်",
    collocation: "Found a company",
    dailyPhrase: "It's ambitious to found an independent technology brand."
  },
  {
    word: "Function",
    meaning: "တစ်ခုခု၏ ရည်ရွယ်ချက် (သို့) တာဝန်ဝတ္တရား",
    collocation: "Primary function",
    dailyPhrase: "It's essential to understand the primary function of this program."
  },
  {
    word: "Put up with",
    meaning: "သည်းခံသည်",
    collocation: "Put up with stress",
    dailyPhrase: "It's hard to put up with continuous noise."
  },
  {
    word: "Run after",
    meaning: "လိုက်လံဖမ်းဆီးသည်/လိုက်သည်",
    collocation: "Run after a goal",
    dailyPhrase: "It's important to run after your dreams."
  },
  {
    word: "Run over",
    meaning: "ကားတိုက်မိသည်/ကျော်လွန်သည်",
    collocation: "Run over time",
    dailyPhrase: "It's common for meetings to run over time."
  },
  {
    word: "Run through",
    meaning: "လေ့ကျင့်သည်/အမြန်ဖတ်ရှုသည်",
    collocation: "Run through the draft",
    dailyPhrase: "It's useful to run through your presentation beforehand."
  },
  {
    word: "Set off",
    meaning: "ခရီးစတင်ထွက်ခွာသည်",
    collocation: "Set off early",
    dailyPhrase: "It's smart to set off early to avoid traffic."
  },
  {
    word: "Show off",
    meaning: "ဂုဏ်ပြသည်/ကြွားဝါသည်",
    collocation: "Show off skills",
    dailyPhrase: "It's unnecessary to show off your abilities."
  },
  {
    word: "Slow down",
    meaning: "အရှိန်လျှော့ချသည်",
    collocation: "Slow down pace",
    dailyPhrase: "It's healthy to slow down when you feel exhausted."
  },
  {
    word: "Stand up",
    meaning: "ထရပ်သည်/ရပ်တည်သည်",
    collocation: "Stand up for rights",
    dailyPhrase: "It's vital to stand up for what is right."
  },
  {
    word: "Stand out",
    meaning: "ထူးခြားပေါ်လွင်သည်",
    collocation: "Stand out from the crowd",
    dailyPhrase: "It's helpful to have a unique CV to stand out."
  },
  {
    word: "Take back",
    meaning: "ပြန်ယူသည်/စကားပြန်ရုပ်သိမ်းသည်",
    collocation: "Take back words",
    dailyPhrase: "It's wise to think before speaking so you don't take back words."
  },
  {
    word: "Take down",
    meaning: "ချွတ်ချသည်/မှတ်စုရေးသည်",
    collocation: "Take down notes",
    dailyPhrase: "It's essential to take down key points during lectures."
  },
  {
    word: "Take in",
    meaning: "လိမ်လည်ခံရသည်/နားလည်သဘောပေါက်သည်",
    collocation: "Take in information",
    dailyPhrase: "It's difficult to take in too much information at once."
  },
  {
    word: "Tear up",
    meaning: "စက္ကူစုတ်ပြဲအောင်ဆွဲဖြဲသည်",
    collocation: "Tear up documents",
    dailyPhrase: "It's safe to tear up old confidential papers."
  },
  {
    word: "Throw away",
    meaning: "စွန့်ပစ်သည်",
    collocation: "Throw away rubbish",
    dailyPhrase: "It's important to throw away waste in proper bins."
  },
  {
    word: "Throw up",
    meaning: "အန်သည်",
    collocation: "Feel sick and throw up",
    dailyPhrase: "It's terrible to throw up after eating bad food."
  },
  {
    word: "Turn back",
    meaning: "လှည့်ပြန်သည်",
    collocation: "Turn back home",
    dailyPhrase: "It's necessary to turn back if you forgot your keys."
  },
  {
    word: "Turn into",
    meaning: "ပုံစံတစ်ခုသို့ ပြောင်းလဲသွားသည်",
    collocation: "Turn into reality",
    dailyPhrase: "It's amazing when hard work turns into success."
  },
  {
    word: "Turn off",
    meaning: "စက်/မီး ပိတ်သည်",
    collocation: "Turn off lights",
    dailyPhrase: "It's responsible to turn off lights when leaving a room."
  },
  {
    word: "Wake up",
    meaning: "နိုးထသည်",
    collocation: "Wake up early",
    dailyPhrase: "It's refreshing to wake up early in the morning."
  },
  {
    word: "Watch out",
    meaning: "သတိထားသည်",
    collocation: "Watch out for danger",
    dailyPhrase: "It's crucial to watch out when crossing busy streets."
  },

  // --- Page 2: More Phrasal Verbs ---
  {
    word: "Look forward to",
    meaning: "မျှော်လင့်စောင့်စားသည်",
    collocation: "Look forward to meeting",
    dailyPhrase: "It's exciting to look forward to the weekend."
  },
  {
    word: "Cut down on",
    meaning: "လျှော့ချသည်/ရပ်တန့်အောင်လုပ်သည်",
    collocation: "Cut down on sugar",
    dailyPhrase: "It's healthy to cut down on junk food."
  },
  {
    word: "Put out",
    meaning: "မီးငြှိမ်းသတ်သည်/ထုတ်ဝေသည်",
    collocation: "Put out a fire",
    dailyPhrase: "It's dangerous when you fail to put out a campfire."
  },
  {
    word: "Go over",
    meaning: "ပြန်လည်စစ်ဆေးသည်",
    collocation: "Go over notes",
    dailyPhrase: "It's smart to go over lessons before an exam."
  },
  {
    word: "Back up",
    meaning: "ထောက်ခံသည်/ဒေတာသိမ်းဆည်းသည်",
    collocation: "Back up files",
    dailyPhrase: "It's crucial to back up your computer files regularly."
  },
  {
    word: "Fall apart",
    meaning: "ပြိုကွဲပျက်စီးသည်",
    collocation: "Fall apart easily",
    dailyPhrase: "It's easy for poor quality items to fall apart."
  },
  {
    word: "Set up",
    meaning: "တည်ထောင်သည်/စတင်သည်",
    collocation: "Set up a business",
    dailyPhrase: "It's ambitious to set up a new company."
  },
  {
    word: "Show up",
    meaning: "ပေါ်လာသည်/ရောက်ရှိလာသည်",
    collocation: "Show up on time",
    dailyPhrase: "It's polite to show up on time for appointments."
  },
  {
    word: "Bring about",
    meaning: "ဖြစ်ပေါ်စေသည်",
    collocation: "Bring about change",
    dailyPhrase: "It's innovation that helps bring about positive change."
  },
  {
    word: "Break into",
    meaning: "အတင်းအကျပ်ဝင်ရောက်ဖောက်ထွင်းသည်",
    collocation: "Break into a house",
    dailyPhrase: "It's illegal to break into private property."
  },
  {
    word: "Get away with",
    meaning: "ပြစ်ဒဏ်မှလွတ်မြောက်သည်",
    collocation: "Get away with a crime",
    dailyPhrase: "It's wrong to think you can get away with breaking rules."
  },
  {
    word: "Come up with",
    meaning: "ဉာဏ်ကူကွက်ထုတ်သည်/တီထွင်ကြံဆသည်",
    collocation: "Come up with an idea",
    dailyPhrase: "It's brilliant to come up with creative solutions."
  },
  {
    word: "Work out",
    meaning: "လေ့ကျင့်ခန်းလုပ်သည်/ဖြေရှင်းသည်",
    collocation: "Work out daily",
    dailyPhrase: "It's healthy to work out at the gym."
  },
  {
    word: "Give up",
    meaning: "လက်လျှော့သည်/စွန့်လွှတ်သည်",
    collocation: "Never give up",
    dailyPhrase: "It's important never to give up when things get tough."
  },
  {
    word: "Go through",
    meaning: "ဖြတ်သန်းသည်/စစ်ဆေးသည်",
    collocation: "Go through hardships",
    dailyPhrase: "It's normal to go through challenges in life."
  },
  {
    word: "Fill in",
    meaning: "ဖြည့်စွက်သည်",
    collocation: "Fill in a form",
    dailyPhrase: "It's required to fill in your details correctly."
  },
  {
    word: "Look up",
    meaning: "ရှာဖွေကြည့်ရှုသည်",
    collocation: "Look up a word",
    dailyPhrase: "It's helpful to look up new words in a dictionary."
  },
  {
    word: "Keep up",
    meaning: "အရှိန်အဟုန်ကိုထိန်းထားသည်",
    collocation: "Keep up the good work",
    dailyPhrase: "It's encouraging to keep up consistent practice."
  },
  {
    word: "Put on",
    meaning: "ဝတ်ဆင်သည်/အလေးချိန်တက်လာသည်",
    collocation: "Put on clothes",
    dailyPhrase: "It's warm, so put on a jacket."
  },

  // --- Page 3: Additional Phrasal Verbs ---
  {
    word: "Call up",
    meaning: "ဖုန်းခေါ်ဆိုသည်",
    collocation: "Call up a friend",
    dailyPhrase: "It's nice to call up family members over the weekend."
  },
  {
    word: "Calm down",
    meaning: "စိတ်ကိုငြိမ်အောင်ထားသည်",
    collocation: "Calm down quickly",
    dailyPhrase: "It's important to calm down during stressful moments."
  },
  {
    word: "Cut in",
    meaning: "ကြားဖြတ်ပြောဆိုသည်/ဝင်ရောက်နှောင့်ယှက်သည်",
    collocation: "Cut in on a conversation",
    dailyPhrase: "It's impolite to cut in while others are talking."
  },
  {
    word: "Do over",
    meaning: "ပြန်လည်လုပ်ဆောင်သည်",
    collocation: "Do over the task",
    dailyPhrase: "It's frustrating to do over a failed assignment."
  },
  {
    word: "Figure out",
    meaning: "စဥ်းစားတွေ့ရှိသည်/နားလည်သဘောပေါက်သည်",
    collocation: "Figure out a problem",
    dailyPhrase: "It's satisfying to figure out a difficult bug in code."
  },
  {
    word: "Find out",
    meaning: "ရှာဖွေတွေ့ရှိသည်",
    collocation: "Find out the truth",
    dailyPhrase: "It's crucial to find out accurate information."
  },
  {
    word: "Get by",
    meaning: "အသက်ဆက်သည်/ရပ်တည်နိုင်သည်",
    collocation: "Get by with limited funds",
    dailyPhrase: "It's possible to get by with basic savings."
  },
  {
    word: "Go ahead",
    meaning: "ရှေ့ဆက်လုပ်ဆောင်သည်",
    collocation: "Go ahead with plans",
    dailyPhrase: "It's fine to go ahead with the project."
  },
  {
    word: "Hang out",
    meaning: "အချိန်ဖြုန်းသည်/အပျော်သွားသည်",
    collocation: "Hang out with friends",
    dailyPhrase: "It's relaxing to hang out at a cozy cafe."
  },
  {
    word: "Hold back",
    meaning: "ထိန်းချုပ်သည်/တားဆီးသည်",
    collocation: "Hold back emotions",
    dailyPhrase: "It's sometimes hard to hold back tears."
  },
  {
    word: "Keep away",
    meaning: "ဝေးဝေးနေသည်",
    collocation: "Keep away from danger",
    dailyPhrase: "It's wise to keep away from toxic environments."
  },
  {
    word: "Keep out",
    meaning: "အပြင်မှာနေသည်/မဝင်ရောက်စေရ",
    collocation: "Keep out of trouble",
    dailyPhrase: "It's smart to keep out of unnecessary arguments."
  },
  {
    word: "Keep off",
    meaning: "ဝေးဝေးနေသည်/မထိတွေ့ရ",
    collocation: "Keep off the grass",
    dailyPhrase: "It's a rule to keep off the wet lawn."
  },
  {
    word: "Let down",
    meaning: "စိတ်ပျက်စေသည်",
    collocation: "Let down expectations",
    dailyPhrase: "It's painful to let down people who trust you."
  },
  {
    word: "Look out",
    meaning: "သတိထားသည်",
    collocation: "Look out for cars",
    dailyPhrase: "It's vital to look out when crossing streets."
  },
  {
    word: "Mix up",
    meaning: "ရောထွေးသွားသည်/မှားယွင်းသည်",
    collocation: "Mix up dates",
    dailyPhrase: "It's easy to mix up schedule times if unorganized."
  },
  {
    word: "Pay back",
    meaning: "ငွေပြန်ဆပ်သည်",
    collocation: "Pay back money",
    dailyPhrase: "It's honest to pay back borrowed money on time."
  },
  {
    word: "Point out",
    meaning: "ညွှန်ပြသည်",
    collocation: "Point out mistakes",
    dailyPhrase: "It's helpful when teachers point out grammar errors."
  },
  {
    word: "Work on",
    meaning: "ကြိုးစားလုပ်ဆောင်နေသည်",
    collocation: "Work on a project",
    dailyPhrase: "It's time to work on front-end web development."
  },
  {
    word: "Break away",
    meaning: "ခွဲထွက်သည်/လွတ်မြောက်သွားသည်",
    collocation: "Break away from crowds",
    dailyPhrase: "It's peaceful to break away from busy city life."
  },
  {
    word: "Bring back",
    meaning: "ပြန်လည်ယူဆောင်လာသည်",
    collocation: "Bring back memories",
    dailyPhrase: "It's sweet when old songs bring back childhood memories."
  },
  {
    word: "Call back",
    meaning: "ဖုန်းပြန်ခေါ်သည်",
    collocation: "Call back later",
    dailyPhrase: "It's polite to ask if you can call back later."
  },
  {
    word: "Carry away",
    meaning: "စိတ်လှုပ်ရှားလွန်း၍ သတိလွတ်သွားသည်",
    collocation: "Get carried away",
    dailyPhrase: "It's easy to get carried away when shopping."
  },
  {
    word: "Come along",
    meaning: "လိုက်ပါလာသည်/တိုးတက်လာသည်",
    collocation: "Come along nicely",
    dailyPhrase: "It's wonderful to see your coding skills come along nicely."
  },
  {
    word: "Cut back",
    meaning: "ဖြတ်တောက်လျှော့ချသည်",
    collocation: "Cut back expenses",
    dailyPhrase: "It's necessary to cut back unnecessary costs."
  },
  {
    word: "Drop out",
    meaning: "ကျောင်းထွက်သည်/အသင်းမှထွက်သည်",
    collocation: "Drop out of school",
    dailyPhrase: "It's rare for students to drop out without serious reasons."
  },
  {
    word: "Get across",
    meaning: "ရှင်းလင်းစွာသိစေသည်/ရောက်ရှိအောင်ပို့သည်",
    collocation: "Get across a message",
    dailyPhrase: "It's important to get across your ideas clearly in interviews."
  },
  {
    word: "Go along with",
    meaning: "သဘောတူညီသည်/လိုက်ပါလုပ်ဆောင်သည်",
    collocation: "Go along with the plan",
    dailyPhrase: "It's best to go along with team decisions."
  },
  {
    word: "Hold out",
    meaning: "ခံနိုင်ရည်ရှိသည်/ဆွဲဆန့်သည်",
    collocation: "Hold out hope",
    dailyPhrase: "It's vital to hold out hope during difficult times."
  },
  {
    word: "Let in",
    meaning: "အခွင့်ပေးသည်/အထဲသို့ဝင်ခွင့်ပြုသည်",
    collocation: "Let in fresh air",
    dailyPhrase: "It's refreshing to open windows and let in fresh air."
  },
  {
    word: "Make out",
    meaning: "ခက်ခက်ခဲခဲမြင်ရ/ကြားရသည်",
    collocation: "Make out the words",
    dailyPhrase: "It's hard to make out signs in heavy fog."
  },
  {
    word: "Pass out",
    meaning: "သတိလစ်သွားသည်",
    collocation: "Pass out from heat",
    dailyPhrase: "It's dangerous to stay under the scorching sun and pass out."
  },
  {
    word: "Send back",
    meaning: "ပြန်ပို့သည်",
    collocation: "Send back items",
    dailyPhrase: "It's convenient to send back wrong online orders."
  },
  {
    word: "Stick to",
    meaning: "စွဲမြဲစွာလုပ်ဆောင်သည်/လိုက်နာသည်",
    collocation: "Stick to a routine",
    dailyPhrase: "It's effective to stick to a daily study schedule."
  }


]

function renderTable(dataArray) {
  let tableHTML = `
    <tr>
      <th>Word</th>
      <th>Meaning</th>
      <th>Collocation</th>
      <th>Daily Phrase</th>
    </tr>`;

  dataArray.forEach(item => {
    tableHTML += `
      <tr>
        <td>${item.word || ""}</td>
        <td>${item.meaning || ""}</td>
        <td>${item.collocation || ""}</td>
        <td>${item.dailyPhrase || ""}</td>
      </tr>
    `;
  });

  let myTable = document.querySelector("table");
  if (myTable) {
    myTable.innerHTML = tableHTML;
  }
}
let collocationList =[
  { collocation: "Do homework", meaning: "အိမ်စာလုပ်သည်" },
{collocation:"Do research", meaning:"ရှာဖွေသည်" },
{collocation:"Do project work", meaning:"ပရောဂျက်လုပ်သည်" },
{collocation:"Do a favor", meaning:"အကူအညီပေးသည်" },
{collocation:"Do your job", meaning:"အလုပ်လုပ်သည်" },
{collocation:"Do a task", meaning:"တာဝန်လုပ်ဆောင်သည်" },
{collocation:"Do a survey", meaning:"စစ်တမ်းပြုလုပ်သည်" },
{collocation:"Do business", meaning:"စီးပွားရေးလုပ်ဆောင်သည်" },
{collocation:"Do repairs", meaning:"ပြုပြင်ခြင်းလုပ်ဆောင်သည်" },
{collocation:"Do  maintenance", meaning:"ထိန်းသိမ်းမှုလုပ်ဆောင်သည်" },
{collocation:"Do the cleaning", meaning:"သန့်ရှင်းရေးလုပ်ဆောင်သည်" },
{collocation:"Do decorations", meaning:"အလှဆင်ခြင်းလုပ်ဆောင်သည်" },
{collocation:"Do renovations", meaning:"ပြုပြင်မွမ်းမံခြင်းလုပ်ဆောင်သည်" },
{collocation:"Do construction work", meaning:"ဆောက်လုပ်ခြင်းလုပ်ဆောင်သည်" },
{collocation:"Do demolition work/Carry out demolition", meaning:"ဖျက်ဆီးခြင်းလုပ်ဆောင်သည်" },
{collocation:"Do the landscaping", meaning:"မြေညှိခြင်းလုပ်ဆောင်သည်" },
{collocation:"Do the gardening", meaning:"ဥယျာဉ်စိုက်ပျိုးခြင်းလုပ်ဆောင်သည်" },
{collocation:"Do the cooking", meaning:"ချက်ပြုတ်ခြင်းလုပ်ဆောင်သည်" },
{collocation:"Do some baking", meaning:"မုန့်ဖုတ်ခြင်းလုပ်ဆောင်သည်" },
{collocation:"Make a decision", meaning:"ဆုံးဖြတ်ချက်ချသည်" },
{collocation:"Make a choice", meaning:"ရွေးချယ်မှုလုပ်ဆောင်သည်" },
{collocation:"Make a plan", meaning:"အစီအစဉ်ရေးဆွဲသည်" },
{collocation:"Make a schedule", meaning:"အချိန်ဇယားရေးဆွဲသည်" },
{collocation:"Make a list", meaning:"စာရင်းရေးဆွဲသည်" },
{collocation:"Make a note", meaning:"မှတ်စုရေးဆွဲသည်" },
{collocation:"Make a record", meaning:"မှတ်တမ်းတင်သည်" },
{collocation:"Make a report", meaning:"အစီရင်ခံစာရေးဆွဲသည်" },
{collocation:"Make a presentation", meaning:"တင်ပြချက်ပြုလုပ်သည်" },
{collocation:"Make a speech", meaning:"စကားပြောခြင်းလုပ်ဆောင်သည်" },
{collocation:"Make a toast", meaning:"မဂ်လာစကားေပြာကြားသည်" },
{collocation:"Make a wish", meaning:"ဆုတောင်းခြင်းလုပ်ဆောင်သည်" },
{collocation:"Make a promise", meaning:"ကတိပြုခြင်းလုပ်ဆောင်သည်" },
{collocation:"Make a commitment", meaning:"ကတိပြုခြင်းလုပ်ဆောင်သည်" },
{collocation:"Make a suggestion", meaning:"အကြံပေးခြင်းလုပ်ဆောင်သည်" },
{collocation:"Make a recommendation", meaning:"အကြံပေးခြင်းလုပ်ဆောင်သည်" },
{collocation:"Make a complaint", meaning:"တိုင်ကြားခြင်းလုပ်ဆောင်သည်" },
{collocation:"Make a request", meaning:"တောင်းဆိုခြင်းလုပ်ဆောင်သည်" },
{collocation:"Make a reservation", meaning:"ကြိုတင်ဘိုကင်တင်သည်" },
{collocation:"Make a booking", meaning:"ကြိုတင်ဘိုကင်တင်သည်" },
{collocation:"Make a payment", meaning:"ငွေပေးချေမှုလုပ်ဆောင်သည်" },
{collocation:"Make a transfer", meaning:"ငွေလွှဲပြောင်းမှုလုပ်ဆောင်သည်" },
{collocation:"Make a withdrawal", meaning:"ငွေထုတ်ယူမှုလုပ်ဆောင်သည်" },
{collocation:"Make a deposit", meaning:"ငွေသိုလှောင်မှုလုပ်ဆောင်သည်" },
{collocation:"Make a refund", meaning:"ငွေပြန်အမ်းမှုလုပ်ဆောင်သည်" },
{collocation:"Make a return", meaning:"ပစ္စည်းပြန်လည်ပေးပို့မှုလုပ်ဆောင်သည်" },
{collocation:"Make a transaction",meaning:"ေငွလွဲေပြာင်းမှုပြုလုပ်သည်"},
{collocation:"Make a payment",meaning:"ေငွ ေပးေချမှုပြုလုပ်သည်"},
{collocation:"Make a transfer",meaning:"ေငွလွဲမှုပြုလုပ်သည်"},
{collocation:"Make a withdrawal",meaning:"ေငွထုတ်ယူမှုပြုလုပ်သည်"},
{collocation:"Make a deposit",meaning:"ေငွသွင်းယူမှုပြုလုပ်သည်"},
{collocation:"Have a meeting", meaning:"အစည်းအဝေးကျင်းပသည်" },
{collocation:"Have a discussion", meaning:"ဆွေးနွေးပွဲကျင်းပသည်" },
{collocation:"Have a conversation", meaning:"စကားပြောသည်" },
{collocation:"Have a chat", meaning:"စကားပြောခြင်းလုပ်ဆောင်သည်" },
{collocation:"Have a talk", meaning:"စကားပြောခြင်းလုပ်ဆောင်သည်" },
{collocation:"Have a debate", meaning:"ဆွေးနွေးပွဲကျင်းပသည်" },
{collocation:"Have a negotiation", meaning:"ညှိနှိုင်းဆွေးနွေးပွဲကျင်းပသည်" },
{collocation:"Have a deal", meaning:"အပေါင်းသင်းဆောင်ရွက်သည်" },
{collocation:"Have a contract", meaning:"စာချုပ်လုပ်ဆောင်သည်" },
{collocation:"Have a business", meaning:"စီးပွားရေးလုပ်ဆောင်သည်" },
{collocation:"Have a repair", meaning:"ပြုပြင်ခြင်းလုပ်ဆောင်သည်" },
{collocation:"Get a refund",meaning:"ေငွပြန်အမ်းသည်"},
{collocation:"Get a replacement",meaning:"အစားထိုးပစ္စည်းရရှိသည်"},
{collocation:"Get married", meaning:"လက်ထပ်သည်"},
{collocation:"Get lost",meaning:"ေပျာက်ဆုံးသည်"},
{collocation:"Get angry",meaning:"စိတ်ဆိုးသည်"},
{collocation:"Get a job",meaning:"အလုပ်ရသည်"},
{collocation:"Get a ready",meaning:"အဆင့်သင့်ဖြစ်သည်"},
{collocation:"Get a chance",meaning:"အခွင့်အလမ်းရသည်"},
{collocation:"Get a promotion",meaning:"ရာထူးတိုးသည်"},
{collocation:"Get a raise",meaning:"လစာတိုးသည်"},
{collocation:"Get a bonus",meaning:"အပိုဆုရသည်"},
{collocation:"Get a reward",meaning:"ဆုချီးမြှင့်ခံရသည်"},
{collocation:"Get a certificate",meaning:"လက်မှတ်ရသည်"},
{collocation:"Get a diploma",meaning:"ဒီပလိုမာရသည်"},
{collocation:"Get a degree",meaning:"ဘွဲ့ရသည်"},
{collocation:"Get a license",meaning:"လိုင်စင်ရသည်"},
{collocation:"Get a permit",meaning:"ခွင့်ပြုချက်ရသည်"},
{collocation:"Get a visa",meaning:"ဗီဇာရသည်"},
{collocation:"Get a passport",meaning:"နိုင်ငံကူးလက်မှတ်ရသည်"},
{collocation:"Get a ticket",meaning:"လက်မှတ်ရသည်"},
{collocation:"Get a reservation",meaning:"ကြိုတင်စာရင်းသွင်းခြင်းရသည်"},
{collocation:"Get a booking",meaning:"ကြိုတင်စာရင်းသွင်းခြင်းရသည်"},
{collocation:"Get a confirmation",meaning:"အတည်ပြုချက်ရသည်"},
{collocation:"Get a notification",meaning:"အသိပေးချက်ရသည်"},
{collocation:"Get a message",meaning:"စာရရှိသည်"},
{collocation:"Get a call",meaning:"ဖုန်းခေါ်ဆိုမှုရသည်"},
{collocation:"Get a text",meaning:"စာတိုရသည်"},
{collocation:"Get an email",meaning:"အီးမေးလ်ရသည်"},
{collocation:"Get a letter",meaning:"စာရသည်"},
{collocation:"Get a package",meaning:"ထုပ်ပိုးပစ္စည်းရသည်"},
{collocation:"Get a delivery",meaning:"ပစ္စည်းပို့ဆောင်မှုရသည်"},
{collocation:"Get a shipment",meaning:"ပစ္စည်းပို့ဆောင်မှုရသည်"},
{collocation:"Get a order",meaning:"အမှာစာရသည်"},
{collocation:"Get a request",meaning:"တောင်းဆိုမှုရသည်"},
{collocation:"Pay attention",meaning:"ဂရုစိုက်သည်"},
{collocation:"Pay a visit",meaning:"အလည်အပတ်သွားသည်"},
{collocation:"Pay a compliment",meaning:"ချီးမွမ်းခြင်းပေးသည်"},
{collocation:"Pay a debt",meaning:"ချေးငွေပြန်ဆပ်သည်"},
{collocation:"Pay a fine",meaning:"ဒဏ်ငွေချေသည်"},
{collocation:"Pay a bill",meaning:"ဘီလ်ချေသည်"},
{collocation:"Pay a fee",meaning:"ကြေးချေသည်"},
{collocation:"Pay a tax",meaning:"အခွန်ချေသည်"},
{collocation:"Pay a salary",meaning:"လစာပေးသည်"},
{collocation:"Pay a wage",meaning:"လုပ်အားခပေးသည်"},
{collocation:"Pay a rent",meaning:"ငှားရမ်းခပေးသည်"},
{collocation:"Pay a mortgage",meaning:"အိမ်ခြံမြေငှားရမ်းခပေးသည်"},
{collocation:"Pay a insurance policy",meaning:"အာမခံပေးသည်"},
{collocation:"Pay a premium",meaning:"အာမခံကြေးပေးသည်"},
{collocation:"Pay a contribution",meaning:"ထောက်ပံ့ပေးသည်"},
{collocation:"Pay a donation",meaning:"လှူဒါန်းပေးသည်"},
{collocation:"Pay a subscription",meaning:"စာရင်းသွင်းခပေးသည်"},
{collocation:"Pay a installment",meaning:"အပိုဆပ်ငွေချေသည်"},
{collocation:"Pay a balance",meaning:"ကျန်ငွေချေသည်"},
{collocation:"Pay a settlement",meaning:"သက်သာစေရန်ငွေချေသည်"},
{collocation:"Pay a compensation",meaning:"အစားထိုးငွေချေသည်"},
{collocation:"Pay a reimbursement",meaning:"ပြန်လည်ငွေချေသည်"},
{collocation:"Pay a refund",meaning:"ငွေပြန်အမ်းပေးသည်"},
{collocation:"Pay for a replacement",meaning:"အစားထိုးပစ္စည်းငွေချေသည်"},
{collocation:"Pay for a repair",meaning:"ပြုပြင်ခြင်းငွေချေသည်"},
{collocation:"Pay for a maintenance",meaning:"ထိန်းသိမ်းမှုငွေချေသည်"},
{collocation:"Pay for a cleaning",meaning:"သန့်ရှင်းရေးငွေချေသည်"},
{collocation:"Pay for a decoration",meaning:"အလှဆင်ခြင်းငွေချေသည်"},
{collocation:"Pay for a renovation",meaning:"ပြုပြင်မွမ်းမံခြင်းငွေချေသည်"},
{ collocation: "Go on a trip", meaning: "ခရီးထွက်သည်" },
  { collocation: "Go on holiday", meaning: "အားလပ်ရက်ခရီးထွက်သည်" },
  { collocation: "Go on vacation", meaning: "အားလပ်ရက်ခရီးထွက်သည်" },
  { collocation: "Go on a tour", meaning: "လေ့လာရေးခရီးထွက်သည်" },
  { collocation: "Go for a walk", meaning: "လမ်းလျှောက်ထွက်သည်" },
  { collocation: "Go for a run", meaning: "ပြေးဖို့ထွက်သည်" },
  { collocation: "Go for a drive", meaning: "ကားမောင်းထွက်သည်" },
  { collocation: "Go fishing", meaning: "ငါးမျှားသွားသည်" },
  { collocation: "Go hunting", meaning: "အမဲလိုက်သွားသည်" },
  { collocation: "Go swimming", meaning: "ရေကူးသွားသည်" },
  { collocation: "Go shopping", meaning: "ဈေးဝယ်ထွက်သည်" },
  { collocation: "Go hiking", meaning: "တောင်တက်ခရီးသွားသည်" },
  { collocation: "Go jogging", meaning: "အပြေးလေ့ကျင့်ခန်းသွားသည်" },
  { collocation: "Go camping", meaning: "တဲထိုးစခန်းချသွားသည်" },
  { collocation: "Go skiing", meaning: "နှင်းလျှောစီးသွားသည်" },
  { collocation: "Go blind", meaning: "မျက်စိကွယ်သွားသည်" },
  { collocation: "Go deaf", meaning: "နားမကြားတော့ဖြစ်သွားသည်" },
  { collocation: "Go grey", meaning: "ဆံပင်တွေမီးခိုးရောင်ပြောင်းသွားသည်" },
  { collocation: "Go bald", meaning: "ဆံပင်ကျွတ်၍ထောင်သွားသည်" },
  { collocation: "Go mad", meaning: "ရူးသွပ်သွားသည်" },
  { collocation: "Go crazy", meaning: "စိတ်ဓာတ်ကျ/ရူးသွပ်သွားသည်" },
  { collocation: "Go bad", meaning: "ပုပ်သိုးပျက်စီးသွားသည်" },
  { collocation: "Go online", meaning: "အင်တာနက်ချိတ်ဆက်သည်" },

  // --- Hold Collocations ---
  { collocation: "Hold a meeting", meaning: "အစည်းအဝေးကျင်းပသည်" },
  { collocation: "Hold a conference", meaning: "ညီလာခံကျင်းပသည်" },
  { collocation: "Hold a seminar", meaning: "ဆွေးနွေးပွဲကျင်းပသည်" },
  { collocation: "Hold an event", meaning: "ပွဲလမ်းသဘင်ကျင်းပသည်" },
  { collocation: "Hold an election", meaning: "ရွေးကောက်ပွဲကျင်းပသည်" },
  { collocation: "Hold a competition", meaning: "ပြိုင်ပွဲကျင်းပသည်" },
  { collocation: "Hold a training", meaning: "သင်တန်း/လေ့ကျင့်ရေးကျင်းပသည်" },
  { collocation: "Hold hands", meaning: "လက်တွဲထားသည်" },
  { collocation: "Hold a grudge", meaning: "အငြိုးအတေးထားသည်" },
  { collocation: "Hold breath", meaning: "အသက်ရှူအောင့်ထားသည်" },
  { collocation: "Hold the line", meaning: "ဖုန်းလိုင်းကိုခဏစောင့်သည်" },
  { collocation: "Hold a position", meaning: "ရာထူး/နေရာတစ်ခုကိုယူထားသည်" },
  { collocation: "Hold a record", meaning: "စံချိန်ထိန်းသိမ်းထားသည်" },
  { collocation: "Hold a conversation", meaning: "စကားပြောဆိုမှုကိုဆက်လက်ထိန်းထားသည်" },
  { collocation: "Take a break", meaning: "ခဏနားသည်" },
  { collocation: "Take a rest", meaning: "အနားယူသည်" },
  { collocation: "Take a shower", meaning: "ရေချိုးသည်" },
  { collocation: "Take a photo", meaning: "ဓာတ်ပုံရိုက်သည်" },
  { collocation: "Take a risk", meaning: "စွန့်စားသည်" },
  { collocation: "Take a chance", meaning: "စွန့်စားကြည့်သည်" },
  { collocation: "Take an exam", meaning: "စာမေးပွဲဖြေသည်" },
  { collocation: "Take a test", meaning: "စမ်းသပ်မှု/စာမေးပွဲဖြေသည်" },
  { collocation: "Take notes", meaning: "မှတ်စုရေးမှတ်သည်" },
  { collocation: "Take medicine", meaning: "ဆေးသောက်သည်" },
  { collocation: "Take time", meaning: "အချိန်ယူသည်" },
  { collocation: "Take a seat", meaning: "ထိုင်သည်/နေရာယူသည်" },
  { collocation: "Take action", meaning: "အရေးယူ/လုပ်ဆောင်သည်" },

  { collocation: "Keep a secret", meaning: "လျှို့ဝှက်ချက်ထိန်းသည်" },
  { collocation: "Keep a promise", meaning: "ကတိတည်သည်" },
  { collocation: "Keep in touch", meaning: "အဆက်အသွယ်မပြတ်ရှိသည်" },
  { collocation: "Keep quiet", meaning: "တိတ်တိတ်နေသည်" },
  { collocation: "Keep calm", meaning: "တည်တည်ငြိမ်ငြိမ်နေသည်" },
  { collocation: "Keep a diary", meaning: "နေ့စဉ်မှတ်တမ်းရေးသည်" },
  { collocation: "Keep an eye on", meaning: "စောင့်ကြည့်ပေးသည်" },

  { collocation: "Catch a cold", meaning: "အအေးမိသည်" },
  { collocation: "Catch a bus", meaning: "ဘတ်စ်ကားမှီအောင်စီးသည်" },
  { collocation: "Catch a train", meaning: "ရထားမှီအောင်စီးသည်" },
  { collocation: "Catch a flight", meaning: "လေယာဉ်မှီသည်" },
  { collocation: "Catch fire", meaning: "မီးစွဲသည်" },
  { collocation: "Catch attention", meaning: "အာရုံဖမ်းစားသည်" },

  { collocation: "Give advice", meaning: "အကြံဉာဏ်ပေးသည်" },
  { collocation: "Give a hand", meaning: "ကူညီပေးသည်" },
  { collocation: "Give a presentation", meaning: "တင်ပြချက်ပြုလုပ်သည်" },
  { collocation: "Give a call", meaning: "ဖုန်းဆက်သည်" },
  { collocation: "Give permission", meaning: "ခွင့်ပြုချက်ပေးသည်" },
  { collocation: "Give a chance", meaning: "အခွင့်အရေးပေးသည်" },

  { collocation: "Break a promise", meaning: "ကတိဖျက်သည်" },
  { collocation: "Break a law", meaning: "ဥပဒေချိုးဖောက်သည်" },
  { collocation: "Break a record", meaning: "စံချိန်ချိုးသည်" },
  { collocation: "Break a habit", meaning: "အကျင့်ဆိုးကိုဖျက်သည်" },
  { collocation: "Break the ice", meaning: "စကားစမြည်စတင်ပြောသည်" },

  { collocation: "Come true", meaning: "အမှန်တကယ်ဖြစ်လာသည်" },
  { collocation: "Come to an end", meaning: "ပြီးဆုံးခြင်းသို့ရောက်သည်" },
  { collocation: "Come to a decision", meaning: "ဆုံးဖြတ်ချက်သို့ရောက်သည်" },
  { collocation: "Come early", meaning: "စောစောလာသည်" },
  { collocation: "Come late", meaning: "နောက်ကျမှလာသည်" },

  { collocation: "Run a business", meaning: "စီးပွားရေးလုပ်ငန်းဦးစီးသည်" },
  { collocation: "Run out of time", meaning: "အချိန်ကုန်သွားသည်" },
  { collocation: "Run a risk", meaning: "စွန့်စားရမှုရှိသည်" },
  { collocation: "Run a test", meaning: "စမ်းသပ်မှုပြုလုပ်သည်" },
  { collocation: "Set an alarm", meaning: "နှိုးစက်ပေးသည်" },
  { collocation: "Set a goal", meaning: "ပန်းတိုင်သတ်မှတ်သည်" },
  { collocation: "Set a date", meaning: "ရက်စွဲသတ်မှတ်သည်" },
  { collocation: "Set a limit", meaning: "ကန့်သတ်ချက်ထားသည်" },
  { collocation: "Set a record", meaning: "စံချိန်သစ်တင်သည်" },
  { collocation: "Set a table", meaning: "ထမင်းစားပွဲပြင်သည်" },
  { collocation: "Set an example", meaning: "စံနမူနာပြသည်" },

  { collocation: "Save time", meaning: "အချိန်သက်သာစေသည်" },
  { collocation: "Save money", meaning: "ငွေစုသည်/ငွေသက်သာသည်" },
  { collocation: "Save space", meaning: "နေရာသက်သာသည်" },
  { collocation: "Save energy", meaning: "စွမ်းအင်ချွေတာသည်" },
  { collocation: "Save a life", meaning: "အသက်ကိုကယ်တင်သည်" },

  { collocation: "Miss a bus", meaning: "ဘတ်စ်ကားလွတ်သွားသည်" },
  { collocation: "Miss a train", meaning: "ရထားလွတ်သွားသည်" },
  { collocation: "Miss a flight", meaning: "လေယာဉ်လွတ်သွားသည်" },
  { collocation: "Miss an opportunity", meaning: "အခွင့်အရေးလွတ်သွားသည်" },
  { collocation: "Miss a deadline", meaning: "သတ်မှတ်ရက်လွန်သွားသည်" },
  { collocation: "Miss a meeting", meaning: "အစည်းအဝေးမတက်လိုက်ရပါ" },

  { collocation: "Put pressure on", meaning: "ဖိအားပေးသည်" },
  { collocation: "Put effort into", meaning: "ကြိုးစားအားထုတ်မှုထည့်သည်" },
  { collocation: "Put an end to", meaning: "အဆုံးသတ်လိုက်သည်" },
  { collocation: "Put a stop to", meaning: "ရပ်တန့်လိုက်သည်" },

  { collocation: "Turn on", meaning: "မီး/စက်ဖွင့်သည်" },
  { collocation: "Turn off", meaning: "မီး/စက်ပိတ်သည်" },
  { collocation: "Turn a corner", meaning: "အကွေ့တစ်ခုသို့ကွေ့သည်/အခြေအနေကောင်းလာသည်" },
  { collocation: "Turn page", meaning: "စာမျက်နှာလှန်သည်" },

  { collocation: "Set an alarm", meaning: "နှိုးစက်ပေးသည်" },
  { collocation: "Set a goal", meaning: "ပန်းတိုင်သတ်မှတ်သည်" },
  { collocation: "Set a date", meaning: "ရက်စွဲသတ်မှတ်သည်" },
  { collocation: "Set a limit", meaning: "ကန့်သတ်ချက်ထားသည်" },
  { collocation: "Set a record", meaning: "စံချိန်သစ်တင်သည်" },
  { collocation: "Set a table", meaning: "ထမင်းစားပွဲပြင်သည်" },
  { collocation: "Set an example", meaning: "စံနမူနာပြသည်" },

  { collocation: "Save time", meaning: "အချိန်သက်သာစေသည်" },
  { collocation: "Save money", meaning: "ငွေစုသည်/ငွေသက်သာသည်" },
  { collocation: "Save space", meaning: "နေရာသက်သာသည်" },
  { collocation: "Save energy", meaning: "စွမ်းအင်ချွေတာသည်" },
  { collocation: "Save a life", meaning: "အသက်ကိုကယ်တင်သည်" },

  { collocation: "Miss a bus", meaning: "ဘတ်စ်ကားလွတ်သွားသည်" },
  { collocation: "Miss a train", meaning: "ရထားလွတ်သွားသည်" },
  { collocation: "Miss a flight", meaning: "လေယာဉ်လွတ်သွားသည်" },
  { collocation: "Miss an opportunity", meaning: "အခွင့်အရေးလွတ်သွားသည်" },
  { collocation: "Miss a deadline", meaning: "သတ်မှတ်ရက်လွန်သွားသည်" },
  { collocation: "Miss a meeting", meaning: "အစည်းအဝေးမတက်လိုက်ရပါ" },

  { collocation: "Put pressure on", meaning: "ဖိအားပေးသည်" },
  { collocation: "Put effort into", meaning: "ကြိုးစားအားထုတ်မှုထည့်သည်" },
  { collocation: "Put an end to", meaning: "အဆုံးသတ်လိုက်သည်" },
  { collocation: "Put a stop to", meaning: "ရပ်တန့်လိုက်သည်" },

  { collocation: "Turn on", meaning: "မီး/စက်ဖွင့်သည်" },
  { collocation: "Turn off", meaning: "မီး/စက်ပိတ်သည်" },
  { collocation: "Turn a corner", meaning: "အကွေ့တစ်ခုသို့ကွေ့သည်/အခြေအနေကောင်းလာသည်" },
  { collocation: "Turn page", meaning: "စာမျက်နှာလှန်သည်" },

  { collocation: "Account for", meaning: "ရာခိုင်နှုန်း/အကြောင်းအရင်းကို တာဝန်ယူ/ဖော်ပြသည်" },
  { collocation: "Bring about", meaning: "ပြောင်းလဲမှု/ရလဒ်ကို ဖြစ်ပေါ်စေသည်" },
  { collocation: "Stem from", meaning: "အကြောင်းအရင်းမှ စတင်ဖြစ်ပွားသည်" },
  { collocation: "Result in", meaning: "ရလဒ်အဖြစ် ဦးတည်စေသည်" },
  { collocation: "Lead to", meaning: "အကျိုးဆက်သို့ ဦးတည်စေသည်" },
  { collocation: "Pave the way for", meaning: "လမ်းခင်းပေးသည်/အခွင့်အလမ်းပွင့်စေသည်" },
  { collocation: "Phase out", meaning: "တဖြည်းဖြည်းချင်း လျှော့ချ/ဖျက်သိမ်းသည်" },
  { collocation: "Rely on / Depend on", meaning: "မှီခို/အားကိုးရသည်" },

  { collocation: "Wipe out", meaning: "အပြီးတိုင် ဖျက်ဆီး/မျိုးသုဉ်းစေသည်" },
  { collocation: "Die out", meaning: "မျိုးသုဉ်းပျောက်ကွယ်သွားသည်" },
  { collocation: "Cut down on", meaning: "သုံးစွဲမှု/ထုတ်လုပ်မှုကို လျှော့ချသည်" },
  { collocation: "Cope with", meaning: "ပြဿနာ/အခက်အခဲကို ရင်ဆိုင်ဖြေရှင်းသည်" },
  { collocation: "Deal with", meaning: "ကိုင်တွယ်ဖြေရှင်းသည်" },
  { collocation: "Keep up with", meaning: "ခေတ်မီအောင်/အမီလိုက်နိုင်အောင် ကြိုးစားသည်" },
  { collocation: "Look into", meaning: "စုံစမ်းစစ်ဆေး/လေ့လာသည်" },

  { collocation: "Ended up", meaning: "နောက်ဆုံးမှာ... ဖြစ်သွားခဲ့သည်" },
  { collocation: "Turn out to be", meaning: "ထင်မှတ်မထားဘဲ... ဖြစ်လာသည်" },
  { collocation: "Take up", meaning: "ဝါသနာ/လေ့ကျင့်ခန်း အသစ်တစ်ခု စတင်လိုက်သည်" },
  { collocation: "Grow up", meaning: "ကြီးပြင်းလာသည်" },
  { collocation: "Look up to", meaning: "လေးစားအားကျသည်" },
  { collocation: "Pass down", meaning: "မျိုးဆက်တစ်ခုမှတစ်ခုသို့ လက်ဆင့်ကမ်းသည်" },
  { collocation: "Stand out", meaning: "ပေါ်လွင်ထင်ရှားသည်" }

]

function renderCollocationTable(dataArray) {
let myTable = document.getElementById("collocationTable");
if (!myTable) return;
let tableHTML = `
  <tr>
    <th>Collocation</th>
    <th>Meaning</th>
  </tr>`;
  
dataArray.forEach(item => {
tableHTML += `
  <tr>
    <td>${item.collocation || ""}</td>
    <td>${item.meaning || ""}</td>
  </tr>
`;
});

const vocabCount = document.getElementById("vocabCount");
const collocationCount =document.getElementById("collocationCpunt");
if(vocabCount){
  vocabCount.innerText=`Total IELTS Words:${vocabList.length}`;
  }

myTable.innerHTML = tableHTML;
}





renderTable(vocabList);
renderCollocationTable(collocationList);

searchInput.addEventListener("input", function () {
  const keyword = searchInput.value.trim().toLowerCase();

  const filteredList = vocabList.filter(item => {
    return (
      (item.word && item.word.toLowerCase().includes(keyword)) ||
      (item.meaning && item.meaning.toLowerCase().includes(keyword)) ||
      (item.collocation && item.collocation.toLowerCase().includes(keyword)) ||
      (item.dailyPhrase && item.dailyPhrase.toLowerCase().includes(keyword))
    );
  });

  renderTable(filteredList);

  if (typeof collocationList !== "undefined") {
    const filteredCollocations = collocationList.filter(item => {
      return (
        (item.collocation && item.collocation.toLowerCase().includes(keyword)) ||
        (item.meaning && item.meaning.toLowerCase().includes(keyword))
      );
    });

    renderCollocationTable(filteredCollocations);
  }
});

// Clear Button Selector
const clearBtn = document.getElementById("clearBtn");

// Local Storage Function
function saveToLocalStorage() {
  localStorage.setItem("myVocabData", JSON.stringify(vocabList));
}

// Clear Button Logic
if (clearBtn) {
  clearBtn.addEventListener("click", function () {
    searchInput.value = "";
    renderTable(vocabList);

    if (typeof collocationList !== "undefined") {
      renderCollocationTable(collocationList);
    }
    saveToLocalStorage();
  });
}

