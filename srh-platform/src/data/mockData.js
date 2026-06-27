// All data below is MOCK / DUMMY data for frontend demo purposes only.

import patCumminsImg from "../assets/players/pat-cummins.png";
import abhishekSharmaImg from "../assets/players/abhishek-sharma.png";
import travisHeadImg from "../assets/players/travis-head.png";
import ishanKishanImg from "../assets/players/ishan-kishan.png";
import heinrichKlaasenImg from "../assets/players/heinrich-klaasen.png";
import nitishReddyImg from "../assets/players/nitish-reddy.png";
import aniketVermaImg from "../assets/players/aniket-verma.png";
import salilAroraImg from "../assets/players/salil-arora.png";
import jaydevUnadkatImg from "../assets/players/jaydev-unadkat.png";
import liamLivingstoneImg from "../assets/players/liam-livingstone.png";
import kaminduMendisImg from "../assets/players/kamindu-mendis.png";
import eshanMalingaImg from "../assets/players/eshan-malinga.png";
import shivamMaviImg from "../assets/players/shivam-mavi.png";
import harshalPatelImg from "../assets/players/harshal-patel.png";
import harshDubeyImg from "../assets/players/harsh-dubey.png";
import zeeshanAnsariImg from "../assets/players/zeeshan-ansari.png";
import sakibHussainImg from "../assets/players/sakib-hussain.png";
import onkarTarmaleImg from "../assets/players/onkar-tarmale.png";
import prafulHingeImg from "../assets/players/praful-hinge.png";
import smaranRavichandranImg from "../assets/players/smaran-ravichandran.png";
import brydonCarseImg from "../assets/players/brydon-carse.png";
import shivangKumarImg from "../assets/players/shivang-kumar.png";
import amitKumarImg from "../assets/players/amit-kumar.png";
import krainsFultraImg from "../assets/players/krains-fultra.png";
import davidImg from "../assets/players/david.png";

import homeJerseyImg from "../assets/products/home-jersey.jpg";
import awayJerseyImg from "../assets/products/away-jersey.jpg";
import capImg from "../assets/products/cap.jpg";
import hoodieImg from "../assets/products/hoodie.jpg";
import mugImg from "../assets/products/mug.jpg";
import miniBatImg from "../assets/products/mini-bat.jpg";
import kidsJerseyImg from "../assets/products/kids-jersey.jpg";
import phoneCaseImg from "../assets/products/phone-case.jpg";

import gallery01 from "../assets/gallery/gallery-01.jpg";
import gallery02 from "../assets/gallery/gallery-02.jpg";
import gallery03 from "../assets/gallery/gallery-03.jpg";
import gallery04 from "../assets/gallery/gallery-04.jpg";
import gallery05 from "../assets/gallery/gallery-05.jpg";
import gallery06 from "../assets/gallery/gallery-06.jpg";
import gallery07 from "../assets/gallery/gallery-07.jpg";
import gallery08 from "../assets/gallery/gallery-08.jpg";
import gallery09 from "../assets/gallery/gallery-09.jpg";
import gallery10 from "../assets/gallery/gallery-10.jpg";
import gallery11 from "../assets/gallery/gallery-11.jpg";
import gallery12 from "../assets/gallery/gallery-12.jpg";
import gallery13 from "../assets/gallery/gallery-13.jpg";

export const teamStatus = "IPL 2026 — SRH FINISHED 3RD · 9W 5L · 18 PTS";

export const stats = [
  { icon: "🏆", value: 287, suffix: "", label: "Highest IPL Total", sub: "All-time record" },
  { icon: "💥", value: 178, suffix: "", label: "Sixes in IPL 2024", sub: "Season record" },
  { icon: "🏏", value: 125, suffix: "", label: "Powerplay Runs", sub: "Most in T20I" },
  { icon: "📈", value: 9, suffix: "W", label: "Wins This Season", sub: "3rd in standings" },
];

export const players = [
  {
    id: "pat-cummins",
    name: "Pat Cummins",
    number: 30,
    role: "Bowler",
    country: "Australia",
    tag: "Captain",
    battingStyle: "Right Handed Bat",
    bowlingStyle: "Right-arm Fast",
    runs: 312,
    wickets: 79,
    matches: 67,
    economy: 8.96,
    strikeRate: 132.4,
    photo: patCumminsImg,
    bio: "Australia's premier fast bowler leads Sunrisers Hyderabad into a new era, combining relentless pace with sharp tactical instincts.",
    blurb: "Captain · 79+ IPL wickets",
    career: [],
  },
  {
    id: "abhishek-sharma",
    name: "Abhishek Sharma",
    number: 4,
    role: "All-Rounder",
    country: "India",
    tag: "Vice-Captain",
    battingStyle: "Left Handed Bat",
    bowlingStyle: "Left-arm Orthodox",
    runs: 1823,
    wickets: 22,
    matches: 78,
    economy: 9.1,
    strikeRate: 164.5,
    photo: abhishekSharmaImg,
    bio: "An explosive top-order batter known for taking the attack to bowlers from ball one, now leading the line as vice-captain.",
    blurb: "Vice-Captain · 1,823 runs",
    career: [],
  },
  {
    id: "travis-head",
    name: "Travis Head",
    number: 62,
    role: "Batter",
    country: "Australia",
    tag: "",
    battingStyle: "Left Handed Bat",
    bowlingStyle: "Right-arm Off Break",
    runs: 1157,
    wickets: 2,
    matches: 39,
    economy: 11.2,
    strikeRate: 169.39,
    photo: travisHeadImg,
    bio: "A fearless opener whose blazing strokeplay has rewritten SRH's record books, including a stunning century at Wankhede.",
    blurb: "1,157 runs · SR 169",
    career: [],
  },
  {
    id: "ishan-kishan",
    name: "Ishan Kishan",
    number: 23,
    role: "Wicket-Keeper",
    country: "India",
    tag: "",
    battingStyle: "Left Handed Bat",
    bowlingStyle: "—",
    runs: 3078,
    wickets: 0,
    matches: 120,
    economy: null,
    strikeRate: 136,
    photo: ishanKishanImg,
    bio: "A dynamic wicketkeeper-batter with a proven record of match-winning knocks across IPL seasons.",
    career: [],
  },
  {
    id: "heinrich-klaasen",
    name: "Heinrich Klaasen",
    number: 45,
    role: "Wicket-Keeper",
    country: "South Africa",
    tag: "",
    battingStyle: "Right Handed Bat",
    bowlingStyle: "—",
    runs: 624,
    wickets: 0,
    matches: 14,
    economy: null,
    strikeRate: 176,
    photo: heinrichKlaasenImg,
    bio: "One of the most destructive finishers in world cricket, Klaasen has redefined the SRH middle order.",
    blurb: "624 runs in 2026",
    career: [],
  },
  {
    id: "jaydev-unadkat",
    name: "Jaydev Unadkat",
    number: 18,
    role: "Bowler",
    country: "India",
    tag: "",
    battingStyle: "Left Handed Bat",
    bowlingStyle: "Left-arm Medium-Fast",
    runs: 45,
    wickets: 38,
    matches: 41,
    economy: 9.2,
    strikeRate: 95,
    photo: jaydevUnadkatImg,
    bio: "A canny left-arm seamer prized for his death-overs variations.",
    career: [],
  },
  {
    id: "nitish-reddy",
    name: "Nitish Kumar Reddy",
    number: 88,
    role: "All-Rounder",
    country: "India",
    tag: "",
    battingStyle: "Right Handed Bat",
    bowlingStyle: "Right-arm Medium",
    runs: 398,
    wickets: 9,
    matches: 22,
    economy: 9.8,
    strikeRate: 148,
    photo: nitishReddyImg,
    bio: "A homegrown Hyderabad talent, Reddy's all-round skill has made him a fan favourite at Rajiv Gandhi Stadium.",
    blurb: "Test century at MCG",
    career: [],
  },
  {
    id: "liam-livingstone",
    name: "Liam Livingstone",
    number: 8,
    role: "All-Rounder",
    country: "England",
    tag: "",
    battingStyle: "Right Handed Bat",
    bowlingStyle: "Right-arm Off Break",
    runs: 612,
    wickets: 11,
    matches: 28,
    economy: 10.4,
    strikeRate: 158,
    photo: liamLivingstoneImg,
    bio: "A power-hitting all-rounder who can change games with bat or ball.",
    career: [],
  },
  {
    id: "kamindu-mendis",
    name: "Kamindu Mendis",
    number: 77,
    role: "All-Rounder",
    country: "Sri Lanka",
    tag: "",
    battingStyle: "Switch Hitter",
    bowlingStyle: "Slow Left-arm Orthodox",
    runs: 287,
    wickets: 14,
    matches: 19,
    economy: 8.7,
    strikeRate: 138,
    photo: kaminduMendisImg,
    bio: "A versatile switch-hitting all-rounder with control in the middle overs.",
    career: [],
  },
  {
    id: "eshan-malinga",
    name: "Eshan Malinga",
    number: 11,
    role: "Bowler",
    country: "Sri Lanka",
    tag: "",
    battingStyle: "Right Handed Bat",
    bowlingStyle: "Right-arm Fast",
    runs: 8,
    wickets: 16,
    matches: 9,
    economy: 9.6,
    strikeRate: 80,
    photo: eshanMalingaImg,
    bio: "A raw-pace young quick added to bolster the death-bowling reserves.",
    career: [],
  },
  {
    id: "shivam-mavi",
    name: "Shivam Mavi",
    number: 14,
    role: "Bowler",
    country: "India",
    tag: "",
    battingStyle: "Right Handed Bat",
    bowlingStyle: "Right-arm Fast-Medium",
    runs: 22,
    wickets: 19,
    matches: 16,
    economy: 9.4,
    strikeRate: 88,
    photo: shivamMaviImg,
    bio: "A skiddy fast-medium bowler known for sharp yorkers at the death.",
    career: [],
  },
  {
    id: "harshal-patel",
    name: "Harshal Patel",
    number: 27,
    role: "All-Rounder",
    country: "India",
    tag: "",
    battingStyle: "Right Handed Bat",
    bowlingStyle: "Right-arm Medium",
    runs: 64,
    wickets: 67,
    matches: 58,
    economy: 9.0,
    strikeRate: 110,
    photo: harshalPatelImg,
    bio: "A former Purple Cap winner valued for his variations and slower balls.",
    career: [],
  },
  {
    id: "harsh-dubey",
    name: "Harsh Dubey",
    number: 9,
    role: "All-Rounder",
    country: "India",
    tag: "",
    battingStyle: "Left Handed Bat",
    bowlingStyle: "Slow Left-arm Orthodox",
    runs: 96,
    wickets: 21,
    matches: 14,
    economy: 7.9,
    strikeRate: 121,
    photo: harshDubeyImg,
    bio: "An emerging left-arm spinner who also contributes handy lower-order runs.",
    career: [],
  },
  {
    id: "zeeshan-ansari",
    name: "Zeeshan Ansari",
    number: 19,
    role: "Bowler",
    country: "India",
    tag: "",
    battingStyle: "Right Handed Bat",
    bowlingStyle: "Right-arm Leg Break",
    runs: 6,
    wickets: 12,
    matches: 10,
    economy: 8.6,
    strikeRate: 70,
    photo: zeeshanAnsariImg,
    bio: "A domestic leg-spinner brought in for middle-overs control.",
    career: [],
  },
  {
    id: "aniket-verma",
    name: "Aniket Verma",
    number: 56,
    role: "Batter",
    country: "India",
    tag: "",
    battingStyle: "Right Handed Bat",
    bowlingStyle: "—",
    runs: 188,
    wickets: 0,
    matches: 9,
    economy: null,
    strikeRate: 152,
    photo: aniketVermaImg,
    bio: "A young domestic top-order talent picked as a power-hitting option.",
    career: [],
  },
  {
    id: "sakib-hussain",
    name: "Sakib Hussain",
    number: 33,
    role: "Bowler",
    country: "India",
    tag: "",
    battingStyle: "Right Handed Bat",
    bowlingStyle: "Right-arm Medium-Fast",
    runs: 4,
    wickets: 7,
    matches: 6,
    economy: 9.9,
    strikeRate: 60,
    photo: sakibHussainImg,
    bio: "A promising domestic pacer added for fast-bowling depth.",
    career: [],
  },
  {
    id: "onkar-tarmale",
    name: "Onkar Tarmale",
    number: 21,
    role: "Bowler",
    country: "India",
    tag: "",
    battingStyle: "Right Handed Bat",
    bowlingStyle: "Right-arm Medium",
    runs: 2,
    wickets: 5,
    matches: 5,
    economy: 8.8,
    strikeRate: 40,
    photo: onkarTarmaleImg,
    bio: "A domestic seamer rewarded for consistent first-class performances.",
    career: [],
  },
  {
    id: "praful-hinge",
    name: "Praful Hinge",
    number: 13,
    role: "Bowler",
    country: "India",
    tag: "",
    battingStyle: "Right Handed Bat",
    bowlingStyle: "Left-arm Medium",
    runs: 0,
    wickets: 3,
    matches: 4,
    economy: 9.3,
    strikeRate: 0,
    photo: prafulHingeImg,
    bio: "A left-arm seamer added late as auction-table value pick.",
    career: [],
  },
  {
    id: "smaran-ravichandran",
    name: "Smaran Ravichandran",
    number: 91,
    role: "Batter",
    country: "India",
    tag: "",
    battingStyle: "Right Handed Bat",
    bowlingStyle: "—",
    runs: 142,
    wickets: 0,
    matches: 8,
    economy: null,
    strikeRate: 134,
    photo: smaranRavichandranImg,
    bio: "A domestic keeper-batter retained for top-order batting depth.",
    career: [],
  },
  {
    id: "salil-arora",
    name: "Salil Arora",
    number: 26,
    role: "Wicket-Keeper",
    country: "India",
    tag: "",
    battingStyle: "Right Handed Bat",
    bowlingStyle: "—",
    runs: 96,
    wickets: 0,
    matches: 7,
    economy: null,
    strikeRate: 118,
    photo: salilAroraImg,
    bio: "A domestic keeper-batter adding depth behind the stumps.",
    career: [],
  },
  {
    id: "brydon-carse",
    name: "Brydon Carse",
    number: 98,
    role: "All-Rounder",
    country: "England",
    tag: "",
    battingStyle: "Right Handed Bat",
    bowlingStyle: "Right-arm Fast",
    runs: 132,
    wickets: 24,
    matches: 21,
    economy: 9.1,
    strikeRate: 142,
    photo: brydonCarseImg,
    bio: "An aggressive English pace-bowling all-rounder with lower-order hitting power.",
    career: [],
  },
  {
    id: "shivang-kumar",
    name: "Shivang Kumar",
    number: 16,
    role: "All-Rounder",
    country: "India",
    tag: "",
    battingStyle: "Right Handed Bat",
    bowlingStyle: "Right-arm Off Break",
    runs: 88,
    wickets: 17,
    matches: 12,
    economy: 8.5,
    strikeRate: 124,
    photo: shivangKumarImg,
    bio: "A domestic all-rounder offering balance to the lower middle order.",
    career: [],
  },
  {
    id: "amit-kumar",
    name: "Amit Kumar",
    number: 41,
    role: "Bowler",
    country: "India",
    tag: "",
    battingStyle: "Right Handed Bat",
    bowlingStyle: "Right-arm Fast-Medium",
    runs: 5,
    wickets: 9,
    matches: 7,
    economy: 9.0,
    strikeRate: 55,
    photo: amitKumarImg,
    bio: "A fast-medium bowler added for new-ball support.",
    career: [],
  },
  {
    id: "krains-fultra",
    name: "Krains Fultra",
    number: 7,
    role: "All-Rounder",
    country: "India",
    tag: "",
    battingStyle: "Right Handed Bat",
    bowlingStyle: "Slow Left-arm Orthodox",
    runs: 76,
    wickets: 13,
    matches: 11,
    economy: 8.2,
    strikeRate: 119,
    photo: krainsFultraImg,
    bio: "A versatile all-rounder rounding out the squad's depth.",
    career: [],
  },
  {
    id: "david",
    name: "David",
    number: 99,
    role: "Bowler",
    country: "—",
    tag: "",
    battingStyle: "Right Handed Bat",
    bowlingStyle: "Right-arm Medium",
    runs: 3,
    wickets: 6,
    matches: 5,
    economy: 9.5,
    strikeRate: 48,
    photo: davidImg,
    bio: "A reserve pace bowler added to the squad for cover.",
    career: [],
  },
];

export const coachingStaff = [
  { name: "Daniel Vettori", role: "Head Coach", photo: "https://images.unsplash.com/photo-1542144582-1ba00456b5e3?w=400&h=400&fit=crop" },
  { name: "Muttiah Muralitharan", role: "Bowling Coach", photo: "https://images.unsplash.com/photo-1500648767791-00d5a4ee9bc3?w=400&h=400&fit=crop" },
  { name: "Brian Lara", role: "Batting Consultant", photo: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&h=400&fit=crop" },
  { name: "James Pamment", role: "Fielding Coach", photo: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?w=400&h=400&fit=crop" },
];

export const management = [
  { name: "Kavya Maran", role: "Owner & Managing Director", photo: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400&h=400&fit=crop" },
  { name: "Anil Kumble", role: "Director of Cricket", photo: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=400&fit=crop" },
];

export const fixtures = [
  { id: 1, season: "IPL 2025", status: "upcoming", homeAway: "AWAY", teamA: "SRH", teamB: "RCB", date: "Mar 28, 2025", time: "7:30 PM IST", venue: "Chinnaswamy, Bengaluru" },
  { id: 2, season: "IPL 2025", status: "upcoming", homeAway: "HOME", teamA: "SRH", teamB: "CSK", date: "Apr 02, 2025", time: "7:30 PM IST", venue: "Rajiv Gandhi Stadium, Hyderabad" },
  { id: 3, season: "IPL 2025", status: "upcoming", homeAway: "AWAY", teamA: "SRH", teamB: "MI", date: "Apr 09, 2025", time: "3:30 PM IST", venue: "Wankhede Stadium, Mumbai" },
  { id: 4, season: "IPL 2025", status: "upcoming", homeAway: "HOME", teamA: "SRH", teamB: "KKR", date: "Apr 14, 2025", time: "7:30 PM IST", venue: "Rajiv Gandhi Stadium, Hyderabad" },
  { id: 5, season: "IPL 2024", status: "completed", homeAway: "HOME", teamA: "SRH", teamB: "MI", date: "Apr 28, 2024", time: "", venue: "Rajiv Gandhi Stadium, Hyderabad", result: "SRH won by 31 runs", scoreA: "287/3", scoreB: "246/8" },
  { id: 6, season: "IPL 2024", status: "completed", homeAway: "AWAY", teamA: "SRH", teamB: "PBKS", date: "Apr 21, 2024", time: "", venue: "IS Bindra Stadium, Mohali", result: "SRH won by 4 wickets", scoreA: "183/6", scoreB: "182/4" },
  { id: 7, season: "IPL 2024", status: "completed", homeAway: "HOME", teamA: "SRH", teamB: "GT", date: "Apr 14, 2024", time: "", venue: "Rajiv Gandhi Stadium, Hyderabad", result: "SRH won by 8 wickets", scoreA: "168/2", scoreB: "163/5" },
  { id: 8, season: "IPL 2024", status: "completed", homeAway: "AWAY", teamA: "SRH", teamB: "DC", date: "Apr 07, 2024", time: "", venue: "Arun Jaitley Stadium, Delhi", result: "SRH lost by 6 wickets", scoreA: "172/8", scoreB: "176/4" },
];

export const seasonMatches = [
  {
    id: 1, month: "MAY 2026", label: "Eliminator", statusTag: "RECENT", tournamentTag: "PLAYOFF",
    date: "27 May 2026", time: "19:30 IST", venue: "Maharaja Yadavindra Singh Stadium, Mullanpur",
    teamA: { code: "RR", name: "Rajasthan Royals", score: "187/5", dotColor: "#E11D48" },
    teamB: { code: "SRH", name: "Sunrisers Hyderabad", score: "169/9", dotColor: "#FF6B00" },
    outcome: "lost", result: "Rajasthan Royals beat Sunrisers Hyderabad by 18 runs",
  },
  {
    id: 2, month: "MAY 2026", label: "Match 67", statusTag: "RECENT", tournamentTag: "HOME",
    date: "17 May 2026", time: "19:30 IST", venue: "Rajiv Gandhi Intl. Stadium, Hyderabad",
    teamA: { code: "SRH", name: "Sunrisers Hyderabad", score: "210/7", dotColor: "#FF6B00" },
    teamB: { code: "RCB", name: "Royal Challengers Bengaluru", score: "154/7", dotColor: "#A91D2C" },
    outcome: "won", result: "Sunrisers Hyderabad beat Royal Challengers Bengaluru by 56 runs",
  },
  {
    id: 3, month: "MAY 2026", label: "Match 61", statusTag: "", tournamentTag: "AWAY",
    date: "10 May 2026", time: "15:30 IST", venue: "Wankhede Stadium, Mumbai",
    teamA: { code: "MI", name: "Mumbai Indians", score: "201/6", dotColor: "#1D4ED8" },
    teamB: { code: "SRH", name: "Sunrisers Hyderabad", score: "176/8", dotColor: "#FF6B00" },
    outcome: "lost", result: "Mumbai Indians beat Sunrisers Hyderabad by 25 runs",
  },
  {
    id: 4, month: "APRIL 2026", label: "Match 48", statusTag: "", tournamentTag: "HOME",
    date: "28 Apr 2026", time: "19:30 IST", venue: "Rajiv Gandhi Intl. Stadium, Hyderabad",
    teamA: { code: "SRH", name: "Sunrisers Hyderabad", score: "287/3", dotColor: "#FF6B00" },
    teamB: { code: "MI", name: "Mumbai Indians", score: "246/8", dotColor: "#1D4ED8" },
    outcome: "won", result: "Sunrisers Hyderabad beat Mumbai Indians by 31 runs",
  },
  {
    id: 5, month: "APRIL 2026", label: "Match 41", statusTag: "", tournamentTag: "AWAY",
    date: "21 Apr 2026", time: "19:30 IST", venue: "IS Bindra Stadium, Mohali",
    teamA: { code: "PBKS", name: "Punjab Kings", score: "182/4", dotColor: "#C026D3" },
    teamB: { code: "SRH", name: "Sunrisers Hyderabad", score: "183/6", dotColor: "#FF6B00" },
    outcome: "won", result: "Sunrisers Hyderabad beat Punjab Kings by 4 wickets",
  },
  {
    id: 6, month: "JUNE 2026", label: "Match 70", statusTag: "UPCOMING", tournamentTag: "HOME",
    date: "02 Jun 2026", time: "19:30 IST", venue: "Rajiv Gandhi Intl. Stadium, Hyderabad",
    teamA: { code: "SRH", name: "Sunrisers Hyderabad", score: "—", dotColor: "#FF6B00" },
    teamB: { code: "CSK", name: "Chennai Super Kings", score: "—", dotColor: "#F2C12E" },
    outcome: "upcoming", result: "",
  },
];


export const news = [
  { id: 1, tag: "RECORD", category: "Match Report", title: "SRH Scripts History: 287 Runs — The Highest Total In IPL History", excerpt: "Sunrisers Hyderabad rewrote the record books with a stunning 287-run total, shattering the previous IPL record in a breathtaking batting display.", date: "May 12, 2024", readTime: "3 min read", image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=900&h=500&fit=crop" },
  { id: 2, tag: "CENTURY", category: "Match Highlights", title: "Travis Head's Blazing Century Stuns Mumbai Indians At Wankhede", excerpt: "The Australian opener was in sublime form, smashing a 41-ball hundred and setting the tone for SRH's dominant run.", date: "Apr 28, 2024", readTime: "2 min read", image: "https://images.unsplash.com/photo-1626248801379-51a0748a5f96?w=600&h=400&fit=crop" },
  { id: 3, tag: "OFFICIAL", category: "Club News", title: "SRH Unveils New Away Jersey Ahead Of IPL 2025 Season", excerpt: "The franchise revealed a sleek new away kit blending tradition with a modern aesthetic, available now on the official store.", date: "Feb 18, 2025", readTime: "2 min read", image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=600&h=400&fit=crop" },
  { id: 4, tag: "MILESTONE", category: "Player News", title: "Bhuvneshwar Kumar Becomes Highest Wicket-Taker For SRH", excerpt: "The veteran seamer reached a new franchise milestone, reaffirming his status as one of SRH's greatest ever bowlers.", date: "Apr 30, 2024", readTime: "2 min read", image: "https://images.unsplash.com/photo-1593786267937-58d4a9c9a36f?w=600&h=400&fit=crop" },
  { id: 5, tag: "REVIEW", category: "Season Review", title: "Looking Back At SRH's Record-Breaking IPL 2024 Campaign", excerpt: "From a thunderous powerplay to the highest score in IPL history, we revisit the defining moments of an unforgettable season.", date: "May 25, 2024", readTime: "4 min read", image: "https://images.unsplash.com/photo-1607734834519-d8576ae60ea6?w=600&h=400&fit=crop" },
  { id: 6, tag: "TRAINING", category: "Behind The Scenes", title: "Inside SRH's Pre-Season Training Camp At Hyderabad", excerpt: "A look behind the curtain as the squad ramps up fitness and skill work ahead of the new campaign.", date: "Feb 02, 2025", readTime: "3 min read", image: "https://images.unsplash.com/photo-1593766827228-8737b4534aa6?w=600&h=400&fit=crop" },
];

export const videos = [
  { id: 1, title: "Highlights: SRH 287/3 vs Mumbai Indians", category: "Highlights", duration: "8:42", thumb: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=700&h=400&fit=crop" },
  { id: 2, title: "Travis Head's Record-Breaking Century — Every Six", category: "Highlights", duration: "5:10", thumb: "https://images.unsplash.com/photo-1626248801379-51a0748a5f96?w=700&h=400&fit=crop" },
  { id: 3, title: "Behind The Scenes: Squad Training Day", category: "Behind The Scenes", duration: "6:25", thumb: "https://images.unsplash.com/photo-1593766827228-8737b4534aa6?w=700&h=400&fit=crop" },
  { id: 4, title: "Pat Cummins On Leading SRH Into 2025", category: "Interviews", duration: "4:03", thumb: "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?w=700&h=400&fit=crop" },
  { id: 5, title: "Fan Reactions: 287 — The Highest Total Ever", category: "Fan Zone", duration: "2:58", thumb: "https://images.unsplash.com/photo-1601612629235-fb40d6ec02ff?w=700&h=400&fit=crop" },
  { id: 6, title: "Klaasen's Fastest Fifty — Full Replay", category: "Highlights", duration: "7:14", thumb: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=700&h=400&fit=crop" },
];

export const gallery = [
  { id: 1, category: "Match Day", image: gallery01 },
  { id: 2, category: "Victory", image: gallery02 },
  { id: 3, category: "Training", image: gallery03 },
  { id: 4, category: "Squad", image: gallery04 },
  { id: 5, category: "Match Day", image: gallery05 },
  { id: 6, category: "Victory", image: gallery06 },
  { id: 7, category: "Training", image: gallery07 },
  { id: 8, category: "Squad", image: gallery08 },
  { id: 9, category: "Match Day", image: gallery09 },
  { id: 10, category: "Victory", image: gallery10 },
  { id: 11, category: "Training", image: gallery11 },
  { id: 12, category: "Squad", image: gallery12 },
  { id: 13, category: "Match Day", image: gallery13 },
];

export const sponsors = {
  title: "Shree Cement",
  principal: ["BKT", "Kuhl", "Dream11"],
  official: ["AirAsia", "Netflix", "Amul"],
};

export const products = [
  { id: 1, name: "SRH Home Jersey 2025", category: "Jerseys", price: 1899, mrp: 2499, image: homeJerseyImg },
  { id: 2, name: "SRH Away Jersey 2025", category: "Jerseys", price: 1899, mrp: 2499, image: awayJerseyImg },
  { id: 3, name: "Sunrisers Classic Cap", category: "Caps", price: 599, mrp: 799, image: capImg },
  { id: 4, name: "Orange Army Hoodie", category: "Apparel", price: 2299, mrp: 2999, image: hoodieImg },
  { id: 5, name: "SRH Travel Mug", category: "Accessories", price: 449, mrp: 599, image: mugImg },
  { id: 6, name: "Mini Cricket Bat — Signed Replica", category: "Accessories", price: 1299, mrp: 1599, image: miniBatImg },
  { id: 7, name: "Sunrisers Kids Jersey", category: "Jerseys", price: 1299, mrp: 1699, image: kidsJerseyImg },
  { id: 8, name: "SRH Phone Case", category: "Accessories", price: 349, mrp: 499, image: phoneCaseImg },
];

export const ticketMatches = [
  { id: 1, teamA: "SRH", teamB: "CSK", date: "Apr 02, 2025", time: "7:30 PM IST", venue: "Rajiv Gandhi Stadium, Hyderabad" },
  { id: 2, teamA: "SRH", teamB: "KKR", date: "Apr 14, 2025", time: "7:30 PM IST", venue: "Rajiv Gandhi Stadium, Hyderabad" },
  { id: 3, teamA: "SRH", teamB: "RR", date: "Apr 27, 2025", time: "7:30 PM IST", venue: "Rajiv Gandhi Stadium, Hyderabad" },
];

export const ticketCategories = [
  { id: "general", name: "General Stand", price: 999, color: "#FFC857" },
  { id: "premium", name: "Premium Stand", price: 2499, color: "#FF6B00" },
  { id: "club", name: "Club House", price: 4999, color: "#FF914D" },
  { id: "hospitality", name: "Hospitality Box", price: 9999, color: "#111111" },
];

export const csrPrograms = [
  { id: 1, title: "Hyderabad Grassroots Cricket Program", desc: "Free coaching clinics for underprivileged children across Telangana, run in partnership with local academies.", image: "https://images.unsplash.com/photo-1593766827228-8737b4534aa6?w=700&h=450&fit=crop" },
  { id: 2, title: "SRH Girls' Cricket Initiative", desc: "Dedicated pathway programs encouraging young girls to take up the sport with access to grounds and mentorship.", image: "https://images.unsplash.com/photo-1606925797300-0b35e9d1794e?w=700&h=450&fit=crop" },
  { id: 3, title: "Orange Army Community Drives", desc: "Fan-led community service drives including tree plantations and school-kit donations across the city.", image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=700&h=450&fit=crop" },
];

export const communityTimeline = [
  { year: "2021", text: "Launched the Hyderabad Grassroots Cricket Program reaching 500+ children." },
  { year: "2022", text: "SRH Girls' Cricket Initiative expanded to 12 districts in Telangana." },
  { year: "2023", text: "Partnered with local schools to distribute 10,000+ sports kits." },
  { year: "2024", text: "Orange Army volunteers logged 5,000+ community service hours." },
];

export const faqs = [
  { q: "How do I purchase match tickets?", a: "Visit the Tickets page, select your match and seating category, then complete checkout through our official ticketing partner." },
  { q: "Where can I buy official SRH merchandise?", a: "All official merchandise is available on the Merchandise page, with delivery across India." },
  { q: "How can I join the Fan Zone rewards program?", a: "Click 'Join For Free' on the Fan Zone page to start earning Orange Points for watching content, voting in polls and attending matches." },
  { q: "Does SRH run youth cricket programs?", a: "Yes, see our Community page for details on the Hyderabad Grassroots Cricket Program and other youth initiatives." },
];

export const fanPoll = {
  question: "Who will be SRH's top run-scorer in IPL 2025?",
  totalVotes: 100,
  options: [
    { name: "Travis Head", pct: 38 },
    { name: "Abhishek Sharma", pct: 29 },
    { name: "Heinrich Klaasen", pct: 21 },
    { name: "Ishan Kishan", pct: 12 },
  ],
};

export const quizzes = [
  { id: 1, title: "SRH History Quiz", difficulty: "Medium", questions: 10, desc: "Test your knowledge of Sunrisers Hyderabad's IPL journey." },
  { id: 2, title: "IPL Records Challenge", difficulty: "Hard", questions: 8, desc: "How well do you know SRH's record-breaking 2024 season?" },
];

export const rewards = [
  { points: 5, action: "Watch a video" },
  { points: 10, action: "Vote in a poll" },
  { points: 50, action: "Buy merch" },
  { points: 100, action: "Attend a match" },
];

export const leaderboard = [
  { rank: 1, name: "Orange_Army_99", points: 12840 },
  { rank: 2, name: "HyderabadHurricane", points: 11920 },
  { rank: 3, name: "SunriserSiri", points: 10755 },
  { rank: 4, name: "CumminsFan30", points: 9810 },
  { rank: 5, name: "HeadStrong62", points: 9320 },
];

export const fanWall = [
  { id: 1, name: "Ravi T.", text: "287 runs! I was at the stadium and it still feels unreal. Forever Orange! 🧡", photo: "https://images.unsplash.com/photo-1607734834519-d8576ae60ea6?w=300&h=300&fit=crop" },
  { id: 2, name: "Sneha K.", text: "Travis Head's century at Wankhede was the best innings I've seen live. SRH till I die!", photo: "https://images.unsplash.com/photo-1601612629235-fb40d6ec02ff?w=300&h=300&fit=crop" },
  { id: 3, name: "Arjun M.", text: "Cummins leading from the front gives me so much confidence this season. #OrangeArmy", photo: "https://images.unsplash.com/photo-1606925797300-0b35e9d1794e?w=300&h=300&fit=crop" },
];

export const liveMatch = {
  status: "LIVE",
  teamA: { name: "SRH", score: "168/4", overs: "16.2" },
  teamB: { name: "RCB", score: "—", overs: "Yet to bat" },
  venue: "Chinnaswamy, Bengaluru",
  battingStats: [
    { name: "Travis Head", runs: 64, balls: 32, fours: 6, sixes: 4, sr: 200.0 },
    { name: "Abhishek Sharma*", runs: 38, balls: 21, fours: 3, sixes: 2, sr: 180.9 },
    { name: "Heinrich Klaasen*", runs: 12, balls: 8, fours: 1, sixes: 0, sr: 150.0 },
  ],
  bowlingStats: [
    { name: "Mohammed Siraj", overs: "4.0", maidens: 0, runs: 42, wickets: 1, economy: 10.5 },
    { name: "Yash Dayal", overs: "3.2", maidens: 0, runs: 38, wickets: 1, economy: 11.4 },
    { name: "Glenn Maxwell", overs: "2.0", maidens: 0, runs: 24, wickets: 0, economy: 12.0 },
  ],
  partnerships: [{ wicket: "3rd wicket", runs: 78, balls: 41 }],
  commentary: [
    "16.2 — FOUR! Head goes down the ground, races to his fifty in style.",
    "15.6 — SIX! Sharma clears long-on with ease.",
    "15.1 — Single taken, SRH rotating strike well.",
    "14.4 — Dot ball, good yorker from Siraj.",
  ],
};

export const auctionSummary = {
  headCoach: "Daniel Vettori",
  captain: "Pat Cummins",
  retentions: 17,
  auctionPicks: 8,
  retentionSpent: "₹99.5 Cr",
  auctionSpend: "₹20.05 Cr",
  purseLeft: "₹5.45 Cr",
  totalPlayers: "25 / 25",
};

export const auctionSquad = [
  {
    category: "Batter",
    players: [
      { id: "travis-head", name: "Travis Head", country: "AU", price: "₹6.8 Cr", retained: true, role: "Batter", blurb: "1,157 runs · SR 169", photo: travisHeadImg },
      { id: "aniket-verma", name: "Aniket Verma", country: "IN", price: "₹3.4 Cr", retained: false, role: "Batter", blurb: "Young top-order talent, new auction buy", photo: aniketVermaImg },
      { id: "smaran-ravichandran", name: "Smaran Ravichandran", country: "IN", price: "₹1.5 Cr", retained: true, role: "Batter", blurb: "Domestic keeper-batter", photo: smaranRavichandranImg },
    ],
  },
  {
    category: "Bowler",
    players: [
      { id: "pat-cummins", name: "Pat Cummins", country: "AU", price: "₹18.5 Cr", retained: true, role: "Bowler", blurb: "Captain · 79+ IPL wickets", photo: patCumminsImg },
      { id: "jaydev-unadkat", name: "Jaydev Unadkat", country: "IN", price: "₹2.4 Cr", retained: true, role: "Bowler", blurb: "Left-arm seamer, death-overs specialist", photo: jaydevUnadkatImg },
      { id: "eshan-malinga", name: "Eshan Malinga", country: "SL", price: "₹75 L", retained: false, role: "Bowler", blurb: "Raw-pace young quick, new auction buy", photo: eshanMalingaImg },
      { id: "shivam-mavi", name: "Shivam Mavi", country: "IN", price: "₹2.6 Cr", retained: false, role: "Bowler", blurb: "Fast-medium bowler, new auction buy", photo: shivamMaviImg },
      { id: "zeeshan-ansari", name: "Zeeshan Ansari", country: "IN", price: "₹30 L", retained: true, role: "Bowler", blurb: "Domestic leg-spinner", photo: zeeshanAnsariImg },
      { id: "sakib-hussain", name: "Sakib Hussain", country: "IN", price: "₹40 L", retained: true, role: "Bowler", blurb: "Domestic pacer for fast-bowling depth", photo: sakibHussainImg },
      { id: "onkar-tarmale", name: "Onkar Tarmale", country: "IN", price: "₹30 L", retained: true, role: "Bowler", blurb: "Domestic seamer", photo: onkarTarmaleImg },
      { id: "praful-hinge", name: "Praful Hinge", country: "IN", price: "₹20 L", retained: false, role: "Bowler", blurb: "Left-arm seamer, value pick", photo: prafulHingeImg },
      { id: "amit-kumar", name: "Amit Kumar", country: "IN", price: "₹20 L", retained: false, role: "Bowler", blurb: "Fast-medium bowler, new auction buy", photo: amitKumarImg },
      { id: "david", name: "David", country: "IN", price: "₹20 L", retained: true, role: "Bowler", blurb: "Reserve pace bowler", photo: davidImg },
    ],
  },
  {
    category: "All-Rounder",
    players: [
      { id: "abhishek-sharma", name: "Abhishek Sharma", country: "IN", price: "₹14 Cr", retained: true, role: "All-Rounder", blurb: "Vice-Captain · 1,823 runs", photo: abhishekSharmaImg },
      { id: "nitish-reddy", name: "Nitish Kumar Reddy", country: "IN", price: "₹6.2 Cr", retained: true, role: "All-Rounder", blurb: "Test century at MCG", photo: nitishReddyImg },
      { id: "liam-livingstone", name: "Liam Livingstone", country: "EN", price: "₹3.2 Cr", retained: false, role: "All-Rounder", blurb: "Power-hitting all-rounder, new auction buy", photo: liamLivingstoneImg },
      { id: "kamindu-mendis", name: "Kamindu Mendis", country: "SL", price: "₹1.8 Cr", retained: true, role: "All-Rounder", blurb: "Switch-hitting all-rounder", photo: kaminduMendisImg },
      { id: "harshal-patel", name: "Harshal Patel", country: "IN", price: "₹4.75 Cr", retained: true, role: "All-Rounder", blurb: "Former Purple Cap winner", photo: harshalPatelImg },
      { id: "harsh-dubey", name: "Harsh Dubey", country: "IN", price: "₹65 L", retained: false, role: "All-Rounder", blurb: "Emerging left-arm spinner, new auction buy", photo: harshDubeyImg },
      { id: "brydon-carse", name: "Brydon Carse", country: "EN", price: "₹3.6 Cr", retained: false, role: "All-Rounder", blurb: "Aggressive pace-bowling all-rounder, new buy", photo: brydonCarseImg },
      { id: "shivang-kumar", name: "Shivang Kumar", country: "IN", price: "₹30 L", retained: true, role: "All-Rounder", blurb: "Domestic all-rounder", photo: shivangKumarImg },
      { id: "krains-fultra", name: "Krains Fultra", country: "IN", price: "₹50 L", retained: true, role: "All-Rounder", blurb: "Versatile all-rounder", photo: krainsFultraImg },
    ],
  },
  {
    category: "Wicket-Keeper",
    players: [
      { id: "ishan-kishan", name: "Ishan Kishan", country: "IN", price: "₹11.25 Cr", retained: true, role: "Wicket-Keeper", blurb: "3,000+ IPL runs · power-hitting opener", photo: ishanKishanImg },
      { id: "heinrich-klaasen", name: "Heinrich Klaasen", country: "ZA", price: "₹23 Cr", retained: true, role: "Wicket-Keeper", blurb: "624 runs in 2026 · SR 176+", photo: heinrichKlaasenImg },
      { id: "salil-arora", name: "Salil Arora", country: "IN", price: "₹1.5 Cr", retained: true, role: "Wicket-Keeper", blurb: "Domestic keeper-batter adding depth", photo: salilAroraImg },
    ],
  },
];

export const pointsTable = [
  { pos: 1, team: "KKR", played: 14, won: 10, lost: 4, nrr: "+1.420", pts: 20 },
  { pos: 2, team: "RR", played: 14, won: 9, lost: 5, nrr: "+0.512", pts: 18 },
  { pos: 3, team: "SRH", played: 14, won: 9, lost: 5, nrr: "+0.330", pts: 18 },
  { pos: 4, team: "CSK", played: 14, won: 7, lost: 7, nrr: "+0.080", pts: 14 },
  { pos: 5, team: "RCB", played: 14, won: 7, lost: 7, nrr: "-0.110", pts: 14 },
];
