// Andhra Pradesh: district -> major cities/towns (26 districts)
export const AP_STATE = 'Andhra Pradesh';

export const AP_DISTRICTS = {
  'Alluri Sitharama Raju': ['Paderu', 'Araku Valley', 'Chintapalli', 'Rampachodavaram'],
  'Anakapalli': ['Anakapalle', 'Narsipatnam', 'Yelamanchili', 'Chodavaram'],
  'Ananthapuramu': ['Anantapur', 'Guntakal', 'Tadipatri', 'Kalyandurg'],
  'Annamayya': ['Rayachoti', 'Madanapalle', 'Rajampet', 'Pileru', 'Kodur'],
  'Bapatla': ['Bapatla', 'Chirala', 'Repalle', 'Parchur'],
  'Chittoor': ['Chittoor', 'Punganur', 'Palamaner', 'Kuppam'],
  'Dr. B.R. Ambedkar Konaseema': ['Amalapuram', 'Mandapeta', 'Ramachandrapuram', 'Razole'],
  'East Godavari': ['Rajamahendravaram', 'Kovvur', 'Nidadavole', 'Gopalapuram'],
  'Eluru': ['Eluru', 'Nuzvid', 'Chintalapudi', 'Jangareddygudem'],
  'Guntur': ['Guntur', 'Tenali', 'Mangalagiri', 'Ponnur'],
  'Kakinada': ['Kakinada', 'Peddapuram', 'Samalkota', 'Tuni'],
  'Krishna': ['Machilipatnam', 'Gudivada', 'Pedana', 'Avanigadda'],
  'Kurnool': ['Kurnool', 'Adoni', 'Yemmiganur', 'Pattikonda'],
  'Nandyal': ['Nandyal', 'Dhone', 'Atmakur', 'Allagadda'],
  'NTR': ['Vijayawada', 'Nandigama', 'Jaggayyapeta', 'Tiruvuru'],
  'Palnadu': ['Narasaraopet', 'Sattenapalli', 'Chilakaluripet', 'Macherla'],
  'Parvathipuram Manyam': ['Parvathipuram', 'Palakonda', 'Salur', 'Kurupam'],
  'Prakasam': ['Ongole', 'Markapur', 'Chimakurthy', 'Giddalur'],
  'Sri Potti Sriramulu Nellore': ['Nellore', 'Kavali', 'Gudur', 'Atmakur'],
  'Sri Sathya Sai': ['Puttaparthi', 'Hindupur', 'Dharmavaram', 'Penukonda'],
  'Srikakulam': ['Srikakulam', 'Amadalavalasa', 'Palasa-Kasibugga', 'Ichchapuram'],
  'Tirupati': ['Tirupati', 'Srikalahasti', 'Chandragiri', 'Naidupeta'],
  'Visakhapatnam': ['Visakhapatnam', 'Bheemunipatnam', 'Gajuwaka'],
  'Vizianagaram': ['Vizianagaram', 'Bobbili', 'Cheepurupalli', 'Salur'],
  'West Godavari': ['Bhimavaram', 'Tadepalligudem', 'Tanuku', 'Narasapuram'],
  'YSR Kadapa': ['Kadapa', 'Proddatur', 'Pulivendula', 'Jammalamadugu'],
};

// Add more states here later, same shape: { 'State': { District: [cities] } }
export const STATES = { [AP_STATE]: AP_DISTRICTS };
