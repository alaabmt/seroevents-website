export type EventRecord = {
  slug: string;
  year: string;
  title: string;
  shortTitle: string;
  location: string;
  date: string;
  time: string;
  category: string;
  cme?: string;
  description: string;
  overview: string[];
  highlights: string[];
  programme: { time: string; title: string; speaker?: string }[];
  faculty: string[];
  accent: 'eventOrange' | 'eventGold';
};

export const events: EventRecord[] = [
  {
    slug: 'iti-summit-2024',
    year: '2024',
    title: 'Innovative Therapy Implementation (ITI) Summit',
    shortTitle: 'ITI Summit 2024',
    location: 'Rosewood Hotel, Abu Dhabi',
    date: '25 May 2024',
    time: '9:00 AM – 4:00 PM',
    category: 'Healthcare · Scientific Conference',
    cme: '5.5 CME Hours',
    description:
      'A multidisciplinary summit focused on innovative therapy access, reimbursement, precision medicine and practical implementation in the UAE healthcare system.',
    overview: [
      'The ITI Summit brought healthcare leaders, clinicians, pharmacy experts, payers and industry stakeholders together to discuss how innovative therapies can be introduced and implemented within the UAE healthcare system.',
      'The programme covered reimbursement approaches, early access to treatment, precision medicine, innovative haematology therapies, inpatient DRG calculations and a senior-leader roundtable on implementation challenges and solutions.',
    ],
    highlights: [
      'Innovative therapy access and reimbursement',
      'Research and early access to treatment',
      'Precision medicine challenges and solutions',
      'Innovative haematology therapies in practice',
      'Senior leaders roundtable',
      'Networking and panel discussions',
    ],
    programme: [
      { time: '09:50', title: 'Conference Opening', speaker: 'Prof. Shahrukh Hashmi' },
      { time: '10:00', title: 'Cancer Medicines Implementation in UAE', speaker: 'Dr. Sara Al Dallal' },
      { time: '10:20', title: 'Role of Research in Early Access of Treatments', speaker: 'Prof. Shahrukh Hashmi' },
      { time: '10:40', title: 'Precision Medicine Future: Access Challenges and Solutions', speaker: 'Dr. Shaikha Almazrouei' },
      { time: '11:50', title: 'Dubai Experience in Implementing and Reimbursement of Innovative Cancer Therapies', speaker: 'Prof. Mohamed Fargahly' },
      { time: '12:10', title: 'Abu Dhabi: Practical Examples in Haematology', speaker: 'Dr. Panagiotis Kaloyannidis' },
      { time: '13:45', title: 'Case Studies for Inpatient DRG Calculations', speaker: 'Mr. Lojain Moussa & Mrs. Sally Al Kabaz' },
      { time: '14:15', title: 'Panel Discussion: Presenting Challenges and Exploring Solutions' },
      { time: '15:25', title: 'Closing Remarks', speaker: 'Prof. Shahrukh Hashmi' },
    ],
    faculty: [
      'Prof. Shahrukh Hashmi',
      'Dr. Sara Al Dallal',
      'Dr. Shaikha Almazrouei',
      'Dr. Husni Al Hateeti',
      'Dr. Marleine Bejjani',
      'Prof. Mohamed Fargahly',
      'Dr. Mazin Gadir',
      'Dr. Sawsan Al Madhi',
      'Dr. Kayane Mheidly',
      'Dr. Mohamed Mostafa',
      'Mr. James Pearce',
      'Dr. Adel Al Assy',
      'Dr. Lina Wahba',
      'Dr. Bassel Jallad',
      'Dr. Panagiotis Kaloyannidis',
      'Dr. Islam Elkonaissi',
      'Mr. Pedro Matos Rosa',
      'Dr. Ravi Sharma',
    ],
    accent: 'eventOrange',
  },
  {
    slug: 'fchs-future-medicine-symposium-2024',
    year: '2024',
    title: 'FCHS Future Medicine Symposium',
    shortTitle: 'FCHS Future Medicine Symposium 2024',
    location: 'Fatima College of Health Sciences, Abu Dhabi',
    date: '23 May 2024',
    time: '8:30 AM onwards',
    category: 'Education · Future Medicine',
    cme: '9 CME Points',
    description:
      'A scientific symposium covering clinical trials, digital health, pharmacogenomics, regenerative medicine and cellular therapy.',
    overview: [
      'The FCHS Future Medicine Symposium brought together academics, researchers and healthcare professionals for a one-day programme focused on emerging areas shaping the future of medicine.',
      'The programme combined fundamentals of clinical trials with sessions on digital health, pharmacogenomics, regenerative medicine and cellular therapy, alongside networking and poster evaluation activities.',
    ],
    highlights: [
      'Basics of clinical trials',
      'Clinical research careers and regulation',
      'Digital health and emerging technologies',
      'Pharmacogenomics and precision medicine',
      'Regenerative medicine and stem cell trials',
      'Cellular therapy',
    ],
    programme: [
      { time: '08:30', title: 'Registration' },
      { time: '09:00', title: 'Opening Remarks by FCHS Director', speaker: 'Prof. Lisa Bayliss-Pratt' },
      { time: '09:15', title: 'Keynote Speaker from DOH', speaker: 'Prof. Shahrukh Hashmi' },
      { time: '09:30', title: 'Introduction to Clinical Trials and Research', speaker: 'Mr. Nedal Al Rawashdeh' },
      { time: '09:50', title: 'Statistics Without Tears in Biology', speaker: 'Dr. Islam Elkonaissi' },
      { time: '10:10', title: 'The Clinical Research Pharmacist Role in Clinical Trials', speaker: 'Dr. Haytham Shahata' },
      { time: '13:35', title: 'Digital Health: Revolutionizing Healthcare in the 21st Century', speaker: 'Dr. Mohamed Baraka' },
      { time: '14:20', title: 'Pharmacogenomics: The Cornerstone of Precision Medicine', speaker: 'Dr. Zeina Al-Mahayri' },
      { time: '15:30', title: 'Clinical Trials Design for Neurological Diseases', speaker: 'Dr. Fatima Jamali' },
      { time: '15:50', title: 'Basics of Cellular Therapy', speaker: 'Dr. Shaikha Almazrouei' },
      { time: '16:10', title: 'Closing Remarks & Organizing Committee Appreciation' },
    ],
    faculty: [
      'Prof. Lisa Bayliss-Pratt',
      'Prof. Shahrukh Hashmi',
      'Mr. Nedal Al Rawashdeh',
      'Dr. Islam Elkonaissi',
      'Dr. Haytham Shahata',
      'Dr. Asawari (Asa) Bapat',
      'Prof. Hiba Khalil',
      'Dr. Mohamed Baraka',
      'Mr. Nirmal Kumar',
      'Dr. Zeina Al-Mahayri',
      'Dr. Huraa Hasan Mohamed',
      'Dr. Fatima Jamali',
      'Dr. Shaikha Almazrouei',
    ],
    accent: 'eventGold',
  },
];

export function getEvent(slug: string) {
  return events.find((event) => event.slug === slug);
}
