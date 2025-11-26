const matchResults = [
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Slavomír KEŠELÁK/Jozef MOLNÁR",
        "player_b": "Ľubomír HOCHVART/Milan PAŽIČ",
        "date": "1. kolo",
        "player_a_team": "SOŠ Ž",
        "player_b_team": "REPREX",
        "doubles": true
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Miro. HANIČÁK/Peter POLÁK",
        "player_b": "Ján PETRŽALA/Peter RUSNÁK",
        "date": "1. kolo",
        "player_a_team": "SOŠ Ž",
        "player_b_team": "REPREX",
        "doubles": true
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Štefan LISSÝ/Martin SOĽÁR",
        "player_b": "Andrej KAČKOŠ/Julus WÉBER",
        "date": "1. kolo",
        "player_a_team": "SKP \"A\"",
        "player_b_team": "ASTORIA FIT",
        "doubles": true
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Peter JAKUBEC/Miroslav KOSCELANSKÝ",
        "player_b": "Martin MUCHA/Matúš HRČKA",
        "date": "1. kolo",
        "player_a_team": "SKP \"A\"",
        "player_b_team": "ASTORIA FIT",
        "doubles": true
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Milan ŠOLC/Vladimír VARGOVČÁK",
        "player_b": "Tomáš BEKECS/Andrej MAKRANSKÝ",
        "date": "1. kolo",
        "player_a_team": "MYSLAVA",
        "player_b_team": "TTC KVP",
        "doubles": true
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Ján FOTTA/Jozef FOTTA",
        "player_b": "Viliam MAYER/Andrej MAKRANSKÝ ml.",
        "date": "1. kolo",
        "player_a_team": "MYSLAVA",
        "player_b_team": "TTC KVP",
        "doubles": true
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Milan SUCHÝ/Igor TKÁČ",
        "player_b": "Milan GAJTKO/Luboš MRÁZ",
        "date": "1. kolo",
        "player_a_team": "COKERY",
        "player_b_team": "MONTREAL",
        "doubles": true
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Jaroslav WIENER/Miro. HARČÁRIK",
        "player_b": "Štefan PČOLA/Milan MICHLOVIČ",
        "date": "1. kolo",
        "player_a_team": "COKERY",
        "player_b_team": "MONTREAL",
        "doubles": true
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Juraj POLYAK/Peter RUŽIČKA",
        "player_b": "David LEŠUNDÁK/Martin ĎURIŠIN",
        "date": "1. kolo",
        "player_a_team": "TT TEAM",
        "player_b_team": "SKP \"B\"",
        "doubles": true
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Andrej FELBER/Ján SIMKO",
        "player_b": "Peter GABOŠ/Marek SKYBA",
        "date": "1. kolo",
        "player_a_team": "TT TEAM",
        "player_b_team": "SKP \"B\"",
        "doubles": true
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Marek PATAKY/Ján GUZY",
        "player_b": "WO",
        "date": "1. kolo",
        "player_a_team": "BOMBERE",
        "player_b_team": "BERNARD Club",
        "doubles": true
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Ján ŘIHAK/Slavomír KRÁLIK",
        "player_b": "WO",
        "date": "1. kolo",
        "player_a_team": "BOMBERE",
        "player_b_team": "BERNARD Club",
        "doubles": true
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Jozef MOHŇANSKÝ/Juraj BUCHNER",
        "player_b": "Jarmila SOMOŠOVÁ/Zuzana GAŽI",
        "date": "1. kolo",
        "player_a_team": "METALKOV",
        "player_b_team": "MYSLAVA \"Ž\"",
        "doubles": true
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "František CZINGELY/Ľubomír VARTÁS",
        "player_b": "Pavol CINKANIČ/Martina KOLIBÁROVÁ",
        "date": "1. kolo",
        "player_a_team": "METALKOV",
        "player_b_team": "MYSLAVA \"Ž\"",
        "doubles": true
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Peter ŠTEFANCO/Andrej KARLIK",
        "player_b": "Jozef HUDÁK/Peter ŠEBEK st.",
        "date": "1. kolo",
        "player_a_team": "KOMÉTA KE",
        "player_b_team": "EUROCAST",
        "doubles": true
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Peter BARSA/Juraj ANTOŠ",
        "player_b": "Julius PILLÁR/Patrík TIRPÁK",
        "date": "1. kolo",
        "player_a_team": "KOMÉTA KE",
        "player_b_team": "EUROCAST",
        "doubles": true
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "Peter POLÁK",
        "player_b": "Milan PAŽIČ",
        "date": "1. kolo",
        "player_a_team": "SOŠ Ž",
        "player_b_team": "REPREX"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Jozef MOLNÁR",
        "player_b": "Ľubomír HOCHVART",
        "date": "1. kolo",
        "player_a_team": "SOŠ Ž",
        "player_b_team": "REPREX"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Miro. HANIČÁK",
        "player_b": "Daniel VAŇO",
        "date": "1. kolo",
        "player_a_team": "SOŠ Ž",
        "player_b_team": "REPREX"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Slavomír KEŠELÁK",
        "player_b": "Ján PETRŽALA",
        "date": "1. kolo",
        "player_a_team": "SOŠ Ž",
        "player_b_team": "REPREX"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Peter POLÁK",
        "player_b": "Ľubomír HOCHVART",
        "date": "1. kolo",
        "player_a_team": "SOŠ Ž",
        "player_b_team": "REPREX"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Daniel GIESE",
        "player_b": "Peter RUSNÁK",
        "date": "1. kolo",
        "player_a_team": "SOŠ Ž",
        "player_b_team": "REPREX"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Jozef MOLNÁR",
        "player_b": "Ján PETRŽALA",
        "date": "1. kolo",
        "player_a_team": "SOŠ Ž",
        "player_b_team": "REPREX"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Slavomír KEŠELÁK",
        "player_b": "Milan PAŽIČ",
        "date": "1. kolo",
        "player_a_team": "SOŠ Ž",
        "player_b_team": "REPREX"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Peter POLÁK",
        "player_b": "Štefan VENDEL",
        "date": "1. kolo",
        "player_a_team": "SOŠ Ž",
        "player_b_team": "REPREX"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Miro. HANIČÁK",
        "player_b": "Ján PETRŽALA",
        "date": "1. kolo",
        "player_a_team": "SOŠ Ž",
        "player_b_team": "REPREX"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Slavomír KEŠELÁK",
        "player_b": "Peter RUSNÁK",
        "date": "1. kolo",
        "player_a_team": "SOŠ Ž",
        "player_b_team": "REPREX"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Daniel GIESE",
        "player_b": "Ľubomír HOCHVART",
        "date": "1. kolo",
        "player_a_team": "SOŠ Ž",
        "player_b_team": "REPREX"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Peter POLÁK",
        "player_b": "Peter RUSNÁK",
        "date": "1. kolo",
        "player_a_team": "SOŠ Ž",
        "player_b_team": "REPREX"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Daniel GIESE",
        "player_b": "Milan PAŽIČ",
        "date": "1. kolo",
        "player_a_team": "SOŠ Ž",
        "player_b_team": "REPREX"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Miro. HANIČÁK",
        "player_b": "Ľubomír HOCHVART",
        "date": "1. kolo",
        "player_a_team": "SOŠ Ž",
        "player_b_team": "REPREX"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Jozef MOLNÁR",
        "player_b": "Daniel VAŇO",
        "date": "1. kolo",
        "player_a_team": "SOŠ Ž",
        "player_b_team": "REPREX"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Martin SOĽÁR",
        "player_b": "Marek KUNDRIK",
        "date": "1. kolo",
        "player_a_team": "SKP \"A\"",
        "player_b_team": "ASTORIA FIT"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Štefan LISSÝ",
        "player_b": "Martin MUCHA",
        "date": "1. kolo",
        "player_a_team": "SKP \"A\"",
        "player_b_team": "ASTORIA FIT"
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "Peter JAKUBEC",
        "player_b": "Matúš HRČKA",
        "date": "1. kolo",
        "player_a_team": "SKP \"A\"",
        "player_b_team": "ASTORIA FIT"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Miroslav KOSCELANSKÝ",
        "player_b": "Andrej KAČKOŠ",
        "date": "1. kolo",
        "player_a_team": "SKP \"A\"",
        "player_b_team": "ASTORIA FIT"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Martin SOĽÁR",
        "player_b": "Martin MUCHA",
        "date": "1. kolo",
        "player_a_team": "SKP \"A\"",
        "player_b_team": "ASTORIA FIT"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Štefan LISSÝ",
        "player_b": "Matúš HRČKA",
        "date": "1. kolo",
        "player_a_team": "SKP \"A\"",
        "player_b_team": "ASTORIA FIT"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Peter JAKUBEC",
        "player_b": "Julus WÉBER",
        "date": "1. kolo",
        "player_a_team": "SKP \"A\"",
        "player_b_team": "ASTORIA FIT"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Miroslav KOSCELANSKÝ",
        "player_b": "Marek KUNDRIK",
        "date": "1. kolo",
        "player_a_team": "SKP \"A\"",
        "player_b_team": "ASTORIA FIT"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Martin SOĽÁR",
        "player_b": "Matúš HRČKA",
        "date": "1. kolo",
        "player_a_team": "SKP \"A\"",
        "player_b_team": "ASTORIA FIT"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Štefan LISSÝ",
        "player_b": "Andrej KAČKOŠ",
        "date": "1. kolo",
        "player_a_team": "SKP \"A\"",
        "player_b_team": "ASTORIA FIT"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Peter JAKUBEC",
        "player_b": "Marek KUNDRIK",
        "date": "1. kolo",
        "player_a_team": "SKP \"A\"",
        "player_b_team": "ASTORIA FIT"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Miroslav KOSCELANSKÝ",
        "player_b": "Martin MUCHA",
        "date": "1. kolo",
        "player_a_team": "SKP \"A\"",
        "player_b_team": "ASTORIA FIT"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Martin SOĽÁR",
        "player_b": "Julus WÉBER",
        "date": "1. kolo",
        "player_a_team": "SKP \"A\"",
        "player_b_team": "ASTORIA FIT"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Štefan LISSÝ",
        "player_b": "Marek KUNDRIK",
        "date": "1. kolo",
        "player_a_team": "SKP \"A\"",
        "player_b_team": "ASTORIA FIT"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Peter JAKUBEC",
        "player_b": "Martin MUCHA",
        "date": "1. kolo",
        "player_a_team": "SKP \"A\"",
        "player_b_team": "ASTORIA FIT"
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "Miroslav KOSCELANSKÝ",
        "player_b": "Matúš HRČKA",
        "date": "1. kolo",
        "player_a_team": "SKP \"A\"",
        "player_b_team": "ASTORIA FIT"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Jozef FOTTA",
        "player_b": "Andrej MAKRANSKÝ",
        "date": "1. kolo",
        "player_a_team": "MYSLAVA",
        "player_b_team": "TTC KVP"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Vladimír VARGOVČÁK",
        "player_b": "Andrej MAKRANSKÝ ml.",
        "date": "1. kolo",
        "player_a_team": "MYSLAVA",
        "player_b_team": "TTC KVP"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Ján FOTTA",
        "player_b": "Tomáš BEKECS",
        "date": "1. kolo",
        "player_a_team": "MYSLAVA",
        "player_b_team": "TTC KVP"
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Milan ŠOLC",
        "player_b": "Viliam MAYER",
        "date": "1. kolo",
        "player_a_team": "MYSLAVA",
        "player_b_team": "TTC KVP"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Jozef FOTTA",
        "player_b": "Andrej MAKRANSKÝ ml.",
        "date": "1. kolo",
        "player_a_team": "MYSLAVA",
        "player_b_team": "TTC KVP"
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Vladimír VARGOVČÁK",
        "player_b": "Tomáš BEKECS",
        "date": "1. kolo",
        "player_a_team": "MYSLAVA",
        "player_b_team": "TTC KVP"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Ján FOTTA",
        "player_b": "Viliam MAYER",
        "date": "1. kolo",
        "player_a_team": "MYSLAVA",
        "player_b_team": "TTC KVP"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Milan ŠOLC",
        "player_b": "Andrej MAKRANSKÝ",
        "date": "1. kolo",
        "player_a_team": "MYSLAVA",
        "player_b_team": "TTC KVP"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Jozef FOTTA",
        "player_b": "Tomáš BEKECS",
        "date": "1. kolo",
        "player_a_team": "MYSLAVA",
        "player_b_team": "TTC KVP"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Vladimír VARGOVČÁK",
        "player_b": "Viliam MAYER",
        "date": "1. kolo",
        "player_a_team": "MYSLAVA",
        "player_b_team": "TTC KVP"
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Ján FOTTA",
        "player_b": "Andrej MAKRANSKÝ",
        "date": "1. kolo",
        "player_a_team": "MYSLAVA",
        "player_b_team": "TTC KVP"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Milan ŠOLC",
        "player_b": "Andrej MAKRANSKÝ ml.",
        "date": "1. kolo",
        "player_a_team": "MYSLAVA",
        "player_b_team": "TTC KVP"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Jozef FOTTA",
        "player_b": "Viliam MAYER",
        "date": "1. kolo",
        "player_a_team": "MYSLAVA",
        "player_b_team": "TTC KVP"
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Vladimír VARGOVČÁK",
        "player_b": "Andrej MAKRANSKÝ",
        "date": "1. kolo",
        "player_a_team": "MYSLAVA",
        "player_b_team": "TTC KVP"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Ján FOTTA",
        "player_b": "Andrej MAKRANSKÝ ml.",
        "date": "1. kolo",
        "player_a_team": "MYSLAVA",
        "player_b_team": "TTC KVP"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Milan ŠOLC",
        "player_b": "Tomáš BEKECS",
        "date": "1. kolo",
        "player_a_team": "MYSLAVA",
        "player_b_team": "TTC KVP"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Milan SUCHÝ",
        "player_b": "Štefan PČOLA",
        "date": "1. kolo",
        "player_a_team": "COKERY",
        "player_b_team": "MONTREAL"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Jaroslav WIENER",
        "player_b": "M. ZÁRIK",
        "date": "1. kolo",
        "player_a_team": "COKERY",
        "player_b_team": "MONTREAL"
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "Miro. HARČÁRIK",
        "player_b": "Milan MICHLOVIČ",
        "date": "1. kolo",
        "player_a_team": "COKERY",
        "player_b_team": "MONTREAL"
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "Igor TKÁČ",
        "player_b": "Luboš MRÁZ",
        "date": "1. kolo",
        "player_a_team": "COKERY",
        "player_b_team": "MONTREAL"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Anton STANICKÝ",
        "player_b": "M. ZÁRIK",
        "date": "1. kolo",
        "player_a_team": "COKERY",
        "player_b_team": "MONTREAL"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Jaroslav WIENER",
        "player_b": "Milan MICHLOVIČ",
        "date": "1. kolo",
        "player_a_team": "COKERY",
        "player_b_team": "MONTREAL"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Miro. HARČÁRIK",
        "player_b": "Milan GAJTKO",
        "date": "1. kolo",
        "player_a_team": "COKERY",
        "player_b_team": "MONTREAL"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Igor TKÁČ",
        "player_b": "Štefan PČOLA",
        "date": "1. kolo",
        "player_a_team": "COKERY",
        "player_b_team": "MONTREAL"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Milan SUCHÝ",
        "player_b": "Milan MICHLOVIČ",
        "date": "1. kolo",
        "player_a_team": "COKERY",
        "player_b_team": "MONTREAL"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Jaroslav WIENER",
        "player_b": "Štefan PČOLA",
        "date": "1. kolo",
        "player_a_team": "COKERY",
        "player_b_team": "MONTREAL"
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "Anton STANICKÝ",
        "player_b": "Milan GAJTKO",
        "date": "1. kolo",
        "player_a_team": "COKERY",
        "player_b_team": "MONTREAL"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Igor TKÁČ",
        "player_b": "M. ZÁRIK",
        "date": "1. kolo",
        "player_a_team": "COKERY",
        "player_b_team": "MONTREAL"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Milan SUCHÝ",
        "player_b": "Štefan PČOLA",
        "date": "1. kolo",
        "player_a_team": "COKERY",
        "player_b_team": "MONTREAL"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Jaroslav WIENER",
        "player_b": "Milan MICHLOVIČ",
        "date": "1. kolo",
        "player_a_team": "COKERY",
        "player_b_team": "MONTREAL"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Miro. HARČÁRIK",
        "player_b": "M. ZÁRIK",
        "date": "1. kolo",
        "player_a_team": "COKERY",
        "player_b_team": "MONTREAL"
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "Igor TKÁČ",
        "player_b": "Milan MICHLOVIČ",
        "date": "1. kolo",
        "player_a_team": "COKERY",
        "player_b_team": "MONTREAL"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Marek SIMKO",
        "player_b": "David LEŠUNDÁK",
        "date": "1. kolo",
        "player_a_team": "TT TEAM",
        "player_b_team": "SKP \"B\""
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Andrej FELBER",
        "player_b": "Martin ĎURIŠIN",
        "date": "1. kolo",
        "player_a_team": "TT TEAM",
        "player_b_team": "SKP \"B\""
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Juraj POLYAK",
        "player_b": "Peter GABOŠ",
        "date": "1. kolo",
        "player_a_team": "TT TEAM",
        "player_b_team": "SKP \"B\""
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Peter RUŽIČKA",
        "player_b": "Marek SKYBA",
        "date": "1. kolo",
        "player_a_team": "TT TEAM",
        "player_b_team": "SKP \"B\""
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Marek SIMKO",
        "player_b": "Martin ĎURIŠIN",
        "date": "1. kolo",
        "player_a_team": "TT TEAM",
        "player_b_team": "SKP \"B\""
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Andrej FELBER",
        "player_b": "Peter GABOŠ",
        "date": "1. kolo",
        "player_a_team": "TT TEAM",
        "player_b_team": "SKP \"B\""
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Juraj POLYAK",
        "player_b": "Marek SKYBA",
        "date": "1. kolo",
        "player_a_team": "TT TEAM",
        "player_b_team": "SKP \"B\""
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Peter RUŽIČKA",
        "player_b": "David LEŠUNDÁK",
        "date": "1. kolo",
        "player_a_team": "TT TEAM",
        "player_b_team": "SKP \"B\""
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Marek SIMKO",
        "player_b": "Peter GABOŠ",
        "date": "1. kolo",
        "player_a_team": "TT TEAM",
        "player_b_team": "SKP \"B\""
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Andrej FELBER",
        "player_b": "Marek SKYBA",
        "date": "1. kolo",
        "player_a_team": "TT TEAM",
        "player_b_team": "SKP \"B\""
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Ľubomír BENDZÁK",
        "player_b": "David LEŠUNDÁK",
        "date": "1. kolo",
        "player_a_team": "TT TEAM",
        "player_b_team": "SKP \"B\""
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Peter RUŽIČKA",
        "player_b": "Martin ĎURIŠIN",
        "date": "1. kolo",
        "player_a_team": "TT TEAM",
        "player_b_team": "SKP \"B\""
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Marek SIMKO",
        "player_b": "Marek SKYBA",
        "date": "1. kolo",
        "player_a_team": "TT TEAM",
        "player_b_team": "SKP \"B\""
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "Andrej FELBER",
        "player_b": "David LEŠUNDÁK",
        "date": "1. kolo",
        "player_a_team": "TT TEAM",
        "player_b_team": "SKP \"B\""
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Juraj POLYAK",
        "player_b": "Martin ĎURIŠIN",
        "date": "1. kolo",
        "player_a_team": "TT TEAM",
        "player_b_team": "SKP \"B\""
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Ľubomír BENDZÁK",
        "player_b": "Peter GABOŠ",
        "date": "1. kolo",
        "player_a_team": "TT TEAM",
        "player_b_team": "SKP \"B\""
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Ľubomír VARTÁS",
        "player_b": "Martina KOLIBÁROVÁ",
        "date": "1. kolo",
        "player_a_team": "METALKOV",
        "player_b_team": "MYSLAVA \"Ž\""
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "František CZINGELY",
        "player_b": "Jarmila SOMOŠOVÁ",
        "date": "1. kolo",
        "player_a_team": "METALKOV",
        "player_b_team": "MYSLAVA \"Ž\""
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Juraj BUCHNER",
        "player_b": "Pavol CINKANIČ",
        "date": "1. kolo",
        "player_a_team": "METALKOV",
        "player_b_team": "MYSLAVA \"Ž\""
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Jozef MOHŇANSKÝ",
        "player_b": "Iveta SOLČANIOVÁ",
        "date": "1. kolo",
        "player_a_team": "METALKOV",
        "player_b_team": "MYSLAVA \"Ž\""
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Ľubomír VARTÁS",
        "player_b": "Jarmila SOMOŠOVÁ",
        "date": "1. kolo",
        "player_a_team": "METALKOV",
        "player_b_team": "MYSLAVA \"Ž\""
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "František CZINGELY",
        "player_b": "Zuzana GAŽI",
        "date": "1. kolo",
        "player_a_team": "METALKOV",
        "player_b_team": "MYSLAVA \"Ž\""
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Juraj BUCHNER",
        "player_b": "Iveta SOLČANIOVÁ",
        "date": "1. kolo",
        "player_a_team": "METALKOV",
        "player_b_team": "MYSLAVA \"Ž\""
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Vladimír LÁSLOFI",
        "player_b": "Martina KOLIBÁROVÁ",
        "date": "1. kolo",
        "player_a_team": "METALKOV",
        "player_b_team": "MYSLAVA \"Ž\""
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Ľubomír VARTÁS",
        "player_b": "Pavol CINKANIČ",
        "date": "1. kolo",
        "player_a_team": "METALKOV",
        "player_b_team": "MYSLAVA \"Ž\""
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "František CZINGELY",
        "player_b": "Zuzana GAŽI",
        "date": "1. kolo",
        "player_a_team": "METALKOV",
        "player_b_team": "MYSLAVA \"Ž\""
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Juraj BUCHNER",
        "player_b": "Martina KOLIBÁROVÁ",
        "date": "1. kolo",
        "player_a_team": "METALKOV",
        "player_b_team": "MYSLAVA \"Ž\""
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Jozef MOHŇANSKÝ",
        "player_b": "Jarmila SOMOŠOVÁ",
        "date": "1. kolo",
        "player_a_team": "METALKOV",
        "player_b_team": "MYSLAVA \"Ž\""
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Ľubomír VARTÁS",
        "player_b": "Iveta SOLČANIOVÁ",
        "date": "1. kolo",
        "player_a_team": "METALKOV",
        "player_b_team": "MYSLAVA \"Ž\""
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "František CZINGELY",
        "player_b": "Martina KOLIBÁROVÁ",
        "date": "1. kolo",
        "player_a_team": "METALKOV",
        "player_b_team": "MYSLAVA \"Ž\""
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "Vladimír LÁSLOFI",
        "player_b": "Zuzana GAŽI",
        "date": "1. kolo",
        "player_a_team": "METALKOV",
        "player_b_team": "MYSLAVA \"Ž\""
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Vladimír LÁSLOFI",
        "player_b": "Pavol CINKANIČ",
        "date": "1. kolo",
        "player_a_team": "METALKOV",
        "player_b_team": "MYSLAVA \"Ž\""
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Peter BARSA",
        "player_b": "Julius PILLÁR",
        "date": "1. kolo",
        "player_a_team": "KOMÉTA KE",
        "player_b_team": "EUROCAST"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Juraj ANTOŠ",
        "player_b": "Peter ŠEBEK st.",
        "date": "1. kolo",
        "player_a_team": "KOMÉTA KE",
        "player_b_team": "EUROCAST"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Andrej KARLIK",
        "player_b": "Jozef HUDÁK",
        "date": "1. kolo",
        "player_a_team": "KOMÉTA KE",
        "player_b_team": "EUROCAST"
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "Milan KRASNAY",
        "player_b": "Patrík TIRPÁK",
        "date": "1. kolo",
        "player_a_team": "KOMÉTA KE",
        "player_b_team": "EUROCAST"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Peter BARSA",
        "player_b": "P. ŠEBEK",
        "date": "1. kolo",
        "player_a_team": "KOMÉTA KE",
        "player_b_team": "EUROCAST"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Juraj ANTOŠ",
        "player_b": "Jozef HUDÁK",
        "date": "1. kolo",
        "player_a_team": "KOMÉTA KE",
        "player_b_team": "EUROCAST"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Peter ŠTEFANCO",
        "player_b": "Patrík TIRPÁK",
        "date": "1. kolo",
        "player_a_team": "KOMÉTA KE",
        "player_b_team": "EUROCAST"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Ján GAJDOŠ",
        "player_b": "Julius PILLÁR",
        "date": "1. kolo",
        "player_a_team": "KOMÉTA KE",
        "player_b_team": "EUROCAST"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Peter BARSA",
        "player_b": "Jozef HUDÁK",
        "date": "1. kolo",
        "player_a_team": "KOMÉTA KE",
        "player_b_team": "EUROCAST"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Juraj ANTOŠ",
        "player_b": "Patrík TIRPÁK",
        "date": "1. kolo",
        "player_a_team": "KOMÉTA KE",
        "player_b_team": "EUROCAST"
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "Andrej KARLIK",
        "player_b": "Julius PILLÁR",
        "date": "1. kolo",
        "player_a_team": "KOMÉTA KE",
        "player_b_team": "EUROCAST"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Milan KRASNAY",
        "player_b": "P. ŠEBEK",
        "date": "1. kolo",
        "player_a_team": "KOMÉTA KE",
        "player_b_team": "EUROCAST"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Peter BARSA",
        "player_b": "Patrík TIRPÁK",
        "date": "1. kolo",
        "player_a_team": "KOMÉTA KE",
        "player_b_team": "EUROCAST"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Juraj ANTOŠ",
        "player_b": "Julius PILLÁR",
        "date": "1. kolo",
        "player_a_team": "KOMÉTA KE",
        "player_b_team": "EUROCAST"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Peter ŠTEFANCO",
        "player_b": "P. ŠEBEK",
        "date": "1. kolo",
        "player_a_team": "KOMÉTA KE",
        "player_b_team": "EUROCAST"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Ján GAJDOŠ",
        "player_b": "Jozef HUDÁK",
        "date": "1. kolo",
        "player_a_team": "KOMÉTA KE",
        "player_b_team": "EUROCAST"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "WO",
        "player_b": "WO",
        "date": "1. kolo",
        "player_a_team": "BOMBERE",
        "player_b_team": "BERNARD Club"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "WO",
        "player_b": "WO",
        "date": "1. kolo",
        "player_a_team": "BOMBERE",
        "player_b_team": "BERNARD Club"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "WO",
        "player_b": "WO",
        "date": "1. kolo",
        "player_a_team": "BOMBERE",
        "player_b_team": "BERNARD Club"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "WO",
        "player_b": "WO",
        "date": "1. kolo",
        "player_a_team": "BOMBERE",
        "player_b_team": "BERNARD Club"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "WO",
        "player_b": "WO",
        "date": "1. kolo",
        "player_a_team": "BOMBERE",
        "player_b_team": "BERNARD Club"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "WO",
        "player_b": "WO",
        "date": "1. kolo",
        "player_a_team": "BOMBERE",
        "player_b_team": "BERNARD Club"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "WO",
        "player_b": "WO",
        "date": "1. kolo",
        "player_a_team": "BOMBERE",
        "player_b_team": "BERNARD Club"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "WO",
        "player_b": "WO",
        "date": "1. kolo",
        "player_a_team": "BOMBERE",
        "player_b_team": "BERNARD Club"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "WO",
        "player_b": "WO",
        "date": "1. kolo",
        "player_a_team": "BOMBERE",
        "player_b_team": "BERNARD Club"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "WO",
        "player_b": "WO",
        "date": "1. kolo",
        "player_a_team": "BOMBERE",
        "player_b_team": "BERNARD Club"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "WO",
        "player_b": "WO",
        "date": "1. kolo",
        "player_a_team": "BOMBERE",
        "player_b_team": "BERNARD Club"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "WO",
        "player_b": "WO",
        "date": "1. kolo",
        "player_a_team": "BOMBERE",
        "player_b_team": "BERNARD Club"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "WO",
        "player_b": "WO",
        "date": "1. kolo",
        "player_a_team": "BOMBERE",
        "player_b_team": "BERNARD Club"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "WO",
        "player_b": "WO",
        "date": "1. kolo",
        "player_a_team": "BOMBERE",
        "player_b_team": "BERNARD Club"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "WO",
        "player_b": "WO",
        "date": "1. kolo",
        "player_a_team": "BOMBERE",
        "player_b_team": "BERNARD Club"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "WO",
        "player_b": "WO",
        "date": "1. kolo",
        "player_a_team": "BOMBERE",
        "player_b_team": "BERNARD Club"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "WO",
        "player_b": "WO",
        "date": "2. kolo",
        "player_a_team": "TTC KVP",
        "player_b_team": "SOŠ Ž",
        "doubles": true
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "WO",
        "player_b": "WO",
        "date": "2. kolo",
        "player_a_team": "TTC KVP",
        "player_b_team": "SOŠ Ž",
        "doubles": true
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Julius PILLÁR/Patrík TIRPÁK",
        "player_b": "Miro. HARČÁRIK/Jaroslav WIENER",
        "date": "2. kolo",
        "player_a_team": "EUROCAST",
        "player_b_team": "COKERY",
        "doubles": true
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Peter ŠEBEK st./Jozef HUDÁK",
        "player_b": "Milan SUCHÝ/Igor TKÁČ",
        "date": "2. kolo",
        "player_a_team": "EUROCAST",
        "player_b_team": "COKERY",
        "doubles": true
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Štefan LISSÝ/Martin SOĽÁR",
        "player_b": "Csaba BECSE/Tamás BÓNI",
        "date": "2. kolo",
        "player_a_team": "SKP \"A\"",
        "player_b_team": "METALKOV",
        "doubles": true
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Miroslav KOSCELANSKÝ/Peter JAKUBEC",
        "player_b": "Ľubomír VARTÁS/František CZINGELY",
        "date": "2. kolo",
        "player_a_team": "SKP \"A\"",
        "player_b_team": "METALKOV",
        "doubles": true
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Matúš HRČKA/Martin MUCHA",
        "player_b": "David LEŠUNDÁK/Martin ĎURIŠIN",
        "date": "2. kolo",
        "player_a_team": "ASTORIA FIT",
        "player_b_team": "SKP \"B\"",
        "doubles": true
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Marek KUNDRIK/Andrej KAČKOŠ",
        "player_b": "Michal NINITZ/Marek SKYBA",
        "date": "2. kolo",
        "player_a_team": "ASTORIA FIT",
        "player_b_team": "SKP \"B\"",
        "doubles": true
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Jarmila SOMOŠOVÁ/Zuzana GAŽI",
        "player_b": "Ján FOTTA/Jozef FOTTA",
        "date": "2. kolo",
        "player_a_team": "MYSLAVA \"Ž\"",
        "player_b_team": "MYSLAVA",
        "doubles": true
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Izabela VARGOVÁ/Martina KOLIBÁROVÁ",
        "player_b": "Milan ŠOLC/Marián HOVAN",
        "date": "2. kolo",
        "player_a_team": "MYSLAVA \"Ž\"",
        "player_b_team": "MYSLAVA",
        "doubles": true
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Ľubomír HOCHVART/Milan PAŽIČ",
        "player_b": "Ján ŘIHAK/Marek PATAKY",
        "date": "2. kolo",
        "player_a_team": "REPREX",
        "player_b_team": "BOMBERE",
        "doubles": true
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Miloslav KOCÚR/Daniel VAŇO",
        "player_b": "Slavomír KRÁLIK/Ján GUZY",
        "date": "2. kolo",
        "player_a_team": "REPREX",
        "player_b_team": "BOMBERE",
        "doubles": true
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Štefan PČOLA/Milan MICHLOVIČ",
        "player_b": "Marek SIMKO/Andrej FELBER",
        "date": "2. kolo",
        "player_a_team": "MONTREAL",
        "player_b_team": "TT TEAM",
        "doubles": true
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Luboš MRÁZ/Milan GAJTKO",
        "player_b": "Juraj POLYAK/Peter RUŽIČKA",
        "date": "2. kolo",
        "player_a_team": "MONTREAL",
        "player_b_team": "TT TEAM",
        "doubles": true
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Julius PILLÁR",
        "player_b": "Miro. HARČÁRIK",
        "date": "2. kolo",
        "player_a_team": "EUROCAST",
        "player_b_team": "COKERY"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Patrík TIRPÁK",
        "player_b": "Jaroslav WIENER",
        "date": "2. kolo",
        "player_a_team": "EUROCAST",
        "player_b_team": "COKERY"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Peter ŠEBEK st.",
        "player_b": "Milan SUCHÝ",
        "date": "2. kolo",
        "player_a_team": "EUROCAST",
        "player_b_team": "COKERY"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Jozef ZAVACKÝ",
        "player_b": "Igor TKÁČ",
        "date": "2. kolo",
        "player_a_team": "EUROCAST",
        "player_b_team": "COKERY"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Julius PILLÁR",
        "player_b": "Jaroslav WIENER",
        "date": "2. kolo",
        "player_a_team": "EUROCAST",
        "player_b_team": "COKERY"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Patrík TIRPÁK",
        "player_b": "Anton STANICKÝ",
        "date": "2. kolo",
        "player_a_team": "EUROCAST",
        "player_b_team": "COKERY"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Peter ŠEBEK st.",
        "player_b": "Igor TKÁČ",
        "date": "2. kolo",
        "player_a_team": "EUROCAST",
        "player_b_team": "COKERY"
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Jozef HUDÁK",
        "player_b": "Miro. HARČÁRIK",
        "date": "2. kolo",
        "player_a_team": "EUROCAST",
        "player_b_team": "COKERY"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Julius PILLÁR",
        "player_b": "Milan SUCHÝ",
        "date": "2. kolo",
        "player_a_team": "EUROCAST",
        "player_b_team": "COKERY"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Patrík TIRPÁK",
        "player_b": "Igor TKÁČ",
        "date": "2. kolo",
        "player_a_team": "EUROCAST",
        "player_b_team": "COKERY"
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Peter ŠEBEK st.",
        "player_b": "Miro. HARČÁRIK",
        "date": "2. kolo",
        "player_a_team": "EUROCAST",
        "player_b_team": "COKERY"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Jozef ZAVACKÝ",
        "player_b": "Jaroslav WIENER",
        "date": "2. kolo",
        "player_a_team": "EUROCAST",
        "player_b_team": "COKERY"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Julius PILLÁR",
        "player_b": "Anton STANICKÝ",
        "date": "2. kolo",
        "player_a_team": "EUROCAST",
        "player_b_team": "COKERY"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Patrík TIRPÁK",
        "player_b": "Miro. HARČÁRIK",
        "date": "2. kolo",
        "player_a_team": "EUROCAST",
        "player_b_team": "COKERY"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Peter ŠEBEK st.",
        "player_b": "Jaroslav WIENER",
        "date": "2. kolo",
        "player_a_team": "EUROCAST",
        "player_b_team": "COKERY"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Jozef HUDÁK",
        "player_b": "Milan SUCHÝ",
        "date": "2. kolo",
        "player_a_team": "EUROCAST",
        "player_b_team": "COKERY"
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "Martin SOĽÁR",
        "player_b": "Ľubomír VARTÁS",
        "date": "2. kolo",
        "player_a_team": "SKP \"A\"",
        "player_b_team": "METALKOV"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Peter JAKUBEC",
        "player_b": "František CZINGELY",
        "date": "2. kolo",
        "player_a_team": "SKP \"A\"",
        "player_b_team": "METALKOV"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Štefan LISSÝ",
        "player_b": "Nándor BORTNYÁK",
        "date": "2. kolo",
        "player_a_team": "SKP \"A\"",
        "player_b_team": "METALKOV"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Miroslav KOSCELANSKÝ",
        "player_b": "Csaba BECSE",
        "date": "2. kolo",
        "player_a_team": "SKP \"A\"",
        "player_b_team": "METALKOV"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Martin SOĽÁR",
        "player_b": "František CZINGELY",
        "date": "2. kolo",
        "player_a_team": "SKP \"A\"",
        "player_b_team": "METALKOV"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Peter JAKUBEC",
        "player_b": "Nándor BORTNYÁK",
        "date": "2. kolo",
        "player_a_team": "SKP \"A\"",
        "player_b_team": "METALKOV"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Štefan LISSÝ",
        "player_b": "Tamás BÓNI",
        "date": "2. kolo",
        "player_a_team": "SKP \"A\"",
        "player_b_team": "METALKOV"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Miroslav KOSCELANSKÝ",
        "player_b": "Ľubomír VARTÁS",
        "date": "2. kolo",
        "player_a_team": "SKP \"A\"",
        "player_b_team": "METALKOV"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Martin SOĽÁR",
        "player_b": "Nándor BORTNYÁK",
        "date": "2. kolo",
        "player_a_team": "SKP \"A\"",
        "player_b_team": "METALKOV"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Peter JAKUBEC",
        "player_b": "Csaba BECSE",
        "date": "2. kolo",
        "player_a_team": "SKP \"A\"",
        "player_b_team": "METALKOV"
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Štefan LISSÝ",
        "player_b": "Ľubomír VARTÁS",
        "date": "2. kolo",
        "player_a_team": "SKP \"A\"",
        "player_b_team": "METALKOV"
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Miroslav KOSCELANSKÝ",
        "player_b": "František CZINGELY",
        "date": "2. kolo",
        "player_a_team": "SKP \"A\"",
        "player_b_team": "METALKOV"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Martin SOĽÁR",
        "player_b": "Tamás BÓNI",
        "date": "2. kolo",
        "player_a_team": "SKP \"A\"",
        "player_b_team": "METALKOV"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Peter JAKUBEC",
        "player_b": "Ľubomír VARTÁS",
        "date": "2. kolo",
        "player_a_team": "SKP \"A\"",
        "player_b_team": "METALKOV"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Štefan LISSÝ",
        "player_b": "František CZINGELY",
        "date": "2. kolo",
        "player_a_team": "SKP \"A\"",
        "player_b_team": "METALKOV"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Miroslav KOSCELANSKÝ",
        "player_b": "Nándor BORTNYÁK",
        "date": "2. kolo",
        "player_a_team": "SKP \"A\"",
        "player_b_team": "METALKOV"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Viktor ŠIDLÍK",
        "player_b": "David LEŠUNDÁK",
        "date": "2. kolo",
        "player_a_team": "ASTORIA FIT",
        "player_b_team": "SKP \"B\""
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Matúš HRČKA",
        "player_b": "Martin ĎURIŠIN",
        "date": "2. kolo",
        "player_a_team": "ASTORIA FIT",
        "player_b_team": "SKP \"B\""
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Martin MUCHA",
        "player_b": "Michal NINITZ",
        "date": "2. kolo",
        "player_a_team": "ASTORIA FIT",
        "player_b_team": "SKP \"B\""
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Marek KUNDRIK",
        "player_b": "Marek SKYBA",
        "date": "2. kolo",
        "player_a_team": "ASTORIA FIT",
        "player_b_team": "SKP \"B\""
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Andrej KAČKOŠ",
        "player_b": "Martin ĎURIŠIN",
        "date": "2. kolo",
        "player_a_team": "ASTORIA FIT",
        "player_b_team": "SKP \"B\""
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Matúš HRČKA",
        "player_b": "Michal NINITZ",
        "date": "2. kolo",
        "player_a_team": "ASTORIA FIT",
        "player_b_team": "SKP \"B\""
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Martin MUCHA",
        "player_b": "Marek SKYBA",
        "date": "2. kolo",
        "player_a_team": "ASTORIA FIT",
        "player_b_team": "SKP \"B\""
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Marek KUNDRIK",
        "player_b": "David LEŠUNDÁK",
        "date": "2. kolo",
        "player_a_team": "ASTORIA FIT",
        "player_b_team": "SKP \"B\""
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Viktor ŠIDLÍK",
        "player_b": "Michal NINITZ",
        "date": "2. kolo",
        "player_a_team": "ASTORIA FIT",
        "player_b_team": "SKP \"B\""
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Matúš HRČKA",
        "player_b": "Marek SKYBA",
        "date": "2. kolo",
        "player_a_team": "ASTORIA FIT",
        "player_b_team": "SKP \"B\""
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "Andrej KAČKOŠ",
        "player_b": "David LEŠUNDÁK",
        "date": "2. kolo",
        "player_a_team": "ASTORIA FIT",
        "player_b_team": "SKP \"B\""
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Marek KUNDRIK",
        "player_b": "Martin ĎURIŠIN",
        "date": "2. kolo",
        "player_a_team": "ASTORIA FIT",
        "player_b_team": "SKP \"B\""
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "Viktor ŠIDLÍK",
        "player_b": "Marek SKYBA",
        "date": "2. kolo",
        "player_a_team": "ASTORIA FIT",
        "player_b_team": "SKP \"B\""
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Matúš HRČKA",
        "player_b": "David LEŠUNDÁK",
        "date": "2. kolo",
        "player_a_team": "ASTORIA FIT",
        "player_b_team": "SKP \"B\""
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Martin MUCHA",
        "player_b": "Martin ĎURIŠIN",
        "date": "2. kolo",
        "player_a_team": "ASTORIA FIT",
        "player_b_team": "SKP \"B\""
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Andrej KAČKOŠ",
        "player_b": "Michal NINITZ",
        "date": "2. kolo",
        "player_a_team": "ASTORIA FIT",
        "player_b_team": "SKP \"B\""
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "Jarmila SOMOŠOVÁ",
        "player_b": "Ján FOTTA",
        "date": "2. kolo",
        "player_a_team": "MYSLAVA \"Ž\"",
        "player_b_team": "MYSLAVA"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Martina KOLIBÁROVÁ",
        "player_b": "Vladimír VARGOVČÁK",
        "date": "2. kolo",
        "player_a_team": "MYSLAVA \"Ž\"",
        "player_b_team": "MYSLAVA"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Zuzana GAŽI",
        "player_b": "Marián HOVAN",
        "date": "2. kolo",
        "player_a_team": "MYSLAVA \"Ž\"",
        "player_b_team": "MYSLAVA"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Izabela VARGOVÁ",
        "player_b": "Jozef FOTTA",
        "date": "2. kolo",
        "player_a_team": "MYSLAVA \"Ž\"",
        "player_b_team": "MYSLAVA"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Jarmila SOMOŠOVÁ",
        "player_b": "Vladimír VARGOVČÁK",
        "date": "2. kolo",
        "player_a_team": "MYSLAVA \"Ž\"",
        "player_b_team": "MYSLAVA"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Martina KOLIBÁROVÁ",
        "player_b": "Marián HOVAN",
        "date": "2. kolo",
        "player_a_team": "MYSLAVA \"Ž\"",
        "player_b_team": "MYSLAVA"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Zuzana GAŽI",
        "player_b": "Jozef FOTTA",
        "date": "2. kolo",
        "player_a_team": "MYSLAVA \"Ž\"",
        "player_b_team": "MYSLAVA"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Pavol CINKANIČ",
        "player_b": "Ján FOTTA",
        "date": "2. kolo",
        "player_a_team": "MYSLAVA \"Ž\"",
        "player_b_team": "MYSLAVA"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Jarmila SOMOŠOVÁ",
        "player_b": "Marián HOVAN",
        "date": "2. kolo",
        "player_a_team": "MYSLAVA \"Ž\"",
        "player_b_team": "MYSLAVA"
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Martina KOLIBÁROVÁ",
        "player_b": "Jozef FOTTA",
        "date": "2. kolo",
        "player_a_team": "MYSLAVA \"Ž\"",
        "player_b_team": "MYSLAVA"
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "Zuzana GAŽI",
        "player_b": "Milan ŠOLC",
        "date": "2. kolo",
        "player_a_team": "MYSLAVA \"Ž\"",
        "player_b_team": "MYSLAVA"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Pavol CINKANIČ",
        "player_b": "Vladimír VARGOVČÁK",
        "date": "2. kolo",
        "player_a_team": "MYSLAVA \"Ž\"",
        "player_b_team": "MYSLAVA"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Jarmila SOMOŠOVÁ",
        "player_b": "Jozef FOTTA",
        "date": "2. kolo",
        "player_a_team": "MYSLAVA \"Ž\"",
        "player_b_team": "MYSLAVA"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Martina KOLIBÁROVÁ",
        "player_b": "Milan ŠOLC",
        "date": "2. kolo",
        "player_a_team": "MYSLAVA \"Ž\"",
        "player_b_team": "MYSLAVA"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Zuzana GAŽI",
        "player_b": "Vladimír VARGOVČÁK",
        "date": "2. kolo",
        "player_a_team": "MYSLAVA \"Ž\"",
        "player_b_team": "MYSLAVA"
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Pavol CINKANIČ",
        "player_b": "Marián HOVAN",
        "date": "2. kolo",
        "player_a_team": "MYSLAVA \"Ž\"",
        "player_b_team": "MYSLAVA"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Ľubomír HOCHVART",
        "player_b": "Ján ŘIHAK",
        "date": "2. kolo",
        "player_a_team": "REPREX",
        "player_b_team": "BOMBERE"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Milan PAŽIČ",
        "player_b": "Marek PATAKY",
        "date": "2. kolo",
        "player_a_team": "REPREX",
        "player_b_team": "BOMBERE"
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "Miloslav KOCÚR",
        "player_b": "Slavomír KRÁLIK",
        "date": "2. kolo",
        "player_a_team": "REPREX",
        "player_b_team": "BOMBERE"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Daniel VAŇO",
        "player_b": "Ján GUZY",
        "date": "2. kolo",
        "player_a_team": "REPREX",
        "player_b_team": "BOMBERE"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Ľubomír HOCHVART",
        "player_b": "Marek PATAKY",
        "date": "2. kolo",
        "player_a_team": "REPREX",
        "player_b_team": "BOMBERE"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Milan PAŽIČ",
        "player_b": "Slavomír KRÁLIK",
        "date": "2. kolo",
        "player_a_team": "REPREX",
        "player_b_team": "BOMBERE"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Miloslav KOCÚR",
        "player_b": "Ján GUZY",
        "date": "2. kolo",
        "player_a_team": "REPREX",
        "player_b_team": "BOMBERE"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Daniel VAŇO",
        "player_b": "Ján ŘIHAK",
        "date": "2. kolo",
        "player_a_team": "REPREX",
        "player_b_team": "BOMBERE"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Ľubomír HOCHVART",
        "player_b": "Slavomír KRÁLIK",
        "date": "2. kolo",
        "player_a_team": "REPREX",
        "player_b_team": "BOMBERE"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Milan PAŽIČ",
        "player_b": "Ján GUZY",
        "date": "2. kolo",
        "player_a_team": "REPREX",
        "player_b_team": "BOMBERE"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Miloslav KOCÚR",
        "player_b": "Ján ŘIHAK",
        "date": "2. kolo",
        "player_a_team": "REPREX",
        "player_b_team": "BOMBERE"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Daniel VAŇO",
        "player_b": "Marek PATAKY",
        "date": "2. kolo",
        "player_a_team": "REPREX",
        "player_b_team": "BOMBERE"
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "Ľubomír HOCHVART",
        "player_b": "Ján GUZY",
        "date": "2. kolo",
        "player_a_team": "REPREX",
        "player_b_team": "BOMBERE"
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Milan PAŽIČ",
        "player_b": "Ján ŘIHAK",
        "date": "2. kolo",
        "player_a_team": "REPREX",
        "player_b_team": "BOMBERE"
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "Miloslav KOCÚR",
        "player_b": "Marek PATAKY",
        "date": "2. kolo",
        "player_a_team": "REPREX",
        "player_b_team": "BOMBERE"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Daniel VAŇO",
        "player_b": "Slavomír KRÁLIK",
        "date": "2. kolo",
        "player_a_team": "REPREX",
        "player_b_team": "BOMBERE"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Milan MICHLOVIČ",
        "player_b": "Juraj POLYAK",
        "date": "2. kolo",
        "player_a_team": "MONTREAL",
        "player_b_team": "TT TEAM"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Štefan PČOLA",
        "player_b": "Peter RUŽIČKA",
        "date": "2. kolo",
        "player_a_team": "MONTREAL",
        "player_b_team": "TT TEAM"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Luboš MRÁZ",
        "player_b": "Andrej FELBER",
        "date": "2. kolo",
        "player_a_team": "MONTREAL",
        "player_b_team": "TT TEAM"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "M. ZÁRIK",
        "player_b": "Marek SIMKO",
        "date": "2. kolo",
        "player_a_team": "MONTREAL",
        "player_b_team": "TT TEAM"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Milan GAJTKO",
        "player_b": "Ľubomír BENDZÁK",
        "date": "2. kolo",
        "player_a_team": "MONTREAL",
        "player_b_team": "TT TEAM"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Štefan PČOLA",
        "player_b": "Andrej FELBER",
        "date": "2. kolo",
        "player_a_team": "MONTREAL",
        "player_b_team": "TT TEAM"
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Luboš MRÁZ",
        "player_b": "Marek SIMKO",
        "date": "2. kolo",
        "player_a_team": "MONTREAL",
        "player_b_team": "TT TEAM"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "M. ZÁRIK",
        "player_b": "Juraj POLYAK",
        "date": "2. kolo",
        "player_a_team": "MONTREAL",
        "player_b_team": "TT TEAM"
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Milan MICHLOVIČ",
        "player_b": "Andrej FELBER",
        "date": "2. kolo",
        "player_a_team": "MONTREAL",
        "player_b_team": "TT TEAM"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Štefan PČOLA",
        "player_b": "Marek SIMKO",
        "date": "2. kolo",
        "player_a_team": "MONTREAL",
        "player_b_team": "TT TEAM"
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Milan GAJTKO",
        "player_b": "Juraj POLYAK",
        "date": "2. kolo",
        "player_a_team": "MONTREAL",
        "player_b_team": "TT TEAM"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "M. ZÁRIK",
        "player_b": "Peter RUŽIČKA",
        "date": "2. kolo",
        "player_a_team": "MONTREAL",
        "player_b_team": "TT TEAM"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Milan MICHLOVIČ",
        "player_b": "Marek SIMKO",
        "date": "2. kolo",
        "player_a_team": "MONTREAL",
        "player_b_team": "TT TEAM"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Štefan PČOLA",
        "player_b": "Juraj POLYAK",
        "date": "2. kolo",
        "player_a_team": "MONTREAL",
        "player_b_team": "TT TEAM"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Luboš MRÁZ",
        "player_b": "Ľubomír BENDZÁK",
        "date": "2. kolo",
        "player_a_team": "MONTREAL",
        "player_b_team": "TT TEAM"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "M. ZÁRIK",
        "player_b": "Andrej FELBER",
        "date": "2. kolo",
        "player_a_team": "MONTREAL",
        "player_b_team": "TT TEAM"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "WO",
        "player_b": "WO",
        "date": "2. kolo",
        "player_a_team": "TTC KVP",
        "player_b_team": "SOŠ Ž"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "WO",
        "player_b": "WO",
        "date": "2. kolo",
        "player_a_team": "TTC KVP",
        "player_b_team": "SOŠ Ž"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "WO",
        "player_b": "WO",
        "date": "2. kolo",
        "player_a_team": "TTC KVP",
        "player_b_team": "SOŠ Ž"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "WO",
        "player_b": "WO",
        "date": "2. kolo",
        "player_a_team": "TTC KVP",
        "player_b_team": "SOŠ Ž"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "WO",
        "player_b": "WO",
        "date": "2. kolo",
        "player_a_team": "TTC KVP",
        "player_b_team": "SOŠ Ž"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "WO",
        "player_b": "WO",
        "date": "2. kolo",
        "player_a_team": "TTC KVP",
        "player_b_team": "SOŠ Ž"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "WO",
        "player_b": "WO",
        "date": "2. kolo",
        "player_a_team": "TTC KVP",
        "player_b_team": "SOŠ Ž"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "WO",
        "player_b": "WO",
        "date": "2. kolo",
        "player_a_team": "TTC KVP",
        "player_b_team": "SOŠ Ž"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "WO",
        "player_b": "WO",
        "date": "2. kolo",
        "player_a_team": "TTC KVP",
        "player_b_team": "SOŠ Ž"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "WO",
        "player_b": "WO",
        "date": "2. kolo",
        "player_a_team": "TTC KVP",
        "player_b_team": "SOŠ Ž"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "WO",
        "player_b": "WO",
        "date": "2. kolo",
        "player_a_team": "TTC KVP",
        "player_b_team": "SOŠ Ž"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "WO",
        "player_b": "WO",
        "date": "2. kolo",
        "player_a_team": "TTC KVP",
        "player_b_team": "SOŠ Ž"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "WO",
        "player_b": "WO",
        "date": "2. kolo",
        "player_a_team": "TTC KVP",
        "player_b_team": "SOŠ Ž"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "WO",
        "player_b": "WO",
        "date": "2. kolo",
        "player_a_team": "TTC KVP",
        "player_b_team": "SOŠ Ž"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "WO",
        "player_b": "WO",
        "date": "2. kolo",
        "player_a_team": "TTC KVP",
        "player_b_team": "SOŠ Ž"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "WO",
        "player_b": "WO",
        "date": "2. kolo",
        "player_a_team": "TTC KVP",
        "player_b_team": "SOŠ Ž"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Milan ŠOLC/Marián HOVAN",
        "player_b": "Štefan LISSÝ/Martin SOĽÁR",
        "date": "3. kolo",
        "player_a_team": "MYSLAVA",
        "player_b_team": "SKP \"A\"",
        "doubles": true
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Ján FOTTA/Jozef FOTTA",
        "player_b": "Matej KOVAČIK/Ľubomír FRANČÁK",
        "date": "3. kolo",
        "player_a_team": "MYSLAVA",
        "player_b_team": "SKP \"A\"",
        "doubles": true
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "David LEŠUNDÁK/Martin ĎURIŠIN",
        "player_b": "Milan MICHLOVIČ/Štefan PČOLA",
        "date": "3. kolo",
        "player_a_team": "SKP \"B\"",
        "player_b_team": "MONTREAL",
        "doubles": true
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Michal NINITZ/Marek SKYBA",
        "player_b": "Luboš MRÁZ/Milan GAJTKO",
        "date": "3. kolo",
        "player_a_team": "SKP \"B\"",
        "player_b_team": "MONTREAL",
        "doubles": true
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Daniel GIESE/Slavomír KEŠELÁK",
        "player_b": "Zuzana GAŽI/Jarmila SOMOŠOVÁ",
        "date": "3. kolo",
        "player_a_team": "SOŠ Ž",
        "player_b_team": "MYSLAVA \"Ž\"",
        "doubles": true
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Jozef MOLNÁR/Igor BAŠTI",
        "player_b": "Martina KOLIBÁROVÁ/Izabela VARGOVÁ",
        "date": "3. kolo",
        "player_a_team": "SOŠ Ž",
        "player_b_team": "MYSLAVA \"Ž\"",
        "doubles": true
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Jaroslav WIENER/Peter SZCZECZINA",
        "player_b": "Roman ČIŽMÁR/Stanislav PČOLA",
        "date": "3. kolo",
        "player_a_team": "COKERY",
        "player_b_team": "BERNARD Club",
        "doubles": true
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Milan SUCHÝ/Igor TKÁČ",
        "player_b": "Radoslav POĽA/Slav. FEČKE",
        "date": "3. kolo",
        "player_a_team": "COKERY",
        "player_b_team": "BERNARD Club",
        "doubles": true
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Peter MACH/Milan KRASNAY",
        "player_b": "Ľubomír HOCHVART/Milan PAŽIČ",
        "date": "3. kolo",
        "player_a_team": "KOMÉTA KE",
        "player_b_team": "REPREX",
        "doubles": true
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Peter BARSA/Juraj ANTOŠ",
        "player_b": "Miloslav KOCÚR/Ján PETRŽALA",
        "date": "3. kolo",
        "player_a_team": "KOMÉTA KE",
        "player_b_team": "REPREX",
        "doubles": true
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Peter VYHONSKÝ/Ján ŘIHAK",
        "player_b": "Eduard KUDLA/Andrej MAKRANSKÝ",
        "date": "3. kolo",
        "player_a_team": "BOMBERE",
        "player_b_team": "TTC KVP",
        "doubles": true
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Slavomír KRÁLIK/Ján GUZY",
        "player_b": "Ondrej KRÁLIK/Andrej MAKRANSKÝ ml.",
        "date": "3. kolo",
        "player_a_team": "BOMBERE",
        "player_b_team": "TTC KVP",
        "doubles": true
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Andrej FELBER/Ľubomír BENDZÁK",
        "player_b": "Peter ŠEBEK st./Jozef HUDÁK",
        "date": "3. kolo",
        "player_a_team": "TT TEAM",
        "player_b_team": "EUROCAST",
        "doubles": true
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Peter RUŽIČKA/Juraj POLYAK",
        "player_b": "Patrík TIRPÁK/Julius PILLÁR",
        "date": "3. kolo",
        "player_a_team": "TT TEAM",
        "player_b_team": "EUROCAST",
        "doubles": true
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Ľubomír VARTÁS/František CZINGELY",
        "player_b": "Marek KUNDRIK/Martin MUCHA",
        "date": "3. kolo",
        "player_a_team": "METALKOV",
        "player_b_team": "ASTORIA FIT",
        "doubles": true
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "Tamás BÓNI/Csaba BECSE",
        "player_b": "Julus WÉBER/Andrej KAČKOŠ",
        "date": "3. kolo",
        "player_a_team": "METALKOV",
        "player_b_team": "ASTORIA FIT",
        "doubles": true
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "Vladimír VARGOVČÁK",
        "player_b": "Martin SOĽÁR",
        "date": "3. kolo",
        "player_a_team": "MYSLAVA",
        "player_b_team": "SKP \"A\""
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Jozef FOTTA",
        "player_b": "Peter JAKUBEC",
        "date": "3. kolo",
        "player_a_team": "MYSLAVA",
        "player_b_team": "SKP \"A\""
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Marián HOVAN",
        "player_b": "Ľubomír FRANČÁK",
        "date": "3. kolo",
        "player_a_team": "MYSLAVA",
        "player_b_team": "SKP \"A\""
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Ján FOTTA",
        "player_b": "Štefan LISSÝ",
        "date": "3. kolo",
        "player_a_team": "MYSLAVA",
        "player_b_team": "SKP \"A\""
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Vladimír VARGOVČÁK",
        "player_b": "Peter JAKUBEC",
        "date": "3. kolo",
        "player_a_team": "MYSLAVA",
        "player_b_team": "SKP \"A\""
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "Jozef FOTTA",
        "player_b": "Ľubomír FRANČÁK",
        "date": "3. kolo",
        "player_a_team": "MYSLAVA",
        "player_b_team": "SKP \"A\""
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Marián HOVAN",
        "player_b": "Štefan LISSÝ",
        "date": "3. kolo",
        "player_a_team": "MYSLAVA",
        "player_b_team": "SKP \"A\""
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "Ján FOTTA",
        "player_b": "Martin SOĽÁR",
        "date": "3. kolo",
        "player_a_team": "MYSLAVA",
        "player_b_team": "SKP \"A\""
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Vladimír VARGOVČÁK",
        "player_b": "Matej KOVAČIK",
        "date": "3. kolo",
        "player_a_team": "MYSLAVA",
        "player_b_team": "SKP \"A\""
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Jozef FOTTA",
        "player_b": "Štefan LISSÝ",
        "date": "3. kolo",
        "player_a_team": "MYSLAVA",
        "player_b_team": "SKP \"A\""
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Marián HOVAN",
        "player_b": "Martin SOĽÁR",
        "date": "3. kolo",
        "player_a_team": "MYSLAVA",
        "player_b_team": "SKP \"A\""
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Milan ŠOLC",
        "player_b": "Peter JAKUBEC",
        "date": "3. kolo",
        "player_a_team": "MYSLAVA",
        "player_b_team": "SKP \"A\""
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Vladimír VARGOVČÁK",
        "player_b": "Štefan LISSÝ",
        "date": "3. kolo",
        "player_a_team": "MYSLAVA",
        "player_b_team": "SKP \"A\""
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Jozef FOTTA",
        "player_b": "Martin SOĽÁR",
        "date": "3. kolo",
        "player_a_team": "MYSLAVA",
        "player_b_team": "SKP \"A\""
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Marián HOVAN",
        "player_b": "Peter JAKUBEC",
        "date": "3. kolo",
        "player_a_team": "MYSLAVA",
        "player_b_team": "SKP \"A\""
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Milan ŠOLC",
        "player_b": "Ľubomír FRANČÁK",
        "date": "3. kolo",
        "player_a_team": "MYSLAVA",
        "player_b_team": "SKP \"A\""
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "David LEŠUNDÁK",
        "player_b": "Milan MICHLOVIČ",
        "date": "3. kolo",
        "player_a_team": "SKP \"B\"",
        "player_b_team": "MONTREAL"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Martin ĎURIŠIN",
        "player_b": "M. ZÁRIK",
        "date": "3. kolo",
        "player_a_team": "SKP \"B\"",
        "player_b_team": "MONTREAL"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Michal NINITZ",
        "player_b": "Štefan PČOLA",
        "date": "3. kolo",
        "player_a_team": "SKP \"B\"",
        "player_b_team": "MONTREAL"
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Marek SKYBA",
        "player_b": "Milan GAJTKO",
        "date": "3. kolo",
        "player_a_team": "SKP \"B\"",
        "player_b_team": "MONTREAL"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "David LEŠUNDÁK",
        "player_b": "M. ZÁRIK",
        "date": "3. kolo",
        "player_a_team": "SKP \"B\"",
        "player_b_team": "MONTREAL"
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Martin ĎURIŠIN",
        "player_b": "Luboš MRÁZ",
        "date": "3. kolo",
        "player_a_team": "SKP \"B\"",
        "player_b_team": "MONTREAL"
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "Michal NINITZ",
        "player_b": "Milan GAJTKO",
        "date": "3. kolo",
        "player_a_team": "SKP \"B\"",
        "player_b_team": "MONTREAL"
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "Marek SKYBA",
        "player_b": "Milan MICHLOVIČ",
        "date": "3. kolo",
        "player_a_team": "SKP \"B\"",
        "player_b_team": "MONTREAL"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "David LEŠUNDÁK",
        "player_b": "Štefan PČOLA",
        "date": "3. kolo",
        "player_a_team": "SKP \"B\"",
        "player_b_team": "MONTREAL"
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "Martin ĎURIŠIN",
        "player_b": "Milan GAJTKO",
        "date": "3. kolo",
        "player_a_team": "SKP \"B\"",
        "player_b_team": "MONTREAL"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Michal NINITZ",
        "player_b": "Luboš MRÁZ",
        "date": "3. kolo",
        "player_a_team": "SKP \"B\"",
        "player_b_team": "MONTREAL"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Marek SKYBA",
        "player_b": "M. ZÁRIK",
        "date": "3. kolo",
        "player_a_team": "SKP \"B\"",
        "player_b_team": "MONTREAL"
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "David LEŠUNDÁK",
        "player_b": "Luboš MRÁZ",
        "date": "3. kolo",
        "player_a_team": "SKP \"B\"",
        "player_b_team": "MONTREAL"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Martin ĎURIŠIN",
        "player_b": "Milan MICHLOVIČ",
        "date": "3. kolo",
        "player_a_team": "SKP \"B\"",
        "player_b_team": "MONTREAL"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Michal NINITZ",
        "player_b": "M. ZÁRIK",
        "date": "3. kolo",
        "player_a_team": "SKP \"B\"",
        "player_b_team": "MONTREAL"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Marek SKYBA",
        "player_b": "Štefan PČOLA",
        "date": "3. kolo",
        "player_a_team": "SKP \"B\"",
        "player_b_team": "MONTREAL"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Daniel GIESE",
        "player_b": "Martina KOLIBÁROVÁ",
        "date": "3. kolo",
        "player_a_team": "SOŠ Ž",
        "player_b_team": "MYSLAVA \"Ž\""
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Igor BAŠTI",
        "player_b": "Jarmila SOMOŠOVÁ",
        "date": "3. kolo",
        "player_a_team": "SOŠ Ž",
        "player_b_team": "MYSLAVA \"Ž\""
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Vilo POLÁK",
        "player_b": "Zuzana GAŽI",
        "date": "3. kolo",
        "player_a_team": "SOŠ Ž",
        "player_b_team": "MYSLAVA \"Ž\""
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Slavomír KEŠELÁK",
        "player_b": "Iveta SOLČANIOVÁ",
        "date": "3. kolo",
        "player_a_team": "SOŠ Ž",
        "player_b_team": "MYSLAVA \"Ž\""
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Jozef MOLNÁR",
        "player_b": "Izabela VARGOVÁ",
        "date": "3. kolo",
        "player_a_team": "SOŠ Ž",
        "player_b_team": "MYSLAVA \"Ž\""
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Igor BAŠTI",
        "player_b": "Zuzana GAŽI",
        "date": "3. kolo",
        "player_a_team": "SOŠ Ž",
        "player_b_team": "MYSLAVA \"Ž\""
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Vilo POLÁK",
        "player_b": "Iveta SOLČANIOVÁ",
        "date": "3. kolo",
        "player_a_team": "SOŠ Ž",
        "player_b_team": "MYSLAVA \"Ž\""
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Slavomír KEŠELÁK",
        "player_b": "Martina KOLIBÁROVÁ",
        "date": "3. kolo",
        "player_a_team": "SOŠ Ž",
        "player_b_team": "MYSLAVA \"Ž\""
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Daniel GIESE",
        "player_b": "Zuzana GAŽI",
        "date": "3. kolo",
        "player_a_team": "SOŠ Ž",
        "player_b_team": "MYSLAVA \"Ž\""
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Igor BAŠTI",
        "player_b": "Iveta SOLČANIOVÁ",
        "date": "3. kolo",
        "player_a_team": "SOŠ Ž",
        "player_b_team": "MYSLAVA \"Ž\""
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Jozef MOLNÁR",
        "player_b": "Martina KOLIBÁROVÁ",
        "date": "3. kolo",
        "player_a_team": "SOŠ Ž",
        "player_b_team": "MYSLAVA \"Ž\""
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Slavomír KEŠELÁK",
        "player_b": "Jarmila SOMOŠOVÁ",
        "date": "3. kolo",
        "player_a_team": "SOŠ Ž",
        "player_b_team": "MYSLAVA \"Ž\""
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Daniel GIESE",
        "player_b": "Iveta SOLČANIOVÁ",
        "date": "3. kolo",
        "player_a_team": "SOŠ Ž",
        "player_b_team": "MYSLAVA \"Ž\""
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Igor BAŠTI",
        "player_b": "Martina KOLIBÁROVÁ",
        "date": "3. kolo",
        "player_a_team": "SOŠ Ž",
        "player_b_team": "MYSLAVA \"Ž\""
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Vilo POLÁK",
        "player_b": "Izabela VARGOVÁ",
        "date": "3. kolo",
        "player_a_team": "SOŠ Ž",
        "player_b_team": "MYSLAVA \"Ž\""
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Jozef MOLNÁR",
        "player_b": "Zuzana GAŽI",
        "date": "3. kolo",
        "player_a_team": "SOŠ Ž",
        "player_b_team": "MYSLAVA \"Ž\""
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Milan SUCHÝ",
        "player_b": "Slav. FEČKE",
        "date": "3. kolo",
        "player_a_team": "COKERY",
        "player_b_team": "BERNARD Club"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Jaroslav WIENER",
        "player_b": "Radoslav POĽA",
        "date": "3. kolo",
        "player_a_team": "COKERY",
        "player_b_team": "BERNARD Club"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Peter SZCZECZINA",
        "player_b": "Roman ČIŽMÁR",
        "date": "3. kolo",
        "player_a_team": "COKERY",
        "player_b_team": "BERNARD Club"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Igor TKÁČ",
        "player_b": "Stanislav PČOLA",
        "date": "3. kolo",
        "player_a_team": "COKERY",
        "player_b_team": "BERNARD Club"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Anton STANICKÝ",
        "player_b": "Radoslav POĽA",
        "date": "3. kolo",
        "player_a_team": "COKERY",
        "player_b_team": "BERNARD Club"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Jaroslav WIENER",
        "player_b": "Roman ČIŽMÁR",
        "date": "3. kolo",
        "player_a_team": "COKERY",
        "player_b_team": "BERNARD Club"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Peter SZCZECZINA",
        "player_b": "Stanislav PČOLA",
        "date": "3. kolo",
        "player_a_team": "COKERY",
        "player_b_team": "BERNARD Club"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Igor TKÁČ",
        "player_b": "Slav. FEČKE",
        "date": "3. kolo",
        "player_a_team": "COKERY",
        "player_b_team": "BERNARD Club"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Milan SUCHÝ",
        "player_b": "Roman ČIŽMÁR",
        "date": "3. kolo",
        "player_a_team": "COKERY",
        "player_b_team": "BERNARD Club"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Jaroslav WIENER",
        "player_b": "Stanislav PČOLA",
        "date": "3. kolo",
        "player_a_team": "COKERY",
        "player_b_team": "BERNARD Club"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Anton STANICKÝ",
        "player_b": "Slav. FEČKE",
        "date": "3. kolo",
        "player_a_team": "COKERY",
        "player_b_team": "BERNARD Club"
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "Igor TKÁČ",
        "player_b": "Radoslav POĽA",
        "date": "3. kolo",
        "player_a_team": "COKERY",
        "player_b_team": "BERNARD Club"
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Milan SUCHÝ",
        "player_b": "Stanislav PČOLA",
        "date": "3. kolo",
        "player_a_team": "COKERY",
        "player_b_team": "BERNARD Club"
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "Jaroslav WIENER",
        "player_b": "Slav. FEČKE",
        "date": "3. kolo",
        "player_a_team": "COKERY",
        "player_b_team": "BERNARD Club"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Peter SZCZECZINA",
        "player_b": "Radoslav POĽA",
        "date": "3. kolo",
        "player_a_team": "COKERY",
        "player_b_team": "BERNARD Club"
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "Igor TKÁČ",
        "player_b": "Roman ČIŽMÁR",
        "date": "3. kolo",
        "player_a_team": "COKERY",
        "player_b_team": "BERNARD Club"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Milan KRASNAY",
        "player_b": "Ľubomír HOCHVART",
        "date": "3. kolo",
        "player_a_team": "KOMÉTA KE",
        "player_b_team": "REPREX"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Peter BARSA",
        "player_b": "Ján PETRŽALA",
        "date": "3. kolo",
        "player_a_team": "KOMÉTA KE",
        "player_b_team": "REPREX"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Peter MACH",
        "player_b": "Milan PAŽIČ",
        "date": "3. kolo",
        "player_a_team": "KOMÉTA KE",
        "player_b_team": "REPREX"
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "Juraj ANTOŠ",
        "player_b": "Miloslav KOCÚR",
        "date": "3. kolo",
        "player_a_team": "KOMÉTA KE",
        "player_b_team": "REPREX"
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "Andrej KARLIK",
        "player_b": "Ján PETRŽALA",
        "date": "3. kolo",
        "player_a_team": "KOMÉTA KE",
        "player_b_team": "REPREX"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Peter BARSA",
        "player_b": "Peter RUSNÁK",
        "date": "3. kolo",
        "player_a_team": "KOMÉTA KE",
        "player_b_team": "REPREX"
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "Peter ŠTEFANCO",
        "player_b": "Miloslav KOCÚR",
        "date": "3. kolo",
        "player_a_team": "KOMÉTA KE",
        "player_b_team": "REPREX"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Juraj ANTOŠ",
        "player_b": "Ľubomír HOCHVART",
        "date": "3. kolo",
        "player_a_team": "KOMÉTA KE",
        "player_b_team": "REPREX"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Juraj ANTOŠ",
        "player_b": "Milan PAŽIČ",
        "date": "3. kolo",
        "player_a_team": "KOMÉTA KE",
        "player_b_team": "REPREX"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Peter BARSA",
        "player_b": "Miloslav KOCÚR",
        "date": "3. kolo",
        "player_a_team": "KOMÉTA KE",
        "player_b_team": "REPREX"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Peter MACH",
        "player_b": "Peter RUSNÁK",
        "date": "3. kolo",
        "player_a_team": "KOMÉTA KE",
        "player_b_team": "REPREX"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Juraj ANTOŠ",
        "player_b": "Ján PETRŽALA",
        "date": "3. kolo",
        "player_a_team": "KOMÉTA KE",
        "player_b_team": "REPREX"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Juraj ANTOŠ",
        "player_b": "Peter RUSNÁK",
        "date": "3. kolo",
        "player_a_team": "KOMÉTA KE",
        "player_b_team": "REPREX"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Peter BARSA",
        "player_b": "Ľubomír HOCHVART",
        "date": "3. kolo",
        "player_a_team": "KOMÉTA KE",
        "player_b_team": "REPREX"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Peter ŠTEFANCO",
        "player_b": "Ján PETRŽALA",
        "date": "3. kolo",
        "player_a_team": "KOMÉTA KE",
        "player_b_team": "REPREX"
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Juraj ANTOŠ",
        "player_b": "Milan PAŽIČ",
        "date": "3. kolo",
        "player_a_team": "KOMÉTA KE",
        "player_b_team": "REPREX"
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Peter VYHONSKÝ",
        "player_b": "Tomáš BEKECS",
        "date": "3. kolo",
        "player_a_team": "BOMBERE",
        "player_b_team": "TTC KVP"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Ján ŘIHAK",
        "player_b": "Andrej MAKRANSKÝ ml.",
        "date": "3. kolo",
        "player_a_team": "BOMBERE",
        "player_b_team": "TTC KVP"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Slavomír KRÁLIK",
        "player_b": "Andrej MAKRANSKÝ",
        "date": "3. kolo",
        "player_a_team": "BOMBERE",
        "player_b_team": "TTC KVP"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Ján GUZY",
        "player_b": "Eduard KUDLA",
        "date": "3. kolo",
        "player_a_team": "BOMBERE",
        "player_b_team": "TTC KVP"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Peter VYHONSKÝ",
        "player_b": "Andrej MAKRANSKÝ ml.",
        "date": "3. kolo",
        "player_a_team": "BOMBERE",
        "player_b_team": "TTC KVP"
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "Ján ŘIHAK",
        "player_b": "Andrej MAKRANSKÝ",
        "date": "3. kolo",
        "player_a_team": "BOMBERE",
        "player_b_team": "TTC KVP"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Slavomír KRÁLIK",
        "player_b": "Eduard KUDLA",
        "date": "3. kolo",
        "player_a_team": "BOMBERE",
        "player_b_team": "TTC KVP"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Ján GUZY",
        "player_b": "Tomáš BEKECS",
        "date": "3. kolo",
        "player_a_team": "BOMBERE",
        "player_b_team": "TTC KVP"
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "Peter VYHONSKÝ",
        "player_b": "Andrej MAKRANSKÝ",
        "date": "3. kolo",
        "player_a_team": "BOMBERE",
        "player_b_team": "TTC KVP"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Ján ŘIHAK",
        "player_b": "Eduard KUDLA",
        "date": "3. kolo",
        "player_a_team": "BOMBERE",
        "player_b_team": "TTC KVP"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Slavomír KRÁLIK",
        "player_b": "Tomáš BEKECS",
        "date": "3. kolo",
        "player_a_team": "BOMBERE",
        "player_b_team": "TTC KVP"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Ján GUZY",
        "player_b": "Andrej MAKRANSKÝ ml.",
        "date": "3. kolo",
        "player_a_team": "BOMBERE",
        "player_b_team": "TTC KVP"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Peter VYHONSKÝ",
        "player_b": "Eduard KUDLA",
        "date": "3. kolo",
        "player_a_team": "BOMBERE",
        "player_b_team": "TTC KVP"
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "Ján ŘIHAK",
        "player_b": "Tomáš BEKECS",
        "date": "3. kolo",
        "player_a_team": "BOMBERE",
        "player_b_team": "TTC KVP"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Slavomír KRÁLIK",
        "player_b": "Andrej MAKRANSKÝ ml.",
        "date": "3. kolo",
        "player_a_team": "BOMBERE",
        "player_b_team": "TTC KVP"
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "Ján GUZY",
        "player_b": "Andrej MAKRANSKÝ",
        "date": "3. kolo",
        "player_a_team": "BOMBERE",
        "player_b_team": "TTC KVP"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Andrej FELBER",
        "player_b": "Julius PILLÁR",
        "date": "3. kolo",
        "player_a_team": "TT TEAM",
        "player_b_team": "EUROCAST"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Ľubomír BENDZÁK",
        "player_b": "P. ŠEBEK",
        "date": "3. kolo",
        "player_a_team": "TT TEAM",
        "player_b_team": "EUROCAST"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Juraj POLYAK",
        "player_b": "Jozef HUDÁK",
        "date": "3. kolo",
        "player_a_team": "TT TEAM",
        "player_b_team": "EUROCAST"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Peter RUŽIČKA",
        "player_b": "Patrík TIRPÁK",
        "date": "3. kolo",
        "player_a_team": "TT TEAM",
        "player_b_team": "EUROCAST"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Andrej FELBER",
        "player_b": "P. ŠEBEK",
        "date": "3. kolo",
        "player_a_team": "TT TEAM",
        "player_b_team": "EUROCAST"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Ľubomír BENDZÁK",
        "player_b": "Jozef ZAVACKÝ",
        "date": "3. kolo",
        "player_a_team": "TT TEAM",
        "player_b_team": "EUROCAST"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Juraj POLYAK",
        "player_b": "Patrík TIRPÁK",
        "date": "3. kolo",
        "player_a_team": "TT TEAM",
        "player_b_team": "EUROCAST"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Peter RUŽIČKA",
        "player_b": "Julius PILLÁR",
        "date": "3. kolo",
        "player_a_team": "TT TEAM",
        "player_b_team": "EUROCAST"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Andrej FELBER",
        "player_b": "Jozef HUDÁK",
        "date": "3. kolo",
        "player_a_team": "TT TEAM",
        "player_b_team": "EUROCAST"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Ľubomír BENDZÁK",
        "player_b": "Patrík TIRPÁK",
        "date": "3. kolo",
        "player_a_team": "TT TEAM",
        "player_b_team": "EUROCAST"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Juraj POLYAK",
        "player_b": "Julius PILLÁR",
        "date": "3. kolo",
        "player_a_team": "TT TEAM",
        "player_b_team": "EUROCAST"
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "Peter RUŽIČKA",
        "player_b": "P. ŠEBEK",
        "date": "3. kolo",
        "player_a_team": "TT TEAM",
        "player_b_team": "EUROCAST"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Andrej FELBER",
        "player_b": "Patrík TIRPÁK",
        "date": "3. kolo",
        "player_a_team": "TT TEAM",
        "player_b_team": "EUROCAST"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Ľubomír BENDZÁK",
        "player_b": "Julius PILLÁR",
        "date": "3. kolo",
        "player_a_team": "TT TEAM",
        "player_b_team": "EUROCAST"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Juraj POLYAK",
        "player_b": "P. ŠEBEK",
        "date": "3. kolo",
        "player_a_team": "TT TEAM",
        "player_b_team": "EUROCAST"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Peter RUŽIČKA",
        "player_b": "Jozef ZAVACKÝ",
        "date": "3. kolo",
        "player_a_team": "TT TEAM",
        "player_b_team": "EUROCAST"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Ľubomír VARTÁS",
        "player_b": "Marek KUNDRIK",
        "date": "3. kolo",
        "player_a_team": "METALKOV",
        "player_b_team": "ASTORIA FIT"
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "František CZINGELY",
        "player_b": "Andrej KAČKOŠ",
        "date": "3. kolo",
        "player_a_team": "METALKOV",
        "player_b_team": "ASTORIA FIT"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Csaba BECSE",
        "player_b": "Martin MUCHA",
        "date": "3. kolo",
        "player_a_team": "METALKOV",
        "player_b_team": "ASTORIA FIT"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Nándor BORTNYÁK",
        "player_b": "Julus WÉBER",
        "date": "3. kolo",
        "player_a_team": "METALKOV",
        "player_b_team": "ASTORIA FIT"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Ľubomír VARTÁS",
        "player_b": "Andrej KAČKOŠ",
        "date": "3. kolo",
        "player_a_team": "METALKOV",
        "player_b_team": "ASTORIA FIT"
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "František CZINGELY",
        "player_b": "Martin MUCHA",
        "date": "3. kolo",
        "player_a_team": "METALKOV",
        "player_b_team": "ASTORIA FIT"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Csaba BECSE",
        "player_b": "Julus WÉBER",
        "date": "3. kolo",
        "player_a_team": "METALKOV",
        "player_b_team": "ASTORIA FIT"
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Nándor BORTNYÁK",
        "player_b": "Marek KUNDRIK",
        "date": "3. kolo",
        "player_a_team": "METALKOV",
        "player_b_team": "ASTORIA FIT"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Ľubomír VARTÁS",
        "player_b": "Martin MUCHA",
        "date": "3. kolo",
        "player_a_team": "METALKOV",
        "player_b_team": "ASTORIA FIT"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "František CZINGELY",
        "player_b": "Julus WÉBER",
        "date": "3. kolo",
        "player_a_team": "METALKOV",
        "player_b_team": "ASTORIA FIT"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Csaba BECSE",
        "player_b": "Marek KUNDRIK",
        "date": "3. kolo",
        "player_a_team": "METALKOV",
        "player_b_team": "ASTORIA FIT"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Tamás BÓNI",
        "player_b": "Matúš HRČKA",
        "date": "3. kolo",
        "player_a_team": "METALKOV",
        "player_b_team": "ASTORIA FIT"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Ľubomír VARTÁS",
        "player_b": "Matúš HRČKA",
        "date": "3. kolo",
        "player_a_team": "METALKOV",
        "player_b_team": "ASTORIA FIT"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "František CZINGELY",
        "player_b": "Marek KUNDRIK",
        "date": "3. kolo",
        "player_a_team": "METALKOV",
        "player_b_team": "ASTORIA FIT"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Csaba BECSE",
        "player_b": "Andrej KAČKOŠ",
        "date": "3. kolo",
        "player_a_team": "METALKOV",
        "player_b_team": "ASTORIA FIT"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Tamás BÓNI",
        "player_b": "Martin MUCHA",
        "date": "3. kolo",
        "player_a_team": "METALKOV",
        "player_b_team": "ASTORIA FIT"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "WO",
        "player_b": "WO",
        "date": "4. kolo",
        "player_a_team": "TTC KVP",
        "player_b_team": "KOMÉTA KE",
        "doubles": true
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "WO",
        "player_b": "WO",
        "date": "4. kolo",
        "player_a_team": "TTC KVP",
        "player_b_team": "KOMÉTA KE",
        "doubles": true
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Martin MUCHA/Matúš HRČKA",
        "player_b": "Milan MICHLOVIČ/Štefan PČOLA",
        "date": "4. kolo",
        "player_a_team": "ASTORIA FIT",
        "player_b_team": "MONTREAL",
        "doubles": true
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Marek KUNDRIK/Julus WÉBER",
        "player_b": "Milan GAJTKO/Luboš MRÁZ",
        "date": "4. kolo",
        "player_a_team": "ASTORIA FIT",
        "player_b_team": "MONTREAL",
        "doubles": true
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Martin SOĽÁR/Štefan LISSÝ",
        "player_b": "Slavomír KEŠELÁK/Jozef MOLNÁR",
        "date": "4. kolo",
        "player_a_team": "SKP \"A\"",
        "player_b_team": "SOŠ Ž",
        "doubles": true
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Matej KOVAČIK/Peter JAKUBEC",
        "player_b": "Peter POLÁK/Igor BAŠTI",
        "date": "4. kolo",
        "player_a_team": "SKP \"A\"",
        "player_b_team": "SOŠ Ž",
        "doubles": true
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Julius PILLÁR/Patrík TIRPÁK",
        "player_b": "David LEŠUNDÁK/Martin ĎURIŠIN",
        "date": "4. kolo",
        "player_a_team": "EUROCAST",
        "player_b_team": "SKP \"B\"",
        "doubles": true
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "Peter ŠEBEK st./Jozef HUDÁK",
        "player_b": "Marek SKYBA/Michal NINITZ",
        "date": "4. kolo",
        "player_a_team": "EUROCAST",
        "player_b_team": "SKP \"B\"",
        "doubles": true
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Martina KOLIBÁROVÁ/Pavol CINKANIČ",
        "player_b": "Ján GUZY/Slavomír KRÁLIK",
        "date": "4. kolo",
        "player_a_team": "MYSLAVA \"Ž\"",
        "player_b_team": "BOMBERE",
        "doubles": true
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Zuzana GAŽI/Iveta SOLČANIOVÁ",
        "player_b": "Matuš MATEJ/Ján ŘIHAK",
        "date": "4. kolo",
        "player_a_team": "MYSLAVA \"Ž\"",
        "player_b_team": "BOMBERE",
        "doubles": true
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "Roman ČIŽMÁR/Tibor FIĽAK",
        "player_b": "Andrej FELBER/Ľubomír BENDZÁK",
        "date": "4. kolo",
        "player_a_team": "BERNARD Club",
        "player_b_team": "TT TEAM",
        "doubles": true
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Stanislav PČOLA/Radoslav POĽA",
        "player_b": "Marek SIMKO/Peter RUŽIČKA",
        "date": "4. kolo",
        "player_a_team": "BERNARD Club",
        "player_b_team": "TT TEAM",
        "doubles": true
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Ľubomír HOCHVART/Milan PAŽIČ",
        "player_b": "Peter SZCZECZINA/Anton STANICKÝ",
        "date": "4. kolo",
        "player_a_team": "REPREX",
        "player_b_team": "COKERY",
        "doubles": true
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Ján PETRŽALA/Miloslav KOCÚR",
        "player_b": "Igor TKÁČ/Miro. HARČÁRIK",
        "date": "4. kolo",
        "player_a_team": "REPREX",
        "player_b_team": "COKERY",
        "doubles": true
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "František CZINGELY/Csaba BECSE",
        "player_b": "Marián HOVAN/Vladimír VARGOVČÁK",
        "date": "4. kolo",
        "player_a_team": "METALKOV",
        "player_b_team": "MYSLAVA",
        "doubles": true
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Juraj BUCHNER/Jozef MOHŇANSKÝ",
        "player_b": "Ján FOTTA/Jozef FOTTA",
        "date": "4. kolo",
        "player_a_team": "METALKOV",
        "player_b_team": "MYSLAVA",
        "doubles": true
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Viktor ŠIDLÍK",
        "player_b": "Milan MICHLOVIČ",
        "date": "4. kolo",
        "player_a_team": "ASTORIA FIT",
        "player_b_team": "MONTREAL"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Martin MUCHA",
        "player_b": "M. ZÁRIK",
        "date": "4. kolo",
        "player_a_team": "ASTORIA FIT",
        "player_b_team": "MONTREAL"
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "Matúš HRČKA",
        "player_b": "Štefan PČOLA",
        "date": "4. kolo",
        "player_a_team": "ASTORIA FIT",
        "player_b_team": "MONTREAL"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Julus WÉBER",
        "player_b": "Milan GAJTKO",
        "date": "4. kolo",
        "player_a_team": "ASTORIA FIT",
        "player_b_team": "MONTREAL"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Andrej KAČKOŠ",
        "player_b": "M. ZÁRIK",
        "date": "4. kolo",
        "player_a_team": "ASTORIA FIT",
        "player_b_team": "MONTREAL"
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "Martin MUCHA",
        "player_b": "Luboš MRÁZ",
        "date": "4. kolo",
        "player_a_team": "ASTORIA FIT",
        "player_b_team": "MONTREAL"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Matúš HRČKA",
        "player_b": "Milan GAJTKO",
        "date": "4. kolo",
        "player_a_team": "ASTORIA FIT",
        "player_b_team": "MONTREAL"
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "Julus WÉBER",
        "player_b": "Milan MICHLOVIČ",
        "date": "4. kolo",
        "player_a_team": "ASTORIA FIT",
        "player_b_team": "MONTREAL"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Viktor ŠIDLÍK",
        "player_b": "Štefan PČOLA",
        "date": "4. kolo",
        "player_a_team": "ASTORIA FIT",
        "player_b_team": "MONTREAL"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Martin MUCHA",
        "player_b": "Milan GAJTKO",
        "date": "4. kolo",
        "player_a_team": "ASTORIA FIT",
        "player_b_team": "MONTREAL"
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Matúš HRČKA",
        "player_b": "Luboš MRÁZ",
        "date": "4. kolo",
        "player_a_team": "ASTORIA FIT",
        "player_b_team": "MONTREAL"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Marek KUNDRIK",
        "player_b": "M. ZÁRIK",
        "date": "4. kolo",
        "player_a_team": "ASTORIA FIT",
        "player_b_team": "MONTREAL"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Andrej KAČKOŠ",
        "player_b": "Luboš MRÁZ",
        "date": "4. kolo",
        "player_a_team": "ASTORIA FIT",
        "player_b_team": "MONTREAL"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Martin MUCHA",
        "player_b": "Milan MICHLOVIČ",
        "date": "4. kolo",
        "player_a_team": "ASTORIA FIT",
        "player_b_team": "MONTREAL"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Matúš HRČKA",
        "player_b": "M. ZÁRIK",
        "date": "4. kolo",
        "player_a_team": "ASTORIA FIT",
        "player_b_team": "MONTREAL"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Marek KUNDRIK",
        "player_b": "Štefan PČOLA",
        "date": "4. kolo",
        "player_a_team": "ASTORIA FIT",
        "player_b_team": "MONTREAL"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Martin SOĽÁR",
        "player_b": "Igor BAŠTI",
        "date": "4. kolo",
        "player_a_team": "SKP \"A\"",
        "player_b_team": "SOŠ Ž"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Peter JAKUBEC",
        "player_b": "Peter POLÁK",
        "date": "4. kolo",
        "player_a_team": "SKP \"A\"",
        "player_b_team": "SOŠ Ž"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Matej KOVAČIK",
        "player_b": "Slavomír KEŠELÁK",
        "date": "4. kolo",
        "player_a_team": "SKP \"A\"",
        "player_b_team": "SOŠ Ž"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Štefan LISSÝ",
        "player_b": "Jozef MOLNÁR",
        "date": "4. kolo",
        "player_a_team": "SKP \"A\"",
        "player_b_team": "SOŠ Ž"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Martin SOĽÁR",
        "player_b": "Peter POLÁK",
        "date": "4. kolo",
        "player_a_team": "SKP \"A\"",
        "player_b_team": "SOŠ Ž"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Peter JAKUBEC",
        "player_b": "Slavomír KEŠELÁK",
        "date": "4. kolo",
        "player_a_team": "SKP \"A\"",
        "player_b_team": "SOŠ Ž"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Matej KOVAČIK",
        "player_b": "Jozef MOLNÁR",
        "date": "4. kolo",
        "player_a_team": "SKP \"A\"",
        "player_b_team": "SOŠ Ž"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Štefan LISSÝ",
        "player_b": "Igor BAŠTI",
        "date": "4. kolo",
        "player_a_team": "SKP \"A\"",
        "player_b_team": "SOŠ Ž"
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Martin SOĽÁR",
        "player_b": "Slavomír KEŠELÁK",
        "date": "4. kolo",
        "player_a_team": "SKP \"A\"",
        "player_b_team": "SOŠ Ž"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Peter JAKUBEC",
        "player_b": "Jozef MOLNÁR",
        "date": "4. kolo",
        "player_a_team": "SKP \"A\"",
        "player_b_team": "SOŠ Ž"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Matej KOVAČIK",
        "player_b": "Igor BAŠTI",
        "date": "4. kolo",
        "player_a_team": "SKP \"A\"",
        "player_b_team": "SOŠ Ž"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Štefan LISSÝ",
        "player_b": "Peter POLÁK",
        "date": "4. kolo",
        "player_a_team": "SKP \"A\"",
        "player_b_team": "SOŠ Ž"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Martin SOĽÁR",
        "player_b": "Jozef MOLNÁR",
        "date": "4. kolo",
        "player_a_team": "SKP \"A\"",
        "player_b_team": "SOŠ Ž"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Peter JAKUBEC",
        "player_b": "Igor BAŠTI",
        "date": "4. kolo",
        "player_a_team": "SKP \"A\"",
        "player_b_team": "SOŠ Ž"
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Matej KOVAČIK",
        "player_b": "Peter POLÁK",
        "date": "4. kolo",
        "player_a_team": "SKP \"A\"",
        "player_b_team": "SOŠ Ž"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Štefan LISSÝ",
        "player_b": "Slavomír KEŠELÁK",
        "date": "4. kolo",
        "player_a_team": "SKP \"A\"",
        "player_b_team": "SOŠ Ž"
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "Julius PILLÁR",
        "player_b": "David LEŠUNDÁK",
        "date": "4. kolo",
        "player_a_team": "EUROCAST",
        "player_b_team": "SKP \"B\""
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Patrík TIRPÁK",
        "player_b": "Martin ĎURIŠIN",
        "date": "4. kolo",
        "player_a_team": "EUROCAST",
        "player_b_team": "SKP \"B\""
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "P. ŠEBEK",
        "player_b": "Michal NINITZ",
        "date": "4. kolo",
        "player_a_team": "EUROCAST",
        "player_b_team": "SKP \"B\""
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Jozef HUDÁK",
        "player_b": "Marek SKYBA",
        "date": "4. kolo",
        "player_a_team": "EUROCAST",
        "player_b_team": "SKP \"B\""
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Julius PILLÁR",
        "player_b": "Martin ĎURIŠIN",
        "date": "4. kolo",
        "player_a_team": "EUROCAST",
        "player_b_team": "SKP \"B\""
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Patrík TIRPÁK",
        "player_b": "Michal NINITZ",
        "date": "4. kolo",
        "player_a_team": "EUROCAST",
        "player_b_team": "SKP \"B\""
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "P. ŠEBEK",
        "player_b": "Marek SKYBA",
        "date": "4. kolo",
        "player_a_team": "EUROCAST",
        "player_b_team": "SKP \"B\""
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Jozef ZAVACKÝ",
        "player_b": "David LEŠUNDÁK",
        "date": "4. kolo",
        "player_a_team": "EUROCAST",
        "player_b_team": "SKP \"B\""
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "Julius PILLÁR",
        "player_b": "Michal NINITZ",
        "date": "4. kolo",
        "player_a_team": "EUROCAST",
        "player_b_team": "SKP \"B\""
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Patrík TIRPÁK",
        "player_b": "Marek SKYBA",
        "date": "4. kolo",
        "player_a_team": "EUROCAST",
        "player_b_team": "SKP \"B\""
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "P. ŠEBEK",
        "player_b": "David LEŠUNDÁK",
        "date": "4. kolo",
        "player_a_team": "EUROCAST",
        "player_b_team": "SKP \"B\""
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Jozef HUDÁK",
        "player_b": "Martin ĎURIŠIN",
        "date": "4. kolo",
        "player_a_team": "EUROCAST",
        "player_b_team": "SKP \"B\""
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "Julius PILLÁR",
        "player_b": "Marek SKYBA",
        "date": "4. kolo",
        "player_a_team": "EUROCAST",
        "player_b_team": "SKP \"B\""
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Patrík TIRPÁK",
        "player_b": "David LEŠUNDÁK",
        "date": "4. kolo",
        "player_a_team": "EUROCAST",
        "player_b_team": "SKP \"B\""
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "P. ŠEBEK",
        "player_b": "Martin ĎURIŠIN",
        "date": "4. kolo",
        "player_a_team": "EUROCAST",
        "player_b_team": "SKP \"B\""
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Jozef ZAVACKÝ",
        "player_b": "Michal NINITZ",
        "date": "4. kolo",
        "player_a_team": "EUROCAST",
        "player_b_team": "SKP \"B\""
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Martina KOLIBÁROVÁ",
        "player_b": "Slavomír KRÁLIK",
        "date": "4. kolo",
        "player_a_team": "MYSLAVA \"Ž\"",
        "player_b_team": "BOMBERE"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Pavol CINKANIČ",
        "player_b": "Matuš MATEJ",
        "date": "4. kolo",
        "player_a_team": "MYSLAVA \"Ž\"",
        "player_b_team": "BOMBERE"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Zuzana GAŽI",
        "player_b": "Ján ŘIHAK",
        "date": "4. kolo",
        "player_a_team": "MYSLAVA \"Ž\"",
        "player_b_team": "BOMBERE"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Iveta SOLČANIOVÁ",
        "player_b": "Ján GUZY",
        "date": "4. kolo",
        "player_a_team": "MYSLAVA \"Ž\"",
        "player_b_team": "BOMBERE"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Martina KOLIBÁROVÁ",
        "player_b": "Matuš MATEJ",
        "date": "4. kolo",
        "player_a_team": "MYSLAVA \"Ž\"",
        "player_b_team": "BOMBERE"
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "Pavol CINKANIČ",
        "player_b": "Ján ŘIHAK",
        "date": "4. kolo",
        "player_a_team": "MYSLAVA \"Ž\"",
        "player_b_team": "BOMBERE"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Zuzana GAŽI",
        "player_b": "Ján GUZY",
        "date": "4. kolo",
        "player_a_team": "MYSLAVA \"Ž\"",
        "player_b_team": "BOMBERE"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Iveta SOLČANIOVÁ",
        "player_b": "Slavomír KRÁLIK",
        "date": "4. kolo",
        "player_a_team": "MYSLAVA \"Ž\"",
        "player_b_team": "BOMBERE"
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Martina KOLIBÁROVÁ",
        "player_b": "Ján ŘIHAK",
        "date": "4. kolo",
        "player_a_team": "MYSLAVA \"Ž\"",
        "player_b_team": "BOMBERE"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Pavol CINKANIČ",
        "player_b": "Ján GUZY",
        "date": "4. kolo",
        "player_a_team": "MYSLAVA \"Ž\"",
        "player_b_team": "BOMBERE"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Zuzana GAŽI",
        "player_b": "Slavomír KRÁLIK",
        "date": "4. kolo",
        "player_a_team": "MYSLAVA \"Ž\"",
        "player_b_team": "BOMBERE"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Iveta SOLČANIOVÁ",
        "player_b": "Matuš MATEJ",
        "date": "4. kolo",
        "player_a_team": "MYSLAVA \"Ž\"",
        "player_b_team": "BOMBERE"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Martina KOLIBÁROVÁ",
        "player_b": "Ján GUZY",
        "date": "4. kolo",
        "player_a_team": "MYSLAVA \"Ž\"",
        "player_b_team": "BOMBERE"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Pavol CINKANIČ",
        "player_b": "Slavomír KRÁLIK",
        "date": "4. kolo",
        "player_a_team": "MYSLAVA \"Ž\"",
        "player_b_team": "BOMBERE"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Zuzana GAŽI",
        "player_b": "Matuš MATEJ",
        "date": "4. kolo",
        "player_a_team": "MYSLAVA \"Ž\"",
        "player_b_team": "BOMBERE"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Iveta SOLČANIOVÁ",
        "player_b": "Ján ŘIHAK",
        "date": "4. kolo",
        "player_a_team": "MYSLAVA \"Ž\"",
        "player_b_team": "BOMBERE"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Stanislav PČOLA",
        "player_b": "Andrej FELBER",
        "date": "4. kolo",
        "player_a_team": "BERNARD Club",
        "player_b_team": "TT TEAM"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Tibor FIĽAK",
        "player_b": "Marek SIMKO",
        "date": "4. kolo",
        "player_a_team": "BERNARD Club",
        "player_b_team": "TT TEAM"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Roman ČIŽMÁR",
        "player_b": "Juraj POLYAK",
        "date": "4. kolo",
        "player_a_team": "BERNARD Club",
        "player_b_team": "TT TEAM"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Radoslav POĽA",
        "player_b": "Peter RUŽIČKA",
        "date": "4. kolo",
        "player_a_team": "BERNARD Club",
        "player_b_team": "TT TEAM"
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Stanislav PČOLA",
        "player_b": "Marek SIMKO",
        "date": "4. kolo",
        "player_a_team": "BERNARD Club",
        "player_b_team": "TT TEAM"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Tibor FIĽAK",
        "player_b": "Juraj POLYAK",
        "date": "4. kolo",
        "player_a_team": "BERNARD Club",
        "player_b_team": "TT TEAM"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Roman ČIŽMÁR",
        "player_b": "Ľubomír BENDZÁK",
        "date": "4. kolo",
        "player_a_team": "BERNARD Club",
        "player_b_team": "TT TEAM"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Radoslav POĽA",
        "player_b": "Andrej FELBER",
        "date": "4. kolo",
        "player_a_team": "BERNARD Club",
        "player_b_team": "TT TEAM"
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "Stanislav PČOLA",
        "player_b": "Juraj POLYAK",
        "date": "4. kolo",
        "player_a_team": "BERNARD Club",
        "player_b_team": "TT TEAM"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Tibor FIĽAK",
        "player_b": "Ľubomír BENDZÁK",
        "date": "4. kolo",
        "player_a_team": "BERNARD Club",
        "player_b_team": "TT TEAM"
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Roman ČIŽMÁR",
        "player_b": "Andrej FELBER",
        "date": "4. kolo",
        "player_a_team": "BERNARD Club",
        "player_b_team": "TT TEAM"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Radoslav POĽA",
        "player_b": "Marek SIMKO",
        "date": "4. kolo",
        "player_a_team": "BERNARD Club",
        "player_b_team": "TT TEAM"
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Stanislav PČOLA",
        "player_b": "Peter RUŽIČKA",
        "date": "4. kolo",
        "player_a_team": "BERNARD Club",
        "player_b_team": "TT TEAM"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Tibor FIĽAK",
        "player_b": "Andrej FELBER",
        "date": "4. kolo",
        "player_a_team": "BERNARD Club",
        "player_b_team": "TT TEAM"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Roman ČIŽMÁR",
        "player_b": "Marek SIMKO",
        "date": "4. kolo",
        "player_a_team": "BERNARD Club",
        "player_b_team": "TT TEAM"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Radoslav POĽA",
        "player_b": "Juraj POLYAK",
        "date": "4. kolo",
        "player_a_team": "BERNARD Club",
        "player_b_team": "TT TEAM"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Ľubomír HOCHVART",
        "player_b": "Igor TKÁČ",
        "date": "4. kolo",
        "player_a_team": "REPREX",
        "player_b_team": "COKERY"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Miloslav KOCÚR",
        "player_b": "Peter SZCZECZINA",
        "date": "4. kolo",
        "player_a_team": "REPREX",
        "player_b_team": "COKERY"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Peter RUSNÁK",
        "player_b": "Miro. HARČÁRIK",
        "date": "4. kolo",
        "player_a_team": "REPREX",
        "player_b_team": "COKERY"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Milan PAŽIČ",
        "player_b": "Anton STANICKÝ",
        "date": "4. kolo",
        "player_a_team": "REPREX",
        "player_b_team": "COKERY"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Ján PETRŽALA",
        "player_b": "Peter SZCZECZINA",
        "date": "4. kolo",
        "player_a_team": "REPREX",
        "player_b_team": "COKERY"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Miloslav KOCÚR",
        "player_b": "Miro. HARČÁRIK",
        "date": "4. kolo",
        "player_a_team": "REPREX",
        "player_b_team": "COKERY"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Peter RUSNÁK",
        "player_b": "Anton STANICKÝ",
        "date": "4. kolo",
        "player_a_team": "REPREX",
        "player_b_team": "COKERY"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Milan PAŽIČ",
        "player_b": "Igor TKÁČ",
        "date": "4. kolo",
        "player_a_team": "REPREX",
        "player_b_team": "COKERY"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Ľubomír HOCHVART",
        "player_b": "Peter SZCZECZINA",
        "date": "4. kolo",
        "player_a_team": "REPREX",
        "player_b_team": "COKERY"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Miloslav KOCÚR",
        "player_b": "Anton STANICKÝ",
        "date": "4. kolo",
        "player_a_team": "REPREX",
        "player_b_team": "COKERY"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Ján PETRŽALA",
        "player_b": "Igor TKÁČ",
        "date": "4. kolo",
        "player_a_team": "REPREX",
        "player_b_team": "COKERY"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Milan PAŽIČ",
        "player_b": "Peter SZCZECZINA",
        "date": "4. kolo",
        "player_a_team": "REPREX",
        "player_b_team": "COKERY"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Štefan VENDEL",
        "player_b": "Anton STANICKÝ",
        "date": "4. kolo",
        "player_a_team": "REPREX",
        "player_b_team": "COKERY"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Miloslav KOCÚR",
        "player_b": "Igor TKÁČ",
        "date": "4. kolo",
        "player_a_team": "REPREX",
        "player_b_team": "COKERY"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Peter RUSNÁK",
        "player_b": "Peter SZCZECZINA",
        "date": "4. kolo",
        "player_a_team": "REPREX",
        "player_b_team": "COKERY"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Ján PETRŽALA",
        "player_b": "Miro. HARČÁRIK",
        "date": "4. kolo",
        "player_a_team": "REPREX",
        "player_b_team": "COKERY"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "František CZINGELY",
        "player_b": "Ján FOTTA",
        "date": "4. kolo",
        "player_a_team": "METALKOV",
        "player_b_team": "MYSLAVA"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Juraj BUCHNER",
        "player_b": "Vladimír VARGOVČÁK",
        "date": "4. kolo",
        "player_a_team": "METALKOV",
        "player_b_team": "MYSLAVA"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Jozef MOHŇANSKÝ",
        "player_b": "Marián HOVAN",
        "date": "4. kolo",
        "player_a_team": "METALKOV",
        "player_b_team": "MYSLAVA"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Csaba BECSE",
        "player_b": "Jozef FOTTA",
        "date": "4. kolo",
        "player_a_team": "METALKOV",
        "player_b_team": "MYSLAVA"
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "František CZINGELY",
        "player_b": "Vladimír VARGOVČÁK",
        "date": "4. kolo",
        "player_a_team": "METALKOV",
        "player_b_team": "MYSLAVA"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Juraj BUCHNER",
        "player_b": "Marián HOVAN",
        "date": "4. kolo",
        "player_a_team": "METALKOV",
        "player_b_team": "MYSLAVA"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Vladimír LÁSLOFI",
        "player_b": "Jozef FOTTA",
        "date": "4. kolo",
        "player_a_team": "METALKOV",
        "player_b_team": "MYSLAVA"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Csaba BECSE",
        "player_b": "Ján FOTTA",
        "date": "4. kolo",
        "player_a_team": "METALKOV",
        "player_b_team": "MYSLAVA"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "František CZINGELY",
        "player_b": "Marián HOVAN",
        "date": "4. kolo",
        "player_a_team": "METALKOV",
        "player_b_team": "MYSLAVA"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Juraj BUCHNER",
        "player_b": "Jozef FOTTA",
        "date": "4. kolo",
        "player_a_team": "METALKOV",
        "player_b_team": "MYSLAVA"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Jozef MOHŇANSKÝ",
        "player_b": "Ján FOTTA",
        "date": "4. kolo",
        "player_a_team": "METALKOV",
        "player_b_team": "MYSLAVA"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Vladimír LÁSLOFI",
        "player_b": "Vladimír VARGOVČÁK",
        "date": "4. kolo",
        "player_a_team": "METALKOV",
        "player_b_team": "MYSLAVA"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "František CZINGELY",
        "player_b": "Jozef FOTTA",
        "date": "4. kolo",
        "player_a_team": "METALKOV",
        "player_b_team": "MYSLAVA"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Juraj BUCHNER",
        "player_b": "Ján FOTTA",
        "date": "4. kolo",
        "player_a_team": "METALKOV",
        "player_b_team": "MYSLAVA"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Jozef MOHŇANSKÝ",
        "player_b": "Vladimír VARGOVČÁK",
        "date": "4. kolo",
        "player_a_team": "METALKOV",
        "player_b_team": "MYSLAVA"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Vladimír LÁSLOFI",
        "player_b": "Marián HOVAN",
        "date": "4. kolo",
        "player_a_team": "METALKOV",
        "player_b_team": "MYSLAVA"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "WO",
        "player_b": "WO",
        "date": "4. kolo",
        "player_a_team": "TTC KVP",
        "player_b_team": "KOMÉTA KE"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "WO",
        "player_b": "WO",
        "date": "4. kolo",
        "player_a_team": "TTC KVP",
        "player_b_team": "KOMÉTA KE"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "WO",
        "player_b": "WO",
        "date": "4. kolo",
        "player_a_team": "TTC KVP",
        "player_b_team": "KOMÉTA KE"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "WO",
        "player_b": "WO",
        "date": "4. kolo",
        "player_a_team": "TTC KVP",
        "player_b_team": "KOMÉTA KE"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "WO",
        "player_b": "WO",
        "date": "4. kolo",
        "player_a_team": "TTC KVP",
        "player_b_team": "KOMÉTA KE"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "WO",
        "player_b": "WO",
        "date": "4. kolo",
        "player_a_team": "TTC KVP",
        "player_b_team": "KOMÉTA KE"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "WO",
        "player_b": "WO",
        "date": "4. kolo",
        "player_a_team": "TTC KVP",
        "player_b_team": "KOMÉTA KE"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "WO",
        "player_b": "WO",
        "date": "4. kolo",
        "player_a_team": "TTC KVP",
        "player_b_team": "KOMÉTA KE"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "WO",
        "player_b": "WO",
        "date": "4. kolo",
        "player_a_team": "TTC KVP",
        "player_b_team": "KOMÉTA KE"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "WO",
        "player_b": "WO",
        "date": "4. kolo",
        "player_a_team": "TTC KVP",
        "player_b_team": "KOMÉTA KE"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "WO",
        "player_b": "WO",
        "date": "4. kolo",
        "player_a_team": "TTC KVP",
        "player_b_team": "KOMÉTA KE"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "WO",
        "player_b": "WO",
        "date": "4. kolo",
        "player_a_team": "TTC KVP",
        "player_b_team": "KOMÉTA KE"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "WO",
        "player_b": "WO",
        "date": "4. kolo",
        "player_a_team": "TTC KVP",
        "player_b_team": "KOMÉTA KE"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "WO",
        "player_b": "WO",
        "date": "4. kolo",
        "player_a_team": "TTC KVP",
        "player_b_team": "KOMÉTA KE"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "WO",
        "player_b": "WO",
        "date": "4. kolo",
        "player_a_team": "TTC KVP",
        "player_b_team": "KOMÉTA KE"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "WO",
        "player_b": "WO",
        "date": "4. kolo",
        "player_a_team": "TTC KVP",
        "player_b_team": "KOMÉTA KE"
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Peter POLÁK/Miro. HANIČÁK",
        "player_b": "Csaba BECSE/Tamás BÓNI",
        "date": "5. kolo",
        "player_a_team": "SOŠ Ž",
        "player_b_team": "METALKOV",
        "doubles": true
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Jozef MOLNÁR/Igor BAŠTI",
        "player_b": "Ľubomír VARTÁS/František CZINGELY",
        "date": "5. kolo",
        "player_a_team": "SOŠ Ž",
        "player_b_team": "METALKOV",
        "doubles": true
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Martin ĎURIŠIN/David LEŠUNDÁK",
        "player_b": "Slav. FEČKE/Roman ČIŽMÁR",
        "date": "5. kolo",
        "player_a_team": "SKP \"B\"",
        "player_b_team": "BERNARD Club",
        "doubles": true
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Peter GABOŠ/Michal NINITZ",
        "player_b": "Stanislav PČOLA/Radoslav POĽA",
        "date": "5. kolo",
        "player_a_team": "SKP \"B\"",
        "player_b_team": "BERNARD Club",
        "doubles": true
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Milan SUCHÝ/Peter SZCZECZINA",
        "player_b": "Eduard KUDLA/Andrej MAKRANSKÝ ml.",
        "date": "5. kolo",
        "player_a_team": "COKERY",
        "player_b_team": "TTC KVP",
        "doubles": true
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "Miro. HARČÁRIK/Igor TKÁČ",
        "player_b": "Andrej MAKRANSKÝ/Karol GERGELY",
        "date": "5. kolo",
        "player_a_team": "COKERY",
        "player_b_team": "TTC KVP",
        "doubles": true
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Peter BARSA/Juraj ANTOŠ",
        "player_b": "Jarmila SOMOŠOVÁ/Zuzana GAŽI",
        "date": "5. kolo",
        "player_a_team": "KOMÉTA KE",
        "player_b_team": "MYSLAVA \"Ž\"",
        "doubles": true
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Andrej KARLIK/Peter ŠTEFANCO",
        "player_b": "Martina KOLIBÁROVÁ/Izabela VARGOVÁ",
        "date": "5. kolo",
        "player_a_team": "KOMÉTA KE",
        "player_b_team": "MYSLAVA \"Ž\"",
        "doubles": true
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Marek PATAKY/Ján GUZY",
        "player_b": "Peter JAKUBEC/Martin SOĽÁR",
        "date": "5. kolo",
        "player_a_team": "BOMBERE",
        "player_b_team": "SKP \"A\"",
        "doubles": true
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Peter VYHONSKÝ/Ján ŘIHAK",
        "player_b": "Miroslav KOSCELANSKÝ/Ľubomír FRANČÁK",
        "date": "5. kolo",
        "player_a_team": "BOMBERE",
        "player_b_team": "SKP \"A\"",
        "doubles": true
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Andrej FELBER/Juraj POLYAK",
        "player_b": "Ľubomír HOCHVART/Miloslav KOCÚR",
        "date": "5. kolo",
        "player_a_team": "TT TEAM",
        "player_b_team": "REPREX",
        "doubles": true
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Ján SIMKO/Peter RUŽIČKA",
        "player_b": "Peter RUSNÁK/Daniel VAŇO",
        "date": "5. kolo",
        "player_a_team": "TT TEAM",
        "player_b_team": "REPREX",
        "doubles": true
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Milan GAJTKO/Luboš MRÁZ",
        "player_b": "Julius PILLÁR/Patrík TIRPÁK",
        "date": "5. kolo",
        "player_a_team": "MONTREAL",
        "player_b_team": "EUROCAST",
        "doubles": true
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Štefan PČOLA/Milan MICHLOVIČ",
        "player_b": "P. ŠEBEK/Jozef ZAVACKÝ",
        "date": "5. kolo",
        "player_a_team": "MONTREAL",
        "player_b_team": "EUROCAST",
        "doubles": true
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Milan ŠOLC/Marián HOVAN",
        "player_b": "Julus WÉBER/Andrej KAČKOŠ",
        "date": "5. kolo",
        "player_a_team": "MYSLAVA",
        "player_b_team": "ASTORIA FIT",
        "doubles": true
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Ján FOTTA/Jozef FOTTA",
        "player_b": "Martin MUCHA/Matúš HRČKA",
        "date": "5. kolo",
        "player_a_team": "MYSLAVA",
        "player_b_team": "ASTORIA FIT",
        "doubles": true
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "Miro. HANIČÁK",
        "player_b": "Ľubomír VARTÁS",
        "date": "5. kolo",
        "player_a_team": "SOŠ Ž",
        "player_b_team": "METALKOV"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Igor BAŠTI",
        "player_b": "František CZINGELY",
        "date": "5. kolo",
        "player_a_team": "SOŠ Ž",
        "player_b_team": "METALKOV"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Slavomír KEŠELÁK",
        "player_b": "Nándor BORTNYÁK",
        "date": "5. kolo",
        "player_a_team": "SOŠ Ž",
        "player_b_team": "METALKOV"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Peter POLÁK",
        "player_b": "Csaba BECSE",
        "date": "5. kolo",
        "player_a_team": "SOŠ Ž",
        "player_b_team": "METALKOV"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Jozef MOLNÁR",
        "player_b": "František CZINGELY",
        "date": "5. kolo",
        "player_a_team": "SOŠ Ž",
        "player_b_team": "METALKOV"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Igor BAŠTI",
        "player_b": "Nándor BORTNYÁK",
        "date": "5. kolo",
        "player_a_team": "SOŠ Ž",
        "player_b_team": "METALKOV"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Slavomír KEŠELÁK",
        "player_b": "Csaba BECSE",
        "date": "5. kolo",
        "player_a_team": "SOŠ Ž",
        "player_b_team": "METALKOV"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Peter POLÁK",
        "player_b": "Ľubomír VARTÁS",
        "date": "5. kolo",
        "player_a_team": "SOŠ Ž",
        "player_b_team": "METALKOV"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Miro. HANIČÁK",
        "player_b": "Nándor BORTNYÁK",
        "date": "5. kolo",
        "player_a_team": "SOŠ Ž",
        "player_b_team": "METALKOV"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Igor BAŠTI",
        "player_b": "Tamás BÓNI",
        "date": "5. kolo",
        "player_a_team": "SOŠ Ž",
        "player_b_team": "METALKOV"
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "Jozef MOLNÁR",
        "player_b": "Ľubomír VARTÁS",
        "date": "5. kolo",
        "player_a_team": "SOŠ Ž",
        "player_b_team": "METALKOV"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Peter POLÁK",
        "player_b": "František CZINGELY",
        "date": "5. kolo",
        "player_a_team": "SOŠ Ž",
        "player_b_team": "METALKOV"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Jozef MOLNÁR",
        "player_b": "Csaba BECSE",
        "date": "5. kolo",
        "player_a_team": "SOŠ Ž",
        "player_b_team": "METALKOV"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Igor BAŠTI",
        "player_b": "Ľubomír VARTÁS",
        "date": "5. kolo",
        "player_a_team": "SOŠ Ž",
        "player_b_team": "METALKOV"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Slavomír KEŠELÁK",
        "player_b": "František CZINGELY",
        "date": "5. kolo",
        "player_a_team": "SOŠ Ž",
        "player_b_team": "METALKOV"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Jozef MOLNÁR",
        "player_b": "Tamás BÓNI",
        "date": "5. kolo",
        "player_a_team": "SOŠ Ž",
        "player_b_team": "METALKOV"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Martin ĎURIŠIN",
        "player_b": "Radoslav POĽA",
        "date": "5. kolo",
        "player_a_team": "SKP \"B\"",
        "player_b_team": "BERNARD Club"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "David LEŠUNDÁK",
        "player_b": "Slav. FEČKE",
        "date": "5. kolo",
        "player_a_team": "SKP \"B\"",
        "player_b_team": "BERNARD Club"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Michal NINITZ",
        "player_b": "Stanislav PČOLA",
        "date": "5. kolo",
        "player_a_team": "SKP \"B\"",
        "player_b_team": "BERNARD Club"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Peter GABOŠ",
        "player_b": "Roman ČIŽMÁR",
        "date": "5. kolo",
        "player_a_team": "SKP \"B\"",
        "player_b_team": "BERNARD Club"
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Marek SKYBA",
        "player_b": "Slav. FEČKE",
        "date": "5. kolo",
        "player_a_team": "SKP \"B\"",
        "player_b_team": "BERNARD Club"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "David LEŠUNDÁK",
        "player_b": "Stanislav PČOLA",
        "date": "5. kolo",
        "player_a_team": "SKP \"B\"",
        "player_b_team": "BERNARD Club"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Michal NINITZ",
        "player_b": "Roman ČIŽMÁR",
        "date": "5. kolo",
        "player_a_team": "SKP \"B\"",
        "player_b_team": "BERNARD Club"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Peter GABOŠ",
        "player_b": "Radoslav POĽA",
        "date": "5. kolo",
        "player_a_team": "SKP \"B\"",
        "player_b_team": "BERNARD Club"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Martin ĎURIŠIN",
        "player_b": "Stanislav PČOLA",
        "date": "5. kolo",
        "player_a_team": "SKP \"B\"",
        "player_b_team": "BERNARD Club"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "David LEŠUNDÁK",
        "player_b": "Roman ČIŽMÁR",
        "date": "5. kolo",
        "player_a_team": "SKP \"B\"",
        "player_b_team": "BERNARD Club"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Marek SKYBA",
        "player_b": "Radoslav POĽA",
        "date": "5. kolo",
        "player_a_team": "SKP \"B\"",
        "player_b_team": "BERNARD Club"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Peter GABOŠ",
        "player_b": "Slav. FEČKE",
        "date": "5. kolo",
        "player_a_team": "SKP \"B\"",
        "player_b_team": "BERNARD Club"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Martin ĎURIŠIN",
        "player_b": "Roman ČIŽMÁR",
        "date": "5. kolo",
        "player_a_team": "SKP \"B\"",
        "player_b_team": "BERNARD Club"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "David LEŠUNDÁK",
        "player_b": "Radoslav POĽA",
        "date": "5. kolo",
        "player_a_team": "SKP \"B\"",
        "player_b_team": "BERNARD Club"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Michal NINITZ",
        "player_b": "Slav. FEČKE",
        "date": "5. kolo",
        "player_a_team": "SKP \"B\"",
        "player_b_team": "BERNARD Club"
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Marek SKYBA",
        "player_b": "Stanislav PČOLA",
        "date": "5. kolo",
        "player_a_team": "SKP \"B\"",
        "player_b_team": "BERNARD Club"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Miro. HARČÁRIK",
        "player_b": "Andrej MAKRANSKÝ ml.",
        "date": "5. kolo",
        "player_a_team": "COKERY",
        "player_b_team": "TTC KVP"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Igor TKÁČ",
        "player_b": "Csaba BECSE",
        "date": "5. kolo",
        "player_a_team": "COKERY",
        "player_b_team": "TTC KVP"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Milan SUCHÝ",
        "player_b": "Andrej MAKRANSKÝ",
        "date": "5. kolo",
        "player_a_team": "COKERY",
        "player_b_team": "TTC KVP"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Anton STANICKÝ",
        "player_b": "Eduard KUDLA",
        "date": "5. kolo",
        "player_a_team": "COKERY",
        "player_b_team": "TTC KVP"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Miro. HARČÁRIK",
        "player_b": "Csaba BECSE",
        "date": "5. kolo",
        "player_a_team": "COKERY",
        "player_b_team": "TTC KVP"
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "Igor TKÁČ",
        "player_b": "Andrej MAKRANSKÝ",
        "date": "5. kolo",
        "player_a_team": "COKERY",
        "player_b_team": "TTC KVP"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Milan SUCHÝ",
        "player_b": "Eduard KUDLA",
        "date": "5. kolo",
        "player_a_team": "COKERY",
        "player_b_team": "TTC KVP"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Anton STANICKÝ",
        "player_b": "Andrej MAKRANSKÝ ml.",
        "date": "5. kolo",
        "player_a_team": "COKERY",
        "player_b_team": "TTC KVP"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Miro. HARČÁRIK",
        "player_b": "Andrej MAKRANSKÝ",
        "date": "5. kolo",
        "player_a_team": "COKERY",
        "player_b_team": "TTC KVP"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Igor TKÁČ",
        "player_b": "Eduard KUDLA",
        "date": "5. kolo",
        "player_a_team": "COKERY",
        "player_b_team": "TTC KVP"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Peter SZCZECZINA",
        "player_b": "Andrej MAKRANSKÝ ml.",
        "date": "5. kolo",
        "player_a_team": "COKERY",
        "player_b_team": "TTC KVP"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Anton STANICKÝ",
        "player_b": "Csaba BECSE",
        "date": "5. kolo",
        "player_a_team": "COKERY",
        "player_b_team": "TTC KVP"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Miro. HARČÁRIK",
        "player_b": "Eduard KUDLA",
        "date": "5. kolo",
        "player_a_team": "COKERY",
        "player_b_team": "TTC KVP"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Igor TKÁČ",
        "player_b": "Andrej MAKRANSKÝ ml.",
        "date": "5. kolo",
        "player_a_team": "COKERY",
        "player_b_team": "TTC KVP"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Milan SUCHÝ",
        "player_b": "Csaba BECSE",
        "date": "5. kolo",
        "player_a_team": "COKERY",
        "player_b_team": "TTC KVP"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Peter SZCZECZINA",
        "player_b": "Andrej MAKRANSKÝ",
        "date": "5. kolo",
        "player_a_team": "COKERY",
        "player_b_team": "TTC KVP"
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "Juraj ANTOŠ",
        "player_b": "Martina KOLIBÁROVÁ",
        "date": "5. kolo",
        "player_a_team": "KOMÉTA KE",
        "player_b_team": "MYSLAVA \"Ž\""
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Peter BARSA",
        "player_b": "Jarmila SOMOŠOVÁ",
        "date": "5. kolo",
        "player_a_team": "KOMÉTA KE",
        "player_b_team": "MYSLAVA \"Ž\""
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Peter MACH",
        "player_b": "Iveta SOLČANIOVÁ",
        "date": "5. kolo",
        "player_a_team": "KOMÉTA KE",
        "player_b_team": "MYSLAVA \"Ž\""
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Peter ŠTEFANCO",
        "player_b": "Zuzana GAŽI",
        "date": "5. kolo",
        "player_a_team": "KOMÉTA KE",
        "player_b_team": "MYSLAVA \"Ž\""
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Juraj ANTOŠ",
        "player_b": "Jarmila SOMOŠOVÁ",
        "date": "5. kolo",
        "player_a_team": "KOMÉTA KE",
        "player_b_team": "MYSLAVA \"Ž\""
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Peter BARSA",
        "player_b": "Izabela VARGOVÁ",
        "date": "5. kolo",
        "player_a_team": "KOMÉTA KE",
        "player_b_team": "MYSLAVA \"Ž\""
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Milan KRASNAY",
        "player_b": "Zuzana GAŽI",
        "date": "5. kolo",
        "player_a_team": "KOMÉTA KE",
        "player_b_team": "MYSLAVA \"Ž\""
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Andrej KARLIK",
        "player_b": "Martina KOLIBÁROVÁ",
        "date": "5. kolo",
        "player_a_team": "KOMÉTA KE",
        "player_b_team": "MYSLAVA \"Ž\""
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Juraj ANTOŠ",
        "player_b": "Iveta SOLČANIOVÁ",
        "date": "5. kolo",
        "player_a_team": "KOMÉTA KE",
        "player_b_team": "MYSLAVA \"Ž\""
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Peter BARSA",
        "player_b": "Zuzana GAŽI",
        "date": "5. kolo",
        "player_a_team": "KOMÉTA KE",
        "player_b_team": "MYSLAVA \"Ž\""
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Peter MACH",
        "player_b": "Martina KOLIBÁROVÁ",
        "date": "5. kolo",
        "player_a_team": "KOMÉTA KE",
        "player_b_team": "MYSLAVA \"Ž\""
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Peter ŠTEFANCO",
        "player_b": "Jarmila SOMOŠOVÁ",
        "date": "5. kolo",
        "player_a_team": "KOMÉTA KE",
        "player_b_team": "MYSLAVA \"Ž\""
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Juraj ANTOŠ",
        "player_b": "Zuzana GAŽI",
        "date": "5. kolo",
        "player_a_team": "KOMÉTA KE",
        "player_b_team": "MYSLAVA \"Ž\""
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Peter BARSA",
        "player_b": "Martina KOLIBÁROVÁ",
        "date": "5. kolo",
        "player_a_team": "KOMÉTA KE",
        "player_b_team": "MYSLAVA \"Ž\""
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Milan KRASNAY",
        "player_b": "Jarmila SOMOŠOVÁ",
        "date": "5. kolo",
        "player_a_team": "KOMÉTA KE",
        "player_b_team": "MYSLAVA \"Ž\""
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Andrej KARLIK",
        "player_b": "Iveta SOLČANIOVÁ",
        "date": "5. kolo",
        "player_a_team": "KOMÉTA KE",
        "player_b_team": "MYSLAVA \"Ž\""
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Marek PATAKY",
        "player_b": "Martin SOĽÁR",
        "date": "5. kolo",
        "player_a_team": "BOMBERE",
        "player_b_team": "SKP \"A\""
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Peter VYHONSKÝ",
        "player_b": "Peter JAKUBEC",
        "date": "5. kolo",
        "player_a_team": "BOMBERE",
        "player_b_team": "SKP \"A\""
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Ján ŘIHAK",
        "player_b": "Miroslav KOSCELANSKÝ",
        "date": "5. kolo",
        "player_a_team": "BOMBERE",
        "player_b_team": "SKP \"A\""
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Ján GUZY",
        "player_b": "Ľubomír FRANČÁK",
        "date": "5. kolo",
        "player_a_team": "BOMBERE",
        "player_b_team": "SKP \"A\""
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Marek PATAKY",
        "player_b": "Peter JAKUBEC",
        "date": "5. kolo",
        "player_a_team": "BOMBERE",
        "player_b_team": "SKP \"A\""
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Peter VYHONSKÝ",
        "player_b": "Miroslav KOSCELANSKÝ",
        "date": "5. kolo",
        "player_a_team": "BOMBERE",
        "player_b_team": "SKP \"A\""
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Ján ŘIHAK",
        "player_b": "Ľubomír FRANČÁK",
        "date": "5. kolo",
        "player_a_team": "BOMBERE",
        "player_b_team": "SKP \"A\""
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Ján GUZY",
        "player_b": "Martin SOĽÁR",
        "date": "5. kolo",
        "player_a_team": "BOMBERE",
        "player_b_team": "SKP \"A\""
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Marek PATAKY",
        "player_b": "Miroslav KOSCELANSKÝ",
        "date": "5. kolo",
        "player_a_team": "BOMBERE",
        "player_b_team": "SKP \"A\""
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Peter VYHONSKÝ",
        "player_b": "Ľubomír FRANČÁK",
        "date": "5. kolo",
        "player_a_team": "BOMBERE",
        "player_b_team": "SKP \"A\""
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Ján ŘIHAK",
        "player_b": "Martin SOĽÁR",
        "date": "5. kolo",
        "player_a_team": "BOMBERE",
        "player_b_team": "SKP \"A\""
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Ján GUZY",
        "player_b": "Peter JAKUBEC",
        "date": "5. kolo",
        "player_a_team": "BOMBERE",
        "player_b_team": "SKP \"A\""
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Marek PATAKY",
        "player_b": "Ľubomír FRANČÁK",
        "date": "5. kolo",
        "player_a_team": "BOMBERE",
        "player_b_team": "SKP \"A\""
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Peter VYHONSKÝ",
        "player_b": "Martin SOĽÁR",
        "date": "5. kolo",
        "player_a_team": "BOMBERE",
        "player_b_team": "SKP \"A\""
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "Ján ŘIHAK",
        "player_b": "Peter JAKUBEC",
        "date": "5. kolo",
        "player_a_team": "BOMBERE",
        "player_b_team": "SKP \"A\""
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Ján GUZY",
        "player_b": "Miroslav KOSCELANSKÝ",
        "date": "5. kolo",
        "player_a_team": "BOMBERE",
        "player_b_team": "SKP \"A\""
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Andrej FELBER",
        "player_b": "Ľubomír HOCHVART",
        "date": "5. kolo",
        "player_a_team": "TT TEAM",
        "player_b_team": "REPREX"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Juraj POLYAK",
        "player_b": "Miloslav KOCÚR",
        "date": "5. kolo",
        "player_a_team": "TT TEAM",
        "player_b_team": "REPREX"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Peter RUŽIČKA",
        "player_b": "Daniel VAŇO",
        "date": "5. kolo",
        "player_a_team": "TT TEAM",
        "player_b_team": "REPREX"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Ján SIMKO",
        "player_b": "Peter RUSNÁK",
        "date": "5. kolo",
        "player_a_team": "TT TEAM",
        "player_b_team": "REPREX"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Andrej FELBER",
        "player_b": "Miloslav KOCÚR",
        "date": "5. kolo",
        "player_a_team": "TT TEAM",
        "player_b_team": "REPREX"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Juraj POLYAK",
        "player_b": "Štefan VENDEL",
        "date": "5. kolo",
        "player_a_team": "TT TEAM",
        "player_b_team": "REPREX"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Peter RUŽIČKA",
        "player_b": "Peter RUSNÁK",
        "date": "5. kolo",
        "player_a_team": "TT TEAM",
        "player_b_team": "REPREX"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Ján SIMKO",
        "player_b": "Ľubomír HOCHVART",
        "date": "5. kolo",
        "player_a_team": "TT TEAM",
        "player_b_team": "REPREX"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Andrej FELBER",
        "player_b": "Daniel VAŇO",
        "date": "5. kolo",
        "player_a_team": "TT TEAM",
        "player_b_team": "REPREX"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Juraj POLYAK",
        "player_b": "Peter RUSNÁK",
        "date": "5. kolo",
        "player_a_team": "TT TEAM",
        "player_b_team": "REPREX"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Peter RUŽIČKA",
        "player_b": "Ľubomír HOCHVART",
        "date": "5. kolo",
        "player_a_team": "TT TEAM",
        "player_b_team": "REPREX"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Ján SIMKO",
        "player_b": "Miloslav KOCÚR",
        "date": "5. kolo",
        "player_a_team": "TT TEAM",
        "player_b_team": "REPREX"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Andrej FELBER",
        "player_b": "Peter RUSNÁK",
        "date": "5. kolo",
        "player_a_team": "TT TEAM",
        "player_b_team": "REPREX"
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Juraj POLYAK",
        "player_b": "Ľubomír HOCHVART",
        "date": "5. kolo",
        "player_a_team": "TT TEAM",
        "player_b_team": "REPREX"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Peter RUŽIČKA",
        "player_b": "Miloslav KOCÚR",
        "date": "5. kolo",
        "player_a_team": "TT TEAM",
        "player_b_team": "REPREX"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Ján SIMKO",
        "player_b": "Štefan VENDEL",
        "date": "5. kolo",
        "player_a_team": "TT TEAM",
        "player_b_team": "REPREX"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Milan MICHLOVIČ",
        "player_b": "Jozef ZAVACKÝ",
        "date": "5. kolo",
        "player_a_team": "MONTREAL",
        "player_b_team": "EUROCAST"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "M. ZÁRIK",
        "player_b": "Julius PILLÁR",
        "date": "5. kolo",
        "player_a_team": "MONTREAL",
        "player_b_team": "EUROCAST"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Štefan PČOLA",
        "player_b": "P. ŠEBEK",
        "date": "5. kolo",
        "player_a_team": "MONTREAL",
        "player_b_team": "EUROCAST"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Milan GAJTKO",
        "player_b": "Patrík TIRPÁK",
        "date": "5. kolo",
        "player_a_team": "MONTREAL",
        "player_b_team": "EUROCAST"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Luboš MRÁZ",
        "player_b": "Julius PILLÁR",
        "date": "5. kolo",
        "player_a_team": "MONTREAL",
        "player_b_team": "EUROCAST"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "M. ZÁRIK",
        "player_b": "P. ŠEBEK",
        "date": "5. kolo",
        "player_a_team": "MONTREAL",
        "player_b_team": "EUROCAST"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Štefan PČOLA",
        "player_b": "Patrík TIRPÁK",
        "date": "5. kolo",
        "player_a_team": "MONTREAL",
        "player_b_team": "EUROCAST"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Milan GAJTKO",
        "player_b": "Jozef ZAVACKÝ",
        "date": "5. kolo",
        "player_a_team": "MONTREAL",
        "player_b_team": "EUROCAST"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Milan MICHLOVIČ",
        "player_b": "P. ŠEBEK",
        "date": "5. kolo",
        "player_a_team": "MONTREAL",
        "player_b_team": "EUROCAST"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "M. ZÁRIK",
        "player_b": "Patrík TIRPÁK",
        "date": "5. kolo",
        "player_a_team": "MONTREAL",
        "player_b_team": "EUROCAST"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Luboš MRÁZ",
        "player_b": "Jozef ZAVACKÝ",
        "date": "5. kolo",
        "player_a_team": "MONTREAL",
        "player_b_team": "EUROCAST"
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "Milan GAJTKO",
        "player_b": "Julius PILLÁR",
        "date": "5. kolo",
        "player_a_team": "MONTREAL",
        "player_b_team": "EUROCAST"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Milan MICHLOVIČ",
        "player_b": "Patrík TIRPÁK",
        "date": "5. kolo",
        "player_a_team": "MONTREAL",
        "player_b_team": "EUROCAST"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "M. ZÁRIK",
        "player_b": "Jozef ZAVACKÝ",
        "date": "5. kolo",
        "player_a_team": "MONTREAL",
        "player_b_team": "EUROCAST"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Štefan PČOLA",
        "player_b": "Julius PILLÁR",
        "date": "5. kolo",
        "player_a_team": "MONTREAL",
        "player_b_team": "EUROCAST"
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "Luboš MRÁZ",
        "player_b": "P. ŠEBEK",
        "date": "5. kolo",
        "player_a_team": "MONTREAL",
        "player_b_team": "EUROCAST"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Jozef FOTTA",
        "player_b": "Matúš HRČKA",
        "date": "5. kolo",
        "player_a_team": "MYSLAVA",
        "player_b_team": "ASTORIA FIT"
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "Marián HOVAN",
        "player_b": "Martin MUCHA",
        "date": "5. kolo",
        "player_a_team": "MYSLAVA",
        "player_b_team": "ASTORIA FIT"
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Vladimír VARGOVČÁK",
        "player_b": "Andrej KAČKOŠ",
        "date": "5. kolo",
        "player_a_team": "MYSLAVA",
        "player_b_team": "ASTORIA FIT"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Ján FOTTA",
        "player_b": "Viktor ŠIDLÍK",
        "date": "5. kolo",
        "player_a_team": "MYSLAVA",
        "player_b_team": "ASTORIA FIT"
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Jozef FOTTA",
        "player_b": "Martin MUCHA",
        "date": "5. kolo",
        "player_a_team": "MYSLAVA",
        "player_b_team": "ASTORIA FIT"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Marián HOVAN",
        "player_b": "Julus WÉBER",
        "date": "5. kolo",
        "player_a_team": "MYSLAVA",
        "player_b_team": "ASTORIA FIT"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Vladimír VARGOVČÁK",
        "player_b": "Viktor ŠIDLÍK",
        "date": "5. kolo",
        "player_a_team": "MYSLAVA",
        "player_b_team": "ASTORIA FIT"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Ján FOTTA",
        "player_b": "Matúš HRČKA",
        "date": "5. kolo",
        "player_a_team": "MYSLAVA",
        "player_b_team": "ASTORIA FIT"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Jozef FOTTA",
        "player_b": "Andrej KAČKOŠ",
        "date": "5. kolo",
        "player_a_team": "MYSLAVA",
        "player_b_team": "ASTORIA FIT"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Marián HOVAN",
        "player_b": "Viktor ŠIDLÍK",
        "date": "5. kolo",
        "player_a_team": "MYSLAVA",
        "player_b_team": "ASTORIA FIT"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Vladimír VARGOVČÁK",
        "player_b": "Matúš HRČKA",
        "date": "5. kolo",
        "player_a_team": "MYSLAVA",
        "player_b_team": "ASTORIA FIT"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Milan ŠOLC",
        "player_b": "Martin MUCHA",
        "date": "5. kolo",
        "player_a_team": "MYSLAVA",
        "player_b_team": "ASTORIA FIT"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Jozef FOTTA",
        "player_b": "Julus WÉBER",
        "date": "5. kolo",
        "player_a_team": "MYSLAVA",
        "player_b_team": "ASTORIA FIT"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Marián HOVAN",
        "player_b": "Matúš HRČKA",
        "date": "5. kolo",
        "player_a_team": "MYSLAVA",
        "player_b_team": "ASTORIA FIT"
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "Vladimír VARGOVČÁK",
        "player_b": "Martin MUCHA",
        "date": "5. kolo",
        "player_a_team": "MYSLAVA",
        "player_b_team": "ASTORIA FIT"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Milan ŠOLC",
        "player_b": "Andrej KAČKOŠ",
        "date": "5. kolo",
        "player_a_team": "MYSLAVA",
        "player_b_team": "ASTORIA FIT"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Milan ŠOLC/Marián HOVAN",
        "player_b": "Peter POLÁK/Igor BAŠTI",
        "date": "6. kolo",
        "player_a_team": "MYSLAVA",
        "player_b_team": "SOŠ Ž",
        "doubles": true
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Ján FOTTA/Jozef FOTTA",
        "player_b": "Jozef MOLNÁR/Slavomír KEŠELÁK",
        "date": "6. kolo",
        "player_a_team": "MYSLAVA",
        "player_b_team": "SOŠ Ž",
        "doubles": true
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Matúš HRČKA/Martin MUCHA",
        "player_b": "Julius PILLÁR/Patrík TIRPÁK",
        "date": "6. kolo",
        "player_a_team": "ASTORIA FIT",
        "player_b_team": "EUROCAST",
        "doubles": true
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Marek KUNDRIK/Viktor ŠIDLÍK",
        "player_b": "Peter ŠEBEK st./Jozef ZAVACKÝ",
        "date": "6. kolo",
        "player_a_team": "ASTORIA FIT",
        "player_b_team": "EUROCAST",
        "doubles": true
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "Štefan LISSÝ/Martin SOĽÁR",
        "player_b": "Juraj ANTOŠ/Peter BARSA",
        "date": "6. kolo",
        "player_a_team": "SKP \"A\"",
        "player_b_team": "KOMÉTA KE",
        "doubles": true
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Miroslav KOSCELANSKÝ/Peter JAKUBEC",
        "player_b": "Peter ŠTEFANCO/Andrej KARLIK",
        "date": "6. kolo",
        "player_a_team": "SKP \"A\"",
        "player_b_team": "KOMÉTA KE",
        "doubles": true
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Roman ČIŽMÁR/Slav. FEČKE",
        "player_b": "Štefan PČOLA/Milan MICHLOVIČ",
        "date": "6. kolo",
        "player_a_team": "BERNARD Club",
        "player_b_team": "MONTREAL",
        "doubles": true
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "Stanislav PČOLA/Radoslav POĽA",
        "player_b": "Milan GAJTKO/Luboš MRÁZ",
        "date": "6. kolo",
        "player_a_team": "BERNARD Club",
        "player_b_team": "MONTREAL",
        "doubles": true
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Izabela VARGOVÁ/Martina KOLIBÁROVÁ",
        "player_b": "Jaroslav JANOVSKÝ/Milan SUCHÝ",
        "date": "6. kolo",
        "player_a_team": "MYSLAVA \"Ž\"",
        "player_b_team": "COKERY",
        "doubles": true
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Jarmila SOMOŠOVÁ/Pavol CINKANIČ",
        "player_b": "Jaroslav WIENER/Anton STANICKÝ",
        "date": "6. kolo",
        "player_a_team": "MYSLAVA \"Ž\"",
        "player_b_team": "COKERY",
        "doubles": true
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Karol GERGELY/Tomáš BEKECS",
        "player_b": "Marek SIMKO/Ľubomír BENDZÁK",
        "date": "6. kolo",
        "player_a_team": "TTC KVP",
        "player_b_team": "TT TEAM",
        "doubles": true
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "Andrej MAKRANSKÝ/Eduard KUDLA",
        "player_b": "Juraj POLYAK/Andrej FELBER",
        "date": "6. kolo",
        "player_a_team": "TTC KVP",
        "player_b_team": "TT TEAM",
        "doubles": true
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Vladimír LÁSLOFI/Juraj BUCHNER",
        "player_b": "Marek PATAKY/Ján GUZY",
        "date": "6. kolo",
        "player_a_team": "METALKOV",
        "player_b_team": "BOMBERE",
        "doubles": true
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Ľubomír VARTÁS/František CZINGELY",
        "player_b": "Slavomír KRÁLIK/Ondrej KRÁLIK",
        "date": "6. kolo",
        "player_a_team": "METALKOV",
        "player_b_team": "BOMBERE",
        "doubles": true
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Ľubomír HOCHVART/Milan PAŽIČ",
        "player_b": "David LEŠUNDÁK/Martin ĎURIŠIN",
        "date": "6. kolo",
        "player_a_team": "REPREX",
        "player_b_team": "SKP \"B\"",
        "doubles": true
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Miloslav KOCÚR/Ján PETRŽALA",
        "player_b": "Marek SKYBA/Peter GABOŠ",
        "date": "6. kolo",
        "player_a_team": "REPREX",
        "player_b_team": "SKP \"B\"",
        "doubles": true
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Matúš HRČKA",
        "player_b": "Peter ŠEBEK st.",
        "date": "6. kolo",
        "player_a_team": "ASTORIA FIT",
        "player_b_team": "EUROCAST"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Martin MUCHA",
        "player_b": "Jozef ZAVACKÝ",
        "date": "6. kolo",
        "player_a_team": "ASTORIA FIT",
        "player_b_team": "EUROCAST"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Ladislav RADVÁNI",
        "player_b": "Julius PILLÁR",
        "date": "6. kolo",
        "player_a_team": "ASTORIA FIT",
        "player_b_team": "EUROCAST"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Marek KUNDRIK",
        "player_b": "Patrík TIRPÁK",
        "date": "6. kolo",
        "player_a_team": "ASTORIA FIT",
        "player_b_team": "EUROCAST"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Matúš HRČKA",
        "player_b": "Jozef ZAVACKÝ",
        "date": "6. kolo",
        "player_a_team": "ASTORIA FIT",
        "player_b_team": "EUROCAST"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Martin MUCHA",
        "player_b": "Julius PILLÁR",
        "date": "6. kolo",
        "player_a_team": "ASTORIA FIT",
        "player_b_team": "EUROCAST"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Ladislav RADVÁNI",
        "player_b": "Patrík TIRPÁK",
        "date": "6. kolo",
        "player_a_team": "ASTORIA FIT",
        "player_b_team": "EUROCAST"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Marek KUNDRIK",
        "player_b": "Peter ŠEBEK st.",
        "date": "6. kolo",
        "player_a_team": "ASTORIA FIT",
        "player_b_team": "EUROCAST"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Matúš HRČKA",
        "player_b": "Julius PILLÁR",
        "date": "6. kolo",
        "player_a_team": "ASTORIA FIT",
        "player_b_team": "EUROCAST"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Martin MUCHA",
        "player_b": "Patrík TIRPÁK",
        "date": "6. kolo",
        "player_a_team": "ASTORIA FIT",
        "player_b_team": "EUROCAST"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Viktor ŠIDLÍK",
        "player_b": "Peter ŠEBEK st.",
        "date": "6. kolo",
        "player_a_team": "ASTORIA FIT",
        "player_b_team": "EUROCAST"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Marek KUNDRIK",
        "player_b": "Jozef HUDÁK",
        "date": "6. kolo",
        "player_a_team": "ASTORIA FIT",
        "player_b_team": "EUROCAST"
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Matúš HRČKA",
        "player_b": "Patrík TIRPÁK",
        "date": "6. kolo",
        "player_a_team": "ASTORIA FIT",
        "player_b_team": "EUROCAST"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Martin MUCHA",
        "player_b": "Peter ŠEBEK st.",
        "date": "6. kolo",
        "player_a_team": "ASTORIA FIT",
        "player_b_team": "EUROCAST"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Viktor ŠIDLÍK",
        "player_b": "Jozef HUDÁK",
        "date": "6. kolo",
        "player_a_team": "ASTORIA FIT",
        "player_b_team": "EUROCAST"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Viktor ŠIDLÍK",
        "player_b": "Julius PILLÁR",
        "date": "6. kolo",
        "player_a_team": "ASTORIA FIT",
        "player_b_team": "EUROCAST"
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "Jozef FOTTA",
        "player_b": "Igor BAŠTI",
        "date": "6. kolo",
        "player_a_team": "MYSLAVA",
        "player_b_team": "SOŠ Ž"
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Marián HOVAN",
        "player_b": "Jozef MOLNÁR",
        "date": "6. kolo",
        "player_a_team": "MYSLAVA",
        "player_b_team": "SOŠ Ž"
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Vladimír VARGOVČÁK",
        "player_b": "Slavomír KEŠELÁK",
        "date": "6. kolo",
        "player_a_team": "MYSLAVA",
        "player_b_team": "SOŠ Ž"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Ján FOTTA",
        "player_b": "Peter POLÁK",
        "date": "6. kolo",
        "player_a_team": "MYSLAVA",
        "player_b_team": "SOŠ Ž"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Jozef FOTTA",
        "player_b": "Jozef MOLNÁR",
        "date": "6. kolo",
        "player_a_team": "MYSLAVA",
        "player_b_team": "SOŠ Ž"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Marián HOVAN",
        "player_b": "Slavomír KEŠELÁK",
        "date": "6. kolo",
        "player_a_team": "MYSLAVA",
        "player_b_team": "SOŠ Ž"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Vladimír VARGOVČÁK",
        "player_b": "Peter POLÁK",
        "date": "6. kolo",
        "player_a_team": "MYSLAVA",
        "player_b_team": "SOŠ Ž"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Ján FOTTA",
        "player_b": "Igor BAŠTI",
        "date": "6. kolo",
        "player_a_team": "MYSLAVA",
        "player_b_team": "SOŠ Ž"
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Jozef FOTTA",
        "player_b": "Slavomír KEŠELÁK",
        "date": "6. kolo",
        "player_a_team": "MYSLAVA",
        "player_b_team": "SOŠ Ž"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Marián HOVAN",
        "player_b": "Peter POLÁK",
        "date": "6. kolo",
        "player_a_team": "MYSLAVA",
        "player_b_team": "SOŠ Ž"
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Vladimír VARGOVČÁK",
        "player_b": "Igor BAŠTI",
        "date": "6. kolo",
        "player_a_team": "MYSLAVA",
        "player_b_team": "SOŠ Ž"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Milan ŠOLC",
        "player_b": "Slavomír KEŠELÁK",
        "date": "6. kolo",
        "player_a_team": "MYSLAVA",
        "player_b_team": "SOŠ Ž"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Jozef FOTTA",
        "player_b": "Peter POLÁK",
        "date": "6. kolo",
        "player_a_team": "MYSLAVA",
        "player_b_team": "SOŠ Ž"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Marián HOVAN",
        "player_b": "Igor BAŠTI",
        "date": "6. kolo",
        "player_a_team": "MYSLAVA",
        "player_b_team": "SOŠ Ž"
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Vladimír VARGOVČÁK",
        "player_b": "Slavomír KEŠELÁK",
        "date": "6. kolo",
        "player_a_team": "MYSLAVA",
        "player_b_team": "SOŠ Ž"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Milan ŠOLC",
        "player_b": "Slavomír KEŠELÁK",
        "date": "6. kolo",
        "player_a_team": "MYSLAVA",
        "player_b_team": "SOŠ Ž"
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Martin SOĽÁR",
        "player_b": "Juraj ANTOŠ",
        "date": "6. kolo",
        "player_a_team": "SKP \"A\"",
        "player_b_team": "KOMÉTA KE"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Štefan LISSÝ",
        "player_b": "Peter BARSA",
        "date": "6. kolo",
        "player_a_team": "SKP \"A\"",
        "player_b_team": "KOMÉTA KE"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Peter JAKUBEC",
        "player_b": "Peter ŠTEFANCO",
        "date": "6. kolo",
        "player_a_team": "SKP \"A\"",
        "player_b_team": "KOMÉTA KE"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Miroslav KOSCELANSKÝ",
        "player_b": "Milan KRASNAY",
        "date": "6. kolo",
        "player_a_team": "SKP \"A\"",
        "player_b_team": "KOMÉTA KE"
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Martin SOĽÁR",
        "player_b": "Peter BARSA",
        "date": "6. kolo",
        "player_a_team": "SKP \"A\"",
        "player_b_team": "KOMÉTA KE"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Štefan LISSÝ",
        "player_b": "Andrej KARLIK",
        "date": "6. kolo",
        "player_a_team": "SKP \"A\"",
        "player_b_team": "KOMÉTA KE"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Peter JAKUBEC",
        "player_b": "Ján GAJDOŠ",
        "date": "6. kolo",
        "player_a_team": "SKP \"A\"",
        "player_b_team": "KOMÉTA KE"
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Miroslav KOSCELANSKÝ",
        "player_b": "Juraj ANTOŠ",
        "date": "6. kolo",
        "player_a_team": "SKP \"A\"",
        "player_b_team": "KOMÉTA KE"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Martin SOĽÁR",
        "player_b": "Peter ŠTEFANCO",
        "date": "6. kolo",
        "player_a_team": "SKP \"A\"",
        "player_b_team": "KOMÉTA KE"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Štefan LISSÝ",
        "player_b": "Milan KRASNAY",
        "date": "6. kolo",
        "player_a_team": "SKP \"A\"",
        "player_b_team": "KOMÉTA KE"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Peter JAKUBEC",
        "player_b": "Juraj ANTOŠ",
        "date": "6. kolo",
        "player_a_team": "SKP \"A\"",
        "player_b_team": "KOMÉTA KE"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Miroslav KOSCELANSKÝ",
        "player_b": "Peter BARSA",
        "date": "6. kolo",
        "player_a_team": "SKP \"A\"",
        "player_b_team": "KOMÉTA KE"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Martin SOĽÁR",
        "player_b": "Milan KRASNAY",
        "date": "6. kolo",
        "player_a_team": "SKP \"A\"",
        "player_b_team": "KOMÉTA KE"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Štefan LISSÝ",
        "player_b": "Ján GAJDOŠ",
        "date": "6. kolo",
        "player_a_team": "SKP \"A\"",
        "player_b_team": "KOMÉTA KE"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Peter JAKUBEC",
        "player_b": "Peter BARSA",
        "date": "6. kolo",
        "player_a_team": "SKP \"A\"",
        "player_b_team": "KOMÉTA KE"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Miroslav KOSCELANSKÝ",
        "player_b": "Andrej KARLIK",
        "date": "6. kolo",
        "player_a_team": "SKP \"A\"",
        "player_b_team": "KOMÉTA KE"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Slav. FEČKE",
        "player_b": "Milan MICHLOVIČ",
        "date": "6. kolo",
        "player_a_team": "BERNARD Club",
        "player_b_team": "MONTREAL"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Radoslav POĽA",
        "player_b": "M. ZÁRIK",
        "date": "6. kolo",
        "player_a_team": "BERNARD Club",
        "player_b_team": "MONTREAL"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Roman ČIŽMÁR",
        "player_b": "Štefan PČOLA",
        "date": "6. kolo",
        "player_a_team": "BERNARD Club",
        "player_b_team": "MONTREAL"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Stanislav PČOLA",
        "player_b": "Milan GAJTKO",
        "date": "6. kolo",
        "player_a_team": "BERNARD Club",
        "player_b_team": "MONTREAL"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Slav. FEČKE",
        "player_b": "M. ZÁRIK",
        "date": "6. kolo",
        "player_a_team": "BERNARD Club",
        "player_b_team": "MONTREAL"
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "Radoslav POĽA",
        "player_b": "Luboš MRÁZ",
        "date": "6. kolo",
        "player_a_team": "BERNARD Club",
        "player_b_team": "MONTREAL"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Roman ČIŽMÁR",
        "player_b": "Milan GAJTKO",
        "date": "6. kolo",
        "player_a_team": "BERNARD Club",
        "player_b_team": "MONTREAL"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Stanislav PČOLA",
        "player_b": "Milan MICHLOVIČ",
        "date": "6. kolo",
        "player_a_team": "BERNARD Club",
        "player_b_team": "MONTREAL"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Tibor FIĽAK",
        "player_b": "Štefan PČOLA",
        "date": "6. kolo",
        "player_a_team": "BERNARD Club",
        "player_b_team": "MONTREAL"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Radoslav POĽA",
        "player_b": "Milan GAJTKO",
        "date": "6. kolo",
        "player_a_team": "BERNARD Club",
        "player_b_team": "MONTREAL"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Roman ČIŽMÁR",
        "player_b": "Luboš MRÁZ",
        "date": "6. kolo",
        "player_a_team": "BERNARD Club",
        "player_b_team": "MONTREAL"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Stanislav PČOLA",
        "player_b": "M. ZÁRIK",
        "date": "6. kolo",
        "player_a_team": "BERNARD Club",
        "player_b_team": "MONTREAL"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Tibor FIĽAK",
        "player_b": "Luboš MRÁZ",
        "date": "6. kolo",
        "player_a_team": "BERNARD Club",
        "player_b_team": "MONTREAL"
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "Radoslav POĽA",
        "player_b": "Milan MICHLOVIČ",
        "date": "6. kolo",
        "player_a_team": "BERNARD Club",
        "player_b_team": "MONTREAL"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Roman ČIŽMÁR",
        "player_b": "M. ZÁRIK",
        "date": "6. kolo",
        "player_a_team": "BERNARD Club",
        "player_b_team": "MONTREAL"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Stanislav PČOLA",
        "player_b": "Štefan PČOLA",
        "date": "6. kolo",
        "player_a_team": "BERNARD Club",
        "player_b_team": "MONTREAL"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Pavol CINKANIČ",
        "player_b": "Jaroslav WIENER",
        "date": "6. kolo",
        "player_a_team": "MYSLAVA \"Ž\"",
        "player_b_team": "COKERY"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Martina KOLIBÁROVÁ",
        "player_b": "Milan SUCHÝ",
        "date": "6. kolo",
        "player_a_team": "MYSLAVA \"Ž\"",
        "player_b_team": "COKERY"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Iveta SOLČANIOVÁ",
        "player_b": "Anton STANICKÝ",
        "date": "6. kolo",
        "player_a_team": "MYSLAVA \"Ž\"",
        "player_b_team": "COKERY"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Zuzana GAŽI",
        "player_b": "Jaroslav JANOVSKÝ",
        "date": "6. kolo",
        "player_a_team": "MYSLAVA \"Ž\"",
        "player_b_team": "COKERY"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Pavol CINKANIČ",
        "player_b": "Milan SUCHÝ",
        "date": "6. kolo",
        "player_a_team": "MYSLAVA \"Ž\"",
        "player_b_team": "COKERY"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Martina KOLIBÁROVÁ",
        "player_b": "Anton STANICKÝ",
        "date": "6. kolo",
        "player_a_team": "MYSLAVA \"Ž\"",
        "player_b_team": "COKERY"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Iveta SOLČANIOVÁ",
        "player_b": "Jaroslav JANOVSKÝ",
        "date": "6. kolo",
        "player_a_team": "MYSLAVA \"Ž\"",
        "player_b_team": "COKERY"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Zuzana GAŽI",
        "player_b": "Jaroslav WIENER",
        "date": "6. kolo",
        "player_a_team": "MYSLAVA \"Ž\"",
        "player_b_team": "COKERY"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Pavol CINKANIČ",
        "player_b": "Anton STANICKÝ",
        "date": "6. kolo",
        "player_a_team": "MYSLAVA \"Ž\"",
        "player_b_team": "COKERY"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Martina KOLIBÁROVÁ",
        "player_b": "Jaroslav JANOVSKÝ",
        "date": "6. kolo",
        "player_a_team": "MYSLAVA \"Ž\"",
        "player_b_team": "COKERY"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Jarmila SOMOŠOVÁ",
        "player_b": "Jaroslav WIENER",
        "date": "6. kolo",
        "player_a_team": "MYSLAVA \"Ž\"",
        "player_b_team": "COKERY"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Zuzana GAŽI",
        "player_b": "Milan SUCHÝ",
        "date": "6. kolo",
        "player_a_team": "MYSLAVA \"Ž\"",
        "player_b_team": "COKERY"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Pavol CINKANIČ",
        "player_b": "Jaroslav JANOVSKÝ",
        "date": "6. kolo",
        "player_a_team": "MYSLAVA \"Ž\"",
        "player_b_team": "COKERY"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Martina KOLIBÁROVÁ",
        "player_b": "Jaroslav WIENER",
        "date": "6. kolo",
        "player_a_team": "MYSLAVA \"Ž\"",
        "player_b_team": "COKERY"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Iveta SOLČANIOVÁ",
        "player_b": "Milan SUCHÝ",
        "date": "6. kolo",
        "player_a_team": "MYSLAVA \"Ž\"",
        "player_b_team": "COKERY"
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Jarmila SOMOŠOVÁ",
        "player_b": "Anton STANICKÝ",
        "date": "6. kolo",
        "player_a_team": "MYSLAVA \"Ž\"",
        "player_b_team": "COKERY"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Eduard KUDLA",
        "player_b": "Ľubomír BENDZÁK",
        "date": "6. kolo",
        "player_a_team": "TTC KVP",
        "player_b_team": "TT TEAM"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Karol GERGELY",
        "player_b": "Marek SIMKO",
        "date": "6. kolo",
        "player_a_team": "TTC KVP",
        "player_b_team": "TT TEAM"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Tomáš BEKECS",
        "player_b": "Andrej FELBER",
        "date": "6. kolo",
        "player_a_team": "TTC KVP",
        "player_b_team": "TT TEAM"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Andrej MAKRANSKÝ",
        "player_b": "Juraj POLYAK",
        "date": "6. kolo",
        "player_a_team": "TTC KVP",
        "player_b_team": "TT TEAM"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Eduard KUDLA",
        "player_b": "Marek SIMKO",
        "date": "6. kolo",
        "player_a_team": "TTC KVP",
        "player_b_team": "TT TEAM"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Karol GERGELY",
        "player_b": "Andrej FELBER",
        "date": "6. kolo",
        "player_a_team": "TTC KVP",
        "player_b_team": "TT TEAM"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Tomáš BEKECS",
        "player_b": "Juraj POLYAK",
        "date": "6. kolo",
        "player_a_team": "TTC KVP",
        "player_b_team": "TT TEAM"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Andrej MAKRANSKÝ",
        "player_b": "Ľubomír BENDZÁK",
        "date": "6. kolo",
        "player_a_team": "TTC KVP",
        "player_b_team": "TT TEAM"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Eduard KUDLA",
        "player_b": "Andrej FELBER",
        "date": "6. kolo",
        "player_a_team": "TTC KVP",
        "player_b_team": "TT TEAM"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Karol GERGELY",
        "player_b": "Juraj POLYAK",
        "date": "6. kolo",
        "player_a_team": "TTC KVP",
        "player_b_team": "TT TEAM"
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "Tomáš BEKECS",
        "player_b": "Ľubomír BENDZÁK",
        "date": "6. kolo",
        "player_a_team": "TTC KVP",
        "player_b_team": "TT TEAM"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Andrej MAKRANSKÝ",
        "player_b": "Marek SIMKO",
        "date": "6. kolo",
        "player_a_team": "TTC KVP",
        "player_b_team": "TT TEAM"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Eduard KUDLA",
        "player_b": "Juraj POLYAK",
        "date": "6. kolo",
        "player_a_team": "TTC KVP",
        "player_b_team": "TT TEAM"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Karol GERGELY",
        "player_b": "Ľubomír BENDZÁK",
        "date": "6. kolo",
        "player_a_team": "TTC KVP",
        "player_b_team": "TT TEAM"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Tomáš BEKECS",
        "player_b": "Marek SIMKO",
        "date": "6. kolo",
        "player_a_team": "TTC KVP",
        "player_b_team": "TT TEAM"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Andrej MAKRANSKÝ",
        "player_b": "Andrej FELBER",
        "date": "6. kolo",
        "player_a_team": "TTC KVP",
        "player_b_team": "TT TEAM"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Jozef MOHŇANSKÝ",
        "player_b": "Slavomír KRÁLIK",
        "date": "6. kolo",
        "player_a_team": "METALKOV",
        "player_b_team": "BOMBERE"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Ľubomír VARTÁS",
        "player_b": "Ondrej KRÁLIK",
        "date": "6. kolo",
        "player_a_team": "METALKOV",
        "player_b_team": "BOMBERE"
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "František CZINGELY",
        "player_b": "Ján GUZY",
        "date": "6. kolo",
        "player_a_team": "METALKOV",
        "player_b_team": "BOMBERE"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Juraj BUCHNER",
        "player_b": "Marek PATAKY",
        "date": "6. kolo",
        "player_a_team": "METALKOV",
        "player_b_team": "BOMBERE"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Jozef MOHŇANSKÝ",
        "player_b": "Ondrej KRÁLIK",
        "date": "6. kolo",
        "player_a_team": "METALKOV",
        "player_b_team": "BOMBERE"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Ľubomír VARTÁS",
        "player_b": "Ján GUZY",
        "date": "6. kolo",
        "player_a_team": "METALKOV",
        "player_b_team": "BOMBERE"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Vladimír LÁSLOFI",
        "player_b": "Marek PATAKY",
        "date": "6. kolo",
        "player_a_team": "METALKOV",
        "player_b_team": "BOMBERE"
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Juraj BUCHNER",
        "player_b": "Slavomír KRÁLIK",
        "date": "6. kolo",
        "player_a_team": "METALKOV",
        "player_b_team": "BOMBERE"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Jozef MOHŇANSKÝ",
        "player_b": "Ján GUZY",
        "date": "6. kolo",
        "player_a_team": "METALKOV",
        "player_b_team": "BOMBERE"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Ľubomír VARTÁS",
        "player_b": "Marek PATAKY",
        "date": "6. kolo",
        "player_a_team": "METALKOV",
        "player_b_team": "BOMBERE"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "František CZINGELY",
        "player_b": "Slavomír KRÁLIK",
        "date": "6. kolo",
        "player_a_team": "METALKOV",
        "player_b_team": "BOMBERE"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Juraj BUCHNER",
        "player_b": "Ondrej KRÁLIK",
        "date": "6. kolo",
        "player_a_team": "METALKOV",
        "player_b_team": "BOMBERE"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Jozef MOHŇANSKÝ",
        "player_b": "Marek PATAKY",
        "date": "6. kolo",
        "player_a_team": "METALKOV",
        "player_b_team": "BOMBERE"
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Ľubomír VARTÁS",
        "player_b": "Slavomír KRÁLIK",
        "date": "6. kolo",
        "player_a_team": "METALKOV",
        "player_b_team": "BOMBERE"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "František CZINGELY",
        "player_b": "Ondrej KRÁLIK",
        "date": "6. kolo",
        "player_a_team": "METALKOV",
        "player_b_team": "BOMBERE"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Vladimír LÁSLOFI",
        "player_b": "Ján GUZY",
        "date": "6. kolo",
        "player_a_team": "METALKOV",
        "player_b_team": "BOMBERE"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Ľubomír HOCHVART",
        "player_b": "David LEŠUNDÁK",
        "date": "6. kolo",
        "player_a_team": "REPREX",
        "player_b_team": "SKP \"B\""
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Miloslav KOCÚR",
        "player_b": "Martin ĎURIŠIN",
        "date": "6. kolo",
        "player_a_team": "REPREX",
        "player_b_team": "SKP \"B\""
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Ján PETRŽALA",
        "player_b": "Marek SKYBA",
        "date": "6. kolo",
        "player_a_team": "REPREX",
        "player_b_team": "SKP \"B\""
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Peter RUSNÁK",
        "player_b": "Peter GABOŠ",
        "date": "6. kolo",
        "player_a_team": "REPREX",
        "player_b_team": "SKP \"B\""
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Milan PAŽIČ",
        "player_b": "Martin ĎURIŠIN",
        "date": "6. kolo",
        "player_a_team": "REPREX",
        "player_b_team": "SKP \"B\""
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Miloslav KOCÚR",
        "player_b": "Marek SKYBA",
        "date": "6. kolo",
        "player_a_team": "REPREX",
        "player_b_team": "SKP \"B\""
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Ján PETRŽALA",
        "player_b": "Peter GABOŠ",
        "date": "6. kolo",
        "player_a_team": "REPREX",
        "player_b_team": "SKP \"B\""
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Peter RUSNÁK",
        "player_b": "David LEŠUNDÁK",
        "date": "6. kolo",
        "player_a_team": "REPREX",
        "player_b_team": "SKP \"B\""
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Ľubomír HOCHVART",
        "player_b": "Marek SKYBA",
        "date": "6. kolo",
        "player_a_team": "REPREX",
        "player_b_team": "SKP \"B\""
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Miloslav KOCÚR",
        "player_b": "Peter GABOŠ",
        "date": "6. kolo",
        "player_a_team": "REPREX",
        "player_b_team": "SKP \"B\""
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Milan PAŽIČ",
        "player_b": "David LEŠUNDÁK",
        "date": "6. kolo",
        "player_a_team": "REPREX",
        "player_b_team": "SKP \"B\""
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Peter RUSNÁK",
        "player_b": "Martin ĎURIŠIN",
        "date": "6. kolo",
        "player_a_team": "REPREX",
        "player_b_team": "SKP \"B\""
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Ľubomír HOCHVART",
        "player_b": "Peter GABOŠ",
        "date": "6. kolo",
        "player_a_team": "REPREX",
        "player_b_team": "SKP \"B\""
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Miloslav KOCÚR",
        "player_b": "David LEŠUNDÁK",
        "date": "6. kolo",
        "player_a_team": "REPREX",
        "player_b_team": "SKP \"B\""
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Ján PETRŽALA",
        "player_b": "Martin ĎURIŠIN",
        "date": "6. kolo",
        "player_a_team": "REPREX",
        "player_b_team": "SKP \"B\""
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Milan PAŽIČ",
        "player_b": "Marek SKYBA",
        "date": "6. kolo",
        "player_a_team": "REPREX",
        "player_b_team": "SKP \"B\""
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Jozef HUDÁK/Jozef ZAVACKÝ",
        "player_b": "Radoslav POĽA/Stanislav PČOLA",
        "date": "7. kolo",
        "player_a_team": "EUROCAST",
        "player_b_team": "BERNARD Club",
        "doubles": true
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Patrík TIRPÁK/Julius PILLÁR",
        "player_b": "Roman ČIŽMÁR/Slav. FEČKE",
        "date": "7. kolo",
        "player_a_team": "EUROCAST",
        "player_b_team": "BERNARD Club",
        "doubles": true
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "David LEŠUNDÁK/Martin ĎURIŠIN",
        "player_b": "Karol GERGELY/Tomáš BEKECS",
        "date": "7. kolo",
        "player_a_team": "SKP \"B\"",
        "player_b_team": "TTC KVP",
        "doubles": true
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Marek SKYBA/Michal NINITZ",
        "player_b": "Andrej MAKRANSKÝ/Andrej MAKRANSKÝ ml.",
        "date": "7. kolo",
        "player_a_team": "SKP \"B\"",
        "player_b_team": "TTC KVP",
        "doubles": true
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Peter POLÁK/Vilo POLÁK",
        "player_b": "Martin MUCHA/Matúš HRČKA",
        "date": "7. kolo",
        "player_a_team": "SOŠ Ž",
        "player_b_team": "ASTORIA FIT",
        "doubles": true
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Slavomír KEŠELÁK/Igor BAŠTI",
        "player_b": "Marek KUNDRIK/Viktor ŠIDLÍK",
        "date": "7. kolo",
        "player_a_team": "SOŠ Ž",
        "player_b_team": "ASTORIA FIT",
        "doubles": true
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Jaroslav JANOVSKÝ/Anton STANICKÝ",
        "player_b": "Štefan LISSÝ/Martin SOĽÁR",
        "date": "7. kolo",
        "player_a_team": "COKERY",
        "player_b_team": "SKP \"A\"",
        "doubles": true
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Milan SUCHÝ/Jaroslav WIENER",
        "player_b": "Miroslav KOSCELANSKÝ/Peter JAKUBEC",
        "date": "7. kolo",
        "player_a_team": "COKERY",
        "player_b_team": "SKP \"A\"",
        "doubles": true
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Peter ŠTEFANCO/Andrej KARLIK",
        "player_b": "František CZINGELY/Ľubomír VARTÁS",
        "date": "7. kolo",
        "player_a_team": "KOMÉTA KE",
        "player_b_team": "METALKOV",
        "doubles": true
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Peter BARSA/Juraj ANTOŠ",
        "player_b": "Juraj BUCHNER/Jozef MOHŇANSKÝ",
        "date": "7. kolo",
        "player_a_team": "KOMÉTA KE",
        "player_b_team": "METALKOV",
        "doubles": true
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Slavomír KRÁLIK/Ján GUZY",
        "player_b": "Milan ŠOLC/Marián HOVAN",
        "date": "7. kolo",
        "player_a_team": "BOMBERE",
        "player_b_team": "MYSLAVA",
        "doubles": true
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Marek PATAKY/Ján ŘIHAK",
        "player_b": "Ján FOTTA/Jozef FOTTA",
        "date": "7. kolo",
        "player_a_team": "BOMBERE",
        "player_b_team": "MYSLAVA",
        "doubles": true
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Peter RUŽIČKA/Ľubomír BENDZÁK",
        "player_b": "Izabela VARGOVÁ/Martina KOLIBÁROVÁ",
        "date": "7. kolo",
        "player_a_team": "TT TEAM",
        "player_b_team": "MYSLAVA \"Ž\"",
        "doubles": true
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Juraj POLYAK/Andrej FELBER",
        "player_b": "Pavol CINKANIČ/Jarmila SOMOŠOVÁ",
        "date": "7. kolo",
        "player_a_team": "TT TEAM",
        "player_b_team": "MYSLAVA \"Ž\"",
        "doubles": true
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Milan GAJTKO/Luboš MRÁZ",
        "player_b": "Milan PAŽIČ/Ľubomír HOCHVART",
        "date": "7. kolo",
        "player_a_team": "MONTREAL",
        "player_b_team": "REPREX",
        "doubles": true
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Milan MICHLOVIČ/Štefan PČOLA",
        "player_b": "Miloslav KOCÚR/Ján PETRŽALA",
        "date": "7. kolo",
        "player_a_team": "MONTREAL",
        "player_b_team": "REPREX",
        "doubles": true
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Julius PILLÁR",
        "player_b": "Radoslav POĽA",
        "date": "7. kolo",
        "player_a_team": "EUROCAST",
        "player_b_team": "BERNARD Club"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Patrík TIRPÁK",
        "player_b": "Slav. FEČKE",
        "date": "7. kolo",
        "player_a_team": "EUROCAST",
        "player_b_team": "BERNARD Club"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Jozef ZAVACKÝ",
        "player_b": "Stanislav PČOLA",
        "date": "7. kolo",
        "player_a_team": "EUROCAST",
        "player_b_team": "BERNARD Club"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Jozef HUDÁK",
        "player_b": "Roman ČIŽMÁR",
        "date": "7. kolo",
        "player_a_team": "EUROCAST",
        "player_b_team": "BERNARD Club"
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "Julius PILLÁR",
        "player_b": "Slav. FEČKE",
        "date": "7. kolo",
        "player_a_team": "EUROCAST",
        "player_b_team": "BERNARD Club"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Patrík TIRPÁK",
        "player_b": "Stanislav PČOLA",
        "date": "7. kolo",
        "player_a_team": "EUROCAST",
        "player_b_team": "BERNARD Club"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Jozef ZAVACKÝ",
        "player_b": "Roman ČIŽMÁR",
        "date": "7. kolo",
        "player_a_team": "EUROCAST",
        "player_b_team": "BERNARD Club"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Jozef HUDÁK",
        "player_b": "Radoslav POĽA",
        "date": "7. kolo",
        "player_a_team": "EUROCAST",
        "player_b_team": "BERNARD Club"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Julius PILLÁR",
        "player_b": "Stanislav PČOLA",
        "date": "7. kolo",
        "player_a_team": "EUROCAST",
        "player_b_team": "BERNARD Club"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Patrík TIRPÁK",
        "player_b": "Roman ČIŽMÁR",
        "date": "7. kolo",
        "player_a_team": "EUROCAST",
        "player_b_team": "BERNARD Club"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Jozef ZAVACKÝ",
        "player_b": "Radoslav POĽA",
        "date": "7. kolo",
        "player_a_team": "EUROCAST",
        "player_b_team": "BERNARD Club"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Jozef HUDÁK",
        "player_b": "Slav. FEČKE",
        "date": "7. kolo",
        "player_a_team": "EUROCAST",
        "player_b_team": "BERNARD Club"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Julius PILLÁR",
        "player_b": "Roman ČIŽMÁR",
        "date": "7. kolo",
        "player_a_team": "EUROCAST",
        "player_b_team": "BERNARD Club"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Patrík TIRPÁK",
        "player_b": "Radoslav POĽA",
        "date": "7. kolo",
        "player_a_team": "EUROCAST",
        "player_b_team": "BERNARD Club"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Jozef ZAVACKÝ",
        "player_b": "Slav. FEČKE",
        "date": "7. kolo",
        "player_a_team": "EUROCAST",
        "player_b_team": "BERNARD Club"
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "Jozef HUDÁK",
        "player_b": "Stanislav PČOLA",
        "date": "7. kolo",
        "player_a_team": "EUROCAST",
        "player_b_team": "BERNARD Club"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Michal NINITZ",
        "player_b": "Karol GERGELY",
        "date": "7. kolo",
        "player_a_team": "SKP \"B\"",
        "player_b_team": "TTC KVP"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Marek SKYBA",
        "player_b": "Tomáš BEKECS",
        "date": "7. kolo",
        "player_a_team": "SKP \"B\"",
        "player_b_team": "TTC KVP"
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "David LEŠUNDÁK",
        "player_b": "Andrej MAKRANSKÝ",
        "date": "7. kolo",
        "player_a_team": "SKP \"B\"",
        "player_b_team": "TTC KVP"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Martin ĎURIŠIN",
        "player_b": "Andrej MAKRANSKÝ ml.",
        "date": "7. kolo",
        "player_a_team": "SKP \"B\"",
        "player_b_team": "TTC KVP"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Michal NINITZ",
        "player_b": "Tomáš BEKECS",
        "date": "7. kolo",
        "player_a_team": "SKP \"B\"",
        "player_b_team": "TTC KVP"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Marek SKYBA",
        "player_b": "Andrej MAKRANSKÝ",
        "date": "7. kolo",
        "player_a_team": "SKP \"B\"",
        "player_b_team": "TTC KVP"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "David LEŠUNDÁK",
        "player_b": "Andrej MAKRANSKÝ ml.",
        "date": "7. kolo",
        "player_a_team": "SKP \"B\"",
        "player_b_team": "TTC KVP"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Martin ĎURIŠIN",
        "player_b": "Karol GERGELY",
        "date": "7. kolo",
        "player_a_team": "SKP \"B\"",
        "player_b_team": "TTC KVP"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Michal NINITZ",
        "player_b": "Andrej MAKRANSKÝ",
        "date": "7. kolo",
        "player_a_team": "SKP \"B\"",
        "player_b_team": "TTC KVP"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Marek SKYBA",
        "player_b": "Andrej MAKRANSKÝ ml.",
        "date": "7. kolo",
        "player_a_team": "SKP \"B\"",
        "player_b_team": "TTC KVP"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "David LEŠUNDÁK",
        "player_b": "Karol GERGELY",
        "date": "7. kolo",
        "player_a_team": "SKP \"B\"",
        "player_b_team": "TTC KVP"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Martin ĎURIŠIN",
        "player_b": "Tomáš BEKECS",
        "date": "7. kolo",
        "player_a_team": "SKP \"B\"",
        "player_b_team": "TTC KVP"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Michal NINITZ",
        "player_b": "Andrej MAKRANSKÝ ml.",
        "date": "7. kolo",
        "player_a_team": "SKP \"B\"",
        "player_b_team": "TTC KVP"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Marek SKYBA",
        "player_b": "Karol GERGELY",
        "date": "7. kolo",
        "player_a_team": "SKP \"B\"",
        "player_b_team": "TTC KVP"
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "David LEŠUNDÁK",
        "player_b": "Tomáš BEKECS",
        "date": "7. kolo",
        "player_a_team": "SKP \"B\"",
        "player_b_team": "TTC KVP"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Martin ĎURIŠIN",
        "player_b": "Andrej MAKRANSKÝ",
        "date": "7. kolo",
        "player_a_team": "SKP \"B\"",
        "player_b_team": "TTC KVP"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Peter POLÁK",
        "player_b": "Ladislav RADVÁNI",
        "date": "7. kolo",
        "player_a_team": "SOŠ Ž",
        "player_b_team": "ASTORIA FIT"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Igor BAŠTI",
        "player_b": "Martin MUCHA",
        "date": "7. kolo",
        "player_a_team": "SOŠ Ž",
        "player_b_team": "ASTORIA FIT"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Vilo POLÁK",
        "player_b": "Matúš HRČKA",
        "date": "7. kolo",
        "player_a_team": "SOŠ Ž",
        "player_b_team": "ASTORIA FIT"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Slavomír KEŠELÁK",
        "player_b": "Marek KUNDRIK",
        "date": "7. kolo",
        "player_a_team": "SOŠ Ž",
        "player_b_team": "ASTORIA FIT"
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Peter POLÁK",
        "player_b": "Martin MUCHA",
        "date": "7. kolo",
        "player_a_team": "SOŠ Ž",
        "player_b_team": "ASTORIA FIT"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Igor BAŠTI",
        "player_b": "Viktor ŠIDLÍK",
        "date": "7. kolo",
        "player_a_team": "SOŠ Ž",
        "player_b_team": "ASTORIA FIT"
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "Slavomír KEŠELÁK",
        "player_b": "Marek KUNDRIK",
        "date": "7. kolo",
        "player_a_team": "SOŠ Ž",
        "player_b_team": "ASTORIA FIT"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Vilo POLÁK",
        "player_b": "Ladislav RADVÁNI",
        "date": "7. kolo",
        "player_a_team": "SOŠ Ž",
        "player_b_team": "ASTORIA FIT"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Peter POLÁK",
        "player_b": "Matúš HRČKA",
        "date": "7. kolo",
        "player_a_team": "SOŠ Ž",
        "player_b_team": "ASTORIA FIT"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Igor BAŠTI",
        "player_b": "Marek KUNDRIK",
        "date": "7. kolo",
        "player_a_team": "SOŠ Ž",
        "player_b_team": "ASTORIA FIT"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Slavomír KEŠELÁK",
        "player_b": "Ladislav RADVÁNI",
        "date": "7. kolo",
        "player_a_team": "SOŠ Ž",
        "player_b_team": "ASTORIA FIT"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Vilo POLÁK",
        "player_b": "Martin MUCHA",
        "date": "7. kolo",
        "player_a_team": "SOŠ Ž",
        "player_b_team": "ASTORIA FIT"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Peter POLÁK",
        "player_b": "Viktor ŠIDLÍK",
        "date": "7. kolo",
        "player_a_team": "SOŠ Ž",
        "player_b_team": "ASTORIA FIT"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Igor BAŠTI",
        "player_b": "Viktor ŠIDLÍK",
        "date": "7. kolo",
        "player_a_team": "SOŠ Ž",
        "player_b_team": "ASTORIA FIT"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Slavomír KEŠELÁK",
        "player_b": "Martin MUCHA",
        "date": "7. kolo",
        "player_a_team": "SOŠ Ž",
        "player_b_team": "ASTORIA FIT"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Vilo POLÁK",
        "player_b": "Matúš HRČKA",
        "date": "7. kolo",
        "player_a_team": "SOŠ Ž",
        "player_b_team": "ASTORIA FIT"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Milan SUCHÝ",
        "player_b": "Miroslav KOSCELANSKÝ",
        "date": "7. kolo",
        "player_a_team": "COKERY",
        "player_b_team": "SKP \"A\""
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Jaroslav WIENER",
        "player_b": "Peter JAKUBEC",
        "date": "7. kolo",
        "player_a_team": "COKERY",
        "player_b_team": "SKP \"A\""
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Anton STANICKÝ",
        "player_b": "Štefan LISSÝ",
        "date": "7. kolo",
        "player_a_team": "COKERY",
        "player_b_team": "SKP \"A\""
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Jaroslav JANOVSKÝ",
        "player_b": "Martin SOĽÁR",
        "date": "7. kolo",
        "player_a_team": "COKERY",
        "player_b_team": "SKP \"A\""
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Milan SUCHÝ",
        "player_b": "Peter JAKUBEC",
        "date": "7. kolo",
        "player_a_team": "COKERY",
        "player_b_team": "SKP \"A\""
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Jaroslav WIENER",
        "player_b": "Štefan LISSÝ",
        "date": "7. kolo",
        "player_a_team": "COKERY",
        "player_b_team": "SKP \"A\""
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Anton STANICKÝ",
        "player_b": "Miroslav KOSCELANSKÝ",
        "date": "7. kolo",
        "player_a_team": "COKERY",
        "player_b_team": "SKP \"A\""
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Jaroslav JANOVSKÝ",
        "player_b": "Martin SOĽÁR",
        "date": "7. kolo",
        "player_a_team": "COKERY",
        "player_b_team": "SKP \"A\""
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Milan SUCHÝ",
        "player_b": "Štefan LISSÝ",
        "date": "7. kolo",
        "player_a_team": "COKERY",
        "player_b_team": "SKP \"A\""
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Jaroslav WIENER",
        "player_b": "Martin SOĽÁR",
        "date": "7. kolo",
        "player_a_team": "COKERY",
        "player_b_team": "SKP \"A\""
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Anton STANICKÝ",
        "player_b": "Miroslav KOSCELANSKÝ",
        "date": "7. kolo",
        "player_a_team": "COKERY",
        "player_b_team": "SKP \"A\""
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Jaroslav JANOVSKÝ",
        "player_b": "Peter JAKUBEC",
        "date": "7. kolo",
        "player_a_team": "COKERY",
        "player_b_team": "SKP \"A\""
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Milan SUCHÝ",
        "player_b": "Martin SOĽÁR",
        "date": "7. kolo",
        "player_a_team": "COKERY",
        "player_b_team": "SKP \"A\""
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Jaroslav WIENER",
        "player_b": "Miroslav KOSCELANSKÝ",
        "date": "7. kolo",
        "player_a_team": "COKERY",
        "player_b_team": "SKP \"A\""
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Anton STANICKÝ",
        "player_b": "Peter JAKUBEC",
        "date": "7. kolo",
        "player_a_team": "COKERY",
        "player_b_team": "SKP \"A\""
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Jaroslav JANOVSKÝ",
        "player_b": "Štefan LISSÝ",
        "date": "7. kolo",
        "player_a_team": "COKERY",
        "player_b_team": "SKP \"A\""
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "Juraj ANTOŠ",
        "player_b": "František CZINGELY",
        "date": "7. kolo",
        "player_a_team": "KOMÉTA KE",
        "player_b_team": "METALKOV"
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "Peter BARSA",
        "player_b": "Ľubomír VARTÁS",
        "date": "7. kolo",
        "player_a_team": "KOMÉTA KE",
        "player_b_team": "METALKOV"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Peter ŠTEFANCO",
        "player_b": "Juraj BUCHNER",
        "date": "7. kolo",
        "player_a_team": "KOMÉTA KE",
        "player_b_team": "METALKOV"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Milan KRASNAY",
        "player_b": "Jozef MOHŇANSKÝ",
        "date": "7. kolo",
        "player_a_team": "KOMÉTA KE",
        "player_b_team": "METALKOV"
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "Juraj ANTOŠ",
        "player_b": "Ľubomír VARTÁS",
        "date": "7. kolo",
        "player_a_team": "KOMÉTA KE",
        "player_b_team": "METALKOV"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Peter BARSA",
        "player_b": "Vladimír LÁSLOFI",
        "date": "7. kolo",
        "player_a_team": "KOMÉTA KE",
        "player_b_team": "METALKOV"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Andrej KARLIK",
        "player_b": "Jozef MOHŇANSKÝ",
        "date": "7. kolo",
        "player_a_team": "KOMÉTA KE",
        "player_b_team": "METALKOV"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Milan KRASNAY",
        "player_b": "František CZINGELY",
        "date": "7. kolo",
        "player_a_team": "KOMÉTA KE",
        "player_b_team": "METALKOV"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Juraj ANTOŠ",
        "player_b": "Juraj BUCHNER",
        "date": "7. kolo",
        "player_a_team": "KOMÉTA KE",
        "player_b_team": "METALKOV"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Peter BARSA",
        "player_b": "Jozef MOHŇANSKÝ",
        "date": "7. kolo",
        "player_a_team": "KOMÉTA KE",
        "player_b_team": "METALKOV"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Peter ŠTEFANCO",
        "player_b": "František CZINGELY",
        "date": "7. kolo",
        "player_a_team": "KOMÉTA KE",
        "player_b_team": "METALKOV"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Ján GAJDOŠ",
        "player_b": "Ľubomír VARTÁS",
        "date": "7. kolo",
        "player_a_team": "KOMÉTA KE",
        "player_b_team": "METALKOV"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Ján GAJDOŠ",
        "player_b": "Jozef MOHŇANSKÝ",
        "date": "7. kolo",
        "player_a_team": "KOMÉTA KE",
        "player_b_team": "METALKOV"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Peter BARSA",
        "player_b": "František CZINGELY",
        "date": "7. kolo",
        "player_a_team": "KOMÉTA KE",
        "player_b_team": "METALKOV"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Andrej KARLIK",
        "player_b": "Ľubomír VARTÁS",
        "date": "7. kolo",
        "player_a_team": "KOMÉTA KE",
        "player_b_team": "METALKOV"
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Milan KRASNAY",
        "player_b": "Juraj BUCHNER",
        "date": "7. kolo",
        "player_a_team": "KOMÉTA KE",
        "player_b_team": "METALKOV"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Ján ŘIHAK",
        "player_b": "Ján FOTTA",
        "date": "7. kolo",
        "player_a_team": "BOMBERE",
        "player_b_team": "MYSLAVA"
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Peter VYHONSKÝ",
        "player_b": "Vladimír VARGOVČÁK",
        "date": "7. kolo",
        "player_a_team": "BOMBERE",
        "player_b_team": "MYSLAVA"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Slavomír KRÁLIK",
        "player_b": "Jozef FOTTA",
        "date": "7. kolo",
        "player_a_team": "BOMBERE",
        "player_b_team": "MYSLAVA"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Marek PATAKY",
        "player_b": "Marián HOVAN",
        "date": "7. kolo",
        "player_a_team": "BOMBERE",
        "player_b_team": "MYSLAVA"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Ján GUZY",
        "player_b": "Vladimír VARGOVČÁK",
        "date": "7. kolo",
        "player_a_team": "BOMBERE",
        "player_b_team": "MYSLAVA"
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Peter VYHONSKÝ",
        "player_b": "Jozef FOTTA",
        "date": "7. kolo",
        "player_a_team": "BOMBERE",
        "player_b_team": "MYSLAVA"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Slavomír KRÁLIK",
        "player_b": "Marián HOVAN",
        "date": "7. kolo",
        "player_a_team": "BOMBERE",
        "player_b_team": "MYSLAVA"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Marek PATAKY",
        "player_b": "Ján FOTTA",
        "date": "7. kolo",
        "player_a_team": "BOMBERE",
        "player_b_team": "MYSLAVA"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Ján ŘIHAK",
        "player_b": "Jozef FOTTA",
        "date": "7. kolo",
        "player_a_team": "BOMBERE",
        "player_b_team": "MYSLAVA"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Peter VYHONSKÝ",
        "player_b": "Marián HOVAN",
        "date": "7. kolo",
        "player_a_team": "BOMBERE",
        "player_b_team": "MYSLAVA"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Ján GUZY",
        "player_b": "Milan ŠOLC",
        "date": "7. kolo",
        "player_a_team": "BOMBERE",
        "player_b_team": "MYSLAVA"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Marek PATAKY",
        "player_b": "Vladimír VARGOVČÁK",
        "date": "7. kolo",
        "player_a_team": "BOMBERE",
        "player_b_team": "MYSLAVA"
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "Ján ŘIHAK",
        "player_b": "Marián HOVAN",
        "date": "7. kolo",
        "player_a_team": "BOMBERE",
        "player_b_team": "MYSLAVA"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Peter VYHONSKÝ",
        "player_b": "Milan ŠOLC",
        "date": "7. kolo",
        "player_a_team": "BOMBERE",
        "player_b_team": "MYSLAVA"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Slavomír KRÁLIK",
        "player_b": "Vladimír VARGOVČÁK",
        "date": "7. kolo",
        "player_a_team": "BOMBERE",
        "player_b_team": "MYSLAVA"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Ján GUZY",
        "player_b": "Jozef FOTTA",
        "date": "7. kolo",
        "player_a_team": "BOMBERE",
        "player_b_team": "MYSLAVA"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Juraj POLYAK",
        "player_b": "Zuzana GAŽI",
        "date": "7. kolo",
        "player_a_team": "TT TEAM",
        "player_b_team": "MYSLAVA \"Ž\""
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "Andrej FELBER",
        "player_b": "Martina KOLIBÁROVÁ",
        "date": "7. kolo",
        "player_a_team": "TT TEAM",
        "player_b_team": "MYSLAVA \"Ž\""
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Ľubomír BENDZÁK",
        "player_b": "Pavol CINKANIČ",
        "date": "7. kolo",
        "player_a_team": "TT TEAM",
        "player_b_team": "MYSLAVA \"Ž\""
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Marek SIMKO",
        "player_b": "Izabela VARGOVÁ",
        "date": "7. kolo",
        "player_a_team": "TT TEAM",
        "player_b_team": "MYSLAVA \"Ž\""
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Peter RUŽIČKA",
        "player_b": "Martina KOLIBÁROVÁ",
        "date": "7. kolo",
        "player_a_team": "TT TEAM",
        "player_b_team": "MYSLAVA \"Ž\""
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Andrej FELBER",
        "player_b": "Jarmila SOMOŠOVÁ",
        "date": "7. kolo",
        "player_a_team": "TT TEAM",
        "player_b_team": "MYSLAVA \"Ž\""
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Ľubomír BENDZÁK",
        "player_b": "Izabela VARGOVÁ",
        "date": "7. kolo",
        "player_a_team": "TT TEAM",
        "player_b_team": "MYSLAVA \"Ž\""
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Marek SIMKO",
        "player_b": "Zuzana GAŽI",
        "date": "7. kolo",
        "player_a_team": "TT TEAM",
        "player_b_team": "MYSLAVA \"Ž\""
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "Juraj POLYAK",
        "player_b": "Pavol CINKANIČ",
        "date": "7. kolo",
        "player_a_team": "TT TEAM",
        "player_b_team": "MYSLAVA \"Ž\""
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Andrej FELBER",
        "player_b": "Izabela VARGOVÁ",
        "date": "7. kolo",
        "player_a_team": "TT TEAM",
        "player_b_team": "MYSLAVA \"Ž\""
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Peter RUŽIČKA",
        "player_b": "Jarmila SOMOŠOVÁ",
        "date": "7. kolo",
        "player_a_team": "TT TEAM",
        "player_b_team": "MYSLAVA \"Ž\""
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "Marek SIMKO",
        "player_b": "Martina KOLIBÁROVÁ",
        "date": "7. kolo",
        "player_a_team": "TT TEAM",
        "player_b_team": "MYSLAVA \"Ž\""
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Juraj POLYAK",
        "player_b": "Jarmila SOMOŠOVÁ",
        "date": "7. kolo",
        "player_a_team": "TT TEAM",
        "player_b_team": "MYSLAVA \"Ž\""
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Andrej FELBER",
        "player_b": "Zuzana GAŽI",
        "date": "7. kolo",
        "player_a_team": "TT TEAM",
        "player_b_team": "MYSLAVA \"Ž\""
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "Ľubomír BENDZÁK",
        "player_b": "Martina KOLIBÁROVÁ",
        "date": "7. kolo",
        "player_a_team": "TT TEAM",
        "player_b_team": "MYSLAVA \"Ž\""
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "Marek SIMKO",
        "player_b": "Pavol CINKANIČ",
        "date": "7. kolo",
        "player_a_team": "TT TEAM",
        "player_b_team": "MYSLAVA \"Ž\""
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Milan MICHLOVIČ",
        "player_b": "Ľubomír HOCHVART",
        "date": "7. kolo",
        "player_a_team": "MONTREAL",
        "player_b_team": "REPREX"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "M. ZÁRIK",
        "player_b": "Milan PAŽIČ",
        "date": "7. kolo",
        "player_a_team": "MONTREAL",
        "player_b_team": "REPREX"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Milan GAJTKO",
        "player_b": "Ján PETRŽALA",
        "date": "7. kolo",
        "player_a_team": "MONTREAL",
        "player_b_team": "REPREX"
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Štefan PČOLA",
        "player_b": "Miloslav KOCÚR",
        "date": "7. kolo",
        "player_a_team": "MONTREAL",
        "player_b_team": "REPREX"
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Luboš MRÁZ",
        "player_b": "Milan PAŽIČ",
        "date": "7. kolo",
        "player_a_team": "MONTREAL",
        "player_b_team": "REPREX"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "WO",
        "player_b": "WO",
        "date": "7. kolo",
        "player_a_team": "MONTREAL",
        "player_b_team": "REPREX"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "M. ZÁRIK",
        "player_b": "Ján PETRŽALA",
        "date": "7. kolo",
        "player_a_team": "MONTREAL",
        "player_b_team": "REPREX"
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "Milan GAJTKO",
        "player_b": "Miloslav KOCÚR",
        "date": "7. kolo",
        "player_a_team": "MONTREAL",
        "player_b_team": "REPREX"
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Štefan PČOLA",
        "player_b": "Ľubomír HOCHVART",
        "date": "7. kolo",
        "player_a_team": "MONTREAL",
        "player_b_team": "REPREX"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Milan MICHLOVIČ",
        "player_b": "Ján PETRŽALA",
        "date": "7. kolo",
        "player_a_team": "MONTREAL",
        "player_b_team": "REPREX"
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "M. ZÁRIK",
        "player_b": "Miloslav KOCÚR",
        "date": "7. kolo",
        "player_a_team": "MONTREAL",
        "player_b_team": "REPREX"
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Milan GAJTKO",
        "player_b": "Ľubomír HOCHVART",
        "date": "7. kolo",
        "player_a_team": "MONTREAL",
        "player_b_team": "REPREX"
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "Luboš MRÁZ",
        "player_b": "Miloslav KOCÚR",
        "date": "7. kolo",
        "player_a_team": "MONTREAL",
        "player_b_team": "REPREX"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "M. ZÁRIK",
        "player_b": "Ľubomír HOCHVART",
        "date": "7. kolo",
        "player_a_team": "MONTREAL",
        "player_b_team": "REPREX"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Milan GAJTKO",
        "player_b": "Milan PAŽIČ",
        "date": "7. kolo",
        "player_a_team": "MONTREAL",
        "player_b_team": "REPREX"
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Luboš MRÁZ",
        "player_b": "Ján PETRŽALA",
        "date": "7. kolo",
        "player_a_team": "MONTREAL",
        "player_b_team": "REPREX"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Matúš HRČKA/Marek KUNDRIK",
        "player_b": "Roman ČIŽMÁR/Tibor FIĽAK",
        "date": "8. kolo",
        "player_a_team": "ASTORIA FIT",
        "player_b_team": "BERNARD Club",
        "doubles": true
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Julus WÉBER/Andrej KAČKOŠ",
        "player_b": "Stanislav PČOLA/Radoslav POĽA",
        "date": "8. kolo",
        "player_a_team": "ASTORIA FIT",
        "player_b_team": "BERNARD Club",
        "doubles": true
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Milan ŠOLC/Marián HOVAN",
        "player_b": "Peter MACH/Milan KRASNAY",
        "date": "8. kolo",
        "player_a_team": "MYSLAVA",
        "player_b_team": "KOMÉTA KE",
        "doubles": true
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Ján FOTTA/Jozef FOTTA",
        "player_b": "Juraj ANTOŠ/Peter BARSA",
        "date": "8. kolo",
        "player_a_team": "MYSLAVA",
        "player_b_team": "KOMÉTA KE",
        "doubles": true
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Igor BAŠTI/Jozef MOLNÁR",
        "player_b": "Marek PATAKY/Ján ŘIHAK",
        "date": "8. kolo",
        "player_a_team": "SOŠ Ž",
        "player_b_team": "BOMBERE",
        "doubles": true
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Peter POLÁK/Miro. HANIČÁK",
        "player_b": "Ján GUZY/Slavomír KRÁLIK",
        "date": "8. kolo",
        "player_a_team": "SOŠ Ž",
        "player_b_team": "BOMBERE",
        "doubles": true
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Štefan LISSÝ/Martin SOĽÁR",
        "player_b": "Marek SIMKO/Jarosl ANDRAŠČIK",
        "date": "8. kolo",
        "player_a_team": "SKP \"A\"",
        "player_b_team": "TT TEAM",
        "doubles": true
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Miroslav KOSCELANSKÝ/Peter JAKUBEC",
        "player_b": "Juraj POLYAK/Andrej FELBER",
        "date": "8. kolo",
        "player_a_team": "SKP \"A\"",
        "player_b_team": "TT TEAM",
        "doubles": true
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Martina KOLIBÁROVÁ/Izabela VARGOVÁ",
        "player_b": "Tomáš KUNDRÁK/David LEŠUNDÁK",
        "date": "8. kolo",
        "player_a_team": "MYSLAVA \"Ž\"",
        "player_b_team": "SKP \"B\"",
        "doubles": true
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Jarmila SOMOŠOVÁ/Zuzana GAŽI",
        "player_b": "Michal NINITZ/Peter GABOŠ",
        "date": "8. kolo",
        "player_a_team": "MYSLAVA \"Ž\"",
        "player_b_team": "SKP \"B\"",
        "doubles": true
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Ľubomír HOCHVART/Milan PAŽIČ",
        "player_b": "Peter ŠEBEK st./Jozef HUDÁK",
        "date": "8. kolo",
        "player_a_team": "REPREX",
        "player_b_team": "EUROCAST",
        "doubles": true
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Ján PETRŽALA/Štefan VENDEL",
        "player_b": "Julius PILLÁR/Patrík TIRPÁK",
        "date": "8. kolo",
        "player_a_team": "REPREX",
        "player_b_team": "EUROCAST",
        "doubles": true
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Eduard KUDLA/Andrej MAKRANSKÝ",
        "player_b": "Milan GAJTKO/M. ZÁRIK",
        "date": "8. kolo",
        "player_a_team": "TTC KVP",
        "player_b_team": "MONTREAL",
        "doubles": true
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Tomáš BEKECS/Karol GERGELY",
        "player_b": "Milan MICHLOVIČ/Štefan PČOLA",
        "date": "8. kolo",
        "player_a_team": "TTC KVP",
        "player_b_team": "MONTREAL",
        "doubles": true
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "František CZINGELY/Csaba BECSE",
        "player_b": "Milan SUCHÝ/Igor TKÁČ",
        "date": "8. kolo",
        "player_a_team": "METALKOV",
        "player_b_team": "COKERY",
        "doubles": true
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Juraj BUCHNER/Jozef MOHŇANSKÝ",
        "player_b": "Jaroslav WIENER/Anton STANICKÝ",
        "date": "8. kolo",
        "player_a_team": "METALKOV",
        "player_b_team": "COKERY",
        "doubles": true
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Andrej KAČKOŠ",
        "player_b": "Tibor FIĽAK",
        "date": "8. kolo",
        "player_a_team": "ASTORIA FIT",
        "player_b_team": "BERNARD Club"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Matúš HRČKA",
        "player_b": "Stanislav PČOLA",
        "date": "8. kolo",
        "player_a_team": "ASTORIA FIT",
        "player_b_team": "BERNARD Club"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Viktor ŠIDLÍK",
        "player_b": "Radoslav POĽA",
        "date": "8. kolo",
        "player_a_team": "ASTORIA FIT",
        "player_b_team": "BERNARD Club"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Marek KUNDRIK",
        "player_b": "Roman ČIŽMÁR",
        "date": "8. kolo",
        "player_a_team": "ASTORIA FIT",
        "player_b_team": "BERNARD Club"
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "Julus WÉBER",
        "player_b": "Stanislav PČOLA",
        "date": "8. kolo",
        "player_a_team": "ASTORIA FIT",
        "player_b_team": "BERNARD Club"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Matúš HRČKA",
        "player_b": "Radoslav POĽA",
        "date": "8. kolo",
        "player_a_team": "ASTORIA FIT",
        "player_b_team": "BERNARD Club"
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Viktor ŠIDLÍK",
        "player_b": "Roman ČIŽMÁR",
        "date": "8. kolo",
        "player_a_team": "ASTORIA FIT",
        "player_b_team": "BERNARD Club"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Marek KUNDRIK",
        "player_b": "Tibor FIĽAK",
        "date": "8. kolo",
        "player_a_team": "ASTORIA FIT",
        "player_b_team": "BERNARD Club"
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "Andrej KAČKOŠ",
        "player_b": "Radoslav POĽA",
        "date": "8. kolo",
        "player_a_team": "ASTORIA FIT",
        "player_b_team": "BERNARD Club"
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Matúš HRČKA",
        "player_b": "Roman ČIŽMÁR",
        "date": "8. kolo",
        "player_a_team": "ASTORIA FIT",
        "player_b_team": "BERNARD Club"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Julus WÉBER",
        "player_b": "Slav. FEČKE",
        "date": "8. kolo",
        "player_a_team": "ASTORIA FIT",
        "player_b_team": "BERNARD Club"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Marek KUNDRIK",
        "player_b": "Stanislav PČOLA",
        "date": "8. kolo",
        "player_a_team": "ASTORIA FIT",
        "player_b_team": "BERNARD Club"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Andrej KAČKOŠ",
        "player_b": "Roman ČIŽMÁR",
        "date": "8. kolo",
        "player_a_team": "ASTORIA FIT",
        "player_b_team": "BERNARD Club"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Matúš HRČKA",
        "player_b": "Tibor FIĽAK",
        "date": "8. kolo",
        "player_a_team": "ASTORIA FIT",
        "player_b_team": "BERNARD Club"
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "Viktor ŠIDLÍK",
        "player_b": "Stanislav PČOLA",
        "date": "8. kolo",
        "player_a_team": "ASTORIA FIT",
        "player_b_team": "BERNARD Club"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Marek KUNDRIK",
        "player_b": "Radoslav POĽA",
        "date": "8. kolo",
        "player_a_team": "ASTORIA FIT",
        "player_b_team": "BERNARD Club"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Jozef FOTTA",
        "player_b": "Peter BARSA",
        "date": "8. kolo",
        "player_a_team": "MYSLAVA",
        "player_b_team": "KOMÉTA KE"
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "Marián HOVAN",
        "player_b": "Juraj ANTOŠ",
        "date": "8. kolo",
        "player_a_team": "MYSLAVA",
        "player_b_team": "KOMÉTA KE"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Vladimír VARGOVČÁK",
        "player_b": "Peter ŠTEFANCO",
        "date": "8. kolo",
        "player_a_team": "MYSLAVA",
        "player_b_team": "KOMÉTA KE"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Ján FOTTA",
        "player_b": "Peter MACH",
        "date": "8. kolo",
        "player_a_team": "MYSLAVA",
        "player_b_team": "KOMÉTA KE"
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Jozef FOTTA",
        "player_b": "Juraj ANTOŠ",
        "date": "8. kolo",
        "player_a_team": "MYSLAVA",
        "player_b_team": "KOMÉTA KE"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Marián HOVAN",
        "player_b": "Peter ŠTEFANCO",
        "date": "8. kolo",
        "player_a_team": "MYSLAVA",
        "player_b_team": "KOMÉTA KE"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Vladimír VARGOVČÁK",
        "player_b": "Milan KRASNAY",
        "date": "8. kolo",
        "player_a_team": "MYSLAVA",
        "player_b_team": "KOMÉTA KE"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Milan ŠOLC",
        "player_b": "Peter BARSA",
        "date": "8. kolo",
        "player_a_team": "MYSLAVA",
        "player_b_team": "KOMÉTA KE"
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Jozef FOTTA",
        "player_b": "Peter ŠTEFANCO",
        "date": "8. kolo",
        "player_a_team": "MYSLAVA",
        "player_b_team": "KOMÉTA KE"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Marián HOVAN",
        "player_b": "Peter MACH",
        "date": "8. kolo",
        "player_a_team": "MYSLAVA",
        "player_b_team": "KOMÉTA KE"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Vladimír VARGOVČÁK",
        "player_b": "Peter BARSA",
        "date": "8. kolo",
        "player_a_team": "MYSLAVA",
        "player_b_team": "KOMÉTA KE"
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Ján FOTTA",
        "player_b": "Juraj ANTOŠ",
        "date": "8. kolo",
        "player_a_team": "MYSLAVA",
        "player_b_team": "KOMÉTA KE"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Jozef FOTTA",
        "player_b": "Milan KRASNAY",
        "date": "8. kolo",
        "player_a_team": "MYSLAVA",
        "player_b_team": "KOMÉTA KE"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Marián HOVAN",
        "player_b": "Peter BARSA",
        "date": "8. kolo",
        "player_a_team": "MYSLAVA",
        "player_b_team": "KOMÉTA KE"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Vladimír VARGOVČÁK",
        "player_b": "Juraj ANTOŠ",
        "date": "8. kolo",
        "player_a_team": "MYSLAVA",
        "player_b_team": "KOMÉTA KE"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Milan ŠOLC",
        "player_b": "Peter ŠTEFANCO",
        "date": "8. kolo",
        "player_a_team": "MYSLAVA",
        "player_b_team": "KOMÉTA KE"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Vilo POLÁK",
        "player_b": "Marek PATAKY",
        "date": "8. kolo",
        "player_a_team": "SOŠ Ž",
        "player_b_team": "BOMBERE"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Igor BAŠTI",
        "player_b": "Ján ŘIHAK",
        "date": "8. kolo",
        "player_a_team": "SOŠ Ž",
        "player_b_team": "BOMBERE"
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "Miro. HANIČÁK",
        "player_b": "Ján GUZY",
        "date": "8. kolo",
        "player_a_team": "SOŠ Ž",
        "player_b_team": "BOMBERE"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Peter POLÁK",
        "player_b": "Slavomír KRÁLIK",
        "date": "8. kolo",
        "player_a_team": "SOŠ Ž",
        "player_b_team": "BOMBERE"
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "Jozef MOLNÁR",
        "player_b": "Ján ŘIHAK",
        "date": "8. kolo",
        "player_a_team": "SOŠ Ž",
        "player_b_team": "BOMBERE"
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Igor BAŠTI",
        "player_b": "Ján GUZY",
        "date": "8. kolo",
        "player_a_team": "SOŠ Ž",
        "player_b_team": "BOMBERE"
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "Miro. HANIČÁK",
        "player_b": "Slavomír KRÁLIK",
        "date": "8. kolo",
        "player_a_team": "SOŠ Ž",
        "player_b_team": "BOMBERE"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Peter POLÁK",
        "player_b": "Marek PATAKY",
        "date": "8. kolo",
        "player_a_team": "SOŠ Ž",
        "player_b_team": "BOMBERE"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Vilo POLÁK",
        "player_b": "Ján GUZY",
        "date": "8. kolo",
        "player_a_team": "SOŠ Ž",
        "player_b_team": "BOMBERE"
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Igor BAŠTI",
        "player_b": "Slavomír KRÁLIK",
        "date": "8. kolo",
        "player_a_team": "SOŠ Ž",
        "player_b_team": "BOMBERE"
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "Jozef MOLNÁR",
        "player_b": "Marek PATAKY",
        "date": "8. kolo",
        "player_a_team": "SOŠ Ž",
        "player_b_team": "BOMBERE"
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Peter POLÁK",
        "player_b": "Ján ŘIHAK",
        "date": "8. kolo",
        "player_a_team": "SOŠ Ž",
        "player_b_team": "BOMBERE"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Vilo POLÁK",
        "player_b": "Slavomír KRÁLIK",
        "date": "8. kolo",
        "player_a_team": "SOŠ Ž",
        "player_b_team": "BOMBERE"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Igor BAŠTI",
        "player_b": "Marek PATAKY",
        "date": "8. kolo",
        "player_a_team": "SOŠ Ž",
        "player_b_team": "BOMBERE"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Miro. HANIČÁK",
        "player_b": "Ján ŘIHAK",
        "date": "8. kolo",
        "player_a_team": "SOŠ Ž",
        "player_b_team": "BOMBERE"
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "Jozef MOLNÁR",
        "player_b": "Ján GUZY",
        "date": "8. kolo",
        "player_a_team": "SOŠ Ž",
        "player_b_team": "BOMBERE"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Miroslav KOSCELANSKÝ",
        "player_b": "Juraj POLYAK",
        "date": "8. kolo",
        "player_a_team": "SKP \"A\"",
        "player_b_team": "TT TEAM"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Peter JAKUBEC",
        "player_b": "Marek SIMKO",
        "date": "8. kolo",
        "player_a_team": "SKP \"A\"",
        "player_b_team": "TT TEAM"
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Martin SOĽÁR",
        "player_b": "Andrej FELBER",
        "date": "8. kolo",
        "player_a_team": "SKP \"A\"",
        "player_b_team": "TT TEAM"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Štefan LISSÝ",
        "player_b": "Jarosl ANDRAŠČIK",
        "date": "8. kolo",
        "player_a_team": "SKP \"A\"",
        "player_b_team": "TT TEAM"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Matej KOVAČIK",
        "player_b": "Marek SIMKO",
        "date": "8. kolo",
        "player_a_team": "SKP \"A\"",
        "player_b_team": "TT TEAM"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Peter JAKUBEC",
        "player_b": "Andrej FELBER",
        "date": "8. kolo",
        "player_a_team": "SKP \"A\"",
        "player_b_team": "TT TEAM"
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "Martin SOĽÁR",
        "player_b": "Jarosl ANDRAŠČIK",
        "date": "8. kolo",
        "player_a_team": "SKP \"A\"",
        "player_b_team": "TT TEAM"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Štefan LISSÝ",
        "player_b": "Juraj POLYAK",
        "date": "8. kolo",
        "player_a_team": "SKP \"A\"",
        "player_b_team": "TT TEAM"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Miroslav KOSCELANSKÝ",
        "player_b": "Andrej FELBER",
        "date": "8. kolo",
        "player_a_team": "SKP \"A\"",
        "player_b_team": "TT TEAM"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Peter JAKUBEC",
        "player_b": "Jarosl ANDRAŠČIK",
        "date": "8. kolo",
        "player_a_team": "SKP \"A\"",
        "player_b_team": "TT TEAM"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Matej KOVAČIK",
        "player_b": "Juraj POLYAK",
        "date": "8. kolo",
        "player_a_team": "SKP \"A\"",
        "player_b_team": "TT TEAM"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Štefan LISSÝ",
        "player_b": "Marek SIMKO",
        "date": "8. kolo",
        "player_a_team": "SKP \"A\"",
        "player_b_team": "TT TEAM"
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Miroslav KOSCELANSKÝ",
        "player_b": "Jarosl ANDRAŠČIK",
        "date": "8. kolo",
        "player_a_team": "SKP \"A\"",
        "player_b_team": "TT TEAM"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Peter JAKUBEC",
        "player_b": "Juraj POLYAK",
        "date": "8. kolo",
        "player_a_team": "SKP \"A\"",
        "player_b_team": "TT TEAM"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Martin SOĽÁR",
        "player_b": "Marek SIMKO",
        "date": "8. kolo",
        "player_a_team": "SKP \"A\"",
        "player_b_team": "TT TEAM"
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "Štefan LISSÝ",
        "player_b": "Andrej FELBER",
        "date": "8. kolo",
        "player_a_team": "SKP \"A\"",
        "player_b_team": "TT TEAM"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Martina KOLIBÁROVÁ",
        "player_b": "David LEŠUNDÁK",
        "date": "8. kolo",
        "player_a_team": "MYSLAVA \"Ž\"",
        "player_b_team": "SKP \"B\""
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Izabela VARGOVÁ",
        "player_b": "Michal NINITZ",
        "date": "8. kolo",
        "player_a_team": "MYSLAVA \"Ž\"",
        "player_b_team": "SKP \"B\""
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Jarmila SOMOŠOVÁ",
        "player_b": "Peter GABOŠ",
        "date": "8. kolo",
        "player_a_team": "MYSLAVA \"Ž\"",
        "player_b_team": "SKP \"B\""
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Zuzana GAŽI",
        "player_b": "Tomáš KUNDRÁK",
        "date": "8. kolo",
        "player_a_team": "MYSLAVA \"Ž\"",
        "player_b_team": "SKP \"B\""
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Martina KOLIBÁROVÁ",
        "player_b": "Michal NINITZ",
        "date": "8. kolo",
        "player_a_team": "MYSLAVA \"Ž\"",
        "player_b_team": "SKP \"B\""
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Izabela VARGOVÁ",
        "player_b": "Peter GABOŠ",
        "date": "8. kolo",
        "player_a_team": "MYSLAVA \"Ž\"",
        "player_b_team": "SKP \"B\""
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Jarmila SOMOŠOVÁ",
        "player_b": "Tomáš KUNDRÁK",
        "date": "8. kolo",
        "player_a_team": "MYSLAVA \"Ž\"",
        "player_b_team": "SKP \"B\""
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Zuzana GAŽI",
        "player_b": "David LEŠUNDÁK",
        "date": "8. kolo",
        "player_a_team": "MYSLAVA \"Ž\"",
        "player_b_team": "SKP \"B\""
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Martina KOLIBÁROVÁ",
        "player_b": "Peter GABOŠ",
        "date": "8. kolo",
        "player_a_team": "MYSLAVA \"Ž\"",
        "player_b_team": "SKP \"B\""
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Izabela VARGOVÁ",
        "player_b": "Tomáš KUNDRÁK",
        "date": "8. kolo",
        "player_a_team": "MYSLAVA \"Ž\"",
        "player_b_team": "SKP \"B\""
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Jarmila SOMOŠOVÁ",
        "player_b": "David LEŠUNDÁK",
        "date": "8. kolo",
        "player_a_team": "MYSLAVA \"Ž\"",
        "player_b_team": "SKP \"B\""
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Zuzana GAŽI",
        "player_b": "Michal NINITZ",
        "date": "8. kolo",
        "player_a_team": "MYSLAVA \"Ž\"",
        "player_b_team": "SKP \"B\""
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Martina KOLIBÁROVÁ",
        "player_b": "Tomáš KUNDRÁK",
        "date": "8. kolo",
        "player_a_team": "MYSLAVA \"Ž\"",
        "player_b_team": "SKP \"B\""
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Izabela VARGOVÁ",
        "player_b": "David LEŠUNDÁK",
        "date": "8. kolo",
        "player_a_team": "MYSLAVA \"Ž\"",
        "player_b_team": "SKP \"B\""
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Jarmila SOMOŠOVÁ",
        "player_b": "Michal NINITZ",
        "date": "8. kolo",
        "player_a_team": "MYSLAVA \"Ž\"",
        "player_b_team": "SKP \"B\""
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Zuzana GAŽI",
        "player_b": "Peter GABOŠ",
        "date": "8. kolo",
        "player_a_team": "MYSLAVA \"Ž\"",
        "player_b_team": "SKP \"B\""
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Ľubomír HOCHVART",
        "player_b": "Jozef HUDÁK",
        "date": "8. kolo",
        "player_a_team": "REPREX",
        "player_b_team": "EUROCAST"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Štefan VENDEL",
        "player_b": "Peter ŠEBEK st.",
        "date": "8. kolo",
        "player_a_team": "REPREX",
        "player_b_team": "EUROCAST"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Ján PETRŽALA",
        "player_b": "Julius PILLÁR",
        "date": "8. kolo",
        "player_a_team": "REPREX",
        "player_b_team": "EUROCAST"
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Milan PAŽIČ",
        "player_b": "Patrík TIRPÁK",
        "date": "8. kolo",
        "player_a_team": "REPREX",
        "player_b_team": "EUROCAST"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Ľubomír HOCHVART",
        "player_b": "Peter ŠEBEK st.",
        "date": "8. kolo",
        "player_a_team": "REPREX",
        "player_b_team": "EUROCAST"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Štefan VENDEL",
        "player_b": "Julius PILLÁR",
        "date": "8. kolo",
        "player_a_team": "REPREX",
        "player_b_team": "EUROCAST"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Ján PETRŽALA",
        "player_b": "Jozef HUDÁK",
        "date": "8. kolo",
        "player_a_team": "REPREX",
        "player_b_team": "EUROCAST"
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "Milan PAŽIČ",
        "player_b": "Patrík TIRPÁK",
        "date": "8. kolo",
        "player_a_team": "REPREX",
        "player_b_team": "EUROCAST"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Ľubomír HOCHVART",
        "player_b": "Julius PILLÁR",
        "date": "8. kolo",
        "player_a_team": "REPREX",
        "player_b_team": "EUROCAST"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Štefan VENDEL",
        "player_b": "Patrík TIRPÁK",
        "date": "8. kolo",
        "player_a_team": "REPREX",
        "player_b_team": "EUROCAST"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Ján PETRŽALA",
        "player_b": "Jozef HUDÁK",
        "date": "8. kolo",
        "player_a_team": "REPREX",
        "player_b_team": "EUROCAST"
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "Milan PAŽIČ",
        "player_b": "Peter ŠEBEK st.",
        "date": "8. kolo",
        "player_a_team": "REPREX",
        "player_b_team": "EUROCAST"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Ľubomír HOCHVART",
        "player_b": "Patrík TIRPÁK",
        "date": "8. kolo",
        "player_a_team": "REPREX",
        "player_b_team": "EUROCAST"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Štefan VENDEL",
        "player_b": "Jozef HUDÁK",
        "date": "8. kolo",
        "player_a_team": "REPREX",
        "player_b_team": "EUROCAST"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Ján PETRŽALA",
        "player_b": "Peter ŠEBEK st.",
        "date": "8. kolo",
        "player_a_team": "REPREX",
        "player_b_team": "EUROCAST"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Milan PAŽIČ",
        "player_b": "Julius PILLÁR",
        "date": "8. kolo",
        "player_a_team": "REPREX",
        "player_b_team": "EUROCAST"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Karol GERGELY",
        "player_b": "Milan GAJTKO",
        "date": "8. kolo",
        "player_a_team": "TTC KVP",
        "player_b_team": "MONTREAL"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Tomáš BEKECS",
        "player_b": "M. ZÁRIK",
        "date": "8. kolo",
        "player_a_team": "TTC KVP",
        "player_b_team": "MONTREAL"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Eduard KUDLA",
        "player_b": "Štefan PČOLA",
        "date": "8. kolo",
        "player_a_team": "TTC KVP",
        "player_b_team": "MONTREAL"
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "Andrej MAKRANSKÝ",
        "player_b": "Milan MICHLOVIČ",
        "date": "8. kolo",
        "player_a_team": "TTC KVP",
        "player_b_team": "MONTREAL"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Karol GERGELY",
        "player_b": "M. ZÁRIK",
        "date": "8. kolo",
        "player_a_team": "TTC KVP",
        "player_b_team": "MONTREAL"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Tomáš BEKECS",
        "player_b": "Štefan PČOLA",
        "date": "8. kolo",
        "player_a_team": "TTC KVP",
        "player_b_team": "MONTREAL"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Eduard KUDLA",
        "player_b": "Milan GAJTKO",
        "date": "8. kolo",
        "player_a_team": "TTC KVP",
        "player_b_team": "MONTREAL"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Andrej MAKRANSKÝ",
        "player_b": "Milan MICHLOVIČ",
        "date": "8. kolo",
        "player_a_team": "TTC KVP",
        "player_b_team": "MONTREAL"
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "Karol GERGELY",
        "player_b": "Štefan PČOLA",
        "date": "8. kolo",
        "player_a_team": "TTC KVP",
        "player_b_team": "MONTREAL"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Tomáš BEKECS",
        "player_b": "Milan MICHLOVIČ",
        "date": "8. kolo",
        "player_a_team": "TTC KVP",
        "player_b_team": "MONTREAL"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Eduard KUDLA",
        "player_b": "Milan GAJTKO",
        "date": "8. kolo",
        "player_a_team": "TTC KVP",
        "player_b_team": "MONTREAL"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Andrej MAKRANSKÝ",
        "player_b": "M. ZÁRIK",
        "date": "8. kolo",
        "player_a_team": "TTC KVP",
        "player_b_team": "MONTREAL"
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "Karol GERGELY",
        "player_b": "Milan MICHLOVIČ",
        "date": "8. kolo",
        "player_a_team": "TTC KVP",
        "player_b_team": "MONTREAL"
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "Tomáš BEKECS",
        "player_b": "Milan GAJTKO",
        "date": "8. kolo",
        "player_a_team": "TTC KVP",
        "player_b_team": "MONTREAL"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Eduard KUDLA",
        "player_b": "M. ZÁRIK",
        "date": "8. kolo",
        "player_a_team": "TTC KVP",
        "player_b_team": "MONTREAL"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Andrej MAKRANSKÝ",
        "player_b": "Štefan PČOLA",
        "date": "8. kolo",
        "player_a_team": "TTC KVP",
        "player_b_team": "MONTREAL"
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Juraj BUCHNER",
        "player_b": "Jaroslav WIENER",
        "date": "8. kolo",
        "player_a_team": "METALKOV",
        "player_b_team": "COKERY"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "František CZINGELY",
        "player_b": "Milan SUCHÝ",
        "date": "8. kolo",
        "player_a_team": "METALKOV",
        "player_b_team": "COKERY"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Jozef MOHŇANSKÝ",
        "player_b": "Anton STANICKÝ",
        "date": "8. kolo",
        "player_a_team": "METALKOV",
        "player_b_team": "COKERY"
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Csaba BECSE",
        "player_b": "Igor TKÁČ",
        "date": "8. kolo",
        "player_a_team": "METALKOV",
        "player_b_team": "COKERY"
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Vladimír LÁSLOFI",
        "player_b": "Milan SUCHÝ",
        "date": "8. kolo",
        "player_a_team": "METALKOV",
        "player_b_team": "COKERY"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "František CZINGELY",
        "player_b": "Anton STANICKÝ",
        "date": "8. kolo",
        "player_a_team": "METALKOV",
        "player_b_team": "COKERY"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Jozef MOHŇANSKÝ",
        "player_b": "Igor TKÁČ",
        "date": "8. kolo",
        "player_a_team": "METALKOV",
        "player_b_team": "COKERY"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Csaba BECSE",
        "player_b": "Jaroslav WIENER",
        "date": "8. kolo",
        "player_a_team": "METALKOV",
        "player_b_team": "COKERY"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Juraj BUCHNER",
        "player_b": "Anton STANICKÝ",
        "date": "8. kolo",
        "player_a_team": "METALKOV",
        "player_b_team": "COKERY"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "František CZINGELY",
        "player_b": "Igor TKÁČ",
        "date": "8. kolo",
        "player_a_team": "METALKOV",
        "player_b_team": "COKERY"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Vladimír LÁSLOFI",
        "player_b": "Jaroslav WIENER",
        "date": "8. kolo",
        "player_a_team": "METALKOV",
        "player_b_team": "COKERY"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Csaba BECSE",
        "player_b": "Milan SUCHÝ",
        "date": "8. kolo",
        "player_a_team": "METALKOV",
        "player_b_team": "COKERY"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Juraj BUCHNER",
        "player_b": "Igor TKÁČ",
        "date": "8. kolo",
        "player_a_team": "METALKOV",
        "player_b_team": "COKERY"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "František CZINGELY",
        "player_b": "Jaroslav WIENER",
        "date": "8. kolo",
        "player_a_team": "METALKOV",
        "player_b_team": "COKERY"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Jozef MOHŇANSKÝ",
        "player_b": "Milan SUCHÝ",
        "date": "8. kolo",
        "player_a_team": "METALKOV",
        "player_b_team": "COKERY"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Vladimír LÁSLOFI",
        "player_b": "Anton STANICKÝ",
        "date": "8. kolo",
        "player_a_team": "METALKOV",
        "player_b_team": "COKERY"
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Radoslav POĽA/Stanislav PČOLA",
        "player_b": "Milan PAŽIČ/Miloslav KOCÚR",
        "date": "9. kolo",
        "player_a_team": "BERNARD Club",
        "player_b_team": "REPREX",
        "doubles": true
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Slav. FEČKE/Roman ČIŽMÁR",
        "player_b": "Ján PETRŽALA/Ľubomír HOCHVART",
        "date": "9. kolo",
        "player_a_team": "BERNARD Club",
        "player_b_team": "REPREX",
        "doubles": true
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "David LEŠUNDÁK/Martin ĎURIŠIN",
        "player_b": "Martin SOĽÁR/Štefan LISSÝ",
        "date": "9. kolo",
        "player_a_team": "SKP \"B\"",
        "player_b_team": "SKP \"A\"",
        "doubles": true
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Marek SKYBA/Michal NINITZ",
        "player_b": "Miroslav KOSCELANSKÝ/Peter JAKUBEC",
        "date": "9. kolo",
        "player_a_team": "SKP \"B\"",
        "player_b_team": "SKP \"A\"",
        "doubles": true
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "Julius PILLÁR/Peter ŠEBEK st.",
        "player_b": "Karol GERGELY/Tomáš BEKECS",
        "date": "9. kolo",
        "player_a_team": "EUROCAST",
        "player_b_team": "TTC KVP",
        "doubles": true
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Jozef HUDÁK/Jozef ZAVACKÝ",
        "player_b": "Andrej MAKRANSKÝ/Eduard KUDLA",
        "date": "9. kolo",
        "player_a_team": "EUROCAST",
        "player_b_team": "TTC KVP",
        "doubles": true
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Peter SZCZECZINA/Jaroslav WIENER",
        "player_b": "Jozef FOTTA/Vladimír VARGOVČÁK",
        "date": "9. kolo",
        "player_a_team": "COKERY",
        "player_b_team": "MYSLAVA",
        "doubles": true
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Milan SUCHÝ/Jaroslav JANOVSKÝ",
        "player_b": "Marián HOVAN/Milan ŠOLC",
        "date": "9. kolo",
        "player_a_team": "COKERY",
        "player_b_team": "MYSLAVA",
        "doubles": true
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Ján ŘIHAK/Marek PATAKY",
        "player_b": "Andrej KAČKOŠ/Julus WÉBER",
        "date": "9. kolo",
        "player_a_team": "BOMBERE",
        "player_b_team": "ASTORIA FIT",
        "doubles": true
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Slavomír KRÁLIK/Peter VYHONSKÝ",
        "player_b": "Matúš HRČKA/Marek KUNDRIK",
        "date": "9. kolo",
        "player_a_team": "BOMBERE",
        "player_b_team": "ASTORIA FIT",
        "doubles": true
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Peter BARSA/Milan KRASNAY",
        "player_b": "Peter POLÁK/Miro. HANIČÁK",
        "date": "9. kolo",
        "player_a_team": "KOMÉTA KE",
        "player_b_team": "SOŠ Ž",
        "doubles": true
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Juraj ANTOŠ/Andrej KARLIK",
        "player_b": "Slavomír KEŠELÁK/Jozef MOLNÁR",
        "date": "9. kolo",
        "player_a_team": "KOMÉTA KE",
        "player_b_team": "SOŠ Ž",
        "doubles": true
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "Andrej FELBER/Juraj POLYAK",
        "player_b": "Ľubomír VARTÁS/František CZINGELY",
        "date": "9. kolo",
        "player_a_team": "TT TEAM",
        "player_b_team": "METALKOV",
        "doubles": true
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "Marek SIMKO/Peter RUŽIČKA",
        "player_b": "Csaba BECSE/Tamás BÓNI",
        "date": "9. kolo",
        "player_a_team": "TT TEAM",
        "player_b_team": "METALKOV",
        "doubles": true
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "M. ZÁRIK/Luboš MRÁZ",
        "player_b": "Pavol CINKANIČ/Zuzana GAŽI",
        "date": "9. kolo",
        "player_a_team": "MONTREAL",
        "player_b_team": "MYSLAVA \"Ž\"",
        "doubles": true
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Štefan PČOLA/Milan MICHLOVIČ",
        "player_b": "Martina KOLIBÁROVÁ/Izabela VARGOVÁ",
        "date": "9. kolo",
        "player_a_team": "MONTREAL",
        "player_b_team": "MYSLAVA \"Ž\"",
        "doubles": true
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Radoslav POĽA",
        "player_b": "Milan PAŽIČ",
        "date": "9. kolo",
        "player_a_team": "BERNARD Club",
        "player_b_team": "REPREX"
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Slav. FEČKE",
        "player_b": "Ľubomír HOCHVART",
        "date": "9. kolo",
        "player_a_team": "BERNARD Club",
        "player_b_team": "REPREX"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Stanislav PČOLA",
        "player_b": "Miloslav KOCÚR",
        "date": "9. kolo",
        "player_a_team": "BERNARD Club",
        "player_b_team": "REPREX"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Roman ČIŽMÁR",
        "player_b": "Ján PETRŽALA",
        "date": "9. kolo",
        "player_a_team": "BERNARD Club",
        "player_b_team": "REPREX"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Radoslav POĽA",
        "player_b": "Ľubomír HOCHVART",
        "date": "9. kolo",
        "player_a_team": "BERNARD Club",
        "player_b_team": "REPREX"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Slav. FEČKE",
        "player_b": "Miloslav KOCÚR",
        "date": "9. kolo",
        "player_a_team": "BERNARD Club",
        "player_b_team": "REPREX"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Stanislav PČOLA",
        "player_b": "Ján PETRŽALA",
        "date": "9. kolo",
        "player_a_team": "BERNARD Club",
        "player_b_team": "REPREX"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Roman ČIŽMÁR",
        "player_b": "Milan PAŽIČ",
        "date": "9. kolo",
        "player_a_team": "BERNARD Club",
        "player_b_team": "REPREX"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Radoslav POĽA",
        "player_b": "Miloslav KOCÚR",
        "date": "9. kolo",
        "player_a_team": "BERNARD Club",
        "player_b_team": "REPREX"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Slav. FEČKE",
        "player_b": "Ján PETRŽALA",
        "date": "9. kolo",
        "player_a_team": "BERNARD Club",
        "player_b_team": "REPREX"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Stanislav PČOLA",
        "player_b": "Milan PAŽIČ",
        "date": "9. kolo",
        "player_a_team": "BERNARD Club",
        "player_b_team": "REPREX"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Roman ČIŽMÁR",
        "player_b": "Ľubomír HOCHVART",
        "date": "9. kolo",
        "player_a_team": "BERNARD Club",
        "player_b_team": "REPREX"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Radoslav POĽA",
        "player_b": "Ján PETRŽALA",
        "date": "9. kolo",
        "player_a_team": "BERNARD Club",
        "player_b_team": "REPREX"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Slav. FEČKE",
        "player_b": "Milan PAŽIČ",
        "date": "9. kolo",
        "player_a_team": "BERNARD Club",
        "player_b_team": "REPREX"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Stanislav PČOLA",
        "player_b": "Ľubomír HOCHVART",
        "date": "9. kolo",
        "player_a_team": "BERNARD Club",
        "player_b_team": "REPREX"
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "Roman ČIŽMÁR",
        "player_b": "Miloslav KOCÚR",
        "date": "9. kolo",
        "player_a_team": "BERNARD Club",
        "player_b_team": "REPREX"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Michal NINITZ",
        "player_b": "Martin SOĽÁR",
        "date": "9. kolo",
        "player_a_team": "SKP \"B\"",
        "player_b_team": "SKP \"A\""
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "David LEŠUNDÁK",
        "player_b": "Peter JAKUBEC",
        "date": "9. kolo",
        "player_a_team": "SKP \"B\"",
        "player_b_team": "SKP \"A\""
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Martin ĎURIŠIN",
        "player_b": "Matej KOVAČIK",
        "date": "9. kolo",
        "player_a_team": "SKP \"B\"",
        "player_b_team": "SKP \"A\""
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Marek SKYBA",
        "player_b": "Štefan LISSÝ",
        "date": "9. kolo",
        "player_a_team": "SKP \"B\"",
        "player_b_team": "SKP \"A\""
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Michal NINITZ",
        "player_b": "Peter JAKUBEC",
        "date": "9. kolo",
        "player_a_team": "SKP \"B\"",
        "player_b_team": "SKP \"A\""
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "David LEŠUNDÁK",
        "player_b": "Miroslav KOSCELANSKÝ",
        "date": "9. kolo",
        "player_a_team": "SKP \"B\"",
        "player_b_team": "SKP \"A\""
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Martin ĎURIŠIN",
        "player_b": "Štefan LISSÝ",
        "date": "9. kolo",
        "player_a_team": "SKP \"B\"",
        "player_b_team": "SKP \"A\""
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Marek SKYBA",
        "player_b": "Martin SOĽÁR",
        "date": "9. kolo",
        "player_a_team": "SKP \"B\"",
        "player_b_team": "SKP \"A\""
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Michal NINITZ",
        "player_b": "Matej KOVAČIK",
        "date": "9. kolo",
        "player_a_team": "SKP \"B\"",
        "player_b_team": "SKP \"A\""
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "David LEŠUNDÁK",
        "player_b": "Štefan LISSÝ",
        "date": "9. kolo",
        "player_a_team": "SKP \"B\"",
        "player_b_team": "SKP \"A\""
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Martin ĎURIŠIN",
        "player_b": "Miroslav KOSCELANSKÝ",
        "date": "9. kolo",
        "player_a_team": "SKP \"B\"",
        "player_b_team": "SKP \"A\""
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Marek SKYBA",
        "player_b": "Peter JAKUBEC",
        "date": "9. kolo",
        "player_a_team": "SKP \"B\"",
        "player_b_team": "SKP \"A\""
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "Michal NINITZ",
        "player_b": "Miroslav KOSCELANSKÝ",
        "date": "9. kolo",
        "player_a_team": "SKP \"B\"",
        "player_b_team": "SKP \"A\""
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "David LEŠUNDÁK",
        "player_b": "Martin SOĽÁR",
        "date": "9. kolo",
        "player_a_team": "SKP \"B\"",
        "player_b_team": "SKP \"A\""
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Martin ĎURIŠIN",
        "player_b": "Peter JAKUBEC",
        "date": "9. kolo",
        "player_a_team": "SKP \"B\"",
        "player_b_team": "SKP \"A\""
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Marek SKYBA",
        "player_b": "Matej KOVAČIK",
        "date": "9. kolo",
        "player_a_team": "SKP \"B\"",
        "player_b_team": "SKP \"A\""
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Julius PILLÁR",
        "player_b": "Karol GERGELY",
        "date": "9. kolo",
        "player_a_team": "EUROCAST",
        "player_b_team": "TTC KVP"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Peter ŠEBEK st.",
        "player_b": "Eduard KUDLA",
        "date": "9. kolo",
        "player_a_team": "EUROCAST",
        "player_b_team": "TTC KVP"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Jozef HUDÁK",
        "player_b": "Andrej MAKRANSKÝ",
        "date": "9. kolo",
        "player_a_team": "EUROCAST",
        "player_b_team": "TTC KVP"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Jozef ZAVACKÝ",
        "player_b": "Tomáš BEKECS",
        "date": "9. kolo",
        "player_a_team": "EUROCAST",
        "player_b_team": "TTC KVP"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Julius PILLÁR",
        "player_b": "Eduard KUDLA",
        "date": "9. kolo",
        "player_a_team": "EUROCAST",
        "player_b_team": "TTC KVP"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Peter ŠEBEK st.",
        "player_b": "Andrej MAKRANSKÝ",
        "date": "9. kolo",
        "player_a_team": "EUROCAST",
        "player_b_team": "TTC KVP"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Jozef HUDÁK",
        "player_b": "Tomáš BEKECS",
        "date": "9. kolo",
        "player_a_team": "EUROCAST",
        "player_b_team": "TTC KVP"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Jozef ZAVACKÝ",
        "player_b": "Karol GERGELY",
        "date": "9. kolo",
        "player_a_team": "EUROCAST",
        "player_b_team": "TTC KVP"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Julius PILLÁR",
        "player_b": "Andrej MAKRANSKÝ",
        "date": "9. kolo",
        "player_a_team": "EUROCAST",
        "player_b_team": "TTC KVP"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Peter ŠEBEK st.",
        "player_b": "Tomáš BEKECS",
        "date": "9. kolo",
        "player_a_team": "EUROCAST",
        "player_b_team": "TTC KVP"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Jozef HUDÁK",
        "player_b": "Karol GERGELY",
        "date": "9. kolo",
        "player_a_team": "EUROCAST",
        "player_b_team": "TTC KVP"
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "Jozef ZAVACKÝ",
        "player_b": "Eduard KUDLA",
        "date": "9. kolo",
        "player_a_team": "EUROCAST",
        "player_b_team": "TTC KVP"
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Julius PILLÁR",
        "player_b": "Tomáš BEKECS",
        "date": "9. kolo",
        "player_a_team": "EUROCAST",
        "player_b_team": "TTC KVP"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Peter ŠEBEK st.",
        "player_b": "Karol GERGELY",
        "date": "9. kolo",
        "player_a_team": "EUROCAST",
        "player_b_team": "TTC KVP"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Jozef HUDÁK",
        "player_b": "Eduard KUDLA",
        "date": "9. kolo",
        "player_a_team": "EUROCAST",
        "player_b_team": "TTC KVP"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Jozef ZAVACKÝ",
        "player_b": "Andrej MAKRANSKÝ",
        "date": "9. kolo",
        "player_a_team": "EUROCAST",
        "player_b_team": "TTC KVP"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Milan SUCHÝ",
        "player_b": "Jozef FOTTA",
        "date": "9. kolo",
        "player_a_team": "COKERY",
        "player_b_team": "MYSLAVA"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Jaroslav WIENER",
        "player_b": "Vladimír VARGOVČÁK",
        "date": "9. kolo",
        "player_a_team": "COKERY",
        "player_b_team": "MYSLAVA"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Peter SZCZECZINA",
        "player_b": "Marián HOVAN",
        "date": "9. kolo",
        "player_a_team": "COKERY",
        "player_b_team": "MYSLAVA"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Jaroslav JANOVSKÝ",
        "player_b": "Milan ŠOLC",
        "date": "9. kolo",
        "player_a_team": "COKERY",
        "player_b_team": "MYSLAVA"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Milan SUCHÝ",
        "player_b": "Vladimír VARGOVČÁK",
        "date": "9. kolo",
        "player_a_team": "COKERY",
        "player_b_team": "MYSLAVA"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Jaroslav WIENER",
        "player_b": "Marián HOVAN",
        "date": "9. kolo",
        "player_a_team": "COKERY",
        "player_b_team": "MYSLAVA"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Peter SZCZECZINA",
        "player_b": "Milan ŠOLC",
        "date": "9. kolo",
        "player_a_team": "COKERY",
        "player_b_team": "MYSLAVA"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Jaroslav JANOVSKÝ",
        "player_b": "Jozef FOTTA",
        "date": "9. kolo",
        "player_a_team": "COKERY",
        "player_b_team": "MYSLAVA"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Milan SUCHÝ",
        "player_b": "Marián HOVAN",
        "date": "9. kolo",
        "player_a_team": "COKERY",
        "player_b_team": "MYSLAVA"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Jaroslav WIENER",
        "player_b": "Milan ŠOLC",
        "date": "9. kolo",
        "player_a_team": "COKERY",
        "player_b_team": "MYSLAVA"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Peter SZCZECZINA",
        "player_b": "Jozef FOTTA",
        "date": "9. kolo",
        "player_a_team": "COKERY",
        "player_b_team": "MYSLAVA"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Jaroslav JANOVSKÝ",
        "player_b": "Vladimír VARGOVČÁK",
        "date": "9. kolo",
        "player_a_team": "COKERY",
        "player_b_team": "MYSLAVA"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Milan SUCHÝ",
        "player_b": "Milan ŠOLC",
        "date": "9. kolo",
        "player_a_team": "COKERY",
        "player_b_team": "MYSLAVA"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Jaroslav WIENER",
        "player_b": "Jozef FOTTA",
        "date": "9. kolo",
        "player_a_team": "COKERY",
        "player_b_team": "MYSLAVA"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Peter SZCZECZINA",
        "player_b": "Vladimír VARGOVČÁK",
        "date": "9. kolo",
        "player_a_team": "COKERY",
        "player_b_team": "MYSLAVA"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Jaroslav JANOVSKÝ",
        "player_b": "Marián HOVAN",
        "date": "9. kolo",
        "player_a_team": "COKERY",
        "player_b_team": "MYSLAVA"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Peter VYHONSKÝ",
        "player_b": "Andrej KAČKOŠ",
        "date": "9. kolo",
        "player_a_team": "BOMBERE",
        "player_b_team": "ASTORIA FIT"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Ján ŘIHAK",
        "player_b": "Matúš HRČKA",
        "date": "9. kolo",
        "player_a_team": "BOMBERE",
        "player_b_team": "ASTORIA FIT"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Slavomír KRÁLIK",
        "player_b": "Marek KUNDRIK",
        "date": "9. kolo",
        "player_a_team": "BOMBERE",
        "player_b_team": "ASTORIA FIT"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Marek PATAKY",
        "player_b": "Viktor ŠIDLÍK",
        "date": "9. kolo",
        "player_a_team": "BOMBERE",
        "player_b_team": "ASTORIA FIT"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Peter VYHONSKÝ",
        "player_b": "Matúš HRČKA",
        "date": "9. kolo",
        "player_a_team": "BOMBERE",
        "player_b_team": "ASTORIA FIT"
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Ján ŘIHAK",
        "player_b": "Marek KUNDRIK",
        "date": "9. kolo",
        "player_a_team": "BOMBERE",
        "player_b_team": "ASTORIA FIT"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Slavomír KRÁLIK",
        "player_b": "Viktor ŠIDLÍK",
        "date": "9. kolo",
        "player_a_team": "BOMBERE",
        "player_b_team": "ASTORIA FIT"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Marek PATAKY",
        "player_b": "Andrej KAČKOŠ",
        "date": "9. kolo",
        "player_a_team": "BOMBERE",
        "player_b_team": "ASTORIA FIT"
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Peter VYHONSKÝ",
        "player_b": "Marek KUNDRIK",
        "date": "9. kolo",
        "player_a_team": "BOMBERE",
        "player_b_team": "ASTORIA FIT"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Ján ŘIHAK",
        "player_b": "Viktor ŠIDLÍK",
        "date": "9. kolo",
        "player_a_team": "BOMBERE",
        "player_b_team": "ASTORIA FIT"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Slavomír KRÁLIK",
        "player_b": "Julus WÉBER",
        "date": "9. kolo",
        "player_a_team": "BOMBERE",
        "player_b_team": "ASTORIA FIT"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Marek PATAKY",
        "player_b": "Matúš HRČKA",
        "date": "9. kolo",
        "player_a_team": "BOMBERE",
        "player_b_team": "ASTORIA FIT"
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "Peter VYHONSKÝ",
        "player_b": "Julus WÉBER",
        "date": "9. kolo",
        "player_a_team": "BOMBERE",
        "player_b_team": "ASTORIA FIT"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Ján ŘIHAK",
        "player_b": "Andrej KAČKOŠ",
        "date": "9. kolo",
        "player_a_team": "BOMBERE",
        "player_b_team": "ASTORIA FIT"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Slavomír KRÁLIK",
        "player_b": "Matúš HRČKA",
        "date": "9. kolo",
        "player_a_team": "BOMBERE",
        "player_b_team": "ASTORIA FIT"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Marek PATAKY",
        "player_b": "Marek KUNDRIK",
        "date": "9. kolo",
        "player_a_team": "BOMBERE",
        "player_b_team": "ASTORIA FIT"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Juraj ANTOŠ",
        "player_b": "Slavomír KEŠELÁK",
        "date": "9. kolo",
        "player_a_team": "KOMÉTA KE",
        "player_b_team": "SOŠ Ž"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Peter BARSA",
        "player_b": "Peter POLÁK",
        "date": "9. kolo",
        "player_a_team": "KOMÉTA KE",
        "player_b_team": "SOŠ Ž"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Andrej KARLIK",
        "player_b": "Vilo POLÁK",
        "date": "9. kolo",
        "player_a_team": "KOMÉTA KE",
        "player_b_team": "SOŠ Ž"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Milan KRASNAY",
        "player_b": "Miro. HANIČÁK",
        "date": "9. kolo",
        "player_a_team": "KOMÉTA KE",
        "player_b_team": "SOŠ Ž"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Juraj ANTOŠ",
        "player_b": "Peter POLÁK",
        "date": "9. kolo",
        "player_a_team": "KOMÉTA KE",
        "player_b_team": "SOŠ Ž"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Peter BARSA",
        "player_b": "Jozef MOLNÁR",
        "date": "9. kolo",
        "player_a_team": "KOMÉTA KE",
        "player_b_team": "SOŠ Ž"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Andrej KARLIK",
        "player_b": "Miro. HANIČÁK",
        "date": "9. kolo",
        "player_a_team": "KOMÉTA KE",
        "player_b_team": "SOŠ Ž"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Ján GAJDOŠ",
        "player_b": "Slavomír KEŠELÁK",
        "date": "9. kolo",
        "player_a_team": "KOMÉTA KE",
        "player_b_team": "SOŠ Ž"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Juraj ANTOŠ",
        "player_b": "Vilo POLÁK",
        "date": "9. kolo",
        "player_a_team": "KOMÉTA KE",
        "player_b_team": "SOŠ Ž"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Peter BARSA",
        "player_b": "Miro. HANIČÁK",
        "date": "9. kolo",
        "player_a_team": "KOMÉTA KE",
        "player_b_team": "SOŠ Ž"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Andrej KARLIK",
        "player_b": "Jozef MOLNÁR",
        "date": "9. kolo",
        "player_a_team": "KOMÉTA KE",
        "player_b_team": "SOŠ Ž"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Peter MACH",
        "player_b": "Peter POLÁK",
        "date": "9. kolo",
        "player_a_team": "KOMÉTA KE",
        "player_b_team": "SOŠ Ž"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Juraj ANTOŠ",
        "player_b": "Jozef MOLNÁR",
        "date": "9. kolo",
        "player_a_team": "KOMÉTA KE",
        "player_b_team": "SOŠ Ž"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Peter BARSA",
        "player_b": "Slavomír KEŠELÁK",
        "date": "9. kolo",
        "player_a_team": "KOMÉTA KE",
        "player_b_team": "SOŠ Ž"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Andrej KARLIK",
        "player_b": "Peter POLÁK",
        "date": "9. kolo",
        "player_a_team": "KOMÉTA KE",
        "player_b_team": "SOŠ Ž"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Peter MACH",
        "player_b": "Vilo POLÁK",
        "date": "9. kolo",
        "player_a_team": "KOMÉTA KE",
        "player_b_team": "SOŠ Ž"
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "Ľubomír BENDZÁK",
        "player_b": "Ľubomír VARTÁS",
        "date": "9. kolo",
        "player_a_team": "TT TEAM",
        "player_b_team": "METALKOV"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Andrej FELBER",
        "player_b": "František CZINGELY",
        "date": "9. kolo",
        "player_a_team": "TT TEAM",
        "player_b_team": "METALKOV"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Juraj POLYAK",
        "player_b": "Csaba BECSE",
        "date": "9. kolo",
        "player_a_team": "TT TEAM",
        "player_b_team": "METALKOV"
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "Marek SIMKO",
        "player_b": "Tamás BÓNI",
        "date": "9. kolo",
        "player_a_team": "TT TEAM",
        "player_b_team": "METALKOV"
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "Ľubomír BENDZÁK",
        "player_b": "František CZINGELY",
        "date": "9. kolo",
        "player_a_team": "TT TEAM",
        "player_b_team": "METALKOV"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Andrej FELBER",
        "player_b": "Csaba BECSE",
        "date": "9. kolo",
        "player_a_team": "TT TEAM",
        "player_b_team": "METALKOV"
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Juraj POLYAK",
        "player_b": "Nándor BORTNYÁK",
        "date": "9. kolo",
        "player_a_team": "TT TEAM",
        "player_b_team": "METALKOV"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Marek SIMKO",
        "player_b": "Ľubomír VARTÁS",
        "date": "9. kolo",
        "player_a_team": "TT TEAM",
        "player_b_team": "METALKOV"
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Ľubomír BENDZÁK",
        "player_b": "Csaba BECSE",
        "date": "9. kolo",
        "player_a_team": "TT TEAM",
        "player_b_team": "METALKOV"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Andrej FELBER",
        "player_b": "Nándor BORTNYÁK",
        "date": "9. kolo",
        "player_a_team": "TT TEAM",
        "player_b_team": "METALKOV"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Juraj POLYAK",
        "player_b": "Ľubomír VARTÁS",
        "date": "9. kolo",
        "player_a_team": "TT TEAM",
        "player_b_team": "METALKOV"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Marek SIMKO",
        "player_b": "František CZINGELY",
        "date": "9. kolo",
        "player_a_team": "TT TEAM",
        "player_b_team": "METALKOV"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Ľubomír BENDZÁK",
        "player_b": "Tamás BÓNI",
        "date": "9. kolo",
        "player_a_team": "TT TEAM",
        "player_b_team": "METALKOV"
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "Andrej FELBER",
        "player_b": "Ľubomír VARTÁS",
        "date": "9. kolo",
        "player_a_team": "TT TEAM",
        "player_b_team": "METALKOV"
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "Juraj POLYAK",
        "player_b": "František CZINGELY",
        "date": "9. kolo",
        "player_a_team": "TT TEAM",
        "player_b_team": "METALKOV"
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Marek SIMKO",
        "player_b": "Csaba BECSE",
        "date": "9. kolo",
        "player_a_team": "TT TEAM",
        "player_b_team": "METALKOV"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Štefan PČOLA",
        "player_b": "Izabela VARGOVÁ",
        "date": "9. kolo",
        "player_a_team": "MONTREAL",
        "player_b_team": "MYSLAVA \"Ž\""
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Milan GAJTKO",
        "player_b": "Martina KOLIBÁROVÁ",
        "date": "9. kolo",
        "player_a_team": "MONTREAL",
        "player_b_team": "MYSLAVA \"Ž\""
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "M. ZÁRIK",
        "player_b": "Iveta SOLČANIOVÁ",
        "date": "9. kolo",
        "player_a_team": "MONTREAL",
        "player_b_team": "MYSLAVA \"Ž\""
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Milan MICHLOVIČ",
        "player_b": "Pavol CINKANIČ",
        "date": "9. kolo",
        "player_a_team": "MONTREAL",
        "player_b_team": "MYSLAVA \"Ž\""
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "Luboš MRÁZ",
        "player_b": "Martina KOLIBÁROVÁ",
        "date": "9. kolo",
        "player_a_team": "MONTREAL",
        "player_b_team": "MYSLAVA \"Ž\""
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Milan GAJTKO",
        "player_b": "Zuzana GAŽI",
        "date": "9. kolo",
        "player_a_team": "MONTREAL",
        "player_b_team": "MYSLAVA \"Ž\""
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "M. ZÁRIK",
        "player_b": "Pavol CINKANIČ",
        "date": "9. kolo",
        "player_a_team": "MONTREAL",
        "player_b_team": "MYSLAVA \"Ž\""
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Milan MICHLOVIČ",
        "player_b": "Izabela VARGOVÁ",
        "date": "9. kolo",
        "player_a_team": "MONTREAL",
        "player_b_team": "MYSLAVA \"Ž\""
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Štefan PČOLA",
        "player_b": "Iveta SOLČANIOVÁ",
        "date": "9. kolo",
        "player_a_team": "MONTREAL",
        "player_b_team": "MYSLAVA \"Ž\""
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Milan GAJTKO",
        "player_b": "Pavol CINKANIČ",
        "date": "9. kolo",
        "player_a_team": "MONTREAL",
        "player_b_team": "MYSLAVA \"Ž\""
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Luboš MRÁZ",
        "player_b": "Zuzana GAŽI",
        "date": "9. kolo",
        "player_a_team": "MONTREAL",
        "player_b_team": "MYSLAVA \"Ž\""
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Milan MICHLOVIČ",
        "player_b": "Martina KOLIBÁROVÁ",
        "date": "9. kolo",
        "player_a_team": "MONTREAL",
        "player_b_team": "MYSLAVA \"Ž\""
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Štefan PČOLA",
        "player_b": "Zuzana GAŽI",
        "date": "9. kolo",
        "player_a_team": "MONTREAL",
        "player_b_team": "MYSLAVA \"Ž\""
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Milan GAJTKO",
        "player_b": "Izabela VARGOVÁ",
        "date": "9. kolo",
        "player_a_team": "MONTREAL",
        "player_b_team": "MYSLAVA \"Ž\""
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "M. ZÁRIK",
        "player_b": "Martina KOLIBÁROVÁ",
        "date": "9. kolo",
        "player_a_team": "MONTREAL",
        "player_b_team": "MYSLAVA \"Ž\""
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Luboš MRÁZ",
        "player_b": "Iveta SOLČANIOVÁ",
        "date": "9. kolo",
        "player_a_team": "MONTREAL",
        "player_b_team": "MYSLAVA \"Ž\""
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Peter POLÁK/Jozef MOLNÁR",
        "player_b": "Peter SZCZECZINA/Dmytro LUKACHUK",
        "date": "10. kolo",
        "player_a_team": "SOŠ Ž",
        "player_b_team": "COKERY",
        "doubles": true
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Igor BAŠTI/Slavomír KEŠELÁK",
        "player_b": "Milan SUCHÝ/Jaroslav WIENER",
        "date": "10. kolo",
        "player_a_team": "SOŠ Ž",
        "player_b_team": "COKERY",
        "doubles": true
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Jozef FOTTA/Vladimír VARGOVČÁK",
        "player_b": "Peter RUŽIČKA/Ľubomír BENDZÁK",
        "date": "10. kolo",
        "player_a_team": "MYSLAVA",
        "player_b_team": "TT TEAM",
        "doubles": true
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Milan ŠOLC/Marián HOVAN",
        "player_b": "Andrej FELBER/Juraj POLYAK",
        "date": "10. kolo",
        "player_a_team": "MYSLAVA",
        "player_b_team": "TT TEAM",
        "doubles": true
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "Peter JAKUBEC/Štefan LISSÝ",
        "player_b": "M. ZÁRIK/Luboš MRÁZ",
        "date": "10. kolo",
        "player_a_team": "SKP \"A\"",
        "player_b_team": "MONTREAL",
        "doubles": true
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Martin SOĽÁR/Ľubomír FRANČÁK",
        "player_b": "Milan MICHLOVIČ/Štefan PČOLA",
        "date": "10. kolo",
        "player_a_team": "SKP \"A\"",
        "player_b_team": "MONTREAL",
        "doubles": true
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Martin MUCHA/Marek KUNDRIK",
        "player_b": "Ľubomír HOCHVART/Milan PAŽIČ",
        "date": "10. kolo",
        "player_a_team": "ASTORIA FIT",
        "player_b_team": "REPREX",
        "doubles": true
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Viktor ŠIDLÍK/Andrej KAČKOŠ",
        "player_b": "Ján PETRŽALA/Peter RUSNÁK",
        "date": "10. kolo",
        "player_a_team": "ASTORIA FIT",
        "player_b_team": "REPREX",
        "doubles": true
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "Martina KOLIBÁROVÁ/Izabela VARGOVÁ",
        "player_b": "Julius PILLÁR/Patrík TIRPÁK",
        "date": "10. kolo",
        "player_a_team": "MYSLAVA \"Ž\"",
        "player_b_team": "EUROCAST",
        "doubles": true
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Jarmila SOMOŠOVÁ/Iveta SOLČANIOVÁ",
        "player_b": "Jozef HUDÁK/Jozef ZAVACKÝ",
        "date": "10. kolo",
        "player_a_team": "MYSLAVA \"Ž\"",
        "player_b_team": "EUROCAST",
        "doubles": true
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Marek PATAKY/Ján ŘIHAK",
        "player_b": "Peter MACH/Peter ŠTEFANCO",
        "date": "10. kolo",
        "player_a_team": "BOMBERE",
        "player_b_team": "KOMÉTA KE",
        "doubles": true
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Ján GUZY/Slavomír KRÁLIK",
        "player_b": "Juraj ANTOŠ/Peter BARSA",
        "date": "10. kolo",
        "player_a_team": "BOMBERE",
        "player_b_team": "KOMÉTA KE",
        "doubles": true
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Andrej MAKRANSKÝ/Tomáš BEKECS",
        "player_b": "Slav. FEČKE/Tibor FIĽAK",
        "date": "10. kolo",
        "player_a_team": "TTC KVP",
        "player_b_team": "BERNARD Club",
        "doubles": true
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Andrej MAKRANSKÝ ml./Eduard KUDLA",
        "player_b": "Radoslav POĽA/Stanislav PČOLA",
        "date": "10. kolo",
        "player_a_team": "TTC KVP",
        "player_b_team": "BERNARD Club",
        "doubles": true
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Vladimír LÁSLOFI/Nándor BORTNYÁK",
        "player_b": "David LEŠUNDÁK/Martin ĎURIŠIN",
        "date": "10. kolo",
        "player_a_team": "METALKOV",
        "player_b_team": "SKP \"B\"",
        "doubles": true
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "František CZINGELY/Ľubomír VARTÁS",
        "player_b": "Michal NINITZ/Marek SKYBA",
        "date": "10. kolo",
        "player_a_team": "METALKOV",
        "player_b_team": "SKP \"B\"",
        "doubles": true
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Jozef MOLNÁR",
        "player_b": "Peter SZCZECZINA",
        "date": "10. kolo",
        "player_a_team": "SOŠ Ž",
        "player_b_team": "COKERY"
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Igor BAŠTI",
        "player_b": "Dmytro LUKACHUK",
        "date": "10. kolo",
        "player_a_team": "SOŠ Ž",
        "player_b_team": "COKERY"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Slavomír KEŠELÁK",
        "player_b": "Milan SUCHÝ",
        "date": "10. kolo",
        "player_a_team": "SOŠ Ž",
        "player_b_team": "COKERY"
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "Peter POLÁK",
        "player_b": "Jaroslav WIENER",
        "date": "10. kolo",
        "player_a_team": "SOŠ Ž",
        "player_b_team": "COKERY"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Vilo POLÁK",
        "player_b": "Dmytro LUKACHUK",
        "date": "10. kolo",
        "player_a_team": "SOŠ Ž",
        "player_b_team": "COKERY"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Igor BAŠTI",
        "player_b": "Milan SUCHÝ",
        "date": "10. kolo",
        "player_a_team": "SOŠ Ž",
        "player_b_team": "COKERY"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Slavomír KEŠELÁK",
        "player_b": "Jaroslav WIENER",
        "date": "10. kolo",
        "player_a_team": "SOŠ Ž",
        "player_b_team": "COKERY"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Peter POLÁK",
        "player_b": "Peter SZCZECZINA",
        "date": "10. kolo",
        "player_a_team": "SOŠ Ž",
        "player_b_team": "COKERY"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Jozef MOLNÁR",
        "player_b": "Milan SUCHÝ",
        "date": "10. kolo",
        "player_a_team": "SOŠ Ž",
        "player_b_team": "COKERY"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Igor BAŠTI",
        "player_b": "Jaroslav WIENER",
        "date": "10. kolo",
        "player_a_team": "SOŠ Ž",
        "player_b_team": "COKERY"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Vilo POLÁK",
        "player_b": "Peter SZCZECZINA",
        "date": "10. kolo",
        "player_a_team": "SOŠ Ž",
        "player_b_team": "COKERY"
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Peter POLÁK",
        "player_b": "Dmytro LUKACHUK",
        "date": "10. kolo",
        "player_a_team": "SOŠ Ž",
        "player_b_team": "COKERY"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Jozef MOLNÁR",
        "player_b": "Jaroslav WIENER",
        "date": "10. kolo",
        "player_a_team": "SOŠ Ž",
        "player_b_team": "COKERY"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Igor BAŠTI",
        "player_b": "Peter SZCZECZINA",
        "date": "10. kolo",
        "player_a_team": "SOŠ Ž",
        "player_b_team": "COKERY"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Slavomír KEŠELÁK",
        "player_b": "Dmytro LUKACHUK",
        "date": "10. kolo",
        "player_a_team": "SOŠ Ž",
        "player_b_team": "COKERY"
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "Vilo POLÁK",
        "player_b": "Milan SUCHÝ",
        "date": "10. kolo",
        "player_a_team": "SOŠ Ž",
        "player_b_team": "COKERY"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Jozef FOTTA",
        "player_b": "Ľubomír BENDZÁK",
        "date": "10. kolo",
        "player_a_team": "MYSLAVA",
        "player_b_team": "TT TEAM"
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Marián HOVAN",
        "player_b": "Andrej FELBER",
        "date": "10. kolo",
        "player_a_team": "MYSLAVA",
        "player_b_team": "TT TEAM"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Vladimír VARGOVČÁK",
        "player_b": "Juraj POLYAK",
        "date": "10. kolo",
        "player_a_team": "MYSLAVA",
        "player_b_team": "TT TEAM"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Milan ŠOLC",
        "player_b": "Peter RUŽIČKA",
        "date": "10. kolo",
        "player_a_team": "MYSLAVA",
        "player_b_team": "TT TEAM"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Jozef FOTTA",
        "player_b": "Andrej FELBER",
        "date": "10. kolo",
        "player_a_team": "MYSLAVA",
        "player_b_team": "TT TEAM"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Marián HOVAN",
        "player_b": "Marek SIMKO",
        "date": "10. kolo",
        "player_a_team": "MYSLAVA",
        "player_b_team": "TT TEAM"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Vladimír VARGOVČÁK",
        "player_b": "Peter RUŽIČKA",
        "date": "10. kolo",
        "player_a_team": "MYSLAVA",
        "player_b_team": "TT TEAM"
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Milan ŠOLC",
        "player_b": "Ľubomír BENDZÁK",
        "date": "10. kolo",
        "player_a_team": "MYSLAVA",
        "player_b_team": "TT TEAM"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Jozef FOTTA",
        "player_b": "Juraj POLYAK",
        "date": "10. kolo",
        "player_a_team": "MYSLAVA",
        "player_b_team": "TT TEAM"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Marián HOVAN",
        "player_b": "Peter RUŽIČKA",
        "date": "10. kolo",
        "player_a_team": "MYSLAVA",
        "player_b_team": "TT TEAM"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Vladimír VARGOVČÁK",
        "player_b": "Marek SIMKO",
        "date": "10. kolo",
        "player_a_team": "MYSLAVA",
        "player_b_team": "TT TEAM"
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "Milan ŠOLC",
        "player_b": "Andrej FELBER",
        "date": "10. kolo",
        "player_a_team": "MYSLAVA",
        "player_b_team": "TT TEAM"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Jozef FOTTA",
        "player_b": "Marek SIMKO",
        "date": "10. kolo",
        "player_a_team": "MYSLAVA",
        "player_b_team": "TT TEAM"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Marián HOVAN",
        "player_b": "Ľubomír BENDZÁK",
        "date": "10. kolo",
        "player_a_team": "MYSLAVA",
        "player_b_team": "TT TEAM"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Vladimír VARGOVČÁK",
        "player_b": "Andrej FELBER",
        "date": "10. kolo",
        "player_a_team": "MYSLAVA",
        "player_b_team": "TT TEAM"
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Milan ŠOLC",
        "player_b": "Juraj POLYAK",
        "date": "10. kolo",
        "player_a_team": "MYSLAVA",
        "player_b_team": "TT TEAM"
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Peter JAKUBEC",
        "player_b": "M. ZÁRIK",
        "date": "10. kolo",
        "player_a_team": "SKP \"A\"",
        "player_b_team": "MONTREAL"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Ľubomír FRANČÁK",
        "player_b": "Julius BACSÓ",
        "date": "10. kolo",
        "player_a_team": "SKP \"A\"",
        "player_b_team": "MONTREAL"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Štefan LISSÝ",
        "player_b": "Štefan PČOLA",
        "date": "10. kolo",
        "player_a_team": "SKP \"A\"",
        "player_b_team": "MONTREAL"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Martin SOĽÁR",
        "player_b": "Luboš MRÁZ",
        "date": "10. kolo",
        "player_a_team": "SKP \"A\"",
        "player_b_team": "MONTREAL"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Peter JAKUBEC",
        "player_b": "Julius BACSÓ",
        "date": "10. kolo",
        "player_a_team": "SKP \"A\"",
        "player_b_team": "MONTREAL"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Ľubomír FRANČÁK",
        "player_b": "Milan MICHLOVIČ",
        "date": "10. kolo",
        "player_a_team": "SKP \"A\"",
        "player_b_team": "MONTREAL"
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Štefan LISSÝ",
        "player_b": "Luboš MRÁZ",
        "date": "10. kolo",
        "player_a_team": "SKP \"A\"",
        "player_b_team": "MONTREAL"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Martin SOĽÁR",
        "player_b": "M. ZÁRIK",
        "date": "10. kolo",
        "player_a_team": "SKP \"A\"",
        "player_b_team": "MONTREAL"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Peter JAKUBEC",
        "player_b": "Štefan PČOLA",
        "date": "10. kolo",
        "player_a_team": "SKP \"A\"",
        "player_b_team": "MONTREAL"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Ľubomír FRANČÁK",
        "player_b": "Milan MICHLOVIČ",
        "date": "10. kolo",
        "player_a_team": "SKP \"A\"",
        "player_b_team": "MONTREAL"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Štefan LISSÝ",
        "player_b": "Milan MICHLOVIČ",
        "date": "10. kolo",
        "player_a_team": "SKP \"A\"",
        "player_b_team": "MONTREAL"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Martin SOĽÁR",
        "player_b": "Julius BACSÓ",
        "date": "10. kolo",
        "player_a_team": "SKP \"A\"",
        "player_b_team": "MONTREAL"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Peter JAKUBEC",
        "player_b": "Luboš MRÁZ",
        "date": "10. kolo",
        "player_a_team": "SKP \"A\"",
        "player_b_team": "MONTREAL"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Ľubomír FRANČÁK",
        "player_b": "M. ZÁRIK",
        "date": "10. kolo",
        "player_a_team": "SKP \"A\"",
        "player_b_team": "MONTREAL"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Štefan LISSÝ",
        "player_b": "Julius BACSÓ",
        "date": "10. kolo",
        "player_a_team": "SKP \"A\"",
        "player_b_team": "MONTREAL"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Martin SOĽÁR",
        "player_b": "Štefan PČOLA",
        "date": "10. kolo",
        "player_a_team": "SKP \"A\"",
        "player_b_team": "MONTREAL"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Andrej KAČKOŠ",
        "player_b": "Peter RUSNÁK",
        "date": "10. kolo",
        "player_a_team": "ASTORIA FIT",
        "player_b_team": "REPREX"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Marek KUNDRIK",
        "player_b": "Milan PAŽIČ",
        "date": "10. kolo",
        "player_a_team": "ASTORIA FIT",
        "player_b_team": "REPREX"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Martin MUCHA",
        "player_b": "Ján PETRŽALA",
        "date": "10. kolo",
        "player_a_team": "ASTORIA FIT",
        "player_b_team": "REPREX"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Viktor ŠIDLÍK",
        "player_b": "Ľubomír HOCHVART",
        "date": "10. kolo",
        "player_a_team": "ASTORIA FIT",
        "player_b_team": "REPREX"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Ladislav RADVÁNI",
        "player_b": "Milan PAŽIČ",
        "date": "10. kolo",
        "player_a_team": "ASTORIA FIT",
        "player_b_team": "REPREX"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Marek KUNDRIK",
        "player_b": "Ján PETRŽALA",
        "date": "10. kolo",
        "player_a_team": "ASTORIA FIT",
        "player_b_team": "REPREX"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Martin MUCHA",
        "player_b": "Ľubomír HOCHVART",
        "date": "10. kolo",
        "player_a_team": "ASTORIA FIT",
        "player_b_team": "REPREX"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Viktor ŠIDLÍK",
        "player_b": "Peter RUSNÁK",
        "date": "10. kolo",
        "player_a_team": "ASTORIA FIT",
        "player_b_team": "REPREX"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Andrej KAČKOŠ",
        "player_b": "Ján PETRŽALA",
        "date": "10. kolo",
        "player_a_team": "ASTORIA FIT",
        "player_b_team": "REPREX"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Matúš HRČKA",
        "player_b": "Ľubomír HOCHVART",
        "date": "10. kolo",
        "player_a_team": "ASTORIA FIT",
        "player_b_team": "REPREX"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Ladislav RADVÁNI",
        "player_b": "Peter RUSNÁK",
        "date": "10. kolo",
        "player_a_team": "ASTORIA FIT",
        "player_b_team": "REPREX"
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Viktor ŠIDLÍK",
        "player_b": "Milan PAŽIČ",
        "date": "10. kolo",
        "player_a_team": "ASTORIA FIT",
        "player_b_team": "REPREX"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Andrej KAČKOŠ",
        "player_b": "Ľubomír HOCHVART",
        "date": "10. kolo",
        "player_a_team": "ASTORIA FIT",
        "player_b_team": "REPREX"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Marek KUNDRIK",
        "player_b": "Peter RUSNÁK",
        "date": "10. kolo",
        "player_a_team": "ASTORIA FIT",
        "player_b_team": "REPREX"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Martin MUCHA",
        "player_b": "Milan PAŽIČ",
        "date": "10. kolo",
        "player_a_team": "ASTORIA FIT",
        "player_b_team": "REPREX"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Matúš HRČKA",
        "player_b": "Ján PETRŽALA",
        "date": "10. kolo",
        "player_a_team": "ASTORIA FIT",
        "player_b_team": "REPREX"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Jarmila SOMOŠOVÁ",
        "player_b": "Julius PILLÁR",
        "date": "10. kolo",
        "player_a_team": "MYSLAVA \"Ž\"",
        "player_b_team": "EUROCAST"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Martina KOLIBÁROVÁ",
        "player_b": "Patrík TIRPÁK",
        "date": "10. kolo",
        "player_a_team": "MYSLAVA \"Ž\"",
        "player_b_team": "EUROCAST"
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Zuzana GAŽI",
        "player_b": "Jozef HUDÁK",
        "date": "10. kolo",
        "player_a_team": "MYSLAVA \"Ž\"",
        "player_b_team": "EUROCAST"
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Iveta SOLČANIOVÁ",
        "player_b": "Jozef ZAVACKÝ",
        "date": "10. kolo",
        "player_a_team": "MYSLAVA \"Ž\"",
        "player_b_team": "EUROCAST"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Izabela VARGOVÁ",
        "player_b": "Patrík TIRPÁK",
        "date": "10. kolo",
        "player_a_team": "MYSLAVA \"Ž\"",
        "player_b_team": "EUROCAST"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Martina KOLIBÁROVÁ",
        "player_b": "Jozef HUDÁK",
        "date": "10. kolo",
        "player_a_team": "MYSLAVA \"Ž\"",
        "player_b_team": "EUROCAST"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Zuzana GAŽI",
        "player_b": "Jozef ZAVACKÝ",
        "date": "10. kolo",
        "player_a_team": "MYSLAVA \"Ž\"",
        "player_b_team": "EUROCAST"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Iveta SOLČANIOVÁ",
        "player_b": "Julius PILLÁR",
        "date": "10. kolo",
        "player_a_team": "MYSLAVA \"Ž\"",
        "player_b_team": "EUROCAST"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Jarmila SOMOŠOVÁ",
        "player_b": "Jozef HUDÁK",
        "date": "10. kolo",
        "player_a_team": "MYSLAVA \"Ž\"",
        "player_b_team": "EUROCAST"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Martina KOLIBÁROVÁ",
        "player_b": "Jozef ZAVACKÝ",
        "date": "10. kolo",
        "player_a_team": "MYSLAVA \"Ž\"",
        "player_b_team": "EUROCAST"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Izabela VARGOVÁ",
        "player_b": "Julius PILLÁR",
        "date": "10. kolo",
        "player_a_team": "MYSLAVA \"Ž\"",
        "player_b_team": "EUROCAST"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Iveta SOLČANIOVÁ",
        "player_b": "Patrík TIRPÁK",
        "date": "10. kolo",
        "player_a_team": "MYSLAVA \"Ž\"",
        "player_b_team": "EUROCAST"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Jarmila SOMOŠOVÁ",
        "player_b": "Jozef ZAVACKÝ",
        "date": "10. kolo",
        "player_a_team": "MYSLAVA \"Ž\"",
        "player_b_team": "EUROCAST"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Martina KOLIBÁROVÁ",
        "player_b": "Julius PILLÁR",
        "date": "10. kolo",
        "player_a_team": "MYSLAVA \"Ž\"",
        "player_b_team": "EUROCAST"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Zuzana GAŽI",
        "player_b": "Patrík TIRPÁK",
        "date": "10. kolo",
        "player_a_team": "MYSLAVA \"Ž\"",
        "player_b_team": "EUROCAST"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Izabela VARGOVÁ",
        "player_b": "Jozef HUDÁK",
        "date": "10. kolo",
        "player_a_team": "MYSLAVA \"Ž\"",
        "player_b_team": "EUROCAST"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Marek PATAKY",
        "player_b": "Juraj ANTOŠ",
        "date": "10. kolo",
        "player_a_team": "BOMBERE",
        "player_b_team": "KOMÉTA KE"
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "Ján ŘIHAK",
        "player_b": "Peter BARSA",
        "date": "10. kolo",
        "player_a_team": "BOMBERE",
        "player_b_team": "KOMÉTA KE"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Ján GUZY",
        "player_b": "Peter ŠTEFANCO",
        "date": "10. kolo",
        "player_a_team": "BOMBERE",
        "player_b_team": "KOMÉTA KE"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Slavomír KRÁLIK",
        "player_b": "Peter MACH",
        "date": "10. kolo",
        "player_a_team": "BOMBERE",
        "player_b_team": "KOMÉTA KE"
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Marek PATAKY",
        "player_b": "Peter BARSA",
        "date": "10. kolo",
        "player_a_team": "BOMBERE",
        "player_b_team": "KOMÉTA KE"
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Ján ŘIHAK",
        "player_b": "Peter ŠTEFANCO",
        "date": "10. kolo",
        "player_a_team": "BOMBERE",
        "player_b_team": "KOMÉTA KE"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Ján GUZY",
        "player_b": "Ján GAJDOŠ",
        "date": "10. kolo",
        "player_a_team": "BOMBERE",
        "player_b_team": "KOMÉTA KE"
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "Slavomír KRÁLIK",
        "player_b": "Juraj ANTOŠ",
        "date": "10. kolo",
        "player_a_team": "BOMBERE",
        "player_b_team": "KOMÉTA KE"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Marek PATAKY",
        "player_b": "Peter ŠTEFANCO",
        "date": "10. kolo",
        "player_a_team": "BOMBERE",
        "player_b_team": "KOMÉTA KE"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Ján ŘIHAK",
        "player_b": "Peter MACH",
        "date": "10. kolo",
        "player_a_team": "BOMBERE",
        "player_b_team": "KOMÉTA KE"
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Ján GUZY",
        "player_b": "Juraj ANTOŠ",
        "date": "10. kolo",
        "player_a_team": "BOMBERE",
        "player_b_team": "KOMÉTA KE"
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "Slavomír KRÁLIK",
        "player_b": "Peter BARSA",
        "date": "10. kolo",
        "player_a_team": "BOMBERE",
        "player_b_team": "KOMÉTA KE"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Marek PATAKY",
        "player_b": "Ján GAJDOŠ",
        "date": "10. kolo",
        "player_a_team": "BOMBERE",
        "player_b_team": "KOMÉTA KE"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Ján ŘIHAK",
        "player_b": "Juraj ANTOŠ",
        "date": "10. kolo",
        "player_a_team": "BOMBERE",
        "player_b_team": "KOMÉTA KE"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Ján GUZY",
        "player_b": "Peter BARSA",
        "date": "10. kolo",
        "player_a_team": "BOMBERE",
        "player_b_team": "KOMÉTA KE"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Slavomír KRÁLIK",
        "player_b": "Peter ŠTEFANCO",
        "date": "10. kolo",
        "player_a_team": "BOMBERE",
        "player_b_team": "KOMÉTA KE"
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "Eduard KUDLA",
        "player_b": "Radoslav POĽA",
        "date": "10. kolo",
        "player_a_team": "TTC KVP",
        "player_b_team": "BERNARD Club"
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Tomáš BEKECS",
        "player_b": "Stanislav PČOLA",
        "date": "10. kolo",
        "player_a_team": "TTC KVP",
        "player_b_team": "BERNARD Club"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Andrej MAKRANSKÝ ml.",
        "player_b": "Slav. FEČKE",
        "date": "10. kolo",
        "player_a_team": "TTC KVP",
        "player_b_team": "BERNARD Club"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Andrej MAKRANSKÝ",
        "player_b": "Tibor FIĽAK",
        "date": "10. kolo",
        "player_a_team": "TTC KVP",
        "player_b_team": "BERNARD Club"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Eduard KUDLA",
        "player_b": "Stanislav PČOLA",
        "date": "10. kolo",
        "player_a_team": "TTC KVP",
        "player_b_team": "BERNARD Club"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Tomáš BEKECS",
        "player_b": "Slav. FEČKE",
        "date": "10. kolo",
        "player_a_team": "TTC KVP",
        "player_b_team": "BERNARD Club"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Andrej MAKRANSKÝ ml.",
        "player_b": "Tibor FIĽAK",
        "date": "10. kolo",
        "player_a_team": "TTC KVP",
        "player_b_team": "BERNARD Club"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Andrej MAKRANSKÝ",
        "player_b": "Radoslav POĽA",
        "date": "10. kolo",
        "player_a_team": "TTC KVP",
        "player_b_team": "BERNARD Club"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Eduard KUDLA",
        "player_b": "Slav. FEČKE",
        "date": "10. kolo",
        "player_a_team": "TTC KVP",
        "player_b_team": "BERNARD Club"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Tomáš BEKECS",
        "player_b": "Tibor FIĽAK",
        "date": "10. kolo",
        "player_a_team": "TTC KVP",
        "player_b_team": "BERNARD Club"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Andrej MAKRANSKÝ ml.",
        "player_b": "Radoslav POĽA",
        "date": "10. kolo",
        "player_a_team": "TTC KVP",
        "player_b_team": "BERNARD Club"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Andrej MAKRANSKÝ",
        "player_b": "Stanislav PČOLA",
        "date": "10. kolo",
        "player_a_team": "TTC KVP",
        "player_b_team": "BERNARD Club"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Eduard KUDLA",
        "player_b": "Tibor FIĽAK",
        "date": "10. kolo",
        "player_a_team": "TTC KVP",
        "player_b_team": "BERNARD Club"
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "Tomáš BEKECS",
        "player_b": "Radoslav POĽA",
        "date": "10. kolo",
        "player_a_team": "TTC KVP",
        "player_b_team": "BERNARD Club"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Andrej MAKRANSKÝ ml.",
        "player_b": "Stanislav PČOLA",
        "date": "10. kolo",
        "player_a_team": "TTC KVP",
        "player_b_team": "BERNARD Club"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Andrej MAKRANSKÝ",
        "player_b": "Slav. FEČKE",
        "date": "10. kolo",
        "player_a_team": "TTC KVP",
        "player_b_team": "BERNARD Club"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "František CZINGELY",
        "player_b": "Michal NINITZ",
        "date": "10. kolo",
        "player_a_team": "METALKOV",
        "player_b_team": "SKP \"B\""
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Ľubomír VARTÁS",
        "player_b": "Marek SKYBA",
        "date": "10. kolo",
        "player_a_team": "METALKOV",
        "player_b_team": "SKP \"B\""
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Nándor BORTNYÁK",
        "player_b": "David LEŠUNDÁK",
        "date": "10. kolo",
        "player_a_team": "METALKOV",
        "player_b_team": "SKP \"B\""
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Vladimír LÁSLOFI",
        "player_b": "Martin ĎURIŠIN",
        "date": "10. kolo",
        "player_a_team": "METALKOV",
        "player_b_team": "SKP \"B\""
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "František CZINGELY",
        "player_b": "Marek SKYBA",
        "date": "10. kolo",
        "player_a_team": "METALKOV",
        "player_b_team": "SKP \"B\""
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Ľubomír VARTÁS",
        "player_b": "David LEŠUNDÁK",
        "date": "10. kolo",
        "player_a_team": "METALKOV",
        "player_b_team": "SKP \"B\""
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Nándor BORTNYÁK",
        "player_b": "Martin ĎURIŠIN",
        "date": "10. kolo",
        "player_a_team": "METALKOV",
        "player_b_team": "SKP \"B\""
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Vladimír LÁSLOFI",
        "player_b": "Michal NINITZ",
        "date": "10. kolo",
        "player_a_team": "METALKOV",
        "player_b_team": "SKP \"B\""
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "František CZINGELY",
        "player_b": "David LEŠUNDÁK",
        "date": "10. kolo",
        "player_a_team": "METALKOV",
        "player_b_team": "SKP \"B\""
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Ľubomír VARTÁS",
        "player_b": "Martin ĎURIŠIN",
        "date": "10. kolo",
        "player_a_team": "METALKOV",
        "player_b_team": "SKP \"B\""
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Nándor BORTNYÁK",
        "player_b": "Michal NINITZ",
        "date": "10. kolo",
        "player_a_team": "METALKOV",
        "player_b_team": "SKP \"B\""
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Vladimír LÁSLOFI",
        "player_b": "Marek SKYBA",
        "date": "10. kolo",
        "player_a_team": "METALKOV",
        "player_b_team": "SKP \"B\""
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "František CZINGELY",
        "player_b": "Martin ĎURIŠIN",
        "date": "10. kolo",
        "player_a_team": "METALKOV",
        "player_b_team": "SKP \"B\""
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Ľubomír VARTÁS",
        "player_b": "Michal NINITZ",
        "date": "10. kolo",
        "player_a_team": "METALKOV",
        "player_b_team": "SKP \"B\""
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Nándor BORTNYÁK",
        "player_b": "Marek SKYBA",
        "date": "10. kolo",
        "player_a_team": "METALKOV",
        "player_b_team": "SKP \"B\""
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Vladimír LÁSLOFI",
        "player_b": "David LEŠUNDÁK",
        "date": "10. kolo",
        "player_a_team": "METALKOV",
        "player_b_team": "SKP \"B\""
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "David LEŠUNDÁK/Martin ĎURIŠIN",
        "player_b": "Marián HOVAN/Vladimír VARGOVČÁK",
        "date": "11. kolo",
        "player_a_team": "SKP \"B\"",
        "player_b_team": "MYSLAVA",
        "doubles": true
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Michal NINITZ/Marek SKYBA",
        "player_b": "Ján FOTTA/Jozef FOTTA",
        "date": "11. kolo",
        "player_a_team": "SKP \"B\"",
        "player_b_team": "MYSLAVA",
        "doubles": true
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Miro. HARČÁRIK/Jaroslav WIENER",
        "player_b": "Ján GUZY/Ján ŘIHAK",
        "date": "11. kolo",
        "player_a_team": "COKERY",
        "player_b_team": "BOMBERE",
        "doubles": true
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Dmytro LUKACHUK/Peter SZCZECZINA",
        "player_b": "Slavomír KRÁLIK/Ondrej KRÁLIK",
        "date": "11. kolo",
        "player_a_team": "COKERY",
        "player_b_team": "BOMBERE",
        "doubles": true
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "Jarmila SOMOŠOVÁ/Zuzana GAŽI",
        "player_b": "Radoslav POĽA/Stanislav PČOLA",
        "date": "11. kolo",
        "player_a_team": "MYSLAVA \"Ž\"",
        "player_b_team": "BERNARD Club",
        "doubles": true
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Martina KOLIBÁROVÁ/Pavol CINKANIČ",
        "player_b": "Roman ČIŽMÁR/Slav. FEČKE",
        "date": "11. kolo",
        "player_a_team": "MYSLAVA \"Ž\"",
        "player_b_team": "BERNARD Club",
        "doubles": true
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Peter RUSNÁK/Milan PAŽIČ",
        "player_b": "Eduard KUDLA/Andrej MAKRANSKÝ",
        "date": "11. kolo",
        "player_a_team": "REPREX",
        "player_b_team": "TTC KVP",
        "doubles": true
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Ján PETRŽALA/Miloslav KOCÚR",
        "player_b": "Karol GERGELY/Tomáš BEKECS",
        "date": "11. kolo",
        "player_a_team": "REPREX",
        "player_b_team": "TTC KVP",
        "doubles": true
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Peter BARSA/Andrej KARLIK",
        "player_b": "Andrej KAČKOŠ/Julus WÉBER",
        "date": "11. kolo",
        "player_a_team": "KOMÉTA KE",
        "player_b_team": "ASTORIA FIT",
        "doubles": true
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Peter MACH/Peter ŠTEFANCO",
        "player_b": "Viktor ŠIDLÍK/Marek KUNDRIK",
        "date": "11. kolo",
        "player_a_team": "KOMÉTA KE",
        "player_b_team": "ASTORIA FIT",
        "doubles": true
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Andrej FELBER/Ľubomír BENDZÁK",
        "player_b": "Slavomír KEŠELÁK/Jozef MOLNÁR",
        "date": "11. kolo",
        "player_a_team": "TT TEAM",
        "player_b_team": "SOŠ Ž",
        "doubles": true
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Ján SIMKO/Peter RUŽIČKA",
        "player_b": "Peter POLÁK/Vilo POLÁK",
        "date": "11. kolo",
        "player_a_team": "TT TEAM",
        "player_b_team": "SOŠ Ž",
        "doubles": true
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Julius PILLÁR/Patrík TIRPÁK",
        "player_b": "Matej KOVAČIK/Martin SOĽÁR",
        "date": "11. kolo",
        "player_a_team": "EUROCAST",
        "player_b_team": "SKP \"A\"",
        "doubles": true
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Peter ŠEBEK st./Jozef HUDÁK",
        "player_b": "Miroslav KOSCELANSKÝ/Peter JAKUBEC",
        "date": "11. kolo",
        "player_a_team": "EUROCAST",
        "player_b_team": "SKP \"A\"",
        "doubles": true
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Michal NINITZ",
        "player_b": "Ján FOTTA",
        "date": "11. kolo",
        "player_a_team": "SKP \"B\"",
        "player_b_team": "MYSLAVA"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Marek SKYBA",
        "player_b": "Vladimír VARGOVČÁK",
        "date": "11. kolo",
        "player_a_team": "SKP \"B\"",
        "player_b_team": "MYSLAVA"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Martin ĎURIŠIN",
        "player_b": "Jozef FOTTA",
        "date": "11. kolo",
        "player_a_team": "SKP \"B\"",
        "player_b_team": "MYSLAVA"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "David LEŠUNDÁK",
        "player_b": "Marián HOVAN",
        "date": "11. kolo",
        "player_a_team": "SKP \"B\"",
        "player_b_team": "MYSLAVA"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Michal NINITZ",
        "player_b": "Vladimír VARGOVČÁK",
        "date": "11. kolo",
        "player_a_team": "SKP \"B\"",
        "player_b_team": "MYSLAVA"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Marek SKYBA",
        "player_b": "Jozef FOTTA",
        "date": "11. kolo",
        "player_a_team": "SKP \"B\"",
        "player_b_team": "MYSLAVA"
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "Martin ĎURIŠIN",
        "player_b": "Ján FOTTA",
        "date": "11. kolo",
        "player_a_team": "SKP \"B\"",
        "player_b_team": "MYSLAVA"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "David LEŠUNDÁK",
        "player_b": "Vladimír VARGOVČÁK",
        "date": "11. kolo",
        "player_a_team": "SKP \"B\"",
        "player_b_team": "MYSLAVA"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Michal NINITZ",
        "player_b": "Jozef FOTTA",
        "date": "11. kolo",
        "player_a_team": "SKP \"B\"",
        "player_b_team": "MYSLAVA"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Marek SKYBA",
        "player_b": "Ján FOTTA",
        "date": "11. kolo",
        "player_a_team": "SKP \"B\"",
        "player_b_team": "MYSLAVA"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Martin ĎURIŠIN",
        "player_b": "Marián HOVAN",
        "date": "11. kolo",
        "player_a_team": "SKP \"B\"",
        "player_b_team": "MYSLAVA"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "David LEŠUNDÁK",
        "player_b": "Vladimír VARGOVČÁK",
        "date": "11. kolo",
        "player_a_team": "SKP \"B\"",
        "player_b_team": "MYSLAVA"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Michal NINITZ",
        "player_b": "Marián HOVAN",
        "date": "11. kolo",
        "player_a_team": "SKP \"B\"",
        "player_b_team": "MYSLAVA"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Marek SKYBA",
        "player_b": "Ján FOTTA",
        "date": "11. kolo",
        "player_a_team": "SKP \"B\"",
        "player_b_team": "MYSLAVA"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Martin ĎURIŠIN",
        "player_b": "Vladimír VARGOVČÁK",
        "date": "11. kolo",
        "player_a_team": "SKP \"B\"",
        "player_b_team": "MYSLAVA"
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "David LEŠUNDÁK",
        "player_b": "Jozef FOTTA",
        "date": "11. kolo",
        "player_a_team": "SKP \"B\"",
        "player_b_team": "MYSLAVA"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Miro. HARČÁRIK",
        "player_b": "Slavomír KRÁLIK",
        "date": "11. kolo",
        "player_a_team": "COKERY",
        "player_b_team": "BOMBERE"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Jaroslav WIENER",
        "player_b": "Ján ŘIHAK",
        "date": "11. kolo",
        "player_a_team": "COKERY",
        "player_b_team": "BOMBERE"
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Dmytro LUKACHUK",
        "player_b": "Ján GUZY",
        "date": "11. kolo",
        "player_a_team": "COKERY",
        "player_b_team": "BOMBERE"
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Milan SUCHÝ",
        "player_b": "Ondrej KRÁLIK",
        "date": "11. kolo",
        "player_a_team": "COKERY",
        "player_b_team": "BOMBERE"
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Miro. HARČÁRIK",
        "player_b": "Ján ŘIHAK",
        "date": "11. kolo",
        "player_a_team": "COKERY",
        "player_b_team": "BOMBERE"
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Jaroslav WIENER",
        "player_b": "Ján GUZY",
        "date": "11. kolo",
        "player_a_team": "COKERY",
        "player_b_team": "BOMBERE"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Dmytro LUKACHUK",
        "player_b": "Ondrej KRÁLIK",
        "date": "11. kolo",
        "player_a_team": "COKERY",
        "player_b_team": "BOMBERE"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Peter SZCZECZINA",
        "player_b": "Slavomír KRÁLIK",
        "date": "11. kolo",
        "player_a_team": "COKERY",
        "player_b_team": "BOMBERE"
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Miro. HARČÁRIK",
        "player_b": "Ján GUZY",
        "date": "11. kolo",
        "player_a_team": "COKERY",
        "player_b_team": "BOMBERE"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Jaroslav WIENER",
        "player_b": "Ondrej KRÁLIK",
        "date": "11. kolo",
        "player_a_team": "COKERY",
        "player_b_team": "BOMBERE"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Dmytro LUKACHUK",
        "player_b": "Slavomír KRÁLIK",
        "date": "11. kolo",
        "player_a_team": "COKERY",
        "player_b_team": "BOMBERE"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Milan SUCHÝ",
        "player_b": "Ján ŘIHAK",
        "date": "11. kolo",
        "player_a_team": "COKERY",
        "player_b_team": "BOMBERE"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Miro. HARČÁRIK",
        "player_b": "Ondrej KRÁLIK",
        "date": "11. kolo",
        "player_a_team": "COKERY",
        "player_b_team": "BOMBERE"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Jaroslav WIENER",
        "player_b": "Slavomír KRÁLIK",
        "date": "11. kolo",
        "player_a_team": "COKERY",
        "player_b_team": "BOMBERE"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Dmytro LUKACHUK",
        "player_b": "Ján ŘIHAK",
        "date": "11. kolo",
        "player_a_team": "COKERY",
        "player_b_team": "BOMBERE"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Peter SZCZECZINA",
        "player_b": "Ján GUZY",
        "date": "11. kolo",
        "player_a_team": "COKERY",
        "player_b_team": "BOMBERE"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Pavol CINKANIČ",
        "player_b": "Radoslav POĽA",
        "date": "11. kolo",
        "player_a_team": "MYSLAVA \"Ž\"",
        "player_b_team": "BERNARD Club"
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Martina KOLIBÁROVÁ",
        "player_b": "Slav. FEČKE",
        "date": "11. kolo",
        "player_a_team": "MYSLAVA \"Ž\"",
        "player_b_team": "BERNARD Club"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Jarmila SOMOŠOVÁ",
        "player_b": "Roman ČIŽMÁR",
        "date": "11. kolo",
        "player_a_team": "MYSLAVA \"Ž\"",
        "player_b_team": "BERNARD Club"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Zuzana GAŽI",
        "player_b": "Stanislav PČOLA",
        "date": "11. kolo",
        "player_a_team": "MYSLAVA \"Ž\"",
        "player_b_team": "BERNARD Club"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Iveta SOLČANIOVÁ",
        "player_b": "Slav. FEČKE",
        "date": "11. kolo",
        "player_a_team": "MYSLAVA \"Ž\"",
        "player_b_team": "BERNARD Club"
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Martina KOLIBÁROVÁ",
        "player_b": "Roman ČIŽMÁR",
        "date": "11. kolo",
        "player_a_team": "MYSLAVA \"Ž\"",
        "player_b_team": "BERNARD Club"
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "Jarmila SOMOŠOVÁ",
        "player_b": "Stanislav PČOLA",
        "date": "11. kolo",
        "player_a_team": "MYSLAVA \"Ž\"",
        "player_b_team": "BERNARD Club"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Zuzana GAŽI",
        "player_b": "Radoslav POĽA",
        "date": "11. kolo",
        "player_a_team": "MYSLAVA \"Ž\"",
        "player_b_team": "BERNARD Club"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Pavol CINKANIČ",
        "player_b": "Roman ČIŽMÁR",
        "date": "11. kolo",
        "player_a_team": "MYSLAVA \"Ž\"",
        "player_b_team": "BERNARD Club"
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "Martina KOLIBÁROVÁ",
        "player_b": "Stanislav PČOLA",
        "date": "11. kolo",
        "player_a_team": "MYSLAVA \"Ž\"",
        "player_b_team": "BERNARD Club"
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "Iveta SOLČANIOVÁ",
        "player_b": "Radoslav POĽA",
        "date": "11. kolo",
        "player_a_team": "MYSLAVA \"Ž\"",
        "player_b_team": "BERNARD Club"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Zuzana GAŽI",
        "player_b": "Slav. FEČKE",
        "date": "11. kolo",
        "player_a_team": "MYSLAVA \"Ž\"",
        "player_b_team": "BERNARD Club"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Pavol CINKANIČ",
        "player_b": "Stanislav PČOLA",
        "date": "11. kolo",
        "player_a_team": "MYSLAVA \"Ž\"",
        "player_b_team": "BERNARD Club"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Martina KOLIBÁROVÁ",
        "player_b": "Radoslav POĽA",
        "date": "11. kolo",
        "player_a_team": "MYSLAVA \"Ž\"",
        "player_b_team": "BERNARD Club"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Jarmila SOMOŠOVÁ",
        "player_b": "Slav. FEČKE",
        "date": "11. kolo",
        "player_a_team": "MYSLAVA \"Ž\"",
        "player_b_team": "BERNARD Club"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Iveta SOLČANIOVÁ",
        "player_b": "Roman ČIŽMÁR",
        "date": "11. kolo",
        "player_a_team": "MYSLAVA \"Ž\"",
        "player_b_team": "BERNARD Club"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Ján PETRŽALA",
        "player_b": "Karol GERGELY",
        "date": "11. kolo",
        "player_a_team": "REPREX",
        "player_b_team": "TTC KVP"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Peter RUSNÁK",
        "player_b": "Eduard KUDLA",
        "date": "11. kolo",
        "player_a_team": "REPREX",
        "player_b_team": "TTC KVP"
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "Miloslav KOCÚR",
        "player_b": "Andrej MAKRANSKÝ",
        "date": "11. kolo",
        "player_a_team": "REPREX",
        "player_b_team": "TTC KVP"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Milan PAŽIČ",
        "player_b": "Tomáš BEKECS",
        "date": "11. kolo",
        "player_a_team": "REPREX",
        "player_b_team": "TTC KVP"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Ján PETRŽALA",
        "player_b": "Eduard KUDLA",
        "date": "11. kolo",
        "player_a_team": "REPREX",
        "player_b_team": "TTC KVP"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Peter RUSNÁK",
        "player_b": "Andrej MAKRANSKÝ",
        "date": "11. kolo",
        "player_a_team": "REPREX",
        "player_b_team": "TTC KVP"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Miloslav KOCÚR",
        "player_b": "Tomáš BEKECS",
        "date": "11. kolo",
        "player_a_team": "REPREX",
        "player_b_team": "TTC KVP"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Milan PAŽIČ",
        "player_b": "Karol GERGELY",
        "date": "11. kolo",
        "player_a_team": "REPREX",
        "player_b_team": "TTC KVP"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Ján PETRŽALA",
        "player_b": "Andrej MAKRANSKÝ",
        "date": "11. kolo",
        "player_a_team": "REPREX",
        "player_b_team": "TTC KVP"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Peter RUSNÁK",
        "player_b": "Tomáš BEKECS",
        "date": "11. kolo",
        "player_a_team": "REPREX",
        "player_b_team": "TTC KVP"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Miloslav KOCÚR",
        "player_b": "Karol GERGELY",
        "date": "11. kolo",
        "player_a_team": "REPREX",
        "player_b_team": "TTC KVP"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Milan PAŽIČ",
        "player_b": "Eduard KUDLA",
        "date": "11. kolo",
        "player_a_team": "REPREX",
        "player_b_team": "TTC KVP"
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "Ján PETRŽALA",
        "player_b": "Tomáš BEKECS",
        "date": "11. kolo",
        "player_a_team": "REPREX",
        "player_b_team": "TTC KVP"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Peter RUSNÁK",
        "player_b": "Karol GERGELY",
        "date": "11. kolo",
        "player_a_team": "REPREX",
        "player_b_team": "TTC KVP"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Miloslav KOCÚR",
        "player_b": "Eduard KUDLA",
        "date": "11. kolo",
        "player_a_team": "REPREX",
        "player_b_team": "TTC KVP"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Milan PAŽIČ",
        "player_b": "Andrej MAKRANSKÝ",
        "date": "11. kolo",
        "player_a_team": "REPREX",
        "player_b_team": "TTC KVP"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Peter BARSA",
        "player_b": "Julus WÉBER",
        "date": "11. kolo",
        "player_a_team": "KOMÉTA KE",
        "player_b_team": "ASTORIA FIT"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Andrej KARLIK",
        "player_b": "Marek KUNDRIK",
        "date": "11. kolo",
        "player_a_team": "KOMÉTA KE",
        "player_b_team": "ASTORIA FIT"
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Peter ŠTEFANCO",
        "player_b": "Andrej KAČKOŠ",
        "date": "11. kolo",
        "player_a_team": "KOMÉTA KE",
        "player_b_team": "ASTORIA FIT"
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "Milan KRASNAY",
        "player_b": "Viktor ŠIDLÍK",
        "date": "11. kolo",
        "player_a_team": "KOMÉTA KE",
        "player_b_team": "ASTORIA FIT"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Peter BARSA",
        "player_b": "Marek KUNDRIK",
        "date": "11. kolo",
        "player_a_team": "KOMÉTA KE",
        "player_b_team": "ASTORIA FIT"
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "Andrej KARLIK",
        "player_b": "Matúš HRČKA",
        "date": "11. kolo",
        "player_a_team": "KOMÉTA KE",
        "player_b_team": "ASTORIA FIT"
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "Peter ŠTEFANCO",
        "player_b": "Viktor ŠIDLÍK",
        "date": "11. kolo",
        "player_a_team": "KOMÉTA KE",
        "player_b_team": "ASTORIA FIT"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Peter MACH",
        "player_b": "Julus WÉBER",
        "date": "11. kolo",
        "player_a_team": "KOMÉTA KE",
        "player_b_team": "ASTORIA FIT"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Peter BARSA",
        "player_b": "Andrej KAČKOŠ",
        "date": "11. kolo",
        "player_a_team": "KOMÉTA KE",
        "player_b_team": "ASTORIA FIT"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Andrej KARLIK",
        "player_b": "Viktor ŠIDLÍK",
        "date": "11. kolo",
        "player_a_team": "KOMÉTA KE",
        "player_b_team": "ASTORIA FIT"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Peter ŠTEFANCO",
        "player_b": "Matúš HRČKA",
        "date": "11. kolo",
        "player_a_team": "KOMÉTA KE",
        "player_b_team": "ASTORIA FIT"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Milan KRASNAY",
        "player_b": "Marek KUNDRIK",
        "date": "11. kolo",
        "player_a_team": "KOMÉTA KE",
        "player_b_team": "ASTORIA FIT"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Peter BARSA",
        "player_b": "Matúš HRČKA",
        "date": "11. kolo",
        "player_a_team": "KOMÉTA KE",
        "player_b_team": "ASTORIA FIT"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Andrej KARLIK",
        "player_b": "Julus WÉBER",
        "date": "11. kolo",
        "player_a_team": "KOMÉTA KE",
        "player_b_team": "ASTORIA FIT"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Peter ŠTEFANCO",
        "player_b": "Marek KUNDRIK",
        "date": "11. kolo",
        "player_a_team": "KOMÉTA KE",
        "player_b_team": "ASTORIA FIT"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Peter MACH",
        "player_b": "Andrej KAČKOŠ",
        "date": "11. kolo",
        "player_a_team": "KOMÉTA KE",
        "player_b_team": "ASTORIA FIT"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Peter RUŽIČKA",
        "player_b": "Peter POLÁK",
        "date": "11. kolo",
        "player_a_team": "TT TEAM",
        "player_b_team": "SOŠ Ž"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Andrej FELBER",
        "player_b": "Slavomír KEŠELÁK",
        "date": "11. kolo",
        "player_a_team": "TT TEAM",
        "player_b_team": "SOŠ Ž"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Juraj POLYAK",
        "player_b": "Jozef MOLNÁR",
        "date": "11. kolo",
        "player_a_team": "TT TEAM",
        "player_b_team": "SOŠ Ž"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Ľubomír BENDZÁK",
        "player_b": "Vilo POLÁK",
        "date": "11. kolo",
        "player_a_team": "TT TEAM",
        "player_b_team": "SOŠ Ž"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Marek SIMKO",
        "player_b": "Slavomír KEŠELÁK",
        "date": "11. kolo",
        "player_a_team": "TT TEAM",
        "player_b_team": "SOŠ Ž"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Andrej FELBER",
        "player_b": "Jozef MOLNÁR",
        "date": "11. kolo",
        "player_a_team": "TT TEAM",
        "player_b_team": "SOŠ Ž"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Juraj POLYAK",
        "player_b": "Vilo POLÁK",
        "date": "11. kolo",
        "player_a_team": "TT TEAM",
        "player_b_team": "SOŠ Ž"
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "Ľubomír BENDZÁK",
        "player_b": "Peter POLÁK",
        "date": "11. kolo",
        "player_a_team": "TT TEAM",
        "player_b_team": "SOŠ Ž"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Peter RUŽIČKA",
        "player_b": "Jozef MOLNÁR",
        "date": "11. kolo",
        "player_a_team": "TT TEAM",
        "player_b_team": "SOŠ Ž"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Andrej FELBER",
        "player_b": "Vilo POLÁK",
        "date": "11. kolo",
        "player_a_team": "TT TEAM",
        "player_b_team": "SOŠ Ž"
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "Marek SIMKO",
        "player_b": "Peter POLÁK",
        "date": "11. kolo",
        "player_a_team": "TT TEAM",
        "player_b_team": "SOŠ Ž"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Ľubomír BENDZÁK",
        "player_b": "Slavomír KEŠELÁK",
        "date": "11. kolo",
        "player_a_team": "TT TEAM",
        "player_b_team": "SOŠ Ž"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Peter RUŽIČKA",
        "player_b": "Vilo POLÁK",
        "date": "11. kolo",
        "player_a_team": "TT TEAM",
        "player_b_team": "SOŠ Ž"
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Andrej FELBER",
        "player_b": "Peter POLÁK",
        "date": "11. kolo",
        "player_a_team": "TT TEAM",
        "player_b_team": "SOŠ Ž"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Juraj POLYAK",
        "player_b": "Slavomír KEŠELÁK",
        "date": "11. kolo",
        "player_a_team": "TT TEAM",
        "player_b_team": "SOŠ Ž"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Marek SIMKO",
        "player_b": "Jozef MOLNÁR",
        "date": "11. kolo",
        "player_a_team": "TT TEAM",
        "player_b_team": "SOŠ Ž"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Julius PILLÁR",
        "player_b": "Peter JAKUBEC",
        "date": "11. kolo",
        "player_a_team": "EUROCAST",
        "player_b_team": "SKP \"A\""
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Peter ŠEBEK st.",
        "player_b": "Martin SOĽÁR",
        "date": "11. kolo",
        "player_a_team": "EUROCAST",
        "player_b_team": "SKP \"A\""
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Patrík TIRPÁK",
        "player_b": "Miroslav KOSCELANSKÝ",
        "date": "11. kolo",
        "player_a_team": "EUROCAST",
        "player_b_team": "SKP \"A\""
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Jozef ZAVACKÝ",
        "player_b": "Matej KOVAČIK",
        "date": "11. kolo",
        "player_a_team": "EUROCAST",
        "player_b_team": "SKP \"A\""
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "Julius PILLÁR",
        "player_b": "Martin SOĽÁR",
        "date": "11. kolo",
        "player_a_team": "EUROCAST",
        "player_b_team": "SKP \"A\""
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Peter ŠEBEK st.",
        "player_b": "Miroslav KOSCELANSKÝ",
        "date": "11. kolo",
        "player_a_team": "EUROCAST",
        "player_b_team": "SKP \"A\""
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "Patrík TIRPÁK",
        "player_b": "Matej KOVAČIK",
        "date": "11. kolo",
        "player_a_team": "EUROCAST",
        "player_b_team": "SKP \"A\""
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Jozef HUDÁK",
        "player_b": "Peter JAKUBEC",
        "date": "11. kolo",
        "player_a_team": "EUROCAST",
        "player_b_team": "SKP \"A\""
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Julius PILLÁR",
        "player_b": "Miroslav KOSCELANSKÝ",
        "date": "11. kolo",
        "player_a_team": "EUROCAST",
        "player_b_team": "SKP \"A\""
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Peter ŠEBEK st.",
        "player_b": "Matej KOVAČIK",
        "date": "11. kolo",
        "player_a_team": "EUROCAST",
        "player_b_team": "SKP \"A\""
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Patrík TIRPÁK",
        "player_b": "Peter JAKUBEC",
        "date": "11. kolo",
        "player_a_team": "EUROCAST",
        "player_b_team": "SKP \"A\""
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Jozef ZAVACKÝ",
        "player_b": "Martin SOĽÁR",
        "date": "11. kolo",
        "player_a_team": "EUROCAST",
        "player_b_team": "SKP \"A\""
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "Julius PILLÁR",
        "player_b": "Matej KOVAČIK",
        "date": "11. kolo",
        "player_a_team": "EUROCAST",
        "player_b_team": "SKP \"A\""
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Peter ŠEBEK st.",
        "player_b": "Peter JAKUBEC",
        "date": "11. kolo",
        "player_a_team": "EUROCAST",
        "player_b_team": "SKP \"A\""
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Patrík TIRPÁK",
        "player_b": "Martin SOĽÁR",
        "date": "11. kolo",
        "player_a_team": "EUROCAST",
        "player_b_team": "SKP \"A\""
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Jozef HUDÁK",
        "player_b": "Miroslav KOSCELANSKÝ",
        "date": "11. kolo",
        "player_a_team": "EUROCAST",
        "player_b_team": "SKP \"A\""
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Matúš HRČKA\/Marek KUNDRIK",
        "player_b": "Tomáš BEKECS\/Karol GERGELY",
        "date": "12. kolo",
        "player_a_team": "ASTORIA FIT",
        "player_b_team": "TTC KVP",
        "doubles": true
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Martin MUCHA\/Andrej KAČKOŠ",
        "player_b": "Andrej MAKRANSKÝ\/Eduard KUDLA",
        "date": "12. kolo",
        "player_a_team": "ASTORIA FIT",
        "player_b_team": "TTC KVP",
        "doubles": true
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Martin MUCHA",
        "player_b": "Karol GERGELY",
        "date": "12. kolo",
        "player_a_team": "ASTORIA FIT",
        "player_b_team": "TTC KVP"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Matúš HRČKA",
        "player_b": "Tomáš BEKECS",
        "date": "12. kolo",
        "player_a_team": "ASTORIA FIT",
        "player_b_team": "TTC KVP"
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Viktor ŠIDLÍK",
        "player_b": "Andrej MAKRANSKÝ",
        "date": "12. kolo",
        "player_a_team": "ASTORIA FIT",
        "player_b_team": "TTC KVP"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Marek KUNDRIK",
        "player_b": "Eduard KUDLA",
        "date": "12. kolo",
        "player_a_team": "ASTORIA FIT",
        "player_b_team": "TTC KVP"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Martin MUCHA",
        "player_b": "Tomáš BEKECS",
        "date": "12. kolo",
        "player_a_team": "ASTORIA FIT",
        "player_b_team": "TTC KVP"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Matúš HRČKA",
        "player_b": "Andrej MAKRANSKÝ",
        "date": "12. kolo",
        "player_a_team": "ASTORIA FIT",
        "player_b_team": "TTC KVP"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Viktor ŠIDLÍK",
        "player_b": "Eduard KUDLA",
        "date": "12. kolo",
        "player_a_team": "ASTORIA FIT",
        "player_b_team": "TTC KVP"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Marek KUNDRIK",
        "player_b": "Karol GERGELY",
        "date": "12. kolo",
        "player_a_team": "ASTORIA FIT",
        "player_b_team": "TTC KVP"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Martin MUCHA",
        "player_b": "Andrej MAKRANSKÝ",
        "date": "12. kolo",
        "player_a_team": "ASTORIA FIT",
        "player_b_team": "TTC KVP"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Matúš HRČKA",
        "player_b": "Eduard KUDLA",
        "date": "12. kolo",
        "player_a_team": "ASTORIA FIT",
        "player_b_team": "TTC KVP"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Andrej KAČKOŠ",
        "player_b": "Karol GERGELY",
        "date": "12. kolo",
        "player_a_team": "ASTORIA FIT",
        "player_b_team": "TTC KVP"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Marek KUNDRIK",
        "player_b": "Tomáš BEKECS",
        "date": "12. kolo",
        "player_a_team": "ASTORIA FIT",
        "player_b_team": "TTC KVP"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Martin MUCHA",
        "player_b": "Eduard KUDLA",
        "date": "12. kolo",
        "player_a_team": "ASTORIA FIT",
        "player_b_team": "TTC KVP"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Matúš HRČKA",
        "player_b": "Karol GERGELY",
        "date": "12. kolo",
        "player_a_team": "ASTORIA FIT",
        "player_b_team": "TTC KVP"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Viktor ŠIDLÍK",
        "player_b": "Tomáš BEKECS",
        "date": "12. kolo",
        "player_a_team": "ASTORIA FIT",
        "player_b_team": "TTC KVP"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Andrej KAČKOŠ",
        "player_b": "Andrej MAKRANSKÝ",
        "date": "12. kolo",
        "player_a_team": "ASTORIA FIT",
        "player_b_team": "TTC KVP"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Peter POLÁK\/Miro. HANIČÁK",
        "player_b": "David LEŠUNDÁK\/Martin ĎURIŠIN",
        "date": "12. kolo",
        "player_a_team": "SOŠ Ž",
        "player_b_team": "SKP \"B\"",
        "doubles": true
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Igor BAŠTI\/Jozef MOLNÁR",
        "player_b": "Michal NINITZ\/Marek SKYBA",
        "date": "12. kolo",
        "player_a_team": "SOŠ Ž",
        "player_b_team": "SKP \"B\"",
        "doubles": true
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Peter POLÁK",
        "player_b": "David LEŠUNDÁK",
        "date": "12. kolo",
        "player_a_team": "SOŠ Ž",
        "player_b_team": "SKP \"B\""
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Igor BAŠTI",
        "player_b": "Martin ĎURIŠIN",
        "date": "12. kolo",
        "player_a_team": "SOŠ Ž",
        "player_b_team": "SKP \"B\""
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "Miro. HANIČÁK",
        "player_b": "Michal NINITZ",
        "date": "12. kolo",
        "player_a_team": "SOŠ Ž",
        "player_b_team": "SKP \"B\""
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Jozef MOLNÁR",
        "player_b": "Marek SKYBA",
        "date": "12. kolo",
        "player_a_team": "SOŠ Ž",
        "player_b_team": "SKP \"B\""
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "Slavomír KEŠELÁK",
        "player_b": "Martin ĎURIŠIN",
        "date": "12. kolo",
        "player_a_team": "SOŠ Ž",
        "player_b_team": "SKP \"B\""
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Igor BAŠTI",
        "player_b": "Michal NINITZ",
        "date": "12. kolo",
        "player_a_team": "SOŠ Ž",
        "player_b_team": "SKP \"B\""
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Miro. HANIČÁK",
        "player_b": "Marek SKYBA",
        "date": "12. kolo",
        "player_a_team": "SOŠ Ž",
        "player_b_team": "SKP \"B\""
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Jozef MOLNÁR",
        "player_b": "David LEŠUNDÁK",
        "date": "12. kolo",
        "player_a_team": "SOŠ Ž",
        "player_b_team": "SKP \"B\""
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Peter POLÁK",
        "player_b": "Michal NINITZ",
        "date": "12. kolo",
        "player_a_team": "SOŠ Ž",
        "player_b_team": "SKP \"B\""
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Igor BAŠTI",
        "player_b": "Marek SKYBA",
        "date": "12. kolo",
        "player_a_team": "SOŠ Ž",
        "player_b_team": "SKP \"B\""
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Slavomír KEŠELÁK",
        "player_b": "David LEŠUNDÁK",
        "date": "12. kolo",
        "player_a_team": "SOŠ Ž",
        "player_b_team": "SKP \"B\""
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Jozef MOLNÁR",
        "player_b": "Martin ĎURIŠIN",
        "date": "12. kolo",
        "player_a_team": "SOŠ Ž",
        "player_b_team": "SKP \"B\""
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Peter POLÁK",
        "player_b": "Marek SKYBA",
        "date": "12. kolo",
        "player_a_team": "SOŠ Ž",
        "player_b_team": "SKP \"B\""
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Igor BAŠTI",
        "player_b": "David LEŠUNDÁK",
        "date": "12. kolo",
        "player_a_team": "SOŠ Ž",
        "player_b_team": "SKP \"B\""
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Miro. HANIČÁK",
        "player_b": "Martin ĎURIŠIN",
        "date": "12. kolo",
        "player_a_team": "SOŠ Ž",
        "player_b_team": "SKP \"B\""
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Slavomír KEŠELÁK",
        "player_b": "Michal NINITZ",
        "date": "12. kolo",
        "player_a_team": "SOŠ Ž",
        "player_b_team": "SKP \"B\""
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Marián HOVAN\/Milan ŠOLC",
        "player_b": "M. ZÁRIK\/Luboš MRÁZ",
        "date": "12. kolo",
        "player_a_team": "MYSLAVA",
        "player_b_team": "MONTREAL",
        "doubles": true
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Ján FOTTA\/Jozef FOTTA",
        "player_b": "Štefan PČOLA\/Milan MICHLOVIČ",
        "date": "12. kolo",
        "player_a_team": "MYSLAVA",
        "player_b_team": "MONTREAL",
        "doubles": true
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Jozef FOTTA",
        "player_b": "M. ZÁRIK",
        "date": "12. kolo",
        "player_a_team": "MYSLAVA",
        "player_b_team": "MONTREAL"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Marián HOVAN",
        "player_b": "Milan MICHLOVIČ",
        "date": "12. kolo",
        "player_a_team": "MYSLAVA",
        "player_b_team": "MONTREAL"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Vladimír VARGOVČÁK",
        "player_b": "Štefan PČOLA",
        "date": "12. kolo",
        "player_a_team": "MYSLAVA",
        "player_b_team": "MONTREAL"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Ján FOTTA",
        "player_b": "Luboš MRÁZ",
        "date": "12. kolo",
        "player_a_team": "MYSLAVA",
        "player_b_team": "MONTREAL"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Jozef FOTTA",
        "player_b": "Milan MICHLOVIČ",
        "date": "12. kolo",
        "player_a_team": "MYSLAVA",
        "player_b_team": "MONTREAL"
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "Marián HOVAN",
        "player_b": "Štefan PČOLA",
        "date": "12. kolo",
        "player_a_team": "MYSLAVA",
        "player_b_team": "MONTREAL"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Vladimír VARGOVČÁK",
        "player_b": "Luboš MRÁZ",
        "date": "12. kolo",
        "player_a_team": "MYSLAVA",
        "player_b_team": "MONTREAL"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Ján FOTTA",
        "player_b": "M. ZÁRIK",
        "date": "12. kolo",
        "player_a_team": "MYSLAVA",
        "player_b_team": "MONTREAL"
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Jozef FOTTA",
        "player_b": "Štefan PČOLA",
        "date": "12. kolo",
        "player_a_team": "MYSLAVA",
        "player_b_team": "MONTREAL"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Marián HOVAN",
        "player_b": "Luboš MRÁZ",
        "date": "12. kolo",
        "player_a_team": "MYSLAVA",
        "player_b_team": "MONTREAL"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Vladimír VARGOVČÁK",
        "player_b": "M. ZÁRIK",
        "date": "12. kolo",
        "player_a_team": "MYSLAVA",
        "player_b_team": "MONTREAL"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Milan ŠOLC",
        "player_b": "Milan MICHLOVIČ",
        "date": "12. kolo",
        "player_a_team": "MYSLAVA",
        "player_b_team": "MONTREAL"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Jozef FOTTA",
        "player_b": "Luboš MRÁZ",
        "date": "12. kolo",
        "player_a_team": "MYSLAVA",
        "player_b_team": "MONTREAL"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Marián HOVAN",
        "player_b": "M. ZÁRIK",
        "date": "12. kolo",
        "player_a_team": "MYSLAVA",
        "player_b_team": "MONTREAL"
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Vladimír VARGOVČÁK",
        "player_b": "Milan MICHLOVIČ",
        "date": "12. kolo",
        "player_a_team": "MYSLAVA",
        "player_b_team": "MONTREAL"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Milan ŠOLC",
        "player_b": "Štefan PČOLA",
        "date": "12. kolo",
        "player_a_team": "MYSLAVA",
        "player_b_team": "MONTREAL"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "WO",
        "player_b": "Tibor FIĽAK\/Stanislav PČOLA",
        "date": "12. kolo",
        "player_a_team": "SKP \"A\"",
        "player_b_team": "BERNARD Club",
        "doubles": true
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Matej KOVAČIK\/Martin SOĽÁR",
        "player_b": "Roman ČIŽMÁR\/Radoslav POĽA",
        "date": "12. kolo",
        "player_a_team": "SKP \"A\"",
        "player_b_team": "BERNARD Club",
        "doubles": true
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "WO",
        "player_b": "Stanislav PČOLA",
        "date": "12. kolo",
        "player_a_team": "SKP \"A\"",
        "player_b_team": "BERNARD Club"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Martin SOĽÁR",
        "player_b": "Tibor FIĽAK",
        "date": "12. kolo",
        "player_a_team": "SKP \"A\"",
        "player_b_team": "BERNARD Club"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Miroslav KOSCELANSKÝ",
        "player_b": "Roman ČIŽMÁR",
        "date": "12. kolo",
        "player_a_team": "SKP \"A\"",
        "player_b_team": "BERNARD Club"
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "Matej KOVAČIK",
        "player_b": "Radoslav POĽA",
        "date": "12. kolo",
        "player_a_team": "SKP \"A\"",
        "player_b_team": "BERNARD Club"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "WO",
        "player_b": "Tibor FIĽAK",
        "date": "12. kolo",
        "player_a_team": "SKP \"A\"",
        "player_b_team": "BERNARD Club"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Martin SOĽÁR",
        "player_b": "Roman ČIŽMÁR",
        "date": "12. kolo",
        "player_a_team": "SKP \"A\"",
        "player_b_team": "BERNARD Club"
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Miroslav KOSCELANSKÝ",
        "player_b": "Radoslav POĽA",
        "date": "12. kolo",
        "player_a_team": "SKP \"A\"",
        "player_b_team": "BERNARD Club"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Matej KOVAČIK",
        "player_b": "Stanislav PČOLA",
        "date": "12. kolo",
        "player_a_team": "SKP \"A\"",
        "player_b_team": "BERNARD Club"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "WO",
        "player_b": "Roman ČIŽMÁR",
        "date": "12. kolo",
        "player_a_team": "SKP \"A\"",
        "player_b_team": "BERNARD Club"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Martin SOĽÁR",
        "player_b": "Radoslav POĽA",
        "date": "12. kolo",
        "player_a_team": "SKP \"A\"",
        "player_b_team": "BERNARD Club"
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Miroslav KOSCELANSKÝ",
        "player_b": "Stanislav PČOLA",
        "date": "12. kolo",
        "player_a_team": "SKP \"A\"",
        "player_b_team": "BERNARD Club"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Matej KOVAČIK",
        "player_b": "Tibor FIĽAK",
        "date": "12. kolo",
        "player_a_team": "SKP \"A\"",
        "player_b_team": "BERNARD Club"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "WO",
        "player_b": "Radoslav POĽA",
        "date": "12. kolo",
        "player_a_team": "SKP \"A\"",
        "player_b_team": "BERNARD Club"
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Martin SOĽÁR",
        "player_b": "Stanislav PČOLA",
        "date": "12. kolo",
        "player_a_team": "SKP \"A\"",
        "player_b_team": "BERNARD Club"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Miroslav KOSCELANSKÝ",
        "player_b": "Tibor FIĽAK",
        "date": "12. kolo",
        "player_a_team": "SKP \"A\"",
        "player_b_team": "BERNARD Club"
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Matej KOVAČIK",
        "player_b": "Roman ČIŽMÁR",
        "date": "12. kolo",
        "player_a_team": "SKP \"A\"",
        "player_b_team": "BERNARD Club"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Pavol CINKANIČ\/Jarmila SOMOŠOVÁ",
        "player_b": "Ľubomír HOCHVART\/Miloslav KOCÚR",
        "date": "12. kolo",
        "player_a_team": "MYSLAVA \"Ž\"",
        "player_b_team": "REPREX",
        "doubles": true
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Izabela VARGOVÁ\/Martina KOLIBÁROVÁ",
        "player_b": "Peter RUSNÁK\/Štefan VENDEL",
        "date": "12. kolo",
        "player_a_team": "MYSLAVA \"Ž\"",
        "player_b_team": "REPREX",
        "doubles": true
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Martina KOLIBÁROVÁ",
        "player_b": "Ľubomír HOCHVART",
        "date": "12. kolo",
        "player_a_team": "MYSLAVA \"Ž\"",
        "player_b_team": "REPREX"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Pavol CINKANIČ",
        "player_b": "Miloslav KOCÚR",
        "date": "12. kolo",
        "player_a_team": "MYSLAVA \"Ž\"",
        "player_b_team": "REPREX"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Jarmila SOMOŠOVÁ",
        "player_b": "Štefan VENDEL",
        "date": "12. kolo",
        "player_a_team": "MYSLAVA \"Ž\"",
        "player_b_team": "REPREX"
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "Zuzana GAŽI",
        "player_b": "Peter RUSNÁK",
        "date": "12. kolo",
        "player_a_team": "MYSLAVA \"Ž\"",
        "player_b_team": "REPREX"
    },
    {
        "score_a": 1,
        "score_b": 3,
        "player_a": "Martina KOLIBÁROVÁ",
        "player_b": "Miloslav KOCÚR",
        "date": "12. kolo",
        "player_a_team": "MYSLAVA \"Ž\"",
        "player_b_team": "REPREX"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Pavol CINKANIČ",
        "player_b": "Štefan VENDEL",
        "date": "12. kolo",
        "player_a_team": "MYSLAVA \"Ž\"",
        "player_b_team": "REPREX"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Iveta SOLČANIOVÁ",
        "player_b": "Peter RUSNÁK",
        "date": "12. kolo",
        "player_a_team": "MYSLAVA \"Ž\"",
        "player_b_team": "REPREX"
    },
    {
        "score_a": 3,
        "score_b": 2,
        "player_a": "Izabela VARGOVÁ",
        "player_b": "Ľubomír HOCHVART",
        "date": "12. kolo",
        "player_a_team": "MYSLAVA \"Ž\"",
        "player_b_team": "REPREX"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Martina KOLIBÁROVÁ",
        "player_b": "Štefan VENDEL",
        "date": "12. kolo",
        "player_a_team": "MYSLAVA \"Ž\"",
        "player_b_team": "REPREX"
    },
    {
        "score_a": 3,
        "score_b": 1,
        "player_a": "Pavol CINKANIČ",
        "player_b": "Peter RUSNÁK",
        "date": "12. kolo",
        "player_a_team": "MYSLAVA \"Ž\"",
        "player_b_team": "REPREX"
    },
    {
        "score_a": 2,
        "score_b": 3,
        "player_a": "Jarmila SOMOŠOVÁ",
        "player_b": "Ľubomír HOCHVART",
        "date": "12. kolo",
        "player_a_team": "MYSLAVA \"Ž\"",
        "player_b_team": "REPREX"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Zuzana GAŽI",
        "player_b": "Miloslav KOCÚR",
        "date": "12. kolo",
        "player_a_team": "MYSLAVA \"Ž\"",
        "player_b_team": "REPREX"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Martina KOLIBÁROVÁ",
        "player_b": "Peter RUSNÁK",
        "date": "12. kolo",
        "player_a_team": "MYSLAVA \"Ž\"",
        "player_b_team": "REPREX"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Pavol CINKANIČ",
        "player_b": "Ľubomír HOCHVART",
        "date": "12. kolo",
        "player_a_team": "MYSLAVA \"Ž\"",
        "player_b_team": "REPREX"
    },
    {
        "score_a": 0,
        "score_b": 3,
        "player_a": "Iveta SOLČANIOVÁ",
        "player_b": "Miloslav KOCÚR",
        "date": "12. kolo",
        "player_a_team": "MYSLAVA \"Ž\"",
        "player_b_team": "REPREX"
    },
    {
        "score_a": 3,
        "score_b": 0,
        "player_a": "Izabela VARGOVÁ",
        "player_b": "Štefan VENDEL",
        "date": "12. kolo",
        "player_a_team": "MYSLAVA \"Ž\"",
        "player_b_team": "REPREX"
    }
]
