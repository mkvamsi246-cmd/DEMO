// District-wise Government Places (Panchayat, Police, Bank, Hospital, CSC)
const AP_GOV_PLACES = {
  alluri_sitharama_raju: {
    panchayat: ["Paderu Gram Panchayat","Araku Valley GP","Chintapalle GP","Devipatnam GP","Rampachodavaram GP","Maredumilli GP","G. Madugula GP","Hukumpeta GP","Koyyuru GP","Lambasingi GP"],
    police: ["Paderu Police Station","Araku Valley PS","Chintapalle PS","Devipatnam PS","Rampachodavaram PS","Maredumilli PS","G. Madugula PS"],
    bank: ["SBI Paderu Branch","Andhra Bank Araku","Canara Bank Rampachodavaram","APGVB Paderu","AP Mahesh Bank Devipatnam","Indian Bank Chintapalle"],
    hospital: ["Community Health Centre, Paderu","PHC Araku Valley","Government Hospital, Rampachodavaram","PHC Chintapalle","ITDA Hospital, Paderu"],
    csc: ["CSC Paderu","CSC Araku Valley","CSC Rampachodavaram","CSC Devipatnam","CSC Maredumilli","CSC G. Madugula"]
  },
  anakapalli: {
    panchayat: ["Anakapalli Municipality","Bheemunipatnam GP","Elamanchili GP","Narsipatnam GP","Chodavaram GP","Kasimkota GP","Makavarapalem GP","Rambilli GP"],
    police: ["Anakapalli PS","Bheemunipatnam PS","Elamanchili PS","Narsipatnam PS","Chodavaram PS","Kasimkota PS"],
    bank: ["SBI Anakapalli","Union Bank Bheemunipatnam","ICICI Elamanchili","Andhra Bank Narsipatnam","APGVB Chodavaram","Punjab National Bank Anakapalli"],
    hospital: ["Government Hospital, Anakapalli","CHC Elamanchili","PHC Bheemunipatnam","Government Hospital, Narsipatnam"],
    csc: ["CSC Anakapalli","CSC Bheemunipatnam","CSC Elamanchili","CSC Narsipatnam","CSC Chodavaram","CSC Kasimkota"]
  },
  anantapur: {
    panchayat: ["Anantapur Municipality","Guntakal Municipality","Tadipatri GP","Dharmavaram GP","Hindupur GP","Kadiri GP","Penukonda GP","Madakasira GP","Rayadurgam GP","Gooty GP"],
    police: ["Anantapur Town PS","Guntakal PS","Tadipatri PS","Dharmavaram PS","Hindupur PS","Kadiri PS","Penukonda PS","Uravakonda PS"],
    bank: ["SBI Anantapur Main","Andhra Bank Guntakal","Canara Bank Dharmavaram","Bank of Baroda Hindupur","APGVB Tadipatri","PNB Kadiri","Union Bank Penukonda"],
    hospital: ["Government General Hospital, Anantapur","District Hospital, Guntakal","CHC Dharmavaram","CHC Hindupur","PHC Tadipatri","Government Hospital, Kadiri"],
    csc: ["CSC Anantapur","CSC Guntakal","CSC Tadipatri","CSC Dharmavaram","CSC Hindupur","CSC Kadiri","CSC Penukonda","CSC Madakasira"]
  },
  bapatla: {
    panchayat: ["Bapatla Municipality","Chirala Municipality","Addanki GP","Repalle GP","Inkollu GP","Nagaram GP","Karamchedu GP","Vemuru GP"],
    police: ["Bapatla PS","Chirala PS","Addanki PS","Repalle PS","Inkollu PS","Karamchedu PS"],
    bank: ["SBI Bapatla","Andhra Bank Chirala","Canara Bank Addanki","APGVB Repalle","Indian Bank Inkollu","Union Bank Bapatla"],
    hospital: ["Government Hospital, Bapatla","CHC Chirala","PHC Addanki","PHC Repalle","Government Hospital, Inkollu"],
    csc: ["CSC Bapatla","CSC Chirala","CSC Addanki","CSC Repalle","CSC Inkollu","CSC Nagaram","CSC Vemuru"]
  },
  chittoor: {
    panchayat: ["Chittoor Municipality","Madanapalle Municipality","Palamaner GP","Pileru GP","Punganur GP","Kuppam GP","Nagari GP","Chandragiri GP","Pakala GP"],
    police: ["Chittoor Town PS","Madanapalle PS","Palamaner PS","Pileru PS","Punganur PS","Kuppam PS","Nagari PS"],
    bank: ["SBI Chittoor Main","Bank of India Madanapalle","Canara Bank Palamaner","APGVB Pileru","Andhra Bank Punganur","PNB Kuppam","Union Bank Nagari"],
    hospital: ["Government General Hospital, Chittoor","CHC Madanapalle","PHC Palamaner","PHC Pileru","Government Hospital, Punganur"],
    csc: ["CSC Chittoor","CSC Madanapalle","CSC Palamaner","CSC Pileru","CSC Punganur","CSC Kuppam","CSC Nagari"]
  },
  dr_br_ambedkar_konaseema: {
    panchayat: ["Amalapuram Municipality","Ramachandrapuram GP","Razole GP","Mummidivaram GP","Mandapeta GP","Ambajipeta GP","Kothapeta GP","Uppalaguptam GP"],
    police: ["Amalapuram PS","Ramachandrapuram PS","Razole PS","Mummidivaram PS","Mandapeta PS","Kothapeta PS"],
    bank: ["SBI Amalapuram","Andhra Bank Razole","Canara Bank Ramachandrapuram","APGVB Mummidivaram","Indian Bank Mandapeta"],
    hospital: ["Government Hospital, Amalapuram","CHC Razole","PHC Ramachandrapuram","PHC Mummidivaram"],
    csc: ["CSC Amalapuram","CSC Razole","CSC Ramachandrapuram","CSC Mummidivaram","CSC Mandapeta","CSC Kothapeta"]
  },
  east_godavari: {
    panchayat: ["Kakinada Municipality","Peddapuram GP","Samalkota GP","Pithapuram GP","Prathipadu GP","Rajanagaram GP","Anaparthy GP","Jagannadhapuram GP","Tuni GP"],
    police: ["Kakinada Town PS","Peddapuram PS","Samalkota PS","Pithapuram PS","Rajanagaram PS","Tuni PS"],
    bank: ["SBI Kakinada Main","HDFC Kakinada","Bank of Baroda Peddapuram","Andhra Bank Samalkota","APGVB Pithapuram","Canara Bank Rajanagaram"],
    hospital: ["Government General Hospital, Kakinada","CHC Peddapuram","PHC Samalkota","PHC Pithapuram","Government Hospital, Tuni"],
    csc: ["CSC Kakinada","CSC Peddapuram","CSC Samalkota","CSC Pithapuram","CSC Rajanagaram","CSC Tuni","CSC Anaparthy"]
  },
  eluru: {
    panchayat: ["Eluru Municipality","Bhimavaram Municipality","Tanuku GP","Narasapuram GP","Palakollu GP","Tadepalligudem GP","Nidadavolu GP","Chintalapudi GP"],
    police: ["Eluru Town PS","Bhimavaram PS","Tanuku PS","Narasapuram PS","Palakollu PS","Tadepalligudem PS"],
    bank: ["SBI Eluru Main","Andhra Bank Bhimavaram","Canara Bank Tanuku","APGVB Narasapuram","PNB Palakollu","Indian Bank Tadepalligudem"],
    hospital: ["Government General Hospital, Eluru","CHC Bhimavaram","PHC Tanuku","PHC Narasapuram","Government Hospital, Tadepalligudem"],
    csc: ["CSC Eluru","CSC Bhimavaram","CSC Tanuku","CSC Narasapuram","CSC Palakollu","CSC Tadepalligudem","CSC Nidadavolu"]
  },
  guntur: {
    panchayat: ["Guntur Municipal Corporation","Tenali Municipality","Narasaraopeta GP","Sattenapalle GP","Macherla GP","Chilakaluripet GP","Mangalagiri GP","Tadepalle GP","Amaravathi GP"],
    police: ["Guntur Town PS","Tenali PS","Narasaraopeta PS","Sattenapalle PS","Macherla PS","Chilakaluripet PS","Mangalagiri PS"],
    bank: ["SBI Guntur Main","HDFC Guntur","ICICI Guntur","Bank of India Tenali","Andhra Bank Narasaraopeta","APGVB Sattenapalle","Canara Bank Macherla","Union Bank Chilakaluripet"],
    hospital: ["Government General Hospital, Guntur","Guntur Medical College Hospital","CHC Tenali","PHC Narasaraopeta","Government Hospital, Sattenapalle","CHC Chilakaluripet"],
    csc: ["CSC Guntur","CSC Tenali","CSC Narasaraopeta","CSC Sattenapalle","CSC Macherla","CSC Chilakaluripet","CSC Mangalagiri","CSC Tadepalle"]
  },
  kakinada: {
    panchayat: ["Kakinada Municipal Corporation","Peddapuram GP","Samalkota GP","Pithapuram GP","Gollaprolu GP","Jaggampeta GP","Kajuluru GP","Kirlampudi GP"],
    police: ["Kakinada 1st Town PS","Kakinada 2nd Town PS","Peddapuram PS","Samalkota PS","Pithapuram PS","Gollaprolu PS"],
    bank: ["SBI Kakinada Port","Andhra Bank Main Branch Kakinada","HDFC Kakinada","ICICI Kakinada","APGVB Peddapuram","Canara Bank Samalkota"],
    hospital: ["Kakinada General Hospital","AGAS Hospital Kakinada","CHC Peddapuram","PHC Pithapuram"],
    csc: ["CSC Kakinada","CSC Peddapuram","CSC Samalkota","CSC Pithapuram","CSC Gollaprolu","CSC Jaggampeta"]
  },
  krishna_ntr: {
    panchayat: ["Vijayawada Municipal Corporation","Machilipatnam Municipality","Gudivada Municipality","Nuzvid GP","Nandigama GP","Gannavaram GP","Kankipadu GP","Mylavaram GP"],
    police: ["Vijayawada Town PS","Machilipatnam PS","Gudivada PS","Nuzvid PS","Nandigama PS","Gannavaram PS"],
    bank: ["SBI Vijayawada Main","HDFC Vijayawada","ICICI Vijayawada","Andhra Bank Machilipatnam","Bank of Baroda Gudivada","APGVB Nuzvid","Canara Bank Nandigama","PNB Gannavaram"],
    hospital: ["Government General Hospital, Vijayawada","Machilipatnam Government Hospital","CHC Gudivada","PHC Nuzvid","CHC Nandigama"],
    csc: ["CSC Vijayawada","CSC Machilipatnam","CSC Gudivada","CSC Nuzvid","CSC Nandigama","CSC Gannavaram","CSC Kankipadu"]
  },
  kurnool: {
    panchayat: ["Kurnool Municipality","Adoni Municipality","Nandyal Municipality","Yemmiganur GP","Dhone GP","Allagadda GP","Mantralayam GP","Banganapalle GP"],
    police: ["Kurnool Town PS","Adoni PS","Nandyal PS","Yemmiganur PS","Dhone PS","Allagadda PS"],
    bank: ["SBI Kurnool Main","Andhra Bank Adoni","Canara Bank Nandyal","APGVB Yemmiganur","Bank of India Dhone","PNB Allagadda"],
    hospital: ["Government General Hospital, Kurnool","Kurnool Medical College Hospital","CHC Adoni","PHC Nandyal","Government Hospital, Yemmiganur"],
    csc: ["CSC Kurnool","CSC Adoni","CSC Nandyal","CSC Yemmiganur","CSC Dhone","CSC Allagadda","CSC Mantralayam"]
  },
  nandyal: {
    panchayat: ["Nandyal Municipality","Allagadda GP","Atmakur GP","Bethamcherla GP","Dornipadu GP","Gospadu GP","Peapully GP"],
    police: ["Nandyal Town PS","Allagadda PS","Atmakur PS","Bethamcherla PS","Peapully PS"],
    bank: ["SBI Nandyal","Andhra Bank Allagadda","APGVB Bethamcherla","Canara Bank Atmakur","PNB Nandyal Main"],
    hospital: ["Government Hospital, Nandyal","CHC Allagadda","PHC Atmakur","PHC Bethamcherla"],
    csc: ["CSC Nandyal","CSC Allagadda","CSC Atmakur","CSC Bethamcherla","CSC Dornipadu","CSC Peapully"]
  },
  palnadu: {
    panchayat: ["Macherla Municipality","Narasaraopeta Municipality","Chilakaluripet GP","Sattenapalle GP","Vinukonda GP","Piduguralla GP","Gurajala GP"],
    police: ["Macherla PS","Narasaraopeta PS","Chilakaluripet PS","Sattenapalle PS","Vinukonda PS"],
    bank: ["SBI Macherla","Andhra Bank Narasaraopeta","APGVB Chilakaluripet","Canara Bank Sattenapalle","PNB Vinukonda"],
    hospital: ["Government Hospital, Macherla","CHC Narasaraopeta","PHC Chilakaluripet","PHC Sattenapalle"],
    csc: ["CSC Macherla","CSC Narasaraopeta","CSC Chilakaluripet","CSC Sattenapalle","CSC Vinukonda","CSC Piduguralla"]
  },
  parvathipuram_manyam: {
    panchayat: ["Parvathipuram Municipality","Salur GP","Bobbili GP","Kurupam GP","Komarada GP","Balijipeta GP","Makkuva GP"],
    police: ["Parvathipuram PS","Salur PS","Bobbili PS","Kurupam PS","Komarada PS"],
    bank: ["SBI Parvathipuram","Andhra Bank Salur","APGVB Bobbili","Canara Bank Kurupam","Indian Bank Parvathipuram"],
    hospital: ["Government Hospital, Parvathipuram","CHC Salur","PHC Bobbili","PHC Kurupam"],
    csc: ["CSC Parvathipuram","CSC Salur","CSC Bobbili","CSC Kurupam","CSC Komarada","CSC Makkuva"]
  },
  prakasam: {
    panchayat: ["Ongole Municipality","Markapur GP","Kanigiri GP","Giddalur GP","Cumbum GP","Darsi GP","Chimakurthi GP","Bestavaripeta GP"],
    police: ["Ongole Town PS","Markapur PS","Kanigiri PS","Giddalur PS","Cumbum PS","Darsi PS"],
    bank: ["SBI Ongole Main","Andhra Bank Markapur","Canara Bank Kanigiri","APGVB Giddalur","PNB Cumbum","Union Bank Ongole"],
    hospital: ["Government General Hospital, Ongole","CHC Markapur","PHC Kanigiri","PHC Giddalur","Government Hospital, Cumbum"],
    csc: ["CSC Ongole","CSC Markapur","CSC Kanigiri","CSC Giddalur","CSC Cumbum","CSC Darsi","CSC Chimakurthi"]
  },
  spsr_nellore: {
    panchayat: ["Nellore Municipality","Kavali GP","Gudur GP","Naidupet GP","Sullurpeta GP","Atmakur GP","Udayagiri GP","Vinjamur GP"],
    police: ["Nellore Town PS","Kavali PS","Gudur PS","Naidupet PS","Sullurpeta PS","Atmakur PS"],
    bank: ["SBI Nellore Main","HDFC Nellore","Andhra Bank Kavali","APGVB Gudur","Bank of Baroda Naidupet","Canara Bank Sullurpeta"],
    hospital: ["Government General Hospital, Nellore","CHC Kavali","PHC Gudur","PHC Naidupet","Government Hospital, Sullurpeta"],
    csc: ["CSC Nellore","CSC Kavali","CSC Gudur","CSC Naidupet","CSC Sullurpeta","CSC Atmakur","CSC Udayagiri"]
  },
  sri_balaji: {
    panchayat: ["Tirupati Municipality","Srikalahasti GP","Yerpedu GP","Chandragiri GP","Pakala GP","Tiruchanur GP","Vedurukuppam GP"],
    police: ["Tirupati Town PS","Srikalahasti PS","Yerpedu PS","Chandragiri PS","Pakala PS"],
    bank: ["SBI Tirupati Main","HDFC Tirupati","Canara Bank Srikalahasti","APGVB Yerpedu","Andhra Bank Chandragiri","PNB Tirupati"],
    hospital: ["SVIMS Hospital, Tirupati","Ruia Government Hospital, Tirupati","CHC Srikalahasti","PHC Yerpedu"],
    csc: ["CSC Tirupati","CSC Srikalahasti","CSC Yerpedu","CSC Chandragiri","CSC Pakala","CSC Tiruchanur"]
  },
  sri_sathya_sai: {
    panchayat: ["Hindupur Municipality","Kadiri GP","Penukonda GP","Madakasira GP","Dharmavaram GP","Tadipatri GP","Rayadurgam GP"],
    police: ["Hindupur PS","Kadiri PS","Penukonda PS","Madakasira PS","Dharmavaram PS","Rayadurgam PS"],
    bank: ["SBI Hindupur","Andhra Bank Kadiri","APGVB Penukonda","Canara Bank Madakasira","Bank of India Dharmavaram"],
    hospital: ["Government Hospital, Hindupur","CHC Kadiri","PHC Penukonda","PHC Madakasira","Government Hospital, Dharmavaram"],
    csc: ["CSC Hindupur","CSC Kadiri","CSC Penukonda","CSC Madakasira","CSC Dharmavaram","CSC Tadipatri"]
  },
  srikakulam: {
    panchayat: ["Srikakulam Municipality","Ichapuram GP","Tekkali GP","Palakonda GP","Rajam GP","Narasannapeta GP","Amadalavalasa GP","Pathapatnam GP"],
    police: ["Srikakulam Town PS","Ichapuram PS","Tekkali PS","Palakonda PS","Rajam PS","Narasannapeta PS"],
    bank: ["SBI Srikakulam Main","Andhra Bank Ichapuram","APGVB Tekkali","Canara Bank Palakonda","PNB Rajam","Bank of Baroda Narasannapeta"],
    hospital: ["Government General Hospital, Srikakulam","CHC Ichapuram","PHC Tekkali","PHC Palakonda","Government Hospital, Rajam"],
    csc: ["CSC Srikakulam","CSC Ichapuram","CSC Tekkali","CSC Palakonda","CSC Rajam","CSC Narasannapeta","CSC Amadalavalasa"]
  },
  tirupati: {
    panchayat: ["Tirupati Municipal Corporation","Nagari GP","Srikalahasti GP","Putalapattu GP","Chandragiri GP","Pakala GP","Yerpedu GP"],
    police: ["Tirupati Urban PS","Nagari PS","Srikalahasti PS","Putalapattu PS","Chandragiri PS"],
    bank: ["SBI Tirupati Railway Station","HDFC Tirupati","ICICI Tirupati","Canara Bank Nagari","APGVB Srikalahasti"],
    hospital: ["SVIMS Tirupati","Ruia Government Hospital","CHC Nagari","PHC Srikalahasti","PHC Putalapattu"],
    csc: ["CSC Tirupati Central","CSC Nagari","CSC Srikalahasti","CSC Putalapattu","CSC Chandragiri","CSC Pakala"]
  },
  visakhapatnam: {
    panchayat: ["GVMC Visakhapatnam","Bheemunipatnam GP","Pedagantyada GP","Pendurthi GP","Parawada GP","Anandapuram GP","Munagapaka GP","Padmanabham GP"],
    police: ["Visakhapatnam 1st Town PS","Visakhapatnam 2nd Town PS","Bheemunipatnam PS","Pedagantyada PS","Pendurthi PS","Parawada PS","Gajuwaka PS"],
    bank: ["SBI Visakhapatnam Main","HDFC Vizag","ICICI Vizag","Axis Bank Vizag","Andhra Bank Gajuwaka","Canara Bank Pendurthi","APGVB Bheemunipatnam"],
    hospital: ["King George Hospital (KGH), Vizag","Government ENT Hospital","CHC Gajuwaka","PHC Bheemunipatnam","CHC Pendurthi","Government Hospital, Parawada"],
    csc: ["CSC Vizag (Siripuram)","CSC Gajuwaka","CSC Bheemunipatnam","CSC Pendurthi","CSC Parawada","CSC Anandapuram","CSC Munagapaka"]
  },
  vizianagaram: {
    panchayat: ["Vizianagaram Municipality","Bobbili GP","Salur GP","Parvathipuram GP","Neelam GP","Rajam GP","Bhogapuram GP","Srungavarapukota GP"],
    police: ["Vizianagaram Town PS","Bobbili PS","Salur PS","Rajam PS","Bhogapuram PS"],
    bank: ["SBI Vizianagaram Main","Andhra Bank Bobbili","APGVB Salur","Canara Bank Rajam","PNB Bhogapuram"],
    hospital: ["Government General Hospital, Vizianagaram","CHC Bobbili","PHC Salur","PHC Rajam"],
    csc: ["CSC Vizianagaram","CSC Bobbili","CSC Salur","CSC Rajam","CSC Bhogapuram","CSC Srungavarapukota"]
  },
  west_godavari: {
    panchayat: ["Bhimavaram Municipality","Eluru Municipality","Tanuku GP","Narasapuram GP","Palakollu GP","Nidadavolu GP","Tadepalligudem GP","Akividu GP"],
    police: ["Bhimavaram PS","Eluru PS","Tanuku PS","Narasapuram PS","Palakollu PS","Nidadavolu PS"],
    bank: ["SBI Bhimavaram","Andhra Bank Eluru","Canara Bank Tanuku","APGVB Narasapuram","Bank of Baroda Palakollu","PNB Nidadavolu"],
    hospital: ["Government Hospital, Bhimavaram","Government Hospital, Eluru","CHC Tanuku","PHC Narasapuram","PHC Palakollu"],
    csc: ["CSC Bhimavaram","CSC Tanuku","CSC Narasapuram","CSC Palakollu","CSC Nidadavolu","CSC Tadepalligudem","CSC Akividu"]
  },
  ysr_kadapa: {
    panchayat: ["Kadapa Municipality","Proddatur Municipality","Jammalamadugu GP","Rajampet GP","Badvel GP","Pulivendula GP","Rayachoty GP","Mydukur GP"],
    police: ["Kadapa Town PS","Proddatur PS","Jammalamadugu PS","Rajampet PS","Badvel PS","Pulivendula PS","Rayachoty PS"],
    bank: ["SBI Kadapa Main","Andhra Bank Proddatur","Canara Bank Jammalamadugu","APGVB Rajampet","Bank of Baroda Badvel","PNB Pulivendula"],
    hospital: ["Government General Hospital, Kadapa","Kadapa Medical College Hospital","CHC Proddatur","PHC Jammalamadugu","Government Hospital, Badvel","CHC Pulivendula"],
    csc: ["CSC Kadapa","CSC Proddatur","CSC Jammalamadugu","CSC Rajampet","CSC Badvel","CSC Pulivendula","CSC Rayachoty"]
  }
};

window.AP_GOV_PLACES = AP_GOV_PLACES;
