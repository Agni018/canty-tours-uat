'use strict';
const tours = [
  {
    "id": "kerala-hills-backwaters",
    "name": "Tea hills & backwater days",
    "destination": "Kerala",
    "region": "Kerala",
    "style": "Slow escapes",
    "styles": [
      "Mountains"
    ],
    "days": 4,
    "nights": 3,
    "image": "munnar",
    "alt": "Green tea plantations across the hills of Munnar",
    "places": [
      "Kochi",
      "Munnar",
      "Alappuzha"
    ],
    "route": "Kochi → Munnar → Alappuzha → Kochi",
    "description": "Two nights in the tea hills and one beside the backwaters. A small introduction to Kerala’s changing landscapes.",
    "pace": "A compact route with two longer transfer days",
    "ideal": "Couples & travellers on a short break",
    "highlights": "Munnar tea landscapes, Alappuzha backwaters",
    "itinerary": [
      "Arrive in Kochi early enough for the road transfer to Munnar. Settle in for the first of two nights in the hills; a late arrival needs an extra night in Kochi.",
      "Explore Munnar’s tea country, choosing a few local stops with your driver. Keep time for a quiet afternoon rather than trying to see everything.",
      "Leave Munnar for Alappuzha. Choose a waterside stay with an optional cruise, or discuss a houseboat night and its check-in time before booking.",
      "Return to Kochi for an afternoon or evening departure, allowing a generous buffer for the road transfer and airport check-in."
    ]
  },
  {
    "id": "kerala-classic",
    "name": "Kerala, a little of everything",
    "destination": "Kerala",
    "region": "Kerala",
    "style": "Culture & heritage",
    "styles": [
      "Mountains",
      "Family"
    ],
    "days": 5,
    "nights": 4,
    "image": "kerala",
    "alt": "A traditional boat on Kerala’s palm-lined backwaters",
    "places": [
      "Kochi",
      "Munnar",
      "Thekkady",
      "Alappuzha"
    ],
    "route": "Kochi → Munnar → Thekkady → Alappuzha → Kochi",
    "description": "Tea country, spice-growing hills and backwater life, brought together in a classic Kerala circuit.",
    "pace": "Varied days with three road transfers between stays",
    "ideal": "First-time visitors, couples & families",
    "highlights": "Munnar tea country, Thekkady spices, Alappuzha waterways",
    "itinerary": [
      "Meet in Kochi for an early arrival and transfer to Munnar. Check in for two nights; add a Kochi night if your arrival is late.",
      "Spend the day around Munnar’s tea landscapes, with local sightseeing shaped around your interests and opening days.",
      "Travel to Thekkady for an overnight stay. Discuss a spice-garden visit or a booked Periyar activity; tickets and availability need confirmation and wildlife sightings are not guaranteed.",
      "Continue to Alappuzha for one night. A backwater stay, day cruise or houseboat overnight can be arranged around arrival time and confirmed availability.",
      "Travel back to Kochi. Choose a later departure so the morning and road transfer do not feel rushed."
    ]
  },
  {
    "id": "kerala-family",
    "name": "Kerala with room to pause",
    "destination": "Kerala",
    "region": "Kerala",
    "style": "Family",
    "styles": [
      "Slow escapes",
      "Culture & heritage"
    ],
    "days": 6,
    "nights": 5,
    "image": "kerala",
    "alt": "A traditional boat on Kerala’s palm-lined backwaters",
    "places": [
      "Kochi",
      "Munnar",
      "Kumarakom"
    ],
    "route": "Kochi → Munnar → Kumarakom → Kochi",
    "description": "A gentle Kochi arrival, two hill-country nights and two nights by the water, with space for everyone’s pace.",
    "pace": "Fewer hotel changes, with two longer road transfers",
    "ideal": "Families & travellers who prefer a slower rhythm",
    "highlights": "Fort Kochi, Munnar tea hills, Kumarakom waterside time",
    "itinerary": [
      "Arrive in Kochi and stay overnight. If arrival time allows, take a short Fort Kochi walk; otherwise keep the day for settling in.",
      "Travel to Munnar with breaks along the way. Check in for two nights and leave the rest of the day open.",
      "Choose a small number of Munnar sights to suit your group. Balance tea-country exploring with time back at your stay.",
      "Transfer to Kumarakom for two nights at a waterside base. Keep the afternoon unplanned after the drive.",
      "Spend a flexible day by the backwaters. Discuss a short boat trip, local walk or simply time at your stay; activities depend on weather and availability.",
      "Return to Kochi for your onward journey, allowing for traffic and airport check-in."
    ]
  },
  {
    "id": "kerala-honeymoon",
    "name": "Just the two of you, in Kerala",
    "destination": "Kerala",
    "region": "Kerala",
    "style": "Honeymoon",
    "styles": [
      "Slow escapes"
    ],
    "days": 5,
    "nights": 4,
    "image": "munnar",
    "alt": "Tea gardens covering the green hills of Munnar",
    "places": [
      "Kochi",
      "Munnar",
      "Kumarakom"
    ],
    "route": "Kochi → Munnar → Kumarakom → Kochi",
    "description": "Two mornings in the tea hills, two evenings beside the water, and time together between the plans.",
    "pace": "Two bases with time to relax between transfers",
    "ideal": "Honeymooners & couples",
    "highlights": "Munnar mornings, Kumarakom backwaters, unhurried time together",
    "itinerary": [
      "Arrive in Kochi early enough to continue to Munnar for two nights. Add an arrival night in Kochi if flight timings make the hill drive too late.",
      "Enjoy a relaxed day in Munnar. Choose tea-country viewpoints and a local visit, leaving room for a leisurely lunch and time at your stay.",
      "Travel to Kumarakom and settle in for two nights. Discuss your preferred room and any special arrangements when requesting a quote.",
      "Keep a full day for the backwaters. A private cruise or other experience can be requested, subject to the operator, weather and availability.",
      "Return to Kochi for a later departure, with a comfortable transfer and airport buffer."
    ]
  },
  {
    "id": "kerala-hills-to-coast",
    "name": "From tea country to the coast",
    "destination": "Kerala",
    "region": "Kerala",
    "style": "Beaches",
    "styles": [
      "Culture & heritage"
    ],
    "days": 7,
    "nights": 6,
    "image": "varkala",
    "alt": "Varkala’s sandy shoreline below its coastal cliffs",
    "places": [
      "Kochi",
      "Munnar",
      "Alappuzha",
      "Varkala",
      "Thiruvananthapuram"
    ],
    "route": "Kochi → Munnar → Alappuzha → Varkala → Thiruvananthapuram",
    "description": "Old-town lanes, green hills and quiet waterways lead to two nights beside Varkala’s coast.",
    "pace": "A varied route with transfer days and a full coastal day",
    "ideal": "Couples, friends & travellers with a week to explore",
    "highlights": "Fort Kochi, Munnar, Alappuzha backwaters, Varkala coast",
    "itinerary": [
      "Arrive in Kochi and stay overnight. Explore a little of Fort Kochi if your arrival time allows.",
      "Travel to Munnar for two nights. Take the afternoon at an easy pace after the drive.",
      "Spend a full day in Munnar’s tea landscapes, choosing sightseeing around local conditions and your interests.",
      "Continue to Alappuzha for a backwater night. Confirm whether your plan uses a land-based stay or houseboat, including its boarding time.",
      "Travel south to Varkala and check in for two nights. Leave the evening open for coastal views.",
      "Enjoy a full day around Varkala. Beach access, swimming and boat activities depend on local conditions and safety advice.",
      "Transfer to Thiruvananthapuram for your departure with a generous airport buffer. A return to Kochi needs a longer transfer or an extra night."
    ]
  },
  {
    "id": "kerala-wayanad",
    "name": "A green escape to Wayanad",
    "destination": "Kerala",
    "region": "Kerala",
    "style": "Mountains",
    "styles": [
      "Family",
      "Slow escapes"
    ],
    "days": 4,
    "nights": 3,
    "image": "wayanad",
    "alt": "Forest-covered mountains in Wayanad, Kerala",
    "places": [
      "Kozhikode",
      "Wayanad"
    ],
    "route": "Kozhikode → Wayanad → Kozhikode",
    "description": "Three nights in one green hill-country base, with time for plantation scenery and your choice of local exploring.",
    "pace": "One base, winding hill drives & optional walking",
    "ideal": "Nature lovers, families & small groups",
    "highlights": "Wayanad landscapes, plantation country, flexible local days",
    "itinerary": [
      "Arrive in Kozhikode and transfer to your Wayanad base for three nights. Allow time for the winding hill roads and keep the evening quiet.",
      "Explore local landscapes and plantation country at your preferred pace. Agree a manageable set of stops based on where you are staying.",
      "Choose another local day or rest at your stay. Discuss any cave, forest or walking visits in advance: access, permits, opening days and suitable walking conditions must be confirmed.",
      "Return to Kozhikode for your onward journey, leaving a generous buffer for hill-road traffic and check-in."
    ]
  },
  {
    "id": "rajasthan",
    "name": "Royal roads of Rajasthan",
    "destination": "Rajasthan",
    "region": "West",
    "style": "Culture & heritage",
    "days": 7,
    "nights": 6,
    "image": "rajasthan",
    "alt": "Hawa Mahal’s ornate pink facade in Jaipur",
    "route": "Jaipur → Jodhpur → Udaipur",
    "description": "Pink-city lanes, blue-city stories and evenings beside the lake.",
    "pace": "Active sightseeing & longer road days",
    "ideal": "Culture lovers, couples & friends",
    "highlights": "Jaipur palaces, Jodhpur lanes, Udaipur lakes",
    "itinerary": [
      "Arrive in Jaipur and take an easy first walk through the Pink City.",
      "Spend the day exploring Jaipur’s forts, palaces and bazaars.",
      "Travel to Jodhpur, with stops to be agreed around your interests.",
      "Explore Mehrangarh and the older lanes of the Blue City.",
      "Journey to Udaipur and settle in for a lakeside evening.",
      "Discover Udaipur’s palaces and leave time for independent exploring.",
      "Depart from Udaipur or discuss an extension."
    ],
    "places": [
      "Jaipur",
      "Jodhpur",
      "Udaipur"
    ]
  },
  {
    "id": "ladakh",
    "name": "Under Ladakh’s big sky",
    "destination": "Ladakh",
    "region": "North",
    "style": "Mountains",
    "days": 7,
    "nights": 6,
    "image": "ladakh",
    "alt": "Blue Pangong Lake surrounded by Ladakh mountains",
    "route": "Leh → Nubra Valley → Pangong → Leh",
    "description": "Wide-open landscapes, mountain monasteries and a whole new perspective.",
    "pace": "High altitude; gradual acclimatisation",
    "ideal": "Mountain lovers & experienced travellers",
    "highlights": "Leh, Nubra landscapes, Pangong Lake",
    "itinerary": [
      "Arrive in Leh. Keep the day restful for acclimatisation.",
      "Another gentle day in Leh, with light local exploration if you feel well.",
      "Subject to conditions and permits, travel towards Nubra Valley.",
      "Explore Nubra at a comfortable pace, with agreed local stops.",
      "Continue towards Pangong only if routes, permits and acclimatisation allow.",
      "Return to Leh with time to rest.",
      "Depart from Leh. Build in flexibility for weather-related changes."
    ],
    "places": [
      "Leh",
      "Nubra Valley",
      "Pangong"
    ]
  },
  {
    "id": "goa",
    "name": "A little more Goa",
    "destination": "Goa",
    "region": "West",
    "style": "Beaches",
    "days": 4,
    "nights": 3,
    "image": "goa",
    "alt": "Palm trees along a beach in Goa",
    "route": "Panaji → Old Goa → South Goa",
    "description": "Colourful streets, coastal flavours and days that end by the sea.",
    "pace": "Relaxed, with optional sightseeing",
    "ideal": "Beach lovers, couples & small groups",
    "highlights": "Panaji lanes, Old Goa, quiet beach time",
    "itinerary": [
      "Arrive in Goa and settle into your preferred coastal base.",
      "Explore Panaji’s heritage streets and Old Goa, at your chosen pace.",
      "Leave a full day for South Goa’s beaches or an optional local experience.",
      "Enjoy a slow morning before your onward journey."
    ],
    "places": [
      "Panaji",
      "Old Goa",
      "South Goa"
    ]
  },
  {
    "id": "sikkim",
    "name": "Sikkim, softly explored",
    "destination": "Sikkim",
    "region": "Northeast",
    "style": "Mountains",
    "days": 6,
    "nights": 5,
    "image": "sikkim",
    "alt": "Colourful hillside buildings in Gangtok, Sikkim",
    "route": "Gangtok → Ravangla → Pelling",
    "description": "Monastery mornings, winding hill roads and mountain-town moments.",
    "pace": "Scenic hill drives & moderate walking",
    "ideal": "Nature lovers, couples & families",
    "highlights": "Gangtok, Ravangla, Pelling viewpoints",
    "itinerary": [
      "Arrive via your agreed gateway and transfer to Gangtok.",
      "Explore Gangtok’s town centre and nearby cultural sights.",
      "Enjoy a flexible day around Gangtok, with local visits agreed in advance.",
      "Travel towards Pelling via Ravangla, allowing time for scenic stops.",
      "Explore Pelling’s surroundings and viewpoints, weather permitting.",
      "Transfer to your departure point with generous time for hill-road travel."
    ],
    "places": [
      "Gangtok",
      "Ravangla",
      "Pelling"
    ]
  },
  {
    "id": "triangle",
    "name": "India’s golden beginning",
    "destination": "Golden Triangle",
    "region": "North",
    "style": "Culture & heritage",
    "days": 5,
    "nights": 4,
    "image": "taj",
    "alt": "Taj Mahal and its reflecting pool in Agra",
    "route": "Delhi → Agra → Jaipur",
    "description": "Three iconic cities. Centuries of stories. A memorable first chapter.",
    "pace": "Full days of sightseeing & road transfers",
    "ideal": "First-time visitors & heritage lovers",
    "highlights": "Delhi heritage, Taj Mahal, Jaipur",
    "itinerary": [
      "Arrive in Delhi and explore a few agreed city highlights.",
      "Travel to Agra with time for the city’s heritage sights.",
      "Visit the Taj Mahal on an operating day, then travel to Jaipur.",
      "Explore Jaipur’s forts, palaces and colourful bazaars.",
      "Depart from Jaipur, or discuss a return transfer to Delhi."
    ],
    "places": [
      "Delhi",
      "Agra",
      "Jaipur"
    ]
  }
];
const $ = (s) => document.querySelector(s);
const selected = new Set();
let destinationFilter = '';
let plannedJourney = null;
const moneyPhone = '918921611825';
const escapeHTML = (s) => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function notify(message){$('#toast').textContent=message;$('#toast').classList.add('visible');clearTimeout(notify.timer);notify.timer=setTimeout(()=>$('#toast').classList.remove('visible'),3500)}
function syncChips(){
 document.querySelectorAll('[data-style]').forEach(b=>{const active=b.dataset.style===$('#style').value;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active))});
 const scope=['Kerala','South'].includes($('#region').value)?'Kerala':'all';
 document.querySelectorAll('.scope-button[data-region]').forEach(b=>{const active=b.dataset.region===scope;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active))});
}
function renderTours(){
 const region=$('#region').value,style=$('#style').value,duration=$('#duration').value;
 $('#journey-eyebrow').textContent=region==='Kerala'||region==='South'?'YOUR KERALA STORY STARTS HERE':'YOUR NEXT INDIA STORY STARTS HERE';
 const matches=tours.filter(t=>(region==='all'||t.region===region||(region==='South'&&t.region==='Kerala'))&&(style==='all'||t.style===style||(t.styles||[]).includes(style))&&(duration==='all'||(duration==='short'?t.days<=5:t.days>=6))&&(!destinationFilter||t.destination===destinationFilter||t.places.includes(destinationFilter)));
 $('#tour-grid').innerHTML=matches.map(t=>`<article class="tour-card"><div class="tour-photo"><img src="assets/${t.image}.jpg" alt="${escapeHTML(t.alt)}" loading="lazy"><span class="tag">${escapeHTML(t.style)}</span></div><div class="tour-body"><p class="tour-meta">${t.nights} NIGHTS / ${t.days} DAYS &nbsp; · &nbsp; ${t.region==='Kerala'?'KERALA':t.region.toUpperCase()+' INDIA'}</p><h3>${escapeHTML(t.name)}</h3><p class="tour-route">${escapeHTML(t.route)}</p><p class="tour-desc">${escapeHTML(t.description)}</p><div class="tour-bottom"><span class="quote-label">Made for you<small>Price on request</small></span><button class="itinerary-button" data-detail="${t.id}">View journey ↗</button></div><label class="compare-label"><input type="checkbox" data-compare="${t.id}" ${selected.has(t.id)?'checked':''}> Compare this journey</label></div></article>`).join('');
 const scope=region==='all'?'across India':region==='Kerala'?'in Kerala':`in ${region} India`;
 const filters=[scope+(destinationFilter?' · Including '+destinationFilter:'')];
 if(style!=='all')filters.push(style);
 if(duration!=='all')filters.push(duration==='short'?'Up to 5 days':'6 days or more');
 $('#results-count').textContent=`${matches.length} journey idea${matches.length===1?'':'s'} ${filters.join(' · ')} · Select up to 3 to compare`;
 $('#no-results').hidden=matches.length>0;syncChips();
}
function resetFilters(){destinationFilter='';$('#region').value='Kerala';$('#style').value='all';$('#duration').value='all';renderTours()}
$('#finder').addEventListener('submit',e=>{e.preventDefault();destinationFilter='';renderTours();$('#journeys').scrollIntoView()});
document.querySelectorAll('[data-style]').forEach(b=>b.addEventListener('click',()=>{$('#style').value=b.dataset.style;renderTours()}));
document.querySelectorAll('[data-destination]').forEach(b=>b.addEventListener('click',()=>{
 destinationFilter=b.dataset.destination;
 const matchingTour=tours.find(t=>t.destination===destinationFilter||t.places.includes(destinationFilter));
 $('#region').value=matchingTour?matchingTour.region:'all';$('#style').value='all';$('#duration').value='all';
 renderTours();$('#journeys').scrollIntoView();
}));
document.querySelectorAll('[data-region]').forEach(b=>b.addEventListener('click',()=>{destinationFilter='';$('#region').value=b.dataset.region;$('#style').value='all';$('#duration').value='all';renderTours();$('#journeys').scrollIntoView()}));
$('#reset-filters').addEventListener('click',resetFilters);$('#clear-empty').addEventListener('click',resetFilters);
function updateCompare(){const n=selected.size;$('#compare-bar').hidden=!n;$('#compare-count').textContent=`${n} of 3 journeys selected`;$('#compare-open').disabled=n<2;document.querySelectorAll('[data-compare]').forEach(x=>x.checked=selected.has(x.dataset.compare))}
$('#tour-grid').addEventListener('change',e=>{const id=e.target.dataset.compare;if(!id)return;if(e.target.checked){if(selected.size>=3){e.target.checked=false;notify('You can compare up to 3 journeys. Remove one to add another.');return}selected.add(id)}else selected.delete(id);updateCompare()});
$('#compare-clear').addEventListener('click',()=>{selected.clear();updateCompare()});
function showDetails(id){const t=tours.find(x=>x.id===id);if(!t)return;$('#detail-content').innerHTML=`<img class="detail-image" src="assets/${t.image}.jpg" alt="${escapeHTML(t.alt)}"><p class="eyebrow">SAMPLE JOURNEY · ${t.nights} NIGHTS / ${t.days} DAYS</p><h2 id="detail-title">${escapeHTML(t.name)}</h2><p class="detail-route">${escapeHTML(t.route)}</p><p>${escapeHTML(t.description)}</p><h3>A possible itinerary</h3><ol class="detail-days">${t.itinerary.map((day,i)=>`<li><strong>DAY ${i+1}</strong><span>${escapeHTML(day)}</span></li>`).join('')}</ol><div class="detail-footer"><h3>Make this route your own</h3><p>${escapeHTML(t.pace)}. ${t.id==='ladakh'?'High-altitude travel needs individual planning; discuss suitability, acclimatisation, permits and road conditions before booking. ':''}This is a suggested route. Stays, activities, permits, transport, operating days and current availability must be confirmed in your quote. Price on request.</p></div><button class="button" data-plan="${t.id}">Personalise this journey <span>↗</span></button>`;$('#detail-dialog').setAttribute('aria-labelledby','detail-title');$('#detail-dialog').showModal()}
$('#tour-grid').addEventListener('click',e=>{const b=e.target.closest('[data-detail]');if(b)showDetails(b.dataset.detail)});
function selectForPlan(id){
 const t=tours.find(x=>x.id===id);if(!t)return;
 document.querySelectorAll('dialog[open]').forEach(d=>d.close());
 const destination=t.destination+' — '+t.name;
 $('#plan-destination').value=destination;plannedJourney={tour:t,destination};
 const length=$('#trip-form').elements.namedItem('tripLength');
 if(length)length.value=t.days<=4?'3–4 days':t.days<=6?'5–6 days':t.days<=8?'7–8 days':'9+ days';
 const occasion=$('#trip-form').elements.namedItem('occasion');
 if(occasion)occasion.value=t.style==='Family'?'Family holiday':t.style==='Honeymoon'?'Honeymoon / couple':'To discuss';
 $('#plan').scrollIntoView();$('#plan-destination').focus({preventScroll:true});
}
$('#plan-destination').addEventListener('input',()=>{if(plannedJourney&&$('#plan-destination').value.trim()!==plannedJourney.destination)plannedJourney=null});
document.addEventListener('click',e=>{const b=e.target.closest('[data-plan]');if(b)selectForPlan(b.dataset.plan)});
$('#compare-open').addEventListener('click',()=>{const items=tours.filter(t=>selected.has(t.id));if(items.length<2)return;const rows=[['Duration',t=>`${t.days} days / ${t.nights} nights`],['Route',t=>escapeHTML(t.route)],['Travel style',t=>escapeHTML(t.style)],['Pace',t=>escapeHTML(t.pace)],['A good fit for',t=>escapeHTML(t.ideal)],['Highlights',t=>escapeHTML(t.highlights)],['Price',()=> 'Personalised quote'],['Next step',t=>`<button class="button" data-plan="${t.id}">Plan this trip ↗</button>`]];$('#compare-content').innerHTML=`<div class="comparison-scroll" tabindex="0" aria-label="Journey comparison table; scroll horizontally on smaller screens"><table class="compare-table"><thead><tr><th scope="col">Your journey</th>${items.map(t=>`<th scope="col">${escapeHTML(t.name)}</th>`).join('')}</tr></thead><tbody>${rows.map(([name,value])=>`<tr><th scope="row">${name}</th>${items.map(t=>`<td>${value(t)}</td>`).join('')}</tr>`).join('')}</tbody></table></div><p class="fineprint">Sample routes, not confirmed packages. Your final itinerary and inclusions will be agreed in writing.</p>`;$('#compare-dialog').showModal()});
document.querySelectorAll('.close-dialog').forEach(b=>b.addEventListener('click',()=>b.closest('dialog').close()));
document.querySelectorAll('dialog').forEach(d=>{d.addEventListener('click',e=>{if(e.target===d){const r=d.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)d.close()}})});
$('#privacy-button').addEventListener('click',()=>$('#privacy-dialog').showModal());
$('#menu-toggle').addEventListener('click',()=>{const isOpen=$('#navigation').classList.toggle('open');$('#menu-toggle').setAttribute('aria-expanded',String(isOpen))});
$('#navigation').addEventListener('click',e=>{if(e.target.closest('a')){$('#navigation').classList.remove('open');$('#menu-toggle').setAttribute('aria-expanded','false')}});
const now=new Date();const today=`${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}-${String(now.getDate()).padStart(2,'0')}`;$('#travel-date').min=today;$('#year').textContent=now.getFullYear();
$('#trip-form').addEventListener('reset',()=>{plannedJourney=null});
$('#trip-form').addEventListener('submit',e=>{
 e.preventDefault();const f=e.currentTarget;if(!f.reportValidity())return;
 const data=new FormData(f),name=String(data.get('name')||'').trim(),destination=String(data.get('destination')||'').trim();
 if(!name||!destination){notify('Please add your name and a destination idea.');return}
 const chosen=plannedJourney&&destination===plannedJourney.destination?plannedJourney.tour:null;
 const notes=String(data.get('notes')||'').trim();
 const message=`Hi Canty Tours! I'd like to plan a holiday with you.\n\nName: ${name}\nDestination: ${destination}\n${chosen?`Sample route: ${chosen.route}\nSample itinerary: ${chosen.days} days / ${chosen.nights} nights\n`:''}Travel date: ${data.get('date')||'Flexible / to discuss'}\nPreferred trip length: ${data.get('tripLength')||'Flexible / to discuss'}\nOccasion: ${data.get('occasion')||'To discuss'}\nTravellers: ${data.get('travellers')}\nBudget per person: ${data.get('budget')}\nTravel style: ${data.get('pace')}\n${notes?'Other details: '+notes+'\n':''}\nPlease share itinerary options, availability, pricing and inclusions.`;
 const url=`https://wa.me/${moneyPhone}?text=${encodeURIComponent(message)}`;window.open(url,'_blank','noopener,noreferrer');
 const status=$('#form-status');status.replaceChildren(document.createTextNode('Your message is ready. If WhatsApp did not open, '));
 const link=document.createElement('a');link.href=url;link.target='_blank';link.rel='noopener noreferrer';link.textContent='open your prepared message here ↗';link.style.textDecoration='underline';status.append(link);
});
resetFilters();
