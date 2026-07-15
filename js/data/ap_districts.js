// Andhra Pradesh Districts and Mandals Data
const AP_DISTRICTS = [
  {
    id: "alluri_sitharama_raju", name: "Alluri Sitharama Raju",
    mandals: ["Addateegala", "Araku Valley", "Chintapalle", "Devipatnam", "G. Madugula", "Hukumpeta", "Koyyuru", "Lambasingi", "Maredumilli", "Paderu", "Rampachodavaram", "Seethampeta", "Tuni", "Yellavaram"]
  },
  {
    id: "anakapalli", name: "Anakapalli",
    mandals: ["Anakapalli", "Atchutapuram", "Bheemunipatnam", "Butchireddipalem", "Chodavaram", "Denkada", "Elamanchili", "Golugonda", "Kasimkota", "Kotauratla", "Makavarapalem", "Narsipatnam", "Rambilli", "Rolugunta", "Sabbavaram"]
  },
  {
    id: "anantapur", name: "Anantapur",
    mandals: ["Amarapuram", "Anantapur", "Atmakur", "Beluguppa", "Chilamathur", "D. Hirehal", "Dharmavaram", "Gooty", "Guntakal", "Hindupur", "Kadiri", "Kalyandurgam", "Kanaganapalle", "Kanekal", "Lepakshi", "Madakasira", "Nallamada", "Narpala", "Pamidi", "Penukonda", "Rayadurgam", "Rolla", "Settur", "Singanamala", "Tadipatri", "Uravakonda", "Vajrakarur", "Yadiki"]
  },
  {
    id: "bapatla", name: "Bapatla",
    mandals: ["Addanki", "Amara Nagar", "Bapatla", "Chirala", "Inkollu", "Karamchedu", "Korisapadu", "Martur", "Nagaram", "Nizampatnam", "Ongole Rural", "Parchoor", "Pedanandipadu", "Repalle", "Santanuthalapadu", "Tangutur", "Vemuru"]
  },
  {
    id: "chittoor", name: "Chittoor",
    mandals: ["Bangarupalem", "Bhamini", "Chandragiri", "Chittoor", "Gangadhara Nellore", "Irala", "Kambhamvaripalle", "Kuppam", "Madanapalle", "Nagari", "Pakala", "Palamaner", "Pichatur", "Pileru", "Punganur", "Putalapattu", "Ramakuppam", "Satyavedu", "Srirangarajapuram", "Thamballapalle", "Tiruchanur", "Vedurukuppam", "Vijayapuram"]
  },
  {
    id: "dr_br_ambedkar_konaseema", name: "Dr. B.R. Ambedkar Konaseema",
    mandals: ["Ainavilli", "Alamuru", "Allavaram", "Ambajipeta", "Amalapuram", "Cottapeta", "Gannavaram", "I. Polavaram", "Kadiam", "Karapa", "Katrenikona", "Kothapeta", "Mamidikuduru", "Mandapeta", "Mummidivaram", "P. Gannavaram", "Ramachandrapuram", "Razole", "Sakhinetipalle", "Uppalaguptam", "Yanam"]
  },
  {
    id: "east_godavari", name: "East Godavari",
    mandals: ["Addateegala", "Ainavilli", "Alamuru", "Allavaram", "Ambajipeta", "Anaparthy", "Biccavolu", "Devipatnam", "Gandepalle", "Gopalapuram", "Jagannadhapuram", "Kadiam", "Kakinada Rural", "Karapa", "Kirlampudi", "Korukonda", "Kotananduru", "Kothapeta", "Mamidikuduru", "Mandapeta", "Maredumilli", "Pithapuram", "Prathipadu", "Rajam", "Rajanagaram", "Rajupalem", "Ramachandrapuram", "Samalkota", "Tuni", "U. Kothapalli", "Yeleswaram"]
  },
  {
    id: "eluru", name: "Eluru",
    mandals: ["Attili", "Bhimadole", "Buttayagudem", "Chintalapudi", "Denduluru", "Dharmajigudem", "Dwaraka Tirumala", "Eluru", "Jangareddigudem", "Kamavarapu Kota", "Koyyalagudem", "Lingapalem", "Nallajerla", "Narasapuram", "Nuzvid", "Palakollu", "Pedapadu", "Pedavegi", "Polavaram", "Tadepalligudem", "Tanuku", "Unguturu", "Undi", "Veeravasaram", "Velvadam", "West Godavari"]
  },
  {
    id: "guntur", name: "Guntur",
    mandals: ["Amaravathi", "Amruthalur", "Bapatla", "Bellamkonda", "Bhattiprolu", "Chilakaluripet", "Duggirala", "Edlapadu", "Emani", "Gurazala", "Guntur", "Kakumanu", "Macherla", "Mangalagiri", "Medikonduru", "Nadendla", "Narasaraopeta", "Nuzendla", "Pattabhipuram", "Pedakakani", "Pedakurapadu", "Pedanandipadu", "Phirangipuram", "Piduguralla", "Prathipadu", "Rajupalem", "Repalle", "Sattenapalle", "Tadepalle", "Tenali", "Vatticherukuru", "Vinukonda"]
  },
  {
    id: "kakinada", name: "Kakinada",
    mandals: ["Gollaprolu", "Jaggampeta", "Kajuluru", "Kakinada", "Kakinada Rural", "Kirlampudi", "Korukonda", "Kotananduru", "Malikipuram", "Peddapuram", "Pithapuram", "Prathipadu", "Rajam", "Rajanagaram", "Ramachandrapuram", "Sankhavaram", "Tuni", "Yeleswaram"]
  },
  {
    id: "krishna_ntr", name: "NTR (Krishna)",
    mandals: ["Agiripalle", "A. Konduru", "Bapulapadu", "Chandarlapadu", "Gampalagudem", "Gannavaram", "Gudivada", "Gudlavalleru", "Ibrahimpatnam", "Jaggayyapeta", "Kankipadu", "Kaikalur", "Krishnalanka", "Machilipatnam", "Mopidevi", "Mudinepalle", "Musunuru", "Mylavaram", "Nagayalanka", "Nandigama", "Nuzvid", "Penamaluru", "Reddigudem", "Thotlavalluru", "Tiruvuru", "Unguturu", "Veerullapadu", "Vijayawada Rural", "Vuyyuru"]
  },
  {
    id: "kurnool", name: "Kurnool",
    mandals: ["Adoni", "Allagadda", "Alur", "Aspari", "Atmakur", "Banganapalle", "Bethamcherla", "Bovvidi", "C. Belagal", "Chagalamarri", "Devanakonda", "Dhone", "Gonegandla", "Gudur", "Holagunda", "Kodumur", "Koilkuntla", "Kosigi", "Kurnool", "Maddikera", "Mahanandi", "Mantralayam", "Midthur", "Nandavaram", "Nandyal", "Orvakal", "Pattikonda", "Peapully", "Sanjamala", "Sirvel", "Yadiki", "Yemmiganur"]
  },
  {
    id: "nandyal", name: "Nandyal",
    mandals: ["Allagadda", "Atmakur", "Banganapalle", "Bethamcherla", "Chagalamarri", "Dornipadu", "Gospadu", "Kurnool Rural", "Mahanandi", "Midthur", "Nandyal", "Nandyal Rural", "Pattikonda", "Peapully", "Rudravaram", "Sanjamala", "Santnuthala", "Sirvel", "Uyyalawada", "Veldurthi"]
  },
  {
    id: "palnadu", name: "Palnadu",
    mandals: ["Amaravathi", "Bellamkonda", "Chilakaluripet", "Dachepalle", "Edlapadu", "Emani", "Gurajala", "Ipuru", "Karempudi", "Macherla", "Macherla Rural", "Nuzendla", "Pedakurapadu", "Phirangipuram", "Piduguralla", "Rombha", "Sattenapalle", "Vinukonda"]
  },
  {
    id: "parvathipuram_manyam", name: "Parvathipuram Manyam",
    mandals: ["Balijipeta", "Bonangi", "Dattirajeru", "G. Sigadam", "Gumma", "Jiyyammavalasa", "Komarada", "Kurupam", "Makkuva", "Munchingiput", "Pachipenta", "Parvathipuram", "Salur", "Seethampeta", "Veeraghattam"]
  },
  {
    id: "prakasam", name: "Prakasam",
    mandals: ["Addanki", "Bestavaripeta", "Chimakurthi", "Chinaganjam", "Cumbum", "Darsi", "Dornala", "Giddalur", "Gudlur", "Inkollu", "Jarugumalli", "Kanigiri", "Komarole", "Kondapi", "Kothapatnam", "Kurichedu", "Lingasamudram", "Maddipadu", "Markapur", "Mellacheruvu", "Mundlamur", "Ongole", "Pamur", "Parchoor", "Peddaraveedu", "Ponnaluru", "Racherla", "Santanuthalapadu", "Singarayakonda", "Tripuranthakam", "Ulavapadu", "Vetapalem", "Yerragondapalem", "Zarugumalli"]
  },
  {
    id: "spsr_nellore", name: "Sri Potti Sri Ramulu Nellore",
    mandals: ["Allur", "Atmakur", "Bogole", "Buchireddipalem", "Chillakur", "Duttalur", "Gudur", "Indukurpet", "Jaladanki", "Kaluvoya", "Kavali", "Kondapuram", "Kodavaluru", "Kovur", "Krishnapatnam", "Manubolu", "Muthukur", "Naidupet", "Nellore", "Nellore Rural", "Rapur", "Sangam", "Seetharamapuram", "Sullurpeta", "Sydapuram", "T. Sundupalli", "Udayagiri", "Vakadu", "Venkatachalam", "Vidavalur", "Vinjamur"]
  },
  {
    id: "sri_balaji", name: "Sri Balaji (Tirupati)",
    mandals: ["Chandragiri", "Pakala", "Palamaner", "Punganur", "Ramakuppam", "Srikalahasti", "Tirupati", "Tirupati Rural", "Tiruchanur", "Vedurukuppam", "Vijayapuram", "Yerpedu"]
  },
  {
    id: "sri_sathya_sai", name: "Sri Sathya Sai",
    mandals: ["Agali", "Amarapuram", "Bathalapalle", "Beluguppa", "Chilamathur", "Dharmavaram", "Gooty", "Hindupur", "Kanaganapalle", "Kanekal", "Madakasira", "Narpala", "Pamidi", "Penukonda", "Rayadurgam", "Settur", "Singanamala", "Tadipatri", "Uravakonda"]
  },
  {
    id: "srikakulam", name: "Srikakulam",
    mandals: ["Amadalavalasa", "Etcherla", "G. Sigadam", "Gara", "Hiramandalam", "Ichapuram", "Itchapuram", "Jalumuru", "Kanchili", "Kaviti", "Kotabommali", "Laveru", "Mandasa", "Meliaputti", "Narasannapeta", "Palakonda", "Pathapatnam", "Polaki", "Rajam", "Ranastalam", "Regidi", "S. Rayavaram", "Saravakota", "Srikakulam", "Tekkali", "Vajrapukotturu", "Vangara"]
  },
  {
    id: "tirupati", name: "Tirupati",
    mandals: ["Chandragiri", "Nagari", "Pakala", "Putalapattu", "Srikalahasti", "Tirupati", "Tirupati Rural", "Tiruchanur", "Vedurukuppam", "Yerpedu"]
  },
  {
    id: "visakhapatnam", name: "Visakhapatnam",
    mandals: ["Anandapuram", "Bheemunipatnam", "Bheemili", "Chodavaram", "Gajuwaka", "Gambheeram", "Gopalapatnam", "Kommadi", "Madhurawada", "Munagapaka", "Nakkapalle", "Nathavaram", "Padmanabham", "Parawada", "Pedagantyada", "Pendurthi", "Rambilli", "Sabbavaram", "Visakhapatnam", "Visakhapatnam Rural", "Yelamanchili"]
  },
  {
    id: "vizianagaram", name: "Vizianagaram",
    mandals: ["Badangi", "Balijipeta", "Bhogapuram", "Bobbili", "Dattirajeru", "Denkada", "Gajapathinagaram", "Garugubilli", "Gumma", "Gurla", "Jiyyammavalasa", "Komarada", "Kothavalasa", "Kurupam", "Lakkavarapukota", "Makkuva", "Merakamudidam", "Mentada", "Nellimarla", "Pachipenta", "Parvatipuram", "Poosapatirega", "Pusapatirega", "Rajam", "Ramabhadrapuram", "S. Kota", "Salur", "Srungavarapukota", "Vepada", "Vizianagaram"]
  },
  {
    id: "west_godavari", name: "West Godavari",
    mandals: ["Akividu", "Attili", "Bhimadole", "Chintalapudi", "Denduluru", "Dwaraka Tirumala", "Eluru", "Gopalapuram", "Ipuru", "Jangareddigudem", "Kamavarapukota", "Kovvali", "Lingapalem", "Narasapuram", "Nidadavolu", "Palakollu", "Penugonda", "Tanuku", "Undi", "Veeravasaram"]
  },
  {
    id: "ysr_kadapa", name: "YSR Kadapa",
    mandals: ["B. Kodur", "Badvel", "Chakrayapet", "Chapad", "Chinnamandem", "Duvvur", "Galiveedu", "Gopavaram", "Jammalamadugu", "Kadapa", "Kamalapuram", "Khajipeta", "Kodur", "Kondapuram", "Lakkireddipalle", "Lingala", "Maddur", "Muddanur", "Mydukur", "Porumamilla", "Proddatur", "Pullampet", "Rajampet", "Rayachoty", "Sidhout", "T. Sundupalli", "Veeraballi", "Vempalli"]
  }
];

window.AP_DISTRICTS = AP_DISTRICTS;
